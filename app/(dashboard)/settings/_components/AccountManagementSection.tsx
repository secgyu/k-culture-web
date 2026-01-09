import { DarkCard } from "@/components/common";
import { LogoutIcon } from "@/components/common/Misc/Icons";

interface AccountManagementSectionProps {
  onLogout: () => void;
  onDeleteAccount: () => void;
}

export function AccountManagementSection({ onLogout, onDeleteAccount }: AccountManagementSectionProps) {
  return (
    <DarkCard className="border-red-500/30">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
          <LogoutIcon className="w-5 h-5 text-red-400" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-ivory">계정 관리</h2>
          <p className="text-sm text-muted-gray">로그아웃 및 계정 삭제</p>
        </div>
      </div>

      <div className="space-y-3">
        <button onClick={onLogout} className="w-full py-3 text-left text-warm-gray hover:text-ivory transition-colors">
          로그아웃
        </button>
        <button
          onClick={onDeleteAccount}
          className="w-full py-3 text-left text-red-400 hover:text-red-300 transition-colors"
        >
          계정 삭제
        </button>
      </div>
    </DarkCard>
  );
}
