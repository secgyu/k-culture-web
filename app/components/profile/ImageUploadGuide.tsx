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
        className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center text-caption font-bold hover:bg-gold/30 transition-colors"
        aria-label="사진 업로드 가이드"
      >
        ?
      </button>
      {isVisible && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-3 bg-luxury-tertiary border border-zinc-700 rounded-xl shadow-xl z-50 animate-fade-in">
          <h4 className="text-body-sm font-semibold text-ivory mb-2">📸 사진 가이드</h4>
          <ul className="space-y-1.5 text-caption text-muted-gray">
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
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-luxury-tertiary" />
        </div>
      )}
    </div>
  );
}
