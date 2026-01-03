"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex w-full min-w-0 rounded-xl border bg-transparent text-base transition-all duration-200 outline-none resize-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-border bg-luxury-secondary text-ivory placeholder:text-muted-gray focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:border-gold",
        error:
          "border-red-500 bg-luxury-secondary text-ivory placeholder:text-muted-gray focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:border-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        className={cn(textareaVariants({ variant: error ? "error" : variant }), "min-h-[120px] px-4 py-3", className)}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
