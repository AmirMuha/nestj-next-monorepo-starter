import { Module } from '@nestjs/common';
import { AiProxyController } from './ai-proxy.controller';
import { AiProxyService } from './ai-proxy.service';
import { HttpModule } from '@nestjs/axios';
import { AiHttpService } from './ai-http.service';
import { AuthModule } from '../auth/auth.module';
import { DifyProxyStrategy } from './strategies/dify.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, AuthModule, ConfigModule],
  controllers: [AiProxyController],
  providers: [AiProxyService, AiHttpService, DifyProxyStrategy],
})
export class AiProxyModule {}
