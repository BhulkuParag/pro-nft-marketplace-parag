import {
  isERC1155,
  isERC721
} from "./chunk-ETTKCPT3.js";
import {
  getCurrencyMetadata
} from "./chunk-3AOHHKCD.js";
import {
  detectMethod
} from "./chunk-AGSXJS3R.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";
import {
  eth_getBlockByNumber
} from "./chunk-3DGGFYQ2.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
import {
  toTokens
} from "./chunk-UY2SRO54.js";

// node_modules/thirdweb/dist/esm/extensions/marketplace/utils.js
async function getNFTAsset(options) {
  const [erc721, erc1155] = await Promise.all([
    isERC721(options),
    isERC1155(options)
  ]);
  switch (true) {
    case erc721: {
      const { getNFT } = await import("./getNFT-IOAJT3LN.js");
      return getNFT(options);
    }
    case erc1155: {
      const { getNFT } = await import("./getNFT-VHIOAPQF.js");
      return getNFT(options);
    }
    default: {
      throw new Error("Contract is neither ERC721 nor ERC1155.");
    }
  }
}
function computeStatus(options) {
  switch (options.listingStatus) {
    case 1: {
      if (options.startTimestamp > options.blockTimeStamp) {
        return "CREATED";
      }
      if (options.endTimestamp < options.blockTimeStamp) {
        return "EXPIRED";
      }
      return "ACTIVE";
    }
    case 2: {
      return "COMPLETED";
    }
    case 3: {
      return "CANCELLED";
    }
    default: {
      throw new Error(`Invalid listing status: "${options.listingStatus}"`);
    }
  }
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/direct-listings/utils.js
async function mapDirectListing(options) {
  const { latestBlock, rawListing } = options;
  const status = computeStatus({
    blockTimeStamp: latestBlock.timestamp,
    endTimestamp: rawListing.endTimestamp,
    listingStatus: rawListing.status,
    startTimestamp: rawListing.startTimestamp
  });
  const currencyContract = getContract({
    ...options.contract,
    address: rawListing.currency
  });
  const [currencyValuePerToken, nftAsset] = await Promise.all([
    getCurrencyMetadata({
      contract: currencyContract
    }),
    getNFTAsset({
      ...options,
      contract: getContract({
        ...options.contract,
        address: rawListing.assetContract
      }),
      tokenId: rawListing.tokenId
    })
  ]);
  return {
    asset: nftAsset,
    assetContractAddress: rawListing.assetContract,
    creatorAddress: rawListing.listingCreator,
    currencyContractAddress: rawListing.currency,
    currencyValuePerToken: {
      ...currencyValuePerToken,
      chainId: currencyContract.chain.id,
      displayValue: toTokens(rawListing.pricePerToken, currencyValuePerToken.decimals),
      tokenAddress: currencyContract.address,
      value: rawListing.pricePerToken
    },
    endTimeInSeconds: rawListing.endTimestamp,
    id: rawListing.listingId,
    isReservedListing: rawListing.reserved,
    pricePerToken: rawListing.pricePerToken,
    quantity: rawListing.quantity,
    startTimeInSeconds: rawListing.startTimestamp,
    status,
    tokenId: rawListing.tokenId,
    type: "direct-listing"
  };
}
async function isListingValid(options) {
  const assetContract = getContract({
    ...options.contract,
    address: options.listing.assetContractAddress
  });
  const [erc721, erc1155] = await Promise.all([
    isERC721({ contract: assetContract }),
    isERC1155({ contract: assetContract })
  ]);
  if (erc721) {
    const [{ isApprovedForAll }, { getApproved }, { ownerOf }] = await Promise.all([
      import("./isApprovedForAll-C2OIXPVF.js"),
      import("./getApproved-TJHNOCNR.js"),
      import("./ownerOf-CXHPMSLH.js")
    ]);
    const [approvedForAll, approvedOperator, tokenOwner] = await Promise.all([
      isApprovedForAll({
        contract: assetContract,
        // the marketplace contract address has to be approved to transfer the token
        operator: options.contract.address,
        owner: options.listing.creatorAddress
      }),
      getApproved({
        contract: assetContract,
        tokenId: options.listing.tokenId
      }).catch(() => ""),
      ownerOf({
        contract: assetContract,
        tokenId: options.listing.tokenId
      })
    ]);
    if (!approvedForAll && approvedOperator !== options.contract.address) {
      return { reason: "Asset not approved for marketplace.", valid: false };
    }
    if (tokenOwner !== options.listing.creatorAddress) {
      return {
        reason: "Listing creator no longer owns this token.",
        valid: false
      };
    }
    return {
      valid: true
    };
  }
  if (erc1155) {
    const [{ isApprovedForAll }, { balanceOf }] = await Promise.all([
      import("./isApprovedForAll-KR2F5Q35.js"),
      import("./balanceOf-6U3WVGVF.js")
    ]);
    const [approvedForAll, balance] = await Promise.all([
      isApprovedForAll({
        contract: assetContract,
        // the marketplace contract address has to be approved to transfer the token
        operator: options.contract.address,
        owner: options.listing.creatorAddress
      }),
      balanceOf({
        contract: assetContract,
        owner: options.listing.creatorAddress,
        tokenId: options.listing.tokenId
      })
    ]);
    if (!approvedForAll) {
      return { reason: "Asset not approved for marketplace.", valid: false };
    }
    const quantityWanted = options.quantity || options.listing.quantity;
    if (balance < quantityWanted) {
      return {
        reason: "Seller does not have enough balance of token to fulfill order.",
        valid: false
      };
    }
    return {
      valid: true
    };
  }
  return {
    reason: "AssetContract must implement ERC 1155 or ERC 721.",
    valid: false
  };
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/__generated__/IDirectListings/read/getListing.js
var FN_SELECTOR = "0x107a274a";
var FN_INPUTS = [
  {
    name: "_listingId",
    type: "uint256"
  }
];
var FN_OUTPUTS = [
  {
    components: [
      {
        name: "listingId",
        type: "uint256"
      },
      {
        name: "tokenId",
        type: "uint256"
      },
      {
        name: "quantity",
        type: "uint256"
      },
      {
        name: "pricePerToken",
        type: "uint256"
      },
      {
        name: "startTimestamp",
        type: "uint128"
      },
      {
        name: "endTimestamp",
        type: "uint128"
      },
      {
        name: "listingCreator",
        type: "address"
      },
      {
        name: "assetContract",
        type: "address"
      },
      {
        name: "currency",
        type: "address"
      },
      {
        name: "tokenType",
        type: "uint8"
      },
      {
        name: "status",
        type: "uint8"
      },
      {
        name: "reserved",
        type: "bool"
      }
    ],
    name: "listing",
    type: "tuple"
  }
];
function isGetListingSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
async function getListing(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.listingId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/direct-listings/read/getListing.js
async function getListing2(options) {
  const rpcClient = getRpcClient(options.contract);
  const [rawListing, latestBlock] = await Promise.all([
    getListing(options),
    eth_getBlockByNumber(rpcClient, {
      blockTag: "latest"
    })
  ]);
  return mapDirectListing({
    contract: options.contract,
    latestBlock,
    rawListing
  });
}
function isGetListingSupported2(availableSelectors) {
  return isGetListingSupported(availableSelectors);
}

export {
  isListingValid,
  getListing2 as getListing,
  isGetListingSupported2 as isGetListingSupported
};
//# sourceMappingURL=chunk-2T2L7JUW.js.map
