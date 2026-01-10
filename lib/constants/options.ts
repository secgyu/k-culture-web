export const AGE_RANGE_OPTIONS = ["10대", "20대", "30대", "40대", "50대", "60대 이상"] as const;

export const GENDER_OPTIONS = ["남성", "여성", "기타"] as const;

export const GENDER_SELECT_OPTIONS = [
  { value: "남성", label: "남성" },
  { value: "여성", label: "여성" },
] as const;

export const BIRTH_YEAR_OPTIONS = (() => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 66 }, (_, i) => {
    const year = currentYear - 15 - i;
    return { value: String(year), label: `${year}년` };
  });
})();

export const FOUNDED_YEAR_OPTIONS = (() => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= 1950; i--) {
    years.push({ value: String(i), label: `${i}년` });
  }
  return years;
})();

export const AGENCY_SPECIALTY_OPTIONS = [
  { value: "영화", label: "영화" },
  { value: "드라마", label: "드라마" },
  { value: "광고/CF", label: "광고/CF" },
  { value: "뮤직비디오", label: "뮤직비디오" },
  { value: "웹드라마", label: "웹드라마" },
  { value: "OTT 시리즈", label: "OTT 시리즈" },
] as const;

export const ROLE_TYPE_OPTIONS = ["주연", "조연", "단역", "엑스트라", "특별출연"] as const;

export const GENRE_OPTIONS = ["영화", "드라마", "뮤지컬", "연극", "웹드라마", "광고", "기타"] as const;

export const REPRESENTATIVE_GENRE_OPTIONS = [
  "액션",
  "로맨스",
  "코미디",
  "스릴러",
  "공포",
  "SF",
  "판타지",
  "드라마",
] as const;

export const POSITION_OPTIONS = ["배우", "모델", "가수", "MC", "기타"] as const;

export const FEE_OPTIONS = ["협의", "100만원 이하", "100~300만원", "300~500만원", "500만원 이상"] as const;

export const SPECIALTY_OPTIONS = [
  "드라마",
  "영화제작",
  "광고/CF",
  "뮤직비디오",
  "웹드라마",
  "SF",
  "스릴러배우전문",
] as const;

export const PROJECT_TYPE_OPTIONS = ["영화", "드라마", "웹드라마", "OTT 시리즈", "뮤직비디오", "광고", "기타"] as const;

export const PROJECT_GENRE_OPTIONS = [
  "액션",
  "로맨스",
  "코미디",
  "드라마",
  "스릴러",
  "공포",
  "SF",
  "판타지",
  "사극",
  "기타",
] as const;

export const CATEGORY_FILTER_OPTIONS = ["무관", "배우", "모델"] as const;
export const GENDER_FILTER_OPTIONS = ["무관", "남자", "여자"] as const;
export const LICENSE_FILTER_OPTIONS = ["무관", "1종", "2종"] as const;
export const WORK_EXCHANGE_FILTER_OPTIONS = ["무관", "가능", "불가능"] as const;

export const SKILL_OPTIONS = [
  "연기",
  "춤",
  "노래",
  "악기",
  "무술",
  "수영",
  "운전",
  "영어",
  "일본어",
  "중국어",
] as const;

export const FILMOGRAPHY_TYPE_OPTIONS = ["드라마", "영화", "광고", "뮤직비디오", "웹드라마", "독립영화"] as const;

export const PROJECT_STATUS_OPTIONS = [
  { value: "기획중", label: "기획중" },
  { value: "진행중", label: "진행중" },
  { value: "캐스팅완료", label: "캐스팅완료" },
] as const;

export const generateYears = (count: number = 30, startYear: number = new Date().getFullYear()) =>
  Array.from({ length: count }, (_, i) => startYear - i);

export type AgeRange = (typeof AGE_RANGE_OPTIONS)[number];
export type Gender = (typeof GENDER_OPTIONS)[number];
export type RoleType = (typeof ROLE_TYPE_OPTIONS)[number];
export type Genre = (typeof GENRE_OPTIONS)[number];
export type Position = (typeof POSITION_OPTIONS)[number];
export type Fee = (typeof FEE_OPTIONS)[number];
export type SkillOption = (typeof SKILL_OPTIONS)[number];
export type FilmographyTypeOption = (typeof FILMOGRAPHY_TYPE_OPTIONS)[number];
export type ProjectStatusOption = (typeof PROJECT_STATUS_OPTIONS)[number]["value"];
