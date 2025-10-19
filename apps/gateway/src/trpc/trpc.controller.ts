import { Controller, All, Req, Res, Inject, OnModuleInit } from '@nestjs/common';
import { appRouter, createContext } from '@repo/types/src/trpc';
import * as trpcExpress from '@trpc/server/adapters/express';
import type { Request, Response, NextFunction } from 'express';
import type { ClientGrpc } from '@nestjs/microservices';
import type { AuthService } from '../auth/interfaces/auth.interface';

@Controller('trpc')
export class TrpcController implements OnModuleInit {
  private authService!: AuthService;

  constructor(@Inject('AUTH_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthService>('AuthService');
  }

  @All('*')
  async handle(@Req() req: Request, @Res() res: Response, next: NextFunction) {
    const handler = trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext: () => createContext(this.authService),
    });

    return handler(req, res, next);
  }
}