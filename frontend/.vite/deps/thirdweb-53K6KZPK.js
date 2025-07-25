import "./chunk-OS7ZSSJM.js";

// node_modules/@thirdweb-dev/insight/dist/esm/client/core/bodySerializer.js
var jsonBodySerializer = {
  bodySerializer: (body) => JSON.stringify(body, (_key, value) => typeof value === "bigint" ? value.toString() : value)
};

// node_modules/@thirdweb-dev/insight/dist/esm/client/core/params.js
var extraPrefixesMap = {
  $body_: "body",
  $headers_: "headers",
  $path_: "path",
  $query_: "query"
};
var extraPrefixes = Object.entries(extraPrefixesMap);

// node_modules/@thirdweb-dev/insight/dist/esm/client/core/auth.js
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

// node_modules/@thirdweb-dev/insight/dist/esm/client/core/pathSerializer.js
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

// node_modules/@thirdweb-dev/insight/dist/esm/client/client/utils.js
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

// node_modules/@thirdweb-dev/insight/dist/esm/client/client/client.js
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

// node_modules/@thirdweb-dev/insight/dist/esm/client/client.gen.js
var client = createClient(createConfig());

// node_modules/@thirdweb-dev/insight/dist/esm/client/sdk.gen.js
var getV1Webhooks = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).get({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/webhooks",
    ...options
  });
};
var postV1Webhooks = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).post({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/webhooks",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options == null ? void 0 : options.headers
    }
  });
};
var deleteV1WebhooksByWebhookId = (options) => {
  return (options.client ?? client).delete({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/webhooks/{webhook_id}",
    ...options
  });
};
var patchV1WebhooksByWebhookId = (options) => {
  return (options.client ?? client).patch({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/webhooks/{webhook_id}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });
};
var postV1WebhooksTest = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).post({
    security: [
      {
        name: "x-secret-key",
        type: "apiKey"
      }
    ],
    url: "/v1/webhooks/test",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options == null ? void 0 : options.headers
    }
  });
};
var getV1Events = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/events",
    ...options
  });
};
var getV1EventsByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/events/{contractAddress}",
    ...options
  });
};
var getV1EventsByContractAddressBySignature = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/events/{contractAddress}/{signature}",
    ...options
  });
};
var getV1Transactions = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/transactions",
    ...options
  });
};
var getV1TransactionsByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/transactions/{contractAddress}",
    ...options
  });
};
var getV1TransactionsByContractAddressBySignature = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/transactions/{contractAddress}/{signature}",
    ...options
  });
};
var getV1TokensOwners = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/owners",
    ...options
  });
};
var getV1TokensTransfersTransactionByTransactionHash = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/transfers/transaction/{transaction_hash}",
    ...options
  });
};
var getV1TokensTransfersByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/transfers/{contract_address}",
    ...options
  });
};
var getV1TokensTransfers = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/transfers",
    ...options
  });
};
var getV1TokensErc20ByOwnerAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/erc20/{ownerAddress}",
    ...options
  });
};
var getV1Tokens = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens",
    ...options
  });
};
var getV1TokensErc721ByOwnerAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/erc721/{ownerAddress}",
    ...options
  });
};
var getV1TokensErc1155ByOwnerAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/erc1155/{ownerAddress}",
    ...options
  });
};
var getV1TokensPriceSupported = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/price/supported",
    ...options
  });
};
var getV1TokensPrice = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/price",
    ...options
  });
};
var getV1TokensLookup = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/tokens/lookup",
    ...options
  });
};
var getV1ResolveByInput = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/resolve/{input}",
    ...options
  });
};
var getV1Blocks = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/blocks",
    ...options
  });
};
var getV1ContractsAbiByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/contracts/abi/{contractAddress}",
    ...options
  });
};
var getV1ContractsMetadataByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/contracts/metadata/{contractAddress}",
    ...options
  });
};
var postV1DecodeByContractAddress = (options) => {
  return (options.client ?? client).post({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/decode/{contractAddress}",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });
};
var getV1NftsBalanceByOwnerAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/balance/{ownerAddress}",
    ...options
  });
};
var getV1NftsCollectionsByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/collections/{contract_address}",
    ...options
  });
};
var getV1Nfts = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts",
    ...options
  });
};
var getV1NftsOwnersByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/owners/{contract_address}",
    ...options
  });
};
var getV1NftsOwnersByContractAddressByTokenId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/owners/{contract_address}/{token_id}",
    ...options
  });
};
var getV1NftsTransfers = (options) => {
  return ((options == null ? void 0 : options.client) ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/transfers",
    ...options
  });
};
var getV1NftsTransfersTransactionByTransactionHash = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/transfers/transaction/{transaction_hash}",
    ...options
  });
};
var getV1NftsTransfersByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/transfers/{contract_address}",
    ...options
  });
};
var getV1NftsByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/{contract_address}",
    ...options
  });
};
var getV1NftsTransfersByContractAddressByTokenId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/transfers/{contract_address}/{token_id}",
    ...options
  });
};
var getV1NftsByContractAddressByTokenId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/{contract_address}/{token_id}",
    ...options
  });
};
var getV1NftsMetadataRefreshByContractAddress = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/metadata/refresh/{contract_address}",
    ...options
  });
};
var getV1NftsMetadataRefreshByContractAddressByTokenId = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/nfts/metadata/refresh/{contract_address}/{token_id}",
    ...options
  });
};
var getV1WalletsByWalletAddressTransactions = (options) => {
  return (options.client ?? client).get({
    security: [
      {
        name: "x-client-id",
        type: "apiKey"
      }
    ],
    url: "/v1/wallets/{wallet_address}/transactions",
    ...options
  });
};

// node_modules/@thirdweb-dev/insight/dist/esm/configure.js
function configure(options) {
  client.setConfig({
    headers: {
      ...options.clientId && { "x-client-id": options.clientId },
      ...options.secretKey && { "x-secret-key": options.secretKey }
    },
    ...options.override ?? {}
  });
}
export {
  configure,
  deleteV1WebhooksByWebhookId,
  getV1Blocks,
  getV1ContractsAbiByContractAddress,
  getV1ContractsMetadataByContractAddress,
  getV1Events,
  getV1EventsByContractAddress,
  getV1EventsByContractAddressBySignature,
  getV1Nfts,
  getV1NftsBalanceByOwnerAddress,
  getV1NftsByContractAddress,
  getV1NftsByContractAddressByTokenId,
  getV1NftsCollectionsByContractAddress,
  getV1NftsMetadataRefreshByContractAddress,
  getV1NftsMetadataRefreshByContractAddressByTokenId,
  getV1NftsOwnersByContractAddress,
  getV1NftsOwnersByContractAddressByTokenId,
  getV1NftsTransfers,
  getV1NftsTransfersByContractAddress,
  getV1NftsTransfersByContractAddressByTokenId,
  getV1NftsTransfersTransactionByTransactionHash,
  getV1ResolveByInput,
  getV1Tokens,
  getV1TokensErc1155ByOwnerAddress,
  getV1TokensErc20ByOwnerAddress,
  getV1TokensErc721ByOwnerAddress,
  getV1TokensLookup,
  getV1TokensOwners,
  getV1TokensPrice,
  getV1TokensPriceSupported,
  getV1TokensTransfers,
  getV1TokensTransfersByContractAddress,
  getV1TokensTransfersTransactionByTransactionHash,
  getV1Transactions,
  getV1TransactionsByContractAddress,
  getV1TransactionsByContractAddressBySignature,
  getV1WalletsByWalletAddressTransactions,
  getV1Webhooks,
  patchV1WebhooksByWebhookId,
  postV1DecodeByContractAddress,
  postV1Webhooks,
  postV1WebhooksTest
};
//# sourceMappingURL=thirdweb-53K6KZPK.js.map
