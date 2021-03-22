import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoinController } from './coin/coin.controller';
import { CoinModule } from './coin/coin.module';

@Module({
  imports: [CoinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
