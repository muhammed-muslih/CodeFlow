import { useEffect, useState } from "react";
import { getProjectApi } from "@/services/project.api";
import type { Project, ProjectRole } from "@/types/project.types";

export function useProject(projectId?: string) {
  const [project, setProject] = useState<Project | null>(null);
  const [myRole, setMyRole] = useState<ProjectRole>("guest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) return;

    const fetchProject = async () => {
      try {
        setLoading(true);
        const data = await getProjectApi(projectId);
        setProject(data?.project);
        setMyRole(data?.myRole);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  return { project, myRole, loading, error };
}
