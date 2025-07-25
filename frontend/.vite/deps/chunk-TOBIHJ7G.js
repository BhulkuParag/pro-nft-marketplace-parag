import {
  prepareTransaction
} from "./chunk-6J7DXZMD.js";
import {
  sendTransaction
} from "./chunk-ACMOF3FM.js";
import {
  checksumAddress
} from "./chunk-6WE3JIZ5.js";
import {
  hexToBigInt,
  hexToNumber
} from "./chunk-AT6CAMHI.js";
import {
  getCachedChain
} from "./chunk-CYZDLLAL.js";

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/send-raw-transaction.js
async function handleSendRawTransactionRequest(options) {
  const { account, chainId, params: [rawTransaction] } = options;
  if (!account.sendRawTransaction) {
    throw new Error("The current account does not support sending raw transactions");
  }
  const txResult = await account.sendRawTransaction({
    chainId,
    rawTransaction
  });
  return txResult.transactionHash;
}

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/utils.js
function validateAccountAddress(account, address) {
  if (checksumAddress(account.address) !== checksumAddress(address)) {
    throw new Error(`Failed to validate account address (${account.address}), differs from ${address}`);
  }
}
function parseEip155ChainId(chainId) {
  const chainIdParts = chainId.split(":");
  const chainIdAsNumber = Number.parseInt(chainIdParts[1] ?? "0");
  if (chainIdParts.length !== 2 || chainIdParts[0] !== "eip155" || chainIdAsNumber === 0 || !chainIdAsNumber) {
    throw new Error(`Invalid chainId ${chainId}, should have the format 'eip155:1'`);
  }
  return chainIdAsNumber;
}

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/send-transaction.js
async function handleSendTransactionRequest(options) {
  const { account, chainId, thirdwebClient, params: [transaction] } = options;
  if (transaction.from !== void 0) {
    validateAccountAddress(account, transaction.from);
  }
  const preparedTransaction = prepareTransaction({
    chain: getCachedChain(chainId),
    client: thirdwebClient,
    data: transaction.data,
    gas: transaction.gas ? hexToBigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? hexToBigInt(transaction.gasPrice) : void 0,
    to: transaction.to,
    value: transaction.value ? hexToBigInt(transaction.value) : void 0
  });
  const txResult = await sendTransaction({
    account,
    transaction: preparedTransaction
  });
  return txResult.transactionHash;
}

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/sign.js
async function handleSignRequest(options) {
  const { account, params } = options;
  validateAccountAddress(account, params[1]);
  return account.signMessage({ message: { raw: params[0] } });
}

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/sign-transaction.js
async function handleSignTransactionRequest(options) {
  const { account, params: [transaction] } = options;
  if (!account.signTransaction) {
    throw new Error("The current account does not support signing transactions");
  }
  if (transaction.from !== void 0) {
    validateAccountAddress(account, transaction.from);
  }
  return account.signTransaction({
    data: transaction.data,
    gas: transaction.gas ? hexToBigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? hexToBigInt(transaction.gasPrice) : void 0,
    nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
    to: transaction.to,
    value: transaction.value ? hexToBigInt(transaction.value) : void 0
  });
}

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/request-handlers/sign-typed-data.js
async function handleSignTypedDataRequest(options) {
  const { account, params } = options;
  validateAccountAddress(account, params[0]);
  return account.signTypedData(
    // The data could be sent to us as a string or object, depending on the level of parsing on the client side
    typeof params[1] === "string" ? JSON.parse(params[1]) : params[1]
  );
}

export {
  handleSendRawTransactionRequest,
  parseEip155ChainId,
  handleSendTransactionRequest,
  handleSignRequest,
  handleSignTransactionRequest,
  handleSignTypedDataRequest
};
//# sourceMappingURL=chunk-TOBIHJ7G.js.map
