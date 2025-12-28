"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DoDreamLogo } from "@/app/components";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";

export default function OnboardingCompletePage() {
  const [profileCompleteness, setProfileCompleteness] = useState(0);

  useEffect(() => {
    // 저장된 온보딩 데이터로 완성도 계산
    let completeness = 0;

    const step1 = localStorage.getItem("onboarding_step1");
    const step2 = localStorage.getItem("onboarding_step2");
    const step3 = localStorage.getItem("onboarding_step3");

    if (step1) {
      const data = JSON.parse(step1);
      if (data.name) completeness += 15;
      if (data.gender) completeness += 10;
      if (data.birthDate) completeness += 10;
    }

    if (step2) {
      const data = JSON.parse(step2);
      if (data.height) completeness += 10;
      if (data.weight) completeness += 10;
      if (data.profileImage) completeness += 20;
    }

    if (step3) {
      const data = JSON.parse(step3);
      if (data.styleKeywords && data.styleKeywords.length >= 3) completeness += 25;
    }

    // 애니메이션 효과
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= completeness) {
        setProfileCompleteness(completeness);
        clearInterval(interval);
      } else {
        setProfileCompleteness(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* 헤더 */}
      <header className="px-6 py-6">
        <DoDreamLogo href="/" size="md" className="text-gray-900" />
      </header>

      {/* 메인 */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* 축하 아이콘 */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-8 shadow-lg shadow-gold/30">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* 축하 메시지 */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
          프로필 등록 완료! 🎉
        </h1>
        <p className="text-gray-500 text-center mb-8 max-w-sm">
          축하합니다! 이제 캐스팅 담당자가 회원님을 찾을 수 있어요
        </p>

        {/* 프로필 완성도 */}
        <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">프로필 완성도</span>
            <span className="text-2xl font-bold text-gray-900">{profileCompleteness}%</span>
          </div>

          {/* 프로그레스 바 */}
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-500"
              style={{ width: `${profileCompleteness}%` }}
            />
          </div>

          {/* 안내 메시지 */}
          {profileCompleteness < 100 && (
            <p className="text-sm text-gray-500">
              💡 필모그래피, 특기 등을 추가하면 섭외 제안을 더 많이 받을 수 있어요!
            </p>
          )}
        </div>

        {/* 버튼들 */}
        <div className="w-full max-w-sm space-y-3">
          <Link href="/dashboard" className="block">
            <Button
              className="w-full h-14 text-base font-semibold rounded-xl"
              style={{
                backgroundColor: COLORS.text.primary,
                color: COLORS.background.primary,
              }}
            >
              대시보드로 가기
            </Button>
          </Link>

          <Link href="/mypage/settings/profile" className="block">
            <Button
              variant="outline"
              className="w-full h-14 text-base font-semibold rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              상세 프로필 작성하기
            </Button>
          </Link>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="px-6 py-8 text-center">
        <p className="text-sm text-gray-400">
          프로필은 언제든지 마이페이지에서 수정할 수 있어요
        </p>
      </footer>
    </div>
  );
}
