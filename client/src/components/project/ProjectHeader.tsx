import { Badge } from "../ui";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa6";
import { IconButton } from "../ui";
import { type ProjectRole } from "@/types/project.types";

interface Props {
  name: string;
  description?: string;
  visibility: "public" | "private";
}

export function ProjectHeader({
  project,
  myRole,
}: {
  project: Props;
  myRole: ProjectRole;
}) {
  const { name, visibility, description } = project;
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

          {/* myRole */}
          <Badge variant={myRole} className="capitalize">
            {myRole}
          </Badge>
        </div>
      </div>
    </div>
  );
}
