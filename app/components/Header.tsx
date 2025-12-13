"use client";

import { ChevronLeftIcon, MagnifyingGlassIcon } from "./Icons";

interface HeaderProps {
  title: string;
  highlightedName?: string;
}

export default function Header({ title, highlightedName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
        <button
          className="w-10 h-10 flex items-center justify-center -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="뒤로가기"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
        </button>

        <h1 className="text-base font-semibold text-gray-900 flex items-center gap-1">
          {highlightedName && <span className="text-gray-500">&apos;</span>}
          {highlightedName && <span className="text-gray-900">{highlightedName}</span>}
          {highlightedName && <span className="text-gray-500">&apos;</span>}
          <span className="text-gray-600">{title}</span>
        </h1>

        <button
          className="w-10 h-10 flex items-center justify-center -mr-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="검색"
        >
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-800" />
        </button>
      </div>
    </header>
  );
}
