import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "@/config/env.js";

export interface JwtPayload {
  userId: string;
  email?: string;
}

export const signAccessToken = (payload: JwtPayload): string => {
  const options: SignOptions = {
    expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
  };
  return jwt.sign(payload, env.JWT_SECRET, options);
};

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
};
