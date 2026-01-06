"use client";

import { SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDownIcon } from "@/components/common/Misc/Icons";

interface Option {
  value: string;
  label: string;
}

interface DarkSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  error?: string;
  options: readonly Option[] | Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const DarkSelect = forwardRef<HTMLSelectElement, DarkSelectProps>(
  ({ label, error, options, placeholder, onChange, value, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && <label className="block text-body-sm font-medium text-warm-gray">{label}</label>}
        <div className="relative">
          <select
            ref={ref}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={`w-full px-4 py-3 bg-luxury-secondary border rounded-xl text-ivory appearance-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:border-gold transition-all duration-200 cursor-pointer ${
              error ? "border-red-500" : "border-border"
            } ${!value ? "text-muted-gray" : ""} ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-luxury-secondary">
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray pointer-events-none" />
        </div>
        {error && <p className="text-body-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

DarkSelect.displayName = "DarkSelect";
