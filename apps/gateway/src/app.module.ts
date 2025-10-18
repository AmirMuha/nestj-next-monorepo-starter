import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DifyProxyModule } from './dify-proxy/dify-proxy.module';

@Module({
  imports: [AuthModule, DifyProxyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
