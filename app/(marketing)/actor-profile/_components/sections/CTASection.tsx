"use client";

import Link from "next/link";
import { DoDreamInlineLogo } from "@/app/components";

export function CTASection() {
  return (
    <section className="bg-gold section-spacing-md">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-display-sm md:text-display-md text-luxury-black mb-8">
          지금 바로
          <DoDreamInlineLogo className="mx-2" doorHandleColor="fill-luxury-black" accentColor="text-luxury-black" />을
          이용해 보세요!
        </h2>
        <Link
          href="/actor-search"
          className="inline-block px-12 py-4 bg-luxury-black text-gold font-bold rounded-full hover:bg-luxury-secondary transition-all duration-200 text-body-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        >
          배우&모델 찾기 이동
        </Link>
      </div>
    </section>
  );
}
