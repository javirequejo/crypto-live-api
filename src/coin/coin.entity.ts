export class Coin {
    id: string;
    symbol: string;
    name: string;
    description: string;
    image: string;
    genesis_date: string;
    market_data: CoinMarketData;

    mapFromCoinGecko = coin => {
        this.id = coin.id;
        this.symbol = coin.symbol;
        this.name = coin.name;
        this.description = coin.description.en;
        this.image = coin.image.large;
        this.genesis_date = coin.genesis_date;
        this.market_data  = new CoinMarketData().mapFromCoinGecko(coin.market_data);
        return this;
    }
}

export class CoinMarketData {
    current_price: Currencies;
    market_cap: Currencies;
    total_volume: Currencies;
    high_24h: Currencies;
    low_24h: Currencies;
    ath: Currencies;
    market_cap_rank: number;
    last_updated: string;
    
    mapFromCoinGecko = marketData => {
        this.market_cap_rank = marketData.market_cap_rank;
        this.last_updated = marketData.last_updated;
        this.current_price = new Currencies().mapFromCoinGecko(marketData.current_price);
        this.market_cap = new Currencies().mapFromCoinGecko(marketData.market_cap);
        this.total_volume = new Currencies().mapFromCoinGecko(marketData.total_volume);
        this.high_24h = new Currencies().mapFromCoinGecko(marketData.high_24h);
        this.low_24h = new Currencies().mapFromCoinGecko(marketData.low_24h);
        this.ath = new Currencies().mapFromCoinGecko(marketData.ath);
        return this;
    }
}

export class Currencies {
    usd: number;
    eur: number;
    gbp: number;
    
    mapFromCoinGecko = currency => {
        this.usd = currency.usd;
        this.eur = currency.eur;
        this.gbp = currency.gbp;
        
        return this;
    }
}

export class SimplifiedCoin {
    id: string;
    symbol: string;
    name: string;

    mapFromCoinGecko = coin => {
        this.id = coin.id;
        this.symbol = coin.symbol;
        this.name = coin.name;

        return this;
    }
}
