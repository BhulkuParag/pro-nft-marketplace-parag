import {
  isGetActiveClaimConditionSupported
} from "./chunk-YPJVZBY2.js";
import {
  getClaimParams
} from "./chunk-TEZYXEFG.js";
import {
  isContractURISupported
} from "./chunk-5ZVY7E4T.js";
import "./chunk-VJFQPB47.js";
import {
  once
} from "./chunk-XS3SQPWF.js";
import "./chunk-ZG6EPXNA.js";
import "./chunk-VJOHABJ4.js";
import {
  prepareContractCall
} from "./chunk-HEMRZHKU.js";
import "./chunk-6J7DXZMD.js";
import {
  decimals
} from "./chunk-73PJS7P3.js";
import {
  isDecimalsSupported
} from "./chunk-R2IMRU36.js";
import "./chunk-673YCYST.js";
import {
  detectMethod
} from "./chunk-AGSXJS3R.js";
import "./chunk-WHDWYZBU.js";
import "./chunk-SD26YTCZ.js";
import "./chunk-3DGGFYQ2.js";
import "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import "./chunk-PG5X2BYF.js";
import "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import "./chunk-UY2SRO54.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import "./chunk-DJWGHHK5.js";
import "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import "./chunk-LZWAEAXR.js";
import "./chunk-RKJ7S5H4.js";
import "./chunk-YIVCHQGZ.js";
import "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import "./chunk-JGXNTIIP.js";
import "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IDropERC20/write/claim.js
var FN_SELECTOR = "0x84bb1e42";
var FN_INPUTS = [
  {
    name: "receiver",
    type: "address"
  },
  {
    name: "quantity",
    type: "uint256"
  },
  {
    name: "currency",
    type: "address"
  },
  {
    name: "pricePerToken",
    type: "uint256"
  },
  {
    components: [
      {
        name: "proof",
        type: "bytes32[]"
      },
      {
        name: "quantityLimitPerWallet",
        type: "uint256"
      },
      {
        name: "pricePerToken",
        type: "uint256"
      },
      {
        name: "currency",
        type: "address"
      }
    ],
    name: "allowlistProof",
    type: "tuple"
  },
  {
    name: "data",
    type: "bytes"
  }
];
var FN_OUTPUTS = [];
function isClaimSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function claim(options) {
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
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    nonce: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.nonce;
    },
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [
        resolvedOptions.receiver,
        resolvedOptions.quantity,
        resolvedOptions.currency,
        resolvedOptions.pricePerToken,
        resolvedOptions.allowlistProof,
        resolvedOptions.data
      ];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    }
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc20/drops/write/claimTo.js
function claimTo(options) {
  return claim({
    asyncParams: async () => {
      const quantity = await (async () => {
        if ("quantityInWei" in options) {
          return options.quantityInWei;
        }
        const { toUnits } = await import("./units-SFXXCOHV.js");
        return toUnits(options.quantity, await decimals({ contract: options.contract }));
      })();
      return getClaimParams({
        contract: options.contract,
        from: options.from,
        quantity,
        singlePhaseDrop: options.singlePhaseDrop,
        to: options.to,
        tokenDecimals: await decimals({ contract: options.contract }),
        type: "erc20"
      });
    },
    contract: options.contract
  });
}
function isClaimToSupported(availableSelectors) {
  return [
    // has to support the claim method
    isClaimSupported(availableSelectors),
    // has to support the getActiveClaimCondition method
    isGetActiveClaimConditionSupported(availableSelectors),
    // has to support the decimals method
    isDecimalsSupported(availableSelectors),
    // requires contractMetadata for claimer proofs
    isContractURISupported(availableSelectors)
  ].every(Boolean);
}
export {
  claimTo,
  isClaimToSupported
};
//# sourceMappingURL=claimTo-S67PMMHU.js.map
