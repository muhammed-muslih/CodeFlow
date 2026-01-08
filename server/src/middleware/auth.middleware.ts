import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError.js";
import { verifyAccessToken } from "@/services/token.service.js";

export const protect = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    return next(new AppError("Authentication required.", 401));
  }

  try {
    const decoded = verifyAccessToken(token);

    req.user = { id: decoded.userId, email: decoded.email };

    next();
  } catch (error) {
    return next(new AppError("Invalid or expired token.", 401));
  }
};
