import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

const COINGECKO_URL = "https://api.coingecko.com/api/v3";

@Injectable()
export class CoinApiService {
    constructor(private httpService: HttpService) {}

    async getAllCoins(): Promise<any[]> {
        const response = await this.httpService.get(`${COINGECKO_URL}/coins/list`).toPromise();
        return response.data;
    }

    async getCoin(id): Promise<any> {
        const response = await this.httpService.get(`${COINGECKO_URL}/coins/${id}`).toPromise();
        return response.data;
    }
}
