import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";
import { AppError } from "@/utils/AppError.js";

export const validate =
  (schema: ZodType) => (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      const message = result.error.issues.map((e) => e.message).join(", ");

      return next(new AppError(message, 400));
    }
    next();
  };
