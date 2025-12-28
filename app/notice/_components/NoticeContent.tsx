"use client";

import Link from "next/link";

// 공지사항 데이터
const noticeData = [
  {
    id: 1,
    type: "일반공지",
    title: "[DoDream ver.1.2.3] 업데이트 안내",
    date: "2024. 10. 14.",
  },
  {
    id: 2,
    type: "일반공지",
    title: "[DoDream ver.1.2.2] 업데이트 안내",
    date: "2024. 10. 10.",
  },
  {
    id: 3,
    type: "일반공지",
    title: "[DoDream ver.1.2.1] 업데이트 안내",
    date: "2024. 10. 2.",
  },
  {
    id: 4,
    type: "일반공지",
    title: "[DoDream ver.1.2.0] 업데이트 안내",
    date: "2024. 9. 30.",
  },
  {
    id: 5,
    type: "일반공지",
    title: "[DoDream ver.1.1.0] 업데이트 안내",
    date: "2024. 9. 28.",
  },
  {
    id: 6,
    type: "일반공지",
    title: "2024년 9월 27일 두드림 서비스 정식 런칭!",
    date: "2024. 9. 27.",
  },
];

// 공지 항목 컴포넌트
function NoticeItem({ notice }: { notice: (typeof noticeData)[0] }) {
  return (
    <div className="flex items-center gap-4 py-5 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors cursor-pointer px-4 -mx-4">
      {/* 태그 */}
      <span className="shrink-0 px-4 py-1.5 border border-orange-500 text-orange-500 text-sm rounded-full">
        {notice.type}
      </span>

      {/* 제목 */}
      <h3 className="flex-1 text-white font-medium">{notice.title}</h3>

      {/* 날짜 */}
      <span className="text-zinc-500 text-sm shrink-0">{notice.date}</span>
    </div>
  );
}

export function NoticeContent() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* 헤더 */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-1 text-white">
          <span className="font-bold text-xl tracking-tight">T</span>
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">ID</span>
        </Link>

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
          <Link href="/notice" className="text-white text-sm font-medium">
            공지사항
          </Link>
          <Link
            href="/profile-register"
            className="px-4 py-2 border border-zinc-600 text-white text-sm rounded-lg hover:bg-zinc-800 transition-all"
          >
            프로필 등록하기
          </Link>
        </nav>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* 메인 */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* 타이틀 & 자주 묻는 질문 */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">공지사항</h1>
          <Link href="#" className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
            자주 묻는 질문
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* 공지 리스트 */}
        <div className="bg-zinc-900/30 rounded-2xl p-6 border border-zinc-800">
          {noticeData.map((notice) => (
            <NoticeItem key={notice.id} notice={notice} />
          ))}
        </div>
      </main>

      {/* 하단 그라데이션 */}
      <div className="h-32 bg-gradient-to-t from-purple-900/20 to-transparent" />
    </div>
  );
}
