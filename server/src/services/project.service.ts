import { Project } from "@/models/project.model.js";
import { Types } from "mongoose";
import { AppError } from "@/utils/AppError.js";

export const createProject = async (
  userId: string,
  name: string,
  description?: string,
) => {
  const exists = await Project.findOne({ owner: userId, name });

  if (exists) {
    throw new AppError("Project name already exists", 409);
  }

  return Project.create({
    name,
    description,
    owner: new Types.ObjectId(userId),
    collaborators: [],
  });
};

export const getUserProjects = async (userId: string) => {
  return Project.find({
    $or: [{ owner: userId }, { "collaborators.user": userId }],
  })
    .sort({ updatedAt: -1 })
    .populate("owner", "name email avatar")
    .populate("collaborators.user", "name email avatar")
    .lean();
};
