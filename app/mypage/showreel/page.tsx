"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// 아이콘 컴포넌트들
function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

function XCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// 영상 타입
interface ShowreelItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
}

// 샘플 쇼릴 데이터
const initialShowreels: ShowreelItem[] = [
  {
    id: "s1",
    title: "2023 연기 쇼릴",
    duration: "3:24",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop",
  },
];

// 연도 옵션
const years = Array.from({ length: 10 }, (_, i) => 2024 - i);

// 장르 옵션
const genres = ["영화", "드라마", "뮤지컬", "연극", "웹드라마", "광고", "기타"];

// 영상 유형 옵션
const videoTypes = ["쇼릴", "오디션 영상", "자기소개 영상", "연기 클립", "기타"];

export default function ShowreelManagePage() {
  const router = useRouter();
  const [showreels, setShowreels] = useState<ShowreelItem[]>(initialShowreels);
  const [year, setYear] = useState(2023);
  const [genre, setGenre] = useState("영화");
  const [videoType, setVideoType] = useState("쇼릴");

  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showGenreDropdown, setShowGenreDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const handleDelete = (id: string) => {
    if (confirm("이 영상을 삭제하시겠습니까?")) {
      setShowreels((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleUpload = () => {
    // TODO: 파일 업로드 로직
    console.log("Upload video");
  };

  const handleSave = () => {
    // TODO: API 호출로 저장
    console.log("Save:", { showreels, year, genre, videoType });
    router.back();
  };

  const closeAllDropdowns = () => {
    setShowYearDropdown(false);
    setShowGenreDropdown(false);
    setShowTypeDropdown(false);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="relative w-full max-w-lg bg-white min-h-screen flex flex-col">
        {/* 헤더 */}
        <header className="sticky top-0 z-20 bg-white">
          <div className="flex items-center gap-3 px-4 py-4">
            <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center -ml-2">
              <ChevronLeftIcon className="w-6 h-6" style={{ color: "#191F28" }} />
            </button>
            <h1 className="text-lg font-semibold" style={{ color: "#191F28" }}>
              쇼릴 관리
            </h1>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <main className="flex-1">
          {/* 상단 설명 및 업로드 영역 */}
          <section className="px-5 py-6 border-b" style={{ borderColor: "#F2F4F6" }}>
            <p className="text-sm mb-4" style={{ color: "#4E5968" }}>
              배우님의 연기력을 보여줄 수 있는 쇼릴 영상을 업로드해주세요. mp4, mov 형식의 파일을 지원합니다.
            </p>

            {/* 파일 업로드 영역 */}
            <button
              onClick={handleUpload}
              className="w-full rounded-xl py-10 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-gray-100"
              style={{
                backgroundColor: "#F9FAFB",
                border: "1px dashed #E5E8EB",
              }}
            >
              <UploadIcon className="w-6 h-6" style={{ color: "#6B7684" }} />
              <div className="text-center">
                <p className="text-sm font-medium" style={{ color: "#4E5968" }}>
                  영상 파일 업로드
                </p>
                <p className="text-xs mt-1" style={{ color: "#8B95A1" }}>
                  mp4, mov 형식 지원 (최대 500MB)
                </p>
              </div>
            </button>
          </section>

          {/* 등록된 영상 목록 */}
          <section className="px-5 py-6 border-b" style={{ borderColor: "#F2F4F6" }}>
            <h2 className="text-base font-semibold mb-4" style={{ color: "#4E5968" }}>
              등록된 영상
            </h2>

            {showreels.length > 0 ? (
              <div className="space-y-3">
                {showreels.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 rounded-xl border"
                    style={{ borderColor: "#E5E8EB" }}
                  >
                    {/* 썸네일 */}
                    <div
                      className="w-24 h-16 rounded-lg bg-gray-200 bg-cover bg-center shrink-0"
                      style={{ backgroundImage: `url(${item.thumbnail})` }}
                    />

                    {/* 정보 */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium truncate" style={{ color: "#191F28" }}>
                        {item.title}
                      </h3>
                      <p className="text-xs mt-1" style={{ color: "#8B95A1" }}>
                        {item.duration}
                      </p>
                    </div>

                    {/* 삭제 버튼 */}
                    <button onClick={() => handleDelete(item.id)} className="shrink-0">
                      <XCircleIcon className="w-6 h-6" style={{ color: "#B0B8C1" }} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-10 text-center">
                <p className="text-sm" style={{ color: "#8B95A1" }}>
                  등록된 영상이 없습니다.
                </p>
              </div>
            )}
          </section>

          {/* 영상 설정 */}
          <section className="px-5 py-6 space-y-4">
            {/* 연도 */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#4E5968" }}>
                연도
              </label>
              <div className="relative">
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setShowYearDropdown(!showYearDropdown);
                  }}
                  className="w-full flex items-center justify-between border rounded-xl px-4 py-3"
                  style={{ borderColor: "#E5E8EB" }}
                >
                  <span style={{ color: "#191F28" }}>{year}</span>
                  <ChevronDownIcon className="w-5 h-5" style={{ color: "#6B7684" }} />
                </button>
                {showYearDropdown && (
                  <div
                    className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-xl shadow-lg max-h-48 overflow-y-auto z-10"
                    style={{ borderColor: "#E5E8EB" }}
                  >
                    {years.map((y) => (
                      <button
                        key={y}
                        onClick={() => {
                          setYear(y);
                          setShowYearDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50"
                        style={{ color: year === y ? "#E50815" : "#191F28" }}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 장르 */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#4E5968" }}>
                장르
              </label>
              <div className="relative">
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setShowGenreDropdown(!showGenreDropdown);
                  }}
                  className="w-full flex items-center justify-between border rounded-xl px-4 py-3"
                  style={{ borderColor: "#E5E8EB" }}
                >
                  <span style={{ color: "#191F28" }}>{genre}</span>
                  <ChevronDownIcon className="w-5 h-5" style={{ color: "#6B7684" }} />
                </button>
                {showGenreDropdown && (
                  <div
                    className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-xl shadow-lg max-h-48 overflow-y-auto z-10"
                    style={{ borderColor: "#E5E8EB" }}
                  >
                    {genres.map((g) => (
                      <button
                        key={g}
                        onClick={() => {
                          setGenre(g);
                          setShowGenreDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50"
                        style={{ color: genre === g ? "#E50815" : "#191F28" }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 영상 유형 */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "#4E5968" }}>
                영상 유형
              </label>
              <div className="relative">
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setShowTypeDropdown(!showTypeDropdown);
                  }}
                  className="w-full flex items-center justify-between border rounded-xl px-4 py-3"
                  style={{ borderColor: "#E5E8EB" }}
                >
                  <span style={{ color: "#191F28" }}>{videoType}</span>
                  <ChevronDownIcon className="w-5 h-5" style={{ color: "#6B7684" }} />
                </button>
                {showTypeDropdown && (
                  <div
                    className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-xl shadow-lg max-h-48 overflow-y-auto z-10"
                    style={{ borderColor: "#E5E8EB" }}
                  >
                    {videoTypes.map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setVideoType(t);
                          setShowTypeDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50"
                        style={{ color: videoType === t ? "#E50815" : "#191F28" }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>

        {/* 하단 저장 버튼 */}
        <div className="sticky bottom-0 bg-white px-5 py-6">
          <button
            onClick={handleSave}
            className="w-full py-4 rounded-xl font-medium text-white"
            style={{ backgroundColor: "#191F28" }}
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}

