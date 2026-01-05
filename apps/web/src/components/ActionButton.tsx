import React from "react";
import { cn } from "../lib/utils.ts";
import type { LucideIcon } from "lucide-react";
import { Button } from "./button.tsx";

interface ActionButtonProps {
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "success" | "warning";
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  success: "bg-success text-success-foreground hover:bg-success/90",
  warning: "bg-warning text-warning-foreground hover:bg-warning/90",
};

export function ActionButton({ label, icon: Icon, variant = "primary", onClick }: ActionButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "h-auto px-6 py-3 font-medium text-base rounded-lg transition-all duration-200",
        "shadow-sm hover:shadow-md hover:-translate-y-0.5",
        variantStyles[variant]
      )}
    >
      <Icon className="mr-2 h-5 w-5" />
      {label}
    </Button>
  );
}
