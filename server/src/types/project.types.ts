import { Types } from "mongoose";

interface Collaborator {
  user: Types.ObjectId;
  role: "editor" | "viewer";
}

export interface ProjectType {
  name: string;
  description?: string;
  owner: Types.ObjectId;
  collaborators: Collaborator[];
  visibility: "private" | "public";
}

export interface PopulatedUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  avatar?: string;
}

export interface PopulatedProject {
  owner: PopulatedUser;
  collaborators: {
    user: PopulatedUser;
    role: "editor" | "viewer";
  }[];
}
