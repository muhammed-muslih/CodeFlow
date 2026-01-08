import { Button, Input, Divider } from "../ui";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { type LoginFormData, loginSchema } from "../../schemas/auth.schema";
import { loginApi } from "../../services/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export function LoginForm() {
  const { refreshUser } = useAuth();

  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);

      await loginApi(data);
      refreshUser();

      reset();
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleGithubLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/github`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
      <Button
        type="submit"
        className="w-full cursor-pointer"
        isLoading={isSubmitting}
      >
        Sign In
      </Button>
      {error && <span className="text-xs text-error">{error}</span>}

      <Divider />

      <Button
        type="button"
        variant="secondary"
        className="w-full flex items-center justify-center gap-2 cursor-pointer"
        onClick={handleGithubLogin}
      >
        <FaGithub size={18} />
        Continue with GitHub
      </Button>
    </form>
  );
}
