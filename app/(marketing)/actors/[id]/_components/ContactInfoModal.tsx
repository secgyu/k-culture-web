import { PhoneIcon } from "@/components/common/Misc/Icons";

interface ContactInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  phone?: string;
  email?: string;
}

export function ContactInfoModal({ isOpen, onClose, phone, email }: ContactInfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-luxury-secondary rounded-2xl p-6 w-full max-w-sm mx-4 shadow-xl border border-border">
        <h3 className="text-heading-md text-ivory mb-4">연락처 정보</h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 p-3 bg-luxury-tertiary rounded-xl">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <PhoneIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-caption text-muted-gray">전화번호</p>
              <p className="font-medium text-ivory">{phone || "010-****-****"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-luxury-tertiary rounded-xl">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-caption text-muted-gray">이메일</p>
              <p className="font-medium text-ivory">{email || "actor@example.com"}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-gold text-luxury-black font-medium rounded-xl hover:bg-gold-light transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-[0.98]"
        >
          확인
        </button>
      </div>
    </div>
  );
}

