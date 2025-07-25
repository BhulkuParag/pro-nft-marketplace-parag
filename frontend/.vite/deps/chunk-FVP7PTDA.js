import {
  decode,
  encode
} from "./chunk-HDWEKPHM.js";
import {
  keccak256,
  validate2
} from "./chunk-A5CP6DX3.js";
import {
  formatAbi,
  formatAbiItem,
  parseAbi,
  parseAbiItem
} from "./chunk-AHXBSVDN.js";
import {
  BaseError,
  concat2 as concat,
  fromString2 as fromString,
  size2 as size,
  slice2 as slice,
  validate2 as validate
} from "./chunk-44GEKRHH.js";
import {
  __export
} from "./chunk-OS7ZSSJM.js";

// node_modules/ox/_esm/core/Abi.js
var Abi_exports = {};
__export(Abi_exports, {
  format: () => format,
  from: () => from
});

// node_modules/ox/_esm/core/internal/abi.js
function isSignatures(value) {
  for (const item of value) {
    if (typeof item !== "string")
      return false;
  }
  return true;
}

// node_modules/ox/_esm/core/Abi.js
function format(abi) {
  return formatAbi(abi);
}
function from(abi) {
  if (isSignatures(abi))
    return parseAbi(abi);
  return abi;
}

// node_modules/ox/_esm/core/AbiConstructor.js
var AbiConstructor_exports = {};
__export(AbiConstructor_exports, {
  decode: () => decode2,
  encode: () => encode2,
  format: () => format3,
  from: () => from3,
  fromAbi: () => fromAbi2
});

// node_modules/ox/_esm/core/AbiItem.js
var AbiItem_exports = {};
__export(AbiItem_exports, {
  AmbiguityError: () => AmbiguityError,
  InvalidSelectorSizeError: () => InvalidSelectorSizeError,
  NotFoundError: () => NotFoundError,
  format: () => format2,
  from: () => from2,
  fromAbi: () => fromAbi,
  getSelector: () => getSelector,
  getSignature: () => getSignature,
  getSignatureHash: () => getSignatureHash
});

// node_modules/ox/_esm/core/internal/abiItem.js
function normalizeSignature(signature) {
  let active = true;
  let current = "";
  let level = 0;
  let result = "";
  let valid = false;
  for (let i = 0; i < signature.length; i++) {
    const char = signature[i];
    if (["(", ")", ","].includes(char))
      active = true;
    if (char === "(")
      level++;
    if (char === ")")
      level--;
    if (!active)
      continue;
    if (level === 0) {
      if (char === " " && ["event", "function", "error", ""].includes(result))
        result = "";
      else {
        result += char;
        if (char === ")") {
          valid = true;
          break;
        }
      }
      continue;
    }
    if (char === " ") {
      if (signature[i - 1] !== "," && current !== "," && current !== ",(") {
        current = "";
        active = false;
      }
      continue;
    }
    result += char;
    current += char;
  }
  if (!valid)
    throw new BaseError("Unable to normalize signature.");
  return result;
}
function isArgOfType(arg, abiParameter) {
  const argType = typeof arg;
  const abiParameterType = abiParameter.type;
  switch (abiParameterType) {
    case "address":
      return validate2(arg, { strict: false });
    case "bool":
      return argType === "boolean";
    case "function":
      return argType === "string";
    case "string":
      return argType === "string";
    default: {
      if (abiParameterType === "tuple" && "components" in abiParameter)
        return Object.values(abiParameter.components).every((component, index) => {
          return isArgOfType(Object.values(arg)[index], component);
        });
      if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
        return argType === "number" || argType === "bigint";
      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
        return argType === "string" || arg instanceof Uint8Array;
      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
        return Array.isArray(arg) && arg.every((x) => isArgOfType(x, {
          ...abiParameter,
          // Pop off `[]` or `[M]` from end of type
          type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
        }));
      }
      return false;
    }
  }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
  for (const parameterIndex in sourceParameters) {
    const sourceParameter = sourceParameters[parameterIndex];
    const targetParameter = targetParameters[parameterIndex];
    if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter)
      return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
    const types = [sourceParameter.type, targetParameter.type];
    const ambiguous = (() => {
      if (types.includes("address") && types.includes("bytes20"))
        return true;
      if (types.includes("address") && types.includes("string"))
        return validate2(args[parameterIndex], {
          strict: false
        });
      if (types.includes("address") && types.includes("bytes"))
        return validate2(args[parameterIndex], {
          strict: false
        });
      return false;
    })();
    if (ambiguous)
      return types;
  }
  return;
}

// node_modules/ox/_esm/core/AbiItem.js
function format2(abiItem) {
  return formatAbiItem(abiItem);
}
function from2(abiItem, options = {}) {
  const { prepare = true } = options;
  const item = (() => {
    if (Array.isArray(abiItem))
      return parseAbiItem(abiItem);
    if (typeof abiItem === "string")
      return parseAbiItem(abiItem);
    return abiItem;
  })();
  return {
    ...item,
    ...prepare ? { hash: getSignatureHash(item) } : {}
  };
}
function fromAbi(abi, name, options) {
  const { args = [], prepare = true } = options ?? {};
  const isSelector = validate(name, { strict: false });
  const abiItems = abi.filter((abiItem2) => {
    if (isSelector) {
      if (abiItem2.type === "function" || abiItem2.type === "error")
        return getSelector(abiItem2) === slice(name, 0, 4);
      if (abiItem2.type === "event")
        return getSignatureHash(abiItem2) === name;
      return false;
    }
    return "name" in abiItem2 && abiItem2.name === name;
  });
  if (abiItems.length === 0)
    throw new NotFoundError({ name });
  if (abiItems.length === 1)
    return {
      ...abiItems[0],
      ...prepare ? { hash: getSignatureHash(abiItems[0]) } : {}
    };
  let matchedAbiItem = void 0;
  for (const abiItem2 of abiItems) {
    if (!("inputs" in abiItem2))
      continue;
    if (!args || args.length === 0) {
      if (!abiItem2.inputs || abiItem2.inputs.length === 0)
        return {
          ...abiItem2,
          ...prepare ? { hash: getSignatureHash(abiItem2) } : {}
        };
      continue;
    }
    if (!abiItem2.inputs)
      continue;
    if (abiItem2.inputs.length === 0)
      continue;
    if (abiItem2.inputs.length !== args.length)
      continue;
    const matched = args.every((arg, index) => {
      const abiParameter = "inputs" in abiItem2 && abiItem2.inputs[index];
      if (!abiParameter)
        return false;
      return isArgOfType(arg, abiParameter);
    });
    if (matched) {
      if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
        const ambiguousTypes = getAmbiguousTypes(abiItem2.inputs, matchedAbiItem.inputs, args);
        if (ambiguousTypes)
          throw new AmbiguityError({
            abiItem: abiItem2,
            type: ambiguousTypes[0]
          }, {
            abiItem: matchedAbiItem,
            type: ambiguousTypes[1]
          });
      }
      matchedAbiItem = abiItem2;
    }
  }
  const abiItem = (() => {
    if (matchedAbiItem)
      return matchedAbiItem;
    const [abiItem2, ...overloads] = abiItems;
    return { ...abiItem2, overloads };
  })();
  if (!abiItem)
    throw new NotFoundError({ name });
  return {
    ...abiItem,
    ...prepare ? { hash: getSignatureHash(abiItem) } : {}
  };
}
function getSelector(abiItem) {
  return slice(getSignatureHash(abiItem), 0, 4);
}
function getSignature(abiItem) {
  const signature = (() => {
    if (typeof abiItem === "string")
      return abiItem;
    return formatAbiItem(abiItem);
  })();
  return normalizeSignature(signature);
}
function getSignatureHash(abiItem) {
  if (typeof abiItem !== "string" && "hash" in abiItem && abiItem.hash)
    return abiItem.hash;
  return keccak256(fromString(getSignature(abiItem)));
}
var AmbiguityError = class extends BaseError {
  constructor(x, y) {
    super("Found ambiguous types in overloaded ABI Items.", {
      metaMessages: [
        // TODO: abitype to add support for signature-formatted ABI items.
        `\`${x.type}\` in \`${normalizeSignature(formatAbiItem(x.abiItem))}\`, and`,
        `\`${y.type}\` in \`${normalizeSignature(formatAbiItem(y.abiItem))}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.AmbiguityError"
    });
  }
};
var NotFoundError = class extends BaseError {
  constructor({ name, data, type = "item" }) {
    const selector = (() => {
      if (name)
        return ` with name "${name}"`;
      if (data)
        return ` with data "${data}"`;
      return "";
    })();
    super(`ABI ${type}${selector} not found.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.NotFoundError"
    });
  }
};
var InvalidSelectorSizeError = class extends BaseError {
  constructor({ data }) {
    super(`Selector size is invalid. Expected 4 bytes. Received ${size(data)} bytes ("${data}").`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.InvalidSelectorSizeError"
    });
  }
};

// node_modules/ox/_esm/core/AbiConstructor.js
function decode2(abiConstructor, options) {
  const { bytecode } = options;
  if (abiConstructor.inputs.length === 0)
    return void 0;
  const data = options.data.replace(bytecode, "0x");
  return decode(abiConstructor.inputs, data);
}
function encode2(abiConstructor, options) {
  var _a;
  const { bytecode, args } = options;
  return concat(bytecode, ((_a = abiConstructor.inputs) == null ? void 0 : _a.length) && (args == null ? void 0 : args.length) ? encode(abiConstructor.inputs, args) : "0x");
}
function format3(abiConstructor) {
  return formatAbiItem(abiConstructor);
}
function from3(abiConstructor) {
  return from2(abiConstructor);
}
function fromAbi2(abi) {
  const item = abi.find((item2) => item2.type === "constructor");
  if (!item)
    throw new NotFoundError({ name: "constructor" });
  return item;
}

// node_modules/ox/_esm/core/AbiFunction.js
var AbiFunction_exports = {};
__export(AbiFunction_exports, {
  decodeData: () => decodeData,
  decodeResult: () => decodeResult,
  encodeData: () => encodeData,
  encodeResult: () => encodeResult,
  format: () => format4,
  from: () => from4,
  fromAbi: () => fromAbi3,
  getSelector: () => getSelector2
});
function decodeData(abiFunction, data) {
  const { overloads } = abiFunction;
  if (size(data) < 4)
    throw new InvalidSelectorSizeError({ data });
  if (abiFunction.inputs.length === 0)
    return void 0;
  const item = overloads ? fromAbi3([abiFunction, ...overloads], data) : abiFunction;
  if (size(data) <= 4)
    return void 0;
  return decode(item.inputs, slice(data, 4));
}
function decodeResult(abiFunction, data, options = {}) {
  const values = decode(abiFunction.outputs, data, options);
  if (values && Object.keys(values).length === 0)
    return void 0;
  if (values && Object.keys(values).length === 1) {
    if (Array.isArray(values))
      return values[0];
    return Object.values(values)[0];
  }
  return values;
}
function encodeData(abiFunction, ...args) {
  const { overloads } = abiFunction;
  const item = overloads ? fromAbi3([abiFunction, ...overloads], abiFunction.name, {
    args: args[0]
  }) : abiFunction;
  const selector = getSelector2(item);
  const data = args.length > 0 ? encode(item.inputs, args[0]) : void 0;
  return data ? concat(selector, data) : selector;
}
function encodeResult(abiFunction, output, options = {}) {
  const { as = "Array" } = options;
  const values = (() => {
    if (abiFunction.outputs.length === 1)
      return [output];
    if (Array.isArray(output))
      return output;
    if (as === "Object")
      return Object.values(output);
    return [output];
  })();
  return encode(abiFunction.outputs, values);
}
function format4(abiFunction) {
  return formatAbiItem(abiFunction);
}
function from4(abiFunction, options = {}) {
  return from2(abiFunction, options);
}
function fromAbi3(abi, name, options) {
  const item = fromAbi(abi, name, options);
  if (item.type !== "function")
    throw new NotFoundError({ name, type: "function" });
  return item;
}
function getSelector2(abiItem) {
  return getSelector(abiItem);
}

export {
  from,
  Abi_exports,
  from2,
  fromAbi,
  getSelector,
  getSignatureHash,
  NotFoundError,
  InvalidSelectorSizeError,
  AbiItem_exports,
  encode2 as encode,
  fromAbi2,
  AbiConstructor_exports,
  decodeData,
  encodeData,
  from4 as from3,
  fromAbi3,
  AbiFunction_exports
};
//# sourceMappingURL=chunk-FVP7PTDA.js.map
