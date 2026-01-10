"use client";

import { useState } from "react";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { Button, FormField, Input } from "@/components/ui";

import { AuthLayout } from "@/components/common";

import { type ForgotPasswordFormData, forgotPasswordFormSchema } from "@/lib/validations";

import { useForgotPassword } from "@/src/auth/auth";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const forgotPasswordMutation = useForgotPassword();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    forgotPasswordMutation.mutate(
      { data },
      {
        onSuccess: () => {
          setSubmittedEmail(data.email);
          setSent(true);
        },
        onError: () => {
          setError("root", {
            message: "이메일 발송에 실패했습니다. 다시 시도해주세요.",
          });
        },
      }
    );
  });

  if (sent) {
    return (
      <AuthLayout title="이메일 발송 완료" subtitle="비밀번호 재설정 링크를 발송했습니다">
        <div className="space-y-6 text-center">
          <div className="bg-gold/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <svg className="text-gold h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-muted-gray">
            <span className="text-ivory font-medium">{submittedEmail}</span>
            <br />
            으로 비밀번호 재설정 링크를 발송했습니다.
            <br />
            이메일을 확인해주세요.
          </p>
          <Link href="/login">
            <Button variant="gold-secondary" fullWidth>
              로그인으로 돌아가기
            </Button>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="비밀번호 찾기" subtitle="가입한 이메일로 재설정 링크를 보내드립니다">
      <form onSubmit={onSubmit} className="space-y-6">
        <FormField label="이메일" error={errors.email?.message || errors.root?.message}>
          <Input
            type="email"
            placeholder="가입한 이메일 주소를 입력하세요"
            {...register("email")}
            error={!!errors.email || !!errors.root}
            inputSize="lg"
          />
        </FormField>

        <Button type="submit" variant="gold" fullWidth disabled={!isValid} loading={forgotPasswordMutation.isPending}>
          재설정 링크 발송
        </Button>

        <div className="text-center">
          <Link href="/login" className="text-muted-gray hover:text-ivory transition-colors">
            로그인으로 돌아가기
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
