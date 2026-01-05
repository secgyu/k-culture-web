import { useState } from "react";

interface CastingRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (message: string) => void;
  actorName: string;
  isSubmitting: boolean;
}

export function CastingRequestModal({
  isOpen,
  onClose,
  onSubmit,
  actorName,
  isSubmitting,
}: CastingRequestModalProps) {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!message.trim()) return;
    onSubmit(message);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-luxury-secondary rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl border border-border">
        <h3 className="text-heading-md text-ivory mb-2">섭외 요청</h3>
        <p className="text-body-sm text-muted-gray mb-4">{actorName}님에게 섭외 요청을 보냅니다</p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-ivory mb-2">메시지</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 px-4 py-3 bg-luxury-tertiary text-ivory rounded-xl border border-border focus:border-gold focus:outline-none resize-none"
            placeholder="섭외 제안 내용을 입력해주세요"
            disabled={isSubmitting}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-luxury-tertiary text-ivory font-medium rounded-xl hover:bg-opacity-80 transition-colors"
            disabled={isSubmitting}
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            disabled={!message.trim() || isSubmitting}
            className="flex-1 py-3 bg-gold text-luxury-black font-medium rounded-xl hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "전송 중..." : "전송"}
          </button>
        </div>
      </div>
    </div>
  );
}

