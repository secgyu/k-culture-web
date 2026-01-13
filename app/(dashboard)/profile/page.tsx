"use client";

import Image from "next/image";
import Link from "next/link";

import { Button, Spinner } from "@/components/ui";

import { DarkCard, DashboardLayout } from "@/components/common";
import { PencilIcon } from "@/components/common/Misc/Icons";

import { useGetMyProfile } from "@/src/users/users";

export default function ProfilePage() {
  const { data: profileData, isLoading } = useGetMyProfile();
  const profile = profileData?.data;

  if (isLoading || !profile) {
    return (
      <DashboardLayout userType="actor">
        <div className="flex h-64 items-center justify-center">
          <Spinner size="md" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userType="actor">
      <div className="max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-heading-xl text-ivory">내 프로필</h1>
          <Link href="/profile/edit">
            <Button variant="gold-outline" size="sm">
              <PencilIcon className="mr-1 h-4 w-4" /> 수정
            </Button>
          </Link>
        </div>

        <DarkCard>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="relative mx-auto h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl md:mx-0 md:h-40 md:w-40">
              <Image
                src={profile.profileImage || "https://via.placeholder.com/160"}
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-ivory mb-2 text-2xl font-bold">{profile.name}</h2>
              <p className="text-muted-gray mb-4">{profile.bio || "소개글이 없습니다"}</p>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div>
                  <p className="text-muted-gray text-sm">포지션</p>
                  <p className="text-ivory font-medium">{profile.position || "-"}</p>
                </div>
                <div>
                  <p className="text-muted-gray text-sm">소속사</p>
                  <p className="text-ivory font-medium">{profile.agency || "프리랜서"}</p>
                </div>
                <div>
                  <p className="text-muted-gray text-sm">키</p>
                  <p className="text-ivory font-medium">{profile.height ? `${profile.height}cm` : "-"}</p>
                </div>
                <div>
                  <p className="text-muted-gray text-sm">몸무게</p>
                  <p className="text-ivory font-medium">{profile.weight ? `${profile.weight}kg` : "-"}</p>
                </div>
              </div>
            </div>
          </div>
        </DarkCard>

        <DarkCard>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-ivory text-lg font-semibold">연락처</h2>
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
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-ivory text-lg font-semibold">필모그래피</h2>
            <Link href="/profile/filmography">
              <Button variant="gold-ghost" size="sm">
                관리
              </Button>
            </Link>
          </div>
          <p className="text-muted-gray py-8 text-center">필모그래피를 추가해보세요</p>
        </DarkCard>

        <DarkCard>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-ivory text-lg font-semibold">쇼릴</h2>
            <Link href="/profile/showreel">
              <Button variant="gold-ghost" size="sm">
                관리
              </Button>
            </Link>
          </div>
          <p className="text-muted-gray py-8 text-center">쇼릴을 추가해보세요</p>
        </DarkCard>
      </div>
    </DashboardLayout>
  );
}
