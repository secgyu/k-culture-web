"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingLayout } from "@/app/onboarding/_components";
import { GoldButton } from "@/app/components";
import { XMarkIcon } from "@/app/components/Icons";

const SKILL_CATEGORIES = [
  {
    name: "연기",
    skills: ["감정연기", "코미디연기", "액션연기", "뮤지컬연기", "즉흥연기"],
  },
  {
    name: "언어",
    skills: ["영어", "일본어", "중국어", "한국어(사투리)", "수어"],
  },
  {
    name: "무용/댄스",
    skills: ["발레", "현대무용", "한국무용", "힙합", "팝핀", "왁킹"],
  },
  {
    name: "스포츠",
    skills: ["수영", "승마", "검술", "태권도", "유도", "복싱", "골프"],
  },
  {
    name: "음악",
    skills: ["피아노", "기타", "바이올린", "드럼", "노래"],
  },
  {
    name: "기타",
    skills: ["운전면허", "오토바이", "스턴트", "MC진행", "나레이션"],
  },
];

export default function ActorOnboardingStep3() {
  const router = useRouter();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleComplete = () => {
    // TODO: 데이터 저장 후 완료 페이지로
    router.push("/onboarding/actor/complete");
  };

  const handleSkip = () => {
    router.push("/onboarding/actor/complete");
  };

  return (
    <OnboardingLayout
      currentStep={3}
      totalSteps={3}
      title="특기를 선택해주세요"
      subtitle="보유한 스킬을 선택하면 매칭에 도움이 됩니다"
    >
      <div className="space-y-6">
        {/* 선택된 스킬 */}
        {selectedSkills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="hover:text-gold-light"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* 스킬 카테고리 */}
        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.name}>
              <h3 className="text-sm font-medium text-zinc-400 mb-2">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                        isSelected
                          ? "bg-gold text-luxury-black"
                          : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          <GoldButton variant="secondary" fullWidth onClick={handleSkip}>
            건너뛰기
          </GoldButton>
          <GoldButton fullWidth onClick={handleComplete}>
            완료
          </GoldButton>
        </div>
      </div>
    </OnboardingLayout>
  );
}

