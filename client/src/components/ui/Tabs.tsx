import { cn } from "@/lib/cn";

interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

export function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="flex gap-4 border-b border-border">
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
  );
}
