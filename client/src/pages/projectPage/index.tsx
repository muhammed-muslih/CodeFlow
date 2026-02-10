import { useState } from "react";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { Tabs } from "@/components/ui/Tabs";
import { OverviewContent } from "@/components/project/OverviewContent";
import { ActivitySidebar } from "@/components/project/ActivitySidebar";
import { SettingsContent } from "@/components/project/SettingsContent";
import { FaCode } from "react-icons/fa";

export function ProjectPage() {
  const [tab, setTab] = useState<"Overview" | "Settings">("Overview");

  const isOwner = true;

  const project = {
    name: "CodeFlow Backend",
    description: "Auth, collaboration & real-time sync services",
    role: "owner" as const,
    visibility: "private" as const,
  };

  return (
    <div className="flex flex-col gap-6">
      <ProjectHeader {...project} />

      <Tabs
        tabs={isOwner ? ["Overview", "Settings"] : ["Overview"]}
        active={tab}
        onChange={(t) => setTab(t as any)}
        icon={<FaCode size={18} />}
      />

      {tab === "Overview" && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr]">
          <OverviewContent isOwner={isOwner} visibility={project.visibility} />
          <ActivitySidebar />
        </div>
      )}

      {tab === "Settings" && isOwner && <SettingsContent />}
    </div>
  );
}
