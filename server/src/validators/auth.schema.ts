import { z } from "zod";

export const signupSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.email("Invalid email"),
    password: z.string().min(1, "Password is required"),
  }),
});
