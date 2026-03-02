import { useEffect, useState } from "react";
import { getProjectActivitiesApi } from "@/services/project.api";
import { type Activity } from "@/types/project.types";

export function useProjectActivity(projectId?: string) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectId) {
      setLoading(false);
      return;
    }

    const fetchActivities = async () => {
      const data = await getProjectActivitiesApi(projectId);
      setActivities(data);
      setLoading(false);
    };

    fetchActivities();
  }, [projectId]);

  return { activities, loading };
}
