import { Controller, Get, Param } from '@nestjs/common';
import { Coin, SimplifiedCoin } from './coin.entity';
import { CoinService } from './coin.service';

@Controller('coins')
export class CoinController {
    constructor(private coinService: CoinService) {}

    @Get()
    async findAll(): Promise<SimplifiedCoin[]> {
        return await this.coinService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Coin> {
      return await this.coinService.findOne(id);
    }
}
