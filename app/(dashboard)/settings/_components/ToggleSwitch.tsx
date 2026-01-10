interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
}

export function ToggleSwitch({ enabled, onToggle }: ToggleSwitchProps) {
  return (
    <button
      onClick={onToggle}
      className={`relative h-6 w-12 rounded-full transition-colors ${enabled ? "bg-gold" : "bg-luxury-tertiary"}`}
      aria-label={enabled ? "활성화됨" : "비활성화됨"}
      role="switch"
      aria-checked={enabled}
    >
      <div
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${enabled ? "left-7" : "left-1"}`}
      />
    </button>
  );
}
