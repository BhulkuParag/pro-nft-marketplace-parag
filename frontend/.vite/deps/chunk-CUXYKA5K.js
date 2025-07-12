import {
  executeWithSignature,
  getQueuedTransactionHash
} from "./chunk-SCLL75R7.js";
import {
  once
} from "./chunk-XS3SQPWF.js";
import {
  socialAuthOptions
} from "./chunk-ZZUP7G4V.js";
import {
  prepareContractCall
} from "./chunk-HEMRZHKU.js";
import {
  toSerializableTransaction
} from "./chunk-SYRCOOVG.js";
import {
  getBytecode
} from "./chunk-NB244MAJ.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  getAddress
} from "./chunk-6WE3JIZ5.js";
import {
  randomBytesHex
} from "./chunk-YIVCHQGZ.js";
import {
  ethereum
} from "./chunk-NP7PJWRI.js";
import {
  getCachedChain
} from "./chunk-CYZDLLAL.js";

// node_modules/thirdweb/dist/esm/extensions/erc7702/__generated__/MinimalAccount/write/execute.js
var FN_SELECTOR = "0x3f707e6b";
var FN_INPUTS = [
  {
    components: [
      {
        name: "target",
        type: "address"
      },
      {
        name: "value",
        type: "uint256"
      },
      {
        name: "data",
        type: "bytes"
      }
    ],
    name: "calls",
    type: "tuple[]"
  }
];
var FN_OUTPUTS = [];
function execute(options) {
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
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    nonce: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.nonce;
    },
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.calls];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    }
  });
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/eip7702/minimal-account.js
var MINIMAL_ACCOUNT_IMPLEMENTATION_ADDRESS = "0xD6999651Fc0964B9c6B444307a0ab20534a66560";
var create7702MinimalAccount = (args) => {
  const { client, adminAccount, sponsorGas } = args;
  const _sendTxWithAuthorization = async (txs) => {
    var _a;
    const firstTx = txs[0];
    if (!firstTx) {
      throw new Error("No transactions provided");
    }
    const chain = getCachedChain(firstTx.chainId);
    const eoaContract = getContract({
      address: adminAccount.address,
      chain,
      client
    });
    let authorization;
    const isMinimalAccount = await is7702MinimalAccount(eoaContract);
    if (!isMinimalAccount) {
      const nonce = firstTx.nonce ? BigInt(firstTx.nonce) + (sponsorGas ? 0n : 1n) : 0n;
      const auth = await ((_a = adminAccount.signAuthorization) == null ? void 0 : _a.call(adminAccount, {
        address: MINIMAL_ACCOUNT_IMPLEMENTATION_ADDRESS,
        chainId: firstTx.chainId,
        nonce
      }));
      if (!auth) {
        throw new Error("Failed to sign authorization");
      }
      authorization = auth;
    }
    if (sponsorGas) {
      const wrappedCalls = {
        calls: txs.map((tx) => ({
          data: tx.data ?? "0x",
          // will throw if undefined address
          target: getAddress(tx.to ?? ""),
          value: tx.value ?? 0n
        })),
        uid: randomBytesHex()
      };
      const signature = await adminAccount.signTypedData({
        domain: {
          chainId: firstTx.chainId,
          name: "MinimalAccount",
          verifyingContract: eoaContract.address,
          version: "1"
        },
        message: wrappedCalls,
        primaryType: "WrappedCalls",
        types: {
          Call: [
            { name: "target", type: "address" },
            { name: "value", type: "uint256" },
            { name: "data", type: "bytes" }
          ],
          WrappedCalls: [
            { name: "calls", type: "Call[]" },
            { name: "uid", type: "bytes32" }
          ]
        }
      });
      const result = await executeWithSignature({
        authorization,
        eoaAddress: getAddress(adminAccount.address),
        options: {
          chain: getCachedChain(firstTx.chainId),
          client
        },
        signature,
        wrappedCalls
      });
      const transactionHash = await waitForTransactionHash({
        options: {
          chain: getCachedChain(firstTx.chainId),
          client
        },
        transactionId: result.transactionId
      });
      return {
        transactionHash
      };
    }
    const executeTx = execute({
      calls: txs.map((tx) => ({
        data: tx.data ?? "0x",
        target: tx.to ?? "",
        value: tx.value ?? 0n
      })),
      contract: eoaContract,
      overrides: {
        authorizationList: authorization ? [authorization] : void 0,
        value: txs.reduce((acc, tx) => acc + (tx.value ?? 0n), 0n)
      }
    });
    const serializedTx = await toSerializableTransaction({
      from: adminAccount.address,
      transaction: executeTx
    });
    return adminAccount.sendTransaction(serializedTx);
  };
  const minimalAccount = {
    address: adminAccount.address,
    sendBatchTransaction: async (txs) => {
      return _sendTxWithAuthorization(txs);
    },
    sendTransaction: async (tx) => {
      return _sendTxWithAuthorization([tx]);
    },
    signMessage: ({ message, originalMessage, chainId }) => adminAccount.signMessage({ chainId, message, originalMessage }),
    signTypedData: (_typedData) => adminAccount.signTypedData(_typedData)
  };
  return minimalAccount;
};
async function is7702MinimalAccount(eoaContract) {
  const code = await getBytecode(eoaContract);
  const isDelegated = code.length > 0 && code.startsWith("0xef0100");
  const target = `0x${code.slice(8, 48)}`;
  return isDelegated && target.toLowerCase() === MINIMAL_ACCOUNT_IMPLEMENTATION_ADDRESS.toLowerCase();
}
async function waitForTransactionHash(args) {
  const timeout = args.timeoutMs || 12e4;
  const interval = args.intervalMs || 1e3;
  const endtime = Date.now() + timeout;
  while (Date.now() < endtime) {
    const result = await getQueuedTransactionHash({
      options: args.options,
      transactionId: args.transactionId
    });
    if (result.transactionHash) {
      return result.transactionHash;
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  throw new Error(`Timeout waiting for transaction to be mined on chain ${args.options.chain.id} with transactionId: ${args.transactionId}`);
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/index.js
function isInAppWallet(wallet) {
  return wallet.id === "inApp" || wallet.id === "embedded";
}
async function connectInAppWallet(options, createOptions, connector) {
  var _a, _b, _c, _d;
  if (
    // if auth mode is not specified, the default is popup
    ((_a = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _a.mode) !== "popup" && ((_b = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _b.mode) !== void 0 && connector.authenticateWithRedirect
  ) {
    const strategy = options.strategy;
    if (socialAuthOptions.includes(strategy)) {
      await connector.authenticateWithRedirect(strategy, (_c = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _c.mode, (_d = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _d.redirectUrl);
    }
  }
  const authResult = await connector.connect(options);
  const authAccount = authResult.user.account;
  return createInAppAccount({
    authAccount,
    client: options.client,
    createOptions,
    desiredChain: options.chain
  });
}
async function autoConnectInAppWallet(options, createOptions, connector) {
  if (options.authResult && connector.loginWithAuthToken) {
    await connector.loginWithAuthToken(options.authResult);
  }
  const user = await getAuthenticatedUser(connector);
  if (!user) {
    throw new Error("Failed to authenticate user.");
  }
  const authAccount = user.account;
  return createInAppAccount({
    authAccount,
    client: options.client,
    createOptions,
    desiredChain: options.chain
  });
}
async function convertToSmartAccount(options) {
  const { connectSmartAccount } = await import("./smart-FHMEDT5Q.js");
  return connectSmartAccount({
    chain: options.chain,
    client: options.client,
    personalAccount: options.authAccount
  }, options.smartAccountOptions);
}
async function getAuthenticatedUser(connector) {
  const user = await connector.getUser();
  switch (user.status) {
    case "Logged In, Wallet Initialized": {
      return user;
    }
  }
  return void 0;
}
async function createInAppAccount(options) {
  const { createOptions, authAccount, desiredChain, client } = options;
  let smartAccountOptions;
  let eip7702;
  const executionMode = createOptions && "executionMode" in createOptions ? createOptions.executionMode : void 0;
  if (executionMode) {
    if (executionMode.mode === "EIP4337") {
      smartAccountOptions = executionMode.smartAccount;
    } else if (executionMode.mode === "EIP7702") {
      eip7702 = executionMode;
    }
  }
  if (createOptions && "smartAccount" in createOptions && (createOptions == null ? void 0 : createOptions.smartAccount)) {
    smartAccountOptions = createOptions.smartAccount;
  }
  if (smartAccountOptions) {
    const [account, chain] = await convertToSmartAccount({
      authAccount,
      chain: desiredChain,
      client,
      smartAccountOptions
    });
    return { account, adminAccount: authAccount, chain };
  }
  if (eip7702) {
    const chain = desiredChain;
    if (!chain) {
      throw new Error("Chain is required for EIP-7702 execution, pass a chain when connecting the inAppWallet.");
    }
    const account = create7702MinimalAccount({
      adminAccount: authAccount,
      client,
      sponsorGas: eip7702.sponsorGas
    });
    return {
      account,
      adminAccount: authAccount,
      chain
    };
  }
  return { account: authAccount, chain: desiredChain || ethereum };
}

export {
  isInAppWallet,
  connectInAppWallet,
  autoConnectInAppWallet
};
//# sourceMappingURL=chunk-CUXYKA5K.js.map
