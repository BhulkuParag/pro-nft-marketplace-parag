import {
  encodeAbiParameters,
  isAbiFunction,
  prepareMethod
} from "./chunk-SD26YTCZ.js";
import {
  getAddress
} from "./chunk-6WE3JIZ5.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
import {
  decodeAbiParameters
} from "./chunk-DJWGHHK5.js";
import {
  parseAbiItem
} from "./chunk-AHXBSVDN.js";
import {
  numberToHex
} from "./chunk-AT6CAMHI.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_call.js
function encodeStateOverrides(overrides) {
  return Object.fromEntries(Object.entries(overrides).map(([address, override]) => {
    return [
      address,
      {
        balance: override.balance ? numberToHex(override.balance) : void 0,
        code: override.code,
        nonce: override.nonce ? numberToHex(override.nonce) : void 0,
        state: override.state,
        stateDiff: override.stateDiff
      }
    ];
  }));
}
async function eth_call(request, params) {
  const { blockNumber, blockTag, ...txRequest } = params;
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const block = blockNumberHex || blockTag || "latest";
  return await request({
    method: "eth_call",
    params: params.stateOverrides ? [
      txRequest,
      block,
      encodeStateOverrides(params.stateOverrides)
    ] : [txRequest, block]
  });
}

// node_modules/thirdweb/dist/esm/transaction/read-contract.js
async function readContract(options) {
  const { contract, method, params } = options;
  const resolvePreparedMethod = async () => {
    var _a, _b;
    if (Array.isArray(method)) {
      return method;
    }
    if (isAbiFunction(method)) {
      return prepareMethod(method);
    }
    if (typeof method === "function") {
      return prepareMethod(
        // @ts-expect-error - we're sure it's a function
        await method(contract)
      );
    }
    if (typeof method === "string" && method.startsWith("function ")) {
      const abiItem = parseAbiItem(method);
      if (abiItem.type === "function") {
        return prepareMethod(abiItem);
      }
      throw new Error(`"method" passed is not of type "function"`);
    }
    if (contract.abi && ((_a = contract.abi) == null ? void 0 : _a.length) > 0) {
      const abiFunction = (_b = contract.abi) == null ? void 0 : _b.find((item) => item.type === "function" && item.name === method);
      if (abiFunction) {
        return prepareMethod(abiFunction);
      }
    }
    throw new Error(`Could not resolve method "${method}".`);
  };
  const [resolvedPreparedMethod, resolvedParams] = await Promise.all([
    resolvePreparedMethod(),
    typeof params === "function" ? params() : params
  ]);
  let encodedData;
  if (resolvedPreparedMethod[1].length === 0) {
    encodedData = resolvedPreparedMethod[0];
  } else {
    encodedData = resolvedPreparedMethod[0] + encodeAbiParameters(
      resolvedPreparedMethod[1],
      // @ts-expect-error - TODO: fix this type issue
      resolvedParams
    ).slice(2);
  }
  const rpcRequest = getRpcClient({
    chain: contract.chain,
    client: contract.client
  });
  const result = await eth_call(rpcRequest, {
    data: encodedData,
    from: options.from ? getAddress(options.from) : void 0,
    to: contract.address
  });
  const decoded = decodeAbiParameters(resolvedPreparedMethod[2], result);
  if (Array.isArray(decoded) && decoded.length === 1) {
    return decoded[0];
  }
  return decoded;
}

export {
  eth_call,
  readContract
};
//# sourceMappingURL=chunk-WHDWYZBU.js.map
