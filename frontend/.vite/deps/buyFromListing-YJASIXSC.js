import {
  getListing,
  isGetListingSupported,
  isListingValid
} from "./chunk-2T2L7JUW.js";
import "./chunk-ETTKCPT3.js";
import {
  once
} from "./chunk-XS3SQPWF.js";
import "./chunk-3AOHHKCD.js";
import "./chunk-ZG6EPXNA.js";
import {
  prepareContractCall
} from "./chunk-HEMRZHKU.js";
import "./chunk-6J7DXZMD.js";
import "./chunk-R2IMRU36.js";
import {
  isNativeTokenAddress
} from "./chunk-673YCYST.js";
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

// node_modules/thirdweb/dist/esm/extensions/marketplace/__generated__/IDirectListings/write/buyFromListing.js
var FN_SELECTOR = "0x704232dc";
var FN_INPUTS = [
  {
    name: "_listingId",
    type: "uint256"
  },
  {
    name: "_buyFor",
    type: "address"
  },
  {
    name: "_quantity",
    type: "uint256"
  },
  {
    name: "_currency",
    type: "address"
  },
  {
    name: "_expectedTotalPrice",
    type: "uint256"
  }
];
var FN_OUTPUTS = [];
function isBuyFromListingSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function buyFromListing(options) {
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
        resolvedOptions.listingId,
        resolvedOptions.buyFor,
        resolvedOptions.quantity,
        resolvedOptions.currency,
        resolvedOptions.expectedTotalPrice
      ];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    }
  });
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/direct-listings/write/buyFromListing.js
function buyFromListing2(options) {
  return buyFromListing({
    asyncParams: async () => {
      const listing = await getListing({
        contract: options.contract,
        listingId: options.listingId
      });
      const listingValidity = await isListingValid({
        contract: options.contract,
        listing,
        quantity: options.quantity
      });
      if (!listingValidity.valid) {
        throw new Error(listingValidity.reason);
      }
      return {
        buyFor: options.recipient,
        currency: listing.currencyContractAddress,
        expectedTotalPrice: listing.pricePerToken * options.quantity,
        listingId: options.listingId,
        overrides: {
          erc20Value: isNativeTokenAddress(listing.currencyContractAddress) ? void 0 : {
            amountWei: listing.pricePerToken * options.quantity,
            tokenAddress: listing.currencyContractAddress
          },
          extraGas: 50000n,
          // add extra gas to account for router call
          value: isNativeTokenAddress(listing.currencyContractAddress) ? listing.pricePerToken * options.quantity : 0n
        },
        quantity: options.quantity
      };
    },
    contract: options.contract
  });
}
function isBuyFromListingSupported2(availableSelectors) {
  return isBuyFromListingSupported(availableSelectors) && isGetListingSupported(availableSelectors);
}
export {
  buyFromListing2 as buyFromListing,
  isBuyFromListingSupported2 as isBuyFromListingSupported
};
//# sourceMappingURL=buyFromListing-YJASIXSC.js.map
