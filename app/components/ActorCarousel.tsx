"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const sampleWorks = [
    {
      name: "나의아저씨",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=48&h=48&fit=crop",
    },
    {
      name: "미스터선샤인",
      thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=48&h=48&fit=crop",
    },
    { name: "시그널", thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=48&h=48&fit=crop" },
    { name: "비밀의숲", thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=48&h=48&fit=crop" },
  ];

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div
        className="relative flex items-center justify-center gap-3 px-5 py-4 h-[400px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button onClick={goToPrev} className="shrink-0 flex flex-col justify-end items-center w-[184px] h-[332px]">
          <div className="absolute w-40 h-[226px] bottom-8 z-0 rounded-md overflow-hidden bg-white">
            <Image src={leftCard.imageUrl} alt={leftCard.name} fill className="object-cover" sizes="160px" />
          </div>
          <div className="relative w-full h-[137px] z-[1] bg-warm-gray/15 border border-luxury-black/10 backdrop-blur rounded-b-2xl" />
        </button>
        <Link
          href={`/actors/${activeActor.id}`}
          className="shrink-0 flex flex-col justify-end items-center relative cursor-pointer w-[230px] h-[400px]"
        >
          <div className="absolute w-[200px] h-[283px] top-0 left-1/2 -translate-x-1/2 z-0 rounded-md overflow-hidden">
            <Image
              src={activeActor.imageUrl}
              alt={activeActor.name}
              fill
              className="object-cover"
              sizes="200px"
              priority
            />
          </div>
          <div className="relative w-full h-40 z-[1] bg-warm-gray/15 border border-luxury-black/10 backdrop-blur rounded-b-[20px]" />
        </Link>
        <button onClick={goToNext} className="shrink-0 flex flex-col justify-end items-center w-[185px] h-[332px]">
          <div className="absolute w-40 h-[226px] bottom-8 z-0 rounded-md overflow-hidden bg-white">
            <Image src={rightCard.imageUrl} alt={rightCard.name} fill className="object-cover" sizes="160px" />
          </div>
          <div className="relative w-full h-[137px] z-[1] bg-warm-gray/15 border border-luxury-black/10 backdrop-blur rounded-b-2xl" />
        </button>
      </div>
      <div className="flex flex-col items-center px-5 py-4 gap-8">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl leading-7 tracking-tight font-bold text-ivory">{activeActor.name}</h2>
          <p className="text-base tracking-tight text-warm-gray">
            {activeActor.age} · 필모 {activeActor.filmography}편
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {activeActor.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm font-medium tracking-tight rounded bg-gold/10 text-warm-gray"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-1.5 overflow-x-auto hide-scrollbar w-full justify-center">
          {sampleWorks.map((work, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-3 py-1.5 shrink-0 border border-border rounded-full"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden bg-luxury-tertiary">
                <Image src={work.thumbnail} alt={work.name} width={24} height={24} className="object-cover" />
              </div>
              <span className="text-xs font-medium tracking-tight text-warm-gray">{work.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
