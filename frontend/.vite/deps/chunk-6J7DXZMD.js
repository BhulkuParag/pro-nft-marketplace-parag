// node_modules/thirdweb/dist/esm/transaction/prepare-transaction.js
var TransactionTypeMap = {
  eip1559: 1,
  eip2930: 2,
  eip4844: 3,
  eip7702: 4,
  legacy: 0
};
function prepareTransaction(options, info) {
  if (info) {
    options.__preparedMethod = info.preparedMethod;
    options.__contract = info.contract;
  }
  return options;
}

export {
  TransactionTypeMap,
  prepareTransaction
};
//# sourceMappingURL=chunk-6J7DXZMD.js.map
