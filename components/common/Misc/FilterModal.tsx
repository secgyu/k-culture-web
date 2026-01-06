"use client";

import { useState, useEffect } from "react";
import { useScrollPicker, type ScrollPickerOption } from "@/lib/hooks";
import { SCROLL_PICKER, ANIMATION_DURATION } from "@/lib/constants";

export type { ScrollPickerOption as FilterModalOption };

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  options: ScrollPickerOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
}

export default function FilterModal({ isOpen, onClose, title, options, selectedValue, onSelect }: FilterModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollContainerRef, localSelected, handleScroll, handleItemClick, cleanup, isClosingRef } = useScrollPicker({
    options,
    selectedValue,
    isOpen,
  });

  useEffect(() => {
    if (isOpen) {
      isClosingRef.current = false;
      setIsVisible(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
        isClosingRef.current = false;
      }, ANIMATION_DURATION.normal);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isClosingRef]);

  const handleConfirm = () => {
    cleanup();

    if (localSelected) {
      onSelect(localSelected);
    }
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  const listHeight = SCROLL_PICKER.itemHeight * SCROLL_PICKER.visibleItems;
  const gradientHeight = SCROLL_PICKER.itemHeight * 2;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-lg bg-luxury-secondary rounded-t-3xl transition-transform duration-300 ease-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center pt-3 pb-4">
          <div className="w-10 h-1 rounded-full bg-border" />
        </div>

        <div className="px-5 pb-4">
          <h2 className="text-xl font-bold tracking-tight text-ivory">{title}</h2>
        </div>

        <div className="relative" style={{ height: listHeight }}>
          <div
            className="absolute left-5 right-5 rounded-lg pointer-events-none z-0 bg-luxury-secondary"
            style={{
              top: gradientHeight,
              height: SCROLL_PICKER.itemHeight,
            }}
          />

          <div
            className="absolute top-0 left-0 right-0 pointer-events-none z-10 bg-gradient-to-b from-luxury-secondary via-luxury-secondary/80 to-transparent"
            style={{ height: gradientHeight }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 bg-gradient-to-t from-luxury-secondary via-luxury-secondary/80 to-transparent"
            style={{ height: gradientHeight }}
          />

          <div
            ref={scrollContainerRef}
            className="absolute inset-0 overflow-y-auto hide-scrollbar snap-y snap-mandatory"
            onScroll={handleScroll}
          >
            {Array.from({ length: SCROLL_PICKER.paddingItems }).map((_, i) => (
              <div key={`top-${i}`} className="h-14" />
            ))}

            {options.map((option, index) => {
              const isOptionSelected = localSelected === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleItemClick(index)}
                  className="w-full h-14 flex items-center justify-center transition-colors snap-center"
                >
                  <span
                    className={`text-lg font-medium tracking-tight transition-colors ${
                      isOptionSelected ? "text-ivory" : "text-muted-gray"
                    }`}
                  >
                    {option.label}
                  </span>
                </button>
              );
            })}

            {Array.from({ length: SCROLL_PICKER.paddingItems }).map((_, i) => (
              <div key={`bottom-${i}`} className="h-14" />
            ))}
          </div>
        </div>

        <div className="p-5 bg-luxury-secondary">
          <button
            onClick={handleConfirm}
            disabled={!localSelected}
            className={`w-full h-12 rounded-lg font-medium text-base tracking-tight transition-colors ${
              localSelected
                ? "bg-gold text-luxury-black hover:bg-gold-light"
                : "bg-luxury-tertiary text-muted-gray cursor-not-allowed"
            }`}
          >
            배우 선택 완료
          </button>
        </div>
      </div>
    </div>
  );
}
