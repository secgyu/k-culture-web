"use client";

export interface FilterOption {
  id: string;
  label: string;
  value?: string;
}

interface FilterBarProps {
  filters: FilterOption[];
  selectedFilters?: Record<string, string>;
  onFilterClick?: (filterId: string) => void;
}

function ChevronDownIcon({ className, isSelected }: { className?: string; isSelected?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke={isSelected ? "#D4AF37" : "#8A8679"}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FilterBar({ filters, selectedFilters = {}, onFilterClick }: FilterBarProps) {
  return (
    <div className="bg-luxury-black sticky top-12 z-40">
      <div className="mx-auto max-w-lg px-5 py-2">
        <div className="hide-scrollbar flex gap-2 overflow-x-auto">
          {filters.map((filter) => {
            const isSelected = !!selectedFilters[filter.id];
            const displayLabel = selectedFilters[filter.id] || filter.label;

            return (
              <button
                key={filter.id}
                onClick={() => onFilterClick?.(filter.id)}
                className={`bg-luxury-tertiary flex h-10 min-w-10 shrink-0 items-center justify-center gap-1 rounded-full border px-3 text-sm font-medium whitespace-nowrap transition-all ${
                  isSelected ? "border-gold text-gold" : "text-warm-gray hover:border-gold/50 border-[#2A2A2A]"
                }`}
                style={{ letterSpacing: "-0.02em" }}
              >
                <span>{displayLabel}</span>
                <ChevronDownIcon className="h-5 w-5" isSelected={isSelected} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
