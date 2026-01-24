import mongoose, { Schema, HydratedDocument } from "mongoose";
import { ProjectType } from "@/types/project.types.js";

const projectSchema = new Schema<ProjectType>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    collaborators: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          enum: ["editor", "viewer"],
          default: "viewer",
        },
      },
    ],
  },
  { timestamps: true },
);

export type ProjectDocument = HydratedDocument<ProjectType>;
export const Project = mongoose.model<ProjectType>("Project", projectSchema);
