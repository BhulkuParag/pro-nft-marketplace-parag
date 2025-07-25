import {
  once
} from "./chunk-XS3SQPWF.js";
import {
  prepareContractCall
} from "./chunk-HEMRZHKU.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/allowance.js
var FN_SELECTOR = "0xdd62ed3e";
var FN_INPUTS = [
  {
    name: "owner",
    type: "address"
  },
  {
    name: "spender",
    type: "address"
  }
];
var FN_OUTPUTS = [
  {
    type: "uint256"
  }
];
async function allowance(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.owner, options.spender]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/write/approve.js
var FN_SELECTOR2 = "0x095ea7b3";
var FN_INPUTS2 = [
  {
    name: "spender",
    type: "address"
  },
  {
    name: "value",
    type: "uint256"
  }
];
var FN_OUTPUTS2 = [
  {
    type: "bool"
  }
];
function approve(options) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });
  return prepareContractCall({
    accessList: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.accessList;
    },
    authorizationList: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.authorizationList;
    },
    contract: options.contract,
    erc20Value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.erc20Value;
    },
    extraGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.extraGas;
    },
    gas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gas;
    },
    gasPrice: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gasPrice;
    },
    maxFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxFeePerGas;
    },
    maxPriorityFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxPriorityFeePerGas;
    },
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2],
    nonce: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.nonce;
    },
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.spender, resolvedOptions.value];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    }
  });
}

export {
  allowance,
  approve
};
//# sourceMappingURL=chunk-2HHM4MRW.js.map
