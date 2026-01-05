"use client";

import Image from "next/image";
import { useCompareStore } from "@/stores/useCompareStore";
import { XIcon } from "@/components/common/Misc/Icons";

export function CompareFloatingBar() {
  const { actors, removeActor, clearAll, openModal } = useCompareStore();

  if (actors.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-slide-up">
      <div className="bg-luxury-secondary border border-gold/30 rounded-2xl shadow-2xl shadow-gold/10 px-6 py-4 flex items-center gap-6">
        <div className="flex items-center gap-3">
          {actors.map((actor) => (
            <div key={actor.id} className="relative group">
              <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-gold/50 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={`https://images.unsplash.com/photo-${1507003211169 + actor.id}?w=100&h=100&fit=crop&crop=face`}
                  alt={actor.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <button
                onClick={() => removeActor(actor.id)}
                aria-label={`${actor.name} 비교에서 제거`}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-luxury-black border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-500 hover:border-red-500"
              >
                <XIcon className="w-3 h-3 text-ivory" />
              </button>
              <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-caption text-warm-gray whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {actor.name}
              </p>
            </div>
          ))}

          {Array.from({ length: 4 - actors.length }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="w-14 h-14 rounded-xl border-2 border-dashed border-border flex items-center justify-center"
            >
              <span className="text-muted-gray text-caption">+</span>
            </div>
          ))}
        </div>

        <div className="h-10 w-px bg-border" />

        <div className="flex items-center gap-3">
          <span className="text-body-sm text-warm-gray">
            <span className="text-gold font-semibold">{actors.length}</span>/4명 선택
          </span>

          <button
            onClick={clearAll}
            className="px-4 py-2 text-body-sm text-muted-gray hover:text-warm-gray transition-colors duration-200"
          >
            초기화
          </button>

          <button
            onClick={openModal}
            disabled={actors.length < 2}
            className="px-6 py-2.5 bg-gold text-luxury-black font-semibold text-body-sm rounded-xl hover:bg-gold-light transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            비교하기
          </button>
        </div>
      </div>
    </div>
  );
}
