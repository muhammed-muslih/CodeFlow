import { Router } from "express";
import {
  signup,
  login,
  logout,
  refreshToken,
} from "@/controllers/auth.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.post("/logout", logout);

export default router;
