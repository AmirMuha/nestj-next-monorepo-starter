import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AiHttpService } from '../ai-http.service';

@Injectable()
export class DifyProxyStrategy {
  constructor(
    private readonly httpService: AiHttpService,
    private readonly configService: ConfigService,
  ) {}

  async proxy(request: any, userId: string) {
    const difyApiKey = this.configService.get<string>('DIFY_API_KEY');
    const headers = {
      ...request.headers,
      Authorization: `Bearer ${difyApiKey}`,
    };

    const difyApiUrl = this.configService.get<string>('DIFY_API_URL');
    const { method, body, url } = request;
    const fullUrl = `${difyApiUrl}${url}`;

    try {
      const response = await this.httpService.requestWithRetry(
        {
          method,
          url: fullUrl,
          data: body,
          headers,
        },
        userId,
      );

      return response.data;
    } catch (error) {
      console.error('Error proxying to Dify:', error);
      throw error;
    }
  }
}