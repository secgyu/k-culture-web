import { create } from "zustand";

import { DEFAULT_FILTERS, FILTER_DEFAULT_VALUE, isDefaultValue } from "@/lib/constants/filter-defaults";

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
  workExchange: string;
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
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
  getActiveFilterCount: () => number;
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  filters: { ...DEFAULT_FILTERS },
  isBottomSheetOpen: false,

  setFilter: (key, value) => {
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    }));
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },

  resetFilters: () => {
    set({ filters: { ...DEFAULT_FILTERS } });
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

    if (!isDefaultValue(filters.category, FILTER_DEFAULT_VALUE)) count++;
    if (!isDefaultValue(filters.gender, FILTER_DEFAULT_VALUE)) count++;
    if (filters.ageMin || filters.ageMax) count++;
    if (filters.heightMin || filters.heightMax) count++;
    if (filters.weightMin || filters.weightMax) count++;
    if (!isDefaultValue(filters.license, FILTER_DEFAULT_VALUE)) count++;
    if (!isDefaultValue(filters.workExchange, FILTER_DEFAULT_VALUE)) count++;
    if (!isDefaultValue(filters.skills, [])) count++;
    if (!isDefaultValue(filters.filmographyTypes, [])) count++;
    if (filters.keyword) count++;

    return count;
  },
}));
