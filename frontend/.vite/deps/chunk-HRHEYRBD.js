import {
  getFromMockStorage
} from "./chunk-RKJ7S5H4.js";
import {
  IS_TEST,
  getClientFetch
} from "./chunk-LPEXUG4Y.js";

// node_modules/thirdweb/dist/esm/utils/ipfs.js
var DEFAULT_GATEWAY = "https://{clientId}.ipfscdn.io/ipfs/{cid}";
function resolveScheme(options) {
  var _a, _b;
  if (options.uri.startsWith("ipfs://")) {
    const gateway = ((_b = (_a = options.client.config) == null ? void 0 : _a.storage) == null ? void 0 : _b.gatewayUrl) ?? DEFAULT_GATEWAY;
    const clientId = options.client.clientId;
    const cid = findIPFSCidFromUri(options.uri);
    let bundleId;
    if (typeof globalThis !== "undefined" && "Application" in globalThis) {
      bundleId = globalThis.Application.applicationId;
    }
    return `${gateway.replace("{clientId}", clientId).split("/ipfs")[0]}/ipfs/${cid}${bundleId ? `?bundleId=${bundleId}` : ""}`;
  }
  if (options.uri.startsWith("http")) {
    return options.uri;
  }
  throw new Error(`Invalid URI scheme, expected "ipfs://" or "http(s)://"`);
}
function findIPFSCidFromUri(uri) {
  if (!uri.startsWith("ipfs://")) {
    return uri;
  }
  const firstIndex = uri.search(/\/(Qm|baf)/i);
  return uri.slice(firstIndex + 1);
}

// node_modules/thirdweb/dist/esm/storage/download.js
async function download(options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  if (IS_TEST) {
    const hash = options.uri.split("://")[1];
    if (!hash) {
      throw new Error("Invalid hash");
    }
    const data = getFromMockStorage(hash);
    if (data) {
      return {
        json: () => Promise.resolve(data),
        ok: true,
        status: 200
      };
    }
  }
  let url;
  if (options.uri.startsWith("ar://")) {
    const { resolveArweaveScheme } = await import("./arweave-UPOOBWXS.js");
    url = resolveArweaveScheme(options);
  } else {
    url = resolveScheme(options);
  }
  const res = await getClientFetch(options.client)(url, {
    headers: (_c = (_b = (_a = options.client.config) == null ? void 0 : _a.storage) == null ? void 0 : _b.fetch) == null ? void 0 : _c.headers,
    keepalive: (_f = (_e = (_d = options.client.config) == null ? void 0 : _d.storage) == null ? void 0 : _e.fetch) == null ? void 0 : _f.keepalive,
    requestTimeoutMs: options.requestTimeoutMs ?? ((_i = (_h = (_g = options.client.config) == null ? void 0 : _g.storage) == null ? void 0 : _h.fetch) == null ? void 0 : _i.requestTimeoutMs) ?? 6e4
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to download file: ${res.status} ${res.statusText} ${error || ""}`);
  }
  return res;
}

export {
  resolveScheme,
  download
};
//# sourceMappingURL=chunk-HRHEYRBD.js.map
