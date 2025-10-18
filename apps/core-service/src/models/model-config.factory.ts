import { Plan } from '@repo/types';

interface ModelConfig {
  model: string;
  maxTokens: number;
}

export class ModelConfigFactory {
  createDefaultConfig(plan: Plan): ModelConfig {
    if (plan.name === 'free') {
      return {
        model: 'gpt-3.5-turbo',
        maxTokens: 500,
      };
    } else if (plan.name === 'premium') {
      return {
        model: 'gpt-4',
        maxTokens: 2000,
      };
    }
    // Default config
    return {
      model: 'gpt-3.5-turbo',
      maxTokens: 500,
    };
  }
}