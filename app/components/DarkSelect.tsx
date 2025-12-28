"use client";

import { SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDownIcon } from "./Icons";

interface Option {
  value: string;
  label: string;
}

interface DarkSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  error?: string;
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const DarkSelect = forwardRef<HTMLSelectElement, DarkSelectProps>(
  ({ label, error, options, placeholder, onChange, value, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-zinc-300">{label}</label>
        )}
        <div className="relative">
          <select
            ref={ref}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={`w-full px-4 py-3 bg-zinc-800 border rounded-xl text-ivory appearance-none focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all cursor-pointer ${
              error ? "border-red-500" : "border-zinc-700"
            } ${!value ? "text-zinc-500" : ""} ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-zinc-800">
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

DarkSelect.displayName = "DarkSelect";

