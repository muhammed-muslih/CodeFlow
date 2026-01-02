import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export function Card({
  title,
  description,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-surface",
        "border border-border shadow-soft",
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="border-b border-border px-6 py-4">
          {title && (
            <h2 className="text-lg font-semibold text-primary">{title}</h2>
          )}
          {description && (
            <p className="mt-1 text-sm text-text-secondary">{description}</p>
          )}
        </div>
      )}
      <div className="px-6 py-6">{children}</div>
    </div>
  );
}
