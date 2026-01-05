"use client";

import { HTMLAttributes, forwardRef } from "react";

interface DarkCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "gold";
  padding?: "sm" | "md" | "lg" | "none";
}

export const DarkCard = forwardRef<HTMLDivElement, DarkCardProps>(
  ({ children, variant = "default", padding = "md", className = "", ...props }, ref) => {
    const baseStyles = "rounded-2xl border transition-all duration-200";

    const variants = {
      default: "bg-luxury-secondary border-border",
      hover:
        "bg-luxury-secondary border-border hover:border-muted-gray hover:shadow-lg cursor-pointer active:scale-[0.98]",
      gold: "bg-luxury-secondary border-gold/30 hover:border-gold/50 hover:shadow-gold/10 cursor-pointer active:scale-[0.98]",
    };

    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <div ref={ref} className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

DarkCard.displayName = "DarkCard";
