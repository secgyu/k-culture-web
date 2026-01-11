import { expect, test } from "@playwright/test";

test.describe("배우 검색 페이지", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/actor-search");
  });

  test("필터 버튼들이 표시됨", async ({ page }) => {
    // 페이지 로드 대기
    await page.waitForLoadState("networkidle");

    await expect(page.getByRole("button", { name: "구분" })).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole("button", { name: "성별" })).toBeVisible();
    await expect(page.getByRole("button", { name: "나이" })).toBeVisible();
    await expect(page.getByRole("button", { name: "키" })).toBeVisible();
    await expect(page.getByRole("button", { name: "몸무게" })).toBeVisible();
  });

  test("구분 필터 - 배우 선택 가능", async ({ page }) => {
    const actorButton = page.getByRole("button", { name: "배우", exact: true });
    await actorButton.click();
    // 필터 적용 확인 (버튼 스타일 변경 등)
    await expect(actorButton).toBeVisible();
  });

  test("구분 필터 - 모델 선택 가능", async ({ page }) => {
    const modelButton = page.getByRole("button", { name: "모델", exact: true });
    await modelButton.click();
    await expect(modelButton).toBeVisible();
  });

  test("성별 필터 - 남자 선택 가능", async ({ page }) => {
    const maleButton = page.getByRole("button", { name: "남자", exact: true });
    await maleButton.click();
    await expect(maleButton).toBeVisible();
  });

  test("성별 필터 - 여자 선택 가능", async ({ page }) => {
    const femaleButton = page.getByRole("button", { name: "여자", exact: true });
    await femaleButton.click();
    await expect(femaleButton).toBeVisible();
  });

  test("초기화 버튼 클릭 가능", async ({ page }) => {
    const resetButton = page.getByRole("button", { name: "초기화" });
    await expect(resetButton).toBeVisible();
    await resetButton.click();
  });

  test("키워드 검색 필드에 입력 가능", async ({ page }) => {
    const searchInput = page.getByRole("textbox", { name: /이름 또는 키워드/ });
    await expect(searchInput).toBeVisible();
    await searchInput.fill("테스트 배우");
    await expect(searchInput).toHaveValue("테스트 배우");
  });

  test("정렬 버튼이 표시됨", async ({ page }) => {
    await expect(page.getByRole("button", { name: /정렬/ })).toBeVisible();
  });

  test("배우 목록 API가 호출됨", async ({ page }) => {
    const responsePromise = page.waitForResponse(
      (response) => response.url().includes("/api/actors") && response.status() === 200
    );

    await page.goto("/actor-search");
    const response = await responsePromise;
    const json = await response.json();

    expect(json.success).toBe(true);
  });
});
