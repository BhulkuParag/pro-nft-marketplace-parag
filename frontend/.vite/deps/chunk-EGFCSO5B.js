import {
  InvalidVError,
  extract,
  from,
  fromTuple,
  toRpc,
  toTuple,
  vToYParity,
  yParityToV
} from "./chunk-3YR3TNSC.js";
import {
  assert,
  create,
  keccak256,
  validate as validate2
} from "./chunk-A5CP6DX3.js";
import {
  BaseError,
  InvalidLengthError,
  concat2 as concat,
  fromBytes,
  fromHex,
  fromNumber2 as fromNumber,
  size2 as size,
  slice2 as slice,
  trimLeft2 as trimLeft,
  validate2 as validate
} from "./chunk-44GEKRHH.js";
import {
  __export
} from "./chunk-OS7ZSSJM.js";

// node_modules/ox/_esm/core/Value.js
var Value_exports = {};
__export(Value_exports, {
  InvalidDecimalNumberError: () => InvalidDecimalNumberError,
  exponents: () => exponents,
  format: () => format,
  formatEther: () => formatEther,
  formatGwei: () => formatGwei,
  from: () => from2,
  fromEther: () => fromEther,
  fromGwei: () => fromGwei
});
var exponents = {
  wei: 0,
  gwei: 9,
  szabo: 12,
  finney: 15,
  ether: 18
};
function format(value, decimals = 0) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
function formatEther(wei, unit = "wei") {
  return format(wei, exponents.ether - exponents[unit]);
}
function formatGwei(wei, unit = "wei") {
  return format(wei, exponents.gwei - exponents[unit]);
}
function from2(value, decimals = 0) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value))
    throw new InvalidDecimalNumberError({ value });
  let [integer = "", fraction = "0"] = value.split(".");
  const negative = integer.startsWith("-");
  if (negative)
    integer = integer.slice(1);
  fraction = fraction.replace(/(0+)$/, "");
  if (decimals === 0) {
    if (Math.round(Number(`.${fraction}`)) === 1)
      integer = `${BigInt(integer) + 1n}`;
    fraction = "";
  } else if (fraction.length > decimals) {
    const [left, unit, right] = [
      fraction.slice(0, decimals - 1),
      fraction.slice(decimals - 1, decimals),
      fraction.slice(decimals)
    ];
    const rounded = Math.round(Number(`${unit}.${right}`));
    if (rounded > 9)
      fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
    else
      fraction = `${left}${rounded}`;
    if (fraction.length > decimals) {
      fraction = fraction.slice(1);
      integer = `${BigInt(integer) + 1n}`;
    }
    fraction = fraction.slice(0, decimals);
  } else {
    fraction = fraction.padEnd(decimals, "0");
  }
  return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}
function fromEther(ether, unit = "wei") {
  return from2(ether, exponents.ether - exponents[unit]);
}
function fromGwei(gwei, unit = "wei") {
  return from2(gwei, exponents.gwei - exponents[unit]);
}
var InvalidDecimalNumberError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is not a valid decimal number.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Value.InvalidDecimalNumberError"
    });
  }
};

// node_modules/ox/_esm/core/TransactionEnvelopeEip1559.js
var TransactionEnvelopeEip1559_exports = {};
__export(TransactionEnvelopeEip1559_exports, {
  assert: () => assert2,
  deserialize: () => deserialize,
  from: () => from4,
  getSignPayload: () => getSignPayload,
  hash: () => hash,
  serialize: () => serialize,
  serializedType: () => serializedType,
  toRpc: () => toRpc2,
  type: () => type,
  validate: () => validate3
});

// node_modules/ox/_esm/core/AccessList.js
var AccessList_exports = {};
__export(AccessList_exports, {
  InvalidStorageKeySizeError: () => InvalidStorageKeySizeError,
  fromTupleList: () => fromTupleList,
  toTupleList: () => toTupleList
});
function fromTupleList(accessList) {
  const list = [];
  for (let i = 0; i < accessList.length; i++) {
    const [address, storageKeys] = accessList[i];
    if (address)
      assert(address, { strict: false });
    list.push({
      address,
      storageKeys: storageKeys.map((key) => validate2(key) ? key : trimLeft(key))
    });
  }
  return list;
}
function toTupleList(accessList) {
  if (!accessList || accessList.length === 0)
    return [];
  const tuple = [];
  for (const { address, storageKeys } of accessList) {
    for (let j = 0; j < storageKeys.length; j++)
      if (size(storageKeys[j]) !== 32)
        throw new InvalidStorageKeySizeError({
          storageKey: storageKeys[j]
        });
    if (address)
      assert(address, { strict: false });
    tuple.push([address, storageKeys]);
  }
  return tuple;
}
var InvalidStorageKeySizeError = class extends BaseError {
  constructor({ storageKey }) {
    super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${size(storageKey)} bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AccessList.InvalidStorageKeySizeError"
    });
  }
};

// node_modules/ox/_esm/core/Rlp.js
var Rlp_exports = {};
__export(Rlp_exports, {
  decodeRlpCursor: () => decodeRlpCursor,
  from: () => from3,
  fromBytes: () => fromBytes2,
  fromHex: () => fromHex2,
  readLength: () => readLength,
  readList: () => readList,
  to: () => to,
  toBytes: () => toBytes,
  toHex: () => toHex
});
function toBytes(value) {
  return to(value, "Bytes");
}
function toHex(value) {
  return to(value, "Hex");
}
function to(value, to2) {
  const to_ = to2 ?? (typeof value === "string" ? "Hex" : "Bytes");
  const bytes = (() => {
    if (typeof value === "string") {
      if (value.length > 3 && value.length % 2 !== 0)
        throw new InvalidLengthError(value);
      return fromHex(value);
    }
    return value;
  })();
  const cursor = create(bytes, {
    recursiveReadLimit: Number.POSITIVE_INFINITY
  });
  const result = decodeRlpCursor(cursor, to_);
  return result;
}
function decodeRlpCursor(cursor, to2 = "Hex") {
  if (cursor.bytes.length === 0)
    return to2 === "Hex" ? fromBytes(cursor.bytes) : cursor.bytes;
  const prefix = cursor.readByte();
  if (prefix < 128)
    cursor.decrementPosition(1);
  if (prefix < 192) {
    const length2 = readLength(cursor, prefix, 128);
    const bytes = cursor.readBytes(length2);
    return to2 === "Hex" ? fromBytes(bytes) : bytes;
  }
  const length = readLength(cursor, prefix, 192);
  return readList(cursor, length, to2);
}
function readLength(cursor, prefix, offset) {
  if (offset === 128 && prefix < 128)
    return 1;
  if (prefix <= offset + 55)
    return prefix - offset;
  if (prefix === offset + 55 + 1)
    return cursor.readUint8();
  if (prefix === offset + 55 + 2)
    return cursor.readUint16();
  if (prefix === offset + 55 + 3)
    return cursor.readUint24();
  if (prefix === offset + 55 + 4)
    return cursor.readUint32();
  throw new BaseError("Invalid RLP prefix");
}
function readList(cursor, length, to2) {
  const position = cursor.position;
  const value = [];
  while (cursor.position - position < length)
    value.push(decodeRlpCursor(cursor, to2));
  return value;
}
function from3(value, options) {
  const { as } = options;
  const encodable = getEncodable(value);
  const cursor = create(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (as === "Hex")
    return fromBytes(cursor.bytes);
  return cursor.bytes;
}
function fromBytes2(bytes, options = {}) {
  const { as = "Bytes" } = options;
  return from3(bytes, { as });
}
function fromHex2(hex, options = {}) {
  const { as = "Hex" } = options;
  return from3(hex, { as });
}
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode } of list) {
        encode(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? fromHex(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// node_modules/ox/_esm/core/TransactionEnvelope.js
var TransactionEnvelope_exports = {};
__export(TransactionEnvelope_exports, {
  FeeCapTooHighError: () => FeeCapTooHighError,
  GasPriceTooHighError: () => GasPriceTooHighError,
  InvalidChainIdError: () => InvalidChainIdError,
  InvalidSerializedError: () => InvalidSerializedError,
  TipAboveFeeCapError: () => TipAboveFeeCapError
});
var FeeCapTooHighError = class extends BaseError {
  constructor({ feeCap } = {}) {
    super(`The fee cap (\`maxFeePerGas\`/\`maxPriorityFeePerGas\`${feeCap ? ` = ${formatGwei(feeCap)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.FeeCapTooHighError"
    });
  }
};
var GasPriceTooHighError = class extends BaseError {
  constructor({ gasPrice } = {}) {
    super(`The gas price (\`gasPrice\`${gasPrice ? ` = ${formatGwei(gasPrice)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.GasPriceTooHighError"
    });
  }
};
var InvalidChainIdError = class extends BaseError {
  constructor({ chainId }) {
    super(typeof chainId !== "undefined" ? `Chain ID "${chainId}" is invalid.` : "Chain ID is invalid.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.InvalidChainIdError"
    });
  }
};
var InvalidSerializedError = class extends BaseError {
  constructor({ attributes, serialized, type: type5 }) {
    const missing = Object.entries(attributes).map(([key, value]) => typeof value === "undefined" ? key : void 0).filter(Boolean);
    super(`Invalid serialized transaction of type "${type5}" was provided.`, {
      metaMessages: [
        `Serialized Transaction: "${serialized}"`,
        missing.length > 0 ? `Missing Attributes: ${missing.join(", ")}` : ""
      ].filter(Boolean)
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.InvalidSerializedError"
    });
  }
};
var TipAboveFeeCapError = class extends BaseError {
  constructor({ maxPriorityFeePerGas, maxFeePerGas } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${formatGwei(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}).`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.TipAboveFeeCapError"
    });
  }
};

// node_modules/ox/_esm/core/TransactionEnvelopeEip1559.js
var serializedType = "0x02";
var type = "eip1559";
function assert2(envelope) {
  const { chainId, maxPriorityFeePerGas, maxFeePerGas, to: to2 } = envelope;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to2)
    assert(to2, { strict: false });
  if (maxFeePerGas && BigInt(maxFeePerGas) > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ feeCap: maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({
      maxFeePerGas,
      maxPriorityFeePerGas
    });
}
function deserialize(serialized) {
  const transactionArray = toHex(slice(serialized, 1));
  const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to2, value, data, accessList, yParity, r, s] = transactionArray;
  if (!(transactionArray.length === 9 || transactionArray.length === 12))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        maxPriorityFeePerGas,
        maxFeePerGas,
        gas,
        to: to2,
        value,
        data,
        accessList,
        ...transactionArray.length > 9 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type
    });
  let transaction = {
    chainId: Number(chainId),
    type
  };
  if (validate(to2) && to2 !== "0x")
    transaction.to = to2;
  if (validate(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate(data) && data !== "0x")
    transaction.data = data;
  if (validate(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate(maxFeePerGas) && maxFeePerGas !== "0x")
    transaction.maxFeePerGas = BigInt(maxFeePerGas);
  if (validate(maxPriorityFeePerGas) && maxPriorityFeePerGas !== "0x")
    transaction.maxPriorityFeePerGas = BigInt(maxPriorityFeePerGas);
  if (accessList.length !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert2(transaction);
  return transaction;
}
function from4(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize(envelope) : envelope;
  assert2(envelope_);
  return {
    ...envelope_,
    ...signature ? from(signature) : {},
    type: "eip1559"
  };
}
function getSignPayload(envelope) {
  return hash(envelope, { presign: true });
}
function hash(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
function serialize(envelope, options = {}) {
  const { chainId, gas, nonce, to: to2, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data, input } = envelope;
  assert2(envelope);
  const accessTupleList = toTupleList(accessList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber(chainId),
    nonce ? fromNumber(nonce) : "0x",
    maxPriorityFeePerGas ? fromNumber(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? fromNumber(maxFeePerGas) : "0x",
    gas ? fromNumber(gas) : "0x",
    to2 ?? "0x",
    value ? fromNumber(value) : "0x",
    data ?? input ?? "0x",
    accessTupleList,
    ...signature ? toTuple(signature) : []
  ];
  return concat(serializedType, fromHex2(serialized));
}
function toRpc2(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: fromNumber(envelope.chainId),
    data: envelope.data ?? envelope.input,
    type: "0x2",
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber(envelope.value) } : {},
    ...typeof envelope.maxFeePerGas === "bigint" ? { maxFeePerGas: fromNumber(envelope.maxFeePerGas) } : {},
    ...typeof envelope.maxPriorityFeePerGas === "bigint" ? {
      maxPriorityFeePerGas: fromNumber(envelope.maxPriorityFeePerGas)
    } : {},
    ...signature ? toRpc(signature) : {}
  };
}
function validate3(envelope) {
  try {
    assert2(envelope);
    return true;
  } catch {
    return false;
  }
}

// node_modules/ox/_esm/core/TransactionEnvelopeEip2930.js
var TransactionEnvelopeEip2930_exports = {};
__export(TransactionEnvelopeEip2930_exports, {
  assert: () => assert3,
  deserialize: () => deserialize2,
  from: () => from5,
  getSignPayload: () => getSignPayload2,
  hash: () => hash2,
  serialize: () => serialize2,
  serializedType: () => serializedType2,
  toRpc: () => toRpc3,
  type: () => type2,
  validate: () => validate4
});
var serializedType2 = "0x01";
var type2 = "eip2930";
function assert3(envelope) {
  const { chainId, gasPrice, to: to2 } = envelope;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to2)
    assert(to2, { strict: false });
  if (gasPrice && BigInt(gasPrice) > 2n ** 256n - 1n)
    throw new GasPriceTooHighError({ gasPrice });
}
function deserialize2(serialized) {
  const transactionArray = toHex(slice(serialized, 1));
  const [chainId, nonce, gasPrice, gas, to2, value, data, accessList, yParity, r, s] = transactionArray;
  if (!(transactionArray.length === 8 || transactionArray.length === 11))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        gasPrice,
        gas,
        to: to2,
        value,
        data,
        accessList,
        ...transactionArray.length > 8 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type2
    });
  let transaction = {
    chainId: Number(chainId),
    type: type2
  };
  if (validate(to2) && to2 !== "0x")
    transaction.to = to2;
  if (validate(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate(data) && data !== "0x")
    transaction.data = data;
  if (validate(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate(gasPrice) && gasPrice !== "0x")
    transaction.gasPrice = BigInt(gasPrice);
  if (accessList.length !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert3(transaction);
  return transaction;
}
function from5(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize2(envelope) : envelope;
  assert3(envelope_);
  return {
    ...envelope_,
    ...signature ? from(signature) : {},
    type: "eip2930"
  };
}
function getSignPayload2(envelope) {
  return hash2(envelope, { presign: true });
}
function hash2(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize2({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
function serialize2(envelope, options = {}) {
  const { chainId, gas, data, input, nonce, to: to2, value, accessList, gasPrice } = envelope;
  assert3(envelope);
  const accessTupleList = toTupleList(accessList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber(chainId),
    nonce ? fromNumber(nonce) : "0x",
    gasPrice ? fromNumber(gasPrice) : "0x",
    gas ? fromNumber(gas) : "0x",
    to2 ?? "0x",
    value ? fromNumber(value) : "0x",
    data ?? input ?? "0x",
    accessTupleList,
    ...signature ? toTuple(signature) : []
  ];
  return concat("0x01", fromHex2(serialized));
}
function toRpc3(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: fromNumber(envelope.chainId),
    data: envelope.data ?? envelope.input,
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber(envelope.value) } : {},
    ...typeof envelope.gasPrice === "bigint" ? { gasPrice: fromNumber(envelope.gasPrice) } : {},
    type: "0x1",
    ...signature ? toRpc(signature) : {}
  };
}
function validate4(envelope) {
  try {
    assert3(envelope);
    return true;
  } catch {
    return false;
  }
}

// node_modules/ox/_esm/core/TransactionEnvelopeEip7702.js
var TransactionEnvelopeEip7702_exports = {};
__export(TransactionEnvelopeEip7702_exports, {
  assert: () => assert4,
  deserialize: () => deserialize3,
  from: () => from7,
  getSignPayload: () => getSignPayload4,
  hash: () => hash4,
  serialize: () => serialize3,
  serializedType: () => serializedType3,
  type: () => type3,
  validate: () => validate5
});

// node_modules/ox/_esm/core/Authorization.js
var Authorization_exports = {};
__export(Authorization_exports, {
  from: () => from6,
  fromRpc: () => fromRpc,
  fromRpcList: () => fromRpcList,
  fromTuple: () => fromTuple2,
  fromTupleList: () => fromTupleList2,
  getSignPayload: () => getSignPayload3,
  hash: () => hash3,
  toRpc: () => toRpc4,
  toRpcList: () => toRpcList,
  toTuple: () => toTuple2,
  toTupleList: () => toTupleList2
});
function from6(authorization, options = {}) {
  if (typeof authorization.chainId === "string")
    return fromRpc(authorization);
  return { ...authorization, ...options.signature };
}
function fromRpc(authorization) {
  const { address, chainId, nonce } = authorization;
  const signature = extract(authorization);
  return {
    address,
    chainId: Number(chainId),
    nonce: BigInt(nonce),
    ...signature
  };
}
function fromRpcList(authorizationList) {
  return authorizationList.map(fromRpc);
}
function fromTuple2(tuple) {
  const [chainId, address, nonce, yParity, r, s] = tuple;
  const signature = yParity && r && s ? fromTuple([yParity, r, s]) : void 0;
  return from6({
    address,
    chainId: Number(chainId),
    nonce: BigInt(nonce),
    ...signature
  });
}
function fromTupleList2(tupleList) {
  const list = [];
  for (const tuple of tupleList)
    list.push(fromTuple2(tuple));
  return list;
}
function getSignPayload3(authorization) {
  return hash3(authorization);
}
function hash3(authorization) {
  return keccak256(concat("0x05", fromHex2(toTuple2(authorization))));
}
function toRpc4(authorization) {
  const { address, chainId, nonce, ...signature } = authorization;
  return {
    address,
    chainId: fromNumber(chainId),
    nonce: fromNumber(nonce),
    ...toRpc(signature)
  };
}
function toRpcList(authorizationList) {
  return authorizationList.map(toRpc4);
}
function toTuple2(authorization) {
  const { address, chainId, nonce } = authorization;
  const signature = extract(authorization);
  return [
    chainId ? fromNumber(chainId) : "0x",
    address,
    nonce ? fromNumber(nonce) : "0x",
    ...signature ? toTuple(signature) : []
  ];
}
function toTupleList2(list) {
  if (!list || list.length === 0)
    return [];
  const tupleList = [];
  for (const authorization of list)
    tupleList.push(toTuple2(authorization));
  return tupleList;
}

// node_modules/ox/_esm/core/TransactionEnvelopeEip7702.js
var serializedType3 = "0x04";
var type3 = "eip7702";
function assert4(envelope) {
  const { authorizationList } = envelope;
  if (authorizationList) {
    for (const authorization of authorizationList) {
      const { address, chainId } = authorization;
      if (address)
        assert(address, { strict: false });
      if (Number(chainId) < 0)
        throw new InvalidChainIdError({ chainId });
    }
  }
  assert2(envelope);
}
function deserialize3(serialized) {
  const transactionArray = toHex(slice(serialized, 1));
  const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to2, value, data, accessList, authorizationList, yParity, r, s] = transactionArray;
  if (!(transactionArray.length === 10 || transactionArray.length === 13))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        maxPriorityFeePerGas,
        maxFeePerGas,
        gas,
        to: to2,
        value,
        data,
        accessList,
        authorizationList,
        ...transactionArray.length > 9 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type3
    });
  let transaction = {
    chainId: Number(chainId),
    type: type3
  };
  if (validate(to2) && to2 !== "0x")
    transaction.to = to2;
  if (validate(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate(data) && data !== "0x")
    transaction.data = data;
  if (validate(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate(maxFeePerGas) && maxFeePerGas !== "0x")
    transaction.maxFeePerGas = BigInt(maxFeePerGas);
  if (validate(maxPriorityFeePerGas) && maxPriorityFeePerGas !== "0x")
    transaction.maxPriorityFeePerGas = BigInt(maxPriorityFeePerGas);
  if (accessList.length !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  if (authorizationList !== "0x")
    transaction.authorizationList = fromTupleList2(authorizationList);
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert4(transaction);
  return transaction;
}
function from7(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize3(envelope) : envelope;
  assert4(envelope_);
  return {
    ...envelope_,
    ...signature ? from(signature) : {},
    type: "eip7702"
  };
}
function getSignPayload4(envelope) {
  return hash4(envelope, { presign: true });
}
function hash4(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize3({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0
    } : {}
  }));
}
function serialize3(envelope, options = {}) {
  const { authorizationList, chainId, gas, nonce, to: to2, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data, input } = envelope;
  assert4(envelope);
  const accessTupleList = toTupleList(accessList);
  const authorizationTupleList = toTupleList2(authorizationList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber(chainId),
    nonce ? fromNumber(nonce) : "0x",
    maxPriorityFeePerGas ? fromNumber(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? fromNumber(maxFeePerGas) : "0x",
    gas ? fromNumber(gas) : "0x",
    to2 ?? "0x",
    value ? fromNumber(value) : "0x",
    data ?? input ?? "0x",
    accessTupleList,
    authorizationTupleList,
    ...signature ? toTuple(signature) : []
  ];
  return concat(serializedType3, fromHex2(serialized));
}
function validate5(envelope) {
  try {
    assert4(envelope);
    return true;
  } catch {
    return false;
  }
}

// node_modules/ox/_esm/core/TransactionEnvelopeLegacy.js
var TransactionEnvelopeLegacy_exports = {};
__export(TransactionEnvelopeLegacy_exports, {
  assert: () => assert5,
  deserialize: () => deserialize4,
  from: () => from8,
  getSignPayload: () => getSignPayload5,
  hash: () => hash5,
  serialize: () => serialize4,
  toRpc: () => toRpc5,
  type: () => type4,
  validate: () => validate6
});
var type4 = "legacy";
function assert5(envelope) {
  const { chainId, gasPrice, to: to2 } = envelope;
  if (to2)
    assert(to2, { strict: false });
  if (typeof chainId !== "undefined" && chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (gasPrice && BigInt(gasPrice) > 2n ** 256n - 1n)
    throw new GasPriceTooHighError({ gasPrice });
}
function deserialize4(serialized) {
  const tuple = toHex(serialized);
  const [nonce, gasPrice, gas, to2, value, data, chainIdOrV_, r, s] = tuple;
  if (!(tuple.length === 6 || tuple.length === 9))
    throw new InvalidSerializedError({
      attributes: {
        nonce,
        gasPrice,
        gas,
        to: to2,
        value,
        data,
        ...tuple.length > 6 ? {
          v: chainIdOrV_,
          r,
          s
        } : {}
      },
      serialized,
      type: type4
    });
  const transaction = {
    type: type4
  };
  if (validate(to2) && to2 !== "0x")
    transaction.to = to2;
  if (validate(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate(data) && data !== "0x")
    transaction.data = data;
  if (validate(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate(gasPrice) && gasPrice !== "0x")
    transaction.gasPrice = BigInt(gasPrice);
  if (tuple.length === 6)
    return transaction;
  const chainIdOrV = validate(chainIdOrV_) && chainIdOrV_ !== "0x" ? Number(chainIdOrV_) : 0;
  if (s === "0x" && r === "0x") {
    if (chainIdOrV > 0)
      transaction.chainId = Number(chainIdOrV);
    return transaction;
  }
  const v = chainIdOrV;
  const chainId = Math.floor((v - 35) / 2);
  if (chainId > 0)
    transaction.chainId = chainId;
  else if (v !== 27 && v !== 28)
    throw new InvalidVError({ value: v });
  transaction.yParity = vToYParity(v);
  transaction.v = v;
  transaction.s = s === "0x" ? 0n : BigInt(s);
  transaction.r = r === "0x" ? 0n : BigInt(r);
  assert5(transaction);
  return transaction;
}
function from8(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize4(envelope) : envelope;
  assert5(envelope_);
  const signature_ = (() => {
    if (!signature)
      return {};
    const s = from(signature);
    s.v = yParityToV(s.yParity);
    return s;
  })();
  return {
    ...envelope_,
    ...signature_,
    type: "legacy"
  };
}
function getSignPayload5(envelope) {
  return hash5(envelope, { presign: true });
}
function hash5(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize4({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
function serialize4(envelope, options = {}) {
  const { chainId = 0, gas, data, input, nonce, to: to2, value, gasPrice } = envelope;
  assert5(envelope);
  let serialized = [
    nonce ? fromNumber(nonce) : "0x",
    gasPrice ? fromNumber(gasPrice) : "0x",
    gas ? fromNumber(gas) : "0x",
    to2 ?? "0x",
    value ? fromNumber(value) : "0x",
    data ?? input ?? "0x"
  ];
  const signature = (() => {
    if (options.signature)
      return {
        r: options.signature.r,
        s: options.signature.s,
        v: yParityToV(options.signature.yParity)
      };
    if (typeof envelope.r === "undefined" || typeof envelope.s === "undefined")
      return void 0;
    return {
      r: envelope.r,
      s: envelope.s,
      v: envelope.v
    };
  })();
  if (signature) {
    const v = (() => {
      if (signature.v >= 35) {
        const inferredChainId = Math.floor((signature.v - 35) / 2);
        if (inferredChainId > 0)
          return signature.v;
        return 27 + (signature.v === 35 ? 0 : 1);
      }
      if (chainId > 0)
        return chainId * 2 + 35 + signature.v - 27;
      const v2 = 27 + (signature.v === 27 ? 0 : 1);
      if (signature.v !== v2)
        throw new InvalidVError({ value: signature.v });
      return v2;
    })();
    serialized = [
      ...serialized,
      fromNumber(v),
      signature.r === 0n ? "0x" : trimLeft(fromNumber(signature.r)),
      signature.s === 0n ? "0x" : trimLeft(fromNumber(signature.s))
    ];
  } else if (chainId > 0)
    serialized = [...serialized, fromNumber(chainId), "0x", "0x"];
  return fromHex2(serialized);
}
function toRpc5(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: typeof envelope.chainId === "number" ? fromNumber(envelope.chainId) : void 0,
    data: envelope.data ?? envelope.input,
    type: "0x0",
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber(envelope.value) } : {},
    ...typeof envelope.gasPrice === "bigint" ? { gasPrice: fromNumber(envelope.gasPrice) } : {},
    ...signature ? {
      ...toRpc(signature),
      v: signature.yParity === 0 ? "0x1b" : "0x1c"
    } : {}
  };
}
function validate6(envelope) {
  try {
    assert5(envelope);
    return true;
  } catch {
    return false;
  }
}

export {
  fromTupleList,
  toTupleList,
  AccessList_exports,
  toHex,
  fromBytes2 as fromBytes,
  fromHex2 as fromHex,
  Rlp_exports,
  Value_exports,
  InvalidSerializedError,
  TransactionEnvelope_exports,
  assert2 as assert,
  serialize,
  TransactionEnvelopeEip1559_exports,
  assert3 as assert2,
  serialize2,
  TransactionEnvelopeEip2930_exports,
  fromRpcList,
  toRpcList,
  Authorization_exports,
  assert4 as assert3,
  serialize3,
  TransactionEnvelopeEip7702_exports,
  assert5 as assert4,
  serialize4,
  TransactionEnvelopeLegacy_exports
};
//# sourceMappingURL=chunk-EGFCSO5B.js.map
