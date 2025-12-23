import { COLORS } from "@/lib/constants";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  variant?: "underline" | "box";
  className?: string;
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  variant = "underline",
  className = "",
}: TextInputProps) {
  const baseStyles = "text-base outline-none";
  const variantStyles = variant === "box" ? "w-full px-4 py-3 rounded-xl border" : "w-full";

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${baseStyles} ${variantStyles} ${className}`}
      style={{
        color: COLORS.text.primary,
        ...(variant === "box" && { borderColor: COLORS.border.default }),
      }}
    />
  );
}
