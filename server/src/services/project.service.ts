import { Project } from "@/models/project.model.js";
import { Types } from "mongoose";
import { AppError } from "@/utils/AppError.js";
import { PopulatedProject } from "@/types/project.types.js";

export const createProject = async ({
  userId,
  name,
  visibility,
  description,
}: {
  userId: string;
  name: string;
  visibility: "private" | "public";
  description?: string;
}) => {
  const exists = await Project.findOne({ owner: userId, name });

  if (exists) {
    throw new AppError("Project name already exists", 409);
  }

  return Project.create({
    name,
    description,
    owner: new Types.ObjectId(userId),
    collaborators: [],
    visibility,
  });
};

export const getUserProjects = async (userId: string) => {
  return Project.find({
    $or: [
      { visibility: "public" },
      { owner: userId },
      { "collaborators.user": userId },
    ],
  })
    .sort({ updatedAt: -1 })
    .populate("owner", "name email avatar")
    .populate("collaborators.user", "name email avatar")
    .lean<PopulatedProject>();
};

export const getProjectOverview = async (projectId: string, userId: string) => {
  const project = await Project.findOne({
    _id: projectId,
    $or: [
      { visibility: "public" },
      { owner: userId },
      { "collaborators.user": userId },
    ],
  })
    .populate("owner", "name email avatar")
    .populate("collaborators.user", "name email avatar")
    .lean<PopulatedProject>();

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  let myRole: "owner" | "editor" | "viewer" | "guest" = "guest";

  if (project.owner._id.toString() === userId) {
    myRole = "owner";
  } else {
    const collab = project.collaborators.find(
      (c) => c.user._id.toString() === userId,
    );

    if (collab) myRole = collab.role;
  }

  return {
    project,
    myRole,
  };
};
