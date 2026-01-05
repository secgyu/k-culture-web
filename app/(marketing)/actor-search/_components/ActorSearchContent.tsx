"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { LandingHeader } from "@/app/components";
import { CompareFloatingBar, CompareModal } from "@/app/components/compare";
import {
  FilterSidebar,
  FilterBottomSheet,
  FilterFloatingButton,
  SortDropdown,
  SortButton,
  SortBottomSheet,
  SortOption,
} from "@/app/components/search";
import { useGetActors } from "@/src/actors/actors";
import { useAuth } from "@/lib/hooks";
import { Spinner } from "@/components/ui";
import { ActorCard } from "./ActorCard";

export function ActorSearchContent() {
  const searchParams = useSearchParams();
  const { isLoggedIn } = useAuth();
  const [isSortSheetOpen, setIsSortSheetOpen] = useState(false);
  const [page, setPage] = useState(1);

  const currentSort = (searchParams.get("sort") as SortOption) || "latest";

  const { data: actorsData, isLoading } = useGetActors({
    page,
    limit: 20,
    sortBy: currentSort === "latest" ? "recent" : currentSort === "filmography" ? "views_high" : "recent",
  });

  const actors = actorsData?.data?.actors || [];
  const pagination = actorsData?.data?.pagination;

  return (
    <div className="min-h-screen bg-luxury-black">
      <LandingHeader currentPath="/actor-search" />

      <main className="max-w-screen-2xl mx-auto px-4 lg:px-6 pt-6 pb-24">
        <div className="text-center mb-8">
          <h1 className="text-heading-xl md:text-display-sm text-ivory">
            오늘보다 내일이 더 빛날 배우·모델분들을 만나보세요.
          </h1>
        </div>

        {!isLoggedIn && (
          <div className="bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl p-4 mb-8 border border-gold/30 max-w-4xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="px-4 py-2 bg-gold text-luxury-black font-medium text-body-sm rounded-lg hover:bg-gold-light transition-colors duration-200 active:scale-[0.98]"
              >
                로그인
              </Link>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          <FilterSidebar />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-body-sm text-muted-gray">
                <span className="text-ivory font-semibold">{pagination?.total || actors.length}</span>명의 배우·모델
              </p>
              <div className="hidden lg:block">
                <SortDropdown />
              </div>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <Spinner size="lg" />
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                {actors.map((actor, index) => (
                  <ActorCard key={actor.id} actor={actor} isBlurred={!isLoggedIn && index >= 4} />
                ))}
              </div>
            )}

            {actors.length === 0 && !isLoading && (
              <p className="text-center text-muted-gray py-12">등록된 배우가 없습니다</p>
            )}
          </div>
        </div>
      </main>

      <div className="lg:hidden fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <SortButton onClick={() => setIsSortSheetOpen(true)} />
        <FilterFloatingButton />
      </div>

      <FilterBottomSheet />
      <SortBottomSheet isOpen={isSortSheetOpen} onClose={() => setIsSortSheetOpen(false)} />
      <CompareFloatingBar />
      <CompareModal />
    </div>
  );
}
