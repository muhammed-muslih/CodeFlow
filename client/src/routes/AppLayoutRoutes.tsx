import { Route } from "react-router";
import { Dashboard } from "@/pages/dashboard";
import { ProjectPage } from "@/pages/projectPage";

export function AppLayoutRoutes() {
  return (
    <>
      <Route index element={<Dashboard />} />
      <Route path="projects/:projectId" element={<ProjectPage />} />
    </>
  );
}
