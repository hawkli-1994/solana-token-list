import {
  enums,
  type,
  Infer,
  number,
  string,
  optional,
  array,
  instance,
  coerce,
  union,
  boolean,
  any,
  nullable,
} from "superstruct";

// This is the schema for the data returned by the Coingecko API _coinsUrl

export type CoingeckoCoinSchema = Infer<typeof CoingeckoCoinSchema>;
export const CoingeckoCoinSchema = type({
  id: string(),
  name: string(),
  symbol: string(),
  platforms: optional(
    type({
      ethereum: optional(string()),
      oasys: optional(string()),
      "near-protocol": optional(string()),
      "step-network": optional(string()),
      "klay-token": optional(string()),
      velas: optional(string()),
      dogechain: optional(string()),
      canto: optional(string()),
      "arbitrum-nova": optional(string()),
      bitgert: optional(string()),
      kava: optional(string()),
      astar: optional(string()),
      cosmos: optional(string()),
      conflux: optional(string()),
      energi: optional(string()),
      "sx-network": optional(string()),
      evmos: optional(string()),
      elastos: optional(string()),
      "defi-kingdoms-blockchain": optional(string()),
      "milkomeda-cardano": optional(string()),
      syscoin: optional(string()),
      telos: optional(string()),
      moonbeam: optional(string()),
      avalanche: optional(string()),
      meter: optional(string()),
      "kucoin-community-chain": optional(string()),
      fuse: optional(string()),
      "metis-andromeda": optional(string()),
      "optimistic-ethereum": optional(string()),
      aurora: optional(string()),
      kardiachain: optional(string()),
      cronos: optional(string()),
      boba: optional(string()),
      ronin: optional(string()),
      sora: optional(string()),
      "okex-chain": optional(string()),
      "arbitrum-one": optional(string()),
      "harmony-shard-0": optional(string()),
      fantom: optional(string()),
      tomochain: optional(string()),
      solana: optional(string()),
      "binance-smart-chain": optional(string()),
      "polygon-pos": optional(string()),
      xdai: optional(string()),
    })
  ),
});

export type CoingeckoCoinsSchema = Infer<typeof CoingeckoCoinsSchema>;
export const CoingeckoCoinsSchema = type({
  data: array(CoingeckoCoinSchema),
});

// This is the schema for the data returned by the Coingecko API _stablecoinsUrl

const datetime = string();

export type CoingeckoStablecoinSchema = Infer<typeof CoingeckoStablecoinSchema>;
export const CoingeckoStablecoinSchema = type({
  id: string(),
  symbol: string(),
  name: string(),
  image: string(),
  current_price: optional(nullable(number())),
  market_cap: optional(nullable(number())),
  market_cap_rank: optional(nullable(number())),
  fully_diluted_valuation: optional(nullable(number())),
  total_volume: optional(nullable(number())),
  high_24h: optional(nullable(number())),
  low_24h: optional(nullable(number())),
  price_change_24h: optional(nullable(number())),
  price_change_percentage_24h: optional(nullable(number())),
  market_cap_change_24h: optional(nullable(number())),
  market_cap_change_percentage_24h: optional(nullable(number())),
  circulating_supply: optional(nullable(number())),
  total_supply: optional(nullable(number())),
  max_supply: optional(nullable(number())),
  ath: optional(nullable(number())),
  ath_change_percentage: optional(nullable(number())),
  ath_date: optional(nullable(datetime)),
  atl: optional(nullable(number())),
  atl_change_percentage: optional(nullable(number())),
  atl_date: optional(nullable(datetime)),
  roi: optional(nullable(optional(any()))),
  last_updated: nullable(datetime),
});

export type CoingeckoStablecoinsSchema = Infer<typeof CoingeckoStablecoinsSchema>;
export const CoingeckoStablecoinsSchema = type({
  data: array(CoingeckoStablecoinSchema),
});

// This is the schema for the data returned by the Coingecko API _tokenListUrl

export type CoingeckoTokenListSchemaExtension = Infer<typeof CoingeckoTokenListSchemaExtension>;
export const CoingeckoTokenListSchemaExtension = type({
  coingeckoId: optional(string()),
});

export type CoingeckoTokenListSchemaToken = Infer<typeof CoingeckoTokenListSchemaToken>;
export const CoingeckoTokenListSchemaToken = type({
  chainId: optional(nullable(number())),
  address: optional(string()),
  name: optional(string()),
  symbol: optional(string()),
  decimals: optional(number()),
  logoURI: optional(string()),
  extensions: optional(CoingeckoTokenListSchemaExtension),
  tags: optional(array(string())),
});

export type CoingeckoTokenListSchema = Infer<typeof CoingeckoTokenListSchema>;
export const CoingeckoTokenListSchema = type({
  name: optional(string()),
  logoURI: optional(string()),
  keywords: optional(array(string())),
  timestamp: optional(any()),
  tokens: array(CoingeckoTokenListSchemaToken),
  version: type({
    major: number(),
    minor: number(),
    patch: number(),
  }),
});
