import {
  sendAndConfirmTransaction
} from "./chunk-LUJKADEG.js";
import {
  eth_getTransactionReceipt
} from "./chunk-E2LANL2Y.js";
import "./chunk-4OCU6WGG.js";
import "./chunk-ACMOF3FM.js";
import "./chunk-PPBEOXQH.js";
import "./chunk-T2B5SAMX.js";
import {
  sendBatchTransaction
} from "./chunk-HBA3XICU.js";
import "./chunk-SYRCOOVG.js";
import "./chunk-7RUSW4Y7.js";
import "./chunk-3DGGFYQ2.js";
import "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import "./chunk-PG5X2BYF.js";
import "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
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
import {
  randomBytesHex
} from "./chunk-YIVCHQGZ.js";
import "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import {
  LruMap
} from "./chunk-SNQ54XRM.js";
import "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5972/in-app-wallet-calls.js
var bundlesToTransactions = new LruMap(1e3);
async function inAppWalletSendCalls(args) {
  const { account, calls } = args;
  const hashes = [];
  const id = randomBytesHex(65);
  bundlesToTransactions.set(id, hashes);
  if (account.sendBatchTransaction) {
    const receipt = await sendBatchTransaction({
      account,
      transactions: calls
    });
    hashes.push(receipt.transactionHash);
    bundlesToTransactions.set(id, hashes);
  } else {
    for (const tx of calls) {
      const receipt = await sendAndConfirmTransaction({
        account,
        transaction: tx
      });
      hashes.push(receipt.transactionHash);
      bundlesToTransactions.set(id, hashes);
    }
  }
  return id;
}
async function inAppWalletGetCallsStatus(args) {
  const { wallet, client, id } = args;
  const chain = wallet.getChain();
  if (!chain) {
    throw new Error("Failed to get calls status, no active chain found");
  }
  const bundle = bundlesToTransactions.get(id);
  if (!bundle) {
    throw new Error("Failed to get calls status, unknown bundle id");
  }
  const request = getRpcClient({ chain, client });
  let status = "success";
  const receipts = await Promise.all(bundle.map((hash) => eth_getTransactionReceipt(request, { hash }).then((receipt) => ({
    blockHash: receipt.blockHash,
    blockNumber: receipt.blockNumber,
    gasUsed: receipt.gasUsed,
    logs: receipt.logs.map((l) => ({
      address: l.address,
      data: l.data,
      topics: l.topics
    })),
    status: receipt.status,
    transactionHash: receipt.transactionHash
  })).catch(() => {
    status = "pending";
    return null;
  })));
  return {
    atomic: false,
    chainId: chain.id,
    id,
    receipts: receipts.filter((r) => r !== null),
    status,
    statusCode: 200,
    version: "2.0.0"
  };
}
export {
  inAppWalletGetCallsStatus,
  inAppWalletSendCalls
};
//# sourceMappingURL=in-app-wallet-calls-YVB6UY2I.js.map
