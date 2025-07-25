import {
  createInAppWallet,
  createWalletEmitter,
  trackConnect
} from "./chunk-DCLPAO4I.js";
import {
  isEcosystemWallet
} from "./chunk-OUUVSEDB.js";
import {
  webLocalStorage
} from "./chunk-HEWP63HK.js";
import {
  COINBASE,
  METAMASK,
  getCoinbaseWebProvider
} from "./chunk-ZX53QXGD.js";
import {
  getValidPublicRPCUrl,
  normalizeChainId
} from "./chunk-44OJ64LI.js";
import {
  isBrowser
} from "./chunk-7TFKVTFH.js";
import {
  parseTypedData
} from "./chunk-BSFH3SFE.js";
import {
  getDefaultAccountFactory
} from "./chunk-VRHOYTMZ.js";
import {
  isContractDeployed
} from "./chunk-EMWJKMEZ.js";
import {
  isZkSyncChain
} from "./chunk-7RUSW4Y7.js";
import {
  isInsufficientFundsError,
  trackInsufficientFundsError,
  trackTransaction
} from "./chunk-WBXICRL6.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  getAddress
} from "./chunk-6WE3JIZ5.js";
import {
  getTypesForEIP712Domain,
  serializeTypedData,
  validateTypedData
} from "./chunk-QMJBBKA5.js";
import {
  numberToHex,
  stringToHex,
  uint8ArrayToHex
} from "./chunk-AT6CAMHI.js";
import {
  getCachedChain,
  getCachedChainIfExists,
  getChainMetadata
} from "./chunk-CYZDLLAL.js";
import {
  detectOS
} from "./chunk-P7ZDTV2E.js";

// node_modules/mipd/dist/esm/utils.js
function requestProviders(listener) {
  if (typeof window === "undefined")
    return;
  const handler = (event) => listener(event.detail);
  window.addEventListener("eip6963:announceProvider", handler);
  window.dispatchEvent(new CustomEvent("eip6963:requestProvider"));
  return () => window.removeEventListener("eip6963:announceProvider", handler);
}

// node_modules/mipd/dist/esm/store.js
function createStore() {
  const listeners = /* @__PURE__ */ new Set();
  let providerDetails = [];
  const request = () => requestProviders((providerDetail) => {
    if (providerDetails.some(({ info }) => info.uuid === providerDetail.info.uuid))
      return;
    providerDetails = [...providerDetails, providerDetail];
    listeners.forEach((listener) => listener(providerDetails, { added: [providerDetail] }));
  });
  let unwatch = request();
  return {
    _listeners() {
      return listeners;
    },
    clear() {
      listeners.forEach((listener) => listener([], { removed: [...providerDetails] }));
      providerDetails = [];
    },
    destroy() {
      this.clear();
      listeners.clear();
      unwatch == null ? void 0 : unwatch();
    },
    findProvider({ rdns }) {
      return providerDetails.find((providerDetail) => providerDetail.info.rdns === rdns);
    },
    getProviders() {
      return providerDetails;
    },
    reset() {
      this.clear();
      unwatch == null ? void 0 : unwatch();
      unwatch = request();
    },
    subscribe(listener, { emitImmediately } = {}) {
      listeners.add(listener);
      if (emitImmediately)
        listener(providerDetails, { added: providerDetails });
      return () => listeners.delete(listener);
    }
  };
}

// node_modules/thirdweb/dist/esm/utils/web/isMobile.js
function isAndroid() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const os = detectOS(navigator.userAgent);
  return os ? os.toLowerCase().includes("android") : false;
}
function isIOS() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const os = detectOS(navigator.userAgent);
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}
function isMobile() {
  return isAndroid() || isIOS();
}

// node_modules/thirdweb/dist/esm/utils/web/openWindow.js
function openWindow(uri) {
  const isInsideIframe = window !== window.top;
  if (isInsideIframe) {
    window.open(uri);
  } else {
    if (uri.startsWith("http")) {
      const link = document.createElement("a");
      link.href = uri;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.click();
    } else {
      window.location.href = uri;
    }
  }
}

// node_modules/thirdweb/dist/esm/wallets/coinbase/coinbase-wallet.js
function coinbaseWalletSDK(args) {
  const { createOptions } = args;
  const emitter = createWalletEmitter();
  let account;
  let chain;
  function reset() {
    account = void 0;
    chain = void 0;
  }
  let handleDisconnect = async () => {
  };
  let handleSwitchChain = async (newChain) => {
    chain = newChain;
  };
  const unsubscribeChainChanged = emitter.subscribe("chainChanged", (newChain) => {
    chain = newChain;
  });
  const unsubscribeDisconnect = emitter.subscribe("disconnect", () => {
    reset();
    unsubscribeChainChanged();
    unsubscribeDisconnect();
  });
  emitter.subscribe("accountChanged", (_account) => {
    account = _account;
  });
  return {
    autoConnect: async (options) => {
      const { autoConnectCoinbaseWalletSDK } = await import("./coinbase-web-ASSCYQ4P.js");
      const provider = await args.providerFactory();
      const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectCoinbaseWalletSDK(options, emitter, provider);
      account = connectedAccount;
      chain = connectedChain;
      handleDisconnect = doDisconnect;
      handleSwitchChain = doSwitchChain;
      trackConnect({
        chainId: chain.id,
        client: options.client,
        walletAddress: account.address,
        walletType: COINBASE
      });
      return account;
    },
    connect: async (options) => {
      const { connectCoinbaseWalletSDK } = await import("./coinbase-web-ASSCYQ4P.js");
      const provider = await args.providerFactory();
      const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectCoinbaseWalletSDK(options, emitter, provider);
      account = connectedAccount;
      chain = connectedChain;
      handleDisconnect = doDisconnect;
      handleSwitchChain = doSwitchChain;
      trackConnect({
        chainId: chain.id,
        client: options.client,
        walletAddress: account.address,
        walletType: COINBASE
      });
      return account;
    },
    disconnect: async () => {
      reset();
      await handleDisconnect();
    },
    getAccount: () => account,
    getChain() {
      if (!chain) {
        return void 0;
      }
      chain = getCachedChainIfExists(chain.id) || chain;
      return chain;
    },
    getConfig: () => createOptions,
    id: COINBASE,
    onConnectRequested: async () => {
      var _a;
      if (args.onConnectRequested) {
        const provider = await args.providerFactory();
        return (_a = args.onConnectRequested) == null ? void 0 : _a.call(args, provider);
      }
    },
    subscribe: emitter.subscribe,
    switchChain: async (newChain) => {
      await handleSwitchChain(newChain);
    }
  };
}

// node_modules/thirdweb/dist/esm/wallets/in-app/web/ecosystem.js
function ecosystemWallet(...args) {
  const [ecosystemId, createOptions] = args;
  const ecosystem = {
    id: ecosystemId,
    partnerId: createOptions == null ? void 0 : createOptions.partnerId
  };
  return createInAppWallet({
    connectorFactory: async (client) => {
      const { InAppWebConnector } = await import("./web-connector-RIT7LNZO.js");
      return new InAppWebConnector({
        client,
        ecosystem,
        storage: createOptions == null ? void 0 : createOptions.storage
      });
    },
    createOptions: {
      auth: {
        ...createOptions == null ? void 0 : createOptions.auth,
        options: []
        // controlled by ecosystem
      },
      partnerId: ecosystem.partnerId
    },
    ecosystem
  });
}

// node_modules/thirdweb/dist/esm/wallets/in-app/web/in-app.js
function inAppWallet(createOptions) {
  return createInAppWallet({
    connectorFactory: async (client) => {
      var _a;
      const { InAppWebConnector } = await import("./web-connector-RIT7LNZO.js");
      return new InAppWebConnector({
        client,
        passkeyDomain: (_a = createOptions == null ? void 0 : createOptions.auth) == null ? void 0 : _a.passkeyDomain,
        storage: createOptions == null ? void 0 : createOptions.storage
      });
    },
    createOptions
  });
}

// node_modules/thirdweb/dist/esm/wallets/injected/index.js
function getInjectedProvider(walletId) {
  const provider = injectedProvider(walletId);
  if (!provider) {
    throw new Error(`No injected provider found for wallet: "${walletId}"`);
  }
  return provider;
}
async function connectEip1193Wallet({ id, provider, emitter, client, chain }) {
  var _a, _b;
  let addresses;
  const retries = 3;
  let attempts = 0;
  while (!(addresses == null ? void 0 : addresses[0]) && attempts < retries) {
    try {
      addresses = await provider.request({
        method: "eth_requestAccounts"
      });
    } catch (e) {
      console.error(e);
      if ((_b = (_a = extractErrorMessage(e)) == null ? void 0 : _a.toLowerCase()) == null ? void 0 : _b.includes("rejected")) {
        throw e;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    attempts++;
  }
  const addr = addresses == null ? void 0 : addresses[0];
  if (!addr) {
    throw new Error("Failed to connect to wallet, no accounts available");
  }
  const address = getAddress(addr);
  const chainId = await provider.request({ method: "eth_chainId" }).then(normalizeChainId).catch((e) => {
    throw new Error("Error reading chainId from provider", e);
  });
  let connectedChain = chain && chain.id === chainId ? chain : getCachedChain(chainId);
  try {
    if (chain && typeof chain.id !== "undefined" && chain.id !== chainId) {
      await switchChain(provider, chain);
      connectedChain = chain;
    }
  } catch {
    console.warn(`Error switching to chain ${chain == null ? void 0 : chain.id} - defaulting to wallet chain (${chainId})`);
  }
  return onConnect({
    address,
    chain: connectedChain,
    client,
    emitter,
    id,
    provider
  });
}
async function autoConnectEip1193Wallet({ id, provider, emitter, client, chain }) {
  const addresses = await provider.request({
    method: "eth_accounts"
  });
  const addr = addresses[0];
  if (!addr) {
    throw new Error("Failed to connect to wallet, no accounts available");
  }
  const address = getAddress(addr);
  const chainId = await provider.request({ method: "eth_chainId" }).then(normalizeChainId);
  const connectedChain = chain && chain.id === chainId ? chain : getCachedChain(chainId);
  return onConnect({
    address,
    chain: connectedChain,
    client,
    emitter,
    id,
    provider
  });
}
function createAccount({ provider, address, client, id }) {
  const account = {
    address: getAddress(address),
    async sendTransaction(tx) {
      const gasFees = tx.gasPrice ? {
        gasPrice: tx.gasPrice ? numberToHex(tx.gasPrice) : void 0
      } : {
        maxFeePerGas: tx.maxFeePerGas ? numberToHex(tx.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: tx.maxPriorityFeePerGas ? numberToHex(tx.maxPriorityFeePerGas) : void 0
      };
      const params = [
        {
          ...gasFees,
          accessList: tx.accessList,
          data: tx.data,
          from: this.address,
          gas: tx.gas ? numberToHex(tx.gas) : void 0,
          nonce: tx.nonce ? numberToHex(tx.nonce) : void 0,
          to: tx.to ? getAddress(tx.to) : void 0,
          value: tx.value ? numberToHex(tx.value) : void 0,
          ...tx.eip712
        }
      ];
      try {
        const transactionHash = await provider.request({
          method: "eth_sendTransaction",
          // @ts-expect-error - overriding types here
          params
        });
        trackTransaction({
          chainId: tx.chainId,
          client,
          contractAddress: tx.to ?? void 0,
          gasPrice: tx.gasPrice,
          transactionHash,
          walletAddress: getAddress(address),
          walletType: id
        });
        return {
          transactionHash
        };
      } catch (error) {
        if (isInsufficientFundsError(error)) {
          trackInsufficientFundsError({
            chainId: tx.chainId,
            client,
            contractAddress: tx.to || void 0,
            error,
            transactionValue: tx.value,
            walletAddress: getAddress(address)
          });
        }
        throw error;
      }
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
      return await provider.request({
        method: "personal_sign",
        params: [messageToSign, getAddress(account.address)]
      });
    },
    async signTypedData(typedData) {
      if (!provider || !account.address) {
        throw new Error("Provider not setup");
      }
      const parsedTypedData = parseTypedData(typedData);
      const { domain, message, primaryType } = parsedTypedData;
      const types = {
        EIP712Domain: getTypesForEIP712Domain({ domain }),
        ...parsedTypedData.types
      };
      validateTypedData({ domain, message, primaryType, types });
      const stringifiedData = serializeTypedData({
        domain: domain ?? {},
        message,
        primaryType,
        types
      });
      return await provider.request({
        method: "eth_signTypedData_v4",
        params: [getAddress(account.address), stringifiedData]
      });
    },
    async watchAsset(asset) {
      const result = await provider.request({
        method: "wallet_watchAsset",
        params: asset
      }, { retryCount: 0 });
      return result;
    }
  };
  return account;
}
async function onConnect({ provider, address, chain, emitter, client, id }) {
  const account = createAccount({ address, client, id, provider });
  async function disconnect() {
    provider.removeListener("accountsChanged", onAccountsChanged);
    provider.removeListener("chainChanged", onChainChanged);
    provider.removeListener("disconnect", onDisconnect);
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
        id,
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
  if (provider.on) {
    provider.on("accountsChanged", onAccountsChanged);
    provider.on("chainChanged", onChainChanged);
    provider.on("disconnect", onDisconnect);
  }
  return [
    account,
    chain,
    onDisconnect,
    (newChain) => switchChain(provider, newChain)
  ];
}
async function switchChain(provider, chain) {
  var _a;
  const hexChainId = numberToHex(chain.id);
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: hexChainId }]
    });
  } catch {
    const apiChain = await getChainMetadata(chain);
    await provider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          blockExplorerUrls: (_a = apiChain.explorers) == null ? void 0 : _a.map((x) => x.url),
          chainId: hexChainId,
          chainName: apiChain.name,
          nativeCurrency: apiChain.nativeCurrency,
          // no client id on purpose here
          rpcUrls: getValidPublicRPCUrl(apiChain)
        }
      ]
    });
  }
}
function extractErrorMessage(e) {
  if (e instanceof Error) {
    return e.message;
  }
  if (typeof e === "string") {
    return e;
  }
  if (typeof e === "object" && e !== null) {
    return JSON.stringify(e);
  }
  return String(e);
}

// node_modules/thirdweb/dist/esm/wallets/smart/smart-wallet.js
function smartWallet(createOptions) {
  const emitter = createWalletEmitter();
  let account;
  let adminAccount;
  let chain;
  let lastConnectOptions;
  return {
    autoConnect: async (options) => {
      const { connectSmartAccount: connectSmartWallet } = await import("./smart-FHMEDT5Q.js");
      const [connectedAccount, connectedChain] = await connectSmartWallet(options, createOptions);
      lastConnectOptions = options;
      account = connectedAccount;
      chain = connectedChain;
      trackConnect({
        chainId: chain.id,
        client: options.client,
        walletAddress: account.address,
        walletType: "smart"
      });
      return account;
    },
    connect: async (options) => {
      const { connectSmartAccount } = await import("./smart-FHMEDT5Q.js");
      const [connectedAccount, connectedChain] = await connectSmartAccount(options, createOptions);
      adminAccount = options.personalAccount;
      lastConnectOptions = options;
      account = connectedAccount;
      chain = connectedChain;
      trackConnect({
        chainId: chain.id,
        client: options.client,
        walletAddress: account.address,
        walletType: "smart"
      });
      emitter.emit("accountChanged", account);
      return account;
    },
    disconnect: async () => {
      if (account) {
        const { disconnectSmartAccount } = await import("./smart-FHMEDT5Q.js");
        await disconnectSmartAccount(account);
      }
      account = void 0;
      adminAccount = void 0;
      chain = void 0;
      emitter.emit("disconnect", void 0);
    },
    getAccount: () => account,
    getAdminAccount: () => adminAccount,
    getChain() {
      if (!chain) {
        return void 0;
      }
      chain = getCachedChainIfExists(chain.id) || chain;
      return chain;
    },
    getConfig: () => createOptions,
    id: "smart",
    subscribe: emitter.subscribe,
    switchChain: async (newChain) => {
      var _a;
      if (!lastConnectOptions) {
        throw new Error("Cannot switch chain without a previous connection");
      }
      const isZksyncChain = await isZkSyncChain(newChain);
      if (!isZksyncChain) {
        const factory = getContract({
          address: createOptions.factoryAddress || getDefaultAccountFactory((_a = createOptions.overrides) == null ? void 0 : _a.entrypointAddress),
          chain: newChain,
          client: lastConnectOptions.client
        });
        const isDeployed = await isContractDeployed(factory);
        if (!isDeployed) {
          throw new Error(`Factory contract not deployed on chain: ${newChain.id}`);
        }
      }
      const { connectSmartAccount } = await import("./smart-FHMEDT5Q.js");
      const [connectedAccount, connectedChain] = await connectSmartAccount({ ...lastConnectOptions, chain: newChain }, createOptions);
      account = connectedAccount;
      chain = connectedChain;
      emitter.emit("accountChanged", connectedAccount);
      emitter.emit("chainChanged", connectedChain);
    }
  };
}

// node_modules/thirdweb/dist/esm/wallets/create-wallet.js
function createWallet(...args) {
  const [id, creationOptions] = args;
  switch (true) {
    /**
     * SMART WALLET
     */
    case id === "smart": {
      return smartWallet(creationOptions);
    }
    /**
     * IN-APP WALLET
     */
    case (id === "embedded" || id === "inApp"): {
      return inAppWallet(creationOptions);
    }
    /**
     * ECOSYSTEM WALLET
     */
    case isEcosystemWallet(id):
      return ecosystemWallet(...args);
    /**
     * COINBASE WALLET VIA SDK
     * -> if no injected coinbase found, we'll use the coinbase SDK
     */
    case id === COINBASE: {
      const options = creationOptions;
      return coinbaseWalletSDK({
        createOptions: options,
        onConnectRequested: async (provider) => {
          const { showCoinbasePopup } = await import("./utils-FNNPJHHY.js");
          return showCoinbasePopup(provider);
        },
        providerFactory: () => getCoinbaseWebProvider(options)
      });
    }
    /**
     * WALLET CONNECT AND INJECTED WALLETS + walletConnect standalone
     */
    default: {
      let reset = function() {
        account = void 0;
        chain = void 0;
      };
      const emitter = createWalletEmitter();
      let account;
      let chain;
      let unsubscribeChain;
      let handleDisconnect = async () => {
      };
      const unsubscribeDisconnect = emitter.subscribe("disconnect", () => {
        reset();
        unsubscribeChain == null ? void 0 : unsubscribeChain();
        unsubscribeDisconnect();
      });
      emitter.subscribe("accountChanged", (_account) => {
        account = _account;
      });
      let handleSwitchChain = async () => {
        throw new Error("Not implemented yet");
      };
      const sessionHandler = isMobile() ? (uri) => openWindow(uri) : void 0;
      const wallet = {
        autoConnect: async (options) => {
          const { injectedProvider: injectedProvider2 } = await import("./mipdStore-E2MMMO63.js");
          if (id !== "walletConnect" && injectedProvider2(id)) {
            const { autoConnectEip1193Wallet: autoConnectEip1193Wallet2 } = await import("./injected-DXB7M7U3.js");
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectEip1193Wallet2({
              chain: options.chain,
              client: options.client,
              emitter,
              id,
              provider: getInjectedProvider(id)
            });
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            unsubscribeChain = emitter.subscribe("chainChanged", (newChain) => {
              chain = newChain;
            });
            trackConnect({
              chainId: chain.id,
              client: options.client,
              walletAddress: account.address,
              walletType: id
            });
            return account;
          }
          if (options && "client" in options) {
            const { autoConnectWC } = await import("./controller-TQ3RVW6N.js");
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await autoConnectWC(options, emitter, wallet.id, webLocalStorage, sessionHandler);
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            trackConnect({
              chainId: chain.id,
              client: options.client,
              walletAddress: account.address,
              walletType: id
            });
            return account;
          }
          throw new Error("Failed to auto connect");
        },
        connect: async (options) => {
          async function wcConnect(wcOptions) {
            const { connectWC } = await import("./controller-TQ3RVW6N.js");
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectWC(wcOptions, emitter, wallet.id, webLocalStorage, sessionHandler);
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            trackConnect({
              chainId: chain.id,
              client: wcOptions.client,
              walletAddress: account.address,
              walletType: id
            });
            return account;
          }
          if (id === "walletConnect") {
            const { client, chain: _chain, ...walletConnectOptions } = options;
            return wcConnect({
              chain: _chain,
              client,
              walletConnect: {
                ...walletConnectOptions
              }
            });
          }
          const forceWalletConnectOption = options && "walletConnect" in options;
          const { injectedProvider: injectedProvider2 } = await import("./mipdStore-E2MMMO63.js");
          if (injectedProvider2(id) && !forceWalletConnectOption) {
            const { connectEip1193Wallet: connectEip1193Wallet2 } = await import("./injected-DXB7M7U3.js");
            const [connectedAccount, connectedChain, doDisconnect, doSwitchChain] = await connectEip1193Wallet2({
              chain: options.chain,
              client: options.client,
              emitter,
              id,
              provider: getInjectedProvider(id)
            });
            account = connectedAccount;
            chain = connectedChain;
            handleDisconnect = doDisconnect;
            handleSwitchChain = doSwitchChain;
            unsubscribeChain = emitter.subscribe("chainChanged", (newChain) => {
              chain = newChain;
            });
            trackConnect({
              chainId: chain.id,
              client: options.client,
              walletAddress: account.address,
              walletType: id
            });
            return account;
          }
          if (options && "client" in options) {
            return wcConnect(options);
          }
          throw new Error("Failed to connect");
        },
        // these get overridden in connect and autoConnect
        disconnect: async () => {
          reset();
          await handleDisconnect();
        },
        getAccount: () => account,
        getChain() {
          if (!chain) {
            return void 0;
          }
          chain = getCachedChainIfExists(chain.id) || chain;
          return chain;
        },
        getConfig: () => args[1],
        id,
        subscribe: emitter.subscribe,
        switchChain: (c) => handleSwitchChain(c)
      };
      return wallet;
    }
  }
}

// node_modules/thirdweb/dist/esm/wallets/injected/mipdStore.js
var mipdStore = (() => isBrowser() ? createStore() : void 0)();
function injectedProvider(walletId) {
  const injectedProviderDetail = getInstalledWalletProviders().find((p) => p.info.rdns === walletId);
  return injectedProviderDetail == null ? void 0 : injectedProviderDetail.provider;
}
function getInstalledWallets() {
  const providers = getInstalledWalletProviders();
  const walletIds = providers.map((provider) => provider.info.rdns);
  return walletIds.map((w) => createWallet(w));
}
function getMIPDStore() {
  if (!mipdStore) {
    return void 0;
  }
  return mipdStore;
}
function getInstalledWalletProviders() {
  var _a;
  const providers = ((_a = getMIPDStore()) == null ? void 0 : _a.getProviders()) || [];
  for (const provider of providers) {
    if (provider.info.rdns === "io.metamask.mobile") {
      provider.info.rdns = METAMASK;
      break;
    }
  }
  return providers;
}

export {
  isAndroid,
  isIOS,
  isMobile,
  openWindow,
  smartWallet,
  createWallet,
  injectedProvider,
  getInstalledWallets,
  getInstalledWalletProviders,
  getInjectedProvider,
  connectEip1193Wallet,
  autoConnectEip1193Wallet
};
//# sourceMappingURL=chunk-OZT5CELG.js.map
