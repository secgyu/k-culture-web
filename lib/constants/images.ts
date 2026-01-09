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

export const SAMPLE_WORKS = [
  {
    name: "나의아저씨",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=48&h=48&fit=crop",
  },
  {
    name: "미스터선샤인",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=48&h=48&fit=crop",
  },
  {
    name: "시그널",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=48&h=48&fit=crop",
  },
  {
    name: "비밀의숲",
    thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=48&h=48&fit=crop",
  },
] as const;
