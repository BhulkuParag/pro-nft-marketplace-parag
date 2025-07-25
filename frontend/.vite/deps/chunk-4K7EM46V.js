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

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IERC721A/read/tokenURI.js
var FN_SELECTOR = "0xc87b56dd";
var FN_INPUTS = [
  {
    name: "_tokenId",
    type: "uint256"
  }
];
var FN_OUTPUTS = [
  {
    type: "string"
  }
];
function isTokenURISupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
async function tokenURI(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.tokenId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IERC721Enumerable/read/tokenByIndex.js
var FN_SELECTOR2 = "0x4f6ccce7";
var FN_INPUTS2 = [
  {
    name: "_index",
    type: "uint256"
  }
];
var FN_OUTPUTS2 = [
  {
    type: "uint256"
  }
];
async function tokenByIndex(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2],
    params: [options.index]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc721/read/getNFT.js
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
    includeOwners: options.includeOwner,
    tokenId: options.tokenId
  });
  if (!nft) {
    return getNFTFromRPC(options);
  }
  return nft;
}
async function getNFTFromRPC(options) {
  let tokenId = options.tokenId;
  if (options.tokenByIndex) {
    try {
      tokenId = await tokenByIndex({
        contract: options.contract,
        index: options.tokenId
      });
    } catch {
    }
  }
  const [uri, owner] = await Promise.all([
    tokenURI({ contract: options.contract, tokenId }).catch(() => null),
    options.includeOwner ? import("./ownerOf-CXHPMSLH.js").then((m) => m.ownerOf({ contract: options.contract, tokenId })).catch(() => null) : null
  ]);
  if (!(uri == null ? void 0 : uri.trim())) {
    return parseNFT({
      id: tokenId,
      type: "ERC721",
      uri: ""
    }, {
      chainId: options.contract.chain.id,
      owner,
      tokenAddress: options.contract.address,
      tokenId,
      tokenUri: "",
      type: "ERC721"
    });
  }
  return parseNFT(await fetchTokenMetadata({
    client: options.contract.client,
    tokenId,
    tokenUri: uri
  }).catch(() => ({
    id: tokenId,
    type: "ERC721",
    uri
  })), {
    chainId: options.contract.chain.id,
    owner,
    tokenAddress: options.contract.address,
    tokenId,
    tokenUri: uri,
    type: "ERC721"
  });
}

export {
  isTokenURISupported,
  getNFT2 as getNFT
};
//# sourceMappingURL=chunk-4K7EM46V.js.map
