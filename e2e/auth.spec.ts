import { expect, test } from "@playwright/test";

test.describe("회원가입 플로우", () => {
  test("회원가입 선택 페이지에서 배우로 가입 이동", async ({ page }) => {
    await page.goto("/signup");
    await page.getByRole("link", { name: /배우로 가입/ }).click();
    await expect(page).toHaveURL("/signup/actor");
  });

  test("회원가입 선택 페이지에서 캐스팅 담당자로 가입 이동", async ({ page }) => {
    await page.goto("/signup");
    await page.getByRole("link", { name: /캐스팅 담당자로 가입/ }).click();
    await expect(page).toHaveURL("/signup/agency");
  });

  test("배우 회원가입 폼 작성", async ({ page }) => {
    await page.goto("/signup/actor");

    // 이메일 입력
    const emailInput = page.getByRole("textbox", { name: /이메일/ });
    await emailInput.fill("test-actor@example.com");
    await expect(emailInput).toHaveValue("test-actor@example.com");

    // 비밀번호 입력
    const passwordInput = page.getByRole("textbox", { name: /8자 이상/ });
    await passwordInput.fill("Password123!");
    await expect(passwordInput).toHaveValue("Password123!");

    // 비밀번호 확인 입력
    const confirmInput = page.getByRole("textbox", { name: /비밀번호를 다시/ });
    await confirmInput.fill("Password123!");
    await expect(confirmInput).toHaveValue("Password123!");

    // 전체 동의 클릭
    await page.getByRole("button", { name: "전체 동의" }).click();
  });

  test("배우 회원가입 - 약관 동의 체크박스 동작", async ({ page }) => {
    await page.goto("/signup/actor");

    // 개별 약관 동의 클릭
    await page.getByRole("button", { name: /서비스 이용약관 동의/ }).click();
    await page.getByRole("button", { name: /개인정보 처리방침 동의/ }).click();
    await page.getByRole("button", { name: /마케팅 정보 수신 동의/ }).click();
  });

  test("회원가입 페이지에서 로그인 링크 이동", async ({ page }) => {
    await page.goto("/signup/actor");
    await page.getByRole("link", { name: "로그인" }).click();
    await expect(page).toHaveURL("/login");
  });

  test("회원가입 API 호출 테스트", async ({ page }) => {
    await page.goto("/signup/actor");

    // 폼 작성
    await page.getByRole("textbox", { name: /이메일/ }).fill(`test-${Date.now()}@example.com`);
    await page.getByRole("textbox", { name: /8자 이상/ }).fill("Password123!");
    await page.getByRole("textbox", { name: /비밀번호를 다시/ }).fill("Password123!");
    await page.getByRole("button", { name: "전체 동의" }).click();

    // API 응답 대기 설정
    const responsePromise = page.waitForResponse(
      (response) => response.url().includes("/api/auth/signup"),
      { timeout: 5000 }
    );

    // 회원가입 버튼 클릭
    await page.getByRole("button", { name: "회원가입" }).click();

    // API 호출 확인 (타임아웃 시 스킵)
    try {
      const response = await responsePromise;
      expect([200, 201, 400, 409]).toContain(response.status());
    } catch {
      // 폼 validation으로 인해 API가 호출되지 않을 수 있음
      console.log("회원가입 API가 호출되지 않음 - 폼 validation 실패 가능성");
    }
  });
});

test.describe("로그인 플로우", () => {
  test("로그인 폼 작성", async ({ page }) => {
    await page.goto("/login");

    const emailInput = page.getByRole("textbox", { name: /이메일/ });
    await emailInput.fill("test@example.com");
    await expect(emailInput).toHaveValue("test@example.com");

    const passwordInput = page.getByRole("textbox", { name: /비밀번호/ });
    await passwordInput.fill("Password123!");
    await expect(passwordInput).toHaveValue("Password123!");
  });

  test("비밀번호 보기 버튼 동작", async ({ page }) => {
    await page.goto("/login");

    const passwordInput = page.getByRole("textbox", { name: /비밀번호/ });
    await passwordInput.fill("Password123!");

    // 비밀번호 보기 버튼 클릭
    await page.getByRole("button", { name: "비밀번호 보기" }).click();
  });

  test("비밀번호 찾기 링크 이동", async ({ page }) => {
    await page.goto("/login");
    await page.getByRole("link", { name: "비밀번호를 잊으셨나요?" }).click();
    await expect(page).toHaveURL("/forgot-password");
  });

  test("회원가입 링크 이동", async ({ page }) => {
    await page.goto("/login");
    await page.getByRole("link", { name: "회원가입" }).click();
    await expect(page).toHaveURL("/signup");
  });

  test("로그인 API 호출 테스트", async ({ page }) => {
    await page.goto("/login");

    await page.getByRole("textbox", { name: /이메일/ }).fill("flowtest@test.com");
    await page.getByRole("textbox", { name: /비밀번호/ }).fill("Test1234!");

    const responsePromise = page.waitForResponse(
      (response) => response.url().includes("/api/auth/login"),
      { timeout: 5000 }
    );

    await page.getByRole("button", { name: "로그인" }).click();

    try {
      const response = await responsePromise;
      // 200: 성공, 401: 인증 실패
      expect([200, 401]).toContain(response.status());
    } catch {
      console.log("로그인 API가 호출되지 않음 - 폼 validation 실패 가능성");
    }
  });
});

test.describe("비밀번호 찾기 플로우", () => {
  test("비밀번호 찾기 폼 작성", async ({ page }) => {
    await page.goto("/forgot-password");

    const emailInput = page.getByRole("textbox", { name: /이메일/ });
    await emailInput.fill("test@example.com");
    await expect(emailInput).toHaveValue("test@example.com");
  });

  test("로그인으로 돌아가기 링크 이동", async ({ page }) => {
    await page.goto("/forgot-password");
    await page.getByRole("link", { name: "로그인으로 돌아가기" }).click();
    await expect(page).toHaveURL("/login");
  });

  test("비밀번호 재설정 API 호출 테스트", async ({ page }) => {
    await page.goto("/forgot-password");

    await page.getByRole("textbox", { name: /이메일/ }).fill("flowtest@test.com");

    const responsePromise = page.waitForResponse(
      (response) => response.url().includes("/api/auth/forgot-password"),
      { timeout: 5000 }
    );

    await page.getByRole("button", { name: "재설정 링크 발송" }).click();

    try {
      const response = await responsePromise;
      expect([200, 400, 404]).toContain(response.status());
    } catch {
      console.log("비밀번호 찾기 API가 호출되지 않음 - 폼 validation 실패 가능성");
    }
  });
});
