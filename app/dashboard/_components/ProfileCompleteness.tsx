"use client";

import Link from "next/link";

interface ProfileCompletenessProps {
  percentage: number;
}

export function ProfileCompleteness({ percentage }: ProfileCompletenessProps) {
  const tips = [
    { condition: percentage < 50, text: "프로필 사진을 추가해보세요", href: "/mypage/settings/profile" },
    { condition: percentage >= 50 && percentage < 70, text: "필모그래피를 추가하면 신뢰도가 올라가요", href: "/mypage/filmography" },
    { condition: percentage >= 70 && percentage < 90, text: "특기나 스킬을 추가해보세요", href: "/mypage/settings/profile" },
    { condition: percentage >= 90 && percentage < 100, text: "쇼릴 영상을 추가하면 섭외율 UP!", href: "/mypage/showreel" },
  ];

  const currentTip = tips.find((t) => t.condition);

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">프로필 완성도</h3>
        <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
      </div>

      {/* 프로그레스 바 */}
      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* 완성 팁 */}
      {currentTip && (
        <Link
          href={currentTip.href}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
            💡
          </span>
          <span>{currentTip.text}</span>
          <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}

      {percentage >= 100 && (
        <p className="text-sm text-green-600 flex items-center gap-2">
          <span>✨</span>
          <span>프로필이 완성되었어요!</span>
        </p>
      )}
    </div>
  );
}

