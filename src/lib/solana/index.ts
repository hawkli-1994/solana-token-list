import axios from 'axios';
import { SolanaTokenInfo, SolanaENV, SolanaTokenList } from './types';
import solanaTokenlist from '../../tokens/solana.tokenlist.json';

export * from './types';

export type SolanaTokenInfoMap = Map<string, SolanaTokenInfo>;

export const CLUSTER_SLUGS: { [id: string]: SolanaENV } = {
  'mainnet-beta': SolanaENV.MainnetBeta,
  testnet: SolanaENV.Testnet,
  devnet: SolanaENV.Devnet,
};

export class SolanaGitHubTokenListResolutionStrategy {
  repositories = [
    'https://raw.githubusercontent.com/JuanRdBO/solana-token-list/main/src/tokens/solana.tokenlist.json',
  ];

  resolve = () => {
    return querySolanaJsonFiles(this.repositories);
  };
}

export class SolanaCDNTokenListResolutionStrategy {
  repositories = [
    'https://cdn.jsdelivr.net/gh/JuanRdBO/solana-token-list@latest/src/tokens/solana.tokenlist.json',
  ];

  resolve = () => {
    return querySolanaJsonFiles(this.repositories);
  };
}

// export class SolanaTokenListResolutionStrategy {
//   repositories = ["https://token-list.solana.com/solana.tokenlist.json"];

//   resolve = () => {
//     return queryJsonFiles(this.repositories);
//   };
// }

const querySolanaJsonFiles = async (files: string[]) => {
  const responses: SolanaTokenList[] = (await Promise.all(
    files.map(async (repo) => {
      try {
        const config = {
          headers: {
            'Accept-Encoding': '*',
          },
        };
        const response = (await axios.get(repo, config))
          ?.data as SolanaTokenList;

        return response;
      } catch {
        console.info(
          `@solana/token-registry: falling back to static repository.`
        );
        return solanaTokenlist;
      }
    })
  )) as SolanaTokenList[];

  return responses
    .map((tokenlist: SolanaTokenList) => tokenlist.tokens || [])
    .reduce((acc, arr) => (acc as SolanaTokenInfo[]).concat(arr), []);
};

export enum SolanaStrategy {
  GitHub = 'GitHub',
  Static = 'Static',
  //   Solana = "Solana",
  CDN = 'CDN',
}

export class SolanaStaticTokenListResolutionStrategy {
  resolve = () => {
    // @ts-ignore
    return solanaTokenlist.tokens || [];
  };
}

export class SolanaTokenListContainer {
  constructor(private tokenList: SolanaTokenInfo[]) {}

  filterByTag = (tag: string) => {
    return new SolanaTokenListContainer(
      this.tokenList.filter((item) => (item.tags || []).includes(tag))
    );
  };

  filterByChainId = (chainId: number | SolanaENV) => {
    return new SolanaTokenListContainer(
      this.tokenList.filter((item) => item.chainId === chainId)
    );
  };

  excludeByChainId = (chainId: number | SolanaENV) => {
    return new SolanaTokenListContainer(
      this.tokenList.filter((item) => item.chainId !== chainId)
    );
  };

  excludeByTag = (tag: string) => {
    return new SolanaTokenListContainer(
      this.tokenList.filter((item) => !(item.tags || []).includes(tag))
    );
  };

  filterByClusterSlug = (slug: string) => {
    if (slug in CLUSTER_SLUGS) {
      return this.filterByChainId(CLUSTER_SLUGS[slug]);
    }
    throw new Error(
      `Unknown slug: ${slug}, please use one of ${Object.keys(CLUSTER_SLUGS)}`
    );
  };

  getList = () => {
    return this.tokenList;
  };
}
