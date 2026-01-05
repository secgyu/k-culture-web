import { useState, useCallback } from "react";

export interface FilterState {
  [key: string]: string | boolean | undefined;
}

interface UseFiltersReturn<T extends FilterState> {
  filters: T;
  setFilter: <K extends keyof T>(key: K, value: T[K]) => void;
  resetFilters: () => void;
  setFilters: (filters: Partial<T>) => void;
}

export function useFilters<T extends FilterState>(
  initialFilters: T
): UseFiltersReturn<T> {
  const [filters, setFiltersState] = useState<T>(initialFilters);

  const setFilter = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setFiltersState((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFiltersState(initialFilters);
  }, [initialFilters]);

  const setFilters = useCallback((newFilters: Partial<T>) => {
    setFiltersState((prev) => ({
      ...prev,
      ...newFilters,
    }));
  }, []);

  return {
    filters,
    setFilter,
    resetFilters,
    setFilters,
  };
}

