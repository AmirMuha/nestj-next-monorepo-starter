import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import type { RegisterRequest, LoginRequest } from './proto/auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AuthService', 'Register')
  register(data: RegisterRequest) {
    return this.appService.register(data);
  }

  @GrpcMethod('AuthService', 'Login')
  login(data: LoginRequest) {
    return this.appService.login(data);
  }
}