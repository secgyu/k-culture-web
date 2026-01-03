import { create } from "zustand";

export interface FilterState {
  category: string;
  gender: string;
  ageMin: string;
  ageMax: string;
  heightMin: string;
  heightMax: string;
  weightMin: string;
  weightMax: string;
  license: string;
  품앗이: string;
  filmBudget: string;
  adBudget: string;
  keyword: string;
  skills: string[];
  filmographyTypes: string[];
}

interface FilterStore {
  filters: FilterState;
  isBottomSheetOpen: boolean;
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
  getActiveFilterCount: () => number;
}

const defaultFilters: FilterState = {
  category: "무관",
  gender: "무관",
  ageMin: "",
  ageMax: "",
  heightMin: "",
  heightMax: "",
  weightMin: "",
  weightMax: "",
  license: "무관",
  품앗이: "무관",
  filmBudget: "100,000",
  adBudget: "100,000",
  keyword: "",
  skills: [],
  filmographyTypes: [],
};

export const useFilterStore = create<FilterStore>((set, get) => ({
  filters: { ...defaultFilters },
  isBottomSheetOpen: false,

  setFilter: (key, value) => {
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    }));
  },

  resetFilters: () => {
    set({ filters: { ...defaultFilters } });
  },

  openBottomSheet: () => {
    set({ isBottomSheetOpen: true });
  },

  closeBottomSheet: () => {
    set({ isBottomSheetOpen: false });
  },

  getActiveFilterCount: () => {
    const { filters } = get();
    let count = 0;

    if (filters.category !== "무관") count++;
    if (filters.gender !== "무관") count++;
    if (filters.ageMin || filters.ageMax) count++;
    if (filters.heightMin || filters.heightMax) count++;
    if (filters.weightMin || filters.weightMax) count++;
    if (filters.license !== "무관") count++;
    if (filters.품앗이 !== "무관") count++;
    if (filters.skills.length > 0) count++;
    if (filters.filmographyTypes.length > 0) count++;
    if (filters.keyword) count++;

    return count;
  },
}));

