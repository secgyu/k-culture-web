"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OnboardingLayout } from "@/app/(onboarding)/onboarding/_components";
import { DarkInput, DarkSelect } from "@/components/common";
import { Button } from "@/components/ui";
import { useOnboardingStore } from "@/stores/useOnboardingStore";
import { GENDER_SELECT_OPTIONS, BIRTH_YEAR_OPTIONS } from "@/lib/constants";
import { onboardingStep1Schema, type OnboardingStep1Data } from "@/lib/validations";

export default function ActorOnboardingStep1() {
  const router = useRouter();
  const { data, updateData } = useOnboardingStore();

  const form = useForm<OnboardingStep1Data>({
    resolver: zodResolver(onboardingStep1Schema),
    defaultValues: {
      name: data.name || "",
      gender: data.gender || "",
      birthYear: data.birthYear || "",
      height: data.height || "",
      weight: data.weight || "",
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = handleSubmit((formData) => {
    updateData(formData);
    router.push("/onboarding/actor/step2");
  });

  useEffect(() => {
    localStorage.setItem("onboarding_step1", "visited");
  }, []);

  return (
    <OnboardingLayout
      currentStep={1}
      totalSteps={3}
      title="기본 정보를 입력해주세요"
      subtitle="활동에 사용할 정보를 입력해주세요"
    >
      <form onSubmit={onSubmit}>
        <div className="space-y-6">
          <DarkInput
            label="활동명"
            placeholder="활동명 또는 본명을 입력하세요"
            {...register("name")}
            error={errors.name?.message}
          />

          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <DarkSelect
                label="성별"
                placeholder="성별을 선택하세요"
                options={GENDER_SELECT_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                error={errors.gender?.message}
              />
            )}
          />

          <Controller
            name="birthYear"
            control={control}
            render={({ field }) => (
              <DarkSelect
                label="출생년도"
                placeholder="출생년도를 선택하세요"
                options={BIRTH_YEAR_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                error={errors.birthYear?.message}
              />
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <DarkInput
              label="키 (선택)"
              placeholder="cm"
              type="number"
              {...register("height")}
              error={errors.height?.message}
            />
            <DarkInput
              label="몸무게 (선택)"
              placeholder="kg"
              type="number"
              {...register("weight")}
              error={errors.weight?.message}
            />
          </div>

          <div className="pt-4">
            <Button type="submit" variant="gold" fullWidth disabled={!isValid}>
              다음
            </Button>
          </div>
        </div>
      </form>
    </OnboardingLayout>
  );
}
