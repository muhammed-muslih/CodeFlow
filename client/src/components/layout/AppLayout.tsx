import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/topbar/Topbar";
import { Outlet } from "react-router";
import { useProjects } from "@/hooks/useProjects";

export function AppLayout() {
  const projectsState = useProjects();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar createProject={projectsState.createProject} />
        <main className="flex-1 overflow-y-auto p-4 no-scrollbar">
          <Outlet context={projectsState} />
        </main>
      </div>
    </div>
  );
}
