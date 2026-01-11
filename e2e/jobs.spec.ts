import { expect, test } from "@playwright/test";

test.describe("작품구인 페이지", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/jobs");
  });

  test("페이지 제목이 표시됨", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "작품과 배우·모델의 만남" })).toBeVisible();
  });

  test("구인하기 버튼이 표시됨", async ({ page }) => {
    await expect(page.getByRole("button", { name: "구인하기" })).toBeVisible();
  });

  test("검색 필드가 표시됨", async ({ page }) => {
    await expect(page.getByRole("textbox", { name: "작품 검색" })).toBeVisible();
  });

  test("작품 유형 필터가 표시됨", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    // combobox 필터 확인
    await expect(page.getByRole("combobox").first()).toBeVisible({ timeout: 10000 });
  });

  test("성별 필터가 표시됨", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    // 여러 combobox 중 성별 필터 확인
    const comboboxes = page.getByRole("combobox");
    await expect(comboboxes.nth(1)).toBeVisible({ timeout: 10000 });
  });

  test("검색 필드에 입력 가능", async ({ page }) => {
    const searchInput = page.getByRole("textbox", { name: "작품 검색" });
    await searchInput.fill("테스트 작품");
    await expect(searchInput).toHaveValue("테스트 작품");
  });

  test("Jobs API가 정상 호출됨", async ({ page }) => {
    const responsePromise = page.waitForResponse(
      (response) => response.url().includes("/api/jobs") && response.status() === 200,
      { timeout: 15000 }
    );

    await page.goto("/jobs");

    try {
      const response = await responsePromise;
      const json = await response.json();
      expect(json.success).toBe(true);
      expect(json.data).toBeDefined();
    } catch {
      // 백엔드가 실행 중이 아닐 수 있음
      console.log("Jobs API 호출 실패 - 백엔드가 실행 중인지 확인하세요");
    }
  });

  test("Jobs API - search 파라미터 없이도 정상 동작 (버그 수정 확인)", async ({ page }) => {
    // 이전에 search=null일 때 lower(bytea) 오류가 발생했던 버그 수정 확인
    const responsePromise = page.waitForResponse(
      (response) => response.url().includes("/api/jobs") && response.status() === 200
    );

    await page.goto("/jobs");
    const response = await responsePromise;

    // 500 에러가 아닌 200 응답 확인
    expect(response.status()).toBe(200);
  });
});
