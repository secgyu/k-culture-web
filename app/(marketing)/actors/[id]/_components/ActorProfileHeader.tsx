import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon, ShareIcon } from "@/components/common/Misc/Icons";

interface ActorProfileHeaderProps {
  name: string;
  birthYear?: number;
  filmographyCount?: number;
  description?: string;
  profileImage?: string;
}

export function ActorProfileHeader({
  name,
  birthYear,
  filmographyCount,
  description,
  profileImage,
}: ActorProfileHeaderProps) {
  const router = useRouter();

  return (
    <section className="relative h-[480px]">
      <div className="absolute inset-0">
        {profileImage ? (
          <Image src={profileImage} alt={name} fill className="object-cover" priority />
        ) : (
          <div className="w-full h-full bg-luxury-tertiary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-4 pt-12 pb-4">
        <button
          onClick={() => router.back()}
          aria-label="뒤로 가기"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 hover:bg-white/30 active:scale-[0.95]"
        >
          <ChevronLeftIcon className="w-6 h-6 text-luxury-black" />
        </button>
        <button
          aria-label="공유하기"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 hover:bg-white/30 active:scale-[0.95]"
        >
          <ShareIcon className="w-5 h-5 text-luxury-black" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 text-center">
        <h1 className="text-display-sm text-white mb-2">{name}</h1>
        <p className="text-white/80 text-body-sm mb-3">
          {birthYear}년생 · 필모 {filmographyCount ?? 0}편
        </p>
        {description && <p className="text-body-sm text-gold-light">{description}</p>}
      </div>
    </section>
  );
}

