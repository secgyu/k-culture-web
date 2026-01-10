"use client";

import { XIcon } from "@/components/common/Misc/Icons";

import { useModal } from "@/lib/hooks";

import { useCompareStore } from "@/stores/useCompareStore";

import { CompareCard } from "./CompareCard";

export function CompareModal() {
  const { actors, isModalOpen, closeModal, clearAll } = useCompareStore();

  useModal(isModalOpen, closeModal);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="animate-fade-in absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal} />
      <div className="bg-luxury-black border-border animate-slide-up relative mx-4 max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl border">
        <div className="border-border bg-luxury-secondary flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-heading-xl text-ivory">배우 비교</h2>
            <p className="text-body-sm text-muted-gray mt-1">선택한 배우들의 프로필을 한눈에 비교해보세요</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={clearAll}
              className="text-body-sm text-muted-gray hover:text-warm-gray px-4 py-2 transition-colors duration-200"
            >
              모두 삭제
            </button>
            <button
              onClick={closeModal}
              aria-label="비교 모달 닫기"
              className="bg-luxury-tertiary hover:bg-luxury-secondary flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200"
            >
              <XIcon className="text-ivory h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="max-h-[calc(90vh-100px)] overflow-y-auto p-8">
          {actors.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="bg-luxury-tertiary mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-3xl">👥</span>
              </div>
              <p className="text-heading-md text-ivory mb-2">비교할 배우가 없습니다</p>
              <p className="text-body-sm text-muted-gray">검색 결과에서 배우를 선택하여 비교해보세요</p>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                actors.length === 1
                  ? "mx-auto max-w-sm grid-cols-1"
                  : actors.length === 2
                    ? "mx-auto max-w-2xl grid-cols-2"
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
