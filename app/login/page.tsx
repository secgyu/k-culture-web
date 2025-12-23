"use client";

import { useState } from "react";
import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { EyeIcon, EyeOffIcon } from "@/app/components/Icons";
import { PageLayout } from "@/app/components/PageLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isValid = email.length > 0 && password.length > 0;

  const handleLogin = () => {
    if (!isValid) return;
    console.log("로그인:", { email, password });
  };

  return (
    <PageLayout>
      <div className="px-8 pt-44 pb-24">
        <h1 className="text-5xl font-bold tracking-tight" style={{ color: COLORS.text.primary }}>
          배우담
        </h1>
      </div>
      <div className="flex-1 px-8">
        <div className="space-y-0">
          <div className="py-5 border-b" style={{ borderColor: COLORS.border.default }}>
            <input
              type="email"
              placeholder="이메일 주소 입력"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-base bg-transparent focus:outline-none"
              style={{ color: COLORS.text.primary }}
            />
          </div>
          <div className="py-5 border-b flex items-center" style={{ borderColor: COLORS.border.default }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 text-base bg-transparent focus:outline-none"
              style={{ color: COLORS.text.primary }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2"
              style={{ color: COLORS.text.tertiary }}
            >
              {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </button>
          </div>
          <div className="pt-8">
            <button
              onClick={handleLogin}
              disabled={!isValid}
              className="w-full h-14 text-base font-semibold rounded-2xl transition-all"
              style={{
                backgroundColor: COLORS.text.primary,
                color: COLORS.background.primary,
                opacity: isValid ? 1 : 0.3,
              }}
            >
              로그인
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link href="/signup" className="text-sm px-6" style={{ color: COLORS.text.secondary }}>
            회원가입
          </Link>
          <span style={{ color: COLORS.border.default }}>|</span>
          <Link href="/forgot-password" className="text-sm px-6" style={{ color: COLORS.text.secondary }}>
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
