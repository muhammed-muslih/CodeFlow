import type { Activity } from "@/types/project.types";

export function ActivityMessage({ activity }: { activity: Activity }) {
  const actorName = activity.actor?.name ?? "Someone";

  const Actor = (
    <span className="font-semibold text-text-primary">{actorName}</span>
  );

  switch (activity.type) {
    case "PROJECT_CREATED":
      return <>{Actor} created the project</>;

    case "PROJECT_DELETED":
      return <>{Actor} deleted the project</>;

    case "PROJECT_UPDATED":
      if (activity.meta.oldName && activity.meta.newName) {
        return (
          <>
            {Actor} renamed the project from{" "}
            <span className="italic text-text-secondary">
              "{activity.meta.oldName}"
            </span>{" "}
            to{" "}
            <span className="italic text-text-secondary">
              "{activity.meta.newName}"
            </span>
          </>
        );
      }
      return <>{Actor} updated the project</>;

    case "USER_INVITED":
      return (
        <>
          {Actor} invited{" "}
          <span className="font-medium text-primary">
            {activity.meta.email}
          </span>
        </>
      );

    case "USER_JOINED":
      return (
        <>
          <span className="font-semibold text-text-primary">
            {activity.meta.targetUser?.name ?? "A user"}
          </span>{" "}
          joined the project
        </>
      );

    case "ROLE_CHANGED":
      return (
        <>
          <span className="font-semibold text-text-primary">
            {activity.meta.targetUser?.name ?? "A user"}
          </span>{" "}
          became{" "}
          <span className="text-primary font-medium">{activity.meta.role}</span>
        </>
      );

    default:
      return <>Activity</>;
  }
}
