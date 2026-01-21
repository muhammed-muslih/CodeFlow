import { ProjectGrid } from "@/components/dashboard/ProjectGrid";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-text-primary">Your Projects</h2>

      <ProjectGrid />
    </div>
  );
}
