import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppLayoutRoutes } from "./AppLayoutRoutes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <Outlet />
            </PublicRoute>
          }
        >
          {AuthRoutes()}
        </Route>

        {/* APP */}
        <Route
          path="/app"
          element={
            // <ProtectedRoute>
            <AppLayout />
            // </ProtectedRoute>
          }
        >
          {AppLayoutRoutes()}
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
