import { cn } from "../../lib/cn";

type BadgeVariant = "owner" | "editor" | "viewer";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  owner:
    "bg-[rgba(59,130,246,0.15)] text-[var(--color-primary)] border border-[rgba(59,130,246,0.3)]",
  editor:
    "bg-[rgba(34,197,94,0.15)] text-[var(--color-success)] border border-[rgba(34,197,94,0.3)]",
  viewer:
    "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
};

export function Badge({ children, variant = "viewer", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
