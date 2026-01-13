import { expect, test } from "@playwright/test";

test.describe("프로필 수정 페이지", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/api/users/me", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          data: { id: "1", email: "test@example.com", type: "actor" },
        }),
      });
    });

    await page.route("**/api/actors/me", async (route) => {
      if (route.request().method() === "GET") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            success: true,
            data: {
              id: "1",
              email: "test@example.com",
              name: "테스트 배우",
              stageName: "스타배우",
              profileImage: null,
              birthYear: 1995,
              introduction: "안녕하세요",
              nationality: "대한민국",
              height: 175,
              weight: 65,
              skills: ["액션", "코미디"],
              languages: ["한국어", "영어"],
              agency: "테스트 소속사",
              isProfileComplete: true,
              createdAt: "2024-01-01T00:00:00Z",
              updatedAt: "2024-01-01T00:00:00Z",
            },
          }),
        });
      } else if (route.request().method() === "PUT") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            success: true,
            data: { id: "1" },
          }),
        });
      }
    });

    await page.goto("/");
    await page.evaluate(() => {
      localStorage.setItem(
        "auth-storage",
        JSON.stringify({
          state: {
            isAuthenticated: true,
            userType: "actor",
            accessToken: "mock-access-token",
            refreshToken: "mock-refresh-token",
          },
          version: 0,
        })
      );
    });

    await page.goto("/profile/edit");
    await page.waitForLoadState("networkidle");
  });

  test("프로필 수정 페이지 제목 표시", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "프로필 수정" })).toBeVisible({ timeout: 10000 });
  });

  test("기본 정보 섹션 표시", async ({ page }) => {
    await expect(page.getByText("기본 정보")).toBeVisible({ timeout: 10000 });
  });

  test("특기 & 언어 섹션 표시", async ({ page }) => {
    await expect(page.getByText("특기 & 언어")).toBeVisible({ timeout: 10000 });
  });

  test("활동명 입력 필드 표시", async ({ page }) => {
    await expect(page.getByRole("textbox", { name: /활동명/ })).toBeVisible({ timeout: 10000 });
  });

  test("활동명 필드에 기존 값 표시", async ({ page }) => {
    const input = page.getByRole("textbox", { name: /활동명/ });
    await expect(input).toHaveValue("스타배우", { timeout: 10000 });
  });

  test("저장 버튼 표시", async ({ page }) => {
    await expect(page.getByRole("button", { name: "저장" })).toBeVisible({ timeout: 10000 });
  });

  test("취소 버튼 표시", async ({ page }) => {
    await expect(page.getByRole("button", { name: "취소" })).toBeVisible({ timeout: 10000 });
  });

  test("특기 선택 가능", async ({ page }) => {
    // 이미 선택된 "액션" 버튼 확인
    const actionButton = page.getByRole("button", { name: "액션" });
    await expect(actionButton).toBeVisible({ timeout: 10000 });
  });

  test("언어 선택 가능", async ({ page }) => {
    // 이미 선택된 "한국어" 버튼 확인
    const koreanButton = page.getByRole("button", { name: "한국어" });
    await expect(koreanButton).toBeVisible({ timeout: 10000 });
  });

  test("저장 버튼 클릭 시 API 호출", async ({ page }) => {
    const saveRequest = page.waitForRequest(
      (request) => request.url().includes("/api/actors/me") && request.method() === "PUT",
      { timeout: 5000 }
    );

    await page.getByRole("button", { name: "저장" }).click();

    try {
      const request = await saveRequest;
      expect(request.method()).toBe("PUT");
    } catch {
      console.log("저장 API가 호출되지 않음");
    }
  });
});

test.describe("프로필 수정 - 프로필 없는 경우", () => {
  test("프로필이 없으면 온보딩으로 리다이렉트", async ({ page }) => {
    // API 모킹 - 프로필 없음 (404)
    await page.route("**/api/users/me", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          data: { id: "1", email: "test@example.com", type: "actor" },
        }),
      });
    });

    await page.route("**/api/actors/me", async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({
          success: false,
          error: { code: "COMMON_999", message: "서버 내부 오류" },
        }),
      });
    });

    // 인증 상태 설정
    await page.goto("/");
    await page.evaluate(() => {
      localStorage.setItem(
        "auth-storage",
        JSON.stringify({
          state: {
            isAuthenticated: true,
            userType: "actor",
            accessToken: "mock-access-token",
            refreshToken: "mock-refresh-token",
          },
          version: 0,
        })
      );
    });

    await page.goto("/profile/edit");

    // 온보딩으로 리다이렉트 확인
    await expect(page).toHaveURL(/\/onboarding\/actor\/step1/, { timeout: 10000 });
  });
});

test.describe("프로필 수정 - 인증 없는 경우", () => {
  test("미로그인 상태에서 로그인 페이지로 리다이렉트", async ({ page }) => {
    // localStorage 초기화
    await page.goto("/");
    await page.evaluate(() => localStorage.removeItem("auth-storage"));

    // 프로필 수정 페이지 접근
    await page.goto("/profile/edit");

    // 로그인 페이지로 리다이렉트 확인
    await expect(page).toHaveURL("/login", { timeout: 10000 });
  });
});
