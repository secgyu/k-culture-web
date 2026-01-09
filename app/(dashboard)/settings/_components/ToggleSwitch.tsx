interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
}

export function ToggleSwitch({ enabled, onToggle }: ToggleSwitchProps) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-12 h-6 rounded-full transition-colors ${enabled ? "bg-gold" : "bg-luxury-tertiary"}`}
      aria-label={enabled ? "활성화됨" : "비활성화됨"}
      role="switch"
      aria-checked={enabled}
    >
      <div
        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${enabled ? "left-7" : "left-1"}`}
      />
    </button>
  );
}
