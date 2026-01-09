import { DarkCard } from "@/components/common";
import { Button } from "@/components/ui";
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
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          <SettingsIcon className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-ivory">알림 설정</h2>
          <p className="text-sm text-muted-gray">알림 수신 설정</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div>
            <p className="text-ivory">캐스팅 알림</p>
            <p className="text-sm text-muted-gray">섭외 요청 및 캐스팅 관련 알림</p>
          </div>
          <ToggleSwitch enabled={castingNotification} onToggle={onCastingToggle} />
        </div>

        <div className="flex items-center justify-between py-3 border-b border-border">
          <div>
            <p className="text-ivory">메시지 알림</p>
            <p className="text-sm text-muted-gray">새 메시지 수신 알림</p>
          </div>
          <ToggleSwitch enabled={messageNotification} onToggle={onMessageToggle} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <p className="text-ivory">마케팅 알림</p>
            <p className="text-sm text-muted-gray">이벤트 및 프로모션 알림</p>
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
