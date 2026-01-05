import { DarkInput } from "@/components/common";

interface ContactFormProps {
  phone: string;
  onChange: (field: string, value: string) => void;
}

export function ContactForm({ phone, onChange }: ContactFormProps) {
  return (
    <DarkInput
      label="연락처"
      type="tel"
      value={phone}
      onChange={(e) => onChange("phone", e.target.value)}
      placeholder="010-0000-0000"
    />
  );
}
