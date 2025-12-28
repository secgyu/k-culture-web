"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { DoDreamLogo } from "./DoDreamLogo";

interface NavItem {
  href: string;
  label: string;
  highlight?: boolean;
}

interface LandingHeaderProps {
  /** 현재 활성화된 페이지 경로 */
  currentPath?: string;
  /** 투명 배경 모드 (히어로 섹션 위에서 사용 시) */
  transparent?: boolean;
  /** 클래스 오버라이드 */
  className?: string;
}

const navItems: NavItem[] = [
  { href: "/ai-matching", label: "AI 매칭추천", highlight: true },
  { href: "/actor-search", label: "배우&모델 찾기" },
  { href: "/jobs", label: "작품구인" },
  { href: "/notice", label: "공지사항" },
];

export function LandingHeader({ currentPath = "", transparent = false, className = "" }: LandingHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 메뉴 열렸을 때 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const showBackground = !transparent || isScrolled;

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          showBackground ? "bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800" : "bg-transparent"
        } ${className}`}
      >
        {/* 로고 */}
        <DoDreamLogo href="/" size="md" className="text-white" />

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors text-sm ${
                currentPath === item.href
                  ? "text-white font-medium"
                  : item.highlight
                  ? "text-purple-400 hover:text-purple-300 font-medium"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/profile-register"
            className={`px-4 py-2 text-white text-sm rounded-lg transition-all ${
              currentPath === "/profile-register" ? "bg-purple-600" : "border border-zinc-600 hover:bg-zinc-800"
            }`}
          >
            프로필 등록하기
          </Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-white p-2 -mr-2" onClick={() => setIsMenuOpen(true)} aria-label="메뉴 열기">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/60 z-50 md:hidden" onClick={() => setIsMenuOpen(false)} />}

      {/* 모바일 메뉴 드로어 */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-zinc-900 z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 닫기 버튼 */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white p-2" aria-label="메뉴 닫기">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 메뉴 아이템들 */}
        <nav className="px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                currentPath === item.href
                  ? "bg-purple-600 text-white"
                  : item.highlight
                  ? "text-purple-400 hover:bg-zinc-800"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* 구분선 */}
          <div className="border-t border-zinc-700 my-4" />

          {/* CTA 버튼 */}
          <Link
            href="/profile-register"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-3 px-4 rounded-lg text-center font-medium transition-colors ${
              currentPath === "/profile-register"
                ? "bg-purple-600 text-white"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            프로필 등록하기
          </Link>

          {/* 추가 링크들 */}
          <div className="pt-4 space-y-2">
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-zinc-400 hover:text-white transition-colors"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-zinc-400 hover:text-white transition-colors"
            >
              회원가입
            </Link>
          </div>
        </nav>

        {/* 하단 로고 */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <DoDreamLogo size="sm" className="text-zinc-600" />
        </div>
      </div>
    </>
  );
}
