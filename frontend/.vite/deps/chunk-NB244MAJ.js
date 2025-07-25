import {
  getRpcClient
} from "./chunk-NBODG3QK.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getCode.js
async function eth_getCode(request, params) {
  return request({
    method: "eth_getCode",
    params: [params.address, params.blockTag || "latest"]
  });
}

// node_modules/thirdweb/dist/esm/contract/actions/get-bytecode.js
var BYTECODE_CACHE = /* @__PURE__ */ new WeakMap();
function getBytecode(contract) {
  if (BYTECODE_CACHE.has(contract)) {
    return BYTECODE_CACHE.get(contract);
  }
  const prom = (async () => {
    const rpcRequest = getRpcClient(contract);
    const result = await eth_getCode(rpcRequest, {
      address: contract.address,
      blockTag: "latest"
    });
    if (result === "0x") {
      BYTECODE_CACHE.delete(contract);
    }
    return result;
  })();
  BYTECODE_CACHE.set(contract, prom);
  return prom;
}

export {
  eth_getCode,
  getBytecode
};
//# sourceMappingURL=chunk-NB244MAJ.js.map
