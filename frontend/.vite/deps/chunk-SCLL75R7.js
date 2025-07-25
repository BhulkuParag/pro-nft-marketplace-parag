import {
  allowance,
  approve
} from "./chunk-2HHM4MRW.js";
import {
  once
} from "./chunk-XS3SQPWF.js";
import {
  isEcosystemWallet
} from "./chunk-OUUVSEDB.js";
import {
  parseTypedData
} from "./chunk-BSFH3SFE.js";
import {
  populateEip712Transaction,
  signEip712Transaction,
  toBigInt
} from "./chunk-6PR6325K.js";
import {
  parseEventLogs,
  prepareEvent
} from "./chunk-VVRYDJAL.js";
import {
  predictAddress,
  prepareBatchExecute,
  prepareCreateAccount,
  prepareExecute
} from "./chunk-BSPXA375.js";
import {
  prepareContractCall
} from "./chunk-HEMRZHKU.js";
import {
  DUMMY_SIGNATURE,
  ENTRYPOINT_ADDRESS_v0_6,
  ENTRYPOINT_ADDRESS_v0_7,
  MANAGED_ACCOUNT_GAS_BUFFER,
  getDefaultAccountFactory,
  getDefaultBundlerUrl,
  getEntryPointVersion
} from "./chunk-VRHOYTMZ.js";
import {
  isContractDeployed
} from "./chunk-EMWJKMEZ.js";
import {
  sendTransaction
} from "./chunk-ACMOF3FM.js";
import {
  ZERO_ADDRESS
} from "./chunk-673YCYST.js";
import {
  maxUint96
} from "./chunk-VQJYRYIP.js";
import {
  toSerializableTransaction
} from "./chunk-SYRCOOVG.js";
import {
  isZkSyncChain
} from "./chunk-7RUSW4Y7.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";
import {
  encodeAbiParameters
} from "./chunk-SD26YTCZ.js";
import {
  getDefaultGasOverrides
} from "./chunk-3DGGFYQ2.js";
import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import {
  isInsufficientFundsError,
  trackInsufficientFundsError,
  trackTransaction
} from "./chunk-WBXICRL6.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  getAddress,
  keccak256
} from "./chunk-6WE3JIZ5.js";
import {
  hexToBytes
} from "./chunk-Z2NN3WTW.js";
import {
  toUnits,
  toWei
} from "./chunk-UY2SRO54.js";
import {
  encode
} from "./chunk-JJDFOOW3.js";
import {
  concat,
  decodeErrorResult,
  pad,
  toHex
} from "./chunk-DJWGHHK5.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";
import {
  randomBytesHex
} from "./chunk-YIVCHQGZ.js";
import {
  hexToBigInt,
  isHex,
  toHex as toHex2
} from "./chunk-AT6CAMHI.js";
import {
  getCachedChain
} from "./chunk-CYZDLLAL.js";
import {
  getClientFetch,
  isThirdwebUrl
} from "./chunk-LPEXUG4Y.js";

// node_modules/thirdweb/dist/esm/extensions/erc20/write/approve.js
function approve2(options) {
  return approve({
    asyncParams: async () => {
      let amount;
      if ("amount" in options) {
        const { decimals } = await import("./decimals-L6WUBRL6.js");
        const d = await decimals(options).catch(() => 18);
        amount = toUnits(options.amount.toString(), d);
      } else {
        amount = options.amountWei;
      }
      return {
        overrides: {
          erc20Value: {
            amountWei: amount,
            tokenAddress: options.contract.address
          }
        },
        spender: options.spender,
        value: amount
      };
    },
    contract: options.contract
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IAccountPermissions/read/getPermissionsForSigner.js
var FN_SELECTOR = "0xf15d424e";
var FN_INPUTS = [
  {
    name: "signer",
    type: "address"
  }
];
var FN_OUTPUTS = [
  {
    components: [
      {
        name: "signer",
        type: "address"
      },
      {
        name: "approvedTargets",
        type: "address[]"
      },
      {
        name: "nativeTokenLimitPerTransaction",
        type: "uint256"
      },
      {
        name: "startTimestamp",
        type: "uint128"
      },
      {
        name: "endTimestamp",
        type: "uint128"
      }
    ],
    name: "permissions",
    type: "tuple"
  }
];
async function getPermissionsForSigner(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.signer]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IAccountPermissions/write/setPermissionsForSigner.js
var FN_SELECTOR2 = "0x5892e236";
var FN_INPUTS2 = [
  {
    components: [
      {
        name: "signer",
        type: "address"
      },
      {
        name: "isAdmin",
        type: "uint8"
      },
      {
        name: "approvedTargets",
        type: "address[]"
      },
      {
        name: "nativeTokenLimitPerTransaction",
        type: "uint256"
      },
      {
        name: "permissionStartTimestamp",
        type: "uint128"
      },
      {
        name: "permissionEndTimestamp",
        type: "uint128"
      },
      {
        name: "reqValidityStartTimestamp",
        type: "uint128"
      },
      {
        name: "reqValidityEndTimestamp",
        type: "uint128"
      },
      {
        name: "uid",
        type: "bytes32"
      }
    ],
    name: "req",
    type: "tuple"
  },
  {
    name: "signature",
    type: "bytes"
  }
];
var FN_OUTPUTS2 = [];
function setPermissionsForSigner(options) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });
  return prepareContractCall({
    accessList: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.accessList;
    },
    authorizationList: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.authorizationList;
    },
    contract: options.contract,
    erc20Value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.erc20Value;
    },
    extraGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.extraGas;
    },
    gas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gas;
    },
    gasPrice: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gasPrice;
    },
    maxFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxFeePerGas;
    },
    maxPriorityFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxPriorityFeePerGas;
    },
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS2],
    nonce: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.nonce;
    },
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.req, resolvedOptions.signature];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    }
  });
}

// node_modules/thirdweb/dist/esm/utils/date.js
function tenYearsFromNow() {
  return new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365 * 10);
}
function dateToSeconds(date) {
  return toBigInt(Math.floor(date.getTime() / 1e3));
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/account/types.js
var SignerPermissionRequest = [
  { name: "signer", type: "address" },
  { name: "isAdmin", type: "uint8" },
  { name: "approvedTargets", type: "address[]" },
  { name: "nativeTokenLimitPerTransaction", type: "uint256" },
  { name: "permissionStartTimestamp", type: "uint128" },
  { name: "permissionEndTimestamp", type: "uint128" },
  { name: "reqValidityStartTimestamp", type: "uint128" },
  { name: "reqValidityEndTimestamp", type: "uint128" },
  { name: "uid", type: "bytes32" }
];

// node_modules/thirdweb/dist/esm/extensions/erc4337/account/common.js
async function signPermissionRequest(options) {
  const { account, contract, req } = options;
  const signature = await account.signTypedData({
    domain: {
      chainId: contract.chain.id,
      name: "Account",
      verifyingContract: contract.address,
      version: "1"
    },
    message: req,
    primaryType: "SignerPermissionRequest",
    types: { SignerPermissionRequest }
  });
  return { req, signature };
}
async function toContractPermissions(options) {
  var _a;
  const { target, permissions } = options;
  return {
    approvedTargets: permissions.approvedTargets === "*" ? [ZERO_ADDRESS] : permissions.approvedTargets,
    isAdmin: 0,
    nativeTokenLimitPerTransaction: toWei(((_a = permissions.nativeTokenLimitPerTransaction) == null ? void 0 : _a.toString()) || "0"),
    permissionEndTimestamp: dateToSeconds(permissions.permissionEndTimestamp || tenYearsFromNow()),
    permissionStartTimestamp: dateToSeconds(permissions.permissionStartTimestamp || /* @__PURE__ */ new Date(0)),
    reqValidityEndTimestamp: dateToSeconds(tenYearsFromNow()),
    reqValidityStartTimestamp: 0n,
    signer: target,
    // session key flag
    uid: await randomBytesHex()
  };
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/account/addSessionKey.js
function addSessionKey(options) {
  const { contract, sessionKeyAddress, account, permissions } = options;
  return setPermissionsForSigner({
    async asyncParams() {
      const { req, signature } = await signPermissionRequest({
        account,
        contract,
        req: await toContractPermissions({
          permissions,
          target: sessionKeyAddress
        })
      });
      return { req, signature };
    },
    contract
  });
}
async function shouldUpdateSessionKey(args) {
  var _a;
  const { accountContract, sessionKeyAddress, newPermissions } = args;
  const accountDeployed = await isContractDeployed(accountContract);
  if (!accountDeployed) {
    return true;
  }
  const currentPermissions = await getPermissionsForSigner({
    contract: accountContract,
    signer: sessionKeyAddress
  });
  if (currentPermissions.endTimestamp && currentPermissions.endTimestamp < Math.floor(Date.now() / 1e3)) {
    return true;
  }
  if (!areSessionKeyContractTargetsEqual(currentPermissions.approvedTargets, newPermissions.approvedTargets)) {
    return true;
  }
  if (toWei(((_a = newPermissions.nativeTokenLimitPerTransaction) == null ? void 0 : _a.toString()) ?? "0") > currentPermissions.nativeTokenLimitPerTransaction) {
    return true;
  }
  return false;
}
function areSessionKeyContractTargetsEqual(currentTargets, newTargets) {
  if (newTargets === "*" && currentTargets.length === 1 && currentTargets[0] === ZERO_ADDRESS) {
    return true;
  }
  if (newTargets !== "*") {
    return newTargets.map((target) => target.toLowerCase()).every((target) => currentTargets.map((t) => t.toLowerCase()).includes(target));
  }
  return false;
}

// node_modules/thirdweb/dist/esm/utils/types.js
var maxUint962 = 2n ** 96n - 1n;

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/events/UserOperationRevertReason.js
function userOperationRevertReasonEvent(filters = {}) {
  return prepareEvent({
    filters,
    signature: "event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)"
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint_v07/events/PostOpRevertReason.js
function postOpRevertReasonEvent(filters = {}) {
  return prepareEvent({
    filters,
    signature: "event PostOpRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)"
  });
}

// node_modules/thirdweb/dist/esm/wallets/smart/types.js
function formatUserOperationReceipt(userOpReceiptRaw) {
  const { receipt: transactionReceipt } = userOpReceiptRaw;
  const receipt = {
    ...transactionReceipt,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs,
    status: transactionReceipt.status,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionHash: transactionReceipt.transactionHash,
    transactionIndex: transactionReceipt.transactionIndex,
    type: transactionReceipt.type
  };
  if (transactionReceipt.blobGasPrice)
    receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
  if (transactionReceipt.blobGasUsed)
    receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
  const userOpReceipt = {
    ...userOpReceiptRaw,
    actualGasCost: BigInt(userOpReceiptRaw.actualGasCost),
    actualGasUsed: BigInt(userOpReceiptRaw.actualGasUsed),
    nonce: BigInt(userOpReceiptRaw.nonce),
    receipt,
    userOpHash: userOpReceiptRaw.userOpHash
  };
  return userOpReceipt;
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/read/getNonce.js
var FN_SELECTOR3 = "0x35567e1a";
var FN_INPUTS3 = [
  {
    name: "sender",
    type: "address"
  },
  {
    name: "key",
    type: "uint192"
  }
];
var FN_OUTPUTS3 = [
  {
    name: "nonce",
    type: "uint256"
  }
];
async function getNonce(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR3, FN_INPUTS3, FN_OUTPUTS3],
    params: [options.sender, options.key]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/read/getUserOpHash.js
var FN_SELECTOR4 = "0xa6193531";
var FN_INPUTS4 = [
  {
    components: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "nonce",
        type: "uint256"
      },
      {
        name: "initCode",
        type: "bytes"
      },
      {
        name: "callData",
        type: "bytes"
      },
      {
        name: "callGasLimit",
        type: "uint256"
      },
      {
        name: "verificationGasLimit",
        type: "uint256"
      },
      {
        name: "preVerificationGas",
        type: "uint256"
      },
      {
        name: "maxFeePerGas",
        type: "uint256"
      },
      {
        name: "maxPriorityFeePerGas",
        type: "uint256"
      },
      {
        name: "paymasterAndData",
        type: "bytes"
      },
      {
        name: "signature",
        type: "bytes"
      }
    ],
    name: "userOp",
    type: "tuple"
  }
];
var FN_OUTPUTS4 = [
  {
    type: "bytes32"
  }
];
async function getUserOpHash(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR4, FN_INPUTS4, FN_OUTPUTS4],
    params: [options.userOp]
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint_v07/read/getUserOpHash.js
var FN_SELECTOR5 = "0x22cdde4c";
var FN_INPUTS5 = [
  {
    components: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "nonce",
        type: "uint256"
      },
      {
        name: "initCode",
        type: "bytes"
      },
      {
        name: "callData",
        type: "bytes"
      },
      {
        name: "accountGasLimits",
        type: "bytes32"
      },
      {
        name: "preVerificationGas",
        type: "uint256"
      },
      {
        name: "gasFees",
        type: "bytes32"
      },
      {
        name: "paymasterAndData",
        type: "bytes"
      },
      {
        name: "signature",
        type: "bytes"
      }
    ],
    name: "userOp",
    type: "tuple"
  }
];
var FN_OUTPUTS5 = [
  {
    type: "bytes32"
  }
];
async function getUserOpHash2(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR5, FN_INPUTS5, FN_OUTPUTS5],
    params: [options.userOp]
  });
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/packUserOp.js
function getInitCode(unpackedUserOperation) {
  return unpackedUserOperation.factory ? concat([
    unpackedUserOperation.factory,
    unpackedUserOperation.factoryData || "0x"
  ]) : "0x";
}
function getAccountGasLimits(unpackedUserOperation) {
  return concat([
    pad(toHex(BigInt(unpackedUserOperation.verificationGasLimit)), {
      size: 16
    }),
    pad(toHex(BigInt(unpackedUserOperation.callGasLimit)), { size: 16 })
  ]);
}
function getGasLimits(unpackedUserOperation) {
  return concat([
    pad(toHex(BigInt(unpackedUserOperation.maxPriorityFeePerGas)), {
      size: 16
    }),
    pad(toHex(BigInt(unpackedUserOperation.maxFeePerGas)), { size: 16 })
  ]);
}
function getPaymasterAndData(unpackedUserOperation) {
  return unpackedUserOperation.paymaster ? concat([
    unpackedUserOperation.paymaster,
    pad(toHex(BigInt(unpackedUserOperation.paymasterVerificationGasLimit || 0)), {
      size: 16
    }),
    pad(toHex(BigInt(unpackedUserOperation.paymasterPostOpGasLimit || 0)), {
      size: 16
    }),
    unpackedUserOperation.paymasterData || "0x"
  ]) : "0x";
}
var getPackedUserOperation = (userOperation) => {
  return {
    accountGasLimits: getAccountGasLimits(userOperation),
    callData: userOperation.callData,
    gasFees: getGasLimits(userOperation),
    initCode: getInitCode(userOperation),
    nonce: BigInt(userOperation.nonce),
    paymasterAndData: getPaymasterAndData(userOperation),
    preVerificationGas: BigInt(userOperation.preVerificationGas),
    sender: userOperation.sender,
    signature: userOperation.signature
  };
};

// node_modules/thirdweb/dist/esm/wallets/smart/lib/utils.js
var generateRandomUint192 = () => {
  const rand1 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand2 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand3 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand4 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand5 = BigInt(Math.floor(Math.random() * 4294967296));
  const rand6 = BigInt(Math.floor(Math.random() * 4294967296));
  return rand1 << BigInt(160) | rand2 << BigInt(128) | rand3 << BigInt(96) | rand4 << BigInt(64) | rand5 << BigInt(32) | rand6;
};
function hexlifyUserOp(userOp) {
  return Object.fromEntries(Object.entries(userOp).map(([key, val]) => [
    key,
    // turn any value that's not hex into hex
    val === void 0 || val === null || isHex(val) ? val : toHex2(val)
  ]));
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/paymaster.js
async function getPaymasterAndData2(args) {
  var _a;
  const { userOp, paymasterOverride, client, chain, entrypointAddress } = args;
  if (paymasterOverride) {
    return paymasterOverride(userOp);
  }
  const headers = {
    "Content-Type": "application/json"
  };
  const entrypoint = entrypointAddress ?? ENTRYPOINT_ADDRESS_v0_6;
  const paymasterUrl = getDefaultBundlerUrl(chain);
  const body = {
    id: 1,
    jsonrpc: "2.0",
    method: "pm_sponsorUserOperation",
    params: [hexlifyUserOp(userOp), entrypoint]
  };
  const fetchWithHeaders = getClientFetch(client);
  const response = await fetchWithHeaders(paymasterUrl, {
    body: stringify(body),
    headers,
    method: "POST"
  });
  if (!response.ok) {
    const error2 = await response.text() || response.statusText;
    throw new Error(`Paymaster error: ${response.status} - ${error2}`);
  }
  const res = await response.json();
  if (res.result) {
    if (typeof res.result === "string") {
      return {
        paymasterAndData: res.result
      };
    }
    if (res.result.reason) {
      console.warn(`Paymaster policy rejected this transaction with reason: ${res.result.reason} ${res.result.policyId ? `(policyId: ${res.result.policyId})` : ""}`);
    }
    return {
      callGasLimit: res.result.callGasLimit ? hexToBigInt(res.result.callGasLimit) : void 0,
      paymaster: res.result.paymaster,
      paymasterAndData: res.result.paymasterAndData,
      paymasterData: res.result.paymasterData,
      paymasterPostOpGasLimit: res.result.paymasterPostOpGasLimit ? hexToBigInt(res.result.paymasterPostOpGasLimit) : void 0,
      paymasterVerificationGasLimit: res.result.paymasterVerificationGasLimit ? hexToBigInt(res.result.paymasterVerificationGasLimit) : void 0,
      preVerificationGas: res.result.preVerificationGas ? hexToBigInt(res.result.preVerificationGas) : void 0,
      verificationGasLimit: res.result.verificationGasLimit ? hexToBigInt(res.result.verificationGasLimit) : void 0
    };
  }
  const error = ((_a = res.error) == null ? void 0 : _a.message) || res.error || response.statusText || "unknown error";
  throw new Error(`Paymaster error from ${paymasterUrl}: ${error}`);
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/userop.js
var isDeployingSet = /* @__PURE__ */ new Set();
var getKey = (accountContract) => {
  return `${accountContract.chain.id}:${accountContract.address}`;
};
var markAccountDeploying = (accountContract) => {
  isDeployingSet.add(getKey(accountContract));
};
var clearAccountDeploying = (accountContract) => {
  isDeployingSet.delete(getKey(accountContract));
};
var isAccountDeploying = (accountContract) => {
  return isDeployingSet.has(getKey(accountContract));
};
async function waitForUserOpReceipt(args) {
  const timeout = args.timeoutMs || 12e4;
  const interval = args.intervalMs || 1e3;
  const endtime = Date.now() + timeout;
  while (Date.now() < endtime) {
    const userOpReceipt = await getUserOpReceipt(args);
    if (userOpReceipt) {
      return userOpReceipt;
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  throw new Error(`Timeout waiting for userOp to be mined on chain ${args.chain.id} with UserOp hash: ${args.userOpHash}`);
}
async function createUnsignedUserOp(args) {
  var _a;
  const { transaction: executeTx, accountContract, factoryContract, adminAddress, overrides, sponsorGas, waitForDeployment = true, isDeployedOverride } = args;
  const chain = executeTx.chain;
  const client = executeTx.client;
  const bundlerOptions = {
    bundlerUrl: overrides == null ? void 0 : overrides.bundlerUrl,
    chain,
    client,
    entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress
  };
  const entrypointVersion = getEntryPointVersion(((_a = args.overrides) == null ? void 0 : _a.entrypointAddress) || ENTRYPOINT_ADDRESS_v0_6);
  const [isDeployed, callData, callGasLimit, gasFees, nonce] = await Promise.all([
    typeof isDeployedOverride === "boolean" ? isDeployedOverride : isContractDeployed(accountContract).then((isDeployed2) => isDeployed2 || isAccountDeploying(accountContract)),
    encode(executeTx),
    resolvePromisedValue(executeTx.gas),
    getGasFees({
      bundlerOptions,
      chain,
      client,
      executeTx
    }),
    getAccountNonce({
      accountContract,
      chain,
      client,
      entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
      getNonceOverride: overrides == null ? void 0 : overrides.getAccountNonce
    })
  ]);
  const { maxFeePerGas, maxPriorityFeePerGas } = gasFees;
  if (entrypointVersion === "v0.7") {
    return populateUserOp_v0_7({
      accountContract,
      adminAddress,
      bundlerOptions,
      callData,
      callGasLimit,
      factoryContract,
      isDeployed,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      overrides,
      sponsorGas,
      waitForDeployment
    });
  }
  return populateUserOp_v0_6({
    accountContract,
    adminAddress,
    bundlerOptions,
    callData,
    callGasLimit,
    factoryContract,
    isDeployed,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    overrides,
    sponsorGas,
    waitForDeployment
  });
}
async function getGasFees(args) {
  const { executeTx, bundlerOptions, chain, client } = args;
  let { maxFeePerGas, maxPriorityFeePerGas } = executeTx;
  const bundlerUrl = (bundlerOptions == null ? void 0 : bundlerOptions.bundlerUrl) ?? getDefaultBundlerUrl(chain);
  if (isThirdwebUrl(bundlerUrl)) {
    const bundlerGasPrice = await getUserOpGasFees({
      options: bundlerOptions
    });
    maxFeePerGas = bundlerGasPrice.maxFeePerGas;
    maxPriorityFeePerGas = bundlerGasPrice.maxPriorityFeePerGas;
  } else {
    const [resolvedMaxFeePerGas, resolvedMaxPriorityFeePerGas] = await Promise.all([
      resolvePromisedValue(maxFeePerGas),
      resolvePromisedValue(maxPriorityFeePerGas)
    ]);
    if (resolvedMaxFeePerGas && resolvedMaxPriorityFeePerGas) {
      maxFeePerGas = resolvedMaxFeePerGas;
      maxPriorityFeePerGas = resolvedMaxPriorityFeePerGas;
    } else {
      const feeData = await getDefaultGasOverrides(client, chain);
      maxPriorityFeePerGas = resolvedMaxPriorityFeePerGas ?? feeData.maxPriorityFeePerGas ?? 0n;
      maxFeePerGas = resolvedMaxFeePerGas ?? feeData.maxFeePerGas ?? 0n;
    }
  }
  return { maxFeePerGas, maxPriorityFeePerGas };
}
async function populateUserOp_v0_7(args) {
  const { bundlerOptions, isDeployed, factoryContract, accountContract, adminAddress, sponsorGas, overrides, nonce, callData, callGasLimit, maxFeePerGas, maxPriorityFeePerGas, waitForDeployment } = args;
  const { chain, client } = bundlerOptions;
  let factory;
  let factoryData;
  if (isDeployed) {
    factoryData = "0x";
    if (waitForDeployment) {
      await waitForAccountDeployed(accountContract);
    }
  } else {
    factory = factoryContract.address;
    factoryData = await encode(prepareCreateAccount({
      accountSalt: overrides == null ? void 0 : overrides.accountSalt,
      adminAddress,
      createAccountOverride: overrides == null ? void 0 : overrides.createAccount,
      factoryContract
    }));
    if (waitForDeployment) {
      markAccountDeploying(accountContract);
    }
  }
  const partialOp = {
    callData,
    callGasLimit: callGasLimit ?? 0n,
    factory,
    factoryData,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    paymaster: void 0,
    paymasterData: "0x",
    paymasterPostOpGasLimit: 0n,
    paymasterVerificationGasLimit: 0n,
    preVerificationGas: 0n,
    sender: accountContract.address,
    signature: DUMMY_SIGNATURE,
    verificationGasLimit: 0n
  };
  if (sponsorGas) {
    const paymasterResult = await getPaymasterAndData2({
      chain,
      client,
      entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
      paymasterOverride: overrides == null ? void 0 : overrides.paymaster,
      userOp: partialOp
    });
    if (paymasterResult.paymaster && paymasterResult.paymasterData) {
      partialOp.paymaster = paymasterResult.paymaster;
      partialOp.paymasterData = paymasterResult.paymasterData;
    }
    if (paymasterResult.callGasLimit && paymasterResult.verificationGasLimit && paymasterResult.preVerificationGas && paymasterResult.paymasterPostOpGasLimit && paymasterResult.paymasterVerificationGasLimit) {
      partialOp.callGasLimit = paymasterResult.callGasLimit;
      partialOp.verificationGasLimit = paymasterResult.verificationGasLimit;
      partialOp.preVerificationGas = paymasterResult.preVerificationGas;
      partialOp.paymasterPostOpGasLimit = paymasterResult.paymasterPostOpGasLimit;
      partialOp.paymasterVerificationGasLimit = paymasterResult.paymasterVerificationGasLimit;
    } else {
      const stateOverrides = (overrides == null ? void 0 : overrides.tokenPaymaster) ? {
        [overrides.tokenPaymaster.tokenAddress]: {
          stateDiff: {
            [keccak256(encodeAbiParameters([{ type: "address" }, { type: "uint256" }], [
              accountContract.address,
              overrides.tokenPaymaster.balanceStorageSlot
            ]))]: toHex2(maxUint96, { size: 32 })
          }
        }
      } : void 0;
      const estimates = await estimateUserOpGas({
        options: bundlerOptions,
        userOp: partialOp
      }, stateOverrides);
      partialOp.callGasLimit = estimates.callGasLimit;
      partialOp.verificationGasLimit = estimates.verificationGasLimit;
      partialOp.preVerificationGas = estimates.preVerificationGas;
      partialOp.paymasterPostOpGasLimit = (overrides == null ? void 0 : overrides.tokenPaymaster) ? 500000n : estimates.paymasterPostOpGasLimit || 0n;
      partialOp.paymasterVerificationGasLimit = estimates.paymasterVerificationGasLimit || 0n;
      const paymasterResult2 = await getPaymasterAndData2({
        chain,
        client,
        entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
        paymasterOverride: overrides == null ? void 0 : overrides.paymaster,
        userOp: partialOp
      });
      if (paymasterResult2.paymaster && paymasterResult2.paymasterData) {
        partialOp.paymaster = paymasterResult2.paymaster;
        partialOp.paymasterData = paymasterResult2.paymasterData;
      }
    }
  } else {
    const estimates = await estimateUserOpGas({
      options: bundlerOptions,
      userOp: partialOp
    });
    partialOp.callGasLimit = estimates.callGasLimit;
    partialOp.verificationGasLimit = estimates.verificationGasLimit;
    partialOp.preVerificationGas = estimates.preVerificationGas;
    partialOp.paymasterPostOpGasLimit = estimates.paymasterPostOpGasLimit || 0n;
    partialOp.paymasterVerificationGasLimit = estimates.paymasterVerificationGasLimit || 0n;
  }
  return {
    ...partialOp,
    signature: "0x"
  };
}
async function populateUserOp_v0_6(args) {
  const { bundlerOptions, isDeployed, factoryContract, accountContract, adminAddress, sponsorGas, overrides, nonce, callData, callGasLimit, maxFeePerGas, maxPriorityFeePerGas, waitForDeployment } = args;
  const { chain, client } = bundlerOptions;
  let initCode;
  if (isDeployed) {
    initCode = "0x";
    if (waitForDeployment) {
      await waitForAccountDeployed(accountContract);
    }
  } else {
    initCode = await getAccountInitCode({
      accountSalt: overrides == null ? void 0 : overrides.accountSalt,
      adminAddress,
      createAccountOverride: overrides == null ? void 0 : overrides.createAccount,
      factoryContract
    });
    if (waitForDeployment) {
      markAccountDeploying(accountContract);
    }
  }
  const partialOp = {
    callData,
    callGasLimit: callGasLimit ?? 0n,
    initCode,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    paymasterAndData: "0x",
    preVerificationGas: 0n,
    sender: accountContract.address,
    signature: DUMMY_SIGNATURE,
    verificationGasLimit: 0n
  };
  if (sponsorGas) {
    const paymasterResult = await getPaymasterAndData2({
      chain,
      client,
      entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
      paymasterOverride: overrides == null ? void 0 : overrides.paymaster,
      userOp: partialOp
    });
    const paymasterAndData = "paymasterAndData" in paymasterResult ? paymasterResult.paymasterAndData : "0x";
    if (paymasterAndData && paymasterAndData !== "0x") {
      partialOp.paymasterAndData = paymasterAndData;
    }
    if (paymasterResult.callGasLimit && paymasterResult.verificationGasLimit && paymasterResult.preVerificationGas) {
      partialOp.callGasLimit = paymasterResult.callGasLimit;
      partialOp.verificationGasLimit = paymasterResult.verificationGasLimit;
      partialOp.preVerificationGas = paymasterResult.preVerificationGas;
    } else {
      const estimates = await estimateUserOpGas({
        options: bundlerOptions,
        userOp: partialOp
      });
      partialOp.callGasLimit = estimates.callGasLimit;
      partialOp.verificationGasLimit = estimates.verificationGasLimit;
      partialOp.preVerificationGas = estimates.preVerificationGas;
      if (paymasterAndData && paymasterAndData !== "0x") {
        const paymasterResult2 = await getPaymasterAndData2({
          chain,
          client,
          entrypointAddress: overrides == null ? void 0 : overrides.entrypointAddress,
          paymasterOverride: overrides == null ? void 0 : overrides.paymaster,
          userOp: partialOp
        });
        const paymasterAndData2 = "paymasterAndData" in paymasterResult2 ? paymasterResult2.paymasterAndData : "0x";
        if (paymasterAndData2 && paymasterAndData2 !== "0x") {
          partialOp.paymasterAndData = paymasterAndData2;
        }
      }
    }
  } else {
    const estimates = await estimateUserOpGas({
      options: bundlerOptions,
      userOp: partialOp
    });
    partialOp.callGasLimit = estimates.callGasLimit;
    partialOp.verificationGasLimit = estimates.verificationGasLimit;
    partialOp.preVerificationGas = estimates.preVerificationGas;
  }
  return {
    ...partialOp,
    signature: "0x"
  };
}
async function signUserOp(args) {
  const { userOp, chain, entrypointAddress, adminAccount } = args;
  const userOpHash = await getUserOpHash3({
    chain,
    client: args.client,
    entrypointAddress,
    userOp
  });
  if (adminAccount.signMessage) {
    const signature = await adminAccount.signMessage({
      chainId: chain.id,
      message: {
        raw: hexToBytes(userOpHash)
      },
      originalMessage: stringify(userOp)
    });
    return {
      ...userOp,
      signature
    };
  }
  throw new Error("signMessage not implemented in signingAccount");
}
async function getUserOpHash3(args) {
  const { userOp, chain, entrypointAddress } = args;
  const entrypointVersion = getEntryPointVersion(entrypointAddress || ENTRYPOINT_ADDRESS_v0_6);
  let userOpHash;
  if (entrypointVersion === "v0.7") {
    const packedUserOp = getPackedUserOperation(userOp);
    userOpHash = await getUserOpHash2({
      contract: getContract({
        address: entrypointAddress || ENTRYPOINT_ADDRESS_v0_7,
        chain,
        client: args.client
      }),
      userOp: packedUserOp
    });
  } else {
    userOpHash = await getUserOpHash({
      contract: getContract({
        address: entrypointAddress || ENTRYPOINT_ADDRESS_v0_6,
        chain,
        client: args.client
      }),
      userOp
    });
  }
  return userOpHash;
}
async function getAccountInitCode(options) {
  const { factoryContract, adminAddress, accountSalt, createAccountOverride } = options;
  const deployTx = prepareCreateAccount({
    accountSalt,
    adminAddress,
    createAccountOverride,
    factoryContract
  });
  return concat([factoryContract.address, await encode(deployTx)]);
}
async function getAccountNonce(options) {
  const { accountContract, chain, client, entrypointAddress, getNonceOverride } = options;
  if (getNonceOverride) {
    return getNonceOverride(accountContract);
  }
  return await getNonce({
    contract: getContract({
      address: entrypointAddress || ENTRYPOINT_ADDRESS_v0_6,
      chain,
      client
    }),
    key: generateRandomUint192(),
    sender: accountContract.address
  });
}
async function waitForAccountDeployed(accountContract) {
  const startTime = Date.now();
  while (isAccountDeploying(accountContract)) {
    if (Date.now() - startTime > 6e4) {
      clearAccountDeploying(accountContract);
      throw new Error("Account deployment is taking too long (over 1 minute). Please try again.");
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

// node_modules/thirdweb/dist/esm/wallets/smart/lib/bundler.js
async function bundleUserOp(args) {
  return sendBundlerRequest({
    ...args,
    operation: "eth_sendUserOperation",
    params: [
      hexlifyUserOp(args.userOp),
      args.options.entrypointAddress ?? ENTRYPOINT_ADDRESS_v0_6
    ]
  });
}
async function estimateUserOpGas(args, stateOverrides) {
  const res = await sendBundlerRequest({
    ...args,
    operation: "eth_estimateUserOperationGas",
    params: [
      hexlifyUserOp(args.userOp),
      args.options.entrypointAddress ?? ENTRYPOINT_ADDRESS_v0_6,
      stateOverrides ?? {}
    ]
  });
  return {
    callGasLimit: hexToBigInt(res.callGasLimit) + MANAGED_ACCOUNT_GAS_BUFFER,
    paymasterPostOpGasLimit: res.paymasterPostOpGasLimit !== void 0 ? hexToBigInt(res.paymasterPostOpGasLimit) : void 0,
    paymasterVerificationGasLimit: res.paymasterVerificationGasLimit !== void 0 ? hexToBigInt(res.paymasterVerificationGasLimit) : void 0,
    preVerificationGas: hexToBigInt(res.preVerificationGas),
    verificationGas: res.verificationGas !== void 0 ? hexToBigInt(res.verificationGas) : void 0,
    verificationGasLimit: hexToBigInt(res.verificationGasLimit)
  };
}
async function getUserOpGasFees(args) {
  const res = await sendBundlerRequest({
    ...args,
    operation: "thirdweb_getUserOperationGasPrice",
    params: []
  });
  return {
    maxFeePerGas: hexToBigInt(res.maxFeePerGas),
    maxPriorityFeePerGas: hexToBigInt(res.maxPriorityFeePerGas)
  };
}
async function getUserOpReceipt(args) {
  var _a, _b;
  const res = await getUserOpReceiptRaw(args);
  if (!res) {
    return void 0;
  }
  if (res.success === false) {
    const logs = parseEventLogs({
      events: [userOperationRevertReasonEvent(), postOpRevertReasonEvent()],
      logs: res.logs
    });
    const revertReason = (_b = (_a = logs[0]) == null ? void 0 : _a.args) == null ? void 0 : _b.revertReason;
    if (!revertReason) {
      throw new Error(`UserOp failed at txHash: ${res.receipt.transactionHash}`);
    }
    const revertMsg = decodeErrorResult({
      data: revertReason
    });
    throw new Error(`UserOp failed with reason: '${revertMsg.args.join(",")}' at txHash: ${res.receipt.transactionHash}`);
  }
  return res.receipt;
}
async function getUserOpReceiptRaw(args) {
  const res = await sendBundlerRequest({
    operation: "eth_getUserOperationReceipt",
    options: args,
    params: [args.userOpHash]
  });
  if (!res) {
    return void 0;
  }
  return formatUserOperationReceipt(res);
}
async function getZkPaymasterData(args) {
  const res = await sendBundlerRequest({
    operation: "zk_paymasterData",
    options: args.options,
    params: [args.transaction]
  });
  return {
    paymaster: res.paymaster,
    paymasterInput: res.paymasterInput
  };
}
async function executeWithSignature(args) {
  const res = await sendBundlerRequest({
    ...args,
    operation: "tw_execute",
    params: [
      args.eoaAddress,
      args.wrappedCalls,
      args.signature,
      args.authorization
    ]
  });
  return {
    transactionId: res.queueId
  };
}
async function getQueuedTransactionHash(args) {
  const res = await sendBundlerRequest({
    ...args,
    operation: "tw_getTransactionHash",
    params: [args.transactionId]
  });
  return {
    transactionHash: res.transactionHash
  };
}
async function broadcastZkTransaction(args) {
  const res = await sendBundlerRequest({
    operation: "zk_broadcastTransaction",
    options: args.options,
    params: [
      {
        ...args.transaction,
        signedTransaction: args.signedTransaction
      }
    ]
  });
  return {
    transactionHash: res.transactionHash
  };
}
async function sendBundlerRequest(args) {
  const { options, operation, params } = args;
  const bundlerUrl = options.bundlerUrl ?? getDefaultBundlerUrl(options.chain);
  const fetchWithHeaders = getClientFetch(options.client);
  const response = await fetchWithHeaders(bundlerUrl, {
    body: stringify({
      id: 1,
      jsonrpc: "2.0",
      method: operation,
      params
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  const res = await response.json();
  if (!response.ok || res.error) {
    let error = res.error || response.statusText;
    if (typeof error === "object") {
      error = stringify(error);
    }
    const code = res.code || "UNKNOWN";
    throw new Error(`${operation} error: ${error}
Status: ${response.status}
Code: ${code}`);
  }
  return res.result;
}

// node_modules/thirdweb/dist/esm/wallets/smart/is-smart-wallet.js
function isSmartWallet(activeWallet) {
  if (!activeWallet) {
    return false;
  }
  if (activeWallet.id === "smart") {
    return true;
  }
  if (activeWallet.id === "inApp" || isEcosystemWallet(activeWallet)) {
    const options = activeWallet.getConfig();
    if (options && "smartAccount" in options && options.smartAccount) {
      return true;
    }
    if (options == null ? void 0 : options.executionMode) {
      const execMode = options.executionMode;
      return execMode.mode === "EIP4337" || execMode.mode === "EIP7702";
    }
  }
  return false;
}
function hasSponsoredTransactionsEnabled(wallet) {
  if (!wallet) {
    return false;
  }
  let sponsoredTransactionsEnabled = false;
  if (wallet && wallet.id === "smart") {
    const options = wallet.getConfig();
    if ("sponsorGas" in options) {
      sponsoredTransactionsEnabled = options.sponsorGas;
    }
    if ("gasless" in options) {
      sponsoredTransactionsEnabled = options.gasless;
    }
  }
  if (wallet && (wallet.id === "inApp" || isEcosystemWallet(wallet))) {
    const options = wallet.getConfig();
    if (options && "smartAccount" in options && options.smartAccount) {
      const smartOptions = options.smartAccount;
      if ("sponsorGas" in smartOptions) {
        sponsoredTransactionsEnabled = smartOptions.sponsorGas;
      }
      if ("gasless" in smartOptions) {
        sponsoredTransactionsEnabled = smartOptions.gasless;
      }
    }
    if (options == null ? void 0 : options.executionMode) {
      const execMode = options.executionMode;
      if (execMode.mode === "EIP4337") {
        const smartOptions = execMode.smartAccount;
        if (smartOptions && "sponsorGas" in smartOptions) {
          sponsoredTransactionsEnabled = smartOptions.sponsorGas;
        }
        if (smartOptions && "gasless" in smartOptions) {
          sponsoredTransactionsEnabled = smartOptions.gasless;
        }
      }
      if (execMode.mode === "EIP7702") {
        sponsoredTransactionsEnabled = execMode.sponsorGas || false;
      }
    }
  }
  return sponsoredTransactionsEnabled;
}

// node_modules/thirdweb/dist/esm/wallets/smart/index.js
var adminAccountToSmartAccountMap = /* @__PURE__ */ new WeakMap();
var smartAccountToAdminAccountMap = /* @__PURE__ */ new WeakMap();
async function connectSmartAccount(connectionOptions, creationOptions) {
  var _a, _b, _c, _d, _e, _f, _g;
  const { personalAccount, client, chain: connectChain } = connectionOptions;
  if (!personalAccount) {
    throw new Error("No personal account provided for smart account connection");
  }
  const options = creationOptions;
  const chain = connectChain ?? options.chain;
  const sponsorGas = "gasless" in options ? options.gasless : options.sponsorGas;
  if (await isZkSyncChain(chain)) {
    return [
      createZkSyncAccount({
        chain,
        connectionOptions,
        creationOptions,
        sponsorGas
      }),
      chain
    ];
  }
  if (options.factoryAddress && !((_a = options.overrides) == null ? void 0 : _a.entrypointAddress)) {
    const entrypointAddress = await getEntrypointFromFactory(options.factoryAddress, client, chain);
    if (entrypointAddress) {
      options.overrides = {
        ...options.overrides,
        entrypointAddress
      };
    }
  }
  if (((_b = options.overrides) == null ? void 0 : _b.tokenPaymaster) && !((_c = options.overrides) == null ? void 0 : _c.entrypointAddress)) {
    options.overrides = {
      ...options.overrides,
      entrypointAddress: ENTRYPOINT_ADDRESS_v0_7
    };
  }
  const factoryAddress = options.factoryAddress ?? getDefaultAccountFactory((_d = options.overrides) == null ? void 0 : _d.entrypointAddress);
  const factoryContract = getContract({
    address: factoryAddress,
    chain,
    client
  });
  const accountAddress = await predictAddress({
    accountAddress: (_e = options.overrides) == null ? void 0 : _e.accountAddress,
    accountSalt: (_f = options.overrides) == null ? void 0 : _f.accountSalt,
    adminAddress: personalAccount.address,
    factoryContract,
    predictAddressOverride: (_g = options.overrides) == null ? void 0 : _g.predictAddress
  }).then((address) => address).catch((err) => {
    throw new Error(`Failed to get account address with factory contract ${factoryContract.address} on chain ID ${chain.id}: ${(err == null ? void 0 : err.message) || "unknown error"}`, { cause: err });
  });
  const accountContract = getContract({
    address: accountAddress,
    chain,
    client
  });
  const account = await createSmartAccount({
    ...options,
    accountContract,
    chain,
    client,
    factoryContract,
    personalAccount,
    sponsorGas
  });
  adminAccountToSmartAccountMap.set(personalAccount, account);
  smartAccountToAdminAccountMap.set(account, personalAccount);
  if (options.sessionKey) {
    if (await shouldUpdateSessionKey({
      accountContract,
      newPermissions: options.sessionKey.permissions,
      sessionKeyAddress: options.sessionKey.address
    })) {
      const transaction = addSessionKey({
        account: personalAccount,
        contract: accountContract,
        permissions: options.sessionKey.permissions,
        sessionKeyAddress: options.sessionKey.address
      });
      await sendTransaction({
        account,
        transaction
      });
    }
  }
  return [account, chain];
}
async function disconnectSmartAccount(account) {
  const personalAccount = smartAccountToAdminAccountMap.get(account);
  if (personalAccount) {
    adminAccountToSmartAccountMap.delete(personalAccount);
    smartAccountToAdminAccountMap.delete(account);
  }
}
async function createSmartAccount(options) {
  var _a, _b;
  const erc20Paymaster = (_a = options.overrides) == null ? void 0 : _a.tokenPaymaster;
  if (erc20Paymaster) {
    if (getEntryPointVersion(((_b = options.overrides) == null ? void 0 : _b.entrypointAddress) || ENTRYPOINT_ADDRESS_v0_6) !== "v0.7") {
      throw new Error("Token paymaster is only supported for entrypoint version v0.7");
    }
  }
  let accountContract = options.accountContract;
  const account = {
    address: getAddress(accountContract.address),
    async onTransactionRequested(transaction) {
      var _a2, _b2;
      return (_b2 = (_a2 = options.personalAccount).onTransactionRequested) == null ? void 0 : _b2.call(_a2, transaction);
    },
    async sendBatchTransaction(transactions) {
      var _a2, _b2;
      const executeTx = prepareBatchExecute({
        accountContract,
        executeBatchOverride: (_a2 = options.overrides) == null ? void 0 : _a2.executeBatch,
        transactions
      });
      if (transactions.length === 0) {
        throw new Error("No transactions to send");
      }
      const firstTx = transactions[0];
      if (!firstTx) {
        throw new Error("No transactions to send");
      }
      const chain = getCachedChain(firstTx.chainId);
      const result = await _sendUserOp({
        executeTx,
        options: {
          ...options,
          accountContract,
          chain
        }
      });
      trackTransaction({
        chainId: chain.id,
        client: options.client,
        contractAddress: ((_b2 = transactions[0]) == null ? void 0 : _b2.to) ?? void 0,
        transactionHash: result.transactionHash,
        walletAddress: options.accountContract.address,
        walletType: "smart"
      });
      return result;
    },
    async sendTransaction(transaction) {
      var _a2, _b2, _c;
      let paymasterOverride;
      if (erc20Paymaster) {
        await approveERC20({
          accountContract,
          erc20Paymaster,
          options
        });
        const paymasterCallback = async () => {
          return {
            paymaster: erc20Paymaster.paymasterAddress,
            paymasterData: "0x"
          };
        };
        paymasterOverride = ((_a2 = options.overrides) == null ? void 0 : _a2.paymaster) || paymasterCallback;
      } else {
        paymasterOverride = (_b2 = options.overrides) == null ? void 0 : _b2.paymaster;
      }
      if (transaction.chainId !== accountContract.chain.id) {
        accountContract = getContract({
          address: account.address,
          chain: getCachedChain(transaction.chainId),
          client: options.client
        });
      }
      const executeTx = prepareExecute({
        accountContract,
        executeOverride: (_c = options.overrides) == null ? void 0 : _c.execute,
        transaction
      });
      const chain = getCachedChain(transaction.chainId);
      const result = await _sendUserOp({
        executeTx,
        options: {
          ...options,
          accountContract,
          chain,
          overrides: {
            ...options.overrides,
            paymaster: paymasterOverride
          }
        }
      });
      trackTransaction({
        chainId: chain.id,
        client: options.client,
        contractAddress: transaction.to ?? void 0,
        transactionHash: result.transactionHash,
        walletAddress: options.accountContract.address,
        walletType: "smart"
      });
      return result;
    },
    async signMessage({ message }) {
      var _a2;
      if ((_a2 = options.overrides) == null ? void 0 : _a2.signMessage) {
        return options.overrides.signMessage({
          accountContract,
          adminAccount: options.personalAccount,
          factoryContract: options.factoryContract,
          message
        });
      }
      const { smartAccountSignMessage } = await import("./signing-LYRBDEBJ.js");
      return smartAccountSignMessage({
        accountContract,
        factoryContract: options.factoryContract,
        message,
        options
      });
    },
    async signTypedData(typedData) {
      var _a2;
      if ((_a2 = options.overrides) == null ? void 0 : _a2.signTypedData) {
        return options.overrides.signTypedData({
          accountContract,
          adminAccount: options.personalAccount,
          factoryContract: options.factoryContract,
          typedData
        });
      }
      const { smartAccountSignTypedData } = await import("./signing-LYRBDEBJ.js");
      return smartAccountSignTypedData({
        accountContract,
        factoryContract: options.factoryContract,
        options,
        typedData
      });
    }
  };
  return account;
}
async function approveERC20(args) {
  var _a;
  const { accountContract, erc20Paymaster, options } = args;
  const tokenAddress = erc20Paymaster.tokenAddress;
  const tokenContract = getContract({
    address: tokenAddress,
    chain: accountContract.chain,
    client: accountContract.client
  });
  const accountAllowance = await allowance({
    contract: tokenContract,
    owner: accountContract.address,
    spender: erc20Paymaster.paymasterAddress
  });
  if (accountAllowance > 0n) {
    return;
  }
  const approveTx = approve2({
    amountWei: maxUint962 - 1n,
    contract: tokenContract,
    spender: erc20Paymaster.paymasterAddress
  });
  const transaction = await toSerializableTransaction({
    from: accountContract.address,
    transaction: approveTx
  });
  const executeTx = prepareExecute({
    accountContract,
    executeOverride: (_a = options.overrides) == null ? void 0 : _a.execute,
    transaction
  });
  await _sendUserOp({
    executeTx,
    options: {
      ...options,
      overrides: {
        ...options.overrides,
        tokenPaymaster: void 0
      }
    }
  });
}
function createZkSyncAccount(args) {
  const { creationOptions, connectionOptions, chain } = args;
  const account = {
    address: getAddress(connectionOptions.personalAccount.address),
    async onTransactionRequested(transaction) {
      var _a, _b;
      return (_b = (_a = connectionOptions.personalAccount).onTransactionRequested) == null ? void 0 : _b.call(_a, transaction);
    },
    async sendTransaction(transaction) {
      var _a, _b, _c, _d;
      const prepTx = {
        chain: getCachedChain(transaction.chainId),
        client: connectionOptions.client,
        data: transaction.data,
        eip712: transaction.eip712,
        to: transaction.to ?? void 0,
        value: transaction.value ?? 0n
      };
      let serializableTransaction = await populateEip712Transaction({
        account,
        transaction: prepTx
      });
      if (args.sponsorGas && !serializableTransaction.paymaster) {
        const pmData = await getZkPaymasterData({
          options: {
            bundlerUrl: (_a = creationOptions.overrides) == null ? void 0 : _a.bundlerUrl,
            chain,
            client: connectionOptions.client,
            entrypointAddress: (_b = creationOptions.overrides) == null ? void 0 : _b.entrypointAddress
          },
          transaction: serializableTransaction
        });
        serializableTransaction = {
          ...serializableTransaction,
          ...pmData
        };
      }
      const signedTransaction = await signEip712Transaction({
        account,
        chainId: chain.id,
        eip712Transaction: serializableTransaction
      });
      const txHash = await broadcastZkTransaction({
        options: {
          bundlerUrl: (_c = creationOptions.overrides) == null ? void 0 : _c.bundlerUrl,
          chain,
          client: connectionOptions.client,
          entrypointAddress: (_d = creationOptions.overrides) == null ? void 0 : _d.entrypointAddress
        },
        signedTransaction,
        transaction: serializableTransaction
      });
      trackTransaction({
        chainId: chain.id,
        client: connectionOptions.client,
        contractAddress: transaction.to ?? void 0,
        transactionHash: txHash.transactionHash,
        walletAddress: account.address,
        walletType: "smart"
      });
      return {
        chain,
        client: connectionOptions.client,
        transactionHash: txHash.transactionHash
      };
    },
    async signMessage({ message }) {
      return connectionOptions.personalAccount.signMessage({ message });
    },
    async signTypedData(_typedData) {
      const typedData = parseTypedData(_typedData);
      return connectionOptions.personalAccount.signTypedData(typedData);
    }
  };
  return account;
}
async function _sendUserOp(args) {
  var _a, _b, _c;
  const { executeTx, options } = args;
  try {
    const unsignedUserOp = await createUnsignedUserOp({
      accountContract: options.accountContract,
      adminAddress: options.personalAccount.address,
      factoryContract: options.factoryContract,
      overrides: options.overrides,
      sponsorGas: options.sponsorGas,
      transaction: executeTx
    });
    const signedUserOp = await signUserOp({
      adminAccount: options.personalAccount,
      chain: options.chain,
      client: options.client,
      entrypointAddress: (_a = options.overrides) == null ? void 0 : _a.entrypointAddress,
      userOp: unsignedUserOp
    });
    const bundlerOptions = {
      bundlerUrl: (_b = options.overrides) == null ? void 0 : _b.bundlerUrl,
      chain: options.chain,
      client: options.client,
      entrypointAddress: (_c = options.overrides) == null ? void 0 : _c.entrypointAddress
    };
    const userOpHash = await bundleUserOp({
      options: bundlerOptions,
      userOp: signedUserOp
    });
    const receipt = await waitForUserOpReceipt({
      ...bundlerOptions,
      userOpHash
    });
    trackTransaction({
      chainId: options.chain.id,
      client: options.client,
      contractAddress: await resolvePromisedValue(executeTx.to ?? void 0),
      transactionHash: receipt.transactionHash,
      walletAddress: options.accountContract.address,
      walletType: "smart"
    });
    return {
      chain: options.chain,
      client: options.client,
      transactionHash: receipt.transactionHash
    };
  } catch (error) {
    if (isInsufficientFundsError(error)) {
      trackInsufficientFundsError({
        chainId: options.chain.id,
        client: options.client,
        contractAddress: await resolvePromisedValue(executeTx.to ?? void 0),
        error,
        transactionValue: await resolvePromisedValue(executeTx.value),
        walletAddress: options.accountContract.address
      });
    }
    throw error;
  } finally {
    clearAccountDeploying(options.accountContract);
  }
}
async function getEntrypointFromFactory(factoryAddress, client, chain) {
  const factoryContract = getContract({
    address: factoryAddress,
    chain,
    client
  });
  try {
    const entrypointAddress = await readContract({
      contract: factoryContract,
      method: "function entrypoint() public view returns (address)"
    });
    return entrypointAddress;
  } catch {
    return void 0;
  }
}

export {
  approve2 as approve,
  isSmartWallet,
  hasSponsoredTransactionsEnabled,
  connectSmartAccount,
  disconnectSmartAccount,
  getEntrypointFromFactory,
  executeWithSignature,
  getQueuedTransactionHash
};
//# sourceMappingURL=chunk-SCLL75R7.js.map
