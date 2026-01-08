import { Input, Button, Divider } from "../ui";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "../../schemas/auth.schema";
import { signupApi } from "../../services/auth.api";
import { useAuth } from "../../context/AuthContext";

export function SignupForm() {
  const { refreshUser } = useAuth();

  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupFormData>({ resolver: zodResolver(signupSchema) });

  const onSubmit = async ({ confirmPassword, ...data }: SignupFormData) => {
    try {
      setError(null);

      await signupApi(data);
      refreshUser();

      reset();
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  const handleGithubSignup = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/github`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Full name"
        placeholder="Your name"
        {...register("name")}
        error={errors.name?.message}
      />

      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        {...register("password")}
        error={errors.password?.message}
      />

      <Input
        label="Confirm password"
        type="password"
        placeholder="••••••••"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <Button type="submit" className="w-full" isLoading={isSubmitting}>
        Create account
      </Button>
      {error && <span className="text-xs text-error">{error}</span>}

      <Divider />

      <Button
        type="button"
        variant="secondary"
        className="w-full flex items-center justify-center gap-2"
        onClick={handleGithubSignup}
      >
        <FaGithub size={18} />
        Sign up with GitHub
      </Button>
    </form>
  );
}
