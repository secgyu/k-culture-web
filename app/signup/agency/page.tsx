"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "../icons";
import { Button } from "@/components/ui/button";

export default function AgencySignupPage() {
  const router = useRouter();
  
  const [companyName, setCompanyName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [introduction, setIntroduction] = useState("");

  const isValid = 
    companyName.trim() !== "" && 
    managerName.trim() !== "" && 
    phoneNumber.trim() !== "" &&
    introduction.trim() !== "";

  const handleClearCompanyName = () => setCompanyName("");
  const handleClearManagerName = () => setManagerName("");
  const handleClearPhoneNumber = () => setPhoneNumber("");

  const handleSubmit = () => {
    if (!isValid) return;
    // 회원가입 완료 페이지로 이동
    router.push("/signup/complete?type=agency");
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
            {/* Company Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">에이전시명</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="에이전시명 입력"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full pb-3 pt-1 text-base text-[#191F28] placeholder-[#8B95A1] border-b border-[#E5E8EB] focus:border-gray-400 focus:outline-none bg-transparent"
                />
                {companyName && (
                  <button
                    type="button"
                    onClick={handleClearCompanyName}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center"
                  >
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Manager Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">담당자명</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="담당자 이름 입력"
                  value={managerName}
                  onChange={(e) => setManagerName(e.target.value)}
                  className="w-full pb-3 pt-1 text-base text-[#191F28] placeholder-[#8B95A1] border-b border-[#E5E8EB] focus:border-gray-400 focus:outline-none bg-transparent"
                />
                {managerName && (
                  <button
                    type="button"
                    onClick={handleClearManagerName}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center"
                  >
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">연락처</label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="연락처 입력"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pb-3 pt-1 text-base text-[#191F28] placeholder-[#8B95A1] border-b border-[#E5E8EB] focus:border-gray-400 focus:outline-none bg-transparent"
                />
                {phoneNumber && (
                  <button
                    type="button"
                    onClick={handleClearPhoneNumber}
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
              <label className="text-sm font-semibold text-gray-900">에이전시 소개</label>
              <textarea
                placeholder="에이전시를 소개해 주세요"
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                rows={4}
                className="w-full p-4 text-base text-[#191F28] placeholder-[#8B95A1] border border-[#E5E8EB] rounded-xl focus:border-gray-400 focus:outline-none resize-none"
              />
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
      </div>
    </div>
  );
}

