"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { Spinner } from "@/components/ui";

import { DarkCard } from "@/components/common";
import { CameraIcon } from "@/components/common/Misc/Icons";

interface ProfileImageUploadProps {
  imageUrl: string;
  onImageChange: (file: File | null) => void;
  isUploading?: boolean;
}

export function ProfileImageUpload({ imageUrl, onImageChange, isUploading }: ProfileImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleClick = () => {
    if (isUploading) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange(file);
    } else {
      setPreviewUrl(null);
      onImageChange(null);
    }
  };

  const displayUrl = previewUrl || imageUrl;
  const hasImage = !!displayUrl;

  return (
    <DarkCard>
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={handleClick}
          disabled={isUploading}
          className="bg-luxury-tertiary group relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full disabled:cursor-not-allowed"
        >
          {hasImage ? (
            <Image src={displayUrl} alt="프로필 이미지" fill className="object-cover" unoptimized />
          ) : (
            <div className="text-muted-gray flex flex-col items-center">
              <CameraIcon className="h-10 w-10" />
              <span className="mt-1 text-xs">사진 추가</span>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            {isUploading ? <Spinner size="md" className="text-white" /> : <CameraIcon className="h-8 w-8 text-white" />}
          </div>
          {isUploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <Spinner size="md" className="text-white" />
            </div>
          )}
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        <p className="text-muted-gray mt-3 text-sm">{isUploading ? "업로드 중..." : "클릭하여 사진 변경"}</p>
      </div>
    </DarkCard>
  );
}
