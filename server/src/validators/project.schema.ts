import { z } from "zod";

export const createProjectSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(1, "Project name is required")
      .max(100, "Project name must be at most 100 characters"),

    description: z
      .string()
      .trim()
      .max(500, "Description must be at most 500 characters")
      .optional(),
  }),
});
