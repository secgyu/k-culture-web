"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LandingHeader } from "@/components/common";
import { ProfileSlide, SearchFilterSlide, AIMatchingSlide, MobileProfileSlide } from "./slides";
import { CAROUSEL_INTERVAL } from "@/lib/constants";

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
    <section className="relative min-h-screen bg-gradient-to-b from-luxury-black via-luxury-black to-luxury-secondary overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-gold/20 to-transparent" />

      <LandingHeader transparent currentPath="/actor-profile" />

      <div className="relative z-10 flex flex-col items-center px-6 section-spacing-md">
        <div className="inline-block px-7 py-2.5 bg-gold rounded-full title-margin-md">
          <span className="text-luxury-black font-semibold text-body-sm">배우&모델</span>
        </div>

        <h1 className="font-display text-display-lg lg:text-display-xl text-ivory text-center title-margin-lg">
          프로필 관리·탐색 플랫폼
        </h1>

        <div className="w-full max-w-5xl mx-auto relative h-[600px] overflow-hidden">
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

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-gold/60 focus:outline-none ${
                currentSlide === i ? "bg-gold w-8" : "bg-warm-gray/30"
              }`}
            />
          ))}
        </div>

        <p className="text-muted-gray text-body-sm mt-12 mb-8">- 프로필 PDF파일 자동 완성 기능 -</p>

        <Link
          href="/signup?type=actor"
          className="px-16 py-4 bg-gold text-luxury-black font-semibold rounded-xl hover:bg-gold-light transition-all duration-200 text-body-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        >
          프로필 등록하기
        </Link>
      </div>
    </section>
  );
}
