import { Card, Avatar, Button, Badge } from "../ui";
import { FaUsers } from "react-icons/fa";

export function OverviewContent({ isOwner }: { isOwner: boolean }) {
  const collaborators: {
    id: number;
    name: string;
    email: string;
    role: "editor" | "viewer";
  }[] = [
    {
      id: 1,
      name: "David",
      email: "david@example.com",
      role: "editor",
    },
    {
      id: 2,
      name: "Emma",
      email: "emma@example.com",
      role: "viewer",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Project Info */}
      <Card>
        <h3 className="mb-4 text-sm font-semibold">Project Info</h3>
        <div className="flex items-center gap-3 mb-4">
          <Avatar name="Muhammed Muslih" />
          <div>
            <p className="text-sm font-medium">Muhammed Muslih</p>
            <p className="text-xs text-text-secondary">muslih@example.com</p>
          </div>

          <Badge variant="owner" className="ml-auto">
            Owner
          </Badge>
        </div>

        <div className="text-sm text-text-secondary space-y-1">
          <p>Created: Jan 20, 2026</p>
          <p>Last updated: 2 hours ago</p>
        </div>
      </Card>

      {/* Collaborators */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold">Collaborators</h3>
          {isOwner && (
            <button
              type="button"
              className="rounded px-2 py-0.5 text-[11px] font-medium
               text-primary hover:bg-border transition cursor-pointer"
              disabled
            >
              Invite
            </button>
          )}
        </div>

        {collaborators.length > 0 ? (
          collaborators.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between py-3 border-b border-border last:border-none"
            >
              <div className="flex items-center gap-3">
                <Avatar name={user.name} size="sm" />
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-text-secondary">{user.email}</p>
                </div>
              </div>

              <Badge variant={user.role} className="capitalize">
                {user.role}
              </Badge>
            </div>
          ))
        ) : (
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <FaUsers size={14} />
            No collaborators yet
          </div>
        )}
      </Card>

      {/* CTA */}
      <div className="flex justify-end">
        <Button variant="primary">Open Editor →</Button>
      </div>
    </div>
  );
}
