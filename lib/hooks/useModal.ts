import { useCallback, useEffect } from "react";

interface UseModalReturn {
  handleEscape: () => void;
  lockScroll: () => void;
  unlockScroll: () => void;
}

export function useModal(isOpen: boolean, onClose: () => void): UseModalReturn {
  const handleEscape = useCallback(() => {
    if (isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleEscape();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      lockScroll();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      unlockScroll();
    };
  }, [isOpen, handleEscape, lockScroll, unlockScroll]);

  return {
    handleEscape,
    lockScroll,
    unlockScroll,
  };
}
