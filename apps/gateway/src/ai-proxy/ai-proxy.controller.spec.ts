import { Test, TestingModule } from '@nestjs/testing';
import { AiProxyController } from './ai-proxy.controller';
import { AiProxyService } from './ai-proxy.service';
import { AbilityFactory } from '../auth/ability/ability.factory';
import { AiHttpService } from './ai-http.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { DifyProxyStrategy } from './strategies/dify.strategy';

describe('AiProxyController', () => {
  let controller: AiProxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [AiProxyController],
      providers: [
        AiProxyService,
        AiHttpService,
        AbilityFactory,
        ConfigService,
        DifyProxyStrategy,
      ],
    }).compile();

    controller = module.get<AiProxyController>(AiProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
