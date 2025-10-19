import { appRouter } from '@repo/types/src/trpc';

describe('Trpc', () => {
  it('should be defined', () => {
    expect(appRouter).toBeDefined();
  });
});