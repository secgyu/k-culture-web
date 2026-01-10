import { Button } from "@/components/ui";

import { DarkCard } from "@/components/common";
import { SettingsIcon } from "@/components/common/Misc/Icons";

import { ToggleSwitch } from "./ToggleSwitch";

interface NotificationSettingsSectionProps {
  castingNotification: boolean;
  messageNotification: boolean;
  marketingNotification: boolean;
  onCastingToggle: () => void;
  onMessageToggle: () => void;
  onMarketingToggle: () => void;
  onSave: () => void;
  isSaving: boolean;
}

export function NotificationSettingsSection({
  castingNotification,
  messageNotification,
  marketingNotification,
  onCastingToggle,
  onMessageToggle,
  onMarketingToggle,
  onSave,
  isSaving,
}: NotificationSettingsSectionProps) {
  return (
    <DarkCard>
      <div className="mb-6 flex items-center gap-4">
        <div className="bg-gold/10 flex h-10 w-10 items-center justify-center rounded-full">
          <SettingsIcon className="text-gold h-5 w-5" />
        </div>
        <div>
          <h2 className="text-ivory text-lg font-semibold">알림 설정</h2>
          <p className="text-muted-gray text-sm">알림 수신 설정</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="border-border flex items-center justify-between border-b py-3">
          <div>
            <p className="text-ivory">캐스팅 알림</p>
            <p className="text-muted-gray text-sm">섭외 요청 및 캐스팅 관련 알림</p>
          </div>
          <ToggleSwitch enabled={castingNotification} onToggle={onCastingToggle} />
        </div>

        <div className="border-border flex items-center justify-between border-b py-3">
          <div>
            <p className="text-ivory">메시지 알림</p>
            <p className="text-muted-gray text-sm">새 메시지 수신 알림</p>
          </div>
          <ToggleSwitch enabled={messageNotification} onToggle={onMessageToggle} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <p className="text-ivory">마케팅 알림</p>
            <p className="text-muted-gray text-sm">이벤트 및 프로모션 알림</p>
          </div>
          <ToggleSwitch enabled={marketingNotification} onToggle={onMarketingToggle} />
        </div>
      </div>

      <div className="mt-6">
        <Button fullWidth loading={isSaving} onClick={onSave} variant="gold">
          설정 저장
        </Button>
      </div>
    </DarkCard>
  );
}
