import { Button, Input, Divider } from "../ui";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);

    login({ id: "1", name: "Muslih", email: "muslih@example.com" });
    navigate("/app", { replace: true });
  };

  const handleGithubLogin = () => {
    console.log("Login with Github");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="••••••••"
        required
      />
      <Button
        type="submit"
        className="w-full cursor-pointer"
        isLoading={loading}
      >
        Sign In
      </Button>

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
