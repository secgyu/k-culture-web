import { z } from "zod";

export const profileFormSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다").max(50, "이름은 50자 이하여야 합니다"),
  phone: z
    .string()
    .regex(/^010-\d{4}-\d{4}$/, "올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)")
    .or(z.string().length(0)),
  introduction: z.string().max(100, "소개는 100자 이하여야 합니다").optional(),
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
  gender: z.string(),
  birthYear: z.string(),
});

export type ProfileFormData = z.infer<typeof profileFormSchema>;
