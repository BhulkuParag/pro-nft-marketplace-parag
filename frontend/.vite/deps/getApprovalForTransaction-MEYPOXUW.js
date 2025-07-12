import {
  allowance,
  approve
} from "./chunk-2HHM4MRW.js";
import "./chunk-XS3SQPWF.js";
import "./chunk-HEMRZHKU.js";
import "./chunk-6J7DXZMD.js";
import "./chunk-AGSXJS3R.js";
import "./chunk-WHDWYZBU.js";
import "./chunk-SD26YTCZ.js";
import "./chunk-3DGGFYQ2.js";
import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  getAddress
} from "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import "./chunk-UY2SRO54.js";
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

// node_modules/thirdweb/dist/esm/extensions/erc20/write/getApprovalForTransaction.js
async function getApprovalForTransaction(options) {
  const { transaction, account } = options;
  if (!account) {
    return null;
  }
  const erc20Value = await resolvePromisedValue(transaction.erc20Value);
  if (erc20Value) {
    const target = await resolvePromisedValue(transaction.to);
    if (!target || !erc20Value.tokenAddress || getAddress(target) === getAddress(erc20Value.tokenAddress)) {
      return null;
    }
    const contract = getContract({
      address: erc20Value.tokenAddress,
      chain: transaction.chain,
      client: transaction.client
    });
    const approvedValue = await allowance({
      contract,
      owner: account.address,
      spender: target
    });
    if (approvedValue > erc20Value.amountWei) {
      return null;
    }
    return approve({
      contract,
      spender: target,
      value: erc20Value.amountWei
    });
  }
  return null;
}
export {
  getApprovalForTransaction
};
//# sourceMappingURL=getApprovalForTransaction-MEYPOXUW.js.map
