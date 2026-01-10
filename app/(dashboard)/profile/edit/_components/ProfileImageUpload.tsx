import { useRef } from "react";

import Image from "next/image";

import { DarkCard } from "@/components/common";
import { CameraIcon } from "@/components/common/Misc/Icons";

interface ProfileImageUploadProps {
  imageUrl: string;
  onImageChange: (file: File | null) => void;
}

export function ProfileImageUpload({ imageUrl, onImageChange }: ProfileImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    onImageChange(file || null);
  };

  return (
    <DarkCard>
      <div className="flex flex-col items-center">
        <button type="button" onClick={handleClick} className="group relative h-32 w-32 overflow-hidden rounded-full">
          <Image
            src={imageUrl || "https://via.placeholder.com/128"}
            alt="프로필 이미지"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <CameraIcon className="h-8 w-8 text-white" />
          </div>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        <p className="text-muted-gray mt-3 text-sm">클릭하여 사진 변경</p>
      </div>
    </DarkCard>
  );
}
