import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import {
  encode
} from "./chunk-JJDFOOW3.js";

// node_modules/thirdweb/dist/esm/transaction/actions/send-batch-transaction.js
async function sendBatchTransaction(options) {
  const { account, transactions } = options;
  if (!account) {
    throw new Error("not connected");
  }
  if (transactions.length === 0) {
    throw new Error("No transactions to send");
  }
  const firstTx = transactions[0];
  if (!firstTx) {
    throw new Error("No transactions to send");
  }
  if (account.sendBatchTransaction) {
    const serializedTxs = await Promise.all(transactions.map(async (tx) => {
      const [data, to, accessList, value] = await Promise.all([
        encode(tx),
        resolvePromisedValue(tx.to),
        resolvePromisedValue(tx.accessList),
        resolvePromisedValue(tx.value)
      ]);
      const serializedTx = {
        accessList,
        chainId: tx.chain.id,
        data,
        to,
        value
      };
      return serializedTx;
    }));
    const result = await account.sendBatchTransaction(serializedTxs);
    return {
      ...result,
      chain: firstTx.chain,
      client: firstTx.client
    };
  }
  throw new Error("Account doesn't implement sendBatchTransaction");
}

export {
  sendBatchTransaction
};
//# sourceMappingURL=chunk-HBA3XICU.js.map
