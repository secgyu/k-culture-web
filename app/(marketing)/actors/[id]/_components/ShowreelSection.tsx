import Image from "next/image";
import { PlayIcon } from "@/components/common/Misc/Icons";
import type { ShowreelItem } from "@/src/model";

interface ShowreelSectionProps {
  showreels?: ShowreelItem[];
}

export function ShowreelSection({ showreels }: ShowreelSectionProps) {
  if (!showreels || showreels.length === 0) return null;

  return (
    <section className="px-5 py-8 bg-luxury-secondary border-y border-border">
      <h2 className="text-heading-md text-ivory mb-4">쇼릴</h2>
      <div className="space-y-4">
        {showreels.map((reel) => (
          <div key={reel.id} className="relative bg-luxury-tertiary rounded-2xl overflow-hidden group">
            <div className="relative aspect-video">
              <Image
                src={reel.thumbnail || "/placeholder.svg"}
                alt={reel.title || "쇼릴"}
                fill
                className="object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <PlayIcon className="w-8 h-8 text-luxury-black ml-1" />
                </div>
              </button>
            </div>
            <div className="p-4">
              <p className="font-medium text-ivory">{reel.title}</p>
              <p className="text-body-sm text-muted-gray">{reel.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

