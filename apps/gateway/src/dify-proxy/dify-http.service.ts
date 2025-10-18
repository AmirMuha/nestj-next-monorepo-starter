import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DifyHttpService {
  constructor(private readonly httpService: HttpService) {}

  private async refreshToken(userId: string) {
    // In a real app, you would implement the token refresh logic here.
    // This would involve making a request to the Dify API to get a new token
    // and then updating the user's token in your database.
    console.log(`Refreshing token for user ${userId}`);
    return 'new_token';
  }

  async requestWithRetry(config: AxiosRequestConfig, userId: string) {
    try {
      return await firstValueFrom(this.httpService.request(config));
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('Token expired, refreshing...');
        const newToken = await this.refreshToken(userId);
        if (config.headers) {
          config.headers.Authorization = `Bearer ${newToken}`;
        }
        return await firstValueFrom(this.httpService.request(config));
      }
      throw error;
    }
  }
}