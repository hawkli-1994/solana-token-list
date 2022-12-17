type CoinData = {
  coingeckoId: string;
  isStablecoin: boolean;
};

type CoinMap = {
  [solAddress: string]: CoinData;
};

type Json = {
  [key: string]: any;
};

export { CoinData, CoinMap, Json };
