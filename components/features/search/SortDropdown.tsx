"use client";

import { useEffect, useRef, useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ChevronDownIcon } from "@/components/common/Misc/Icons";

export type SortOption = "latest" | "filmography" | "age-asc" | "age-desc" | "name";

interface SortOptionItem {
  value: SortOption;
  label: string;
}

const sortOptions: SortOptionItem[] = [
  { value: "latest", label: "최신 등록순" },
  { value: "filmography", label: "필모그래피 많은 순" },
  { value: "age-asc", label: "나이 낮은 순" },
  { value: "age-desc", label: "나이 높은 순" },
  { value: "name", label: "이름순 (가나다)" },
];

interface SortDropdownProps {
  onSortChange?: (sort: SortOption) => void;
}

export function SortDropdown({ onSortChange }: SortDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentSort = (searchParams.get("sort") as SortOption) || "latest";
  const currentOption = sortOptions.find((opt) => opt.value === currentSort) || sortOptions[0];

  const handleSelect = (option: SortOptionItem) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", option.value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    setIsOpen(false);
    onSortChange?.(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-luxury-secondary text-body-sm text-ivory flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 transition-colors duration-200 hover:border-zinc-600"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-muted-gray">정렬:</span>
        <span className="font-medium">{currentOption.label}</span>
        <ChevronDownIcon
          className={`text-muted-gray h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="bg-luxury-secondary animate-fade-in absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-zinc-700 shadow-xl">
          <ul role="listbox" className="py-1">
            {sortOptions.map((option) => (
              <li key={option.value}>
                <button
                  role="option"
                  aria-selected={currentSort === option.value}
                  onClick={() => handleSelect(option)}
                  className={`text-body-sm w-full px-4 py-2.5 text-left transition-colors duration-150 ${
                    currentSort === option.value ? "bg-gold/10 text-gold font-medium" : "text-ivory hover:bg-zinc-700"
                  }`}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function SortButton({ onClick }: { onClick: () => void }) {
  const searchParams = useSearchParams();
  const currentSort = (searchParams.get("sort") as SortOption) || "latest";
  const currentOption = sortOptions.find((opt) => opt.value === currentSort) || sortOptions[0];

  return (
    <button
      onClick={onClick}
      className="bg-luxury-secondary text-body-sm text-ivory flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2.5 shadow-lg lg:hidden"
      aria-label="정렬 옵션 열기"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
        />
      </svg>
      <span>{currentOption.label}</span>
    </button>
  );
}

export function SortBottomSheet({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = (searchParams.get("sort") as SortOption) || "latest";

  const handleSelect = (option: SortOptionItem) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", option.value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="animate-fade-in absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="bg-luxury-secondary animate-slide-up absolute right-0 bottom-0 left-0 rounded-t-3xl">
        <div className="flex justify-center pt-3 pb-2">
          <div className="h-1 w-10 rounded-full bg-zinc-600" />
        </div>

        <div className="border-b border-zinc-800 px-5 py-3">
          <h2 className="text-heading-md text-ivory">정렬</h2>
        </div>

        <ul className="px-2 py-2">
          {sortOptions.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => handleSelect(option)}
                className={`text-body-base flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-colors duration-150 ${
                  currentSort === option.value ? "bg-gold/10 text-gold font-medium" : "text-ivory hover:bg-zinc-700/50"
                }`}
              >
                <span>{option.label}</span>
                {currentSort === option.value && (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="h-8" />
      </div>
    </div>
  );
}
