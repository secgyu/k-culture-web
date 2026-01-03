"use client";

import { useOnboardingStore } from "@/stores/useOnboardingStore";
import { useEffect, useState } from "react";

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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-green-600/90 text-white text-body-sm rounded-full shadow-lg animate-fade-in z-50 flex items-center gap-2">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span>임시 저장됨</span>
    </div>
  );
}
