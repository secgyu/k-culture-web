"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { DashboardLayout, DashboardLoadingState, DarkCard } from "@/components/common";
import { Button } from "@/components/ui";
import { HeartIcon, XMarkIcon } from "@/components/common/Misc/Icons";
import { useGetFavorites, useDeleteFavorite } from "@/src/favorites/favorites";
import { getActorImageUrl } from "@/lib/constants/images";
import { GRADIENT_OVERLAYS } from "@/lib/constants/styles";

export default function FavoritesPage() {
  const { data: favoritesData, isLoading, refetch } = useGetFavorites({ type: "actor" });
  const deleteFavoriteMutation = useDeleteFavorite();

  const favorites = favoritesData?.data?.favorites || [];

  const handleRemove = useCallback(
    (id: string) => {
      deleteFavoriteMutation.mutate({ favoriteId: id }, { onSuccess: () => refetch() });
    },
    [deleteFavoriteMutation, refetch]
  );

  if (isLoading) {
    return <DashboardLoadingState userType="agency" />;
  }

  return (
    <DashboardLayout userType="agency">
      <div className="space-y-8">
        <div>
          <h1 className="text-heading-xl text-ivory">찜 목록</h1>
          <p className="text-muted-gray mt-1">관심있는 배우를 저장하고 관리하세요</p>
        </div>

        {favorites.length === 0 ? (
          <DarkCard className="text-center py-16">
            <HeartIcon className="w-16 h-16 text-muted-gray mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-ivory mb-2">찜한 배우가 없습니다</h2>
            <p className="text-muted-gray mb-6">배우 검색에서 마음에 드는 배우를 찜해보세요</p>
            <Link href="/actor-search">
              <Button variant="gold">배우 검색하기</Button>
            </Link>
          </DarkCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((item) => (
              <DarkCard key={item.id} variant="hover" padding="none" className="overflow-hidden group">
                <Link href={`/actors/${item.targetId}`}>
                  <div className="relative aspect-3/4">
                    <Image
                      src={getActorImageUrl(item.actor?.imageUrl)}
                      alt={item.actor?.name || ""}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 ${GRADIENT_OVERLAYS.DARK_TO_TRANSPARENT}`} />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{item.actor?.name}</h3>
                      <p className="text-sm text-warm-gray mb-2">
                        {item.actor?.age} · 필모 {item.actor?.filmography}편
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.actor?.tags?.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-gold/20 rounded text-xs text-gold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>

                <button
                  onClick={() => handleRemove(item.id!)}
                  disabled={deleteFavoriteMutation.isPending}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/80"
                >
                  <XMarkIcon className="w-4 h-4 text-white" />
                </button>

                <div className="p-3 border-t border-border">
                  <div className="flex gap-2">
                    <Link href={`/actors/${item.targetId}`} className="flex-1">
                      <Button variant="gold-secondary" size="sm" fullWidth>
                        프로필 보기
                      </Button>
                    </Link>
                    <Button variant="gold-outline" size="sm">
                      섭외
                    </Button>
                  </div>
                </div>
              </DarkCard>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
