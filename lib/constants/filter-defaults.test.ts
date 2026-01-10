import { describe, expect, it } from "vitest";

import { DEFAULT_FILTERS, FILTER_DEFAULT_VALUE, isDefaultValue } from "./filter-defaults";

describe("FILTER_DEFAULT_VALUE", () => {
  it('"무관"이어야 함', () => {
    expect(FILTER_DEFAULT_VALUE).toBe("무관");
  });
});

describe("DEFAULT_FILTERS", () => {
  it("모든 필드가 정의되어야 함", () => {
    expect(DEFAULT_FILTERS.category).toBe("무관");
    expect(DEFAULT_FILTERS.gender).toBe("무관");
    expect(DEFAULT_FILTERS.license).toBe("무관");
    expect(DEFAULT_FILTERS.workExchange).toBe("무관");
    expect(DEFAULT_FILTERS.keyword).toBe("");
    expect(DEFAULT_FILTERS.skills).toEqual([]);
    expect(DEFAULT_FILTERS.filmographyTypes).toEqual([]);
  });

  it("범위 필터가 빈 문자열이어야 함", () => {
    expect(DEFAULT_FILTERS.ageMin).toBe("");
    expect(DEFAULT_FILTERS.ageMax).toBe("");
    expect(DEFAULT_FILTERS.heightMin).toBe("");
    expect(DEFAULT_FILTERS.heightMax).toBe("");
    expect(DEFAULT_FILTERS.weightMin).toBe("");
    expect(DEFAULT_FILTERS.weightMax).toBe("");
  });

  it("예산 필터에 기본값이 있어야 함", () => {
    expect(DEFAULT_FILTERS.filmBudget).toBe("100000");
    expect(DEFAULT_FILTERS.adBudget).toBe("100000");
  });
});

describe("isDefaultValue", () => {
  describe("문자열 값", () => {
    it('"무관"은 기본값이어야 함', () => {
      expect(isDefaultValue("무관", FILTER_DEFAULT_VALUE)).toBe(true);
    });

    it("빈 문자열은 기본값이어야 함", () => {
      expect(isDefaultValue("", FILTER_DEFAULT_VALUE)).toBe(true);
    });

    it("다른 값은 기본값이 아니어야 함", () => {
      expect(isDefaultValue("배우", FILTER_DEFAULT_VALUE)).toBe(false);
      expect(isDefaultValue("남자", FILTER_DEFAULT_VALUE)).toBe(false);
    });
  });

  describe("배열 값", () => {
    it("빈 배열은 기본값이어야 함", () => {
      expect(isDefaultValue([], [])).toBe(true);
    });

    it("요소가 있는 배열은 기본값이 아니어야 함", () => {
      expect(isDefaultValue(["연기"], [])).toBe(false);
      expect(isDefaultValue(["영화", "드라마"], [])).toBe(false);
    });
  });
});
