import { AppError } from "@/utils/AppError.js";
import { hashPassword, verifyPassword } from "./password.service.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "./token.service.js";
import { User } from "@/models/User.js";

export const signupService = async (
  name: string,
  email: string,
  password: string,
) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    // 409 = Conflict (client error)
    throw new AppError("Email already exists", 409);
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({ name, email, password: hashedPassword });

  const accessToken = signAccessToken({
    userId: user._id.toString(),
    email: user.email,
  });

  const refreshToken = signRefreshToken({
    userId: user._id.toString(),
    email: user.email,
  });

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    accessToken,
    refreshToken,
  };
};

export const loginService = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    // 401 = Unauthorized
    throw new AppError("Invalid credentials", 401);
  }

  const isValid = await verifyPassword(user.password, password);

  if (!isValid) {
    throw new AppError("Invalid credentials", 401);
  }

  const accessToken = signAccessToken({
    userId: user._id.toString(),
    email: user.email,
  });

  const refreshToken = signRefreshToken({
    userId: user._id.toString(),
    email: user.email,
  });

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    accessToken,
    refreshToken,
  };
};

export const refreshAccessTokenService = (refreshToken: string) => {
  if (!refreshToken) {
    throw new AppError("Refresh token missing", 401);
  }

  const decoded = verifyRefreshToken(refreshToken);

  return signAccessToken({
    userId: decoded.userId,
    email: decoded.email,
  });
};
