import {
  stringToBytes
} from "./chunk-Z2NN3WTW.js";
import {
  keccak_256
} from "./chunk-7QWN2SRQ.js";
import {
  hexToUint8Array,
  isHex,
  uint8ArrayToHex
} from "./chunk-AT6CAMHI.js";
import {
  LruMap
} from "./chunk-SNQ54XRM.js";

// node_modules/thirdweb/dist/esm/utils/hashing/keccak256.js
function keccak256(value, to) {
  const bytes = keccak_256(isHex(value, { strict: false }) ? hexToUint8Array(value) : value);
  if (to === "bytes") {
    return bytes;
  }
  return uint8ArrayToHex(bytes);
}

// node_modules/thirdweb/dist/esm/utils/address.js
var ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;
var IS_ADDRESS_CACHE = new LruMap(4096);
function isAddress(address) {
  if (IS_ADDRESS_CACHE.has(address)) {
    return IS_ADDRESS_CACHE.get(address);
  }
  const result = ADDRESS_REGEX.test(address) && (address.toLowerCase() === address || checksumAddress(address) === address);
  IS_ADDRESS_CACHE.set(address, result);
  return result;
}
function checksumAddress(address) {
  const hexAddress = address.substring(2).toLowerCase();
  const hash = keccak256(stringToBytes(hexAddress), "bytes");
  const address_ = hexAddress.split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash[i >> 1] >> 4 >= 8 && address[i]) {
      address_[i] = address_[i].toUpperCase();
    }
    if ((hash[i >> 1] & 15) >= 8 && address[i + 1]) {
      address_[i + 1] = address_[i + 1].toUpperCase();
    }
  }
  return `0x${address_.join("")}`;
}
function getAddress(address) {
  if (!isAddress(address)) {
    throw new Error(`Invalid address: ${address}`);
  }
  return checksumAddress(address);
}
function shortenAddress(address, length = 4) {
  const _address = getAddress(address);
  return shortenHex(_address, length);
}
function shortenHex(hex, length = 4) {
  return `${hex.slice(0, length + 2)}...${hex.slice(-length)}`;
}

export {
  keccak256,
  isAddress,
  checksumAddress,
  getAddress,
  shortenAddress,
  shortenHex
};
//# sourceMappingURL=chunk-6WE3JIZ5.js.map
