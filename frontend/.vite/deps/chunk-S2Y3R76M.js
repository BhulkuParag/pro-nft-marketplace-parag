import {
  $s
} from "./chunk-53G7QH6O.js";
import {
  DEFAULT_PROJECT_ID
} from "./chunk-XB34LHR5.js";
import {
  ClientScopedStorage
} from "./chunk-CYVKJMZE.js";
import {
  getDefaultAppMetadata
} from "./chunk-7TFKVTFH.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-store.js
var walletConnectSessions;
async function getSessions() {
  if (!walletConnectSessions) {
    return [];
  }
  const stringifiedSessions = await walletConnectSessions.getWalletConnectSessions();
  return JSON.parse(stringifiedSessions ?? "[]");
}
function initializeSessionStore(options) {
  if (!walletConnectSessions) {
    walletConnectSessions = new ClientScopedStorage({
      clientId: options.clientId,
      // TODO: inject storage
      storage: null
    });
  }
}
async function saveSession(session) {
  if (!walletConnectSessions) {
    return;
  }
  const stringifiedSessions = await walletConnectSessions.getWalletConnectSessions();
  const sessions = JSON.parse(stringifiedSessions ?? "[]");
  sessions.push(session);
  await walletConnectSessions.saveWalletConnectSessions(stringify(sessions));
}
async function removeSession(session) {
  if (!walletConnectSessions) {
    return;
  }
  const stringifiedSessions = await walletConnectSessions.getWalletConnectSessions();
  const sessions = JSON.parse(stringifiedSessions ?? "[]");
  const newSessions = sessions.filter((s) => s.topic !== session.topic);
  await walletConnectSessions.saveWalletConnectSessions(stringify(newSessions));
}

// node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/index.js
var walletConnectClientCache = /* @__PURE__ */ new WeakMap();
async function createWalletConnectClient(options) {
  var _a, _b, _c, _d;
  const { wallet, requestHandlers, onConnect, onDisconnect, client: thirdwebClient } = options;
  const chains = (() => {
    if (options.chains && options.chains.length > 10) {
      console.warn("WalletConnect: Can specify no more than 10 chains, truncating to the first 10 provided chains...");
      return options.chains.slice(0, 10);
    }
    return options.chains;
  })();
  if (walletConnectClientCache.has(thirdwebClient)) {
    return walletConnectClientCache.get(thirdwebClient);
  }
  initializeSessionStore({ clientId: options.client.clientId });
  const defaults = getDefaultAppMetadata();
  const walletConnectClient = await $s.init({
    metadata: {
      description: ((_a = options.appMetadata) == null ? void 0 : _a.description) ?? defaults.description,
      icons: [((_b = options.appMetadata) == null ? void 0 : _b.logoUrl) ?? defaults.logoUrl],
      name: ((_c = options.appMetadata) == null ? void 0 : _c.name) ?? defaults.name,
      url: ((_d = options.appMetadata) == null ? void 0 : _d.url) ?? defaults.url
    },
    projectId: options.projectId ?? DEFAULT_PROJECT_ID
  });
  walletConnectClient.on("session_proposal", async (event) => {
    const { onSessionProposal } = await import("./session-proposal-EXIBQQ6U.js");
    await onSessionProposal({
      chains,
      event,
      onConnect,
      wallet,
      walletConnectClient
    }).catch((error) => {
      if (options.onError) {
        options.onError(error);
      } else {
        throw error;
      }
    });
  });
  walletConnectClient.on("session_request", async (event) => {
    const { fulfillRequest } = await import("./session-request-WXC7EHTB.js");
    await fulfillRequest({
      event,
      handlers: requestHandlers,
      thirdwebClient,
      wallet,
      walletConnectClient
    }).catch((error) => {
      if (options.onError) {
        options.onError(error);
      } else {
        throw error;
      }
    });
  });
  walletConnectClient.on("session_event", async (_event) => {
  });
  walletConnectClient.on("session_ping", (_event) => {
  });
  walletConnectClient.on("session_delete", async (event) => {
    await disconnectWalletConnectSession({
      session: { topic: event.topic },
      walletConnectClient
    }).catch((error) => {
      if (options.onError) {
        options.onError(error);
      } else {
        throw error;
      }
    });
  });
  const _disconnect = walletConnectClient.disconnect;
  walletConnectClient.disconnect = async (args) => {
    const result = await _disconnect(args).catch(() => {
    });
    if (onDisconnect) {
      disconnectHook({ onDisconnect, topic: args.topic });
    }
    return result;
  };
  walletConnectClientCache.set(options.client, walletConnectClient);
  return walletConnectClient;
}
function createWalletConnectSession(options) {
  const { uri, walletConnectClient } = options;
  walletConnectClient.core.pairing.pair({ uri });
}
async function getActiveWalletConnectSessions() {
  return getSessions();
}
async function disconnectWalletConnectSession(options) {
  removeSession(options.session);
  try {
    await options.walletConnectClient.disconnect({
      reason: {
        code: 6e3,
        message: "Disconnected"
      },
      topic: options.session.topic
    });
  } catch {
  }
}
async function disconnectHook(options) {
  const { topic, onDisconnect } = options;
  const sessions = await getSessions();
  onDisconnect(sessions.find((s) => s.topic === topic) ?? {
    topic
  });
}

export {
  getSessions,
  saveSession,
  createWalletConnectClient,
  createWalletConnectSession,
  getActiveWalletConnectSessions,
  disconnectWalletConnectSession
};
//# sourceMappingURL=chunk-S2Y3R76M.js.map
