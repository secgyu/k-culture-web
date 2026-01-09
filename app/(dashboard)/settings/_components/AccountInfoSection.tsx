import { DarkCard } from "@/components/common";
import { Button } from "@/components/ui";
import { UserIcon } from "@/components/common/Misc/Icons";

interface AccountInfoSectionProps {
  userEmail: string;
  userType: "actor" | "agency";
}

export function AccountInfoSection({ userEmail, userType }: AccountInfoSectionProps) {
  return (
    <DarkCard>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          <UserIcon className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-ivory">계정 정보</h2>
          <p className="text-sm text-muted-gray">로그인 및 계정 관리</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div>
            <p className="text-ivory">이메일</p>
            <p className="text-sm text-muted-gray">{userEmail}</p>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-border">
          <div>
            <p className="text-ivory">비밀번호</p>
            <p className="text-sm text-muted-gray">••••••••</p>
          </div>
          <Button variant="gold-ghost" size="sm">
            변경
          </Button>
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <p className="text-ivory">회원 유형</p>
            <p className="text-sm text-muted-gray">{userType === "actor" ? "배우" : "에이전시"}</p>
          </div>
        </div>
      </div>
    </DarkCard>
  );
}
