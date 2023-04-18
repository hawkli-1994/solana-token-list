import { TokenListProvider } from '.';

(async function () {
  const solanaTkList = await new TokenListProvider().resolveSolana();

  console.log('SOLANA tkList: ', solanaTkList);

  const stellarTkList = await new TokenListProvider().resolveStellar();

  console.log('STELLAR tkList: ', stellarTkList);
})();
