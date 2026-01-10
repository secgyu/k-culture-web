"use client";

import { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { SAMPLE_WORKS } from "@/lib/constants/images";

export interface Actor {
  id: string;
  name: string;
  imageUrl: string;
  age: string;
  filmography: number;
  tags: string[];
  works?: { name: string; thumbnail: string }[];
}

interface ActorCarouselProps {
  actors: Actor[];
}

export default function ActorCarousel({ actors }: ActorCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const activeActor = actors[activeIndex];

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : actors.length - 1));
  }, [actors.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev < actors.length - 1 ? prev + 1 : 0));
  }, [actors.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }
    if (touchStart - touchEnd < -50) {
      goToPrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  const getCardIndex = (offset: number) => {
    const index = activeIndex + offset;
    if (index < 0) return actors.length + index;
    if (index >= actors.length) return index - actors.length;
    return index;
  };

  const leftCard = actors[getCardIndex(-1)];
  const rightCard = actors[getCardIndex(1)];

  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div
        className="relative flex h-[400px] items-center justify-center gap-3 px-5 py-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button onClick={goToPrev} className="flex h-[332px] w-[184px] shrink-0 flex-col items-center justify-end">
          <div className="absolute bottom-8 z-0 h-[226px] w-40 overflow-hidden rounded-md bg-white">
            <Image src={leftCard.imageUrl} alt={leftCard.name} fill className="object-cover" sizes="160px" />
          </div>
          <div className="bg-warm-gray/15 border-luxury-black/10 relative z-[1] h-[137px] w-full rounded-b-2xl border backdrop-blur" />
        </button>
        <Link
          href={`/actors/${activeActor.id}`}
          className="relative flex h-[400px] w-[230px] shrink-0 cursor-pointer flex-col items-center justify-end"
        >
          <div className="absolute top-0 left-1/2 z-0 h-[283px] w-[200px] -translate-x-1/2 overflow-hidden rounded-md">
            <Image
              src={activeActor.imageUrl}
              alt={activeActor.name}
              fill
              className="object-cover"
              sizes="200px"
              priority
            />
          </div>
          <div className="bg-warm-gray/15 border-luxury-black/10 relative z-[1] h-40 w-full rounded-b-[20px] border backdrop-blur" />
        </Link>
        <button onClick={goToNext} className="flex h-[332px] w-[185px] shrink-0 flex-col items-center justify-end">
          <div className="absolute bottom-8 z-0 h-[226px] w-40 overflow-hidden rounded-md bg-white">
            <Image src={rightCard.imageUrl} alt={rightCard.name} fill className="object-cover" sizes="160px" />
          </div>
          <div className="bg-warm-gray/15 border-luxury-black/10 relative z-[1] h-[137px] w-full rounded-b-2xl border backdrop-blur" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-8 px-5 py-4">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-ivory text-2xl leading-7 font-bold tracking-tight">{activeActor.name}</h2>
          <p className="text-warm-gray text-base tracking-tight">
            {activeActor.age} · 필모 {activeActor.filmography}편
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {activeActor.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gold/10 text-warm-gray rounded px-2 py-1 text-sm font-medium tracking-tight"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="hide-scrollbar flex w-full justify-center gap-1.5 overflow-x-auto">
          {SAMPLE_WORKS.map((work, index) => (
            <div
              key={index}
              className="border-border flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5"
            >
              <div className="bg-luxury-tertiary h-6 w-6 overflow-hidden rounded-full">
                <Image src={work.thumbnail} alt={work.name} width={24} height={24} className="object-cover" />
              </div>
              <span className="text-warm-gray text-xs font-medium tracking-tight">{work.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
