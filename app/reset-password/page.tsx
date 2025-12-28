"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout, GoldButton, DarkInput } from "@/app/components";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!password) {
      newErrors.password = "비밀번호를 입력해주세요";
    } else if (password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다";
    }

    if (password !== passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // TODO: API 연동
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/login");
    } catch {
      setErrors({ password: "비밀번호 재설정에 실패했습니다" });
    } finally {
      setLoading(false);
    }
  };

  const isValid = password.length >= 8 && password === passwordConfirm;

  return (
    <AuthLayout title="비밀번호 재설정" subtitle="새로운 비밀번호를 입력해주세요">
      <form onSubmit={handleSubmit} className="space-y-6">
        <DarkInput
          type="password"
          label="새 비밀번호"
          placeholder="8자 이상 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          hint="영문, 숫자를 포함한 8자 이상"
        />

        <DarkInput
          type="password"
          label="새 비밀번호 확인"
          placeholder="비밀번호를 다시 입력하세요"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          error={errors.passwordConfirm}
        />

        <GoldButton type="submit" fullWidth disabled={!isValid} loading={loading}>
          비밀번호 변경
        </GoldButton>
      </form>
    </AuthLayout>
  );
}

