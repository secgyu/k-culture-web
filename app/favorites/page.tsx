"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DashboardLayout, DarkCard, GoldButton } from "@/app/components";
import { HeartIcon, XMarkIcon } from "@/app/components/Icons";

// 임시 찜 목록 데이터
const initialFavorites = [
  {
    id: "1",
    type: "actor",
    name: "김세훈",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    age: "20대 중반",
    filmography: 15,
    tags: ["섬세한연기", "청춘물"],
    addedAt: "2024-01-15",
  },
  {
    id: "2",
    type: "actor",
    name: "박시현",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    age: "30대 초반",
    filmography: 22,
    tags: ["감정연기", "로맨스"],
    addedAt: "2024-01-12",
  },
  {
    id: "3",
    type: "actor",
    name: "이다혜",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    age: "20대 후반",
    filmography: 8,
    tags: ["코미디", "뮤지컬"],
    addedAt: "2024-01-10",
  },
  {
    id: "4",
    type: "actor",
    name: "정민기",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    age: "40대",
    filmography: 45,
    tags: ["카리스마", "악역전문"],
    addedAt: "2024-01-08",
  },
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(initialFavorites);

  const handleRemove = (id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <DashboardLayout userType="agency">
      <div className="space-y-8">
        {/* 헤더 */}
        <div>
          <h1 className="text-2xl font-bold text-ivory">찜 목록</h1>
          <p className="text-muted-gray mt-1">관심있는 배우를 저장하고 관리하세요</p>
        </div>

        {/* 찜 목록 */}
        {favorites.length === 0 ? (
          <DarkCard className="text-center py-16">
            <HeartIcon className="w-16 h-16 text-muted-gray mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-ivory mb-2">찜한 배우가 없습니다</h2>
            <p className="text-muted-gray mb-6">배우 검색에서 마음에 드는 배우를 찜해보세요</p>
            <Link href="/actor-search">
              <GoldButton>배우 검색하기</GoldButton>
            </Link>
          </DarkCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((actor) => (
              <DarkCard key={actor.id} variant="hover" padding="none" className="overflow-hidden group">
                {/* 이미지 */}
                <Link href={`/actors/${actor.id}`}>
                  <div className="relative aspect-[3/4]">
                    <Image src={actor.image} alt={actor.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* 정보 오버레이 */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{actor.name}</h3>
                      <p className="text-sm text-warm-gray mb-2">
                        {actor.age} · 필모 {actor.filmography}편
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {actor.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-gold/20 rounded text-xs text-gold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 삭제 버튼 */}
                <button
                  onClick={() => handleRemove(actor.id)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/80"
                >
                  <XMarkIcon className="w-4 h-4 text-white" />
                </button>

                {/* 하단 액션 */}
                <div className="p-3 border-t border-border">
                  <div className="flex gap-2">
                    <Link href={`/actors/${actor.id}`} className="flex-1">
                      <GoldButton variant="secondary" size="sm" fullWidth>
                        프로필 보기
                      </GoldButton>
                    </Link>
                    <GoldButton variant="outline" size="sm">
                      섭외
                    </GoldButton>
                  </div>
                </div>
              </DarkCard>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
