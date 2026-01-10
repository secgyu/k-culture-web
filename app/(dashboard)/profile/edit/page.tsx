"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button, Spinner } from "@/components/ui";

import { DarkCard, DashboardLayout } from "@/components/common";

import { useImageUpload } from "@/lib/hooks";
import { type ProfileFormData, profileFormSchema } from "@/lib/validations";

import { useGetMyProfile, useUpdateMyProfile } from "@/src/users/users";

import { BasicInfoForm } from "./_components/BasicInfoForm";
import { ContactForm } from "./_components/ContactForm";
import { ProfileImageUpload } from "./_components/ProfileImageUpload";

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
        <div className="flex h-64 items-center justify-center">
          <Spinner size="lg" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userType="actor">
      <form onSubmit={onSubmit}>
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-ivory text-2xl font-bold">프로필 수정</h1>
          </div>

          <ProfileImageUpload imageUrl={imageUrl} onImageChange={handleImageChange} />

          <DarkCard>
            <h2 className="text-ivory mb-6 text-lg font-semibold">기본 정보</h2>
            <BasicInfoForm form={form} />
          </DarkCard>

          <DarkCard>
            <h2 className="text-ivory mb-6 text-lg font-semibold">연락처</h2>
            <ContactForm form={form} />
          </DarkCard>

          <div className="flex gap-3">
            <Button type="button" variant="gold-secondary" fullWidth onClick={() => router.back()}>
              취소
            </Button>
            <Button type="submit" variant="gold" fullWidth loading={updateProfileMutation.isPending}>
              저장
            </Button>
          </div>
        </div>
      </form>
    </DashboardLayout>
  );
}
