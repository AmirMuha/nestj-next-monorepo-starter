import { Test, TestingModule } from '@nestjs/testing';
import { DifyProxyService } from './dify-proxy.service';
import { DifyHttpService } from './dify-http.service';
import { HttpModule } from '@nestjs/axios';

describe('DifyProxyService', () => {
  let service: DifyProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [DifyProxyService, DifyHttpService],
    }).compile();

    service = module.get<DifyProxyService>(DifyProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
