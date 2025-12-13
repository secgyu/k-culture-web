"use client";

import { Button } from "@/components/ui/button";

interface AgeSelectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedAge: string;
  onSelect: (age: string) => void;
}

const ageOptions = ["10대", "20대", "30대", "40대", "50대"];

export default function AgeSelectModal({
  open,
  onOpenChange,
  selectedAge,
  onSelect,
}: AgeSelectModalProps) {
  if (!open) return null;

  const handleConfirm = () => {
    if (selectedAge) {
      onOpenChange(false);
    }
  };

  return (
    <>
      {/* 블러 배경 */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[60]"
        onClick={() => onOpenChange(false)}
      />

      {/* 바텀시트 모달 */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-[70] animate-slide-up">
        {/* 핸들 바 */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* 헤더 */}
        <div className="px-5 py-4">
          <h2 className="text-xl font-bold text-[#191F28]">나이대를 선택해 주세요</h2>
        </div>

        {/* 옵션 리스트 */}
        <div className="px-5 py-2">
          <div className="flex flex-col items-center">
            {ageOptions.map((age, index) => {
              const isSelected = selectedAge === age;
              const distance = Math.abs(ageOptions.indexOf(selectedAge) - index);
              
              // 선택된 항목으로부터의 거리에 따라 투명도 조절
              let opacity = 1;
              if (selectedAge) {
                if (distance === 1) opacity = 0.6;
                else if (distance === 2) opacity = 0.3;
                else if (distance > 2) opacity = 0.2;
              }

              return (
                <button
                  key={age}
                  type="button"
                  onClick={() => onSelect(age)}
                  className={`w-full py-3 text-center text-lg transition-all ${
                    isSelected
                      ? "bg-gray-100 rounded-xl font-bold text-[#191F28]"
                      : "font-medium text-gray-500"
                  }`}
                  style={{ opacity: isSelected ? 1 : opacity }}
                >
                  {age}
                </button>
              );
            })}
          </div>
        </div>

        {/* 확인 버튼 */}
        <div className="px-5 pb-8 pt-4">
          <Button
            onClick={handleConfirm}
            className="w-full h-14 text-base font-semibold rounded-xl bg-[#191F28] hover:bg-gray-800 text-white"
          >
            확인
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

