import { ProjectCard } from "./ProjectCard";
import { type Project } from "@/types/project.types";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border p-10 text-center ">
        <p className="text-sm text-text-secondary">No projects yet</p>
      </div>
    );
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
