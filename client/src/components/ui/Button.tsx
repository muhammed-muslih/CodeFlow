import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";
import { motion, spring } from "motion/react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      isLoading = false,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-4 py-2 text-sm font-medium transition focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-[var(--color-primary-hover)] border border-[var(--color-primary-hover)]",
      secondary:
        "bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-border)]",
    };
    return (
      <motion.div
        initial={false}
        whileTap={{
          scale: 0.9,
          transition: {
            type: spring,
            stiffness: 700,
            damping: 30,
            mass: 1,
          },
        }}
      >
        <button
          ref={ref}
          className={cn(baseStyles, variants[variant], className)}
          {...props}
          disabled={disabled || isLoading}
        >
          {isLoading && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          )}
          {children}
        </button>
      </motion.div>
    );
  },
);

Button.displayName = "Button";
