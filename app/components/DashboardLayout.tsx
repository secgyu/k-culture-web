"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoDreamLogo } from "./DoDreamLogo";
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  HeartIcon,
  SettingsIcon,
  LogoutIcon,
  SearchIcon,
} from "./Icons";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType?: "actor" | "agency";
}

const actorNavItems = [
  { href: "/dashboard", label: "대시보드", icon: HomeIcon },
  { href: "/profile", label: "내 프로필", icon: UserIcon },
  { href: "/favorites", label: "찜 목록", icon: HeartIcon },
  { href: "/settings", label: "설정", icon: SettingsIcon },
];

const agencyNavItems = [
  { href: "/dashboard", label: "대시보드", icon: HomeIcon },
  { href: "/actor-search", label: "배우 검색", icon: SearchIcon },
  { href: "/projects", label: "프로젝트", icon: FolderIcon },
  { href: "/favorites", label: "찜 목록", icon: HeartIcon },
  { href: "/settings", label: "설정", icon: SettingsIcon },
];

export function DashboardLayout({ children, userType = "actor" }: DashboardLayoutProps) {
  const pathname = usePathname();
  const navItems = userType === "agency" ? agencyNavItems : actorNavItems;

  return (
    <div className="min-h-screen bg-luxury-black flex">
      {/* 사이드바 */}
      <aside className="w-64 bg-luxury-secondary border-r border-zinc-800 flex flex-col fixed h-full">
        {/* 로고 */}
        <div className="p-6 border-b border-zinc-800">
          <Link href="/">
            <DoDreamLogo size="md" />
          </Link>
        </div>

        {/* 네비게이션 */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-gold/10 text-gold"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-ivory"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 하단 */}
        <div className="p-4 border-t border-zinc-800">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-zinc-400 hover:text-red-400 transition-colors rounded-xl hover:bg-zinc-800">
            <LogoutIcon className="w-5 h-5" />
            <span className="font-medium">로그아웃</span>
          </button>
        </div>
      </aside>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 ml-64">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

