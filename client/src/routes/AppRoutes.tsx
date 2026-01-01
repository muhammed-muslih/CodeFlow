import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthRoutes } from "./AuthRoutes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AuthRoutes />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
