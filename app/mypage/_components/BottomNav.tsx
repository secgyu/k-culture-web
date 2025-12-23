"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, SparklesIcon, BookmarkIcon, UserIcon } from "@/app/components/Icons";
import { COLORS } from "@/lib/constants";

const navItems = [
  { href: "/", icon: HomeIcon, label: "홈" },
  { href: "/recommend", icon: SparklesIcon, label: "AI매칭" },
  { href: "/favorites", icon: BookmarkIcon, label: "찜목록" },
  { href: "/mypage", icon: UserIcon, label: "마이페이지" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-lg bg-white border-t border-x border-gray-200">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1 px-4 py-2"
              style={{ color: isActive ? COLORS.text.primary : COLORS.text.disabled }}
            >
              <Icon className="w-6 h-6" />
              <span className={`text-xs ${isActive ? "font-medium" : ""}`}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
