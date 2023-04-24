export interface StellarTokenInfo {
  symbol: string;
  name?: string;
  address: string;
  domain: string;
  logoURI?: string;
  coingeckoId?: string;
  coincodexId?: string;
}

export enum StellarStrategy {
  Static = 'Static',
}
