"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DoDreamLogo, LandingHeader } from "@/app/components";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-luxury-black via-luxury-black to-luxury-secondary overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-gold/20 to-transparent" />

      <LandingHeader transparent currentPath="/actor-profile" />

      <div className="relative z-10 flex flex-col items-center px-6 section-spacing-md">
        <div className="inline-block px-7 py-2.5 bg-gold rounded-full title-margin-md">
          <span className="text-luxury-black font-semibold text-body-sm">배우&모델</span>
        </div>

        <h1 className="font-display text-display-lg lg:text-display-xl text-ivory text-center title-margin-lg">
          프로필 관리·탐색 플랫폼
        </h1>

        <div className="w-full max-w-5xl mx-auto relative h-[600px] overflow-hidden">
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              currentSlide === 0 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
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
                    {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한", "우아한", "밝은한"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white border border-gray-200 text-caption text-gray-700 rounded"
                        >
                          {tag}
                        </span>
                      )
                    )}
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
          </div>

          <div
            className={`absolute inset-0 transition-all duration-700 ${
              currentSlide === 1
                ? "opacity-100 translate-x-0"
                : currentSlide < 1
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="bg-luxury-secondary rounded-2xl overflow-hidden shadow-2xl p-6 max-w-5xl mx-auto border border-gold/10">
              <p className="text-ivory text-center text-body-lg mb-6">오늘보다 내일이 더 빛날 배우분들을 만나보세요.</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-warm-gray text-body-sm w-16">구분</span>
                    <div className="flex gap-2">
                      {["무관", "배우", "모델"].map((opt) => (
                        <span key={opt} className="px-3 py-1 bg-luxury-tertiary text-ivory text-caption rounded">
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-warm-gray text-body-sm w-16">성별</span>
                    <div className="flex gap-2">
                      {["무관", "남자", "여자"].map((opt) => (
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
                      {["무관", "1종", "2종"].map((opt) => (
                        <span key={opt} className="px-3 py-1 bg-luxury-tertiary text-ivory text-caption rounded">
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-warm-gray text-body-sm w-16">품앗이</span>
                    <div className="flex gap-2">
                      {["무관", "가능", "불가능"].map((opt) => (
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
          </div>

          <div
            className={`absolute inset-0 transition-all duration-700 ${
              currentSlide === 2
                ? "opacity-100 translate-x-0"
                : currentSlide < 2
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="bg-luxury-secondary rounded-2xl overflow-hidden shadow-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-heading-xl text-white text-center mb-2">AI 매칭 기술을 통해</h3>
              <p className="text-body-lg text-ivory text-center mb-8">시놉시스와 캐릭터 정보로 배우를 찾아보세요.</p>

              <div className="bg-luxury-tertiary rounded-xl p-4 mb-4">
                <p className="text-muted-gray text-body-sm">시놉시스를 입력해 주세요. (500자 이내)</p>
              </div>
              <p className="text-right text-muted-gray text-caption mb-4">0/500</p>

              <div className="bg-luxury-tertiary rounded-xl px-4 py-3 mb-4">
                <p className="text-muted-gray text-body-sm">캐릭터 정보를 입력해 주세요. (100자 이내)</p>
              </div>
              <p className="text-right text-muted-gray text-caption mb-6">0/100</p>

              <button className="w-full py-4 btn-gold text-luxury-black font-semibold rounded-xl mb-3 transition-all duration-200 hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50">
                AI 추천 찾기
              </button>
              <button className="w-full py-4 border border-gold/30 text-ivory font-semibold rounded-xl transition-colors duration-200 hover:bg-gold/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50">
                필터를 통해 찾기
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-0 transition-all duration-700 ${
              currentSlide === 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            <div className="bg-gradient-to-br from-champagne to-ivory rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <div className="flex">
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gold-dark text-lg">←</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gold text-sm">좋아요 0</span>
                      <span className="text-gold">♡</span>
                      <span className="text-gold">🔗</span>
                      <span className="text-gold">📄</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-heading-xl text-gray-900">이하나</h2>
                    <span className="px-2 py-0.5 bg-gold text-white text-caption rounded">배우&모델</span>
                  </div>
                  <p className="text-gray-500 text-body-sm mb-4">Lee Hana</p>

                  <span className="inline-block px-3 py-1 bg-gold text-luxury-black text-xs rounded-full mb-4 font-medium">
                    여자
                  </span>

                  <div className="space-y-2 text-body-sm text-gray-600 mb-4">
                    <p>🏢 핑크프로젝트</p>
                    <p>🎓 한국대학교 연기과</p>
                  </div>
                  <p className="text-body-sm text-gray-500 mb-4">단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-body-sm text-gray-600 w-24">24세 (2001)</span>
                      <div className="flex-1 h-2 bg-champagne rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gold rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-body-sm text-gray-600 w-24">167 cm</span>
                      <div className="flex-1 h-2 bg-champagne rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gold rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-body-sm text-gray-600 w-24">48 kg</span>
                      <div className="flex-1 h-2 bg-champagne rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-gold rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-body-sm text-gray-600 w-24">235 mm</span>
                      <div className="flex-1 h-2 bg-champagne rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gold rounded-full" />
                      </div>
                    </div>
                  </div>

                  <p className="text-caption text-gray-600 leading-relaxed mb-4">
                    안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로 사람들의 마음을 움직이고 싶은
                    신인 배우입니다.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한", "우아한", "밝은한"].map(
                      (tag) => (
                        <span key={tag} className="px-2 py-1 bg-gold/20 text-gold-dark text-caption rounded">
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["한국어", "영어"].map((lang) => (
                      <span key={lang} className="px-2 py-1 bg-blue-100 text-blue-700 text-caption rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["경상도사투리", "전라도사투리"].map((d) => (
                      <span key={d} className="px-2 py-1 bg-green-100 text-green-700 text-caption rounded">
                        {d}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["노래", "피아노", "바이올린"].map((s) => (
                      <span key={s} className="px-2 py-1 bg-orange-100 text-orange-700 text-caption rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["수영", "요가", "골프"].map((sp) => (
                      <span key={sp} className="px-2 py-1 bg-pink-100 text-pink-700 text-caption rounded">
                        {sp}
                      </span>
                    ))}
                  </div>

                  <span className="px-2 py-1 bg-gray-200 text-gray-700 text-caption rounded">2종</span>

                  <div className="flex gap-2 mt-4">
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-caption">
                      ▶
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-caption">
                      📷
                    </div>
                  </div>
                </div>

                <div className="relative w-2/5 min-h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop"
                    alt="배우 프로필"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-gold/60 focus:outline-none ${
                currentSlide === i ? "bg-gold w-8" : "bg-warm-gray/30"
              }`}
            />
          ))}
        </div>

        <p className="text-muted-gray text-body-sm mt-12 mb-8">- 프로필 PDF파일 자동 완성 기능 -</p>

        <Link
          href="/signup?type=actor"
          className="px-16 py-4 bg-gold text-luxury-black font-semibold rounded-xl hover:bg-gold-light transition-all duration-200 text-body-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        >
          프로필 등록하기
        </Link>
      </div>
    </section>
  );
}
