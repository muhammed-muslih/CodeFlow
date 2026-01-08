import { Router } from "express";
import {
  signup,
  login,
  logout,
  refreshToken,
  githubCallback,
  githubLogin,
  getMe,
} from "@/controllers/auth.controller.js";
import { validate } from "@/middleware/validate.middleware.js";
import { signupSchema, loginSchema } from "@/validators/auth.schema.js";
import { protect as userAuth } from "@/middleware/auth.middleware.js";

const router = Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);

router.get("/github", githubLogin);
router.get("/github/callback", githubCallback);

router.post("/refresh", refreshToken);
router.post("/logout", logout);

router.get("/me", userAuth, getMe);

export default router;
