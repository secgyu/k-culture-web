"use client";

import Link from "next/link";
import { DoDreamInlineLogo } from "@/app/components";

export function CTASection() {
  return (
    <section className="bg-gold py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-luxury-black mb-8">
          지금 바로
          <DoDreamInlineLogo className="mx-2" doorHandleColor="fill-luxury-black" accentColor="text-luxury-black" />을
          이용해 보세요!
        </h2>
        <Link
          href="/actor-search"
          className="inline-block px-12 py-4 bg-luxury-black text-gold font-bold rounded-full hover:bg-luxury-secondary transition-all text-lg"
        >
          배우&모델 찾기 이동
        </Link>
      </div>
    </section>
  );
}
