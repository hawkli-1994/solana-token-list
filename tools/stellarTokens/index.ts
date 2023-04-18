import axios from 'axios';
import { Json } from '../coingeckoTokens/types';
import { _stellarTokensPath } from '../coingeckoTokens/constants';
import * as fs from 'fs';

export async function fetchStellarTokens() {
  const config = {
    headers: {
      'Accept-Encoding': '*',
    },
  };
  const rawCreitTech = await axios.get(
    'https://raw.githubusercontent.com/Creit-Tech/stellar-assets/main/dist/curated-by-creit-tech.json',
    config
  );

  // transform the data to look like the solana tokenlist
  const updatedObject = {
    ...rawCreitTech.data,
    tokens: rawCreitTech.data.assets.map(
      ({
        code,
        publicKey,
        image,
        ...rest
      }: {
        code: string;
        publicKey: string;
        image: string;
      }) => ({
        symbol: code,
        address: publicKey,
        logoURI: image,
        ...rest,
      })
    ),
  };

  // remove the assets key as it is not needed
  delete updatedObject.assets;

  return updatedObject;
}

async function writeToFile(
  stellarTokens: Json,
  file = _stellarTokensPath
): Promise<void> {
  const allTokens = {
    ...stellarTokens,
    tokens: [...(stellarTokens.tokens || [])],
  };

  /*   console.log("allTokens: ", JSON.stringify(allTokens, null, 4));
    console.log("non-mainnet: ", JSON.stringify(nonMainnetTokens, null, 4)); */

  await fs.promises.writeFile(file, JSON.stringify(allTokens));
}

export default async function fetchStellarTokensAndWriteToFile() {
  // Get Stellar tokens
  const stellarTokens = await fetchStellarTokens();
  // Write to file
  await writeToFile(stellarTokens);
}
