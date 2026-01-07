import Link from "next/link";
import { DarkCard } from "@/components/common";
import { Button } from "@/components/ui";
import { EyeIcon, HeartIcon, PhoneIcon, PlusIcon } from "@/components/common/Misc/Icons";
import { useGetDashboardStats } from "@/src/dashboard/dashboard";
import { Spinner } from "@/components/ui";
import type { ActorDashboardStats } from "@/src/model";

export function ActorDashboard() {
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
          <p className="text-muted-gray mt-1">내 활동 현황을 확인하세요</p>
        </div>
        <Link href="/profile/edit">
          <Button variant="gold-outline" size="sm">
            프로필 수정
          </Button>
        </Link>
      </div>

      {/* Profile Completeness */}
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
            <Button variant="gold-ghost" size="sm">
              <PlusIcon className="w-4 h-4 mr-1" /> 필모그래피 추가
            </Button>
          </Link>
          <Link href="/profile/showreel">
            <Button variant="gold-ghost" size="sm">
              <PlusIcon className="w-4 h-4 mr-1" /> 쇼릴 추가
            </Button>
          </Link>
        </div>
      </DarkCard>

      {/* Stats Grid */}
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

      {/* Recent Activity */}
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

