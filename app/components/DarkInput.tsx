"use client";

import { InputHTMLAttributes, forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "./Icons";

interface DarkInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const DarkInput = forwardRef<HTMLInputElement, DarkInputProps>(
  ({ label, error, hint, type, className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
      <div className="space-y-2">
        {label && <label className="block text-sm font-medium text-zinc-300">{label}</label>}
        <div className="relative">
          <input
            ref={ref}
            type={isPassword && showPassword ? "text" : type}
            className={`w-full px-5 py-4 min-h-[52px] bg-zinc-800 border rounded-xl text-ivory text-base placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all ${
              error ? "border-red-500" : "border-zinc-700"
            } ${isPassword ? "pr-12" : ""} ${className}`}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-300"
            >
              {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </button>
          )}
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        {hint && !error && <p className="text-sm text-zinc-500">{hint}</p>}
      </div>
    );
  }
);

DarkInput.displayName = "DarkInput";
