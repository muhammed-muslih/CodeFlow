import { useEffect, useState } from "react";
import { createProjectApi, getProjectsApi } from "@/services/project.api";
import { type Project } from "@/types/project.types";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjectsApi();
      setProjects(data);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (payload: {
    name: string;
    description?: string;
  }) => {
    const project = await createProjectApi(payload);
    setProjects((prev) => [project, ...prev]);
    return project;
  };

  return { projects, loading, createProject, refetch: fetchProjects };
}
