"use client";

import { UseFormSetValue, UseFormWatch, FieldErrors } from "react-hook-form";
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
      <label className="flex items-center gap-3 cursor-pointer group">
        <button
          type="button"
          onClick={handleAgreeAll}
          className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
            termsAgreed && privacyAgreed && marketingAgreed
              ? "bg-gold border-gold"
              : "border-muted-gray group-hover:border-warm-gray"
          }`}
        >
          {termsAgreed && privacyAgreed && marketingAgreed && <CheckIcon className="w-3 h-3 text-luxury-black" />}
        </button>
        <span className="text-ivory font-medium">전체 동의</span>
      </label>

      <div className="border-t border-border pt-3 space-y-2">
        <label className="flex items-center gap-3 cursor-pointer group">
          <button
            type="button"
            onClick={() => setValue("termsAgreed", !termsAgreed)}
            className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
              termsAgreed ? "bg-gold border-gold" : "border-muted-gray group-hover:border-warm-gray"
            }`}
          >
            {termsAgreed && <CheckIcon className="w-3 h-3 text-luxury-black" />}
          </button>
          <span className="text-warm-gray text-sm">
            <span className="text-gold">[필수]</span> 서비스 이용약관 동의
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <button
            type="button"
            onClick={() => setValue("privacyAgreed", !privacyAgreed)}
            className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
              privacyAgreed ? "bg-gold border-gold" : "border-muted-gray group-hover:border-warm-gray"
            }`}
          >
            {privacyAgreed && <CheckIcon className="w-3 h-3 text-luxury-black" />}
          </button>
          <span className="text-warm-gray text-sm">
            <span className="text-gold">[필수]</span> 개인정보 처리방침 동의
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <button
            type="button"
            onClick={() => setValue("marketingAgreed", !marketingAgreed)}
            className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
              marketingAgreed ? "bg-gold border-gold" : "border-muted-gray group-hover:border-warm-gray"
            }`}
          >
            {marketingAgreed && <CheckIcon className="w-3 h-3 text-luxury-black" />}
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
