import { HttpModule, HttpService, Module } from '@nestjs/common';
import { CoinApiService } from './coin-api.service';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';

@Module({
    imports: [HttpModule],
    controllers: [CoinController],
    providers: [CoinService, CoinApiService]
  })
export class CoinModule {}
