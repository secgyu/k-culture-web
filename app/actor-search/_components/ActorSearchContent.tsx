"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
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

interface Actor {
  id: number;
  name: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  work: string;
  image: string;
  filmographyCount: number;
  registeredAt: Date;
}

const generateActors = (page: number): Actor[] => {
  const actors: Actor[] = [];
  const names = [
    { name: "이무준", gender: "남자" },
    { name: "김세훈", gender: "남자" },
    { name: "박시현", gender: "여자" },
    { name: "배연희", gender: "여자" },
    { name: "진서", gender: "여자" },
    { name: "이다혜", gender: "여자" },
    { name: "배성민", gender: "남자" },
    { name: "정민기", gender: "남자" },
    { name: "조주연", gender: "여자" },
    { name: "김병철", gender: "남자" },
    { name: "이재근", gender: "남자" },
    { name: "장유정", gender: "여자" },
    { name: "소피아", gender: "여자" },
    { name: "강신현", gender: "남자" },
  ];

  const works = [
    "단편영화,2024,방,미주역(조연)",
    "광고, 지상파TV cf,2024,대교육, 시니어(주연)",
    "웹드라마,2024,데뷔조,소장역(조연)",
    "영화,2022,지하늘에 슬픔이,주인공 친구역",
    "드라마,2024,천기누설 겨울철 내 몸의 탈주범을 잡아라,경찰역",
    "",
    "",
    "",
  ];

  for (let i = 0; i < 14; i++) {
    const actor = names[i % names.length];
    const baseAge = 20 + Math.floor(Math.random() * 30);
    const baseHeight = 155 + Math.floor(Math.random() * 35);
    const baseWeight = 45 + Math.floor(Math.random() * 40);
    const filmographyCount = Math.floor(Math.random() * 20);

    actors.push({
      id: page * 14 + i,
      name: actor.name,
      gender: actor.gender,
      age: baseAge,
      height: baseHeight,
      weight: baseWeight,
      work: works[i % works.length],
      image: `https://images.unsplash.com/photo-${1500000000000 + page * 14 + i}?w=300&h=400&fit=crop&crop=face`,
      filmographyCount,
      registeredAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
    });
  }

  return actors;
};

function ActorCard({ actor, isBlurred = false }: { actor: Actor; isBlurred?: boolean }) {
  const { addActor, removeActor, isInCompare, actors, maxActors } = useCompareStore();
  const isSelected = isInCompare(actor.id);
  const isFull = actors.length >= maxActors;

  const genderColor = actor.gender === "남자" ? "bg-blue-600" : "bg-orange-500";

  const heightPercent = Math.min(100, Math.max(0, ((actor.height - 150) / 50) * 100));
  const weightPercent = Math.min(100, Math.max(0, ((actor.weight - 40) / 60) * 100));

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSelected) {
      removeActor(actor.id);
    } else if (!isFull) {
      const compareActor: CompareActor = {
        id: actor.id,
        name: actor.name,
        gender: actor.gender,
        age: actor.age,
        height: actor.height,
        weight: actor.weight,
        work: actor.work,
        image: actor.image,
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
          src={`https://images.unsplash.com/photo-${1507003211169 + actor.id}?w=300&h=400&fit=crop&crop=face`}
          alt={actor.name}
          fill
          className={`object-cover ${isBlurred ? "blur-sm" : ""}`}
        />

        {/* 비교 버튼 */}
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
          <span className={`px-2 py-0.5 ${genderColor} text-white text-caption rounded`}>{actor.gender}</span>
        </div>

        <div className="space-y-1 text-body-sm text-muted-gray mb-3">
          <div className="flex items-center gap-2">
            <span>{actor.age}세</span>
            {actor.filmographyCount > 0 && <span className="text-muted-gray">· 작품 {actor.filmographyCount}편</span>}
          </div>
          <div className="flex items-center gap-2">
            <span>{actor.height} cm</span>
            <div className="flex-1 h-1 bg-luxury-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${heightPercent}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>{actor.weight} kg</span>
            <div className="flex-1 h-1 bg-luxury-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${weightPercent}%` }}
              />
            </div>
          </div>
        </div>

        {actor.work && <p className="text-caption text-muted-gray line-clamp-2">{actor.work}</p>}
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
  const [actors, setActors] = useState<Actor[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSortSheetOpen, setIsSortSheetOpen] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const currentSort = (searchParams.get("sort") as SortOption) || "latest";

  useEffect(() => {
    const hasOnboardingData = localStorage.getItem("onboarding_step1");
    setIsLoggedIn(!!hasOnboardingData);
  }, []);

  useEffect(() => {
    setActors(generateActors(0));
  }, []);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const newPage = page + 1;
      if (newPage >= 5) {
        setHasMore(false);
      } else {
        setActors((prev) => [...prev, ...generateActors(newPage)]);
        setPage(newPage);
      }
      setLoading(false);
    }, 500);
  }, [loading, hasMore, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore, hasMore, loading]);

  // 정렬된 배우 목록
  const sortedActors = useMemo(() => {
    const sorted = [...actors];

    switch (currentSort) {
      case "latest":
        sorted.sort((a, b) => b.registeredAt.getTime() - a.registeredAt.getTime());
        break;
      case "filmography":
        sorted.sort((a, b) => b.filmographyCount - a.filmographyCount);
        break;
      case "age-asc":
        sorted.sort((a, b) => a.age - b.age);
        break;
      case "age-desc":
        sorted.sort((a, b) => b.age - a.age);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name, "ko"));
        break;
      default:
        break;
    }

    return sorted;
  }, [actors, currentSort]);

  return (
    <div className="min-h-screen bg-luxury-black">
      <LandingHeader currentPath="/actor-search" />

      <main className="max-w-screen-2xl mx-auto px-4 lg:px-6 pt-6 pb-24">
        {/* 상단 타이틀 */}
        <div className="text-center mb-8">
          <h1 className="text-heading-xl md:text-display-sm text-ivory">
            오늘보다 내일이 더 빛날 배우·모델분들을 만나보세요.
          </h1>
        </div>

        {/* 로그인 배너 */}
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

        {/* 메인 레이아웃: 사이드바 + 그리드 */}
        <div className="flex gap-8">
          {/* 데스크탑 사이드바 필터 */}
          <FilterSidebar />

          {/* 검색 결과 그리드 */}
          <div className="flex-1 min-w-0">
            {/* 결과 헤더 (결과 수 + 정렬) */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-body-sm text-muted-gray">
                <span className="text-ivory font-semibold">{sortedActors.length}</span>명의 배우·모델
              </p>

              {/* 데스크탑 정렬 드롭다운 */}
              <div className="hidden lg:block">
                <SortDropdown />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
              {sortedActors.map((actor, index) => (
                <ActorCard key={actor.id} actor={actor} isBlurred={!isLoggedIn && index >= 4} />
              ))}
            </div>

            <div ref={observerRef} className="h-20 flex items-center justify-center">
              {loading && (
                <div className="flex items-center gap-2 text-muted-gray">
                  <div className="w-5 h-5 border-2 border-border border-t-gold rounded-full animate-spin" />
                  <span className="text-body-sm">로딩 중...</span>
                </div>
              )}
              {!hasMore && actors.length > 0 && (
                <p className="text-muted-gray text-body-sm">더 이상 결과가 없습니다.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* 모바일 플로팅 버튼들 */}
      <div className="lg:hidden fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <SortButton onClick={() => setIsSortSheetOpen(true)} />
        <FilterFloatingButton />
      </div>

      {/* 모바일 필터 바텀시트 */}
      <FilterBottomSheet />

      {/* 모바일 정렬 바텀시트 */}
      <SortBottomSheet isOpen={isSortSheetOpen} onClose={() => setIsSortSheetOpen(false)} />

      {/* 비교 플로팅 바 */}
      <CompareFloatingBar />

      {/* 비교 모달 */}
      <CompareModal />
    </div>
  );
}
