import { Types } from "mongoose";

export interface ProjectType {
  name: string;
  description?: string;
  owner: Types.ObjectId;
  collaborators: Types.ObjectId[];
}
