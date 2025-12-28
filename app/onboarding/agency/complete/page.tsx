"use client";

import Link from "next/link";
import { DoDreamLogo, GoldButton } from "@/app/components";
import { CheckIcon } from "@/app/components/Icons";

export default function AgencyOnboardingComplete() {
  return (
    <div className="min-h-screen bg-luxury-black flex flex-col items-center justify-center px-6">
      {/* 로고 */}
      <div className="mb-12">
        <DoDreamLogo size="lg" />
      </div>

      {/* 완료 아이콘 */}
      <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-8">
        <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
          <CheckIcon className="w-8 h-8 text-luxury-black" />
        </div>
      </div>

      {/* 메시지 */}
      <h1 className="text-2xl font-bold text-ivory mb-3">
        등록 완료!
      </h1>
      <p className="text-zinc-400 text-center mb-12 max-w-sm">
        이제 AI 기반 배우 추천과 검색을 이용할 수 있습니다.
        <br />
        프로젝트를 등록하고 완벽한 배우를 찾아보세요.
      </p>

      {/* 버튼 */}
      <div className="w-full max-w-xs space-y-3">
        <Link href="/dashboard">
          <GoldButton fullWidth>대시보드로 이동</GoldButton>
        </Link>
        <Link href="/actor-search">
          <GoldButton variant="secondary" fullWidth>
            배우 검색하기
          </GoldButton>
        </Link>
      </div>
    </div>
  );
}

