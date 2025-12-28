"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/app/components/PageLayout";
import { SettingsIcon } from "@/app/components/Icons";
import { ProfileCompleteness, StatsCard, EmptyDashboard } from "./_components";
import { BottomNav } from "@/app/mypage/_components/BottomNav";
import { COLORS } from "@/lib/constants";

// 임시 통계 데이터 (실제로는 API에서 가져옴)
interface DashboardStats {
  views: number;
  viewsChange: number;
  favorites: number;
  offers: number;
  newOffers: number;
}

export default function DashboardPage() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("사용자");
  const [profileCompleteness, setProfileCompleteness] = useState(0);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    // 온보딩 데이터에서 정보 가져오기
    const step1 = localStorage.getItem("onboarding_step1");
    const step2 = localStorage.getItem("onboarding_step2");
    const step3 = localStorage.getItem("onboarding_step3");

    let completeness = 0;

    if (step1) {
      const data = JSON.parse(step1);
      if (data.name) {
        setUserName(data.name);
        completeness += 15;
      }
      if (data.gender) completeness += 10;
      if (data.birthDate) completeness += 10;
    }

    if (step2) {
      const data = JSON.parse(step2);
      if (data.height) completeness += 10;
      if (data.weight) completeness += 10;
      if (data.profileImage) {
        setProfileImage(data.profileImage);
        completeness += 20;
      }
    }

    if (step3) {
      const data = JSON.parse(step3);
      if (data.styleKeywords && data.styleKeywords.length >= 3) completeness += 25;
    }

    setProfileCompleteness(completeness);

    // 임시 통계 데이터 (실제로는 API 호출)
    // 프로필 완성도가 50% 이상이면 데이터가 있다고 가정
    if (completeness >= 50) {
      setHasData(true);
      setStats({
        views: Math.floor(Math.random() * 150) + 10,
        viewsChange: Math.floor(Math.random() * 30) - 5,
        favorites: Math.floor(Math.random() * 20),
        offers: Math.floor(Math.random() * 5),
        newOffers: Math.random() > 0.5 ? 1 : 0,
      });
    }
  }, []);

  return (
    <PageLayout className="bg-gray-50 pb-24">
      {/* 헤더 */}
      <header className="bg-white px-5 pt-12 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-900">대시보드</h1>
          <Link href="/mypage/settings" className="w-10 h-10 flex items-center justify-center">
            <SettingsIcon className="w-6 h-6 text-gray-600" />
          </Link>
        </div>

        {/* 프로필 미리보기 */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            {profileImage ? (
              <Image src={profileImage} alt="프로필" fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{userName}</h2>
            <Link
              href="/mypage"
              className="text-sm hover:underline"
              style={{ color: COLORS.accent.teal }}
            >
              내 프로필 보기 →
            </Link>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="px-5 py-6 space-y-6">
        {/* 프로필 완성도 */}
        <ProfileCompleteness percentage={profileCompleteness} />

        {/* 통계 섹션 */}
        {hasData && stats ? (
          <>
            <h3 className="text-lg font-semibold text-gray-900">이번 주 현황</h3>
            <div className="grid grid-cols-3 gap-3">
              <StatsCard
                icon={
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                }
                label="조회"
                value={stats.views}
                change={stats.viewsChange}
              />
              <StatsCard
                icon={
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                }
                label="찜"
                value={stats.favorites}
              />
              <StatsCard
                icon={
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                label="섭외"
                value={stats.offers}
                isNew={stats.newOffers > 0}
              />
            </div>

            {/* 섭외 제안이 있으면 알림 */}
            {stats.newOffers > 0 && (
              <Link
                href="/notifications"
                className="block bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-4 border border-gold/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-white font-bold">{stats.newOffers}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">새로운 섭외 제안이 있어요!</p>
                    <p className="text-sm text-gray-500">지금 확인해보세요</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
          </>
        ) : (
          <EmptyDashboard />
        )}
      </main>

      {/* 하단 네비게이션 */}
      <BottomNav />
    </PageLayout>
  );
}
