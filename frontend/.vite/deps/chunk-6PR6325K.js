import {
  eth_sendRawTransaction
} from "./chunk-MWAIX6LF.js";
import {
  toSerializableTransaction
} from "./chunk-SYRCOOVG.js";
import {
  hashBytecode
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
  concatHex
} from "./chunk-ADBXOI2Q.js";
import {
  encode
} from "./chunk-JJDFOOW3.js";
import {
  toRlp
} from "./chunk-QMJBBKA5.js";
import {
  hexToBytes
} from "./chunk-DJWGHHK5.js";
import {
  toHex,
  uint8ArrayToHex
} from "./chunk-AT6CAMHI.js";

// node_modules/thirdweb/dist/esm/utils/bigint.js
function toBigInt(value) {
  if (["string", "number"].includes(typeof value) && !Number.isInteger(Number(value))) {
    throw new Error(`Expected value to be an integer to convert to a bigint, got ${value} of type ${typeof value}`);
  }
  if (value instanceof Uint8Array) {
    return BigInt(uint8ArrayToHex(value));
  }
  return BigInt(value);
}
var replaceBigInts = (obj, replacer) => {
  if (typeof obj === "bigint")
    return replacer(obj);
  if (Array.isArray(obj))
    return obj.map((x) => replaceBigInts(x, replacer));
  if (obj && typeof obj === "object")
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, replaceBigInts(v, replacer)]));
  return obj;
};

// node_modules/viem/_esm/zksync/constants/address.js
var addressModulo = 2n ** 160n;

// node_modules/thirdweb/dist/esm/transaction/actions/zksync/getEip721Domain.js
var gasPerPubdataDefault = 50000n;
var getEip712Domain2 = (transaction) => {
  const message = transactionToMessage(transaction);
  return {
    domain: {
      chainId: transaction.chainId,
      name: "zkSync",
      version: "2"
    },
    message,
    primaryType: "Transaction",
    types: {
      Transaction: [
        { name: "txType", type: "uint256" },
        { name: "from", type: "uint256" },
        { name: "to", type: "uint256" },
        { name: "gasLimit", type: "uint256" },
        { name: "gasPerPubdataByteLimit", type: "uint256" },
        { name: "maxFeePerGas", type: "uint256" },
        { name: "maxPriorityFeePerGas", type: "uint256" },
        { name: "paymaster", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "value", type: "uint256" },
        { name: "data", type: "bytes" },
        { name: "factoryDeps", type: "bytes32[]" },
        { name: "paymasterInput", type: "bytes" }
      ]
    }
  };
};
function transactionToMessage(transaction) {
  const { gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, paymaster, paymasterInput, gasPerPubdata, data, factoryDeps } = transaction;
  return {
    data: data ? data : "0x0",
    factoryDeps: (factoryDeps == null ? void 0 : factoryDeps.map((dep) => toHex(hashBytecode(dep)))) ?? [],
    from: BigInt(from),
    gasLimit: gas ?? 0n,
    gasPerPubdataByteLimit: gasPerPubdata ?? gasPerPubdataDefault,
    maxFeePerGas: maxFeePerGas ?? 0n,
    maxPriorityFeePerGas: maxPriorityFeePerGas ?? 0n,
    nonce: nonce ? BigInt(nonce) : 0n,
    paymaster: paymaster ? BigInt(paymaster) : 0n,
    paymasterInput: paymasterInput ? paymasterInput : "0x",
    to: to ? BigInt(to) : 0n,
    txType: 113n,
    value: value ?? 0n
  };
}

// node_modules/thirdweb/dist/esm/transaction/actions/zksync/send-eip712-transaction.js
async function sendEip712Transaction2(options) {
  const { account, transaction } = options;
  const eip712Transaction = await populateEip712Transaction(options);
  const hash = await signEip712Transaction2({
    account,
    chainId: transaction.chain.id,
    eip712Transaction
  });
  const rpc = getRpcClient(transaction);
  const result = await eth_sendRawTransaction(rpc, hash);
  return {
    chain: transaction.chain,
    client: transaction.client,
    transactionHash: result
  };
}
async function signEip712Transaction2(options) {
  const { account, eip712Transaction, chainId } = options;
  const eip712Domain = getEip712Domain2(eip712Transaction);
  const customSignature = await account.signTypedData({
    // biome-ignore lint/suspicious/noExplicitAny: TODO type properly
    ...eip712Domain
  });
  return serializeTransactionEIP712({
    ...eip712Transaction,
    chainId,
    customSignature
  });
}
async function populateEip712Transaction(options) {
  const { account, transaction } = options;
  const { gas, maxFeePerGas, maxPriorityFeePerGas, gasPerPubdata } = await getZkGasFees({ from: getAddress(account.address), transaction });
  const serializableTransaction = await toSerializableTransaction({
    from: account.address,
    transaction: {
      ...transaction,
      gas,
      maxFeePerGas,
      maxPriorityFeePerGas
    }
  });
  return {
    ...serializableTransaction,
    ...transaction.eip712,
    from: account.address,
    gasPerPubdata
  };
}
function serializeTransactionEIP712(transaction) {
  const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
  const serializedTransaction = [
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x0",
    toHex(chainId),
    toHex(""),
    toHex(""),
    toHex(chainId),
    from ?? "0x",
    gasPerPubdata ? toHex(gasPerPubdata) : toHex(gasPerPubdataDefault),
    factoryDeps ?? [],
    customSignature ?? "0x",
    // EIP712 signature
    paymaster && paymasterInput ? [paymaster, paymasterInput] : []
  ];
  return concatHex(["0x71", toRlp(serializedTransaction)]);
}
async function getZkGasFees(args) {
  const { transaction, from } = args;
  let [gas, maxFeePerGas, maxPriorityFeePerGas, eip712] = await Promise.all([
    resolvePromisedValue(transaction.gas),
    resolvePromisedValue(transaction.maxFeePerGas),
    resolvePromisedValue(transaction.maxPriorityFeePerGas),
    resolvePromisedValue(transaction.eip712)
  ]);
  let gasPerPubdata = eip712 == null ? void 0 : eip712.gasPerPubdata;
  if (gas === void 0 || maxFeePerGas === void 0 || maxPriorityFeePerGas === void 0) {
    const rpc = getRpcClient(transaction);
    const params = await formatTransaction({ from, transaction });
    const result = await rpc({
      // biome-ignore lint/suspicious/noExplicitAny: TODO add to RPC method types
      method: "zks_estimateFee",
      // biome-ignore lint/suspicious/noExplicitAny: TODO add to RPC method types
      params: [replaceBigInts(params, toHex)]
    });
    gas = toBigInt(result.gas_limit) * 2n;
    const baseFee = toBigInt(result.max_fee_per_gas);
    maxFeePerGas = baseFee * 2n;
    maxPriorityFeePerGas = toBigInt(result.max_priority_fee_per_gas) || 1n;
    gasPerPubdata = toBigInt(result.gas_per_pubdata_limit) * 2n;
    if (gasPerPubdata < 50000n) {
      gasPerPubdata = 50000n;
    }
  }
  return {
    gas,
    gasPerPubdata,
    maxFeePerGas,
    maxPriorityFeePerGas
  };
}
async function formatTransaction(args) {
  var _a;
  const { transaction, from } = args;
  const [data, to, value, eip712] = await Promise.all([
    encode(transaction),
    resolvePromisedValue(transaction.to),
    resolvePromisedValue(transaction.value),
    resolvePromisedValue(transaction.eip712)
  ]);
  const gasPerPubdata = eip712 == null ? void 0 : eip712.gasPerPubdata;
  return {
    data,
    eip712Meta: {
      ...eip712,
      factoryDeps: (_a = eip712 == null ? void 0 : eip712.factoryDeps) == null ? void 0 : _a.map((dep) => Array.from(hexToBytes(dep))),
      gasPerPubdata: gasPerPubdata || 50000n
    },
    from,
    gasPerPubdata,
    to,
    type: "0x71",
    value
  };
}

export {
  toBigInt,
  sendEip712Transaction2 as sendEip712Transaction,
  signEip712Transaction2 as signEip712Transaction,
  populateEip712Transaction,
  getZkGasFees
};
//# sourceMappingURL=chunk-6PR6325K.js.map
