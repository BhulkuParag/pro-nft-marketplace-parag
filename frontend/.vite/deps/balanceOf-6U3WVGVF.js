import {
  detectMethod
} from "./chunk-AGSXJS3R.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";
import {
  encodeAbiParameters
} from "./chunk-SD26YTCZ.js";
import "./chunk-3DGGFYQ2.js";
import "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import "./chunk-PG5X2BYF.js";
import "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import "./chunk-UY2SRO54.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import {
  decodeAbiParameters
} from "./chunk-DJWGHHK5.js";
import "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import "./chunk-LZWAEAXR.js";
import "./chunk-RKJ7S5H4.js";
import "./chunk-YIVCHQGZ.js";
import "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import "./chunk-JGXNTIIP.js";
import "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/extensions/erc1155/__generated__/IERC1155/read/balanceOf.js
var FN_SELECTOR = "0x00fdd58e";
var FN_INPUTS = [
  {
    name: "_owner",
    type: "address"
  },
  {
    name: "tokenId",
    type: "uint256"
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256"
  }
];
function isBalanceOfSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function encodeBalanceOfParams(options) {
  return encodeAbiParameters(FN_INPUTS, [options.owner, options.tokenId]);
}
function encodeBalanceOf(options) {
  return FN_SELECTOR + encodeBalanceOfParams(options).slice(2);
}
function decodeBalanceOfResult(result) {
  return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
async function balanceOf(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.owner, options.tokenId]
  });
}
export {
  FN_SELECTOR,
  balanceOf,
  decodeBalanceOfResult,
  encodeBalanceOf,
  encodeBalanceOfParams,
  isBalanceOfSupported
};
//# sourceMappingURL=balanceOf-6U3WVGVF.js.map
