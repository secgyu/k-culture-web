"use client";

import Link from "next/link";

import { DoDreamLogo } from "@/components/common";

import { useAuthStore } from "@/stores/useAuthStore";

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
      className={`group relative flex w-full max-w-sm flex-col items-center overflow-hidden rounded-3xl p-8 text-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl ${
        isPrimary
          ? "from-gold via-gold-light to-gold shadow-gold/20 bg-gradient-to-br shadow-lg"
          : "bg-luxury-secondary border-gold/20 hover:border-gold/40 border"
      } `}
    >
      <div
        className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${isPrimary ? "bg-luxury-black/20" : "bg-gold/10"} `}
      >
        {icon}
      </div>

      <h3 className={`text-heading-xl mb-3 ${isPrimary ? "text-luxury-black" : "text-ivory"} `}>{title}</h3>

      <p className={`text-body-md leading-relaxed ${isPrimary ? "text-luxury-black/70" : "text-muted-accessible"} `}>
        {description}
      </p>

      <div
        className={`mt-6 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 ${isPrimary ? "bg-luxury-black/10" : "bg-gold/10"} `}
      >
        <svg
          className={`h-5 w-5 ${isPrimary ? "text-luxury-black" : "text-gold"}`}
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
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="from-luxury-black via-luxury-black to-luxury-secondary flex min-h-screen flex-col bg-gradient-to-b">
      <div className="from-gold/10 pointer-events-none absolute top-0 right-0 left-0 h-96 bg-gradient-to-b to-transparent" />

      <header className="relative z-10 flex w-full items-center justify-between px-6 py-6">
        <DoDreamLogo href="/" size="md" className="text-ivory" />

        {isAuthenticated ? (
          <Link href="/dashboard" className="text-gold hover:text-gold-light text-sm font-medium transition-colors">
            대시보드
          </Link>
        ) : (
          <Link href="/login" className="text-warm-gray hover:text-ivory text-sm font-medium transition-colors">
            로그인
          </Link>
        )}
      </header>

      <main className="section-spacing-md relative z-10 flex flex-1 flex-col items-center justify-center px-6">
        <div className="title-margin-xl text-center">
          <h1 className="font-display text-display-lg lg:text-display-xl text-ivory title-margin-md">
            두드림에 오신 것을 환영합니다
          </h1>
          <p className="text-muted-accessible text-body-lg mx-auto max-w-xl">
            배우와 캐스팅 담당자를 연결하는 프로필 관리 플랫폼
          </p>
        </div>

        <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          <RoleCard
            title="배우로 시작하기"
            description="프로필을 등록하고 캐스팅 제안을 받아보세요"
            href="/signup?type=actor"
            isPrimary
            icon={
              <svg className="text-luxury-black h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />

          <RoleCard
            title="배우 찾아보기"
            description="조건에 맞는 배우를 검색하고 섭외 요청을 보내세요"
            href="/actor-search"
            icon={
              <svg className="text-gold h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {!isAuthenticated && (
          <p className="text-muted-gray mt-12 text-sm">
            이미 계정이 있으신가요?{" "}
            <Link href="/login" className="text-gold hover:text-gold-light underline transition-colors">
              로그인
            </Link>
          </p>
        )}
      </main>

      <footer className="relative z-10 w-full px-6 py-8 text-center">
        <div className="text-muted-gray space-y-2 text-xs sm:text-sm">
          <p className="flex flex-wrap justify-center gap-2">
            <span>주식회사 두드림</span>
            <span className="hidden sm:inline">|</span>
            <span>대표이사 양승철</span>
            <span className="hidden sm:inline">|</span>
            <span>사업자번호 533-86-03592</span>
          </p>
          <p>서울특별시 마포구 와우산로 105, 5층 제이 293호</p>
        </div>

        <div className="mt-6 flex justify-center opacity-50">
          <DoDreamLogo size="sm" className="text-muted-gray" />
        </div>
      </footer>
    </div>
  );
}
