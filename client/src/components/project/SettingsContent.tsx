import { Card, Button, Input } from "../ui";
import { useState } from "react";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa6";
import { cn } from "@/lib/cn";

interface Props {
  name: string;
  description?: string;
  visibility: "public" | "private";
}

export function SettingsContent({ project }: { project: Props }) {
  const [projectInputDisabled, setProjectInputDisabled] = useState(true);
  const [descriptionInputDisabled, setDescriptionInputDisabled] =
    useState(true);
  const [visibilityEdit, setVisibilityEdit] = useState(false);
  const [visibility, setVisibility] = useState<"private" | "public">(
    project.visibility,
  );

  return (
    <div className="flex min-h-[60vh] w-full justify-center px-4">
      <div className="flex w-full max-w-3xl flex-col gap-6">
        <Card>
          <h3 className="mb-4 text-sm font-semibold">
            Edit project name or description
          </h3>
          <form action="" className="space-y-4">
            <div className="flex w-full items-end gap-3 flex-wrap">
              <div className="flex-1">
                <Input
                  label="Project name"
                  placeholder="My awesome project"
                  autoFocus
                  value={project.name}
                  autoComplete="off"
                  disabled={projectInputDisabled}
                />
              </div>

              {projectInputDisabled ? (
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    setProjectInputDisabled(false);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setProjectInputDisabled(true);
                  }}
                >
                  Save
                </Button>
              )}
            </div>

            <div className="flex w-full items-end gap-3 flex-wrap">
              <div className="flex-1">
                <Input
                  label="Description"
                  placeholder="Optional description"
                  value={project.description}
                  autoComplete="off"
                  disabled={descriptionInputDisabled}
                />
              </div>

              {descriptionInputDisabled ? (
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    setDescriptionInputDisabled(false);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setDescriptionInputDisabled(true);
                  }}
                >
                  Save
                </Button>
              )}
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold">Project visibility</h3>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={!visibilityEdit}
                    onClick={() => setVisibility("private")}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium border transition",
                      !visibilityEdit ? "cursor-not-allowed" : "cursor-pointer",
                      visibility === "private"
                        ? "bg-muted text-text-primary border-border"
                        : "text-text-secondary border-border hover:bg-muted/80",
                      !visibilityEdit &&
                        visibility !== "private" &&
                        "opacity-50",
                    )}
                  >
                    <RiGitRepositoryPrivateFill className="h-3.5 w-3.5" />
                    Private
                  </button>

                  <button
                    type="button"
                    disabled={!visibilityEdit}
                    onClick={() => setVisibility("public")}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium border transition",
                      !visibilityEdit ? "cursor-not-allowed" : "cursor-pointer",
                      visibility === "public"
                        ? "bg-muted text-text-primary border-border"
                        : "text-text-secondary border-border hover:bg-muted/80",
                      !visibilityEdit &&
                        visibility !== "public" &&
                        "opacity-50",
                    )}
                  >
                    <FaGlobe className="h-3.5 w-3.5" />
                    Public
                  </button>
                </div>

                {visibilityEdit ? (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setVisibilityEdit(false);
                    }}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      setVisibilityEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                )}
              </div>

              <p className="mt-2 text-xs text-text-secondary max-w-md">
                Public projects can be viewed by anyone with the link. Private
                projects are only accessible to collaborators.
              </p>
            </div>
          </form>
        </Card>

        <Card className="border border-error/30 flex flex-col">
          <h3 className="mb-1 text-sm font-semibold text-error">Danger Zone</h3>
          <p className="mb-4 text-sm text-text-secondary">
            This action cannot be undone.
          </p>
          <div className="flex justify-start">
            <Button
              variant="secondary"
              className="bg-error text-white hover:bg-error/90"
            >
              Delete Project
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
