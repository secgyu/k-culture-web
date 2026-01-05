"use client";

import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { OnboardingLayout } from "@/app/(onboarding)/onboarding/_components";
import { GoldButton, DarkTextarea } from "@/components/common";
import { CameraIcon } from "@/components/common/Misc/Icons";
import { ImageUploadGuide } from "@/components/features/profile";
import { useOnboardingStore } from "@/stores/useOnboardingStore";

export default function ActorOnboardingStep2() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data, updateData } = useOnboardingStore();

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("파일 크기는 5MB 이하여야 합니다.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        updateData({ profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    updateData({ profileImage: null });
  };

  const isValid = data.profileImage !== null && data.introduction.trim().length >= 10;

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
        <div className="flex flex-col items-center">
          <div className="relative">
            <button
              type="button"
              onClick={handleImageClick}
              className="relative w-36 h-48 rounded-xl bg-luxury-tertiary border-2 border-dashed border-muted-gray hover:border-gold transition-colors overflow-hidden group"
            >
              {data.profileImage ? (
                <Image src={data.profileImage} alt="프로필 이미지" fill className="object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-muted-gray group-hover:text-gold transition-colors">
                  <CameraIcon className="w-10 h-10 mb-2" />
                  <span className="text-body-sm">사진 추가</span>
                  <span className="text-caption text-muted-gray mt-1">3:4 비율</span>
                </div>
              )}
            </button>

            {data.profileImage && (
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                aria-label="이미지 삭제"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            <div className="absolute -right-8 top-0">
              <ImageUploadGuide />
            </div>
          </div>

          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />

          <div className="mt-4 text-center">
            <p className="text-body-sm text-muted-gray">정면 사진을 권장합니다</p>
            <p className="text-caption text-zinc-600 mt-1">JPG, PNG • 최대 5MB</p>
          </div>
        </div>

        <DarkTextarea
          label="한줄 소개"
          placeholder="자신을 소개하는 문구를 작성해주세요 (최소 10자)"
          value={data.introduction}
          onChange={(e) => updateData({ introduction: e.target.value })}
          rows={3}
          hint={`${data.introduction.length}/100자`}
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
