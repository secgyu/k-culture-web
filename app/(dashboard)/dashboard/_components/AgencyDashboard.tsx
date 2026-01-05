import Link from "next/link";
import { DarkCard, GoldButton } from "@/components/common";
import { ChartBarIcon, HeartIcon, PhoneIcon, PlusIcon, UserIcon } from "@/components/common/Misc/Icons";
import { useGetDashboardStats } from "@/src/dashboard/dashboard";
import { Spinner } from "@/components/ui";
import type { AgencyDashboardStats } from "@/src/model";

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
      <div className="flex items-center justify-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ivory">대시보드</h1>
          <p className="text-muted-gray mt-1">프로젝트와 캐스팅 현황을 확인하세요</p>
        </div>
        <Link href="/projects/new">
          <GoldButton size="sm">
            <PlusIcon className="w-4 h-4 mr-1" /> 새 프로젝트
          </GoldButton>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DarkCard>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <ChartBarIcon className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-sm text-muted-gray">진행중 프로젝트</p>
              <p className="text-2xl font-bold text-ivory">{stats.activeProjects}</p>
            </div>
          </div>
        </DarkCard>

        <DarkCard>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <HeartIcon className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-muted-gray">찜한 배우</p>
              <p className="text-2xl font-bold text-ivory">{stats.favoriteActors}</p>
            </div>
          </div>
        </DarkCard>

        <DarkCard>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <PhoneIcon className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-gray">보낸 섭외</p>
              <p className="text-2xl font-bold text-ivory">{stats.sentContacts}</p>
            </div>
          </div>
        </DarkCard>
      </div>

      {/* Active Projects */}
      <DarkCard>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-ivory">진행중 프로젝트</h2>
          <Link href="/projects" className="text-sm text-gold hover:text-gold-light">
            전체보기
          </Link>
        </div>
        <div className="space-y-3">
          {[
            { name: "킹더랜드 시즌2", progress: 60, roles: 3 },
            { name: "미스터 선샤인 리부트", progress: 30, roles: 5 },
            { name: "브랜드 광고 A", progress: 90, roles: 1 },
          ].map((project) => (
            <div key={project.name} className="flex items-center gap-4 p-3 bg-luxury-tertiary/50 rounded-xl">
              <div className="flex-1">
                <p className="text-ivory font-medium">{project.name}</p>
                <p className="text-sm text-muted-gray">{project.roles}개 배역</p>
              </div>
              <div className="w-24">
                <div className="h-1.5 bg-luxury-tertiary rounded-full overflow-hidden">
                  <div className="h-full bg-gold" style={{ width: `${project.progress}%` }} />
                </div>
                <p className="text-xs text-muted-gray mt-1 text-right">{project.progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </DarkCard>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/actor-search">
          <DarkCard variant="hover" className="group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-luxury-tertiary group-hover:bg-gold/10 transition-colors flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-muted-gray group-hover:text-gold transition-colors" />
              </div>
              <div>
                <p className="text-ivory font-medium">배우 검색</p>
                <p className="text-sm text-muted-gray">조건에 맞는 배우를 찾아보세요</p>
              </div>
            </div>
          </DarkCard>
        </Link>

        <Link href="/ai-matching">
          <DarkCard variant="hover" className="group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-luxury-tertiary group-hover:bg-gold/10 transition-colors flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-muted-gray group-hover:text-gold transition-colors" />
              </div>
              <div>
                <p className="text-ivory font-medium">AI 매칭</p>
                <p className="text-sm text-muted-gray">시놉시스로 배우를 추천받으세요</p>
              </div>
            </div>
          </DarkCard>
        </Link>
      </div>
    </div>
  );
}
