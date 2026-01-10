"use client";

import { Suspense } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { Button, FormField, PasswordInput, Spinner } from "@/components/ui";

import { AuthLayout } from "@/components/common";

import { type ResetPasswordFormData, resetPasswordFormSchema } from "@/lib/validations";

import { useResetPassword } from "@/src/auth/auth";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const resetPasswordMutation = useResetPassword();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordFormSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    resetPasswordMutation.mutate(
      { data: { token, ...data } },
      {
        onSuccess: () => {
          router.push("/login");
        },
        onError: () => {
          setError("root", {
            message: "비밀번호 재설정에 실패했습니다",
          });
        },
      }
    );
  });

  return (
    <AuthLayout title="비밀번호 재설정" subtitle="새로운 비밀번호를 입력해주세요">
      <form onSubmit={onSubmit} className="space-y-6">
        <FormField
          label="새 비밀번호"
          error={errors.password?.message || errors.root?.message}
          hint="영문, 숫자를 포함한 8자 이상"
        >
          <PasswordInput
            placeholder="8자 이상 입력하세요"
            {...register("password")}
            error={!!errors.password || !!errors.root}
          />
        </FormField>

        <FormField label="새 비밀번호 확인" error={errors.passwordConfirm?.message}>
          <PasswordInput
            placeholder="비밀번호를 다시 입력하세요"
            {...register("passwordConfirm")}
            error={!!errors.passwordConfirm}
          />
        </FormField>

        <Button type="submit" variant="gold" fullWidth disabled={!isValid} loading={resetPasswordMutation.isPending}>
          비밀번호 변경
        </Button>
      </form>
    </AuthLayout>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <AuthLayout title="비밀번호 재설정" subtitle="새로운 비밀번호를 입력해주세요">
          <div className="flex justify-center py-12">
            <Spinner size="lg" />
          </div>
        </AuthLayout>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
