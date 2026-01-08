import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { Button } from "../components/ui";
import { logoutApi } from "../services/auth.api";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const navigate = useNavigate();
  const { clearUser } = useAuth();

  const handleLogout = async () => {
    await logoutApi();
    clearUser();
    navigate("/auth/login", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-10 text-text-primary">Dashboard Protected</div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <AuthRoutes />
            </PublicRoute>
          }
        />

        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
