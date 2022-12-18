const _coinsUrl = "https://api.coingecko.com/api/v3/coins/list?include_platform=true";
const _stablecoinsUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=stablecoins";
const _tokenListUrl = "https://tokens.coingecko.com/solana/all.json";
const _mainnetChainId = 101;
const _path = "./src/tokens/solana.tokenlist.json";

export { _coinsUrl, _stablecoinsUrl, _tokenListUrl, _mainnetChainId, _path };
