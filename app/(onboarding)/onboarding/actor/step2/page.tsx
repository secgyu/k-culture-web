"use client";

import { useRef } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { OnboardingLayout } from "@/app/(onboarding)/onboarding/_components";
import { toast } from "sonner";

import { Button } from "@/components/ui";

import { DarkTextarea } from "@/components/common";
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
        toast.error("파일 크기는 5MB 이하여야 합니다.");
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

  const hasImage = data.profileImage !== null;
  const hasIntroduction = data.introduction.trim().length >= 10;
  const isValid = hasImage || hasIntroduction;

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
              className="bg-luxury-tertiary border-muted-gray hover:border-gold group relative h-48 w-36 overflow-hidden rounded-xl border-2 border-dashed transition-colors"
            >
              {data.profileImage ? (
                <Image src={data.profileImage} alt="프로필 이미지" fill className="object-cover" />
              ) : (
                <div className="text-muted-gray group-hover:text-gold flex h-full flex-col items-center justify-center transition-colors">
                  <CameraIcon className="mb-2 h-10 w-10" />
                  <span className="text-body-sm">사진 추가</span>
                  <span className="text-caption text-muted-gray mt-1">3:4 비율</span>
                </div>
              )}
            </button>

            {data.profileImage && (
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
                aria-label="이미지 삭제"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            <div className="absolute top-0 -right-8">
              <ImageUploadGuide />
            </div>
          </div>

          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />

          <div className="mt-4 text-center">
            <p className="text-body-sm text-muted-gray">정면 사진을 권장합니다</p>
            <p className="text-caption mt-1 text-zinc-600">JPG, PNG • 최대 5MB</p>
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
          <Button variant="gold-secondary" className="flex-1" onClick={handleSkip}>
            건너뛰기
          </Button>
          <Button variant="gold" className="flex-1" disabled={!isValid} onClick={handleNext}>
            다음
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
