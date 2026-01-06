"use client";

import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OnboardingLayout } from "@/app/(onboarding)/onboarding/_components";
import { GoldButton, DarkInput, DarkSelect } from "@/components/common";
import { FOUNDED_YEAR_OPTIONS, AGENCY_SPECIALTY_OPTIONS } from "@/lib/constants";
import { agencyOnboardingSchema, type AgencyOnboardingData } from "@/lib/validations";

export default function AgencyOnboardingStep1() {
  const router = useRouter();

  const form = useForm<AgencyOnboardingData>({
    resolver: zodResolver(agencyOnboardingSchema),
    defaultValues: {
      agencyName: "",
      representativeName: "",
      foundedYear: "",
      specialty: "",
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = handleSubmit((data) => {
    router.push("/onboarding/agency/complete");
  });

  return (
    <OnboardingLayout
      currentStep={1}
      totalSteps={1}
      title="회사 정보를 입력해주세요"
      subtitle="캐스팅 진행 시 배우에게 보여질 정보입니다"
    >
      <form onSubmit={onSubmit}>
        <div className="space-y-6">
          <DarkInput
            label="회사명"
            placeholder="회사명을 입력하세요"
            {...register("agencyName")}
            error={errors.agencyName?.message}
          />

          <DarkInput
            label="담당자명"
            placeholder="담당자 이름을 입력하세요"
            {...register("representativeName")}
            error={errors.representativeName?.message}
          />

          <Controller
            name="foundedYear"
            control={control}
            render={({ field }) => (
              <DarkSelect
                label="설립연도"
                placeholder="설립연도를 선택하세요"
                options={FOUNDED_YEAR_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                error={errors.foundedYear?.message}
              />
            )}
          />

          <Controller
            name="specialty"
            control={control}
            render={({ field }) => (
              <DarkSelect
                label="주요 분야"
                placeholder="주요 제작 분야를 선택하세요"
                options={AGENCY_SPECIALTY_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                error={errors.specialty?.message}
              />
            )}
          />

          <div className="pt-4">
            <GoldButton type="submit" fullWidth disabled={!isValid}>
              완료
            </GoldButton>
          </div>
        </div>
      </form>
    </OnboardingLayout>
  );
}
