import {
  detectMethod
} from "./chunk-AGSXJS3R.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IDrop/read/getActiveClaimConditionId.js
var FN_SELECTOR = "0xc68907de";
var FN_INPUTS = [];
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
    params: []
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IDrop/read/getClaimConditionById.js
var FN_SELECTOR2 = "0x6f8934f4";
var FN_INPUTS2 = [
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
    params: [options.conditionId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc721/drops/read/getActiveClaimCondition.js
async function getActiveClaimCondition(options) {
  try {
    const conditionId = await getActiveClaimConditionId(options);
    return getClaimConditionById({ ...options, conditionId });
  } catch {
    throw new Error("Claim condition not found");
  }
}
function isGetActiveClaimConditionSupported(availableSelectors) {
  return isGetActiveClaimConditionIdSupported(availableSelectors) && isGetClaimConditionByIdSupported(availableSelectors);
}

export {
  getActiveClaimCondition,
  isGetActiveClaimConditionSupported
};
//# sourceMappingURL=chunk-Z2UX2AWK.js.map
