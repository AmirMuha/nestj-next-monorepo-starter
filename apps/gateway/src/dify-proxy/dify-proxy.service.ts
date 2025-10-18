import { Injectable } from '@nestjs/common';
import { DifyHttpService } from './dify-http.service';

@Injectable()
export class DifyProxyService {
  constructor(private readonly difyHttpService: DifyHttpService) {}

  async proxyToDify(request: any, userId: string) {
    // 1. Validate user permissions (mocked for this example)
    console.log(`Validating permissions for user ${userId}`);

    // 2. Add Dify authentication headers
    const difyApiKey = process.env.DIFY_API_KEY;
    const headers = {
      ...request.headers,
      Authorization: `Bearer ${difyApiKey}`,
    };

    // 3. Forward request
    const difyApiUrl = 'https://api.dify.ai/v1'; // Example Dify API URL
    const { method, body, url } = request;
    const fullUrl = `${difyApiUrl}${url}`;

    console.log(`Forwarding request to ${fullUrl}`);

    try {
      const response = await this.difyHttpService.requestWithRetry(
        {
          method,
          url: fullUrl,
          data: body,
          headers,
        },
        userId,
      );

      // 4. Log activity
      console.log(`Request to Dify successful for user ${userId}`);

      // 5. Sync relevant data to your DB (mocked)
      console.log('Syncing data to DB...');

      return response.data;
    } catch (error) {
      console.error('Error proxying to Dify:', error);
      throw error;
    }
  }
}