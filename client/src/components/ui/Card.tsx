import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-surface",
          "border border-border shadow-soft",
          "flex flex-col",
          className,
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
  },
);

Card.displayName = "Card";
