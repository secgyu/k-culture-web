"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetActorDetail, useContactActor } from "@/src/actors/actors";
import { ChevronLeftIcon, ShareIcon, PlayIcon, PhoneIcon } from "@/app/components/Icons";
import { PageLayout } from "@/app/components/PageLayout";
import type { FilmographyItem } from "@/src/model";

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
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-luxury-secondary rounded-2xl p-6 w-full max-w-sm mx-4 shadow-xl border border-border">
        <h3 className="text-heading-md text-ivory mb-4">연락처 정보</h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 p-3 bg-luxury-tertiary rounded-xl">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <PhoneIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-caption text-muted-gray">전화번호</p>
              <p className="font-medium text-ivory">{phone || "010-****-****"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-luxury-tertiary rounded-xl">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-caption text-muted-gray">이메일</p>
              <p className="font-medium text-ivory">{email || "actor@example.com"}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-gold text-luxury-black font-medium rounded-xl hover:bg-gold-light transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-[0.98]"
        >
          확인
        </button>
      </div>
    </div>
  );
}

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
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-luxury-secondary rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl border border-border">
        <h3 className="text-heading-md text-ivory mb-2">섭외 요청</h3>
        <p className="text-body-sm text-muted-gray mb-4">{actorName}님에게 섭외 요청을 보냅니다</p>

        <div className="mb-4">
          <label className="text-body-sm font-medium text-warm-gray mb-2 block">메시지</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="프로젝트 소개와 함께 섭외 의사를 전달해주세요"
            className="w-full h-32 px-4 py-3 bg-luxury-tertiary border border-border rounded-xl text-base text-ivory placeholder-muted-gray resize-none focus:outline-none focus:border-gold"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-border text-warm-gray font-medium rounded-xl hover:bg-luxury-tertiary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-[0.98]"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            disabled={!message.trim() || isSubmitting}
            className="flex-1 py-3 bg-gold text-luxury-black font-medium rounded-xl hover:bg-gold-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-[0.98]"
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
      <div className="h-[480px] bg-luxury-secondary" />
      <section className="px-5 py-8">
        <div className="h-6 w-32 bg-luxury-secondary rounded mb-6" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="w-16 h-22 bg-luxury-secondary rounded-lg" />
              <div className="flex-1">
                <div className="h-3 w-12 bg-luxury-secondary rounded mb-2" />
                <div className="h-4 w-3/4 bg-luxury-secondary rounded mb-2" />
                <div className="h-3 w-1/2 bg-luxury-secondary rounded" />
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
          <p className="text-muted-gray">배우 정보를 찾을 수 없습니다.</p>
          <Link href="/actor-search" className="mt-4 underline text-gold hover:text-gold-light">
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
            <div className="w-full h-full bg-luxury-tertiary" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>

        <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-4 pt-12 pb-4">
          <button
            onClick={() => router.back()}
            aria-label="뒤로 가기"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 hover:bg-white/30 active:scale-[0.95]"
          >
            <ChevronLeftIcon className="w-6 h-6 text-luxury-black" />
          </button>
          <button
            aria-label="공유하기"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 hover:bg-white/30 active:scale-[0.95]"
          >
            <ShareIcon className="w-5 h-5 text-luxury-black" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 text-center">
          <h1 className="text-display-sm text-white mb-2">{actor.name}</h1>
          <p className="text-white/80 text-body-sm mb-3">
            {actor.birthYear}년생 · 필모 {actor.filmographyCount ?? 0}편
          </p>
          <p className="text-body-sm text-gold-light">{actor.description}</p>
        </div>
      </section>

      <section className="px-5 py-8">
        <h2 className="text-heading-md text-ivory mb-6">필모그래피</h2>

        {groupedFilmography.length === 0 ? (
          <p className="text-center py-8 text-muted-gray">등록된 필모그래피가 없습니다.</p>
        ) : (
          groupedFilmography.map(({ year, items }) => (
            <div key={year} className="mb-8">
              <h3 className="text-body-md font-semibold mb-4 text-ivory">{year}</h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-luxury-secondary rounded-xl">
                    <div className="w-16 h-22 flex-shrink-0 rounded-lg overflow-hidden bg-luxury-secondary">
                      {item.thumbnail ? (
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          width={64}
                          height={88}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-luxury-tertiary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-caption mb-1 block text-gold">{item.type}</span>
                      <h4 className="text-body-sm font-medium leading-snug mb-1 line-clamp-2 text-ivory">
                        {item.title}
                      </h4>
                      <p className="text-caption text-muted-gray">
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

      <section className="px-5 py-6 border-t border-border">
        <h2 className="text-heading-md text-ivory mb-4">스킬 및 특기</h2>
        <div className="flex flex-wrap gap-2">
          {(actor.skills ?? []).length === 0 ? (
            <p className="text-muted-gray">등록된 스킬이 없습니다.</p>
          ) : (
            (actor.skills ?? []).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-body-sm rounded-full bg-gold/10 border border-gold/30 text-gold"
              >
                {skill}
              </span>
            ))
          )}
        </div>
      </section>

      <section className="px-5 py-6 border-t border-border">
        <h2 className="text-heading-md text-ivory mb-4">대표 영상</h2>
        <div className="space-y-4">
          {(actor.showreels ?? []).length === 0 ? (
            <p className="text-muted-gray">등록된 대표 영상이 없습니다.</p>
          ) : (
            (actor.showreels ?? []).map((showreel) => (
              <div key={showreel.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-luxury-secondary mb-2">
                  {showreel.thumbnail ? (
                    <Image
                      src={showreel.thumbnail}
                      alt={showreel.title ?? "쇼릴"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-luxury-tertiary" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg">
                      <PlayIcon className="w-6 h-6 ml-1 text-luxury-black" />
                    </div>
                  </div>
                </div>
                <h3 className="text-body-sm font-medium text-ivory">{showreel.title}</h3>
                <p className="text-caption text-muted-gray">{showreel.duration}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-20 bg-luxury-secondary border-t border-border">
        <div className="max-w-lg mx-auto px-5 py-4 flex gap-3">
          <button
            onClick={handleContact}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-border rounded-xl font-medium text-warm-gray hover:bg-luxury-tertiary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-[0.98]"
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
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium bg-gold text-luxury-black hover:bg-gold-light transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-[0.98]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>섭외 요청</span>
          </button>
        </div>
      </div>

      <ContactInfoModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        phone="010-1234-5678"
        email="actor@example.com"
      />

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
