import { COLORS } from "@/lib/constants";

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function FormLabel({ children, className = "" }: FormLabelProps) {
  return (
    <label className={`text-sm font-medium ${className}`} style={{ color: COLORS.text.secondary }}>
      {children}
    </label>
  );
}
