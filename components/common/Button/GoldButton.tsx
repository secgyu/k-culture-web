"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

export const GoldButton = forwardRef<HTMLButtonElement, GoldButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      disabled,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

    const variants = {
      primary: "bg-gold text-luxury-black hover:bg-gold-light active:bg-gold-dark",
      secondary: "bg-luxury-secondary text-ivory hover:bg-luxury-tertiary active:bg-border",
      outline: "border-2 border-gold text-gold hover:bg-gold/10 active:bg-gold/20",
      ghost: "text-gold hover:bg-gold/10 active:bg-gold/20",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm min-h-10",
      md: "px-7 py-3.5 text-base min-h-12",
      lg: "px-10 py-4.5 text-lg min-h-14",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            로딩중...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

GoldButton.displayName = "GoldButton";
