"use client";

import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full min-w-0 rounded-xl border bg-transparent text-base transition-all duration-200 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-border bg-luxury-secondary text-ivory placeholder:text-muted-gray focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:border-gold",
        error:
          "border-red-500 bg-luxury-secondary text-ivory placeholder:text-muted-gray focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:border-red-500",
      },
      inputSize: {
        default: "h-12 px-4 py-3",
        sm: "h-10 px-3 py-2 text-sm",
        lg: "h-14 px-5 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, inputSize, error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        data-slot="input"
        className={cn(
          inputVariants({
            variant: error ? "error" : variant,
            inputSize,
          }),
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
