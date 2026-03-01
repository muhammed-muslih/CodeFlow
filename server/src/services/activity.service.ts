import Activity from "@/models/activity.model.js";

export const logActivity = async ({
  projectId,
  actorId,
  type,
  meta = {},
}: {
  projectId: string;
  actorId?: string;
  type: string;
  meta?: Record<string, any>;
}) => {
  await Activity.create({ project: projectId, actor: actorId, type, meta });
};

export const getProjectActivities = async (projectId: string) => {
  return Activity.find({ project: projectId })
    .populate("actor", "name email")
    .populate("meta.targetUser", "name email")
    .sort({ createdAt: -1 })
    .limit(30)
    .lean();
};
