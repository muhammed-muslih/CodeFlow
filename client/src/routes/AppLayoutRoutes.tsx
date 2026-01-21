import { Route } from "react-router";
import { Dashboard } from "@/pages/dashboard";

export function AppLayoutRoutes() {
  return (
    <>
      <Route index element={<Dashboard />} />
    </>
  );
}
