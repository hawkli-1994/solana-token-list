import { TokenListProvider } from ".";

(async function () {
  const tkList = await new TokenListProvider().resolve();

  console.log("tkList: ", tkList);
})();
