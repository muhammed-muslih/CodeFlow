import { Modal } from "./Modal";
import { Input } from "../ui";
import { Button } from "../ui";

interface CreateProjectModalProps {
  open: boolean;
  onclose: () => void;
}

export function CreateProjectModal({ open, onclose }: CreateProjectModalProps) {
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

        <form action="" className="flex flex-col gap-3">
          <Input
            label="Project name"
            placeholder="My awesome project"
            autoFocus
          />

          <Input label="Description" placeholder="Optional description" />

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
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
