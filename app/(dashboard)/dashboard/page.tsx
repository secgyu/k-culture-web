"use client";

import Link from "next/link";
import { DashboardLayout, DarkCard, GoldButton } from "@/components/common";
import { EyeIcon, HeartIcon, PhoneIcon, ChartBarIcon, UserIcon, PlusIcon } from "@/components/common/Misc/Icons";
import { useGetDashboardStats } from "@/src/dashboard/dashboard";
import { useGetMyProfile } from "@/src/users/users";
import type { ActorDashboardStats, AgencyDashboardStats } from "@/src/model";

function ActorDashboard() {
  const { data: statsData, isLoading } = useGetDashboardStats();
  const rawStats = statsData?.data as ActorDashboardStats | undefined;
  const stats = {
    profileViews: rawStats?.profileViews ?? 0,
    likes: rawStats?.likes ?? 0,
    contactRequests: rawStats?.contactRequests ?? 0,
    profileCompleteness: rawStats?.profileCompleteness ?? 0,
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ivory">대시보드</h1>
          <p className="text-muted-gray mt-1">내 활동 현황을 확인하세요</p>
        </div>
        <Link href="/profile/edit">
          <GoldButton variant="outline" size="sm">
            프로필 수정
          </GoldButton>
        </Link>
      </div>

      <DarkCard variant="gold">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-ivory">프로필 완성도</h2>
          <span className="text-2xl font-bold text-gold">{stats.profileCompleteness}%</span>
        </div>
        <div className="h-2 bg-luxury-tertiary rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gold transition-all duration-500"
            style={{ width: `${stats.profileCompleteness}%` }}
          />
        </div>
        <p className="text-sm text-muted-gray">프로필을 완성하면 더 많은 캐스팅 기회를 얻을 수 있습니다</p>
        <div className="mt-4 flex gap-2">
          <Link href="/profile/filmography">
            <GoldButton variant="ghost" size="sm">
              <PlusIcon className="w-4 h-4 mr-1" /> 필모그래피 추가
            </GoldButton>
          </Link>
          <Link href="/profile/showreel">
            <GoldButton variant="ghost" size="sm">
              <PlusIcon className="w-4 h-4 mr-1" /> 쇼릴 추가
            </GoldButton>
          </Link>
        </div>
      </DarkCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DarkCard>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <EyeIcon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-gray">프로필 조회</p>
              <p className="text-2xl font-bold text-ivory">{stats.profileViews}</p>
            </div>
          </div>
        </DarkCard>

        <DarkCard>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <HeartIcon className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-muted-gray">찜</p>
              <p className="text-2xl font-bold text-ivory">{stats.likes}</p>
            </div>
          </div>
        </DarkCard>

        <DarkCard>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <PhoneIcon className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-gray">섭외 요청</p>
              <p className="text-2xl font-bold text-ivory">{stats.contactRequests}</p>
            </div>
          </div>
        </DarkCard>
      </div>

      <DarkCard>
        <h2 className="text-lg font-semibold text-ivory mb-4">최근 활동</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <EyeIcon className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-warm-gray">스튜디오 드래곤에서 프로필을 조회했습니다</p>
              <p className="text-muted-gray">2시간 전</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
              <HeartIcon className="w-4 h-4 text-red-400" />
            </div>
            <div className="flex-1">
              <p className="text-warm-gray">CJ ENM에서 찜 목록에 추가했습니다</p>
              <p className="text-muted-gray">어제</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <PhoneIcon className="w-4 h-4 text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-warm-gray">NEW에서 섭외 요청을 보냈습니다</p>
              <p className="text-muted-gray">3일 전</p>
            </div>
          </div>
        </div>
      </DarkCard>
    </div>
  );
}

function AgencyDashboard() {
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
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
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

export default function DashboardPage() {
  const { data: profileData } = useGetMyProfile();
  const userType = profileData?.data?.type || "actor";

  return (
    <DashboardLayout userType={userType}>
      {userType === "actor" ? <ActorDashboard /> : <AgencyDashboard />}
    </DashboardLayout>
  );
}
