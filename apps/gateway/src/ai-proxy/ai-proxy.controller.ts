import { Controller, All, Req, UseGuards } from '@nestjs/common';
import { AiProxyService } from './ai-proxy.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PoliciesGuard } from '../auth/guards/policies.guard';
import { CheckPolicies } from '../auth/decorators/check-policies.decorator';
import { Action, AppAbility, Chatbot } from '../auth/ability/ability.factory';
import type { Request } from 'express';

@Controller('ai')
export class AiProxyController {
  constructor(private readonly aiProxyService: AiProxyService) {}

  @All('dify/*')
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Create, Chatbot))
  proxy(@Req() req: Request) {
    const userId = (req.user as any).userId;
    return this.aiProxyService.proxy('dify', req, userId);
  }
}