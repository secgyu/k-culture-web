"use client";

import Image from "next/image";

import { XIcon } from "@/components/common/Misc/Icons";

import { useCompareStore } from "@/stores/useCompareStore";

export function CompareFloatingBar() {
  const { actors, removeActor, clearAll, openModal } = useCompareStore();

  if (actors.length === 0) return null;

  return (
    <div className="animate-slide-up fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <div className="bg-luxury-secondary border-gold/30 shadow-gold/10 flex items-center gap-6 rounded-2xl border px-6 py-4 shadow-2xl">
        <div className="flex items-center gap-3">
          {actors.map((actor) => (
            <div key={actor.id} className="group relative">
              <div className="border-gold/50 h-14 w-14 overflow-hidden rounded-xl border-2 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={`https://images.unsplash.com/photo-${1507003211169 + actor.id}?w=100&h=100&fit=crop&crop=face`}
                  alt={actor.name}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <button
                onClick={() => removeActor(actor.id)}
                aria-label={`${actor.name} 비교에서 제거`}
                className="bg-luxury-black border-border absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:border-red-500 hover:bg-red-500"
              >
                <XIcon className="text-ivory h-3 w-3" />
              </button>
              <p className="text-caption text-warm-gray absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {actor.name}
              </p>
            </div>
          ))}

          {Array.from({ length: 4 - actors.length }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="border-border flex h-14 w-14 items-center justify-center rounded-xl border-2 border-dashed"
            >
              <span className="text-muted-gray text-caption">+</span>
            </div>
          ))}
        </div>

        <div className="bg-border h-10 w-px" />

        <div className="flex items-center gap-3">
          <span className="text-body-sm text-warm-gray">
            <span className="text-gold font-semibold">{actors.length}</span>/4명 선택
          </span>

          <button
            onClick={clearAll}
            className="text-body-sm text-muted-gray hover:text-warm-gray px-4 py-2 transition-colors duration-200"
          >
            초기화
          </button>

          <button
            onClick={openModal}
            disabled={actors.length < 2}
            className="bg-gold text-luxury-black text-body-sm hover:bg-gold-light rounded-xl px-6 py-2.5 font-semibold transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            비교하기
          </button>
        </div>
      </div>
    </div>
  );
}
