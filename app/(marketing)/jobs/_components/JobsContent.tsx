"use client";

import { DoDreamLogo } from "@/app/components";
import Link from "next/link";
import { useState } from "react";
import { useGetJobs } from "@/src/jobs/jobs";
import type { JobCategory } from "@/src/model";

const getCategoryColor = (category: string) => {
  switch (category) {
    case "단편영화": return "text-green-400";
    case "기타": return "text-muted-gray";
    case "광고": return "text-yellow-400";
    case "웹드라마": return "text-blue-400";
    case "장편영화": return "text-gold";
    default: return "text-muted-gray";
  }
};

function JobCard({ job }: { job: any }) {
  return (
    <div className="bg-luxury-black/80 rounded-xl p-6 border border-border hover:border-muted-gray transition-all">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-sm font-medium ${getCategoryColor(job.category)}`}>| {job.category}</span>
            {job.isPumasi ? (
              <span className="flex items-center gap-1 text-gold text-sm">💜 품앗이</span>
            ) : (
              <span className="flex items-center gap-1 text-yellow-400 text-sm">💰 {job.price?.toLocaleString()} 원</span>
            )}
          </div>
          <h3 className="text-white font-medium text-lg mb-3">{job.title}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-luxury-secondary text-warm-gray text-sm rounded">{job.gender}</span>
            <span className="px-3 py-1 bg-luxury-secondary text-muted-gray text-sm rounded">제작: {job.production}</span>
            <span className="px-3 py-1 bg-luxury-secondary text-muted-gray text-sm rounded">작품제목: {job.workTitle}</span>
          </div>
        </div>
        <div className="text-right ml-4">
          <p className="text-yellow-500 font-medium mb-1">{job.status}</p>
          <p className="text-muted-foreground text-sm">조회 : {job.views}</p>
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

  const { data: jobsData, isLoading } = useGetJobs({
    category: filters.category !== "전체" ? filters.category as JobCategory : undefined,
    gender: filters.gender !== "전체" ? filters.gender as any : undefined,
    isPumasi: filters.pumasi === "가능" ? true : filters.pumasi === "불가능" ? false : undefined,
  });

  const jobs = jobsData?.data?.jobs || [];

  return (
    <div className="min-h-screen bg-luxury-black">
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-border">
        <DoDreamLogo href="/" size="md" className="text-white" />
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/ai-matching" className="text-gold hover:text-gold-light transition-colors text-sm font-medium">AI 매칭추천</Link>
          <Link href="/actor-search" className="text-warm-gray hover:text-white transition-colors text-sm">배우&모델 찾기</Link>
          <Link href="/jobs" className="text-white text-sm font-medium">작품구인</Link>
          <Link href="/notice" className="text-warm-gray hover:text-white transition-colors text-sm">공지사항</Link>
          <Link href="/profile-register" className="px-4 py-2 border border-muted-gray text-white text-sm rounded-lg hover:bg-luxury-secondary transition-all">프로필 등록하기</Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">작품과 배우·모델의 만남</h1>
          <button className="px-4 py-2 border border-purple-500 text-gold text-sm rounded-lg hover:bg-gold/10 transition-all">구인하기</button>
        </div>

        <div className="bg-luxury-black/50 rounded-2xl p-6 mb-8 border border-border">
          <div className="mb-6">
            <input type="text" placeholder="작품 검색" className="w-full bg-luxury-secondary border border-border rounded-lg px-4 py-3 text-warm-gray placeholder-muted-foreground" />
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="text-muted-gray text-sm">작품구분</span>
              <select value={filters.category} onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))} className="bg-luxury-secondary border border-border rounded-lg px-3 py-2 text-warm-gray text-sm">
                <option value="전체">전체</option>
                <option value="단편영화">단편영화</option>
                <option value="장편영화">장편영화</option>
                <option value="웹드라마">웹드라마</option>
                <option value="광고">광고</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-gray text-sm">성별</span>
              <select value={filters.gender} onChange={(e) => setFilters((prev) => ({ ...prev, gender: e.target.value }))} className="bg-luxury-secondary border border-border rounded-lg px-3 py-2 text-warm-gray text-sm">
                <option value="전체">전체</option>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
                <option value="성별무관">성별무관</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-gray text-sm">품앗이</span>
              <select value={filters.pumasi} onChange={(e) => setFilters((prev) => ({ ...prev, pumasi: e.target.value }))} className="bg-luxury-secondary border border-border rounded-lg px-3 py-2 text-warm-gray text-sm">
                <option value="전체">전체</option>
                <option value="가능">가능</option>
                <option value="불가능">불가능</option>
              </select>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            {jobs.length === 0 && (
              <p className="text-center text-muted-gray py-12">등록된 작품구인이 없습니다</p>
            )}
          </div>
        )}

        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 bg-gold text-white rounded-full font-medium">1</button>
          </div>
        </div>
      </main>

      <div className="h-32 bg-gradient-to-t from-gold/20 to-transparent" />
    </div>
  );
}
