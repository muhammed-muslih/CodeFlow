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

interface CreateProjectModalProps {
  open: boolean;
  onclose: () => void;
}

export function CreateProjectModal({ open, onclose }: CreateProjectModalProps) {
  const [error, setError] = useState<string | null>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectCreationData>({
    resolver: zodResolver(createProjectSchema),
  });

  const onSubmit = async (data: ProjectCreationData) => {
    console.log(data);
  };

  return (
    <Modal open={open} onClose={onclose}>
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
          />

          <Input
            label="Description"
            placeholder="Optional description"
            {...register("description")}
            error={errors.description?.message}
          />

          <div className="flex justify-end gap-2 pt-2">
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                onclose();
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
