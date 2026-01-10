"use client";

import { TextareaHTMLAttributes, forwardRef } from "react";

interface DarkTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const DarkTextarea = forwardRef<HTMLTextAreaElement, DarkTextareaProps>(
  ({ label, error, hint, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && <label className="text-warm-gray block text-sm font-medium">{label}</label>}
        <textarea
          ref={ref}
          className={`bg-luxury-secondary text-ivory placeholder-muted-gray focus:ring-gold/50 focus:border-gold w-full resize-none rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none ${
            error ? "border-red-500" : "border-border"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        {hint && !error && <p className="text-muted-gray text-sm">{hint}</p>}
      </div>
    );
  }
);

DarkTextarea.displayName = "DarkTextarea";
