import { Router } from "express";
import {
  createProject,
  getUserProjects,
} from "@/controllers/project.controller.js";
import { validate } from "@/middleware/validate.middleware.js";
import { createProjectSchema } from "@/validators/project.schema.js";

const router = Router();

router.post("/", validate(createProjectSchema), createProject);
router.get("/", getUserProjects);

export default router;
