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
  owner: UserSummary;
  collaborators: Collaborator[];
  createdAt: string;
  updatedAt: string;
}
