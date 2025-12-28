"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// 히어로 섹션
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 overflow-hidden">
      {/* 상단 보라색 그라데이션 */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-900/30 to-transparent" />

      {/* 헤더 */}
      <header className="relative z-20 w-full px-6 py-4 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-1 text-white">
          <span className="font-bold text-xl tracking-tight">T</span>
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">ID</span>
        </Link>

        {/* 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/ai-matching"
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
          >
            AI 매칭추천
          </Link>
          <Link href="/actor-search" className="text-zinc-300 hover:text-white transition-colors text-sm">
            배우&모델 찾기
          </Link>
          <Link href="/jobs" className="text-zinc-300 hover:text-white transition-colors text-sm">
            작품구인
          </Link>
          <Link href="/notice" className="text-zinc-300 hover:text-white transition-colors text-sm">
            공지사항
          </Link>
          <Link
            href="/profile-register"
            className="px-4 py-2 border border-zinc-600 text-white text-sm rounded-lg hover:bg-zinc-800 transition-all"
          >
            프로필 등록하기
          </Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* 히어로 컨텐츠 */}
      <div className="relative z-10 flex flex-col items-center px-6 py-12">
        {/* 배지 */}
        <div className="inline-block px-6 py-2 bg-white rounded-full mb-6">
          <span className="text-zinc-900 font-medium text-sm">배우&모델</span>
        </div>

        {/* 제목 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          프로필 관리·탐색 플랫폼
        </h1>

        {/* 슬라이드 컨테이너 */}
        <div className="w-full max-w-5xl mx-auto relative h-[600px] overflow-hidden">
          {/* 슬라이드 1: 프로필 카드 (PDF) */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              currentSlide === 0 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              {/* 왼쪽: 배우 이미지 */}
              <div className="relative w-full md:w-2/5 aspect-[3/4] md:aspect-auto min-h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop"
                  alt="배우 프로필"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 오른쪽: 프로필 정보 */}
              <div className="flex-1 p-6 md:p-8">
                {/* 헤더 */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-2xl font-bold text-gray-900">이하나</h2>
                      <span className="px-2 py-0.5 bg-purple-600 text-white text-xs rounded">여자</span>
                    </div>
                    <p className="text-gray-500 text-sm">Lee Hana</p>
                  </div>
                  {/* QR 코드 */}
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-200 rounded grid grid-cols-3 gap-0.5 p-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={`${i % 2 === 0 ? "bg-gray-800" : "bg-white"}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-4">2024-09-11 만료일정</p>

                {/* 자기소개 */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 text-center">
                  안녕하세요~! 꿈꾸는 배우 이하나입니다.
                  <br />
                  따뜻한 미소와 자연스러운 연기로 사람들의 마음을 움직이고 싶은 신인 배우입니다.
                </p>

                <p className="text-xs text-gray-400 text-center mb-4">대표정보</p>

                {/* 기본 정보 그리드 */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">생년월일</p>
                    <p className="text-sm font-medium text-gray-900">2001-05-14</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">소속사</p>
                    <p className="text-sm font-medium text-gray-900">핑크프로젝트</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">학력</p>
                    <p className="text-sm font-medium text-gray-900">한국대학교</p>
                    <p className="text-xs text-gray-500">연기과</p>
                  </div>
                </div>

                {/* 신체 정보 */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">키</p>
                    <p className="text-sm font-medium text-gray-900">167</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">몸무게</p>
                    <p className="text-sm font-medium text-gray-900">48</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">발사이즈</p>
                    <p className="text-sm font-medium text-gray-900">235</p>
                  </div>
                </div>

                {/* 키워드 */}
                <div className="flex items-start gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                  <span className="text-xs text-gray-500 shrink-0">키워드</span>
                  <div className="flex flex-wrap gap-2">
                    {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한", "우아한", "밝은한"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white border border-gray-200 text-xs text-gray-700 rounded"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* 대표작품 */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-4">
                  <span className="text-xs text-gray-500 shrink-0">대표작품</span>
                  <p className="text-sm text-gray-700">단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>
                </div>

                {/* TOID 로고 */}
                <div className="flex justify-end">
                  <div className="flex items-center gap-1 text-gray-300">
                    <span className="font-bold text-sm tracking-tight">T</span>
                    <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-current" />
                    </div>
                    <span className="font-bold text-sm tracking-tight">ID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 슬라이드 2: 배우 검색 목록 */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              currentSlide === 1
                ? "opacity-100 translate-x-0"
                : currentSlide < 1
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl p-6 max-w-5xl mx-auto">
              {/* 검색 헤더 */}
              <p className="text-white text-center text-lg mb-6">오늘보다 내일이 더 빛날 배우분들을 만나보세요.</p>

              {/* 필터 영역 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* 왼쪽 필터 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-sm w-16">구분</span>
                    <div className="flex gap-2">
                      {["무관", "배우", "모델"].map((opt) => (
                        <span key={opt} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-sm w-16">성별</span>
                    <div className="flex gap-2">
                      {["무관", "남자", "여자"].map((opt) => (
                        <span key={opt} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-sm w-16">나이</span>
                    <div className="flex gap-2 items-center">
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">최소</span>
                      <span className="text-zinc-500">~</span>
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">최대</span>
                      <span className="text-zinc-400 text-xs">세</span>
                    </div>
                  </div>
                </div>

                {/* 오른쪽 필터 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-sm w-16">운전면허</span>
                    <div className="flex gap-2">
                      {["무관", "1종", "2종"].map((opt) => (
                        <span key={opt} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-sm w-16">품앗이</span>
                    <div className="flex gap-2">
                      {["무관", "가능", "불가능"].map((opt) => (
                        <span key={opt} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-sm w-16">영화예산</span>
                    <div className="flex gap-2 items-center">
                      <span className="text-zinc-400 text-xs">최대</span>
                      <span className="px-4 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">100,000</span>
                      <span className="text-zinc-400 text-xs">원</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-zinc-500 text-center text-xs mb-4">필터 초기화</p>

              {/* 배우 그리드 */}
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
                      <p className="text-white text-xs font-medium">배우{i}</p>
                      <div className="flex gap-1 mt-1">
                        <span className="px-1 py-0.5 bg-purple-600 text-white text-[8px] rounded">배우</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 슬라이드 3: AI 매칭 */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              currentSlide === 2
                ? "opacity-100 translate-x-0"
                : currentSlide < 2
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl p-8 max-w-3xl mx-auto">
              {/* AI 매칭 타이틀 */}
              <h3 className="text-2xl font-bold text-white text-center mb-2">AI 매칭 기술을 통해</h3>
              <p className="text-lg text-zinc-300 text-center mb-8">시놉시스와 캐릭터 정보로 배우를 찾아보세요.</p>

              {/* 시놉시스 입력 */}
              <div className="bg-zinc-800 rounded-xl p-4 mb-4">
                <p className="text-zinc-500 text-sm">시놉시스를 입력해 주세요. (500자 이내)</p>
              </div>
              <p className="text-right text-zinc-500 text-xs mb-4">0/500</p>

              {/* 캐릭터 입력 */}
              <div className="bg-zinc-800 rounded-xl px-4 py-3 mb-4">
                <p className="text-zinc-500 text-sm">캐릭터 정보를 입력해 주세요. (100자 이내)</p>
              </div>
              <p className="text-right text-zinc-500 text-xs mb-6">0/100</p>

              {/* 버튼들 */}
              <button className="w-full py-4 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-white font-semibold rounded-xl mb-3">
                AI 추천 찾기
              </button>
              <button className="w-full py-4 border border-zinc-700 text-zinc-300 font-semibold rounded-xl">
                필터를 통해 찾기
              </button>
            </div>
          </div>

          {/* 슬라이드 4: 상세 프로필 */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              currentSlide === 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <div className="flex">
                {/* 왼쪽: 프로필 정보 */}
                <div className="flex-1 p-6">
                  {/* 헤더 */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-800 text-lg">←</span>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-600 text-sm">좋아요 0</span>
                      <span className="text-amber-600">♡</span>
                      <span className="text-amber-600">🔗</span>
                      <span className="text-amber-600">📄</span>
                    </div>
                  </div>

                  {/* 이름 */}
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">이하나</h2>
                    <span className="px-2 py-0.5 bg-purple-600 text-white text-xs rounded">배우&모델</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">Lee Hana</p>

                  {/* 배지 */}
                  <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs rounded-full mb-4">
                    여자
                  </span>

                  {/* 정보 */}
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>🏢 핑크프로젝트</p>
                    <p>🎓 한국대학교 연기과</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>

                  {/* 신체 정보 바 */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 w-24">24세 (2001)</span>
                      <div className="flex-1 h-2 bg-amber-200 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-amber-400 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 w-24">167 cm</span>
                      <div className="flex-1 h-2 bg-amber-200 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-amber-400 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 w-24">48 kg</span>
                      <div className="flex-1 h-2 bg-amber-200 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-amber-400 rounded-full" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 w-24">235 mm</span>
                      <div className="flex-1 h-2 bg-amber-200 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-amber-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* 자기소개 */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로 사람들의 마음을 움직이고 싶은
                    신인 배우입니다.
                  </p>

                  {/* 태그들 */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한", "우아한", "밝은한"].map(
                      (tag) => (
                        <span key={tag} className="px-2 py-1 bg-purple-600/20 text-purple-700 text-xs rounded">
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["한국어", "영어"].map((lang) => (
                      <span key={lang} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["경상도사투리", "전라도사투리"].map((d) => (
                      <span key={d} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                        {d}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["노래", "피아노", "바이올린"].map((s) => (
                      <span key={s} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["수영", "요가", "골프"].map((sp) => (
                      <span key={sp} className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">
                        {sp}
                      </span>
                    ))}
                  </div>

                  {/* 운전면허 */}
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">2종</span>

                  {/* SNS 아이콘 */}
                  <div className="flex gap-2 mt-4">
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
                      ▶
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs">
                      📷
                    </div>
                  </div>
                </div>

                {/* 오른쪽: 프로필 이미지 */}
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

        {/* 슬라이드 인디케이터 */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === i ? "bg-purple-600 w-8" : "bg-zinc-600"
              }`}
            />
          ))}
        </div>

        {/* PDF 자동 완성 안내 */}
        <p className="text-zinc-500 text-sm mt-12 mb-8">- 프로필 PDF파일 자동 완성 기능 -</p>

        {/* CTA 버튼 */}
        <Link
          href="/signup?type=actor"
          className="px-16 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all text-lg"
        >
          프로필 등록하기
        </Link>
      </div>
    </section>
  );
}

// 배우 이미지 슬라이더
const actorImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=400&fit=crop&crop=face",
];

// 토이드 소개 섹션
function IntroSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* 자동 슬라이드 이미지 */}
      <div className="relative w-full overflow-hidden bg-zinc-900 py-4">
        <div className="flex animate-scroll-left">
          {/* 이미지를 2번 반복하여 무한 스크롤 효과 */}
          {[...actorImages, ...actorImages].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-48 md:w-56 lg:w-64 aspect-[3/4] mx-1 relative">
              <Image src={src} alt={`배우 ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        {/* 배지 */}
        <div className="inline-block px-6 py-2 bg-purple-600 rounded-full mb-8">
          <span className="text-white font-medium text-sm">배우&모델</span>
        </div>

        {/* 메인 타이틀 */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
          &quot;작품 준비하기에도 벅차요!&quot;
        </h2>

        {/* 구분선 */}
        <div className="w-px h-24 bg-gray-300 mx-auto mb-12" />

        {/* 보라색 서브 타이틀 */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600 mb-6">
          &quot;작품과 연습에만 집중하고 싶으신가요?&quot;
        </h3>

        {/* 설명 */}
        <p className="text-gray-600 text-lg mb-12">등록 한 번으로 편하게 기다리세요!</p>

        {/* 기능 리스트 */}
        <div className="max-w-2xl mx-auto bg-zinc-900 rounded-2xl p-6 text-left">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </span>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  구분 <span className="text-purple-400">없이</span>
                </h4>
                <p className="text-zinc-400 text-sm">배우, 모델, 가수 등 누구나 등록 가능</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </span>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  직접 찾아다니지 <span className="text-purple-400">않아도</span>
                </h4>
                <p className="text-zinc-400 text-sm">제작사에서 먼저 연락이 옵니다</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </span>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  프로필 PDF <span className="text-purple-400">자동 생성</span>
                </h4>
                <p className="text-zinc-400 text-sm">깔끔한 프로필 파일을 바로 다운로드</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 기능 섹션 1: 등록 폼 미리보기
function FeatureRegistrationSection() {
  const formFields = [
    { num: 1, label: "구분", required: true },
    { num: 2, label: "이름(또는 활동명)", required: true },
    { num: 16, label: "스타일 키워드 (복수 선택 - 최대 10개)", required: true },
    { num: 17, label: "구사언어 (복수 선택 가능)", required: false },
    { num: 18, label: "사투리 (복수 선택 가능)", required: false },
  ];

  const styleKeywords = [
    { label: "귀여운", selected: false },
    { label: "강아지상", selected: true },
    { label: "평온한", selected: false },
    { label: "부드러운", selected: false },
    { label: "사랑스러운", selected: true },
  ];

  const languages = [
    { label: "한국어", selected: true },
    { label: "영어", selected: false },
    { label: "일본어", selected: false },
    { label: "스페인어", selected: false },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* 제목 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          등록 한 번으로 편하게 기다리세요!
        </h2>

        {/* 폼 필드 스택 */}
        <div className="space-y-3 mb-8">
          {formFields.map((field, index) => (
            <div
              key={field.num}
              className="bg-zinc-800 rounded-xl px-6 py-5 transition-opacity"
              style={{ opacity: 1 - index * 0.15 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-purple-400 font-bold">{field.num}.</span>
                <span className="text-white font-medium">{field.label}</span>
                {field.required && <span className="text-red-400 text-sm">*필수</span>}
              </div>
            </div>
          ))}
        </div>

        {/* 페이지 인디케이터 (세로) */}
        <div className="flex flex-col items-center gap-2 mb-16">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-gray-800" : "bg-gray-300"}`} />
          ))}
        </div>

        {/* 등록 후 혜택 */}
        <h3 className="text-2xl md:text-3xl text-gray-600 text-center mb-8">
          나만의 프로필을 <span className="font-bold text-gray-900">등록</span>했다면?
        </h3>

        {/* 키워드 태그들 */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {styleKeywords.map((keyword) => (
            <span
              key={keyword.label}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                keyword.selected ? "bg-purple-600 text-white" : "bg-white text-gray-600 border border-gray-300"
              }`}
            >
              {keyword.label}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {languages.map((lang) => (
            <span
              key={lang.label}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                lang.selected ? "bg-purple-600 text-white" : "bg-white text-gray-600 border border-gray-300"
              }`}
            >
              {lang.label}
            </span>
          ))}
        </div>

        {/* 사투리 */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {[
            { label: "충청도사투리", selected: false },
            { label: "전라도사투리", selected: false },
            { label: "경상도사투리", selected: true },
            { label: "강원도사투리", selected: false },
          ].map((dialect) => (
            <span
              key={dialect.label}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                dialect.selected ? "bg-purple-600 text-white" : "bg-white text-gray-600 border border-gray-300"
              }`}
            >
              {dialect.label}
            </span>
          ))}
        </div>

        {/* 특기 - 음악 */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {[
            { label: "노래", selected: false },
            { label: "피아노", selected: false },
            { label: "바이올린", selected: true },
          ].map((skill) => (
            <span
              key={skill.label}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                skill.selected ? "bg-purple-600 text-white" : "bg-white text-gray-600 border border-gray-300"
              }`}
            >
              {skill.label}
            </span>
          ))}
        </div>

        {/* 특기 - 운동 */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { label: "수영", selected: true },
            { label: "요가", selected: false },
            { label: "골프", selected: false },
            { label: "헬스", selected: false },
          ].map((sport) => (
            <span
              key={sport.label}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                sport.selected ? "bg-purple-600 text-white" : "bg-white text-gray-600 border border-gray-300"
              }`}
            >
              {sport.label}
            </span>
          ))}
        </div>

        {/* 웹 프로필 완성 타이틀 */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          나를 대표하는 <span className="text-purple-600">키워드</span>로 웹 프로필 완성!
        </h3>

        {/* 앱 스크린샷 */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* 왼쪽: 프로필 페이지 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4">
              {/* 헤더 */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 text-white">←</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 text-xs">원본</span>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 bg-zinc-700 rounded" />
                    <div className="w-5 h-5 bg-zinc-700 rounded" />
                    <div className="w-5 h-5 bg-zinc-700 rounded" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {/* 프로필 정보 */}
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-bold text-lg">이하나</h4>
                      <span className="px-2 py-0.5 bg-purple-600 text-white text-xs rounded">여자</span>
                    </div>
                    <p className="text-zinc-500 text-xs">Lee Hana</p>
                  </div>
                  <div className="space-y-1 text-xs">
                    <p className="text-zinc-400">🏢 핑크프로젝트</p>
                    <p className="text-zinc-400">🎓 한국대학교 연기과</p>
                  </div>
                  <div className="text-xs text-zinc-500">
                    <p>단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-zinc-800 rounded p-2">
                      <p className="text-zinc-500 text-xs">생년월일</p>
                      <p className="text-white text-xs">2001</p>
                    </div>
                    <div className="bg-zinc-800 rounded p-2">
                      <p className="text-zinc-500 text-xs">키</p>
                      <p className="text-white text-xs">167 cm</p>
                    </div>
                    <div className="bg-zinc-800 rounded p-2">
                      <p className="text-zinc-500 text-xs">몸무게</p>
                      <p className="text-white text-xs">48 kg</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로...
                  </p>
                  {/* 태그들 */}
                  <div className="flex flex-wrap gap-1">
                    {["고양이상", "도도한", "청순한", "사랑스러운", "순수", "청아함", "배려심"].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-purple-600/20 text-purple-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 프로필 이미지 */}
                <div className="w-32 aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop"
                    alt="프로필"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 사진 갤러리 */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4">
              <p className="text-zinc-400 text-sm mb-4">프로필 사진</p>
              {/* 메인 이미지 */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[3/4] relative rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-153452874177${i}-53994a69daeb?w=200&h=300&fit=crop`}
                      alt={`사진 ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-zinc-400 text-sm mb-2">출연 이미지</p>
              {/* 출연 이미지 */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square relative rounded-lg overflow-hidden bg-zinc-800">
                    <Image
                      src={`https://images.unsplash.com/photo-149479010837${i}-be9c29b29330?w=150&h=150&fit=crop`}
                      alt={`출연 ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 기능 섹션 2: 링크 공유
function FeatureLinkShareSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* 공유 아이콘 */}
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </div>

        {/* 복사 알림 카드 */}
        <div className="inline-block bg-gray-100 rounded-xl px-8 py-4 mb-8 relative">
          {/* 말풍선 꼬리 */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-100 rotate-45" />
          <p className="text-gray-600">프로필 주소를 복사했습니다.</p>
        </div>

        {/* 설명 텍스트 */}
        <p className="text-xl md:text-2xl text-gray-600 mb-32">
          링크 공유를 통해 쉽게 <span className="font-bold text-gray-900">프로필을 전송</span>해 보세요!
        </p>

        {/* 구분 */}
        <div className="border-t border-gray-200 my-16" />

        {/* 생각하는 이모지 */}
        <div className="text-6xl mb-8">🤔</div>

        {/* FAQ 제목 */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-24">
          &quot;왜 프로필을 새로 만들어주나요?&quot;
        </h2>

        {/* 기존 프로필 문제점 */}
        <p className="text-gray-500 text-lg mb-2">낮은 가독성과</p>
        <p className="text-gray-500 text-lg mb-8">제각각이던 사진</p>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          중요한 정보를 놓치기 쉬운
          <br />
          기존 프로필들
        </h3>

        {/* 기존 프로필 이미지 예시 */}
        <div className="flex justify-center gap-4 mb-24">
          {/* 왼쪽: 여성 프로필 */}
          <div className="w-72 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="flex">
              <div className="w-1/2 aspect-[3/4] relative bg-gray-300">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop"
                  alt="기존 프로필"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="w-1/2 p-3 text-left">
                <p className="text-xs text-gray-500 mb-2">배우 프로필</p>
                <p className="text-[8px] text-gray-400 leading-relaxed">
                  배우
                  <br />
                  2023 드라마 제목 - 역할
                  <br />
                  2022 영화 제목 - 역할
                  <br />
                  2021 드라마 제목 - 역할
                  <br />
                  <br />
                  수상이력
                  <br />
                  2023 신인상 수상
                  <br />
                  2022 여우조연상
                  <br />
                  <br />
                  학력
                  <br />
                  ○○대학교 연극영화과
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 남성 프로필 */}
          <div className="w-72 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[4/3] relative bg-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                alt="기존 프로필"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute top-2 right-2 text-white text-xs">
                <p>Name</p>
                <p className="text-[8px] text-gray-400">Profile</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 p-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] relative bg-gray-700">
                  <Image
                    src={`https://images.unsplash.com/photo-150700321116${i}-0a1dd7228f2d?w=100&h=150&fit=crop`}
                    alt={`사진 ${i}`}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-px h-24 bg-purple-400 mx-auto mb-24" />

        {/* 토이드 프로필 비교 */}
        <div className="flex justify-center gap-6 mb-16">
          {/* 왼쪽: PDF 프로필 */}
          <div className="w-80 bg-zinc-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-zinc-800 px-4 py-3 text-center">
              <p className="text-white text-sm font-medium">이하나 프로필 PDF</p>
              <button className="mt-2 px-4 py-1 bg-zinc-700 text-zinc-300 text-xs rounded">PDF 다운로드</button>
            </div>
            <div className="flex">
              <div className="w-2/5 aspect-[3/4] relative">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop"
                  alt="프로필"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-3 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-sm font-bold text-gray-900">이하나</h4>
                  <span className="px-1.5 py-0.5 bg-purple-600 text-white text-[8px] rounded">여자</span>
                </div>
                <p className="text-[8px] text-gray-500 mb-3">Lee Hana</p>
                <p className="text-[7px] text-gray-600 leading-relaxed mb-3">
                  안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로 사람들의 마음을 움직이고 싶은
                  신인 배우입니다.
                </p>
                <div className="grid grid-cols-3 gap-1 mb-2">
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">생년월일</p>
                    <p className="text-[7px] text-gray-700">2001-05-14</p>
                  </div>
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">소속사</p>
                    <p className="text-[7px] text-gray-700">핑크프로젝트</p>
                  </div>
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">학력</p>
                    <p className="text-[7px] text-gray-700">한국대학교</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 mb-2">
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">키</p>
                    <p className="text-[7px] text-gray-700">167</p>
                  </div>
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">몸무게</p>
                    <p className="text-[7px] text-gray-700">48</p>
                  </div>
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">발사이즈</p>
                    <p className="text-[7px] text-gray-700">235</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {["고양이상", "도도한", "청순한", "귀여운"].map((tag) => (
                    <span key={tag} className="px-1 py-0.5 bg-gray-100 text-gray-600 text-[6px] rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 웹 프로필 */}
          <div className="w-96 bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="flex">
              <div className="w-2/5 aspect-[3/4] relative">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop"
                  alt="프로필"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-gray-900">이하나</h4>
                      <span className="px-2 py-0.5 bg-purple-600 text-white text-[8px] rounded">여자</span>
                    </div>
                    <p className="text-xs text-gray-500">Lee Hana</p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded grid grid-cols-3 gap-0.5 p-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? "bg-gray-800" : "bg-white"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-[8px] text-gray-600 leading-relaxed mb-3">
                  안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로...
                </p>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">생년월일</p>
                    <p className="text-[9px] text-gray-700">2001-05-14</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">소속사</p>
                    <p className="text-[9px] text-gray-700">핑크프로젝트</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">학력</p>
                    <p className="text-[9px] text-gray-700">한국대학교</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">키</p>
                    <p className="text-[9px] text-gray-700">167</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">몸무게</p>
                    <p className="text-[9px] text-gray-700">48</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">발사이즈</p>
                    <p className="text-[9px] text-gray-700">235</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-[7px] text-gray-400 shrink-0">키워드</span>
                  <div className="flex flex-wrap gap-1">
                    {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한"].map((tag) => (
                      <span key={tag} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-[7px] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[7px] text-gray-400 shrink-0">대표작품</span>
                  <p className="text-[8px] text-gray-600">단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>
                </div>
                <div className="flex justify-end mt-2">
                  <div className="flex items-center gap-0.5 text-gray-300 text-[8px]">
                    <span className="font-bold">T</span>
                    <div className="w-2 h-2 rounded-full border border-current flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-current" />
                    </div>
                    <span className="font-bold">ID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 가독성 UP */}
        <p className="text-gray-600 text-lg mb-2">필요한 정보만 깔끔하게 담아</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-24">
          가독성 <span className="text-purple-600">UP!</span>
        </h3>

        {/* 키워드 박스 */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-16 max-w-lg mx-auto border-b-4 border-purple-400">
          <div className="flex items-start gap-4">
            <span className="text-gray-500 text-sm shrink-0">키워드</span>
            <div className="flex flex-wrap gap-2">
              {[
                "고양이상",
                "도도한",
                "청순한",
                "귀여운",
                "사랑스러운",
                "순수한",
                "우아한",
                "밝은한",
                "부드러운",
                "상큼한",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 특색있는 키워드 */}
        <p className="text-gray-600 text-lg mb-2">내가 직접 택한</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-16">
          특색있는 <span className="text-purple-600">키워드</span>
        </h3>

        {/* 출연 사진 그리드 */}
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-lg mx-auto mb-8">
          <div className="flex justify-end mb-2">
            <span className="text-gray-500 text-xs">출연 사진 🎬</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-149479010837${i}-be9c29b29330?w=300&h=200&fit=crop`}
                  alt={`출연 사진 ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 스틸컷 */}
        <p className="text-gray-600 text-lg mb-2">프로필 사진과 함께</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-24">
          내가 출연한 <span className="text-purple-600">스틸컷</span>까지!
        </h3>

        {/* PDF 아이콘 */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <span className="text-2xl">📄</span>
          </div>
        </div>

        {/* PDF 출력 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-24">
          PDF 버튼을 눌러서 <span className="text-purple-600">출력</span>해보세요!
        </h3>

        {/* TOID와 함께 */}
        <p className="text-gray-600 text-lg mb-2">보다 효과적인 프로필 제작</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-16">
          <span className="inline-flex items-center gap-1">
            <span className="font-bold">T</span>
            <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-current" />
            </span>
            <span className="font-bold">ID</span>
          </span>
          와 바로 함께해 보세요!
        </h3>

        {/* 3개 카드 */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-purple-500">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-3">개인정보 보호</h4>
            <p className="text-purple-500 text-sm leading-relaxed">
              개인정보 노출 없이
              <br />
              캐스팅 가능
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-purple-500">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-3">시간 절약</h4>
            <p className="text-purple-500 text-sm leading-relaxed">
              프로필 등록 시,
              <br />
              바로 PDF 변환 가능
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-purple-500">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-3">언제나 누구든지</h4>
            <p className="text-purple-500 text-sm leading-relaxed">
              다른 제한 없이
              <br />
              프로필 등록 가능
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 캐스팅 담당자 섹션
function CastingDirectorSection() {
  return (
    <section className="bg-gradient-to-b from-white via-purple-500 to-purple-600 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 배지 */}
        <div className="inline-block px-6 py-2 bg-red-500 rounded-full mb-8">
          <span className="text-white font-medium text-sm">캐스팅 담당자</span>
        </div>

        {/* 메인 타이틀 */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
          &quot;작품에 알맞는 배우 찾기가 너무 어려워요!&quot;
        </h2>

        {/* 구분선 */}
        <div className="w-px h-24 bg-white/50 mx-auto mb-12" />

        {/* 서브 타이틀 */}
        <p className="text-xl text-white/90 mb-2">빠르면서 쉽게</p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-16">작품에 맞는 배우를 찾고 싶으신가요?</h3>

        {/* 필터 UI */}
        <p className="text-xl text-white mb-8">
          원하는 조건만 <span className="font-bold">입력</span>해 주세요!
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-2 gap-6">
            {/* 왼쪽 필터 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-sm w-14">구분</span>
                <div className="flex gap-2">
                  {["무관", "배우", "모델"].map((opt) => (
                    <span key={opt} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-xs rounded">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-sm w-14">성별</span>
                <div className="flex gap-2">
                  {["무관", "남자", "여자"].map((opt) => (
                    <span key={opt} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-xs rounded">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-sm w-14">나이</span>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-1.5 bg-zinc-800 text-zinc-500 text-xs rounded">최소</span>
                  <span className="text-zinc-500">~</span>
                  <span className="px-4 py-1.5 bg-zinc-800 text-zinc-500 text-xs rounded">최대</span>
                  <span className="text-zinc-400 text-xs">세</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-sm w-14">키</span>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-1.5 bg-zinc-800 text-zinc-500 text-xs rounded">최소</span>
                  <span className="text-zinc-500">~</span>
                  <span className="px-4 py-1.5 bg-zinc-800 text-zinc-500 text-xs rounded">최대</span>
                  <span className="text-zinc-400 text-xs">Cm</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-sm w-14">몸무게</span>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-1.5 bg-zinc-800 text-zinc-500 text-xs rounded">최소</span>
                  <span className="text-zinc-500">~</span>
                  <span className="px-4 py-1.5 bg-zinc-800 text-zinc-500 text-xs rounded">최대</span>
                  <span className="text-zinc-400 text-xs">Kg</span>
                </div>
              </div>
            </div>

            {/* 오른쪽 필터 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-sm w-14">운전면허</span>
                <div className="flex gap-2">
                  {["무관", "1종", "2종"].map((opt) => (
                    <span key={opt} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-xs rounded">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-sm w-14">품앗이</span>
                <div className="flex gap-2">
                  {["무관", "가능", "불가능"].map((opt) => (
                    <span key={opt} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-xs rounded">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-sm w-14">영화예산</span>
                <div className="flex gap-2 items-center">
                  <span className="text-zinc-400 text-xs">최대</span>
                  <span className="px-6 py-1.5 bg-zinc-800 text-zinc-300 text-xs rounded">100,000</span>
                  <span className="text-zinc-400 text-xs">원</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 text-sm w-14">광고예산</span>
                <div className="flex gap-2 items-center">
                  <span className="text-zinc-400 text-xs">최대</span>
                  <span className="px-6 py-1.5 bg-zinc-800 text-zinc-300 text-xs rounded">100,000</span>
                  <span className="text-zinc-400 text-xs">원</span>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="이름 또는 키워드로 추가하기 (Enter)"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-400 text-sm placeholder-zinc-500"
                  disabled
                />
              </div>
            </div>
          </div>
          <p className="text-zinc-500 text-xs text-center mt-4">필터 초기화</p>
        </div>

        {/* 세로 점 인디케이터 */}
        <div className="flex flex-col items-center gap-2 my-12">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/50" />
          ))}
        </div>

        {/* 섭외 요청 */}
        <h3 className="text-3xl font-bold text-white mb-4">원하는 배우를 찾았다면?</h3>
        <p className="text-xl text-yellow-300 mb-8">배우 프로필 하단 섭외 요청서 작성후</p>

        {/* 섭외 요청 폼 */}
        <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-2xl p-8 max-w-2xl mx-auto mb-8 backdrop-blur">
          <h4 className="text-white text-lg font-medium mb-2">지금 보고 계신</h4>
          <h4 className="text-white text-lg font-medium mb-6">이하나님을 섭외하고 싶으신가요?</h4>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="소속을 입력해 주세요."
              className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-300 text-sm placeholder-zinc-500"
              disabled
            />
            <input
              type="text"
              placeholder="담당자님 성함을 입력해 주세요."
              className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-300 text-sm placeholder-zinc-500"
              disabled
            />
            <textarea
              placeholder="전달하고 싶은 메시지를 입력해 주세요.&#10;작품제목과 줄인날짜 등 구체적으로 작성 부탁드립니다."
              className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-300 text-sm placeholder-zinc-500 h-32 resize-none"
              disabled
            />
            <input
              type="text"
              placeholder="답장을 받으실 연락처(전화번호 또는 이메일)를 입력해 주세요."
              className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-zinc-300 text-sm placeholder-zinc-500"
              disabled
            />
          </div>

          <button className="mt-6 px-8 py-3 bg-zinc-600 text-white rounded-lg">섭외 요청하기</button>

          <p className="text-zinc-500 text-xs mt-4">
            섭외 요청 시, 섭외요청 확인 메일(또는 문자) 발송 후 48시간 이내에 캐스팅 가능 여부를 확인하실 수 있습니다.
          </p>
          <p className="text-zinc-500 text-xs">작품 제작을 위한 연락이 아닐 시 서비스 이용에 제한될 수 있습니다.</p>
        </div>

        {/* 섭외 요청하기 버튼 강조 */}
        <div className="relative inline-block mb-4">
          <div className="px-12 py-4 border-2 border-dashed border-white rounded-2xl">
            <span className="text-white text-2xl font-bold">섭외 요청하기</span>
          </div>
          <div className="absolute -bottom-2 -right-4 text-white text-4xl">👆</div>
        </div>
        <p className="text-white text-lg">섭외 요청하기 클릭!</p>
      </div>
    </section>
  );
}

// 감독&PD 섹션
function DirectorSection() {
  return (
    <section>
      {/* 보라색 영역 */}
      <div className="bg-purple-600 py-8">
        <div className="w-16 h-16 bg-zinc-900 mx-auto" />
      </div>

      {/* 흰색 영역 */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* 배지 */}
          <div className="inline-block px-6 py-2 bg-white border-2 border-zinc-900 rounded-full mb-8">
            <span className="text-zinc-900 font-medium text-sm">감독&PD</span>
          </div>

          {/* 메인 타이틀 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            &quot;작품 구인도 이렇게 쉽게 하면 좋겠어요!&quot;
          </h2>

          {/* 구분선 */}
          <div className="w-px h-24 bg-gray-300 mx-auto" />
        </div>
      </div>

      {/* 어두운 영역: 문제점 */}
      <div className="bg-zinc-900 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-12 items-start">
            {/* 왼쪽: 구인글 이미지 */}
            <div className="w-80 bg-white rounded-xl p-4 shadow-xl">
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">구인글</p>
                    <p className="text-[8px] text-gray-500">단편/졸작(졸업작품) 모집합니다...</p>
                  </div>
                </div>
                {[
                  { label: "1. 제작", value: "OOO" },
                  { label: "2. 작품명", value: "미정" },
                  { label: "3. 촬영일", value: "2000년 00월 00일 (변경될 수 있음)" },
                  { label: "4. 장소", value: "미정" },
                  { label: "5. 페이", value: "없음 (품앗이 촬영합니다)" },
                  { label: "6. 페이조건", value: "무조건 모집합니다" },
                  { label: "7. 모집성별", value: "N" },
                  { label: "8. 스텝명", value: "스텝 공고입니다" },
                  { label: "9. 모집연령", value: "40대 성인남녀 ~ 시니어(50세)" },
                  { label: "10. 모집내용", value: "여자 1명, 남자에게 다..." },
                  { label: "11. 지원방법", value: "작품지원하기 / 프로필전송" },
                  { label: "12. 마감일자", value: "2000년 00월 00일" },
                ].map((item, i) => (
                  <div key={i} className="flex text-[7px]">
                    <span className="text-gray-400 w-16">{item.label}</span>
                    <span className="text-gray-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 문제점 리스트 */}
            <div className="flex-1 text-left">
              <p className="text-yellow-400 text-xl font-bold mb-2">낮은 신뢰성과 전달력</p>
              <p className="text-yellow-400 text-xl font-bold mb-2">쉽게 노출되는 개인정보</p>
              <p className="text-yellow-400 text-xl font-bold mb-2">한 눈에 보기 힘든 지원자</p>
              <p className="text-yellow-400 text-xl font-bold mb-8">개별로 답신해야하는 번거로움</p>

              {/* 세로 점 인디케이터 */}
              <div className="flex flex-col gap-2 mb-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-zinc-600" />
                ))}
              </div>

              <p className="text-white text-xl mb-2">별거 아닌듯 하여도</p>
              <p className="text-yellow-400 text-xl font-bold mb-8">지속적으로 느끼는 불편함</p>

              <h3 className="text-white text-3xl font-bold">
                <span className="inline-flex items-center gap-1">
                  <span className="font-bold">T</span>
                  <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-current" />
                  </span>
                  <span className="font-bold">ID</span>
                </span>
                로 쉽게 해결!
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* 작품구인 TOID */}
      <div className="bg-zinc-900 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-16">
            작품구인도{" "}
            <span className="inline-flex items-center gap-1 text-white">
              <span className="font-bold">T</span>
              <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-current" />
              </span>
              <span className="font-bold">ID</span>
            </span>
            에서 한 번에!
          </h2>

          {/* 구인 작성 UI 스크린샷 */}
          <div className="flex gap-4 justify-center mb-8">
            <div className="w-96 bg-zinc-800 rounded-xl p-4">
              <div className="text-left">
                <p className="text-zinc-400 text-sm mb-4">← 구인글 작성하기</p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-zinc-500 text-xs">구분</span>
                    <span className="px-2 py-1 bg-zinc-700 text-zinc-300 text-xs rounded">구분선택</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-zinc-500 text-xs">개런티</span>
                    <span className="px-2 py-1 bg-zinc-700 text-zinc-300 text-xs rounded">0</span>
                    <span className="text-zinc-500 text-xs">원</span>
                    <span className="px-2 py-1 bg-zinc-700 text-zinc-300 text-xs rounded">품앗이</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 bg-zinc-800 rounded-xl p-4">
              <div className="text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500 text-xs">작품제목</span>
                  <span className="text-zinc-400 text-xs">작성중</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 text-xs">담당자명</span>
                  <span className="text-zinc-400 text-xs">담당자이름</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white text-xl mb-2">
            배우&모델에게 필요한 내용만 <span className="text-purple-400 font-bold">깔끔하게!</span>
          </p>
          <p className="text-white text-xl">
            핵심 정보로 <span className="text-purple-400 font-bold">전달력 UP!</span>
          </p>
        </div>
      </div>

      {/* 지원자 리스트 */}
      <div className="bg-zinc-900 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-zinc-800 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded">모집중</span>
                <span className="text-white text-sm">대학 졸작 &lt;봉선경&gt; 여성역 배우분 모십니다!</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-xs">
                <span>마감일: 2024-09-30 [D-6]</span>
                <span className="px-2 py-1 bg-zinc-700 rounded">구인글 수정</span>
              </div>
            </div>
            <div className="bg-zinc-700 rounded-lg p-4">
              <p className="text-zinc-400 text-sm mb-4">📝 지원자에게 전달할 메시지</p>
              <div className="text-left">
                <p className="text-white text-sm mb-4">🎬 지원자 확인 (1명 지원) ↻</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-zinc-600 text-zinc-300 text-xs rounded">카드형</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded">리스트형</span>
                  <span className="px-3 py-1 bg-green-600 text-white text-xs rounded">합격 - 0명</span>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded">미팅요청 - 0명</span>
                  <span className="px-3 py-1 bg-red-600 text-white text-xs rounded">불합격 - 0명</span>
                  <span className="px-3 py-1 bg-zinc-600 text-white text-xs rounded">대기 - 1명</span>
                </div>
                <div className="w-32 bg-zinc-600 rounded-lg overflow-hidden">
                  <div className="aspect-[3/4] relative bg-amber-200">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=300&fit=crop"
                      alt="지원자"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-white text-xs font-medium">이하나</p>
                    <p className="text-zinc-400 text-[8px]">24세 / 167 cm / 48 kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white text-xl">
            <span className="text-purple-400 font-bold">한 눈에 확인 가능한</span> 지원자 리스트
          </p>
        </div>
      </div>

      {/* 대시보드 */}
      <div className="bg-zinc-900 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-zinc-800 rounded-xl p-6 mb-8">
            <p className="text-white text-left mb-4">← 이하나님의 프로필 대시보드</p>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-zinc-700 rounded-lg p-4 text-center">
                <p className="text-zinc-400 text-xs mb-2">나의 좋아요 수</p>
                <p className="text-red-400 text-xl">♡</p>
                <p className="text-white font-bold">0</p>
              </div>
              <div className="bg-zinc-700 rounded-lg p-4 text-center">
                <p className="text-zinc-400 text-xs mb-2">누적 프로필 방문자</p>
                <p className="text-blue-400 text-xl">📊</p>
                <p className="text-white font-bold">16</p>
              </div>
              <div className="bg-zinc-700 rounded-lg p-4 text-center">
                <p className="text-zinc-400 text-xs mb-2">누적 지원 내역</p>
                <p className="text-green-400 text-xl">✓</p>
                <p className="text-white font-bold">2</p>
              </div>
              <div className="bg-zinc-700 rounded-lg p-4 text-center">
                <p className="text-zinc-400 text-xs mb-2">누적 섭외 요청</p>
                <p className="text-yellow-400 text-xl">💡</p>
                <p className="text-white font-bold">0</p>
              </div>
            </div>
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between bg-purple-600/20 rounded-lg px-4 py-2">
                <span className="text-purple-400 text-sm">🚀 상위노출</span>
                <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">활성화전</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-700 rounded-lg px-4 py-2">
                <span className="text-zinc-300 text-sm">🎬 섭외요청 리스트</span>
              </div>
              <div className="bg-zinc-700 rounded-lg px-4 py-2">
                <p className="text-zinc-300 text-sm mb-2">📋 지원내역</p>
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-zinc-500">
                      <th className="py-1">날짜</th>
                      <th>작품명</th>
                      <th>공고 페이지</th>
                      <th>상태</th>
                      <th>메시지</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    <tr>
                      <td className="py-1">2024. 9. 24.</td>
                      <td>봉선경</td>
                      <td className="text-blue-400">공고 보기</td>
                      <td>
                        <span className="px-2 py-0.5 bg-zinc-600 rounded">대기</span>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="py-1">2024. 9. 22.</td>
                      <td>12</td>
                      <td className="text-blue-400">공고 보기</td>
                      <td>
                        <span className="px-2 py-0.5 bg-blue-600 rounded">미팅 요청</span>
                      </td>
                      <td>💬</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-white text-xl">
            배우&모델 <span className="text-purple-400 font-bold">지원 결과</span>공유까지!
          </p>
        </div>
      </div>

      {/* 불편함 해소 */}
      <div className="bg-zinc-900 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">작품 구인에서 느낀 불편함을</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-white">이젠 해소할 타이밍!</h2>
        </div>
      </div>

      {/* THE 효율적인 플랫폼 */}
      <div className="bg-zinc-900 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-yellow-400 text-xl font-bold mb-2">THE 효율적인 플랫폼</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            <span className="inline-flex items-center gap-1">
              <span className="font-bold">T</span>
              <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-current" />
              </span>
              <span className="font-bold">ID</span>
            </span>
            와 지금 바로 함께해 보세요!
          </h2>

          {/* 3개 카드 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-500">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-3">개인정보 보호</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                개인정보 노출 없이
                <br />
                작품 구인 가능
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-500">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-3">시간 절약</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                한 곳에서 지원자 확인과
                <br />
                지원 결과 공유까지
                <br />
                모두 가능
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-purple-500">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-3">쉽고 빠른 배우 찾기</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                필요한 조건만
                <br />
                간결하게 입력 후,
                <br />
                배우 찾기 가능
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA 섹션
function CTASection() {
  return (
    <section className="bg-purple-600 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          지금 바로
          <span className="inline-flex items-center gap-1 mx-2">
            <span className="font-bold">T</span>
            <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-current" />
            </span>
            <span className="font-bold">ID</span>
          </span>
          를 이용해 보세요!
        </h2>
        <Link
          href="/actor-search"
          className="inline-block px-12 py-4 bg-yellow-300 text-purple-700 font-bold rounded-full hover:bg-yellow-400 transition-all text-lg"
        >
          배우&모델 찾기 이동
        </Link>
      </div>
    </section>
  );
}

// 푸터
function Footer() {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 인스타그램 아이콘 */}
        <div className="mb-8">
          <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="text-zinc-500 text-sm space-y-1">
          <p>토이드(TOID) | 충남 아산시 순천향로 22 미디어랩스관 702호</p>
          <p>대표 : 양승철 | 문의 : toidfilm@gmail.com</p>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-zinc-600 text-sm">
          © 2024. TOID. all rights reserved.
        </div>
      </div>
    </footer>
  );
}

// 메인 랜딩 페이지 컴포넌트
export function ActorProfileLanding() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <FeatureRegistrationSection />
      <FeatureLinkShareSection />
      <CastingDirectorSection />
      <DirectorSection />
      <CTASection />
      <Footer />

      {/* 커스텀 애니메이션 스타일 */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
