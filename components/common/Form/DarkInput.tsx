"use client";

import { InputHTMLAttributes, forwardRef, useState } from "react";

import { EyeIcon, EyeOffIcon } from "@/components/common/Misc/Icons";

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
        {label && <label className="text-body-sm text-warm-gray block font-medium">{label}</label>}
        <div className="relative">
          <input
            ref={ref}
            type={isPassword && showPassword ? "text" : type}
            className={`bg-luxury-secondary text-ivory placeholder-muted-gray focus-visible:ring-gold/50 focus-visible:border-gold min-h-[52px] w-full rounded-xl border px-5 py-4 text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 ${
              error ? "border-red-500" : "border-border"
            } ${isPassword ? "pr-12" : ""} ${className}`}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
              className="text-muted-gray hover:text-warm-gray absolute top-1/2 right-4 -translate-y-1/2 transition-colors duration-200"
            >
              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
        {error && <p className="text-body-sm text-red-400">{error}</p>}
        {hint && !error && <p className="text-body-sm text-muted-gray">{hint}</p>}
      </div>
    );
  }
);

DarkInput.displayName = "DarkInput";
