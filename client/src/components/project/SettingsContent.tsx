import { Card, Button, Input } from "../ui";
import { useState } from "react";

export function SettingsContent() {
  const [projectInputDisabled, setProjectInputDisabled] = useState(true);
  const [descriptionInputDisabled, setDescriptionInputDisabled] =
    useState(true);

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
                  value="CodeFlow Backend"
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
                  value={"Auth, collaboration & real-time sync services"}
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
          </form>
        </Card>

        <Card className="border border-error/30">
          <h3 className="mb-1 text-sm font-semibold text-error">Danger Zone</h3>
          <p className="mb-4 text-sm text-text-secondary">
            This action cannot be undone.
          </p>
          <Button
            variant="secondary"
            className="bg-error text-white hover:bg-error/90"
          >
            Delete Project
          </Button>
        </Card>
      </div>
    </div>
  );
}
