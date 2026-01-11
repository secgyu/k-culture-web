import { expect, test } from "@playwright/test";

test.describe("네비게이션 테스트", () => {
  test("헤더 네비게이션 링크들이 정상 동작", async ({ page }) => {
    await page.goto("/");

    // AI 매칭추천 링크
    await page.getByRole("link", { name: "AI 매칭추천" }).first().click();
    await expect(page).toHaveURL("/ai-matching");

    // 배우&모델 찾기 링크
    await page.getByRole("link", { name: "배우&모델 찾기" }).first().click();
    await expect(page).toHaveURL("/actor-search");

    // 작품구인 링크
    await page.getByRole("link", { name: "작품구인" }).first().click();
    await expect(page).toHaveURL("/jobs");

    // 공지사항 링크
    await page.getByRole("link", { name: "공지사항" }).first().click();
    await expect(page).toHaveURL("/notice");
  });

  test("로고 클릭 시 메인 페이지로 이동", async ({ page }) => {
    await page.goto("/actor-search");
    await page.getByRole("link", { name: "Do Dream" }).first().click();
    await expect(page).toHaveURL("/");
  });

  test("프로필 등록하기 링크가 표시됨", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "프로필 등록하기" }).first()).toBeVisible();
  });
});

test.describe("모바일 메뉴 테스트", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("모바일에서 햄버거 메뉴가 표시됨", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: "메뉴 열기" })).toBeVisible();
  });

  test("모바일 메뉴 열기/닫기", async ({ page }) => {
    await page.goto("/actor-search");

    // 메뉴 열기
    await page.getByRole("button", { name: "메뉴 열기" }).click();

    // 메뉴 닫기 버튼 표시 확인
    await expect(page.getByRole("button", { name: "메뉴 닫기" })).toBeVisible();

    // 메뉴 닫기
    await page.getByRole("button", { name: "메뉴 닫기" }).click();
  });
});
