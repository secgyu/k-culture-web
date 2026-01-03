"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingLayout } from "@/app/(onboarding)/onboarding/_components";
import { GoldButton, DarkInput, DarkSelect } from "@/app/components";

const SPECIALTY_OPTIONS = [
  { value: "영화", label: "영화" },
  { value: "드라마", label: "드라마" },
  { value: "광고/CF", label: "광고/CF" },
  { value: "뮤직비디오", label: "뮤직비디오" },
  { value: "웹드라마", label: "웹드라마" },
  { value: "OTT 시리즈", label: "OTT 시리즈" },
];

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= 1950; i--) {
    years.push({ value: String(i), label: `${i}년` });
  }
  return years;
};

export default function AgencyOnboardingStep1() {
  const router = useRouter();
  const [agencyName, setAgencyName] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [specialty, setSpecialty] = useState("");

  const isValid =
    agencyName.trim() !== "" && representativeName.trim() !== "" && foundedYear !== "" && specialty !== "";

  const handleComplete = () => {
    if (!isValid) return;
    // TODO: API 연동
    router.push("/onboarding/agency/complete");
  };

  return (
    <OnboardingLayout
      currentStep={1}
      totalSteps={1}
      title="회사 정보를 입력해주세요"
      subtitle="캐스팅 진행 시 배우에게 보여질 정보입니다"
    >
      <div className="space-y-6">
        <DarkInput
          label="회사명"
          placeholder="회사명을 입력하세요"
          value={agencyName}
          onChange={(e) => setAgencyName(e.target.value)}
        />

        <DarkInput
          label="담당자명"
          placeholder="담당자 이름을 입력하세요"
          value={representativeName}
          onChange={(e) => setRepresentativeName(e.target.value)}
        />

        <DarkSelect
          label="설립연도"
          placeholder="설립연도를 선택하세요"
          options={generateYears()}
          value={foundedYear}
          onChange={setFoundedYear}
        />

        <DarkSelect
          label="주요 분야"
          placeholder="주요 제작 분야를 선택하세요"
          options={SPECIALTY_OPTIONS}
          value={specialty}
          onChange={setSpecialty}
        />

        <div className="pt-4">
          <GoldButton fullWidth disabled={!isValid} onClick={handleComplete}>
            완료
          </GoldButton>
        </div>
      </div>
    </OnboardingLayout>
  );
}
