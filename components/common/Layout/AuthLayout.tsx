"use client";

import Link from "next/link";
import { DoDreamLogo } from "@/components/common";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-luxury-black flex flex-col">
      <header className="p-6">
        <Link href="/" className="inline-block">
          <DoDreamLogo size="md" />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 section-spacing-md">
        <div className="w-full max-w-md">
          <div className="text-center title-margin-lg">
            <h1 className="font-display text-display-sm text-ivory title-margin-sm">{title}</h1>
            {subtitle && <p className="text-muted-accessible text-body-md">{subtitle}</p>}
          </div>

          <div className="bg-luxury-secondary rounded-2xl p-8 border border-border">{children}</div>
        </div>
      </main>

      <footer className="p-6 text-center text-muted-gray text-sm">© 2024 DoDream. All rights reserved.</footer>
    </div>
  );
}
