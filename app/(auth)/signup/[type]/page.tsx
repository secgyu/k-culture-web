"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { AuthLayout } from "@/components/common";
import { Button, FormField, Input, PasswordInput } from "@/components/ui";
import { TermsAgreementSection } from "@/components/auth/TermsAgreementSection";
import { useSignup } from "@/src/auth/auth";
import { signupFormSchema, type SignupFormData } from "@/lib/validations";

const SIGNUP_CONFIG = {
  actor: {
    title: "배우 회원가입",
    subtitle: "프로필을 등록하고 캐스팅 기회를 받으세요",
    onboardingPath: "/onboarding/actor/step1",
  },
  agency: {
    title: "캐스팅 담당자 회원가입",
    subtitle: "AI로 완벽한 배우를 찾아보세요",
    onboardingPath: "/onboarding/agency/step1",
  },
} as const;

export default function SignupPage() {
  const params = useParams();
  const router = useRouter();
  const signupMutation = useSignup();

  const type = params.type as "actor" | "agency";
  const config = SIGNUP_CONFIG[type];

  if (!config) {
    router.push("/signup/actor");
    return null;
  }

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      termsAgreed: false,
      privacyAgreed: false,
      marketingAgreed: false,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = form;

  const onSubmit = handleSubmit((data) => {
    signupMutation.mutate(
      {
        data: {
          email: data.email,
          password: data.password,
          passwordConfirm: data.passwordConfirm,
          type,
          termsAgreed: data.termsAgreed,
          privacyAgreed: data.privacyAgreed,
          marketingAgreed: data.marketingAgreed || false,
        },
      },
      {
        onSuccess: () => {
          toast.success("회원가입이 완료되었습니다");
          router.push(config.onboardingPath);
        },
        onError: () => {
          toast.error("회원가입에 실패했습니다");
        },
      }
    );
  });

  return (
    <AuthLayout title={config.title} subtitle={config.subtitle}>
      <form onSubmit={onSubmit} className="space-y-5">
        <FormField label="이메일" error={errors.email?.message}>
          <Input
            type="email"
            placeholder={type === "agency" ? "업무용 이메일을 입력하세요" : "이메일 주소를 입력하세요"}
            {...register("email")}
            error={!!errors.email}
          />
        </FormField>

        <FormField label="비밀번호" error={errors.password?.message} hint="영문, 숫자를 포함한 8자 이상">
          <PasswordInput placeholder="8자 이상 입력하세요" {...register("password")} error={!!errors.password} />
        </FormField>

        <FormField label="비밀번호 확인" error={errors.passwordConfirm?.message}>
          <PasswordInput
            placeholder="비밀번호를 다시 입력하세요"
            {...register("passwordConfirm")}
            error={!!errors.passwordConfirm}
          />
        </FormField>

        <TermsAgreementSection watch={watch} setValue={setValue} errors={errors} />

        <Button type="submit" variant="gold" fullWidth disabled={!isValid} loading={signupMutation.isPending}>
          회원가입
        </Button>

        <div className="text-center">
          <span className="text-muted-gray">이미 계정이 있으신가요? </span>
          <Link href="/login" className="text-gold hover:text-gold-light transition-colors">
            로그인
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
