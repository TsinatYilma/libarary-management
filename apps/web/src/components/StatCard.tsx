import React from "react";
import { cn } from "../lib/utils.ts";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-card p-6",
        "shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {title}
          </p>
          <p className="text-4xl font-display font-semibold text-foreground">
            {value}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <div className="rounded-full bg-accent p-3 transition-colors group-hover:bg-primary/10">
          <Icon className="h-6 w-6 text-accent-foreground" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary/30 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
