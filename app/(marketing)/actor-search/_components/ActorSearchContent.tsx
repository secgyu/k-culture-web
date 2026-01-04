"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
import { useCompareStore, CompareActor } from "@/stores/useCompareStore";
import { CheckIcon, PlusIcon } from "@/app/components/Icons";
import { useGetActors } from "@/src/actors/actors";

interface Actor {
  id: string;
  name: string;
  imageUrl?: string;
  age?: string;
  filmography?: number;
  tags?: string[];
}

function ActorCard({ actor, isBlurred = false }: { actor: Actor; isBlurred?: boolean }) {
  const { addActor, removeActor, isInCompare, actors, maxActors } = useCompareStore();
  const isSelected = isInCompare(Number(actor.id));
  const isFull = actors.length >= maxActors;

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSelected) {
      removeActor(Number(actor.id));
    } else if (!isFull) {
      const compareActor: CompareActor = {
        id: Number(actor.id),
        name: actor.name,
        gender: "미정",
        age: 0,
        height: 0,
        weight: 0,
        work: "",
        image: actor.imageUrl || "",
      };
      addActor(compareActor);
    }
  };

  const cardContent = (
    <div
      className={`bg-luxury-black rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer active:scale-[0.98] ${
        isSelected ? "border-gold shadow-lg shadow-gold/20" : "border-border hover:border-muted-gray hover:shadow-lg"
      }`}
    >
      <div className="relative aspect-[3/4] bg-luxury-secondary">
        <Image
          src={actor.imageUrl || `https://images.unsplash.com/photo-1507003211169?w=300&h=400&fit=crop&crop=face`}
          alt={actor.name}
          fill
          className={`object-cover ${isBlurred ? "blur-sm" : ""}`}
        />

        {!isBlurred && (
          <button
            onClick={handleCompareClick}
            disabled={!isSelected && isFull}
            aria-label={isSelected ? "비교에서 제거" : "비교에 추가"}
            className={`absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              isSelected
                ? "bg-gold text-luxury-black hover:bg-gold-light"
                : isFull
                ? "bg-luxury-black/50 text-muted-gray cursor-not-allowed"
                : "bg-luxury-black/70 text-white hover:bg-gold hover:text-luxury-black backdrop-blur-sm"
            }`}
          >
            {isSelected ? <CheckIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
          </button>
        )}

        {isBlurred && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-8 h-8 text-white/80 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <p className="text-white/80 text-caption">로그인하고 보기</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className={`text-ivory font-bold ${isBlurred ? "blur-sm" : ""}`}>{isBlurred ? "***" : actor.name}</h3>
        </div>

        <div className="space-y-1 text-body-sm text-muted-gray mb-3">
          <div className="flex items-center gap-2">
            <span>{actor.age || "정보없음"}</span>
            {actor.filmography && actor.filmography > 0 && (
              <span className="text-muted-gray">· 작품 {actor.filmography}편</span>
            )}
          </div>
        </div>

        {actor.tags && actor.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {actor.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-gold/10 rounded text-xs text-gold">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (isBlurred) {
    return <Link href="/login">{cardContent}</Link>;
  }

  return <Link href={`/actors/${actor.id}`}>{cardContent}</Link>;
}

export function ActorSearchContent() {
  const searchParams = useSearchParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  useEffect(() => {
    const hasOnboardingData = localStorage.getItem("onboarding_step1");
    setIsLoggedIn(!!hasOnboardingData);
  }, []);

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
                <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
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
