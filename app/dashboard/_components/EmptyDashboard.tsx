"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EmptyDashboard() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {/* 아이콘 */}
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </div>

      {/* 메시지 */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        아직 활동 데이터가 없어요
      </h3>
      <p className="text-gray-500 text-sm mb-6 max-w-xs">
        프로필이 검색에 노출되면 조회수와 찜 데이터가 여기에 표시됩니다
      </p>

      {/* CTA */}
      <Link href="/mypage/settings/profile">
        <Button
          variant="outline"
          className="border-gray-200 text-gray-700 hover:bg-gray-50"
        >
          프로필 완성하러 가기
        </Button>
      </Link>
    </div>
  );
}

