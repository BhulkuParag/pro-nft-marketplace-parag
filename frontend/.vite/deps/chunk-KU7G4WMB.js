import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  getAddress
} from "./chunk-6WE3JIZ5.js";
import {
  getCachedChain
} from "./chunk-CYZDLLAL.js";

// node_modules/thirdweb/dist/esm/insight/get-nfts.js
async function getOwnedNFTs(args) {
  var _a;
  const [{ getV1Nfts }, { getThirdwebDomains }, { getClientFetch }, { assertInsightEnabled }, { stringify }] = await Promise.all([
    import("./thirdweb-53K6KZPK.js"),
    import("./domains-PZ44HVSZ.js"),
    import("./fetch-IVMONMJP.js"),
    import("./common-TPROLQRW.js"),
    import("./_esm-BAMXGFEE.js")
  ]);
  const { client, chains, ownerAddress, queryOptions } = args;
  await assertInsightEnabled(chains);
  const defaultQueryOptions = {
    chain: chains.map((chain) => chain.id),
    // metadata: includeMetadata ? "true" : "false", TODO (insight): add support for this
    limit: 50,
    owner_address: ownerAddress
  };
  const result = await getV1Nfts({
    baseUrl: `https://${getThirdwebDomains().insight}`,
    fetch: getClientFetch(client),
    query: {
      ...defaultQueryOptions,
      ...queryOptions
    }
  });
  if (result.error) {
    throw new Error(`${result.response.status} ${result.response.statusText} - ${result.error ? stringify(result.error) : "Unknown error"}`);
  }
  const transformedNfts = await transformNFTModel(((_a = result.data) == null ? void 0 : _a.data) ?? [], client, ownerAddress);
  return transformedNfts.map((nft) => ({
    ...nft,
    quantityOwned: nft.quantityOwned ?? 1n
  }));
}
async function getContractNFTs(args) {
  var _a;
  const [{ getV1NftsByContractAddress }, { getThirdwebDomains }, { getClientFetch }, { assertInsightEnabled }, { stringify }] = await Promise.all([
    import("./thirdweb-53K6KZPK.js"),
    import("./domains-PZ44HVSZ.js"),
    import("./fetch-IVMONMJP.js"),
    import("./common-TPROLQRW.js"),
    import("./json-IBHY24UA.js")
  ]);
  const { client, chains, contractAddress, includeOwners = true, queryOptions } = args;
  const defaultQueryOptions = {
    chain: chains.map((chain) => chain.id),
    include_owners: includeOwners === true ? "true" : "false",
    // metadata: includeMetadata ? "true" : "false", TODO (insight): add support for this
    limit: 50
  };
  await assertInsightEnabled(chains);
  const result = await getV1NftsByContractAddress({
    baseUrl: `https://${getThirdwebDomains().insight}`,
    fetch: getClientFetch(client),
    path: {
      contract_address: contractAddress
    },
    query: {
      ...defaultQueryOptions,
      ...queryOptions
    }
  });
  if (result.error) {
    throw new Error(`${result.response.status} ${result.response.statusText} - ${result.error ? stringify(result.error) : "Unknown error"}`);
  }
  return transformNFTModel(((_a = result.data) == null ? void 0 : _a.data) ?? [], client);
}
async function getNFT(args) {
  var _a;
  const [{ getV1NftsByContractAddressByTokenId }, { getThirdwebDomains }, { getClientFetch }, { assertInsightEnabled }, { stringify }] = await Promise.all([
    import("./thirdweb-53K6KZPK.js"),
    import("./domains-PZ44HVSZ.js"),
    import("./fetch-IVMONMJP.js"),
    import("./common-TPROLQRW.js"),
    import("./json-IBHY24UA.js")
  ]);
  const { client, chain, contractAddress, tokenId, includeOwners = true, queryOptions } = args;
  await assertInsightEnabled([chain]);
  const defaultQueryOptions = {
    chain_id: [chain.id],
    include_owners: includeOwners === true ? "true" : "false"
  };
  const result = await getV1NftsByContractAddressByTokenId({
    baseUrl: `https://${getThirdwebDomains().insight}`,
    fetch: getClientFetch(client),
    path: {
      contract_address: contractAddress,
      token_id: tokenId.toString()
    },
    query: {
      ...defaultQueryOptions,
      ...queryOptions
    }
  });
  if (result.error) {
    throw new Error(`${result.response.status} ${result.response.statusText} - ${result.error ? stringify(result.error) : "Unknown error"}`);
  }
  const transformedNfts = await transformNFTModel(((_a = result.data) == null ? void 0 : _a.data) ?? [], client);
  return transformedNfts == null ? void 0 : transformedNfts[0];
}
async function transformNFTModel(nfts, client, ownerAddress) {
  const [{ parseNFT }, { totalSupply }] = await Promise.all([
    import("./parseNft-UBD5KD53.js"),
    import("./totalSupply-2QSLZU3F.js")
  ]);
  return await Promise.all(nfts.map(async (nft) => {
    var _a;
    let parsedNft;
    const {
      contract,
      // biome-ignore lint/correctness/noUnusedVariables: explicitly unused to not include it in the resulting metadata
      extra_metadata,
      // biome-ignore lint/correctness/noUnusedVariables: explicitly unused to not include it in the resulting metadata
      collection,
      metadata_url,
      // biome-ignore lint/correctness/noUnusedVariables: explicitly unused to not include it in the resulting metadata
      chain_id,
      token_id,
      // biome-ignore lint/correctness/noUnusedVariables: explicitly unused to not include it in the resulting metadata
      status,
      balance,
      // biome-ignore lint/correctness/noUnusedVariables: explicitly unused to not include it in the resulting metadata
      token_type,
      ...rest
    } = nft;
    let metadataToUse = rest;
    let owners = ownerAddress ? [getAddress(ownerAddress)] : void 0;
    if ("owner_addresses" in rest) {
      const { owner_addresses, ...restWithoutOwnerAddresses } = rest;
      metadataToUse = restWithoutOwnerAddresses;
      owners = owners ?? (owner_addresses == null ? void 0 : owner_addresses.map((o) => getAddress(o)));
    }
    const metadata = replaceIPFSGatewayRecursively({
      attributes: ((_a = nft.extra_metadata) == null ? void 0 : _a.attributes) ?? void 0,
      image: nft.image_url,
      uri: nft.metadata_url ?? "",
      ...metadataToUse
    });
    if ((contract == null ? void 0 : contract.type) === "erc1155") {
      const supply = await totalSupply({
        contract: getContract({
          address: contract.address,
          chain: getCachedChain(contract.chain_id),
          client
        }),
        id: BigInt(token_id)
      }).catch(() => 0n);
      parsedNft = parseNFT(metadata, {
        chainId: (contract == null ? void 0 : contract.chain_id) ?? 0,
        owner: owners == null ? void 0 : owners[0],
        supply,
        tokenAddress: (contract == null ? void 0 : contract.address) ?? "",
        tokenId: BigInt(token_id),
        tokenUri: replaceIPFSGateway(metadata_url) ?? "",
        type: "ERC1155"
      });
    } else {
      parsedNft = parseNFT(metadata, {
        chainId: (contract == null ? void 0 : contract.chain_id) ?? 0,
        owner: owners == null ? void 0 : owners[0],
        tokenAddress: (contract == null ? void 0 : contract.address) ?? "",
        tokenId: BigInt(token_id),
        tokenUri: replaceIPFSGateway(metadata_url) ?? "",
        type: "ERC721"
      });
    }
    return {
      ...parsedNft,
      ...(contract == null ? void 0 : contract.type) === "erc1155" ? { quantityOwned: balance ? BigInt(balance) : void 0 } : {}
    };
  }));
}
function replaceIPFSGatewayRecursively(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = replaceIPFSGateway(obj[key]);
    } else {
      replaceIPFSGatewayRecursively(obj[key]);
    }
  }
  return obj;
}
function replaceIPFSGateway(url) {
  if (!url || typeof url !== "string") {
    return url;
  }
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.host.endsWith(".ipfscdn.io")) {
      const paths = parsedUrl.pathname.split("/");
      const index = paths.findIndex((path) => path === "ipfs");
      if (index === -1) {
        return url;
      }
      const ipfsHash = paths.slice(index + 1).join("/");
      if (ipfsHash) {
        return `ipfs://${ipfsHash}`;
      }
      return url;
    }
  } catch {
    return url;
  }
  return url;
}

export {
  getOwnedNFTs,
  getContractNFTs,
  getNFT
};
//# sourceMappingURL=chunk-KU7G4WMB.js.map
