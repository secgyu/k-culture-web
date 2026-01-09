"use client";

import Image from "next/image";
import { memo } from "react";

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
      className={`
        group cursor-pointer rounded-2xl overflow-hidden shrink-0
        transition-all duration-300 ease-out
        ${
          isActive
            ? "w-80 border border-gold/30 shadow-[0_20px_40px_-12px_rgba(212,175,55,0.25)] hover:scale-105"
            : "w-36 opacity-70 hover:opacity-100 hover:scale-105"
        }
      `}
    >
      <div className="relative aspect-3/4 w-full overflow-hidden bg-luxury-secondary">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          sizes={isActive ? "320px" : "144px"}
          priority={isActive}
        />

        <div
          className={`
            absolute inset-0 transition-opacity duration-300
            ${
              isActive
                ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90"
                : "bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80"
            }
          `}
        />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          {isActive ? (
            <div className="text-center">
              <h2 className="text-heading-lg text-white drop-shadow-lg">{name}</h2>
              <p className="mt-1 text-body-sm text-white/80">
                {age} · 필모 {filmography}편
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-caption font-medium text-gold bg-black/40 backdrop-blur-sm border border-gold/40 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-body-sm font-medium text-white text-center drop-shadow-lg truncate">{name}</p>
          )}
        </div>
      </div>
    </div>
  );
});

export default ActorCarouselCard;
