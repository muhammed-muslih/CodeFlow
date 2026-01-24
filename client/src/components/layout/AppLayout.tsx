import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/topbar/Topbar";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4 no-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
