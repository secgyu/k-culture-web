import { useState } from "react";

interface CastingRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (message: string) => void;
  actorName: string;
  isSubmitting: boolean;
}

export function CastingRequestModal({ isOpen, onClose, onSubmit, actorName, isSubmitting }: CastingRequestModalProps) {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!message.trim()) return;
    onSubmit(message);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="bg-luxury-secondary border-border relative mx-4 w-full max-w-md rounded-2xl border p-6 shadow-xl">
        <h3 className="text-heading-md text-ivory mb-2">섭외 요청</h3>
        <p className="text-body-sm text-muted-gray mb-4">{actorName}님에게 섭외 요청을 보냅니다</p>

        <div className="mb-4">
          <label className="text-ivory mb-2 block text-sm font-medium">메시지</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-luxury-tertiary text-ivory border-border focus:border-gold h-32 w-full resize-none rounded-xl border px-4 py-3 focus:outline-none"
            placeholder="섭외 제안 내용을 입력해주세요"
            disabled={isSubmitting}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="bg-luxury-tertiary text-ivory hover:bg-opacity-80 flex-1 rounded-xl py-3 font-medium transition-colors"
            disabled={isSubmitting}
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            disabled={!message.trim() || isSubmitting}
            className="bg-gold text-luxury-black hover:bg-gold-light flex-1 rounded-xl py-3 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "전송 중..." : "전송"}
          </button>
        </div>
      </div>
    </div>
  );
}
