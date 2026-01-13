"use client";

import { Controller, UseFormReturn } from "react-hook-form";

import { DarkInput, DarkSelect, DarkTextarea } from "@/components/common";

import { BIRTH_YEAR_OPTIONS } from "@/lib/constants";

interface ProfileFormData {
  stageName: string;
  birthYear?: string;
  introduction?: string;
  nationality?: string;
  height?: string;
  weight?: string;
  agency?: string;
  skills?: string[];
  languages?: string[];
}

interface BasicInfoSectionProps {
  form: UseFormReturn<ProfileFormData>;
}

const NATIONALITY_OPTIONS = [
  { value: "대한민국", label: "대한민국" },
  { value: "미국", label: "미국" },
  { value: "일본", label: "일본" },
  { value: "중국", label: "중국" },
  { value: "기타", label: "기타" },
];

export function BasicInfoSection({ form }: BasicInfoSectionProps) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = form;

  const introduction = watch("introduction") ?? "";

  return (
    <div className="space-y-5">
      <DarkInput
        label="활동명"
        {...register("stageName")}
        error={errors.stageName?.message}
        placeholder="활동명을 입력하세요"
      />

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="birthYear"
          control={control}
          render={({ field }) => (
            <DarkSelect
              label="출생년도"
              options={BIRTH_YEAR_OPTIONS}
              value={field.value ?? ""}
              onChange={field.onChange}
              placeholder="선택"
            />
          )}
        />
        <Controller
          name="nationality"
          control={control}
          render={({ field }) => (
            <DarkSelect
              label="국적"
              options={NATIONALITY_OPTIONS}
              value={field.value ?? ""}
              onChange={field.onChange}
              placeholder="선택"
            />
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <DarkInput label="키 (cm)" type="number" {...register("height")} placeholder="170" />
        <DarkInput label="몸무게 (kg)" type="number" {...register("weight")} placeholder="60" />
      </div>

      <DarkInput label="소속사 (선택)" {...register("agency")} placeholder="소속사가 있다면 입력하세요" />

      <DarkTextarea
        label="한줄 소개"
        {...register("introduction")}
        rows={3}
        maxLength={500}
        hint={`${introduction.length}/500자`}
        placeholder="자신을 소개해주세요"
      />
    </div>
  );
}
