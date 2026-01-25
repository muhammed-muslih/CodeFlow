import { ProjectGrid } from "@/components/dashboard/ProjectGrid";
import { useOutletContext } from "react-router";
import { type Project } from "@/types/project.types";

interface ProjectsContext {
  projects: Project[];
  loading: boolean;
}

export function Dashboard() {
  const { loading, projects } = useOutletContext<ProjectsContext>();

  if (loading) {
    return <div className="p-6">Loading projects…</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-semibold text-text-primary">
          Your Projects
        </h2>
        <p className="text-sm font-semibold text-text-secondary">
          Continue working on your active projects
        </p>
      </div>

      <ProjectGrid projects={projects} />
    </div>
  );
}
