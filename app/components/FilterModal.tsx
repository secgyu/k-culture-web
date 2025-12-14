"use client";

import { useState, useEffect } from "react";

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

export default function FilterModal({
  isOpen,
  onClose,
  title,
  options,
  selectedValue,
  onSelect,
}: FilterModalProps) {
  const [localSelected, setLocalSelected] = useState(selectedValue || "");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    setLocalSelected(selectedValue || "");
  }, [selectedValue, isOpen]);

  const handleConfirm = () => {
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

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-[15px]"
        style={{ transition: "opacity 300ms" }}
      />

      {/* Bottom Sheet */}
      <div
        className={`relative w-full max-w-lg bg-white rounded-t-3xl transition-transform duration-300 ease-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "70vh" }}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-4">
          <div className="w-10 h-1 bg-[#E5E8EB] rounded-full" />
        </div>

        {/* Title */}
        <div className="px-5 pb-4">
          <h2
            className="text-xl font-bold text-[#191F28]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {title}
          </h2>
        </div>

        {/* Options List with Fade Gradients */}
        <div className="relative">
          {/* Top Fade */}
          <div
            className="absolute top-0 left-0 right-0 h-[92px] pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, white 5%, rgba(255,255,255,0.05) 100%)",
            }}
          />

          {/* Options */}
          <div
            className="px-5 overflow-y-auto"
            style={{ maxHeight: "calc(70vh - 200px)" }}
          >
            {options.map((option) => {
              const isOptionSelected = localSelected === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => setLocalSelected(option.value)}
                  className="w-full py-4 flex items-center justify-between transition-colors"
                >
                  <span
                    className={`text-lg font-medium transition-colors ${
                      isOptionSelected ? "text-[#191F28]" : "text-[#8B95A1]"
                    }`}
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {option.label}
                  </span>
                  {isOptionSelected && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12L10 17L19 8"
                        stroke="#E50815"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[92px] pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to top, white 5%, rgba(255,255,255,0.05) 100%)",
            }}
          />
        </div>

        {/* Confirm Button */}
        <div className="p-5 bg-white">
          <button
            onClick={handleConfirm}
            disabled={!localSelected}
            className={`w-full h-12 rounded-lg font-medium text-base transition-colors ${
              localSelected
                ? "bg-[#191F28] text-white"
                : "bg-[#F2F4F6] text-[#D1D6DB]"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            배우 선택 완료
          </button>
        </div>
      </div>
    </div>
  );
}

