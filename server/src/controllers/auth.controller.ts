import { Request, Response } from "express";
import { asyncHandler } from "@/utils/asyncHandler.js";
import { signupService, loginService } from "@/services/auth.service.js";

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const result = await signupService(name, email, password);

  res.status(201).json({
    status: "success",
    data: result,
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await loginService(email, password);

  res.status(200).json({
    status: "success",
    data: result,
  });
});
