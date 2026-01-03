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
        {label && <label className="block text-sm font-medium text-warm-gray">{label}</label>}
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 bg-luxury-secondary border rounded-xl text-ivory placeholder-muted-gray focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none ${
            error ? "border-red-500" : "border-border"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        {hint && !error && <p className="text-sm text-muted-gray">{hint}</p>}
      </div>
    );
  }
);

DarkTextarea.displayName = "DarkTextarea";
