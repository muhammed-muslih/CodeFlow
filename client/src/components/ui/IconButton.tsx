import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  active?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, active = false, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-md transition",
          "text-text-secondary",
          "hover:bg-border hover:text-text-primary",
          "focus:outline-none focus:ring-2 focus:ring-primary",
          active && "bg-border text-primary",
          className
        )}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
