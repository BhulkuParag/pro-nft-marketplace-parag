import {
  signLoginPayload
} from "./chunk-RYWEPOMH.js";
import {
  getLoginCallbackUrl,
  getLoginUrl,
  loginWithOauth,
  loginWithOauthRedirect
} from "./chunk-LWVDNX4F.js";
import "./chunk-ZZUP7G4V.js";
import {
  ClientScopedStorage,
  IN_APP_WALLET_PATH
} from "./chunk-CYVKJMZE.js";
import {
  webLocalStorage
} from "./chunk-HEWP63HK.js";
import {
  parseTypedData
} from "./chunk-BSFH3SFE.js";
import {
  sleep
} from "./chunk-4OCU6WGG.js";
import {
  eth_sendRawTransaction
} from "./chunk-MWAIX6LF.js";
import {
  trackTransaction
} from "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import {
  getAddress
} from "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import {
  bytesToHex
} from "./chunk-DJWGHHK5.js";
import "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";
import {
  randomBytesHex
} from "./chunk-YIVCHQGZ.js";
import {
  hexToString,
  isHex,
  toHex
} from "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import {
  getCachedChain
} from "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import {
  getClientFetch
} from "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import {
  getThirdwebBaseUrl,
  getThirdwebDomains
} from "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/utils/storage/inMemoryStorage.js
var store = /* @__PURE__ */ new Map();
var inMemoryStorage = {
  getItem: async (key) => {
    return store.get(key) ?? null;
  },
  removeItem: async (key) => {
    store.delete(key);
  },
  setItem: async (key, value) => {
    store.set(key, value);
  }
};

// node_modules/thirdweb/dist/esm/wallets/in-app/core/actions/get-enclave-user-status.js
async function getUserStatus({ authToken, client, ecosystem }) {
  const clientFetch = getClientFetch(client, ecosystem);
  const response = await clientFetch(`${getThirdwebBaseUrl("inAppWallet")}/api/2024-05-05/accounts`, {
    headers: {
      Authorization: `Bearer embedded-wallet-token:${authToken}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  });
  if (!response.ok) {
    const result = await response.text().catch(() => {
      return "Unknown error";
    });
    throw new Error(`Failed to get user info: ${result}`);
  }
  return await response.json();
}

// node_modules/thirdweb/dist/esm/wallets/in-app/native/helpers/constants.js
var AUTH_SHARE_ID = 3;
var AUTH_SHARE_INDEX = AUTH_SHARE_ID - 1;
var DEVICE_SHARE_ID = 1;
var DEVICE_SHARE_INDEX = DEVICE_SHARE_ID - 1;
var RECOVERY_SHARE_ID = 2;
var RECOVERY_SHARE_INDEX = RECOVERY_SHARE_ID - 1;
var AWS_REGION = "us-west-2";
var COGNITO_USER_POOL_ID = "us-west-2_UFwLcZIpq";
var DOMAIN_URL_2023 = getThirdwebBaseUrl("inAppWallet");
var BASE_URL_2023 = `${DOMAIN_URL_2023}/`;
var ROUTE_2023_10_20_API_BASE_PATH = `${BASE_URL_2023}api/2023-10-20`;
var ROUTE_2024_05_05_API_BASE_PATH = `${BASE_URL_2023}api/2024-05-05`;
var ROUTE_EMBEDDED_WALLET_DETAILS = `${ROUTE_2023_10_20_API_BASE_PATH}/embedded-wallet/embedded-wallet-user-details`;
var ROUTE_COGNITO_IDENTITY_POOL_URL = `cognito-idp.${AWS_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}`;
var ROUTE_STORE_USER_SHARES = `${ROUTE_2023_10_20_API_BASE_PATH}/embedded-wallet/embedded-wallet-shares`;
var ROUTE_GET_USER_SHARES = `${ROUTE_2023_10_20_API_BASE_PATH}/embedded-wallet/embedded-wallet-shares`;
var ROUTE_VERIFY_THIRDWEB_CLIENT_ID = `${ROUTE_2023_10_20_API_BASE_PATH}/embedded-wallet/verify-thirdweb-client-id`;
var ROUTE_AUTH_JWT_CALLBACK = `${ROUTE_2023_10_20_API_BASE_PATH}/embedded-wallet/validate-custom-jwt`;
var ROUTE_AUTH_ENDPOINT_CALLBACK = `${ROUTE_2023_10_20_API_BASE_PATH}/embedded-wallet/validate-custom-auth-endpoint`;
var ROUTE_AUTH_COGNITO_ID_TOKEN_V1 = `${ROUTE_2023_10_20_API_BASE_PATH}/embedded-wallet/cognito-id-token`;
var ROUTE_AUTH_COGNITO_ID_TOKEN_V2 = `${ROUTE_2024_05_05_API_BASE_PATH}/login/web-token-exchange`;

// node_modules/thirdweb/dist/esm/wallets/in-app/native/helpers/errors.js
var createErrorMessage = (message, error) => {
  if (error instanceof Error) {
    return `${message}: ${error.message}`;
  }
  return `${message}: ${stringify(error)}`;
};

// node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/authEndpoint.js
async function authEndpoint(args) {
  const clientFetch = getClientFetch(args.client, args.ecosystem);
  const res = await clientFetch(ROUTE_AUTH_ENDPOINT_CALLBACK, {
    body: stringify({
      developerClientId: args.client.clientId,
      payload: args.payload
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(`Custom auth endpoint authentication error: ${error.message}`);
  }
  try {
    const { verifiedToken } = await res.json();
    return { storedToken: verifiedToken };
  } catch (e) {
    throw new Error(createErrorMessage("Malformed response from post auth_endpoint authentication", e));
  }
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/backend.js
async function backendAuthenticate(args) {
  const clientFetch = getClientFetch(args.client, args.ecosystem);
  const path = getLoginUrl({
    authOption: "backend",
    client: args.client,
    ecosystem: args.ecosystem
  });
  const res = await clientFetch(`${path}`, {
    body: stringify({
      walletSecret: args.walletSecret
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to generate backend account: ${error}`);
  }
  return await res.json();
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/guest.js
async function guestAuthenticate(args) {
  let sessionId = await args.storage.getGuestSessionId();
  if (!sessionId) {
    sessionId = randomBytesHex(32);
    args.storage.saveGuestSessionId(sessionId);
  }
  const clientFetch = getClientFetch(args.client, args.ecosystem);
  const path = getLoginCallbackUrl({
    authOption: "guest",
    client: args.client,
    ecosystem: args.ecosystem
  });
  const res = await clientFetch(`${path}`, {
    body: stringify({
      sessionId
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to generate guest account: ${res.status} ${res.statusText} ${error}`);
  }
  return await res.json();
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/jwt.js
async function customJwt(args) {
  const clientFetch = getClientFetch(args.client, args.ecosystem);
  const res = await clientFetch(ROUTE_AUTH_JWT_CALLBACK, {
    body: stringify({
      developerClientId: args.client.clientId,
      jwt: args.jwt
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(`JWT authentication error: ${error.message}`);
  }
  try {
    const { verifiedToken } = await res.json();
    return { storedToken: verifiedToken };
  } catch (e) {
    throw new Error(createErrorMessage("Malformed response from post jwt authentication", e));
  }
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/linkAccount.js
async function linkAccount({ client, ecosystem, tokenToLink, storage }) {
  const clientFetch = getClientFetch(client, ecosystem);
  const IN_APP_URL = getThirdwebBaseUrl("inAppWallet");
  const currentAccountToken = await storage.getAuthCookie();
  if (!currentAccountToken) {
    throw new Error("Failed to link account, no user logged in");
  }
  const headers = {
    Authorization: `Bearer iaw-auth-token:${currentAccountToken}`,
    "Content-Type": "application/json"
  };
  const linkedDetailsResp = await clientFetch(`${IN_APP_URL}/api/2024-05-05/account/connect`, {
    body: stringify({
      accountAuthTokenToConnect: tokenToLink
    }),
    headers,
    method: "POST"
  });
  if (!linkedDetailsResp.ok) {
    const body = await linkedDetailsResp.json();
    throw new Error(body.message || "Failed to link account.");
  }
  const { linkedAccounts } = await linkedDetailsResp.json();
  return linkedAccounts ?? [];
}
async function unlinkAccount({ client, ecosystem, profileToUnlink, allowAccountDeletion = false, storage }) {
  const clientFetch = getClientFetch(client, ecosystem);
  const IN_APP_URL = getThirdwebBaseUrl("inAppWallet");
  const currentAccountToken = await storage.getAuthCookie();
  if (!currentAccountToken) {
    throw new Error("Failed to unlink account, no user logged in");
  }
  const headers = {
    Authorization: `Bearer iaw-auth-token:${currentAccountToken}`,
    "Content-Type": "application/json"
  };
  const linkedDetailsResp = await clientFetch(`${IN_APP_URL}/api/2024-05-05/account/disconnect`, {
    body: stringify({
      allowAccountDeletion,
      details: profileToUnlink.details,
      type: profileToUnlink.type
    }),
    headers,
    method: "POST"
  });
  if (!linkedDetailsResp.ok) {
    const body = await linkedDetailsResp.json();
    throw new Error(body.message || "Failed to unlink account.");
  }
  const { linkedAccounts } = await linkedDetailsResp.json();
  return linkedAccounts ?? [];
}
async function getLinkedProfilesInternal({ client, ecosystem, storage }) {
  const clientFetch = getClientFetch(client, ecosystem);
  const IN_APP_URL = getThirdwebBaseUrl("inAppWallet");
  const currentAccountToken = await storage.getAuthCookie();
  if (!currentAccountToken) {
    throw new Error("Failed to get linked accounts, no user logged in");
  }
  const headers = {
    Authorization: `Bearer iaw-auth-token:${currentAccountToken}`,
    "Content-Type": "application/json"
  };
  const linkedAccountsResp = await clientFetch(`${IN_APP_URL}/api/2024-05-05/accounts`, {
    headers,
    method: "GET"
  });
  if (!linkedAccountsResp.ok) {
    const body = await linkedAccountsResp.json();
    throw new Error(body.message || "Failed to get linked accounts.");
  }
  const { linkedAccounts } = await linkedAccountsResp.json();
  return linkedAccounts ?? [];
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/passkeys.js
function getVerificationPath() {
  return `${getThirdwebBaseUrl("inAppWallet")}/api/2024-05-05/login/passkey/callback`;
}
function getChallengePath(type, username) {
  return `${getThirdwebBaseUrl("inAppWallet")}/api/2024-05-05/login/passkey?type=${type}${username ? `&username=${username}` : ""}`;
}
async function registerPasskey(options) {
  var _a, _b, _c;
  if (!options.passkeyClient.isAvailable()) {
    throw new Error("Passkeys are not available on this device");
  }
  const fetchWithId = getClientFetch(options.client, options.ecosystem);
  const generatedName = options.username ?? generateUsername(options.ecosystem);
  const res = await fetchWithId(getChallengePath("sign-up", generatedName));
  const challengeData = await res.json();
  if (!challengeData.challenge) {
    throw new Error("No challenge received");
  }
  const challenge = challengeData.challenge;
  const registration = await options.passkeyClient.register({
    challenge,
    name: generatedName,
    rp: options.rp
  });
  const customHeaders = {};
  if ((_a = options.ecosystem) == null ? void 0 : _a.partnerId) {
    customHeaders["x-ecosystem-partner-id"] = options.ecosystem.partnerId;
  }
  if ((_b = options.ecosystem) == null ? void 0 : _b.id) {
    customHeaders["x-ecosystem-id"] = options.ecosystem.id;
  }
  const verifRes = await fetchWithId(getVerificationPath(), {
    body: stringify({
      authenticatorData: registration.authenticatorData,
      clientData: registration.clientData,
      credential: {
        algorithm: registration.credential.algorithm,
        publicKey: registration.credential.publicKey
      },
      credentialId: registration.credentialId,
      origin: registration.origin,
      rpId: options.rp.id,
      serverVerificationId: challengeData.serverVerificationId,
      type: "sign-up",
      username: generatedName
    }),
    headers: {
      "Content-Type": "application/json",
      ...customHeaders
    },
    method: "POST"
  });
  const verifData = await verifRes.json();
  if (!verifData || !verifData.storedToken) {
    throw new Error(`Error verifying passkey: ${verifData.message ?? "unknown error"}`);
  }
  await ((_c = options.storage) == null ? void 0 : _c.savePasskeyCredentialId(registration.credentialId));
  return verifData;
}
async function loginWithPasskey(options) {
  var _a, _b, _c, _d;
  if (!options.passkeyClient.isAvailable()) {
    throw new Error("Passkeys are not available on this device");
  }
  const fetchWithId = getClientFetch(options.client, options.ecosystem);
  const [challengeData, credentialId] = await Promise.all([
    fetchWithId(getChallengePath("sign-in")).then((r) => r.json()),
    (_a = options.storage) == null ? void 0 : _a.getPasskeyCredentialId()
  ]);
  if (!challengeData.challenge) {
    throw new Error("No challenge received");
  }
  const challenge = challengeData.challenge;
  const authentication = await options.passkeyClient.authenticate({
    challenge,
    credentialId: credentialId ?? void 0,
    rp: options.rp
  });
  const customHeaders = {};
  if ((_b = options.ecosystem) == null ? void 0 : _b.partnerId) {
    customHeaders["x-ecosystem-partner-id"] = options.ecosystem.partnerId;
  }
  if ((_c = options.ecosystem) == null ? void 0 : _c.id) {
    customHeaders["x-ecosystem-id"] = options.ecosystem.id;
  }
  const verifRes = await fetchWithId(getVerificationPath(), {
    body: stringify({
      authenticatorData: authentication.authenticatorData,
      clientData: authentication.clientData,
      credentialId: authentication.credentialId,
      origin: authentication.origin,
      rpId: options.rp.id,
      serverVerificationId: challengeData.serverVerificationId,
      signature: authentication.signature,
      type: "sign-in"
    }),
    headers: {
      "Content-Type": "application/json",
      ...customHeaders
    },
    method: "POST"
  });
  const verifData = await verifRes.json();
  if (!verifData || !verifData.storedToken) {
    throw new Error(`Error verifying passkey: ${verifData.message ?? "unknown error"}`);
  }
  await ((_d = options.storage) == null ? void 0 : _d.savePasskeyCredentialId(authentication.credentialId));
  return verifData;
}
function generateUsername(ecosystem) {
  return `${(ecosystem == null ? void 0 : ecosystem.id) ?? "wallet"}-${(/* @__PURE__ */ new Date()).toISOString()}`;
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/siwe.js
async function siweAuthenticate(args) {
  const { wallet, chain, client, ecosystem } = args;
  const account = wallet.getAccount() || await wallet.connect({ chain, client });
  const clientFetch = getClientFetch(client, ecosystem);
  const payload = await (async () => {
    const path = getLoginUrl({
      authOption: "wallet",
      client: args.client,
      ecosystem: args.ecosystem
    });
    const res = await clientFetch(`${path}&address=${account.address}&chainId=${chain.id}`);
    if (!res.ok)
      throw new Error("Failed to generate SIWE login payload");
    return await res.json();
  })();
  const { signature } = await signLoginPayload({ account, payload });
  const authResult = await (async () => {
    const path = getLoginCallbackUrl({
      authOption: "wallet",
      client: args.client,
      ecosystem: args.ecosystem
    });
    const res = await clientFetch(`${path}&signature=${signature}&payload=${encodeURIComponent(payload)}`, {
      body: stringify({
        payload,
        signature
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });
    if (!res.ok)
      throw new Error("Failed to verify SIWE signature");
    return await res.json();
  })();
  return authResult;
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/actions/sign-authorization.enclave.js
async function signAuthorization({ client, payload, storage }) {
  const authToken = await storage.getAuthCookie();
  const ecosystem = storage.ecosystem;
  const clientFetch = getClientFetch(client, ecosystem);
  if (!authToken) {
    throw new Error("No auth token found when signing message");
  }
  const body = {
    address: payload.address,
    chainId: payload.chainId,
    nonce: Number(payload.nonce)
  };
  const response = await clientFetch(`${getThirdwebBaseUrl("inAppWallet")}/api/v1/enclave-wallet/sign-authorization`, {
    body: stringify(body),
    headers: {
      Authorization: `Bearer embedded-wallet-token:${authToken}`,
      "Content-Type": "application/json",
      "x-thirdweb-client-id": client.clientId
    },
    method: "POST"
  });
  if (!response.ok) {
    throw new Error(`Failed to sign message - ${response.status} ${response.statusText}`);
  }
  const signedAuthorization = await response.json();
  return signedAuthorization;
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/actions/sign-message.enclave.js
async function signMessage({ client, payload: { message, isRaw, originalMessage, chainId }, storage }) {
  const authToken = await storage.getAuthCookie();
  const ecosystem = storage.ecosystem;
  const clientFetch = getClientFetch(client, ecosystem);
  if (!authToken) {
    throw new Error("No auth token found when signing message");
  }
  const response = await clientFetch(`${getThirdwebBaseUrl("inAppWallet")}/api/v1/enclave-wallet/sign-message`, {
    body: stringify({
      messagePayload: {
        chainId,
        isRaw,
        message,
        originalMessage
      }
    }),
    headers: {
      Authorization: `Bearer embedded-wallet-token:${authToken}`,
      "Content-Type": "application/json",
      "x-thirdweb-client-id": client.clientId
    },
    method: "POST"
  });
  if (!response.ok) {
    throw new Error(`Failed to sign message - ${response.status} ${response.statusText}`);
  }
  const signedMessage = await response.json();
  return signedMessage;
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/actions/sign-transaction.enclave.js
async function signTransaction({ client, payload, storage }) {
  const authToken = await storage.getAuthCookie();
  const ecosystem = storage.ecosystem;
  const clientFetch = getClientFetch(client, ecosystem);
  if (!authToken) {
    throw new Error("No auth token found when signing transaction");
  }
  const response = await clientFetch(`${getThirdwebBaseUrl("inAppWallet")}/api/v1/enclave-wallet/sign-transaction`, {
    body: stringify({
      transactionPayload: payload
    }),
    headers: {
      Authorization: `Bearer embedded-wallet-token:${authToken}`,
      "Content-Type": "application/json",
      "x-thirdweb-client-id": client.clientId
    },
    method: "POST"
  });
  if (!response.ok) {
    throw new Error(`Failed to sign transaction - ${response.status} ${response.statusText}`);
  }
  const signedTransaction = await response.json();
  return signedTransaction.signature;
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/actions/sign-typed-data.enclave.js
async function signTypedData({ client, payload, storage }) {
  const authToken = await storage.getAuthCookie();
  const ecosystem = storage.ecosystem;
  const clientFetch = getClientFetch(client, ecosystem);
  if (!authToken) {
    throw new Error("No auth token found when signing typed data");
  }
  const response = await clientFetch(`${getThirdwebBaseUrl("inAppWallet")}/api/v1/enclave-wallet/sign-typed-data`, {
    body: stringify({
      ...payload
    }),
    headers: {
      Authorization: `Bearer embedded-wallet-token:${authToken}`,
      "Content-Type": "application/json",
      "x-thirdweb-client-id": client.clientId
    },
    method: "POST"
  });
  if (!response.ok) {
    throw new Error(`Failed to sign typed data - ${response.status} ${response.statusText}`);
  }
  const signedTypedData = await response.json();
  return signedTypedData;
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/enclave-wallet.js
var EnclaveWallet = class {
  constructor({ client, ecosystem, address, storage }) {
    Object.defineProperty(this, "client", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ecosystem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "address", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "localStorage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.client = client;
    this.ecosystem = ecosystem;
    this.address = address;
    this.localStorage = storage;
  }
  /**
   * Store the auth token for use
   * @returns `{walletAddress: string }` The user's wallet details
   * @internal
   */
  async postWalletSetUp(authResult) {
    await this.localStorage.saveAuthCookie(authResult.storedToken.cookieString);
  }
  /**
   * Gets the current user's details
   * @internal
   */
  async getUserWalletStatus() {
    var _a, _b;
    const token = await this.localStorage.getAuthCookie();
    if (!token) {
      return { status: "Logged Out" };
    }
    const userStatus = await getUserStatus({
      authToken: token,
      client: this.client,
      ecosystem: this.ecosystem
    });
    if (!userStatus) {
      return { status: "Logged Out" };
    }
    const wallet = userStatus.wallets[0];
    const authDetails = {
      email: (_a = userStatus.linkedAccounts.find((account) => account.details.email !== void 0)) == null ? void 0 : _a.details.email,
      phoneNumber: (_b = userStatus.linkedAccounts.find((account) => account.details.phone !== void 0)) == null ? void 0 : _b.details.phone,
      recoveryShareManagement: "ENCLAVE",
      userWalletId: userStatus.id || ""
    };
    if (!wallet) {
      return {
        authDetails,
        status: "Logged In, Wallet Uninitialized"
      };
    }
    return {
      account: await this.getAccount(),
      authDetails,
      status: "Logged In, Wallet Initialized",
      walletAddress: wallet.address
    };
  }
  /**
   * Returns an account to perform wallet operations
   * @internal
   */
  async getAccount() {
    const client = this.client;
    const storage = this.localStorage;
    const address = this.address;
    const ecosystem = this.ecosystem;
    const _signTransaction = async (tx) => {
      const rpcRequest = getRpcClient({
        chain: getCachedChain(tx.chainId),
        client
      });
      const transaction = {
        chainId: toHex(tx.chainId),
        data: tx.data,
        gas: hexlify(tx.gas),
        nonce: hexlify(tx.nonce) || toHex(await import("./eth_getTransactionCount-WH7XPTXL.js").then(({ eth_getTransactionCount }) => eth_getTransactionCount(rpcRequest, {
          address: getAddress(this.address),
          blockTag: "pending"
        }))),
        to: tx.to ? getAddress(tx.to) : void 0,
        value: hexlify(tx.value)
      };
      if (tx.authorizationList && tx.authorizationList.length > 0) {
        transaction.type = 4;
        transaction.authorizationList = tx.authorizationList;
        transaction.maxFeePerGas = hexlify(tx.maxFeePerGas);
        transaction.maxPriorityFeePerGas = hexlify(tx.maxPriorityFeePerGas);
      } else if (hexlify(tx.maxFeePerGas)) {
        transaction.maxFeePerGas = hexlify(tx.maxFeePerGas);
        transaction.maxPriorityFeePerGas = hexlify(tx.maxPriorityFeePerGas);
        transaction.type = 2;
      } else {
        transaction.gasPrice = hexlify(tx.gasPrice);
        transaction.type = 0;
      }
      return signTransaction({
        client,
        payload: transaction,
        storage
      });
    };
    return {
      address: getAddress(address),
      async sendTransaction(tx) {
        const rpcRequest = getRpcClient({
          chain: getCachedChain(tx.chainId),
          client
        });
        const signedTx = await _signTransaction(tx);
        const transactionHash = await eth_sendRawTransaction(rpcRequest, signedTx);
        trackTransaction({
          chainId: tx.chainId,
          client,
          contractAddress: tx.to ?? void 0,
          ecosystem,
          gasPrice: tx.gasPrice,
          transactionHash,
          walletAddress: address,
          walletType: "inApp"
        });
        return { transactionHash };
      },
      async signAuthorization(payload) {
        const authorization = await signAuthorization({
          client,
          payload,
          storage
        });
        return {
          address: getAddress(authorization.address),
          chainId: Number.parseInt(authorization.chainId),
          nonce: BigInt(authorization.nonce),
          r: BigInt(authorization.r),
          s: BigInt(authorization.s),
          yParity: Number.parseInt(authorization.yParity)
        };
      },
      async signMessage({ message, originalMessage, chainId }) {
        const messagePayload = (() => {
          if (typeof message === "string") {
            return { chainId, isRaw: false, message, originalMessage };
          }
          return {
            chainId,
            isRaw: true,
            message: typeof message.raw === "string" ? message.raw : bytesToHex(message.raw),
            originalMessage
          };
        })();
        const { signature } = await signMessage({
          client,
          payload: messagePayload,
          storage
        });
        return signature;
      },
      async signTransaction(tx) {
        if (!tx.chainId) {
          throw new Error("chainId required in tx to sign");
        }
        return _signTransaction({
          chainId: tx.chainId,
          ...tx
        });
      },
      async signTypedData(_typedData) {
        const parsedTypedData = parseTypedData(_typedData);
        const { signature } = await signTypedData({
          client,
          payload: parsedTypedData,
          storage
        });
        return signature;
      }
    };
  }
};
function hexlify(value) {
  return value === void 0 || isHex(value) ? value : toHex(value);
}

// node_modules/thirdweb/dist/esm/wallets/in-app/web/utils/iFrameCommunication/IframeCommunicator.js
var iframeBaseStyle = {
  backgroundColor: "transparent",
  border: "none",
  colorScheme: "light",
  display: "none",
  height: "100%",
  pointerEvents: "all",
  position: "fixed",
  right: "0px",
  top: "0px",
  width: "100%",
  zIndex: "2147483646"
};
var isIframeLoaded = /* @__PURE__ */ new Map();
var IframeCommunicator = class {
  /**
   * @internal
   */
  constructor({ link, baseUrl, iframeId, container, onIframeInitialize, localStorage, clientId, ecosystem }) {
    Object.defineProperty(this, "iframe", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "POLLING_INTERVAL_SECONDS", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1.4
    });
    Object.defineProperty(this, "iframeBaseUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "localStorage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "clientId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ecosystem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.localStorage = localStorage;
    this.clientId = clientId;
    this.ecosystem = ecosystem;
    this.iframeBaseUrl = baseUrl;
    if (typeof document === "undefined") {
      return;
    }
    container = container ?? document.body;
    let iframe = document.getElementById(iframeId);
    const hrefLink = new URL(link);
    if (!iframe || iframe.src !== hrefLink.href) {
      iframe = document.createElement("iframe");
      const mergedIframeStyles = {
        ...iframeBaseStyle
      };
      Object.assign(iframe.style, mergedIframeStyles);
      iframe.setAttribute("id", iframeId);
      iframe.setAttribute("fetchpriority", "high");
      container.appendChild(iframe);
      iframe.src = hrefLink.href;
      const onIframeLoaded = (event) => {
        if (event.data.eventType === "ewsIframeLoaded") {
          window.removeEventListener("message", onIframeLoaded);
          if (!iframe) {
            console.warn("thirdweb iFrame not found");
            return;
          }
          this.onIframeLoadHandler(iframe, onIframeInitialize)();
        }
      };
      window.addEventListener("message", onIframeLoaded);
    }
    this.iframe = iframe;
  }
  // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
  async onIframeLoadedInitVariables() {
    var _a, _b;
    return {
      authCookie: await this.localStorage.getAuthCookie(),
      clientId: this.clientId,
      deviceShareStored: await this.localStorage.getDeviceShare(),
      ecosystemId: (_a = this.ecosystem) == null ? void 0 : _a.id,
      partnerId: (_b = this.ecosystem) == null ? void 0 : _b.partnerId,
      walletUserId: await this.localStorage.getWalletUserId()
    };
  }
  /**
   * @internal
   */
  onIframeLoadHandler(iframe, onIframeInitialize) {
    return async () => {
      var _a;
      const channel = new MessageChannel();
      const promise = new Promise((res, rej) => {
        channel.port1.onmessage = (event) => {
          const { data } = event;
          channel.port1.close();
          if (!data.success) {
            rej(new Error(data.error));
          }
          isIframeLoaded.set(iframe.src, true);
          if (onIframeInitialize) {
            onIframeInitialize();
          }
          res(true);
        };
      });
      (_a = iframe == null ? void 0 : iframe.contentWindow) == null ? void 0 : _a.postMessage({
        data: await this.onIframeLoadedInitVariables(),
        eventType: "initIframe"
      }, this.iframeBaseUrl, [channel.port2]);
      await promise;
    };
  }
  /**
   * @internal
   */
  async call({ procedureName, params, showIframe = false }) {
    var _a;
    if (!this.iframe) {
      throw new Error("Iframe not found. You are likely calling this from the backend where the DOM is not available.");
    }
    while (!isIframeLoaded.get(this.iframe.src)) {
      await sleep(this.POLLING_INTERVAL_SECONDS * 1e3);
    }
    if (showIframe) {
      this.iframe.style.display = "block";
      await sleep(5e-3 * 1e3);
    }
    const channel = new MessageChannel();
    const promise = new Promise((res, rej) => {
      channel.port1.onmessage = async (event) => {
        const { data } = event;
        channel.port1.close();
        if (showIframe) {
          await sleep(0.1 * 1e3);
          if (this.iframe) {
            this.iframe.style.display = "none";
          }
        }
        if (!data.success) {
          rej(new Error(data.error));
        } else {
          res(data.data);
        }
      };
    });
    (_a = this.iframe.contentWindow) == null ? void 0 : _a.postMessage({
      // Pass the initialization data on every request in case the iframe storage was reset (can happen in some environments such as iOS PWAs)
      data: {
        ...params,
        ...await this.onIframeLoadedInitVariables()
      },
      eventType: procedureName
    }, this.iframeBaseUrl, [channel.port2]);
    return promise;
  }
  /**
   * This has to be called by any iframe that will be removed from the DOM.
   * Use to make sure that we reset the global loaded state of the particular iframe.src
   * @internal
   */
  destroy() {
    if (this.iframe) {
      isIframeLoaded.delete(this.iframe.src);
    }
  }
};

// node_modules/thirdweb/dist/esm/wallets/in-app/web/utils/iFrameCommunication/InAppWalletIframeCommunicator.js
var InAppWalletIframeCommunicator = class extends IframeCommunicator {
  /**
   * @internal
   */
  constructor({ clientId, baseUrl, ecosystem }) {
    super({
      baseUrl,
      clientId,
      container: typeof document === "undefined" ? void 0 : document.body,
      ecosystem,
      iframeId: IN_APP_WALLET_IFRAME_ID + ((ecosystem == null ? void 0 : ecosystem.id) || ""),
      link: createInAppWalletIframeLink({
        baseUrl,
        clientId,
        ecosystem,
        path: IN_APP_WALLET_PATH
      }).href,
      localStorage: new ClientScopedStorage({
        clientId,
        ecosystem,
        storage: webLocalStorage
      })
    });
    this.clientId = clientId;
    this.ecosystem = ecosystem;
  }
};
function createInAppWalletIframeLink({ clientId, baseUrl, path, ecosystem, queryParams }) {
  var _a;
  const inAppWalletUrl = new URL(`${path}`, baseUrl);
  if (queryParams) {
    for (const queryKey of Object.keys(queryParams)) {
      inAppWalletUrl.searchParams.set(queryKey, ((_a = queryParams[queryKey]) == null ? void 0 : _a.toString()) || "");
    }
  }
  inAppWalletUrl.searchParams.set("clientId", clientId);
  if ((ecosystem == null ? void 0 : ecosystem.partnerId) !== void 0) {
    inAppWalletUrl.searchParams.set("partnerId", ecosystem.partnerId);
  }
  if ((ecosystem == null ? void 0 : ecosystem.id) !== void 0) {
    inAppWalletUrl.searchParams.set("ecosystemId", ecosystem.id);
  }
  return inAppWalletUrl;
}
var IN_APP_WALLET_IFRAME_ID = "thirdweb-in-app-wallet-iframe";

// node_modules/thirdweb/dist/esm/wallets/in-app/core/actions/generate-wallet.enclave.js
async function generateWallet({ client, ecosystem, authToken }) {
  const clientFetch = getClientFetch(client, ecosystem);
  const response = await clientFetch(`${getThirdwebBaseUrl("inAppWallet")}/api/v1/enclave-wallet/generate`, {
    headers: {
      Authorization: `Bearer embedded-wallet-token:${authToken}`,
      "Content-Type": "application/json",
      "x-thirdweb-client-id": client.clientId
    },
    method: "POST"
  });
  if (!response.ok) {
    throw new Error(`Failed to generate wallet - ${response.status} ${response.statusText}`);
  }
  const { wallet } = await response.json();
  return wallet;
}

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/abstract-login.js
var AbstractLogin = class {
  /**
   * Used to manage the user's auth states. This should not be instantiated directly.
   * @internal
   */
  constructor({ baseUrl, querier, preLogin, postLogin, client, ecosystem }) {
    Object.defineProperty(this, "LoginQuerier", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "preLogin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "postLogin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "client", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "baseUrl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ecosystem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.baseUrl = baseUrl;
    this.LoginQuerier = querier;
    this.preLogin = preLogin;
    this.postLogin = postLogin;
    this.client = client;
    this.ecosystem = ecosystem;
  }
  /**
   * @internal
   */
  async sendEmailLoginOtp({ email }) {
    const result = await this.LoginQuerier.call({
      params: { email },
      procedureName: "sendThirdwebEmailLoginOtp"
    });
    return result;
  }
  /**
   *
   * @internal
   */
  async sendSmsLoginOtp({ phoneNumber }) {
    const result = await this.LoginQuerier.call({
      params: { phoneNumber },
      procedureName: "sendThirdwebSmsLoginOtp"
    });
    return result;
  }
};

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/base-login.js
var BaseLogin = class extends AbstractLogin {
  async authenticateWithModal() {
    return this.LoginQuerier.call({
      params: void 0,
      procedureName: "loginWithThirdwebModal",
      showIframe: true
    });
  }
  /**
   * @internal
   */
  async loginWithModal() {
    await this.preLogin();
    const result = await this.authenticateWithModal();
    return this.postLogin(result);
  }
  async authenticateWithIframe({ email }) {
    return this.LoginQuerier.call({
      params: { email },
      procedureName: "loginWithThirdwebModal",
      showIframe: true
    });
  }
  /**
   * @internal
   */
  async loginWithIframe({ email }) {
    await this.preLogin();
    const result = await this.authenticateWithIframe({ email });
    return this.postLogin(result);
  }
  async authenticateWithCustomJwt({ encryptionKey, jwt }) {
    if (!encryptionKey || encryptionKey.length === 0) {
      throw new Error("Encryption key is required for custom jwt auth");
    }
    return this.LoginQuerier.call({
      params: { encryptionKey, jwt },
      procedureName: "loginWithCustomJwt"
    });
  }
  /**
   * @internal
   */
  async loginWithCustomJwt({ encryptionKey, jwt }) {
    if (!encryptionKey || encryptionKey.length === 0) {
      throw new Error("Encryption key is required for custom jwt auth");
    }
    await this.preLogin();
    const result = await this.authenticateWithCustomJwt({ encryptionKey, jwt });
    return this.postLogin(result);
  }
  async authenticateWithCustomAuthEndpoint({ encryptionKey, payload }) {
    return this.LoginQuerier.call({
      params: { encryptionKey, payload },
      procedureName: "loginWithCustomAuthEndpoint"
    });
  }
  /**
   * @internal
   */
  async loginWithCustomAuthEndpoint({ encryptionKey, payload }) {
    if (!encryptionKey || encryptionKey.length === 0) {
      throw new Error("Encryption key is required for custom auth");
    }
    await this.preLogin();
    const result = await this.authenticateWithCustomAuthEndpoint({
      encryptionKey,
      payload
    });
    return this.postLogin(result);
  }
  async authenticateWithEmailOtp({ email, otp, recoveryCode }) {
    return this.LoginQuerier.call({
      params: { email, otp, recoveryCode },
      procedureName: "verifyThirdwebEmailLoginOtp"
    });
  }
  /**
   * @internal
   */
  async loginWithEmailOtp({ email, otp, recoveryCode }) {
    const result = await this.authenticateWithEmailOtp({
      email,
      otp,
      recoveryCode
    });
    return this.postLogin(result);
  }
  async authenticateWithSmsOtp({ phoneNumber, otp, recoveryCode }) {
    return this.LoginQuerier.call({
      params: { otp, phoneNumber, recoveryCode },
      procedureName: "verifyThirdwebSmsLoginOtp"
    });
  }
  /**
   * @internal
   */
  async loginWithSmsOtp({ phoneNumber, otp, recoveryCode }) {
    const result = await this.authenticateWithSmsOtp({
      otp,
      phoneNumber,
      recoveryCode
    });
    return this.postLogin(result);
  }
};

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/iframe-auth.js
var Auth = class {
  /**
   * Used to manage the user's auth states. This should not be instantiated directly.
   * @internal
   */
  constructor({ client, querier, onAuthSuccess, ecosystem, baseUrl, localStorage }) {
    Object.defineProperty(this, "client", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ecosystem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "AuthQuerier", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "localStorage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "onAuthSuccess", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "BaseLogin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.client = client;
    this.ecosystem = ecosystem;
    this.AuthQuerier = querier;
    this.localStorage = localStorage;
    this.onAuthSuccess = onAuthSuccess;
    this.BaseLogin = new BaseLogin({
      baseUrl,
      client,
      ecosystem,
      postLogin: async (result) => {
        return this.postLogin(result);
      },
      preLogin: async () => {
        await this.preLogin();
      },
      querier
    });
  }
  async preLogin() {
    await this.logout();
  }
  async postLogin({ storedToken, walletDetails }) {
    if (storedToken.shouldStoreCookieString) {
      await this.localStorage.saveAuthCookie(storedToken.cookieString);
    }
    const initializedUser = await this.onAuthSuccess({
      storedToken,
      walletDetails
    });
    return initializedUser;
  }
  async loginWithAuthToken(authToken, recoveryCode) {
    var _a;
    if (authToken.storedToken.authProvider !== "Backend") {
      await this.preLogin();
    }
    const user = await getUserStatus({
      authToken: authToken.storedToken.cookieString,
      client: this.client,
      ecosystem: this.ecosystem
    });
    if (!user) {
      throw new Error("Cannot login, no user found for auth token");
    }
    if (user.wallets.length > 0 && ((_a = user.wallets[0]) == null ? void 0 : _a.type) === "enclave") {
      return this.postLogin({
        storedToken: authToken.storedToken,
        walletDetails: {
          walletAddress: user.wallets[0].address
        }
      });
    }
    if (user.wallets.length === 0) {
      const result2 = await generateWallet({
        authToken: authToken.storedToken.cookieString,
        client: this.client,
        ecosystem: this.ecosystem
      });
      return this.postLogin({
        storedToken: authToken.storedToken,
        walletDetails: {
          walletAddress: result2.address
        }
      });
    }
    const result = await this.AuthQuerier.call({
      params: {
        recoveryCode,
        storedToken: authToken.storedToken
      },
      procedureName: "loginWithStoredTokenDetails"
    });
    return this.postLogin(result);
  }
  /**
   * Used to log the user into their thirdweb wallet on your platform via a myriad of auth providers
   * @example
   * ```typescript
   * const thirdwebInAppWallet = new InAppWalletSdk({clientId: "YOUR_CLIENT_ID", chain: "Polygon"})
   * try {
   *   const user = await thirdwebInAppWallet.auth.loginWithModal();
   *   // user is now logged in
   * } catch (e) {
   *   // User closed modal or something else went wrong during the authentication process
   *   console.error(e)
   * }
   * ```
   * @returns `{{user: InitializedUser}}` An InitializedUser object.
   */
  async loginWithModal() {
    return this.BaseLogin.loginWithModal();
  }
  async authenticateWithModal() {
    return this.BaseLogin.authenticateWithModal();
  }
  /**
   * Used to log the user into their thirdweb wallet using email OTP
   * @example
   * ```typescript
   *  // Basic Flow
   *  const thirdwebInAppWallet = new InAppWalletSdk({clientId: "", chain: "Polygon"});
   *  try {
   *    // prompts user to enter the code they received
   *    const user = await thirdwebInAppWallet.auth.loginWithThirdwebEmailOtp({ email : "you@example.com" });
   *    // user is now logged in
   *  } catch (e) {
   *    // User closed the OTP modal or something else went wrong during the authentication process
   *    console.error(e)
   *  }
   * ```
   * @param args - args.email: We will send the email an OTP that needs to be entered in order for them to be logged in.
   * @returns `{{user: InitializedUser}}` An InitializedUser object. See {@link InAppWalletSdk.getUser} for more
   */
  async loginWithIframe(args) {
    return this.BaseLogin.loginWithIframe(args);
  }
  async authenticateWithIframe(args) {
    return this.BaseLogin.authenticateWithIframe(args);
  }
  /**
   * @internal
   */
  async loginWithCustomJwt(args) {
    return this.BaseLogin.loginWithCustomJwt(args);
  }
  async authenticateWithCustomJwt(args) {
    return this.BaseLogin.authenticateWithCustomJwt(args);
  }
  /**
   * @internal
   */
  async loginWithCustomAuthEndpoint(args) {
    return this.BaseLogin.loginWithCustomAuthEndpoint(args);
  }
  async authenticateWithCustomAuthEndpoint(args) {
    return this.BaseLogin.authenticateWithCustomAuthEndpoint(args);
  }
  /**
   * A headless way to send the users at the passed email an OTP code.
   * You need to then call {@link Auth.loginWithEmailOtp} in order to complete the login process
   * @example
   * @param param0.email
   * ```typescript
   *  const thirdwebInAppWallet = new InAppWalletSdk({clientId: "", chain: "Polygon"});
   *  // sends user an OTP code
   * try {
   *    await thirdwebInAppWallet.auth.sendEmailLoginOtp({ email : "you@example.com" });
   * } catch(e) {
   *    // Error Sending user's email an OTP code
   *    console.error(e);
   * }
   *
   * // Then when your user is ready to verify their OTP
   * try {
   *    const user = await thirdwebInAppWallet.auth.verifyEmailLoginOtp({ email: "you@example.com", otp: "6-DIGIT_CODE_HERE" });
   * } catch(e) {
   *    // Error verifying the OTP code
   *    console.error(e)
   * }
   * ```
   * @param param0 - param0.email We will send the email an OTP that needs to be entered in order for them to be logged in.
   * @returns `{{ isNewUser: boolean }}` IsNewUser indicates if the user is a new user to your platform
   * @internal
   */
  async sendEmailLoginOtp({ email }) {
    return this.BaseLogin.sendEmailLoginOtp({
      email
    });
  }
  /**
   * @internal
   */
  async sendSmsLoginOtp({ phoneNumber }) {
    return this.BaseLogin.sendSmsLoginOtp({
      phoneNumber
    });
  }
  /**
   * Used to verify the otp that the user receives from thirdweb
   *
   * See {@link Auth.sendEmailLoginOtp} for how the headless call flow looks like. Simply swap out the calls to `loginWithThirdwebEmailOtp` with `verifyThirdwebEmailLoginOtp`
   * @param args - props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
   * props.otp The code that the user received in their email
   * @returns `{{user: InitializedUser}}` An InitializedUser object containing the user's status, wallet, authDetails, and more
   * @internal
   */
  async loginWithEmailOtp(args) {
    await this.preLogin();
    return this.BaseLogin.loginWithEmailOtp(args);
  }
  async authenticateWithEmailOtp(args) {
    return this.BaseLogin.authenticateWithEmailOtp(args);
  }
  /**
   * @internal
   */
  async loginWithSmsOtp(args) {
    await this.preLogin();
    return this.BaseLogin.loginWithSmsOtp(args);
  }
  async authenticateWithSmsOtp(args) {
    return this.BaseLogin.authenticateWithSmsOtp(args);
  }
  /**
   * Logs any existing user out of their wallet.
   * @returns `{{success: boolean}}` true if a user is successfully logged out. false if there's no user currently logged in.
   * @internal
   */
  async logout() {
    const isRemoveAuthCookie = await this.localStorage.removeAuthCookie();
    const isRemoveUserId = await this.localStorage.removeWalletUserId();
    return {
      success: isRemoveAuthCookie || isRemoveUserId
    };
  }
};

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/otp.js
var sendOtp = async (args) => {
  const { client, ecosystem } = args;
  const url = getLoginUrl({ authOption: args.strategy, client, ecosystem });
  const headers = {
    "Content-Type": "application/json",
    "x-client-id": client.clientId
  };
  if (ecosystem == null ? void 0 : ecosystem.id) {
    headers["x-ecosystem-id"] = ecosystem.id;
  }
  if (ecosystem == null ? void 0 : ecosystem.partnerId) {
    headers["x-ecosystem-partner-id"] = ecosystem.partnerId;
  }
  const body = (() => {
    switch (args.strategy) {
      case "email":
        return {
          email: args.email
        };
      case "phone":
        return {
          phone: args.phoneNumber
        };
    }
  })();
  const response = await fetch(url, {
    body: stringify(body),
    headers,
    method: "POST"
  });
  if (!response.ok) {
    throw new Error("Failed to send verification code");
  }
  return await response.json();
};
var verifyOtp = async (args) => {
  const { client, ecosystem } = args;
  const url = getLoginCallbackUrl({
    authOption: args.strategy,
    client: args.client,
    ecosystem: args.ecosystem
  });
  const headers = {
    "Content-Type": "application/json",
    "x-client-id": client.clientId
  };
  if (ecosystem == null ? void 0 : ecosystem.id) {
    headers["x-ecosystem-id"] = ecosystem.id;
  }
  if (ecosystem == null ? void 0 : ecosystem.partnerId) {
    headers["x-ecosystem-partner-id"] = ecosystem.partnerId;
  }
  const body = (() => {
    switch (args.strategy) {
      case "email":
        return {
          code: args.verificationCode,
          email: args.email
        };
      case "phone":
        return {
          code: args.verificationCode,
          phone: args.phoneNumber
        };
    }
  })();
  const response = await fetch(url, {
    body: stringify(body),
    headers,
    method: "POST"
  });
  if (!response.ok) {
    throw new Error("Failed to verify verification code");
  }
  return await response.json();
};

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/iframe-wallet.js
var IFrameWallet = class {
  /**
   * Not meant to be initialized directly. Call {@link initializeUser} to get an instance
   * @internal
   */
  constructor({ client, ecosystem, querier, localStorage }) {
    Object.defineProperty(this, "client", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ecosystem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "walletManagerQuerier", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "localStorage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.client = client;
    this.ecosystem = ecosystem;
    this.walletManagerQuerier = querier;
    this.localStorage = localStorage;
  }
  /**
   * Used to set-up the user device in the case that they are using incognito
   * @returns `{walletAddress : string }` The user's wallet details
   * @internal
   */
  async postWalletSetUp(authResult) {
    if (authResult.deviceShareStored) {
      await this.localStorage.saveDeviceShare(authResult.deviceShareStored, authResult.storedToken.authDetails.userWalletId);
    }
  }
  /**
   * Gets the various status states of the user
   * @example
   * ```typescript
   *  const userStatus = await Paper.getUserWalletStatus();
   *  switch (userStatus.status) {
   *  case UserWalletStatus.LOGGED_OUT: {
   *    // User is logged out, call one of the auth methods on Paper.auth to authenticate the user
   *    break;
   *  }
   *  case UserWalletStatus.LOGGED_IN_WALLET_UNINITIALIZED: {
   *    // User is logged in, but does not have a wallet associated with it
   *    // you also have access to the user's details
   *    userStatus.user.authDetails;
   *    break;
   *  }
   *  case UserWalletStatus.LOGGED_IN_NEW_DEVICE: {
   *    // User is logged in and created a wallet already, but is missing the device shard
   *    // You have access to:
   *    userStatus.user.authDetails;
   *    userStatus.user.walletAddress;
   *    break;
   *  }
   *  case UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED: {
   *    // user is logged in and wallet is all set up.
   *    // You have access to:
   *    userStatus.user.authDetails;
   *    userStatus.user.walletAddress;
   *    userStatus.user.wallet;
   *    break;
   *  }
   *}
   *```
   * @returns `{GetUserWalletStatusFnReturnType}` an object to containing various information on the user statuses
   * @internal
   */
  async getUserWalletStatus() {
    const userStatus = await this.walletManagerQuerier.call({
      params: void 0,
      procedureName: "getUserStatus"
    });
    if (userStatus.status === "Logged In, Wallet Initialized") {
      return {
        status: "Logged In, Wallet Initialized",
        ...userStatus.user,
        account: await this.getAccount()
      };
    }
    if (userStatus.status === "Logged In, New Device") {
      return {
        status: "Logged In, New Device",
        ...userStatus.user
      };
    }
    if (userStatus.status === "Logged In, Wallet Uninitialized") {
      return {
        status: "Logged In, Wallet Uninitialized",
        ...userStatus.user
      };
    }
    return { status: userStatus.status };
  }
  /**
   * Returns an account that communicates with the iFrame for signing operations
   * @internal
   */
  async getAccount() {
    var _a;
    const querier = this.walletManagerQuerier;
    const client = this.client;
    const partnerId = (_a = this.ecosystem) == null ? void 0 : _a.partnerId;
    const { address } = await querier.call({
      params: void 0,
      procedureName: "getAddress"
    });
    const _signTransaction = async (tx) => {
      const transaction = {
        chainId: tx.chainId,
        data: tx.data,
        gasLimit: tx.gas,
        nonce: tx.nonce,
        to: tx.to ?? void 0,
        value: tx.value
      };
      if (tx.maxFeePerGas) {
        transaction.accessList = tx.accessList;
        transaction.maxFeePerGas = tx.maxFeePerGas;
        transaction.maxPriorityFeePerGas = tx.maxPriorityFeePerGas;
        transaction.type = 2;
      } else {
        transaction.gasPrice = tx.gasPrice;
        transaction.type = 0;
      }
      const RPC_URL = getThirdwebDomains().rpc;
      const { signedTransaction } = await querier.call({
        params: {
          chainId: tx.chainId,
          partnerId,
          rpcEndpoint: `https://${tx.chainId}.${RPC_URL}`,
          transaction
          // TODO (ew) shouldnt be needed
        },
        procedureName: "signTransaction"
      });
      return signedTransaction;
    };
    return {
      address: getAddress(address),
      async sendTransaction(tx) {
        const rpcRequest = getRpcClient({
          chain: getCachedChain(tx.chainId),
          client
        });
        const signedTx = await _signTransaction(tx);
        const transactionHash = await eth_sendRawTransaction(rpcRequest, signedTx);
        trackTransaction({
          chainId: tx.chainId,
          client,
          contractAddress: tx.to ?? void 0,
          gasPrice: tx.gasPrice,
          transactionHash,
          walletAddress: address,
          walletType: "inApp"
        });
        return { transactionHash };
      },
      async signMessage({ message }) {
        const messageDecoded = (() => {
          if (typeof message === "string") {
            return message;
          }
          if (message.raw instanceof Uint8Array) {
            return message.raw;
          }
          return hexToString(message.raw);
        })();
        const { signedMessage } = await querier.call({
          params: {
            chainId: 1,
            // needs bytes or string
            // biome-ignore lint/suspicious/noExplicitAny: ethers tx transformation
            message: messageDecoded,
            partnerId
            // TODO check if we need this
          },
          procedureName: "signMessage"
        });
        return signedMessage;
      },
      async signTransaction(tx) {
        if (!tx.chainId) {
          throw new Error("chainId required in tx to sign");
        }
        return _signTransaction({
          ...tx,
          chainId: tx.chainId
        });
      },
      async signTypedData(_typedData) {
        var _a2;
        const parsedTypedData = parseTypedData(_typedData);
        if ((_a2 = parsedTypedData.types) == null ? void 0 : _a2.EIP712Domain) {
          parsedTypedData.types.EIP712Domain = void 0;
        }
        const domain = parsedTypedData.domain;
        const chainId = domain == null ? void 0 : domain.chainId;
        const verifyingContract = (domain == null ? void 0 : domain.verifyingContract) ? { verifyingContract: domain == null ? void 0 : domain.verifyingContract } : {};
        const domainData = {
          ...verifyingContract,
          name: domain == null ? void 0 : domain.name,
          version: domain == null ? void 0 : domain.version
        };
        if (chainId) {
          domainData.chainId = chainId;
        }
        const RPC_URL = getThirdwebDomains().rpc;
        const { signedTypedData } = await querier.call({
          params: {
            chainId: Number.parseInt(BigInt(chainId || 1).toString()),
            domain: domainData,
            message: parsedTypedData.message,
            partnerId,
            rpcEndpoint: `https://${chainId}.${RPC_URL}`,
            types: parsedTypedData.types
            // TODO (ew) shouldnt be needed
          },
          procedureName: "signTypedDataV4"
        });
        return signedTypedData;
      }
    };
  }
};

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/web-connector.js
var InAppWebConnector = class {
  isClientIdLegacyPaper(clientId) {
    if (clientId.indexOf("-") > 0 && clientId.length === 36) {
      return true;
    }
    return false;
  }
  /**
   * @example
   * `const thirdwebInAppWallet = new InAppWalletSdk({ clientId: "", chain: "Goerli" });`
   * @internal
   */
  constructor({ client, onAuthSuccess, ecosystem, passkeyDomain, storage }) {
    Object.defineProperty(this, "client", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ecosystem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "querier", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "storage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "wallet", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "auth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "passkeyDomain", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    if (this.isClientIdLegacyPaper(client.clientId)) {
      throw new Error("You are using a legacy clientId. Please use the clientId found on the thirdweb dashboard settings page");
    }
    const baseUrl = getThirdwebBaseUrl("inAppWallet");
    this.client = client;
    this.ecosystem = ecosystem;
    this.passkeyDomain = passkeyDomain;
    this.storage = new ClientScopedStorage({
      clientId: client.clientId,
      ecosystem,
      storage: storage ?? getDefaultStorage()
    });
    this.querier = new InAppWalletIframeCommunicator({
      baseUrl,
      clientId: client.clientId,
      ecosystem
    });
    this.auth = new Auth({
      baseUrl,
      client,
      ecosystem,
      localStorage: this.storage,
      onAuthSuccess: async (authResult) => {
        onAuthSuccess == null ? void 0 : onAuthSuccess(authResult);
        if (authResult.storedToken.authDetails.walletType === "sharded") {
          const result = await this.querier.call({
            params: {
              storedToken: authResult.storedToken
            },
            procedureName: "migrateFromShardToEnclave"
          });
          if (!result) {
            console.warn("Failed to migrate from sharded to enclave wallet, continuing with sharded wallet");
          }
        }
        this.wallet = await this.initializeWallet(authResult.storedToken.cookieString);
        if (!this.wallet) {
          throw new Error("Failed to initialize wallet");
        }
        const deviceShareStored = "deviceShareStored" in authResult.walletDetails ? authResult.walletDetails.deviceShareStored : void 0;
        await this.wallet.postWalletSetUp({
          deviceShareStored,
          storedToken: authResult.storedToken
        });
        if (this.wallet instanceof IFrameWallet) {
          await this.querier.call({
            params: {
              authCookie: authResult.storedToken.cookieString,
              clientId: this.client.clientId,
              // For enclave wallets we won't have a device share
              deviceShareStored: "deviceShareStored" in authResult.walletDetails ? authResult.walletDetails.deviceShareStored : null,
              ecosystemId: ecosystem == null ? void 0 : ecosystem.id,
              partnerId: ecosystem == null ? void 0 : ecosystem.partnerId,
              walletUserId: authResult.storedToken.authDetails.userWalletId
            },
            procedureName: "initIframe"
          });
        }
        return {
          user: {
            account: await this.wallet.getAccount(),
            authDetails: authResult.storedToken.authDetails,
            status: "Logged In, Wallet Initialized",
            walletAddress: authResult.walletDetails.walletAddress
          }
        };
      },
      querier: this.querier
    });
  }
  async initializeWallet(authToken) {
    var _a;
    const storedAuthToken = await this.storage.getAuthCookie();
    if (!authToken && storedAuthToken === null) {
      throw new Error("No auth token provided and no stored auth token found to initialize the wallet");
    }
    const user = await getUserStatus({
      authToken: authToken || storedAuthToken,
      client: this.client,
      ecosystem: this.ecosystem
    });
    if (!user) {
      throw new Error("Cannot initialize wallet, no user logged in");
    }
    if (user.wallets.length === 0) {
      throw new Error("Cannot initialize wallet, this user does not have a wallet generated yet");
    }
    if (((_a = user.wallets[0]) == null ? void 0 : _a.type) === "enclave") {
      return new EnclaveWallet({
        address: user.wallets[0].address,
        client: this.client,
        ecosystem: this.ecosystem,
        storage: this.storage
      });
    }
    return new IFrameWallet({
      client: this.client,
      ecosystem: this.ecosystem,
      localStorage: this.storage,
      querier: this.querier
    });
  }
  /**
   * Gets the user if they're logged in
   * @example
   * ```js
   *  const user = await thirdwebInAppWallet.getUser();
   *  switch (user.status) {
   *     case UserWalletStatus.LOGGED_OUT: {
   *       // User is logged out, call one of the auth methods on thirdwebInAppWallet.auth to authenticate the user
   *       break;
   *     }
   *     case UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED: {
   *       // user is logged in and wallet is all set up.
   *       // You have access to:
   *       user.status;
   *       user.authDetails;
   *       user.walletAddress;
   *       user.wallet;
   *       break;
   *     }
   * }
   * ```
   * @returns GetUser - an object to containing various information on the user statuses
   */
  async getUser() {
    if (!this.wallet) {
      const localAuthToken = await this.storage.getAuthCookie();
      if (!localAuthToken) {
        return { status: "Logged Out" };
      }
      this.wallet = await this.initializeWallet(localAuthToken);
    }
    if (!this.wallet) {
      throw new Error("Wallet not initialized");
    }
    return await this.wallet.getUserWalletStatus();
  }
  getAccount() {
    if (!this.wallet) {
      throw new Error("Wallet not initialized");
    }
    return this.wallet.getAccount();
  }
  async preAuthenticate(args) {
    return sendOtp({
      ...args,
      client: this.client,
      ecosystem: this.ecosystem
    });
  }
  async authenticateWithRedirect(strategy, mode, redirectUrl) {
    return loginWithOauthRedirect({
      authOption: strategy,
      client: this.client,
      ecosystem: this.ecosystem,
      mode,
      redirectUrl
    });
  }
  async loginWithAuthToken(authResult, recoveryCode) {
    return this.auth.loginWithAuthToken(authResult, recoveryCode);
  }
  /**
   * Authenticates the user and returns the auth token, but does not instantiate their wallet
   */
  async authenticate(args) {
    const strategy = args.strategy;
    switch (strategy) {
      case "email":
        return verifyOtp({
          ...args,
          client: this.client,
          ecosystem: this.ecosystem
        });
      case "phone":
        return verifyOtp({
          ...args,
          client: this.client,
          ecosystem: this.ecosystem
        });
      case "auth_endpoint": {
        return authEndpoint({
          client: this.client,
          ecosystem: this.ecosystem,
          payload: args.payload
        });
      }
      case "jwt":
        return customJwt({
          client: this.client,
          ecosystem: this.ecosystem,
          jwt: args.jwt
        });
      case "passkey": {
        return this.passkeyAuth(args);
      }
      case "iframe_email_verification": {
        return this.auth.authenticateWithIframe({
          email: args.email
        });
      }
      case "iframe": {
        return this.auth.authenticateWithModal();
      }
      case "apple":
      case "facebook":
      case "google":
      case "telegram":
      case "github":
      case "twitch":
      case "farcaster":
      case "line":
      case "x":
      case "steam":
      case "coinbase":
      case "discord": {
        return loginWithOauth({
          authOption: strategy,
          client: this.client,
          closeOpenedWindow: args.closeOpenedWindow,
          ecosystem: this.ecosystem,
          openedWindow: args.openedWindow
        });
      }
      case "guest": {
        return guestAuthenticate({
          client: this.client,
          ecosystem: this.ecosystem,
          storage: this.storage
        });
      }
      case "backend": {
        return backendAuthenticate({
          client: this.client,
          ecosystem: this.ecosystem,
          walletSecret: args.walletSecret
        });
      }
      case "wallet": {
        return siweAuthenticate({
          chain: args.chain,
          client: this.client,
          ecosystem: this.ecosystem,
          wallet: args.wallet
        });
      }
    }
  }
  /**
   * Authenticates the user then instantiates their wallet using the resulting auth token
   */
  async connect(args) {
    const strategy = args.strategy;
    switch (strategy) {
      case "auth_endpoint":
      case "jwt": {
        const authToken = await this.authenticate(args);
        return await this.loginWithAuthToken(authToken, args.encryptionKey);
      }
      case "iframe_email_verification": {
        return this.auth.loginWithIframe({
          email: args.email
        });
      }
      case "iframe": {
        return this.auth.loginWithModal();
      }
      case "passkey": {
        const authToken = await this.passkeyAuth(args);
        return this.loginWithAuthToken(authToken);
      }
      case "backend":
      case "phone":
      case "email":
      case "wallet":
      case "apple":
      case "facebook":
      case "google":
      case "farcaster":
      case "telegram":
      case "github":
      case "line":
      case "x":
      case "guest":
      case "coinbase":
      case "twitch":
      case "steam":
      case "discord": {
        const authToken = await this.authenticate(args);
        return await this.auth.loginWithAuthToken(authToken);
      }
      default:
        assertUnreachable(strategy);
    }
  }
  async logout() {
    return await this.auth.logout();
  }
  async passkeyAuth(args) {
    const { PasskeyWebClient } = await import("./passkeys-43YEZPSL.js");
    const { passkeyName, storeLastUsedPasskey = true } = args;
    const passkeyClient = new PasskeyWebClient();
    const storage = this.storage;
    if (args.type === "sign-up") {
      return registerPasskey({
        client: this.client,
        ecosystem: this.ecosystem,
        passkeyClient,
        rp: {
          id: this.passkeyDomain ?? window.location.hostname,
          name: this.passkeyDomain ?? window.document.title
        },
        storage: storeLastUsedPasskey ? storage : void 0,
        username: passkeyName
      });
    }
    return loginWithPasskey({
      client: this.client,
      ecosystem: this.ecosystem,
      passkeyClient,
      rp: {
        id: this.passkeyDomain ?? window.location.hostname,
        name: this.passkeyDomain ?? window.document.title
      },
      storage: storeLastUsedPasskey ? storage : void 0
    });
  }
  async linkProfile(args) {
    const { storedToken } = await this.authenticate(args);
    return await linkAccount({
      client: args.client,
      ecosystem: args.ecosystem || this.ecosystem,
      storage: this.storage,
      tokenToLink: storedToken.cookieString
    });
  }
  async unlinkProfile(profile, allowAccountDeletion) {
    return await unlinkAccount({
      allowAccountDeletion,
      client: this.client,
      ecosystem: this.ecosystem,
      profileToUnlink: profile,
      storage: this.storage
    });
  }
  async getProfiles() {
    return getLinkedProfilesInternal({
      client: this.client,
      ecosystem: this.ecosystem,
      storage: this.storage
    });
  }
};
function assertUnreachable(x, message) {
  throw new Error(message ?? `Invalid param: ${x}`);
}
function getDefaultStorage() {
  if (typeof window !== "undefined" && window.localStorage) {
    return webLocalStorage;
  }
  return inMemoryStorage;
}
export {
  InAppWebConnector
};
//# sourceMappingURL=web-connector-RIT7LNZO.js.map
