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

// node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IERC721A/read/getApproved.js
var FN_SELECTOR = "0x081812fc";
var FN_INPUTS = [
  {
    name: "tokenId",
    type: "uint256"
  }
];
var FN_OUTPUTS = [
  {
    type: "address"
  }
];
function isGetApprovedSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function encodeGetApprovedParams(options) {
  return encodeAbiParameters(FN_INPUTS, [options.tokenId]);
}
function encodeGetApproved(options) {
  return FN_SELECTOR + encodeGetApprovedParams(options).slice(2);
}
function decodeGetApprovedResult(result) {
  return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
async function getApproved(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.tokenId]
  });
}
export {
  FN_SELECTOR,
  decodeGetApprovedResult,
  encodeGetApproved,
  encodeGetApprovedParams,
  getApproved,
  isGetApprovedSupported
};
//# sourceMappingURL=getApproved-TJHNOCNR.js.map
