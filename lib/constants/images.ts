export const PLACEHOLDER_IMAGES = {
  ACTOR: "https://via.placeholder.com/300x400",
  PROFILE: "https://via.placeholder.com/400x400",
  THUMBNAIL: "https://via.placeholder.com/300x200",
  SQUARE: "https://via.placeholder.com/300x300",
} as const;

export function getActorImageUrl(imageUrl?: string | null): string {
  return imageUrl || PLACEHOLDER_IMAGES.ACTOR;
}

export function getThumbnailImageUrl(imageUrl?: string | null): string {
  return imageUrl || PLACEHOLDER_IMAGES.THUMBNAIL;
}

export function getProfileImageUrl(imageUrl?: string | null): string {
  return imageUrl || PLACEHOLDER_IMAGES.PROFILE;
}
