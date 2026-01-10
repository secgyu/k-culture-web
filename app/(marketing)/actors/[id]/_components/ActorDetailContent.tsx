"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { PageLayout } from "@/components/common";

import { useAuthStore } from "@/stores/useAuthStore";

import { useContactActor, useGetActorDetail } from "@/src/actors/actors";

import { ActorProfileHeader, CastingRequestModal, ContactInfoModal, FilmographySection, ShowreelSection } from "./";

function ActorDetailSkeleton() {
  return (
    <PageLayout className="animate-pulse pb-24">
      <div className="bg-luxury-secondary h-[480px]" />
      <section className="px-5 py-8">
        <div className="bg-luxury-secondary mb-6 h-6 w-32 rounded" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="bg-luxury-secondary h-22 w-16 rounded-lg" />
              <div className="flex-1">
                <div className="bg-luxury-secondary mb-2 h-3 w-12 rounded" />
                <div className="bg-luxury-secondary mb-2 h-4 w-3/4 rounded" />
                <div className="bg-luxury-secondary h-3 w-1/2 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

interface ActorDetailContentProps {
  actorId: string;
}

export function ActorDetailContent({ actorId }: ActorDetailContentProps) {
  const router = useRouter();
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCastingModal, setShowCastingModal] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const { data, isLoading } = useGetActorDetail(actorId, {
    query: { enabled: !!actorId },
  });

  const { mutate: contactActor, isPending: isContacting } = useContactActor();

  const actor = data?.data;

  const handleContact = () => {
    if (!isAuthenticated) {
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
          toast.success("섭외 요청이 전송되었습니다!");
        },
        onError: () => {
          toast.error("섭외 요청 전송에 실패했습니다");
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
          <Link href="/actor-search" className="text-gold hover:text-gold-light mt-4 underline">
            돌아가기
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="pb-24">
      <ActorProfileHeader
        name={actor.name}
        birthYear={actor.birthYear}
        filmographyCount={actor.filmographyCount}
        description={actor.description}
        profileImage={actor.profileImage}
      />

      <FilmographySection filmography={actor.filmography} />

      <ShowreelSection showreels={actor.showreels} />

      {actor.skills && actor.skills.length > 0 && (
        <section className="bg-luxury-secondary border-border border-y px-5 py-8">
          <h2 className="text-heading-md text-ivory mb-4">특기</h2>
          <div className="flex flex-wrap gap-2">
            {actor.skills.map((skill, i) => (
              <span key={i} className="bg-luxury-tertiary text-ivory rounded-full px-4 py-2">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      <div className="bg-luxury-black border-border fixed right-0 bottom-0 left-0 z-20 flex gap-3 border-t px-5 py-4">
        <button
          onClick={handleContact}
          className="bg-luxury-tertiary text-ivory hover:bg-opacity-80 flex-1 rounded-xl px-6 py-3 font-medium transition-colors active:scale-[0.98]"
        >
          연락처 보기
        </button>
        <button
          onClick={() => setShowCastingModal(true)}
          className="bg-gold text-luxury-black hover:bg-gold-light flex-1 rounded-xl px-6 py-3 font-medium transition-colors active:scale-[0.98]"
        >
          섭외 요청
        </button>
      </div>

      <ContactInfoModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        phone={actor.name}
        email={`${actor.name.toLowerCase()}@actor.com`}
      />

      <CastingRequestModal
        isOpen={showCastingModal}
        onClose={() => setShowCastingModal(false)}
        onSubmit={handleCastingRequest}
        actorName={actor.name}
        isSubmitting={isContacting}
      />
    </PageLayout>
  );
}
