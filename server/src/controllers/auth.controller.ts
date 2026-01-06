import { Request, Response } from "express";
import { asyncHandler } from "@/utils/asyncHandler.js";
import { signupService, loginService } from "@/services/auth.service.js";
import { env } from "@/config/env.js";

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const { user, token } = await signupService(name, email, password);

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.status(201).json({
    status: "success",
    data: { user },
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { user, token } = await loginService(email, password);

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  res.status(200).json({
    status: "success",
    data: { user },
  });
});

export const logout = asyncHandler(async (_req: Request, res: Response) => {
  res.clearCookie("accessToken");

  res.status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
});
