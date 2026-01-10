"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface FormFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, hint, required, children, className }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        {label && (
          <label className="text-body-sm text-warm-gray block font-medium">
            {label}
            {required && <span className="ml-1 text-red-400">*</span>}
          </label>
        )}
        {children}
        {error && <p className="text-body-sm text-red-400">{error}</p>}
        {hint && !error && <p className="text-body-sm text-muted-gray">{hint}</p>}
      </div>
    );
  }
);
FormField.displayName = "FormField";

export { FormField };
