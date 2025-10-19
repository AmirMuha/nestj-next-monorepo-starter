import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const host = configService.get<string>('AUTH_SERVICE_HOST');
  const port = configService.get<string>('AUTH_SERVICE_PORT');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: join(__dirname, '../../../packages/proto/src/auth.proto'),
      url: `${host}:${port}`,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3002); // Make the auth-service listen on a port to ensure it stays alive
}
bootstrap();