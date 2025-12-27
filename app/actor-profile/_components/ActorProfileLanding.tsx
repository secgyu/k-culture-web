"use client";

import Link from "next/link";
import Image from "next/image";

// 히어로 섹션
function HeroSection() {
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
      <div className="relative z-10 flex flex-col items-center px-6 py-12">
        {/* 배지 */}
        <div className="inline-block px-6 py-2 bg-white rounded-full mb-6">
          <span className="text-zinc-900 font-medium text-sm">배우&모델</span>
        </div>

        {/* 제목 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          프로필 관리·탐색 플랫폼
        </h1>

        {/* 프로필 카드 섹션 */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* 왼쪽: 배우 이미지 */}
            <div className="relative w-full md:w-2/5 aspect-[3/4] md:aspect-auto">
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
                {/* QR 코드 플레이스홀더 */}
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
                <br />매 순간을 소중히 여기며, 다양한 경험을 통해 성장하고 싶은 마음으로 가득 차 있어요.
              </p>

              {/* 대표정보 라벨 */}
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
                  {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한", "우아한", "밝은한"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white border border-gray-200 text-xs text-gray-700 rounded">
                      {tag}
                    </span>
                  ))}
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

        {/* 페이지 인디케이터 */}
        <div className="flex justify-center gap-2 mb-16">
          {[0, 1, 2, 3].map((i) => (
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          &quot;왜 프로필을 새로 만들어주나요?&quot;
        </h2>
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
              등록된 프로필 정보를 깔끔한 PDF 문서로 자동 변환해드립니다. 오디션이나 미팅에서 바로 활용할 수 있어요.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">지금 바로 시작하세요</h2>
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
      <FeatureRegistrationSection />
      <FeatureLinkShareSection />
      <FeatureProfileSection />
      <FeaturePDFSection />
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
