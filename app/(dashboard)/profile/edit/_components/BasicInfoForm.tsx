import { DarkInput, DarkSelect, DarkTextarea } from "@/components/common";
import { GENDER_SELECT_OPTIONS, BIRTH_YEAR_OPTIONS } from "@/lib/constants";

interface BasicInfoFormProps {
  formData: {
    name: string;
    gender: string;
    birthYear: string;
    height: string;
    weight: string;
    introduction: string;
  };
  onChange: (field: string, value: string) => void;
}

export function BasicInfoForm({ formData, onChange }: BasicInfoFormProps) {
  return (
    <div className="space-y-5">
      <DarkInput label="활동명" value={formData.name} onChange={(e) => onChange("name", e.target.value)} />

      <div className="grid grid-cols-2 gap-4">
        <DarkSelect
          label="성별"
          options={GENDER_SELECT_OPTIONS}
          value={formData.gender}
          onChange={(value) => onChange("gender", value)}
        />
        <DarkSelect
          label="출생년도"
          options={BIRTH_YEAR_OPTIONS}
          value={formData.birthYear}
          onChange={(value) => onChange("birthYear", value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <DarkInput
          label="키 (cm)"
          type="number"
          value={formData.height}
          onChange={(e) => onChange("height", e.target.value)}
        />
        <DarkInput
          label="몸무게 (kg)"
          type="number"
          value={formData.weight}
          onChange={(e) => onChange("weight", e.target.value)}
        />
      </div>

      <DarkTextarea
        label="한줄 소개"
        value={formData.introduction}
        onChange={(e) => onChange("introduction", e.target.value)}
        rows={3}
        maxLength={100}
        hint={`${formData.introduction.length}/100자`}
      />
    </div>
  );
}
