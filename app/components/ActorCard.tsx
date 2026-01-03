"use client";

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

export default function ActorCard({
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
        actor-card cursor-pointer rounded-2xl bg-luxury-secondary border border-zinc-800 overflow-hidden
        ${isActive ? "actor-card-active w-64 md:w-72 border-gold/30" : "w-24 md:w-28 opacity-70 hover:opacity-90"}
        shrink-0 transition-all duration-300
      `}
    >
      {isActive ? (
        <div className="p-4">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-zinc-800">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 288px"
              priority
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold text-ivory">{name}</h2>
            <p className="mt-1 text-sm text-zinc-400">
              {age} · 필모 {filmography}편
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-gold bg-gold/10 border border-gold/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-2">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg bg-zinc-800">
            <Image src={imageUrl} alt={name} fill className="object-cover" sizes="96px" />
          </div>
        </div>
      )}
    </div>
  );
}
