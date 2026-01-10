"use client";

import { useEffect, useState } from "react";

import { useOnboardingStore } from "@/stores/useOnboardingStore";

export function AutoSaveIndicator() {
  const { lastSavedAt } = useOnboardingStore();
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    if (lastSavedAt) {
      setShowSaved(true);
      const timer = setTimeout(() => setShowSaved(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [lastSavedAt]);

  if (!showSaved) return null;

  return (
    <div className="text-body-sm animate-fade-in fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-green-600/90 px-4 py-2 text-white shadow-lg">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span>임시 저장됨</span>
    </div>
  );
}
