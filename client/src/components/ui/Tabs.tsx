import { cn } from "@/lib/cn";
import { IconButton } from "./IconButton";

interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
  icon?: React.ReactNode;
}

export function Tabs({ tabs, active, onChange, icon }: TabsProps) {
  return (
    <div className="flex justify-between items-center-safe border-b border-border">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={cn(
              "px-1 pb-2 text-sm font-medium transition cursor-pointer",
              active === tab
                ? "border-b-2 border-primary text-primary "
                : "text-text-secondary hover:text-text-primary",
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      {icon && <IconButton icon={icon} className="cursor-pointer bg-surface" />}
    </div>
  );
}
