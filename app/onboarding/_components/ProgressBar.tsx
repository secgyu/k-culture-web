"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      {/* 스텝 표시 */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">
          {currentStep} / {totalSteps}
        </span>
        <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
      </div>

      {/* 프로그레스 바 */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

