import { Module } from '@nestjs/common';
import { DifyProxyController } from './dify-proxy.controller';
import { DifyProxyService } from './dify-proxy.service';
import { HttpModule } from '@nestjs/axios';
import { DifyHttpService } from './dify-http.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [DifyProxyController],
  providers: [DifyProxyService, DifyHttpService],
})
export class DifyProxyModule {}