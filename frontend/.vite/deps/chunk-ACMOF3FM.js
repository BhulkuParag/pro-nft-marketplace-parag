import {
  addTransactionToStore
} from "./chunk-PPBEOXQH.js";
import {
  toSerializableTransaction
} from "./chunk-SYRCOOVG.js";

// node_modules/thirdweb/dist/esm/utils/config.js
var transactionDecorator = null;
function getTransactionDecorator() {
  return transactionDecorator;
}

// node_modules/thirdweb/dist/esm/transaction/actions/send-transaction.js
async function sendTransaction(options) {
  let { account, transaction, gasless } = options;
  const decorator = getTransactionDecorator();
  if (decorator) {
    const { account: decoratedAccount, transaction: decoratedTransaction } = await decorator({ account, transaction });
    account = decoratedAccount;
    transaction = decoratedTransaction;
  }
  if (account.onTransactionRequested) {
    await account.onTransactionRequested(transaction);
  }
  if (transaction.eip712) {
    const { sendEip712Transaction } = await import("./send-eip712-transaction-L7UGW5MO.js");
    return sendEip712Transaction({
      account,
      transaction
    });
  }
  const serializableTransaction = await toSerializableTransaction({
    from: account,
    transaction
  });
  if (gasless) {
    const { sendGaslessTransaction } = await import("./send-gasless-transaction-KXE6QQUB.js");
    return sendGaslessTransaction({
      account,
      gasless,
      serializableTransaction,
      transaction
    });
  }
  const result = await account.sendTransaction(serializableTransaction);
  addTransactionToStore({
    address: account.address,
    chainId: transaction.chain.id,
    transactionHash: result.transactionHash
  });
  return { ...result, chain: transaction.chain, client: transaction.client };
}

export {
  sendTransaction
};
//# sourceMappingURL=chunk-ACMOF3FM.js.map
