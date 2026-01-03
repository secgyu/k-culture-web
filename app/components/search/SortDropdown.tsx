"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ChevronDownIcon } from "../Icons";

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
        className="flex items-center gap-2 px-4 py-2 bg-luxury-secondary border border-zinc-700 rounded-lg text-body-sm text-ivory hover:border-zinc-600 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-muted-gray">정렬:</span>
        <span className="font-medium">{currentOption.label}</span>
        <ChevronDownIcon
          className={`w-4 h-4 text-muted-gray transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-luxury-secondary border border-zinc-700 rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
          <ul role="listbox" className="py-1">
            {sortOptions.map((option) => (
              <li key={option.value}>
                <button
                  role="option"
                  aria-selected={currentSort === option.value}
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-4 py-2.5 text-body-sm transition-colors duration-150 ${
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
      className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-luxury-secondary border border-zinc-700 rounded-full text-body-sm text-ivory shadow-lg"
      aria-label="정렬 옵션 열기"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="absolute bottom-0 left-0 right-0 bg-luxury-secondary rounded-t-3xl animate-slide-up">
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-zinc-600 rounded-full" />
        </div>

        <div className="px-5 py-3 border-b border-zinc-800">
          <h2 className="text-heading-md text-ivory">정렬</h2>
        </div>

        <ul className="py-2 px-2">
          {sortOptions.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-body-base transition-colors duration-150 flex items-center justify-between ${
                  currentSort === option.value ? "bg-gold/10 text-gold font-medium" : "text-ivory hover:bg-zinc-700/50"
                }`}
              >
                <span>{option.label}</span>
                {currentSort === option.value && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
