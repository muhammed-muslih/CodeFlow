import { Route, Navigate } from "react-router";
import LoginPage from "../pages/auth/Login";
import SignupPage from "../pages/auth/Signup";

export function AuthRoutes() {
  return (
    <>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </>
  );
}
