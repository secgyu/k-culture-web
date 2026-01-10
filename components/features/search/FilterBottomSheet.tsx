"use client";

import { useCallback, useEffect } from "react";

import { XMarkIcon } from "@/components/common/Misc/Icons";

import {
  CATEGORY_FILTER_OPTIONS,
  FILMOGRAPHY_TYPE_OPTIONS,
  GENDER_FILTER_OPTIONS,
  LICENSE_FILTER_OPTIONS,
  SKILL_OPTIONS,
  WORK_EXCHANGE_FILTER_OPTIONS,
} from "@/lib/constants/options";

import { useFilterStore } from "@/stores/useFilterStore";

import { FilterChip } from "./FilterChip";
import { FilterSection } from "./FilterSection";
import { RangeInput } from "./RangeInput";

export function FilterBottomSheet() {
  const { filters, setFilter, resetFilters, isBottomSheetOpen, closeBottomSheet, getActiveFilterCount } =
    useFilterStore();
  const activeCount = getActiveFilterCount();

  const toggleSkill = useCallback(
    (skill: string) => {
      const newSkills = filters.skills.includes(skill)
        ? filters.skills.filter((s) => s !== skill)
        : [...filters.skills, skill];
      setFilter("skills", newSkills);
    },
    [filters.skills, setFilter]
  );

  const toggleFilmographyType = useCallback(
    (type: string) => {
      const newTypes = filters.filmographyTypes.includes(type)
        ? filters.filmographyTypes.filter((t) => t !== type)
        : [...filters.filmographyTypes, type];
      setFilter("filmographyTypes", newTypes);
    },
    [filters.filmographyTypes, setFilter]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isBottomSheetOpen) {
        closeBottomSheet();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isBottomSheetOpen, closeBottomSheet]);

  useEffect(() => {
    if (isBottomSheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBottomSheetOpen]);

  if (!isBottomSheetOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="animate-fade-in absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeBottomSheet} />

      <div className="bg-luxury-secondary animate-slide-up absolute right-0 bottom-0 left-0 flex max-h-[85vh] flex-col rounded-t-3xl">
        <div className="flex justify-center pt-3 pb-2">
          <div className="h-1 w-10 rounded-full bg-zinc-600" />
        </div>

        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
          <div className="flex items-center gap-2">
            <h2 className="text-heading-md text-ivory">필터</h2>
            {activeCount > 0 && (
              <span className="bg-gold text-luxury-black text-caption rounded-full px-2 py-0.5 font-bold">
                {activeCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={resetFilters} className="text-caption text-muted-gray hover:text-gold transition-colors">
              초기화
            </button>
            <button
              onClick={closeBottomSheet}
              aria-label="필터 닫기"
              className="bg-luxury-tertiary flex h-8 w-8 items-center justify-center rounded-full"
            >
              <XMarkIcon className="text-ivory h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-6">
          <div className="divide-y divide-zinc-800">
            <FilterSection title="구분">
              <div className="flex flex-wrap gap-2">
                {CATEGORY_FILTER_OPTIONS.map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    selected={filters.category === option}
                    onClick={() => setFilter("category", option)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="성별">
              <div className="flex flex-wrap gap-2">
                {GENDER_FILTER_OPTIONS.map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    selected={filters.gender === option}
                    onClick={() => setFilter("gender", option)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="나이">
              <RangeInput
                unit="세"
                minValue={filters.ageMin}
                maxValue={filters.ageMax}
                onMinChange={(v) => setFilter("ageMin", v)}
                onMaxChange={(v) => setFilter("ageMax", v)}
              />
            </FilterSection>

            <FilterSection title="키">
              <RangeInput
                unit="cm"
                minValue={filters.heightMin}
                maxValue={filters.heightMax}
                onMinChange={(v) => setFilter("heightMin", v)}
                onMaxChange={(v) => setFilter("heightMax", v)}
              />
            </FilterSection>

            <FilterSection title="몸무게">
              <RangeInput
                unit="kg"
                minValue={filters.weightMin}
                maxValue={filters.weightMax}
                onMinChange={(v) => setFilter("weightMin", v)}
                onMaxChange={(v) => setFilter("weightMax", v)}
              />
            </FilterSection>

            <FilterSection title="특기/자격증" defaultOpen={false}>
              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map((skill) => (
                  <FilterChip
                    key={skill}
                    label={skill}
                    selected={filters.skills.includes(skill)}
                    onClick={() => toggleSkill(skill)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="필모그래피 유형" defaultOpen={false}>
              <div className="flex flex-wrap gap-2">
                {FILMOGRAPHY_TYPE_OPTIONS.map((type) => (
                  <FilterChip
                    key={type}
                    label={type}
                    selected={filters.filmographyTypes.includes(type)}
                    onClick={() => toggleFilmographyType(type)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="운전면허" defaultOpen={false}>
              <div className="flex flex-wrap gap-2">
                {LICENSE_FILTER_OPTIONS.map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    selected={filters.license === option}
                    onClick={() => setFilter("license", option)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="품앗이" defaultOpen={false}>
              <div className="flex flex-wrap gap-2">
                {WORK_EXCHANGE_FILTER_OPTIONS.map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    selected={filters.workExchange === option}
                    onClick={() => setFilter("workExchange", option)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="키워드">
              <input
                type="text"
                placeholder="이름 또는 키워드 입력"
                value={filters.keyword}
                onChange={(e) => setFilter("keyword", e.target.value)}
                className="bg-luxury-tertiary text-ivory text-body-sm placeholder-muted-gray focus:border-gold w-full rounded-lg border border-zinc-700 px-3 py-2 transition-colors focus:outline-none"
              />
            </FilterSection>
          </div>
        </div>

        <div className="bg-luxury-secondary border-t border-zinc-800 p-5">
          <button
            onClick={closeBottomSheet}
            className="bg-gold text-luxury-black text-body-base hover:bg-gold-light w-full rounded-xl py-3 font-semibold transition-colors active:scale-[0.98]"
          >
            {activeCount > 0 ? `${activeCount}개 필터 적용` : "필터 적용"}
          </button>
        </div>
      </div>
    </div>
  );
}
