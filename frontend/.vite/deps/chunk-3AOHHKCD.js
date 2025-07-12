import {
  name,
  symbol
} from "./chunk-ZG6EPXNA.js";
import {
  decimals
} from "./chunk-R2IMRU36.js";
import {
  isNativeTokenAddress
} from "./chunk-673YCYST.js";

// node_modules/thirdweb/dist/esm/extensions/erc20/read/getCurrencyMetadata.js
async function getCurrencyMetadata(options) {
  if (isNativeTokenAddress(options.contract.address)) {
    return {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
      // overwrite with native currency of the chain if available
      ...options.contract.chain.nativeCurrency
    };
  }
  try {
    const [name_, symbol_, decimals_] = await Promise.all([
      name(options).catch(() => ""),
      symbol(options),
      decimals(options)
    ]);
    return {
      decimals: decimals_,
      name: name_,
      symbol: symbol_
    };
  } catch (e) {
    throw new Error(`Invalid currency token: ${e}`);
  }
}

export {
  getCurrencyMetadata
};
//# sourceMappingURL=chunk-3AOHHKCD.js.map
