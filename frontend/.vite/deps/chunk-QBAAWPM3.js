import {
  stringify
} from "./chunk-LZWAEAXR.js";
import {
  getClientFetch
} from "./chunk-LPEXUG4Y.js";
import {
  getThirdwebBaseUrl
} from "./chunk-UQSP5VHN.js";

// node_modules/thirdweb/dist/esm/bridge/types/Errors.js
var ApiError = class extends Error {
  constructor(args) {
    super(args.message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "correlationId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "statusCode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.code = args.code;
    this.correlationId = args.correlationId;
    this.statusCode = args.statusCode;
  }
  toString() {
    return stringify({
      code: this.code,
      correlationId: this.correlationId,
      message: this.message,
      statusCode: this.statusCode
    });
  }
};

// node_modules/thirdweb/dist/esm/bridge/Status.js
async function status(options) {
  const { transactionHash, client } = options;
  const chainId = "chainId" in options ? options.chainId : options.chain.id;
  const clientFetch = getClientFetch(client);
  const url = new URL(`${getThirdwebBaseUrl("bridge")}/v1/status`);
  url.searchParams.set("transactionHash", transactionHash);
  url.searchParams.set("chainId", chainId.toString());
  const response = await clientFetch(url.toString());
  if (!response.ok) {
    const errorJson = await response.json();
    throw new ApiError({
      code: errorJson.code || "UNKNOWN_ERROR",
      correlationId: errorJson.correlationId || void 0,
      message: errorJson.message || response.statusText,
      statusCode: response.status
    });
  }
  const { data } = await response.json();
  if (data.status === "FAILED") {
    return {
      paymentId: data.paymentId,
      status: "FAILED",
      transactions: data.transactions
    };
  }
  if (data.status === "PENDING") {
    return {
      destinationChainId: data.destinationChainId,
      destinationToken: data.destinationToken,
      destinationTokenAddress: data.destinationTokenAddress,
      originAmount: BigInt(data.originAmount),
      originChainId: data.originChainId,
      originToken: data.originToken,
      originTokenAddress: data.originTokenAddress,
      paymentId: data.paymentId,
      purchaseData: data.purchaseData,
      receiver: data.receiver,
      sender: data.sender,
      status: "PENDING",
      transactions: data.transactions
    };
  }
  if (data.status === "NOT_FOUND") {
    return {
      paymentId: data.paymentId,
      status: "NOT_FOUND",
      transactions: []
    };
  }
  return {
    destinationAmount: BigInt(data.destinationAmount),
    destinationChainId: data.destinationChainId,
    destinationToken: data.destinationToken,
    destinationTokenAddress: data.destinationTokenAddress,
    originAmount: BigInt(data.originAmount),
    originChainId: data.originChainId,
    originToken: data.originToken,
    originTokenAddress: data.originTokenAddress,
    paymentId: data.paymentId,
    purchaseData: data.purchaseData,
    receiver: data.receiver,
    sender: data.sender,
    status: "COMPLETED",
    transactions: data.transactions
  };
}

export {
  ApiError,
  status
};
//# sourceMappingURL=chunk-QBAAWPM3.js.map
