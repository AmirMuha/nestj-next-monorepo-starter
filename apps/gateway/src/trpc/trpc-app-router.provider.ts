import { Injectable, Inject } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { z } from 'zod';
import { AuthService } from '../auth/interfaces/auth.interface';
import { firstValueFrom } from 'rxjs';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class TrpcAppRouter {
  constructor(
    private readonly trpc: TrpcService,
    @Inject('AUTH_SERVICE') private readonly client: ClientGrpc,
  ) {}

  private get authService() {
    return this.client.getService<AuthService>('AuthService');
  }

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

export type AppRouter = TrpcAppRouter['router'];
