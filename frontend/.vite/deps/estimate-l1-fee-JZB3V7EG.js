import {
  serializeTransaction
} from "./chunk-UIZXPUPS.js";
import "./chunk-EGFCSO5B.js";
import "./chunk-3YR3TNSC.js";
import "./chunk-A5CP6DX3.js";
import "./chunk-VQJYRYIP.js";
import {
  toSerializableTransaction
} from "./chunk-SYRCOOVG.js";
import "./chunk-7RUSW4Y7.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";
import "./chunk-SD26YTCZ.js";
import "./chunk-3DGGFYQ2.js";
import "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import "./chunk-UY2SRO54.js";
import "./chunk-JJDFOOW3.js";
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

// node_modules/thirdweb/dist/esm/gas/estimate-l1-fee.js
var OPStackGasPriceOracleAddress = "0x420000000000000000000000000000000000000F";
async function estimateL1Fee(options) {
  const { transaction, gasPriceOracleAddress } = options;
  const oracleContract = getContract({
    address: gasPriceOracleAddress || OPStackGasPriceOracleAddress,
    chain: transaction.chain,
    client: transaction.client
  });
  const { gasPrice, ...serializableTx } = await toSerializableTransaction({
    transaction
  });
  const serialized = serializeTransaction({
    transaction: serializableTx
  });
  return readContract({
    contract: oracleContract,
    method: "function getL1Fee(bytes memory _data) view returns (uint256)",
    params: [serialized]
  });
}
export {
  estimateL1Fee
};
//# sourceMappingURL=estimate-l1-fee-JZB3V7EG.js.map
