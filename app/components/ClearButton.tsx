"use client";

import { XMarkIcon } from "@/app/components/Icons";
import { COLORS } from "@/lib/constants";

interface ClearButtonProps {
  onClick: () => void;
  backgroundColor?: string;
}

export function ClearButton({ onClick, backgroundColor = COLORS.text.muted }: ClearButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center"
      style={{ backgroundColor }}
    >
      <XMarkIcon className="w-3 h-3 text-white" strokeWidth={3} />
    </button>
  );
}
