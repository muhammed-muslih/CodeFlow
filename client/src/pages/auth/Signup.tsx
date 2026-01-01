import { AuthLayout, SignupForm } from "../../components/auth";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start collaborating on CodeFlow"
    >
      <SignupForm />
    </AuthLayout>
  );
}
