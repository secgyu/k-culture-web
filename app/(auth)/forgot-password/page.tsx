"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthLayout, GoldButton, DarkInput } from "@/app/components";
import { useForgotPassword } from "@/src/auth/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const forgotPasswordMutation = useForgotPassword();

  const isValid = email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setError("");

    forgotPasswordMutation.mutate(
      { data: { email } },
      {
        onSuccess: () => {
          setSent(true);
        },
        onError: () => {
          setError("이메일 발송에 실패했습니다. 다시 시도해주세요.");
        },
      }
    );
  };

  if (sent) {
    return (
      <AuthLayout title="이메일 발송 완료" subtitle="비밀번호 재설정 링크를 발송했습니다">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-muted-gray">
            <span className="text-ivory font-medium">{email}</span>
            <br />
            으로 비밀번호 재설정 링크를 발송했습니다.
            <br />
            이메일을 확인해주세요.
          </p>
          <Link href="/login">
            <GoldButton variant="secondary" fullWidth>
              로그인으로 돌아가기
            </GoldButton>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="비밀번호 찾기" subtitle="가입한 이메일로 재설정 링크를 보내드립니다">
      <form onSubmit={handleSubmit} className="space-y-6">
        <DarkInput
          type="email"
          label="이메일"
          placeholder="가입한 이메일 주소를 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />

        <GoldButton type="submit" fullWidth disabled={!isValid} loading={forgotPasswordMutation.isPending}>
          재설정 링크 발송
        </GoldButton>

        <div className="text-center">
          <Link href="/login" className="text-muted-gray hover:text-ivory transition-colors">
            로그인으로 돌아가기
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
