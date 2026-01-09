"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Button } from "./button";

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void | Promise<void>;
  variant?: "default" | "danger";
  loading?: boolean;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  variant = "default",
  loading = false,
}: ConfirmDialogProps) {
  const handleConfirm = async () => {
    await onConfirm();
    if (!loading) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-luxury-secondary border-border">
        <DialogHeader>
          <DialogTitle className="text-ivory">{title}</DialogTitle>
          {description && <DialogDescription className="text-muted-gray">{description}</DialogDescription>}
        </DialogHeader>

        {children && <div className="text-warm-gray py-2">{children}</div>}

        <DialogFooter className="gap-3 sm:gap-3">
          <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={loading} className="flex-1">
            {cancelText}
          </Button>
          <Button
            variant={variant === "danger" ? "gold-outline" : "gold"}
            onClick={handleConfirm}
            loading={loading}
            disabled={loading}
            className={
              variant === "danger"
                ? "flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50"
                : "flex-1"
            }
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
