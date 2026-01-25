import { useParams } from "react-router";

export function ProjectPage() {
  const { projectId } = useParams();

  return (
    <div className="flex gap-6 flex-col h-full">
      <div className="pb-4 px-2 border-b border-border">
        <h2 className="text-lg font-semibold text-text-primary">
          Project Workspace
        </h2>
        <p className="text-xs text-text-secondary font-semibold">
          Project ID: {projectId}
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center text-text-secondary">
        Workspace coming soon 🚀
      </div>
    </div>
  );
}
