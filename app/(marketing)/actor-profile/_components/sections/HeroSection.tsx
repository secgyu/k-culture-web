"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { LandingHeader } from "@/components/common";

import { CAROUSEL_INTERVAL } from "@/lib/constants";

import { AIMatchingSlide, MobileProfileSlide, ProfileSlide, SearchFilterSlide } from "./slides";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const getSlideTransition = (slideIndex: number) => {
    if (currentSlide === slideIndex) return "opacity-100 translate-x-0";
    if (currentSlide < slideIndex) return "opacity-0 translate-x-full";
    return "opacity-0 -translate-x-full";
  };

  return (
    <section className="from-luxury-black via-luxury-black to-luxury-secondary relative min-h-screen overflow-hidden bg-gradient-to-b">
      <div className="from-gold/20 absolute top-0 right-0 left-0 h-96 bg-gradient-to-b to-transparent" />

      <LandingHeader transparent currentPath="/actor-profile" />

      <div className="section-spacing-md relative z-10 flex flex-col items-center px-6">
        <div className="bg-gold title-margin-md inline-block rounded-full px-7 py-2.5">
          <span className="text-luxury-black text-body-sm font-semibold">배우&모델</span>
        </div>

        <h1 className="font-display text-display-lg lg:text-display-xl text-ivory title-margin-lg text-center">
          프로필 관리·탐색 플랫폼
        </h1>

        <div className="relative mx-auto h-[600px] w-full max-w-5xl overflow-hidden">
          <div className={`absolute inset-0 transition-all duration-700 ${getSlideTransition(0)}`}>
            <ProfileSlide />
          </div>

          <div className={`absolute inset-0 transition-all duration-700 ${getSlideTransition(1)}`}>
            <SearchFilterSlide />
          </div>

          <div className={`absolute inset-0 transition-all duration-700 ${getSlideTransition(2)}`}>
            <AIMatchingSlide />
          </div>

          <div className={`absolute inset-0 transition-all duration-700 ${getSlideTransition(3)}`}>
            <MobileProfileSlide />
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`슬라이드 ${i + 1}로 이동`}
              className={`hover:bg-gold/60 h-3 w-3 rounded-full transition-all duration-300 focus:outline-none ${
                currentSlide === i ? "bg-gold w-8" : "bg-warm-gray/30"
              }`}
            />
          ))}
        </div>

        <p className="text-muted-gray text-body-sm mt-12 mb-8">- 프로필 PDF파일 자동 완성 기능 -</p>

        <Link
          href="/signup?type=actor"
          className="bg-gold text-luxury-black hover:bg-gold-light text-body-lg focus-visible:ring-gold/50 rounded-xl px-16 py-4 font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 active:scale-[0.98]"
        >
          프로필 등록하기
        </Link>
      </div>
    </section>
  );
}
