"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { OnboardingLayout } from "../../_components";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/constants";

export default function OnboardingStep2Page() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const isValid =
    height !== "" &&
    weight !== "" &&
    profileImage !== null;

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (!isValid) return;

    // 상태 저장
    const data = {
      height: parseInt(height),
      weight: parseInt(weight),
      profileImage,
    };
    localStorage.setItem("onboarding_step2", JSON.stringify(data));

    router.push("/onboarding/actor/step3");
  };

  return (
    <OnboardingLayout
      currentStep={2}
      totalSteps={4}
      title="신체 정보와 사진을 등록해주세요"
      subtitle="캐스팅 담당자가 참고하는 중요한 정보입니다"
      backHref="/onboarding/actor/step1"
    >
      <div className="space-y-8">
        {/* 프로필 사진 */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">
            프로필 사진 <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500">
            얼굴이 잘 보이는 사진을 올려주세요
          </p>

          <div className="flex justify-center">
            <div
              onClick={handleImageClick}
              className="relative w-40 h-52 rounded-2xl overflow-hidden cursor-pointer border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors bg-gray-50 flex items-center justify-center"
            >
              {profileImage ? (
                <>
                  <Image
                    src={profileImage}
                    alt="프로필 이미지"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">변경하기</span>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <svg
                    className="w-12 h-12 mx-auto text-gray-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="text-sm text-gray-500">사진 추가</span>
                </div>
              )}
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* 키 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            키 (cm) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="number"
              placeholder="170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-xl text-base focus:outline-none focus:border-gray-400 transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              cm
            </span>
          </div>
        </div>

        {/* 체중 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            체중 (kg) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="number"
              placeholder="60"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-xl text-base focus:outline-none focus:border-gray-400 transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              kg
            </span>
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
