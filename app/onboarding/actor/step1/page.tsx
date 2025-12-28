"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingLayout } from "@/app/onboarding/_components";
import { GoldButton, DarkInput, DarkSelect } from "@/app/components";

const GENDER_OPTIONS = [
  { value: "남성", label: "남성" },
  { value: "여성", label: "여성" },
];

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 15; i >= currentYear - 80; i--) {
    years.push({ value: String(i), label: `${i}년` });
  }
  return years;
};

export default function ActorOnboardingStep1() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const isValid = name.trim() !== "" && gender !== "" && birthYear !== "";

  const handleNext = () => {
    if (!isValid) return;
    // TODO: 데이터 저장 (Context 또는 localStorage)
    router.push("/onboarding/actor/step2");
  };

  return (
    <OnboardingLayout
      currentStep={1}
      totalSteps={3}
      title="기본 정보를 입력해주세요"
      subtitle="활동에 사용할 정보를 입력해주세요"
    >
      <div className="space-y-6">
        <DarkInput
          label="활동명"
          placeholder="활동명 또는 본명을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <DarkSelect
          label="성별"
          placeholder="성별을 선택하세요"
          options={GENDER_OPTIONS}
          value={gender}
          onChange={setGender}
        />

        <DarkSelect
          label="출생년도"
          placeholder="출생년도를 선택하세요"
          options={generateYears()}
          value={birthYear}
          onChange={setBirthYear}
        />

        <div className="pt-4">
          <GoldButton fullWidth disabled={!isValid} onClick={handleNext}>
            다음
          </GoldButton>
        </div>
      </div>
    </OnboardingLayout>
  );
}

