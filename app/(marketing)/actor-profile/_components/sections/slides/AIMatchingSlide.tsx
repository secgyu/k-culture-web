"use client";

import { memo } from "react";

export const AIMatchingSlide = memo(function AIMatchingSlide() {
  return (
    <div className="bg-luxury-secondary mx-auto max-w-3xl overflow-hidden rounded-2xl p-8 shadow-2xl">
      <h3 className="text-heading-xl mb-2 text-center text-white">AI 매칭 기술을 통해</h3>
      <p className="text-body-lg text-ivory mb-8 text-center">시놉시스와 캐릭터 정보로 배우를 찾아보세요.</p>

      <div className="bg-luxury-tertiary mb-4 rounded-xl p-4">
        <p className="text-muted-gray text-body-sm">시놉시스를 입력해 주세요. (500자 이내)</p>
      </div>
      <p className="text-muted-gray text-caption mb-4 text-right">0/500</p>

      <div className="bg-luxury-tertiary mb-4 rounded-xl px-4 py-3">
        <p className="text-muted-gray text-body-sm">캐릭터 정보를 입력해 주세요. (100자 이내)</p>
      </div>
      <p className="text-muted-gray text-caption mb-6 text-right">0/100</p>

      <button className="btn-gold text-luxury-black focus-visible:ring-gold/50 mb-3 w-full rounded-xl py-4 font-semibold transition-all duration-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 active:scale-[0.98]">
        AI 추천 찾기
      </button>
      <button className="border-gold/30 text-ivory hover:bg-gold/10 focus-visible:ring-gold/50 w-full rounded-xl border py-4 font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 active:scale-[0.98]">
        필터를 통해 찾기
      </button>
    </div>
  );
});
