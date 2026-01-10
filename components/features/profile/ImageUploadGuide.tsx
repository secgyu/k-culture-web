"use client";

import { useState } from "react";

export function ImageUploadGuide() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="bg-gold/20 text-gold text-caption hover:bg-gold/30 flex h-5 w-5 items-center justify-center rounded-full font-bold transition-colors"
        aria-label="사진 업로드 가이드"
      >
        ?
      </button>
      {isVisible && (
        <div className="bg-luxury-tertiary animate-fade-in absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-xl border border-zinc-700 p-3 shadow-xl">
          <h4 className="text-body-sm text-ivory mb-2 font-semibold">📸 사진 가이드</h4>
          <ul className="text-caption text-muted-gray space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>3:4 비율 권장</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>얼굴이 잘 보이는 정면 사진</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>최소 800px 이상 해상도</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">•</span>
              <span>자연스러운 조명 권장</span>
            </li>
          </ul>
          <div className="border-t-luxury-tertiary absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-t-8 border-r-8 border-l-8 border-r-transparent border-l-transparent" />
        </div>
      )}
    </div>
  );
}
