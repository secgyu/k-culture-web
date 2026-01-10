"use client";

import { memo } from "react";

interface FilterChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export const FilterChip = memo(function FilterChip({ label, selected, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`text-caption rounded-full px-3 py-1.5 font-medium transition-all duration-200 ${
        selected
          ? "bg-gold text-luxury-black"
          : "bg-luxury-tertiary text-muted-gray hover:text-warm-gray hover:bg-zinc-700"
      }`}
    >
      {label}
    </button>
  );
});
