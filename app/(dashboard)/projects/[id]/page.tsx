"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { DashboardLayout, DarkCard, GoldButton } from "@/app/components";
import { PlusIcon, UserIcon, PencilIcon, XMarkIcon } from "@/app/components/Icons";

// 임시 프로젝트 상세 데이터
const projectData = {
  id: "1",
  name: "킹더랜드 시즌2",
  company: "스튜디오 드래곤",
  type: "드라마",
  genre: "로맨스",
  shootingPeriod: "2024.03 ~ 2024.06",
  status: "진행중",
  roleInfo: "호텔 배경 로맨스 드라마. 주연부터 조연까지 다양한 캐릭터 캐스팅 진행 중.",
  characters: [
    {
      id: "c1",
      name: "구원",
      gender: "남성",
      ageRange: "30대",
      roleType: "주연",
      description: "호텔 그룹 상속자. 카리스마 있지만 따뜻한 면이 있음.",
      castingStatus: "캐스팅완료",
      actor: {
        name: "이무준",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
    },
    {
      id: "c2",
      name: "천사랑",
      gender: "여성",
      ageRange: "20대 후반",
      roleType: "주연",
      description: "호텔 매니저. 밝고 긍정적인 성격.",
      castingStatus: "진행중",
      actor: null,
    },
    {
      id: "c3",
      name: "서명호",
      gender: "남성",
      ageRange: "40대",
      roleType: "조연",
      description: "호텔 총지배인. 권위적이지만 부하직원을 아끼는 상사.",
      castingStatus: "미시작",
      actor: null,
    },
  ],
};

const statusColors: Record<string, string> = {
  미시작: "bg-luxury-tertiary text-muted-gray",
  진행중: "bg-blue-500/10 text-blue-400",
  캐스팅완료: "bg-green-500/10 text-green-400",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const [showAddModal, setShowAddModal] = useState(false);

  // 실제로는 params.id로 데이터를 fetch
  const project = projectData;

  const totalCharacters = project.characters.length;
  const castingComplete = project.characters.filter((c) => c.castingStatus === "캐스팅완료").length;
  const progress = Math.round((castingComplete / totalCharacters) * 100);

  return (
    <DashboardLayout userType="agency">
      <div className="space-y-8">
        {/* 헤더 */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-ivory">{project.name}</h1>
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${
                  statusColors[project.status] || statusColors["진행중"]
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-muted-gray">
              {project.company} · {project.type} · {project.genre}
            </p>
          </div>
          <GoldButton variant="outline" size="sm">
            <PencilIcon className="w-4 h-4 mr-1" /> 수정
          </GoldButton>
        </div>

        {/* 진행률 */}
        <DarkCard>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-ivory">캐스팅 진행률</h2>
              <p className="text-sm text-muted-gray">
                {castingComplete}/{totalCharacters} 배역 완료
              </p>
            </div>
            <span className="text-3xl font-bold text-gold">{progress}%</span>
          </div>
          <div className="h-2 bg-luxury-tertiary rounded-full overflow-hidden">
            <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </DarkCard>

        {/* 프로젝트 정보 */}
        <DarkCard>
          <h2 className="text-lg font-semibold text-ivory mb-4">프로젝트 정보</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-muted-foreground">촬영 기간</p>
              <p className="text-ivory">{project.shootingPeriod}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">총 배역</p>
              <p className="text-ivory">{totalCharacters}개</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">배역 상세</p>
            <p className="text-warm-gray">{project.roleInfo}</p>
          </div>
        </DarkCard>

        {/* 캐릭터 목록 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-ivory">캐릭터 ({totalCharacters})</h2>
            <GoldButton size="sm" onClick={() => setShowAddModal(true)}>
              <PlusIcon className="w-4 h-4 mr-1" /> 캐릭터 추가
            </GoldButton>
          </div>

          <div className="space-y-4">
            {project.characters.map((character) => (
              <DarkCard key={character.id} variant="hover">
                <div className="flex items-start gap-4">
                  {/* 캐스팅된 배우 또는 빈 아이콘 */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    {character.actor ? (
                      <Image
                        src={character.actor.image}
                        alt={character.actor.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-luxury-secondary flex items-center justify-center">
                        <UserIcon className="w-8 h-8 text-muted-gray" />
                      </div>
                    )}
                  </div>

                  {/* 캐릭터 정보 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-ivory font-semibold">{character.name}</h3>
                      <span className="px-2 py-0.5 bg-gold/10 rounded text-xs text-gold">{character.roleType}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${statusColors[character.castingStatus]}`}>
                        {character.castingStatus}
                      </span>
                    </div>
                    <p className="text-sm text-muted-gray mb-2">
                      {character.gender} · {character.ageRange}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-1">{character.description}</p>
                  </div>

                  {/* 액션 */}
                  <div className="flex gap-2 flex-shrink-0">
                    {character.actor ? (
                      <span className="text-sm text-green-400">{character.actor.name} 캐스팅</span>
                    ) : (
                      <Link href={`/actor-search?character=${character.id}`}>
                        <GoldButton variant="outline" size="sm">
                          배우 찾기
                        </GoldButton>
                      </Link>
                    )}
                  </div>
                </div>
              </DarkCard>
            ))}
          </div>
        </div>

        {/* AI 추천 배너 */}
        <DarkCard variant="gold">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-ivory font-semibold mb-1">AI로 배우 추천받기</h3>
              <p className="text-sm text-muted-gray">시놉시스와 캐릭터 정보로 최적의 배우를 찾아드립니다</p>
            </div>
            <Link href={`/ai-matching?project=${params.id}`}>
              <GoldButton>AI 매칭 시작</GoldButton>
            </Link>
          </div>
        </DarkCard>
      </div>

      {/* 캐릭터 추가 모달 (간단 버전) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
          <DarkCard className="w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-ivory">캐릭터 추가</h2>
              <button onClick={() => setShowAddModal(false)} className="text-muted-gray hover:text-ivory">
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <p className="text-muted-gray text-center py-8">캐릭터 추가 폼은 추후 구현 예정입니다</p>
            <GoldButton fullWidth onClick={() => setShowAddModal(false)}>
              닫기
            </GoldButton>
          </DarkCard>
        </div>
      )}
    </DashboardLayout>
  );
}

