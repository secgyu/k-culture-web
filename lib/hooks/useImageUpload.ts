import { useState, useCallback } from "react";

interface UseImageUploadReturn {
  imageUrl: string;
  setImageUrl: (url: string) => void;
  handleImageChange: (file: File | null) => void;
  isLoading: boolean;
  error: string | null;
  reset: () => void;
}

export function useImageUpload(initialUrl: string = ""): UseImageUploadReturn {
  const [imageUrl, setImageUrl] = useState<string>(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = useCallback((file: File | null) => {
    if (!file) {
      setError("파일이 선택되지 않았습니다.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("파일 크기는 5MB 이하여야 합니다.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("이미지 파일만 업로드 가능합니다.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
      setIsLoading(false);
    };
    reader.onerror = () => {
      setError("이미지를 읽는 중 오류가 발생했습니다.");
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  }, []);

  const reset = useCallback(() => {
    setImageUrl(initialUrl);
    setError(null);
    setIsLoading(false);
  }, [initialUrl]);

  return {
    imageUrl,
    setImageUrl,
    handleImageChange,
    isLoading,
    error,
    reset,
  };
}

