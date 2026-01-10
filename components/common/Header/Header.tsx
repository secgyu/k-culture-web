"use client";

import { ArrowLeftIcon, SearchIcon } from "@/components/common/Misc/Icons";

interface HeaderProps {
  title: string;
  highlightedName?: string;
}

export default function Header({ title, highlightedName }: HeaderProps) {
  return (
    <header className="bg-luxury-black border-border sticky top-0 z-50 h-12 border-b">
      <div className="mx-auto flex h-full max-w-lg items-center justify-between gap-px px-5">
        <div className="flex w-6 items-center gap-3">
          <button className="flex h-6 w-6 items-center justify-center" aria-label="뒤로가기">
            <ArrowLeftIcon className="text-ivory h-6 w-6" />
          </button>
        </div>
        <h1 className="text-ivory flex items-center justify-center text-base leading-snug font-semibold tracking-tight">
          {highlightedName && <span className="text-muted-gray">&apos;</span>}
          {highlightedName && <span className="text-ivory">{highlightedName}</span>}
          {highlightedName && <span className="text-muted-gray">&apos;</span>}
          <span className="text-ivory ml-1">{title}</span>
        </h1>
        <div className="flex w-6 items-center justify-end gap-3">
          <button className="flex h-6 w-6 items-center justify-center" aria-label="검색">
            <SearchIcon className="text-ivory h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
