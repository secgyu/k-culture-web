"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { DashboardLayout, DarkCard, GoldButton } from "@/components/common";
import { useGetMyProfile, useUpdateMyProfile } from "@/src/users/users";
import { useImageUpload } from "@/lib/hooks";
import { Spinner } from "@/components/ui";
import { ProfileImageUpload } from "./_components/ProfileImageUpload";
import { BasicInfoForm } from "./_components/BasicInfoForm";
import { ContactForm } from "./_components/ContactForm";
import { profileFormSchema, type ProfileFormData } from "@/lib/validations";

export default function ProfileEditPage() {
  const router = useRouter();
  const { data: profileData, isLoading } = useGetMyProfile();
  const updateProfileMutation = useUpdateMyProfile();

  const { imageUrl, handleImageChange } = useImageUpload(profileData?.data?.profileImage || "");

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      introduction: "",
      height: "",
      weight: "",
      gender: "남성",
      birthYear: "1995",
    },
  });

  useEffect(() => {
    if (profileData?.data) {
      const p = profileData.data;
      form.reset({
        name: p.name || "",
        phone: p.phone || "",
        introduction: p.bio || "",
        height: p.height ? String(p.height) : "",
        weight: p.weight ? String(p.weight) : "",
        gender: "남성",
        birthYear: "1995",
      });
    }
  }, [profileData, form]);

  const onSubmit = form.handleSubmit((data) => {
    updateProfileMutation.mutate(
      {
        data: {
          name: data.name,
          phone: data.phone,
          bio: data.introduction,
          height: data.height ? Number(data.height) : undefined,
          weight: data.weight ? Number(data.weight) : undefined,
        },
      },
      {
        onSuccess: () => {
          toast.success("프로필이 저장되었습니다");
          router.push("/profile");
        },
        onError: () => {
          toast.error("프로필 저장에 실패했습니다");
        },
      }
    );
  });

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
      <form onSubmit={onSubmit}>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-ivory">프로필 수정</h1>
          </div>

          <ProfileImageUpload imageUrl={imageUrl} onImageChange={handleImageChange} />

          <DarkCard>
            <h2 className="text-lg font-semibold text-ivory mb-6">기본 정보</h2>
            <BasicInfoForm form={form} />
          </DarkCard>

          <DarkCard>
            <h2 className="text-lg font-semibold text-ivory mb-6">연락처</h2>
            <ContactForm form={form} />
          </DarkCard>

          <div className="flex gap-3">
            <GoldButton type="button" variant="secondary" fullWidth onClick={() => router.back()}>
              취소
            </GoldButton>
            <GoldButton type="submit" fullWidth loading={updateProfileMutation.isPending}>
              저장
            </GoldButton>
          </div>
        </div>
      </form>
    </DashboardLayout>
  );
}
