import fetchTokensAndWriteToFile from "./coingeckoTokens";

(async function () {
  await fetchTokensAndWriteToFile();
})();
