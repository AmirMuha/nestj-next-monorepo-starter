import { Test, TestingModule } from '@nestjs/testing';
import { DifyProxyController } from './dify-proxy.controller';
import { DifyProxyService } from './dify-proxy.service';
import { AbilityFactory } from '../auth/ability/ability.factory';
import { DifyHttpService } from './dify-http.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

describe('DifyProxyController', () => {
  let controller: DifyProxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [DifyProxyController],
      providers: [
        DifyProxyService,
        DifyHttpService,
        AbilityFactory,
        ConfigService,
      ],
    }).compile();

    controller = module.get<DifyProxyController>(DifyProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
