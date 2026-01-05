import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError.js";
import { env } from "@/config/env.js";
import { logger } from "@/utils/logger.js";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;

  const message =
    err instanceof AppError ? err.message : "Internal Server Error";

  const status = err instanceof AppError ? err.status : "error";

  if (!(err instanceof AppError)) {
    logger.error(err);
  }

  res.status(statusCode).json({
    status,
    message,
    ...(env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
