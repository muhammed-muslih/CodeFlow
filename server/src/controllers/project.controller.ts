import { Request, Response } from "express";
import { asyncHandler } from "@/utils/asyncHandler.js";
import * as projectService from "@/services/project.service.js";
import { AppError } from "@/utils/AppError.js";

export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, description, visibility } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new AppError("Authentication required", 401);
    }

    const project = await projectService.createProject({
      userId,
      name,
      visibility,
      description,
    });

    res.status(201).json({
      status: "success",
      project,
    });
  },
);

export const getProjects = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    throw new AppError("Authentication required", 401);
  }

  const projects = await projectService.getProjects(userId);

  res.status(200).json({
    status: "success",
    projects,
  });
});

export const getProject = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user?.id;

  if (!userId) {
    throw new AppError("Authentication required", 401);
  }

  if (!id) {
    throw new AppError("Project ID is required", 400);
  }

  const data = await projectService.getProjectOverview(id, userId);

  res.status(200).json({
    status: "success",
    ...data,
  });
});
