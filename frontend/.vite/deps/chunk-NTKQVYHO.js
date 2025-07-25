import {
  totalSupply
} from "./chunk-7RMOJBQ3.js";
import {
  fetchTokenMetadata
} from "./chunk-ENFGUQ7C.js";
import {
  parseNFT
} from "./chunk-AEQBTGBF.js";
import {
  getNFT
} from "./chunk-KU7G4WMB.js";
import {
  detectMethod
} from "./chunk-AGSXJS3R.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IERC1155/read/uri.js
var FN_SELECTOR = "0x0e89341c";
var FN_INPUTS = [
  {
    name: "tokenId",
    type: "uint256"
  }
];
var FN_OUTPUTS = [
  {
    type: "string"
  }
];
function isUriSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
async function uri(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.tokenId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/read/getNFT.js
async function getNFT2(options) {
  const { useIndexer = true } = options;
  if (useIndexer) {
    try {
      return await getNFTFromInsight(options);
    } catch {
      return await getNFTFromRPC(options);
    }
  }
  return await getNFTFromRPC(options);
}
async function getNFTFromInsight(options) {
  const nft = await getNFT({
    chain: options.contract.chain,
    client: options.contract.client,
    contractAddress: options.contract.address,
    tokenId: options.tokenId
  });
  if (!nft) {
    return getNFTFromRPC(options);
  }
  return nft;
}
async function getNFTFromRPC(options) {
  const [tokenUri, supply] = await Promise.all([
    uri({
      contract: options.contract,
      tokenId: options.tokenId
    }),
    totalSupply({
      contract: options.contract,
      id: options.tokenId
      // in cases where the supply is not available -> fall back to 0
    }).catch(() => 0n)
  ]);
  return parseNFT(await fetchTokenMetadata({
    client: options.contract.client,
    tokenId: options.tokenId,
    tokenUri
  }).catch(() => ({
    id: options.tokenId,
    type: "ERC1155",
    uri: tokenUri
  })), {
    chainId: options.contract.chain.id,
    owner: null,
    supply,
    tokenAddress: options.contract.address,
    tokenId: options.tokenId,
    tokenUri,
    type: "ERC1155"
  });
}

export {
  isUriSupported,
  getNFT2 as getNFT
};
//# sourceMappingURL=chunk-NTKQVYHO.js.map
