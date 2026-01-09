import { QueryClient, DefaultOptions } from '@tanstack/react-query';

export const CACHE_TIMES = {
  SHORT: 1 * 60 * 1000,
  MEDIUM: 5 * 60 * 1000,
  LONG: 30 * 60 * 1000,
  VERY_LONG: 60 * 60 * 1000,
} as const;

const smartRetry = (failureCount: number, error: unknown) => {
  if (failureCount >= 2) return false;

  const status = (error as { response?: { status?: number } })?.response?.status;

  if (status && status >= 400 && status < 500) {
    return false;
  }

  return true;
};

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: CACHE_TIMES.MEDIUM,
    gcTime: 10 * 60 * 1000,
    retry: smartRetry,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
    placeholderData: (previousData: unknown) => previousData,
  },
  mutations: {
    retry: 0,
    networkMode: 'online',
  },
};

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions,
  });