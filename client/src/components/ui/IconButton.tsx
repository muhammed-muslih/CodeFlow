import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  active?: boolean;
  notification?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { icon, active = false, notification = false, className, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-md transition relative",
          "text-text-secondary",
          "hover:bg-border hover:text-text-primary",
          active && "bg-border text-primary",
          className,
        )}
        {...props}
      >
        {icon}
        {notification && (
          <span className="absolute rounded-full bg-primary h-2 w-2 top-2 right-2 animate-pulse" />
        )}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
