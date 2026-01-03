"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface FilterModalOption {
  value: string;
  label: string;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  options: FilterModalOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
}

const ITEM_HEIGHT = 56;

export default function FilterModal({ isOpen, onClose, title, options, selectedValue, onSelect }: FilterModalProps) {
  const [localSelected, setLocalSelected] = useState(selectedValue || "");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isClosingRef = useRef(false);

  const selectedIndex = options.findIndex((opt) => opt.value === localSelected);

  useEffect(() => {
    if (isOpen) {
      isClosingRef.current = false;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
        isClosingRef.current = false;
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalSelected(selectedValue || "");
  }, [selectedValue, isOpen]);

  useEffect(() => {
    if (isOpen && scrollContainerRef.current && options.length > 0) {
      const timer = setTimeout(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const targetIndex = selectedIndex >= 0 ? selectedIndex : 0;
        const targetScroll = targetIndex * ITEM_HEIGHT;
        container.scrollTop = targetScroll;

        if (!localSelected && options.length > 0) {
          setLocalSelected(options[0].value);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, selectedIndex, options, localSelected]);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || options.length === 0 || isClosingRef.current) return;

    isScrollingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const container = scrollContainerRef.current;
      if (!container || isClosingRef.current) return;

      const scrollTop = container.scrollTop;
      const centerIndex = Math.round(scrollTop / ITEM_HEIGHT);
      const clampedIndex = Math.max(0, Math.min(centerIndex, options.length - 1));

      const targetScroll = clampedIndex * ITEM_HEIGHT;
      container.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });

      if (options[clampedIndex] && !isClosingRef.current) {
        setLocalSelected(options[clampedIndex].value);
      }

      isScrollingRef.current = false;
    }, 100);
  }, [options]);

  const handleItemClick = (index: number) => {
    if (!scrollContainerRef.current) return;

    const targetScroll = index * ITEM_HEIGHT;
    scrollContainerRef.current.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    setLocalSelected(options[index].value);
  };

  const handleConfirm = () => {
    isClosingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }

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

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  const paddingItems = 2;
  const listHeight = ITEM_HEIGHT * 5;
  const gradientHeight = ITEM_HEIGHT * 2;

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
              height: ITEM_HEIGHT,
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
            {Array.from({ length: paddingItems }).map((_, i) => (
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

            {Array.from({ length: paddingItems }).map((_, i) => (
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
