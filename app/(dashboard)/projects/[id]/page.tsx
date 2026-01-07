"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { DashboardLayout, DarkCard } from "@/components/common";
import { Button } from "@/components/ui";
import { PlusIcon, UserIcon, PencilIcon, XMarkIcon } from "@/components/common/Misc/Icons";
import { useGetProjectDetail } from "@/src/projects/projects";
import { useGetProjectCharacters } from "@/src/characters/characters";

const statusColors: Record<string, string> = {
  미시작: "bg-luxury-tertiary text-muted-gray",
  진행중: "bg-blue-500/10 text-blue-400",
  캐스팅완료: "bg-green-500/10 text-green-400",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const [showAddModal, setShowAddModal] = useState(false);

  const { data: projectData, isLoading: projectLoading } = useGetProjectDetail(projectId);
  const { data: charactersData } = useGetProjectCharacters(projectId);

  const project = projectData?.data;
  const characters = charactersData?.data?.characters || [];

  if (projectLoading || !project) {
    return (
      <DashboardLayout userType="agency">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      </DashboardLayout>
    );
  }

  const totalCharacters = characters.length;
  const castingComplete = characters.filter((c) => c.roleType === "주연").length; // 임시 로직
  const progress = totalCharacters > 0 ? Math.round((castingComplete / totalCharacters) * 100) : 0;

  return (
    <DashboardLayout userType="agency">
      <div className="space-y-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-ivory">{project.projectName}</h1>
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${
                  statusColors[project.status] || statusColors["진행중"]
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-muted-gray">
              {project.company} · {project.projectType} · {project.genre}
            </p>
          </div>
          <Button variant="gold-outline" size="sm">
            <PencilIcon className="w-4 h-4 mr-1" /> 수정
          </Button>
        </div>

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

        <DarkCard>
          <h2 className="text-lg font-semibold text-ivory mb-4">프로젝트 정보</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-muted-foreground">촬영 기간</p>
              <p className="text-ivory">{project.shootingPeriod || "미정"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">총 배역</p>
              <p className="text-ivory">{totalCharacters}개</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">배역 상세</p>
            <p className="text-warm-gray">{project.roleInfo || "정보 없음"}</p>
          </div>
        </DarkCard>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-ivory">캐릭터 ({totalCharacters})</h2>
            <Button variant="gold" size="sm" onClick={() => setShowAddModal(true)}>
              <PlusIcon className="w-4 h-4 mr-1" /> 캐릭터 추가
            </Button>
          </div>

          <div className="space-y-4">
            {characters.map((character) => (
              <DarkCard key={character.id} variant="hover">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    <div className="w-full h-full bg-luxury-secondary flex items-center justify-center">
                      <UserIcon className="w-8 h-8 text-muted-gray" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-ivory font-semibold">{character.name}</h3>
                      <span className="px-2 py-0.5 bg-gold/10 rounded text-xs text-gold">{character.roleType}</span>
                    </div>
                    <p className="text-sm text-muted-gray mb-2">
                      {character.gender} · {character.ageRange}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-1">{character.description}</p>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <Link href={`/actor-search?character=${character.id}`}>
                      <Button variant="gold-outline" size="sm">
                        배우 찾기
                      </Button>
                    </Link>
                  </div>
                </div>
              </DarkCard>
            ))}
          </div>
        </div>

        <DarkCard variant="gold">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-ivory font-semibold mb-1">AI로 배우 추천받기</h3>
              <p className="text-sm text-muted-gray">시놉시스와 캐릭터 정보로 최적의 배우를 찾아드립니다</p>
            </div>
            <Link href={`/ai-matching?project=${projectId}`}>
              <Button variant="gold">AI 매칭 시작</Button>
            </Link>
          </div>
        </DarkCard>
      </div>

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
            <Button variant="gold" fullWidth onClick={() => setShowAddModal(false)}>
              닫기
            </Button>
          </DarkCard>
        </div>
      )}
    </DashboardLayout>
  );
}
