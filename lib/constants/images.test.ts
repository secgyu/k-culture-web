import { describe, expect, it } from "vitest";

import { PLACEHOLDER_IMAGES, SAMPLE_WORKS, getActorImageUrl, getProfileImageUrl, getThumbnailImageUrl } from "./images";

describe("PLACEHOLDER_IMAGES", () => {
  it("모든 placeholder 이미지 URL이 정의되어야 함", () => {
    expect(PLACEHOLDER_IMAGES.ACTOR).toBeDefined();
    expect(PLACEHOLDER_IMAGES.PROFILE).toBeDefined();
    expect(PLACEHOLDER_IMAGES.THUMBNAIL).toBeDefined();
    expect(PLACEHOLDER_IMAGES.SQUARE).toBeDefined();
  });

  it("모든 URL이 https://로 시작해야 함", () => {
    Object.values(PLACEHOLDER_IMAGES).forEach((url) => {
      expect(url).toMatch(/^https:\/\//);
    });
  });
});

describe("getActorImageUrl", () => {
  it("이미지 URL이 있으면 해당 URL을 반환해야 함", () => {
    const customUrl = "https://example.com/actor.jpg";
    expect(getActorImageUrl(customUrl)).toBe(customUrl);
  });

  it("이미지 URL이 없으면 placeholder를 반환해야 함", () => {
    expect(getActorImageUrl()).toBe(PLACEHOLDER_IMAGES.ACTOR);
    expect(getActorImageUrl(null)).toBe(PLACEHOLDER_IMAGES.ACTOR);
    expect(getActorImageUrl(undefined)).toBe(PLACEHOLDER_IMAGES.ACTOR);
  });

  it("빈 문자열이면 placeholder를 반환해야 함", () => {
    expect(getActorImageUrl("")).toBe(PLACEHOLDER_IMAGES.ACTOR);
  });
});

describe("getThumbnailImageUrl", () => {
  it("이미지 URL이 있으면 해당 URL을 반환해야 함", () => {
    const customUrl = "https://example.com/thumb.jpg";
    expect(getThumbnailImageUrl(customUrl)).toBe(customUrl);
  });

  it("이미지 URL이 없으면 placeholder를 반환해야 함", () => {
    expect(getThumbnailImageUrl()).toBe(PLACEHOLDER_IMAGES.THUMBNAIL);
    expect(getThumbnailImageUrl(null)).toBe(PLACEHOLDER_IMAGES.THUMBNAIL);
  });
});

describe("getProfileImageUrl", () => {
  it("이미지 URL이 있으면 해당 URL을 반환해야 함", () => {
    const customUrl = "https://example.com/profile.jpg";
    expect(getProfileImageUrl(customUrl)).toBe(customUrl);
  });

  it("이미지 URL이 없으면 placeholder를 반환해야 함", () => {
    expect(getProfileImageUrl()).toBe(PLACEHOLDER_IMAGES.PROFILE);
    expect(getProfileImageUrl(null)).toBe(PLACEHOLDER_IMAGES.PROFILE);
  });
});

describe("SAMPLE_WORKS", () => {
  it("샘플 작품 목록이 있어야 함", () => {
    expect(SAMPLE_WORKS.length).toBeGreaterThan(0);
  });

  it("각 작품에 name과 thumbnail이 있어야 함", () => {
    SAMPLE_WORKS.forEach((work) => {
      expect(work.name).toBeDefined();
      expect(work.thumbnail).toBeDefined();
      expect(work.thumbnail).toMatch(/^https:\/\//);
    });
  });
});
