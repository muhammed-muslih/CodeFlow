import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        name="CodeFlow Editor"
        description="Real-time collaborative code editor"
        role="owner"
        collaborators={["Muslih", "Alex", "Sara"]}
        updatedAt="2h ago"
      />

      <ProjectCard
        name="API Server"
        description="Backend services for CodeFlow"
        role="editor"
        collaborators={["Muslih", "John"]}
        updatedAt="1 day ago"
      />

      <ProjectCard
        name="Microservice"
        description="Microservice CodeFlow"
        role="viewer"
        collaborators={["Muslih", "Sayyid"]}
        updatedAt="2 day ago"
      />
    </div>
  );
}
