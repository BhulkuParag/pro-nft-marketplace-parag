import {
  hexToBigInt
} from "./chunk-AT6CAMHI.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getBalance.js
async function eth_getBalance(request, params) {
  const hexBalance = await request({
    method: "eth_getBalance",
    params: [params.address, params.blockTag || "latest"]
  });
  return hexToBigInt(hexBalance);
}

export {
  eth_getBalance
};
//# sourceMappingURL=chunk-KJUYME5G.js.map
