import { type ReactNode } from "react";
import { Card } from "../ui/Card";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function AuthLayout({ title, children, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src="/logos/codeflow-main-logo.png"
            alt="CodeFlow"
            className="10"
          />
        </div>

        <Card className="w-full">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-primary">{title}</h1>
            {subtitle && (
              <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>
            )}
          </div>
          {children}
        </Card>
      </div>
    </div>
  );
}
