import { Controller, Post, Body, Inject, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './interfaces/auth.interface';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController implements OnModuleInit {
  private authService!: AuthService;

  constructor(@Inject('AUTH_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthService>('AuthService');
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await firstValueFrom(this.authService.Register(registerDto));
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await firstValueFrom(this.authService.Login(loginDto));
  }
}
