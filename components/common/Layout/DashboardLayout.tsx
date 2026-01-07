"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DoDreamLogo } from "@/components/common";
import { HomeIcon, UserIcon, FolderIcon, HeartIcon, SettingsIcon, LogoutIcon, SearchIcon, MenuIcon, XIcon } from "@/components/common/Misc/Icons";
import { useAuthStore } from "@/stores/useAuthStore";

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
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const navItems = userType === "agency" ? agencyNavItems : actorNavItems;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-luxury-black flex">
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-luxury-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <aside className={`fixed lg:static w-64 bg-luxury-secondary border-r border-border flex-col h-full z-50 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } lg:flex`}>
        <div className="p-6 border-b border-border flex items-center justify-between">
          <Link href="/">
            <DoDreamLogo size="md" />
          </Link>
          <button
            onClick={closeMobileMenu}
            className="lg:hidden text-muted-gray hover:text-ivory transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-lg"
          >
            <XIcon className="w-6 h-6" />
          </button>
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
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${
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
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-muted-gray hover:text-red-400 transition-colors rounded-xl hover:bg-luxury-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/50"
          >
            <LogoutIcon className="w-5 h-5" />
            <span className="font-medium">로그아웃</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64">
        <div className="lg:hidden sticky top-0 z-30 bg-luxury-secondary border-b border-border px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-muted-gray hover:text-ivory transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-lg"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <DoDreamLogo size="sm" />
        </div>
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
