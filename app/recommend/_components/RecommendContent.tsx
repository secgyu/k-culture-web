"use client";

import { useState, useMemo, useEffect } from "react";
import Header from "../../components/Header";
import { PageLayout } from "../../components/PageLayout";
import FilterBar from "../../components/FilterBar";
import FilterModal from "../../components/FilterModal";
import EmptyState from "../../components/EmptyState";
import ActorCarousel from "../../components/ActorCarousel";
import { useRecommendActors } from "@/src/actors/actors";
import { GENDER_OPTIONS, AGE_RANGE_OPTIONS, ROLE_TYPE_OPTIONS } from "@/lib/constants";

const filterOptions = [
  { id: "gender", label: "성별" },
  { id: "ageRange", label: "나이대" },
  { id: "roleType", label: "역할유형" },
];

const filterOptionsData: Record<string, { value: string; label: string }[]> = {
  gender: [...GENDER_OPTIONS, "무관" as const].map((v) => ({ value: v, label: v })),
  ageRange: AGE_RANGE_OPTIONS.map((v) => ({ value: v, label: v })),
  roleType: ROLE_TYPE_OPTIONS.map((v) => ({ value: v, label: v })),
};

const filterTitles: Record<string, string> = {
  gender: "성별",
  ageRange: "나이대",
  roleType: "역할 유형",
};

export function RecommendContent() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [activeFilterId, setActiveFilterId] = useState<string | null>(null);

  const { mutate: recommendActors, data, isPending } = useRecommendActors();

  const actors = useMemo(() => {
    const actorList = data?.data?.recommendedActors ?? [];
    return actorList.map((actor) => ({
      id: actor.id,
      name: actor.name,
      imageUrl: actor.imageUrl ?? "",
      age: "",
      filmography: 0,
      tags: actor.matchReasons ?? [],
      matchScore: actor.matchScore,
    }));
  }, [data]);

  // 필터가 변경될 때마다 추천 요청
  useEffect(() => {
    if (Object.keys(selectedFilters).length > 0) {
      recommendActors({
        data: {
          filters: {
            gender: selectedFilters.gender,
            ageRange: selectedFilters.ageRange,
            roleType: selectedFilters.roleType,
          },
        },
      });
    }
  }, [selectedFilters, recommendActors]);

  const handleFilterClick = (filterId: string) => {
    setActiveFilterId(filterId);
  };

  const handleFilterSelect = (value: string) => {
    if (activeFilterId) {
      const option = filterOptionsData[activeFilterId]?.find((opt) => opt.value === value);
      if (option) {
        setSelectedFilters((prev) => ({
          ...prev,
          [activeFilterId]: option.value,
        }));
      }
    }
  };

  const handleCloseModal = () => {
    setActiveFilterId(null);
  };

  const handleEmptyButtonClick = () => {
    setActiveFilterId("gender");
  };

  const hasSearched = Object.keys(selectedFilters).length > 0;
  const hasResults = hasSearched && actors.length > 0;

  return (
    <PageLayout>
      <Header title="역 추천 배우" highlightedName="서은우" />

      <FilterBar
        filters={filterOptions}
        selectedFilters={Object.fromEntries(
          Object.entries(selectedFilters).map(([key, value]) => {
            const option = filterOptionsData[key]?.find((opt) => opt.value === value);
            return [key, option?.label ?? value];
          })
        )}
        onFilterClick={handleFilterClick}
      />

      <main className="flex-1 flex flex-col justify-between pb-5">
        {isPending ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
          </div>
        ) : hasResults ? (
          <ActorCarousel actors={actors} />
        ) : (
          <EmptyState
            message={
              hasSearched
                ? `검색조건에 해당되는 배우를\n찾을 수 없습니다`
                : `조건을 선택하면\nAI가 배우를 추천해드립니다`
            }
            buttonLabel="조건 선택하기"
            onButtonClick={handleEmptyButtonClick}
          />
        )}
      </main>

      <FilterModal
        isOpen={activeFilterId !== null}
        onClose={handleCloseModal}
        title={activeFilterId ? filterTitles[activeFilterId] : ""}
        options={activeFilterId ? filterOptionsData[activeFilterId] || [] : []}
        selectedValue={activeFilterId ? selectedFilters[activeFilterId] : undefined}
        onSelect={handleFilterSelect}
      />
    </PageLayout>
  );
}
