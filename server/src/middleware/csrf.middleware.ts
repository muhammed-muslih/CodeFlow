import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError.js";

export const csrfProtect = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const csrfCookie = req.cookies?.csrfToken;
  const csrfHeader = req.headers["x-csrf-token"];

  if (["GET", "HEAD", "OPTIONS"].includes(req.method)) {
    return next();
  }

  if (!csrfCookie || !csrfHeader) {
    return next(new AppError("CSRF token missing", 403));
  }

  if (csrfCookie !== csrfHeader) {
    return next(new AppError("Invalid CSRF token", 403));
  }

  next();
};
