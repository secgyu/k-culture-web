"use client";

import { DoDreamLogo } from "@/components/common";
import Link from "next/link";
import { useGetJobs } from "@/src/jobs/jobs";
import { useFilters } from "@/lib/hooks";
import { Spinner, Input, Select, EmptyState } from "@/components/ui";
import { JobCard } from "./JobCard";
import type { JobCategory, GetJobsGender } from "@/src/model";

interface JobFilters {
  [key: string]: string | boolean | undefined;
  category: string;
  gender: string;
  pumasi: string;
}

const CATEGORY_OPTIONS = [
  { value: "전체", label: "전체" },
  { value: "단편영화", label: "단편영화" },
  { value: "장편영화", label: "장편영화" },
  { value: "웹드라마", label: "웹드라마" },
  { value: "광고", label: "광고" },
  { value: "기타", label: "기타" },
];

const GENDER_OPTIONS = [
  { value: "전체", label: "전체" },
  { value: "남자", label: "남자" },
  { value: "여자", label: "여자" },
  { value: "성별무관", label: "성별무관" },
];

const PUMASI_OPTIONS = [
  { value: "전체", label: "전체" },
  { value: "가능", label: "가능" },
  { value: "불가능", label: "불가능" },
];

export function JobsContent() {
  const { filters, setFilter } = useFilters<JobFilters>({
    category: "전체",
    gender: "전체",
    pumasi: "전체",
  });

  const { data: jobsData, isLoading } = useGetJobs({
    category: filters.category !== "전체" ? (filters.category as JobCategory) : undefined,
    gender: filters.gender !== "전체" ? (filters.gender as GetJobsGender) : undefined,
    isPumasi: filters.pumasi === "가능" ? true : filters.pumasi === "불가능" ? false : undefined,
  });

  const jobs = jobsData?.data?.jobs || [];

  return (
    <div className="min-h-screen bg-luxury-black">
      {/* 헤더 */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-border">
        <DoDreamLogo href="/" size="md" className="text-white" />
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/ai-matching" className="text-gold hover:text-gold-light transition-colors text-sm font-medium">
            AI 매칭추천
          </Link>
          <Link href="/actor-search" className="text-warm-gray hover:text-white transition-colors text-sm">
            배우&모델 찾기
          </Link>
          <Link href="/jobs" className="text-white text-sm font-medium">
            작품구인
          </Link>
          <Link href="/notice" className="text-warm-gray hover:text-white transition-colors text-sm">
            공지사항
          </Link>
          <Link
            href="/profile-register"
            className="px-4 py-2 border border-muted-gray text-white text-sm rounded-lg hover:bg-luxury-secondary transition-all"
          >
            프로필 등록하기
          </Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">작품과 배우·모델의 만남</h1>
          <button className="px-4 py-2 border border-purple-500 text-gold text-sm rounded-lg hover:bg-gold/10 transition-all">
            구인하기
          </button>
        </div>

        <div className="bg-luxury-black/50 rounded-2xl p-6 mb-8 border border-border">
          <div className="mb-6">
            <Input type="text" placeholder="작품 검색" className="bg-luxury-secondary border-border" />
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="text-muted-gray text-sm">작품구분</span>
              <Select
                options={CATEGORY_OPTIONS}
                value={filters.category}
                onChange={(value) => setFilter("category", value)}
                className="bg-luxury-secondary border-border"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-gray text-sm">성별</span>
              <Select
                options={GENDER_OPTIONS}
                value={filters.gender}
                onChange={(value) => setFilter("gender", value)}
                className="bg-luxury-secondary border-border"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-gray text-sm">품앗이</span>
              <Select
                options={PUMASI_OPTIONS}
                value={filters.pumasi}
                onChange={(value) => setFilter("pumasi", value)}
                className="bg-luxury-secondary border-border"
              />
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <Spinner size="lg" />
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            {jobs.length === 0 && <EmptyState description="등록된 작품구인이 없습니다" />}
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
