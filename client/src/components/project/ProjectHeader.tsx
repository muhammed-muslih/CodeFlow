import { Badge } from "../ui";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa6";
import { IconButton } from "../ui";

interface Props {
  name: string;
  description?: string;
  role: "owner" | "editor" | "viewer";
  visibility: "public" | "private";
}

export function ProjectHeader({ name, description, role, visibility }: Props) {
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

        <div className="flex items-center gap-2">
          {/* Visibility */}
          <span
            className="text-text-secondary"
            title={
              visibility === "public" ? "Public project" : "Private project"
            }
          >
            {visibility === "public" ? (
              <IconButton icon={<FaGlobe className="h-4 w-4" />} />
            ) : (
              <IconButton
                icon={<RiGitRepositoryPrivateFill className="h-4 w-4" />}
              />
            )}
          </span>

          {/* Role */}
          <Badge variant={role} className="capitalize">
            {role}
          </Badge>
        </div>
      </div>
    </div>
  );
}
