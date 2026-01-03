"use client";

import Image from "next/image";
import { ACTOR_IMAGES } from "../constants";

export function IntroSection() {
  return (
    <section className="bg-luxury-black overflow-hidden">
      {/* 자동 슬라이드 이미지 */}
      <div className="relative w-full overflow-hidden bg-luxury-secondary py-4">
        <div className="flex animate-scroll-left">
          {/* 이미지를 2번 반복하여 무한 스크롤 효과 */}
          {[...ACTOR_IMAGES, ...ACTOR_IMAGES].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-48 md:w-56 lg:w-64 aspect-[3/4] mx-1 relative">
              <Image src={src} alt={`배우 ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        {/* 배지 */}
        <div className="inline-block px-6 py-2 bg-gold rounded-full mb-8">
          <span className="text-luxury-black font-medium text-sm">배우&모델</span>
        </div>

        {/* 메인 타이틀 */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-12">
          &quot;작품 준비하기에도 벅차요!&quot;
        </h2>

        {/* 구분선 */}
        <div className="w-px h-24 bg-zinc-700 mx-auto mb-12" />

        {/* 골드 서브 타이틀 */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-6">
          &quot;작품과 연습에만 집중하고 싶으신가요?&quot;
        </h3>

        {/* 설명 */}
        <p className="text-muted-gray text-lg mb-12">등록 한 번으로 편하게 기다리세요!</p>

        {/* 기능 리스트 */}
        <div className="max-w-2xl mx-auto bg-luxury-black rounded-2xl p-6 text-left border border-gold/10">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-sm">
                1
              </span>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  구분 <span className="text-gold-light">없이</span>
                </h4>
                <p className="text-warm-gray text-sm">배우, 모델, 가수 등 누구나 등록 가능</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-sm">
                2
              </span>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  직접 찾아다니지 <span className="text-gold-light">않아도</span>
                </h4>
                <p className="text-warm-gray text-sm">제작사에서 먼저 연락이 옵니다</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-sm">
                3
              </span>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  프로필 PDF <span className="text-gold-light">자동 생성</span>
                </h4>
                <p className="text-warm-gray text-sm">깔끔한 프로필 파일을 바로 다운로드</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
