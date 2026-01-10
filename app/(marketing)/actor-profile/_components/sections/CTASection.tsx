"use client";

import Link from "next/link";

import { DoDreamInlineLogo } from "@/components/common";

export function CTASection() {
  return (
    <section className="bg-gold section-spacing-md">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-display-sm md:text-display-md text-luxury-black mb-8">
          지금 바로
          <DoDreamInlineLogo className="mx-2" doorHandleColor="fill-luxury-black" accentColor="text-luxury-black" />을
          이용해 보세요!
        </h2>
        <Link
          href="/actor-search"
          className="bg-luxury-black text-gold hover:bg-luxury-secondary text-body-lg focus-visible:ring-gold/50 inline-block rounded-full px-12 py-4 font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 active:scale-[0.98]"
        >
          배우&모델 찾기 이동
        </Link>
      </div>
    </section>
  );
}
