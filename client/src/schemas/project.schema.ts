import { z } from "zod";

export const createProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Project name must be at least 3 characters")
    .max(100, "Project name must be at most 100 characters"),

  description: z
    .string()
    .trim()
    .max(500, "Description must be at most 500 characters")
    .optional(),
});

export type ProjectCreationData = z.infer<typeof createProjectSchema>;
