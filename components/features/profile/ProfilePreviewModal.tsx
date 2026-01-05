"use client";

import { useEffect } from "react";
import { ProfilePreview } from "./ProfilePreview";
import { XMarkIcon } from "@/components/common/Misc/Icons";

interface ProfilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfilePreviewModal({ isOpen, onClose }: ProfilePreviewModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="relative w-full max-w-sm animate-slide-up">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-luxury-secondary text-ivory hover:bg-luxury-tertiary transition-colors"
            aria-label="미리보기 닫기"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          <div className="text-center mb-4">
            <h2 className="text-heading-md text-ivory">프로필 미리보기</h2>
            <p className="text-body-sm text-muted-gray">실제로 이렇게 보여요</p>
          </div>

          <ProfilePreview />
        </div>
      </div>
    </div>
  );
}
