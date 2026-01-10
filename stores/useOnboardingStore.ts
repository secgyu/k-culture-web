import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface OnboardingData {
  name: string;
  gender: string;
  birthYear: string;
  profileImage: string | null;
  introduction: string;
  skills: string[];
  height: string;
  weight: string;
}

interface OnboardingStore {
  data: OnboardingData;
  lastSavedAt: Date | null;
  updateData: (updates: Partial<OnboardingData>) => void;
  resetData: () => void;
  getAge: () => number | null;
  getCompletionPercentage: () => number;
}

const defaultData: OnboardingData = {
  name: "",
  gender: "",
  birthYear: "",
  profileImage: null,
  introduction: "",
  skills: [],
  height: "",
  weight: "",
};

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set, get) => ({
      data: { ...defaultData },
      lastSavedAt: null,

      updateData: (updates) => {
        set((state) => ({
          data: { ...state.data, ...updates },
          lastSavedAt: new Date(),
        }));
      },

      resetData: () => {
        set({ data: { ...defaultData }, lastSavedAt: null });
      },

      getAge: () => {
        const { birthYear } = get().data;
        if (!birthYear) return null;
        const currentYear = new Date().getFullYear();
        return currentYear - parseInt(birthYear);
      },

      getCompletionPercentage: () => {
        const { data } = get();
        let completed = 0;
        const total = 8;

        if (data.name) completed++;
        if (data.gender) completed++;
        if (data.birthYear) completed++;
        if (data.profileImage) completed++;
        if (data.introduction) completed++;
        if (data.skills.length > 0) completed++;
        if (data.height) completed++;
        if (data.weight) completed++;

        return Math.round((completed / total) * 100);
      },
    }),
    {
      name: "onboarding-storage",
    }
  )
);
