"use client";

import Image from "next/image";
import Link from "next/link";

import { XIcon } from "@/components/common/Misc/Icons";

import { CompareActor, useCompareStore } from "@/stores/useCompareStore";

interface CompareCardProps {
  actor: CompareActor;
}

export function CompareCard({ actor }: CompareCardProps) {
  const { removeActor } = useCompareStore();

  // 샘플 데이터 (실제로는 API에서 가져옴)
  const sampleData = {
    filmographyCount: Math.floor(Math.random() * 20) + 1,
    works: ["단편영화 <우리 사이>", "웹드라마 <청춘시대>", "광고 <삼성전자>"].slice(0, 3),
    skills: ["연기", "춤", "노래", "영어"].slice(0, Math.floor(Math.random() * 4) + 1),
    phone: "010-****-" + String(Math.floor(Math.random() * 10000)).padStart(4, "0"),
    email: `${actor.name.replace(/\s/g, "").toLowerCase()}@email.com`,
  };

  return (
    <div className="bg-luxury-secondary border-border flex flex-col overflow-hidden rounded-2xl border">
      <div className="bg-luxury-tertiary relative aspect-3/4">
        <Image
          src={`https://images.unsplash.com/photo-${1507003211169 + actor.id}?w=400&h=500&fit=crop&crop=face`}
          alt={actor.name}
          fill
          className="object-cover"
        />
        <button
          onClick={() => removeActor(actor.id)}
          aria-label={`${actor.name} 비교에서 제거`}
          className="bg-luxury-black/70 absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-colors duration-200 hover:bg-red-500"
        >
          <XIcon className="text-ivory h-4 w-4" />
        </button>
        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <h3 className="text-heading-lg text-white">{actor.name}</h3>
          <p className="text-body-sm text-white/80">{actor.gender}</p>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-luxury-tertiary rounded-lg p-2">
            <p className="text-caption text-muted-gray">나이</p>
            <p className="text-body-sm text-ivory font-medium">{actor.age}세</p>
          </div>
          <div className="bg-luxury-tertiary rounded-lg p-2">
            <p className="text-caption text-muted-gray">키</p>
            <p className="text-body-sm text-ivory font-medium">{actor.height}cm</p>
          </div>
          <div className="bg-luxury-tertiary rounded-lg p-2">
            <p className="text-caption text-muted-gray">몸무게</p>
            <p className="text-body-sm text-ivory font-medium">{actor.weight}kg</p>
          </div>
        </div>

        <div className="border-border border-t pt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-caption text-muted-gray">필모그래피</span>
            <span className="text-body-sm text-gold font-semibold">{sampleData.filmographyCount}편</span>
          </div>
        </div>

        <div className="border-border border-t pt-4">
          <p className="text-caption text-muted-gray mb-2">대표작</p>
          <div className="space-y-1">
            {sampleData.works.map((work, i) => (
              <p key={i} className="text-body-sm text-warm-gray truncate">
                • {work}
              </p>
            ))}
          </div>
        </div>

        <div className="border-border border-t pt-4">
          <p className="text-caption text-muted-gray mb-2">특기/자격증</p>
          <div className="flex flex-wrap gap-1">
            {sampleData.skills.map((skill, i) => (
              <span key={i} className="bg-gold/10 border-gold/30 text-gold text-caption rounded-full border px-2 py-1">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-border border-t pt-4">
          <p className="text-caption text-muted-gray mb-2">연락처</p>
          <p className="text-body-sm text-warm-gray">{sampleData.phone}</p>
          <p className="text-body-sm text-warm-gray truncate">{sampleData.email}</p>
        </div>
      </div>

      <div className="p-4 pt-0">
        <Link
          href={`/actors/${actor.id}`}
          className="text-body-sm text-gold border-gold/30 hover:bg-gold/10 block w-full rounded-xl border py-3 text-center font-medium transition-colors duration-200"
        >
          프로필 상세보기
        </Link>
      </div>
    </div>
  );
}
