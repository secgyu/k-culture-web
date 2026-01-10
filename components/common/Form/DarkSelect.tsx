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
        {label && <label className="text-body-sm text-warm-gray block font-medium">{label}</label>}
        <div className="relative">
          <select
            ref={ref}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={`bg-luxury-secondary text-ivory focus-visible:ring-gold/50 focus-visible:border-gold w-full cursor-pointer appearance-none rounded-xl border px-4 py-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 ${
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
          <ChevronDownIcon className="text-muted-gray pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2" />
        </div>
        {error && <p className="text-body-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

DarkSelect.displayName = "DarkSelect";
