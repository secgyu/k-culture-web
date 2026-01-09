"use client";

import { useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { DoDreamLogo } from "@/components/common";
import { MenuIcon } from "@/components/common/Misc/Icons";
import { useAuthStore } from "@/stores/useAuthStore";
import { DashboardSidebar } from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType?: "actor" | "agency";
}

export function DashboardLayout({ children, userType = "actor" }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = useCallback(() => {
    logout();
    router.push("/login");
  }, [logout, router]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black flex">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-luxury-black/80 backdrop-blur-sm z-40 lg:hidden" onClick={closeMobileMenu} />
      )}

      <DashboardSidebar
        userType={userType}
        pathname={pathname}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onLogout={handleLogout}
      />

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
