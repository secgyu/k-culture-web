import Link from "next/link";

import { Button } from "@/components/ui";
import { Spinner } from "@/components/ui";

import { DarkCard } from "@/components/common";
import { ChartBarIcon, HeartIcon, PhoneIcon, PlusIcon, UserIcon } from "@/components/common/Misc/Icons";

import { useGetDashboardStats } from "@/src/dashboard/dashboard";
import type { AgencyDashboardStats } from "@/src/model";

import { StatCard } from "./StatCard";

export function AgencyDashboard() {
  const { data: statsData, isLoading } = useGetDashboardStats();
  const rawStats = statsData?.data as AgencyDashboardStats | undefined;
  const stats = {
    activeProjects: rawStats?.activeProjects ?? 0,
    favoriteActors: rawStats?.favoriteActors ?? 0,
    sentContacts: rawStats?.sentContacts ?? 0,
    totalCharacters: rawStats?.totalCharacters ?? 0,
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-ivory text-2xl font-bold">대시보드</h1>
          <p className="text-muted-gray mt-1">프로젝트와 캐스팅 현황을 확인하세요</p>
        </div>
        <Link href="/projects/new">
          <Button size="sm" variant="gold">
            <PlusIcon className="mr-1 h-4 w-4" /> 새 프로젝트
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          icon={<ChartBarIcon className="h-6 w-6" />}
          iconBgColor="bg-gold/10"
          iconColor="text-gold"
          label="진행중 프로젝트"
          value={stats.activeProjects}
        />
        <StatCard
          icon={<HeartIcon className="h-6 w-6" />}
          iconBgColor="bg-red-500/10"
          iconColor="text-red-400"
          label="찜한 배우"
          value={stats.favoriteActors}
        />
        <StatCard
          icon={<PhoneIcon className="h-6 w-6" />}
          iconBgColor="bg-green-500/10"
          iconColor="text-green-400"
          label="보낸 섭외"
          value={stats.sentContacts}
        />
      </div>

      <DarkCard>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-ivory text-lg font-semibold">진행중 프로젝트</h2>
          <Link href="/projects" className="text-gold hover:text-gold-light text-sm">
            전체보기
          </Link>
        </div>
        <div className="space-y-3">
          {[
            { name: "킹더랜드 시즌2", progress: 60, roles: 3 },
            { name: "미스터 선샤인 리부트", progress: 30, roles: 5 },
            { name: "브랜드 광고 A", progress: 90, roles: 1 },
          ].map((project) => (
            <div key={project.name} className="bg-luxury-tertiary/50 flex items-center gap-4 rounded-xl p-3">
              <div className="flex-1">
                <p className="text-ivory font-medium">{project.name}</p>
                <p className="text-muted-gray text-sm">{project.roles}개 배역</p>
              </div>
              <div className="w-24">
                <div className="bg-luxury-tertiary h-1.5 overflow-hidden rounded-full">
                  <div className="bg-gold h-full" style={{ width: `${project.progress}%` }} />
                </div>
                <p className="text-muted-gray mt-1 text-right text-xs">{project.progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </DarkCard>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link href="/actor-search">
          <DarkCard variant="hover" className="group">
            <div className="flex items-center gap-4">
              <div className="bg-luxury-tertiary group-hover:bg-gold/10 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                <UserIcon className="text-muted-gray group-hover:text-gold h-6 w-6 transition-colors" />
              </div>
              <div>
                <p className="text-ivory font-medium">배우 검색</p>
                <p className="text-muted-gray text-sm">조건에 맞는 배우를 찾아보세요</p>
              </div>
            </div>
          </DarkCard>
        </Link>

        <Link href="/ai-matching">
          <DarkCard variant="hover" className="group">
            <div className="flex items-center gap-4">
              <div className="bg-luxury-tertiary group-hover:bg-gold/10 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                <ChartBarIcon className="text-muted-gray group-hover:text-gold h-6 w-6 transition-colors" />
              </div>
              <div>
                <p className="text-ivory font-medium">AI 매칭</p>
                <p className="text-muted-gray text-sm">시놉시스로 배우를 추천받으세요</p>
              </div>
            </div>
          </DarkCard>
        </Link>
      </div>
    </div>
  );
}
