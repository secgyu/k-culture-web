"use client";

import Link from "next/link";
import { DoDreamLogo } from "@/app/components";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
}

export function OnboardingLayout({ children, currentStep, totalSteps, title, subtitle }: OnboardingLayoutProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-luxury-black flex flex-col">
      {/* 헤더 */}
      <header className="p-6 flex items-center justify-between">
        <Link href="/">
          <DoDreamLogo size="md" />
        </Link>
        <span className="text-zinc-500 text-sm">
          {currentStep} / {totalSteps}
        </span>
      </header>

      {/* 프로그레스 바 */}
      <div className="px-6">
        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          {/* 타이틀 */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-ivory mb-2">{title}</h1>
            {subtitle && <p className="text-zinc-400">{subtitle}</p>}
          </div>

          {/* 폼 영역 */}
          <div className="bg-luxury-secondary rounded-2xl p-8 border border-zinc-800">{children}</div>
        </div>
      </main>
    </div>
  );
}
