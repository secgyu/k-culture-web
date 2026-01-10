import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { useAuthStore } from "./useAuthStore";

describe("useAuthStore", () => {
  beforeEach(() => {
    useAuthStore.getState().logout();
  });

  afterEach(() => {
    useAuthStore.getState().logout();
  });

  describe("초기 상태", () => {
    it("기본값이 올바르게 설정되어야 함", () => {
      const state = useAuthStore.getState();

      expect(state.isAuthenticated).toBe(false);
      expect(state.userType).toBeNull();
      expect(state.accessToken).toBeNull();
      expect(state.refreshToken).toBeNull();
    });
  });

  describe("login", () => {
    it("로그인 시 상태가 올바르게 업데이트되어야 함", () => {
      const { login } = useAuthStore.getState();

      login("access-token-123", "refresh-token-456", "actor");

      const state = useAuthStore.getState();
      expect(state.isAuthenticated).toBe(true);
      expect(state.userType).toBe("actor");
      expect(state.accessToken).toBe("access-token-123");
      expect(state.refreshToken).toBe("refresh-token-456");
    });

    it("agency 타입으로 로그인할 수 있어야 함", () => {
      const { login } = useAuthStore.getState();

      login("access", "refresh", "agency");

      const state = useAuthStore.getState();
      expect(state.userType).toBe("agency");
    });
  });

  describe("logout", () => {
    it("로그아웃 시 모든 상태가 초기화되어야 함", () => {
      const { login, logout } = useAuthStore.getState();

      login("access", "refresh", "actor");
      expect(useAuthStore.getState().isAuthenticated).toBe(true);

      logout();

      const state = useAuthStore.getState();
      expect(state.isAuthenticated).toBe(false);
      expect(state.userType).toBeNull();
      expect(state.accessToken).toBeNull();
      expect(state.refreshToken).toBeNull();
    });
  });

  describe("setUserType", () => {
    it("사용자 타입만 변경할 수 있어야 함", () => {
      const { setUserType } = useAuthStore.getState();

      setUserType("agency");
      expect(useAuthStore.getState().userType).toBe("agency");

      setUserType("actor");
      expect(useAuthStore.getState().userType).toBe("actor");
    });
  });

  describe("setTokens", () => {
    it("토큰만 업데이트할 수 있어야 함", () => {
      const { setTokens } = useAuthStore.getState();

      setTokens("new-access", "new-refresh");

      const state = useAuthStore.getState();
      expect(state.accessToken).toBe("new-access");
      expect(state.refreshToken).toBe("new-refresh");
    });
  });

  describe("clearTokens", () => {
    it("토큰만 초기화할 수 있어야 함", () => {
      const { login, clearTokens } = useAuthStore.getState();

      login("access", "refresh", "actor");
      clearTokens();

      const state = useAuthStore.getState();
      expect(state.accessToken).toBeNull();
      expect(state.refreshToken).toBeNull();
      expect(state.isAuthenticated).toBe(true);
      expect(state.userType).toBe("actor");
    });
  });

  describe("getAccessToken / getRefreshToken", () => {
    it("토큰 getter가 올바르게 동작해야 함", () => {
      const { login, getAccessToken, getRefreshToken } = useAuthStore.getState();

      expect(getAccessToken()).toBeNull();
      expect(getRefreshToken()).toBeNull();

      login("my-access", "my-refresh", "actor");

      expect(getAccessToken()).toBe("my-access");
      expect(getRefreshToken()).toBe("my-refresh");
    });
  });
});
