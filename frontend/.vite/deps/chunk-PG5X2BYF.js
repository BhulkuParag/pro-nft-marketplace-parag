import {
  isAddress
} from "./chunk-6WE3JIZ5.js";

// node_modules/thirdweb/dist/esm/contract/contract.js
function getContract(options) {
  if (!options.client) {
    throw new Error(`getContract validation error - invalid client: ${options.client}`);
  }
  if (!isAddress(options.address)) {
    throw new Error(`getContract validation error - invalid address: ${options.address}`);
  }
  if (!options.chain || !options.chain.id) {
    throw new Error(`getContract validation error - invalid chain: ${options.chain}`);
  }
  return options;
}

export {
  getContract
};
//# sourceMappingURL=chunk-PG5X2BYF.js.map
