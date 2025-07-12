import {
  bytesToBigInt,
  bytesToBool,
  bytesToNumber,
  bytesToString,
  deploySmartAccount,
  fromBytes,
  verifyHash
} from "./chunk-I67RWMNF.js";
import {
  eth_estimateGas
} from "./chunk-7DW5IWNC.js";
import {
  eth_getTransactionCount
} from "./chunk-NKJQE6GN.js";
import {
  serializeTransaction
} from "./chunk-UIZXPUPS.js";
import {
  eth_getStorageAt
} from "./chunk-AB2ASU7V.js";
import {
  eth_getLogs,
  getBuyWithCryptoHistory,
  getContractEvents,
  isBaseTransactionOptions,
  simulateTransaction,
  watchContractEvents
} from "./chunk-VTXXEMYY.js";
import {
  getBuyWithCryptoQuote,
  getBuyWithCryptoStatus,
  getBuyWithCryptoTransfer,
  sign
} from "./chunk-4U5PUIC4.js";
import {
  eth_getBalance
} from "./chunk-KJUYME5G.js";
import {
  sendAndConfirmTransaction
} from "./chunk-LUJKADEG.js";
import {
  insight_exports
} from "./chunk-N6DSQFYO.js";
import "./chunk-KU7G4WMB.js";
import "./chunk-FVP7PTDA.js";
import {
  parseEventLogs,
  prepareEvent
} from "./chunk-VVRYDJAL.js";
import "./chunk-BSPXA375.js";
import {
  prepareContractCall
} from "./chunk-HEMRZHKU.js";
import "./chunk-VRHOYTMZ.js";
import {
  prepareTransaction
} from "./chunk-6J7DXZMD.js";
import "./chunk-EMWJKMEZ.js";
import {
  eth_blockNumber,
  eth_getTransactionReceipt,
  waitForReceipt,
  watchBlockNumber
} from "./chunk-E2LANL2Y.js";
import "./chunk-4OCU6WGG.js";
import {
  sendTransaction
} from "./chunk-ACMOF3FM.js";
import "./chunk-PPBEOXQH.js";
import "./chunk-T2B5SAMX.js";
import {
  sendBatchTransaction
} from "./chunk-HBA3XICU.js";
import "./chunk-2GPFOFVJ.js";
import {
  getSignPayload
} from "./chunk-HDWEKPHM.js";
import {
  bridge_exports
} from "./chunk-RFFLYT44.js";
import "./chunk-QBAAWPM3.js";
import "./chunk-73PJS7P3.js";
import "./chunk-R2IMRU36.js";
import {
  NATIVE_TOKEN_ADDRESS,
  ZERO_ADDRESS
} from "./chunk-673YCYST.js";
import {
  eth_sendRawTransaction
} from "./chunk-MWAIX6LF.js";
import "./chunk-EGFCSO5B.js";
import "./chunk-3YR3TNSC.js";
import {
  keccak256 as keccak2562
} from "./chunk-A5CP6DX3.js";
import "./chunk-VQJYRYIP.js";
import {
  toSerializableTransaction
} from "./chunk-SYRCOOVG.js";
import "./chunk-7RUSW4Y7.js";
import {
  eth_getCode
} from "./chunk-NB244MAJ.js";
import "./chunk-AGSXJS3R.js";
import {
  eth_call,
  readContract
} from "./chunk-WHDWYZBU.js";
import {
  estimateGasCost
} from "./chunk-SD26YTCZ.js";
import {
  estimateGas,
  eth_gasPrice,
  eth_getBlockByNumber,
  eth_maxPriorityFeePerGas,
  getGasPrice,
  resolveContractAbi
} from "./chunk-3DGGFYQ2.js";
import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-3ZOYRTTJ.js";
import "./chunk-HRHEYRBD.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  getAddress,
  isAddress,
  keccak256
} from "./chunk-6WE3JIZ5.js";
import {
  boolToBytes,
  hexToBytes,
  numberToBytes,
  stringToBytes,
  toBytes
} from "./chunk-Z2NN3WTW.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
import {
  fromGwei,
  toEther,
  toTokens,
  toUnits,
  toWei
} from "./chunk-UY2SRO54.js";
import {
  concatHex
} from "./chunk-ADBXOI2Q.js";
import {
  encode
} from "./chunk-JJDFOOW3.js";
import {
  formatBlock,
  formatTransaction
} from "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import {
  sha256
} from "./chunk-IVVESS3J.js";
import {
  stringify
} from "./chunk-DJWGHHK5.js";
import {
  parseAbiItem
} from "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import {
  stringify as stringify2
} from "./chunk-LZWAEAXR.js";
import "./chunk-RKJ7S5H4.js";
import "./chunk-YIVCHQGZ.js";
import {
  boolToHex,
  fromHex,
  hexToBigInt,
  hexToBool,
  hexToNumber,
  hexToString,
  hexToUint8Array,
  isHex,
  numberToHex,
  padHex,
  stringToHex,
  toHex,
  uint8ArrayToHex
} from "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import "./chunk-JGXNTIIP.js";
import {
  defineChain,
  getCachedChain
} from "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import {
  getClientFetch,
  isJWT
} from "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import {
  LruMap
} from "./chunk-SNQ54XRM.js";
import {
  getThirdwebBaseUrl
} from "./chunk-UQSP5VHN.js";
import {
  __export
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/utils/hashing/sha256.js
function sha2562(value, to) {
  const bytes = sha256(isHex(value, { strict: false }) ? hexToUint8Array(value) : value);
  if (to === "bytes") {
    return bytes;
  }
  return uint8ArrayToHex(bytes);
}

// node_modules/thirdweb/dist/esm/utils/client-id.js
var cache = new LruMap(4096);
function computeClientIdFromSecretKey(secretKey) {
  if (cache.has(secretKey)) {
    return cache.get(secretKey);
  }
  const cId = sha2562(stringToBytes(secretKey)).slice(2, 34);
  cache.set(secretKey, cId);
  return cId;
}

// node_modules/thirdweb/dist/esm/client/client.js
function createThirdwebClient(options) {
  const { clientId, secretKey, ...rest } = options;
  let realClientId = clientId;
  if (secretKey) {
    if (isJWT(secretKey)) {
      if (!clientId) {
        throw new Error("clientId must be provided when using a JWT secretKey");
      }
    } else {
      realClientId = clientId ?? computeClientIdFromSecretKey(secretKey);
    }
  }
  if (!realClientId) {
    throw new Error("clientId or secretKey must be provided");
  }
  return {
    ...rest,
    clientId: realClientId,
    secretKey
  };
}

// node_modules/thirdweb/dist/esm/engine/index.js
var engine_exports = {};
__export(engine_exports, {
  createServerWallet: () => createServerWallet,
  getServerWallets: () => getServerWallets,
  getTransactionStatus: () => getTransactionStatus,
  searchTransactions: () => searchTransactions2,
  serverWallet: () => serverWallet,
  waitForTransactionHash: () => waitForTransactionHash
});

// node_modules/@thirdweb-dev/engine/dist/esm/client/core/bodySerializer.js
var jsonBodySerializer = {
  bodySerializer: (body) => JSON.stringify(body, (_key, value) => typeof value === "bigint" ? value.toString() : value)
};

// node_modules/@thirdweb-dev/engine/dist/esm/client/core/params.js
var extraPrefixesMap = {
  $body_: "body",
  $headers_: "headers",
  $path_: "path",
  $query_: "query"
};
var extraPrefixes = Object.entries(extraPrefixesMap);

// node_modules/@thirdweb-dev/engine/dist/esm/client/core/auth.js
var getAuthToken = async (auth, callback) => {
  const token = typeof callback === "function" ? await callback(auth) : callback;
  if (!token) {
    return;
  }
  if (auth.scheme === "bearer") {
    return `Bearer ${token}`;
  }
  if (auth.scheme === "basic") {
    return `Basic ${btoa(token)}`;
  }
  return token;
};

// node_modules/@thirdweb-dev/engine/dist/esm/client/core/pathSerializer.js
var separatorArrayExplode = (style) => {
  switch (style) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
};
var separatorArrayNoExplode = (style) => {
  switch (style) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
};
var separatorObjectExplode = (style) => {
  switch (style) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
};
var serializeArrayParam = ({ allowReserved, explode, name, style, value }) => {
  if (!explode) {
    const joinedValues2 = (allowReserved ? value : value.map((v) => encodeURIComponent(v))).join(separatorArrayNoExplode(style));
    switch (style) {
      case "label":
        return `.${joinedValues2}`;
      case "matrix":
        return `;${name}=${joinedValues2}`;
      case "simple":
        return joinedValues2;
      default:
        return `${name}=${joinedValues2}`;
    }
  }
  const separator = separatorArrayExplode(style);
  const joinedValues = value.map((v) => {
    if (style === "label" || style === "simple") {
      return allowReserved ? v : encodeURIComponent(v);
    }
    return serializePrimitiveParam({
      allowReserved,
      name,
      value: v
    });
  }).join(separator);
  return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};
var serializePrimitiveParam = ({ allowReserved, name, value }) => {
  if (value === void 0 || value === null) {
    return "";
  }
  if (typeof value === "object") {
    throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  }
  return `${name}=${allowReserved ? value : encodeURIComponent(value)}`;
};
var serializeObjectParam = ({ allowReserved, explode, name, style, value, valueOnly }) => {
  if (value instanceof Date) {
    return valueOnly ? value.toISOString() : `${name}=${value.toISOString()}`;
  }
  if (style !== "deepObject" && !explode) {
    let values = [];
    Object.entries(value).forEach(([key, v]) => {
      values = [
        ...values,
        key,
        allowReserved ? v : encodeURIComponent(v)
      ];
    });
    const joinedValues2 = values.join(",");
    switch (style) {
      case "form":
        return `${name}=${joinedValues2}`;
      case "label":
        return `.${joinedValues2}`;
      case "matrix":
        return `;${name}=${joinedValues2}`;
      default:
        return joinedValues2;
    }
  }
  const separator = separatorObjectExplode(style);
  const joinedValues = Object.entries(value).map(([key, v]) => serializePrimitiveParam({
    allowReserved,
    name: style === "deepObject" ? `${name}[${key}]` : key,
    value: v
  })).join(separator);
  return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};

// node_modules/@thirdweb-dev/engine/dist/esm/client/client/utils.js
var PATH_PARAM_RE = /\{[^{}]+\}/g;
var defaultPathSerializer = ({ path, url: _url }) => {
  let url = _url;
  const matches = _url.match(PATH_PARAM_RE);
  if (matches) {
    for (const match of matches) {
      let explode = false;
      let name = match.substring(1, match.length - 1);
      let style = "simple";
      if (name.endsWith("*")) {
        explode = true;
        name = name.substring(0, name.length - 1);
      }
      if (name.startsWith(".")) {
        name = name.substring(1);
        style = "label";
      } else if (name.startsWith(";")) {
        name = name.substring(1);
        style = "matrix";
      }
      const value = path[name];
      if (value === void 0 || value === null) {
        continue;
      }
      if (Array.isArray(value)) {
        url = url.replace(match, serializeArrayParam({ explode, name, style, value }));
        continue;
      }
      if (typeof value === "object") {
        url = url.replace(match, serializeObjectParam({
          explode,
          name,
          style,
          value,
          valueOnly: true
        }));
        continue;
      }
      if (style === "matrix") {
        url = url.replace(match, `;${serializePrimitiveParam({
          name,
          value
        })}`);
        continue;
      }
      const replaceValue = encodeURIComponent(style === "label" ? `.${value}` : value);
      url = url.replace(match, replaceValue);
    }
  }
  return url;
};
var createQuerySerializer = ({ allowReserved, array, object } = {}) => {
  const querySerializer = (queryParams) => {
    const search = [];
    if (queryParams && typeof queryParams === "object") {
      for (const name in queryParams) {
        const value = queryParams[name];
        if (value === void 0 || value === null) {
          continue;
        }
        if (Array.isArray(value)) {
          const serializedArray = serializeArrayParam({
            allowReserved,
            explode: true,
            name,
            style: "form",
            value,
            ...array
          });
          if (serializedArray)
            search.push(serializedArray);
        } else if (typeof value === "object") {
          const serializedObject = serializeObjectParam({
            allowReserved,
            explode: true,
            name,
            style: "deepObject",
            value,
            ...object
          });
          if (serializedObject)
            search.push(serializedObject);
        } else {
          const serializedPrimitive = serializePrimitiveParam({
            allowReserved,
            name,
            value
          });
          if (serializedPrimitive)
            search.push(serializedPrimitive);
        }
      }
    }
    return search.join("&");
  };
  return querySerializer;
};
var getParseAs = (contentType) => {
  var _a;
  if (!contentType) {
    return "stream";
  }
  const cleanContent = (_a = contentType.split(";")[0]) == null ? void 0 : _a.trim();
  if (!cleanContent) {
    return;
  }
  if (cleanContent.startsWith("application/json") || cleanContent.endsWith("+json")) {
    return "json";
  }
  if (cleanContent === "multipart/form-data") {
    return "formData";
  }
  if (["application/", "audio/", "image/", "video/"].some((type) => cleanContent.startsWith(type))) {
    return "blob";
  }
  if (cleanContent.startsWith("text/")) {
    return "text";
  }
  return;
};
var setAuthParams = async ({ security, ...options }) => {
  for (const auth of security) {
    const token = await getAuthToken(auth, options.auth);
    if (!token) {
      continue;
    }
    const name = auth.name ?? "Authorization";
    switch (auth.in) {
      case "query":
        if (!options.query) {
          options.query = {};
        }
        options.query[name] = token;
        break;
      case "cookie":
        options.headers.append("Cookie", `${name}=${token}`);
        break;
      case "header":
      default:
        options.headers.set(name, token);
        break;
    }
    return;
  }
};
var buildUrl = (options) => {
  const url = getUrl({
    baseUrl: options.baseUrl,
    path: options.path,
    query: options.query,
    querySerializer: typeof options.querySerializer === "function" ? options.querySerializer : createQuerySerializer(options.querySerializer),
    url: options.url
  });
  return url;
};
var getUrl = ({ baseUrl, path, query, querySerializer, url: _url }) => {
  const pathUrl = _url.startsWith("/") ? _url : `/${_url}`;
  let url = (baseUrl ?? "") + pathUrl;
  if (path) {
    url = defaultPathSerializer({ path, url });
  }
  let search = query ? querySerializer(query) : "";
  if (search.startsWith("?")) {
    search = search.substring(1);
  }
  if (search) {
    url += `?${search}`;
  }
  return url;
};
var mergeConfigs = (a, b) => {
  var _a;
  const config = { ...a, ...b };
  if ((_a = config.baseUrl) == null ? void 0 : _a.endsWith("/")) {
    config.baseUrl = config.baseUrl.substring(0, config.baseUrl.length - 1);
  }
  config.headers = mergeHeaders(a.headers, b.headers);
  return config;
};
var mergeHeaders = (...headers) => {
  const mergedHeaders = new Headers();
  for (const header of headers) {
    if (!header || typeof header !== "object") {
      continue;
    }
    const iterator = header instanceof Headers ? header.entries() : Object.entries(header);
    for (const [key, value] of iterator) {
      if (value === null) {
        mergedHeaders.delete(key);
      } else if (Array.isArray(value)) {
        for (const v of value) {
          mergedHeaders.append(key, v);
        }
      } else if (value !== void 0) {
        mergedHeaders.set(key, typeof value === "object" ? JSON.stringify(value) : value);
      }
    }
  }
  return mergedHeaders;
};
var Interceptors = class {
  constructor() {
    Object.defineProperty(this, "_fns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(id) {
    if (typeof id === "number") {
      return this._fns[id] ? id : -1;
    } else {
      return this._fns.indexOf(id);
    }
  }
  exists(id) {
    const index = this.getInterceptorIndex(id);
    return !!this._fns[index];
  }
  eject(id) {
    const index = this.getInterceptorIndex(id);
    if (this._fns[index]) {
      this._fns[index] = null;
    }
  }
  update(id, fn) {
    const index = this.getInterceptorIndex(id);
    if (this._fns[index]) {
      this._fns[index] = fn;
      return id;
    } else {
      return false;
    }
  }
  use(fn) {
    this._fns = [...this._fns, fn];
    return this._fns.length - 1;
  }
};
var createInterceptors = () => ({
  error: new Interceptors(),
  request: new Interceptors(),
  response: new Interceptors()
});
var defaultQuerySerializer = createQuerySerializer({
  allowReserved: false,
  array: {
    explode: true,
    style: "form"
  },
  object: {
    explode: true,
    style: "deepObject"
  }
});
var defaultHeaders = {
  "Content-Type": "application/json"
};
var createConfig = (override = {}) => ({
  ...jsonBodySerializer,
  headers: defaultHeaders,
  parseAs: "auto",
  querySerializer: defaultQuerySerializer,
  ...override
});

// node_modules/@thirdweb-dev/engine/dist/esm/client/client/client.js
var createClient = (config = {}) => {
  let _config = mergeConfigs(createConfig(), config);
  const getConfig = () => ({ ..._config });
  const setConfig = (config2) => {
    _config = mergeConfigs(_config, config2);
    return getConfig();
  };
  const interceptors = createInterceptors();
  const request = async (options) => {
    const opts = {
      ..._config,
      ...options,
      fetch: options.fetch ?? _config.fetch ?? globalThis.fetch,
      headers: mergeHeaders(_config.headers, options.headers)
    };
    if (opts.security) {
      await setAuthParams({
        ...opts,
        security: opts.security
      });
    }
    if (opts.body && opts.bodySerializer) {
      opts.body = opts.bodySerializer(opts.body);
    }
    if (opts.body === void 0 || opts.body === "") {
      opts.headers.delete("Content-Type");
    }
    const url = buildUrl(opts);
    const requestInit = {
      redirect: "follow",
      ...opts
    };
    let request2 = new Request(url, requestInit);
    for (const fn of interceptors.request._fns) {
      if (fn) {
        request2 = await fn(request2, opts);
      }
    }
    const _fetch = opts.fetch;
    let response = await _fetch(request2);
    for (const fn of interceptors.response._fns) {
      if (fn) {
        response = await fn(response, request2, opts);
      }
    }
    const result = {
      request: request2,
      response
    };
    if (response.ok) {
      if (response.status === 204 || response.headers.get("Content-Length") === "0") {
        return opts.responseStyle === "data" ? {} : {
          data: {},
          ...result
        };
      }
      const parseAs = (opts.parseAs === "auto" ? getParseAs(response.headers.get("Content-Type")) : opts.parseAs) ?? "json";
      let data;
      switch (parseAs) {
        case "arrayBuffer":
        case "blob":
        case "formData":
        case "json":
        case "text":
          data = await response[parseAs]();
          break;
        case "stream":
          return opts.responseStyle === "data" ? response.body : {
            data: response.body,
            ...result
          };
      }
      if (parseAs === "json") {
        if (opts.responseValidator) {
          await opts.responseValidator(data);
        }
        if (opts.responseTransformer) {
          data = await opts.responseTransformer(data);
        }
      }
      return opts.responseStyle === "data" ? data : {
        data,
        ...result
      };
    }
    let error = await response.text();
    try {
      error = JSON.parse(error);
    } catch {
    }
    let finalError = error;
    for (const fn of interceptors.error._fns) {
      if (fn) {
        finalError = await fn(error, response, request2, opts);
      }
    }
    finalError = finalError || {};
    if (opts.throwOnError) {
      throw finalError;
    }
    return opts.responseStyle === "data" ? void 0 : {
      error: finalError,
      ...result
    };
  };
  return {
    buildUrl,
    connect: (options) => request({ ...options, method: "CONNECT" }),
    delete: (options) => request({ ...options, method: "DELETE" }),
    get: (options) => request({ ...options, method: "GET" }),
    getConfig,
    head: (options) => request({ ...options, method: "HEAD" }),
    interceptors,
    options: (options) => request({ ...options, method: "OPTIONS" }),
    patch: (options) => request({ ...options, method: "PATCH" }),
    post: (options) => request({ ...options, method: "POST" }),
    put: (options) => request({ ...options, method: "PUT" }),
    request,
    setConfig,
    trace: (options) => request({ ...options, method: "TRACE" })
  };
};

// node_modules/@thirdweb-dev/engine/dist/esm/client/client.gen.js
var client = createClient(createConfig({
  baseUrl: "https://engine.thirdweb.com"
}));

// node_modules/@thirdweb-dev/engine/dist/esm/client/sdk.gen.js
var sendTransaction2 = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/write/transaction",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });
};
var signMessage = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/sign/message",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });
};
var signTypedData = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/sign/typed-data",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });
};
var listAccounts = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).get({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/accounts",
    ...options
  });
};
var createAccount = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).post({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/accounts",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options == null ? void 0 : options.headers
    }
  });
};
var searchTransactions = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).post({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/transactions/search",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options == null ? void 0 : options.headers
    }
  });
};

// node_modules/@thirdweb-dev/engine/dist/esm/configure.js
function isSuccessResponse(res) {
  return "result" in res;
}

// node_modules/thirdweb/dist/esm/engine/create-server-wallet.js
async function createServerWallet(params) {
  var _a;
  const { client: client2, label } = params;
  const result = await createAccount({
    baseUrl: getThirdwebBaseUrl("engineCloud"),
    body: {
      label
    },
    bodySerializer: stringify,
    fetch: getClientFetch(client2)
  });
  if (result.error) {
    throw new Error(`Error creating server wallet with label ${label}: ${stringify(result.error)}`);
  }
  const data = (_a = result.data) == null ? void 0 : _a.result;
  if (!data) {
    throw new Error(`No server wallet created with label ${label}`);
  }
  return data;
}

// node_modules/thirdweb/dist/esm/engine/get-status.js
async function getTransactionStatus(args) {
  var _a, _b, _c;
  const { client: client2, transactionId } = args;
  const searchResult = await searchTransactions({
    baseUrl: getThirdwebBaseUrl("engineCloud"),
    body: {
      filters: [
        {
          field: "id",
          operation: "OR",
          values: [transactionId]
        }
      ]
    },
    bodySerializer: stringify2,
    fetch: getClientFetch(client2)
  });
  if (searchResult.error) {
    throw new Error(`Error searching for transaction ${transactionId}: ${stringify2(searchResult.error)}`);
  }
  const data = (_c = (_b = (_a = searchResult.data) == null ? void 0 : _a.result) == null ? void 0 : _b.transactions) == null ? void 0 : _c[0];
  if (!data) {
    throw new Error(`Transaction ${transactionId} not found`);
  }
  const executionResult = data.executionResult;
  return {
    ...executionResult,
    cancelledAt: data.cancelledAt,
    chain: getCachedChain(Number(data.chainId)),
    confirmedAt: data.confirmedAt,
    createdAt: data.createdAt,
    from: data.from ?? void 0,
    id: data.id
  };
}

// node_modules/thirdweb/dist/esm/engine/list-server-wallets.js
async function getServerWallets(params) {
  var _a;
  const { client: client2 } = params;
  const result = await listAccounts({
    baseUrl: getThirdwebBaseUrl("engineCloud"),
    bodySerializer: stringify,
    fetch: getClientFetch(client2)
  });
  if (result.error) {
    throw new Error(`Error listing server wallets: ${stringify(result.error)}`);
  }
  const data = (_a = result.data) == null ? void 0 : _a.result;
  if (!data) {
    throw new Error("No server wallets found");
  }
  return data;
}

// node_modules/thirdweb/dist/esm/engine/search-transactions.js
async function searchTransactions2(args) {
  var _a;
  const { client: client2, filters, pageSize = 100, page = 1 } = args;
  const searchResult = await searchTransactions({
    baseUrl: getThirdwebBaseUrl("engineCloud"),
    body: {
      filters,
      limit: pageSize,
      page
    },
    bodySerializer: stringify2,
    fetch: getClientFetch(client2)
  });
  if (searchResult.error) {
    throw new Error(`Error searching for transaction with filters ${stringify2(filters)}: ${stringify2(searchResult.error)}`);
  }
  const data = (_a = searchResult.data) == null ? void 0 : _a.result;
  if (!data) {
    throw new Error(`No transactions found with filters ${stringify2(filters)}`);
  }
  return data;
}

// node_modules/thirdweb/dist/esm/engine/wait-for-tx-hash.js
async function waitForTransactionHash(args) {
  const startTime = Date.now();
  const TIMEOUT_IN_MS = args.timeoutInSeconds ? args.timeoutInSeconds * 1e3 : 5 * 60 * 1e3;
  while (Date.now() - startTime < TIMEOUT_IN_MS) {
    const executionResult = await getTransactionStatus(args);
    const status = executionResult.status;
    switch (status) {
      case "FAILED": {
        throw new Error(`Transaction failed: ${stringify(executionResult.error) || "Unknown error"}`);
      }
      case "CONFIRMED": {
        const onchainStatus = executionResult && "onchainStatus" in executionResult ? executionResult.onchainStatus : null;
        if (onchainStatus === "REVERTED") {
          const revertData = "revertData" in executionResult ? executionResult.revertData : void 0;
          throw new Error(`Transaction reverted: ${(revertData == null ? void 0 : revertData.errorName) || "unknown error"} ${(revertData == null ? void 0 : revertData.errorArgs) ? stringify(revertData.errorArgs) : ""} - ${executionResult.transactionHash ? executionResult.transactionHash : ""}`);
        }
        return {
          chain: executionResult.chain,
          client: args.client,
          transactionHash: executionResult.transactionHash
        };
      }
      default: {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
      }
    }
  }
  throw new Error(`Transaction timed out after ${TIMEOUT_IN_MS / 1e3} seconds`);
}

// node_modules/thirdweb/dist/esm/engine/server-wallet.js
function serverWallet(options) {
  const { client: client2, vaultAccessToken, address, chain, executionOptions } = options;
  const headers = {
    "x-vault-access-token": vaultAccessToken
  };
  const getExecutionOptionsWithChainId = (chainId) => {
    if (!executionOptions) {
      return {
        chainId,
        from: address,
        type: "auto"
      };
    }
    switch (executionOptions.type) {
      case "auto":
        return {
          chainId,
          from: address,
          type: "auto"
        };
      case "ERC4337":
        return {
          ...executionOptions,
          chainId,
          type: "ERC4337"
        };
    }
  };
  const getSigningOptions = (chainId) => {
    if (!chainId) {
      return {
        from: address,
        type: "eoa"
      };
    }
    if (!executionOptions) {
      return {
        chainId,
        from: address,
        type: "auto"
      };
    }
    switch (executionOptions.type) {
      case "ERC4337": {
        return {
          chainId,
          ...executionOptions,
          type: "ERC4337"
        };
      }
      case "auto": {
        return {
          chainId,
          from: address,
          type: "auto"
        };
      }
    }
  };
  const enqueueTx = async (transaction) => {
    var _a, _b, _c;
    if (transaction.length === 0) {
      throw new Error("No transactions to enqueue");
    }
    const firstTransaction = transaction[0];
    if (!firstTransaction) {
      throw new Error("No transactions to enqueue");
    }
    const chainId = firstTransaction.chainId;
    for (let i = 1; i < transaction.length; i++) {
      if (((_a = transaction[i]) == null ? void 0 : _a.chainId) !== chainId) {
        throw new Error(`All transactions in batch must be on the same chain. Expected ${chainId}, got ${(_b = transaction[i]) == null ? void 0 : _b.chainId} at index ${i}`);
      }
    }
    const body = {
      executionOptions: getExecutionOptionsWithChainId(chainId),
      params: transaction.map((t) => {
        var _a2;
        return {
          data: t.data,
          to: t.to,
          value: (_a2 = t.value) == null ? void 0 : _a2.toString()
        };
      })
    };
    const result = await sendTransaction2({
      baseUrl: getThirdwebBaseUrl("engineCloud"),
      body,
      bodySerializer: stringify2,
      fetch: getClientFetch(client2),
      headers
    });
    if (result.error) {
      throw new Error(`Error sending transaction: ${stringify2(result.error)}`);
    }
    const data = (_c = result.data) == null ? void 0 : _c.result;
    if (!data) {
      throw new Error("No data returned from engine");
    }
    return data.transactions.map((t) => t.id);
  };
  return {
    address,
    enqueueBatchTransaction: async (args) => {
      const serializedTransactions = [];
      for (const transaction of args.transactions) {
        const [to, data, value] = await Promise.all([
          transaction.to ? resolvePromisedValue(transaction.to) : null,
          encode(transaction),
          transaction.value ? resolvePromisedValue(transaction.value) : null
        ]);
        serializedTransactions.push({
          chainId: transaction.chain.id,
          data,
          to: to ?? void 0,
          value: value ?? void 0
        });
      }
      const transactionIds = await enqueueTx(serializedTransactions);
      const transactionId = transactionIds[0];
      if (!transactionId) {
        throw new Error("No transactionId returned from engine");
      }
      return { transactionId };
    },
    enqueueTransaction: async (args) => {
      let serializedTransaction;
      if (args.simulate) {
        serializedTransaction = await toSerializableTransaction({
          transaction: args.transaction
        });
      } else {
        const [to, data, value] = await Promise.all([
          args.transaction.to ? resolvePromisedValue(args.transaction.to) : null,
          encode(args.transaction),
          args.transaction.value ? resolvePromisedValue(args.transaction.value) : null
        ]);
        serializedTransaction = {
          chainId: args.transaction.chain.id,
          data,
          to: to ?? void 0,
          value: value ?? void 0
        };
      }
      const transactionIds = await enqueueTx([serializedTransaction]);
      const transactionId = transactionIds[0];
      if (!transactionId) {
        throw new Error("No transactionId returned from engine");
      }
      return { transactionId };
    },
    sendBatchTransaction: async (transactions) => {
      const transactionIds = await enqueueTx(transactions);
      const transactionId = transactionIds[0];
      if (!transactionId) {
        throw new Error("No transactionId returned from engine");
      }
      return waitForTransactionHash({
        client: client2,
        transactionId
      });
    },
    sendTransaction: async (transaction) => {
      const transactionIds = await enqueueTx([transaction]);
      const transactionId = transactionIds[0];
      if (!transactionId) {
        throw new Error("No transactionId returned from engine");
      }
      return waitForTransactionHash({
        client: client2,
        transactionId
      });
    },
    signMessage: async (data) => {
      var _a;
      const { message, chainId } = data;
      let engineMessage;
      let isBytes = false;
      if (typeof message === "string") {
        engineMessage = message;
      } else {
        engineMessage = toHex(message.raw);
        isBytes = true;
      }
      const signingChainId = chainId || (chain == null ? void 0 : chain.id);
      if (!signingChainId) {
        throw new Error("Chain ID is required for signing messages");
      }
      const signResult = await signMessage({
        baseUrl: getThirdwebBaseUrl("engineCloud"),
        body: {
          params: [
            {
              format: isBytes ? "hex" : "text",
              message: engineMessage
            }
          ],
          signingOptions: getSigningOptions(signingChainId)
        },
        bodySerializer: stringify2,
        fetch: getClientFetch(client2),
        headers
      });
      if (signResult.error) {
        throw new Error(`Error signing message: ${stringify2(signResult.error)}`);
      }
      const signatureResult = (_a = signResult.data) == null ? void 0 : _a.result[0];
      if (signatureResult && isSuccessResponse(signatureResult)) {
        return signatureResult.result.signature;
      }
      throw new Error(`Failed to sign message: ${stringify2(signatureResult == null ? void 0 : signatureResult.error) || "Unknown error"}`);
    },
    signTypedData: async (typedData) => {
      var _a;
      const signingChainId = chain == null ? void 0 : chain.id;
      if (!signingChainId) {
        throw new Error("Chain ID is required for signing messages");
      }
      const signResult = await signTypedData({
        baseUrl: getThirdwebBaseUrl("engineCloud"),
        body: {
          // biome-ignore lint/suspicious/noExplicitAny: TODO: fix ts / hey-api type clash
          params: [typedData],
          signingOptions: getSigningOptions(signingChainId)
        },
        bodySerializer: stringify2,
        fetch: getClientFetch(client2),
        headers
      });
      if (signResult.error) {
        throw new Error(`Error signing message: ${stringify2(signResult.error)}`);
      }
      const signatureResult = (_a = signResult.data) == null ? void 0 : _a.result[0];
      if (signatureResult && isSuccessResponse(signatureResult)) {
        return signatureResult.result.signature;
      }
      throw new Error(`Failed to sign message: ${stringify2(signatureResult == null ? void 0 : signatureResult.error) || "Unknown error"}`);
    }
  };
}

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getBlockByHash.js
async function eth_getBlockByHash(request, params) {
  const includeTransactions = params.includeTransactions ?? false;
  const block = await request({
    method: "eth_getBlockByHash",
    params: [params.blockHash, includeTransactions]
  });
  if (!block) {
    throw new Error("Block not found");
  }
  return formatBlock(block);
}

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getTransactionByHash.js
async function eth_getTransactionByHash(request, params) {
  const receipt = await request({
    method: "eth_getTransactionByHash",
    params: [params.hash]
  });
  if (!receipt) {
    throw new Error("Transaction not found.");
  }
  return formatTransaction(receipt);
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/users/getUser.js
async function getUser({ client: client2, walletAddress, email, phone, id, externalWalletAddress, ecosystem }) {
  if (!client2.secretKey) {
    throw new Error("A secret key is required to query for users. If you're making this request from the server, please add a secret key to your client.");
  }
  const url = new URL(`${getThirdwebBaseUrl("inAppWallet")}/api/2023-11-30/embedded-wallet/user-details`);
  if (walletAddress) {
    url.searchParams.set("queryBy", "walletAddress");
    url.searchParams.set("walletAddress", walletAddress);
  } else if (email) {
    url.searchParams.set("queryBy", "email");
    url.searchParams.set("email", email);
  } else if (phone) {
    url.searchParams.set("queryBy", "phone");
    url.searchParams.set("phone", phone);
  } else if (id) {
    url.searchParams.set("queryBy", "id");
    url.searchParams.set("id", id);
  } else if (externalWalletAddress) {
    url.searchParams.set("queryBy", "externalWalletAddress");
    url.searchParams.set("externalWalletAddress", externalWalletAddress);
  } else {
    throw new Error("Please provide a walletAddress, email, phone, id, or externalWalletAddress to query for users.");
  }
  const clientFetch = getClientFetch(client2, ecosystem);
  const res = await clientFetch(url.toString());
  if (!res.ok) {
    const error = await res.text().catch(() => "Unknown error");
    throw new Error(`Failed to get profiles. ${res.status} ${res.statusText}: ${error}`);
  }
  const data = await res.json();
  return data.map((item) => ({
    createdAt: item.createdAt,
    email: item.email,
    phone: item.phone,
    profiles: item.linkedAccounts.map((profile) => {
      return {
        details: profile.details,
        type: profile.type === "siwe" ? "wallet" : profile.type
      };
    }),
    smartAccountAddress: item.smartAccountAddress,
    userId: item.userId,
    walletAddress: item.walletAddress
  }))[0] || null;
}

// node_modules/thirdweb/dist/esm/transaction/actions/sign-transaction.js
function signTransaction({ transaction, privateKey }) {
  const serializedTransaction = serializeTransaction({ transaction });
  const signature = sign({
    payload: keccak2562(serializedTransaction),
    privateKey
  });
  return serializeTransaction({
    transaction: { ...transaction, ...signature }
  });
}

// node_modules/thirdweb/dist/esm/transaction/resolve-method.js
function resolveMethod(method) {
  return async (contract) => {
    var _a;
    if (typeof method === "string" && method.startsWith("function ")) {
      return parseAbiItem(method);
    }
    const resolvedAbi = ((_a = contract.abi) == null ? void 0 : _a.length) ? contract.abi : await resolveContractAbi(contract);
    const abiFunction = resolvedAbi.find((item) => {
      if (item.type !== "function") {
        return false;
      }
      return item.name === method;
    });
    if (!abiFunction) {
      throw new Error(`could not find function with name "${method}" in abi`);
    }
    return abiFunction;
  };
}

// node_modules/thirdweb/dist/esm/auth/verify-typed-data.js
async function verifyTypedData({ address, signature, client: client2, chain, accountFactory, message, domain, primaryType, types }) {
  const messageHash = getSignPayload({
    domain,
    message,
    primaryType,
    types
  });
  return verifyHash({
    accountFactory,
    address,
    chain,
    client: client2,
    hash: messageHash,
    signature
  });
}

// node_modules/thirdweb/dist/esm/transaction/actions/eip7702/authorization.js
async function signAuthorization(options) {
  const { account, request } = options;
  if (typeof account.signAuthorization === "undefined") {
    throw new Error("This account type does not yet support signing EIP-7702 authorizations");
  }
  return account.signAuthorization(request);
}
export {
  ZERO_ADDRESS as ADDRESS_ZERO,
  bridge_exports as Bridge,
  engine_exports as Engine,
  insight_exports as Insight,
  NATIVE_TOKEN_ADDRESS,
  ZERO_ADDRESS,
  boolToBytes,
  boolToHex,
  bytesToBigInt,
  bytesToBool,
  bytesToNumber,
  bytesToString,
  concatHex,
  createThirdwebClient,
  defineChain,
  deploySmartAccount,
  encode,
  estimateGas,
  estimateGasCost,
  eth_blockNumber,
  eth_call,
  eth_estimateGas,
  eth_gasPrice,
  eth_getBalance,
  eth_getBlockByHash,
  eth_getBlockByNumber,
  eth_getCode,
  eth_getLogs,
  eth_getStorageAt,
  eth_getTransactionByHash,
  eth_getTransactionCount,
  eth_getTransactionReceipt,
  eth_maxPriorityFeePerGas,
  eth_sendRawTransaction,
  fromBytes,
  fromGwei,
  fromHex,
  getAddress,
  getBuyWithCryptoHistory,
  getBuyWithCryptoQuote,
  getBuyWithCryptoStatus,
  getBuyWithCryptoTransfer,
  getContract,
  getContractEvents,
  getGasPrice,
  getRpcClient,
  getUser,
  hexToBigInt,
  hexToBool,
  hexToBytes,
  hexToNumber,
  hexToString,
  hexToUint8Array,
  isAddress,
  isBaseTransactionOptions,
  isHex,
  keccak256,
  numberToBytes,
  numberToHex,
  padHex,
  parseEventLogs,
  prepareContractCall,
  prepareEvent,
  prepareTransaction,
  readContract,
  resolveMethod,
  sendAndConfirmTransaction,
  sendBatchTransaction,
  sendTransaction,
  serializeTransaction,
  sha2562 as sha256,
  signAuthorization,
  signTransaction,
  simulateTransaction,
  stringToBytes,
  stringToHex,
  toBytes,
  toEther,
  toHex,
  toSerializableTransaction,
  toTokens,
  toUnits,
  toWei,
  uint8ArrayToHex,
  verifyTypedData,
  waitForReceipt,
  watchBlockNumber,
  watchContractEvents
};
//# sourceMappingURL=thirdweb.js.map
