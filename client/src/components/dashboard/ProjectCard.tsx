import { Card, Avatar, Button, Badge } from "../ui";
import { type Project } from "@/types/project.types";
import { useAuth } from "@/context/AuthContext";
import { formatDate } from "@/lib/formatDate";
import { FaUsers } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { user } = useAuth();

  const { name, description, collaborators, owner, updatedAt } = project;

  const isOwner = owner._id === user?._id;

  const collaborator = collaborators.find((c) => c.user._id === user?._id);

  const role = isOwner ? "owner" : (collaborator?.role ?? "viewer");

  return (
    <Card className="flex flex-col gap-4 transition hover:border-primary/40 hover:shadow-soft cursor-pointer">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-3">
          <h3 className="text-sm font-semibold text-text-primary truncate">
            {name}
          </h3>
          {description && (
            <p className="mt-1 line-clamp-2 text-xs text-text-secondary">
              {description}
            </p>
          )}
        </div>

        <Badge variant={role} className="capitalize">
          {role}
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        {collaborators.length > 0 ? (
          <div className="flex -space-x-2 items-center">
            {collaborators.slice(0, 5).map((c) => (
              <Avatar key={c.user._id} name={c.user.name} size={"xs"} />
            ))}
            {collaborators.length > 5 && (
              <span className="ml-3 text-sm text-text-secondary">
                +{collaborators.length - 5}
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <FaUsers size={14} />
            <span>No collaborators yet</span>
            <button
              type="button"
              className="rounded px-2 py-0.5 text-[11px] font-medium
               text-primary hover:bg-border transition cursor-pointer"
              disabled
            >
              Invite
            </button>
          </div>
        )}

        <div className="flex items-center gap-3">
          <span className="text-xs text-text-secondary">
            Updated {formatDate(updatedAt)}
          </span>
          <Button variant="primary" className="cursor-pointer">
            Open
          </Button>
        </div>
      </div>
    </Card>
  );
}
