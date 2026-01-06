"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { DashboardLayout, DarkCard, GoldButton } from "@/components/common";
import { useGetMyProfile, useUpdateMyProfile } from "@/src/users/users";
import { useImageUpload } from "@/lib/hooks";
import { Spinner } from "@/components/ui";
import { ProfileImageUpload } from "./_components/ProfileImageUpload";
import { BasicInfoForm } from "./_components/BasicInfoForm";
import { ContactForm } from "./_components/ContactForm";

interface FormData {
  name: string;
  phone: string;
  introduction: string;
  height: string;
  weight: string;
  gender: string;
  birthYear: string;
}

export default function ProfileEditPage() {
  const router = useRouter();
  const { data: profileData, isLoading } = useGetMyProfile();
  const updateProfileMutation = useUpdateMyProfile();

  const { imageUrl, handleImageChange } = useImageUpload(profileData?.data?.profileImage || "");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    introduction: "",
    height: "",
    weight: "",
    gender: "남성",
    birthYear: "1995",
  });

  const handleChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  useEffect(() => {
    if (profileData?.data) {
      const p = profileData.data;
      setFormData({
        name: p.name || "",
        phone: p.phone || "",
        introduction: p.bio || "",
        height: p.height ? String(p.height) : "",
        weight: p.weight ? String(p.weight) : "",
        gender: "남성",
        birthYear: "1995",
      });
    }
  }, [profileData, setFormData]);

  const handleSave = async () => {
    updateProfileMutation.mutate(
      {
        data: {
          name: formData.name,
          phone: formData.phone,
          bio: formData.introduction,
          height: formData.height ? Number(formData.height) : undefined,
          weight: formData.weight ? Number(formData.weight) : undefined,
        },
      },
      {
        onSuccess: () => router.push("/profile"),
      }
    );
  };

  if (isLoading) {
    return (
      <DashboardLayout userType="actor">
        <div className="flex items-center justify-center h-64">
          <Spinner size="lg" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userType="actor">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ivory">프로필 수정</h1>
        </div>

        <ProfileImageUpload imageUrl={imageUrl} onImageChange={handleImageChange} />

        <DarkCard>
          <h2 className="text-lg font-semibold text-ivory mb-6">기본 정보</h2>
          <BasicInfoForm formData={formData} onChange={handleChange} />
        </DarkCard>

        <DarkCard>
          <h2 className="text-lg font-semibold text-ivory mb-6">연락처</h2>
          <ContactForm phone={formData.phone} onChange={handleChange} />
        </DarkCard>

        <div className="flex gap-3">
          <GoldButton variant="secondary" fullWidth onClick={() => router.back()}>
            취소
          </GoldButton>
          <GoldButton fullWidth loading={updateProfileMutation.isPending} onClick={handleSave}>
            저장
          </GoldButton>
        </div>
      </div>
    </DashboardLayout>
  );
}
