import { z } from "zod";

export const onboardingStep1Schema = z.object({
  name: z.string().min(1, "활동명을 입력해주세요"),
  gender: z.string().min(1, "성별을 선택해주세요"),
  birthYear: z.string().min(1, "출생년도를 선택해주세요"),
  height: z
    .string()
    .refine((val) => !val || (Number(val) >= 100 && Number(val) <= 250), {
      message: "키는 100~250cm 사이여야 합니다",
    })
    .optional(),
  weight: z
    .string()
    .refine((val) => !val || (Number(val) >= 30 && Number(val) <= 200), {
      message: "몸무게는 30~200kg 사이여야 합니다",
    })
    .optional(),
});

export const agencyOnboardingSchema = z.object({
  agencyName: z.string().min(1, "회사명을 입력해주세요"),
  representativeName: z.string().min(1, "담당자명을 입력해주세요"),
  foundedYear: z.string().min(1, "설립연도를 선택해주세요"),
  specialty: z.string().min(1, "주요 분야를 선택해주세요"),
});

export type OnboardingStep1Data = z.infer<typeof onboardingStep1Schema>;
export type AgencyOnboardingData = z.infer<typeof agencyOnboardingSchema>;