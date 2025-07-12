import {
  detectMethod
} from "./chunk-AGSXJS3R.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";
import {
  decodeAbiParameters
} from "./chunk-DJWGHHK5.js";

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IDropSinglePhase/read/claimCondition.js
var FN_SELECTOR = "0xd637ed59";
var FN_INPUTS = [];
var FN_OUTPUTS = [
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
function isClaimConditionSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function decodeClaimConditionResult(result) {
  return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
async function claimCondition(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: []
  });
}

export {
  FN_SELECTOR,
  isClaimConditionSupported,
  decodeClaimConditionResult,
  claimCondition
};
//# sourceMappingURL=chunk-TALIVOJA.js.map
