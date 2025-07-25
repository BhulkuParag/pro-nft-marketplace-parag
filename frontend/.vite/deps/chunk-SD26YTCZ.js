import {
  estimateGas,
  getDefaultGasOverrides,
  getGasPrice
} from "./chunk-3DGGFYQ2.js";
import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import {
  isAddress
} from "./chunk-6WE3JIZ5.js";
import {
  toEther
} from "./chunk-UY2SRO54.js";
import {
  toFunctionSelector
} from "./chunk-DJWGHHK5.js";
import {
  parseAbiItem
} from "./chunk-AHXBSVDN.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";
import {
  boolToHex,
  isHex,
  numberToHex,
  padHex,
  stringToHex
} from "./chunk-AT6CAMHI.js";
import {
  concat2 as concat,
  slice2 as slice
} from "./chunk-44GEKRHH.js";
import {
  base,
  baseSepolia,
  optimism,
  optimismSepolia,
  zora,
  zoraSepolia
} from "./chunk-JGXNTIIP.js";
import {
  LruMap
} from "./chunk-SNQ54XRM.js";

// node_modules/thirdweb/dist/esm/utils/encoding/helpers/byte-size.js
function byteSize(value) {
  if (isHex(value, { strict: false })) {
    return Math.ceil((value.length - 2) / 2);
  }
  return value.length;
}

// node_modules/thirdweb/dist/esm/utils/abi/encodeAbiParameters.js
function encodeAbiParameters(params, values) {
  if (params.length !== values.length) {
    throw new Error("The number of parameters and values must match.");
  }
  const preparedParams = prepareParams({
    params,
    values
  });
  const data = encodeParams(preparedParams);
  if (data.length === 0) {
    return "0x";
  }
  return data;
}
function prepareParams({ params, values }) {
  const preparedParams = [];
  for (let i = 0; i < params.length; i++) {
    preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
  }
  return preparedParams;
}
function prepareParam({ param, value }) {
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return encodeArray(value, { length, param: { ...param, type } });
  }
  if (param.type === "tuple") {
    return encodeTuple(value, {
      param
    });
  }
  if (param.type === "address") {
    return encodeAddress(value);
  }
  if (param.type === "bool") {
    return encodeBool(value);
  }
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    const signed = param.type.startsWith("int");
    return encodeNumber(value, { signed });
  }
  if (param.type.startsWith("bytes")) {
    return encodeBytes(value, { param });
  }
  if (param.type === "string") {
    return encodeString(value);
  }
  throw new Error(`Unsupported parameter type: ${param.type}`);
}
function encodeParams(preparedParams) {
  let staticSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic) {
      staticSize += 32;
    } else {
      staticSize += byteSize(encoded);
    }
  }
  const staticParams = [];
  const dynamicParams = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic) {
      staticParams.push(numberToHex(staticSize + dynamicSize, { size: 32 }));
      dynamicParams.push(encoded);
      dynamicSize += byteSize(encoded);
    } else {
      staticParams.push(encoded);
    }
  }
  return concat(...[...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
  if (value !== "" && value !== void 0 && !isAddress(value)) {
    throw new Error(`Invalid address: ${value}`);
  }
  return { dynamic: false, encoded: padHex(value.toLowerCase()) };
}
function encodeArray(value, { length, param }) {
  const dynamic = length === null;
  if (!Array.isArray(value)) {
    throw new Error("Invalid array value.");
  }
  if (!dynamic && value.length !== length) {
    throw new Error("Invalid array length.");
  }
  let dynamicChild = false;
  const preparedParams = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParam({ param, value: value[i] });
    if (preparedParam.dynamic) {
      dynamicChild = true;
    }
    preparedParams.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encodeParams(preparedParams);
    if (dynamic) {
      const length_ = numberToHex(preparedParams.length, { size: 32 });
      return {
        dynamic: true,
        encoded: preparedParams.length > 0 ? concat(...[length_, data]) : length_
      };
    }
    if (dynamicChild) {
      return { dynamic: true, encoded: data };
    }
  }
  return {
    dynamic: false,
    encoded: concat(...preparedParams.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { param }) {
  const [, paramSize] = param.type.split("bytes");
  const bytesSize = byteSize(value);
  if (!paramSize) {
    let value_ = value;
    if (bytesSize % 32 !== 0) {
      value_ = padHex(value_, {
        dir: "right",
        size: Math.ceil((value.length - 2) / 2 / 32) * 32
      });
    }
    return {
      dynamic: true,
      encoded: concat(...[padHex(numberToHex(bytesSize, { size: 32 })), value_])
    };
  }
  if (bytesSize !== Number.parseInt(paramSize)) {
    throw new Error(`Invalid bytes${paramSize} size: ${bytesSize}`);
  }
  return { dynamic: false, encoded: padHex(value, { dir: "right" }) };
}
function encodeBool(value) {
  return { dynamic: false, encoded: padHex(boolToHex(value)) };
}
function encodeNumber(value, { signed }) {
  return {
    dynamic: false,
    encoded: numberToHex(value, {
      signed,
      size: 32
    })
  };
}
function encodeString(value) {
  const hexValue = stringToHex(value);
  const partsLength = Math.ceil(byteSize(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padHex(slice(hexValue, i * 32, (i + 1) * 32), {
      dir: "right"
    }));
  }
  return {
    dynamic: true,
    encoded: concat(...[padHex(numberToHex(byteSize(hexValue), { size: 32 })), ...parts])
  };
}
function encodeTuple(value, { param }) {
  let dynamic = false;
  const preparedParams = [];
  for (let i = 0; i < param.components.length; i++) {
    const param_ = param.components[i];
    const index = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParam({
      param: param_,
      // biome-ignore lint/style/noNonNullAssertion: we know the value is not `undefined`.
      // biome-ignore lint/suspicious/noExplicitAny: TODO: fix any
      value: value[index]
    });
    preparedParams.push(preparedParam);
    if (preparedParam.dynamic) {
      dynamic = true;
    }
  }
  return {
    dynamic,
    encoded: dynamic ? encodeParams(preparedParams) : concat(...preparedParams.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  const matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    // biome-ignore lint/style/noNonNullAssertion: we know the value is not `undefined`.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}

// node_modules/thirdweb/dist/esm/utils/abi/prepare-method.js
var prepareMethodCache = new LruMap(4096);
function prepareMethod(method) {
  const key = typeof method === "string" ? method : stringify(method);
  if (prepareMethodCache.has(key)) {
    return prepareMethodCache.get(key);
  }
  const abiFn = typeof method === "string" ? (
    // @ts-expect-error - we're sure it's a string...
    parseAbiItem(method)
  ) : method;
  const sig = toFunctionSelector(abiFn);
  const ret = [sig, abiFn.inputs, abiFn.outputs];
  prepareMethodCache.set(key, ret);
  return ret;
}

// node_modules/thirdweb/dist/esm/chains/constants.js
var opChains = [
  base.id,
  baseSepolia.id,
  optimism.id,
  optimismSepolia.id,
  zora.id,
  zoraSepolia.id,
  34443,
  // mode
  919,
  // mode testnet
  42220,
  // celo
  44787,
  // celo testnet
  204,
  // opBNB
  5611
  // opBNB testnet
];
async function isOpStackChain(chain) {
  if (chain.id === 1337 || chain.id === 31337) {
    return false;
  }
  if (opChains.includes(chain.id)) {
    return true;
  }
  try {
    const { getChainMetadata } = await import("./utils-6UX76OJX.js");
    const chainMetadata = await getChainMetadata(chain);
    return chainMetadata.stackType === "optimism_bedrock";
  } catch {
    return false;
  }
}

// node_modules/thirdweb/dist/esm/transaction/actions/estimate-gas-cost.js
async function estimateGasCost(options) {
  var _a;
  const { transaction } = options;
  const from = options.from ?? ((_a = options.account) == null ? void 0 : _a.address) ?? void 0;
  const gasLimit = await resolvePromisedValue(transaction.gas) || await estimateGas({ from, transaction });
  const fees = await getDefaultGasOverrides(transaction.client, transaction.chain);
  const gasPrice = fees.maxFeePerGas || fees.gasPrice;
  if (gasPrice === void 0) {
    throw new Error(`Unable to determine gas price for chain ${transaction.chain.id}`);
  }
  let l1Fee;
  if (await isOpStackChain(transaction.chain)) {
    const { estimateL1Fee } = await import("./estimate-l1-fee-JZB3V7EG.js");
    l1Fee = await estimateL1Fee({
      transaction
    });
  } else {
    l1Fee = 0n;
  }
  const wei = gasLimit * gasPrice + l1Fee;
  return {
    ether: toEther(wei),
    wei
  };
}

// node_modules/thirdweb/dist/esm/transaction/utils.js
function isAbiFunction(item) {
  return !!(item && typeof item === "object" && "type" in item && item.type === "function");
}
async function getTransactionGasCost(tx, from) {
  try {
    const gasCost = await estimateGasCost({
      from,
      transaction: tx
    });
    const bufferCost = gasCost.wei / 10n;
    return gasCost.wei + bufferCost;
  } catch {
    if (from) {
      return await getTransactionGasCost(tx);
    }
    const gasPrice = await getGasPrice({
      chain: tx.chain,
      client: tx.client
    });
    return 1000000n * gasPrice;
  }
}

export {
  encodeAbiParameters,
  prepareMethod,
  estimateGasCost,
  isAbiFunction,
  getTransactionGasCost
};
//# sourceMappingURL=chunk-SD26YTCZ.js.map
