import { Injectable } from '@nestjs/common';
import { TrpcService } from 'nestjs-trpc';
import { z } from 'zod';
import { AuthService } from '../auth/interfaces/auth.interface';
import { firstValueFrom } from 'rxjs';
import { TrpcService as RootTrpcService } from './trpc.service';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: RootTrpcService,
    private readonly authService: AuthService,
  ) {}

  router = this.trpc.router({
    login: this.trpc.procedure
      .input(z.object({ email: z.string(), password: z.string() }))
      .mutation(async ({ input }) => {
        const response = await firstValueFrom(this.authService.Login(input));
        return response;
      }),
    register: this.trpc.procedure
      .input(z.object({ email: z.string(), password: z.string() }))
      .mutation(async ({ input }) => {
        const response = await firstValueFrom(this.authService.Register(input));
        return response;
      }),
  });
}

export type AppRouter = TrpcRouter['router'];