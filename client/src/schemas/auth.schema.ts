import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, "Min 8 characters")
  .regex(/[A-Z]/, "One uppercase letter required")
  .regex(/[a-z]/, "One lowercase letter required")
  .regex(/[0-9]/, "One number required");

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: passwordSchema,
});

export const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Invalid email address"),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // show error under confirm password
  });

export type LoginFormData = z.infer<typeof loginSchema>;

export type SignupFormData = z.infer<typeof signupSchema>;
