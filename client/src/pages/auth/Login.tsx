import { AuthLayout, LoginForm } from "../../components/auth";

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to continue to CodeFlow">
      <LoginForm />
    </AuthLayout>
  );
}
