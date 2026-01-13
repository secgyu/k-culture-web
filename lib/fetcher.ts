/**
 * Orval용 커스텀 fetch mutator
 * - 자동 토큰 주입
 * - JSON 직렬화/역직렬화
 * - 에러 핸들링
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

interface CustomFetchConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  params?: Record<string, unknown>;
  data?: unknown;
  headers?: HeadersInit;
  signal?: AbortSignal;
  responseType?: "json" | "blob" | "text";
}

// zustand persist 스토리지에서 토큰 가져오기
const getAccessToken = (): string | null => {
  if (typeof window === "undefined") return null;

  try {
    const authStorage = localStorage.getItem("auth-storage");
    if (!authStorage) return null;

    const parsed = JSON.parse(authStorage);
    return parsed?.state?.accessToken || null;
  } catch {
    return null;
  }
};

export const customFetch = async <T>({
  url,
  method,
  params,
  data,
  headers,
  signal,
  responseType = "json",
}: CustomFetchConfig): Promise<T> => {
  // 토큰 가져오기 (zustand persist에서)
  const token = getAccessToken();

  // URL에 쿼리 파라미터 추가
  const queryString = params
    ? "?" +
    new URLSearchParams(
      Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== null)
        .map(([k, v]) => [k, String(v)])
    ).toString()
    : "";

  const fullUrl = `${BASE_URL}${url}${queryString}`;

  const isFormData = data instanceof FormData;

  const requestHeaders: Record<string, string> = {};

  if (!isFormData) {
    requestHeaders["Content-Type"] = "application/json";
  }

  if (token) {
    requestHeaders["Authorization"] = `Bearer ${token}`;
  }

  if (headers) {
    const headersObj = headers instanceof Headers
      ? Object.fromEntries(headers.entries())
      : (headers as Record<string, string>);

    for (const [key, value] of Object.entries(headersObj)) {
      if (isFormData && key.toLowerCase() === "content-type") {
        continue;
      }
      requestHeaders[key] = value;
    }
  }

  const response = await fetch(fullUrl, {
    method,
    body: isFormData ? data : data ? JSON.stringify(data) : undefined,
    signal,
    headers: requestHeaders,
  });

  // 에러 응답 처리
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({
      error: { message: `HTTP Error: ${response.status}` },
    }));

    const error = new Error(errorBody?.error?.message || `HTTP Error: ${response.status}`) as Error & {
      status: number;
      code: string;
    };
    error.status = response.status;
    error.code = errorBody?.error?.code || "UNKNOWN";
    throw error;
  }

  // 204 No Content 처리
  if (response.status === 204) {
    return {} as T;
  }

  // responseType에 따른 응답 처리
  if (responseType === "blob") {
    return response.blob() as Promise<T>;
  }

  if (responseType === "text") {
    return response.text() as Promise<T>;
  }

  return response.json();
};

export default customFetch;

// 타입 export (orval에서 필요)
export type ErrorType<T> = T;
export type BodyType<T> = T;
