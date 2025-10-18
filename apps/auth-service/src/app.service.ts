import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RegisterRequest, LoginRequest } from './proto/auth';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: RegisterRequest) {
    if (!data.password || !data.email) {
      throw new Error('Email and password are required');
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        // In a real app, you'd have a default plan or a way to select one
        plan: {
          create: {
            name: 'free',
            maxChatbots: 1,
            maxDocuments: 5,
            featuresJson: '[]',
          },
        },
      },
    });
    return { id: user.id, email: user.email };
  }

  async login(data: LoginRequest) {
    if (!data.email || !data.password) {
      throw new Error('Email and password are required');
    }
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    const token = this.jwtService.sign({ userId: user.id });
    return { token };
  }
}