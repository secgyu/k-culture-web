"use client";

import Link from "next/link";

import { DoDreamLogo } from "@/components/common";

interface MarketingHeaderProps {
  currentPath?: string;
}

const NAV_ITEMS = [
  { href: "/ai-matching", label: "AI 매칭추천" },
  { href: "/actor-search", label: "배우&모델 찾기" },
  { href: "/jobs", label: "작품구인" },
  { href: "/notice", label: "공지사항" },
];

export function MarketingHeader({ currentPath }: MarketingHeaderProps) {
  return (
    <header className="border-border flex w-full items-center justify-between border-b px-6 py-4">
      <DoDreamLogo href="/" size="md" className="text-white" />

      <nav className="hidden items-center gap-8 md:flex">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              currentPath === item.href
                ? "text-sm font-medium text-white"
                : "text-warm-gray text-sm transition-colors hover:text-white"
            }
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/signup?type=actor"
          className="border-muted-gray hover:bg-luxury-secondary rounded-lg border px-4 py-2 text-sm text-white transition-all"
        >
          프로필 등록하기
        </Link>
      </nav>

      <button className="text-white md:hidden" aria-label="메뉴 열기">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
