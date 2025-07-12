import {
  getValidPublicRPCUrl,
  normalizeChainId
} from "./chunk-44OJ64LI.js";
import {
  getDefaultAppMetadata
} from "./chunk-7TFKVTFH.js";
import {
  parseTypedData
} from "./chunk-BSFH3SFE.js";
import {
  showCoinbasePopup
} from "./chunk-2RRVHQYX.js";
import {
  extractEip712DomainTypes,
  serialize,
  validate as validate2
} from "./chunk-HDWEKPHM.js";
import {
  trackTransaction
} from "./chunk-WBXICRL6.js";
import {
  getAddress
} from "./chunk-6WE3JIZ5.js";
import {
  numberToHex,
  stringToHex,
  uint8ArrayToHex
} from "./chunk-AT6CAMHI.js";
import {
  validate2 as validate
} from "./chunk-44GEKRHH.js";
import {
  getCachedChain,
  getChainMetadata
} from "./chunk-CYZDLLAL.js";

// node_modules/thirdweb/dist/esm/wallets/constants.js
var COINBASE = "com.coinbase.wallet";
var METAMASK = "io.metamask";
var RAINBOW = "me.rainbow";
var ZERION = "io.zerion.wallet";

// node_modules/thirdweb/dist/esm/wallets/coinbase/coinbase-web.js
var _provider;
async function getCoinbaseWebProvider(options) {
  var _a, _b;
  if (!_provider) {
    let CoinbaseWalletSDK = (await import("./dist-DHD37URH.js")).default;
    if (typeof CoinbaseWalletSDK !== "function" && typeof CoinbaseWalletSDK.default === "function") {
      CoinbaseWalletSDK = CoinbaseWalletSDK.default;
    }
    const client = new CoinbaseWalletSDK({
      appChainIds: (options == null ? void 0 : options.chains) ? options.chains.map((c) => c.id) : void 0,
      appLogoUrl: ((_a = options == null ? void 0 : options.appMetadata) == null ? void 0 : _a.logoUrl) || getDefaultAppMetadata().logoUrl,
      appName: ((_b = options == null ? void 0 : options.appMetadata) == null ? void 0 : _b.name) || getDefaultAppMetadata().name
    });
    const provider = client.makeWeb3Provider(options == null ? void 0 : options.walletConfig);
    _provider = provider;
    return provider;
  }
  return _provider;
}
function isCoinbaseSDKWallet(wallet) {
  return wallet.id === COINBASE;
}
function createAccount({ provider, address, client }) {
  const account = {
    address: getAddress(address),
    onTransactionRequested: async () => {
      await showCoinbasePopup(provider);
    },
    async sendTransaction(tx) {
      const transactionHash = await provider.request({
        method: "eth_sendTransaction",
        params: [
          {
            accessList: tx.accessList,
            data: tx.data,
            from: getAddress(address),
            gas: tx.gas ? numberToHex(tx.gas) : void 0,
            to: tx.to,
            value: tx.value ? numberToHex(tx.value) : void 0
          }
        ]
      });
      trackTransaction({
        chainId: tx.chainId,
        client,
        contractAddress: tx.to ?? void 0,
        gasPrice: tx.gasPrice,
        transactionHash,
        walletAddress: getAddress(address),
        walletType: COINBASE
      });
      return {
        transactionHash
      };
    },
    async signMessage({ message }) {
      if (!account.address) {
        throw new Error("Provider not setup");
      }
      const messageToSign = (() => {
        if (typeof message === "string") {
          return stringToHex(message);
        }
        if (message.raw instanceof Uint8Array) {
          return uint8ArrayToHex(message.raw);
        }
        return message.raw;
      })();
      const res = await provider.request({
        method: "personal_sign",
        params: [messageToSign, account.address]
      });
      if (!validate(res)) {
        throw new Error("Invalid signature returned");
      }
      return res;
    },
    async signTypedData(typedData) {
      if (!account.address) {
        throw new Error("Provider not setup");
      }
      const { domain, message, primaryType } = parseTypedData(typedData);
      const types = {
        EIP712Domain: extractEip712DomainTypes(domain),
        ...typedData.types
      };
      validate2({ domain, message, primaryType, types });
      const stringifiedData = serialize({
        domain: domain ?? {},
        message,
        primaryType,
        types
      });
      const res = await provider.request({
        method: "eth_signTypedData_v4",
        params: [account.address, stringifiedData]
      });
      if (!validate(res)) {
        throw new Error("Invalid signed payload returned");
      }
      return res;
    }
  };
  return account;
}
function onConnect(address, chain, provider, emitter, client) {
  const account = createAccount({ address, client, provider });
  async function disconnect() {
    provider.removeListener("accountsChanged", onAccountsChanged);
    provider.removeListener("chainChanged", onChainChanged);
    provider.removeListener("disconnect", onDisconnect);
    await provider.disconnect();
  }
  async function onDisconnect() {
    disconnect();
    emitter.emit("disconnect", void 0);
  }
  function onAccountsChanged(accounts) {
    if (accounts[0]) {
      const newAccount = createAccount({
        address: getAddress(accounts[0]),
        client,
        provider
      });
      emitter.emit("accountChanged", newAccount);
      emitter.emit("accountsChanged", accounts);
    } else {
      onDisconnect();
    }
  }
  function onChainChanged(newChainId) {
    const newChain = getCachedChain(normalizeChainId(newChainId));
    emitter.emit("chainChanged", newChain);
  }
  provider.on("accountsChanged", onAccountsChanged);
  provider.on("chainChanged", onChainChanged);
  provider.on("disconnect", onDisconnect);
  return [
    account,
    chain,
    onDisconnect,
    (newChain) => switchChainCoinbaseWalletSDK(provider, newChain)
  ];
}
async function connectCoinbaseWalletSDK(options, emitter, provider) {
  const accounts = await provider.request({
    method: "eth_requestAccounts"
  });
  if (!accounts[0]) {
    throw new Error("No accounts found");
  }
  const address = getAddress(accounts[0]);
  const connectedChainId = await provider.request({
    method: "eth_chainId"
  });
  const chainId = normalizeChainId(connectedChainId);
  let chain = options.chain && options.chain.id === chainId ? options.chain : getCachedChain(chainId);
  if (chainId && (options == null ? void 0 : options.chain) && chainId !== (options == null ? void 0 : options.chain.id)) {
    await switchChainCoinbaseWalletSDK(provider, options.chain);
    chain = options.chain;
  }
  return onConnect(address, chain, provider, emitter, options.client);
}
async function autoConnectCoinbaseWalletSDK(options, emitter, provider) {
  const addresses = await provider.request({
    method: "eth_accounts"
  });
  const address = addresses[0];
  if (!address) {
    throw new Error("No accounts found");
  }
  const connectedChainId = await provider.request({
    method: "eth_chainId"
  });
  const chainId = normalizeChainId(connectedChainId);
  const chain = options.chain && options.chain.id === chainId ? options.chain : getCachedChain(chainId);
  return onConnect(address, chain, provider, emitter, options.client);
}
async function switchChainCoinbaseWalletSDK(provider, chain) {
  var _a;
  const chainIdHex = numberToHex(chain.id);
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainIdHex }]
    });
  } catch (error) {
    const apiChain = await getChainMetadata(chain);
    if ((error == null ? void 0 : error.code) === 4902) {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            blockExplorerUrls: ((_a = apiChain.explorers) == null ? void 0 : _a.map((x) => x.url)) || [],
            chainId: chainIdHex,
            chainName: apiChain.name,
            nativeCurrency: apiChain.nativeCurrency,
            // no client id on purpose here
            rpcUrls: getValidPublicRPCUrl(apiChain)
          }
        ]
      });
    }
  }
}

export {
  COINBASE,
  METAMASK,
  RAINBOW,
  ZERION,
  getCoinbaseWebProvider,
  isCoinbaseSDKWallet,
  connectCoinbaseWalletSDK,
  autoConnectCoinbaseWalletSDK
};
//# sourceMappingURL=chunk-ZX53QXGD.js.map
