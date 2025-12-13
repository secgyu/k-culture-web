"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface Actor {
  id: string;
  name: string;
  imageUrl: string;
  age: string;
  filmography: number;
  tags: string[];
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

  // Keyboard navigation
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

  // Get side cards
  const getCardIndex = (offset: number) => {
    const index = activeIndex + offset;
    if (index < 0) return actors.length + index;
    if (index >= actors.length) return index - actors.length;
    return index;
  };

  const leftCard = actors[getCardIndex(-1)];
  const rightCard = actors[getCardIndex(1)];

  return (
    <div className="w-full">
      {/* Main Carousel Area */}
      <div
        className="relative flex items-center justify-center gap-3 px-4 py-6"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Side Card */}
        <button
          onClick={goToPrev}
          className="hidden sm:block shrink-0 w-20 md:w-24 opacity-50 hover:opacity-70 transition-opacity"
        >
          <div className="aspect-3/4 relative rounded-lg overflow-hidden bg-gray-200">
            <Image src={leftCard.imageUrl} alt={leftCard.name} fill className="object-cover" sizes="96px" />
          </div>
        </button>

        {/* Center Active Card */}
        <div className="w-full max-w-[280px] md:max-w-[320px] shrink-0">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4">
              <div className="aspect-3/4 relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={activeActor.imageUrl}
                  alt={activeActor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                />
              </div>

              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-900">{activeActor.name}</h2>
                <p className="mt-1 text-sm text-gray-500">
                  {activeActor.age} · 필모 {activeActor.filmography}편
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {activeActor.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Card */}
        <button
          onClick={goToNext}
          className="hidden sm:block shrink-0 w-20 md:w-24 opacity-50 hover:opacity-70 transition-opacity"
        >
          <div className="aspect-3/4 relative rounded-lg overflow-hidden bg-gray-200">
            <Image src={rightCard.imageUrl} alt={rightCard.name} fill className="object-cover" sizes="96px" />
          </div>
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="max-w-lg mx-auto px-4 py-4">
        <div className="flex justify-center gap-2 overflow-x-auto hide-scrollbar">
          {actors.map((actor, index) => (
            <button
              key={actor.id}
              onClick={() => setActiveIndex(index)}
              className={`
                relative shrink-0 flex flex-col items-center gap-1 p-1 rounded-lg transition-all
                ${index === activeIndex ? "bg-gray-100" : "opacity-60 hover:opacity-100"}
              `}
            >
              <div
                className={`
                w-12 h-12 rounded-full overflow-hidden border-2 transition-all
                ${index === activeIndex ? "border-gray-800" : "border-transparent"}
              `}
              >
                <img src={actor.imageUrl} alt={actor.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] text-gray-600 font-medium truncate max-w-[50px]">{actor.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Swipe Hint (Mobile) */}
      <div className="sm:hidden flex justify-center gap-1.5 pb-4">
        {actors.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              h-1.5 rounded-full transition-all duration-300
              ${index === activeIndex ? "bg-gray-800 w-6" : "bg-gray-300 w-1.5 hover:bg-gray-400"}
            `}
            aria-label={`${index + 1}번째 배우로 이동`}
          />
        ))}
      </div>

      {/* Navigation Arrows (Desktop) */}
      <div className="hidden sm:flex justify-center gap-4 pb-4">
        <button
          onClick={goToPrev}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="이전 배우"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="다음 배우"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
