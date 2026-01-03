"use client";

import { useEffect } from "react";
import { useFilterStore } from "@/stores/useFilterStore";
import { XMarkIcon, ChevronDownIcon } from "../Icons";
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
  unit,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
}: {
  unit: string;
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        placeholder="최소"
        value={minValue}
        onChange={(e) => onMinChange(e.target.value)}
        className="flex-1 bg-luxury-tertiary border border-zinc-700 rounded-lg px-3 py-2 text-ivory text-body-sm placeholder-muted-gray focus:outline-none focus:border-gold transition-colors"
      />
      <span className="text-muted-gray">~</span>
      <input
        type="number"
        placeholder="최대"
        value={maxValue}
        onChange={(e) => onMaxChange(e.target.value)}
        className="flex-1 bg-luxury-tertiary border border-zinc-700 rounded-lg px-3 py-2 text-ivory text-body-sm placeholder-muted-gray focus:outline-none focus:border-gold transition-colors"
      />
      <span className="text-caption text-muted-gray w-8">{unit}</span>
    </div>
  );
}

export function FilterBottomSheet() {
  const { filters, setFilter, resetFilters, isBottomSheetOpen, closeBottomSheet, getActiveFilterCount } =
    useFilterStore();
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

  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isBottomSheetOpen) {
        closeBottomSheet();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isBottomSheetOpen, closeBottomSheet]);

  // 바텀시트 열릴 때 스크롤 방지
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
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={closeBottomSheet} />

      {/* 바텀시트 */}
      <div className="absolute bottom-0 left-0 right-0 bg-luxury-secondary rounded-t-3xl max-h-[85vh] flex flex-col animate-slide-up">
        {/* 핸들바 */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-zinc-600 rounded-full" />
        </div>

        {/* 헤더 */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <h2 className="text-heading-md text-ivory">필터</h2>
            {activeCount > 0 && (
              <span className="px-2 py-0.5 bg-gold text-luxury-black text-caption font-bold rounded-full">
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
              className="w-8 h-8 flex items-center justify-center rounded-full bg-luxury-tertiary"
            >
              <XMarkIcon className="w-5 h-5 text-ivory" />
            </button>
          </div>
        </div>

        {/* 필터 콘텐츠 */}
        <div className="flex-1 overflow-y-auto px-5 pb-6">
          <div className="divide-y divide-zinc-800">
            {/* 구분 */}
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

            {/* 성별 */}
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

            {/* 나이 */}
            <FilterSection title="나이">
              <RangeInput
                unit="세"
                minValue={filters.ageMin}
                maxValue={filters.ageMax}
                onMinChange={(v) => setFilter("ageMin", v)}
                onMaxChange={(v) => setFilter("ageMax", v)}
              />
            </FilterSection>

            {/* 키 */}
            <FilterSection title="키">
              <RangeInput
                unit="cm"
                minValue={filters.heightMin}
                maxValue={filters.heightMax}
                onMinChange={(v) => setFilter("heightMin", v)}
                onMaxChange={(v) => setFilter("heightMax", v)}
              />
            </FilterSection>

            {/* 몸무게 */}
            <FilterSection title="몸무게">
              <RangeInput
                unit="kg"
                minValue={filters.weightMin}
                maxValue={filters.weightMax}
                onMinChange={(v) => setFilter("weightMin", v)}
                onMaxChange={(v) => setFilter("weightMax", v)}
              />
            </FilterSection>

            {/* 특기/자격증 */}
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

            {/* 필모그래피 유형 */}
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

            {/* 운전면허 */}
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

            {/* 품앗이 */}
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

            {/* 키워드 검색 */}
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

        {/* 하단 적용 버튼 */}
        <div className="p-5 border-t border-zinc-800 bg-luxury-secondary">
          <button
            onClick={closeBottomSheet}
            className="w-full py-3 bg-gold text-luxury-black font-semibold text-body-base rounded-xl hover:bg-gold-light transition-colors active:scale-[0.98]"
          >
            {activeCount > 0 ? `${activeCount}개 필터 적용` : "필터 적용"}
          </button>
        </div>
      </div>
    </div>
  );
}
