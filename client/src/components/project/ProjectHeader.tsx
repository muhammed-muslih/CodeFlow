import { Badge } from "../ui";

interface Props {
  name: string;
  description?: string;
  role: "owner" | "editor" | "viewer";
}

export function ProjectHeader({ name, description, role }: Props) {
  return (
    <div className="border-b border-border pb-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-text-primary">{name}</h1>
          {description && (
            <p className="mt-1 text-sm font-semibold text-text-secondary">
              {description}
            </p>
          )}
        </div>
        <Badge variant={role}>{role}</Badge>
      </div>
    </div>
  );
}
