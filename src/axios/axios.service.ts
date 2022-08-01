import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosService {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      headers: {
        // can be common or any other method
        'X-Riot-Token': 'RGAPI-376d96f7-1017-45b2-b99f-8c50af8e6994',
      },
    });
  }

  async get(url: string): Promise<any> {
    const response = await this.client.get(url);
    return response.data;
  }
}
