"use client";

import { useEffect } from "react";

import { XMarkIcon } from "@/components/common/Misc/Icons";

import { ProfilePreview } from "./ProfilePreview";

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
      <div className="animate-fade-in absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="animate-slide-up relative w-full max-w-sm">
          <button
            onClick={onClose}
            className="bg-luxury-secondary text-ivory hover:bg-luxury-tertiary absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            aria-label="미리보기 닫기"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <div className="mb-4 text-center">
            <h2 className="text-heading-md text-ivory">프로필 미리보기</h2>
            <p className="text-body-sm text-muted-gray">실제로 이렇게 보여요</p>
          </div>

          <ProfilePreview />
        </div>
      </div>
    </div>
  );
}
