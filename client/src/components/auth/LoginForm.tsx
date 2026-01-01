import { Button, Input, Divider } from "../ui";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
