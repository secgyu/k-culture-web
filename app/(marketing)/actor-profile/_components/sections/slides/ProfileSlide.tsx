"use client";

import Image from "next/image";
import { DoDreamLogo } from "@/components/common";

export function ProfileSlide() {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
      <div className="relative w-full md:w-2/5 aspect-[3/4] md:aspect-auto min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop"
          alt="배우 프로필"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-heading-xl text-gray-900">이하나</h2>
              <span className="px-2 py-0.5 bg-gold text-luxury-black text-xs rounded">여자</span>
            </div>
            <p className="text-gray-500 text-body-sm">Lee Hana</p>
          </div>
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-200 rounded grid grid-cols-3 gap-0.5 p-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`${i % 2 === 0 ? "bg-gray-800" : "bg-white"}`} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-caption text-gray-400 mb-4">2024-09-11 만료일정</p>

        <p className="text-body-sm text-gray-600 leading-relaxed mb-6 text-center">
          안녕하세요~! 꿈꾸는 배우 이하나입니다.
          <br />
          따뜻한 미소와 자연스러운 연기로 사람들의 마음을 움직이고 싶은 신인 배우입니다.
        </p>

        <p className="text-caption text-gray-400 text-center mb-4">대표정보</p>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-caption text-gray-500 mb-1">생년월일</p>
            <p className="text-body-sm font-medium text-gray-900">2001-05-14</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-caption text-gray-500 mb-1">소속사</p>
            <p className="text-body-sm font-medium text-gray-900">핑크프로젝트</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-caption text-gray-500 mb-1">학력</p>
            <p className="text-body-sm font-medium text-gray-900">한국대학교</p>
            <p className="text-caption text-gray-500">연기과</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-caption text-gray-500 mb-1">키</p>
            <p className="text-body-sm font-medium text-gray-900">167</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-caption text-gray-500 mb-1">몸무게</p>
            <p className="text-body-sm font-medium text-gray-900">48</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-caption text-gray-500 mb-1">발사이즈</p>
            <p className="text-body-sm font-medium text-gray-900">235</p>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
          <span className="text-caption text-gray-500 shrink-0">키워드</span>
          <div className="flex flex-wrap gap-2">
            {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한", "우아한", "밝은한"].map((tag) => (
              <span key={tag} className="px-2 py-1 bg-white border border-gray-200 text-caption text-gray-700 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-4">
          <span className="text-caption text-gray-500 shrink-0">대표작품</span>
          <p className="text-body-sm text-gray-700">단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>
        </div>

        <div className="flex justify-end">
          <DoDreamLogo size="sm" className="text-gray-400" doorFillColor="fill-gray-100" />
        </div>
      </div>
    </div>
  );
}
