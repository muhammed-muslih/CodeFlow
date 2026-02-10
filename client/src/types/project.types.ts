import { type UserSummary } from "./user.types";

export type CollaboratorRole = "editor" | "viewer";

export interface Collaborator {
  user: UserSummary;
  role: CollaboratorRole;
}

export interface Project {
  _id: string;
  name: string;
  description?: string;
  visibility: "private" | "public";
  owner: UserSummary;
  collaborators: Collaborator[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectPayload {
  name: string;
  description?: string;
  visibility: "private" | "public";
}
