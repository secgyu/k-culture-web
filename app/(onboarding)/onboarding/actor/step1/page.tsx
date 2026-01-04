"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { OnboardingLayout } from "@/app/(onboarding)/onboarding/_components";
import { GoldButton, DarkInput, DarkSelect } from "@/app/components";
import { useOnboardingStore } from "@/stores/useOnboardingStore";

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
  const { data, updateData } = useOnboardingStore();

  const isValid = data.name.trim() !== "" && data.gender !== "" && data.birthYear !== "";

  const handleNext = () => {
    if (!isValid) return;
    router.push("/onboarding/actor/step2");
  };

  useEffect(() => {
    localStorage.setItem("onboarding_step1", "visited");
  }, []);

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
          value={data.name}
          onChange={(e) => updateData({ name: e.target.value })}
        />

        <DarkSelect
          label="성별"
          placeholder="성별을 선택하세요"
          options={GENDER_OPTIONS}
          value={data.gender}
          onChange={(value) => updateData({ gender: value })}
        />

        <DarkSelect
          label="출생년도"
          placeholder="출생년도를 선택하세요"
          options={generateYears()}
          value={data.birthYear}
          onChange={(value) => updateData({ birthYear: value })}
        />

        <div className="grid grid-cols-2 gap-4">
          <DarkInput
            label="키 (선택)"
            placeholder="cm"
            type="number"
            value={data.height}
            onChange={(e) => updateData({ height: e.target.value })}
          />
          <DarkInput
            label="몸무게 (선택)"
            placeholder="kg"
            type="number"
            value={data.weight}
            onChange={(e) => updateData({ weight: e.target.value })}
          />
        </div>

        <div className="pt-4">
          <GoldButton fullWidth disabled={!isValid} onClick={handleNext}>
            다음
          </GoldButton>
        </div>
      </div>
    </OnboardingLayout>
  );
}
