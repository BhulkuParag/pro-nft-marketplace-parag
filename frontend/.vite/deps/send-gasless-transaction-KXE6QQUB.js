import {
  addTransactionToStore
} from "./chunk-PPBEOXQH.js";
import "./chunk-T2B5SAMX.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/transaction/actions/gasless/send-gasless-transaction.js
async function sendGaslessTransaction({ account, transaction, serializableTransaction, gasless }) {
  if (serializableTransaction.value && serializableTransaction.value > 0n) {
    throw new Error("Gasless transactions cannot have a value");
  }
  let result;
  if (gasless.provider === "biconomy") {
    const { relayBiconomyTransaction } = await import("./biconomy-QTHALCZ3.js");
    result = await relayBiconomyTransaction({
      account,
      gasless,
      serializableTransaction,
      transaction
    });
  }
  if (gasless.provider === "openzeppelin") {
    const { relayOpenZeppelinTransaction } = await import("./openzeppelin-OVRHF6OW.js");
    result = await relayOpenZeppelinTransaction({
      account,
      gasless,
      serializableTransaction,
      transaction
    });
  }
  if (gasless.provider === "engine") {
    const { relayEngineTransaction } = await import("./engine-AECEBOA2.js");
    result = await relayEngineTransaction({
      account,
      gasless,
      serializableTransaction,
      transaction
    });
  }
  if (!result) {
    throw new Error("Unsupported gasless provider");
  }
  addTransactionToStore({
    address: account.address,
    chainId: transaction.chain.id,
    transactionHash: result.transactionHash
  });
  return result;
}
export {
  sendGaslessTransaction
};
//# sourceMappingURL=send-gasless-transaction-KXE6QQUB.js.map
