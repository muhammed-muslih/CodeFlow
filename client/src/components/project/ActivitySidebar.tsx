import { Card } from "../ui";

const activities = [
  { id: 3, text: "Initial setup completed", time: "10m ago" },
  { id: 2, text: "Muslih joined as Owner", time: "1h ago" },
  { id: 1, text: "Project created", time: "2h ago" },
  { id: 3, text: "Initial setup completed", time: "10m ago" },
];

export function ActivitySidebar() {
  return (
    <Card className="h-fit">
      <h3 className="mb-4 text-sm font-semibold text-text-primary">Activity</h3>

      <ul className="space-y-3 text-sm text-text-secondary">
        {activities.map((item) => (
          <li key={item.id} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-border shrink-0" />

            <div className="flex flex-col">
              <p className="text-sm text-text-primary">{item.text}</p>
              <span className="text-xs text-text-secondary">{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
