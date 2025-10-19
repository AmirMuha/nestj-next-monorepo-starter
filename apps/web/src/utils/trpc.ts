import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@repo/types/src/trpc';

export const trpc = createTRPCReact<AppRouter>();