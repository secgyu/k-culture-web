"use client";

import Image from "next/image";
import { useOnboardingStore } from "@/stores/useOnboardingStore";

interface ProfilePreviewProps {
  className?: string;
  compact?: boolean;
}

export function ProfilePreview({ className = "", compact = false }: ProfilePreviewProps) {
  const { data, getAge } = useOnboardingStore();
  const age = getAge();

  const genderColor = data.gender === "남성" ? "bg-blue-600" : data.gender === "여성" ? "bg-orange-500" : "bg-gray-500";

  return (
    <div className={`bg-luxury-black rounded-2xl overflow-hidden border border-border ${className}`}>
      <div className={`relative ${compact ? "aspect-square" : "aspect-[3/4]"} bg-luxury-secondary`}>
        {data.profileImage ? (
          <Image src={data.profileImage} alt="프로필 미리보기" fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-gray">
            <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p className="text-body-sm">사진을 추가해주세요</p>
          </div>
        )}

        {data.profileImage && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        )}

        {data.profileImage && data.name && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-heading-lg text-white font-bold drop-shadow-lg">{data.name || "이름"}</h3>
              {data.gender && (
                <span className={`px-2 py-0.5 ${genderColor} text-white text-caption rounded`}>{data.gender}</span>
              )}
            </div>
            {age && <p className="text-body-sm text-white/80">{age}세</p>}
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        {!data.profileImage && (
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-heading-md text-ivory font-bold">{data.name || "이름을 입력해주세요"}</h3>
            {data.gender && (
              <span className={`px-2 py-0.5 ${genderColor} text-white text-caption rounded`}>{data.gender}</span>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 text-body-sm text-muted-gray">
          {age ? <span>{age}세</span> : <span className="text-zinc-600">나이 정보 없음</span>}
          {data.height && <span>· {data.height}cm</span>}
          {data.weight && <span>· {data.weight}kg</span>}
        </div>

        {data.introduction ? (
          <p className="text-body-sm text-warm-gray line-clamp-2">{data.introduction}</p>
        ) : (
          <p className="text-body-sm text-zinc-600 italic">자기소개를 입력해주세요</p>
        )}

        {data.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {data.skills.slice(0, 5).map((skill) => (
              <span key={skill} className="px-2 py-0.5 bg-gold/10 text-gold text-caption rounded-full">
                {skill}
              </span>
            ))}
            {data.skills.length > 5 && (
              <span className="px-2 py-0.5 bg-luxury-tertiary text-muted-gray text-caption rounded-full">
                +{data.skills.length - 5}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
