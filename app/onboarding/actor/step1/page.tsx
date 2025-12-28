"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingLayout } from "../../_components";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";

const GENDER_OPTIONS = ["남성", "여성"] as const;

export default function OnboardingStep1Page() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [gender, setGender] = useState<string>("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  const isValid =
    name.trim() !== "" &&
    gender !== "" &&
    birthYear !== "" &&
    birthMonth !== "" &&
    birthDay !== "";

  const handleNext = () => {
    if (!isValid) return;

    // TODO: 상태 저장 (Context 또는 localStorage)
    const data = {
      name,
      gender,
      birthDate: `${birthYear}-${birthMonth.padStart(2, "0")}-${birthDay.padStart(2, "0")}`,
    };
    localStorage.setItem("onboarding_step1", JSON.stringify(data));

    router.push("/onboarding/actor/step2");
  };

  // 년도 옵션 생성 (1940 ~ 현재)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1940 + 1 }, (_, i) => currentYear - i);

  return (
    <OnboardingLayout
      currentStep={1}
      totalSteps={4}
      title="기본 정보를 입력해주세요"
      subtitle="프로필에 표시될 기본 정보입니다"
      backHref="/signup"
    >
      <div className="space-y-8">
        {/* 이름 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            이름 (활동명) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 px-4 border border-gray-200 rounded-xl text-base focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* 성별 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            성별 <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            {GENDER_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setGender(option)}
                className={`flex-1 h-12 rounded-xl text-base font-medium transition-all border ${
                  gender === option
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* 생년월일 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            생년월일 <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            {/* 년 */}
            <select
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="flex-1 h-12 px-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:border-gray-400 bg-white"
            >
              <option value="">년</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {/* 월 */}
            <select
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              className="w-24 h-12 px-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:border-gray-400 bg-white"
            >
              <option value="">월</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            {/* 일 */}
            <select
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              className="w-24 h-12 px-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:border-gray-400 bg-white"
            >
              <option value="">일</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-100">
        <Button
          onClick={handleNext}
          disabled={!isValid}
          className="w-full h-14 text-base font-semibold rounded-xl transition-all"
          style={{
            backgroundColor: isValid ? COLORS.text.primary : "rgba(25, 31, 40, 0.3)",
            color: COLORS.background.primary,
          }}
        >
          다음
        </Button>
      </div>
    </OnboardingLayout>
  );
}
