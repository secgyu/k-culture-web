import { create } from "zustand";

export interface CompareActor {
  id: number;
  name: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  work: string;
  image: string;
}

interface CompareStore {
  actors: CompareActor[];
  isModalOpen: boolean;
  maxActors: number;
  addActor: (actor: CompareActor) => void;
  removeActor: (actorId: number) => void;
  clearAll: () => void;
  isInCompare: (actorId: number) => boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useCompareStore = create<CompareStore>((set, get) => ({
  actors: [],
  isModalOpen: false,
  maxActors: 4,

  addActor: (actor) => {
    const { actors, maxActors } = get();
    if (actors.length >= maxActors) return;
    if (actors.some((a) => a.id === actor.id)) return;
    set({ actors: [...actors, actor] });
  },

  removeActor: (actorId) => {
    set({ actors: get().actors.filter((a) => a.id !== actorId) });
  },

  clearAll: () => {
    set({ actors: [], isModalOpen: false });
  },

  isInCompare: (actorId) => {
    return get().actors.some((a) => a.id === actorId);
  },

  openModal: () => {
    set({ isModalOpen: true });
  },

  closeModal: () => {
    set({ isModalOpen: false });
  },
}));

