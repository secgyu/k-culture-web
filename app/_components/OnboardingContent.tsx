"use client";

import Link from "next/link";
import { DoDreamLogo } from "../components";

// 역할 카드 컴포넌트
function RoleCard({
  title,
  description,
  icon,
  href,
  isPrimary,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isPrimary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        group relative overflow-hidden
        w-full max-w-sm p-8 rounded-3xl
        flex flex-col items-center text-center
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-2xl
        ${
          isPrimary
            ? "bg-gradient-to-br from-gold via-gold-light to-gold shadow-lg shadow-gold/20"
            : "bg-luxury-secondary border border-gold/20 hover:border-gold/40"
        }
      `}
    >
      {/* 아이콘 */}
      <div
        className={`
          w-20 h-20 rounded-2xl flex items-center justify-center mb-6
          transition-transform duration-300 group-hover:scale-110
          ${isPrimary ? "bg-luxury-black/20" : "bg-gold/10"}
        `}
      >
        {icon}
      </div>

      {/* 제목 */}
      <h3
        className={`
          text-xl sm:text-2xl font-bold mb-3
          ${isPrimary ? "text-luxury-black" : "text-ivory"}
        `}
      >
        {title}
      </h3>

      {/* 설명 */}
      <p
        className={`
          text-sm sm:text-base leading-relaxed
          ${isPrimary ? "text-luxury-black/70" : "text-warm-gray"}
        `}
      >
        {description}
      </p>

      {/* 화살표 */}
      <div
        className={`
          mt-6 w-10 h-10 rounded-full flex items-center justify-center
          transition-all duration-300 group-hover:translate-x-1
          ${isPrimary ? "bg-luxury-black/10" : "bg-gold/10"}
        `}
      >
        <svg
          className={`w-5 h-5 ${isPrimary ? "text-luxury-black" : "text-gold"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export function OnboardingContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-black via-luxury-black to-luxury-secondary flex flex-col">
      {/* 상단 장식 그라데이션 */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none" />

      {/* 헤더 */}
      <header className="relative z-10 w-full px-6 py-6 flex items-center justify-between">
        <DoDreamLogo href="/" size="md" className="text-ivory" />

        <Link
          href="/login"
          className="text-warm-gray hover:text-ivory transition-colors text-sm font-medium"
        >
          로그인
        </Link>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* 환영 메시지 */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-ivory text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            두드림에 오신 것을 환영합니다
          </h1>
          <p className="text-warm-gray text-base sm:text-lg max-w-xl mx-auto">
            배우와 캐스팅 담당자를 연결하는 프로필 관리 플랫폼
          </p>
        </div>

        {/* 역할 선택 카드 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-4xl justify-center items-center">
          {/* 배우/모델 카드 */}
          <RoleCard
            title="배우로 시작하기"
            description="프로필을 등록하고 캐스팅 제안을 받아보세요"
            href="/signup?type=actor"
            isPrimary
            icon={
              <svg className="w-10 h-10 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />

          {/* 캐스팅 담당자 카드 */}
          <RoleCard
            title="배우 찾아보기"
            description="조건에 맞는 배우를 검색하고 섭외 요청을 보내세요"
            href="/actor-search"
            icon={
              <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            }
          />
        </div>

        {/* 로그인 안내 */}
        <p className="mt-12 text-muted-gray text-sm">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="text-gold hover:text-gold-light underline transition-colors">
            로그인
          </Link>
        </p>
      </main>

      {/* 푸터 */}
      <footer className="relative z-10 w-full px-6 py-8 text-center">
        <div className="text-zinc-600 text-xs sm:text-sm space-y-2">
          <p className="flex flex-wrap justify-center gap-2">
            <span>주식회사 두드림</span>
            <span className="hidden sm:inline">|</span>
            <span>대표이사 양승철</span>
            <span className="hidden sm:inline">|</span>
            <span>사업자번호 533-86-03592</span>
          </p>
          <p>서울특별시 마포구 와우산로 105, 5층 제이 293호</p>
        </div>

        {/* 푸터 로고 */}
        <div className="mt-6 flex justify-center opacity-50">
          <DoDreamLogo size="sm" className="text-zinc-600" />
        </div>
      </footer>
    </div>
  );
}
