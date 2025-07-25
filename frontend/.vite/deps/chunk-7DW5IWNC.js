import {
  hexToBigInt
} from "./chunk-AT6CAMHI.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_estimateGas.js
async function eth_estimateGas(request, transactionRequest) {
  const estimateResult = await request({
    method: "eth_estimateGas",
    params: [transactionRequest]
  });
  return hexToBigInt(estimateResult);
}

export {
  eth_estimateGas
};
//# sourceMappingURL=chunk-7DW5IWNC.js.map
