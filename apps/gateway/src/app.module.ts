import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AiProxyModule } from './ai-proxy/ai-proxy.module';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [AuthModule, AiProxyModule, TrpcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
