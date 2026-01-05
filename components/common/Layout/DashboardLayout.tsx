"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoDreamLogo } from "@/components/common";
import { HomeIcon, UserIcon, FolderIcon, HeartIcon, SettingsIcon, LogoutIcon, SearchIcon } from "@/components/common/Misc/Icons";

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
      <aside className="w-64 bg-luxury-secondary border-r border-border flex flex-col fixed h-full">
        <div className="p-6 border-b border-border">
          <Link href="/">
            <DoDreamLogo size="md" />
          </Link>
        </div>

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
                      isActive ? "bg-gold/10 text-gold" : "text-muted-gray hover:bg-luxury-tertiary hover:text-ivory"
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

        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-muted-gray hover:text-red-400 transition-colors rounded-xl hover:bg-luxury-tertiary">
            <LogoutIcon className="w-5 h-5" />
            <span className="font-medium">로그아웃</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-64">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
