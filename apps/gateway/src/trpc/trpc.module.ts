import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcAppRouter } from './trpc-app-router.provider';
import { TrpcModule as NestTrpcModule } from 'nestjs-trpc';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    NestTrpcModule.forRootAsync({
      imports: [TrpcModule],
      inject: [TrpcAppRouter],
      useFactory: (router: TrpcAppRouter) => ({
        path: '/trpc',
        router: router.router,
      }),
    }),
    ClientsModule.registerAsync([
      {
        name: 'AUTH_SERVICE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            package: 'auth',
            protoPath: join(
              __dirname,
              '../../../packages/proto/src/auth.proto',
            ),
            url: `${configService.get('AUTH_SERVICE_HOST')}:${configService.get('AUTH_SERVICE_PORT')}`,
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [TrpcService, TrpcAppRouter],
  exports: [TrpcService],
})
export class TrpcModule {}
