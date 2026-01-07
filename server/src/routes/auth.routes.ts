import { Router } from "express";
import {
  signup,
  login,
  logout,
  refreshToken,
  githubCallback,
  githubLogin,
} from "@/controllers/auth.controller.js";
import { validate } from "@/middleware/validate.middleware.js";
import { signupSchema, loginSchema } from "@/validators/auth.schema.js";

const router = Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);
router.post("/refresh", refreshToken);
router.post("/logout", logout);
router.get("/github", githubLogin);
router.get("/github/callback", githubCallback);

export default router;
