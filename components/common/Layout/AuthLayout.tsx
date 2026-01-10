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
    <div className="bg-luxury-black flex min-h-screen flex-col">
      <header className="p-6">
        <Link href="/" className="inline-block">
          <DoDreamLogo size="md" />
        </Link>
      </header>

      <main className="section-spacing-md flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="title-margin-lg text-center">
            <h1 className="font-display text-display-sm text-ivory title-margin-sm">{title}</h1>
            {subtitle && <p className="text-muted-accessible text-body-md">{subtitle}</p>}
          </div>

          <div className="bg-luxury-secondary border-border rounded-2xl border p-8">{children}</div>
        </div>
      </main>

      <footer className="text-muted-gray p-6 text-center text-sm">© 2026 DoDream. All rights reserved.</footer>
    </div>
  );
}
