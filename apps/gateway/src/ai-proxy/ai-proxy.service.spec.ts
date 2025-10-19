import { Test, TestingModule } from '@nestjs/testing';
import { AiProxyService } from './ai-proxy.service';
import { AiHttpService } from './ai-http.service';
import { HttpModule } from '@nestjs/axios';
import { DifyProxyStrategy } from './strategies/dify.strategy';
import { ConfigService } from '@nestjs/config';

describe('AiProxyService', () => {
  let service: AiProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        AiProxyService,
        AiHttpService,
        DifyProxyStrategy,
        ConfigService,
      ],
    }).compile();

    service = module.get<AiProxyService>(AiProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
