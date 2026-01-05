"use client";

import Image from "next/image";
import Link from "next/link";
import { CompareActor, useCompareStore } from "@/stores/useCompareStore";
import { XIcon } from "@/components/common/Misc/Icons";

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
    <div className="bg-luxury-secondary rounded-2xl border border-border overflow-hidden flex flex-col">
      <div className="relative aspect-3/4 bg-luxury-tertiary">
        <Image
          src={`https://images.unsplash.com/photo-${1507003211169 + actor.id}?w=400&h=500&fit=crop&crop=face`}
          alt={actor.name}
          fill
          className="object-cover"
        />
        <button
          onClick={() => removeActor(actor.id)}
          aria-label={`${actor.name} 비교에서 제거`}
          className="absolute top-3 right-3 w-8 h-8 bg-luxury-black/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
        >
          <XIcon className="w-4 h-4 text-ivory" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <h3 className="text-heading-lg text-white">{actor.name}</h3>
          <p className="text-body-sm text-white/80">{actor.gender}</p>
        </div>
      </div>

      <div className="p-4 space-y-4 flex-1">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-luxury-tertiary rounded-lg p-2">
            <p className="text-caption text-muted-gray">나이</p>
            <p className="text-body-sm font-medium text-ivory">{actor.age}세</p>
          </div>
          <div className="bg-luxury-tertiary rounded-lg p-2">
            <p className="text-caption text-muted-gray">키</p>
            <p className="text-body-sm font-medium text-ivory">{actor.height}cm</p>
          </div>
          <div className="bg-luxury-tertiary rounded-lg p-2">
            <p className="text-caption text-muted-gray">몸무게</p>
            <p className="text-body-sm font-medium text-ivory">{actor.weight}kg</p>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-caption text-muted-gray">필모그래피</span>
            <span className="text-body-sm font-semibold text-gold">{sampleData.filmographyCount}편</span>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-caption text-muted-gray mb-2">대표작</p>
          <div className="space-y-1">
            {sampleData.works.map((work, i) => (
              <p key={i} className="text-body-sm text-warm-gray truncate">
                • {work}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-caption text-muted-gray mb-2">특기/자격증</p>
          <div className="flex flex-wrap gap-1">
            {sampleData.skills.map((skill, i) => (
              <span key={i} className="px-2 py-1 bg-gold/10 border border-gold/30 text-gold text-caption rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-caption text-muted-gray mb-2">연락처</p>
          <p className="text-body-sm text-warm-gray">{sampleData.phone}</p>
          <p className="text-body-sm text-warm-gray truncate">{sampleData.email}</p>
        </div>
      </div>

      <div className="p-4 pt-0">
        <Link
          href={`/actors/${actor.id}`}
          className="block w-full py-3 text-center text-body-sm font-medium text-gold border border-gold/30 rounded-xl hover:bg-gold/10 transition-colors duration-200"
        >
          프로필 상세보기
        </Link>
      </div>
    </div>
  );
}
