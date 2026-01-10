import { DarkCard } from "@/components/common";
import { LogoutIcon } from "@/components/common/Misc/Icons";

interface AccountManagementSectionProps {
  onLogout: () => void;
  onDeleteAccount: () => void;
}

export function AccountManagementSection({ onLogout, onDeleteAccount }: AccountManagementSectionProps) {
  return (
    <DarkCard className="border-red-500/30">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10">
          <LogoutIcon className="h-5 w-5 text-red-400" />
        </div>
        <div>
          <h2 className="text-ivory text-lg font-semibold">계정 관리</h2>
          <p className="text-muted-gray text-sm">로그아웃 및 계정 삭제</p>
        </div>
      </div>

      <div className="space-y-3">
        <button onClick={onLogout} className="text-warm-gray hover:text-ivory w-full py-3 text-left transition-colors">
          로그아웃
        </button>
        <button
          onClick={onDeleteAccount}
          className="w-full py-3 text-left text-red-400 transition-colors hover:text-red-300"
        >
          계정 삭제
        </button>
      </div>
    </DarkCard>
  );
}
