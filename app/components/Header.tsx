"use client";

import { ArrowLeftIcon, SearchIcon } from "@/app/components/Icons";

interface HeaderProps {
  title: string;
  highlightedName?: string;
}

export default function Header({ title, highlightedName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 h-12 bg-luxury-black border-b border-border">
      <div className="max-w-lg mx-auto h-full flex items-center justify-between px-5 gap-px">
        <div className="flex items-center gap-3 w-6">
          <button className="w-6 h-6 flex items-center justify-center" aria-label="뒤로가기">
            <ArrowLeftIcon className="w-6 h-6 text-ivory" />
          </button>
        </div>
        <h1 className="text-base leading-snug tracking-tight font-semibold flex items-center justify-center text-ivory">
          {highlightedName && <span className="text-muted-gray">&apos;</span>}
          {highlightedName && <span className="text-ivory">{highlightedName}</span>}
          {highlightedName && <span className="text-muted-gray">&apos;</span>}
          <span className="ml-1 text-ivory">{title}</span>
        </h1>
        <div className="flex items-center justify-end gap-3 w-6">
          <button className="w-6 h-6 flex items-center justify-center" aria-label="검색">
            <SearchIcon className="w-6 h-6 text-ivory" />
          </button>
        </div>
      </div>
    </header>
  );
}
