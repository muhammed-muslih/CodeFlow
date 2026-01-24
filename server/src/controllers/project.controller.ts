import { Request, Response } from "express";
import { asyncHandler } from "@/utils/asyncHandler.js";
import * as projectService from "@/services/project.service.js";
import { AppError } from "@/utils/AppError.js";

export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new AppError("Unauthorized", 401);
    }

    const project = await projectService.createProject(
      userId,
      name,
      description,
    );

    res.status(201).json({
      status: "success",
      project,
    });
  },
);

export const getUserProjects = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      throw new AppError("Unauthorized", 401);
    }

    const projects = await projectService.getUserProjects(userId);

    res.status(200).json({
      status: "success",
      projects,
    });
  },
);
