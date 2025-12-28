"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { OnboardingLayout } from "@/app/onboarding/_components";
import { GoldButton, DarkTextarea } from "@/app/components";
import { CameraIcon } from "@/app/components/Icons";

export default function ActorOnboardingStep2() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [introduction, setIntroduction] = useState("");

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const isValid = profileImage !== null && introduction.trim().length >= 10;

  const handleNext = () => {
    if (!isValid) return;
    router.push("/onboarding/actor/step3");
  };

  const handleSkip = () => {
    router.push("/onboarding/actor/step3");
  };

  return (
    <OnboardingLayout
      currentStep={2}
      totalSteps={3}
      title="프로필을 완성해주세요"
      subtitle="캐스팅 담당자에게 보여질 정보입니다"
    >
      <div className="space-y-6">
        {/* 프로필 이미지 */}
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={handleImageClick}
            className="relative w-32 h-32 rounded-full bg-zinc-800 border-2 border-dashed border-zinc-600 hover:border-gold transition-colors overflow-hidden group"
          >
            {profileImage ? (
              <Image
                src={profileImage}
                alt="프로필 이미지"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-zinc-500 group-hover:text-gold transition-colors">
                <CameraIcon className="w-8 h-8 mb-1" />
                <span className="text-xs">사진 추가</span>
              </div>
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <p className="mt-3 text-sm text-zinc-500">
            정면 사진을 권장합니다
          </p>
        </div>

        {/* 한줄 소개 */}
        <DarkTextarea
          label="한줄 소개"
          placeholder="자신을 소개하는 문구를 작성해주세요 (최소 10자)"
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
          rows={3}
          hint={`${introduction.length}/100자`}
          maxLength={100}
        />

        <div className="flex gap-3 pt-4">
          <GoldButton variant="secondary" fullWidth onClick={handleSkip}>
            건너뛰기
          </GoldButton>
          <GoldButton fullWidth disabled={!isValid} onClick={handleNext}>
            다음
          </GoldButton>
        </div>
      </div>
    </OnboardingLayout>
  );
}

