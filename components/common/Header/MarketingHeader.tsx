"use client";

import Link from "next/link";
import { DoDreamLogo } from "@/app/components";

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
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-border">
      <DoDreamLogo href="/" size="md" className="text-white" />

      <nav className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              currentPath === item.href
                ? "text-white font-medium text-sm"
                : "text-warm-gray hover:text-white transition-colors text-sm"
            }
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/profile-register"
          className="px-4 py-2 border border-muted-gray text-white text-sm rounded-lg hover:bg-luxury-secondary transition-all"
        >
          프로필 등록하기
        </Link>
      </nav>

      <button className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
