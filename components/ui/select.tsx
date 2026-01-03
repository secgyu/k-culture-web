"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const selectVariants = cva(
  "flex w-full min-w-0 rounded-xl border bg-transparent text-base transition-all duration-200 outline-none appearance-none cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-border bg-luxury-secondary text-ivory focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:border-gold",
        error:
          "border-red-500 bg-luxury-secondary text-ivory focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:border-red-500",
      },
      selectSize: {
        default: "h-12 px-4 py-3 pr-10",
        sm: "h-10 px-3 py-2 pr-9 text-sm",
        lg: "h-14 px-5 py-4 pr-12",
      },
    },
    defaultVariants: {
      variant: "default",
      selectSize: "default",
    },
  }
);

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size" | "onChange">,
    VariantProps<typeof selectVariants> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
  onChange?: (value: string) => void;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, selectSize, options, placeholder, error, value, onChange, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          data-slot="select"
          className={cn(
            selectVariants({ variant: error ? "error" : variant, selectSize }),
            !value && "text-muted-gray",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-luxury-secondary text-ivory">
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-muted-gray pointer-events-none" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select, selectVariants };
