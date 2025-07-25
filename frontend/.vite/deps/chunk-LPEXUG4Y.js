import {
  detectOS,
  detectPlatform
} from "./chunk-P7ZDTV2E.js";
import {
  LruMap
} from "./chunk-SNQ54XRM.js";
import {
  getServiceKey
} from "./chunk-UQSP5VHN.js";

// node_modules/thirdweb/dist/esm/version.js
var version = "5.105.4";

// node_modules/thirdweb/dist/esm/utils/jwt/is-jwt.js
function isJWT(str) {
  return str.split(".").length === 3;
}

// node_modules/thirdweb/dist/esm/utils/process.js
var IS_DEV = true;
var IS_TEST = false;

// node_modules/thirdweb/dist/esm/utils/fetch.js
var DEFAULT_REQUEST_TIMEOUT = 6e4;
function getClientFetch(client, ecosystem) {
  async function fetchWithHeaders(url, init) {
    const { requestTimeoutMs = DEFAULT_REQUEST_TIMEOUT, useAuthToken, ...restInit } = init || {};
    let headers = restInit.headers ? new Headers(restInit.headers) : typeof url === "object" ? url.headers : void 0;
    const urlString = typeof url === "string" ? url : url.url;
    if (isThirdwebUrl(urlString)) {
      if (!headers) {
        headers = new Headers();
      }
      const authToken = useAuthToken && client.secretKey && isJWT(client.secretKey) ? client.secretKey : void 0;
      const secretKey = client.secretKey && !isJWT(client.secretKey) ? client.secretKey : void 0;
      const clientId = client.clientId;
      if (authToken && !isPayUrl(urlString) && !isInAppWalletUrl(urlString) && !isBundlerUrl(urlString)) {
        headers.set("authorization", `Bearer ${authToken}`);
        if (client.teamId) {
          headers.set("x-team-id", client.teamId);
        }
      } else {
        if (secretKey) {
          headers.set("x-secret-key", secretKey);
        }
        if (clientId) {
          headers.set("x-client-id", clientId);
        }
      }
      if (ecosystem) {
        headers.set("x-ecosystem-id", ecosystem.id);
        if (ecosystem.partnerId) {
          headers.set("x-ecosystem-partner-id", ecosystem.partnerId);
        }
      }
      for (const [key, value] of getPlatformHeaders()) {
        headers.set(key, value);
      }
      const serviceKey = getServiceKey();
      if (serviceKey) {
        headers.set("x-service-api-key", serviceKey);
      }
    }
    let controller;
    let abortTimeout;
    if (requestTimeoutMs) {
      controller = new AbortController();
      abortTimeout = setTimeout(() => {
        controller == null ? void 0 : controller.abort("timeout");
      }, requestTimeoutMs);
    }
    return fetch(url, {
      ...restInit,
      headers,
      signal: controller == null ? void 0 : controller.signal
    }).finally(() => {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    });
  }
  return fetchWithHeaders;
}
var THIRDWEB_DOMAINS = [
  ".thirdweb.com",
  ".ipfscdn.io",
  // dev domains
  ".thirdweb.dev",
  ".thirdweb-dev.com",
  ".thirdwebstorage-dev.com"
];
var IS_THIRDWEB_URL_CACHE = new LruMap(4096);
function isThirdwebUrl(url) {
  if (IS_THIRDWEB_URL_CACHE.has(url)) {
    return IS_THIRDWEB_URL_CACHE.get(url);
  }
  try {
    const { hostname } = new URL(url);
    try {
      if (IS_DEV) {
        if (hostname === "localhost") {
          IS_THIRDWEB_URL_CACHE.set(url, true);
          return true;
        }
      }
    } catch {
    }
    const is = THIRDWEB_DOMAINS.some((domain) => hostname.endsWith(domain));
    IS_THIRDWEB_URL_CACHE.set(url, is);
    return is;
  } catch {
    IS_THIRDWEB_URL_CACHE.set(url, false);
    return false;
  }
}
function isPayUrl(url) {
  try {
    const { hostname } = new URL(url);
    return hostname.startsWith("pay.");
  } catch {
    return false;
  }
}
function isInAppWalletUrl(url) {
  try {
    const { hostname } = new URL(url);
    return hostname.startsWith("in-app-wallet.") || hostname.startsWith("embedded-wallet.");
  } catch {
    return false;
  }
}
function isBundlerUrl(url) {
  try {
    const { hostname } = new URL(url);
    return hostname.endsWith(".bundler.thirdweb.com") || hostname.endsWith(".bundler.thirdweb-dev.com");
  } catch {
    return false;
  }
}
var SDK_NAME = "unified-sdk";
var previousPlatform;
function getPlatformHeaders() {
  if (previousPlatform) {
    return previousPlatform;
  }
  let os = null;
  if (typeof navigator !== "undefined") {
    os = detectOS(navigator.userAgent);
  }
  let bundleId;
  if (typeof globalThis !== "undefined" && "Application" in globalThis) {
    bundleId = globalThis.Application.applicationId;
  }
  previousPlatform = Object.entries({
    "x-sdk-name": SDK_NAME,
    "x-sdk-os": os ? parseOs(os) : "unknown",
    "x-sdk-platform": detectPlatform(),
    "x-sdk-version": version,
    ...bundleId ? { "x-bundle-id": bundleId } : {}
  });
  return previousPlatform;
}
function parseOs(os) {
  const osLowerCased = os.toLowerCase();
  if (osLowerCased.startsWith("win")) {
    return "win";
  }
  switch (os) {
    case "Mac OS":
      return "mac";
    case "iOS":
      return "ios";
    case "Android OS":
      return "android";
    default:
      return osLowerCased.replace(/\s/gi, "_");
  }
}

export {
  isJWT,
  IS_DEV,
  IS_TEST,
  getClientFetch,
  IS_THIRDWEB_URL_CACHE,
  isThirdwebUrl,
  getPlatformHeaders
};
//# sourceMappingURL=chunk-LPEXUG4Y.js.map
