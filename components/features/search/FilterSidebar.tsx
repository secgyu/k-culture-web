"use client";

import { useCallback } from "react";

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

export function FilterSidebar() {
  const { filters, setFilter, resetFilters, getActiveFilterCount } = useFilterStore();
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

  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      <div className="bg-luxury-secondary hide-scrollbar sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border-r border-zinc-800 p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-heading-md text-ivory">필터</h2>
            {activeCount > 0 && (
              <span className="bg-gold text-luxury-black text-caption rounded-full px-2 py-0.5 font-bold">
                {activeCount}
              </span>
            )}
          </div>
          <button onClick={resetFilters} className="text-caption text-muted-gray hover:text-gold transition-colors">
            초기화
          </button>
        </div>

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
              label=""
              unit="세"
              minValue={filters.ageMin}
              maxValue={filters.ageMax}
              onMinChange={(v) => setFilter("ageMin", v)}
              onMaxChange={(v) => setFilter("ageMax", v)}
            />
          </FilterSection>

          <FilterSection title="키">
            <RangeInput
              label=""
              unit="cm"
              minValue={filters.heightMin}
              maxValue={filters.heightMax}
              onMinChange={(v) => setFilter("heightMin", v)}
              onMaxChange={(v) => setFilter("heightMax", v)}
            />
          </FilterSection>

          <FilterSection title="몸무게">
            <RangeInput
              label=""
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
    </aside>
  );
}
