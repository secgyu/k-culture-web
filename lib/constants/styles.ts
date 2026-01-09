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
