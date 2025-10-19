import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { AuthService } from './auth.interface';

export const createContext = async (authService: AuthService) => {
  return {
    authService,
  };
};

const t = initTRPC.context<typeof createContext>().create();

export const appRouter = t.router({
  login: t.procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.authService.Login(input);
    }),
  register: t.procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.authService.Register(input);
    }),
});

export type AppRouter = typeof appRouter;