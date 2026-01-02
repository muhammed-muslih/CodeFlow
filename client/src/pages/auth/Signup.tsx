import { AuthLayout, SignupForm } from "../../components/auth";
import { Link } from "react-router";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start collaborating on CodeFlow"
    >
      <SignupForm />
      <p className="mt-4 text-center text-xs  text-text-secondary">
        Already have an account?{" "}
        <Link to={"/auth/login"} className="text-primary hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
