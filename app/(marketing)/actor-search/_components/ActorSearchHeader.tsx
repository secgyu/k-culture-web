import { memo } from "react";

import Link from "next/link";

interface ActorSearchHeaderProps {
  isAuthenticated: boolean;
}

export const ActorSearchHeader = memo(function ActorSearchHeader({ isAuthenticated }: ActorSearchHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-heading-xl md:text-display-sm text-ivory">
        오늘보다 내일이 더 빛날 배우·모델분들을 만나보세요.
      </h1>

      {!isAuthenticated && (
        <div className="from-gold/20 to-gold/10 border-gold/30 mx-auto mt-8 max-w-4xl rounded-2xl border bg-gradient-to-r p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gold/20 flex h-10 w-10 items-center justify-center rounded-full">
                <svg className="text-gold h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-ivory font-medium">로그인하면 더 많은 정보를 볼 수 있어요</p>
                <p className="text-warm-gray text-body-sm">배우 프로필 전체, 연락처, 포트폴리오까지!</p>
              </div>
            </div>
            <Link
              href="/login"
              className="bg-gold text-luxury-black text-body-sm hover:bg-gold-light rounded-lg px-4 py-2 font-medium transition-colors duration-200 active:scale-[0.98]"
            >
              로그인
            </Link>
          </div>
        </div>
      )}
    </div>
  );
});
