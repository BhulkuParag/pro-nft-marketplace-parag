import {
  getAddress
} from "./chunk-6WE3JIZ5.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getStorageAt.js
async function eth_getStorageAt(request, params) {
  return await request({
    method: "eth_getStorageAt",
    params: [
      getAddress(params.address),
      params.position,
      params.blockTag ?? "latest"
    ]
  });
}

export {
  eth_getStorageAt
};
//# sourceMappingURL=chunk-AB2ASU7V.js.map
