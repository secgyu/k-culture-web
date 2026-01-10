"use client";

import Link from "next/link";

import { AuthLayout, DarkCard } from "@/components/common";
import { BriefcaseIcon, UserIcon } from "@/components/common/Misc/Icons";

export default function SignupPage() {
  return (
    <AuthLayout title="회원가입" subtitle="어떤 유형으로 가입하시겠어요?">
      <div className="space-y-4">
        <Link href="/signup/actor">
          <DarkCard variant="hover" className="group">
            <div className="flex items-center gap-4">
              <div className="bg-gold/10 group-hover:bg-gold/20 flex h-14 w-14 items-center justify-center rounded-xl transition-colors">
                <UserIcon className="text-gold h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-ivory text-lg font-semibold">배우로 가입</h3>
                <p className="text-muted-gray text-sm">프로필을 등록하고 캐스팅 기회를 받으세요</p>
              </div>
              <svg
                className="text-muted-gray group-hover:text-gold h-5 w-5 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </DarkCard>
        </Link>

        <Link href="/signup/agency">
          <DarkCard variant="hover" className="group">
            <div className="flex items-center gap-4">
              <div className="bg-luxury-tertiary group-hover:bg-border flex h-14 w-14 items-center justify-center rounded-xl transition-colors">
                <BriefcaseIcon className="text-warm-gray h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-ivory text-lg font-semibold">캐스팅 담당자로 가입</h3>
                <p className="text-muted-gray text-sm">AI로 완벽한 배우를 찾아보세요</p>
              </div>
              <svg
                className="text-muted-gray group-hover:text-warm-gray h-5 w-5 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </DarkCard>
        </Link>
      </div>

      <div className="mt-8 text-center">
        <span className="text-muted-gray">이미 계정이 있으신가요? </span>
        <Link href="/login" className="text-gold hover:text-gold-light transition-colors">
          로그인
        </Link>
      </div>
    </AuthLayout>
  );
}
