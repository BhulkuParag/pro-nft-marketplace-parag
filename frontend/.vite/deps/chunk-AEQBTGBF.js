import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  isAddress
} from "./chunk-6WE3JIZ5.js";
import {
  getCachedChain
} from "./chunk-CYZDLLAL.js";

// node_modules/thirdweb/dist/esm/utils/nft/parseNft.js
function parseNFT(base, options) {
  switch (options.type) {
    case "ERC721":
      return {
        chainId: options.chainId,
        id: options.tokenId,
        metadata: base,
        owner: (options == null ? void 0 : options.owner) ?? null,
        tokenAddress: options.tokenAddress,
        tokenURI: options.tokenUri,
        type: options.type
      };
    case "ERC1155":
      return {
        chainId: options.chainId,
        id: options.tokenId,
        metadata: base,
        owner: (options == null ? void 0 : options.owner) ?? null,
        supply: options.supply,
        tokenAddress: options.tokenAddress,
        tokenURI: options.tokenUri,
        type: options.type
      };
    default:
      throw new Error("Invalid NFT type");
  }
}
async function parseNftUri(options) {
  let uri = options.uri;
  if (uri.startsWith("did:nft:")) {
    uri = uri.replace("did:nft:", "").replace(/_/g, "/");
  }
  const [reference = "", asset_namespace = "", tokenID = ""] = uri.split("/");
  const [eip_namespace, chainID] = reference.split(":");
  const [erc_namespace, contractAddress] = asset_namespace.split(":");
  if (!eip_namespace || eip_namespace.toLowerCase() !== "eip155") {
    throw new Error(`Invalid EIP namespace, expected EIP155, got: "${eip_namespace}"`);
  }
  if (!chainID) {
    throw new Error("Chain ID not found");
  }
  if (!contractAddress || !isAddress(contractAddress)) {
    throw new Error("Contract address not found");
  }
  if (!tokenID) {
    throw new Error("Token ID not found");
  }
  const chain = getCachedChain(Number(chainID));
  const contract = getContract({
    address: contractAddress,
    chain,
    client: options.client
  });
  switch (erc_namespace) {
    case "erc721": {
      const { getNFT } = await import("./getNFT-IOAJT3LN.js");
      const nft = await getNFT({
        contract,
        tokenId: BigInt(tokenID)
      });
      return nft.metadata.image ?? null;
    }
    case "erc1155": {
      const { getNFT } = await import("./getNFT-VHIOAPQF.js");
      const nft = await getNFT({
        contract,
        tokenId: BigInt(tokenID)
      });
      return nft.metadata.image ?? null;
    }
    default: {
      throw new Error(`Invalid ERC namespace, expected ERC721 or ERC1155, got: "${erc_namespace}"`);
    }
  }
}

export {
  parseNFT,
  parseNftUri
};
//# sourceMappingURL=chunk-AEQBTGBF.js.map
