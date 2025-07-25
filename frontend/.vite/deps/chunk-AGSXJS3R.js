import {
  toFunctionSelector
} from "./chunk-DJWGHHK5.js";

// node_modules/thirdweb/dist/esm/utils/bytecode/detectExtension.js
function detectMethod(options) {
  const fnSelector = Array.isArray(options.method) ? options.method[0] : toFunctionSelector(options.method);
  return options.availableSelectors.includes(fnSelector);
}

export {
  detectMethod
};
//# sourceMappingURL=chunk-AGSXJS3R.js.map
