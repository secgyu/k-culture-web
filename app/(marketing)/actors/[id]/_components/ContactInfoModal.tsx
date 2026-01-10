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
      <div className="bg-luxury-secondary border-border relative mx-4 w-full max-w-sm rounded-2xl border p-6 shadow-xl">
        <h3 className="text-heading-md text-ivory mb-4">연락처 정보</h3>

        <div className="mb-6 space-y-4">
          <div className="bg-luxury-tertiary flex items-center gap-3 rounded-xl p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
              <PhoneIcon className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-caption text-muted-gray">전화번호</p>
              <p className="text-ivory font-medium">{phone || "010-****-****"}</p>
            </div>
          </div>

          <div className="bg-luxury-tertiary flex items-center gap-3 rounded-xl p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
              <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <p className="text-ivory font-medium">{email || "actor@example.com"}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="bg-gold text-luxury-black hover:bg-gold-light focus-visible:ring-gold/50 w-full rounded-xl py-3 font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 active:scale-[0.98]"
        >
          확인
        </button>
      </div>
    </div>
  );
}
