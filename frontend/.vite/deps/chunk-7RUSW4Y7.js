// node_modules/thirdweb/dist/esm/utils/any-evm/zksync/isZkSyncChain.js
async function isZkSyncChain(chain) {
  if (chain.id === 1337 || chain.id === 31337) {
    return false;
  }
  if (chain.id === 324 || chain.id === 300 || chain.id === 302 || chain.id === 11124 || chain.id === 282 || chain.id === 388 || chain.id === 4654 || chain.id === 333271 || chain.id === 37111 || chain.id === 978658 || chain.id === 531050104 || chain.id === 4457845 || chain.id === 2741 || chain.id === 240 || chain.id === 555271 || chain.id === 61166 || chain.id === 555272) {
    return true;
  }
  try {
    const { getChainMetadata } = await import("./utils-6UX76OJX.js");
    const chainMetadata = await getChainMetadata(chain);
    return chainMetadata.stackType === "zksync_stack";
  } catch {
    return false;
  }
}

export {
  isZkSyncChain
};
//# sourceMappingURL=chunk-7RUSW4Y7.js.map
