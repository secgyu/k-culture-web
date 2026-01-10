"use client";

import { memo } from "react";

import Image from "next/image";

interface ActorCardProps {
  id: string;
  name: string;
  imageUrl: string;
  age: string;
  filmography: number;
  tags: string[];
  isActive?: boolean;
  onClick?: () => void;
}

const ActorCarouselCard = memo(function ActorCarouselCard({
  name,
  imageUrl,
  age,
  filmography,
  tags,
  isActive = false,
  onClick,
}: ActorCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ease-out ${
        isActive
          ? "border-gold/30 w-80 border shadow-[0_20px_40px_-12px_rgba(212,175,55,0.25)] hover:scale-105"
          : "w-36 opacity-70 hover:scale-105 hover:opacity-100"
      } `}
    >
      <div className="bg-luxury-secondary relative aspect-3/4 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          sizes={isActive ? "320px" : "144px"}
          priority={isActive}
        />

        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isActive
              ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90"
              : "bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80"
          } `}
        />

        <div className="absolute right-0 bottom-0 left-0 p-4">
          {isActive ? (
            <div className="text-center">
              <h2 className="text-heading-lg text-white drop-shadow-lg">{name}</h2>
              <p className="text-body-sm mt-1 text-white/80">
                {age} · 필모 {filmography}편
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-caption text-gold border-gold/40 rounded-full border bg-black/40 px-3 py-1 font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-body-sm truncate text-center font-medium text-white drop-shadow-lg">{name}</p>
          )}
        </div>
      </div>
    </div>
  );
});

export default ActorCarouselCard;
