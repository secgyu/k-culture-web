"use client";

import { memo } from "react";

import Image from "next/image";

export const MobileProfileSlide = memo(function MobileProfileSlide() {
  return (
    <div className="from-champagne to-ivory mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br shadow-2xl">
      <div className="flex">
        <div className="flex-1 p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-gold-dark text-lg">←</span>
            <div className="flex items-center gap-3">
              <span className="text-gold text-sm">좋아요 0</span>
              <span className="text-gold">♡</span>
              <span className="text-gold">🔗</span>
              <span className="text-gold">📄</span>
            </div>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-heading-xl text-gray-900">이하나</h2>
            <span className="bg-gold text-caption rounded px-2 py-0.5 text-white">배우&모델</span>
          </div>
          <p className="text-body-sm mb-4 text-gray-500">Lee Hana</p>

          <span className="bg-gold text-luxury-black mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium">
            여자
          </span>

          <div className="text-body-sm mb-4 space-y-2 text-gray-600">
            <p>🏢 핑크프로젝트</p>
            <p>🎓 한국대학교 연기과</p>
          </div>
          <p className="text-body-sm mb-4 text-gray-500">단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>

          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-body-sm w-24 text-gray-600">24세 (2001)</span>
              <div className="bg-champagne h-2 flex-1 overflow-hidden rounded-full">
                <div className="bg-gold h-full w-3/4 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-body-sm w-24 text-gray-600">167 cm</span>
              <div className="bg-champagne h-2 flex-1 overflow-hidden rounded-full">
                <div className="bg-gold h-full w-4/5 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-body-sm w-24 text-gray-600">48 kg</span>
              <div className="bg-champagne h-2 flex-1 overflow-hidden rounded-full">
                <div className="bg-gold h-full w-1/2 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-body-sm w-24 text-gray-600">235 mm</span>
              <div className="bg-champagne h-2 flex-1 overflow-hidden rounded-full">
                <div className="bg-gold h-full w-2/3 rounded-full" />
              </div>
            </div>
          </div>

          <p className="text-caption mb-4 leading-relaxed text-gray-600">
            안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로 사람들의 마음을 움직이고 싶은 신인
            배우입니다.
          </p>

          <div className="mb-2 flex flex-wrap gap-2">
            {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한", "우아한", "밝은한"].map((tag) => (
              <span key={tag} className="bg-gold/20 text-gold-dark text-caption rounded px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-2 flex flex-wrap gap-2">
            {["한국어", "영어"].map((lang) => (
              <span key={lang} className="text-caption rounded bg-blue-100 px-2 py-1 text-blue-700">
                {lang}
              </span>
            ))}
          </div>
          <div className="mb-2 flex flex-wrap gap-2">
            {["경상도사투리", "전라도사투리"].map((d) => (
              <span key={d} className="text-caption rounded bg-green-100 px-2 py-1 text-green-700">
                {d}
              </span>
            ))}
          </div>
          <div className="mb-2 flex flex-wrap gap-2">
            {["노래", "피아노", "바이올린"].map((s) => (
              <span key={s} className="text-caption rounded bg-orange-100 px-2 py-1 text-orange-700">
                {s}
              </span>
            ))}
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {["수영", "요가", "골프"].map((sp) => (
              <span key={sp} className="text-caption rounded bg-pink-100 px-2 py-1 text-pink-700">
                {sp}
              </span>
            ))}
          </div>

          <span className="text-caption rounded bg-gray-200 px-2 py-1 text-gray-700">2종</span>

          <div className="mt-4 flex gap-2">
            <div className="text-caption flex h-8 w-8 items-center justify-center rounded bg-red-500 text-white">▶</div>
            <div className="text-caption flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              📷
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px] w-2/5">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop"
            alt="배우 프로필"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
});
