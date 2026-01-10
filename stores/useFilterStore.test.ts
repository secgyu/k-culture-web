import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { useFilterStore } from "./useFilterStore";

describe("useFilterStore", () => {
  beforeEach(() => {
    useFilterStore.getState().resetFilters();
    useFilterStore.getState().closeBottomSheet();
  });

  afterEach(() => {
    useFilterStore.getState().resetFilters();
  });

  describe("초기 상태", () => {
    it("기본 필터값이 설정되어야 함", () => {
      const { filters } = useFilterStore.getState();

      expect(filters.category).toBe("무관");
      expect(filters.gender).toBe("무관");
      expect(filters.license).toBe("무관");
      expect(filters.workExchange).toBe("무관");
      expect(filters.skills).toEqual([]);
      expect(filters.filmographyTypes).toEqual([]);
      expect(filters.keyword).toBe("");
    });

    it("bottomSheet가 닫혀있어야 함", () => {
      expect(useFilterStore.getState().isBottomSheetOpen).toBe(false);
    });
  });

  describe("setFilter", () => {
    it("단일 필터를 변경할 수 있어야 함", () => {
      const { setFilter } = useFilterStore.getState();

      setFilter("category", "배우");
      expect(useFilterStore.getState().filters.category).toBe("배우");

      setFilter("gender", "남자");
      expect(useFilterStore.getState().filters.gender).toBe("남자");
    });

    it("배열 필터를 변경할 수 있어야 함", () => {
      const { setFilter } = useFilterStore.getState();

      setFilter("skills", ["연기", "춤"]);
      expect(useFilterStore.getState().filters.skills).toEqual(["연기", "춤"]);
    });
  });

  describe("setFilters", () => {
    it("여러 필터를 한번에 변경할 수 있어야 함", () => {
      const { setFilters } = useFilterStore.getState();

      setFilters({
        category: "모델",
        gender: "여자",
        ageMin: "20",
        ageMax: "30",
      });

      const { filters } = useFilterStore.getState();
      expect(filters.category).toBe("모델");
      expect(filters.gender).toBe("여자");
      expect(filters.ageMin).toBe("20");
      expect(filters.ageMax).toBe("30");
    });
  });

  describe("resetFilters", () => {
    it("모든 필터를 초기화해야 함", () => {
      const { setFilters, resetFilters } = useFilterStore.getState();

      setFilters({
        category: "배우",
        gender: "남자",
        skills: ["연기"],
      });

      resetFilters();

      const { filters } = useFilterStore.getState();
      expect(filters.category).toBe("무관");
      expect(filters.gender).toBe("무관");
      expect(filters.skills).toEqual([]);
    });
  });

  describe("bottomSheet", () => {
    it("openBottomSheet로 열 수 있어야 함", () => {
      const { openBottomSheet } = useFilterStore.getState();

      openBottomSheet();
      expect(useFilterStore.getState().isBottomSheetOpen).toBe(true);
    });

    it("closeBottomSheet로 닫을 수 있어야 함", () => {
      const { openBottomSheet, closeBottomSheet } = useFilterStore.getState();

      openBottomSheet();
      closeBottomSheet();
      expect(useFilterStore.getState().isBottomSheetOpen).toBe(false);
    });
  });

  describe("getActiveFilterCount", () => {
    it("기본 상태에서 0을 반환해야 함", () => {
      expect(useFilterStore.getState().getActiveFilterCount()).toBe(0);
    });

    it("필터 변경 시 카운트가 증가해야 함", () => {
      const { setFilter, getActiveFilterCount } = useFilterStore.getState();

      setFilter("category", "배우");
      expect(getActiveFilterCount()).toBe(1);

      setFilter("gender", "남자");
      expect(getActiveFilterCount()).toBe(2);

      setFilter("skills", ["연기"]);
      expect(getActiveFilterCount()).toBe(3);
    });

    it("범위 필터는 하나로 카운트해야 함", () => {
      const { setFilters, getActiveFilterCount } = useFilterStore.getState();

      setFilters({ ageMin: "20", ageMax: "30" });
      expect(getActiveFilterCount()).toBe(1);

      setFilters({ heightMin: "160", heightMax: "180" });
      expect(getActiveFilterCount()).toBe(2);
    });

    it("키워드 필터를 카운트해야 함", () => {
      const { setFilter, getActiveFilterCount } = useFilterStore.getState();

      setFilter("keyword", "홍길동");
      expect(getActiveFilterCount()).toBe(1);
    });
  });
});
