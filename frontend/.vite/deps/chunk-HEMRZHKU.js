import {
  prepareTransaction
} from "./chunk-6J7DXZMD.js";
import {
  encodeAbiParameters,
  isAbiFunction,
  prepareMethod
} from "./chunk-SD26YTCZ.js";
import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import {
  parseAbiItem
} from "./chunk-AHXBSVDN.js";

// node_modules/thirdweb/dist/esm/transaction/prepare-contract-call.js
function prepareContractCall(options) {
  const { contract, method, params, ...rest } = options;
  const preparedMethodPromise = () => (async () => {
    var _a, _b;
    if (Array.isArray(method)) {
      return method;
    }
    if (isAbiFunction(method)) {
      return prepareMethod(method);
    }
    if (typeof method === "function") {
      return prepareMethod(
        // @ts-expect-error - method *is* function in this case
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
  })();
  return prepareTransaction({
    ...rest,
    chain: contract.chain,
    client: contract.client,
    data: async () => {
      let preparedM;
      if (Array.isArray(method)) {
        preparedM = method;
      } else {
        preparedM = await preparedMethodPromise();
      }
      if (preparedM[1].length === 0) {
        return preparedM[0];
      }
      return preparedM[0] + encodeAbiParameters(
        preparedM[1],
        // @ts-expect-error - TODO: fix this type issue
        await resolvePromisedValue(params ?? [])
      ).slice(2);
    },
    // these always inferred from the contract
    to: contract.address
  }, {
    contract,
    preparedMethod: preparedMethodPromise
  });
}

export {
  prepareContractCall
};
//# sourceMappingURL=chunk-HEMRZHKU.js.map
