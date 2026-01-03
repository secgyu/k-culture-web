"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout, GoldButton, DarkInput } from "@/app/components";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValid = email.length > 0 && password.length >= 8;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    setError("");

    try {
      // TODO: API 연동
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } catch {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="로그인" subtitle="두드림에 오신 것을 환영합니다">
      <form onSubmit={handleLogin} className="space-y-6">
        <DarkInput
          type="email"
          label="이메일"
          placeholder="이메일 주소를 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error ? " " : undefined}
        />

        <DarkInput
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />

        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-sm text-muted-gray hover:text-gold transition-colors">
            비밀번호를 잊으셨나요?
          </Link>
        </div>

        <GoldButton type="submit" fullWidth disabled={!isValid} loading={loading}>
          로그인
        </GoldButton>

        <div className="text-center">
          <span className="text-muted-gray">계정이 없으신가요? </span>
          <Link href="/signup" className="text-gold hover:text-gold-light transition-colors">
            회원가입
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
