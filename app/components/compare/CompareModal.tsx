"use client";

import { useEffect } from "react";
import { useCompareStore } from "@/stores/useCompareStore";
import { CompareCard } from "./CompareCard";
import { XIcon } from "../Icons";

export function CompareModal() {
  const { actors, isModalOpen, closeModal, clearAll } = useCompareStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal} />
      <div className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-luxury-black rounded-3xl border border-border overflow-hidden animate-slide-up">
        <div className="flex items-center justify-between px-8 py-6 border-b border-border bg-luxury-secondary">
          <div>
            <h2 className="text-heading-xl text-ivory">배우 비교</h2>
            <p className="text-body-sm text-muted-gray mt-1">선택한 배우들의 프로필을 한눈에 비교해보세요</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={clearAll}
              className="px-4 py-2 text-body-sm text-muted-gray hover:text-warm-gray transition-colors duration-200"
            >
              모두 삭제
            </button>
            <button
              onClick={closeModal}
              aria-label="비교 모달 닫기"
              className="w-10 h-10 bg-luxury-tertiary rounded-full flex items-center justify-center hover:bg-luxury-secondary transition-colors duration-200"
            >
              <XIcon className="w-5 h-5 text-ivory" />
            </button>
          </div>
        </div>
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
          {actors.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-luxury-tertiary rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <p className="text-heading-md text-ivory mb-2">비교할 배우가 없습니다</p>
              <p className="text-body-sm text-muted-gray">검색 결과에서 배우를 선택하여 비교해보세요</p>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                actors.length === 1
                  ? "grid-cols-1 max-w-sm mx-auto"
                  : actors.length === 2
                  ? "grid-cols-2 max-w-2xl mx-auto"
                  : actors.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {actors.map((actor) => (
                <CompareCard key={actor.id} actor={actor} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
