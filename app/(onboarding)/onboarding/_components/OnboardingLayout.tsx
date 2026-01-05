"use client";

import { useState } from "react";
import Link from "next/link";
import { DoDreamLogo } from "@/components/common";
import { ProfilePreview, ProfilePreviewModal, AutoSaveIndicator } from "@/components/features/profile";
import { useOnboardingStore } from "@/stores/useOnboardingStore";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
}

export function OnboardingLayout({ children, currentStep, totalSteps, title, subtitle }: OnboardingLayoutProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { getCompletionPercentage } = useOnboardingStore();
  const completionPercentage = getCompletionPercentage();
  const stepProgress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-luxury-black flex flex-col">
      <header className="p-4 lg:p-6 flex items-center justify-between border-b border-zinc-800">
        <Link href="/">
          <DoDreamLogo size="md" />
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-body-sm">
            <span className="text-muted-gray">프로필 완성도</span>
            <span className="text-gold font-semibold">{completionPercentage}%</span>
          </div>
          <span className="text-muted-gray text-body-sm bg-luxury-secondary px-3 py-1 rounded-full">
            {currentStep} / {totalSteps}단계
          </span>
        </div>
      </header>

      <div className="px-4 lg:px-6 py-3 bg-luxury-secondary/50">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-2 bg-luxury-tertiary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500"
                  style={{ width: `${stepProgress}%` }}
                />
              </div>
            </div>
            <span className="text-caption text-muted-gray whitespace-nowrap">{Math.round(stepProgress)}%</span>
          </div>
        </div>
      </div>

      <main className="flex-1 px-4 lg:px-6 py-8 lg:py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex gap-8 lg:gap-12">
            <div className="flex-1 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-heading-xl lg:text-display-sm text-ivory mb-2">{title}</h1>
                {subtitle && <p className="text-body-base text-muted-gray">{subtitle}</p>}
              </div>

              <div className="bg-luxury-secondary rounded-2xl p-6 lg:p-8 border border-border">{children}</div>

              <div className="lg:hidden mt-6">
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="w-full py-3 bg-luxury-tertiary border border-zinc-700 rounded-xl text-ivory text-body-base font-medium hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>미리보기</span>
                </button>
              </div>
            </div>

            <div className="hidden lg:block w-80 shrink-0">
              <div className="sticky top-8">
                <div className="mb-4">
                  <h2 className="text-heading-md text-ivory mb-1">실시간 미리보기</h2>
                  <p className="text-caption text-muted-gray">입력하면 바로 반영됩니다</p>
                </div>
                <ProfilePreview />
              </div>
            </div>
          </div>
        </div>
      </main>

      <ProfilePreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />

      <AutoSaveIndicator />
    </div>
  );
}
