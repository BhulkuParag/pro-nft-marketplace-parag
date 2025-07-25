// node_modules/thirdweb/dist/esm/utils/promise/resolve-promised-value.js
async function resolvePromisedValue(value) {
  return typeof value === "function" ? await value() : value;
}

export {
  resolvePromisedValue
};
//# sourceMappingURL=chunk-TACA3XON.js.map
