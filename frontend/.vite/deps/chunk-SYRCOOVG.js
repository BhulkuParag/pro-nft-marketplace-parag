import {
  isZkSyncChain
} from "./chunk-7RUSW4Y7.js";
import {
  estimateGas,
  getGasOverridesForTransaction
} from "./chunk-3DGGFYQ2.js";
import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import {
  getAddress
} from "./chunk-6WE3JIZ5.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
import {
  encode
} from "./chunk-JJDFOOW3.js";

// node_modules/thirdweb/dist/esm/transaction/actions/to-serializable-transaction.js
async function toSerializableTransaction(options) {
  const isZkSync = await isZkSyncChain(options.transaction.chain);
  if (isZkSync) {
    const { getZkGasFees } = await import("./send-eip712-transaction-L7UGW5MO.js");
    const { gas: gas2, maxFeePerGas, maxPriorityFeePerGas } = await getZkGasFees({
      from: typeof options.from === "string" ? getAddress(options.from) : options.from !== void 0 ? getAddress(options.from.address) : void 0,
      transaction: options.transaction
    });
    options.transaction = {
      ...options.transaction,
      gas: gas2,
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  const rpcRequest = getRpcClient(options.transaction);
  const chainId = options.transaction.chain.id;
  const from = options.from;
  let [data, nonce, gas, feeData, to, accessList, value, authorizationList, type] = await Promise.all([
    encode(options.transaction),
    (async () => {
      const resolvedNonce = await resolvePromisedValue(options.transaction.nonce);
      if (resolvedNonce !== void 0) {
        return resolvedNonce;
      }
      return from ? await import("./eth_getTransactionCount-WH7XPTXL.js").then(({ eth_getTransactionCount }) => eth_getTransactionCount(rpcRequest, {
        address: typeof from === "string" ? getAddress(from) : getAddress(from.address),
        blockTag: "pending"
      })) : void 0;
    })(),
    // takes the same options as the sendTransaction function thankfully!
    estimateGas({
      ...options,
      from: options.from
    }),
    getGasOverridesForTransaction(options.transaction),
    resolvePromisedValue(options.transaction.to),
    resolvePromisedValue(options.transaction.accessList),
    resolvePromisedValue(options.transaction.value),
    resolvePromisedValue(options.transaction.authorizationList),
    resolvePromisedValue(options.transaction.type)
  ]);
  const extraGas = await resolvePromisedValue(options.transaction.extraGas);
  if (extraGas) {
    gas += extraGas;
  }
  return {
    accessList,
    authorizationList,
    chainId,
    data,
    gas,
    nonce,
    to,
    type,
    value,
    ...feeData
  };
}

export {
  toSerializableTransaction
};
//# sourceMappingURL=chunk-SYRCOOVG.js.map
