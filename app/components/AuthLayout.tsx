"use client";

import Link from "next/link";
import { DoDreamLogo } from "./DoDreamLogo";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-luxury-black flex flex-col">
      {/* 헤더 */}
      <header className="p-6">
        <Link href="/" className="inline-block">
          <DoDreamLogo size="md" />
        </Link>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* 타이틀 */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-ivory mb-2">{title}</h1>
            {subtitle && <p className="text-zinc-400">{subtitle}</p>}
          </div>

          {/* 폼 영역 */}
          <div className="bg-luxury-secondary rounded-2xl p-8 border border-zinc-800">
            {children}
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="p-6 text-center text-zinc-500 text-sm">
        © 2024 DoDream. All rights reserved.
      </footer>
    </div>
  );
}

