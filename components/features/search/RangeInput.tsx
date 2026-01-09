"use client";

import { memo } from "react";

interface RangeInputProps {
  label?: string;
  unit: string;
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
}

export const RangeInput = memo(function RangeInput({
  label,
  unit,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
}: RangeInputProps) {
  return (
    <div className="space-y-2">
      {label && <label className="text-caption text-muted-gray">{label}</label>}
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="최소"
          value={minValue}
          onChange={(e) => onMinChange(e.target.value)}
          className="flex-1 min-w-0 bg-luxury-tertiary border border-zinc-700 rounded-lg px-3 py-2 text-ivory text-body-sm placeholder-muted-gray focus:outline-none focus:border-gold transition-colors"
        />
        <span className="text-muted-gray shrink-0">~</span>
        <input
          type="number"
          placeholder="최대"
          value={maxValue}
          onChange={(e) => onMaxChange(e.target.value)}
          className="flex-1 min-w-0 bg-luxury-tertiary border border-zinc-700 rounded-lg px-3 py-2 text-ivory text-body-sm placeholder-muted-gray focus:outline-none focus:border-gold transition-colors"
        />
        <span className="text-caption text-muted-gray shrink-0">{unit}</span>
      </div>
    </div>
  );
});
