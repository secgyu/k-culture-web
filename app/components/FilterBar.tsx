"use client";

import { ChevronDownIcon } from "./Icons";

interface FilterOption {
  id: string;
  label: string;
  value?: string;
}

interface FilterBarProps {
  filters: FilterOption[];
}

export default function FilterBar({ filters }: FilterBarProps) {
  return (
    <div className="sticky top-14 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-lg mx-auto px-4 py-3">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all whitespace-nowrap shrink-0"
            >
              <span>{filter.label}</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
