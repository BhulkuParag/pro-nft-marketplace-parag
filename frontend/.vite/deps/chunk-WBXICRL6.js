import {
  track
} from "./chunk-CZLU53MF.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";

// node_modules/thirdweb/dist/esm/analytics/track/helpers.js
function isInsufficientFundsError(error) {
  var _a;
  if (!error)
    return false;
  const errorMessage = typeof error === "string" ? error : (error == null ? void 0 : error.message) || ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || "";
  const message = errorMessage.toLowerCase();
  return message.includes("insufficient funds") || message.includes("insufficient balance") || message.includes("insufficient") && (message.includes("native") || message.includes("gas")) || // Common error codes from various wallets/providers
  (error == null ? void 0 : error.code) === "INSUFFICIENT_FUNDS" || (error == null ? void 0 : error.reason) === "insufficient funds";
}
function getErrorDetails(error) {
  var _a;
  if (!error)
    return { message: "Unknown error" };
  const message = typeof error === "string" ? error : (error == null ? void 0 : error.message) || ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || String(error);
  const code = (error == null ? void 0 : error.code) || (error == null ? void 0 : error.reason);
  return { code, message };
}

// node_modules/thirdweb/dist/esm/analytics/track/transaction.js
async function trackTransaction(args) {
  return trackTransactionEvent({
    ...args,
    action: "transaction:sent"
  });
}
function trackTransactionEvent(args) {
  return track({
    client: args.client,
    data: {
      action: args.action,
      chainId: args.chainId,
      clientId: args.client.clientId,
      contractAddress: args.contractAddress,
      errorCode: stringify(args.error),
      functionName: args.functionName,
      gasPrice: args.gasPrice,
      transactionHash: args.transactionHash,
      walletAddress: args.walletAddress,
      walletType: args.walletType
    },
    ecosystem: args.ecosystem
  });
}
async function trackInsufficientFundsError(args) {
  var _a, _b, _c;
  const errorDetails = getErrorDetails(args.error);
  return track({
    client: args.client,
    data: {
      action: "transaction:insufficient_funds",
      chainId: args.chainId,
      clientId: args.client.clientId,
      contractAddress: args.contractAddress,
      errorCode: errorDetails.code ? stringify(errorDetails.code) : void 0,
      errorMessage: errorDetails.message,
      functionName: args.functionName,
      requiredAmount: (_a = args.requiredAmount) == null ? void 0 : _a.toString(),
      transactionValue: (_b = args.transactionValue) == null ? void 0 : _b.toString(),
      userBalance: (_c = args.userBalance) == null ? void 0 : _c.toString(),
      walletAddress: args.walletAddress
    },
    ecosystem: args.ecosystem
  });
}

export {
  isInsufficientFundsError,
  trackTransaction,
  trackInsufficientFundsError
};
//# sourceMappingURL=chunk-WBXICRL6.js.map
