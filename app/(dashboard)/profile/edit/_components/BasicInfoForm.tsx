import { Controller, UseFormReturn } from "react-hook-form";

import { DarkInput, DarkSelect, DarkTextarea } from "@/components/common";

import { BIRTH_YEAR_OPTIONS, GENDER_SELECT_OPTIONS } from "@/lib/constants";
import type { ProfileFormData } from "@/lib/validations";

interface BasicInfoFormProps {
  form: UseFormReturn<ProfileFormData>;
}

export function BasicInfoForm({ form }: BasicInfoFormProps) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = form;
  const introduction = watch("introduction") || "";

  return (
    <div className="space-y-5">
      <div>
        <DarkInput label="활동명" {...register("name")} error={errors.name?.message} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <DarkSelect label="성별" options={GENDER_SELECT_OPTIONS} value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
        <div>
          <Controller
            name="birthYear"
            control={control}
            render={({ field }) => (
              <DarkSelect label="출생년도" options={BIRTH_YEAR_OPTIONS} value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <DarkInput label="키 (cm)" type="number" {...register("height")} error={errors.height?.message} />
        </div>
        <div>
          <DarkInput label="몸무게 (kg)" type="number" {...register("weight")} error={errors.weight?.message} />
        </div>
      </div>

      <div>
        <DarkTextarea
          label="한줄 소개"
          {...register("introduction")}
          rows={3}
          maxLength={100}
          hint={`${introduction.length}/100자`}
          error={errors.introduction?.message}
        />
      </div>
    </div>
  );
}
