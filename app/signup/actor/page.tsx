"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeftIcon } from "../icons";
import { Button } from "@/components/ui/button";
import AgeSelectModal from "./AgeSelectModal";

export default function ActorSignupPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [showAgeModal, setShowAgeModal] = useState(false);

  const isValid = name.trim() !== "" && introduction.trim() !== "" && ageGroup !== "";

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

  const handleClearName = () => {
    setName("");
  };

  const handleAgeSelect = (age: string) => {
    setAgeGroup(age);
    setShowAgeModal(false);
  };

  const handleSubmit = () => {
    if (!isValid) return;
    // 회원가입 완료 페이지로 이동
    router.push("/signup/complete?type=actor");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="relative w-full max-w-lg bg-white min-h-screen flex flex-col border-x border-gray-200 overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
          <div className="px-4 h-14 flex items-center">
            <button
              onClick={() => router.back()}
              className="w-10 h-10 flex items-center justify-center -ml-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="뒤로가기"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
            </button>
            <h1 className="flex-1 text-center text-lg font-semibold text-gray-900 -ml-10">
              회원가입
            </h1>
          </div>
        </header>

        {/* Form */}
        <main className="flex-1 w-full px-5 py-6">
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="relative w-32 h-32">
              <div
                onClick={handleImageClick}
                className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer"
              >
                {profileImage ? (
                  <Image
                    src={profileImage}
                    alt="프로필 이미지"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                )}
              </div>
              {/* Edit Button */}
              <button
                onClick={handleImageClick}
                className="absolute bottom-0 right-0 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200"
              >
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">이름</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="활동명 입력"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pb-3 pt-1 text-base text-[#191F28] placeholder-[#8B95A1] border-b border-[#E5E8EB] focus:border-gray-400 focus:outline-none bg-transparent"
                />
                {name && (
                  <button
                    type="button"
                    onClick={handleClearName}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center"
                  >
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Introduction Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">한 줄 소개</label>
              <textarea
                placeholder="캐릭터를 잘 나타내는 한 줄 소개를 작성해 보세요"
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                rows={4}
                className="w-full p-4 text-base text-[#191F28] placeholder-[#8B95A1] border border-[#E5E8EB] rounded-xl focus:border-gray-400 focus:outline-none resize-none"
              />
            </div>

            {/* Age Group Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">나이대</label>
              <button
                type="button"
                onClick={() => setShowAgeModal(true)}
                className="w-full pb-3 pt-1 text-base text-left flex items-center justify-between border-b border-[#E5E8EB]"
              >
                <span className={ageGroup ? "text-[#191F28]" : "text-[#8B95A1]"}>
                  {ageGroup || "나이대 선택"}
                </span>
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </main>

        {/* Bottom Button */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 w-full">
          <Button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`w-full h-14 text-base font-semibold rounded-xl transition-all ${
              isValid
                ? "bg-[#191F28] hover:bg-gray-800 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            다음
          </Button>
        </div>

        {/* Age Select Modal */}
        <AgeSelectModal
          open={showAgeModal}
          onOpenChange={setShowAgeModal}
          selectedAge={ageGroup}
          onSelect={handleAgeSelect}
        />
      </div>
    </div>
  );
}

