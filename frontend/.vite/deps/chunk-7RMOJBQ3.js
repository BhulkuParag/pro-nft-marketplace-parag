import {
  detectMethod
} from "./chunk-AGSXJS3R.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";
import {
  encodeAbiParameters
} from "./chunk-SD26YTCZ.js";
import {
  decodeAbiParameters
} from "./chunk-DJWGHHK5.js";

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IERC1155/read/totalSupply.js
var FN_SELECTOR = "0xbd85b039";
var FN_INPUTS = [
  {
    name: "id",
    type: "uint256"
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256"
  }
];
function isTotalSupplySupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function encodeTotalSupplyParams(options) {
  return encodeAbiParameters(FN_INPUTS, [options.id]);
}
function encodeTotalSupply(options) {
  return FN_SELECTOR + encodeTotalSupplyParams(options).slice(2);
}
function decodeTotalSupplyResult(result) {
  return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
async function totalSupply(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.id]
  });
}

export {
  FN_SELECTOR,
  isTotalSupplySupported,
  encodeTotalSupplyParams,
  encodeTotalSupply,
  decodeTotalSupplyResult,
  totalSupply
};
//# sourceMappingURL=chunk-7RMOJBQ3.js.map
