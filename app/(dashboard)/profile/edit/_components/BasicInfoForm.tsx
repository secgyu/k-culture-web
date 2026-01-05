import { DarkInput, DarkSelect, DarkTextarea } from "@/app/components";

const GENDER_OPTIONS = [
  { value: "남성", label: "남성" },
  { value: "여성", label: "여성" },
];

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 15; i >= currentYear - 80; i--) {
    years.push({ value: String(i), label: `${i}년` });
  }
  return years;
};

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
          options={GENDER_OPTIONS}
          value={formData.gender}
          onChange={(value) => onChange("gender", value)}
        />
        <DarkSelect
          label="출생년도"
          options={generateYears()}
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
