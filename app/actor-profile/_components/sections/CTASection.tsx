"use client";

import Link from "next/link";
import { DoDreamInlineLogo } from "@/app/components";

export function CTASection() {
  return (
    <section className="bg-purple-600 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          지금 바로
          <DoDreamInlineLogo className="mx-2" doorHandleColor="fill-yellow-400" accentColor="text-yellow-300" />을
          이용해 보세요!
        </h2>
        <Link
          href="/actor-search"
          className="inline-block px-12 py-4 bg-yellow-300 text-purple-700 font-bold rounded-full hover:bg-yellow-400 transition-all text-lg"
        >
          배우&모델 찾기 이동
        </Link>
      </div>
    </section>
  );
}

