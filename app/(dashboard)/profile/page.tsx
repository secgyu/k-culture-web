"use client";

import Image from "next/image";
import Link from "next/link";
import { DashboardLayout, DarkCard } from "@/components/common";
import { Button } from "@/components/ui";
import { PencilIcon } from "@/components/common/Misc/Icons";
import { useGetMyProfile } from "@/src/users/users";

export default function ProfilePage() {
  const { data: profileData, isLoading } = useGetMyProfile();
  const profile = profileData?.data;

  if (isLoading || !profile) {
    return (
      <DashboardLayout userType="actor">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      </DashboardLayout>
    );
  }

  const currentYear = new Date().getFullYear();

  return (
    <DashboardLayout userType="actor">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ivory">내 프로필</h1>
          <Link href="/profile/edit">
            <Button variant="gold-outline" size="sm">
              <PencilIcon className="w-4 h-4 mr-1" /> 수정
            </Button>
          </Link>
        </div>

        <DarkCard>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 mx-auto md:mx-0">
              <Image
                src={profile.profileImage || "https://via.placeholder.com/160"}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-ivory mb-2">{profile.name}</h2>
              <p className="text-muted-gray mb-4">{profile.bio || "소개글이 없습니다"}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">포지션</p>
                  <p className="text-ivory font-medium">{profile.position || "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">소속사</p>
                  <p className="text-ivory font-medium">{profile.agency || "프리랜서"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">키</p>
                  <p className="text-ivory font-medium">{profile.height ? `${profile.height}cm` : "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">몸무게</p>
                  <p className="text-ivory font-medium">{profile.weight ? `${profile.weight}kg` : "-"}</p>
                </div>
              </div>
            </div>
          </div>
        </DarkCard>

        <DarkCard>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-ivory">연락처</h2>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-gray">이메일</span>
              <span className="text-ivory">{profile.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-gray">전화번호</span>
              <span className="text-ivory">{profile.phone || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-gray">출연료</span>
              <span className="text-ivory">{profile.fee || "협의"}</span>
            </div>
          </div>
        </DarkCard>

        <DarkCard>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-ivory">필모그래피</h2>
            <Link href="/profile/filmography">
              <Button variant="gold-ghost" size="sm">
                관리
              </Button>
            </Link>
          </div>
          <p className="text-muted-gray text-center py-8">필모그래피를 추가해보세요</p>
        </DarkCard>

        <DarkCard>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-ivory">쇼릴</h2>
            <Link href="/profile/showreel">
              <Button variant="gold-ghost" size="sm">
                관리
              </Button>
            </Link>
          </div>
          <p className="text-muted-gray text-center py-8">쇼릴을 추가해보세요</p>
        </DarkCard>
      </div>
    </DashboardLayout>
  );
}
