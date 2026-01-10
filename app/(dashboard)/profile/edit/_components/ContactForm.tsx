import { UseFormReturn } from "react-hook-form";

import { DarkInput } from "@/components/common";

import type { ProfileFormData } from "@/lib/validations";

interface ContactFormProps {
  form: UseFormReturn<ProfileFormData>;
}

export function ContactForm({ form }: ContactFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <DarkInput
      label="연락처"
      type="tel"
      {...register("phone")}
      placeholder="010-0000-0000"
      error={errors.phone?.message}
    />
  );
}
