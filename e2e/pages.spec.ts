import { expect, test } from "@playwright/test";

test.describe("페이지 로드 테스트", () => {
  test("메인 페이지가 정상 로드됨", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/DoDream/);
    await expect(page.getByRole("link", { name: "Do Dream" })).toBeVisible();
  });

  test("배우 검색 페이지가 정상 로드됨", async ({ page }) => {
    await page.goto("/actor-search");
    await expect(page.getByRole("heading", { name: /배우·모델분들을 만나보세요/ })).toBeVisible();
    await expect(page.getByRole("button", { name: "구분" })).toBeVisible();
    await expect(page.getByRole("button", { name: "성별" })).toBeVisible();
  });

  test("작품구인 페이지가 정상 로드됨", async ({ page }) => {
    await page.goto("/jobs");
    await expect(page.getByRole("heading", { name: "작품과 배우·모델의 만남" })).toBeVisible();
    await expect(page.getByRole("button", { name: "구인하기" })).toBeVisible();
  });

  test("공지사항 페이지가 정상 로드됨", async ({ page }) => {
    await page.goto("/notice");
    await expect(page).toHaveURL("/notice");
    await expect(page.getByRole("link", { name: "공지사항" })).toBeVisible();
  });

  test("로그인 페이지가 정상 로드됨", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("textbox", { name: /이메일/ })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /비밀번호/ })).toBeVisible();
    await expect(page.getByRole("button", { name: "로그인" })).toBeVisible();
  });

  test("회원가입 선택 페이지가 정상 로드됨", async ({ page }) => {
    await page.goto("/signup");
    await expect(page.getByRole("link", { name: /배우로 가입/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /캐스팅 담당자로 가입/ })).toBeVisible();
  });

  test("배우 회원가입 페이지가 정상 로드됨", async ({ page }) => {
    await page.goto("/signup/actor");
    await expect(page.getByRole("textbox", { name: /이메일/ })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /8자 이상/ })).toBeVisible();
    await expect(page.getByRole("button", { name: "회원가입" })).toBeVisible();
  });

  test("비밀번호 찾기 페이지가 정상 로드됨", async ({ page }) => {
    await page.goto("/forgot-password");
    await expect(page.getByRole("textbox", { name: /이메일/ })).toBeVisible();
    await expect(page.getByRole("button", { name: "재설정 링크 발송" })).toBeVisible();
  });

  test("AI 매칭추천 페이지가 정상 로드됨", async ({ page }) => {
    await page.goto("/ai-matching");
    await expect(page.getByRole("button", { name: "AI 추천 받기" })).toBeVisible();
  });
});
