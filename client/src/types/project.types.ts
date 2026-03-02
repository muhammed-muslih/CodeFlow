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

export type ProjectRole = "owner" | "editor" | "viewer" | "guest";

export interface Activity {
  _id: string;
  actor?: { _id: string; name: string; email: string };
  type: string;
  meta?: any;
  createdAt: string;
}
