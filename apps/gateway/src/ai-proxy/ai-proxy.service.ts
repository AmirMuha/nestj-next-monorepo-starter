import { Injectable } from '@nestjs/common';
import { DifyProxyStrategy } from './strategies/dify.strategy';

@Injectable()
export class AiProxyService {
  constructor(private readonly difyProxyStrategy: DifyProxyStrategy) {}

  async proxy(strategy: 'dify', request: any, userId: string) {
    if (strategy === 'dify') {
      return this.difyProxyStrategy.proxy(request, userId);
    }
    // In the future, you could add other strategies here
    // else if (strategy === 'other-ai-service') { ... }
    throw new Error('Invalid AI service strategy');
  }
}
