export enum SolanaENV {
  MainnetBeta = 101,
  Testnet = 102,
  Devnet = 103,
}

export interface SolanaTokenList {
  readonly name: string;
  readonly logoURI: string;
  readonly tags: { [tag: string]: SolanaTagDetails };
  readonly timestamp: string;
  readonly tokens: SolanaTokenInfo[];
}

export interface SolanaTagDetails {
  readonly name: string;
  readonly description: string;
}

export interface SolanaTokenExtensions {
  readonly website?: string;
  readonly bridgeContract?: string;
  readonly assetContract?: string;
  readonly address?: string;
  readonly explorer?: string;
  readonly twitter?: string;
  readonly github?: string;
  readonly medium?: string;
  readonly tgann?: string;
  readonly tggroup?: string;
  readonly discord?: string;
  readonly serumV3Usdt?: string;
  readonly serumV3Usdc?: string;
  readonly coingeckoId?: string;
  readonly imageUrl?: string;
  readonly description?: string;
}

export interface SolanaTokenInfo {
  readonly chainId: number;
  readonly address: string;
  readonly name: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
  readonly tags?: string[];
  readonly extensions?: SolanaTokenExtensions;
}
