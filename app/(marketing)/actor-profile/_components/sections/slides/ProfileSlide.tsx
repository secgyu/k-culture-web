"use client";

import { memo } from "react";

import Image from "next/image";

import { DoDreamLogo } from "@/components/common";

export const ProfileSlide = memo(function ProfileSlide() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row">
      <div className="relative aspect-[3/4] min-h-[400px] w-full md:aspect-auto md:w-2/5">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop"
          alt="배우 프로필"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 p-6 md:p-8">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <h2 className="text-heading-xl text-gray-900">이하나</h2>
              <span className="bg-gold text-luxury-black rounded px-2 py-0.5 text-xs">여자</span>
            </div>
            <p className="text-body-sm text-gray-500">Lee Hana</p>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
            <div className="grid h-12 w-12 grid-cols-3 gap-0.5 rounded bg-gray-200 p-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`${i % 2 === 0 ? "bg-gray-800" : "bg-white"}`} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-caption mb-4 text-gray-400">2024-09-11 만료일정</p>

        <p className="text-body-sm mb-6 text-center leading-relaxed text-gray-600">
          안녕하세요~! 꿈꾸는 배우 이하나입니다.
          <br />
          따뜻한 미소와 자연스러운 연기로 사람들의 마음을 움직이고 싶은 신인 배우입니다.
        </p>

        <p className="text-caption mb-4 text-center text-gray-400">대표정보</p>

        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-caption mb-1 text-gray-500">생년월일</p>
            <p className="text-body-sm font-medium text-gray-900">2001-05-14</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-caption mb-1 text-gray-500">소속사</p>
            <p className="text-body-sm font-medium text-gray-900">핑크프로젝트</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-caption mb-1 text-gray-500">학력</p>
            <p className="text-body-sm font-medium text-gray-900">한국대학교</p>
            <p className="text-caption text-gray-500">연기과</p>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-caption mb-1 text-gray-500">키</p>
            <p className="text-body-sm font-medium text-gray-900">167</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-caption mb-1 text-gray-500">몸무게</p>
            <p className="text-body-sm font-medium text-gray-900">48</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-caption mb-1 text-gray-500">발사이즈</p>
            <p className="text-body-sm font-medium text-gray-900">235</p>
          </div>
        </div>

        <div className="mb-4 flex items-start gap-3 rounded-lg bg-gray-50 p-3">
          <span className="text-caption shrink-0 text-gray-500">키워드</span>
          <div className="flex flex-wrap gap-2">
            {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한", "우아한", "밝은한"].map((tag) => (
              <span key={tag} className="text-caption rounded border border-gray-200 bg-white px-2 py-1 text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 flex items-center gap-3 rounded-lg bg-gray-50 p-3">
          <span className="text-caption shrink-0 text-gray-500">대표작품</span>
          <p className="text-body-sm text-gray-700">단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>
        </div>

        <div className="flex justify-end">
          <DoDreamLogo size="sm" className="text-gray-400" doorFillColor="fill-gray-100" />
        </div>
      </div>
    </div>
  );
});
