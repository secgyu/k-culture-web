import { describe, it, expect } from 'vitest';
import { createQueryClient, CACHE_TIMES } from './query-client';

describe('Query Client', () => {
  it('CACHE_TIMES 상수가 정의되어야 함', () => {
    expect(CACHE_TIMES.SHORT).toBe(60000);
    expect(CACHE_TIMES.MEDIUM).toBe(300000);
    expect(CACHE_TIMES.LONG).toBe(1800000);
    expect(CACHE_TIMES.VERY_LONG).toBe(3600000);
  });

  it('QueryClient를 생성할 수 있어야 함', () => {
    const client = createQueryClient();
    expect(client).toBeDefined();
  });

  it('기본 옵션이 올바르게 설정되어야 함', () => {
    const client = createQueryClient();
    const options = client.getDefaultOptions();

    expect(options.queries?.staleTime).toBe(CACHE_TIMES.MEDIUM);
    expect(options.queries?.refetchOnWindowFocus).toBe(false);
    expect(options.mutations?.retry).toBe(0);
  });
});
