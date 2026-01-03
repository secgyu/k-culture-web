"use client";

import { useFilterStore } from "@/stores/useFilterStore";

export function FilterFloatingButton() {
  const { openBottomSheet, getActiveFilterCount } = useFilterStore();
  const activeCount = getActiveFilterCount();

  return (
    <button
      onClick={openBottomSheet}
      className="relative flex items-center gap-2 px-5 py-3 bg-gold text-luxury-black font-semibold rounded-full shadow-lg shadow-gold/30 hover:bg-gold-light transition-all duration-200 active:scale-95"
      aria-label="필터 열기"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>
      <span>필터</span>
      {activeCount > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-caption font-bold rounded-full flex items-center justify-center">
          {activeCount}
        </span>
      )}
    </button>
  );
}
