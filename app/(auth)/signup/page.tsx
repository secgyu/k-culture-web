"use client";

import Link from "next/link";
import { AuthLayout, DarkCard } from "@/components/common";
import { UserIcon, BriefcaseIcon } from "@/components/common/Misc/Icons";

export default function SignupPage() {
  return (
    <AuthLayout title="회원가입" subtitle="어떤 유형으로 가입하시겠어요?">
      <div className="space-y-4">
        <Link href="/signup/actor">
          <DarkCard variant="hover" className="group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <UserIcon className="w-7 h-7 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-ivory">배우로 가입</h3>
                <p className="text-sm text-muted-gray">프로필을 등록하고 캐스팅 기회를 받으세요</p>
              </div>
              <svg
                className="w-5 h-5 text-muted-gray group-hover:text-gold transition-colors"
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
              <div className="w-14 h-14 rounded-xl bg-luxury-tertiary flex items-center justify-center group-hover:bg-border transition-colors">
                <BriefcaseIcon className="w-7 h-7 text-warm-gray" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-ivory">캐스팅 담당자로 가입</h3>
                <p className="text-sm text-muted-gray">AI로 완벽한 배우를 찾아보세요</p>
              </div>
              <svg
                className="w-5 h-5 text-muted-gray group-hover:text-warm-gray transition-colors"
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
