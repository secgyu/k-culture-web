"use client";

import Link from "next/link";

import { Button } from "@/components/ui";

import { DoDreamLogo } from "@/components/common";
import { CheckIcon } from "@/components/common/Misc/Icons";

export default function ActorOnboardingComplete() {
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

      <h1 className="text-ivory mb-3 text-2xl font-bold">프로필 등록 완료!</h1>
      <p className="text-muted-gray mb-12 max-w-sm text-center">
        이제 캐스팅 담당자들이 당신의 프로필을 볼 수 있습니다.
        <br />더 많은 정보를 입력하면 매칭 확률이 높아집니다.
      </p>

      <div className="flex w-full max-w-xs flex-col gap-3">
        <Link href="/dashboard" className="block">
          <Button variant="gold" fullWidth>
            대시보드로 이동
          </Button>
        </Link>
        <Link href="/profile/edit" className="block">
          <Button variant="gold-secondary" fullWidth>
            프로필 상세 입력하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
