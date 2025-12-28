"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingLayout } from "../../_components";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";

// 스타일 키워드 옵션
const STYLE_KEYWORDS = [
  "강아지상",
  "고양이상",
  "여우상",
  "곰상",
  "토끼상",
  "사슴상",
  "섹시한",
  "청순한",
  "귀여운",
  "사랑스러운",
  "도도한",
  "카리스마",
  "엉뚱한",
  "몽환적인",
  "힙한",
  "우아한",
  "강렬한",
  "내추럴",
  "쾌활한",
  "당당한",
  "시크한",
  "순수한",
  "지적인",
  "유머러스",
  "차분한",
  "따뜻한",
  "중성적인",
  "부드러운",
] as const;

const MIN_KEYWORDS = 3;
const MAX_KEYWORDS = 10;

export default function OnboardingStep3Page() {
  const router = useRouter();

  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const isValid = selectedKeywords.length >= MIN_KEYWORDS;

  const toggleKeyword = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
    } else {
      if (selectedKeywords.length >= MAX_KEYWORDS) return;
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const handleNext = () => {
    if (!isValid) return;

    // 상태 저장
    const data = {
      styleKeywords: selectedKeywords,
    };
    localStorage.setItem("onboarding_step3", JSON.stringify(data));

    router.push("/onboarding/actor/complete");
  };

  return (
    <OnboardingLayout
      currentStep={3}
      totalSteps={4}
      title="나를 표현하는 키워드를 선택해주세요"
      subtitle={`최소 ${MIN_KEYWORDS}개 이상 선택해주세요 (최대 ${MAX_KEYWORDS}개)`}
      backHref="/onboarding/actor/step2"
    >
      <div className="space-y-6 pb-24">
        {/* 선택 카운트 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            선택된 키워드
          </span>
          <span
            className={`text-sm font-medium ${
              selectedKeywords.length >= MIN_KEYWORDS
                ? "text-green-600"
                : "text-gray-900"
            }`}
          >
            {selectedKeywords.length} / {MAX_KEYWORDS}
          </span>
        </div>

        {/* 키워드 그리드 */}
        <div className="flex flex-wrap gap-2">
          {STYLE_KEYWORDS.map((keyword) => {
            const isSelected = selectedKeywords.includes(keyword);
            const isDisabled = !isSelected && selectedKeywords.length >= MAX_KEYWORDS;

            return (
              <button
                key={keyword}
                type="button"
                onClick={() => toggleKeyword(keyword)}
                disabled={isDisabled}
                className={`
                  px-4 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-200
                  ${
                    isSelected
                      ? "bg-gray-900 text-white"
                      : isDisabled
                      ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400"
                  }
                `}
              >
                {keyword}
              </button>
            );
          })}
        </div>

        {/* 안내 메시지 */}
        {selectedKeywords.length < MIN_KEYWORDS && (
          <p className="text-sm text-amber-600 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{MIN_KEYWORDS - selectedKeywords.length}개 더 선택해주세요</span>
          </p>
        )}

        {selectedKeywords.length >= MIN_KEYWORDS && (
          <p className="text-sm text-green-600 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>선택 완료! 검색에서 잘 노출될 거예요</span>
          </p>
        )}
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
          완료
        </Button>
      </div>
    </OnboardingLayout>
  );
}
