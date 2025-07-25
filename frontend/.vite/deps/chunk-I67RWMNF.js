import {
  encode as encode3,
  encodeData,
  from,
  fromAbi2 as fromAbi,
  fromAbi3 as fromAbi2
} from "./chunk-FVP7PTDA.js";
import {
  prepareCreateAccount
} from "./chunk-BSPXA375.js";
import {
  isContractDeployed
} from "./chunk-EMWJKMEZ.js";
import {
  decode,
  encode as encode2,
  extractEip712DomainTypes,
  from as from2,
  hashDomain,
  validate
} from "./chunk-HDWEKPHM.js";
import {
  fromHex as fromHex2,
  toHex as toHex2
} from "./chunk-3YR3TNSC.js";
import {
  isZkSyncChain
} from "./chunk-7RUSW4Y7.js";
import {
  eth_call,
  readContract
} from "./chunk-WHDWYZBU.js";
import {
  encodeAbiParameters
} from "./chunk-SD26YTCZ.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  keccak256
} from "./chunk-6WE3JIZ5.js";
import {
  stringToBytes,
  toBytes
} from "./chunk-Z2NN3WTW.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
import {
  concatHex
} from "./chunk-ADBXOI2Q.js";
import {
  encode
} from "./chunk-JJDFOOW3.js";
import {
  hexToBool,
  isHex,
  toHex,
  uint8ArrayToHex
} from "./chunk-AT6CAMHI.js";
import {
  BaseError,
  concat,
  concat2,
  fromHex,
  slice2 as slice,
  toBigInt,
  toBoolean,
  toNumber,
  toString
} from "./chunk-44GEKRHH.js";
import {
  __export
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/auth/constants.js
var ERC_6492_MAGIC_VALUE = "0x6492649264926492649264926492649264926492649264926492649264926492";

// node_modules/thirdweb/dist/esm/auth/serialize-erc6492-signature.js
function serializeErc6492Signature({ address, data, signature }) {
  return concatHex([
    encodeAbiParameters([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [address, data, signature]),
    ERC_6492_MAGIC_VALUE
  ]);
}

// node_modules/ox/_esm/erc6492/WrappedSignature.js
var WrappedSignature_exports = {};
__export(WrappedSignature_exports, {
  InvalidWrappedSignatureError: () => InvalidWrappedSignatureError,
  assert: () => assert,
  from: () => from3,
  fromHex: () => fromHex3,
  magicBytes: () => magicBytes,
  toHex: () => toHex3,
  universalSignatureValidatorAbi: () => universalSignatureValidatorAbi,
  universalSignatureValidatorBytecode: () => universalSignatureValidatorBytecode,
  validate: () => validate2
});
var magicBytes = "0x6492649264926492649264926492649264926492649264926492649264926492";
var universalSignatureValidatorBytecode = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
var universalSignatureValidatorAbi = [
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "isValidSig"
  }
];
function assert(wrapped) {
  if (slice(wrapped, -32) !== magicBytes)
    throw new InvalidWrappedSignatureError(wrapped);
}
function from3(wrapped) {
  if (typeof wrapped === "string")
    return fromHex3(wrapped);
  return wrapped;
}
function fromHex3(wrapped) {
  assert(wrapped);
  const [to, data, signature_hex] = decode(from2("address, bytes, bytes"), wrapped);
  const signature = fromHex2(signature_hex);
  return { data, signature, to };
}
function toHex3(value) {
  const { data, signature, to } = value;
  return concat2(encode2(from2("address, bytes, bytes"), [
    to,
    data,
    toHex2(signature)
  ]), magicBytes);
}
function validate2(wrapped) {
  try {
    assert(wrapped);
    return true;
  } catch {
    return false;
  }
}
var InvalidWrappedSignatureError = class extends BaseError {
  constructor(wrapped) {
    super(`Value \`${wrapped}\` is an invalid ERC-6492 wrapped signature.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WrappedSignature.InvalidWrappedSignatureError"
    });
  }
};

// node_modules/thirdweb/dist/esm/extensions/erc1271/__generated__/isValidSignature/read/isValidSignature.js
var FN_SELECTOR = "0x1626ba7e";
var FN_INPUTS = [
  {
    name: "hash",
    type: "bytes32"
  },
  {
    name: "signature",
    type: "bytes"
  }
];
var FN_OUTPUTS = [
  {
    type: "bytes4"
  }
];
async function isValidSignature(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.hash, options.signature]
  });
}

// node_modules/thirdweb/dist/esm/utils/encoding/from-bytes.js
function fromBytes(bytes, toOrOpts) {
  const opts = typeof toOrOpts === "string" ? { to: toOrOpts } : toOrOpts;
  switch (opts.to) {
    case "number":
      return bytesToNumber(bytes, opts);
    case "bigint":
      return bytesToBigInt(bytes, opts);
    case "boolean":
      return bytesToBool(bytes, opts);
    case "string":
      return bytesToString(bytes, opts);
    default:
      return uint8ArrayToHex(bytes, opts);
  }
}
function bytesToBigInt(bytes, opts = {}) {
  return toBigInt(bytes, opts);
}
function bytesToBool(bytes_, opts = {}) {
  return toBoolean(bytes_, opts);
}
function bytesToNumber(bytes, opts = {}) {
  return toNumber(bytes, opts);
}
function bytesToString(bytes_, opts = {}) {
  return toString(bytes_, opts);
}

// node_modules/thirdweb/dist/esm/auth/verify-hash.js
var ZKSYNC_VALIDATOR_ADDRESS = "0xfB688330379976DA81eB64Fe4BF50d7401763B9C";
async function verifyHash({ hash, signature, address, client, chain, accountFactory }) {
  const signatureHex = (() => {
    if (isHex(signature))
      return signature;
    if (typeof signature === "object" && "r" in signature && "s" in signature)
      return toHex2(signature);
    if (signature instanceof Uint8Array)
      return fromBytes(signature, "hex");
    throw new Error(`Invalid signature type for signature ${signature}: ${typeof signature}`);
  })();
  const isDeployed = await isContractDeployed(getContract({
    address,
    chain,
    client
  }));
  if (isDeployed) {
    const validEip1271 = await verifyEip1271Signature({
      contract: getContract({
        address,
        chain,
        client
      }),
      hash,
      signature: signatureHex
    }).catch((err) => {
      console.error("Error verifying EIP-1271 signature", err);
      return false;
    });
    if (validEip1271) {
      return true;
    }
  }
  const wrappedSignature = await (async () => {
    if (!accountFactory)
      return signatureHex;
    if (WrappedSignature_exports.validate(signatureHex))
      return signatureHex;
    return serializeErc6492Signature({
      address: accountFactory.address,
      data: accountFactory.verificationCalldata,
      signature: signatureHex
    });
  })();
  let verificationData;
  const zkSyncChain = await isZkSyncChain(chain);
  const abi = from(WrappedSignature_exports.universalSignatureValidatorAbi);
  if (zkSyncChain) {
    verificationData = {
      data: encodeData(fromAbi2(abi, "isValidSig"), [address, hash, wrappedSignature]),
      to: ZKSYNC_VALIDATOR_ADDRESS
    };
  } else {
    const validatorConstructor = fromAbi(abi);
    verificationData = {
      data: encode3(validatorConstructor, {
        args: [address, hash, wrappedSignature],
        bytecode: WrappedSignature_exports.universalSignatureValidatorBytecode
      })
    };
  }
  const rpcRequest = getRpcClient({
    chain,
    client
  });
  try {
    const result = await eth_call(rpcRequest, verificationData);
    return hexToBool(result);
  } catch {
    const validEip1271 = await verifyEip1271Signature({
      contract: getContract({
        address,
        chain,
        client
      }),
      hash,
      signature: signatureHex
    }).catch((err) => {
      console.error("Error verifying EIP-1271 signature", err);
      return false;
    });
    if (validEip1271) {
      return true;
    }
    return false;
  }
}
var EIP_1271_MAGIC_VALUE = "0x1626ba7e";
async function verifyEip1271Signature({ hash, signature, contract }) {
  try {
    const result = await isValidSignature({
      contract,
      hash,
      signature
    });
    return result === EIP_1271_MAGIC_VALUE;
  } catch (err) {
    console.error("Error verifying EIP-1271 signature", err);
    return false;
  }
}

// node_modules/thirdweb/dist/esm/utils/hashing/hashMessage.js
var presignMessagePrefix = "Ethereum Signed Message:\n";
function hashMessage(message, to_) {
  const messageBytes = (() => {
    if (typeof message === "string") {
      return stringToBytes(message);
    }
    if (message.raw instanceof Uint8Array) {
      return message.raw;
    }
    return toBytes(message.raw);
  })();
  const prefixBytes = stringToBytes(`${presignMessagePrefix}${messageBytes.length}`);
  return keccak256(concat(prefixBytes, messageBytes), to_);
}

// node_modules/thirdweb/dist/esm/utils/hashing/hashTypedData.js
function hashTypedData(parameters) {
  const { domain = {}, message, primaryType } = parameters;
  const types = {
    EIP712Domain: extractEip712DomainTypes(domain),
    ...parameters.types
  };
  validate({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x1901"];
  if (domain)
    parts.push(hashDomain({
      domain,
      types
    }));
  if (primaryType !== "EIP712Domain") {
    const hashedStruct = (() => {
      const encoded = encodeData2({
        data: message,
        primaryType,
        types
      });
      return keccak256(encoded);
    })();
    parts.push(hashedStruct);
  }
  return keccak256(concat(...parts.map((p) => fromHex(p))));
}
function encodeData2({ data, primaryType, types }) {
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  if (!types[primaryType])
    throw new Error("Invalid types");
  for (const field of types[primaryType]) {
    const [type, value] = encodeField({
      name: field.name,
      type: field.type,
      types,
      value: data[field.name]
    });
    encodedTypes.push(type);
    encodedValues.push(value);
  }
  return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
  const encodedHashType = toHex(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeType({ primaryType, types }) {
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type of deps) {
    if (!types[type])
      throw new Error("Invalid types");
    result += `${type}(${types[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = /* @__PURE__ */ new Set()) {
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match == null ? void 0 : match[0];
  if (results.has(primaryType) || types[primaryType] === void 0) {
    return results;
  }
  results.add(primaryType);
  for (const field of types[primaryType]) {
    findTypeDependencies({ primaryType: field.type, types }, results);
  }
  return results;
}
function encodeField({ types, name, type, value }) {
  if (types[type] !== void 0) {
    return [
      { type: "bytes32" },
      keccak256(encodeData2({ data: value, primaryType: type, types }))
    ];
  }
  if (type === "bytes") {
    const prepend = value.length % 2 ? "0" : "";
    value = `0x${prepend + value.slice(2)}`;
    return [{ type: "bytes32" }, keccak256(value)];
  }
  if (type === "string")
    return [{ type: "bytes32" }, keccak256(toHex(value))];
  if (type.lastIndexOf("]") === type.length - 1) {
    const parsedType = type.slice(0, type.lastIndexOf("["));
    const typeValuePairs = (
      // biome-ignore lint/suspicious/noExplicitAny: Can't anticipate types of nested values
      value.map((item) => encodeField({
        name,
        type: parsedType,
        types,
        value: item
      }))
    );
    return [
      { type: "bytes32" },
      keccak256(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type }, value];
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/signing.js
async function smartAccountSignMessage({ accountContract, factoryContract, options, message }) {
  var _a, _b;
  const originalMsgHash = hashMessage(message);
  const is712Factory = await checkFor712Factory({
    accountContract,
    factoryContract,
    originalMsgHash
  });
  let sig;
  if (is712Factory) {
    const wrappedMessageHash = encodeAbiParameters([{ type: "bytes32" }], [originalMsgHash]);
    sig = await options.personalAccount.signTypedData({
      domain: {
        chainId: options.chain.id,
        name: "Account",
        verifyingContract: accountContract.address,
        version: "1"
      },
      message: { message: wrappedMessageHash },
      primaryType: "AccountMessage",
      types: { AccountMessage: [{ name: "message", type: "bytes" }] }
    });
  } else {
    sig = await options.personalAccount.signMessage({ message });
  }
  const isDeployed = await isContractDeployed(accountContract);
  if (isDeployed) {
    const isValid = await verifyEip1271Signature({
      contract: accountContract,
      hash: originalMsgHash,
      signature: sig
    });
    if (isValid) {
      return sig;
    }
    throw new Error("Failed to verify signature");
  } else {
    const deployTx = prepareCreateAccount({
      accountSalt: (_a = options.overrides) == null ? void 0 : _a.accountSalt,
      adminAddress: options.personalAccount.address,
      createAccountOverride: (_b = options.overrides) == null ? void 0 : _b.createAccount,
      factoryContract
    });
    if (!deployTx) {
      throw new Error("Create account override not provided");
    }
    const initCode = await encode(deployTx);
    const erc6492Sig = serializeErc6492Signature({
      address: factoryContract.address,
      data: initCode,
      signature: sig
    });
    const isValid = await verifyHash({
      address: accountContract.address,
      chain: accountContract.chain,
      client: accountContract.client,
      hash: originalMsgHash,
      signature: erc6492Sig
    });
    if (isValid) {
      return erc6492Sig;
    }
    throw new Error("Unable to verify ERC-6492 signature after signing.");
  }
}
async function smartAccountSignTypedData({ accountContract, factoryContract, options, typedData }) {
  var _a, _b, _c, _d, _e;
  const isSelfVerifyingContract = ((_b = (_a = typedData.domain) == null ? void 0 : _a.verifyingContract) == null ? void 0 : _b.toLowerCase()) === ((_c = accountContract.address) == null ? void 0 : _c.toLowerCase());
  if (isSelfVerifyingContract) {
    return options.personalAccount.signTypedData(typedData);
  }
  const originalMsgHash = hashTypedData(typedData);
  const is712Factory = await checkFor712Factory({
    accountContract,
    factoryContract,
    originalMsgHash
  });
  let sig;
  if (is712Factory) {
    const wrappedMessageHash = encodeAbiParameters([{ type: "bytes32" }], [originalMsgHash]);
    sig = await options.personalAccount.signTypedData({
      domain: {
        chainId: options.chain.id,
        name: "Account",
        verifyingContract: accountContract.address,
        version: "1"
      },
      message: { message: wrappedMessageHash },
      primaryType: "AccountMessage",
      types: { AccountMessage: [{ name: "message", type: "bytes" }] }
    });
  } else {
    sig = await options.personalAccount.signTypedData(typedData);
  }
  const isDeployed = await isContractDeployed(accountContract);
  if (isDeployed) {
    const isValid = await verifyEip1271Signature({
      contract: accountContract,
      hash: originalMsgHash,
      signature: sig
    });
    if (isValid) {
      return sig;
    }
    throw new Error("Failed to verify signature");
  } else {
    const deployTx = prepareCreateAccount({
      accountSalt: (_d = options.overrides) == null ? void 0 : _d.accountSalt,
      adminAddress: options.personalAccount.address,
      createAccountOverride: (_e = options.overrides) == null ? void 0 : _e.createAccount,
      factoryContract
    });
    if (!deployTx) {
      throw new Error("Create account override not provided");
    }
    const initCode = await encode(deployTx);
    const erc6492Sig = serializeErc6492Signature({
      address: factoryContract.address,
      data: initCode,
      signature: sig
    });
    const isValid = await verifyHash({
      address: accountContract.address,
      chain: accountContract.chain,
      client: accountContract.client,
      hash: originalMsgHash,
      signature: erc6492Sig
    });
    if (isValid) {
      return erc6492Sig;
    }
    throw new Error("Unable to verify signature on smart account, please make sure the admin wallet has permissions and the signature is valid.");
  }
}
async function confirmContractDeployment(args) {
  const { accountContract } = args;
  const startTime = Date.now();
  const timeout = 6e4;
  const { isContractDeployed: isContractDeployed2 } = await import("./is-contract-deployed-X7JCF5SF.js");
  let isDeployed = await isContractDeployed2(accountContract);
  while (!isDeployed) {
    if (Date.now() - startTime > timeout) {
      throw new Error("Timeout: Smart account deployment not confirmed after 1 minute");
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    isDeployed = await isContractDeployed2(accountContract);
  }
}
async function checkFor712Factory({ factoryContract, accountContract, originalMsgHash }) {
  try {
    const implementationAccount = await readContract({
      contract: factoryContract,
      method: "function accountImplementation() public view returns (address)"
    });
    const is712Factory = await readContract({
      contract: getContract({
        address: implementationAccount,
        chain: accountContract.chain,
        client: accountContract.client
      }),
      method: "function getMessageHash(bytes32 _hash) public view returns (bytes32)",
      params: [originalMsgHash]
    }).then((res) => res !== "0x").catch(() => false);
    return is712Factory;
  } catch {
    return false;
  }
}
async function deploySmartAccount(args) {
  const { chain, client, smartAccount, accountContract } = args;
  const isDeployed = await isContractDeployed(accountContract);
  if (isDeployed) {
    return;
  }
  const [{ sendTransaction }, { prepareTransaction }] = await Promise.all([
    import("./send-transaction-DRA2FS4N.js"),
    import("./prepare-transaction-CY4PLSEB.js")
  ]);
  const dummyTx = prepareTransaction({
    chain,
    client,
    gas: 50000n,
    to: accountContract.address,
    value: 0n
    // force gas to avoid simulation error
  });
  const deployResult = await sendTransaction({
    account: smartAccount,
    transaction: dummyTx
  });
  await confirmContractDeployment({
    accountContract
  });
  return deployResult;
}

export {
  fromBytes,
  bytesToBigInt,
  bytesToBool,
  bytesToNumber,
  bytesToString,
  verifyHash,
  smartAccountSignMessage,
  smartAccountSignTypedData,
  confirmContractDeployment,
  deploySmartAccount
};
//# sourceMappingURL=chunk-I67RWMNF.js.map
