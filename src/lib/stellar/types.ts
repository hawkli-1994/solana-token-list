export interface StellarTokenInfo {
  symbol: string;
  address: string;
  domain: string;
  logoURI?: string;
}

export enum StellarStrategy {
  Static = 'Static',
}
