import { Injectable } from '@nestjs/common';
import { CoinApiService } from './coin-api.service';
import { Coin, SimplifiedCoin } from './coin.entity';

@Injectable()
export class CoinService {
    constructor(private coinApiService: CoinApiService) {}

    async findAll(): Promise<SimplifiedCoin[]> {
        const data = await this.coinApiService.getAllCoins();
        return data.map(coin => new SimplifiedCoin().mapFromCoinGecko(coin));
    }

    async findOne(id): Promise<Coin> {
        const coin = await this.coinApiService.getCoin(id);
        return new Coin().mapFromCoinGecko(coin);
      }
}
