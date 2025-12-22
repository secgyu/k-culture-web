"use client";

import Link from "next/link";
import { ChevronLeftIcon } from "./Icons";
import { COLORS } from "@/lib/constants";

interface BackHeaderProps {
  href?: string;
  title: string;
  centered?: boolean; // 타이틀 중앙 정렬 여부
  showBorder?: boolean; // 하단 테두리 표시 여부
  onBack?: () => void; // router.back() 등 커스텀 동작 지원
}

export function BackHeader({
  href = "/",
  title,
  centered = false,
  showBorder = true,
  onBack,
}: BackHeaderProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onBack) {
      e.preventDefault();
      onBack();
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${showBorder ? "border-b border-gray-100" : ""}`}
    >
      <div className="px-4 h-14 flex items-center">
        <Link
          href={href}
          onClick={handleClick}
          className="w-10 h-10 flex items-center justify-center -ml-2 rounded-full hover:bg-gray-100 transition-colors z-50"
          aria-label="뒤로가기"
        >
          <ChevronLeftIcon
            className="w-6 h-6 pointer-events-none"
            style={{ color: COLORS.text.primary }}
          />
        </Link>
        <h1
          className={centered ? "flex-1 text-center text-lg font-semibold -ml-10" : "ml-2 text-base font-semibold"}
          style={{ color: COLORS.text.primary }}
        >
          {title}
        </h1>
      </div>
    </header>
  );
}
