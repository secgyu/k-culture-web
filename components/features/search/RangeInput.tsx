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
          className="bg-luxury-tertiary text-ivory text-body-sm placeholder-muted-gray focus:border-gold min-w-0 flex-1 rounded-lg border border-zinc-700 px-3 py-2 transition-colors focus:outline-none"
        />
        <span className="text-muted-gray shrink-0">~</span>
        <input
          type="number"
          placeholder="최대"
          value={maxValue}
          onChange={(e) => onMaxChange(e.target.value)}
          className="bg-luxury-tertiary text-ivory text-body-sm placeholder-muted-gray focus:border-gold min-w-0 flex-1 rounded-lg border border-zinc-700 px-3 py-2 transition-colors focus:outline-none"
        />
        <span className="text-caption text-muted-gray shrink-0">{unit}</span>
      </div>
    </div>
  );
});
