import { Router } from "express";
import {
  signup,
  login,
  logout,
  refreshToken,
} from "@/controllers/auth.controller.js";
import { validate } from "@/middleware/validate.middleware.js";
import { signupSchema, loginSchema } from "@/validators/auth.schema.js";

const router = Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);
router.post("/refresh", refreshToken);
router.post("/logout", logout);

export default router;
