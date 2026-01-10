import { useCallback, useEffect, useRef, useState } from "react";

import { DEBOUNCE_DELAY, SCROLL_PICKER } from "@/lib/constants";

export interface ScrollPickerOption {
  value: string;
  label: string;
}

interface UseScrollPickerProps {
  options: ScrollPickerOption[];
  selectedValue?: string;
  isOpen: boolean;
}

export function useScrollPicker({ options, selectedValue, isOpen }: UseScrollPickerProps) {
  const [localSelected, setLocalSelected] = useState(selectedValue || "");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isClosingRef = useRef(false);

  const selectedIndex = options.findIndex((opt) => opt.value === localSelected);

  useEffect(() => {
    setLocalSelected(selectedValue || "");
  }, [selectedValue, isOpen]);

  useEffect(() => {
    if (isOpen && scrollContainerRef.current && options.length > 0) {
      const timer = setTimeout(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const targetIndex = selectedIndex >= 0 ? selectedIndex : 0;
        const targetScroll = targetIndex * SCROLL_PICKER.itemHeight;
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
      const centerIndex = Math.round(scrollTop / SCROLL_PICKER.itemHeight);
      const clampedIndex = Math.max(0, Math.min(centerIndex, options.length - 1));

      const targetScroll = clampedIndex * SCROLL_PICKER.itemHeight;
      container.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });

      if (options[clampedIndex] && !isClosingRef.current) {
        setLocalSelected(options[clampedIndex].value);
      }

      isScrollingRef.current = false;
    }, DEBOUNCE_DELAY.scroll);
  }, [options]);

  const handleItemClick = (index: number) => {
    if (!scrollContainerRef.current) return;

    const targetScroll = index * SCROLL_PICKER.itemHeight;
    scrollContainerRef.current.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    setLocalSelected(options[index].value);
  };

  const cleanup = useCallback(() => {
    isClosingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return {
    scrollContainerRef,
    localSelected,
    setLocalSelected,
    handleScroll,
    handleItemClick,
    cleanup,
    isClosingRef,
  };
}
