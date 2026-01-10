export const GRADIENT_OVERLAYS = {
  DARK_TO_TRANSPARENT: "bg-gradient-to-t from-black/80 via-transparent to-transparent",
  DARK_FULL: "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
  GOLD: "bg-gradient-to-r from-gold/20 to-gold/10",
} as const;

export const SPINNER = {
  SMALL: "w-4 h-4 border-2 border-gold border-t-transparent rounded-full animate-spin",
  MEDIUM: "w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin",
  LARGE: "w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin",
} as const;

export const ICON_SIZES = {
  XS: "w-4 h-4",
  SM: "w-5 h-5",
  MD: "w-6 h-6",
  LG: "w-8 h-8",
  XL: "w-12 h-12",
} as const;

export const ASPECT_RATIOS = {
  SQUARE: "aspect-square",
  PORTRAIT: "aspect-3/4",
  VIDEO: "aspect-video",
} as const;

export const PROJECT_STATUS_STYLES = {
  기획중: {
    badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    icon: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  진행중: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "text-blue-400",
    dot: "bg-blue-400",
  },
  캐스팅완료: {
    badge: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "text-green-400",
    dot: "bg-green-400",
  },
} as const;

export type ProjectStatus = keyof typeof PROJECT_STATUS_STYLES;

export function getProjectStatusStyle(status: string) {
  return PROJECT_STATUS_STYLES[status as ProjectStatus] || PROJECT_STATUS_STYLES.진행중;
}
