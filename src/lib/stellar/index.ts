import stellarTokenlist from '../../tokens/stellar.tokenlist.json';
import { StellarTokenInfo } from './types';

export * from './types';

export class StellarStaticTokenListResolutionStrategy {
  resolve = () => {
    return stellarTokenlist.tokens || [];
  };
}

export class StellarTokenListContainer {
  constructor(private tokenList: StellarTokenInfo[]) {}

  getList = () => {
    return this.tokenList;
  };
}
