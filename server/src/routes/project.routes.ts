import { Router } from "express";
import {
  createProject,
  getUserProjects,
  getProject,
} from "@/controllers/project.controller.js";
import { validate } from "@/middleware/validate.middleware.js";
import { createProjectSchema } from "@/validators/project.schema.js";

const router = Router();

router.post("/", validate(createProjectSchema), createProject);
router.get("/", getUserProjects);
router.get("/:id", getProject);

export default router;
