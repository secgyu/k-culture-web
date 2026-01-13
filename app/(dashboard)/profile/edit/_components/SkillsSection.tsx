"use client";

import { Controller, UseFormReturn } from "react-hook-form";

import { cn } from "@/lib/utils";

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

interface SkillsSectionProps {
  form: UseFormReturn<ProfileFormData>;
}

const SKILL_OPTIONS = [
  "액션",
  "코미디",
  "로맨스",
  "드라마",
  "스릴러",
  "뮤지컬",
  "춤",
  "노래",
  "악기연주",
  "무술",
  "검술",
  "수영",
  "승마",
  "스포츠",
  "성우",
];

const LANGUAGE_OPTIONS = ["한국어", "영어", "일본어", "중국어", "스페인어", "프랑스어", "독일어", "러시아어"];

export function SkillsSection({ form }: SkillsSectionProps) {
  const { control } = form;

  return (
    <div className="space-y-6">
      <Controller
        name="skills"
        control={control}
        render={({ field }) => (
          <ChipSelector label="특기" options={SKILL_OPTIONS} selected={field.value ?? []} onChange={field.onChange} />
        )}
      />

      <Controller
        name="languages"
        control={control}
        render={({ field }) => (
          <ChipSelector
            label="언어"
            options={LANGUAGE_OPTIONS}
            selected={field.value ?? []}
            onChange={field.onChange}
          />
        )}
      />
    </div>
  );
}

interface ChipSelectorProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (value: string[]) => void;
}

function ChipSelector({ label, options, selected, onChange }: ChipSelectorProps) {
  const handleToggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div>
      <label className="text-ivory mb-3 block text-sm font-medium">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleToggle(option)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                isSelected
                  ? "bg-gold text-luxury-black"
                  : "bg-luxury-tertiary text-warm-gray hover:bg-luxury-tertiary/80"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
