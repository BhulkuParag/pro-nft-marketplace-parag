import {
  ZERO_ADDRESS
} from "./chunk-673YCYST.js";
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
import {
  getAddress,
  keccak256
} from "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import "./chunk-UY2SRO54.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import {
  encodeAbiParameters
} from "./chunk-DJWGHHK5.js";
import "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";
import "./chunk-RKJ7S5H4.js";
import "./chunk-YIVCHQGZ.js";
import {
  isHex
} from "./chunk-AT6CAMHI.js";
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

// node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/biconomy.js
var BATCH_ID = 0n;
async function prepareBiconomyTransaction({ account, serializableTransaction, transaction, gasless }) {
  const forwarderContract = getContract({
    address: gasless.relayerForwarderAddress,
    chain: transaction.chain,
    client: transaction.client
  });
  const nonce = await readContract({
    contract: forwarderContract,
    method: "function getNonce(address,uint256) view returns (uint256)",
    params: [account.address, BATCH_ID]
  });
  const deadline = Math.floor(Date.now() / 1e3) + (gasless.deadlineSeconds ?? 3600);
  const request = {
    batchId: BATCH_ID,
    batchNonce: nonce,
    data: serializableTransaction.data,
    deadline,
    from: account.address,
    to: serializableTransaction.to,
    token: ZERO_ADDRESS,
    tokenGasPrice: 0n,
    txGas: serializableTransaction.gas
  };
  if (!request.to) {
    throw new Error("Cannot send a transaction without a `to` address");
  }
  if (!request.txGas) {
    throw new Error("Cannot send a transaction without a `gas` value");
  }
  if (!request.data) {
    throw new Error("Cannot send a transaction without a `data` value");
  }
  const message = encodeAbiParameters([
    { type: "address" },
    { type: "address" },
    { type: "address" },
    { type: "uint256" },
    { type: "uint256" },
    { type: "uint256" },
    { type: "uint256" },
    { type: "bytes32" }
  ], [
    getAddress(request.from),
    getAddress(request.to),
    getAddress(request.token),
    request.txGas,
    request.tokenGasPrice,
    request.batchId,
    request.batchNonce,
    keccak256(request.data)
  ]);
  const signature = await account.signMessage({ message });
  return [request, signature];
}
async function relayBiconomyTransaction(options) {
  const [request, signature] = await prepareBiconomyTransaction(options);
  const response = await fetch("https://api.biconomy.io/api/v2/meta-tx/native", {
    body: stringify({
      apiId: options.gasless.apiId,
      from: request.from,
      gasLimit: request.txGas,
      params: [request, signature],
      to: request.to
    }),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "x-api-key": options.gasless.apiKey
    },
    method: "POST"
  });
  if (!response.ok) {
    throw new Error(`Failed to send transaction: ${await response.text()}`);
  }
  const json = await response.json();
  const transactionHash = json.txHash;
  if (isHex(transactionHash)) {
    return {
      chain: options.transaction.chain,
      client: options.transaction.client,
      transactionHash
    };
  }
  throw new Error(`Failed to send transaction: ${stringify(json)}`);
}
export {
  prepareBiconomyTransaction,
  relayBiconomyTransaction
};
//# sourceMappingURL=biconomy-QTHALCZ3.js.map
