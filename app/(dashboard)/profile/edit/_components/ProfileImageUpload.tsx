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
        <button type="button" onClick={handleClick} className="relative w-32 h-32 rounded-full overflow-hidden group">
          <Image
            src={imageUrl || "https://via.placeholder.com/128"}
            alt="프로필 이미지"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <CameraIcon className="w-8 h-8 text-white" />
          </div>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        <p className="mt-3 text-sm text-muted-foreground">클릭하여 사진 변경</p>
      </div>
    </DarkCard>
  );
}
