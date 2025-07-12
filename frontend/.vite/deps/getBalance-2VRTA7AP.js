import {
  getCurrencyMetadata
} from "./chunk-3AOHHKCD.js";
import "./chunk-ZG6EPXNA.js";
import "./chunk-R2IMRU36.js";
import "./chunk-673YCYST.js";
import "./chunk-AGSXJS3R.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";
import "./chunk-SD26YTCZ.js";
import "./chunk-3DGGFYQ2.js";
import "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import "./chunk-PG5X2BYF.js";
import "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import {
  toTokens
} from "./chunk-UY2SRO54.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import "./chunk-DJWGHHK5.js";
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

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/balanceOf.js
var FN_SELECTOR = "0x70a08231";
var FN_INPUTS = [
  {
    name: "_address",
    type: "address"
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256"
  }
];
async function balanceOf(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.address]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc20/read/getBalance.js
async function getBalance(options) {
  const [balanceWei, currencyMetadata] = await Promise.all([
    balanceOf(options),
    getCurrencyMetadata(options)
  ]);
  return {
    ...currencyMetadata,
    chainId: options.contract.chain.id,
    displayValue: toTokens(balanceWei, currencyMetadata.decimals),
    tokenAddress: options.contract.address,
    value: balanceWei
  };
}
export {
  getBalance
};
//# sourceMappingURL=getBalance-2VRTA7AP.js.map
