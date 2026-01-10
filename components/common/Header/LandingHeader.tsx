"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { DoDreamLogo } from "@/components/common";

interface NavItem {
  href: string;
  label: string;
  highlight?: boolean;
}

interface LandingHeaderProps {
  currentPath?: string;
  transparent?: boolean;
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`sticky top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-300 ${
          showBackground ? "bg-luxury-black/95 border-gold/20 border-b backdrop-blur-sm" : "bg-transparent"
        } ${className}`}
      >
        <DoDreamLogo href="/" size="md" className="text-white" />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                currentPath === item.href
                  ? "text-ivory font-medium"
                  : item.highlight
                    ? "text-gold hover:text-gold-light font-medium"
                    : "text-warm-gray hover:text-ivory"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/profile/edit"
            className={`text-luxury-black rounded-lg px-4 py-2 text-sm transition-all ${
              currentPath === "/profile/edit" ? "bg-gold" : "bg-gold hover:bg-gold-light"
            }`}
          >
            프로필 등록하기
          </Link>
        </nav>

        <button className="-mr-2 p-2 text-white md:hidden" onClick={() => setIsMenuOpen(true)} aria-label="메뉴 열기">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {isMenuOpen && <div className="fixed inset-0 z-50 bg-black/60 md:hidden" onClick={() => setIsMenuOpen(false)} />}

      <div
        className={`bg-luxury-black fixed top-0 right-0 z-50 h-full w-72 transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white" aria-label="메뉴 닫기">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="space-y-2 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-lg px-4 py-3 transition-colors ${
                currentPath === item.href
                  ? "bg-gold text-luxury-black"
                  : item.highlight
                    ? "text-gold hover:bg-luxury-secondary"
                    : "text-warm-gray hover:bg-luxury-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="border-gold/20 my-4 border-t" />

          <Link
            href="/profile/edit"
            onClick={() => setIsMenuOpen(false)}
            className={`block rounded-lg px-4 py-3 text-center font-medium transition-colors ${
              currentPath === "/profile/edit"
                ? "bg-gold text-luxury-black"
                : "bg-gold text-luxury-black hover:bg-gold-light"
            }`}
          >
            프로필 등록하기
          </Link>

          <div className="space-y-2 pt-4">
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-warm-gray hover:text-ivory block px-4 py-3 transition-colors"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="text-warm-gray hover:text-ivory block px-4 py-3 transition-colors"
            >
              회원가입
            </Link>
          </div>
        </nav>

        <div className="absolute right-0 bottom-8 left-0 px-6">
          <DoDreamLogo size="sm" className="text-muted-gray" />
        </div>
      </div>
    </>
  );
}
