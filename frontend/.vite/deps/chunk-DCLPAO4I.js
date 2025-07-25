import {
  getEcosystemInfo
} from "./chunk-KLFYT75S.js";
import {
  track
} from "./chunk-CZLU53MF.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";
import {
  getCachedChain,
  getCachedChainIfExists
} from "./chunk-CYZDLLAL.js";

// node_modules/thirdweb/dist/esm/analytics/track/connect.js
async function trackConnect(args) {
  const { client, ecosystem, walletType, walletAddress, chainId } = args;
  return track({
    client,
    data: {
      action: "connect",
      chainId,
      source: "connectWallet",
      walletAddress,
      walletType
    },
    ecosystem
  });
}

// node_modules/thirdweb/dist/esm/utils/tiny-emitter.js
function createEmitter() {
  const subsribers = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      const subscribers = subsribers.get(event);
      if (subscribers) {
        for (const cb of subscribers) {
          cb(data);
        }
      }
    },
    subscribe(event, cb) {
      var _a;
      if (!subsribers.has(event)) {
        subsribers.set(event, /* @__PURE__ */ new Set([cb]));
      } else {
        (_a = subsribers.get(event)) == null ? void 0 : _a.add(cb);
      }
      return () => {
        const subscribers = subsribers.get(event);
        if (subscribers) {
          subscribers.delete(cb);
        }
      };
    }
  };
}

// node_modules/thirdweb/dist/esm/wallets/wallet-emitter.js
function createWalletEmitter() {
  return createEmitter();
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/in-app-core.js
var connectorCache = /* @__PURE__ */ new Map();
async function getOrCreateInAppWalletConnector(client, connectorFactory, ecosystem) {
  var _a;
  const key = stringify({
    clientId: client.clientId,
    ecosystem,
    partialSecretKey: (_a = client.secretKey) == null ? void 0 : _a.slice(0, 5)
  });
  if (connectorCache.has(key)) {
    return connectorCache.get(key);
  }
  const connector = await connectorFactory(client);
  connectorCache.set(key, connector);
  return connector;
}
function createInAppWallet(args) {
  const { createOptions: _createOptions, connectorFactory, ecosystem } = args;
  const walletId = ecosystem ? ecosystem.id : "inApp";
  const emitter = createWalletEmitter();
  let createOptions = _createOptions;
  let account;
  let adminAccount;
  let chain;
  let client;
  let authToken = null;
  const resolveSmartAccountOptionsFromEcosystem = async (options) => {
    if (ecosystem) {
      const ecosystemOptions = await getEcosystemInfo(ecosystem.id);
      const smartAccountOptions = ecosystemOptions == null ? void 0 : ecosystemOptions.smartAccountOptions;
      if (smartAccountOptions) {
        const executionMode = ecosystemOptions.smartAccountOptions.executionMode;
        if (executionMode === "EIP7702") {
          createOptions = {
            ...createOptions,
            executionMode: {
              mode: "EIP7702",
              sponsorGas: smartAccountOptions.sponsorGas
            }
          };
        } else {
          const { defaultChainId } = ecosystemOptions.smartAccountOptions;
          const preferredChain = options.chain ?? (defaultChainId ? getCachedChain(defaultChainId) : void 0);
          if (!preferredChain) {
            throw new Error(`A chain must be provided either via 'chain' in connect options or 'defaultChainId' in ecosystem configuration. Please pass it via connect() or update the ecosystem configuration.`);
          }
          createOptions = {
            ...createOptions,
            smartAccount: {
              chain: preferredChain,
              factoryAddress: smartAccountOptions.accountFactoryAddress,
              sponsorGas: smartAccountOptions.sponsorGas
            }
          };
        }
      }
    }
  };
  return {
    autoConnect: async (options) => {
      const { autoConnectInAppWallet } = await import("./wallet-G7WVACJL.js");
      const connector = await getOrCreateInAppWalletConnector(options.client, connectorFactory, ecosystem);
      await resolveSmartAccountOptionsFromEcosystem(options);
      const { account: connectedAccount, chain: connectedChain, adminAccount: _adminAccount } = await autoConnectInAppWallet(options, createOptions, connector);
      client = options.client;
      account = connectedAccount;
      adminAccount = _adminAccount;
      chain = connectedChain;
      try {
        authToken = await connector.storage.getAuthCookie();
      } catch (error) {
        console.error("Failed to retrieve auth token:", error);
        authToken = null;
      }
      trackConnect({
        chainId: chain.id,
        client: options.client,
        ecosystem,
        walletAddress: account.address,
        walletType: walletId
      });
      return account;
    },
    connect: async (options) => {
      const { connectInAppWallet } = await import("./wallet-G7WVACJL.js");
      const connector = await getOrCreateInAppWalletConnector(options.client, connectorFactory, ecosystem);
      await resolveSmartAccountOptionsFromEcosystem(options);
      const { account: connectedAccount, chain: connectedChain, adminAccount: _adminAccount } = await connectInAppWallet(options, createOptions, connector);
      client = options.client;
      account = connectedAccount;
      adminAccount = _adminAccount;
      chain = connectedChain;
      try {
        authToken = await connector.storage.getAuthCookie();
      } catch (error) {
        console.error("Failed to retrieve auth token:", error);
        authToken = null;
      }
      trackConnect({
        chainId: chain.id,
        client: options.client,
        ecosystem,
        walletAddress: account.address,
        walletType: walletId
      });
      return account;
    },
    disconnect: async () => {
      if (client) {
        const connector = await getOrCreateInAppWalletConnector(client, connectorFactory, ecosystem);
        const result = await connector.logout();
        if (!result.success) {
          throw new Error("Failed to logout");
        }
      }
      account = void 0;
      adminAccount = void 0;
      chain = void 0;
      authToken = null;
      emitter.emit("disconnect", void 0);
    },
    getAccount: () => account,
    getAdminAccount: () => adminAccount,
    getAuthToken: () => authToken,
    getChain() {
      if (!chain) {
        return void 0;
      }
      chain = getCachedChainIfExists(chain.id) || chain;
      return chain;
    },
    getConfig: () => createOptions,
    id: walletId,
    subscribe: emitter.subscribe,
    switchChain: async (newChain) => {
      var _a;
      if (((createOptions == null ? void 0 : createOptions.smartAccount) || ((_a = createOptions == null ? void 0 : createOptions.executionMode) == null ? void 0 : _a.mode) === "EIP4337") && client && account) {
        const { autoConnectInAppWallet } = await import("./wallet-G7WVACJL.js");
        const connector = await getOrCreateInAppWalletConnector(client, connectorFactory, ecosystem);
        await resolveSmartAccountOptionsFromEcosystem({ chain: newChain });
        const { account: connectedAccount, chain: connectedChain, adminAccount: _adminAccount } = await autoConnectInAppWallet({
          chain: newChain,
          client
        }, createOptions, connector);
        adminAccount = _adminAccount;
        account = connectedAccount;
        chain = connectedChain;
      } else {
        chain = newChain;
      }
      emitter.emit("chainChanged", newChain);
    }
  };
}

export {
  trackConnect,
  createWalletEmitter,
  getOrCreateInAppWalletConnector,
  createInAppWallet
};
//# sourceMappingURL=chunk-DCLPAO4I.js.map
