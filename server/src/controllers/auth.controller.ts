import { Request, Response } from "express";
import { asyncHandler } from "@/utils/asyncHandler.js";
import {
  signupService,
  loginService,
  refreshAccessTokenService,
} from "@/services/auth.service.js";
import { getGitHubUser } from "@/services/github.service.js";
import { env } from "@/config/env.js";
import { generateCsrfToken } from "@/utils/csrf.js";
import { AppError } from "@/utils/AppError.js";

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const { user, accessToken, refreshToken } = await signupService(
    name,
    email,
    password,
  );

  const csrfToken = generateCsrfToken();

  res.cookie("csrfToken", csrfToken, {
    secure: env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(201).json({
    status: "success",
    data: { user },
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { user, accessToken, refreshToken } = await loginService(
    email,
    password,
  );

  const csrfToken = generateCsrfToken();

  res.cookie("csrfToken", csrfToken, {
    secure: env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    status: "success",
    data: { user },
  });
});

export const logout = asyncHandler(async (_req: Request, res: Response) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.clearCookie("csrfToken");

  res.status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
});

export const refreshToken = asyncHandler(
  async (req: Request, res: Response) => {
    const refreshToken = req.cookies?.refreshToken;

    const newAccessToken = refreshAccessTokenService(refreshToken);

    const csrfToken = generateCsrfToken();

    res.cookie("csrfToken", csrfToken, {
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.status(200).json({ status: "success" });
  },
);

//Browser shows GitHub login page
export const githubLogin = (_req: Request, res: Response) => {
  const githubAuthUrl =
    "https://github.com/login/oauth/authorize" +
    `?client_id=${env.GITHUB_CLIENT_ID}` +
    `&redirect_uri=${env.GITHUB_CALLBACK_URL}` +
    `&scope=user:email`;

  res.redirect(githubAuthUrl);
};

export const githubCallback = asyncHandler(
  async (req: Request, res: Response) => {
    const code = req.query?.code as string;

    if (!code) {
      throw new AppError("GitHub code missing", 400);
    }

    const githubUser = await getGitHubUser(code);

    res.status(200).json({
      status: "success",
      data: githubUser,
    });
  },
);
