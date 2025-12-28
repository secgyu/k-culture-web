"use client";

import Image from "next/image";
import Link from "next/link";
import { DashboardLayout, DarkCard, GoldButton } from "@/app/components";
import { PencilIcon, PlayIcon } from "@/app/components/Icons";

// 임시 프로필 데이터
const profile = {
  name: "김배우",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  introduction: "깊은 눈빛으로 서사를 만드는 배우입니다",
  birthYear: 1995,
  gender: "남성",
  height: 178,
  weight: 68,
  skills: ["영어(원어민 수준)", "피아노", "검술", "승마", "수영"],
  filmography: [
    { year: 2024, type: "드라마", title: "사랑의 계절", role: "민준 역", roleType: "주연" },
    { year: 2023, type: "영화", title: "서울의 밤", role: "강민 역", roleType: "조연" },
    { year: 2022, type: "웹드라마", title: "청춘시대", role: "지호 역", roleType: "주연" },
  ],
  showreels: [
    { title: "2024 Showreel", thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=200&fit=crop", duration: "3:15" },
    { title: "감정연기 모음", thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop", duration: "2:30" },
  ],
};

export default function ProfilePage() {
  const age = new Date().getFullYear() - profile.birthYear;

  return (
    <DashboardLayout userType="actor">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ivory">내 프로필</h1>
          <Link href="/profile/edit">
            <GoldButton variant="outline" size="sm">
              <PencilIcon className="w-4 h-4 mr-1" /> 수정
            </GoldButton>
          </Link>
        </div>

        {/* 기본 정보 */}
        <DarkCard>
          <div className="flex flex-col md:flex-row gap-6">
            {/* 프로필 이미지 */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 mx-auto md:mx-0">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>

            {/* 정보 */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-ivory mb-2">{profile.name}</h2>
              <p className="text-zinc-400 mb-4">{profile.introduction}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-zinc-500">나이</p>
                  <p className="text-ivory font-medium">{age}세</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">성별</p>
                  <p className="text-ivory font-medium">{profile.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">키</p>
                  <p className="text-ivory font-medium">{profile.height}cm</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">몸무게</p>
                  <p className="text-ivory font-medium">{profile.weight}kg</p>
                </div>
              </div>
            </div>
          </div>
        </DarkCard>

        {/* 스킬 */}
        <DarkCard>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-ivory">스킬 & 특기</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </DarkCard>

        {/* 필모그래피 */}
        <DarkCard>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-ivory">필모그래피</h2>
            <Link href="/profile/filmography">
              <GoldButton variant="ghost" size="sm">
                관리
              </GoldButton>
            </Link>
          </div>
          <div className="space-y-3">
            {profile.filmography.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-xl"
              >
                <div className="text-center min-w-[60px]">
                  <p className="text-lg font-bold text-ivory">{item.year}</p>
                  <p className="text-xs text-zinc-500">{item.type}</p>
                </div>
                <div className="flex-1">
                  <p className="text-ivory font-medium">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.role}</p>
                </div>
                <span className="px-2 py-1 bg-gold/10 rounded text-xs text-gold">
                  {item.roleType}
                </span>
              </div>
            ))}
          </div>
        </DarkCard>

        {/* 쇼릴 */}
        <DarkCard>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-ivory">쇼릴</h2>
            <Link href="/profile/showreel">
              <GoldButton variant="ghost" size="sm">
                관리
              </GoldButton>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.showreels.map((item, idx) => (
              <div
                key={idx}
                className="relative group rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
                      <PlayIcon className="w-6 h-6 text-luxury-black ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-ivory font-medium">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </DarkCard>
      </div>
    </DashboardLayout>
  );
}

