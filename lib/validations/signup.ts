import { z } from "zod";

export const signupFormSchema = z
  .object({
    email: z.string().email("올바른 이메일 형식이 아닙니다"),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
    passwordConfirm: z.string(),
    termsAgreed: z.boolean().refine((val) => val === true, {
      message: "서비스 이용약관에 동의해주세요",
    }),
    privacyAgreed: z.boolean().refine((val) => val === true, {
      message: "개인정보 처리방침에 동의해주세요",
    }),
    marketingAgreed: z.boolean().optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["passwordConfirm"],
  });

export type SignupFormData = z.infer<typeof signupFormSchema>;
