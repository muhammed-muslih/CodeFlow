import { useState } from "react";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { Tabs } from "@/components/ui/Tabs";
import { OverviewContent } from "@/components/project/OverviewContent";
import { ActivitySidebar } from "@/components/project/ActivitySidebar";
import { SettingsContent } from "@/components/project/SettingsContent";
import { FaCode } from "react-icons/fa";
import { useParams } from "react-router";
import { useProject } from "@/hooks/useProject";

export function ProjectPage() {
  const { projectId } = useParams();
  const { error, loading, myRole, project } = useProject(projectId);

  const [tab, setTab] = useState<"Overview" | "Settings">("Overview");

  if (loading) return <div>Loading project...</div>;
  if (error) return <div>Error loading project</div>;
  if (!project) return <div>Project not found</div>;

  const isOwner = myRole === "owner";

  return (
    <div className="flex flex-col gap-6">
      <ProjectHeader project={project} myRole={myRole} />

      <Tabs
        tabs={isOwner ? ["Overview", "Settings"] : ["Overview"]}
        active={tab}
        onChange={(t) => setTab(t as any)}
        icon={<FaCode size={18} />}
      />

      {tab === "Overview" && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr]">
          <OverviewContent isOwner={isOwner} project={project} />
          <ActivitySidebar projectId={projectId} />
        </div>
      )}

      {tab === "Settings" && isOwner && <SettingsContent project={project} />}
    </div>
  );
}
