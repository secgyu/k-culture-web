"use client";

import Link from "next/link";

import { Button } from "@/components/ui";

import { DoDreamLogo } from "@/components/common";
import { CheckIcon } from "@/components/common/Misc/Icons";

export default function AgencyOnboardingComplete() {
  return (
    <div className="bg-luxury-black flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mb-12">
        <DoDreamLogo size="lg" />
      </div>

      <div className="bg-gold/10 mb-8 flex h-20 w-20 items-center justify-center rounded-full">
        <div className="bg-gold flex h-14 w-14 items-center justify-center rounded-full">
          <CheckIcon className="text-luxury-black h-8 w-8" />
        </div>
      </div>

      <h1 className="text-ivory mb-3 text-2xl font-bold">등록 완료!</h1>
      <p className="text-muted-gray mb-12 max-w-sm text-center">
        이제 AI 기반 배우 추천과 검색을 이용할 수 있습니다.
        <br />
        프로젝트를 등록하고 완벽한 배우를 찾아보세요.
      </p>

      <div className="w-full max-w-xs space-y-3">
        <Link href="/dashboard">
          <Button variant="gold" fullWidth>
            대시보드로 이동
          </Button>
        </Link>
        <Link href="/actor-search">
          <Button variant="gold-secondary" fullWidth>
            배우 검색하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
