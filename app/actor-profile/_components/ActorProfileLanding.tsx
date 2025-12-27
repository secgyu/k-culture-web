"use client";

import Link from "next/link";
import Image from "next/image";

// 히어로 섹션
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* 헤더 */}
      <header className="relative z-20 w-full px-6 py-4 flex items-center justify-between bg-zinc-900/80 backdrop-blur-sm">
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
          <Link href="/recommend" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
            AI 매칭추천
          </Link>
          <Link href="/recommend" className="text-zinc-300 hover:text-white transition-colors text-sm">
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

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* 히어로 컨텐츠 */}
      <div className="relative z-10 grid md:grid-cols-2 min-h-[calc(100vh-72px)]">
        {/* 왼쪽: 배우 이미지 */}
        <div className="relative hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop"
            alt="배우 프로필"
            fill
            className="object-cover object-center"
          />
          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        {/* 오른쪽: 앱 UI 프리뷰 */}
        <div className="flex flex-col justify-center items-center px-8 py-12">
          {/* 모바일 앱 프레임 */}
          <div className="relative w-full max-w-xs">
            {/* 폰 프레임 */}
            <div className="bg-zinc-900 rounded-[3rem] p-3 shadow-2xl border border-zinc-800">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* 앱 헤더 */}
                <div className="bg-white px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">T</span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">토이드</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-gray-100 rounded-full" />
                      <div className="w-6 h-6 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* 프로필 카드 */}
                <div className="p-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
                      alt="프로필"
                      fill
                      className="object-cover"
                    />
                    {/* 프로필 정보 오버레이 */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="text-white font-bold text-lg">김서연</h3>
                          <p className="text-white/70 text-sm">28세 · 여 · 168cm</p>
                        </div>
                        <div className="bg-purple-600 px-3 py-1 rounded-full">
                          <span className="text-white text-xs font-medium">98% 매칭</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">드라마</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">영화</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">뮤지컬</span>
                  </div>

                  {/* 필모그래피 미리보기 */}
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-2">최근 필모그래피</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-gray-900">사랑의 불시착</p>
                          <p className="text-xs text-gray-500">주연 · 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 플로팅 요소들 */}
            <div className="absolute -left-16 top-20 bg-white rounded-xl p-3 shadow-xl animate-bounce-slow hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">✨</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">AI 추천</p>
                  <p className="text-sm font-semibold text-gray-900">실시간 매칭</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 bottom-32 bg-white rounded-xl p-3 shadow-xl hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">📄</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">PDF 변환</p>
                  <p className="text-sm font-semibold text-gray-900">원클릭</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <Link
              href="/signup?type=actor"
              className="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all text-center text-sm"
            >
              시작하기
            </Link>
            <Link
              href="/recommend"
              className="flex-1 px-6 py-3 border border-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-all text-center text-sm"
            >
              둘러보기
            </Link>
          </div>
        </div>
      </div>

      {/* 모바일용 배경 이미지 */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop"
          alt="배우 프로필"
          fill
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// 토이드 소개 섹션
function IntroSection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">About Toid</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            작품 그 이상의 <span className="text-purple-400">가능성을</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            토이드는 배우와 제작사를 연결하는 혁신적인 플랫폼입니다.
            <br />
            당신의 재능을 세상에 알리고, 새로운 기회를 만나보세요.
          </p>
        </div>

        {/* 스크린샷 */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-purple-600/20 to-transparent rounded-3xl p-1">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-zinc-800 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-zinc-400">서비스 소개 영상</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 기능 섹션 1: 배우 검색
function FeatureSearchSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-purple-600 text-sm font-medium tracking-wider uppercase">Actor Search</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              원하는 배우를
              <br />
              <span className="text-purple-600">쉽고 빠르게</span> 검색하세요
            </h2>
            <p className="text-gray-600 leading-relaxed">
              성별, 나이, 역할 유형 등 다양한 필터를 통해 원하는 조건의 배우를 빠르게 찾을 수 있습니다. 직관적인 UI로
              누구나 쉽게 사용할 수 있어요.
            </p>
            <ul className="space-y-4">
              {["다양한 필터 옵션 제공", "실시간 검색 결과", "상세 프로필 확인"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 스크린샷 */}
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
                <div className="flex gap-3">
                  {["성별", "나이대", "역할유형"].map((filter) => (
                    <div key={filter} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                      {filter}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-[3/4] bg-gray-200 rounded-xl" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 기능 섹션 2: AI 추천
function FeatureAISection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 스크린샷 */}
          <div className="relative order-2 md:order-1">
            <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 rounded-3xl p-8">
              <div className="bg-zinc-900 rounded-2xl shadow-xl p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white">🤖</span>
                  </div>
                  <span className="text-white font-medium">AI 추천 시스템</span>
                </div>
                <div className="space-y-3">
                  {[98, 95, 92].map((score, i) => (
                    <div key={i} className="flex items-center gap-4 bg-zinc-800 rounded-xl p-4">
                      <div className="w-12 h-12 bg-zinc-700 rounded-full" />
                      <div className="flex-1">
                        <div className="h-3 bg-zinc-700 rounded w-24 mb-2" />
                        <div className="h-2 bg-zinc-700 rounded w-16" />
                      </div>
                      <div className="text-purple-400 font-bold">{score}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">AI Recommendation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              AI가 추천하는
              <br />
              <span className="text-purple-400">최적의 배우</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              시놉시스와 캐릭터 정보를 입력하면 AI가 가장 적합한 배우를 추천해드립니다. 매칭 점수와 추천 이유를
              함께 확인할 수 있어요.
            </p>
            <ul className="space-y-4">
              {["시놉시스 기반 매칭", "캐릭터 분석", "매칭 점수 제공"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 기능 섹션 3: 프로필 관리
function FeatureProfileSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-purple-600 text-sm font-medium tracking-wider uppercase">Profile Management</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              프로필을
              <br />
              <span className="text-purple-600">손쉽게</span> 관리하세요
            </h2>
            <p className="text-gray-600 leading-relaxed">
              사진, 영상, 필모그래피 등 모든 정보를 한 곳에서 관리할 수 있습니다. 언제든지 수정하고 업데이트하세요.
            </p>
            <ul className="space-y-4">
              {["프로필 사진 & 영상 업로드", "필모그래피 관리", "쇼릴 등록"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 스크린샷 */}
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="flex gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-16 h-16 bg-gray-100 rounded-xl" />
                    ))}
                  </div>
                  <div className="h-4 bg-gray-100 rounded w-32" />
                  <div className="h-3 bg-gray-100 rounded w-48" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 기능 섹션 4: PDF 변환
function FeaturePDFSection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 스크린샷 */}
          <div className="relative order-2 md:order-1">
            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-medium text-gray-900">프로필 PDF</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">자동 생성</span>
                </div>
                <div className="aspect-[3/4] bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto">
                      <span className="text-red-600 text-2xl">📄</span>
                    </div>
                    <p className="text-gray-500 text-sm">profile.pdf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">PDF Export</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              프로필을
              <br />
              <span className="text-purple-400">PDF로 자동 변환</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              등록된 프로필 정보를 깔끔한 PDF 문서로 자동 변환해드립니다. 오디션이나 미팅에서 바로 활용할 수
              있어요.
            </p>
            <ul className="space-y-4">
              {["원클릭 PDF 생성", "전문적인 레이아웃", "언제든 다운로드"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA 섹션
function CTASection() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-r from-purple-600/10 via-purple-600/5 to-purple-600/10 rounded-3xl p-12 border border-zinc-800">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            토이드에서 당신의 프로필을 등록하고,
            <br />
            새로운 기회를 만나보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup?type=actor"
              className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all"
            >
              무료로 시작하기
            </Link>
            <Link
              href="/recommend"
              className="px-8 py-4 border border-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-all"
            >
              배우 둘러보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// 푸터
function Footer() {
  return (
    <footer className="bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 로고 */}
          <div className="flex items-center gap-1 text-zinc-400">
            <span className="font-bold text-xl tracking-tight">T</span>
            <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-current" />
            </div>
            <span className="font-bold text-xl tracking-tight">ID</span>
          </div>

          {/* 회사 정보 */}
          <div className="text-zinc-600 text-xs sm:text-sm text-center md:text-right space-y-1">
            <p>주식회사 토이드 | 대표이사 양승철 | 사업자번호 533-86-03592</p>
            <p>주소 서울특별시 마포구 와우산로 105, 5층 제이 293호</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
          © 2025 TOID. All rights reserved.
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
      <FeatureSearchSection />
      <FeatureAISection />
      <FeatureProfileSection />
      <FeaturePDFSection />
      <CTASection />
      <Footer />

      {/* 커스텀 애니메이션 스타일 */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

