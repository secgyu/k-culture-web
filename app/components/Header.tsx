"use client";

import { COLORS } from "@/lib/constants";

interface HeaderProps {
  title: string;
  highlightedName?: string;
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12H19M5 12L11 18M5 12L11 6"
        stroke={COLORS.text.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={COLORS.text.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header({ title, highlightedName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white" style={{ height: "48px" }}>
      <div
        className="max-w-lg mx-auto h-full flex items-center justify-between"
        style={{ padding: "0px 20px", gap: "1px" }}
      >
        <div className="flex items-center gap-3" style={{ width: "24px" }}>
          <button className="w-6 h-6 flex items-center justify-center" aria-label="뒤로가기">
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        </div>
        <h1
          className="font-semibold flex items-center justify-center"
          style={{
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "-0.02em",
            color: COLORS.text.primary,
          }}
        >
          {highlightedName && <span style={{ color: COLORS.text.muted }}>&apos;</span>}
          {highlightedName && <span style={{ color: COLORS.text.primary }}>{highlightedName}</span>}
          {highlightedName && <span style={{ color: COLORS.text.muted }}>&apos;</span>}
          <span className="ml-1" style={{ color: COLORS.text.primary }}>
            {title}
          </span>
        </h1>
        <div className="flex items-center justify-end gap-3" style={{ width: "24px" }}>
          <button className="w-6 h-6 flex items-center justify-center" aria-label="검색">
            <SearchIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
