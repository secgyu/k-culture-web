import { memo } from "react";
import Link from "next/link";
import { DoDreamLogo } from "@/components/common";
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  HeartIcon,
  SettingsIcon,
  LogoutIcon,
  SearchIcon,
  XIcon,
} from "@/components/common/Misc/Icons";

const ACTOR_NAV_ITEMS = [
  { href: "/dashboard", label: "대시보드", icon: HomeIcon },
  { href: "/profile", label: "내 프로필", icon: UserIcon },
  { href: "/favorites", label: "찜 목록", icon: HeartIcon },
  { href: "/settings", label: "설정", icon: SettingsIcon },
] as const;

const AGENCY_NAV_ITEMS = [
  { href: "/dashboard", label: "대시보드", icon: HomeIcon },
  { href: "/actor-search", label: "배우 검색", icon: SearchIcon },
  { href: "/projects", label: "프로젝트", icon: FolderIcon },
  { href: "/favorites", label: "찜 목록", icon: HeartIcon },
  { href: "/settings", label: "설정", icon: SettingsIcon },
] as const;

interface DashboardSidebarProps {
  userType: "actor" | "agency";
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const DashboardSidebar = memo(function DashboardSidebar({
  userType,
  pathname,
  isOpen,
  onClose,
  onLogout,
}: DashboardSidebarProps) {
  const navItems = userType === "agency" ? AGENCY_NAV_ITEMS : ACTOR_NAV_ITEMS;

  return (
    <aside
      className={`fixed lg:static w-64 bg-luxury-secondary border-r border-border flex-col h-full z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } lg:flex`}
    >
      <div className="p-6 border-b border-border flex items-center justify-between">
        <Link href="/">
          <DoDreamLogo size="md" />
        </Link>
        <button
          onClick={onClose}
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
                  onClick={onClose}
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
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-muted-gray hover:text-red-400 transition-colors rounded-xl hover:bg-luxury-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/50"
        >
          <LogoutIcon className="w-5 h-5" />
          <span className="font-medium">로그아웃</span>
        </button>
      </div>
    </aside>
  );
});