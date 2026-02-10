import { Modal } from "./Modal";
import { Input } from "../ui";
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import {
  createProjectSchema,
  type ProjectCreationData,
} from "@/schemas/project.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa6";
import { cn } from "@/lib/cn";

interface CreateProjectModalProps {
  open: boolean;
  onclose: () => void;
  onCreate: (payload: ProjectCreationData) => Promise<void>;
}

export function CreateProjectModal({
  open,
  onclose,
  onCreate,
}: CreateProjectModalProps) {
  const [error, setError] = useState<string | null>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<ProjectCreationData>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      visibility: "private",
    },
  });

  const visibility = watch("visibility");

  const onSubmit = async (data: ProjectCreationData) => {
    try {
      setError(null);
      console.log(data);

      await onCreate(data);
      onclose();
      reset();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create project");
    }
  };

  const closeModalAndResetForm = () => {
    onclose();
    reset();
  };

  return (
    <Modal open={open} onClose={closeModalAndResetForm}>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">
            Create Project
          </h2>
          <p className="text-sm text-text-secondary">
            Start a new collaborative workspace
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <Input
            label="Project name"
            placeholder="My awesome project"
            autoFocus
            {...register("name")}
            error={errors.name?.message}
            autoComplete="off"
          />

          <Input
            label="Description"
            placeholder="Optional description"
            {...register("description")}
            error={errors.description?.message}
            autoComplete="off"
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">
              Project visibility
            </label>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => setValue("visibility", "private")}
                type="button"
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium border transition cursor-pointer",
                  visibility === "private"
                    ? "bg-muted text-text-primary border-border"
                    : "text-text-secondary border-border hover:bg-muted/80",
                )}
              >
                <RiGitRepositoryPrivateFill className="h-3.5 w-3.5" />
                Private
              </button>
              <button
                onClick={() => setValue("visibility", "public")}
                type="button"
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium border transition cursor-pointer",
                  visibility === "public"
                    ? "bg-muted text-text-primary border-border"
                    : "text-text-secondary border-border hover:bg-muted/80",
                )}
              >
                <FaGlobe className="h-3.5 w-3.5" />
                Public
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                closeModalAndResetForm();
              }}
            >
              Cancel
            </Button>
            <Button type="submit" isLoading={isSubmitting}>
              Create
            </Button>
          </div>
          {error && <span className="text-xs text-error">{error}</span>}
        </form>
      </div>
    </Modal>
  );
}
