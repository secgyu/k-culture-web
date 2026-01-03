"use client";

import Link from "next/link";
import Image from "next/image";
import { DashboardLayout, DarkCard, GoldButton } from "@/app/components";
import { PlusIcon, FolderIcon } from "@/app/components/Icons";

// 임시 프로젝트 데이터
const projects = [
  {
    id: "1",
    name: "킹더랜드 시즌2",
    company: "스튜디오 드래곤",
    type: "드라마",
    genre: "로맨스",
    status: "진행중",
    progress: 60,
    characters: 5,
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "미스터 선샤인 리부트",
    company: "스튜디오 드래곤",
    type: "드라마",
    genre: "사극",
    status: "기획중",
    progress: 20,
    characters: 8,
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=200&fit=crop",
    createdAt: "2024-02-10",
  },
  {
    id: "3",
    name: "브랜드 광고 A",
    company: "CJ ENM",
    type: "광고",
    genre: "기타",
    status: "캐스팅완료",
    progress: 100,
    characters: 2,
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=200&fit=crop",
    createdAt: "2024-03-01",
  },
];

const statusColors: Record<string, string> = {
  기획중: "bg-yellow-500/10 text-yellow-400",
  진행중: "bg-blue-500/10 text-blue-400",
  캐스팅완료: "bg-green-500/10 text-green-400",
};

export default function ProjectsPage() {
  return (
    <DashboardLayout userType="agency">
      <div className="space-y-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-ivory">프로젝트</h1>
            <p className="text-muted-gray mt-1">진행중인 프로젝트를 관리하세요</p>
          </div>
          <Link href="/projects/new">
            <GoldButton>
              <PlusIcon className="w-4 h-4 mr-1" /> 새 프로젝트
            </GoldButton>
          </Link>
        </div>

        {/* 프로젝트 목록 */}
        {projects.length === 0 ? (
          <DarkCard className="text-center py-16">
            <FolderIcon className="w-16 h-16 text-muted-gray mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-ivory mb-2">프로젝트가 없습니다</h2>
            <p className="text-muted-gray mb-6">새 프로젝트를 만들어 캐스팅을 시작하세요</p>
            <Link href="/projects/new">
              <GoldButton>
                <PlusIcon className="w-4 h-4 mr-1" /> 첫 프로젝트 만들기
              </GoldButton>
            </Link>
          </DarkCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <DarkCard variant="hover" padding="none" className="overflow-hidden">
                  {/* 썸네일 */}
                  <div className="relative aspect-video">
                    <Image src={project.thumbnail} alt={project.name} fill className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[project.status]}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* 정보 */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-ivory mb-1">{project.name}</h3>
                    <p className="text-sm text-muted-gray mb-3">
                      {project.company} · {project.type}
                    </p>

                    {/* 진행률 */}
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">캐스팅 진행률</span>
                        <span className="text-gold">{project.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-luxury-tertiary rounded-full overflow-hidden">
                        <div className="h-full bg-gold transition-all" style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{project.characters}개 배역</span>
                      <span className="text-muted-foreground">{project.createdAt}</span>
                    </div>
                  </div>
                </DarkCard>
              </Link>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

