/**
 * 필터 기본값 상수
 */
export const FILTER_DEFAULT_VALUE = "무관" as const;

/**
 * 필터 초기 상태
 */
export const DEFAULT_FILTERS = {
  category: FILTER_DEFAULT_VALUE,
  gender: FILTER_DEFAULT_VALUE,
  ageMin: "",
  ageMax: "",
  heightMin: "",
  heightMax: "",
  weightMin: "",
  weightMax: "",
  license: FILTER_DEFAULT_VALUE,
  workExchange: FILTER_DEFAULT_VALUE,
  filmBudget: "100000",
  adBudget: "100000",
  keyword: "",
  skills: [] as string[],
  filmographyTypes: [] as string[],
};

/**
 * 필터 값이 기본값인지 확인하는 헬퍼 함수
 */
export function isDefaultValue(value: string | string[], defaultValue: string | string[]): boolean {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return value === defaultValue || value === "";
}
