import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn (className utility)", () => {
  it("단일 클래스를 반환해야 함", () => {
    expect(cn("text-red-500")).toBe("text-red-500");
  });

  it("여러 클래스를 병합해야 함", () => {
    expect(cn("text-red-500", "bg-white")).toBe("text-red-500 bg-white");
  });

  it("조건부 클래스를 처리해야 함", () => {
    expect(cn("base", true && "active", false && "inactive")).toBe("base active");
  });

  it("undefined와 null을 무시해야 함", () => {
    expect(cn("base", undefined, null, "end")).toBe("base end");
  });

  it("Tailwind 클래스 충돌을 해결해야 함", () => {
    expect(cn("p-4", "p-2")).toBe("p-2");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("객체 형태 조건부 클래스를 처리해야 함", () => {
    expect(cn({ "text-red-500": true, "bg-white": false })).toBe("text-red-500");
  });

  it("배열 형태 클래스를 처리해야 함", () => {
    expect(cn(["text-red-500", "bg-white"])).toBe("text-red-500 bg-white");
  });

  it("빈 입력은 빈 문자열을 반환해야 함", () => {
    expect(cn()).toBe("");
    expect(cn("")).toBe("");
  });
});
