"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    wrapper: "py-8",
    icon: "w-12 h-12 mb-3",
    title: "text-lg mb-1",
    description: "text-sm",
  },
  md: {
    wrapper: "py-12",
    icon: "w-16 h-16 mb-4",
    title: "text-xl mb-2",
    description: "text-base",
  },
  lg: {
    wrapper: "py-16",
    icon: "w-20 h-20 mb-6",
    title: "text-2xl mb-3",
    description: "text-lg",
  },
};

export function EmptyState({ icon, title, description, action, className, size = "md" }: EmptyStateProps) {
  const styles = sizeClasses[size];

  if (!icon && !title && description && !action) {
    return <p className={cn("text-center text-muted-gray", styles.wrapper, className)}>{description}</p>;
  }

  return (
    <div className={cn("text-center", styles.wrapper, className)}>
      {icon && <div className={cn("text-muted-gray mx-auto", styles.icon)}>{icon}</div>}
      {title && <h2 className={cn("font-semibold text-ivory", styles.title)}>{title}</h2>}
      {description && <p className={cn("text-muted-gray mb-6", styles.description)}>{description}</p>}
      {action}
    </div>
  );
}
