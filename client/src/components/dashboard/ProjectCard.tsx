import { Card, Avatar, Button, Badge } from "../ui";

interface ProjectCardProps {
  name: string;
  description: string;
  role: "owner" | "editor" | "viewer";
  collaborators: string[];
  updatedAt: string;
}

export function ProjectCard({
  name,
  description,
  collaborators,
  role,
  updatedAt,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col gap-4 transition hover:border-primary/40 hover:shadow-soft cursor-pointer">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-3">
          <h3 className="text-sm font-semibold text-text-primary truncate">
            {name}
          </h3>
          <p className="mt-1 text-xs text-text-secondary line-clamp-2">
            {description}
          </p>
        </div>

        <Badge variant={role} className="capitalize">
          {role}
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2 items-center">
          {collaborators.slice(0, 5).map((user) => (
            <Avatar key={user} name={user} size={"xs"} />
          ))}
          {collaborators.length > 5 && (
            <span className="ml-3 text-sm text-text-secondary">
              +{collaborators.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-text-secondary">
            Updated {updatedAt}
          </span>
          <Button variant="primary" className="cursor-pointer">
            Open
          </Button>
        </div>
      </div>
    </Card>
  );
}
