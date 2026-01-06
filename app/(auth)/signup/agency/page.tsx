"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLayout } from "@/components/common";
import { CheckIcon } from "@/components/common/Misc/Icons";
import { Button, FormField, Input, PasswordInput } from "@/components/ui";
import { useSignup } from "@/src/auth/auth";
import { signupFormSchema, type SignupFormData } from "@/lib/validations";

export default function AgencySignupPage() {
  const router = useRouter();
  const signupMutation = useSignup();

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

  const termsAgreed = watch("termsAgreed");
  const privacyAgreed = watch("privacyAgreed");
  const marketingAgreed = watch("marketingAgreed");

  const allAgreed = termsAgreed && privacyAgreed && marketingAgreed;

  const handleAgreeAll = () => {
    const newState = !allAgreed;
    setValue("termsAgreed", newState);
    setValue("privacyAgreed", newState);
    setValue("marketingAgreed", newState);
  };

  const onSubmit = handleSubmit((data) => {
    signupMutation.mutate(
      {
        data: {
          email: data.email,
          password: data.password,
          passwordConfirm: data.passwordConfirm,
          type: "agency",
          termsAgreed: data.termsAgreed,
          privacyAgreed: data.privacyAgreed,
          marketingAgreed: data.marketingAgreed || false,
        },
      },
      {
        onSuccess: () => {
          router.push("/onboarding/agency/step1");
        },
      }
    );
  });

  return (
    <AuthLayout title="캐스팅 담당자 회원가입" subtitle="AI로 완벽한 배우를 찾아보세요">
      <form onSubmit={onSubmit} className="space-y-5">
        <FormField label="이메일" error={errors.email?.message}>
          <Input type="email" placeholder="업무용 이메일을 입력하세요" {...register("email")} error={!!errors.email} />
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

        <div className="space-y-3 pt-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <button
              type="button"
              onClick={handleAgreeAll}
              className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                termsAgreed && privacyAgreed && marketingAgreed
                  ? "bg-gold border-gold"
                  : "border-muted-gray group-hover:border-warm-gray"
              }`}
            >
              {termsAgreed && privacyAgreed && marketingAgreed && <CheckIcon className="w-3 h-3 text-luxury-black" />}
            </button>
            <span className="text-ivory font-medium">전체 동의</span>
          </label>

          <div className="border-t border-border pt-3 space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <button
                type="button"
                onClick={() => setValue("termsAgreed", !termsAgreed)}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                  termsAgreed ? "bg-gold border-gold" : "border-muted-gray group-hover:border-warm-gray"
                }`}
              >
                {termsAgreed && <CheckIcon className="w-3 h-3 text-luxury-black" />}
              </button>
              <span className="text-warm-gray text-sm">
                <span className="text-gold">[필수]</span> 서비스 이용약관 동의
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <button
                type="button"
                onClick={() => setValue("privacyAgreed", !privacyAgreed)}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                  privacyAgreed ? "bg-gold border-gold" : "border-muted-gray group-hover:border-warm-gray"
                }`}
              >
                {privacyAgreed && <CheckIcon className="w-3 h-3 text-luxury-black" />}
              </button>
              <span className="text-warm-gray text-sm">
                <span className="text-gold">[필수]</span> 개인정보 처리방침 동의
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <button
                type="button"
                onClick={() => setValue("marketingAgreed", !marketingAgreed)}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                  marketingAgreed ? "bg-gold border-gold" : "border-muted-gray group-hover:border-warm-gray"
                }`}
              >
                {marketingAgreed && <CheckIcon className="w-3 h-3 text-luxury-black" />}
              </button>
              <span className="text-warm-gray text-sm">
                <span className="text-muted-gray">[선택]</span> 마케팅 정보 수신 동의
              </span>
            </label>
          </div>
          {(errors.termsAgreed || errors.privacyAgreed) && (
            <p className="text-sm text-red-400">{errors.termsAgreed?.message || errors.privacyAgreed?.message}</p>
          )}
        </div>

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
