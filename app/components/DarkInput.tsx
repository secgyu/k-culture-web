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
        {label && <label className="block text-body-sm font-medium text-warm-gray">{label}</label>}
        <div className="relative">
          <input
            ref={ref}
            type={isPassword && showPassword ? "text" : type}
            className={`w-full px-5 py-4 min-h-[52px] bg-luxury-secondary border rounded-xl text-ivory text-base placeholder-muted-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:border-gold transition-all duration-200 ${
              error ? "border-red-500" : "border-border"
            } ${isPassword ? "pr-12" : ""} ${className}`}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-gray hover:text-warm-gray transition-colors duration-200"
            >
              {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
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
