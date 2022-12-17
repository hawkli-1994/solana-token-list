import fetchTokensAndWriteToFile from "./sources/coingeckoTokens";

(async function () {
  await fetchTokensAndWriteToFile();
})();
