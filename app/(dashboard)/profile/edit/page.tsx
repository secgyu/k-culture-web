"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DashboardLayout, DarkCard, GoldButton, DarkInput, DarkSelect, DarkTextarea } from "@/app/components";
import { CameraIcon } from "@/app/components/Icons";

const GENDER_OPTIONS = [
  { value: "남성", label: "남성" },
  { value: "여성", label: "여성" },
];

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 15; i >= currentYear - 80; i--) {
    years.push({ value: String(i), label: `${i}년` });
  }
  return years;
};

export default function ProfileEditPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 임시 초기 데이터
  const [profileImage, setProfileImage] = useState<string>(
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  );
  const [name, setName] = useState("김배우");
  const [gender, setGender] = useState("남성");
  const [birthYear, setBirthYear] = useState("1995");
  const [height, setHeight] = useState("178");
  const [weight, setWeight] = useState("68");
  const [introduction, setIntroduction] = useState("깊은 눈빛으로 서사를 만드는 배우입니다");
  const [phone, setPhone] = useState("010-1234-5678");
  const [loading, setLoading] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // TODO: API 연동
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout userType="actor">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ivory">프로필 수정</h1>
        </div>

        <DarkCard>
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={handleImageClick}
              className="relative w-32 h-32 rounded-full overflow-hidden group"
            >
              <Image src={profileImage} alt="프로필 이미지" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <CameraIcon className="w-8 h-8 text-white" />
              </div>
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            <p className="mt-3 text-sm text-muted-foreground">클릭하여 사진 변경</p>
          </div>
        </DarkCard>

        <DarkCard>
          <h2 className="text-lg font-semibold text-ivory mb-6">기본 정보</h2>
          <div className="space-y-5">
            <DarkInput label="활동명" value={name} onChange={(e) => setName(e.target.value)} />

            <div className="grid grid-cols-2 gap-4">
              <DarkSelect label="성별" options={GENDER_OPTIONS} value={gender} onChange={setGender} />
              <DarkSelect label="출생년도" options={generateYears()} value={birthYear} onChange={setBirthYear} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <DarkInput label="키 (cm)" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
              <DarkInput label="몸무게 (kg)" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

            <DarkTextarea
              label="한줄 소개"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              rows={3}
              maxLength={100}
              hint={`${introduction.length}/100자`}
            />
          </div>
        </DarkCard>

        <DarkCard>
          <h2 className="text-lg font-semibold text-ivory mb-6">연락처</h2>
          <DarkInput
            label="연락처"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
          />
        </DarkCard>

        <div className="flex gap-3">
          <GoldButton variant="secondary" fullWidth onClick={() => router.back()}>
            취소
          </GoldButton>
          <GoldButton fullWidth loading={loading} onClick={handleSave}>
            저장
          </GoldButton>
        </div>
      </div>
    </DashboardLayout>
  );
}

