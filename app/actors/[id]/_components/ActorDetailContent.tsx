"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetActorDetail, useContactActor } from "@/src/actors/actors";
import { ChevronLeftIcon, ShareIcon, PlayIcon, PhoneIcon } from "@/app/components/Icons";
import { PageLayout } from "@/app/components/PageLayout";
import type { FilmographyItem } from "@/src/model";
import { COLORS } from "@/lib/constants";

// 연락처 표시 모달
function ContactInfoModal({
  isOpen,
  onClose,
  phone,
  email,
}: {
  isOpen: boolean;
  onClose: () => void;
  phone?: string;
  email?: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-sm mx-4 shadow-xl">
        <h3 className="text-lg font-bold text-gray-900 mb-4">연락처 정보</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <PhoneIcon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">전화번호</p>
              <p className="font-medium text-gray-900">{phone || "010-****-****"}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">이메일</p>
              <p className="font-medium text-gray-900">{email || "actor@example.com"}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
}

// 섭외 요청 모달
function CastingRequestModal({
  isOpen,
  onClose,
  onSubmit,
  actorName,
  isSubmitting,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (message: string) => void;
  actorName: string;
  isSubmitting: boolean;
}) {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!message.trim()) return;
    onSubmit(message);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl">
        <h3 className="text-lg font-bold text-gray-900 mb-2">섭외 요청</h3>
        <p className="text-sm text-gray-500 mb-4">{actorName}님에게 섭외 요청을 보냅니다</p>
        
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 mb-2 block">메시지</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="프로젝트 소개와 함께 섭외 의사를 전달해주세요"
            className="w-full h-32 px-4 py-3 border border-gray-200 rounded-xl text-base resize-none focus:outline-none focus:border-gray-400"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            disabled={!message.trim() || isSubmitting}
            className="flex-1 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "전송 중..." : "요청 보내기"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ActorDetailSkeleton() {
  return (
    <PageLayout className="pb-24 animate-pulse">
      <div className="h-[480px] bg-gray-200" />
      <section className="px-5 py-8">
        <div className="h-6 w-32 bg-gray-200 rounded mb-6" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="w-16 h-22 bg-gray-200 rounded-lg" />
              <div className="flex-1">
                <div className="h-3 w-12 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
                <div className="h-3 w-1/2 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

function groupFilmographyByYear(filmography: FilmographyItem[]) {
  const grouped: Record<number, FilmographyItem[]> = {};
  filmography.forEach((item) => {
    const year = item.year ?? 0;
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(item);
  });
  return Object.entries(grouped)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, items]) => ({ year: Number(year), items }));
}

interface ActorDetailContentProps {
  actorId: string;
}

export function ActorDetailContent({ actorId }: ActorDetailContentProps) {
  const router = useRouter();
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCastingModal, setShowCastingModal] = useState(false);

  const { data, isLoading } = useGetActorDetail(actorId, {
    query: { enabled: !!actorId },
  });

  const { mutate: contactActor, isPending: isContacting } = useContactActor();

  const actor = data?.data;

  const handleContact = () => {
    // 로그인 체크 (간단히 localStorage로 확인)
    const isLoggedIn = localStorage.getItem("onboarding_step1");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setShowContactModal(true);
  };

  const handleCastingRequest = (message: string) => {
    if (!actor) return;
    contactActor(
      {
        actorId: actor.id,
        data: {
          projectId: "",
          message,
        },
      },
      {
        onSuccess: () => {
          setShowCastingModal(false);
          alert("섭외 요청이 전송되었습니다!");
        },
      }
    );
  };


  if (isLoading) {
    return <ActorDetailSkeleton />;
  }

  if (!actor) {
    return (
      <PageLayout className="items-center justify-center">
        <div className="text-center">
          <p style={{ color: COLORS.text.tertiary }}>배우 정보를 찾을 수 없습니다.</p>
          <Link href="/recommend" className="mt-4 underline" style={{ color: COLORS.accent.teal }}>
            돌아가기
          </Link>
        </div>
      </PageLayout>
    );
  }

  const groupedFilmography = groupFilmographyByYear(actor.filmography ?? []);

  return (
    <PageLayout className="pb-24">
      <section className="relative h-[480px]">
        <div className="absolute inset-0">
          {actor.profileImage ? (
            <Image src={actor.profileImage} alt={actor.name} fill className="object-cover" priority />
          ) : (
            <div className="w-full h-full bg-gray-300" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>

        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-4 pt-12 pb-4">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
          >
            <ChevronLeftIcon className="w-6 h-6" style={{ color: COLORS.background.primary }} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <ShareIcon className="w-5 h-5" style={{ color: COLORS.background.primary }} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: COLORS.background.primary }}>
            {actor.name}
          </h1>
          <p className="text-white/80 text-sm mb-3">
            {actor.birthYear}년생 · 필모 {actor.filmographyCount ?? 0}편
          </p>
          <p className="text-sm" style={{ color: COLORS.accent.teal }}>
            {actor.description}
          </p>
        </div>
      </section>

      <section className="px-5 py-8">
        <h2 className="text-lg font-bold mb-6" style={{ color: COLORS.text.primary }}>
          필모그래피
        </h2>

        {groupedFilmography.length === 0 ? (
          <p className="text-center py-8" style={{ color: COLORS.text.disabled }}>
            등록된 필모그래피가 없습니다.
          </p>
        ) : (
          groupedFilmography.map(({ year, items }) => (
            <div key={year} className="mb-8">
              <h3 className="text-base font-semibold mb-4" style={{ color: COLORS.text.primary }}>
                {year}
              </h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-22 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      {item.thumbnail ? (
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          width={64}
                          height={88}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs mb-1 block" style={{ color: COLORS.text.disabled }}>
                        {item.type}
                      </span>
                      <h4
                        className="text-sm font-medium leading-snug mb-1 line-clamp-2"
                        style={{ color: COLORS.text.primary }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs" style={{ color: COLORS.text.tertiary }}>
                        {item.roleType} · {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      <section className="px-5 py-6 border-t border-gray-100">
        <h2 className="text-lg font-bold mb-4" style={{ color: COLORS.text.primary }}>
          스킬 및 특기
        </h2>
        <div className="flex flex-wrap gap-2">
          {(actor.skills ?? []).length === 0 ? (
            <p style={{ color: COLORS.text.disabled }}>등록된 스킬이 없습니다.</p>
          ) : (
            (actor.skills ?? []).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-sm rounded-full"
                style={{ color: COLORS.text.tertiary, backgroundColor: COLORS.background.secondary }}
              >
                {skill}
              </span>
            ))
          )}
        </div>
      </section>

      <section className="px-5 py-6 border-t border-gray-100">
        <h2 className="text-lg font-bold mb-4" style={{ color: COLORS.text.primary }}>
          대표 영상
        </h2>
        <div className="space-y-4">
          {(actor.showreels ?? []).length === 0 ? (
            <p style={{ color: COLORS.text.disabled }}>등록된 대표 영상이 없습니다.</p>
          ) : (
            (actor.showreels ?? []).map((showreel) => (
              <div key={showreel.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 mb-2">
                  {showreel.thumbnail ? (
                    <Image
                      src={showreel.thumbnail}
                      alt={showreel.title ?? "쇼릴"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <PlayIcon className="w-6 h-6 ml-1" style={{ color: COLORS.text.primary }} />
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-medium" style={{ color: COLORS.text.primary }}>
                  {showreel.title}
                </h3>
                <p className="text-xs" style={{ color: COLORS.text.disabled }}>
                  {showreel.duration}
                </p>
              </div>
            ))
          )}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-100">
        <div className="max-w-lg mx-auto px-5 py-4 flex gap-3">
          <button
            onClick={handleContact}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 border rounded-xl font-medium hover:bg-gray-50 transition-colors"
            style={{ borderColor: COLORS.border.default, color: COLORS.text.tertiary }}
          >
            <PhoneIcon className="w-5 h-5" />
            <span>연락처 보기</span>
          </button>
          <button
            onClick={() => {
              const isLoggedIn = localStorage.getItem("onboarding_step1");
              if (!isLoggedIn) {
                router.push("/login");
                return;
              }
              setShowCastingModal(true);
            }}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium hover:opacity-90 transition-colors"
            style={{ backgroundColor: COLORS.accent.teal, color: COLORS.background.primary }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>섭외 요청</span>
          </button>
        </div>
      </div>

      {/* 연락처 모달 */}
      <ContactInfoModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        phone="010-1234-5678"
        email="actor@example.com"
      />

      {/* 섭외 요청 모달 */}
      <CastingRequestModal
        isOpen={showCastingModal}
        onClose={() => setShowCastingModal(false)}
        onSubmit={handleCastingRequest}
        actorName={actor?.name ?? ""}
        isSubmitting={isContacting}
      />
    </PageLayout>
  );
}
