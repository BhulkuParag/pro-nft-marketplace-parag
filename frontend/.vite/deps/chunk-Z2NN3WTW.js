import {
  isHex
} from "./chunk-AT6CAMHI.js";
import {
  fromBoolean,
  fromHex,
  fromNumber,
  fromString
} from "./chunk-44GEKRHH.js";

// node_modules/thirdweb/dist/esm/utils/encoding/to-bytes.js
function toBytes(value, opts = {}) {
  switch (typeof value) {
    case "number":
    case "bigint":
      return numberToBytes(value, opts);
    case "boolean":
      return boolToBytes(value, opts);
    default:
      if (isHex(value)) {
        return hexToBytes(value, opts);
      }
      return stringToBytes(value, opts);
  }
}
function boolToBytes(value, opts = {}) {
  return fromBoolean(value, opts);
}
function hexToBytes(hex_, opts = {}) {
  return fromHex(hex_, opts);
}
function numberToBytes(value, opts) {
  return fromNumber(value, opts);
}
function stringToBytes(value, opts = {}) {
  return fromString(value, opts);
}

export {
  toBytes,
  boolToBytes,
  hexToBytes,
  numberToBytes,
  stringToBytes
};
//# sourceMappingURL=chunk-Z2NN3WTW.js.map
