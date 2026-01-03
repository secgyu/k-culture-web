"use client";

import Image from "next/image";
import { ACTOR_IMAGES } from "../constants";

export function IntroSection() {
  return (
    <section className="bg-luxury-black overflow-hidden">
      <div className="relative w-full overflow-hidden bg-luxury-secondary py-4">
        <div className="flex animate-scroll-left">
          {[...ACTOR_IMAGES, ...ACTOR_IMAGES].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-48 md:w-56 lg:w-64 aspect-[3/4] mx-1 relative">
              <Image src={src} alt={`배우 ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 section-spacing-md text-center">
        <div className="inline-block px-7 py-2.5 bg-gold rounded-full title-margin-lg">
          <span className="text-luxury-black font-semibold text-body-sm">배우&모델</span>
        </div>

        <h2 className="font-display text-display-md lg:text-display-lg text-ivory title-margin-lg">
          &quot;작품 준비하기에도 벅차요!&quot;
        </h2>

        <div className="w-px h-20 bg-zinc-700 mx-auto title-margin-lg" />

        <h3 className="text-display-sm text-gold title-margin-md">&quot;작품과 연습에만 집중하고 싶으신가요?&quot;</h3>

        <p className="text-muted-accessible text-body-lg title-margin-lg">등록 한 번으로 편하게 기다리세요!</p>

        <div className="max-w-2xl mx-auto bg-luxury-secondary rounded-2xl p-8 text-left border border-gold/20">
          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <span className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-body-md">
                1
              </span>
              <div>
                <h4 className="text-ivory text-heading-md mb-1">
                  구분 <span className="text-gold-light">없이</span>
                </h4>
                <p className="text-muted-accessible text-body-sm">배우, 모델, 가수 등 누구나 등록 가능</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <span className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-body-md">
                2
              </span>
              <div>
                <h4 className="text-ivory text-heading-md mb-1">
                  직접 찾아다니지 <span className="text-gold-light">않아도</span>
                </h4>
                <p className="text-muted-accessible text-body-sm">제작사에서 먼저 연락이 옵니다</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <span className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-body-md">
                3
              </span>
              <div>
                <h4 className="text-ivory text-heading-md mb-1">
                  프로필 PDF <span className="text-gold-light">자동 생성</span>
                </h4>
                <p className="text-muted-accessible text-body-sm">깔끔한 프로필 파일을 바로 다운로드</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
