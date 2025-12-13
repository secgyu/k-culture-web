"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "../icons";
import { Button } from "@/components/ui/button";

const specialtyOptions = [
  "드라마",
  "영화제작",
  "광고/CF",
  "뮤직비디오",
  "웹드라마",
  "SF",
  "스릴러배우전문",
];

export default function AgencySignupPage() {
  const router = useRouter();

  const [agencyName, setAgencyName] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  const isValid =
    agencyName.trim() !== "" &&
    representativeName.trim() !== "" &&
    foundedYear.trim() !== "" &&
    selectedSpecialties.length > 0;

  const handleClearAgencyName = () => setAgencyName("");
  const handleClearRepresentativeName = () => setRepresentativeName("");
  const handleClearFoundedYear = () => setFoundedYear("");

  const handleSpecialtyToggle = (specialty: string) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty) ? prev.filter((s) => s !== specialty) : [...prev, specialty]
    );
  };

  const handleSubmit = () => {
    if (!isValid) return;
    router.push("/signup/complete?type=agency");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="relative w-full max-w-lg bg-white min-h-screen flex flex-col border-x border-gray-200 overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white">
          <div className="px-4 h-14 flex items-center">
            <button
              onClick={() => router.back()}
              className="w-10 h-10 flex items-center justify-center -ml-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="뒤로가기"
            >
              <ChevronLeftIcon className="w-6 h-6 text-[#191F28]" />
            </button>
            <h1 className="ml-2 text-base font-semibold text-[#191F28]">에이전시 프로필 등록</h1>
          </div>
        </header>

        {/* Form */}
        <main className="flex-1 w-full px-5 py-6">
          <div className="space-y-6">
            {/* Section: 에이전시 소개 */}
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-[#4E5968]">에이전시 소개</h2>

              {/* Agency Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4E5968]">에이전시명</label>
                <div className="relative border-b border-[#E5E8EB]">
                  <input
                    type="text"
                    placeholder="에이전시명 입력"
                    value={agencyName}
                    onChange={(e) => setAgencyName(e.target.value)}
                    className="w-full pb-3 pt-1 text-base text-[#191F28] placeholder-[#8B95A1] focus:outline-none bg-transparent pr-8"
                  />
                  {agencyName && (
                    <button
                      type="button"
                      onClick={handleClearAgencyName}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#B0B8C1] flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Representative Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4E5968]">대표자명</label>
                <div className="relative border-b border-[#E5E8EB]">
                  <input
                    type="text"
                    placeholder="대표자명 입력"
                    value={representativeName}
                    onChange={(e) => setRepresentativeName(e.target.value)}
                    className="w-full pb-3 pt-1 text-base text-[#191F28] placeholder-[#8B95A1] focus:outline-none bg-transparent pr-8"
                  />
                  {representativeName && (
                    <button
                      type="button"
                      onClick={handleClearRepresentativeName}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#B0B8C1] flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Founded Year Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4E5968]">설립연도</label>
                <div className="relative border-b border-[#E5E8EB]">
                  <input
                    type="text"
                    placeholder="설립연도 입력 (예: 2020)"
                    value={foundedYear}
                    onChange={(e) => setFoundedYear(e.target.value)}
                    className="w-full pb-3 pt-1 text-base text-[#191F28] placeholder-[#8B95A1] focus:outline-none bg-transparent pr-8"
                  />
                  {foundedYear && (
                    <button
                      type="button"
                      onClick={handleClearFoundedYear}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#B0B8C1] flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Section: 주요 분야 */}
            <div className="space-y-4 pt-4">
              <h2 className="text-sm font-medium text-[#4E5968]">주요 분야</h2>
              <div className="flex flex-wrap gap-2">
                {specialtyOptions.map((specialty) => {
                  const isSelected = selectedSpecialties.includes(specialty);
                  return (
                    <button
                      key={specialty}
                      type="button"
                      onClick={() => handleSpecialtyToggle(specialty)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                        isSelected
                          ? "border-[#E50815] text-[#E50815] bg-white"
                          : "border-[#E5E8EB] text-[#4E5968] bg-white"
                      }`}
                    >
                      {specialty}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Button */}
        <div className="p-5 pb-8 w-full">
          <Button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`w-full h-14 text-base font-semibold rounded-xl transition-all ${
              isValid
                ? "bg-[#191F28] hover:bg-gray-800 text-white"
                : "bg-[#191F28]/30 text-white cursor-not-allowed"
            }`}
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}
