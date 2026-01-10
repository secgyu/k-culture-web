import Image from "next/image";

import { PlayIcon } from "@/components/common/Misc/Icons";

import type { ShowreelItem } from "@/src/model";

interface ShowreelSectionProps {
  showreels?: ShowreelItem[];
}

export function ShowreelSection({ showreels }: ShowreelSectionProps) {
  if (!showreels || showreels.length === 0) return null;

  return (
    <section className="bg-luxury-secondary border-border border-y px-5 py-8">
      <h2 className="text-heading-md text-ivory mb-4">쇼릴</h2>
      <div className="space-y-4">
        {showreels.map((reel) => (
          <div key={reel.id} className="bg-luxury-tertiary group relative overflow-hidden rounded-2xl">
            <div className="relative aspect-video">
              <Image
                src={reel.thumbnail || "/placeholder.svg"}
                alt={reel.title || "쇼릴"}
                fill
                className="object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                <div className="bg-gold/90 group-hover:bg-gold flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                  <PlayIcon className="text-luxury-black ml-1 h-8 w-8" />
                </div>
              </button>
            </div>
            <div className="p-4">
              <p className="text-ivory font-medium">{reel.title}</p>
              <p className="text-body-sm text-muted-gray">{reel.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
