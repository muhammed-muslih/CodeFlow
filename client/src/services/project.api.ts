import { api } from "./api";
import { type CreateProjectPayload } from "@/types/project.types";

export const createProjectApi = async (payload: CreateProjectPayload) => {
  const res = await api.post("/projects", payload);
  return res.data.project;
};

export const getProjectsApi = async () => {
  const res = await api.get("/projects");
  return res.data.projects;
};
