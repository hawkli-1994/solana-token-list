import SOLANA_TOKEN_TAGS from "./tags";
import SOLANA_TOKENS from "./tokens";

const SOLANA_TOKEN_LIST = {
  name: "Solana Token List",
  logoURI: "https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/solana/info/logo.png",
  keywords: ["solana", "spl"],
  tags: SOLANA_TOKEN_TAGS,
  timestamp: "2021-03-03T19:57:21+0000",
  tokens: SOLANA_TOKENS,
  version: {
    major: 0,
    minor: 3,
    patch: 3,
  },
};

function fetchOldTokens() {
  return SOLANA_TOKEN_LIST;
}

export { SOLANA_TOKEN_LIST, fetchOldTokens };
