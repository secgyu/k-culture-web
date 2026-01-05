"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
        className={`sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          showBackground ? "bg-luxury-black/95 backdrop-blur-sm border-b border-gold/20" : "bg-transparent"
        } ${className}`}
      >
        <DoDreamLogo href="/" size="md" className="text-white" />

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors text-sm ${
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
            className={`px-4 py-2 text-luxury-black text-sm rounded-lg transition-all ${
              currentPath === "/profile/edit" ? "bg-gold" : "bg-gold hover:bg-gold-light"
            }`}
          >
            프로필 등록하기
          </Link>
        </nav>

        <button className="md:hidden text-white p-2 -mr-2" onClick={() => setIsMenuOpen(true)} aria-label="메뉴 열기">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {isMenuOpen && <div className="fixed inset-0 bg-black/60 z-50 md:hidden" onClick={() => setIsMenuOpen(false)} />}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-luxury-black z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white p-2" aria-label="메뉴 닫기">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg transition-colors ${
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

          <div className="border-t border-gold/20 my-4" />

          <Link
            href="/profile/edit"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-3 px-4 rounded-lg text-center font-medium transition-colors ${
              currentPath === "/profile/edit"
                ? "bg-gold text-luxury-black"
                : "bg-gold text-luxury-black hover:bg-gold-light"
            }`}
          >
            프로필 등록하기
          </Link>

          <div className="pt-4 space-y-2">
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-warm-gray hover:text-ivory transition-colors"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-warm-gray hover:text-ivory transition-colors"
            >
              회원가입
            </Link>
          </div>
        </nav>

        <div className="absolute bottom-8 left-0 right-0 px-6">
          <DoDreamLogo size="sm" className="text-muted-gray" />
        </div>
      </div>
    </>
  );
}
