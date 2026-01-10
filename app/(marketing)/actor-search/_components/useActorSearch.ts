import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useGetActors } from "@/src/actors/actors";
import { useAuthStore } from "@/stores/useAuthStore";
import { SortOption } from "@/components/features/search";
import { GetActorsSortBy } from "@/src/model";

/**
 * 배우 검색 로직을 담당하는 커스텀 훅
 */
export function useActorSearch() {
  const searchParams = useSearchParams();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [page, setPage] = useState(1);

  const currentSort = (searchParams.get("sort") as SortOption) || "latest";

  // Sort 옵션을 API sortBy 파라미터로 매핑
  const getSortByParam = (sortOption: SortOption): GetActorsSortBy => {
    switch (sortOption) {
      case "filmography":
        return GetActorsSortBy.views_high;
      case "latest":
      default:
        return GetActorsSortBy.recent;
    }
  };

  const { data: actorsData, isLoading } = useGetActors({
    page,
    limit: 20,
    sortBy: getSortByParam(currentSort),
  });

  const actors = actorsData?.data?.actors || [];
  const pagination = actorsData?.data?.pagination;

  return {
    actors,
    pagination,
    isLoading,
    isAuthenticated,
    currentSort,
    page,
    setPage,
  };
}
