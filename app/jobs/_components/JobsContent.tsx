"use client";

import Link from "next/link";
import { useState } from "react";

// 더미 작품 데이터
const jobsData = [
  {
    id: 1,
    category: "단편영화",
    isPumasi: true,
    price: null,
    title: "콘텐츠학과 졸업학품 단편영화에 출연해주실 배우분을 모집합니다.",
    gender: "성별무관",
    production: "한국문화콘텐츠학과",
    workTitle: "도망에도 요령이 필요하다",
    status: "마감됨",
    views: 32,
  },
  {
    id: 2,
    category: "기타",
    isPumasi: false,
    price: 100000,
    title: "테스트 모집",
    gender: "남자",
    production: "리앤",
    workTitle: "테스트",
    status: "마감됨",
    views: 11,
  },
  {
    id: 3,
    category: "광고",
    isPumasi: false,
    price: 150000,
    title: "토이드에서 CF촬영에 참여해주실 배우분들을 모집합니다!",
    gender: "남자",
    production: "토이드",
    workTitle: "담",
    status: "마감됨",
    views: 245,
  },
  {
    id: 4,
    category: "광고",
    isPumasi: false,
    price: 150000,
    title: "토이드에서 CF촬영에 참여해주실 배우분들을 모집합니다!",
    gender: "남자",
    production: "토이드",
    workTitle: "담",
    status: "마감됨",
    views: 159,
  },
  {
    id: 5,
    category: "웹드라마",
    isPumasi: true,
    price: null,
    title: "순천향대학교 미디어커뮤니케이션학과에서 단편영화에 출연하실 남성분 구합니다.",
    gender: "남자",
    production: "순천향대학교 미디어커뮤니케이션학과",
    workTitle: "애간장",
    status: "마감됨",
    views: 53,
  },
  {
    id: 6,
    category: "장편영화",
    isPumasi: false,
    price: 300000,
    title: "TOID 토이드에 오신 것을 환영합니다. 체험용 공고입니다.",
    gender: "성별무관",
    production: "토이드",
    workTitle: "토이드",
    status: "마감됨",
    views: 66,
  },
];

// 카테고리 색상
const getCategoryColor = (category: string) => {
  switch (category) {
    case "단편영화":
      return "text-green-400";
    case "기타":
      return "text-zinc-400";
    case "광고":
      return "text-yellow-400";
    case "웹드라마":
      return "text-blue-400";
    case "장편영화":
      return "text-purple-400";
    default:
      return "text-zinc-400";
  }
};

// 작품 카드 컴포넌트
function JobCard({ job }: { job: (typeof jobsData)[0] }) {
  return (
    <div className="bg-zinc-900/80 rounded-xl p-6 border border-zinc-800 hover:border-zinc-600 transition-all">
      <div className="flex justify-between items-start">
        {/* 왼쪽 콘텐츠 */}
        <div className="flex-1">
          {/* 카테고리 & 가격/품앗이 */}
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-sm font-medium ${getCategoryColor(job.category)}`}>| {job.category}</span>
            {job.isPumasi ? (
              <span className="flex items-center gap-1 text-purple-400 text-sm">
                <span>💜</span> 품앗이
              </span>
            ) : (
              <span className="flex items-center gap-1 text-yellow-400 text-sm">
                <span>💰</span> {job.price?.toLocaleString()} 원
              </span>
            )}
          </div>

          {/* 제목 */}
          <h3 className="text-white font-medium text-lg mb-3">{job.title}</h3>

          {/* 태그들 */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">{job.gender}</span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-sm rounded">제작: {job.production}</span>
            <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-sm rounded">작품제목: {job.workTitle}</span>
          </div>
        </div>

        {/* 오른쪽: 상태 & 조회수 */}
        <div className="text-right ml-4">
          <p className="text-yellow-500 font-medium mb-1">{job.status}</p>
          <p className="text-zinc-500 text-sm">조회 : {job.views}</p>
        </div>
      </div>
    </div>
  );
}

export function JobsContent() {
  const [filters, setFilters] = useState({
    category: "전체",
    age: "전체",
    gender: "전체",
    pumasi: "전체",
  });

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
          <Link href="/actor-search" className="text-zinc-300 hover:text-white transition-colors text-sm">
            배우&모델 찾기
          </Link>
          <Link href="/jobs" className="text-white text-sm font-medium">
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
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* 타이틀 & 구인하기 버튼 */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">작품과 배우·모델의 만남</h1>
          <button className="px-4 py-2 border border-purple-500 text-purple-400 text-sm rounded-lg hover:bg-purple-500/10 transition-all">
            구인하기
          </button>
        </div>

        {/* 필터 섹션 */}
        <div className="bg-zinc-900/50 rounded-2xl p-6 mb-8 border border-zinc-800">
          {/* 검색 */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="작품 검색"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-300 placeholder-zinc-500"
            />
          </div>

          {/* 필터 옵션들 */}
          <div className="flex flex-wrap gap-6">
            {/* 작품구분 */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">작품구분</span>
              <select
                value={filters.category}
                onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm"
              >
                <option value="전체">전체</option>
                <option value="단편영화">단편영화</option>
                <option value="장편영화">장편영화</option>
                <option value="웹드라마">웹드라마</option>
                <option value="광고">광고</option>
                <option value="기타">기타</option>
              </select>
            </div>

            {/* 나이 */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">나이</span>
              <select
                value={filters.age}
                onChange={(e) => setFilters((prev) => ({ ...prev, age: e.target.value }))}
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm"
              >
                <option value="전체">전체</option>
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대">40대</option>
                <option value="50대 이상">50대 이상</option>
              </select>
            </div>

            {/* 성별 */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">성별</span>
              <select
                value={filters.gender}
                onChange={(e) => setFilters((prev) => ({ ...prev, gender: e.target.value }))}
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm"
              >
                <option value="전체">전체</option>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
                <option value="무관">무관</option>
              </select>
            </div>

            {/* 품앗이 */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">품앗이</span>
              <select
                value={filters.pumasi}
                onChange={(e) => setFilters((prev) => ({ ...prev, pumasi: e.target.value }))}
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-sm"
              >
                <option value="전체">전체</option>
                <option value="가능">가능</option>
                <option value="불가능">불가능</option>
              </select>
            </div>
          </div>
        </div>

        {/* 작품 리스트 */}
        <div className="space-y-4 mb-8">
          {jobsData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 bg-purple-600 text-white rounded-full font-medium">1</button>
          </div>
        </div>
      </main>

      {/* 하단 그라데이션 */}
      <div className="h-32 bg-gradient-to-t from-purple-900/20 to-transparent" />
    </div>
  );
}

