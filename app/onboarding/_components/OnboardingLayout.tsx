"use client";

import { useRouter } from "next/navigation";
import { ProgressBar } from "./ProgressBar";
import { ChevronLeftIcon } from "@/app/components/Icons";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps?: number;
  title: string;
  subtitle?: string;
  backHref?: string;
}

export function OnboardingLayout({
  children,
  currentStep,
  totalSteps = 4,
  title,
  subtitle,
  backHref,
}: OnboardingLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 헤더 */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={handleBack}
            className="w-10 h-10 flex items-center justify-center -ml-2"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">프로필 등록</h1>
          <div className="w-10" /> {/* 균형용 빈 공간 */}
        </div>

        {/* 프로그레스 바 */}
        <div className="px-4 pb-4">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 px-5 py-6">
        {/* 스텝 제목 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          {subtitle && <p className="text-gray-500">{subtitle}</p>}
        </div>

        {children}
      </main>
    </div>
  );
}

