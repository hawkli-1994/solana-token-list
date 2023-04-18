import fs from 'fs';

import test from 'ava';
import { TokenListProvider } from '.';
import { SolanaStrategy, CLUSTER_SLUGS } from './solana';
import { SolanaENV, SolanaTokenInfo } from './solana/types';

test('Token list is filterable by a tag', async (t) => {
  const list = (
    await new TokenListProvider().resolveSolana(SolanaStrategy.Static)
  )
    .filterByChainId(SolanaENV.MainnetBeta)
    .filterByTag('nft')
    .getList();

  t.false(list.some((item) => item.symbol === 'SOL'));
});

test('Token list can exclude by a tag', async (t) => {
  const list = (
    await new TokenListProvider().resolveSolana(SolanaStrategy.Static)
  )
    .filterByChainId(SolanaENV.MainnetBeta)
    .excludeByTag('nft')
    .getList();

  // @ts-ignore
  t.false(list.some((item) => item.tags === ['nft']));
});

test('Token list can exclude by a chain', async (t) => {
  const list = (
    await new TokenListProvider().resolveSolana(SolanaStrategy.Static)
  )
    .excludeByChainId(SolanaENV.MainnetBeta)
    .getList();

  t.false(list.some((item) => item.chainId === SolanaENV.MainnetBeta));
});

test('Token list returns new object upon filter', async (t) => {
  const list = await new TokenListProvider().resolveSolana(
    SolanaStrategy.Static
  );
  const filtered = list.filterByChainId(SolanaENV.MainnetBeta);
  t.true(list !== filtered);
  t.true(list.getList().length !== filtered.getList().length);
});

test('Token list throws error when calling filterByClusterSlug with slug that does not exist', async (t) => {
  const list = await new TokenListProvider().resolveSolana(
    SolanaStrategy.Static
  );
  const error = await t.throwsAsync(
    async () => list.filterByClusterSlug('whoop'),
    { instanceOf: Error }
  );
  t.is(
    error?.message,
    `Unknown slug: whoop, please use one of ${Object.keys(CLUSTER_SLUGS)}`
  );
});

test('Token list is a valid json', async (t) => {
  t.notThrows(() => {
    const content = fs
      .readFileSync('./src/tokens/solana.tokenlist.json')
      .toString();
    JSON.parse(content.toString());
  });
});

test('Token list does not have duplicate entries', async (t) => {
  const list = await new TokenListProvider().resolveSolana(
    SolanaStrategy.Static
  );
  list
    .filterByChainId(SolanaENV.MainnetBeta)
    .getList()
    .reduce((agg, item) => {
      if (agg.has(item.address)) {
        console.log(item.address);
      }

      t.false(agg.has(item.address));
      agg.set(item.address, item);
      return agg;
    }, new Map<string, SolanaTokenInfo>());
});
