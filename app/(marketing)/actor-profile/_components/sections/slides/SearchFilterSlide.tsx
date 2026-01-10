"use client";

import { memo } from "react";
import Image from "next/image";
import {
  CATEGORY_FILTER_OPTIONS,
  GENDER_FILTER_OPTIONS,
  LICENSE_FILTER_OPTIONS,
  WORK_EXCHANGE_FILTER_OPTIONS,
} from "@/lib/constants/options";

export const SearchFilterSlide = memo(function SearchFilterSlide() {
  return (
    <div className="bg-luxury-secondary rounded-2xl overflow-hidden shadow-2xl p-6 max-w-5xl mx-auto border border-gold/10">
      <p className="text-ivory text-center text-body-lg mb-6">오늘보다 내일이 더 빛날 배우분들을 만나보세요.</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-warm-gray text-body-sm w-16">구분</span>
            <div className="flex gap-2">
              {CATEGORY_FILTER_OPTIONS.map((opt) => (
                <span key={opt} className="px-3 py-1 bg-luxury-tertiary text-ivory text-caption rounded">
                  {opt}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-warm-gray text-body-sm w-16">성별</span>
            <div className="flex gap-2">
              {GENDER_FILTER_OPTIONS.map((opt) => (
                <span key={opt} className="px-3 py-1 bg-luxury-tertiary text-ivory text-caption rounded">
                  {opt}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-warm-gray text-body-sm w-16">나이</span>
            <div className="flex gap-2 items-center">
              <span className="px-3 py-1 bg-luxury-tertiary text-ivory text-caption rounded">최소</span>
              <span className="text-muted-gray">~</span>
              <span className="px-3 py-1 bg-luxury-tertiary text-ivory text-caption rounded">최대</span>
              <span className="text-warm-gray text-caption">세</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-warm-gray text-body-sm w-16">운전면허</span>
            <div className="flex gap-2">
              {LICENSE_FILTER_OPTIONS.map((opt) => (
                <span key={opt} className="px-3 py-1 bg-luxury-tertiary text-ivory text-caption rounded">
                  {opt}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-warm-gray text-body-sm w-16">품앗이</span>
            <div className="flex gap-2">
              {WORK_EXCHANGE_FILTER_OPTIONS.map((opt) => (
                <span key={opt} className="px-3 py-1 bg-luxury-tertiary text-ivory text-caption rounded">
                  {opt}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-warm-gray text-body-sm w-16">영화예산</span>
            <div className="flex gap-2 items-center">
              <span className="text-warm-gray text-caption">최대</span>
              <span className="px-4 py-1 bg-luxury-tertiary text-ivory text-caption rounded">100,000</span>
              <span className="text-warm-gray text-caption">원</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted-gray text-center text-caption mb-4">필터 초기화</p>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src={`https://images.unsplash.com/photo-${
                1507003211169 + i * 100
              }-0a1dd7228f2d?w=200&h=300&fit=crop&crop=face`}
              alt={`배우 ${i}`}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2">
              <p className="text-white text-caption font-medium">배우{i}</p>
              <div className="flex gap-1 mt-1">
                <span className="px-1 py-0.5 bg-gold text-white text-[8px] rounded">배우</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
