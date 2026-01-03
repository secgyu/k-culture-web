"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout, GoldButton, DarkInput } from "@/app/components";
import { CheckIcon } from "@/app/components/Icons";

export default function AgencySignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const allAgreed = termsAgreed && privacyAgreed;

  const handleAgreeAll = () => {
    const newState = !(termsAgreed && privacyAgreed && marketingAgreed);
    setTermsAgreed(newState);
    setPrivacyAgreed(newState);
    setMarketingAgreed(newState);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = "이메일을 입력해주세요";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다";
    }

    if (!password) {
      newErrors.password = "비밀번호를 입력해주세요";
    } else if (password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다";
    }

    if (password !== passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다";
    }

    if (!termsAgreed || !privacyAgreed) {
      newErrors.terms = "필수 약관에 동의해주세요";
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
      router.push("/onboarding/agency/step1");
    } catch {
      setErrors({ email: "회원가입에 실패했습니다" });
    } finally {
      setLoading(false);
    }
  };

  const isValid = email && password.length >= 8 && password === passwordConfirm && allAgreed;

  return (
    <AuthLayout title="캐스팅 담당자 회원가입" subtitle="AI로 완벽한 배우를 찾아보세요">
      <form onSubmit={handleSubmit} className="space-y-5">
        <DarkInput
          type="email"
          label="이메일"
          placeholder="업무용 이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <DarkInput
          type="password"
          label="비밀번호"
          placeholder="8자 이상 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          hint="영문, 숫자를 포함한 8자 이상"
        />

        <DarkInput
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력하세요"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          error={errors.passwordConfirm}
        />

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
                onClick={() => setTermsAgreed(!termsAgreed)}
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
                onClick={() => setPrivacyAgreed(!privacyAgreed)}
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
                onClick={() => setMarketingAgreed(!marketingAgreed)}
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
          {errors.terms && <p className="text-sm text-red-400">{errors.terms}</p>}
        </div>

        <GoldButton type="submit" fullWidth disabled={!isValid} loading={loading}>
          회원가입
        </GoldButton>

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
