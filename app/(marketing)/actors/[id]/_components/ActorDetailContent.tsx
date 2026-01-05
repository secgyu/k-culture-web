"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetActorDetail, useContactActor } from "@/src/actors/actors";
import { PageLayout } from "@/components/common";
import {
  ContactInfoModal,
  CastingRequestModal,
  ShowreelSection,
  FilmographySection,
  ActorProfileHeader,
} from "./";

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
        <section className="px-5 py-8 bg-luxury-secondary border-y border-border">
          <h2 className="text-heading-md text-ivory mb-4">특기</h2>
          <div className="flex flex-wrap gap-2">
            {actor.skills.map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-luxury-tertiary rounded-full text-ivory">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-20 px-5 py-4 bg-luxury-black border-t border-border flex gap-3">
        <button
          onClick={handleContact}
          className="flex-1 py-3 px-6 bg-luxury-tertiary text-ivory font-medium rounded-xl hover:bg-opacity-80 transition-colors active:scale-[0.98]"
        >
          연락처 보기
        </button>
        <button
          onClick={() => setShowCastingModal(true)}
          className="flex-1 py-3 px-6 bg-gold text-luxury-black font-medium rounded-xl hover:bg-gold-light transition-colors active:scale-[0.98]"
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
