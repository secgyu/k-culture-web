"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeftIcon } from "@/app/components/Icons";
import { PageLayout } from "@/app/components/PageLayout";
import { ClearButton } from "@/app/components/ClearButton";
import { FormLabel } from "@/app/components/FormLabel";
import { COLORS } from "@/lib/constants";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValid = email.length > 0 && email.includes("@");

  const handleSubmit = () => {
    if (!isValid) return;
    // TODO: API 호출
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    router.push("/login");
  };

  const handleClearEmail = () => {
    setEmail("");
  };

  if (isSubmitted) {
    return (
      <PageLayout>
        <header className="sticky top-0 z-20 bg-white">
          <div className="flex items-center px-4 py-4">
            <Link href="/login" className="w-10 h-10 flex items-center justify-center -ml-2">
              <ChevronLeftIcon className="w-6 h-6" style={{ color: COLORS.text.primary }} />
            </Link>
          </div>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center px-5">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: COLORS.accent.teal }}
          >
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2" style={{ color: COLORS.text.primary }}>
            이메일을 확인해주세요
          </h2>
          <p className="text-center mb-8" style={{ color: COLORS.text.secondary }}>
            <span style={{ color: COLORS.text.primary }}>{email}</span>으로
            <br />
            재설정 링크를 보냈습니다.
          </p>
          <button
            onClick={handleBackToLogin}
            className="w-full h-14 text-base font-semibold rounded-2xl transition-all"
            style={{
              backgroundColor: COLORS.text.primary,
              color: COLORS.background.primary,
            }}
          >
            로그인으로 돌아가기
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* 헤더 - 뒤로가기만 */}
      <header className="sticky top-0 z-20 bg-white">
        <div className="flex items-center px-4 py-4">
          <Link href="/login" className="w-10 h-10 flex items-center justify-center -ml-2">
            <ChevronLeftIcon className="w-6 h-6" style={{ color: COLORS.text.primary }} />
          </Link>
        </div>
      </header>

      <main className="flex-1 px-5">
        {/* 큰 제목 */}
        <h1 className="text-2xl font-bold mb-3" style={{ color: COLORS.text.primary }}>
          비밀번호 재설정
        </h1>
        <p className="text-sm mb-10" style={{ color: COLORS.text.secondary }}>
          가입하신 이메일 주소를 입력하면
          <br />
          재설정 링크를 보내드릴게요
        </p>

        {/* 이메일 입력 */}
        <div className="space-y-2">
          <FormLabel>이메일 주소</FormLabel>
          <div className="relative border-b pb-3" style={{ borderColor: COLORS.border.default }}>
            <input
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-base bg-transparent focus:outline-none pr-8"
              style={{ color: COLORS.text.primary }}
            />
            {email && <ClearButton onClick={handleClearEmail} />}
          </div>
        </div>
      </main>

      {/* 하단 버튼 */}
      <div className="p-5 pb-8">
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className="w-full h-14 text-base font-semibold rounded-2xl transition-all"
          style={{
            backgroundColor: COLORS.text.primary,
            color: COLORS.background.primary,
            opacity: isValid ? 1 : 0.3,
          }}
        >
          재설정 링크 보내기
        </button>
      </div>
    </PageLayout>
  );
}
