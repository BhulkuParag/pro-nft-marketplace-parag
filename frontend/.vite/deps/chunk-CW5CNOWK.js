import {
  detectMethod
} from "./chunk-AGSXJS3R.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IDrop1155/read/getActiveClaimConditionId.js
var FN_SELECTOR = "0x5ab063e8";
var FN_INPUTS = [
  {
    name: "_tokenId",
    type: "uint256"
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256"
  }
];
function isGetActiveClaimConditionIdSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
async function getActiveClaimConditionId(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.tokenId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IDrop1155/read/getClaimConditionById.js
var FN_SELECTOR2 = "0xd45b28d7";
var FN_INPUTS2 = [
  {
    name: "_tokenId",
    type: "uint256"
  },
  {
    name: "_conditionId",
    type: "uint256"
  }
];
var FN_OUTPUTS2 = [
  {
    components: [
      {
        name: "startTimestamp",
        type: "uint256"
      },
      {
        name: "maxClaimableSupply",
        type: "uint256"
      },
      {
        name: "supplyClaimed",
        type: "uint256"
      },
      {
        name: "quantityLimitPerWallet",
        type: "uint256"
      },
      {
        name: "merkleRoot",
        type: "bytes32"
      },
      {
        name: "pricePerToken",
        type: "uint256"
      },
      {
        name: "currency",
        type: "address"
      },
      {
        name: "metadata",
        type: "string"
      }
    ],
    name: "condition",
    type: "tuple"
  }
];
function isGetClaimConditionByIdSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2]
  });
}
async function getClaimConditionById(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2],
    params: [options.tokenId, options.conditionId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IDropSinglePhase1155/read/claimCondition.js
var FN_SELECTOR3 = "0xe9703d25";
var FN_INPUTS3 = [
  {
    name: "tokenId",
    type: "uint256"
  }
];
var FN_OUTPUTS3 = [
  {
    name: "startTimestamp",
    type: "uint256"
  },
  {
    name: "maxClaimableSupply",
    type: "uint256"
  },
  {
    name: "supplyClaimed",
    type: "uint256"
  },
  {
    name: "quantityLimitPerWallet",
    type: "uint256"
  },
  {
    name: "merkleRoot",
    type: "bytes32"
  },
  {
    name: "pricePerToken",
    type: "uint256"
  },
  {
    name: "currency",
    type: "address"
  },
  {
    name: "metadata",
    type: "string"
  }
];
function isClaimConditionSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR3, FN_INPUTS3, FN_OUTPUTS3]
  });
}
async function claimCondition(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR3, FN_INPUTS3, FN_OUTPUTS3],
    params: [options.tokenId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc1155/drops/read/getActiveClaimCondition.js
async function getActiveClaimCondition(options) {
  const getActiveClaimConditionMultiPhase = async () => {
    const conditionId = await getActiveClaimConditionId(options);
    return getClaimConditionById({ ...options, conditionId });
  };
  const getActiveClaimConditionSinglePhase = async () => {
    const [startTimestamp, maxClaimableSupply, supplyClaimed, quantityLimitPerWallet, merkleRoot, pricePerToken, currency, metadata] = await claimCondition({ ...options, tokenId: options.tokenId });
    return {
      currency,
      maxClaimableSupply,
      merkleRoot,
      metadata,
      pricePerToken,
      quantityLimitPerWallet,
      startTimestamp,
      supplyClaimed
    };
  };
  const results = await Promise.allSettled([
    getActiveClaimConditionMultiPhase(),
    getActiveClaimConditionSinglePhase()
  ]);
  const condition = results.find((result) => result.status === "fulfilled");
  if ((condition == null ? void 0 : condition.status) === "fulfilled") {
    return condition.value;
  }
  throw new Error("Claim condition not found");
}
function isGetActiveClaimConditionSupported(availableSelectors) {
  return (
    // check multi-phase
    isGetActiveClaimConditionIdSupported(availableSelectors) && isGetClaimConditionByIdSupported(availableSelectors) || isClaimConditionSupported(availableSelectors)
  );
}

export {
  isClaimConditionSupported,
  getActiveClaimCondition,
  isGetActiveClaimConditionSupported
};
//# sourceMappingURL=chunk-CW5CNOWK.js.map
