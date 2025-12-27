"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

// 더미 배우 데이터 생성
const generateActors = (page: number) => {
  const actors = [];
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

    actors.push({
      id: page * 14 + i,
      name: actor.name,
      gender: actor.gender,
      age: baseAge,
      height: baseHeight,
      weight: baseWeight,
      work: works[i % works.length],
      image: `https://images.unsplash.com/photo-${1500000000000 + page * 14 + i}?w=300&h=400&fit=crop&crop=face`,
    });
  }

  return actors;
};

// 필터 옵션 버튼
function FilterButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        selected ? "bg-zinc-700 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
      }`}
    >
      {label}
    </button>
  );
}

// 배우 카드 컴포넌트
function ActorCard({
  actor,
}: {
  actor: {
    id: number;
    name: string;
    gender: string;
    age: number;
    height: number;
    weight: number;
    work: string;
    image: string;
  };
}) {
  const genderColor = actor.gender === "남자" ? "bg-blue-600" : "bg-orange-500";

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all">
      {/* 이미지 */}
      <div className="relative aspect-[3/4] bg-zinc-800">
        <Image
          src={`https://images.unsplash.com/photo-${1507003211169 + actor.id}?w=300&h=400&fit=crop&crop=face`}
          alt={actor.name}
          fill
          className="object-cover"
        />
      </div>

      {/* 정보 */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-white font-bold">{actor.name}</h3>
          <span className={`px-2 py-0.5 ${genderColor} text-white text-xs rounded`}>{actor.gender}</span>
        </div>

        <div className="space-y-1 text-sm text-zinc-400 mb-3">
          <div className="flex items-center gap-2">
            <span>{actor.age}세</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{actor.height} cm</span>
            <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${((actor.height - 150) / 50) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>{actor.weight} kg</span>
            <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${((actor.weight - 40) / 60) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {actor.work && <p className="text-xs text-zinc-500 line-clamp-2">{actor.work}</p>}
      </div>
    </div>
  );
}

export function ActorSearchContent() {
  const [actors, setActors] = useState<ReturnType<typeof generateActors>>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  // 필터 상태
  const [filters, setFilters] = useState({
    category: "무관",
    gender: "무관",
    license: "무관",
    品앗이: "무관",
  });

  // 초기 데이터 로드
  useEffect(() => {
    setActors(generateActors(0));
  }, []);

  // 더 많은 데이터 로드
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

  // Intersection Observer로 무한 스크롤
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

  const resetFilters = () => {
    setFilters({
      category: "무관",
      gender: "무관",
      license: "무관",
      品앗이: "무관",
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* 헤더 */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-1 text-white">
          <span className="font-bold text-xl tracking-tight">T</span>
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">ID</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/ai-matching" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
            AI 매칭추천
          </Link>
          <Link href="/actor-search" className="text-white text-sm font-medium">
            배우&모델 찾기
          </Link>
          <Link href="#" className="text-zinc-300 hover:text-white transition-colors text-sm">
            작품구인
          </Link>
          <Link href="#" className="text-zinc-300 hover:text-white transition-colors text-sm">
            공지사항
          </Link>
          <Link
            href="/signup?type=actor"
            className="px-4 py-2 border border-zinc-600 text-white text-sm rounded-lg hover:bg-zinc-800 transition-all"
          >
            프로필 등록하기
          </Link>
        </nav>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* 메인 */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* 타이틀 */}
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          오늘보다 내일이 더 빛날 배우·모델분들을 만나보세요.
        </h1>

        {/* 필터 섹션 */}
        <div className="bg-zinc-900/50 rounded-2xl p-6 mb-8 border border-zinc-800">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 왼쪽 필터 */}
            <div className="space-y-4">
              {/* 구분 */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm w-16">구분</span>
                <div className="flex gap-2">
                  {["무관", "배우", "모델"].map((option) => (
                    <FilterButton
                      key={option}
                      label={option}
                      selected={filters.category === option}
                      onClick={() => setFilters((prev) => ({ ...prev, category: option }))}
                    />
                  ))}
                </div>
              </div>

              {/* 성별 */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm w-16">성별</span>
                <div className="flex gap-2">
                  {["무관", "남자", "여자"].map((option) => (
                    <FilterButton
                      key={option}
                      label={option}
                      selected={filters.gender === option}
                      onClick={() => setFilters((prev) => ({ ...prev, gender: option }))}
                    />
                  ))}
                </div>
              </div>

              {/* 나이 */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm w-16">나이</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="최소"
                    className="w-20 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm placeholder-zinc-600"
                  />
                  <span className="text-zinc-500">~</span>
                  <input
                    type="text"
                    placeholder="최대"
                    className="w-20 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm placeholder-zinc-600"
                  />
                  <span className="text-zinc-400 text-sm">세</span>
                </div>
              </div>

              {/* 키 */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm w-16">키</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="최소"
                    className="w-20 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm placeholder-zinc-600"
                  />
                  <span className="text-zinc-500">~</span>
                  <input
                    type="text"
                    placeholder="최대"
                    className="w-20 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm placeholder-zinc-600"
                  />
                  <span className="text-zinc-400 text-sm">Cm</span>
                </div>
              </div>

              {/* 몸무게 */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm w-16">몸무게</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="최소"
                    className="w-20 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm placeholder-zinc-600"
                  />
                  <span className="text-zinc-500">~</span>
                  <input
                    type="text"
                    placeholder="최대"
                    className="w-20 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm placeholder-zinc-600"
                  />
                  <span className="text-zinc-400 text-sm">Kg</span>
                </div>
              </div>
            </div>

            {/* 오른쪽 필터 */}
            <div className="space-y-4">
              {/* 운전면허 */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm w-20">운전면허</span>
                <div className="flex gap-2">
                  {["무관", "1종", "2종"].map((option) => (
                    <FilterButton
                      key={option}
                      label={option}
                      selected={filters.license === option}
                      onClick={() => setFilters((prev) => ({ ...prev, license: option }))}
                    />
                  ))}
                </div>
              </div>

              {/* 품앗이 */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm w-20">품앗이</span>
                <div className="flex gap-2">
                  {["무관", "가능", "불가능"].map((option) => (
                    <FilterButton
                      key={option}
                      label={option}
                      selected={filters.品앗이 === option}
                      onClick={() => setFilters((prev) => ({ ...prev, 品앗이: option }))}
                    />
                  ))}
                </div>
              </div>

              {/* 영화 예산 */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm w-20">영화 예산</span>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 text-sm">최대</span>
                  <input
                    type="text"
                    defaultValue="100,000"
                    className="w-28 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm"
                  />
                  <span className="text-zinc-400 text-sm">원</span>
                </div>
              </div>

              {/* 광고 예산 */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm w-20">광고 예산</span>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 text-sm">최대</span>
                  <input
                    type="text"
                    defaultValue="100,000"
                    className="w-28 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm"
                  />
                  <span className="text-zinc-400 text-sm">원</span>
                </div>
              </div>

              {/* 검색 */}
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="이름 또는 키워드 추가하기 (Enter)"
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 text-sm placeholder-zinc-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 필터 초기화 */}
        <div className="text-center mb-8">
          <button onClick={resetFilters} className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
            필터 초기화
          </button>
        </div>

        {/* 배우 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {actors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>

        {/* 무한 스크롤 트리거 */}
        <div ref={observerRef} className="h-20 flex items-center justify-center">
          {loading && (
            <div className="flex items-center gap-2 text-zinc-400">
              <div className="w-5 h-5 border-2 border-zinc-600 border-t-purple-500 rounded-full animate-spin" />
              <span className="text-sm">로딩 중...</span>
            </div>
          )}
          {!hasMore && actors.length > 0 && (
            <p className="text-zinc-500 text-sm">더 이상 결과가 없습니다.</p>
          )}
        </div>
      </main>
    </div>
  );
}

