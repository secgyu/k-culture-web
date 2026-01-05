"use client";

import { useFilterStore } from "@/stores/useFilterStore";
import { ChevronDownIcon } from "../Icons";
import { useState } from "react";

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-zinc-800 last:border-b-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="text-body-sm font-medium text-ivory">{title}</span>
        <ChevronDownIcon
          className={`w-4 h-4 text-muted-gray transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}

function FilterChip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-caption font-medium transition-all duration-200 ${
        selected
          ? "bg-gold text-luxury-black"
          : "bg-luxury-tertiary text-muted-gray hover:text-warm-gray hover:bg-zinc-700"
      }`}
    >
      {label}
    </button>
  );
}

function RangeInput({
  label,
  unit,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
}: {
  label: string;
  unit: string;
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      {label && <label className="text-caption text-muted-gray">{label}</label>}
      <div className="flex items-center gap-1.5">
        <input
          type="number"
          placeholder="최소"
          value={minValue}
          onChange={(e) => onMinChange(e.target.value)}
          className="flex-1 min-w-0 bg-luxury-tertiary border border-zinc-700 rounded-lg px-2 py-2 text-ivory text-body-sm placeholder-muted-gray focus:outline-none focus:border-gold transition-colors"
        />
        <span className="text-muted-gray shrink-0">~</span>
        <input
          type="number"
          placeholder="최대"
          value={maxValue}
          onChange={(e) => onMaxChange(e.target.value)}
          className="flex-1 min-w-0 bg-luxury-tertiary border border-zinc-700 rounded-lg px-2 py-2 text-ivory text-body-sm placeholder-muted-gray focus:outline-none focus:border-gold transition-colors"
        />
        <span className="text-caption text-muted-gray shrink-0">{unit}</span>
      </div>
    </div>
  );
}

export function FilterSidebar() {
  const { filters, setFilter, resetFilters, getActiveFilterCount } = useFilterStore();
  const activeCount = getActiveFilterCount();

  const skillOptions = ["연기", "춤", "노래", "악기", "무술", "수영", "운전", "영어", "일본어", "중국어"];
  const filmographyOptions = ["드라마", "영화", "광고", "뮤직비디오", "웹드라마", "독립영화"];

  const toggleSkill = (skill: string) => {
    const newSkills = filters.skills.includes(skill)
      ? filters.skills.filter((s) => s !== skill)
      : [...filters.skills, skill];
    setFilter("skills", newSkills);
  };

  const toggleFilmographyType = (type: string) => {
    const newTypes = filters.filmographyTypes.includes(type)
      ? filters.filmographyTypes.filter((t) => t !== type)
      : [...filters.filmographyTypes, type];
    setFilter("filmographyTypes", newTypes);
  };

  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-20 bg-luxury-secondary border-r border-zinc-800 rounded-2xl p-5 max-h-[calc(100vh-6rem)] overflow-y-auto hide-scrollbar">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-heading-md text-ivory">필터</h2>
            {activeCount > 0 && (
              <span className="px-2 py-0.5 bg-gold text-luxury-black text-caption font-bold rounded-full">
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
              {["무관", "배우", "모델"].map((option) => (
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
              {["무관", "남자", "여자"].map((option) => (
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
              {skillOptions.map((skill) => (
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
              {filmographyOptions.map((type) => (
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
              {["무관", "1종", "2종"].map((option) => (
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
              {["무관", "가능", "불가능"].map((option) => (
                <FilterChip
                  key={option}
                  label={option}
                  selected={filters.품앗이 === option}
                  onClick={() => setFilter("품앗이", option)}
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
              className="w-full bg-luxury-tertiary border border-zinc-700 rounded-lg px-3 py-2 text-ivory text-body-sm placeholder-muted-gray focus:outline-none focus:border-gold transition-colors"
            />
          </FilterSection>
        </div>
      </div>
    </aside>
  );
}
