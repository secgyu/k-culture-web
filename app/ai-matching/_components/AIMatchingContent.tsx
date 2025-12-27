"use client";

import Link from "next/link";

export function AIMatchingContent() {
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
      </div>

      {/* 헤더 */}
      <header className="relative z-20 w-full px-6 py-4 flex items-center justify-between border-b border-zinc-800">
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
          <Link href="/ai-matching" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
            AI 매칭추천
          </Link>
          <Link href="/actor-search" className="text-zinc-300 hover:text-white transition-colors text-sm">
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

      {/* 메인 컨텐츠 (흐릿하게) */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12 opacity-30 blur-[2px]">
        {/* 타이틀 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              AI 매칭 기술을 통해
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            시놉시스와 캐릭터 정보로 배우를 찾아보세요.
          </h2>
        </div>

        {/* 폼 영역 */}
        <div className="w-full max-w-3xl mx-auto">
          {/* 입력 폼 (비활성화 상태) */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 mb-6 border border-zinc-800">
            {/* 작품 정보 입력 */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-zinc-500 text-sm mb-2">작품 이름</label>
                <input
                  type="text"
                  placeholder="작품 이름 입력"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-400 placeholder-zinc-600"
                  disabled
                />
              </div>
              <div>
                <label className="block text-zinc-500 text-sm mb-2">장르</label>
                <input
                  type="text"
                  placeholder="장르 선택"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-400 placeholder-zinc-600"
                  disabled
                />
              </div>
              <div>
                <label className="block text-zinc-500 text-sm mb-2">제작 형태</label>
                <input
                  type="text"
                  placeholder="제작 형태 선택"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-400 placeholder-zinc-600"
                  disabled
                />
              </div>
            </div>

            {/* 시놉시스 */}
            <div className="mb-6">
              <label className="block text-zinc-500 text-sm mb-2">시놉시스</label>
              <textarea
                placeholder="시놉시스를 입력해주세요..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-400 placeholder-zinc-600 h-32 resize-none"
                disabled
              />
            </div>

            {/* 캐릭터 정보 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-500 text-sm mb-2">캐릭터 이름</label>
                <input
                  type="text"
                  placeholder="캐릭터 이름"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-400 placeholder-zinc-600"
                  disabled
                />
              </div>
              <div>
                <label className="block text-zinc-500 text-sm mb-2">캐릭터 설명</label>
                <input
                  type="text"
                  placeholder="캐릭터에 대해 설명해주세요"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-400 placeholder-zinc-600"
                  disabled
                />
              </div>
            </div>
          </div>

          {/* 추가 입력 필드 (비활성화) */}
          <div className="space-y-4 mb-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3">
              <p className="text-zinc-600 text-sm">원하는 캐릭터를 설명해주세요. 시놉시스와 캐릭터...</p>
            </div>
          </div>

          {/* 버튼들 */}
          <div className="space-y-3">
            <button
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 cursor-not-allowed"
              disabled
            >
              AI 추천 받기
            </button>
            <button
              className="w-full py-4 rounded-xl font-semibold bg-zinc-800 text-zinc-300 border border-zinc-700"
              disabled
            >
              필터로 직접 찾기
            </button>
          </div>
        </div>
      </main>

      {/* 중앙 오버레이 메시지 */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="text-white text-2xl md:text-3xl font-bold">추후 업데이트될 예정입니다.</p>
        </div>
      </div>

      {/* 하단 그라데이션 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent" />
    </div>
  );
}

