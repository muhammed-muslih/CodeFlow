import { Input, Button, Divider } from "../ui";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export function SignupForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleGithubSignup = () => {
    console.log("Signup with Github");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Full name" name="name" placeholder="Your name" required />

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

      <Input
        label="Confirm password"
        type="password"
        name="confirmPassword"
        placeholder="••••••••"
        required
      />
      <Button type="submit" className="w-full" isLoading={loading}>
        Create account
      </Button>

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
