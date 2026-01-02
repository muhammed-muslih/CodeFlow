import { AuthLayout, LoginForm } from "../../components/auth";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to continue to CodeFlow">
      <LoginForm />
      <p className="mt-4 text-center text-xs  text-text-secondary">
        Don’t have an account?{" "}
        <Link to={"/auth/signup"} className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}
