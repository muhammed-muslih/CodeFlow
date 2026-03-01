import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true, // allows null for OAuth-only users
    },
    password: {
      type: String,
      select: false,
    },
    githubId: {
      type: String,
      unique: true,
      sparse: true,
    },
    avatar: {
      type: String,
    },
    provider: {
      type: String,
      enum: ["local", "github"],
      default: "local",
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
