import { ProjectGrid } from "@/components/dashboard/ProjectGrid";

export interface Project {
  id: string;
  name: string;
  description: string;
  role: "owner" | "editor" | "viewer";
  collaborators: string[];
  updatedAt: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "CodeFlow Editor",
    description:
      "A real-time collaborative code editor with live cursors and chat.",
    role: "owner",
    collaborators: ["Muslih", "Alex", "Sara", "John"],
    updatedAt: "2 hours ago",
  },
  {
    id: "2",
    name: "API Server",
    description:
      "Backend services for authentication, collaboration, and syncing.",
    role: "editor",
    collaborators: ["Muslih", "David"],
    updatedAt: "1 day ago",
  },
  {
    id: "3",
    name: "Landing Website",
    description:
      "Marketing website for CodeFlow built with modern UI and animations.",
    role: "owner",
    collaborators: ["Muslih"],
    updatedAt: "3 days ago",
  },
  {
    id: "4",
    name: "Realtime Sync Engine",
    description: "CRDT-based real-time sync engine using WebSockets and Yjs.",
    role: "viewer",
    collaborators: ["Muslih", "Emma", "Noah"],
    updatedAt: "5 days ago",
  },
  {
    id: "5",
    name: "Design System",
    description: "Reusable UI components and theme tokens for CodeFlow.",
    role: "editor",
    collaborators: ["Muslih", "Liam"],
    updatedAt: "1 week ago",
  },
];

export function Dashboard() {
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
