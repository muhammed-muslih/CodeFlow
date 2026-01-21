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
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">{name}</h3>
          <p className="mt-1 text-xs text-text-secondary line-clamp-2">
            {description}
          </p>
        </div>

        <Badge variant={role} className="capitalize">
          {role}
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {collaborators.map((user) => (
            <Avatar key={user} name={user} size={"xs"} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span>Updated {updatedAt}</span>
          <Button>Open</Button>
        </div>
      </div>
    </Card>
  );
}
