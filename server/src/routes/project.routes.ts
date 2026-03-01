import { Router } from "express";
import {
  createProject,
  getProjects,
  getProject,
} from "@/controllers/project.controller.js";
import { getProjectActivity } from "@/controllers/activity.controller.js";
import { validate } from "@/middleware/validate.middleware.js";
import { createProjectSchema } from "@/validators/project.schema.js";

const router = Router();

router.post("/", validate(createProjectSchema), createProject);
router.get("/", getProjects);
router.get("/:id", getProject);
router.get("/:id/activity", getProjectActivity);

export default router;
