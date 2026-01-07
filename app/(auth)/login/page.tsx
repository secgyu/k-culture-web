"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AuthLayout } from "@/components/common";
import { Button, FormField, Input, PasswordInput } from "@/components/ui";
import { useLogin } from "@/src/auth/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginMutation = useLogin();

  const isValid = email.length > 0 && password.length >= 8;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setError("");

    loginMutation.mutate(
      { data: { email, password } },
      {
        onSuccess: (response) => {
          if (response.data) {
            localStorage.setItem("accessToken", response.data.accessToken || "");
            localStorage.setItem("refreshToken", response.data.refreshToken || "");
          }
          toast.success("로그인 성공!");
          router.push("/dashboard");
        },
        onError: () => {
          setError("이메일 또는 비밀번호가 올바르지 않습니다.");
          toast.error("이메일 또는 비밀번호가 올바르지 않습니다");
        },
      }
    );
  };

  return (
    <AuthLayout title="로그인" subtitle="두드림에 오신 것을 환영합니다">
      <form onSubmit={handleLogin} className="space-y-6">
        <FormField label="이메일" error={error ? " " : undefined}>
          <Input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
          />
        </FormField>

        <FormField label="비밀번호" error={error}>
          <PasswordInput
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
          />
        </FormField>

        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-sm text-muted-gray hover:text-gold transition-colors">
            비밀번호를 잊으셨나요?
          </Link>
        </div>

        <Button type="submit" variant="gold" fullWidth disabled={!isValid} loading={loginMutation.isPending}>
          로그인
        </Button>

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
