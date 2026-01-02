import { Routes, Route, Navigate } from "react-router";
import LoginPage from "../pages/auth/Login";
import SignupPage from "../pages/auth/Signup";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
}
