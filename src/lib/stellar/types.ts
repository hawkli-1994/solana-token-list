export interface StellarTokenInfo {
  symbol: string;
  name?: string;
  address: string;
  domain: string;
  logoURI?: string;
  coingeckoId?: string;
}

export enum StellarStrategy {
  Static = 'Static',
}
