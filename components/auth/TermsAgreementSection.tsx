"use client";

import { FieldErrors, UseFormSetValue, UseFormWatch } from "react-hook-form";

import { CheckIcon } from "@/components/common/Misc/Icons";

import type { SignupFormData } from "@/lib/validations";

interface TermsAgreementSectionProps {
  watch: UseFormWatch<SignupFormData>;
  setValue: UseFormSetValue<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
}

export function TermsAgreementSection({ watch, setValue, errors }: TermsAgreementSectionProps) {
  const termsAgreed = watch("termsAgreed");
  const privacyAgreed = watch("privacyAgreed");
  const marketingAgreed = watch("marketingAgreed");

  const allAgreed = termsAgreed && privacyAgreed && marketingAgreed;

  const handleAgreeAll = () => {
    const newState = !allAgreed;
    setValue("termsAgreed", newState);
    setValue("privacyAgreed", newState);
    setValue("marketingAgreed", newState);
  };

  return (
    <div className="space-y-3 pt-2">
      <label className="group flex cursor-pointer items-center gap-3">
        <button
          type="button"
          onClick={handleAgreeAll}
          className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${
            termsAgreed && privacyAgreed && marketingAgreed
              ? "bg-gold border-gold"
              : "border-muted-gray group-hover:border-warm-gray"
          }`}
        >
          {termsAgreed && privacyAgreed && marketingAgreed && <CheckIcon className="text-luxury-black h-3 w-3" />}
        </button>
        <span className="text-ivory font-medium">전체 동의</span>
      </label>

      <div className="border-border space-y-2 border-t pt-3">
        <label className="group flex cursor-pointer items-center gap-3">
          <button
            type="button"
            onClick={() => setValue("termsAgreed", !termsAgreed)}
            className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${
              termsAgreed ? "bg-gold border-gold" : "border-muted-gray group-hover:border-warm-gray"
            }`}
          >
            {termsAgreed && <CheckIcon className="text-luxury-black h-3 w-3" />}
          </button>
          <span className="text-warm-gray text-sm">
            <span className="text-gold">[필수]</span> 서비스 이용약관 동의
          </span>
        </label>

        <label className="group flex cursor-pointer items-center gap-3">
          <button
            type="button"
            onClick={() => setValue("privacyAgreed", !privacyAgreed)}
            className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${
              privacyAgreed ? "bg-gold border-gold" : "border-muted-gray group-hover:border-warm-gray"
            }`}
          >
            {privacyAgreed && <CheckIcon className="text-luxury-black h-3 w-3" />}
          </button>
          <span className="text-warm-gray text-sm">
            <span className="text-gold">[필수]</span> 개인정보 처리방침 동의
          </span>
        </label>

        <label className="group flex cursor-pointer items-center gap-3">
          <button
            type="button"
            onClick={() => setValue("marketingAgreed", !marketingAgreed)}
            className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${
              marketingAgreed ? "bg-gold border-gold" : "border-muted-gray group-hover:border-warm-gray"
            }`}
          >
            {marketingAgreed && <CheckIcon className="text-luxury-black h-3 w-3" />}
          </button>
          <span className="text-warm-gray text-sm">
            <span className="text-muted-gray">[선택]</span> 마케팅 정보 수신 동의
          </span>
        </label>
      </div>
      {(errors.termsAgreed || errors.privacyAgreed) && (
        <p className="text-sm text-red-400">{errors.termsAgreed?.message || errors.privacyAgreed?.message}</p>
      )}
    </div>
  );
}
