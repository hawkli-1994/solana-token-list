import fetchSolanaTokensAndWriteToFile from './coingeckoTokens';
import fetchStellarTokensAndWriteToFile from './stellarTokens';

(async function () {
  await fetchSolanaTokensAndWriteToFile();
  await fetchStellarTokensAndWriteToFile();
})();
