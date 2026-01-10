"use client";

import Link from "next/link";

import { EmptyState, Input, Select, Spinner } from "@/components/ui";

import { DoDreamLogo } from "@/components/common";

import { useFilters } from "@/lib/hooks";

import { useGetJobs } from "@/src/jobs/jobs";
import type { GetJobsGender, JobCategory } from "@/src/model";

import { JobCard } from "./JobCard";

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
    <div className="bg-luxury-black min-h-screen">
      {/* 헤더 */}
      <header className="border-border flex w-full items-center justify-between border-b px-6 py-4">
        <DoDreamLogo href="/" size="md" className="text-white" />
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/ai-matching" className="text-gold hover:text-gold-light text-sm font-medium transition-colors">
            AI 매칭추천
          </Link>
          <Link href="/actor-search" className="text-warm-gray text-sm transition-colors hover:text-white">
            배우&모델 찾기
          </Link>
          <Link href="/jobs" className="text-sm font-medium text-white">
            작품구인
          </Link>
          <Link href="/notice" className="text-warm-gray text-sm transition-colors hover:text-white">
            공지사항
          </Link>
          <Link
            href="/signup?type=actor"
            className="border-muted-gray hover:bg-luxury-secondary rounded-lg border px-4 py-2 text-sm text-white transition-all"
          >
            프로필 등록하기
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white md:text-3xl">작품과 배우·모델의 만남</h1>
          <button className="text-gold hover:bg-gold/10 rounded-lg border border-purple-500 px-4 py-2 text-sm transition-all">
            구인하기
          </button>
        </div>

        <div className="bg-luxury-black/50 border-border mb-8 rounded-2xl border p-6">
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
          <div className="flex h-32 items-center justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          <div className="mb-8 space-y-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            {jobs.length === 0 && <EmptyState description="등록된 작품구인이 없습니다" />}
          </div>
        )}

        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <button className="bg-gold h-10 w-10 rounded-full font-medium text-white">1</button>
          </div>
        </div>
      </main>

      <div className="from-gold/20 h-32 bg-gradient-to-t to-transparent" />
    </div>
  );
}
