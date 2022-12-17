const SOLANA_TOKEN_TAGS = {
  stablecoin: {
    name: "stablecoin",
    description: "Tokens that are fixed to an external asset, e.g. the US dollar",
  },
  ethereum: {
    name: "ethereum",
    description: "Asset bridged from ethereum",
  },
  "lp-token": {
    name: "lp-token",
    description: "Asset representing liquidity provider token",
  },
  "wrapped-sollet": {
    name: "wrapped-sollet",
    description: "Asset wrapped using sollet bridge",
  },
  wrapped: {
    name: "wrapped",
    description: "Asset wrapped using wormhole bridge",
  },
  leveraged: {
    name: "leveraged",
    description: "Leveraged asset",
  },
  bull: {
    name: "bull",
    description: "Leveraged Bull asset",
  },
  bear: {
    name: "bear",
    description: "Leveraged Bear asset",
  },
  nft: {
    name: "nft",
    description: "Non-fungible token",
  },
  "security-token": {
    name: "security-token",
    description: "Tokens that are used to gain access to an electronically restricted resource",
  },
  "utility-token": {
    name: "utility-token",
    description:
      "Tokens that are designed to be spent within a certain blockchain ecosystem e.g. most of the SPL-Tokens",
  },
  "tokenized-stock": {
    name: "tokenized-stock",
    description:
      "Tokenized stocks are tokenized derivatives that represent traditional securities, particularly shares in publicly firms traded on regulated exchanges",
  },
};

export default SOLANA_TOKEN_TAGS;
