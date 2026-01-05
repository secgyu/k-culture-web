import { useState, useCallback } from "react";

interface FormData {
  name: string;
  phone: string;
  introduction: string;
  height: string;
  weight: string;
  gender: string;
  birthYear: string;
}

export function useProfileForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    introduction: "",
    height: "",
    weight: "",
    gender: "남성",
    birthYear: "1995",
  });

  const handleChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  return {
    formData,
    setFormData,
    handleChange,
  };
}

