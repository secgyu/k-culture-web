"use client";

import Image from "next/image";

import { ACTOR_IMAGES } from "../constants";

export function IntroSection() {
  return (
    <section className="bg-luxury-black overflow-hidden">
      <div className="bg-luxury-secondary relative w-full overflow-hidden py-4">
        <div className="animate-scroll-left flex">
          {[...ACTOR_IMAGES, ...ACTOR_IMAGES].map((src, i) => (
            <div key={i} className="relative mx-1 aspect-[3/4] w-48 flex-shrink-0 md:w-56 lg:w-64">
              <Image src={src} alt={`배우 ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="section-spacing-md mx-auto max-w-4xl px-6 text-center">
        <div className="bg-gold title-margin-lg inline-block rounded-full px-7 py-2.5">
          <span className="text-luxury-black text-body-sm font-semibold">배우&모델</span>
        </div>

        <h2 className="font-display text-display-md lg:text-display-lg text-ivory title-margin-lg">
          &quot;작품 준비하기에도 벅차요!&quot;
        </h2>

        <div className="bg-luxury-tertiary title-margin-lg mx-auto h-20 w-px" />

        <h3 className="text-display-sm text-gold title-margin-md">&quot;작품과 연습에만 집중하고 싶으신가요?&quot;</h3>

        <p className="text-muted-accessible text-body-lg title-margin-lg">등록 한 번으로 편하게 기다리세요!</p>

        <div className="bg-luxury-secondary border-gold/20 mx-auto max-w-2xl rounded-2xl border p-8 text-left">
          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <span className="bg-gold text-luxury-black text-body-md flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold">
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
              <span className="bg-gold text-luxury-black text-body-md flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold">
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
              <span className="bg-gold text-luxury-black text-body-md flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold">
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
