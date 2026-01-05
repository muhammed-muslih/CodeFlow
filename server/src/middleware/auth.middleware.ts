import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError.js";
import { verifyAccessToken } from "@/services/token.service.js";

interface AuthRequest extends Request {
  user?: {
    id: string;
    email?: string;
  };
}

export const protect = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction,
) => {
  let token: string | undefined;

  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token && req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

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
