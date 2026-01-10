import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { CompareActor, useCompareStore } from "./useCompareStore";

const mockActor: CompareActor = {
  id: 1,
  name: "홍길동",
  gender: "남자",
  age: 25,
  height: 175,
  weight: 70,
  work: "배우",
  image: "https://example.com/image.jpg",
};

const mockActor2: CompareActor = {
  id: 2,
  name: "김영희",
  gender: "여자",
  age: 28,
  height: 165,
  weight: 55,
  work: "모델",
  image: "https://example.com/image2.jpg",
};

describe("useCompareStore", () => {
  beforeEach(() => {
    useCompareStore.getState().clearAll();
  });

  afterEach(() => {
    useCompareStore.getState().clearAll();
  });

  describe("초기 상태", () => {
    it("빈 배열과 닫힌 모달로 시작해야 함", () => {
      const state = useCompareStore.getState();

      expect(state.actors).toEqual([]);
      expect(state.isModalOpen).toBe(false);
      expect(state.maxActors).toBe(4);
    });
  });

  describe("addActor", () => {
    it("배우를 추가할 수 있어야 함", () => {
      const { addActor } = useCompareStore.getState();

      addActor(mockActor);

      expect(useCompareStore.getState().actors).toHaveLength(1);
      expect(useCompareStore.getState().actors[0]).toEqual(mockActor);
    });

    it("같은 배우를 중복 추가할 수 없어야 함", () => {
      const { addActor } = useCompareStore.getState();

      addActor(mockActor);
      addActor(mockActor);

      expect(useCompareStore.getState().actors).toHaveLength(1);
    });

    it("최대 4명까지만 추가할 수 있어야 함", () => {
      const { addActor } = useCompareStore.getState();

      for (let i = 1; i <= 5; i++) {
        addActor({ ...mockActor, id: i, name: `배우${i}` });
      }

      expect(useCompareStore.getState().actors).toHaveLength(4);
    });
  });

  describe("removeActor", () => {
    it("배우를 제거할 수 있어야 함", () => {
      const { addActor, removeActor } = useCompareStore.getState();

      addActor(mockActor);
      addActor(mockActor2);
      removeActor(mockActor.id);

      const actors = useCompareStore.getState().actors;
      expect(actors).toHaveLength(1);
      expect(actors[0].id).toBe(mockActor2.id);
    });

    it("존재하지 않는 배우 제거 시 에러 없어야 함", () => {
      const { addActor, removeActor } = useCompareStore.getState();

      addActor(mockActor);
      removeActor(999);

      expect(useCompareStore.getState().actors).toHaveLength(1);
    });
  });

  describe("clearAll", () => {
    it("모든 배우를 제거하고 모달을 닫아야 함", () => {
      const { addActor, openModal, clearAll } = useCompareStore.getState();

      addActor(mockActor);
      addActor(mockActor2);
      openModal();
      clearAll();

      const state = useCompareStore.getState();
      expect(state.actors).toHaveLength(0);
      expect(state.isModalOpen).toBe(false);
    });
  });

  describe("isInCompare", () => {
    it("배우가 비교 목록에 있는지 확인해야 함", () => {
      const { addActor, isInCompare } = useCompareStore.getState();

      expect(isInCompare(mockActor.id)).toBe(false);

      addActor(mockActor);
      expect(isInCompare(mockActor.id)).toBe(true);
      expect(isInCompare(mockActor2.id)).toBe(false);
    });
  });

  describe("modal", () => {
    it("openModal로 모달을 열 수 있어야 함", () => {
      const { openModal } = useCompareStore.getState();

      openModal();
      expect(useCompareStore.getState().isModalOpen).toBe(true);
    });

    it("closeModal로 모달을 닫을 수 있어야 함", () => {
      const { openModal, closeModal } = useCompareStore.getState();

      openModal();
      closeModal();
      expect(useCompareStore.getState().isModalOpen).toBe(false);
    });
  });
});
