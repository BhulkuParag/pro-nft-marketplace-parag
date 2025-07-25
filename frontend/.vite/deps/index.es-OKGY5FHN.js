import {
  Ee,
  Ie,
  Ko,
  Nt,
  at,
  esm_exports,
  formatJsonRpcError,
  formatJsonRpcRequest,
  formatJsonRpcResult,
  gn,
  import_pino,
  isHttpUrl,
  k,
  o,
  oe,
  parseConnectionError,
  require_events,
  safeJsonParse,
  safeJsonStringify,
  xe,
  yo
} from "./chunk-53G7QH6O.js";
import "./chunk-WE7GTWOF.js";
import "./chunk-7D6G3EL5.js";
import "./chunk-IXILO7AP.js";
import "./chunk-AHXBSVDN.js";
import {
  __commonJS,
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
    var __globalThis__ = function() {
      function F4() {
        this.fetch = false;
        this.DOMException = __global__.DOMException;
      }
      F4.prototype = __global__;
      return new F4();
    }();
    (function(globalThis2) {
      var irrelevant = function(exports2) {
        var g4 = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
        typeof global !== "undefined" && global || {};
        var support = {
          searchParams: "URLSearchParams" in g4,
          iterable: "Symbol" in g4 && "iterator" in Symbol,
          blob: "FileReader" in g4 && "Blob" in g4 && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in g4,
          arrayBuffer: "ArrayBuffer" in g4
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
            throw new TypeError('Invalid character in header field name: "' + name + '"');
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              if (header.length != 2) {
                throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
              }
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body._noBody) return;
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
          var encoding = match ? match[1] : "utf-8";
          reader.readAsText(blob, encoding);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed;
            this._bodyInit = body;
            if (!body) {
              this._noBody = true;
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
          }
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);
              if (isConsumed) {
                return isConsumed;
              } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(
                  this._bodyArrayBuffer.buffer.slice(
                    this._bodyArrayBuffer.byteOffset,
                    this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                  )
                );
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else if (support.blob) {
              return this.blob().then(readBlobAsArrayBuffer);
            } else {
              throw new Error("could not read as ArrayBuffer");
            }
          };
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request2(input, options) {
          if (!(this instanceof Request2)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          options = options || {};
          var body = options.body;
          if (input instanceof Request2) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal || function() {
            if ("AbortController" in g4) {
              var ctrl = new AbortController();
              return ctrl.signal;
            }
          }();
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
          if (this.method === "GET" || this.method === "HEAD") {
            if (options.cache === "no-store" || options.cache === "no-cache") {
              var reParamSearch = /([?&])_=[^&]*/;
              if (reParamSearch.test(this.url)) {
                this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
              } else {
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
              }
            }
          }
        }
        Request2.prototype.clone = function() {
          return new Request2(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split("\r").map(function(header) {
            return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
          }).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              try {
                headers.append(key, value);
              } catch (error) {
                console.warn("Response " + error.message);
              }
            }
          });
          return headers;
        }
        Body.call(Request2.prototype);
        function Response2(bodyInit, options) {
          if (!(this instanceof Response2)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          if (this.status < 200 || this.status > 599) {
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          }
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response2.prototype);
        Response2.prototype.clone = function() {
          return new Response2(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response2.error = function() {
          var response = new Response2(null, { status: 200, statusText: "" });
          response.ok = false;
          response.status = 0;
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response2.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response2(null, { status, headers: { location: url } });
        };
        exports2.DOMException = g4.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request2(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
                options.status = 200;
              } else {
                options.status = xhr.status;
              }
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              setTimeout(function() {
                resolve(new Response2(body, options));
              }, 0);
            };
            xhr.onerror = function() {
              setTimeout(function() {
                reject(new TypeError("Network request failed"));
              }, 0);
            };
            xhr.ontimeout = function() {
              setTimeout(function() {
                reject(new TypeError("Network request timed out"));
              }, 0);
            };
            xhr.onabort = function() {
              setTimeout(function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function fixUrl(url) {
              try {
                return url === "" && g4.location.href ? g4.location.href : url;
              } catch (e) {
                return url;
              }
            }
            xhr.open(request.method, fixUrl(request.url), true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr) {
              if (support.blob) {
                xhr.responseType = "blob";
              } else if (support.arrayBuffer) {
                xhr.responseType = "arraybuffer";
              }
            }
            if (init && typeof init.headers === "object" && !(init.headers instanceof Headers || g4.Headers && init.headers instanceof g4.Headers)) {
              var names = [];
              Object.getOwnPropertyNames(init.headers).forEach(function(name) {
                names.push(normalizeName(name));
                xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
              });
              request.headers.forEach(function(value, name) {
                if (names.indexOf(name) === -1) {
                  xhr.setRequestHeader(name, value);
                }
              });
            } else {
              request.headers.forEach(function(value, name) {
                xhr.setRequestHeader(name, value);
              });
            }
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!g4.fetch) {
          g4.fetch = fetch2;
          g4.Headers = Headers;
          g4.Request = Request2;
          g4.Response = Response2;
        }
        exports2.Headers = Headers;
        exports2.Request = Request2;
        exports2.Response = Response2;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__globalThis__);
    __globalThis__.fetch.ponyfill = true;
    delete __globalThis__.fetch.polyfill;
    var ctx = __global__.fetch ? __global__ : __globalThis__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var import_events3 = __toESM(require_events());

// node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var import_events = __toESM(require_events());
var import_cross_fetch = __toESM(require_browser_ponyfill());
var P = Object.defineProperty;
var w = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty;
var O = Object.prototype.propertyIsEnumerable;
var l = (r, t, e) => t in r ? P(r, t, { enumerable: true, configurable: true, writable: true, value: e }) : r[t] = e;
var p = (r, t) => {
  for (var e in t || (t = {})) L.call(t, e) && l(r, e, t[e]);
  if (c) for (var e of c(t)) O.call(t, e) && l(r, e, t[e]);
  return r;
};
var v = (r, t) => w(r, E(t));
var j = { Accept: "application/json", "Content-Type": "application/json" };
var T = "POST";
var d = { headers: j, method: T };
var g = 10;
var f = class {
  constructor(t, e = false) {
    if (this.url = t, this.disableProviderPing = e, this.events = new import_events.EventEmitter(), this.isAvailable = false, this.registering = false, !isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = e;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, e) {
    this.events.on(t, e);
  }
  once(t, e) {
    this.events.once(t, e);
  }
  off(t, e) {
    this.events.off(t, e);
  }
  removeListener(t, e) {
    this.events.removeListener(t, e);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const e = safeJsonStringify(t), s = await (await (0, import_cross_fetch.default)(this.url, v(p({}, d), { body: e }))).json();
      this.onPayload({ data: s });
    } catch (e) {
      this.onError(t.id, e);
    }
  }
  async register(t = this.url) {
    if (!isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const e = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((s, i) => {
        this.events.once("register_error", (n) => {
          this.resetMaxListeners(), i(n);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return i(new Error("HTTP connection is missing or invalid"));
          s();
        });
      });
    }
    this.url = t, this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const e = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await (0, import_cross_fetch.default)(t, v(p({}, d), { body: e }));
      }
      this.onOpen();
    } catch (e) {
      const s = this.parseError(e);
      throw this.events.emit("register_error", s), this.onClose(), s;
    }
  }
  onOpen() {
    this.isAvailable = true, this.registering = false, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false, this.registering = false, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const e = typeof t.data == "string" ? safeJsonParse(t.data) : t.data;
    this.events.emit("payload", e);
  }
  onError(t, e) {
    const s = this.parseError(e), i = s.message || s.toString(), n = formatJsonRpcError(t, i);
    this.events.emit("payload", n);
  }
  parseError(t, e = this.url) {
    return parseConnectionError(t, e, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > g && this.events.setMaxListeners(g);
  }
};

// node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events2 = __toESM(require_events());
var tt = "error";
var St = "wss://relay.walletconnect.org";
var Dt = "wc";
var qt = "universal_provider";
var _ = `${Dt}@2:${qt}:`;
var et = "https://rpc.walletconnect.org/v1/";
var w2 = "generic";
var jt = `${et}bundler`;
var d2 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
function Rt() {
}
function G(s) {
  return s == null || typeof s != "object" && typeof s != "function";
}
function J(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function _t(s) {
  if (G(s)) return s;
  if (Array.isArray(s) || J(s) || s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer) return s.slice(0);
  const t = Object.getPrototypeOf(s), e = t.constructor;
  if (s instanceof Date || s instanceof Map || s instanceof Set) return new e(s);
  if (s instanceof RegExp) {
    const i = new e(s);
    return i.lastIndex = s.lastIndex, i;
  }
  if (s instanceof DataView) return new e(s.buffer.slice(0));
  if (s instanceof Error) {
    const i = new e(s.message);
    return i.stack = s.stack, i.name = s.name, i.cause = s.cause, i;
  }
  if (typeof File < "u" && s instanceof File) return new e([s], s.name, { type: s.type, lastModified: s.lastModified });
  if (typeof s == "object") {
    const i = Object.create(t);
    return Object.assign(i, s);
  }
  return s;
}
function st(s) {
  return typeof s == "object" && s !== null;
}
function it(s) {
  return Object.getOwnPropertySymbols(s).filter((t) => Object.prototype.propertyIsEnumerable.call(s, t));
}
function rt(s) {
  return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(s);
}
var Ut = "[object RegExp]";
var nt = "[object String]";
var at2 = "[object Number]";
var ct = "[object Boolean]";
var ot = "[object Arguments]";
var Ft = "[object Symbol]";
var Lt = "[object Date]";
var xt = "[object Map]";
var Mt = "[object Set]";
var Bt = "[object Array]";
var Gt = "[object ArrayBuffer]";
var Jt = "[object Object]";
var zt = "[object DataView]";
var kt = "[object Uint8Array]";
var Wt = "[object Uint8ClampedArray]";
var Kt = "[object Uint16Array]";
var Vt = "[object Uint32Array]";
var Xt = "[object Int8Array]";
var Yt = "[object Int16Array]";
var Qt = "[object Int32Array]";
var Zt = "[object Float32Array]";
var Tt = "[object Float64Array]";
function te(s, t) {
  return y(s, void 0, s, /* @__PURE__ */ new Map(), t);
}
function y(s, t, e, i = /* @__PURE__ */ new Map(), n = void 0) {
  const a = n == null ? void 0 : n(s, t, e, i);
  if (a != null) return a;
  if (G(s)) return s;
  if (i.has(s)) return i.get(s);
  if (Array.isArray(s)) {
    const r = new Array(s.length);
    i.set(s, r);
    for (let c4 = 0; c4 < s.length; c4++) r[c4] = y(s[c4], c4, e, i, n);
    return Object.hasOwn(s, "index") && (r.index = s.index), Object.hasOwn(s, "input") && (r.input = s.input), r;
  }
  if (s instanceof Date) return new Date(s.getTime());
  if (s instanceof RegExp) {
    const r = new RegExp(s.source, s.flags);
    return r.lastIndex = s.lastIndex, r;
  }
  if (s instanceof Map) {
    const r = /* @__PURE__ */ new Map();
    i.set(s, r);
    for (const [c4, o4] of s) r.set(c4, y(o4, c4, e, i, n));
    return r;
  }
  if (s instanceof Set) {
    const r = /* @__PURE__ */ new Set();
    i.set(s, r);
    for (const c4 of s) r.add(y(c4, void 0, e, i, n));
    return r;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(s)) return s.subarray();
  if (J(s)) {
    const r = new (Object.getPrototypeOf(s)).constructor(s.length);
    i.set(s, r);
    for (let c4 = 0; c4 < s.length; c4++) r[c4] = y(s[c4], c4, e, i, n);
    return r;
  }
  if (s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer) return s.slice(0);
  if (s instanceof DataView) {
    const r = new DataView(s.buffer.slice(0), s.byteOffset, s.byteLength);
    return i.set(s, r), g2(r, s, e, i, n), r;
  }
  if (typeof File < "u" && s instanceof File) {
    const r = new File([s], s.name, { type: s.type });
    return i.set(s, r), g2(r, s, e, i, n), r;
  }
  if (s instanceof Blob) {
    const r = new Blob([s], { type: s.type });
    return i.set(s, r), g2(r, s, e, i, n), r;
  }
  if (s instanceof Error) {
    const r = new s.constructor();
    return i.set(s, r), r.message = s.message, r.name = s.name, r.stack = s.stack, r.cause = s.cause, g2(r, s, e, i, n), r;
  }
  if (typeof s == "object" && ee(s)) {
    const r = Object.create(Object.getPrototypeOf(s));
    return i.set(s, r), g2(r, s, e, i, n), r;
  }
  return s;
}
function g2(s, t, e = s, i, n) {
  const a = [...Object.keys(t), ...it(t)];
  for (let r = 0; r < a.length; r++) {
    const c4 = a[r], o4 = Object.getOwnPropertyDescriptor(s, c4);
    (o4 == null || o4.writable) && (s[c4] = y(t[c4], c4, e, i, n));
  }
}
function ee(s) {
  switch (rt(s)) {
    case ot:
    case Bt:
    case Gt:
    case zt:
    case ct:
    case Lt:
    case Zt:
    case Tt:
    case Xt:
    case Yt:
    case Qt:
    case xt:
    case at2:
    case Jt:
    case Ut:
    case Mt:
    case nt:
    case Ft:
    case kt:
    case Wt:
    case Kt:
    case Vt:
      return true;
    default:
      return false;
  }
}
function se(s, t) {
  return te(s, (e, i, n, a) => {
    const r = t == null ? void 0 : t(e, i, n, a);
    if (r != null) return r;
    if (typeof s == "object") switch (Object.prototype.toString.call(s)) {
      case at2:
      case nt:
      case ct: {
        const c4 = new s.constructor(s == null ? void 0 : s.valueOf());
        return g2(c4, s), c4;
      }
      case ot: {
        const c4 = {};
        return g2(c4, s), c4.length = s.length, c4[Symbol.iterator] = s[Symbol.iterator], c4;
      }
      default:
        return;
    }
  });
}
function ht(s) {
  return se(s);
}
function pt(s) {
  return s !== null && typeof s == "object" && rt(s) === "[object Arguments]";
}
function ie(s) {
  return J(s);
}
function re(s) {
  var _a3;
  if (typeof s != "object" || s == null) return false;
  if (Object.getPrototypeOf(s) === null) return true;
  if (Object.prototype.toString.call(s) !== "[object Object]") {
    const e = s[Symbol.toStringTag];
    return e == null || !((_a3 = Object.getOwnPropertyDescriptor(s, Symbol.toStringTag)) == null ? void 0 : _a3.writable) ? false : s.toString() === `[object ${e}]`;
  }
  let t = s;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(s) === t;
}
function ne(s, ...t) {
  const e = t.slice(0, -1), i = t[t.length - 1];
  let n = s;
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    n = U2(n, r, i, /* @__PURE__ */ new Map());
  }
  return n;
}
function U2(s, t, e, i) {
  if (G(s) && (s = Object(s)), t == null || typeof t != "object") return s;
  if (i.has(t)) return _t(i.get(t));
  if (i.set(t, s), Array.isArray(t)) {
    t = t.slice();
    for (let a = 0; a < t.length; a++) t[a] = t[a] ?? void 0;
  }
  const n = [...Object.keys(t), ...it(t)];
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    let c4 = t[r], o4 = s[r];
    if (pt(c4) && (c4 = { ...c4 }), pt(o4) && (o4 = { ...o4 }), typeof Buffer < "u" && Buffer.isBuffer(c4) && (c4 = ht(c4)), Array.isArray(c4)) if (typeof o4 == "object" && o4 != null) {
      const j4 = [], R = Reflect.ownKeys(o4);
      for (let f4 = 0; f4 < R.length; f4++) {
        const Y4 = R[f4];
        j4[Y4] = o4[Y4];
      }
      o4 = j4;
    } else o4 = [];
    const v4 = e(o4, c4, r, s, t, i);
    v4 != null ? s[r] = v4 : Array.isArray(c4) || st(o4) && st(c4) ? s[r] = U2(o4, c4, e, i) : o4 == null && re(c4) ? s[r] = U2({}, c4, e, i) : o4 == null && ie(c4) ? s[r] = ht(c4) : (o4 === void 0 || c4 !== void 0) && (s[r] = c4);
  }
  return s;
}
function ae(s, ...t) {
  return ne(s, ...t, Rt);
}
var ce = Object.defineProperty;
var oe2 = Object.defineProperties;
var he = Object.getOwnPropertyDescriptors;
var dt = Object.getOwnPropertySymbols;
var pe = Object.prototype.hasOwnProperty;
var de = Object.prototype.propertyIsEnumerable;
var ut = (s, t, e) => t in s ? ce(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var F = (s, t) => {
  for (var e in t || (t = {})) pe.call(t, e) && ut(s, e, t[e]);
  if (dt) for (var e of dt(t)) de.call(t, e) && ut(s, e, t[e]);
  return s;
};
var ue = (s, t) => oe2(s, he(t));
function p2(s, t, e) {
  var i;
  const n = Ie(s);
  return ((i = t.rpcMap) == null ? void 0 : i[n.reference]) || `${et}?chainId=${n.namespace}:${n.reference}&projectId=${e}`;
}
function P2(s) {
  return s.includes(":") ? s.split(":")[1] : s;
}
function lt(s) {
  return s.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function le(s, t) {
  const e = Object.keys(t.namespaces).filter((n) => n.includes(s));
  if (!e.length) return [];
  const i = [];
  return e.forEach((n) => {
    const a = t.namespaces[n].accounts;
    i.push(...a);
  }), i;
}
function z(s = {}, t = {}) {
  const e = ft(s), i = ft(t);
  return ae(e, i);
}
function ft(s) {
  var t, e, i, n;
  const a = {};
  if (!xe(s)) return a;
  for (const [r, c4] of Object.entries(s)) {
    const o4 = gn(r) ? [r] : c4.chains, v4 = c4.methods || [], j4 = c4.events || [], R = c4.rpcMap || {}, f4 = yo(r);
    a[f4] = ue(F(F({}, a[f4]), c4), { chains: at(o4, (t = a[f4]) == null ? void 0 : t.chains), methods: at(v4, (e = a[f4]) == null ? void 0 : e.methods), events: at(j4, (i = a[f4]) == null ? void 0 : i.events), rpcMap: F(F({}, R), (n = a[f4]) == null ? void 0 : n.rpcMap) });
  }
  return a;
}
function mt(s) {
  return s.includes(":") ? s.split(":")[2] : s;
}
function vt(s) {
  const t = {};
  for (const [e, i] of Object.entries(s)) {
    const n = i.methods || [], a = i.events || [], r = i.accounts || [], c4 = gn(e) ? [e] : i.chains ? i.chains : lt(i.accounts);
    t[e] = { chains: c4, methods: n, events: a, accounts: r };
  }
  return t;
}
function k2(s) {
  return typeof s == "number" ? s : s.includes("0x") ? parseInt(s, 16) : (s = s.includes(":") ? s.split(":")[1] : s, isNaN(Number(s)) ? s : Number(s));
}
var gt = {};
var h = (s) => gt[s];
var W = (s, t) => {
  gt[s] = t;
};
var fe = Object.defineProperty;
var me = (s, t, e) => t in s ? fe(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var b = (s, t, e) => me(s, typeof t != "symbol" ? t + "" : t, e);
var ve = class {
  constructor(t) {
    b(this, "name", "polkadot"), b(this, "client"), b(this, "httpProviders"), b(this, "events"), b(this, "namespace"), b(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i;
      const n = P2(e);
      t[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || p2(t, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f(i, h("disableProviderPing")));
  }
};
var ge = Object.defineProperty;
var Pe = Object.defineProperties;
var we = Object.getOwnPropertyDescriptors;
var Pt = Object.getOwnPropertySymbols;
var ye = Object.prototype.hasOwnProperty;
var be = Object.prototype.propertyIsEnumerable;
var K = (s, t, e) => t in s ? ge(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var wt = (s, t) => {
  for (var e in t || (t = {})) ye.call(t, e) && K(s, e, t[e]);
  if (Pt) for (var e of Pt(t)) be.call(t, e) && K(s, e, t[e]);
  return s;
};
var yt = (s, t) => Pe(s, we(t));
var I = (s, t, e) => K(s, typeof t != "symbol" ? t + "" : t, e);
var Ie2 = class {
  constructor(t) {
    I(this, "name", "eip155"), I(this, "client"), I(this, "chainId"), I(this, "namespace"), I(this, "httpProviders"), I(this, "events"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(t);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(t);
    }
    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), e), this.chainId = parseInt(t), this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, e) {
    const i = e || p2(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f(i, h("disableProviderPing")));
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i;
      const n = parseInt(P2(e));
      t[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[e]);
    }), t;
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const t = this.chainId, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  async handleSwitchChain(t) {
    var e, i;
    let n = t.request.params ? (e = t.request.params[0]) == null ? void 0 : e.chainId : "0x0";
    n = n.startsWith("0x") ? n : `0x${n}`;
    const a = parseInt(n, 16);
    if (this.isChainApproved(a)) this.setDefaultChain(`${a}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: t.topic, request: { method: t.request.method, params: [{ chainId: n }] }, chainId: (i = this.namespace.chains) == null ? void 0 : i[0] }), this.setDefaultChain(`${a}`);
    else throw new Error(`Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
  async getCapabilities(t) {
    var e, i, n;
    const a = (i = (e = t.request) == null ? void 0 : e.params) == null ? void 0 : i[0];
    if (!a) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const r = this.client.session.get(t.topic), c4 = ((n = r == null ? void 0 : r.sessionProperties) == null ? void 0 : n.capabilities) || {};
    if (c4 != null && c4[a]) return c4 == null ? void 0 : c4[a];
    const o4 = await this.client.request(t);
    try {
      await this.client.session.update(t.topic, { sessionProperties: yt(wt({}, r.sessionProperties || {}), { capabilities: yt(wt({}, c4 || {}), { [a]: o4 }) }) });
    } catch (v4) {
      console.warn("Failed to update session with capabilities", v4);
    }
    return o4;
  }
  async getCallStatus(t) {
    var e, i;
    const n = this.client.session.get(t.topic), a = (e = n.sessionProperties) == null ? void 0 : e.bundler_name;
    if (a) {
      const c4 = this.getBundlerUrl(t.chainId, a);
      try {
        return await this.getUserOperationReceipt(c4, t);
      } catch (o4) {
        console.warn("Failed to fetch call status from bundler", o4, c4);
      }
    }
    const r = (i = n.sessionProperties) == null ? void 0 : i.bundler_url;
    if (r) try {
      return await this.getUserOperationReceipt(r, t);
    } catch (c4) {
      console.warn("Failed to fetch call status from custom bundler", c4, r);
    }
    if (this.namespace.methods.includes(t.request.method)) return await this.client.request(t);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(t, e) {
    var i;
    const n = new URL(t), a = await fetch(n, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt", [(i = e.request.params) == null ? void 0 : i[0]])) });
    if (!a.ok) throw new Error(`Failed to fetch user operation receipt - ${a.status}`);
    return await a.json();
  }
  getBundlerUrl(t, e) {
    return `${jt}?projectId=${this.client.core.projectId}&chainId=${t}&bundler=${e}`;
  }
};
var $e = Object.defineProperty;
var Oe = (s, t, e) => t in s ? $e(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var $ = (s, t, e) => Oe(s, typeof t != "symbol" ? t + "" : t, e);
var Ae = class {
  constructor(t) {
    $(this, "name", "solana"), $(this, "client"), $(this, "httpProviders"), $(this, "events"), $(this, "namespace"), $(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i;
      const n = P2(e);
      t[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || p2(t, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f(i, h("disableProviderPing")));
  }
};
var Ce = Object.defineProperty;
var He = (s, t, e) => t in s ? Ce(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var O2 = (s, t, e) => He(s, typeof t != "symbol" ? t + "" : t, e);
var Ee2 = class {
  constructor(t) {
    O2(this, "name", "cosmos"), O2(this, "client"), O2(this, "httpProviders"), O2(this, "events"), O2(this, "namespace"), O2(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i;
      const n = P2(e);
      t[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || p2(t, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f(i, h("disableProviderPing")));
  }
};
var Ne = Object.defineProperty;
var Se = (s, t, e) => t in s ? Ne(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var A = (s, t, e) => Se(s, typeof t != "symbol" ? t + "" : t, e);
var De = class {
  constructor(t) {
    A(this, "name", "algorand"), A(this, "client"), A(this, "httpProviders"), A(this, "events"), A(this, "namespace"), A(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    if (!this.httpProviders[t]) {
      const i = e || p2(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, i);
    }
    this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i;
      t[e] = this.createHttpProvider(e, (i = this.namespace.rpcMap) == null ? void 0 : i[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || p2(t, this.namespace, this.client.core.projectId);
    return typeof i > "u" ? void 0 : new o(new f(i, h("disableProviderPing")));
  }
};
var qe = Object.defineProperty;
var je = (s, t, e) => t in s ? qe(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var C = (s, t, e) => je(s, typeof t != "symbol" ? t + "" : t, e);
var Re = class {
  constructor(t) {
    C(this, "name", "cip34"), C(this, "client"), C(this, "httpProviders"), C(this, "events"), C(this, "namespace"), C(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      const i = this.getCardanoRPCUrl(e), n = P2(e);
      t[n] = this.createHttpProvider(n, i);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  getCardanoRPCUrl(t) {
    const e = this.namespace.rpcMap;
    if (e) return e[t];
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || this.getCardanoRPCUrl(t);
    if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f(i, h("disableProviderPing")));
  }
};
var _e = Object.defineProperty;
var Ue = (s, t, e) => t in s ? _e(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var H = (s, t, e) => Ue(s, typeof t != "symbol" ? t + "" : t, e);
var Fe = class {
  constructor(t) {
    H(this, "name", "elrond"), H(this, "client"), H(this, "httpProviders"), H(this, "events"), H(this, "namespace"), H(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i;
      const n = P2(e);
      t[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || p2(t, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f(i, h("disableProviderPing")));
  }
};
var Le = Object.defineProperty;
var xe2 = (s, t, e) => t in s ? Le(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var E2 = (s, t, e) => xe2(s, typeof t != "symbol" ? t + "" : t, e);
var Me = class {
  constructor(t) {
    E2(this, "name", "multiversx"), E2(this, "client"), E2(this, "httpProviders"), E2(this, "events"), E2(this, "namespace"), E2(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i;
      const n = P2(e);
      t[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || p2(t, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f(i, h("disableProviderPing")));
  }
};
var Be = Object.defineProperty;
var Ge = (s, t, e) => t in s ? Be(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var N = (s, t, e) => Ge(s, typeof t != "symbol" ? t + "" : t, e);
var Je = class {
  constructor(t) {
    N(this, "name", "near"), N(this, "client"), N(this, "httpProviders"), N(this, "events"), N(this, "namespace"), N(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const i = e || p2(`${this.name}:${t}`, this.namespace);
      if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, i);
    }
    this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      var i;
      t[e] = this.createHttpProvider(e, (i = this.namespace.rpcMap) == null ? void 0 : i[e]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || p2(t, this.namespace);
    return typeof i > "u" ? void 0 : new o(new f(i, h("disableProviderPing")));
  }
};
var ze = Object.defineProperty;
var ke = (s, t, e) => t in s ? ze(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var S = (s, t, e) => ke(s, typeof t != "symbol" ? t + "" : t, e);
var We = class {
  constructor(t) {
    S(this, "name", "tezos"), S(this, "client"), S(this, "httpProviders"), S(this, "events"), S(this, "namespace"), S(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const i = e || p2(`${this.name}:${t}`, this.namespace);
      if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, i);
    }
    this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      t[e] = this.createHttpProvider(e);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || p2(t, this.namespace);
    return typeof i > "u" ? void 0 : new o(new f(i));
  }
};
var Ke = Object.defineProperty;
var Ve = (s, t, e) => t in s ? Ke(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var D = (s, t, e) => Ve(s, typeof t != "symbol" ? t + "" : t, e);
var Xe = class {
  constructor(t) {
    D(this, "name", w2), D(this, "client"), D(this, "httpProviders"), D(this, "events"), D(this, "namespace"), D(this, "chainId"), this.namespace = t.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(t.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(t.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(t.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(t.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider(t.chainId).request(t.request);
  }
  setDefaultChain(t, e) {
    this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(d2.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var t, e;
    const i = {};
    return (e = (t = this.namespace) == null ? void 0 : t.accounts) == null || e.forEach((n) => {
      const a = Ie(n);
      i[`${a.namespace}:${a.reference}`] = this.createHttpProvider(n);
    }), i;
  }
  getHttpProvider(t) {
    const e = this.httpProviders[t];
    if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setHttpProvider(t, e) {
    const i = this.createHttpProvider(t, e);
    i && (this.httpProviders[t] = i);
  }
  createHttpProvider(t, e) {
    const i = e || p2(t, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o(new f(i, h("disableProviderPing")));
  }
};
var Ye = Object.defineProperty;
var Qe = Object.defineProperties;
var Ze = Object.getOwnPropertyDescriptors;
var bt = Object.getOwnPropertySymbols;
var Te = Object.prototype.hasOwnProperty;
var ts = Object.prototype.propertyIsEnumerable;
var V = (s, t, e) => t in s ? Ye(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var L2 = (s, t) => {
  for (var e in t || (t = {})) Te.call(t, e) && V(s, e, t[e]);
  if (bt) for (var e of bt(t)) ts.call(t, e) && V(s, e, t[e]);
  return s;
};
var X = (s, t) => Qe(s, Ze(t));
var u = (s, t, e) => V(s, typeof t != "symbol" ? t + "" : t, e);
var x = class _x {
  constructor(t) {
    u(this, "client"), u(this, "namespaces"), u(this, "optionalNamespaces"), u(this, "sessionProperties"), u(this, "scopedProperties"), u(this, "events", new import_events2.default()), u(this, "rpcProviders", {}), u(this, "session"), u(this, "providerOpts"), u(this, "logger"), u(this, "uri"), u(this, "disableProviderPing", false), this.providerOpts = t, this.logger = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : (0, import_pino.default)(k({ level: (t == null ? void 0 : t.logger) || tt })), this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || false;
  }
  static async init(t) {
    const e = new _x(t);
    return await e.initialize(), e;
  }
  async request(t, e, i) {
    const [n, a] = this.validateChain(e);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(n).request({ request: L2({}, t), chainId: `${n}:${a}`, topic: this.session.topic, expiry: i });
  }
  sendAsync(t, e, i, n) {
    const a = (/* @__PURE__ */ new Date()).getTime();
    this.request(t, i, n).then((r) => e(null, formatJsonRpcResult(a, r))).catch((r) => e(r, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var t;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (t = this.session) == null ? void 0 : t.topic, reason: Nt("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic);
  }
  async authenticate(t, e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(t), await this.cleanupPendingPairings();
    const { uri: i, response: n } = await this.client.authenticate(t, e);
    i && (this.uri = i, this.events.emit("display_uri", i));
    const a = await n();
    if (this.session = a.session, this.session) {
      const r = vt(this.session.namespaces);
      this.namespaces = z(this.namespaces, r), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return a;
  }
  on(t, e) {
    this.events.on(t, e);
  }
  once(t, e) {
    this.events.once(t, e);
  }
  removeListener(t, e) {
    this.events.removeListener(t, e);
  }
  off(t, e) {
    this.events.off(t, e);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(t) {
    const { uri: e, approval: i } = await this.client.connect({ pairingTopic: t, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties });
    e && (this.uri = e, this.events.emit("display_uri", e));
    const n = await i();
    this.session = n;
    const a = vt(n.namespaces);
    return this.namespaces = z(this.namespaces, a), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(t, e) {
    try {
      if (!this.session) return;
      const [i, n] = this.validateChain(t), a = this.getProvider(i);
      a.name === w2 ? a.setDefaultChain(`${i}:${n}`, e) : a.setDefaultChain(n, e);
    } catch (i) {
      if (!/Please call connect/.test(i.message)) throw i;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const e = this.client.pairing.getAll();
    if (oe(e)) {
      for (const i of e) t.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
      this.logger.info(`Inactive pairings cleared: ${e.length}`);
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    var t, e;
    if (this.client = this.providerOpts.client || await Ee.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || tt, relayUrl: this.providerOpts.relayUrl || St, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (i) {
      throw this.logger.error("Failed to get session", i), new Error(`The provided session: ${(e = (t = this.providerOpts) == null ? void 0 : t.session) == null ? void 0 : e.topic} doesn't exist in the Sign client`);
    }
    else {
      const i = this.client.session.getAll();
      this.session = i[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const t = [...new Set(Object.keys(this.session.namespaces).map((e) => yo(e)))];
    W("client", this.client), W("events", this.events), W("disableProviderPing", this.disableProviderPing), t.forEach((e) => {
      if (!this.session) return;
      const i = le(e, this.session), n = lt(i), a = z(this.namespaces, this.optionalNamespaces), r = X(L2({}, a[e]), { accounts: i, chains: n });
      switch (e) {
        case "eip155":
          this.rpcProviders[e] = new Ie2({ namespace: r });
          break;
        case "algorand":
          this.rpcProviders[e] = new De({ namespace: r });
          break;
        case "solana":
          this.rpcProviders[e] = new Ae({ namespace: r });
          break;
        case "cosmos":
          this.rpcProviders[e] = new Ee2({ namespace: r });
          break;
        case "polkadot":
          this.rpcProviders[e] = new ve({ namespace: r });
          break;
        case "cip34":
          this.rpcProviders[e] = new Re({ namespace: r });
          break;
        case "elrond":
          this.rpcProviders[e] = new Fe({ namespace: r });
          break;
        case "multiversx":
          this.rpcProviders[e] = new Me({ namespace: r });
          break;
        case "near":
          this.rpcProviders[e] = new Je({ namespace: r });
          break;
        case "tezos":
          this.rpcProviders[e] = new We({ namespace: r });
          break;
        default:
          this.rpcProviders[w2] ? this.rpcProviders[w2].updateNamespace(r) : this.rpcProviders[w2] = new Xe({ namespace: r });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      var e;
      const { topic: i } = t;
      i === ((e = this.session) == null ? void 0 : e.topic) && this.events.emit("session_ping", t);
    }), this.client.on("session_event", (t) => {
      var e;
      const { params: i, topic: n } = t;
      if (n !== ((e = this.session) == null ? void 0 : e.topic)) return;
      const { event: a } = i;
      if (a.name === "accountsChanged") {
        const r = a.data;
        r && oe(r) && this.events.emit("accountsChanged", r.map(mt));
      } else if (a.name === "chainChanged") {
        const r = i.chainId, c4 = i.event.data, o4 = yo(r), v4 = k2(r) !== k2(c4) ? `${o4}:${k2(c4)}` : r;
        this.onChainChanged(v4);
      } else this.events.emit(a.name, a.data);
      this.events.emit("session_event", t);
    }), this.client.on("session_update", ({ topic: t, params: e }) => {
      var i, n;
      if (t !== ((i = this.session) == null ? void 0 : i.topic)) return;
      const { namespaces: a } = e, r = (n = this.client) == null ? void 0 : n.session.get(t);
      this.session = X(L2({}, r), { namespaces: a }), this.onSessionUpdate(), this.events.emit("session_update", { topic: t, params: e });
    }), this.client.on("session_delete", async (t) => {
      var e;
      t.topic === ((e = this.session) == null ? void 0 : e.topic) && (await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", X(L2({}, Nt("USER_DISCONNECTED")), { data: t.topic })));
    }), this.on(d2.DEFAULT_CHAIN_CHANGED, (t) => {
      this.onChainChanged(t, true);
    });
  }
  getProvider(t) {
    return this.rpcProviders[t] || this.rpcProviders[w2];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var e;
      this.getProvider(t).updateNamespace((e = this.session) == null ? void 0 : e.namespaces[t]);
    });
  }
  setNamespaces(t) {
    const { namespaces: e, optionalNamespaces: i, sessionProperties: n, scopedProperties: a } = t;
    e && Object.keys(e).length && (this.namespaces = e), i && Object.keys(i).length && (this.optionalNamespaces = i), this.sessionProperties = n, this.scopedProperties = a;
  }
  validateChain(t) {
    const [e, i] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [e, i];
    if (e && !Object.keys(this.namespaces || {}).map((r) => yo(r)).includes(e)) throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
    if (e && i) return [e, i];
    const n = yo(Object.keys(this.namespaces)[0]), a = this.rpcProviders[n].getDefaultChain();
    return [n, a];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  async onChainChanged(t, e = false) {
    if (!this.namespaces) return;
    const [i, n] = this.validateChain(t);
    if (!n) return;
    this.updateNamespaceChain(i, n), this.events.emit("chainChanged", n);
    const a = this.getProvider(i).getDefaultChain();
    e || this.getProvider(i).setDefaultChain(n), this.emitAccountsChangedOnChainChange({ namespace: i, previousChainId: a, newChainId: t }), await this.persist("namespaces", this.namespaces);
  }
  emitAccountsChangedOnChainChange({ namespace: t, previousChainId: e, newChainId: i }) {
    var n, a;
    try {
      if (e === i) return;
      const r = (a = (n = this.session) == null ? void 0 : n.namespaces[t]) == null ? void 0 : a.accounts;
      if (!r) return;
      const c4 = r.filter((o4) => o4.includes(`${i}:`)).map(mt);
      if (!oe(c4)) return;
      this.events.emit("accountsChanged", c4);
    } catch (r) {
      this.logger.warn("Failed to emit accountsChanged on chain change", r);
    }
  }
  updateNamespaceChain(t, e) {
    if (!this.namespaces) return;
    const i = this.namespaces[t] ? t : `${t}:${e}`, n = { chains: [], methods: [], events: [], defaultChain: e };
    this.namespaces[i] ? this.namespaces[i] && (this.namespaces[i].defaultChain = e) : this.namespaces[i] = n;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, await this.cleanupPendingPairings({ deletePairings: true }), await this.cleanupStorage();
  }
  async persist(t, e) {
    var i;
    const n = ((i = this.session) == null ? void 0 : i.topic) || "";
    await this.client.core.storage.setItem(`${_}/${t}${n}`, e);
  }
  async getFromStore(t) {
    var e;
    const i = ((e = this.session) == null ? void 0 : e.topic) || "";
    return await this.client.core.storage.getItem(`${_}/${t}${i}`);
  }
  async deleteFromStore(t) {
    var e;
    const i = ((e = this.session) == null ? void 0 : e.topic) || "";
    await this.client.core.storage.removeItem(`${_}/${t}${i}`);
  }
  async cleanupStorage() {
    var t;
    try {
      if (((t = this.client) == null ? void 0 : t.session.length) > 0) return;
      const e = await this.client.core.storage.getKeys();
      for (const i of e) i.startsWith(_) && await this.client.core.storage.removeItem(i);
    } catch (e) {
      this.logger.warn("Failed to cleanup storage", e);
    }
  }
};
var es = x;

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var I0 = "wc";
var N0 = "ethereum_provider";
var k0 = `${I0}@2:${N0}:`;
var T0 = "https://rpc.walletconnect.org/v1/";
var wo = ["eth_sendTransaction", "personal_sign"];
var el = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"];
var mo = ["chainChanged", "accountsChanged"];
var tl = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var O0 = Object.defineProperty;
var $0 = Object.defineProperties;
var P0 = Object.getOwnPropertyDescriptors;
var rl = Object.getOwnPropertySymbols;
var B0 = Object.prototype.hasOwnProperty;
var R0 = Object.prototype.propertyIsEnumerable;
var da = (t, e, r) => e in t ? O0(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r;
var xr = (t, e) => {
  for (var r in e || (e = {})) B0.call(e, r) && da(t, r, e[r]);
  if (rl) for (var r of rl(e)) R0.call(e, r) && da(t, r, e[r]);
  return t;
};
var Dn = (t, e) => $0(t, P0(e));
var ot2 = (t, e, r) => da(t, typeof e != "symbol" ? e + "" : e, r);
function bo(t) {
  return Number(t[0].split(":")[1]);
}
function vo(t) {
  return `0x${t.toString(16)}`;
}
function L0(t) {
  const { chains: e, optionalChains: r, methods: n, optionalMethods: i, events: o4, optionalEvents: s, rpcMap: a } = t;
  if (!oe(e)) throw new Error("Invalid chains");
  const c4 = { chains: e, methods: n || wo, events: o4 || mo, rpcMap: xr({}, e.length ? { [bo(e)]: a[bo(e)] } : {}) }, l4 = o4 == null ? void 0 : o4.filter((p4) => !mo.includes(p4)), d4 = n == null ? void 0 : n.filter((p4) => !wo.includes(p4));
  if (!r && !s && !i && !(l4 != null && l4.length) && !(d4 != null && d4.length)) return { required: e.length ? c4 : void 0 };
  const u4 = (l4 == null ? void 0 : l4.length) && (d4 == null ? void 0 : d4.length) || !r, h4 = { chains: [...new Set(u4 ? c4.chains.concat(r || []) : r)], methods: [...new Set(c4.methods.concat(i != null && i.length ? i : el))], events: [...new Set(c4.events.concat(s != null && s.length ? s : tl))], rpcMap: a };
  return { required: e.length ? c4 : void 0, optional: r.length ? h4 : void 0 };
}
var ca = class _ca {
  constructor() {
    ot2(this, "events", new import_events3.EventEmitter()), ot2(this, "namespace", "eip155"), ot2(this, "accounts", []), ot2(this, "signer"), ot2(this, "chainId", 1), ot2(this, "modal"), ot2(this, "rpc"), ot2(this, "STORAGE_KEY", k0), ot2(this, "on", (e, r) => (this.events.on(e, r), this)), ot2(this, "once", (e, r) => (this.events.once(e, r), this)), ot2(this, "removeListener", (e, r) => (this.events.removeListener(e, r), this)), ot2(this, "off", (e, r) => (this.events.off(e, r), this)), ot2(this, "parseAccount", (e) => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e), this.signer = {}, this.rpc = {};
  }
  static async init(e) {
    const r = new _ca();
    return await r.initialize(e), r;
  }
  async request(e, r) {
    return await this.signer.request(e, this.formatChainId(this.chainId), r);
  }
  sendAsync(e, r, n) {
    this.signer.sendAsync(e, r, this.formatChainId(this.chainId), n);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(e) {
    var r;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: n, optional: i } = L0(this.rpc);
    try {
      const o4 = await new Promise(async (a, c4) => {
        var l4, d4;
        this.rpc.showQrModal && ((l4 = this.modal) == null || l4.open(), (d4 = this.modal) == null || d4.subscribeState((h4) => {
          !h4.open && !this.signer.session && (this.signer.abortPairingAttempt(), c4(new Error("Connection request reset. Please try again.")));
        }));
        const u4 = e != null && e.scopedProperties ? { [this.namespace]: e.scopedProperties } : void 0;
        await this.signer.connect(Dn(xr({ namespaces: xr({}, n && { [this.namespace]: n }) }, i && { optionalNamespaces: { [this.namespace]: i } }), { pairingTopic: e == null ? void 0 : e.pairingTopic, scopedProperties: u4 })).then((h4) => {
          a(h4);
        }).catch((h4) => {
          var p4;
          (p4 = this.modal) == null || p4.showErrorMessage("Unable to connect"), c4(new Error(h4.message));
        });
      });
      if (!o4) return;
      const s = Ko(o4.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s), this.setAccounts(s), this.events.emit("connect", { chainId: vo(this.chainId) });
    } catch (o4) {
      throw this.signer.logger.error(o4), o4;
    } finally {
      (r = this.modal) == null || r.close();
    }
  }
  async authenticate(e, r) {
    var n;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: e == null ? void 0 : e.chains });
    try {
      const i = await new Promise(async (s, a) => {
        var c4, l4;
        this.rpc.showQrModal && ((c4 = this.modal) == null || c4.open(), (l4 = this.modal) == null || l4.subscribeState((d4) => {
          !d4.open && !this.signer.session && (this.signer.abortPairingAttempt(), a(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(Dn(xr({}, e), { chains: this.rpc.chains }), r).then((d4) => {
          s(d4);
        }).catch((d4) => {
          var u4;
          (u4 = this.modal) == null || u4.showErrorMessage("Unable to connect"), a(new Error(d4.message));
        });
      }), o4 = i.session;
      if (o4) {
        const s = Ko(o4.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s), this.setAccounts(s), this.events.emit("connect", { chainId: vo(this.chainId) });
      }
      return i;
    } catch (i) {
      throw this.signer.logger.error(i), i;
    } finally {
      (n = this.modal) == null || n.close();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: r } = e, { event: n } = r;
      n.name === "accountsChanged" ? (this.accounts = this.parseAccounts(n.data), this.events.emit("accountsChanged", this.accounts)) : n.name === "chainChanged" ? this.setChainId(this.formatChainId(n.data)) : this.events.emit(n.name, n.data), this.events.emit("session_event", e);
    }), this.signer.on("accountsChanged", (e) => {
      this.accounts = this.parseAccounts(e), this.events.emit("accountsChanged", this.accounts);
    }), this.signer.on("chainChanged", (e) => {
      const r = parseInt(e);
      this.chainId = r, this.events.emit("chainChanged", vo(this.chainId)), this.persist();
    }), this.signer.on("session_update", (e) => {
      this.events.emit("session_update", e);
    }), this.signer.on("session_delete", (e) => {
      this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", Dn(xr({}, Nt("USER_DISCONNECTED")), { data: e.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (e) => {
      this.events.emit("display_uri", e);
    });
  }
  switchEthereumChain(e) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: e.toString(16) }] });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const r = e.filter((n) => this.isCompatibleChainId(n)).map((n) => this.parseChainId(n));
    r.length && (this.chainId = r[0], this.events.emit("chainChanged", vo(this.chainId)), this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const r = this.parseChainId(e);
      this.chainId = r, this.switchEthereumChain(r);
    }
  }
  parseAccountId(e) {
    const [r, n, i] = e.split(":");
    return { chainId: `${r}:${n}`, address: i };
  }
  setAccounts(e) {
    this.accounts = e.filter((r) => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map((r) => this.parseAccountId(r).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var r, n;
    const i = (r = e == null ? void 0 : e.chains) != null ? r : [], o4 = (n = e == null ? void 0 : e.optionalChains) != null ? n : [], s = i.concat(o4);
    if (!s.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const a = i.length ? (e == null ? void 0 : e.methods) || wo : [], c4 = i.length ? (e == null ? void 0 : e.events) || mo : [], l4 = (e == null ? void 0 : e.optionalMethods) || [], d4 = (e == null ? void 0 : e.optionalEvents) || [], u4 = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(s, e.projectId), h4 = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return { chains: i == null ? void 0 : i.map((p4) => this.formatChainId(p4)), optionalChains: o4.map((p4) => this.formatChainId(p4)), methods: a, events: c4, optionalMethods: l4, optionalEvents: d4, rpcMap: u4, showQrModal: !!(e != null && e.showQrModal), qrModalOptions: h4, projectId: e.projectId, metadata: e.metadata };
  }
  buildRpcMap(e, r) {
    const n = {};
    return e.forEach((i) => {
      n[i] = this.getRpcUrl(i, r);
    }), n;
  }
  async initialize(e) {
    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? bo(this.rpc.chains) : bo(this.rpc.optionalChains), this.signer = await es.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: e.disableProviderPing, relayUrl: e.relayUrl, storage: e.storage, storageOptions: e.storageOptions, customStoragePrefix: e.customStoragePrefix, telemetryEnabled: e.telemetryEnabled, logger: e.logger }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let r;
      try {
        const { createAppKit: n } = await Promise.resolve().then(function() {
          return l2;
        }), { convertWCMToAppKitOptions: i } = await Promise.resolve().then(function() {
          return C2;
        }), o4 = i(Dn(xr({}, this.rpc.qrModalOptions), { chains: [.../* @__PURE__ */ new Set([...this.rpc.chains, ...this.rpc.optionalChains])], metadata: this.rpc.metadata, projectId: this.rpc.projectId }));
        if (!o4.networks.length) throw new Error("No networks found for WalletConnect·");
        r = n(Dn(xr({}, o4), { universalProvider: this.signer, manualWCControl: true }));
      } catch {
        throw new Error("To use QR modal, please install @reown/appkit package");
      }
      if (r) try {
        this.modal = r;
      } catch (n) {
        throw this.signer.logger.error(n), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: r, optionalChains: n, rpcMap: i } = e;
    r && oe(r) && (this.rpc.chains = r.map((o4) => this.formatChainId(o4)), r.forEach((o4) => {
      this.rpc.rpcMap[o4] = (i == null ? void 0 : i[o4]) || this.getRpcUrl(o4);
    })), n && oe(n) && (this.rpc.optionalChains = [], this.rpc.optionalChains = n == null ? void 0 : n.map((o4) => this.formatChainId(o4)), n.forEach((o4) => {
      this.rpc.rpcMap[o4] = (i == null ? void 0 : i[o4]) || this.getRpcUrl(o4);
    }));
  }
  getRpcUrl(e, r) {
    var n;
    return ((n = this.rpc.rpcMap) == null ? void 0 : n[e]) || `${T0}?chainId=eip155:${e}&projectId=${r || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), r = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
      this.setChainIds(e ? [this.formatChainId(e)] : r == null ? void 0 : r.accounts), this.setAccounts(r == null ? void 0 : r.accounts);
    } catch (e) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(e), await this.disconnect().catch((r) => this.signer.logger.warn(r));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map((r) => this.parseAccount(r));
  }
};
var U0 = ca;
var Co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var nl = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Co, function() {
    var r = 1e3, n = 6e4, i = 36e5, o4 = "millisecond", s = "second", a = "minute", c4 = "hour", l4 = "day", d4 = "week", u4 = "month", h4 = "quarter", p4 = "year", v4 = "date", m4 = "Invalid Date", g4 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, b4 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y4 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(_4) {
      var S4 = ["th", "st", "nd", "rd"], A4 = _4 % 100;
      return "[" + _4 + (S4[(A4 - 20) % 10] || S4[A4] || S4[0]) + "]";
    } }, x4 = function(_4, S4, A4) {
      var P4 = String(_4);
      return !P4 || P4.length >= S4 ? _4 : "" + Array(S4 + 1 - P4.length).join(A4) + _4;
    }, E4 = { s: x4, z: function(_4) {
      var S4 = -_4.utcOffset(), A4 = Math.abs(S4), P4 = Math.floor(A4 / 60), k4 = A4 % 60;
      return (S4 <= 0 ? "+" : "-") + x4(P4, 2, "0") + ":" + x4(k4, 2, "0");
    }, m: function _4(S4, A4) {
      if (S4.date() < A4.date()) return -_4(A4, S4);
      var P4 = 12 * (A4.year() - S4.year()) + (A4.month() - S4.month()), k4 = S4.clone().add(P4, u4), K4 = A4 - k4 < 0, X4 = S4.clone().add(P4 + (K4 ? -1 : 1), u4);
      return +(-(P4 + (A4 - k4) / (K4 ? k4 - X4 : X4 - k4)) || 0);
    }, a: function(_4) {
      return _4 < 0 ? Math.ceil(_4) || 0 : Math.floor(_4);
    }, p: function(_4) {
      return { M: u4, y: p4, w: d4, d: l4, D: v4, h: c4, m: a, s, ms: o4, Q: h4 }[_4] || String(_4 || "").toLowerCase().replace(/s$/, "");
    }, u: function(_4) {
      return _4 === void 0;
    } }, I4 = "en", $4 = {};
    $4[I4] = y4;
    var L4 = "$isDayjsObject", Z = function(_4) {
      return _4 instanceof ee2 || !(!_4 || !_4[L4]);
    }, B = function _4(S4, A4, P4) {
      var k4;
      if (!S4) return I4;
      if (typeof S4 == "string") {
        var K4 = S4.toLowerCase();
        $4[K4] && (k4 = K4), A4 && ($4[K4] = A4, k4 = K4);
        var X4 = S4.split("-");
        if (!k4 && X4.length > 1) return _4(X4[0]);
      } else {
        var ae2 = S4.name;
        $4[ae2] = S4, k4 = ae2;
      }
      return !P4 && k4 && (I4 = k4), k4 || !P4 && I4;
    }, R = function(_4, S4) {
      if (Z(_4)) return _4.clone();
      var A4 = typeof S4 == "object" ? S4 : {};
      return A4.date = _4, A4.args = arguments, new ee2(A4);
    }, N4 = E4;
    N4.l = B, N4.i = Z, N4.w = function(_4, S4) {
      return R(_4, { locale: S4.$L, utc: S4.$u, x: S4.$x, $offset: S4.$offset });
    };
    var ee2 = function() {
      function _4(A4) {
        this.$L = B(A4.locale, null, true), this.parse(A4), this.$x = this.$x || A4.x || {}, this[L4] = true;
      }
      var S4 = _4.prototype;
      return S4.parse = function(A4) {
        this.$d = function(P4) {
          var k4 = P4.date, K4 = P4.utc;
          if (k4 === null) return /* @__PURE__ */ new Date(NaN);
          if (N4.u(k4)) return /* @__PURE__ */ new Date();
          if (k4 instanceof Date) return new Date(k4);
          if (typeof k4 == "string" && !/Z$/i.test(k4)) {
            var X4 = k4.match(g4);
            if (X4) {
              var ae2 = X4[2] - 1 || 0, fe2 = (X4[7] || "0").substring(0, 3);
              return K4 ? new Date(Date.UTC(X4[1], ae2, X4[3] || 1, X4[4] || 0, X4[5] || 0, X4[6] || 0, fe2)) : new Date(X4[1], ae2, X4[3] || 1, X4[4] || 0, X4[5] || 0, X4[6] || 0, fe2);
            }
          }
          return new Date(k4);
        }(A4), this.init();
      }, S4.init = function() {
        var A4 = this.$d;
        this.$y = A4.getFullYear(), this.$M = A4.getMonth(), this.$D = A4.getDate(), this.$W = A4.getDay(), this.$H = A4.getHours(), this.$m = A4.getMinutes(), this.$s = A4.getSeconds(), this.$ms = A4.getMilliseconds();
      }, S4.$utils = function() {
        return N4;
      }, S4.isValid = function() {
        return this.$d.toString() !== m4;
      }, S4.isSame = function(A4, P4) {
        var k4 = R(A4);
        return this.startOf(P4) <= k4 && k4 <= this.endOf(P4);
      }, S4.isAfter = function(A4, P4) {
        return R(A4) < this.startOf(P4);
      }, S4.isBefore = function(A4, P4) {
        return this.endOf(P4) < R(A4);
      }, S4.$g = function(A4, P4, k4) {
        return N4.u(A4) ? this[P4] : this.set(k4, A4);
      }, S4.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S4.valueOf = function() {
        return this.$d.getTime();
      }, S4.startOf = function(A4, P4) {
        var k4 = this, K4 = !!N4.u(P4) || P4, X4 = N4.p(A4), ae2 = function(qe2, Re2) {
          var Ke2 = N4.w(k4.$u ? Date.UTC(k4.$y, Re2, qe2) : new Date(k4.$y, Re2, qe2), k4);
          return K4 ? Ke2 : Ke2.endOf(l4);
        }, fe2 = function(qe2, Re2) {
          return N4.w(k4.toDate()[qe2].apply(k4.toDate("s"), (K4 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Re2)), k4);
        }, me2 = this.$W, ge2 = this.$M, ke2 = this.$D, Fe2 = "set" + (this.$u ? "UTC" : "");
        switch (X4) {
          case p4:
            return K4 ? ae2(1, 0) : ae2(31, 11);
          case u4:
            return K4 ? ae2(1, ge2) : ae2(0, ge2 + 1);
          case d4:
            var yt2 = this.$locale().weekStart || 0, nt2 = (me2 < yt2 ? me2 + 7 : me2) - yt2;
            return ae2(K4 ? ke2 - nt2 : ke2 + (6 - nt2), ge2);
          case l4:
          case v4:
            return fe2(Fe2 + "Hours", 0);
          case c4:
            return fe2(Fe2 + "Minutes", 1);
          case a:
            return fe2(Fe2 + "Seconds", 2);
          case s:
            return fe2(Fe2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S4.endOf = function(A4) {
        return this.startOf(A4, false);
      }, S4.$set = function(A4, P4) {
        var k4, K4 = N4.p(A4), X4 = "set" + (this.$u ? "UTC" : ""), ae2 = (k4 = {}, k4[l4] = X4 + "Date", k4[v4] = X4 + "Date", k4[u4] = X4 + "Month", k4[p4] = X4 + "FullYear", k4[c4] = X4 + "Hours", k4[a] = X4 + "Minutes", k4[s] = X4 + "Seconds", k4[o4] = X4 + "Milliseconds", k4)[K4], fe2 = K4 === l4 ? this.$D + (P4 - this.$W) : P4;
        if (K4 === u4 || K4 === p4) {
          var me2 = this.clone().set(v4, 1);
          me2.$d[ae2](fe2), me2.init(), this.$d = me2.set(v4, Math.min(this.$D, me2.daysInMonth())).$d;
        } else ae2 && this.$d[ae2](fe2);
        return this.init(), this;
      }, S4.set = function(A4, P4) {
        return this.clone().$set(A4, P4);
      }, S4.get = function(A4) {
        return this[N4.p(A4)]();
      }, S4.add = function(A4, P4) {
        var k4, K4 = this;
        A4 = Number(A4);
        var X4 = N4.p(P4), ae2 = function(ge2) {
          var ke2 = R(K4);
          return N4.w(ke2.date(ke2.date() + Math.round(ge2 * A4)), K4);
        };
        if (X4 === u4) return this.set(u4, this.$M + A4);
        if (X4 === p4) return this.set(p4, this.$y + A4);
        if (X4 === l4) return ae2(1);
        if (X4 === d4) return ae2(7);
        var fe2 = (k4 = {}, k4[a] = n, k4[c4] = i, k4[s] = r, k4)[X4] || 1, me2 = this.$d.getTime() + A4 * fe2;
        return N4.w(me2, this);
      }, S4.subtract = function(A4, P4) {
        return this.add(-1 * A4, P4);
      }, S4.format = function(A4) {
        var P4 = this, k4 = this.$locale();
        if (!this.isValid()) return k4.invalidDate || m4;
        var K4 = A4 || "YYYY-MM-DDTHH:mm:ssZ", X4 = N4.z(this), ae2 = this.$H, fe2 = this.$m, me2 = this.$M, ge2 = k4.weekdays, ke2 = k4.months, Fe2 = k4.meridiem, yt2 = function(Re2, Ke2, it2, Nt3) {
          return Re2 && (Re2[Ke2] || Re2(P4, K4)) || it2[Ke2].slice(0, Nt3);
        }, nt2 = function(Re2) {
          return N4.s(ae2 % 12 || 12, Re2, "0");
        }, qe2 = Fe2 || function(Re2, Ke2, it2) {
          var Nt3 = Re2 < 12 ? "AM" : "PM";
          return it2 ? Nt3.toLowerCase() : Nt3;
        };
        return K4.replace(b4, function(Re2, Ke2) {
          return Ke2 || function(it2) {
            switch (it2) {
              case "YY":
                return String(P4.$y).slice(-2);
              case "YYYY":
                return N4.s(P4.$y, 4, "0");
              case "M":
                return me2 + 1;
              case "MM":
                return N4.s(me2 + 1, 2, "0");
              case "MMM":
                return yt2(k4.monthsShort, me2, ke2, 3);
              case "MMMM":
                return yt2(ke2, me2);
              case "D":
                return P4.$D;
              case "DD":
                return N4.s(P4.$D, 2, "0");
              case "d":
                return String(P4.$W);
              case "dd":
                return yt2(k4.weekdaysMin, P4.$W, ge2, 2);
              case "ddd":
                return yt2(k4.weekdaysShort, P4.$W, ge2, 3);
              case "dddd":
                return ge2[P4.$W];
              case "H":
                return String(ae2);
              case "HH":
                return N4.s(ae2, 2, "0");
              case "h":
                return nt2(1);
              case "hh":
                return nt2(2);
              case "a":
                return qe2(ae2, fe2, true);
              case "A":
                return qe2(ae2, fe2, false);
              case "m":
                return String(fe2);
              case "mm":
                return N4.s(fe2, 2, "0");
              case "s":
                return String(P4.$s);
              case "ss":
                return N4.s(P4.$s, 2, "0");
              case "SSS":
                return N4.s(P4.$ms, 3, "0");
              case "Z":
                return X4;
            }
            return null;
          }(Re2) || X4.replace(":", "");
        });
      }, S4.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S4.diff = function(A4, P4, k4) {
        var K4, X4 = this, ae2 = N4.p(P4), fe2 = R(A4), me2 = (fe2.utcOffset() - this.utcOffset()) * n, ge2 = this - fe2, ke2 = function() {
          return N4.m(X4, fe2);
        };
        switch (ae2) {
          case p4:
            K4 = ke2() / 12;
            break;
          case u4:
            K4 = ke2();
            break;
          case h4:
            K4 = ke2() / 3;
            break;
          case d4:
            K4 = (ge2 - me2) / 6048e5;
            break;
          case l4:
            K4 = (ge2 - me2) / 864e5;
            break;
          case c4:
            K4 = ge2 / i;
            break;
          case a:
            K4 = ge2 / n;
            break;
          case s:
            K4 = ge2 / r;
            break;
          default:
            K4 = ge2;
        }
        return k4 ? K4 : N4.a(K4);
      }, S4.daysInMonth = function() {
        return this.endOf(u4).$D;
      }, S4.$locale = function() {
        return $4[this.$L];
      }, S4.locale = function(A4, P4) {
        if (!A4) return this.$L;
        var k4 = this.clone(), K4 = B(A4, P4, true);
        return K4 && (k4.$L = K4), k4;
      }, S4.clone = function() {
        return N4.w(this.$d, this);
      }, S4.toDate = function() {
        return new Date(this.valueOf());
      }, S4.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S4.toISOString = function() {
        return this.$d.toISOString();
      }, S4.toString = function() {
        return this.$d.toUTCString();
      }, _4;
    }(), pe2 = ee2.prototype;
    return R.prototype = pe2, [["$ms", o4], ["$s", s], ["$m", a], ["$H", c4], ["$W", l4], ["$M", u4], ["$y", p4], ["$D", v4]].forEach(function(_4) {
      pe2[_4[1]] = function(S4) {
        return this.$g(S4, _4[0], _4[1]);
      };
    }), R.extend = function(_4, S4) {
      return _4.$i || (_4(S4, ee2, R), _4.$i = true), R;
    }, R.locale = B, R.isDayjs = Z, R.unix = function(_4) {
      return R(1e3 * _4);
    }, R.en = $4[I4], R.Ls = $4, R.p = {}, R;
  });
})(nl);
var ua = nl.exports;
var il = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Co, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(r) {
      var n = ["th", "st", "nd", "rd"], i = r % 100;
      return "[" + r + (n[(i - 20) % 10] || n[i] || n[0]) + "]";
    } };
  });
})(il);
var M0 = il.exports;
var ol = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Co, function() {
    return function(r, n, i) {
      r = r || {};
      var o4 = n.prototype, s = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function a(l4, d4, u4, h4) {
        return o4.fromToBase(l4, d4, u4, h4);
      }
      i.en.relativeTime = s, o4.fromToBase = function(l4, d4, u4, h4, p4) {
        for (var v4, m4, g4, b4 = u4.$locale().relativeTime || s, y4 = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], x4 = y4.length, E4 = 0; E4 < x4; E4 += 1) {
          var I4 = y4[E4];
          I4.d && (v4 = h4 ? i(l4).diff(u4, I4.d, true) : u4.diff(l4, I4.d, true));
          var $4 = (r.rounding || Math.round)(Math.abs(v4));
          if (g4 = v4 > 0, $4 <= I4.r || !I4.r) {
            $4 <= 1 && E4 > 0 && (I4 = y4[E4 - 1]);
            var L4 = b4[I4.l];
            p4 && ($4 = p4("" + $4)), m4 = typeof L4 == "string" ? L4.replace("%d", $4) : L4($4, d4, I4.l, g4);
            break;
          }
        }
        if (d4) return m4;
        var Z = g4 ? b4.future : b4.past;
        return typeof Z == "function" ? Z(m4) : Z.replace("%s", m4);
      }, o4.to = function(l4, d4) {
        return a(l4, d4, this, true);
      }, o4.from = function(l4, d4) {
        return a(l4, d4, this);
      };
      var c4 = function(l4) {
        return l4.$u ? i.utc() : i();
      };
      o4.toNow = function(l4) {
        return this.to(c4(this), l4);
      }, o4.fromNow = function(l4) {
        return this.from(c4(this), l4);
      };
    };
  });
})(ol);
var D0 = ol.exports;
var sl = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Co, function() {
    return function(r, n, i) {
      i.updateLocale = function(o4, s) {
        var a = i.Ls[o4];
        if (a) return (s ? Object.keys(s) : []).forEach(function(c4) {
          a[c4] = s[c4];
        }), a;
      };
    };
  });
})(sl);
var z0 = sl.exports;
ua.extend(D0), ua.extend(z0);
var W0 = { ...M0, name: "en-web3-modal", relativeTime: { future: "in %s", past: "%s ago", s: "%d sec", m: "1 min", mm: "%d min", h: "1 hr", hh: "%d hrs", d: "1 d", dd: "%d d", M: "1 mo", MM: "%d mo", y: "1 yr", yy: "%d yr" } };
ua.locale("en-web3-modal", W0);
var al = { caipNetworkIdToNumber(t) {
  return t ? Number(t.split(":")[1]) : void 0;
}, parseEvmChainId(t) {
  return typeof t == "string" ? this.caipNetworkIdToNumber(t) : t;
}, getNetworksByNamespace(t, e) {
  return (t == null ? void 0 : t.filter((r) => r.chainNamespace === e)) || [];
}, getFirstNetworkByNamespace(t, e) {
  return this.getNetworksByNamespace(t, e)[0];
} };
var j0 = 20;
var F0 = 1;
var Er = 1e6;
var cl = 1e6;
var H0 = -7;
var V0 = 21;
var Z0 = false;
var zn = "[big.js] ";
var Ar = zn + "Invalid ";
var yo2 = Ar + "decimal places";
var G0 = Ar + "rounding mode";
var ll = zn + "Division by zero";
var ve2 = {};
var kt2 = void 0;
var q0 = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function dl() {
  function t(e) {
    var r = this;
    if (!(r instanceof t)) return e === kt2 ? dl() : new t(e);
    if (e instanceof t) r.s = e.s, r.e = e.e, r.c = e.c.slice();
    else {
      if (typeof e != "string") {
        if (t.strict === true && typeof e != "bigint") throw TypeError(Ar + "value");
        e = e === 0 && 1 / e < 0 ? "-0" : String(e);
      }
      K0(r, e);
    }
    r.constructor = t;
  }
  return t.prototype = ve2, t.DP = j0, t.RM = F0, t.NE = H0, t.PE = V0, t.strict = Z0, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t;
}
function K0(t, e) {
  var r, n, i;
  if (!q0.test(e)) throw Error(Ar + "number");
  for (t.s = e.charAt(0) == "-" ? (e = e.slice(1), -1) : 1, (r = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +e.slice(n + 1), e = e.substring(0, n)) : r < 0 && (r = e.length), i = e.length, n = 0; n < i && e.charAt(n) == "0"; ) ++n;
  if (n == i) t.c = [t.e = 0];
  else {
    for (; i > 0 && e.charAt(--i) == "0"; ) ;
    for (t.e = r - n - 1, t.c = [], r = 0; n <= i; ) t.c[r++] = +e.charAt(n++);
  }
  return t;
}
function Sr(t, e, r, n) {
  var i = t.c;
  if (r === kt2 && (r = t.constructor.RM), r !== 0 && r !== 1 && r !== 2 && r !== 3) throw Error(G0);
  if (e < 1) n = r === 3 && (n || !!i[0]) || e === 0 && (r === 1 && i[0] >= 5 || r === 2 && (i[0] > 5 || i[0] === 5 && (n || i[1] !== kt2))), i.length = 1, n ? (t.e = t.e - e + 1, i[0] = 1) : i[0] = t.e = 0;
  else if (e < i.length) {
    if (n = r === 1 && i[e] >= 5 || r === 2 && (i[e] > 5 || i[e] === 5 && (n || i[e + 1] !== kt2 || i[e - 1] & 1)) || r === 3 && (n || !!i[0]), i.length = e, n) {
      for (; ++i[--e] > 9; ) if (i[e] = 0, e === 0) {
        ++t.e, i.unshift(1);
        break;
      }
    }
    for (e = i.length; !i[--e]; ) i.pop();
  }
  return t;
}
function _r(t, e, r) {
  var n = t.e, i = t.c.join(""), o4 = i.length;
  if (e) i = i.charAt(0) + (o4 > 1 ? "." + i.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
  else if (n < 0) {
    for (; ++n; ) i = "0" + i;
    i = "0." + i;
  } else if (n > 0) if (++n > o4) for (n -= o4; n--; ) i += "0";
  else n < o4 && (i = i.slice(0, n) + "." + i.slice(n));
  else o4 > 1 && (i = i.charAt(0) + "." + i.slice(1));
  return t.s < 0 && r ? "-" + i : i;
}
ve2.abs = function() {
  var t = new this.constructor(this);
  return t.s = 1, t;
}, ve2.cmp = function(t) {
  var e, r = this, n = r.c, i = (t = new r.constructor(t)).c, o4 = r.s, s = t.s, a = r.e, c4 = t.e;
  if (!n[0] || !i[0]) return n[0] ? o4 : i[0] ? -s : 0;
  if (o4 != s) return o4;
  if (e = o4 < 0, a != c4) return a > c4 ^ e ? 1 : -1;
  for (s = (a = n.length) < (c4 = i.length) ? a : c4, o4 = -1; ++o4 < s; ) if (n[o4] != i[o4]) return n[o4] > i[o4] ^ e ? 1 : -1;
  return a == c4 ? 0 : a > c4 ^ e ? 1 : -1;
}, ve2.div = function(t) {
  var e = this, r = e.constructor, n = e.c, i = (t = new r(t)).c, o4 = e.s == t.s ? 1 : -1, s = r.DP;
  if (s !== ~~s || s < 0 || s > Er) throw Error(yo2);
  if (!i[0]) throw Error(ll);
  if (!n[0]) return t.s = o4, t.c = [t.e = 0], t;
  var a, c4, l4, d4, u4, h4 = i.slice(), p4 = a = i.length, v4 = n.length, m4 = n.slice(0, a), g4 = m4.length, b4 = t, y4 = b4.c = [], x4 = 0, E4 = s + (b4.e = e.e - t.e) + 1;
  for (b4.s = o4, o4 = E4 < 0 ? 0 : E4, h4.unshift(0); g4++ < a; ) m4.push(0);
  do {
    for (l4 = 0; l4 < 10; l4++) {
      if (a != (g4 = m4.length)) d4 = a > g4 ? 1 : -1;
      else for (u4 = -1, d4 = 0; ++u4 < a; ) if (i[u4] != m4[u4]) {
        d4 = i[u4] > m4[u4] ? 1 : -1;
        break;
      }
      if (d4 < 0) {
        for (c4 = g4 == a ? i : h4; g4; ) {
          if (m4[--g4] < c4[g4]) {
            for (u4 = g4; u4 && !m4[--u4]; ) m4[u4] = 9;
            --m4[u4], m4[g4] += 10;
          }
          m4[g4] -= c4[g4];
        }
        for (; !m4[0]; ) m4.shift();
      } else break;
    }
    y4[x4++] = d4 ? l4 : ++l4, m4[0] && d4 ? m4[g4] = n[p4] || 0 : m4 = [n[p4]];
  } while ((p4++ < v4 || m4[0] !== kt2) && o4--);
  return !y4[0] && x4 != 1 && (y4.shift(), b4.e--, E4--), x4 > E4 && Sr(b4, E4, r.RM, m4[0] !== kt2), b4;
}, ve2.eq = function(t) {
  return this.cmp(t) === 0;
}, ve2.gt = function(t) {
  return this.cmp(t) > 0;
}, ve2.gte = function(t) {
  return this.cmp(t) > -1;
}, ve2.lt = function(t) {
  return this.cmp(t) < 0;
}, ve2.lte = function(t) {
  return this.cmp(t) < 1;
}, ve2.minus = ve2.sub = function(t) {
  var e, r, n, i, o4 = this, s = o4.constructor, a = o4.s, c4 = (t = new s(t)).s;
  if (a != c4) return t.s = -c4, o4.plus(t);
  var l4 = o4.c.slice(), d4 = o4.e, u4 = t.c, h4 = t.e;
  if (!l4[0] || !u4[0]) return u4[0] ? t.s = -c4 : l4[0] ? t = new s(o4) : t.s = 1, t;
  if (a = d4 - h4) {
    for ((i = a < 0) ? (a = -a, n = l4) : (h4 = d4, n = u4), n.reverse(), c4 = a; c4--; ) n.push(0);
    n.reverse();
  } else for (r = ((i = l4.length < u4.length) ? l4 : u4).length, a = c4 = 0; c4 < r; c4++) if (l4[c4] != u4[c4]) {
    i = l4[c4] < u4[c4];
    break;
  }
  if (i && (n = l4, l4 = u4, u4 = n, t.s = -t.s), (c4 = (r = u4.length) - (e = l4.length)) > 0) for (; c4--; ) l4[e++] = 0;
  for (c4 = e; r > a; ) {
    if (l4[--r] < u4[r]) {
      for (e = r; e && !l4[--e]; ) l4[e] = 9;
      --l4[e], l4[r] += 10;
    }
    l4[r] -= u4[r];
  }
  for (; l4[--c4] === 0; ) l4.pop();
  for (; l4[0] === 0; ) l4.shift(), --h4;
  return l4[0] || (t.s = 1, l4 = [h4 = 0]), t.c = l4, t.e = h4, t;
}, ve2.mod = function(t) {
  var e, r = this, n = r.constructor, i = r.s, o4 = (t = new n(t)).s;
  if (!t.c[0]) throw Error(ll);
  return r.s = t.s = 1, e = t.cmp(r) == 1, r.s = i, t.s = o4, e ? new n(r) : (i = n.DP, o4 = n.RM, n.DP = n.RM = 0, r = r.div(t), n.DP = i, n.RM = o4, this.minus(r.times(t)));
}, ve2.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s, t;
}, ve2.plus = ve2.add = function(t) {
  var e, r, n, i = this, o4 = i.constructor;
  if (t = new o4(t), i.s != t.s) return t.s = -t.s, i.minus(t);
  var s = i.e, a = i.c, c4 = t.e, l4 = t.c;
  if (!a[0] || !l4[0]) return l4[0] || (a[0] ? t = new o4(i) : t.s = i.s), t;
  if (a = a.slice(), e = s - c4) {
    for (e > 0 ? (c4 = s, n = l4) : (e = -e, n = a), n.reverse(); e--; ) n.push(0);
    n.reverse();
  }
  for (a.length - l4.length < 0 && (n = l4, l4 = a, a = n), e = l4.length, r = 0; e; a[e] %= 10) r = (a[--e] = a[e] + l4[e] + r) / 10 | 0;
  for (r && (a.unshift(r), ++c4), e = a.length; a[--e] === 0; ) a.pop();
  return t.c = a, t.e = c4, t;
}, ve2.pow = function(t) {
  var e = this, r = new e.constructor("1"), n = r, i = t < 0;
  if (t !== ~~t || t < -cl || t > cl) throw Error(Ar + "exponent");
  for (i && (t = -t); t & 1 && (n = n.times(e)), t >>= 1, !!t; ) e = e.times(e);
  return i ? r.div(n) : n;
}, ve2.prec = function(t, e) {
  if (t !== ~~t || t < 1 || t > Er) throw Error(Ar + "precision");
  return Sr(new this.constructor(this), t, e);
}, ve2.round = function(t, e) {
  if (t === kt2) t = 0;
  else if (t !== ~~t || t < -Er || t > Er) throw Error(yo2);
  return Sr(new this.constructor(this), t + this.e + 1, e);
}, ve2.sqrt = function() {
  var t, e, r, n = this, i = n.constructor, o4 = n.s, s = n.e, a = new i("0.5");
  if (!n.c[0]) return new i(n);
  if (o4 < 0) throw Error(zn + "No square root");
  o4 = Math.sqrt(+_r(n, true, true)), o4 === 0 || o4 === 1 / 0 ? (e = n.c.join(""), e.length + s & 1 || (e += "0"), o4 = Math.sqrt(e), s = ((s + 1) / 2 | 0) - (s < 0 || s & 1), t = new i((o4 == 1 / 0 ? "5e" : (o4 = o4.toExponential()).slice(0, o4.indexOf("e") + 1)) + s)) : t = new i(o4 + ""), s = t.e + (i.DP += 4);
  do
    r = t, t = a.times(r.plus(n.div(r)));
  while (r.c.slice(0, s).join("") !== t.c.slice(0, s).join(""));
  return Sr(t, (i.DP -= 4) + t.e + 1, i.RM);
}, ve2.times = ve2.mul = function(t) {
  var e, r = this, n = r.constructor, i = r.c, o4 = (t = new n(t)).c, s = i.length, a = o4.length, c4 = r.e, l4 = t.e;
  if (t.s = r.s == t.s ? 1 : -1, !i[0] || !o4[0]) return t.c = [t.e = 0], t;
  for (t.e = c4 + l4, s < a && (e = i, i = o4, o4 = e, l4 = s, s = a, a = l4), e = new Array(l4 = s + a); l4--; ) e[l4] = 0;
  for (c4 = a; c4--; ) {
    for (a = 0, l4 = s + c4; l4 > c4; ) a = e[l4] + o4[c4] * i[l4 - c4 - 1] + a, e[l4--] = a % 10, a = a / 10 | 0;
    e[l4] = a;
  }
  for (a ? ++t.e : e.shift(), c4 = e.length; !e[--c4]; ) e.pop();
  return t.c = e, t;
}, ve2.toExponential = function(t, e) {
  var r = this, n = r.c[0];
  if (t !== kt2) {
    if (t !== ~~t || t < 0 || t > Er) throw Error(yo2);
    for (r = Sr(new r.constructor(r), ++t, e); r.c.length < t; ) r.c.push(0);
  }
  return _r(r, true, !!n);
}, ve2.toFixed = function(t, e) {
  var r = this, n = r.c[0];
  if (t !== kt2) {
    if (t !== ~~t || t < 0 || t > Er) throw Error(yo2);
    for (r = Sr(new r.constructor(r), t + r.e + 1, e), t = t + r.e + 1; r.c.length < t; ) r.c.push(0);
  }
  return _r(r, false, !!n);
}, ve2[Symbol.for("nodejs.util.inspect.custom")] = ve2.toJSON = ve2.toString = function() {
  var t = this, e = t.constructor;
  return _r(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0]);
}, ve2.toNumber = function() {
  var t = +_r(this, true, true);
  if (this.constructor.strict === true && !this.eq(t.toString())) throw Error(zn + "Imprecise conversion");
  return t;
}, ve2.toPrecision = function(t, e) {
  var r = this, n = r.constructor, i = r.c[0];
  if (t !== kt2) {
    if (t !== ~~t || t < 1 || t > Er) throw Error(Ar + "precision");
    for (r = Sr(new n(r), t, e); r.c.length < t; ) r.c.push(0);
  }
  return _r(r, t <= r.e || r.e <= n.NE || r.e >= n.PE, !!i);
}, ve2.valueOf = function() {
  var t = this, e = t.constructor;
  if (e.strict === true) throw Error(zn + "valueOf disallowed");
  return _r(t, t.e <= e.NE || t.e >= e.PE, true);
};
var Wn = dl();
var xo = { bigNumber(t) {
  return t ? new Wn(t) : new Wn(0);
}, multiply(t, e) {
  if (t === void 0 || e === void 0) return new Wn(0);
  const r = new Wn(t), n = new Wn(e);
  return r.times(n);
}, formatNumberToLocalString(t, e = 2) {
  return t === void 0 ? "0.00" : typeof t == "number" ? t.toLocaleString("en-US", { maximumFractionDigits: e, minimumFractionDigits: e }) : parseFloat(t).toLocaleString("en-US", { maximumFractionDigits: e, minimumFractionDigits: e });
}, parseLocalStringToNumber(t) {
  return t === void 0 ? 0 : parseFloat(t.replace(/,/gu, ""));
} };
var Y0 = [{ type: "function", name: "transfer", stateMutability: "nonpayable", inputs: [{ name: "_to", type: "address" }, { name: "_value", type: "uint256" }], outputs: [{ name: "", type: "bool" }] }, { type: "function", name: "transferFrom", stateMutability: "nonpayable", inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_value", type: "uint256" }], outputs: [{ name: "", type: "bool" }] }];
var X0 = [{ type: "function", name: "approve", stateMutability: "nonpayable", inputs: [{ name: "spender", type: "address" }, { name: "amount", type: "uint256" }], outputs: [{ type: "bool" }] }];
var J0 = [{ type: "function", name: "transfer", stateMutability: "nonpayable", inputs: [{ name: "recipient", type: "address" }, { name: "amount", type: "uint256" }], outputs: [] }, { type: "function", name: "transferFrom", stateMutability: "nonpayable", inputs: [{ name: "sender", type: "address" }, { name: "recipient", type: "address" }, { name: "amount", type: "uint256" }], outputs: [{ name: "", type: "bool" }] }];
var G2 = { WC_NAME_SUFFIX: ".reown.id", WC_NAME_SUFFIX_LEGACY: ".wcn.id", BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org", PULSE_API_URL: "https://pulse.walletconnect.org", W3M_API_URL: "https://api.web3modal.org", CONNECTOR_ID: { WALLET_CONNECT: "walletConnect", INJECTED: "injected", WALLET_STANDARD: "announced", COINBASE: "coinbaseWallet", COINBASE_SDK: "coinbaseWalletSDK", SAFE: "safe", LEDGER: "ledger", OKX: "okx", EIP6963: "eip6963", AUTH: "ID_AUTH" }, CONNECTOR_NAMES: { AUTH: "Auth" }, AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"], LIMITS: { PENDING_TRANSACTIONS: 99 }, CHAIN: { EVM: "eip155", SOLANA: "solana", POLKADOT: "polkadot", BITCOIN: "bip122" }, CHAIN_NAME_MAP: { eip155: "EVM Networks", solana: "Solana", polkadot: "Polkadot", bip122: "Bitcoin" }, ADAPTER_TYPES: { BITCOIN: "bitcoin", SOLANA: "solana", WAGMI: "wagmi", ETHERS: "ethers", ETHERS5: "ethers5" }, USDT_CONTRACT_ADDRESSES: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7", "0x919C1c267BC06a7039e03fcc2eF738525769109c", "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e", "0x55d398326f99059fF775485246999027B3197955", "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"], HTTP_STATUS_CODES: { SERVICE_UNAVAILABLE: 503, FORBIDDEN: 403 }, UNSUPPORTED_NETWORK_NAME: "Unknown Network" };
var Q0 = { getERC20Abi: (t) => G2.USDT_CONTRACT_ADDRESSES.includes(t) ? J0 : Y0, getSwapAbi: () => X0 };
var nr = { validateCaipAddress(t) {
  var _a3;
  if (((_a3 = t.split(":")) == null ? void 0 : _a3.length) !== 3) throw new Error("Invalid CAIP Address");
  return t;
}, parseCaipAddress(t) {
  const e = t.split(":");
  if (e.length !== 3) throw new Error(`Invalid CAIP-10 address: ${t}`);
  const [r, n, i] = e;
  if (!r || !n || !i) throw new Error(`Invalid CAIP-10 address: ${t}`);
  return { chainNamespace: r, chainId: n, address: i };
}, parseCaipNetworkId(t) {
  const e = t.split(":");
  if (e.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${t}`);
  const [r, n] = e;
  if (!r || !n) throw new Error(`Invalid CAIP-2 network id: ${t}`);
  return { chainNamespace: r, chainId: n };
} };
var ce2 = { WALLET_ID: "@appkit/wallet_id", WALLET_NAME: "@appkit/wallet_name", SOLANA_WALLET: "@appkit/solana_wallet", SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain", ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id", CONNECTED_SOCIAL: "@appkit/connected_social", CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME", RECENT_WALLETS: "@appkit/recent_wallets", DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", ACTIVE_NAMESPACE: "@appkit/active_namespace", CONNECTED_NAMESPACES: "@appkit/connected_namespaces", CONNECTION_STATUS: "@appkit/connection_status", SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token", SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token", TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider", NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache", PORTFOLIO_CACHE: "@appkit/portfolio_cache", ENS_CACHE: "@appkit/ens_cache", IDENTITY_CACHE: "@appkit/identity_cache", PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types" };
function ha(t) {
  if (!t) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
  return `@appkit/${t}:connected_connector_id`;
}
var se2 = { setItem(t, e) {
  jn() && e !== void 0 && localStorage.setItem(t, e);
}, getItem(t) {
  if (jn()) return localStorage.getItem(t) || void 0;
}, removeItem(t) {
  jn() && localStorage.removeItem(t);
}, clear() {
  jn() && localStorage.clear();
} };
function jn() {
  return typeof window < "u" && typeof localStorage < "u";
}
function ir(t, e) {
  return e === "light" ? { "--w3m-accent": (t == null ? void 0 : t["--w3m-accent"]) || "hsla(231, 100%, 70%, 1)", "--w3m-background": "#fff" } : { "--w3m-accent": (t == null ? void 0 : t["--w3m-accent"]) || "hsla(230, 100%, 67%, 1)", "--w3m-background": "#121313" };
}
var e1 = Symbol();
var ul = Object.getPrototypeOf;
var pa = /* @__PURE__ */ new WeakMap();
var t1 = (t) => t && (pa.has(t) ? pa.get(t) : ul(t) === Object.prototype || ul(t) === Array.prototype);
var r1 = (t) => t1(t) && t[e1] || null;
var hl = (t, e = true) => {
  pa.set(t, e);
};
var fa = (t) => typeof t == "object" && t !== null;
var or = /* @__PURE__ */ new WeakMap();
var Fn = /* @__PURE__ */ new WeakSet();
var n1 = (t = Object.is, e = (l4, d4) => new Proxy(l4, d4), r = (l4) => fa(l4) && !Fn.has(l4) && (Array.isArray(l4) || !(Symbol.iterator in l4)) && !(l4 instanceof WeakMap) && !(l4 instanceof WeakSet) && !(l4 instanceof Error) && !(l4 instanceof Number) && !(l4 instanceof Date) && !(l4 instanceof String) && !(l4 instanceof RegExp) && !(l4 instanceof ArrayBuffer), n = (l4) => {
  switch (l4.status) {
    case "fulfilled":
      return l4.value;
    case "rejected":
      throw l4.reason;
    default:
      throw l4;
  }
}, i = /* @__PURE__ */ new WeakMap(), o4 = (l4, d4, u4 = n) => {
  const h4 = i.get(l4);
  if ((h4 == null ? void 0 : h4[0]) === d4) return h4[1];
  const p4 = Array.isArray(l4) ? [] : Object.create(Object.getPrototypeOf(l4));
  return hl(p4, true), i.set(l4, [d4, p4]), Reflect.ownKeys(l4).forEach((v4) => {
    if (Object.getOwnPropertyDescriptor(p4, v4)) return;
    const m4 = Reflect.get(l4, v4), { enumerable: g4 } = Reflect.getOwnPropertyDescriptor(l4, v4), b4 = { value: m4, enumerable: g4, configurable: true };
    if (Fn.has(m4)) hl(m4, false);
    else if (m4 instanceof Promise) delete b4.value, b4.get = () => u4(m4);
    else if (or.has(m4)) {
      const [y4, x4] = or.get(m4);
      b4.value = o4(y4, x4(), u4);
    }
    Object.defineProperty(p4, v4, b4);
  }), Object.preventExtensions(p4);
}, s = /* @__PURE__ */ new WeakMap(), a = [1, 1], c4 = (l4) => {
  if (!fa(l4)) throw new Error("object required");
  const d4 = s.get(l4);
  if (d4) return d4;
  let u4 = a[0];
  const h4 = /* @__PURE__ */ new Set(), p4 = (B, R = ++a[0]) => {
    u4 !== R && (u4 = R, h4.forEach((N4) => N4(B, R)));
  };
  let v4 = a[1];
  const m4 = (B = ++a[1]) => (v4 !== B && !h4.size && (v4 = B, b4.forEach(([R]) => {
    const N4 = R[1](B);
    N4 > u4 && (u4 = N4);
  })), u4), g4 = (B) => (R, N4) => {
    const ee2 = [...R];
    ee2[1] = [B, ...ee2[1]], p4(ee2, N4);
  }, b4 = /* @__PURE__ */ new Map(), y4 = (B, R) => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && b4.has(B)) throw new Error("prop listener already exists");
    if (h4.size) {
      const N4 = R[3](g4(B));
      b4.set(B, [R, N4]);
    } else b4.set(B, [R]);
  }, x4 = (B) => {
    var R;
    const N4 = b4.get(B);
    N4 && (b4.delete(B), (R = N4[1]) == null || R.call(N4));
  }, E4 = (B) => (h4.add(B), h4.size === 1 && b4.forEach(([N4, ee2], pe2) => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && ee2) throw new Error("remove already exists");
    const _4 = N4[3](g4(pe2));
    b4.set(pe2, [N4, _4]);
  }), () => {
    h4.delete(B), h4.size === 0 && b4.forEach(([N4, ee2], pe2) => {
      ee2 && (ee2(), b4.set(pe2, [N4]));
    });
  }), I4 = Array.isArray(l4) ? [] : Object.create(Object.getPrototypeOf(l4)), L4 = e(I4, { deleteProperty(B, R) {
    const N4 = Reflect.get(B, R);
    x4(R);
    const ee2 = Reflect.deleteProperty(B, R);
    return ee2 && p4(["delete", [R], N4]), ee2;
  }, set(B, R, N4, ee2) {
    const pe2 = Reflect.has(B, R), _4 = Reflect.get(B, R, ee2);
    if (pe2 && (t(_4, N4) || s.has(N4) && t(_4, s.get(N4)))) return true;
    x4(R), fa(N4) && (N4 = r1(N4) || N4);
    let S4 = N4;
    if (N4 instanceof Promise) N4.then((A4) => {
      N4.status = "fulfilled", N4.value = A4, p4(["resolve", [R], A4]);
    }).catch((A4) => {
      N4.status = "rejected", N4.reason = A4, p4(["reject", [R], A4]);
    });
    else {
      !or.has(N4) && r(N4) && (S4 = c4(N4));
      const A4 = !Fn.has(S4) && or.get(S4);
      A4 && y4(R, A4);
    }
    return Reflect.set(B, R, S4, ee2), p4(["set", [R], N4, _4]), true;
  } });
  s.set(l4, L4);
  const Z = [I4, m4, o4, E4];
  return or.set(L4, Z), Reflect.ownKeys(l4).forEach((B) => {
    const R = Object.getOwnPropertyDescriptor(l4, B);
    "value" in R && (L4[B] = l4[B], delete R.value, delete R.writable), Object.defineProperty(I4, B, R);
  }), L4;
}) => [c4, or, Fn, t, e, r, n, i, o4, s, a];
var [i1] = n1();
function xe3(t = {}) {
  return i1(t);
}
function We2(t, e, r) {
  const n = or.get(t);
  (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let i;
  const o4 = [], s = n[3];
  let a = false;
  const l4 = s((d4) => {
    if (o4.push(d4), r) {
      e(o4.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, a && e(o4.splice(0));
    }));
  });
  return a = true, () => {
    a = false, l4();
  };
}
function Hn(t, e) {
  const r = or.get(t);
  (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, i, o4] = r;
  return o4(n, i(), e);
}
function Ir(t) {
  return Fn.add(t), t;
}
function He2(t, e, r, n) {
  let i = t[e];
  return We2(t, () => {
    const o4 = t[e];
    Object.is(i, o4) || r(i = o4);
  }, n);
}
function o1(t) {
  const e = xe3({ data: Array.from(t || []), has(r) {
    return this.data.some((n) => n[0] === r);
  }, set(r, n) {
    const i = this.data.find((o4) => o4[0] === r);
    return i ? i[1] = n : this.data.push([r, n]), this;
  }, get(r) {
    var n;
    return (n = this.data.find((i) => i[0] === r)) == null ? void 0 : n[1];
  }, delete(r) {
    const n = this.data.findIndex((i) => i[0] === r);
    return n === -1 ? false : (this.data.splice(n, 1), true);
  }, clear() {
    this.data.splice(0);
  }, get size() {
    return this.data.length;
  }, toJSON() {
    return new Map(this.data);
  }, forEach(r) {
    this.data.forEach((n) => {
      r(n[1], n[0], this);
    });
  }, keys() {
    return this.data.map((r) => r[0]).values();
  }, values() {
    return this.data.map((r) => r[1]).values();
  }, entries() {
    return new Map(this.data).entries();
  }, get [Symbol.toStringTag]() {
    return "Map";
  }, [Symbol.iterator]() {
    return this.entries();
  } });
  return Object.defineProperties(e, { data: { enumerable: false }, size: { enumerable: false }, toJSON: { enumerable: false } }), Object.seal(e), e;
}
var ga = (typeof process < "u" && typeof process.env < "u" ? process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org";
var s1 = [{ label: "Coinbase", name: "coinbase", feeRange: "1-2%", url: "", supportedChains: ["eip155"] }, { label: "Meld.io", name: "meld", feeRange: "1-2%", url: "https://meldcrypto.com", supportedChains: ["eip155", "solana"] }];
var Te2 = { FOUR_MINUTES_MS: 24e4, TEN_SEC_MS: 1e4, FIVE_SEC_MS: 5e3, THREE_SEC_MS: 3e3, ONE_SEC_MS: 1e3, SECURE_SITE: ga, SECURE_SITE_DASHBOARD: `${ga}/dashboard`, SECURE_SITE_FAVICON: `${ga}/images/favicon.png`, RESTRICTED_TIMEZONES: ["ASIA/SHANGHAI", "ASIA/URUMQI", "ASIA/CHONGQING", "ASIA/HARBIN", "ASIA/KASHGAR", "ASIA/MACAU", "ASIA/HONG_KONG", "ASIA/MACAO", "ASIA/BEIJING", "ASIA/HARBIN"], WC_COINBASE_PAY_SDK_CHAINS: ["ethereum", "arbitrum", "polygon", "berachain", "avalanche-c-chain", "optimism", "celo", "base"], WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: "ethereum", WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: { Ethereum: "ethereum", "Arbitrum One": "arbitrum", Polygon: "polygon", Berachain: "berachain", Avalanche: "avalanche-c-chain", "OP Mainnet": "optimism", Celo: "celo", Base: "base" }, WC_COINBASE_ONRAMP_APP_ID: "bf18c88d-495a-463b-b249-0b9d3656cf5e", SWAP_SUGGESTED_TOKENS: ["ETH", "UNI", "1INCH", "AAVE", "SOL", "ADA", "AVAX", "DOT", "LINK", "NITRO", "GAIA", "MILK", "TRX", "NEAR", "GNO", "WBTC", "DAI", "WETH", "USDC", "USDT", "ARB", "BAL", "BICO", "CRV", "ENS", "MATIC", "OP"], SWAP_POPULAR_TOKENS: ["ETH", "UNI", "1INCH", "AAVE", "SOL", "ADA", "AVAX", "DOT", "LINK", "NITRO", "GAIA", "MILK", "TRX", "NEAR", "GNO", "WBTC", "DAI", "WETH", "USDC", "USDT", "ARB", "BAL", "BICO", "CRV", "ENS", "MATIC", "OP", "METAL", "DAI", "CHAMP", "WOLF", "SALE", "BAL", "BUSD", "MUST", "BTCpx", "ROUTE", "HEX", "WELT", "amDAI", "VSQ", "VISION", "AURUM", "pSP", "SNX", "VC", "LINK", "CHP", "amUSDT", "SPHERE", "FOX", "GIDDY", "GFC", "OMEN", "OX_OLD", "DE", "WNT"], BALANCE_SUPPORTED_CHAINS: ["eip155", "solana"], SWAP_SUPPORTED_NETWORKS: ["eip155:1", "eip155:42161", "eip155:10", "eip155:324", "eip155:8453", "eip155:56", "eip155:137", "eip155:100", "eip155:43114", "eip155:250", "eip155:8217", "eip155:1313161554"], NAMES_SUPPORTED_CHAIN_NAMESPACES: ["eip155"], ONRAMP_SUPPORTED_CHAIN_NAMESPACES: ["eip155", "solana"], ACTIVITY_ENABLED_CHAIN_NAMESPACES: ["eip155"], NATIVE_TOKEN_ADDRESS: { eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", solana: "So11111111111111111111111111111111111111111", polkadot: "0x", bip122: "0x" }, CONVERT_SLIPPAGE_TOLERANCE: 1, CONNECT_LABELS: { MOBILE: "Open and continue in a new browser tab" }, DEFAULT_FEATURES: { swaps: true, onramp: true, receive: true, send: true, email: true, emailShowWallets: true, socials: ["google", "x", "discord", "farcaster", "github", "apple", "facebook"], connectorTypeOrder: ["walletConnect", "recent", "injected", "featured", "custom", "external", "recommended"], history: true, analytics: true, allWallets: true, legalCheckbox: false, smartSessions: false, collapseWallets: false, walletFeaturesOrder: ["onramp", "swaps", "receive", "send"], connectMethodsOrder: void 0 }, DEFAULT_ACCOUNT_TYPES: { bip122: "payment", eip155: "smartAccount", polkadot: "eoa", solana: "eoa" }, ADAPTER_TYPES: { UNIVERSAL: "universal", SOLANA: "solana", WAGMI: "wagmi", ETHERS: "ethers", ETHERS5: "ethers5", BITCOIN: "bitcoin" } };
var q = { cacheExpiry: { portfolio: 3e4, nativeBalance: 3e4, ens: 3e5, identity: 3e5 }, isCacheExpired(t, e) {
  return Date.now() - t > e;
}, getActiveNetworkProps() {
  const t = q.getActiveNamespace(), e = q.getActiveCaipNetworkId(), r = e ? e.split(":")[1] : void 0, n = r ? isNaN(Number(r)) ? r : Number(r) : void 0;
  return { namespace: t, caipNetworkId: e, chainId: n };
}, setWalletConnectDeepLink({ name: t, href: e }) {
  try {
    se2.setItem(ce2.DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, getWalletConnectDeepLink() {
  try {
    const t = se2.getItem(ce2.DEEPLINK_CHOICE);
    if (t) return JSON.parse(t);
  } catch {
    console.info("Unable to get WalletConnect deep link");
  }
}, deleteWalletConnectDeepLink() {
  try {
    se2.removeItem(ce2.DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to delete WalletConnect deep link");
  }
}, setActiveNamespace(t) {
  try {
    se2.setItem(ce2.ACTIVE_NAMESPACE, t);
  } catch {
    console.info("Unable to set active namespace");
  }
}, setActiveCaipNetworkId(t) {
  try {
    se2.setItem(ce2.ACTIVE_CAIP_NETWORK_ID, t), q.setActiveNamespace(t.split(":")[0]);
  } catch {
    console.info("Unable to set active caip network id");
  }
}, getActiveCaipNetworkId() {
  try {
    return se2.getItem(ce2.ACTIVE_CAIP_NETWORK_ID);
  } catch {
    console.info("Unable to get active caip network id");
    return;
  }
}, deleteActiveCaipNetworkId() {
  try {
    se2.removeItem(ce2.ACTIVE_CAIP_NETWORK_ID);
  } catch {
    console.info("Unable to delete active caip network id");
  }
}, deleteConnectedConnectorId(t) {
  try {
    const e = ha(t);
    se2.removeItem(e);
  } catch {
    console.info("Unable to delete connected connector id");
  }
}, setAppKitRecent(t) {
  try {
    const e = q.getRecentWallets();
    e.find((n) => n.id === t.id) || (e.unshift(t), e.length > 2 && e.pop(), se2.setItem(ce2.RECENT_WALLETS, JSON.stringify(e)));
  } catch {
    console.info("Unable to set AppKit recent");
  }
}, getRecentWallets() {
  try {
    const t = se2.getItem(ce2.RECENT_WALLETS);
    return t ? JSON.parse(t) : [];
  } catch {
    console.info("Unable to get AppKit recent");
  }
  return [];
}, setConnectedConnectorId(t, e) {
  try {
    const r = ha(t);
    se2.setItem(r, e);
  } catch {
    console.info("Unable to set Connected Connector Id");
  }
}, getActiveNamespace() {
  try {
    return se2.getItem(ce2.ACTIVE_NAMESPACE);
  } catch {
    console.info("Unable to get active namespace");
  }
}, getConnectedConnectorId(t) {
  if (t) try {
    const e = ha(t);
    return se2.getItem(e);
  } catch {
    console.info("Unable to get connected connector id in namespace ", t);
  }
}, setConnectedSocialProvider(t) {
  try {
    se2.setItem(ce2.CONNECTED_SOCIAL, t);
  } catch {
    console.info("Unable to set connected social provider");
  }
}, getConnectedSocialProvider() {
  try {
    return se2.getItem(ce2.CONNECTED_SOCIAL);
  } catch {
    console.info("Unable to get connected social provider");
  }
}, deleteConnectedSocialProvider() {
  try {
    se2.removeItem(ce2.CONNECTED_SOCIAL);
  } catch {
    console.info("Unable to delete connected social provider");
  }
}, getConnectedSocialUsername() {
  try {
    return se2.getItem(ce2.CONNECTED_SOCIAL_USERNAME);
  } catch {
    console.info("Unable to get connected social username");
  }
}, getStoredActiveCaipNetworkId() {
  var _a3, _b;
  return (_b = (_a3 = se2.getItem(ce2.ACTIVE_CAIP_NETWORK_ID)) == null ? void 0 : _a3.split(":")) == null ? void 0 : _b[1];
}, setConnectionStatus(t) {
  try {
    se2.setItem(ce2.CONNECTION_STATUS, t);
  } catch {
    console.info("Unable to set connection status");
  }
}, getConnectionStatus() {
  try {
    return se2.getItem(ce2.CONNECTION_STATUS);
  } catch {
    return;
  }
}, getConnectedNamespaces() {
  try {
    const t = se2.getItem(ce2.CONNECTED_NAMESPACES);
    return (t == null ? void 0 : t.length) ? t.split(",") : [];
  } catch {
    return [];
  }
}, setConnectedNamespaces(t) {
  try {
    const e = Array.from(new Set(t));
    se2.setItem(ce2.CONNECTED_NAMESPACES, e.join(","));
  } catch {
    console.info("Unable to set namespaces in storage");
  }
}, addConnectedNamespace(t) {
  try {
    const e = q.getConnectedNamespaces();
    e.includes(t) || (e.push(t), q.setConnectedNamespaces(e));
  } catch {
    console.info("Unable to add connected namespace");
  }
}, removeConnectedNamespace(t) {
  try {
    const e = q.getConnectedNamespaces(), r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), q.setConnectedNamespaces(e));
  } catch {
    console.info("Unable to remove connected namespace");
  }
}, getTelegramSocialProvider() {
  try {
    return se2.getItem(ce2.TELEGRAM_SOCIAL_PROVIDER);
  } catch {
    return console.info("Unable to get telegram social provider"), null;
  }
}, setTelegramSocialProvider(t) {
  try {
    se2.setItem(ce2.TELEGRAM_SOCIAL_PROVIDER, t);
  } catch {
    console.info("Unable to set telegram social provider");
  }
}, removeTelegramSocialProvider() {
  try {
    se2.removeItem(ce2.TELEGRAM_SOCIAL_PROVIDER);
  } catch {
    console.info("Unable to remove telegram social provider");
  }
}, getBalanceCache() {
  let t = {};
  try {
    const e = se2.getItem(ce2.PORTFOLIO_CACHE);
    t = e ? JSON.parse(e) : {};
  } catch {
    console.info("Unable to get balance cache");
  }
  return t;
}, removeAddressFromBalanceCache(t) {
  try {
    const e = q.getBalanceCache();
    se2.setItem(ce2.PORTFOLIO_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
  } catch {
    console.info("Unable to remove address from balance cache", t);
  }
}, getBalanceCacheForCaipAddress(t) {
  try {
    const r = q.getBalanceCache()[t];
    if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.portfolio)) return r.balance;
    q.removeAddressFromBalanceCache(t);
  } catch {
    console.info("Unable to get balance cache for address", t);
  }
}, updateBalanceCache(t) {
  try {
    const e = q.getBalanceCache();
    e[t.caipAddress] = t, se2.setItem(ce2.PORTFOLIO_CACHE, JSON.stringify(e));
  } catch {
    console.info("Unable to update balance cache", t);
  }
}, getNativeBalanceCache() {
  let t = {};
  try {
    const e = se2.getItem(ce2.NATIVE_BALANCE_CACHE);
    t = e ? JSON.parse(e) : {};
  } catch {
    console.info("Unable to get balance cache");
  }
  return t;
}, removeAddressFromNativeBalanceCache(t) {
  try {
    const e = q.getBalanceCache();
    se2.setItem(ce2.NATIVE_BALANCE_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
  } catch {
    console.info("Unable to remove address from balance cache", t);
  }
}, getNativeBalanceCacheForCaipAddress(t) {
  try {
    const r = q.getNativeBalanceCache()[t];
    if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.nativeBalance)) return r;
    console.info("Discarding cache for address", t), q.removeAddressFromBalanceCache(t);
  } catch {
    console.info("Unable to get balance cache for address", t);
  }
}, updateNativeBalanceCache(t) {
  try {
    const e = q.getNativeBalanceCache();
    e[t.caipAddress] = t, se2.setItem(ce2.NATIVE_BALANCE_CACHE, JSON.stringify(e));
  } catch {
    console.info("Unable to update balance cache", t);
  }
}, getEnsCache() {
  let t = {};
  try {
    const e = se2.getItem(ce2.ENS_CACHE);
    t = e ? JSON.parse(e) : {};
  } catch {
    console.info("Unable to get ens name cache");
  }
  return t;
}, getEnsFromCacheForAddress(t) {
  try {
    const r = q.getEnsCache()[t];
    if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.ens)) return r.ens;
    q.removeEnsFromCache(t);
  } catch {
    console.info("Unable to get ens name from cache", t);
  }
}, updateEnsCache(t) {
  try {
    const e = q.getEnsCache();
    e[t.address] = t, se2.setItem(ce2.ENS_CACHE, JSON.stringify(e));
  } catch {
    console.info("Unable to update ens name cache", t);
  }
}, removeEnsFromCache(t) {
  try {
    const e = q.getEnsCache();
    se2.setItem(ce2.ENS_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
  } catch {
    console.info("Unable to remove ens name from cache", t);
  }
}, getIdentityCache() {
  let t = {};
  try {
    const e = se2.getItem(ce2.IDENTITY_CACHE);
    t = e ? JSON.parse(e) : {};
  } catch {
    console.info("Unable to get identity cache");
  }
  return t;
}, getIdentityFromCacheForAddress(t) {
  try {
    const r = q.getIdentityCache()[t];
    if (r && !this.isCacheExpired(r.timestamp, this.cacheExpiry.identity)) return r.identity;
    q.removeIdentityFromCache(t);
  } catch {
    console.info("Unable to get identity from cache", t);
  }
}, updateIdentityCache(t) {
  try {
    const e = q.getIdentityCache();
    e[t.address] = { identity: t.identity, timestamp: t.timestamp }, se2.setItem(ce2.IDENTITY_CACHE, JSON.stringify(e));
  } catch {
    console.info("Unable to update identity cache", t);
  }
}, removeIdentityFromCache(t) {
  try {
    const e = q.getIdentityCache();
    se2.setItem(ce2.IDENTITY_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
  } catch {
    console.info("Unable to remove identity from cache", t);
  }
}, clearAddressCache() {
  try {
    se2.removeItem(ce2.PORTFOLIO_CACHE), se2.removeItem(ce2.NATIVE_BALANCE_CACHE), se2.removeItem(ce2.ENS_CACHE), se2.removeItem(ce2.IDENTITY_CACHE);
  } catch {
    console.info("Unable to clear address cache");
  }
}, setPreferredAccountTypes(t) {
  try {
    se2.setItem(ce2.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t));
  } catch {
    console.info("Unable to set preferred account types", t);
  }
}, getPreferredAccountTypes() {
  try {
    const t = se2.getItem(ce2.PREFERRED_ACCOUNT_TYPES);
    return JSON.parse(t);
  } catch {
    console.info("Unable to get preferred account types");
  }
} };
var U3 = { isMobile() {
  var _a3;
  return this.isClient() ? !!(((_a3 = window == null ? void 0 : window.matchMedia("(pointer:coarse)")) == null ? void 0 : _a3.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : false;
}, checkCaipNetwork(t, e = "") {
  return t == null ? void 0 : t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase());
}, isAndroid() {
  if (!this.isMobile()) return false;
  const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
  return U3.isMobile() && t.includes("android");
}, isIos() {
  if (!this.isMobile()) return false;
  const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
  return t.includes("iphone") || t.includes("ipad");
}, isSafari() {
  return this.isClient() ? (window == null ? void 0 : window.navigator.userAgent.toLowerCase()).includes("safari") : false;
}, isClient() {
  return typeof window < "u";
}, isPairingExpired(t) {
  return t ? t - Date.now() <= Te2.TEN_SEC_MS : true;
}, isAllowedRetry(t, e = Te2.ONE_SEC_MS) {
  return Date.now() - t >= e;
}, copyToClopboard(t) {
  navigator.clipboard.writeText(t);
}, isIframe() {
  try {
    return (window == null ? void 0 : window.self) !== (window == null ? void 0 : window.top);
  } catch {
    return false;
  }
}, getPairingExpiry() {
  return Date.now() + Te2.FOUR_MINUTES_MS;
}, getNetworkId(t) {
  return t == null ? void 0 : t.split(":")[1];
}, getPlainAddress(t) {
  return t == null ? void 0 : t.split(":")[2];
}, async wait(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}, debounce(t, e = 500) {
  let r;
  return (...n) => {
    function i() {
      t(...n);
    }
    r && clearTimeout(r), r = setTimeout(i, e);
  };
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, formatNativeUrl(t, e) {
  if (U3.isHttpUrl(t)) return this.formatUniversalUrl(t, e);
  let r = t;
  r.includes("://") || (r = t.replaceAll("/", "").replaceAll(":", ""), r = `${r}://`), r.endsWith("/") || (r = `${r}/`), this.isTelegram() && this.isAndroid() && (e = encodeURIComponent(e));
  const n = encodeURIComponent(e);
  return { redirect: `${r}wc?uri=${n}`, href: r };
}, formatUniversalUrl(t, e) {
  if (!U3.isHttpUrl(t)) return this.formatNativeUrl(t, e);
  let r = t;
  r.endsWith("/") || (r = `${r}/`);
  const n = encodeURIComponent(e);
  return { redirect: `${r}wc?uri=${n}`, href: r };
}, getOpenTargetForPlatform(t) {
  return t === "popupWindow" ? t : this.isTelegram() ? q.getTelegramSocialProvider() ? "_top" : "_blank" : t;
}, openHref(t, e, r) {
  window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), r || "noreferrer noopener");
}, returnOpenHref(t, e, r) {
  return window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), r || "noreferrer noopener");
}, isTelegram() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}, async preloadImage(t) {
  const e = new Promise((r, n) => {
    const i = new Image();
    i.onload = r, i.onerror = n, i.crossOrigin = "anonymous", i.src = t;
  });
  return Promise.race([e, U3.wait(2e3)]);
}, formatBalance(t, e) {
  let r = "0.000";
  if (typeof t == "string") {
    const n = Number(t);
    if (n) {
      const i = Math.floor(n * 1e3) / 1e3;
      i && (r = i.toString());
    }
  }
  return `${r}${e ? ` ${e}` : ""}`;
}, formatBalance2(t, e) {
  var _a3;
  let r;
  if (t === "0") r = "0";
  else if (typeof t == "string") {
    const n = Number(t);
    n && (r = (_a3 = n.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null ? void 0 : _a3[0]);
  }
  return { value: r ?? "0", rest: r === "0" ? "000" : "", symbol: e };
}, getApiUrl() {
  return G2.W3M_API_URL;
}, getBlockchainApiUrl() {
  return G2.BLOCKCHAIN_API_RPC_URL;
}, getAnalyticsUrl() {
  return G2.PULSE_API_URL;
}, getUUID() {
  return (crypto == null ? void 0 : crypto.randomUUID) ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}, parseError(t) {
  var _a3, _b;
  return typeof t == "string" ? t : typeof ((_b = (_a3 = t == null ? void 0 : t.issues) == null ? void 0 : _a3[0]) == null ? void 0 : _b.message) == "string" ? t.issues[0].message : t instanceof Error ? t.message : "Unknown error";
}, sortRequestedNetworks(t, e = []) {
  const r = {};
  return e && t && (t.forEach((n, i) => {
    r[n] = i;
  }), e.sort((n, i) => {
    const o4 = r[n.id], s = r[i.id];
    return o4 !== void 0 && s !== void 0 ? o4 - s : o4 !== void 0 ? -1 : s !== void 0 ? 1 : 0;
  })), e;
}, calculateBalance(t) {
  let e = 0;
  for (const r of t) e += r.value ?? 0;
  return e;
}, formatTokenBalance(t) {
  const e = t.toFixed(2), [r, n] = e.split(".");
  return { dollars: r, pennies: n };
}, isAddress(t, e = "eip155") {
  switch (e) {
    case "eip155":
      if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t)) {
        if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t) || /^(?:0x)?[0-9A-F]{40}$/iu.test(t)) return true;
      } else return false;
      return false;
    case "solana":
      return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);
    default:
      return false;
  }
}, uniqueBy(t, e) {
  const r = /* @__PURE__ */ new Set();
  return t.filter((n) => {
    const i = n[e];
    return r.has(i) ? false : (r.add(i), true);
  });
}, generateSdkVersion(t, e, r) {
  const i = t.length === 0 ? Te2.ADAPTER_TYPES.UNIVERSAL : t.map((o4) => o4.adapterType).join(",");
  return `${e}-${i}-${r}`;
}, createAccount(t, e, r, n, i) {
  return { namespace: t, address: e, type: r, publicKey: n, path: i };
}, isCaipAddress(t) {
  if (typeof t != "string") return false;
  const e = t.split(":"), r = e[0];
  return e.filter(Boolean).length === 3 && r in G2.CHAIN_NAME_MAP;
}, isMac() {
  const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
  return t.includes("macintosh") && !t.includes("safari");
}, formatTelegramSocialLoginUrl(t) {
  const e = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`, r = "state=";
  if (new URL(t).host === "auth.magic.link") {
    const i = "provider_authorization_url=", o4 = t.substring(t.indexOf(i) + i.length), s = this.injectIntoUrl(decodeURIComponent(o4), r, e);
    return t.replace(o4, encodeURIComponent(s));
  }
  return this.injectIntoUrl(t, r, e);
}, injectIntoUrl(t, e, r) {
  const n = t.indexOf(e);
  if (n === -1) throw new Error(`${e} parameter not found in the URL: ${t}`);
  const i = t.indexOf("&", n), o4 = e.length, s = i !== -1 ? i : t.length, a = t.substring(0, n + o4), c4 = t.substring(n + o4, s), l4 = t.substring(i), d4 = c4 + r;
  return a + d4 + l4;
} };
async function Vn(...t) {
  const e = await fetch(...t);
  if (!e.ok) throw new Error(`HTTP status code: ${e.status}`, { cause: e });
  return e;
}
var Eo = class {
  constructor({ baseUrl: e, clientId: r }) {
    this.baseUrl = e, this.clientId = r;
  }
  async get({ headers: e, signal: r, cache: n, ...i }) {
    const o4 = this.createUrl(i);
    return (await Vn(o4, { method: "GET", headers: e, signal: r, cache: n })).json();
  }
  async getBlob({ headers: e, signal: r, ...n }) {
    const i = this.createUrl(n);
    return (await Vn(i, { method: "GET", headers: e, signal: r })).blob();
  }
  async post({ body: e, headers: r, signal: n, ...i }) {
    const o4 = this.createUrl(i);
    return (await Vn(o4, { method: "POST", headers: r, body: e ? JSON.stringify(e) : void 0, signal: n })).json();
  }
  async put({ body: e, headers: r, signal: n, ...i }) {
    const o4 = this.createUrl(i);
    return (await Vn(o4, { method: "PUT", headers: r, body: e ? JSON.stringify(e) : void 0, signal: n })).json();
  }
  async delete({ body: e, headers: r, signal: n, ...i }) {
    const o4 = this.createUrl(i);
    return (await Vn(o4, { method: "DELETE", headers: r, body: e ? JSON.stringify(e) : void 0, signal: n })).json();
  }
  createUrl({ path: e, params: r }) {
    const n = new URL(e, this.baseUrl);
    return r && Object.entries(r).forEach(([i, o4]) => {
      o4 && n.searchParams.append(i, o4);
    }), this.clientId && n.searchParams.append("clientId", this.clientId), n;
  }
};
var a1 = { handleSolanaDeeplinkRedirect(t) {
  if (f2.state.activeChain === G2.CHAIN.SOLANA) {
    const e = window.location.href, r = encodeURIComponent(e);
    if (t === "Phantom" && !("phantom" in window)) {
      const n = e.startsWith("https") ? "https" : "http", i = e.split("/")[2], o4 = encodeURIComponent(`${n}://${i}`);
      window.location.href = `https://phantom.app/ul/browse/${r}?ref=${o4}`;
    }
    t === "Coinbase Wallet" && !("coinbaseSolana" in window) && (window.location.href = `https://go.cb-w.com/dapp?cb_url=${r}`);
  }
} };
var st2 = xe3({ walletImages: {}, networkImages: {}, chainImages: {}, connectorImages: {}, tokenImages: {}, currencyImages: {} });
var Ye2 = { state: st2, subscribeNetworkImages(t) {
  return We2(st2.networkImages, () => t(st2.networkImages));
}, subscribeKey(t, e) {
  return He2(st2, t, e);
}, subscribe(t) {
  return We2(st2, () => t(st2));
}, setWalletImage(t, e) {
  st2.walletImages[t] = e;
}, setNetworkImage(t, e) {
  st2.networkImages[t] = e;
}, setChainImage(t, e) {
  st2.chainImages[t] = e;
}, setConnectorImage(t, e) {
  st2.connectorImages = { ...st2.connectorImages, [t]: e };
}, setTokenImage(t, e) {
  st2.tokenImages[t] = e;
}, setCurrencyImage(t, e) {
  st2.currencyImages[t] = e;
} };
var c1 = { eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900", solana: "a1b58899-f671-4276-6a5e-56ca5bd59700", polkadot: "", bip122: "0b4838db-0161-4ffe-022d-532bf03dba00" };
var wa = xe3({ networkImagePromises: {} });
var Oe2 = { async fetchWalletImage(t) {
  if (t) return await W2._fetchWalletImage(t), this.getWalletImageById(t);
}, async fetchNetworkImage(t) {
  if (!t) return;
  const e = this.getNetworkImageById(t);
  return e || (wa.networkImagePromises[t] || (wa.networkImagePromises[t] = W2._fetchNetworkImage(t)), await wa.networkImagePromises[t], this.getNetworkImageById(t));
}, getWalletImageById(t) {
  if (t) return Ye2.state.walletImages[t];
}, getWalletImage(t) {
  if (t == null ? void 0 : t.image_url) return t == null ? void 0 : t.image_url;
  if (t == null ? void 0 : t.image_id) return Ye2.state.walletImages[t.image_id];
}, getNetworkImage(t) {
  var _a3, _b, _c2;
  if ((_a3 = t == null ? void 0 : t.assets) == null ? void 0 : _a3.imageUrl) return (_b = t == null ? void 0 : t.assets) == null ? void 0 : _b.imageUrl;
  if ((_c2 = t == null ? void 0 : t.assets) == null ? void 0 : _c2.imageId) return Ye2.state.networkImages[t.assets.imageId];
}, getNetworkImageById(t) {
  if (t) return Ye2.state.networkImages[t];
}, getConnectorImage(t) {
  if (t == null ? void 0 : t.imageUrl) return t.imageUrl;
  if (t == null ? void 0 : t.imageId) return Ye2.state.connectorImages[t.imageId];
}, getChainImage(t) {
  return Ye2.state.networkImages[c1[t]];
} };
var l1 = { getFeatureValue(t, e) {
  const r = e == null ? void 0 : e[t];
  return r === void 0 ? Te2.DEFAULT_FEATURES[t] : r;
}, filterSocialsByPlatform(t) {
  if (!t || !t.length) return t;
  if (U3.isTelegram()) {
    if (U3.isIos()) return t.filter((e) => e !== "google");
    if (U3.isMac()) return t.filter((e) => e !== "x");
    if (U3.isAndroid()) return t.filter((e) => !["facebook", "x"].includes(e));
  }
  return t;
} };
var ne2 = xe3({ features: Te2.DEFAULT_FEATURES, projectId: "", sdkType: "appkit", sdkVersion: "html-wagmi-undefined", defaultAccountTypes: { solana: "eoa", bip122: "payment", polkadot: "eoa", eip155: "smartAccount" }, enableNetworkSwitch: true });
var T2 = { state: ne2, subscribeKey(t, e) {
  return He2(ne2, t, e);
}, setOptions(t) {
  Object.assign(ne2, t);
}, setFeatures(t) {
  if (!t) return;
  ne2.features || (ne2.features = Te2.DEFAULT_FEATURES);
  const e = { ...ne2.features, ...t };
  ne2.features = e, ne2.features.socials && (ne2.features.socials = l1.filterSocialsByPlatform(ne2.features.socials));
}, setProjectId(t) {
  ne2.projectId = t;
}, setCustomRpcUrls(t) {
  ne2.customRpcUrls = t;
}, setAllWallets(t) {
  ne2.allWallets = t;
}, setIncludeWalletIds(t) {
  ne2.includeWalletIds = t;
}, setExcludeWalletIds(t) {
  ne2.excludeWalletIds = t;
}, setFeaturedWalletIds(t) {
  ne2.featuredWalletIds = t;
}, setTokens(t) {
  ne2.tokens = t;
}, setTermsConditionsUrl(t) {
  ne2.termsConditionsUrl = t;
}, setPrivacyPolicyUrl(t) {
  ne2.privacyPolicyUrl = t;
}, setCustomWallets(t) {
  ne2.customWallets = t;
}, setIsSiweEnabled(t) {
  ne2.isSiweEnabled = t;
}, setIsUniversalProvider(t) {
  ne2.isUniversalProvider = t;
}, setSdkVersion(t) {
  ne2.sdkVersion = t;
}, setMetadata(t) {
  ne2.metadata = t;
}, setDisableAppend(t) {
  ne2.disableAppend = t;
}, setEIP6963Enabled(t) {
  ne2.enableEIP6963 = t;
}, setDebug(t) {
  ne2.debug = t;
}, setEnableWalletConnect(t) {
  ne2.enableWalletConnect = t;
}, setEnableWalletGuide(t) {
  ne2.enableWalletGuide = t;
}, setEnableAuthLogger(t) {
  ne2.enableAuthLogger = t;
}, setEnableWallets(t) {
  ne2.enableWallets = t;
}, setHasMultipleAddresses(t) {
  ne2.hasMultipleAddresses = t;
}, setSIWX(t) {
  ne2.siwx = t;
}, setConnectMethodsOrder(t) {
  ne2.features = { ...ne2.features, connectMethodsOrder: t };
}, setWalletFeaturesOrder(t) {
  ne2.features = { ...ne2.features, walletFeaturesOrder: t };
}, setSocialsOrder(t) {
  ne2.features = { ...ne2.features, socials: t };
}, setCollapseWallets(t) {
  ne2.features = { ...ne2.features, collapseWallets: t };
}, setEnableEmbedded(t) {
  ne2.enableEmbedded = t;
}, setAllowUnsupportedChain(t) {
  ne2.allowUnsupportedChain = t;
}, setManualWCControl(t) {
  ne2.manualWCControl = t;
}, setEnableNetworkSwitch(t) {
  ne2.enableNetworkSwitch = t;
}, setDefaultAccountTypes(t = {}) {
  Object.entries(t).forEach(([e, r]) => {
    r && (ne2.defaultAccountTypes[e] = r);
  });
}, setUniversalProviderConfigOverride(t) {
  ne2.universalProviderConfigOverride = t;
}, getUniversalProviderConfigOverride() {
  return ne2.universalProviderConfigOverride;
}, getSnapshot() {
  return Hn(ne2);
} };
var sr = xe3({ message: "", variant: "info", open: false });
var ar = { state: sr, subscribeKey(t, e) {
  return He2(sr, t, e);
}, open(t, e) {
  const { debug: r } = T2.state, { shortMessage: n, longMessage: i } = t;
  r && (sr.message = n, sr.variant = e, sr.open = true), i && console.error(typeof i == "function" ? i() : i);
}, close() {
  sr.open = false, sr.message = "", sr.variant = "info";
} };
var d1 = U3.getAnalyticsUrl();
var u1 = new Eo({ baseUrl: d1, clientId: null });
var h1 = ["MODAL_CREATED"];
var Mt2 = xe3({ timestamp: Date.now(), reportedErrors: {}, data: { type: "track", event: "MODAL_CREATED" } });
var le2 = { state: Mt2, subscribe(t) {
  return We2(Mt2, () => t(Mt2));
}, getSdkProperties() {
  const { projectId: t, sdkType: e, sdkVersion: r } = T2.state;
  return { projectId: t, st: e, sv: r || "html-wagmi-4.2.2" };
}, async _sendAnalyticsEvent(t) {
  try {
    const e = Q.state.address;
    if (h1.includes(t.data.event) || typeof window > "u") return;
    await u1.post({ path: "/e", params: le2.getSdkProperties(), body: { eventId: U3.getUUID(), url: window.location.href, domain: window.location.hostname, timestamp: t.timestamp, props: { ...t.data, address: e } } }), Mt2.reportedErrors.FORBIDDEN = false;
  } catch (e) {
    e instanceof Error && e.cause instanceof Response && e.cause.status === G2.HTTP_STATUS_CODES.FORBIDDEN && !Mt2.reportedErrors.FORBIDDEN && (ar.open({ shortMessage: "Invalid App Configuration", longMessage: `Origin ${jn() ? window.origin : "uknown"} not found on Allowlist - update configuration on cloud.reown.com` }, "error"), Mt2.reportedErrors.FORBIDDEN = true);
  }
}, sendEvent(t) {
  var _a3;
  Mt2.timestamp = Date.now(), Mt2.data = t, ((_a3 = T2.state.features) == null ? void 0 : _a3.analytics) && le2._sendAnalyticsEvent(Mt2);
} };
var p1 = ["1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79", "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393"];
var f1 = U3.getApiUrl();
var ht2 = new Eo({ baseUrl: f1, clientId: null });
var g1 = 40;
var pl = 4;
var w1 = 20;
var Ce2 = xe3({ promises: {}, page: 1, count: 0, featured: [], allFeatured: [], recommended: [], allRecommended: [], wallets: [], search: [], isAnalyticsEnabled: false, excludedWallets: [], isFetchingRecommendedWallets: false });
var W2 = { state: Ce2, subscribeKey(t, e) {
  return He2(Ce2, t, e);
}, _getSdkProperties() {
  const { projectId: t, sdkType: e, sdkVersion: r } = T2.state;
  return { projectId: t, st: e || "appkit", sv: r || "html-wagmi-4.2.2" };
}, _filterOutExtensions(t) {
  return T2.state.isUniversalProvider ? t.filter((e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : t;
}, async _fetchWalletImage(t) {
  const e = `${ht2.baseUrl}/getWalletImage/${t}`, r = await ht2.getBlob({ path: e, params: W2._getSdkProperties() });
  Ye2.setWalletImage(t, URL.createObjectURL(r));
}, async _fetchNetworkImage(t) {
  const e = `${ht2.baseUrl}/public/getAssetImage/${t}`, r = await ht2.getBlob({ path: e, params: W2._getSdkProperties() });
  Ye2.setNetworkImage(t, URL.createObjectURL(r));
}, async _fetchConnectorImage(t) {
  const e = `${ht2.baseUrl}/public/getAssetImage/${t}`, r = await ht2.getBlob({ path: e, params: W2._getSdkProperties() });
  Ye2.setConnectorImage(t, URL.createObjectURL(r));
}, async _fetchCurrencyImage(t) {
  const e = `${ht2.baseUrl}/public/getCurrencyImage/${t}`, r = await ht2.getBlob({ path: e, params: W2._getSdkProperties() });
  Ye2.setCurrencyImage(t, URL.createObjectURL(r));
}, async _fetchTokenImage(t) {
  const e = `${ht2.baseUrl}/public/getTokenImage/${t}`, r = await ht2.getBlob({ path: e, params: W2._getSdkProperties() });
  Ye2.setTokenImage(t, URL.createObjectURL(r));
}, async fetchNetworkImages() {
  var _a3;
  const e = (_a3 = f2.getAllRequestedCaipNetworks()) == null ? void 0 : _a3.map(({ assets: r }) => r == null ? void 0 : r.imageId).filter(Boolean).filter((r) => !Oe2.getNetworkImageById(r));
  e && await Promise.allSettled(e.map((r) => W2._fetchNetworkImage(r)));
}, async fetchConnectorImages() {
  const { connectors: t } = j2.state, e = t.map(({ imageId: r }) => r).filter(Boolean);
  await Promise.allSettled(e.map((r) => W2._fetchConnectorImage(r)));
}, async fetchCurrencyImages(t = []) {
  await Promise.allSettled(t.map((e) => W2._fetchCurrencyImage(e)));
}, async fetchTokenImages(t = []) {
  await Promise.allSettled(t.map((e) => W2._fetchTokenImage(e)));
}, async fetchWallets(t) {
  var _a3, _b;
  const e = t.exclude ?? [];
  return W2._getSdkProperties().sv.startsWith("html-core-") && e.push(...p1), await ht2.get({ path: "/getWallets", params: { ...W2._getSdkProperties(), ...t, page: String(t.page), entries: String(t.entries), include: (_a3 = t.include) == null ? void 0 : _a3.join(","), exclude: (_b = t.exclude) == null ? void 0 : _b.join(",") } });
}, async fetchFeaturedWallets() {
  const { featuredWalletIds: t } = T2.state;
  if (t == null ? void 0 : t.length) {
    const e = { ...W2._getSdkProperties(), page: 1, entries: (t == null ? void 0 : t.length) ?? pl, include: t }, { data: r } = await W2.fetchWallets(e);
    r.sort((i, o4) => t.indexOf(i.id) - t.indexOf(o4.id));
    const n = r.map((i) => i.image_id).filter(Boolean);
    await Promise.allSettled(n.map((i) => W2._fetchWalletImage(i))), Ce2.featured = r, Ce2.allFeatured = r;
  }
}, async fetchRecommendedWallets() {
  try {
    Ce2.isFetchingRecommendedWallets = true;
    const { includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: r } = T2.state, n = [...e ?? [], ...r ?? []].filter(Boolean), i = f2.getRequestedCaipNetworkIds().join(","), o4 = { page: 1, entries: pl, include: t, exclude: n, chains: i }, { data: s, count: a } = await W2.fetchWallets(o4), c4 = q.getRecentWallets(), l4 = s.map((u4) => u4.image_id).filter(Boolean), d4 = c4.map((u4) => u4.image_id).filter(Boolean);
    await Promise.allSettled([...l4, ...d4].map((u4) => W2._fetchWalletImage(u4))), Ce2.recommended = s, Ce2.allRecommended = s, Ce2.count = a ?? 0;
  } catch {
  } finally {
    Ce2.isFetchingRecommendedWallets = false;
  }
}, async fetchWalletsByPage({ page: t }) {
  const { includeWalletIds: e, excludeWalletIds: r, featuredWalletIds: n } = T2.state, i = f2.getRequestedCaipNetworkIds().join(","), o4 = [...Ce2.recommended.map(({ id: d4 }) => d4), ...r ?? [], ...n ?? []].filter(Boolean), s = { page: t, entries: g1, include: e, exclude: o4, chains: i }, { data: a, count: c4 } = await W2.fetchWallets(s), l4 = a.slice(0, w1).map((d4) => d4.image_id).filter(Boolean);
  await Promise.allSettled(l4.map((d4) => W2._fetchWalletImage(d4))), Ce2.wallets = U3.uniqueBy([...Ce2.wallets, ...W2._filterOutExtensions(a)], "id"), Ce2.count = c4 > Ce2.count ? c4 : Ce2.count, Ce2.page = t;
}, async initializeExcludedWallets({ ids: t }) {
  const e = f2.getRequestedCaipNetworkIds().join(","), r = { page: 1, entries: t.length, include: t, chains: e }, { data: n } = await W2.fetchWallets(r);
  n && n.forEach((i) => {
    Ce2.excludedWallets.push({ rdns: i.rdns, name: i.name });
  });
}, async searchWallet({ search: t, badge: e }) {
  const { includeWalletIds: r, excludeWalletIds: n } = T2.state, i = f2.getRequestedCaipNetworkIds().join(",");
  Ce2.search = [];
  const o4 = { page: 1, entries: 100, search: t == null ? void 0 : t.trim(), badge_type: e, include: r, exclude: n, chains: i }, { data: s } = await W2.fetchWallets(o4);
  le2.sendEvent({ type: "track", event: "SEARCH_WALLET", properties: { badge: e ?? "", search: t ?? "" } });
  const a = s.map((c4) => c4.image_id).filter(Boolean);
  await Promise.allSettled([...a.map((c4) => W2._fetchWalletImage(c4)), U3.wait(300)]), Ce2.search = W2._filterOutExtensions(s);
}, initPromise(t, e) {
  const r = Ce2.promises[t];
  return r || (Ce2.promises[t] = e());
}, prefetch({ fetchConnectorImages: t = true, fetchFeaturedWallets: e = true, fetchRecommendedWallets: r = true, fetchNetworkImages: n = true } = {}) {
  const i = [t && W2.initPromise("connectorImages", W2.fetchConnectorImages), e && W2.initPromise("featuredWallets", W2.fetchFeaturedWallets), r && W2.initPromise("recommendedWallets", W2.fetchRecommendedWallets), n && W2.initPromise("networkImages", W2.fetchNetworkImages)].filter(Boolean);
  return Promise.allSettled(i);
}, prefetchAnalyticsConfig() {
  var _a3;
  ((_a3 = T2.state.features) == null ? void 0 : _a3.analytics) && W2.fetchAnalyticsConfig();
}, async fetchAnalyticsConfig() {
  try {
    const { isAnalyticsEnabled: t } = await ht2.get({ path: "/getAnalyticsConfig", params: W2._getSdkProperties() });
    T2.setFeatures({ analytics: t });
  } catch {
    T2.setFeatures({ analytics: false });
  }
}, setFilterByNamespace(t) {
  if (!t) {
    Ce2.featured = Ce2.allFeatured, Ce2.recommended = Ce2.allRecommended;
    return;
  }
  const e = f2.getRequestedCaipNetworkIds().join(",");
  Ce2.featured = Ce2.allFeatured.filter((r) => {
    var _a3;
    return (_a3 = r.chains) == null ? void 0 : _a3.some((n) => e.includes(n));
  }), Ce2.recommended = Ce2.allRecommended.filter((r) => {
    var _a3;
    return (_a3 = r.chains) == null ? void 0 : _a3.some((n) => e.includes(n));
  });
} };
var be2 = xe3({ view: "Connect", history: ["Connect"], transactionStack: [] });
var D2 = { state: be2, subscribeKey(t, e) {
  return He2(be2, t, e);
}, pushTransactionStack(t) {
  be2.transactionStack.push(t);
}, popTransactionStack(t) {
  var _a3, _b;
  const e = be2.transactionStack.pop();
  if (e) if (t) this.goBack(), (_a3 = e == null ? void 0 : e.onCancel) == null ? void 0 : _a3.call(e);
  else {
    if (e.goBack) this.goBack();
    else if (e.replace) {
      const n = be2.history.indexOf("ConnectingSiwe");
      n > 0 ? this.goBackToIndex(n - 1) : (he2.close(), be2.history = []);
    } else e.view && this.reset(e.view);
    (_b = e == null ? void 0 : e.onSuccess) == null ? void 0 : _b.call(e);
  }
}, push(t, e) {
  t !== be2.view && (be2.view = t, be2.history.push(t), be2.data = e);
}, reset(t, e) {
  be2.view = t, be2.history = [t], be2.data = e;
}, replace(t, e) {
  be2.history.at(-1) === t || (be2.view = t, be2.history[be2.history.length - 1] = t, be2.data = e);
}, goBack() {
  var _a3;
  const t = !f2.state.activeCaipAddress && this.state.view === "ConnectingFarcaster";
  if (be2.history.length > 1 && !be2.history.includes("UnsupportedChain")) {
    be2.history.pop();
    const [e] = be2.history.slice(-1);
    e && (be2.view = e);
  } else he2.close();
  ((_a3 = be2.data) == null ? void 0 : _a3.wallet) && (be2.data.wallet = void 0), setTimeout(() => {
    var _a4, _b, _c2;
    if (t) {
      Q.setFarcasterUrl(void 0, f2.state.activeChain);
      const e = j2.getAuthConnector();
      (_a4 = e == null ? void 0 : e.provider) == null ? void 0 : _a4.reload();
      const r = Hn(T2.state);
      (_c2 = (_b = e == null ? void 0 : e.provider) == null ? void 0 : _b.syncDappData) == null ? void 0 : _c2.call(_b, { metadata: r.metadata, sdkVersion: r.sdkVersion, projectId: r.projectId, sdkType: r.sdkType });
    }
  }, 100);
}, goBackToIndex(t) {
  if (be2.history.length > 1) {
    be2.history = be2.history.slice(0, t + 1);
    const [e] = be2.history.slice(-1);
    e && (be2.view = e);
  }
} };
var Dt2 = xe3({ themeMode: "dark", themeVariables: {}, w3mThemeVariables: void 0 });
var $e2 = { state: Dt2, subscribe(t) {
  return We2(Dt2, () => t(Dt2));
}, setThemeMode(t) {
  Dt2.themeMode = t;
  try {
    const e = j2.getAuthConnector();
    if (e) {
      const r = $e2.getSnapshot().themeVariables;
      e.provider.syncTheme({ themeMode: t, themeVariables: r, w3mThemeVariables: ir(r, t) });
    }
  } catch {
    console.info("Unable to sync theme to auth connector");
  }
}, setThemeVariables(t) {
  Dt2.themeVariables = { ...Dt2.themeVariables, ...t };
  try {
    const e = j2.getAuthConnector();
    if (e) {
      const r = $e2.getSnapshot().themeVariables;
      e.provider.syncTheme({ themeVariables: r, w3mThemeVariables: ir(Dt2.themeVariables, Dt2.themeMode) });
    }
  } catch {
    console.info("Unable to sync theme to auth connector");
  }
}, getSnapshot() {
  return Hn(Dt2);
} };
var fl = { eip155: void 0, solana: void 0, polkadot: void 0, bip122: void 0 };
var ye2 = xe3({ allConnectors: [], connectors: [], activeConnector: void 0, filterByNamespace: void 0, activeConnectorIds: { ...fl } });
var j2 = { state: ye2, subscribe(t) {
  return We2(ye2, () => {
    t(ye2);
  });
}, subscribeKey(t, e) {
  return He2(ye2, t, e);
}, initialize(t) {
  t.forEach((e) => {
    const r = q.getConnectedConnectorId(e);
    r && this.setConnectorId(r, e);
  });
}, setActiveConnector(t) {
  t && (ye2.activeConnector = Ir(t));
}, setConnectors(t) {
  t.filter((r) => !ye2.allConnectors.some((n) => n.id === r.id && this.getConnectorName(n.name) === this.getConnectorName(r.name) && n.chain === r.chain)).forEach((r) => {
    r.type !== "MULTI_CHAIN" && ye2.allConnectors.push(Ir(r));
  }), ye2.connectors = this.mergeMultiChainConnectors(ye2.allConnectors);
}, removeAdapter(t) {
  ye2.allConnectors = ye2.allConnectors.filter((e) => e.chain !== t), ye2.connectors = this.mergeMultiChainConnectors(ye2.allConnectors);
}, mergeMultiChainConnectors(t) {
  const e = this.generateConnectorMapByName(t), r = [];
  return e.forEach((n) => {
    const i = n[0], o4 = (i == null ? void 0 : i.id) === G2.CONNECTOR_ID.AUTH;
    n.length > 1 && i ? r.push({ name: i.name, imageUrl: i.imageUrl, imageId: i.imageId, connectors: [...n], type: o4 ? "AUTH" : "MULTI_CHAIN", chain: "eip155", id: (i == null ? void 0 : i.id) || "" }) : i && r.push(i);
  }), r;
}, generateConnectorMapByName(t) {
  const e = /* @__PURE__ */ new Map();
  return t.forEach((r) => {
    const { name: n } = r, i = this.getConnectorName(n);
    if (!i) return;
    const o4 = e.get(i) || [];
    o4.find((a) => a.chain === r.chain) || o4.push(r), e.set(i, o4);
  }), e;
}, getConnectorName(t) {
  return t && ({ "Trust Wallet": "Trust" }[t] || t);
}, getUniqueConnectorsByName(t) {
  const e = [];
  return t.forEach((r) => {
    e.find((n) => n.chain === r.chain) || e.push(r);
  }), e;
}, addConnector(t) {
  var _a3, _b, _c2;
  if (t.id === G2.CONNECTOR_ID.AUTH) {
    const e = t, r = Hn(T2.state), n = $e2.getSnapshot().themeMode, i = $e2.getSnapshot().themeVariables;
    (_b = (_a3 = e == null ? void 0 : e.provider) == null ? void 0 : _a3.syncDappData) == null ? void 0 : _b.call(_a3, { metadata: r.metadata, sdkVersion: r.sdkVersion, projectId: r.projectId, sdkType: r.sdkType }), (_c2 = e == null ? void 0 : e.provider) == null ? void 0 : _c2.syncTheme({ themeMode: n, themeVariables: i, w3mThemeVariables: ir(i, n) }), this.setConnectors([t]);
  } else this.setConnectors([t]);
}, getAuthConnector(t) {
  var _a3;
  const e = t || f2.state.activeChain, r = ye2.connectors.find((n) => n.id === G2.CONNECTOR_ID.AUTH);
  if (r) return ((_a3 = r == null ? void 0 : r.connectors) == null ? void 0 : _a3.length) ? r.connectors.find((i) => i.chain === e) : r;
}, getAnnouncedConnectorRdns() {
  return ye2.connectors.filter((t) => t.type === "ANNOUNCED").map((t) => {
    var _a3;
    return (_a3 = t.info) == null ? void 0 : _a3.rdns;
  });
}, getConnectorById(t) {
  return ye2.allConnectors.find((e) => e.id === t);
}, getConnector(t, e) {
  return ye2.allConnectors.filter((n) => n.chain === f2.state.activeChain).find((n) => {
    var _a3;
    return n.explorerId === t || ((_a3 = n.info) == null ? void 0 : _a3.rdns) === e;
  });
}, syncIfAuthConnector(t) {
  var _a3, _b;
  if (t.id !== "ID_AUTH") return;
  const e = t, r = Hn(T2.state), n = $e2.getSnapshot().themeMode, i = $e2.getSnapshot().themeVariables;
  (_b = (_a3 = e == null ? void 0 : e.provider) == null ? void 0 : _a3.syncDappData) == null ? void 0 : _b.call(_a3, { metadata: r.metadata, sdkVersion: r.sdkVersion, sdkType: r.sdkType, projectId: r.projectId }), e.provider.syncTheme({ themeMode: n, themeVariables: i, w3mThemeVariables: ir(i, n) });
}, getConnectorsByNamespace(t) {
  const e = ye2.allConnectors.filter((r) => r.chain === t);
  return this.mergeMultiChainConnectors(e);
}, selectWalletConnector(t) {
  const e = j2.getConnector(t.id, t.rdns);
  f2.state.activeChain === G2.CHAIN.SOLANA && a1.handleSolanaDeeplinkRedirect((e == null ? void 0 : e.name) || t.name || ""), e ? D2.push("ConnectingExternal", { connector: e }) : D2.push("ConnectingWalletConnect", { wallet: t });
}, getConnectors(t) {
  return t ? this.getConnectorsByNamespace(t) : this.mergeMultiChainConnectors(ye2.allConnectors);
}, setFilterByNamespace(t) {
  ye2.filterByNamespace = t, ye2.connectors = this.getConnectors(t), W2.setFilterByNamespace(t);
}, setConnectorId(t, e) {
  t && (ye2.activeConnectorIds = { ...ye2.activeConnectorIds, [e]: t }, q.setConnectedConnectorId(e, t));
}, removeConnectorId(t) {
  ye2.activeConnectorIds = { ...ye2.activeConnectorIds, [t]: void 0 }, q.deleteConnectedConnectorId(t);
}, getConnectorId(t) {
  if (t) return ye2.activeConnectorIds[t];
}, isConnected(t) {
  return t ? !!ye2.activeConnectorIds[t] : Object.values(ye2.activeConnectorIds).some((e) => !!e);
}, resetConnectorIds() {
  ye2.activeConnectorIds = { ...fl };
} };
function Ao(t, e) {
  return j2.getConnectorId(t) === e;
}
function m1(t) {
  const e = Array.from(f2.state.chains.keys());
  let r = [];
  return t ? (r.push([t, f2.state.chains.get(t)]), Ao(t, G2.CONNECTOR_ID.WALLET_CONNECT) ? e.forEach((n) => {
    n !== t && Ao(n, G2.CONNECTOR_ID.WALLET_CONNECT) && r.push([n, f2.state.chains.get(n)]);
  }) : Ao(t, G2.CONNECTOR_ID.AUTH) && e.forEach((n) => {
    n !== t && Ao(n, G2.CONNECTOR_ID.AUTH) && r.push([n, f2.state.chains.get(n)]);
  })) : r = Array.from(f2.state.chains.entries()), r;
}
typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL, typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL, typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION;
var cr = { SAFE_RPC_METHODS: ["eth_accounts", "eth_blockNumber", "eth_call", "eth_chainId", "eth_estimateGas", "eth_feeHistory", "eth_gasPrice", "eth_getAccount", "eth_getBalance", "eth_getBlockByHash", "eth_getBlockByNumber", "eth_getBlockReceipts", "eth_getBlockTransactionCountByHash", "eth_getBlockTransactionCountByNumber", "eth_getCode", "eth_getFilterChanges", "eth_getFilterLogs", "eth_getLogs", "eth_getProof", "eth_getStorageAt", "eth_getTransactionByBlockHashAndIndex", "eth_getTransactionByBlockNumberAndIndex", "eth_getTransactionByHash", "eth_getTransactionCount", "eth_getTransactionReceipt", "eth_getUncleCountByBlockHash", "eth_getUncleCountByBlockNumber", "eth_maxPriorityFeePerGas", "eth_newBlockFilter", "eth_newFilter", "eth_newPendingTransactionFilter", "eth_sendRawTransaction", "eth_syncing", "eth_uninstallFilter", "wallet_getCapabilities", "wallet_getCallsStatus", "eth_getUserOperationReceipt", "eth_estimateUserOperationGas", "eth_getUserOperationByHash", "eth_supportedEntryPoints", "wallet_getAssets"], NOT_SAFE_RPC_METHODS: ["personal_sign", "eth_signTypedData_v4", "eth_sendTransaction", "solana_signMessage", "solana_signTransaction", "solana_signAllTransactions", "solana_signAndSendTransaction", "wallet_sendCalls", "wallet_grantPermissions", "wallet_revokePermissions", "eth_sendUserOperation"], GET_CHAIN_ID: "eth_chainId", RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed", RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed", ACCOUNT_TYPES: { EOA: "eoa", SMART_ACCOUNT: "smartAccount" } };
var Nr = Object.freeze({ message: "", variant: "success", svg: void 0, open: false, autoClose: true });
var Pe2 = xe3({ ...Nr });
var Ee3 = { state: Pe2, subscribeKey(t, e) {
  return He2(Pe2, t, e);
}, showLoading(t, e = {}) {
  this._showMessage({ message: t, variant: "loading", ...e });
}, showSuccess(t) {
  this._showMessage({ message: t, variant: "success" });
}, showSvg(t, e) {
  this._showMessage({ message: t, svg: e });
}, showError(t) {
  const e = U3.parseError(t);
  this._showMessage({ message: e, variant: "error" });
}, hide() {
  Pe2.message = Nr.message, Pe2.variant = Nr.variant, Pe2.svg = Nr.svg, Pe2.open = Nr.open, Pe2.autoClose = Nr.autoClose;
}, _showMessage({ message: t, svg: e, variant: r = "success", autoClose: n = Nr.autoClose }) {
  Pe2.open ? (Pe2.open = false, setTimeout(() => {
    Pe2.message = t, Pe2.variant = r, Pe2.svg = e, Pe2.open = true, Pe2.autoClose = n;
  }, 150)) : (Pe2.message = t, Pe2.variant = r, Pe2.svg = e, Pe2.open = true, Pe2.autoClose = n);
} };
var lr = { getSIWX() {
  return T2.state.siwx;
}, async initializeIfEnabled() {
  var _a3;
  const t = T2.state.siwx, e = f2.getActiveCaipAddress();
  if (!(t && e)) return;
  const [r, n, i] = e.split(":");
  if (f2.checkIfSupportedNetwork(r)) try {
    if ((await t.getSessions(`${r}:${n}`, i)).length) return;
    await he2.open({ view: "SIWXSignMessage" });
  } catch (o4) {
    console.error("SIWXUtil:initializeIfEnabled", o4), le2.sendEvent({ type: "track", event: "SIWX_AUTH_ERROR", properties: this.getSIWXEventProperties() }), await ((_a3 = Y._getClient()) == null ? void 0 : _a3.disconnect().catch(console.error)), D2.reset("Connect"), Ee3.showError("A problem occurred while trying initialize authentication");
  }
}, async requestSignMessage() {
  const t = T2.state.siwx, e = U3.getPlainAddress(f2.getActiveCaipAddress()), r = f2.getActiveCaipNetwork(), n = Y._getClient();
  if (!t) throw new Error("SIWX is not enabled");
  if (!e) throw new Error("No ActiveCaipAddress found");
  if (!r) throw new Error("No ActiveCaipNetwork or client found");
  if (!n) throw new Error("No ConnectionController client found");
  try {
    const i = await t.createMessage({ chainId: r.caipNetworkId, accountAddress: e }), o4 = i.toString();
    j2.getConnectorId(r.chainNamespace) === G2.CONNECTOR_ID.AUTH && D2.pushTransactionStack({ view: null, goBack: false, replace: true });
    const a = await n.signMessage(o4);
    await t.addSession({ data: i, message: o4, signature: a }), he2.close(), le2.sendEvent({ type: "track", event: "SIWX_AUTH_SUCCESS", properties: this.getSIWXEventProperties() });
  } catch (i) {
    const o4 = this.getSIWXEventProperties();
    (!he2.state.open || D2.state.view === "ApproveTransaction") && await he2.open({ view: "SIWXSignMessage" }), o4.isSmartAccount ? Ee3.showError("This application might not support Smart Accounts") : Ee3.showError("Signature declined"), le2.sendEvent({ type: "track", event: "SIWX_AUTH_ERROR", properties: o4 }), console.error("SWIXUtil:requestSignMessage", i);
  }
}, async cancelSignMessage() {
  var _a3, _b;
  try {
    ((_b = (_a3 = this.getSIWX()) == null ? void 0 : _a3.getRequired) == null ? void 0 : _b.call(_a3)) ? await Y.disconnect() : he2.close(), D2.reset("Connect"), le2.sendEvent({ event: "CLICK_CANCEL_SIWX", type: "track", properties: this.getSIWXEventProperties() });
  } catch (t) {
    console.error("SIWXUtil:cancelSignMessage", t);
  }
}, async getSessions() {
  const t = T2.state.siwx, e = U3.getPlainAddress(f2.getActiveCaipAddress()), r = f2.getActiveCaipNetwork();
  return t && e && r ? t.getSessions(r.caipNetworkId, e) : [];
}, async isSIWXCloseDisabled() {
  var _a3;
  const t = this.getSIWX();
  if (t) {
    const e = D2.state.view === "ApproveTransaction", r = D2.state.view === "SIWXSignMessage";
    if (e || r) return ((_a3 = t.getRequired) == null ? void 0 : _a3.call(t)) && (await this.getSessions()).length === 0;
  }
  return false;
}, async universalProviderAuthenticate({ universalProvider: t, chains: e, methods: r }) {
  var _a3, _b, _c2;
  const n = lr.getSIWX(), i = new Set(e.map((a) => a.split(":")[0]));
  if (!n || i.size !== 1 || !i.has("eip155")) return false;
  const o4 = await n.createMessage({ chainId: ((_a3 = f2.getActiveCaipNetwork()) == null ? void 0 : _a3.caipNetworkId) || "", accountAddress: "" }), s = await t.authenticate({ nonce: o4.nonce, domain: o4.domain, uri: o4.uri, exp: o4.expirationTime, iat: o4.issuedAt, nbf: o4.notBefore, requestId: o4.requestId, version: o4.version, resources: o4.resources, statement: o4.statement, chainId: o4.chainId, methods: r, chains: [o4.chainId, ...e.filter((a) => a !== o4.chainId)] });
  if (Ee3.showLoading("Authenticating...", { autoClose: false }), Q.setConnectedWalletInfo({ ...s.session.peer.metadata, name: s.session.peer.metadata.name, icon: (_b = s.session.peer.metadata.icons) == null ? void 0 : _b[0], type: "WALLET_CONNECT" }, Array.from(i)[0]), (_c2 = s == null ? void 0 : s.auths) == null ? void 0 : _c2.length) {
    const a = s.auths.map((c4) => {
      const l4 = t.client.formatAuthMessage({ request: c4.p, iss: c4.p.iss });
      return { data: { ...c4.p, accountAddress: c4.p.iss.split(":").slice(-1).join(""), chainId: c4.p.iss.split(":").slice(2, 4).join(":"), uri: c4.p.aud, version: c4.p.version || o4.version, expirationTime: c4.p.exp, issuedAt: c4.p.iat, notBefore: c4.p.nbf }, message: l4, signature: c4.s.s, cacao: c4 };
    });
    try {
      await n.setSessions(a), le2.sendEvent({ type: "track", event: "SIWX_AUTH_SUCCESS", properties: lr.getSIWXEventProperties() });
    } catch (c4) {
      throw console.error("SIWX:universalProviderAuth - failed to set sessions", c4), le2.sendEvent({ type: "track", event: "SIWX_AUTH_ERROR", properties: lr.getSIWXEventProperties() }), await t.disconnect().catch(console.error), c4;
    } finally {
      Ee3.hide();
    }
  }
  return true;
}, getSIWXEventProperties() {
  var _a3, _b;
  const t = f2.state.activeChain;
  return { network: ((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) || "", isSmartAccount: ((_b = Q.state.preferredAccountTypes) == null ? void 0 : _b[t]) === cr.ACCOUNT_TYPES.SMART_ACCOUNT };
}, async clearSessions() {
  const t = this.getSIWX();
  t && await t.setSessions([]);
} };
var Ae2 = xe3({ transactions: [], coinbaseTransactions: {}, transactionsByYear: {}, lastNetworkInView: void 0, loading: false, empty: false, next: void 0 });
var v1 = { state: Ae2, subscribe(t) {
  return We2(Ae2, () => t(Ae2));
}, setLastNetworkInView(t) {
  Ae2.lastNetworkInView = t;
}, async fetchTransactions(t, e) {
  var _a3, _b;
  if (!t) throw new Error("Transactions can't be fetched without an accountAddress");
  Ae2.loading = true;
  try {
    const r = await oe3.fetchTransactions({ account: t, cursor: Ae2.next, onramp: e, cache: e === "coinbase" ? "no-cache" : void 0, chainId: (_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId }), n = this.filterSpamTransactions(r.data), i = this.filterByConnectedChain(n), o4 = [...Ae2.transactions, ...i];
    Ae2.loading = false, e === "coinbase" ? Ae2.coinbaseTransactions = this.groupTransactionsByYearAndMonth(Ae2.coinbaseTransactions, r.data) : (Ae2.transactions = o4, Ae2.transactionsByYear = this.groupTransactionsByYearAndMonth(Ae2.transactionsByYear, i)), Ae2.empty = o4.length === 0, Ae2.next = r.next ? r.next : void 0;
  } catch {
    const n = f2.state.activeChain;
    le2.sendEvent({ type: "track", event: "ERROR_FETCH_TRANSACTIONS", properties: { address: t, projectId: T2.state.projectId, cursor: Ae2.next, isSmartAccount: ((_b = Q.state.preferredAccountTypes) == null ? void 0 : _b[n]) === cr.ACCOUNT_TYPES.SMART_ACCOUNT } }), Ee3.showError("Failed to fetch transactions"), Ae2.loading = false, Ae2.empty = true, Ae2.next = void 0;
  }
}, groupTransactionsByYearAndMonth(t = {}, e = []) {
  const r = t;
  return e.forEach((n) => {
    const i = new Date(n.metadata.minedAt).getFullYear(), o4 = new Date(n.metadata.minedAt).getMonth(), s = r[i] ?? {}, c4 = (s[o4] ?? []).filter((l4) => l4.id !== n.id);
    r[i] = { ...s, [o4]: [...c4, n].sort((l4, d4) => new Date(d4.metadata.minedAt).getTime() - new Date(l4.metadata.minedAt).getTime()) };
  }), r;
}, filterSpamTransactions(t) {
  return t.filter((e) => !e.transfers.every((n) => {
    var _a3;
    return ((_a3 = n.nft_info) == null ? void 0 : _a3.flags.is_spam) === true;
  }));
}, filterByConnectedChain(t) {
  var _a3;
  const e = (_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId;
  return t.filter((n) => n.metadata.chain === e);
}, clearCursor() {
  Ae2.next = void 0;
}, resetTransactions() {
  Ae2.transactions = [], Ae2.transactionsByYear = {}, Ae2.lastNetworkInView = void 0, Ae2.loading = false, Ae2.empty = false, Ae2.next = void 0;
} };
var Se2 = xe3({ wcError: false, buffering: false, status: "disconnected" });
var rn;
var Y = { state: Se2, subscribeKey(t, e) {
  return He2(Se2, t, e);
}, _getClient() {
  return Se2._client;
}, setClient(t) {
  Se2._client = Ir(t);
}, async connectWalletConnect() {
  var _a3, _b, _c2, _d2;
  if (U3.isTelegram() || U3.isSafari() && U3.isIos()) {
    if (rn) {
      await rn, rn = void 0;
      return;
    }
    if (!U3.isPairingExpired(Se2 == null ? void 0 : Se2.wcPairingExpiry)) {
      const t = Se2.wcUri;
      Se2.wcUri = t;
      return;
    }
    rn = (_b = (_a3 = this._getClient()) == null ? void 0 : _a3.connectWalletConnect) == null ? void 0 : _b.call(_a3).catch(() => {
    }), this.state.status = "connecting", await rn, rn = void 0, Se2.wcPairingExpiry = void 0, this.state.status = "connected";
  } else await ((_d2 = (_c2 = this._getClient()) == null ? void 0 : _c2.connectWalletConnect) == null ? void 0 : _d2.call(_c2));
}, async connectExternal(t, e, r = true) {
  var _a3, _b;
  await ((_b = (_a3 = this._getClient()) == null ? void 0 : _a3.connectExternal) == null ? void 0 : _b.call(_a3, t)), r && f2.setActiveNamespace(e);
}, async reconnectExternal(t) {
  var _a3, _b;
  await ((_b = (_a3 = this._getClient()) == null ? void 0 : _a3.reconnectExternal) == null ? void 0 : _b.call(_a3, t));
  const e = t.chain || f2.state.activeChain;
  e && j2.setConnectorId(t.id, e);
}, async setPreferredAccountType(t, e) {
  var _a3;
  he2.setLoading(true, f2.state.activeChain);
  const r = j2.getAuthConnector();
  r && (Q.setPreferredAccountType(t, e), await r.provider.setPreferredAccount(t), q.setPreferredAccountTypes(Q.state.preferredAccountTypes ?? { [e]: t }), await this.reconnectExternal(r), he2.setLoading(false, f2.state.activeChain), le2.sendEvent({ type: "track", event: "SET_PREFERRED_ACCOUNT_TYPE", properties: { accountType: t, network: ((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) || "" } }));
}, async signMessage(t) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.signMessage(t);
}, parseUnits(t, e) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.parseUnits(t, e);
}, formatUnits(t, e) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.formatUnits(t, e);
}, async sendTransaction(t) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.sendTransaction(t);
}, async getCapabilities(t) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.getCapabilities(t);
}, async grantPermissions(t) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.grantPermissions(t);
}, async walletGetAssets(t) {
  var _a3;
  return ((_a3 = this._getClient()) == null ? void 0 : _a3.walletGetAssets(t)) ?? {};
}, async estimateGas(t) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.estimateGas(t);
}, async writeContract(t) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.writeContract(t);
}, async getEnsAddress(t) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.getEnsAddress(t);
}, async getEnsAvatar(t) {
  var _a3;
  return (_a3 = this._getClient()) == null ? void 0 : _a3.getEnsAvatar(t);
}, checkInstalled(t) {
  var _a3, _b;
  return ((_b = (_a3 = this._getClient()) == null ? void 0 : _a3.checkInstalled) == null ? void 0 : _b.call(_a3, t)) || false;
}, resetWcConnection() {
  Se2.wcUri = void 0, Se2.wcPairingExpiry = void 0, Se2.wcLinking = void 0, Se2.recentWallet = void 0, Se2.status = "disconnected", v1.resetTransactions(), q.deleteWalletConnectDeepLink();
}, resetUri() {
  Se2.wcUri = void 0, Se2.wcPairingExpiry = void 0;
}, finalizeWcConnection() {
  var _a3, _b;
  const { wcLinking: t, recentWallet: e } = Y.state;
  t && q.setWalletConnectDeepLink(t), e && q.setAppKitRecent(e), le2.sendEvent({ type: "track", event: "CONNECT_SUCCESS", properties: { method: t ? "mobile" : "qrcode", name: ((_b = (_a3 = D2.state.data) == null ? void 0 : _a3.wallet) == null ? void 0 : _b.name) || "Unknown" } });
}, setWcBasic(t) {
  Se2.wcBasic = t;
}, setUri(t) {
  Se2.wcUri = t, Se2.wcPairingExpiry = U3.getPairingExpiry();
}, setWcLinking(t) {
  Se2.wcLinking = t;
}, setWcError(t) {
  Se2.wcError = t, Se2.buffering = false;
}, setRecentWallet(t) {
  Se2.recentWallet = t;
}, setBuffering(t) {
  Se2.buffering = t;
}, setStatus(t) {
  Se2.status = t;
}, async disconnect(t) {
  try {
    he2.setLoading(true, t), await lr.clearSessions(), await f2.disconnect(t), he2.setLoading(false, t), j2.setFilterByNamespace(void 0);
  } catch {
    throw new Error("Failed to disconnect");
  }
} };
var nn = xe3({ loading: false, open: false, selectedNetworkId: void 0, activeChain: void 0, initialized: false });
var zt2 = { state: nn, subscribe(t) {
  return We2(nn, () => t(nn));
}, subscribeOpen(t) {
  return He2(nn, "open", t);
}, set(t) {
  Object.assign(nn, { ...nn, ...t });
} };
function Zn(t, { strict: e = true } = {}) {
  return !t || typeof t != "string" ? false : e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
}
function dr(t) {
  return Zn(t, { strict: false }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
var gl = "2.27.0";
var ma = { getDocsUrl: ({ docsBaseUrl: t, docsPath: e = "", docsSlug: r }) => e ? `${t ?? "https://viem.sh"}${e}${r ? `#${r}` : ""}` : void 0, version: `viem@${gl}` };
var de2 = class _de extends Error {
  constructor(e, r = {}) {
    var _a3, _b;
    const n = r.cause instanceof _de ? r.cause.details : ((_a3 = r.cause) == null ? void 0 : _a3.message) ? r.cause.message : r.details, i = r.cause instanceof _de && r.cause.docsPath || r.docsPath, o4 = (_b = ma.getDocsUrl) == null ? void 0 : _b.call(ma, { ...r, docsPath: i }), s = [e || "An error occurred.", "", ...r.metaMessages ? [...r.metaMessages, ""] : [], ...o4 ? [`Docs: ${o4}`] : [], ...n ? [`Details: ${n}`] : [], ...ma.version ? [`Version: ${ma.version}`] : []].join(`
`);
    super(s, r.cause ? { cause: r.cause } : void 0), Object.defineProperty(this, "details", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "docsPath", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "metaMessages", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shortMessage", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "version", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "BaseError" }), this.details = n, this.docsPath = i, this.metaMessages = r.metaMessages, this.name = r.name ?? this.name, this.shortMessage = e, this.version = gl;
  }
  walk(e) {
    return wl(this, e);
  }
};
function wl(t, e) {
  return (e == null ? void 0 : e(t)) ? t : t && typeof t == "object" && "cause" in t && t.cause !== void 0 ? wl(t.cause, e) : e ? null : t;
}
var ml = class extends de2 {
  constructor({ offset: e, position: r, size: n }) {
    super(`Slice ${r === "start" ? "starting" : "ending"} at offset "${e}" is out-of-bounds (size: ${n}).`, { name: "SliceOffsetOutOfBoundsError" });
  }
};
var bl = class extends de2 {
  constructor({ size: e, targetSize: r, type: n }) {
    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`, { name: "SizeExceedsPaddingSizeError" });
  }
};
function on(t, { dir: e, size: r = 32 } = {}) {
  return typeof t == "string" ? C1(t, { dir: e, size: r }) : y1(t, { dir: e, size: r });
}
function C1(t, { dir: e, size: r = 32 } = {}) {
  if (r === null) return t;
  const n = t.replace("0x", "");
  if (n.length > r * 2) throw new bl({ size: Math.ceil(n.length / 2), targetSize: r, type: "hex" });
  return `0x${n[e === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
function y1(t, { dir: e, size: r = 32 } = {}) {
  if (r === null) return t;
  if (t.length > r) throw new bl({ size: t.length, targetSize: r, type: "bytes" });
  const n = new Uint8Array(r);
  for (let i = 0; i < r; i++) {
    const o4 = e === "right";
    n[o4 ? i : r - i - 1] = t[o4 ? i : t.length - i - 1];
  }
  return n;
}
var x1 = class extends de2 {
  constructor({ max: e, min: r, signed: n, size: i, value: o4 }) {
    super(`Number "${o4}" is not in safe ${i ? `${i * 8}-bit ${n ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${r} to ${e})` : `(above ${r})`}`, { name: "IntegerOutOfRangeError" });
  }
};
var E1 = class extends de2 {
  constructor({ givenSize: e, maxSize: r }) {
    super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`, { name: "SizeOverflowError" });
  }
};
function sn(t, { dir: e = "left" } = {}) {
  let r = typeof t == "string" ? t.replace("0x", "") : t, n = 0;
  for (let i = 0; i < r.length - 1 && r[e === "left" ? i : r.length - i - 1].toString() === "0"; i++) n++;
  return r = e === "left" ? r.slice(n) : r.slice(0, r.length - n), typeof t == "string" ? (r.length === 1 && e === "right" && (r = `${r}0`), `0x${r.length % 2 === 1 ? `0${r}` : r}`) : r;
}
function an(t, { size: e }) {
  if (dr(t) > e) throw new E1({ givenSize: dr(t), maxSize: e });
}
function Wt2(t, e = {}) {
  const { signed: r } = e;
  e.size && an(t, { size: e.size });
  const n = BigInt(t);
  if (!r) return n;
  const i = (t.length - 2) / 2, o4 = (1n << BigInt(i) * 8n - 1n) - 1n;
  return n <= o4 ? n : n - BigInt(`0x${"f".padStart(i * 2, "f")}`) - 1n;
}
function So(t, e = {}) {
  return Number(Wt2(t, e));
}
var A1 = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function ie2(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? Ve2(t, e) : typeof t == "string" ? vl(t, e) : typeof t == "boolean" ? S1(t, e) : jt2(t, e);
}
function S1(t, e = {}) {
  const r = `0x${Number(t)}`;
  return typeof e.size == "number" ? (an(r, { size: e.size }), on(r, { size: e.size })) : r;
}
function jt2(t, e = {}) {
  let r = "";
  for (let i = 0; i < t.length; i++) r += A1[t[i]];
  const n = `0x${r}`;
  return typeof e.size == "number" ? (an(n, { size: e.size }), on(n, { dir: "right", size: e.size })) : n;
}
function Ve2(t, e = {}) {
  const { signed: r, size: n } = e, i = BigInt(t);
  let o4;
  n ? r ? o4 = (1n << BigInt(n) * 8n - 1n) - 1n : o4 = 2n ** (BigInt(n) * 8n) - 1n : typeof t == "number" && (o4 = BigInt(Number.MAX_SAFE_INTEGER));
  const s = typeof o4 == "bigint" && r ? -o4 - 1n : 0;
  if (o4 && i > o4 || i < s) {
    const c4 = typeof t == "bigint" ? "n" : "";
    throw new x1({ max: o4 ? `${o4}${c4}` : void 0, min: `${s}${c4}`, signed: r, size: n, value: `${t}${c4}` });
  }
  const a = `0x${(r && i < 0 ? (1n << BigInt(n * 8)) + BigInt(i) : i).toString(16)}`;
  return n ? on(a, { size: n }) : a;
}
var _1 = new TextEncoder();
function vl(t, e = {}) {
  const r = _1.encode(t);
  return jt2(r, e);
}
var I1 = new TextEncoder();
function Cl(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? k1(t, e) : typeof t == "boolean" ? N1(t, e) : Zn(t) ? kr(t, e) : xl(t, e);
}
function N1(t, e = {}) {
  const r = new Uint8Array(1);
  return r[0] = Number(t), typeof e.size == "number" ? (an(r, { size: e.size }), on(r, { size: e.size })) : r;
}
var Ft2 = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function yl(t) {
  if (t >= Ft2.zero && t <= Ft2.nine) return t - Ft2.zero;
  if (t >= Ft2.A && t <= Ft2.F) return t - (Ft2.A - 10);
  if (t >= Ft2.a && t <= Ft2.f) return t - (Ft2.a - 10);
}
function kr(t, e = {}) {
  let r = t;
  e.size && (an(r, { size: e.size }), r = on(r, { dir: "right", size: e.size }));
  let n = r.slice(2);
  n.length % 2 && (n = `0${n}`);
  const i = n.length / 2, o4 = new Uint8Array(i);
  for (let s = 0, a = 0; s < i; s++) {
    const c4 = yl(n.charCodeAt(a++)), l4 = yl(n.charCodeAt(a++));
    if (c4 === void 0 || l4 === void 0) throw new de2(`Invalid byte sequence ("${n[a - 2]}${n[a - 1]}" in "${n}").`);
    o4[s] = c4 * 16 + l4;
  }
  return o4;
}
function k1(t, e) {
  const r = Ve2(t, e);
  return kr(r);
}
function xl(t, e = {}) {
  const r = I1.encode(t);
  return typeof e.size == "number" ? (an(r, { size: e.size }), on(r, { dir: "right", size: e.size })) : r;
}
function _o(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function T1(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Gn(t, ...e) {
  if (!T1(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function O1(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
  _o(t.outputLen), _o(t.blockLen);
}
function cn(t, e = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function El(t, e) {
  Gn(t);
  const r = e.outputLen;
  if (t.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
}
var Io = BigInt(2 ** 32 - 1);
var Al = BigInt(32);
function $1(t, e = false) {
  return e ? { h: Number(t & Io), l: Number(t >> Al & Io) } : { h: Number(t >> Al & Io) | 0, l: Number(t & Io) | 0 };
}
function P1(t, e = false) {
  let r = new Uint32Array(t.length), n = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: o4, l: s } = $1(t[i], e);
    [r[i], n[i]] = [o4, s];
  }
  return [r, n];
}
var B1 = (t, e, r) => t << r | e >>> 32 - r;
var R1 = (t, e, r) => e << r | t >>> 32 - r;
var L1 = (t, e, r) => e << r - 32 | t >>> 64 - r;
var U1 = (t, e, r) => t << r - 32 | e >>> 64 - r;
var ln = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function M1(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function ba(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function Tt2(t, e) {
  return t << 32 - e | t >>> e;
}
var Sl = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function D1(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
function _l(t) {
  for (let e = 0; e < t.length; e++) t[e] = D1(t[e]);
}
function z1(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function No(t) {
  return typeof t == "string" && (t = z1(t)), Gn(t), t;
}
function W1(...t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    Gn(i), e += i.length;
  }
  const r = new Uint8Array(e);
  for (let n = 0, i = 0; n < t.length; n++) {
    const o4 = t[n];
    r.set(o4, i), i += o4.length;
  }
  return r;
}
var va = class {
  clone() {
    return this._cloneInto();
  }
};
function Il(t) {
  const e = (n) => t().update(No(n)).digest(), r = t();
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e;
}
function j1(t = 32) {
  if (ln && typeof ln.getRandomValues == "function") return ln.getRandomValues(new Uint8Array(t));
  if (ln && typeof ln.randomBytes == "function") return ln.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
var Nl = [];
var kl = [];
var Tl = [];
var F1 = BigInt(0);
var qn = BigInt(1);
var H1 = BigInt(2);
var V1 = BigInt(7);
var Z1 = BigInt(256);
var G1 = BigInt(113);
for (let t = 0, e = qn, r = 1, n = 0; t < 24; t++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Nl.push(2 * (5 * n + r)), kl.push((t + 1) * (t + 2) / 2 % 64);
  let i = F1;
  for (let o4 = 0; o4 < 7; o4++) e = (e << qn ^ (e >> V1) * G1) % Z1, e & H1 && (i ^= qn << (qn << BigInt(o4)) - qn);
  Tl.push(i);
}
var [q1, K1] = P1(Tl, true);
var Ol = (t, e, r) => r > 32 ? L1(t, e, r) : B1(t, e, r);
var $l = (t, e, r) => r > 32 ? U1(t, e, r) : R1(t, e, r);
function Y1(t, e = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let s = 0; s < 10; s++) r[s] = t[s] ^ t[s + 10] ^ t[s + 20] ^ t[s + 30] ^ t[s + 40];
    for (let s = 0; s < 10; s += 2) {
      const a = (s + 8) % 10, c4 = (s + 2) % 10, l4 = r[c4], d4 = r[c4 + 1], u4 = Ol(l4, d4, 1) ^ r[a], h4 = $l(l4, d4, 1) ^ r[a + 1];
      for (let p4 = 0; p4 < 50; p4 += 10) t[s + p4] ^= u4, t[s + p4 + 1] ^= h4;
    }
    let i = t[2], o4 = t[3];
    for (let s = 0; s < 24; s++) {
      const a = kl[s], c4 = Ol(i, o4, a), l4 = $l(i, o4, a), d4 = Nl[s];
      i = t[d4], o4 = t[d4 + 1], t[d4] = c4, t[d4 + 1] = l4;
    }
    for (let s = 0; s < 50; s += 10) {
      for (let a = 0; a < 10; a++) r[a] = t[s + a];
      for (let a = 0; a < 10; a++) t[s + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
    }
    t[0] ^= q1[n], t[1] ^= K1[n];
  }
  r.fill(0);
}
var Xc = class _Xc extends va {
  constructor(e, r, n, i = false, o4 = 24) {
    if (super(), this.blockLen = e, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.rounds = o4, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, _o(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = M1(this.state);
  }
  keccak() {
    Sl || _l(this.state32), Y1(this.state32, this.rounds), Sl || _l(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    cn(this);
    const { blockLen: r, state: n } = this;
    e = No(e);
    const i = e.length;
    for (let o4 = 0; o4 < i; ) {
      const s = Math.min(r - this.pos, i - o4);
      for (let a = 0; a < s; a++) n[this.pos++] ^= e[o4++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: e, suffix: r, pos: n, blockLen: i } = this;
    e[n] ^= r, (r & 128) !== 0 && n === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    cn(this, false), Gn(e), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let i = 0, o4 = e.length; i < o4; ) {
      this.posOut >= n && this.keccak();
      const s = Math.min(n - this.posOut, o4 - i);
      e.set(r.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return _o(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (El(e, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: r, suffix: n, outputLen: i, rounds: o4, enableXOF: s } = this;
    return e || (e = new _Xc(r, n, i, s, o4)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = o4, e.suffix = n, e.outputLen = i, e.enableXOF = s, e.destroyed = this.destroyed, e;
  }
};
var X1 = (t, e, r) => Il(() => new Xc(e, t, r));
var Pl = X1(1, 136, 256 / 8);
function J1(t, e) {
  const r = e || "hex", n = Pl(Zn(t, { strict: false }) ? Cl(t) : t);
  return r === "bytes" ? n : ie2(n);
}
var ur = class extends de2 {
  constructor({ address: e }) {
    super(`Address "${e}" is invalid.`, { metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."], name: "InvalidAddressError" });
  }
};
var ko = class extends Map {
  constructor(e) {
    super(), Object.defineProperty(this, "maxSize", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.maxSize = e;
  }
  get(e) {
    const r = super.get(e);
    return super.has(e) && r !== void 0 && (this.delete(e), super.set(e, r)), r;
  }
  set(e, r) {
    if (super.set(e, r), this.maxSize && this.size > this.maxSize) {
      const n = this.keys().next().value;
      n && this.delete(n);
    }
    return this;
  }
};
var Ca = new ko(8192);
function Q1(t, e) {
  if (Ca.has(`${t}.${e}`)) return Ca.get(`${t}.${e}`);
  const r = e ? `${e}${t.toLowerCase()}` : t.substring(2).toLowerCase(), n = J1(xl(r), "bytes"), i = (e ? r.substring(`${e}0x`.length) : r).split("");
  for (let s = 0; s < 40; s += 2) n[s >> 1] >> 4 >= 8 && i[s] && (i[s] = i[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && i[s + 1] && (i[s + 1] = i[s + 1].toUpperCase());
  const o4 = `0x${i.join("")}`;
  return Ca.set(`${t}.${e}`, o4), o4;
}
var eh = /^0x[a-fA-F0-9]{40}$/;
var ya = new ko(8192);
function Ht(t, e) {
  const { strict: r = true } = e ?? {}, n = `${t}.${r}`;
  if (ya.has(n)) return ya.get(n);
  const i = eh.test(t) ? t.toLowerCase() === t ? true : r ? Q1(t) === t : true : false;
  return ya.set(n, i), i;
}
function dn(t) {
  return `0x${t.reduce((e, r) => e + r.replace("0x", ""), "")}`;
}
function th(t, e, r, { strict: n } = {}) {
  return Zn(t, { strict: false }) ? nh(t, e, r, { strict: n }) : rh(t, e, r, { strict: n });
}
function Bl(t, e) {
  if (typeof e == "number" && e > 0 && e > dr(t) - 1) throw new ml({ offset: e, position: "start", size: dr(t) });
}
function Rl(t, e, r) {
  if (typeof e == "number" && typeof r == "number" && dr(t) !== r - e) throw new ml({ offset: r, position: "end", size: dr(t) });
}
function rh(t, e, r, { strict: n } = {}) {
  Bl(t, e);
  const i = t.slice(e, r);
  return n && Rl(i, e, r), i;
}
function nh(t, e, r, { strict: n } = {}) {
  Bl(t, e);
  const i = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (r ?? t.length) * 2)}`;
  return n && Rl(i, e, r), i;
}
var Ll = class extends de2 {
  constructor({ offset: e }) {
    super(`Offset \`${e}\` cannot be negative.`, { name: "NegativeOffsetError" });
  }
};
var ih = class extends de2 {
  constructor({ length: e, position: r }) {
    super(`Position \`${r}\` is out of bounds (\`0 < position < ${e}\`).`, { name: "PositionOutOfBoundsError" });
  }
};
var oh = class extends de2 {
  constructor({ count: e, limit: r }) {
    super(`Recursive read limit of \`${r}\` exceeded (recursive read count: \`${e}\`).`, { name: "RecursiveReadLimitExceededError" });
  }
};
var sh = { bytes: new Uint8Array(), dataView: new DataView(new ArrayBuffer(0)), position: 0, positionReadCount: /* @__PURE__ */ new Map(), recursiveReadCount: 0, recursiveReadLimit: Number.POSITIVE_INFINITY, assertReadLimit() {
  if (this.recursiveReadCount >= this.recursiveReadLimit) throw new oh({ count: this.recursiveReadCount + 1, limit: this.recursiveReadLimit });
}, assertPosition(t) {
  if (t < 0 || t > this.bytes.length - 1) throw new ih({ length: this.bytes.length, position: t });
}, decrementPosition(t) {
  if (t < 0) throw new Ll({ offset: t });
  const e = this.position - t;
  this.assertPosition(e), this.position = e;
}, getReadCount(t) {
  return this.positionReadCount.get(t || this.position) || 0;
}, incrementPosition(t) {
  if (t < 0) throw new Ll({ offset: t });
  const e = this.position + t;
  this.assertPosition(e), this.position = e;
}, inspectByte(t) {
  const e = t ?? this.position;
  return this.assertPosition(e), this.bytes[e];
}, inspectBytes(t, e) {
  const r = e ?? this.position;
  return this.assertPosition(r + t - 1), this.bytes.subarray(r, r + t);
}, inspectUint8(t) {
  const e = t ?? this.position;
  return this.assertPosition(e), this.bytes[e];
}, inspectUint16(t) {
  const e = t ?? this.position;
  return this.assertPosition(e + 1), this.dataView.getUint16(e);
}, inspectUint24(t) {
  const e = t ?? this.position;
  return this.assertPosition(e + 2), (this.dataView.getUint16(e) << 8) + this.dataView.getUint8(e + 2);
}, inspectUint32(t) {
  const e = t ?? this.position;
  return this.assertPosition(e + 3), this.dataView.getUint32(e);
}, pushByte(t) {
  this.assertPosition(this.position), this.bytes[this.position] = t, this.position++;
}, pushBytes(t) {
  this.assertPosition(this.position + t.length - 1), this.bytes.set(t, this.position), this.position += t.length;
}, pushUint8(t) {
  this.assertPosition(this.position), this.bytes[this.position] = t, this.position++;
}, pushUint16(t) {
  this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, t), this.position += 2;
}, pushUint24(t) {
  this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, t >> 8), this.dataView.setUint8(this.position + 2, t & 255), this.position += 3;
}, pushUint32(t) {
  this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, t), this.position += 4;
}, readByte() {
  this.assertReadLimit(), this._touch();
  const t = this.inspectByte();
  return this.position++, t;
}, readBytes(t, e) {
  this.assertReadLimit(), this._touch();
  const r = this.inspectBytes(t);
  return this.position += e ?? t, r;
}, readUint8() {
  this.assertReadLimit(), this._touch();
  const t = this.inspectUint8();
  return this.position += 1, t;
}, readUint16() {
  this.assertReadLimit(), this._touch();
  const t = this.inspectUint16();
  return this.position += 2, t;
}, readUint24() {
  this.assertReadLimit(), this._touch();
  const t = this.inspectUint24();
  return this.position += 3, t;
}, readUint32() {
  this.assertReadLimit(), this._touch();
  const t = this.inspectUint32();
  return this.position += 4, t;
}, get remaining() {
  return this.bytes.length - this.position;
}, setPosition(t) {
  const e = this.position;
  return this.assertPosition(t), this.position = t, () => this.position = e;
}, _touch() {
  if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
  const t = this.getReadCount();
  this.positionReadCount.set(this.position, t + 1), t > 0 && this.recursiveReadCount++;
} };
function Ul(t, { recursiveReadLimit: e = 8192 } = {}) {
  const r = Object.create(sh);
  return r.bytes = t, r.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength), r.positionReadCount = /* @__PURE__ */ new Map(), r.recursiveReadLimit = e, r;
}
var Tr = (t, e, r) => JSON.stringify(t, (n, i) => {
  const o4 = typeof i == "bigint" ? i.toString() : i;
  return typeof e == "function" ? e(n, o4) : o4;
}, r);
var ah = { ether: -9, wei: 9 };
function Ml(t, e) {
  let r = t.toString();
  const n = r.startsWith("-");
  n && (r = r.slice(1)), r = r.padStart(e, "0");
  let [i, o4] = [r.slice(0, r.length - e), r.slice(r.length - e)];
  return o4 = o4.replace(/(0+)$/, ""), `${n ? "-" : ""}${i || "0"}${o4 ? `.${o4}` : ""}`;
}
function xa(t, e = "wei") {
  return Ml(t, ah[e]);
}
function ch(t) {
  const e = Object.entries(t).map(([n, i]) => i === void 0 || i === false ? null : [n, i]).filter(Boolean), r = e.reduce((n, [i]) => Math.max(n, i.length), 0);
  return e.map(([n, i]) => `  ${`${n}:`.padEnd(r + 1)}  ${i}`).join(`
`);
}
var lh = class extends de2 {
  constructor({ v: e }) {
    super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, { name: "InvalidLegacyVError" });
  }
};
var dh = class extends de2 {
  constructor({ transaction: e }) {
    super("Cannot infer a transaction type from provided transaction.", { metaMessages: ["Provided Transaction:", "{", ch(e), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- an EIP-7702 Transaction with `authorizationList`, or", "- a Legacy Transaction with `gasPrice`"], name: "InvalidSerializableTransactionError" });
  }
};
var uh = class extends de2 {
  constructor({ storageKey: e }) {
    super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length - 2) / 2)} bytes.`, { name: "InvalidStorageKeySizeError" });
  }
};
var Ea = (t) => t;
var Kn = class extends de2 {
  constructor({ body: e, cause: r, details: n, headers: i, status: o4, url: s }) {
    super("HTTP request failed.", { cause: r, details: n, metaMessages: [o4 && `Status: ${o4}`, `URL: ${Ea(s)}`, e && `Request body: ${Tr(e)}`].filter(Boolean), name: "HttpRequestError" }), Object.defineProperty(this, "body", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "headers", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "status", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "url", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.body = e, this.headers = i, this.status = o4, this.url = s;
  }
};
var Dl = class extends de2 {
  constructor({ body: e, error: r, url: n }) {
    super("RPC Request failed.", { cause: r, details: r.message, metaMessages: [`URL: ${Ea(n)}`, `Request body: ${Tr(e)}`], name: "RpcRequestError" }), Object.defineProperty(this, "code", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "data", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.code = r.code, this.data = r.data;
  }
};
var zl = class extends de2 {
  constructor({ body: e, url: r }) {
    super("The request took too long to respond.", { details: "The request timed out.", metaMessages: [`URL: ${Ea(r)}`, `Request body: ${Tr(e)}`], name: "TimeoutError" });
  }
};
var hh = -1;
var Xe2 = class extends de2 {
  constructor(e, { code: r, docsPath: n, metaMessages: i, name: o4, shortMessage: s }) {
    super(s, { cause: e, docsPath: n, metaMessages: i || (e == null ? void 0 : e.metaMessages), name: o4 || "RpcError" }), Object.defineProperty(this, "code", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.name = o4 || e.name, this.code = e instanceof Dl ? e.code : r ?? hh;
  }
};
var at3 = class extends Xe2 {
  constructor(e, r) {
    super(e, r), Object.defineProperty(this, "data", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.data = r.data;
  }
};
var Gi = class _Gi extends Xe2 {
  constructor(e) {
    super(e, { code: _Gi.code, name: "ParseRpcError", shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text." });
  }
};
Object.defineProperty(Gi, "code", { enumerable: true, configurable: true, writable: true, value: -32700 });
var qi = class _qi extends Xe2 {
  constructor(e) {
    super(e, { code: _qi.code, name: "InvalidRequestRpcError", shortMessage: "JSON is not a valid request object." });
  }
};
Object.defineProperty(qi, "code", { enumerable: true, configurable: true, writable: true, value: -32600 });
var Ki = class _Ki extends Xe2 {
  constructor(e, { method: r } = {}) {
    super(e, { code: _Ki.code, name: "MethodNotFoundRpcError", shortMessage: `The method${r ? ` "${r}"` : ""} does not exist / is not available.` });
  }
};
Object.defineProperty(Ki, "code", { enumerable: true, configurable: true, writable: true, value: -32601 });
var Yi = class _Yi extends Xe2 {
  constructor(e) {
    super(e, { code: _Yi.code, name: "InvalidParamsRpcError", shortMessage: ["Invalid parameters were provided to the RPC method.", "Double check you have provided the correct parameters."].join(`
`) });
  }
};
Object.defineProperty(Yi, "code", { enumerable: true, configurable: true, writable: true, value: -32602 });
var Ln = class _Ln extends Xe2 {
  constructor(e) {
    super(e, { code: _Ln.code, name: "InternalRpcError", shortMessage: "An internal error was received." });
  }
};
Object.defineProperty(Ln, "code", { enumerable: true, configurable: true, writable: true, value: -32603 });
var Xi = class _Xi extends Xe2 {
  constructor(e) {
    super(e, { code: _Xi.code, name: "InvalidInputRpcError", shortMessage: ["Missing or invalid parameters.", "Double check you have provided the correct parameters."].join(`
`) });
  }
};
Object.defineProperty(Xi, "code", { enumerable: true, configurable: true, writable: true, value: -32e3 });
var Ji = class _Ji extends Xe2 {
  constructor(e) {
    super(e, { code: _Ji.code, name: "ResourceNotFoundRpcError", shortMessage: "Requested resource not found." }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "ResourceNotFoundRpcError" });
  }
};
Object.defineProperty(Ji, "code", { enumerable: true, configurable: true, writable: true, value: -32001 });
var Qi = class _Qi extends Xe2 {
  constructor(e) {
    super(e, { code: _Qi.code, name: "ResourceUnavailableRpcError", shortMessage: "Requested resource not available." });
  }
};
Object.defineProperty(Qi, "code", { enumerable: true, configurable: true, writable: true, value: -32002 });
var Un = class _Un extends Xe2 {
  constructor(e) {
    super(e, { code: _Un.code, name: "TransactionRejectedRpcError", shortMessage: "Transaction creation failed." });
  }
};
Object.defineProperty(Un, "code", { enumerable: true, configurable: true, writable: true, value: -32003 });
var Qr = class _Qr extends Xe2 {
  constructor(e, { method: r } = {}) {
    super(e, { code: _Qr.code, name: "MethodNotSupportedRpcError", shortMessage: `Method${r ? ` "${r}"` : ""} is not supported.` });
  }
};
Object.defineProperty(Qr, "code", { enumerable: true, configurable: true, writable: true, value: -32004 });
var Mn = class _Mn extends Xe2 {
  constructor(e) {
    super(e, { code: _Mn.code, name: "LimitExceededRpcError", shortMessage: "Request exceeds defined limit." });
  }
};
Object.defineProperty(Mn, "code", { enumerable: true, configurable: true, writable: true, value: -32005 });
var eo = class _eo extends Xe2 {
  constructor(e) {
    super(e, { code: _eo.code, name: "JsonRpcVersionUnsupportedError", shortMessage: "Version of JSON-RPC protocol is not supported." });
  }
};
Object.defineProperty(eo, "code", { enumerable: true, configurable: true, writable: true, value: -32006 });
var en = class _en extends at3 {
  constructor(e) {
    super(e, { code: _en.code, name: "UserRejectedRequestError", shortMessage: "User rejected the request." });
  }
};
Object.defineProperty(en, "code", { enumerable: true, configurable: true, writable: true, value: 4001 });
var to = class _to extends at3 {
  constructor(e) {
    super(e, { code: _to.code, name: "UnauthorizedProviderError", shortMessage: "The requested method and/or account has not been authorized by the user." });
  }
};
Object.defineProperty(to, "code", { enumerable: true, configurable: true, writable: true, value: 4100 });
var ro = class _ro extends at3 {
  constructor(e, { method: r } = {}) {
    super(e, { code: _ro.code, name: "UnsupportedProviderMethodError", shortMessage: `The Provider does not support the requested method${r ? ` " ${r}"` : ""}.` });
  }
};
Object.defineProperty(ro, "code", { enumerable: true, configurable: true, writable: true, value: 4200 });
var no = class _no extends at3 {
  constructor(e) {
    super(e, { code: _no.code, name: "ProviderDisconnectedError", shortMessage: "The Provider is disconnected from all chains." });
  }
};
Object.defineProperty(no, "code", { enumerable: true, configurable: true, writable: true, value: 4900 });
var io = class _io extends at3 {
  constructor(e) {
    super(e, { code: _io.code, name: "ChainDisconnectedError", shortMessage: "The Provider is not connected to the requested chain." });
  }
};
Object.defineProperty(io, "code", { enumerable: true, configurable: true, writable: true, value: 4901 });
var oo = class _oo extends at3 {
  constructor(e) {
    super(e, { code: _oo.code, name: "SwitchChainError", shortMessage: "An error occurred when attempting to switch chain." });
  }
};
Object.defineProperty(oo, "code", { enumerable: true, configurable: true, writable: true, value: 4902 });
var so = class _so extends at3 {
  constructor(e) {
    super(e, { code: _so.code, name: "UnsupportedNonOptionalCapabilityError", shortMessage: "This Wallet does not support a capability that was not marked as optional." });
  }
};
Object.defineProperty(so, "code", { enumerable: true, configurable: true, writable: true, value: 5700 });
var ao = class _ao extends at3 {
  constructor(e) {
    super(e, { code: _ao.code, name: "UnsupportedChainIdError", shortMessage: "This Wallet does not support the requested chain ID." });
  }
};
Object.defineProperty(ao, "code", { enumerable: true, configurable: true, writable: true, value: 5710 });
var co = class _co extends at3 {
  constructor(e) {
    super(e, { code: _co.code, name: "DuplicateIdError", shortMessage: "There is already a bundle submitted with this ID." });
  }
};
Object.defineProperty(co, "code", { enumerable: true, configurable: true, writable: true, value: 5720 });
var lo = class _lo extends at3 {
  constructor(e) {
    super(e, { code: _lo.code, name: "UnknownBundleIdError", shortMessage: "This bundle id is unknown / has not been submitted" });
  }
};
Object.defineProperty(lo, "code", { enumerable: true, configurable: true, writable: true, value: 5730 });
var uo = class _uo extends at3 {
  constructor(e) {
    super(e, { code: _uo.code, name: "BundleTooLargeError", shortMessage: "The call bundle is too large for the Wallet to process." });
  }
};
Object.defineProperty(uo, "code", { enumerable: true, configurable: true, writable: true, value: 5740 });
var ho = class _ho extends at3 {
  constructor(e) {
    super(e, { code: _ho.code, name: "AtomicReadyWalletRejectedUpgradeError", shortMessage: "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade." });
  }
};
Object.defineProperty(ho, "code", { enumerable: true, configurable: true, writable: true, value: 5750 });
var po = class _po extends at3 {
  constructor(e) {
    super(e, { code: _po.code, name: "AtomicityNotSupportedError", shortMessage: "The wallet does not support atomic execution but the request requires it." });
  }
};
Object.defineProperty(po, "code", { enumerable: true, configurable: true, writable: true, value: 5760 });
var ph = class extends Xe2 {
  constructor(e) {
    super(e, { name: "UnknownRpcError", shortMessage: "An unknown RPC error occurred." });
  }
};
function hr(t, e = "hex") {
  const r = Wl(t), n = Ul(new Uint8Array(r.length));
  return r.encode(n), e === "hex" ? jt2(n.bytes) : n.bytes;
}
function Wl(t) {
  return Array.isArray(t) ? fh(t.map((e) => Wl(e))) : gh(t);
}
function fh(t) {
  const e = t.reduce((i, o4) => i + o4.length, 0), r = jl(e);
  return { length: e <= 55 ? 1 + e : 1 + r + e, encode(i) {
    e <= 55 ? i.pushByte(192 + e) : (i.pushByte(247 + r), r === 1 ? i.pushUint8(e) : r === 2 ? i.pushUint16(e) : r === 3 ? i.pushUint24(e) : i.pushUint32(e));
    for (const { encode: o4 } of t) o4(i);
  } };
}
function gh(t) {
  const e = typeof t == "string" ? kr(t) : t, r = jl(e.length);
  return { length: e.length === 1 && e[0] < 128 ? 1 : e.length <= 55 ? 1 + e.length : 1 + r + e.length, encode(i) {
    e.length === 1 && e[0] < 128 ? i.pushBytes(e) : e.length <= 55 ? (i.pushByte(128 + e.length), i.pushBytes(e)) : (i.pushByte(183 + r), r === 1 ? i.pushUint8(e.length) : r === 2 ? i.pushUint16(e.length) : r === 3 ? i.pushUint24(e.length) : i.pushUint32(e.length), i.pushBytes(e));
  } };
}
function jl(t) {
  if (t < 2 ** 8) return 1;
  if (t < 2 ** 16) return 2;
  if (t < 2 ** 24) return 3;
  if (t < 2 ** 32) return 4;
  throw new de2("Length is too large.");
}
var Aa = class extends de2 {
  constructor({ cause: e, message: r } = {}) {
    var _a3;
    const n = (_a3 = r == null ? void 0 : r.replace("execution reverted: ", "")) == null ? void 0 : _a3.replace("execution reverted", "");
    super(`Execution reverted ${n ? `with reason: ${n}` : "for an unknown reason"}.`, { cause: e, name: "ExecutionRevertedError" });
  }
};
Object.defineProperty(Aa, "code", { enumerable: true, configurable: true, writable: true, value: 3 }), Object.defineProperty(Aa, "nodeMessage", { enumerable: true, configurable: true, writable: true, value: /execution reverted/ });
var Yn = class extends de2 {
  constructor({ cause: e, maxFeePerGas: r } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${r ? ` = ${xa(r)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, { cause: e, name: "FeeCapTooHighError" });
  }
};
Object.defineProperty(Yn, "nodeMessage", { enumerable: true, configurable: true, writable: true, value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/ });
var Sa = class extends de2 {
  constructor({ cause: e, maxPriorityFeePerGas: r, maxFeePerGas: n } = {}) {
    super([`The provided tip (\`maxPriorityFeePerGas\`${r ? ` = ${xa(r)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n ? ` = ${xa(n)} gwei` : ""}).`].join(`
`), { cause: e, name: "TipAboveFeeCapError" });
  }
};
Object.defineProperty(Sa, "nodeMessage", { enumerable: true, configurable: true, writable: true, value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/ });
function To(t, e) {
  return ({ exclude: r, format: n }) => ({ exclude: r, format: (i) => {
    const o4 = e(i);
    if (r) for (const s of r) delete o4[s];
    return { ...o4, ...n(i) };
  }, type: t });
}
var wh = { legacy: "0x0", eip2930: "0x1", eip1559: "0x2", eip4844: "0x3", eip7702: "0x4" };
function mh(t) {
  const e = {};
  return typeof t.authorizationList < "u" && (e.authorizationList = vh(t.authorizationList)), typeof t.accessList < "u" && (e.accessList = t.accessList), typeof t.blobVersionedHashes < "u" && (e.blobVersionedHashes = t.blobVersionedHashes), typeof t.blobs < "u" && (typeof t.blobs[0] != "string" ? e.blobs = t.blobs.map((r) => jt2(r)) : e.blobs = t.blobs), typeof t.data < "u" && (e.data = t.data), typeof t.from < "u" && (e.from = t.from), typeof t.gas < "u" && (e.gas = Ve2(t.gas)), typeof t.gasPrice < "u" && (e.gasPrice = Ve2(t.gasPrice)), typeof t.maxFeePerBlobGas < "u" && (e.maxFeePerBlobGas = Ve2(t.maxFeePerBlobGas)), typeof t.maxFeePerGas < "u" && (e.maxFeePerGas = Ve2(t.maxFeePerGas)), typeof t.maxPriorityFeePerGas < "u" && (e.maxPriorityFeePerGas = Ve2(t.maxPriorityFeePerGas)), typeof t.nonce < "u" && (e.nonce = Ve2(t.nonce)), typeof t.to < "u" && (e.to = t.to), typeof t.type < "u" && (e.type = wh[t.type]), typeof t.value < "u" && (e.value = Ve2(t.value)), e;
}
var bh = To("transactionRequest", mh);
function vh(t) {
  return t.map((e) => ({ address: e.address, r: e.r ? Ve2(BigInt(e.r)) : e.r, s: e.s ? Ve2(BigInt(e.s)) : e.s, chainId: Ve2(e.chainId), nonce: Ve2(e.nonce), ...typeof e.yParity < "u" ? { yParity: Ve2(e.yParity) } : {}, ...typeof e.v < "u" && typeof e.yParity > "u" ? { v: Ve2(e.v) } : {} }));
}
var Oo = 2n ** 256n - 1n;
var Fl = { "0x0": "legacy", "0x1": "eip2930", "0x2": "eip1559", "0x3": "eip4844", "0x4": "eip7702" };
function $o(t) {
  const e = { ...t, blockHash: t.blockHash ? t.blockHash : null, blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null, chainId: t.chainId ? So(t.chainId) : void 0, gas: t.gas ? BigInt(t.gas) : void 0, gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0, maxFeePerBlobGas: t.maxFeePerBlobGas ? BigInt(t.maxFeePerBlobGas) : void 0, maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0, maxPriorityFeePerGas: t.maxPriorityFeePerGas ? BigInt(t.maxPriorityFeePerGas) : void 0, nonce: t.nonce ? So(t.nonce) : void 0, to: t.to ? t.to : null, transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null, type: t.type ? Fl[t.type] : void 0, typeHex: t.type ? t.type : void 0, value: t.value ? BigInt(t.value) : void 0, v: t.v ? BigInt(t.v) : void 0 };
  return t.authorizationList && (e.authorizationList = Ch(t.authorizationList)), e.yParity = (() => {
    if (t.yParity) return Number(t.yParity);
    if (typeof e.v == "bigint") {
      if (e.v === 0n || e.v === 27n) return 0;
      if (e.v === 1n || e.v === 28n) return 1;
      if (e.v >= 35n) return e.v % 2n === 0n ? 1 : 0;
    }
  })(), e.type === "legacy" && (delete e.accessList, delete e.maxFeePerBlobGas, delete e.maxFeePerGas, delete e.maxPriorityFeePerGas, delete e.yParity), e.type === "eip2930" && (delete e.maxFeePerBlobGas, delete e.maxFeePerGas, delete e.maxPriorityFeePerGas), e.type === "eip1559" && delete e.maxFeePerBlobGas, e;
}
var Hl = To("transaction", $o);
function Ch(t) {
  return t.map((e) => ({ address: e.address, chainId: Number(e.chainId), nonce: Number(e.nonce), r: e.r, s: e.s, yParity: Number(e.yParity) }));
}
function yh(t) {
  const e = (t.transactions ?? []).map((r) => typeof r == "string" ? r : $o(r));
  return { ...t, baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null, blobGasUsed: t.blobGasUsed ? BigInt(t.blobGasUsed) : void 0, difficulty: t.difficulty ? BigInt(t.difficulty) : void 0, excessBlobGas: t.excessBlobGas ? BigInt(t.excessBlobGas) : void 0, gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0, gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0, hash: t.hash ? t.hash : null, logsBloom: t.logsBloom ? t.logsBloom : null, nonce: t.nonce ? t.nonce : null, number: t.number ? BigInt(t.number) : null, size: t.size ? BigInt(t.size) : void 0, timestamp: t.timestamp ? BigInt(t.timestamp) : void 0, transactions: e, totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null };
}
var Vl = To("block", yh);
function Zl(t) {
  const { kzg: e } = t, r = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"), n = typeof t.blobs[0] == "string" ? t.blobs.map((o4) => kr(o4)) : t.blobs, i = [];
  for (const o4 of n) i.push(Uint8Array.from(e.blobToKzgCommitment(o4)));
  return r === "bytes" ? i : i.map((o4) => jt2(o4));
}
function Gl(t) {
  const { kzg: e } = t, r = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"), n = typeof t.blobs[0] == "string" ? t.blobs.map((s) => kr(s)) : t.blobs, i = typeof t.commitments[0] == "string" ? t.commitments.map((s) => kr(s)) : t.commitments, o4 = [];
  for (let s = 0; s < n.length; s++) {
    const a = n[s], c4 = i[s];
    o4.push(Uint8Array.from(e.computeBlobKzgProof(a, c4)));
  }
  return r === "bytes" ? o4 : o4.map((s) => jt2(s));
}
function xh(t, e, r, n) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, r, n);
  const i = BigInt(32), o4 = BigInt(4294967295), s = Number(r >> i & o4), a = Number(r & o4), c4 = n ? 4 : 0, l4 = n ? 0 : 4;
  t.setUint32(e + c4, s, n), t.setUint32(e + l4, a, n);
}
function Eh(t, e, r) {
  return t & e ^ ~t & r;
}
function Ah(t, e, r) {
  return t & e ^ t & r ^ e & r;
}
var Sh = class extends va {
  constructor(e, r, n, i) {
    super(), this.blockLen = e, this.outputLen = r, this.padOffset = n, this.isLE = i, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e), this.view = ba(this.buffer);
  }
  update(e) {
    cn(this);
    const { view: r, buffer: n, blockLen: i } = this;
    e = No(e);
    const o4 = e.length;
    for (let s = 0; s < o4; ) {
      const a = Math.min(i - this.pos, o4 - s);
      if (a === i) {
        const c4 = ba(e);
        for (; i <= o4 - s; s += i) this.process(c4, s);
        continue;
      }
      n.set(e.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === i && (this.process(r, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    cn(this), El(e, this), this.finished = true;
    const { buffer: r, view: n, blockLen: i, isLE: o4 } = this;
    let { pos: s } = this;
    r[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > i - s && (this.process(n, 0), s = 0);
    for (let u4 = s; u4 < i; u4++) r[u4] = 0;
    xh(n, i - 8, BigInt(this.length * 8), o4), this.process(n, 0);
    const a = ba(e), c4 = this.outputLen;
    if (c4 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l4 = c4 / 4, d4 = this.get();
    if (l4 > d4.length) throw new Error("_sha2: outputLen bigger than state");
    for (let u4 = 0; u4 < l4; u4++) a.setUint32(4 * u4, d4[u4], o4);
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const n = e.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: r, buffer: n, length: i, finished: o4, destroyed: s, pos: a } = this;
    return e.length = i, e.pos = a, e.finished = o4, e.destroyed = s, i % r && e.buffer.set(n), e;
  }
};
var _h = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var pr = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
var fr = new Uint32Array(64);
var Ih = class extends Sh {
  constructor() {
    super(64, 32, 8, false), this.A = pr[0] | 0, this.B = pr[1] | 0, this.C = pr[2] | 0, this.D = pr[3] | 0, this.E = pr[4] | 0, this.F = pr[5] | 0, this.G = pr[6] | 0, this.H = pr[7] | 0;
  }
  get() {
    const { A: e, B: r, C: n, D: i, E: o4, F: s, G: a, H: c4 } = this;
    return [e, r, n, i, o4, s, a, c4];
  }
  set(e, r, n, i, o4, s, a, c4) {
    this.A = e | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = o4 | 0, this.F = s | 0, this.G = a | 0, this.H = c4 | 0;
  }
  process(e, r) {
    for (let u4 = 0; u4 < 16; u4++, r += 4) fr[u4] = e.getUint32(r, false);
    for (let u4 = 16; u4 < 64; u4++) {
      const h4 = fr[u4 - 15], p4 = fr[u4 - 2], v4 = Tt2(h4, 7) ^ Tt2(h4, 18) ^ h4 >>> 3, m4 = Tt2(p4, 17) ^ Tt2(p4, 19) ^ p4 >>> 10;
      fr[u4] = m4 + fr[u4 - 7] + v4 + fr[u4 - 16] | 0;
    }
    let { A: n, B: i, C: o4, D: s, E: a, F: c4, G: l4, H: d4 } = this;
    for (let u4 = 0; u4 < 64; u4++) {
      const h4 = Tt2(a, 6) ^ Tt2(a, 11) ^ Tt2(a, 25), p4 = d4 + h4 + Eh(a, c4, l4) + _h[u4] + fr[u4] | 0, m4 = (Tt2(n, 2) ^ Tt2(n, 13) ^ Tt2(n, 22)) + Ah(n, i, o4) | 0;
      d4 = l4, l4 = c4, c4 = a, a = s + p4 | 0, s = o4, o4 = i, i = n, n = p4 + m4 | 0;
    }
    n = n + this.A | 0, i = i + this.B | 0, o4 = o4 + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, c4 = c4 + this.F | 0, l4 = l4 + this.G | 0, d4 = d4 + this.H | 0, this.set(n, i, o4, s, a, c4, l4, d4);
  }
  roundClean() {
    fr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
var ql = Il(() => new Ih());
function Nh(t, e) {
  const r = e || "hex", n = ql(Zn(t, { strict: false }) ? Cl(t) : t);
  return r === "bytes" ? n : ie2(n);
}
function kh(t) {
  const { commitment: e, version: r = 1 } = t, n = t.to ?? (typeof e == "string" ? "hex" : "bytes"), i = Nh(e, "bytes");
  return i.set([r], 0), n === "bytes" ? i : jt2(i);
}
function Th(t) {
  const { commitments: e, version: r } = t, n = t.to ?? (typeof e[0] == "string" ? "hex" : "bytes"), i = [];
  for (const o4 of e) i.push(kh({ commitment: o4, to: n, version: r }));
  return i;
}
var Kl = 6;
var Yl = 32;
var _a = 4096;
var Xl = Yl * _a;
var Jl = Xl * Kl - 1 - 1 * _a * Kl;
var Ql = 1;
var Oh = class extends de2 {
  constructor({ maxSize: e, size: r }) {
    super("Blob size is too large.", { metaMessages: [`Max: ${e} bytes`, `Given: ${r} bytes`], name: "BlobSizeTooLargeError" });
  }
};
var ed = class extends de2 {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
};
var $h = class extends de2 {
  constructor({ hash: e, size: r }) {
    super(`Versioned hash "${e}" size is invalid.`, { metaMessages: ["Expected: 32", `Received: ${r}`], name: "InvalidVersionedHashSizeError" });
  }
};
var Ph = class extends de2 {
  constructor({ hash: e, version: r }) {
    super(`Versioned hash "${e}" version is invalid.`, { metaMessages: [`Expected: ${Ql}`, `Received: ${r}`], name: "InvalidVersionedHashVersionError" });
  }
};
function Bh(t) {
  const e = t.to ?? (typeof t.data == "string" ? "hex" : "bytes"), r = typeof t.data == "string" ? kr(t.data) : t.data, n = dr(r);
  if (!n) throw new ed();
  if (n > Jl) throw new Oh({ maxSize: Jl, size: n });
  const i = [];
  let o4 = true, s = 0;
  for (; o4; ) {
    const a = Ul(new Uint8Array(Xl));
    let c4 = 0;
    for (; c4 < _a; ) {
      const l4 = r.slice(s, s + (Yl - 1));
      if (a.pushByte(0), a.pushBytes(l4), l4.length < 31) {
        a.pushByte(128), o4 = false;
        break;
      }
      c4++, s += 31;
    }
    i.push(a);
  }
  return e === "bytes" ? i.map((a) => a.bytes) : i.map((a) => jt2(a.bytes));
}
function Rh(t) {
  const { data: e, kzg: r, to: n } = t, i = t.blobs ?? Bh({ data: e, to: n }), o4 = t.commitments ?? Zl({ blobs: i, kzg: r, to: n }), s = t.proofs ?? Gl({ blobs: i, commitments: o4, kzg: r, to: n }), a = [];
  for (let c4 = 0; c4 < i.length; c4++) a.push({ blob: i[c4], commitment: o4[c4], proof: s[c4] });
  return a;
}
function Lh(t) {
  if (t.type) return t.type;
  if (typeof t.authorizationList < "u") return "eip7702";
  if (typeof t.blobs < "u" || typeof t.blobVersionedHashes < "u" || typeof t.maxFeePerBlobGas < "u" || typeof t.sidecars < "u") return "eip4844";
  if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u") return "eip1559";
  if (typeof t.gasPrice < "u") return typeof t.accessList < "u" ? "eip2930" : "legacy";
  throw new dh({ transaction: t });
}
function Uh(t, { args: e, eventName: r } = {}) {
  return { ...t, blockHash: t.blockHash ? t.blockHash : null, blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null, logIndex: t.logIndex ? Number(t.logIndex) : null, transactionHash: t.transactionHash ? t.transactionHash : null, transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null, ...r ? { args: e, eventName: r } : {} };
}
var Xn = class extends de2 {
  constructor({ chainId: e }) {
    super(typeof e == "number" ? `Chain ID "${e}" is invalid.` : "Chain ID is invalid.", { name: "InvalidChainIdError" });
  }
};
function Mh() {
  let t = () => {
  }, e = () => {
  };
  return { promise: new Promise((n, i) => {
    t = n, e = i;
  }), resolve: t, reject: e };
}
var Ia = /* @__PURE__ */ new Map();
function Dh({ fn: t, id: e, shouldSplitBatch: r, wait: n = 0, sort: i }) {
  const o4 = async () => {
    const d4 = c4();
    s();
    const u4 = d4.map(({ args: h4 }) => h4);
    u4.length !== 0 && t(u4).then((h4) => {
      i && Array.isArray(h4) && h4.sort(i);
      for (let p4 = 0; p4 < d4.length; p4++) {
        const { resolve: v4 } = d4[p4];
        v4 == null ? void 0 : v4([h4[p4], h4]);
      }
    }).catch((h4) => {
      for (let p4 = 0; p4 < d4.length; p4++) {
        const { reject: v4 } = d4[p4];
        v4 == null ? void 0 : v4(h4);
      }
    });
  }, s = () => Ia.delete(e), a = () => c4().map(({ args: d4 }) => d4), c4 = () => Ia.get(e) || [], l4 = (d4) => Ia.set(e, [...c4(), d4]);
  return { flush: s, async schedule(d4) {
    const { promise: u4, resolve: h4, reject: p4 } = Mh();
    return (r == null ? void 0 : r([...a(), d4])) && o4(), c4().length > 0 ? (l4({ args: d4, resolve: h4, reject: p4 }), u4) : (l4({ args: d4, resolve: h4, reject: p4 }), setTimeout(o4, n), u4);
  } };
}
async function td(t) {
  return new Promise((e) => setTimeout(e, t));
}
new ko(128);
var Na = 256;
var Po = Na;
var Bo;
function zh(t = 11) {
  if (!Bo || Po + t > Na * 2) {
    Bo = "", Po = 0;
    for (let e = 0; e < Na; e++) Bo += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return Bo.substring(Po, Po++ + t);
}
var Ro = new ko(8192);
function Wh(t, { enabled: e = true, id: r }) {
  if (!e || !r) return t();
  if (Ro.get(r)) return Ro.get(r);
  const n = t().finally(() => Ro.delete(r));
  return Ro.set(r, n), n;
}
function jh(t, { delay: e = 100, retryCount: r = 2, shouldRetry: n = () => true } = {}) {
  return new Promise((i, o4) => {
    const s = async ({ count: a = 0 } = {}) => {
      const c4 = async ({ error: l4 }) => {
        const d4 = typeof e == "function" ? e({ count: a, error: l4 }) : e;
        d4 && await td(d4), s({ count: a + 1 });
      };
      try {
        const l4 = await t();
        i(l4);
      } catch (l4) {
        if (a < r && await n({ count: a, error: l4 })) return c4({ error: l4 });
        o4(l4);
      }
    };
    s();
  });
}
function Fh(t, e = {}) {
  return async (r, n = {}) => {
    var _a3;
    const { dedupe: i = false, methods: o4, retryDelay: s = 150, retryCount: a = 3, uid: c4 } = { ...e, ...n }, { method: l4 } = r;
    if ((_a3 = o4 == null ? void 0 : o4.exclude) == null ? void 0 : _a3.includes(l4)) throw new Qr(new Error("method not supported"), { method: l4 });
    if ((o4 == null ? void 0 : o4.include) && !o4.include.includes(l4)) throw new Qr(new Error("method not supported"), { method: l4 });
    const d4 = i ? vl(`${c4}.${Tr(r)}`) : void 0;
    return Wh(() => jh(async () => {
      try {
        return await t(r);
      } catch (u4) {
        const h4 = u4;
        switch (h4.code) {
          case Gi.code:
            throw new Gi(h4);
          case qi.code:
            throw new qi(h4);
          case Ki.code:
            throw new Ki(h4, { method: r.method });
          case Yi.code:
            throw new Yi(h4);
          case Ln.code:
            throw new Ln(h4);
          case Xi.code:
            throw new Xi(h4);
          case Ji.code:
            throw new Ji(h4);
          case Qi.code:
            throw new Qi(h4);
          case Un.code:
            throw new Un(h4);
          case Qr.code:
            throw new Qr(h4, { method: r.method });
          case Mn.code:
            throw new Mn(h4);
          case eo.code:
            throw new eo(h4);
          case en.code:
            throw new en(h4);
          case to.code:
            throw new to(h4);
          case ro.code:
            throw new ro(h4);
          case no.code:
            throw new no(h4);
          case io.code:
            throw new io(h4);
          case oo.code:
            throw new oo(h4);
          case so.code:
            throw new so(h4);
          case ao.code:
            throw new ao(h4);
          case co.code:
            throw new co(h4);
          case lo.code:
            throw new lo(h4);
          case uo.code:
            throw new uo(h4);
          case ho.code:
            throw new ho(h4);
          case po.code:
            throw new po(h4);
          case 5e3:
            throw new en(h4);
          default:
            throw u4 instanceof de2 ? u4 : new ph(h4);
        }
      }
    }, { delay: ({ count: u4, error: h4 }) => {
      var _a4;
      if (h4 && h4 instanceof Kn) {
        const p4 = (_a4 = h4 == null ? void 0 : h4.headers) == null ? void 0 : _a4.get("Retry-After");
        if (p4 == null ? void 0 : p4.match(/\d/)) return Number.parseInt(p4) * 1e3;
      }
      return ~~(1 << u4) * s;
    }, retryCount: a, shouldRetry: ({ error: u4 }) => Hh(u4) }), { enabled: i, id: d4 });
  };
}
function Hh(t) {
  return "code" in t && typeof t.code == "number" ? t.code === -1 || t.code === Mn.code || t.code === Ln.code : t instanceof Kn && t.status ? t.status === 403 || t.status === 408 || t.status === 413 || t.status === 429 || t.status === 500 || t.status === 502 || t.status === 503 || t.status === 504 : true;
}
function rd({ key: t, methods: e, name: r, request: n, retryCount: i = 3, retryDelay: o4 = 150, timeout: s, type: a }, c4) {
  const l4 = zh();
  return { config: { key: t, methods: e, name: r, request: n, retryCount: i, retryDelay: o4, timeout: s, type: a }, request: Fh(n, { methods: e, retryCount: i, retryDelay: o4, uid: l4 }), value: c4 };
}
function nd(t, e = {}) {
  const { key: r = "fallback", name: n = "Fallback", rank: i = false, shouldThrow: o4 = Vh, retryCount: s, retryDelay: a } = e;
  return ({ chain: c4, pollingInterval: l4 = 4e3, timeout: d4, ...u4 }) => {
    let h4 = t, p4 = () => {
    };
    const v4 = rd({ key: r, name: n, async request({ method: m4, params: g4 }) {
      let b4;
      const y4 = async (x4 = 0) => {
        const E4 = h4[x4]({ ...u4, chain: c4, retryCount: 0, timeout: d4 });
        try {
          const I4 = await E4.request({ method: m4, params: g4 });
          return p4({ method: m4, params: g4, response: I4, transport: E4, status: "success" }), I4;
        } catch (I4) {
          if (p4({ error: I4, method: m4, params: g4, transport: E4, status: "error" }), o4(I4) || x4 === h4.length - 1 || (b4 ?? (b4 = h4.slice(x4 + 1).some(($4) => {
            const { include: L4, exclude: Z } = $4({ chain: c4 }).config.methods || {};
            return L4 ? L4.includes(m4) : Z ? !Z.includes(m4) : true;
          })), !b4)) throw I4;
          return y4(x4 + 1);
        }
      };
      return y4();
    }, retryCount: s, retryDelay: a, type: "fallback" }, { onResponse: (m4) => p4 = m4, transports: h4.map((m4) => m4({ chain: c4, retryCount: 0 })) });
    if (i) {
      const m4 = typeof i == "object" ? i : {};
      Zh({ chain: c4, interval: m4.interval ?? l4, onTransports: (g4) => h4 = g4, ping: m4.ping, sampleCount: m4.sampleCount, timeout: m4.timeout, transports: h4, weights: m4.weights });
    }
    return v4;
  };
}
function Vh(t) {
  return !!("code" in t && typeof t.code == "number" && (t.code === Un.code || t.code === en.code || Aa.nodeMessage.test(t.message) || t.code === 5e3));
}
function Zh({ chain: t, interval: e = 4e3, onTransports: r, ping: n, sampleCount: i = 10, timeout: o4 = 1e3, transports: s, weights: a = {} }) {
  const { stability: c4 = 0.7, latency: l4 = 0.3 } = a, d4 = [], u4 = async () => {
    const h4 = await Promise.all(s.map(async (m4) => {
      const g4 = m4({ chain: t, retryCount: 0, timeout: o4 }), b4 = Date.now();
      let y4, x4;
      try {
        await (n ? n({ transport: g4 }) : g4.request({ method: "net_listening" })), x4 = 1;
      } catch {
        x4 = 0;
      } finally {
        y4 = Date.now();
      }
      return { latency: y4 - b4, success: x4 };
    }));
    d4.push(h4), d4.length > i && d4.shift();
    const p4 = Math.max(...d4.map((m4) => Math.max(...m4.map(({ latency: g4 }) => g4)))), v4 = s.map((m4, g4) => {
      const b4 = d4.map(($4) => $4[g4].latency), x4 = 1 - b4.reduce(($4, L4) => $4 + L4, 0) / b4.length / p4, E4 = d4.map(($4) => $4[g4].success), I4 = E4.reduce(($4, L4) => $4 + L4, 0) / E4.length;
      return I4 === 0 ? [0, g4] : [l4 * x4 + c4 * I4, g4];
    }).sort((m4, g4) => g4[0] - m4[0]);
    r(v4.map(([, m4]) => s[m4])), await td(e), u4();
  };
  u4();
}
var Gh = class extends de2 {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", { docsPath: "/docs/clients/intro", name: "UrlRequiredError" });
  }
};
function qh(t, { errorInstance: e = new Error("timed out"), timeout: r, signal: n }) {
  return new Promise((i, o4) => {
    (async () => {
      let s;
      try {
        const a = new AbortController();
        r > 0 && (s = setTimeout(() => {
          n ? a.abort() : o4(e);
        }, r)), i(await t({ signal: (a == null ? void 0 : a.signal) || null }));
      } catch (a) {
        (a == null ? void 0 : a.name) === "AbortError" && o4(e), o4(a);
      } finally {
        clearTimeout(s);
      }
    })();
  });
}
function Kh() {
  return { current: 0, take() {
    return this.current++;
  }, reset() {
    this.current = 0;
  } };
}
var id = Kh();
function Yh(t, e = {}) {
  return { async request(r) {
    var _a3;
    const { body: n, onRequest: i = e.onRequest, onResponse: o4 = e.onResponse, timeout: s = e.timeout ?? 1e4 } = r, a = { ...e.fetchOptions ?? {}, ...r.fetchOptions ?? {} }, { headers: c4, method: l4, signal: d4 } = a;
    try {
      const u4 = await qh(async ({ signal: p4 }) => {
        const v4 = { ...a, body: Array.isArray(n) ? Tr(n.map((y4) => ({ jsonrpc: "2.0", id: y4.id ?? id.take(), ...y4 }))) : Tr({ jsonrpc: "2.0", id: n.id ?? id.take(), ...n }), headers: { "Content-Type": "application/json", ...c4 }, method: l4 || "POST", signal: d4 || (s > 0 ? p4 : null) }, m4 = new Request(t, v4), g4 = await (i == null ? void 0 : i(m4, v4)) ?? { ...v4, url: t };
        return await fetch(g4.url ?? t, g4);
      }, { errorInstance: new zl({ body: n, url: t }), timeout: s, signal: true });
      o4 && await o4(u4);
      let h4;
      if ((_a3 = u4.headers.get("Content-Type")) == null ? void 0 : _a3.startsWith("application/json")) h4 = await u4.json();
      else {
        h4 = await u4.text();
        try {
          h4 = JSON.parse(h4 || "{}");
        } catch (p4) {
          if (u4.ok) throw p4;
          h4 = { error: h4 };
        }
      }
      if (!u4.ok) throw new Kn({ body: n, details: Tr(h4.error) || u4.statusText, headers: u4.headers, status: u4.status, url: t });
      return h4;
    } catch (u4) {
      throw u4 instanceof Kn || u4 instanceof zl ? u4 : new Kn({ body: n, cause: u4, url: t });
    }
  } };
}
function Lo(t, e = {}) {
  const { batch: r, fetchOptions: n, key: i = "http", methods: o4, name: s = "HTTP JSON-RPC", onFetchRequest: a, onFetchResponse: c4, retryDelay: l4, raw: d4 } = e;
  return ({ chain: u4, retryCount: h4, timeout: p4 }) => {
    const { batchSize: v4 = 1e3, wait: m4 = 0 } = typeof r == "object" ? r : {}, g4 = e.retryCount ?? h4, b4 = p4 ?? e.timeout ?? 1e4, y4 = t || (u4 == null ? void 0 : u4.rpcUrls.default.http[0]);
    if (!y4) throw new Gh();
    const x4 = Yh(y4, { fetchOptions: n, onRequest: a, onResponse: c4, timeout: b4 });
    return rd({ key: i, methods: o4, name: s, async request({ method: E4, params: I4 }) {
      const $4 = { method: E4, params: I4 }, { schedule: L4 } = Dh({ id: y4, wait: m4, shouldSplitBatch(N4) {
        return N4.length > v4;
      }, fn: (N4) => x4.request({ body: N4 }), sort: (N4, ee2) => N4.id - ee2.id }), Z = async (N4) => r ? L4(N4) : [await x4.request({ body: N4 })], [{ error: B, result: R }] = await Z($4);
      if (d4) return { error: B, result: R };
      if (B) throw new Dl({ body: $4, error: B, url: y4 });
      return R;
    }, retryCount: g4, retryDelay: l4, timeout: b4, type: "http" }, { fetchOptions: n, url: y4 });
  };
}
function J2(t) {
  return { formatters: void 0, fees: void 0, serializers: void 0, ...t };
}
function Xh(t) {
  const { authorizationList: e } = t;
  if (e) for (const r of e) {
    const { chainId: n } = r, i = r.address;
    if (!Ht(i)) throw new ur({ address: i });
    if (n < 0) throw new Xn({ chainId: n });
  }
  ka(t);
}
function Jh(t) {
  const { blobVersionedHashes: e } = t;
  if (e) {
    if (e.length === 0) throw new ed();
    for (const r of e) {
      const n = dr(r), i = So(th(r, 0, 1));
      if (n !== 32) throw new $h({ hash: r, size: n });
      if (i !== Ql) throw new Ph({ hash: r, version: i });
    }
  }
  ka(t);
}
function ka(t) {
  const { chainId: e, maxPriorityFeePerGas: r, maxFeePerGas: n, to: i } = t;
  if (e <= 0) throw new Xn({ chainId: e });
  if (i && !Ht(i)) throw new ur({ address: i });
  if (n && n > Oo) throw new Yn({ maxFeePerGas: n });
  if (r && n && r > n) throw new Sa({ maxFeePerGas: n, maxPriorityFeePerGas: r });
}
function Qh(t) {
  const { chainId: e, maxPriorityFeePerGas: r, gasPrice: n, maxFeePerGas: i, to: o4 } = t;
  if (e <= 0) throw new Xn({ chainId: e });
  if (o4 && !Ht(o4)) throw new ur({ address: o4 });
  if (r || i) throw new de2("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (n && n > Oo) throw new Yn({ maxFeePerGas: n });
}
function ep(t) {
  const { chainId: e, maxPriorityFeePerGas: r, gasPrice: n, maxFeePerGas: i, to: o4 } = t;
  if (o4 && !Ht(o4)) throw new ur({ address: o4 });
  if (typeof e < "u" && e <= 0) throw new Xn({ chainId: e });
  if (r || i) throw new de2("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (n && n > Oo) throw new Yn({ maxFeePerGas: n });
}
function Jn(t) {
  if (!t || t.length === 0) return [];
  const e = [];
  for (let r = 0; r < t.length; r++) {
    const { address: n, storageKeys: i } = t[r];
    for (let o4 = 0; o4 < i.length; o4++) if (i[o4].length - 2 !== 64) throw new uh({ storageKey: i[o4] });
    if (!Ht(n, { strict: false })) throw new ur({ address: n });
    e.push([n, i]);
  }
  return e;
}
function tp(t, e) {
  const r = Lh(t);
  return r === "eip1559" ? ip(t, e) : r === "eip2930" ? op(t, e) : r === "eip4844" ? np(t, e) : r === "eip7702" ? rp(t, e) : sp(t, e);
}
function rp(t, e) {
  const { authorizationList: r, chainId: n, gas: i, nonce: o4, to: s, value: a, maxFeePerGas: c4, maxPriorityFeePerGas: l4, accessList: d4, data: u4 } = t;
  Xh(t);
  const h4 = Jn(d4), p4 = ap(r);
  return dn(["0x04", hr([ie2(n), o4 ? ie2(o4) : "0x", l4 ? ie2(l4) : "0x", c4 ? ie2(c4) : "0x", i ? ie2(i) : "0x", s ?? "0x", a ? ie2(a) : "0x", u4 ?? "0x", h4, p4, ...un(t, e)])]);
}
function np(t, e) {
  const { chainId: r, gas: n, nonce: i, to: o4, value: s, maxFeePerBlobGas: a, maxFeePerGas: c4, maxPriorityFeePerGas: l4, accessList: d4, data: u4 } = t;
  Jh(t);
  let h4 = t.blobVersionedHashes, p4 = t.sidecars;
  if (t.blobs && (typeof h4 > "u" || typeof p4 > "u")) {
    const x4 = typeof t.blobs[0] == "string" ? t.blobs : t.blobs.map(($4) => jt2($4)), E4 = t.kzg, I4 = Zl({ blobs: x4, kzg: E4 });
    if (typeof h4 > "u" && (h4 = Th({ commitments: I4 })), typeof p4 > "u") {
      const $4 = Gl({ blobs: x4, commitments: I4, kzg: E4 });
      p4 = Rh({ blobs: x4, commitments: I4, proofs: $4 });
    }
  }
  const v4 = Jn(d4), m4 = [ie2(r), i ? ie2(i) : "0x", l4 ? ie2(l4) : "0x", c4 ? ie2(c4) : "0x", n ? ie2(n) : "0x", o4 ?? "0x", s ? ie2(s) : "0x", u4 ?? "0x", v4, a ? ie2(a) : "0x", h4 ?? [], ...un(t, e)], g4 = [], b4 = [], y4 = [];
  if (p4) for (let x4 = 0; x4 < p4.length; x4++) {
    const { blob: E4, commitment: I4, proof: $4 } = p4[x4];
    g4.push(E4), b4.push(I4), y4.push($4);
  }
  return dn(["0x03", hr(p4 ? [m4, g4, b4, y4] : m4)]);
}
function ip(t, e) {
  const { chainId: r, gas: n, nonce: i, to: o4, value: s, maxFeePerGas: a, maxPriorityFeePerGas: c4, accessList: l4, data: d4 } = t;
  ka(t);
  const u4 = Jn(l4), h4 = [ie2(r), i ? ie2(i) : "0x", c4 ? ie2(c4) : "0x", a ? ie2(a) : "0x", n ? ie2(n) : "0x", o4 ?? "0x", s ? ie2(s) : "0x", d4 ?? "0x", u4, ...un(t, e)];
  return dn(["0x02", hr(h4)]);
}
function op(t, e) {
  const { chainId: r, gas: n, data: i, nonce: o4, to: s, value: a, accessList: c4, gasPrice: l4 } = t;
  Qh(t);
  const d4 = Jn(c4), u4 = [ie2(r), o4 ? ie2(o4) : "0x", l4 ? ie2(l4) : "0x", n ? ie2(n) : "0x", s ?? "0x", a ? ie2(a) : "0x", i ?? "0x", d4, ...un(t, e)];
  return dn(["0x01", hr(u4)]);
}
function sp(t, e) {
  const { chainId: r = 0, gas: n, data: i, nonce: o4, to: s, value: a, gasPrice: c4 } = t;
  ep(t);
  let l4 = [o4 ? ie2(o4) : "0x", c4 ? ie2(c4) : "0x", n ? ie2(n) : "0x", s ?? "0x", a ? ie2(a) : "0x", i ?? "0x"];
  if (e) {
    const d4 = (() => {
      if (e.v >= 35n) return (e.v - 35n) / 2n > 0 ? e.v : 27n + (e.v === 35n ? 0n : 1n);
      if (r > 0) return BigInt(r * 2) + BigInt(35n + e.v - 27n);
      const p4 = 27n + (e.v === 27n ? 0n : 1n);
      if (e.v !== p4) throw new lh({ v: e.v });
      return p4;
    })(), u4 = sn(e.r), h4 = sn(e.s);
    l4 = [...l4, ie2(d4), u4 === "0x00" ? "0x" : u4, h4 === "0x00" ? "0x" : h4];
  } else r > 0 && (l4 = [...l4, ie2(r), "0x", "0x"]);
  return hr(l4);
}
function un(t, e) {
  const r = e ?? t, { v: n, yParity: i } = r;
  if (typeof r.r > "u") return [];
  if (typeof r.s > "u") return [];
  if (typeof n > "u" && typeof i > "u") return [];
  const o4 = sn(r.r), s = sn(r.s);
  return [typeof i == "number" ? i ? ie2(1) : "0x" : n === 0n ? "0x" : n === 1n ? ie2(1) : n === 27n ? "0x" : ie2(1), o4 === "0x00" ? "0x" : o4, s === "0x00" ? "0x" : s];
}
function ap(t) {
  if (!t || t.length === 0) return [];
  const e = [];
  for (const r of t) {
    const { chainId: n, nonce: i, ...o4 } = r, s = r.address;
    e.push([n ? ie2(n) : "0x", s, i ? ie2(i) : "0x", ...un({}, o4)]);
  }
  return e;
}
var cp = { "0x0": "reverted", "0x1": "success" };
function lp(t) {
  const e = { ...t, blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null, contractAddress: t.contractAddress ? t.contractAddress : null, cumulativeGasUsed: t.cumulativeGasUsed ? BigInt(t.cumulativeGasUsed) : null, effectiveGasPrice: t.effectiveGasPrice ? BigInt(t.effectiveGasPrice) : null, gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null, logs: t.logs ? t.logs.map((r) => Uh(r)) : null, to: t.to ? t.to : null, transactionIndex: t.transactionIndex ? So(t.transactionIndex) : null, status: t.status ? cp[t.status] : null, type: t.type ? Fl[t.type] || t.type : null };
  return t.blobGasPrice && (e.blobGasPrice = BigInt(t.blobGasPrice)), t.blobGasUsed && (e.blobGasUsed = BigInt(t.blobGasUsed)), e;
}
var dp = To("transactionReceipt", lp);
var up = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
var od = new Uint8Array(new Array(16).fill(0).map((t, e) => e));
var hp = od.map((t) => (9 * t + 5) % 16);
var pp = [od];
var fp = [hp];
for (let t = 0; t < 4; t++) for (let e of [pp, fp]) e.push(e[t].map((r) => up[r]));
var Uo = BigInt(0);
var Mo = BigInt(1);
var gp = BigInt(2);
function Or(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Qn(t) {
  if (!Or(t)) throw new Error("Uint8Array expected");
}
function hn(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
var wp = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function pn(t) {
  Qn(t);
  let e = "";
  for (let r = 0; r < t.length; r++) e += wp[t[r]];
  return e;
}
function fn(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Ta(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? Uo : BigInt("0x" + t);
}
var Vt2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function sd(t) {
  if (t >= Vt2._0 && t <= Vt2._9) return t - Vt2._0;
  if (t >= Vt2.A && t <= Vt2.F) return t - (Vt2.A - 10);
  if (t >= Vt2.a && t <= Vt2.f) return t - (Vt2.a - 10);
}
function gn2(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e = t.length, r = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(r);
  for (let i = 0, o4 = 0; i < r; i++, o4 += 2) {
    const s = sd(t.charCodeAt(o4)), a = sd(t.charCodeAt(o4 + 1));
    if (s === void 0 || a === void 0) {
      const c4 = t[o4] + t[o4 + 1];
      throw new Error('hex string expected, got non-hex character "' + c4 + '" at index ' + o4);
    }
    n[i] = s * 16 + a;
  }
  return n;
}
function $r(t) {
  return Ta(pn(t));
}
function Oa(t) {
  return Qn(t), Ta(pn(Uint8Array.from(t).reverse()));
}
function wn(t, e) {
  return gn2(t.toString(16).padStart(e * 2, "0"));
}
function $a(t, e) {
  return wn(t, e).reverse();
}
function mp(t) {
  return gn2(fn(t));
}
function xt2(t, e, r) {
  let n;
  if (typeof e == "string") try {
    n = gn2(e);
  } catch (o4) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + o4);
  }
  else if (Or(e)) n = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const i = n.length;
  if (typeof r == "number" && i !== r) throw new Error(t + " of length " + r + " expected, got " + i);
  return n;
}
function ei(...t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    Qn(i), e += i.length;
  }
  const r = new Uint8Array(e);
  for (let n = 0, i = 0; n < t.length; n++) {
    const o4 = t[n];
    r.set(o4, i), i += o4.length;
  }
  return r;
}
function bp(t, e) {
  if (t.length !== e.length) return false;
  let r = 0;
  for (let n = 0; n < t.length; n++) r |= t[n] ^ e[n];
  return r === 0;
}
function vp(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
var Pa = (t) => typeof t == "bigint" && Uo <= t;
function Do(t, e, r) {
  return Pa(t) && Pa(e) && Pa(r) && e <= t && t < r;
}
function Pr(t, e, r, n) {
  if (!Do(e, r, n)) throw new Error("expected valid " + t + ": " + r + " <= n < " + n + ", got " + e);
}
function ad(t) {
  let e;
  for (e = 0; t > Uo; t >>= Mo, e += 1) ;
  return e;
}
function Cp(t, e) {
  return t >> BigInt(e) & Mo;
}
function yp(t, e, r) {
  return t | (r ? Mo : Uo) << BigInt(e);
}
var Ba = (t) => (gp << BigInt(t - 1)) - Mo;
var Ra = (t) => new Uint8Array(t);
var cd = (t) => Uint8Array.from(t);
function ld(t, e, r) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
  if (typeof r != "function") throw new Error("hmacFn must be a function");
  let n = Ra(t), i = Ra(t), o4 = 0;
  const s = () => {
    n.fill(1), i.fill(0), o4 = 0;
  }, a = (...u4) => r(i, n, ...u4), c4 = (u4 = Ra()) => {
    i = a(cd([0]), u4), n = a(), u4.length !== 0 && (i = a(cd([1]), u4), n = a());
  }, l4 = () => {
    if (o4++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let u4 = 0;
    const h4 = [];
    for (; u4 < e; ) {
      n = a();
      const p4 = n.slice();
      h4.push(p4), u4 += n.length;
    }
    return ei(...h4);
  };
  return (u4, h4) => {
    s(), c4(u4);
    let p4;
    for (; !(p4 = h4(l4())); ) c4();
    return s(), p4;
  };
}
var xp = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || Or(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e) => e.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function ti(t, e, r = {}) {
  const n = (i, o4, s) => {
    const a = xp[o4];
    if (typeof a != "function") throw new Error("invalid validator function");
    const c4 = t[i];
    if (!(s && c4 === void 0) && !a(c4, t)) throw new Error("param " + String(i) + " is invalid. Expected " + o4 + ", got " + c4);
  };
  for (const [i, o4] of Object.entries(e)) n(i, o4, false);
  for (const [i, o4] of Object.entries(r)) n(i, o4, true);
  return t;
}
var Ep = () => {
  throw new Error("not implemented");
};
function La(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (r, ...n) => {
    const i = e.get(r);
    if (i !== void 0) return i;
    const o4 = t(r, ...n);
    return e.set(r, o4), o4;
  };
}
var Ap = Object.freeze({ __proto__: null, isBytes: Or, abytes: Qn, abool: hn, bytesToHex: pn, numberToHexUnpadded: fn, hexToNumber: Ta, hexToBytes: gn2, bytesToNumberBE: $r, bytesToNumberLE: Oa, numberToBytesBE: wn, numberToBytesLE: $a, numberToVarBytesBE: mp, ensureBytes: xt2, concatBytes: ei, equalBytes: bp, utf8ToBytes: vp, inRange: Do, aInRange: Pr, bitLen: ad, bitGet: Cp, bitSet: yp, bitMask: Ba, createHmacDrbg: ld, validateObject: ti, notImplemented: Ep, memoized: La });
var Sp = "0.1.1";
function _p() {
  return Sp;
}
var Ge2 = class _Ge extends Error {
  constructor(e, r = {}) {
    const n = (() => {
      var _a3;
      if (r.cause instanceof _Ge) {
        if (r.cause.details) return r.cause.details;
        if (r.cause.shortMessage) return r.cause.shortMessage;
      }
      return ((_a3 = r.cause) == null ? void 0 : _a3.message) ? r.cause.message : r.details;
    })(), i = r.cause instanceof _Ge && r.cause.docsPath || r.docsPath, s = `https://oxlib.sh${i ?? ""}`, a = [e || "An error occurred.", ...r.metaMessages ? ["", ...r.metaMessages] : [], ...n || i ? ["", n ? `Details: ${n}` : void 0, i ? `See: ${s}` : void 0] : []].filter((c4) => typeof c4 == "string").join(`
`);
    super(a, r.cause ? { cause: r.cause } : void 0), Object.defineProperty(this, "details", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "docs", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "docsPath", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shortMessage", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "cause", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "BaseError" }), Object.defineProperty(this, "version", { enumerable: true, configurable: true, writable: true, value: `ox@${_p()}` }), this.cause = r.cause, this.details = n, this.docs = s, this.docsPath = i, this.shortMessage = e;
  }
  walk(e) {
    return dd(this, e);
  }
};
function dd(t, e) {
  return (e == null ? void 0 : e(t)) ? t : t && typeof t == "object" && "cause" in t && t.cause ? dd(t.cause, e) : e ? null : t;
}
function Ip(t, e) {
  if (pd(t) > e) throw new Rp({ givenSize: pd(t), maxSize: e });
}
var Zt2 = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function ud(t) {
  if (t >= Zt2.zero && t <= Zt2.nine) return t - Zt2.zero;
  if (t >= Zt2.A && t <= Zt2.F) return t - (Zt2.A - 10);
  if (t >= Zt2.a && t <= Zt2.f) return t - (Zt2.a - 10);
}
function Np(t, e = {}) {
  const { dir: r, size: n = 32 } = e;
  if (n === 0) return t;
  if (t.length > n) throw new Lp({ size: t.length, targetSize: n, type: "Bytes" });
  const i = new Uint8Array(n);
  for (let o4 = 0; o4 < n; o4++) {
    const s = r === "right";
    i[s ? o4 : n - o4 - 1] = t[s ? o4 : t.length - o4 - 1];
  }
  return i;
}
function Ua(t, e) {
  if (Da(t) > e) throw new Fp({ givenSize: Da(t), maxSize: e });
}
function hd(t, e = {}) {
  const { dir: r, size: n = 32 } = e;
  if (n === 0) return t;
  const i = t.replace("0x", "");
  if (i.length > n * 2) throw new Hp({ size: Math.ceil(i.length / 2), targetSize: n, type: "Hex" });
  return `0x${i[r === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
var kp = new TextEncoder();
function Tp(t) {
  return t instanceof Uint8Array ? t : typeof t == "string" ? $p(t) : Op(t);
}
function Op(t) {
  return t instanceof Uint8Array ? t : new Uint8Array(t);
}
function $p(t, e = {}) {
  const { size: r } = e;
  let n = t;
  r && (Ua(t, r), n = Ma(t, r));
  let i = n.slice(2);
  i.length % 2 && (i = `0${i}`);
  const o4 = i.length / 2, s = new Uint8Array(o4);
  for (let a = 0, c4 = 0; a < o4; a++) {
    const l4 = ud(i.charCodeAt(c4++)), d4 = ud(i.charCodeAt(c4++));
    if (l4 === void 0 || d4 === void 0) throw new Ge2(`Invalid byte sequence ("${i[c4 - 2]}${i[c4 - 1]}" in "${i}").`);
    s[a] = l4 * 16 + d4;
  }
  return s;
}
function Pp(t, e = {}) {
  const { size: r } = e, n = kp.encode(t);
  return typeof r == "number" ? (Ip(n, r), Bp(n, r)) : n;
}
function Bp(t, e) {
  return Np(t, { dir: "right", size: e });
}
function pd(t) {
  return t.length;
}
var Rp = class extends Ge2 {
  constructor({ givenSize: e, maxSize: r }) {
    super(`Size cannot exceed \`${r}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "Bytes.SizeOverflowError" });
  }
};
var Lp = class extends Ge2 {
  constructor({ size: e, targetSize: r, type: n }) {
    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${r}\`).`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "Bytes.SizeExceedsPaddingSizeError" });
  }
};
var Up = new TextEncoder();
var Mp = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function fd(...t) {
  return `0x${t.reduce((e, r) => e + r.replace("0x", ""), "")}`;
}
function Dp(t, e = {}) {
  const r = `0x${Number(t)}`;
  return typeof e.size == "number" ? (Ua(r, e.size), zo(r, e.size)) : r;
}
function gd(t, e = {}) {
  let r = "";
  for (let i = 0; i < t.length; i++) r += Mp[t[i]];
  const n = `0x${r}`;
  return typeof e.size == "number" ? (Ua(n, e.size), Ma(n, e.size)) : n;
}
function zp(t, e = {}) {
  const { signed: r, size: n } = e, i = BigInt(t);
  let o4;
  n ? r ? o4 = (1n << BigInt(n) * 8n - 1n) - 1n : o4 = 2n ** (BigInt(n) * 8n) - 1n : typeof t == "number" && (o4 = BigInt(Number.MAX_SAFE_INTEGER));
  const s = typeof o4 == "bigint" && r ? -o4 - 1n : 0;
  if (o4 && i > o4 || i < s) {
    const l4 = typeof t == "bigint" ? "n" : "";
    throw new jp({ max: o4 ? `${o4}${l4}` : void 0, min: `${s}${l4}`, signed: r, size: n, value: `${t}${l4}` });
  }
  const c4 = `0x${(r && i < 0 ? (1n << BigInt(n * 8)) + BigInt(i) : i).toString(16)}`;
  return n ? zo(c4, n) : c4;
}
function Wp(t, e = {}) {
  return gd(Up.encode(t), e);
}
function zo(t, e) {
  return hd(t, { dir: "left", size: e });
}
function Ma(t, e) {
  return hd(t, { dir: "right", size: e });
}
function Da(t) {
  return Math.ceil((t.length - 2) / 2);
}
var jp = class extends Ge2 {
  constructor({ max: e, min: r, signed: n, size: i, value: o4 }) {
    super(`Number \`${o4}\` is not in safe${i ? ` ${i * 8}-bit` : ""}${n ? " signed" : " unsigned"} integer range ${e ? `(\`${r}\` to \`${e}\`)` : `(above \`${r}\`)`}`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "Hex.IntegerOutOfRangeError" });
  }
};
var Fp = class extends Ge2 {
  constructor({ givenSize: e, maxSize: r }) {
    super(`Size cannot exceed \`${r}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "Hex.SizeOverflowError" });
  }
};
var Hp = class extends Ge2 {
  constructor({ size: e, targetSize: r, type: n }) {
    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${r}\`).`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "Hex.SizeExceedsPaddingSizeError" });
  }
};
function Vp(t, e = {}) {
  const { as: r = typeof t == "string" ? "Hex" : "Bytes" } = e, n = Pl(Tp(t));
  return r === "Bytes" ? n : gd(n);
}
var Zp = class extends Map {
  constructor(e) {
    super(), Object.defineProperty(this, "maxSize", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.maxSize = e;
  }
  get(e) {
    const r = super.get(e);
    return super.has(e) && r !== void 0 && (this.delete(e), super.set(e, r)), r;
  }
  set(e, r) {
    if (super.set(e, r), this.maxSize && this.size > this.maxSize) {
      const n = this.keys().next().value;
      n && this.delete(n);
    }
    return this;
  }
};
var Gp = { checksum: new Zp(8192) };
var za = Gp.checksum;
var qp = /^0x[a-fA-F0-9]{40}$/;
function wd(t, e = {}) {
  const { strict: r = true } = e;
  if (!qp.test(t)) throw new md({ address: t, cause: new Yp() });
  if (r) {
    if (t.toLowerCase() === t) return;
    if (Kp(t) !== t) throw new md({ address: t, cause: new Xp() });
  }
}
function Kp(t) {
  if (za.has(t)) return za.get(t);
  wd(t, { strict: false });
  const e = t.substring(2).toLowerCase(), r = Vp(Pp(e), { as: "Bytes" }), n = e.split("");
  for (let o4 = 0; o4 < 40; o4 += 2) r[o4 >> 1] >> 4 >= 8 && n[o4] && (n[o4] = n[o4].toUpperCase()), (r[o4 >> 1] & 15) >= 8 && n[o4 + 1] && (n[o4 + 1] = n[o4 + 1].toUpperCase());
  const i = `0x${n.join("")}`;
  return za.set(t, i), i;
}
var md = class extends Ge2 {
  constructor({ address: e, cause: r }) {
    super(`Address "${e}" is invalid.`, { cause: r }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "Address.InvalidAddressError" });
  }
};
var Yp = class extends Ge2 {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value."), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "Address.InvalidInputError" });
  }
};
var Xp = class extends Ge2 {
  constructor() {
    super("Address does not match its checksum counterpart."), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "Address.InvalidChecksumError" });
  }
};
var Jp = /^(.*)\[([0-9]*)\]$/;
var Qp = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var ef = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function Wa(t, e) {
  if (t.length !== e.length) throw new rf({ expectedLength: t.length, givenLength: e.length });
  const r = [];
  for (let n = 0; n < t.length; n++) {
    const i = t[n], o4 = e[n];
    r.push(Wa.encode(i, o4));
  }
  return fd(...r);
}
(function(t) {
  function e(r, n, i = false) {
    if (r === "address") {
      const c4 = n;
      return wd(c4), zo(c4.toLowerCase(), i ? 32 : 0);
    }
    if (r === "string") return Wp(n);
    if (r === "bytes") return n;
    if (r === "bool") return zo(Dp(n), i ? 32 : 1);
    const o4 = r.match(ef);
    if (o4) {
      const [c4, l4, d4 = "256"] = o4, u4 = Number.parseInt(d4) / 8;
      return zp(n, { size: i ? 32 : u4, signed: l4 === "int" });
    }
    const s = r.match(Qp);
    if (s) {
      const [c4, l4] = s;
      if (Number.parseInt(l4) !== (n.length - 2) / 2) throw new tf({ expectedSize: Number.parseInt(l4), value: n });
      return Ma(n, i ? 32 : 0);
    }
    const a = r.match(Jp);
    if (a && Array.isArray(n)) {
      const [c4, l4] = a, d4 = [];
      for (let u4 = 0; u4 < n.length; u4++) d4.push(e(l4, n[u4], true));
      return d4.length === 0 ? "0x" : fd(...d4);
    }
    throw new nf(r);
  }
  t.encode = e;
})(Wa || (Wa = {}));
var tf = class extends Ge2 {
  constructor({ expectedSize: e, value: r }) {
    super(`Size of bytes "${r}" (bytes${Da(r)}) does not match expected size (bytes${e}).`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "AbiParameters.BytesSizeMismatchError" });
  }
};
var rf = class extends Ge2 {
  constructor({ expectedLength: e, givenLength: r }) {
    super(["ABI encoding parameters/values length mismatch.", `Expected length (parameters): ${e}`, `Given length (values): ${r}`].join(`
`)), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "AbiParameters.LengthMismatchError" });
  }
};
var nf = class extends Ge2 {
  constructor(e) {
    super(`Type \`${e}\` is not a valid ABI Type.`), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "AbiParameters.InvalidTypeError" });
  }
};
var bd = class extends va {
  constructor(e, r) {
    super(), this.finished = false, this.destroyed = false, O1(e);
    const n = No(r);
    if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const i = this.blockLen, o4 = new Uint8Array(i);
    o4.set(n.length > i ? e.create().update(n).digest() : n);
    for (let s = 0; s < o4.length; s++) o4[s] ^= 54;
    this.iHash.update(o4), this.oHash = e.create();
    for (let s = 0; s < o4.length; s++) o4[s] ^= 106;
    this.oHash.update(o4), o4.fill(0);
  }
  update(e) {
    return cn(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    cn(this), Gn(e, this.outputLen), this.finished = true, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: r, iHash: n, finished: i, destroyed: o4, blockLen: s, outputLen: a } = this;
    return e = e, e.finished = i, e.destroyed = o4, e.blockLen = s, e.outputLen = a, e.oHash = r._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
var vd = (t, e, r) => new bd(t, e).update(r).digest();
vd.create = (t, e) => new bd(t, e);
var Le2 = BigInt(0);
var Ie3 = BigInt(1);
var Br = BigInt(2);
var of = BigInt(3);
var ja = BigInt(4);
var Cd = BigInt(5);
var yd = BigInt(8);
function Je2(t, e) {
  const r = t % e;
  return r >= Le2 ? r : e + r;
}
function sf(t, e, r) {
  if (e < Le2) throw new Error("invalid exponent, negatives unsupported");
  if (r <= Le2) throw new Error("invalid modulus");
  if (r === Ie3) return Le2;
  let n = Ie3;
  for (; e > Le2; ) e & Ie3 && (n = n * t % r), t = t * t % r, e >>= Ie3;
  return n;
}
function pt2(t, e, r) {
  let n = t;
  for (; e-- > Le2; ) n *= n, n %= r;
  return n;
}
function Fa(t, e) {
  if (t === Le2) throw new Error("invert: expected non-zero number");
  if (e <= Le2) throw new Error("invert: expected positive modulus, got " + e);
  let r = Je2(t, e), n = e, i = Le2, o4 = Ie3;
  for (; r !== Le2; ) {
    const a = n / r, c4 = n % r, l4 = i - o4 * a;
    n = r, r = c4, i = o4, o4 = l4;
  }
  if (n !== Ie3) throw new Error("invert: does not exist");
  return Je2(i, e);
}
function af(t) {
  const e = (t - Ie3) / Br;
  let r, n, i;
  for (r = t - Ie3, n = 0; r % Br === Le2; r /= Br, n++) ;
  for (i = Br; i < t && sf(i, e, t) !== t - Ie3; i++) if (i > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (n === 1) {
    const s = (t + Ie3) / ja;
    return function(c4, l4) {
      const d4 = c4.pow(l4, s);
      if (!c4.eql(c4.sqr(d4), l4)) throw new Error("Cannot find square root");
      return d4;
    };
  }
  const o4 = (r + Ie3) / Br;
  return function(a, c4) {
    if (a.pow(c4, e) === a.neg(a.ONE)) throw new Error("Cannot find square root");
    let l4 = n, d4 = a.pow(a.mul(a.ONE, i), r), u4 = a.pow(c4, o4), h4 = a.pow(c4, r);
    for (; !a.eql(h4, a.ONE); ) {
      if (a.eql(h4, a.ZERO)) return a.ZERO;
      let p4 = 1;
      for (let m4 = a.sqr(h4); p4 < l4 && !a.eql(m4, a.ONE); p4++) m4 = a.sqr(m4);
      const v4 = a.pow(d4, Ie3 << BigInt(l4 - p4 - 1));
      d4 = a.sqr(v4), u4 = a.mul(u4, v4), h4 = a.mul(h4, d4), l4 = p4;
    }
    return u4;
  };
}
function cf(t) {
  if (t % ja === of) {
    const e = (t + Ie3) / ja;
    return function(n, i) {
      const o4 = n.pow(i, e);
      if (!n.eql(n.sqr(o4), i)) throw new Error("Cannot find square root");
      return o4;
    };
  }
  if (t % yd === Cd) {
    const e = (t - Cd) / yd;
    return function(n, i) {
      const o4 = n.mul(i, Br), s = n.pow(o4, e), a = n.mul(i, s), c4 = n.mul(n.mul(a, Br), s), l4 = n.mul(a, n.sub(c4, n.ONE));
      if (!n.eql(n.sqr(l4), i)) throw new Error("Cannot find square root");
      return l4;
    };
  }
  return af(t);
}
var lf = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function df(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, r = lf.reduce((n, i) => (n[i] = "function", n), e);
  return ti(t, r);
}
function uf(t, e, r) {
  if (r < Le2) throw new Error("invalid exponent, negatives unsupported");
  if (r === Le2) return t.ONE;
  if (r === Ie3) return e;
  let n = t.ONE, i = e;
  for (; r > Le2; ) r & Ie3 && (n = t.mul(n, i)), i = t.sqr(i), r >>= Ie3;
  return n;
}
function hf(t, e) {
  const r = new Array(e.length), n = e.reduce((o4, s, a) => t.is0(s) ? o4 : (r[a] = o4, t.mul(o4, s)), t.ONE), i = t.inv(n);
  return e.reduceRight((o4, s, a) => t.is0(s) ? o4 : (r[a] = t.mul(o4, r[a]), t.mul(o4, s)), i), r;
}
function xd(t, e) {
  const r = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: n };
}
function Ed(t, e, r = false, n = {}) {
  if (t <= Le2) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: i, nByteLength: o4 } = xd(t, e);
  if (o4 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let s;
  const a = Object.freeze({ ORDER: t, isLE: r, BITS: i, BYTES: o4, MASK: Ba(i), ZERO: Le2, ONE: Ie3, create: (c4) => Je2(c4, t), isValid: (c4) => {
    if (typeof c4 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c4);
    return Le2 <= c4 && c4 < t;
  }, is0: (c4) => c4 === Le2, isOdd: (c4) => (c4 & Ie3) === Ie3, neg: (c4) => Je2(-c4, t), eql: (c4, l4) => c4 === l4, sqr: (c4) => Je2(c4 * c4, t), add: (c4, l4) => Je2(c4 + l4, t), sub: (c4, l4) => Je2(c4 - l4, t), mul: (c4, l4) => Je2(c4 * l4, t), pow: (c4, l4) => uf(a, c4, l4), div: (c4, l4) => Je2(c4 * Fa(l4, t), t), sqrN: (c4) => c4 * c4, addN: (c4, l4) => c4 + l4, subN: (c4, l4) => c4 - l4, mulN: (c4, l4) => c4 * l4, inv: (c4) => Fa(c4, t), sqrt: n.sqrt || ((c4) => (s || (s = cf(t)), s(a, c4))), invertBatch: (c4) => hf(a, c4), cmov: (c4, l4, d4) => d4 ? l4 : c4, toBytes: (c4) => r ? $a(c4, o4) : wn(c4, o4), fromBytes: (c4) => {
    if (c4.length !== o4) throw new Error("Field.fromBytes: expected " + o4 + " bytes, got " + c4.length);
    return r ? Oa(c4) : $r(c4);
  } });
  return Object.freeze(a);
}
function Ad(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Sd(t) {
  const e = Ad(t);
  return e + Math.ceil(e / 2);
}
function pf(t, e, r = false) {
  const n = t.length, i = Ad(e), o4 = Sd(e);
  if (n < 16 || n < o4 || n > 1024) throw new Error("expected " + o4 + "-1024 bytes of input, got " + n);
  const s = r ? Oa(t) : $r(t), a = Je2(s, e - Ie3) + Ie3;
  return r ? $a(a, i) : wn(a, i);
}
var _d = BigInt(0);
var Wo = BigInt(1);
function Ha(t, e) {
  const r = e.negate();
  return t ? r : e;
}
function Id(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Va(t, e) {
  Id(t, e);
  const r = Math.ceil(e / t) + 1, n = 2 ** (t - 1);
  return { windows: r, windowSize: n };
}
function ff(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((r, n) => {
    if (!(r instanceof e)) throw new Error("invalid point at index " + n);
  });
}
function gf(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((r, n) => {
    if (!e.isValid(r)) throw new Error("invalid scalar at index " + n);
  });
}
var Za = /* @__PURE__ */ new WeakMap();
var Nd = /* @__PURE__ */ new WeakMap();
function Ga(t) {
  return Nd.get(t) || 1;
}
function wf(t, e) {
  return { constTimeNegate: Ha, hasPrecomputes(r) {
    return Ga(r) !== 1;
  }, unsafeLadder(r, n, i = t.ZERO) {
    let o4 = r;
    for (; n > _d; ) n & Wo && (i = i.add(o4)), o4 = o4.double(), n >>= Wo;
    return i;
  }, precomputeWindow(r, n) {
    const { windows: i, windowSize: o4 } = Va(n, e), s = [];
    let a = r, c4 = a;
    for (let l4 = 0; l4 < i; l4++) {
      c4 = a, s.push(c4);
      for (let d4 = 1; d4 < o4; d4++) c4 = c4.add(a), s.push(c4);
      a = c4.double();
    }
    return s;
  }, wNAF(r, n, i) {
    const { windows: o4, windowSize: s } = Va(r, e);
    let a = t.ZERO, c4 = t.BASE;
    const l4 = BigInt(2 ** r - 1), d4 = 2 ** r, u4 = BigInt(r);
    for (let h4 = 0; h4 < o4; h4++) {
      const p4 = h4 * s;
      let v4 = Number(i & l4);
      i >>= u4, v4 > s && (v4 -= d4, i += Wo);
      const m4 = p4, g4 = p4 + Math.abs(v4) - 1, b4 = h4 % 2 !== 0, y4 = v4 < 0;
      v4 === 0 ? c4 = c4.add(Ha(b4, n[m4])) : a = a.add(Ha(y4, n[g4]));
    }
    return { p: a, f: c4 };
  }, wNAFUnsafe(r, n, i, o4 = t.ZERO) {
    const { windows: s, windowSize: a } = Va(r, e), c4 = BigInt(2 ** r - 1), l4 = 2 ** r, d4 = BigInt(r);
    for (let u4 = 0; u4 < s; u4++) {
      const h4 = u4 * a;
      if (i === _d) break;
      let p4 = Number(i & c4);
      if (i >>= d4, p4 > a && (p4 -= l4, i += Wo), p4 === 0) continue;
      let v4 = n[h4 + Math.abs(p4) - 1];
      p4 < 0 && (v4 = v4.negate()), o4 = o4.add(v4);
    }
    return o4;
  }, getPrecomputes(r, n, i) {
    let o4 = Za.get(n);
    return o4 || (o4 = this.precomputeWindow(n, r), r !== 1 && Za.set(n, i(o4))), o4;
  }, wNAFCached(r, n, i) {
    const o4 = Ga(r);
    return this.wNAF(o4, this.getPrecomputes(o4, r, i), n);
  }, wNAFCachedUnsafe(r, n, i, o4) {
    const s = Ga(r);
    return s === 1 ? this.unsafeLadder(r, n, o4) : this.wNAFUnsafe(s, this.getPrecomputes(s, r, i), n, o4);
  }, setWindowSize(r, n) {
    Id(n, e), Nd.set(r, n), Za.delete(r);
  } };
}
function mf(t, e, r, n) {
  if (ff(r, t), gf(n, e), r.length !== n.length) throw new Error("arrays of points and scalars must have equal length");
  const i = t.ZERO, o4 = ad(BigInt(r.length)), s = o4 > 12 ? o4 - 3 : o4 > 4 ? o4 - 2 : o4 ? 2 : 1, a = (1 << s) - 1, c4 = new Array(a + 1).fill(i), l4 = Math.floor((e.BITS - 1) / s) * s;
  let d4 = i;
  for (let u4 = l4; u4 >= 0; u4 -= s) {
    c4.fill(i);
    for (let p4 = 0; p4 < n.length; p4++) {
      const v4 = n[p4], m4 = Number(v4 >> BigInt(u4) & BigInt(a));
      c4[m4] = c4[m4].add(r[p4]);
    }
    let h4 = i;
    for (let p4 = c4.length - 1, v4 = i; p4 > 0; p4--) v4 = v4.add(c4[p4]), h4 = h4.add(v4);
    if (d4 = d4.add(h4), u4 !== 0) for (let p4 = 0; p4 < s; p4++) d4 = d4.double();
  }
  return d4;
}
function kd(t) {
  return df(t.Fp), ti(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...xd(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
function Td(t) {
  t.lowS !== void 0 && hn("lowS", t.lowS), t.prehash !== void 0 && hn("prehash", t.prehash);
}
function bf(t) {
  const e = kd(t);
  ti(e, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
  const { endo: r, Fp: n, a: i } = e;
  if (r) {
    if (!n.eql(i, n.ZERO)) throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
    if (typeof r != "object" || typeof r.beta != "bigint" || typeof r.splitScalar != "function") throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
var { bytesToNumberBE: vf, hexToBytes: Cf } = Ap;
var yf = class extends Error {
  constructor(e = "") {
    super(e);
  }
};
var Gt2 = { Err: yf, _tlv: { encode: (t, e) => {
  const { Err: r } = Gt2;
  if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
  if (e.length & 1) throw new r("tlv.encode: unpadded data");
  const n = e.length / 2, i = fn(n);
  if (i.length / 2 & 128) throw new r("tlv.encode: long form length too big");
  const o4 = n > 127 ? fn(i.length / 2 | 128) : "";
  return fn(t) + o4 + i + e;
}, decode(t, e) {
  const { Err: r } = Gt2;
  let n = 0;
  if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
  if (e.length < 2 || e[n++] !== t) throw new r("tlv.decode: wrong tlv");
  const i = e[n++], o4 = !!(i & 128);
  let s = 0;
  if (!o4) s = i;
  else {
    const c4 = i & 127;
    if (!c4) throw new r("tlv.decode(long): indefinite length not supported");
    if (c4 > 4) throw new r("tlv.decode(long): byte length is too big");
    const l4 = e.subarray(n, n + c4);
    if (l4.length !== c4) throw new r("tlv.decode: length bytes not complete");
    if (l4[0] === 0) throw new r("tlv.decode(long): zero leftmost byte");
    for (const d4 of l4) s = s << 8 | d4;
    if (n += c4, s < 128) throw new r("tlv.decode(long): not minimal encoding");
  }
  const a = e.subarray(n, n + s);
  if (a.length !== s) throw new r("tlv.decode: wrong value length");
  return { v: a, l: e.subarray(n + s) };
} }, _int: { encode(t) {
  const { Err: e } = Gt2;
  if (t < qt2) throw new e("integer: negative integers are not allowed");
  let r = fn(t);
  if (Number.parseInt(r[0], 16) & 8 && (r = "00" + r), r.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
  return r;
}, decode(t) {
  const { Err: e } = Gt2;
  if (t[0] & 128) throw new e("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
  return vf(t);
} }, toSig(t) {
  const { Err: e, _int: r, _tlv: n } = Gt2, i = typeof t == "string" ? Cf(t) : t;
  Qn(i);
  const { v: o4, l: s } = n.decode(48, i);
  if (s.length) throw new e("invalid signature: left bytes after parsing");
  const { v: a, l: c4 } = n.decode(2, o4), { v: l4, l: d4 } = n.decode(2, c4);
  if (d4.length) throw new e("invalid signature: left bytes after parsing");
  return { r: r.decode(a), s: r.decode(l4) };
}, hexFromSig(t) {
  const { _tlv: e, _int: r } = Gt2, n = e.encode(2, r.encode(t.r)), i = e.encode(2, r.encode(t.s)), o4 = n + i;
  return e.encode(48, o4);
} };
var qt2 = BigInt(0);
var Ue2 = BigInt(1);
BigInt(2);
var Od = BigInt(3);
BigInt(4);
function xf(t) {
  const e = bf(t), { Fp: r } = e, n = Ed(e.n, e.nBitLength), i = e.toBytes || ((m4, g4, b4) => {
    const y4 = g4.toAffine();
    return ei(Uint8Array.from([4]), r.toBytes(y4.x), r.toBytes(y4.y));
  }), o4 = e.fromBytes || ((m4) => {
    const g4 = m4.subarray(1), b4 = r.fromBytes(g4.subarray(0, r.BYTES)), y4 = r.fromBytes(g4.subarray(r.BYTES, 2 * r.BYTES));
    return { x: b4, y: y4 };
  });
  function s(m4) {
    const { a: g4, b: b4 } = e, y4 = r.sqr(m4), x4 = r.mul(y4, m4);
    return r.add(r.add(x4, r.mul(m4, g4)), b4);
  }
  if (!r.eql(r.sqr(e.Gy), s(e.Gx))) throw new Error("bad generator point: equation left != right");
  function a(m4) {
    return Do(m4, Ue2, e.n);
  }
  function c4(m4) {
    const { allowedPrivateKeyLengths: g4, nByteLength: b4, wrapPrivateKey: y4, n: x4 } = e;
    if (g4 && typeof m4 != "bigint") {
      if (Or(m4) && (m4 = pn(m4)), typeof m4 != "string" || !g4.includes(m4.length)) throw new Error("invalid private key");
      m4 = m4.padStart(b4 * 2, "0");
    }
    let E4;
    try {
      E4 = typeof m4 == "bigint" ? m4 : $r(xt2("private key", m4, b4));
    } catch {
      throw new Error("invalid private key, expected hex or " + b4 + " bytes, got " + typeof m4);
    }
    return y4 && (E4 = Je2(E4, x4)), Pr("private key", E4, Ue2, x4), E4;
  }
  function l4(m4) {
    if (!(m4 instanceof h4)) throw new Error("ProjectivePoint expected");
  }
  const d4 = La((m4, g4) => {
    const { px: b4, py: y4, pz: x4 } = m4;
    if (r.eql(x4, r.ONE)) return { x: b4, y: y4 };
    const E4 = m4.is0();
    g4 == null && (g4 = E4 ? r.ONE : r.inv(x4));
    const I4 = r.mul(b4, g4), $4 = r.mul(y4, g4), L4 = r.mul(x4, g4);
    if (E4) return { x: r.ZERO, y: r.ZERO };
    if (!r.eql(L4, r.ONE)) throw new Error("invZ was invalid");
    return { x: I4, y: $4 };
  }), u4 = La((m4) => {
    if (m4.is0()) {
      if (e.allowInfinityPoint && !r.is0(m4.py)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: g4, y: b4 } = m4.toAffine();
    if (!r.isValid(g4) || !r.isValid(b4)) throw new Error("bad point: x or y not FE");
    const y4 = r.sqr(b4), x4 = s(g4);
    if (!r.eql(y4, x4)) throw new Error("bad point: equation left != right");
    if (!m4.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  class h4 {
    constructor(g4, b4, y4) {
      if (this.px = g4, this.py = b4, this.pz = y4, g4 == null || !r.isValid(g4)) throw new Error("x required");
      if (b4 == null || !r.isValid(b4)) throw new Error("y required");
      if (y4 == null || !r.isValid(y4)) throw new Error("z required");
      Object.freeze(this);
    }
    static fromAffine(g4) {
      const { x: b4, y: y4 } = g4 || {};
      if (!g4 || !r.isValid(b4) || !r.isValid(y4)) throw new Error("invalid affine point");
      if (g4 instanceof h4) throw new Error("projective point not allowed");
      const x4 = (E4) => r.eql(E4, r.ZERO);
      return x4(b4) && x4(y4) ? h4.ZERO : new h4(b4, y4, r.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(g4) {
      const b4 = r.invertBatch(g4.map((y4) => y4.pz));
      return g4.map((y4, x4) => y4.toAffine(b4[x4])).map(h4.fromAffine);
    }
    static fromHex(g4) {
      const b4 = h4.fromAffine(o4(xt2("pointHex", g4)));
      return b4.assertValidity(), b4;
    }
    static fromPrivateKey(g4) {
      return h4.BASE.multiply(c4(g4));
    }
    static msm(g4, b4) {
      return mf(h4, n, g4, b4);
    }
    _setWindowSize(g4) {
      v4.setWindowSize(this, g4);
    }
    assertValidity() {
      u4(this);
    }
    hasEvenY() {
      const { y: g4 } = this.toAffine();
      if (r.isOdd) return !r.isOdd(g4);
      throw new Error("Field doesn't support isOdd");
    }
    equals(g4) {
      l4(g4);
      const { px: b4, py: y4, pz: x4 } = this, { px: E4, py: I4, pz: $4 } = g4, L4 = r.eql(r.mul(b4, $4), r.mul(E4, x4)), Z = r.eql(r.mul(y4, $4), r.mul(I4, x4));
      return L4 && Z;
    }
    negate() {
      return new h4(this.px, r.neg(this.py), this.pz);
    }
    double() {
      const { a: g4, b: b4 } = e, y4 = r.mul(b4, Od), { px: x4, py: E4, pz: I4 } = this;
      let $4 = r.ZERO, L4 = r.ZERO, Z = r.ZERO, B = r.mul(x4, x4), R = r.mul(E4, E4), N4 = r.mul(I4, I4), ee2 = r.mul(x4, E4);
      return ee2 = r.add(ee2, ee2), Z = r.mul(x4, I4), Z = r.add(Z, Z), $4 = r.mul(g4, Z), L4 = r.mul(y4, N4), L4 = r.add($4, L4), $4 = r.sub(R, L4), L4 = r.add(R, L4), L4 = r.mul($4, L4), $4 = r.mul(ee2, $4), Z = r.mul(y4, Z), N4 = r.mul(g4, N4), ee2 = r.sub(B, N4), ee2 = r.mul(g4, ee2), ee2 = r.add(ee2, Z), Z = r.add(B, B), B = r.add(Z, B), B = r.add(B, N4), B = r.mul(B, ee2), L4 = r.add(L4, B), N4 = r.mul(E4, I4), N4 = r.add(N4, N4), B = r.mul(N4, ee2), $4 = r.sub($4, B), Z = r.mul(N4, R), Z = r.add(Z, Z), Z = r.add(Z, Z), new h4($4, L4, Z);
    }
    add(g4) {
      l4(g4);
      const { px: b4, py: y4, pz: x4 } = this, { px: E4, py: I4, pz: $4 } = g4;
      let L4 = r.ZERO, Z = r.ZERO, B = r.ZERO;
      const R = e.a, N4 = r.mul(e.b, Od);
      let ee2 = r.mul(b4, E4), pe2 = r.mul(y4, I4), _4 = r.mul(x4, $4), S4 = r.add(b4, y4), A4 = r.add(E4, I4);
      S4 = r.mul(S4, A4), A4 = r.add(ee2, pe2), S4 = r.sub(S4, A4), A4 = r.add(b4, x4);
      let P4 = r.add(E4, $4);
      return A4 = r.mul(A4, P4), P4 = r.add(ee2, _4), A4 = r.sub(A4, P4), P4 = r.add(y4, x4), L4 = r.add(I4, $4), P4 = r.mul(P4, L4), L4 = r.add(pe2, _4), P4 = r.sub(P4, L4), B = r.mul(R, A4), L4 = r.mul(N4, _4), B = r.add(L4, B), L4 = r.sub(pe2, B), B = r.add(pe2, B), Z = r.mul(L4, B), pe2 = r.add(ee2, ee2), pe2 = r.add(pe2, ee2), _4 = r.mul(R, _4), A4 = r.mul(N4, A4), pe2 = r.add(pe2, _4), _4 = r.sub(ee2, _4), _4 = r.mul(R, _4), A4 = r.add(A4, _4), ee2 = r.mul(pe2, A4), Z = r.add(Z, ee2), ee2 = r.mul(P4, A4), L4 = r.mul(S4, L4), L4 = r.sub(L4, ee2), ee2 = r.mul(S4, pe2), B = r.mul(P4, B), B = r.add(B, ee2), new h4(L4, Z, B);
    }
    subtract(g4) {
      return this.add(g4.negate());
    }
    is0() {
      return this.equals(h4.ZERO);
    }
    wNAF(g4) {
      return v4.wNAFCached(this, g4, h4.normalizeZ);
    }
    multiplyUnsafe(g4) {
      const { endo: b4, n: y4 } = e;
      Pr("scalar", g4, qt2, y4);
      const x4 = h4.ZERO;
      if (g4 === qt2) return x4;
      if (this.is0() || g4 === Ue2) return this;
      if (!b4 || v4.hasPrecomputes(this)) return v4.wNAFCachedUnsafe(this, g4, h4.normalizeZ);
      let { k1neg: E4, k1: I4, k2neg: $4, k2: L4 } = b4.splitScalar(g4), Z = x4, B = x4, R = this;
      for (; I4 > qt2 || L4 > qt2; ) I4 & Ue2 && (Z = Z.add(R)), L4 & Ue2 && (B = B.add(R)), R = R.double(), I4 >>= Ue2, L4 >>= Ue2;
      return E4 && (Z = Z.negate()), $4 && (B = B.negate()), B = new h4(r.mul(B.px, b4.beta), B.py, B.pz), Z.add(B);
    }
    multiply(g4) {
      const { endo: b4, n: y4 } = e;
      Pr("scalar", g4, Ue2, y4);
      let x4, E4;
      if (b4) {
        const { k1neg: I4, k1: $4, k2neg: L4, k2: Z } = b4.splitScalar(g4);
        let { p: B, f: R } = this.wNAF($4), { p: N4, f: ee2 } = this.wNAF(Z);
        B = v4.constTimeNegate(I4, B), N4 = v4.constTimeNegate(L4, N4), N4 = new h4(r.mul(N4.px, b4.beta), N4.py, N4.pz), x4 = B.add(N4), E4 = R.add(ee2);
      } else {
        const { p: I4, f: $4 } = this.wNAF(g4);
        x4 = I4, E4 = $4;
      }
      return h4.normalizeZ([x4, E4])[0];
    }
    multiplyAndAddUnsafe(g4, b4, y4) {
      const x4 = h4.BASE, E4 = ($4, L4) => L4 === qt2 || L4 === Ue2 || !$4.equals(x4) ? $4.multiplyUnsafe(L4) : $4.multiply(L4), I4 = E4(this, b4).add(E4(g4, y4));
      return I4.is0() ? void 0 : I4;
    }
    toAffine(g4) {
      return d4(this, g4);
    }
    isTorsionFree() {
      const { h: g4, isTorsionFree: b4 } = e;
      if (g4 === Ue2) return true;
      if (b4) return b4(h4, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: g4, clearCofactor: b4 } = e;
      return g4 === Ue2 ? this : b4 ? b4(h4, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(g4 = true) {
      return hn("isCompressed", g4), this.assertValidity(), i(h4, this, g4);
    }
    toHex(g4 = true) {
      return hn("isCompressed", g4), pn(this.toRawBytes(g4));
    }
  }
  h4.BASE = new h4(e.Gx, e.Gy, r.ONE), h4.ZERO = new h4(r.ZERO, r.ONE, r.ZERO);
  const p4 = e.nBitLength, v4 = wf(h4, e.endo ? Math.ceil(p4 / 2) : p4);
  return { CURVE: e, ProjectivePoint: h4, normPrivateKeyToScalar: c4, weierstrassEquation: s, isWithinCurveOrder: a };
}
function Ef(t) {
  const e = kd(t);
  return ti(e, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: true, ...e });
}
function Af(t) {
  const e = Ef(t), { Fp: r, n } = e, i = r.BYTES + 1, o4 = 2 * r.BYTES + 1;
  function s(_4) {
    return Je2(_4, n);
  }
  function a(_4) {
    return Fa(_4, n);
  }
  const { ProjectivePoint: c4, normPrivateKeyToScalar: l4, weierstrassEquation: d4, isWithinCurveOrder: u4 } = xf({ ...e, toBytes(_4, S4, A4) {
    const P4 = S4.toAffine(), k4 = r.toBytes(P4.x), K4 = ei;
    return hn("isCompressed", A4), A4 ? K4(Uint8Array.from([S4.hasEvenY() ? 2 : 3]), k4) : K4(Uint8Array.from([4]), k4, r.toBytes(P4.y));
  }, fromBytes(_4) {
    const S4 = _4.length, A4 = _4[0], P4 = _4.subarray(1);
    if (S4 === i && (A4 === 2 || A4 === 3)) {
      const k4 = $r(P4);
      if (!Do(k4, Ue2, r.ORDER)) throw new Error("Point is not on curve");
      const K4 = d4(k4);
      let X4;
      try {
        X4 = r.sqrt(K4);
      } catch (me2) {
        const ge2 = me2 instanceof Error ? ": " + me2.message : "";
        throw new Error("Point is not on curve" + ge2);
      }
      const ae2 = (X4 & Ue2) === Ue2;
      return (A4 & 1) === 1 !== ae2 && (X4 = r.neg(X4)), { x: k4, y: X4 };
    } else if (S4 === o4 && A4 === 4) {
      const k4 = r.fromBytes(P4.subarray(0, r.BYTES)), K4 = r.fromBytes(P4.subarray(r.BYTES, 2 * r.BYTES));
      return { x: k4, y: K4 };
    } else {
      const k4 = i, K4 = o4;
      throw new Error("invalid Point, expected length of " + k4 + ", or uncompressed " + K4 + ", got " + S4);
    }
  } }), h4 = (_4) => pn(wn(_4, e.nByteLength));
  function p4(_4) {
    const S4 = n >> Ue2;
    return _4 > S4;
  }
  function v4(_4) {
    return p4(_4) ? s(-_4) : _4;
  }
  const m4 = (_4, S4, A4) => $r(_4.slice(S4, A4));
  class g4 {
    constructor(S4, A4, P4) {
      this.r = S4, this.s = A4, this.recovery = P4, this.assertValidity();
    }
    static fromCompact(S4) {
      const A4 = e.nByteLength;
      return S4 = xt2("compactSignature", S4, A4 * 2), new g4(m4(S4, 0, A4), m4(S4, A4, 2 * A4));
    }
    static fromDER(S4) {
      const { r: A4, s: P4 } = Gt2.toSig(xt2("DER", S4));
      return new g4(A4, P4);
    }
    assertValidity() {
      Pr("r", this.r, Ue2, n), Pr("s", this.s, Ue2, n);
    }
    addRecoveryBit(S4) {
      return new g4(this.r, this.s, S4);
    }
    recoverPublicKey(S4) {
      const { r: A4, s: P4, recovery: k4 } = this, K4 = $4(xt2("msgHash", S4));
      if (k4 == null || ![0, 1, 2, 3].includes(k4)) throw new Error("recovery id invalid");
      const X4 = k4 === 2 || k4 === 3 ? A4 + e.n : A4;
      if (X4 >= r.ORDER) throw new Error("recovery id 2 or 3 invalid");
      const ae2 = (k4 & 1) === 0 ? "02" : "03", fe2 = c4.fromHex(ae2 + h4(X4)), me2 = a(X4), ge2 = s(-K4 * me2), ke2 = s(P4 * me2), Fe2 = c4.BASE.multiplyAndAddUnsafe(fe2, ge2, ke2);
      if (!Fe2) throw new Error("point at infinify");
      return Fe2.assertValidity(), Fe2;
    }
    hasHighS() {
      return p4(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new g4(this.r, s(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return gn2(this.toDERHex());
    }
    toDERHex() {
      return Gt2.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return gn2(this.toCompactHex());
    }
    toCompactHex() {
      return h4(this.r) + h4(this.s);
    }
  }
  const b4 = { isValidPrivateKey(_4) {
    try {
      return l4(_4), true;
    } catch {
      return false;
    }
  }, normPrivateKeyToScalar: l4, randomPrivateKey: () => {
    const _4 = Sd(e.n);
    return pf(e.randomBytes(_4), e.n);
  }, precompute(_4 = 8, S4 = c4.BASE) {
    return S4._setWindowSize(_4), S4.multiply(BigInt(3)), S4;
  } };
  function y4(_4, S4 = true) {
    return c4.fromPrivateKey(_4).toRawBytes(S4);
  }
  function x4(_4) {
    const S4 = Or(_4), A4 = typeof _4 == "string", P4 = (S4 || A4) && _4.length;
    return S4 ? P4 === i || P4 === o4 : A4 ? P4 === 2 * i || P4 === 2 * o4 : _4 instanceof c4;
  }
  function E4(_4, S4, A4 = true) {
    if (x4(_4)) throw new Error("first arg must be private key");
    if (!x4(S4)) throw new Error("second arg must be public key");
    return c4.fromHex(S4).multiply(l4(_4)).toRawBytes(A4);
  }
  const I4 = e.bits2int || function(_4) {
    if (_4.length > 8192) throw new Error("input is too large");
    const S4 = $r(_4), A4 = _4.length * 8 - e.nBitLength;
    return A4 > 0 ? S4 >> BigInt(A4) : S4;
  }, $4 = e.bits2int_modN || function(_4) {
    return s(I4(_4));
  }, L4 = Ba(e.nBitLength);
  function Z(_4) {
    return Pr("num < 2^" + e.nBitLength, _4, qt2, L4), wn(_4, e.nByteLength);
  }
  function B(_4, S4, A4 = R) {
    if (["recovered", "canonical"].some((nt2) => nt2 in A4)) throw new Error("sign() legacy options not supported");
    const { hash: P4, randomBytes: k4 } = e;
    let { lowS: K4, prehash: X4, extraEntropy: ae2 } = A4;
    K4 == null && (K4 = true), _4 = xt2("msgHash", _4), Td(A4), X4 && (_4 = xt2("prehashed msgHash", P4(_4)));
    const fe2 = $4(_4), me2 = l4(S4), ge2 = [Z(me2), Z(fe2)];
    if (ae2 != null && ae2 !== false) {
      const nt2 = ae2 === true ? k4(r.BYTES) : ae2;
      ge2.push(xt2("extraEntropy", nt2));
    }
    const ke2 = ei(...ge2), Fe2 = fe2;
    function yt2(nt2) {
      const qe2 = I4(nt2);
      if (!u4(qe2)) return;
      const Re2 = a(qe2), Ke2 = c4.BASE.multiply(qe2).toAffine(), it2 = s(Ke2.x);
      if (it2 === qt2) return;
      const Nt3 = s(Re2 * s(Fe2 + it2 * me2));
      if (Nt3 === qt2) return;
      let tn = (Ke2.x === it2 ? 0 : 2) | Number(Ke2.y & Ue2), Jc = Nt3;
      return K4 && p4(Nt3) && (Jc = v4(Nt3), tn ^= 1), new g4(it2, Jc, tn);
    }
    return { seed: ke2, k2sig: yt2 };
  }
  const R = { lowS: e.lowS, prehash: false }, N4 = { lowS: e.lowS, prehash: false };
  function ee2(_4, S4, A4 = R) {
    const { seed: P4, k2sig: k4 } = B(_4, S4, A4), K4 = e;
    return ld(K4.hash.outputLen, K4.nByteLength, K4.hmac)(P4, k4);
  }
  c4.BASE._setWindowSize(8);
  function pe2(_4, S4, A4, P4 = N4) {
    var _a3;
    const k4 = _4;
    S4 = xt2("msgHash", S4), A4 = xt2("publicKey", A4);
    const { lowS: K4, prehash: X4, format: ae2 } = P4;
    if (Td(P4), "strict" in P4) throw new Error("options.strict was renamed to lowS");
    if (ae2 !== void 0 && ae2 !== "compact" && ae2 !== "der") throw new Error("format must be compact or der");
    const fe2 = typeof k4 == "string" || Or(k4), me2 = !fe2 && !ae2 && typeof k4 == "object" && k4 !== null && typeof k4.r == "bigint" && typeof k4.s == "bigint";
    if (!fe2 && !me2) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let ge2, ke2;
    try {
      if (me2 && (ge2 = new g4(k4.r, k4.s)), fe2) {
        try {
          ae2 !== "compact" && (ge2 = g4.fromDER(k4));
        } catch (tn) {
          if (!(tn instanceof Gt2.Err)) throw tn;
        }
        !ge2 && ae2 !== "der" && (ge2 = g4.fromCompact(k4));
      }
      ke2 = c4.fromHex(A4);
    } catch {
      return false;
    }
    if (!ge2 || K4 && ge2.hasHighS()) return false;
    X4 && (S4 = e.hash(S4));
    const { r: Fe2, s: yt2 } = ge2, nt2 = $4(S4), qe2 = a(yt2), Re2 = s(nt2 * qe2), Ke2 = s(Fe2 * qe2), it2 = (_a3 = c4.BASE.multiplyAndAddUnsafe(ke2, Re2, Ke2)) == null ? void 0 : _a3.toAffine();
    return it2 ? s(it2.x) === Fe2 : false;
  }
  return { CURVE: e, getPublicKey: y4, getSharedSecret: E4, sign: ee2, verify: pe2, ProjectivePoint: c4, Signature: g4, utils: b4 };
}
function Sf(t) {
  return { hash: t, hmac: (e, ...r) => vd(t, e, W1(...r)), randomBytes: j1 };
}
function _f(t, e) {
  const r = (n) => Af({ ...t, ...Sf(n) });
  return { ...r(e), create: r };
}
var $d = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
var Pd = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
var If = BigInt(1);
var qa = BigInt(2);
var Bd = (t, e) => (t + e / qa) / e;
function Nf(t) {
  const e = $d, r = BigInt(3), n = BigInt(6), i = BigInt(11), o4 = BigInt(22), s = BigInt(23), a = BigInt(44), c4 = BigInt(88), l4 = t * t * t % e, d4 = l4 * l4 * t % e, u4 = pt2(d4, r, e) * d4 % e, h4 = pt2(u4, r, e) * d4 % e, p4 = pt2(h4, qa, e) * l4 % e, v4 = pt2(p4, i, e) * p4 % e, m4 = pt2(v4, o4, e) * v4 % e, g4 = pt2(m4, a, e) * m4 % e, b4 = pt2(g4, c4, e) * g4 % e, y4 = pt2(b4, a, e) * m4 % e, x4 = pt2(y4, r, e) * d4 % e, E4 = pt2(x4, s, e) * v4 % e, I4 = pt2(E4, n, e) * l4 % e, $4 = pt2(I4, qa, e);
  if (!Ka.eql(Ka.sqr($4), t)) throw new Error("Cannot find square root");
  return $4;
}
var Ka = Ed($d, void 0, void 0, { sqrt: Nf });
_f({ a: BigInt(0), b: BigInt(7), Fp: Ka, n: Pd, Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"), Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"), h: BigInt(1), lowS: true, endo: { beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"), splitScalar: (t) => {
  const e = Pd, r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -If * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), o4 = r, s = BigInt("0x100000000000000000000000000000000"), a = Bd(o4 * t, e), c4 = Bd(-n * t, e);
  let l4 = Je2(t - a * r - c4 * i, e), d4 = Je2(-a * n - c4 * o4, e);
  const u4 = l4 > s, h4 = d4 > s;
  if (u4 && (l4 = e - l4), h4 && (d4 = e - d4), l4 > s || d4 > s) throw new Error("splitScalar: Endomorphism failed, k=" + t);
  return { k1neg: u4, k1: l4, k2neg: h4, k2: d4 };
} } }, ql), BigInt(0);
var Ya = { createBalance(t, e) {
  const r = { name: t.metadata.name || "", symbol: t.metadata.symbol || "", decimals: t.metadata.decimals || 0, value: t.metadata.value || 0, price: t.metadata.price || 0, iconUrl: t.metadata.iconUrl || "" };
  return { name: r.name, symbol: r.symbol, chainId: e, address: t.address === "native" ? void 0 : this.convertAddressToCAIP10Address(t.address, e), value: r.value, price: r.price, quantity: { decimals: r.decimals.toString(), numeric: this.convertHexToBalance({ hex: t.balance, decimals: r.decimals }) }, iconUrl: r.iconUrl };
}, convertHexToBalance({ hex: t, decimals: e }) {
  return Ml(BigInt(t), e);
}, convertAddressToCAIP10Address(t, e) {
  return `${e}:${t}`;
}, createCAIP2ChainId(t, e) {
  return `${e}:${parseInt(t, 16)}`;
}, getChainIdHexFromCAIP2ChainId(t) {
  const e = t.split(":");
  if (e.length < 2 || !e[1]) return "0x0";
  const r = e[1], n = parseInt(r, 10);
  return isNaN(n) ? "0x0" : `0x${n.toString(16)}`;
}, isWalletGetAssetsResponse(t) {
  return typeof t != "object" || t === null ? false : Object.values(t).every((e) => Array.isArray(e) && e.every((r) => this.isValidAsset(r)));
}, isValidAsset(t) {
  return typeof t == "object" && t !== null && typeof t.address == "string" && typeof t.balance == "string" && (t.type === "ERC20" || t.type === "NATIVE") && typeof t.metadata == "object" && t.metadata !== null && typeof t.metadata.name == "string" && typeof t.metadata.symbol == "string" && typeof t.metadata.decimals == "number" && typeof t.metadata.price == "number" && typeof t.metadata.iconUrl == "string";
} };
var Rd = { async getMyTokensWithBalance(t) {
  const e = Q.state.address, r = f2.state.activeCaipNetwork;
  if (!e || !r) return [];
  if (r.chainNamespace === "eip155") {
    const i = await this.getEIP155Balances(e, r);
    if (i) return this.filterLowQualityTokens(i);
  }
  const n = await oe3.getBalance(e, r.caipNetworkId, t);
  return this.filterLowQualityTokens(n.balances);
}, async getEIP155Balances(t, e) {
  var _a3, _b, _c2;
  try {
    const r = Ya.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);
    if (!((_c2 = (_b = (_a3 = await Y.getCapabilities(t)) == null ? void 0 : _a3[r]) == null ? void 0 : _b.assetDiscovery) == null ? void 0 : _c2.supported)) return null;
    const i = await Y.walletGetAssets({ account: t, chainFilter: [r] });
    return Ya.isWalletGetAssetsResponse(i) ? (i[r] || []).map((s) => Ya.createBalance(s, e.caipNetworkId)) : null;
  } catch {
    return null;
  }
}, filterLowQualityTokens(t) {
  return t.filter((e) => e.quantity.decimals !== "0");
}, mapBalancesToSwapTokens(t) {
  return (t == null ? void 0 : t.map((e) => ({ ...e, address: (e == null ? void 0 : e.address) ? e.address : f2.getActiveNetworkTokenAddress(), decimals: parseInt(e.quantity.decimals, 10), logoUri: e.iconUrl, eip2612: false }))) || [];
} };
var ue2 = xe3({ tokenBalances: [], loading: false });
var Ld = { state: ue2, subscribe(t) {
  return We2(ue2, () => t(ue2));
}, subscribeKey(t, e) {
  return He2(ue2, t, e);
}, setToken(t) {
  t && (ue2.token = Ir(t));
}, setTokenAmount(t) {
  ue2.sendTokenAmount = t;
}, setReceiverAddress(t) {
  ue2.receiverAddress = t;
}, setReceiverProfileImageUrl(t) {
  ue2.receiverProfileImageUrl = t;
}, setReceiverProfileName(t) {
  ue2.receiverProfileName = t;
}, setGasPrice(t) {
  ue2.gasPrice = t;
}, setGasPriceInUsd(t) {
  ue2.gasPriceInUSD = t;
}, setNetworkBalanceInUsd(t) {
  ue2.networkBalanceInUSD = t;
}, setLoading(t) {
  ue2.loading = t;
}, sendToken() {
  var _a3;
  switch ((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.chainNamespace) {
    case "eip155":
      this.sendEvmToken();
      return;
    case "solana":
      this.sendSolanaToken();
      return;
    default:
      throw new Error("Unsupported chain");
  }
}, sendEvmToken() {
  var _a3, _b, _c2, _d2, _e3, _f2;
  const t = f2.state.activeChain, e = (_a3 = Q.state.preferredAccountTypes) == null ? void 0 : _a3[t];
  ((_b = this.state.token) == null ? void 0 : _b.address) && this.state.sendTokenAmount && this.state.receiverAddress ? (le2.sendEvent({ type: "track", event: "SEND_INITIATED", properties: { isSmartAccount: e === cr.ACCOUNT_TYPES.SMART_ACCOUNT, token: this.state.token.address, amount: this.state.sendTokenAmount, network: ((_c2 = f2.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "" } }), this.sendERC20Token({ receiverAddress: this.state.receiverAddress, tokenAddress: this.state.token.address, sendTokenAmount: this.state.sendTokenAmount, decimals: this.state.token.quantity.decimals })) : this.state.receiverAddress && this.state.sendTokenAmount && this.state.gasPrice && ((_d2 = this.state.token) == null ? void 0 : _d2.quantity.decimals) && (le2.sendEvent({ type: "track", event: "SEND_INITIATED", properties: { isSmartAccount: e === cr.ACCOUNT_TYPES.SMART_ACCOUNT, token: (_e3 = this.state.token) == null ? void 0 : _e3.symbol, amount: this.state.sendTokenAmount, network: ((_f2 = f2.state.activeCaipNetwork) == null ? void 0 : _f2.caipNetworkId) || "" } }), this.sendNativeToken({ receiverAddress: this.state.receiverAddress, sendTokenAmount: this.state.sendTokenAmount, gasPrice: this.state.gasPrice, decimals: this.state.token.quantity.decimals }));
}, async fetchTokenBalance(t) {
  var _a3, _b;
  ue2.loading = true;
  const e = (_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId, r = (_b = f2.state.activeCaipNetwork) == null ? void 0 : _b.chainNamespace, n = f2.state.activeCaipAddress, i = n ? U3.getPlainAddress(n) : void 0;
  if (ue2.lastRetry && !U3.isAllowedRetry(ue2.lastRetry, 30 * Te2.ONE_SEC_MS)) return ue2.loading = false, [];
  try {
    if (i && e && r) {
      const o4 = await Rd.getMyTokensWithBalance();
      return ue2.tokenBalances = o4, ue2.lastRetry = void 0, o4;
    }
  } catch (o4) {
    ue2.lastRetry = Date.now(), t == null ? void 0 : t(o4), Ee3.showError("Token Balance Unavailable");
  } finally {
    ue2.loading = false;
  }
  return [];
}, fetchNetworkBalance() {
  if (ue2.tokenBalances.length === 0) return;
  const t = Rd.mapBalancesToSwapTokens(ue2.tokenBalances);
  if (!t) return;
  const e = t.find((r) => r.address === f2.getActiveNetworkTokenAddress());
  e && (ue2.networkBalanceInUSD = e ? xo.multiply(e.quantity.numeric, e.price).toString() : "0");
}, isInsufficientNetworkTokenForGas(t, e) {
  const r = e || "0";
  return xo.bigNumber(t).eq(0) ? true : xo.bigNumber(xo.bigNumber(r)).gt(t);
}, hasInsufficientGasFunds() {
  var _a3;
  const t = f2.state.activeChain;
  let e = true;
  return ((_a3 = Q.state.preferredAccountTypes) == null ? void 0 : _a3[t]) === cr.ACCOUNT_TYPES.SMART_ACCOUNT ? e = false : ue2.networkBalanceInUSD && (e = this.isInsufficientNetworkTokenForGas(ue2.networkBalanceInUSD, ue2.gasPriceInUSD)), e;
}, async sendNativeToken(t) {
  var _a3, _b, _c2, _d2, _e3, _f2;
  const e = f2.state.activeChain;
  D2.pushTransactionStack({ view: "Account", goBack: false });
  const r = t.receiverAddress, n = Q.state.address, i = Y.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), o4 = "0x";
  try {
    await Y.sendTransaction({ chainNamespace: "eip155", to: r, address: n, data: o4, value: i ?? BigInt(0), gasPrice: t.gasPrice }), Ee3.showSuccess("Transaction started"), le2.sendEvent({ type: "track", event: "SEND_SUCCESS", properties: { isSmartAccount: ((_a3 = Q.state.preferredAccountTypes) == null ? void 0 : _a3[e]) === cr.ACCOUNT_TYPES.SMART_ACCOUNT, token: ((_b = this.state.token) == null ? void 0 : _b.symbol) || "", amount: t.sendTokenAmount, network: ((_c2 = f2.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "" } }), this.resetSend();
  } catch (s) {
    console.error("SendController:sendERC20Token - failed to send native token", s);
    const a = s instanceof Error ? s.message : "Unknown error";
    le2.sendEvent({ type: "track", event: "SEND_ERROR", properties: { message: a, isSmartAccount: ((_d2 = Q.state.preferredAccountTypes) == null ? void 0 : _d2[e]) === cr.ACCOUNT_TYPES.SMART_ACCOUNT, token: ((_e3 = this.state.token) == null ? void 0 : _e3.symbol) || "", amount: t.sendTokenAmount, network: ((_f2 = f2.state.activeCaipNetwork) == null ? void 0 : _f2.caipNetworkId) || "" } }), Ee3.showError("Something went wrong");
  }
}, async sendERC20Token(t) {
  var _a3, _b, _c2;
  D2.pushTransactionStack({ view: "Account", goBack: false });
  const e = Y.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals));
  try {
    if (Q.state.address && t.sendTokenAmount && t.receiverAddress && t.tokenAddress) {
      const r = U3.getPlainAddress(t.tokenAddress);
      await Y.writeContract({ fromAddress: Q.state.address, tokenAddress: r, args: [t.receiverAddress, e ?? BigInt(0)], method: "transfer", abi: Q0.getERC20Abi(r), chainNamespace: "eip155" }), Ee3.showSuccess("Transaction started"), this.resetSend();
    }
  } catch (r) {
    console.error("SendController:sendERC20Token - failed to send erc20 token", r);
    const n = r instanceof Error ? r.message : "Unknown error";
    le2.sendEvent({ type: "track", event: "SEND_ERROR", properties: { message: n, isSmartAccount: ((_a3 = Q.state.preferredAccountTypes) == null ? void 0 : _a3.eip155) === cr.ACCOUNT_TYPES.SMART_ACCOUNT, token: ((_b = this.state.token) == null ? void 0 : _b.symbol) || "", amount: t.sendTokenAmount, network: ((_c2 = f2.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId) || "" } }), Ee3.showError("Something went wrong");
  }
}, sendSolanaToken() {
  if (!this.state.sendTokenAmount || !this.state.receiverAddress) {
    Ee3.showError("Please enter a valid amount and receiver address");
    return;
  }
  D2.pushTransactionStack({ view: "Account", goBack: false }), Y.sendTransaction({ chainNamespace: "solana", to: this.state.receiverAddress, value: this.state.sendTokenAmount }).then(() => {
    this.resetSend(), Q.fetchTokenBalance();
  }).catch((t) => {
    Ee3.showError("Failed to send transaction. Please try again."), console.error("SendController:sendToken - failed to send solana transaction", t);
  });
}, resetSend() {
  ue2.token = void 0, ue2.sendTokenAmount = void 0, ue2.receiverAddress = void 0, ue2.receiverProfileImageUrl = void 0, ue2.receiverProfileName = void 0, ue2.loading = false, ue2.tokenBalances = [];
} };
var Xa = { currentTab: 0, tokenBalance: [], smartAccountDeployed: false, addressLabels: /* @__PURE__ */ new Map(), allAccounts: [], user: void 0 };
var jo = { caipNetwork: void 0, supportsAllNetworks: true, smartAccountEnabledNetworks: [] };
var z2 = xe3({ chains: o1(), activeCaipAddress: void 0, activeChain: void 0, activeCaipNetwork: void 0, noAdapters: false, universalAdapter: { networkControllerClient: void 0, connectionControllerClient: void 0 }, isSwitchingNamespace: false });
var f2 = { state: z2, subscribe(t) {
  return We2(z2, () => {
    t(z2);
  });
}, subscribeKey(t, e) {
  return He2(z2, t, e);
}, subscribeChainProp(t, e, r) {
  let n;
  return We2(z2.chains, () => {
    var _a3;
    const i = r || z2.activeChain;
    if (i) {
      const o4 = (_a3 = z2.chains.get(i)) == null ? void 0 : _a3[t];
      n !== o4 && (n = o4, e(o4));
    }
  });
}, initialize(t, e, r) {
  const { chainId: n, namespace: i } = q.getActiveNetworkProps(), o4 = e == null ? void 0 : e.find((l4) => l4.id.toString() === (n == null ? void 0 : n.toString())), a = t.find((l4) => (l4 == null ? void 0 : l4.namespace) === i) || (t == null ? void 0 : t[0]), c4 = /* @__PURE__ */ new Set([...(e == null ? void 0 : e.map((l4) => l4.chainNamespace)) ?? []]);
  ((t == null ? void 0 : t.length) === 0 || !a) && (z2.noAdapters = true), z2.noAdapters || (z2.activeChain = a == null ? void 0 : a.namespace, z2.activeCaipNetwork = o4, this.setChainNetworkData(a == null ? void 0 : a.namespace, { caipNetwork: o4 }), z2.activeChain && zt2.set({ activeChain: a == null ? void 0 : a.namespace })), c4.forEach((l4) => {
    const d4 = e == null ? void 0 : e.filter((u4) => u4.chainNamespace === l4);
    f2.state.chains.set(l4, { namespace: l4, networkState: xe3({ ...jo, caipNetwork: d4 == null ? void 0 : d4[0] }), accountState: xe3(Xa), caipNetworks: d4 ?? [], ...r }), this.setRequestedCaipNetworks(d4 ?? [], l4);
  });
}, removeAdapter(t) {
  var _a3, _b;
  if (z2.activeChain === t) {
    const e = Array.from(z2.chains.entries()).find(([r]) => r !== t);
    if (e) {
      const r = (_b = (_a3 = e[1]) == null ? void 0 : _a3.caipNetworks) == null ? void 0 : _b[0];
      r && this.setActiveCaipNetwork(r);
    }
  }
  z2.chains.delete(t);
}, addAdapter(t, { networkControllerClient: e, connectionControllerClient: r }, n) {
  z2.chains.set(t.namespace, { namespace: t.namespace, networkState: { ...jo, caipNetwork: n[0] }, accountState: Xa, caipNetworks: n, connectionControllerClient: r, networkControllerClient: e }), this.setRequestedCaipNetworks((n == null ? void 0 : n.filter((i) => i.chainNamespace === t.namespace)) ?? [], t.namespace);
}, addNetwork(t) {
  var _a3;
  const e = z2.chains.get(t.chainNamespace);
  if (e) {
    const r = [...e.caipNetworks || []];
    ((_a3 = e.caipNetworks) == null ? void 0 : _a3.find((n) => n.id === t.id)) || r.push(t), z2.chains.set(t.chainNamespace, { ...e, caipNetworks: r }), this.setRequestedCaipNetworks(r, t.chainNamespace);
  }
}, removeNetwork(t, e) {
  var _a3, _b, _c2;
  const r = z2.chains.get(t);
  if (r) {
    const n = ((_a3 = z2.activeCaipNetwork) == null ? void 0 : _a3.id) === e, i = [...((_b = r.caipNetworks) == null ? void 0 : _b.filter((o4) => o4.id !== e)) || []];
    n && ((_c2 = r == null ? void 0 : r.caipNetworks) == null ? void 0 : _c2[0]) && this.setActiveCaipNetwork(r.caipNetworks[0]), z2.chains.set(t, { ...r, caipNetworks: i }), this.setRequestedCaipNetworks(i || [], t);
  }
}, setAdapterNetworkState(t, e) {
  const r = z2.chains.get(t);
  r && (r.networkState = { ...r.networkState || jo, ...e }, z2.chains.set(t, r));
}, setChainAccountData(t, e, r = true) {
  if (!t) throw new Error("Chain is required to update chain account data");
  const n = z2.chains.get(t);
  if (n) {
    const i = { ...n.accountState || Xa, ...e };
    z2.chains.set(t, { ...n, accountState: i }), (z2.chains.size === 1 || z2.activeChain === t) && (e.caipAddress && (z2.activeCaipAddress = e.caipAddress), Q.replaceState(i));
  }
}, setChainNetworkData(t, e) {
  if (!t) return;
  const r = z2.chains.get(t);
  if (r) {
    const n = { ...r.networkState || jo, ...e };
    z2.chains.set(t, { ...r, networkState: n });
  }
}, setAccountProp(t, e, r, n = true) {
  this.setChainAccountData(r, { [t]: e }, n), t === "status" && e === "disconnected" && r && j2.removeConnectorId(r);
}, setActiveNamespace(t) {
  var _a3, _b;
  z2.activeChain = t;
  const e = t ? z2.chains.get(t) : void 0, r = (_a3 = e == null ? void 0 : e.networkState) == null ? void 0 : _a3.caipNetwork;
  (r == null ? void 0 : r.id) && t && (z2.activeCaipAddress = (_b = e == null ? void 0 : e.accountState) == null ? void 0 : _b.caipAddress, z2.activeCaipNetwork = r, this.setChainNetworkData(t, { caipNetwork: r }), q.setActiveCaipNetworkId(r == null ? void 0 : r.caipNetworkId), zt2.set({ activeChain: t, selectedNetworkId: r == null ? void 0 : r.caipNetworkId }));
}, setActiveCaipNetwork(t) {
  var _a3, _b, _c2;
  if (!t) return;
  z2.activeChain !== t.chainNamespace && this.setIsSwitchingNamespace(true);
  const e = z2.chains.get(t.chainNamespace);
  z2.activeChain = t.chainNamespace, z2.activeCaipNetwork = t, this.setChainNetworkData(t.chainNamespace, { caipNetwork: t }), ((_a3 = e == null ? void 0 : e.accountState) == null ? void 0 : _a3.address) ? z2.activeCaipAddress = `${t.chainNamespace}:${t.id}:${(_b = e == null ? void 0 : e.accountState) == null ? void 0 : _b.address}` : z2.activeCaipAddress = void 0, this.setAccountProp("caipAddress", z2.activeCaipAddress, t.chainNamespace), e && Q.replaceState(e.accountState), Ld.resetSend(), zt2.set({ activeChain: z2.activeChain, selectedNetworkId: (_c2 = z2.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId }), q.setActiveCaipNetworkId(t.caipNetworkId), !this.checkIfSupportedNetwork(t.chainNamespace) && T2.state.enableNetworkSwitch && !T2.state.allowUnsupportedChain && !Y.state.wcBasic && this.showUnsupportedChainUI();
}, addCaipNetwork(t) {
  var _a3;
  if (!t) return;
  const e = z2.chains.get(t.chainNamespace);
  e && ((_a3 = e == null ? void 0 : e.caipNetworks) == null ? void 0 : _a3.push(t));
}, async switchActiveNamespace(t) {
  var _a3;
  if (!t) return;
  const e = t !== f2.state.activeChain, r = (_a3 = f2.getNetworkData(t)) == null ? void 0 : _a3.caipNetwork, n = f2.getCaipNetworkByNamespace(t, r == null ? void 0 : r.id);
  e && n && await f2.switchActiveNetwork(n);
}, async switchActiveNetwork(t) {
  var _a3, _b;
  !((_b = (_a3 = f2.state.chains.get(f2.state.activeChain)) == null ? void 0 : _a3.caipNetworks) == null ? void 0 : _b.some((i) => {
    var _a4;
    return i.id === ((_a4 = z2.activeCaipNetwork) == null ? void 0 : _a4.id);
  })) && D2.goBack();
  const n = this.getNetworkControllerClient(t.chainNamespace);
  n && (await n.switchCaipNetwork(t), le2.sendEvent({ type: "track", event: "SWITCH_NETWORK", properties: { network: t.caipNetworkId } }));
}, getNetworkControllerClient(t) {
  const e = t || z2.activeChain, r = z2.chains.get(e);
  if (!r) throw new Error("Chain adapter not found");
  if (!r.networkControllerClient) throw new Error("NetworkController client not set");
  return r.networkControllerClient;
}, getConnectionControllerClient(t) {
  const e = t || z2.activeChain;
  if (!e) throw new Error("Chain is required to get connection controller client");
  const r = z2.chains.get(e);
  if (!(r == null ? void 0 : r.connectionControllerClient)) throw new Error("ConnectionController client not set");
  return r.connectionControllerClient;
}, getAccountProp(t, e) {
  var _a3;
  let r = z2.activeChain;
  if (e && (r = e), !r) return;
  const n = (_a3 = z2.chains.get(r)) == null ? void 0 : _a3.accountState;
  if (n) return n[t];
}, getNetworkProp(t, e) {
  var _a3;
  const r = (_a3 = z2.chains.get(e)) == null ? void 0 : _a3.networkState;
  if (r) return r[t];
}, getRequestedCaipNetworks(t) {
  const e = z2.chains.get(t), { approvedCaipNetworkIds: r = [], requestedCaipNetworks: n = [] } = (e == null ? void 0 : e.networkState) || {};
  return U3.sortRequestedNetworks(r, n);
}, getAllRequestedCaipNetworks() {
  const t = [];
  return z2.chains.forEach((e) => {
    const r = this.getRequestedCaipNetworks(e.namespace);
    t.push(...r);
  }), t;
}, setRequestedCaipNetworks(t, e) {
  this.setAdapterNetworkState(e, { requestedCaipNetworks: t });
}, getAllApprovedCaipNetworkIds() {
  const t = [];
  return z2.chains.forEach((e) => {
    const r = this.getApprovedCaipNetworkIds(e.namespace);
    t.push(...r);
  }), t;
}, getActiveCaipNetwork() {
  return z2.activeCaipNetwork;
}, getActiveCaipAddress() {
  return z2.activeCaipAddress;
}, getApprovedCaipNetworkIds(t) {
  var _a3, _b;
  return ((_b = (_a3 = z2.chains.get(t)) == null ? void 0 : _a3.networkState) == null ? void 0 : _b.approvedCaipNetworkIds) || [];
}, async setApprovedCaipNetworksData(t) {
  var _a3;
  const r = await ((_a3 = this.getNetworkControllerClient()) == null ? void 0 : _a3.getApprovedCaipNetworksData());
  this.setAdapterNetworkState(t, { approvedCaipNetworkIds: r == null ? void 0 : r.approvedCaipNetworkIds, supportsAllNetworks: r == null ? void 0 : r.supportsAllNetworks });
}, checkIfSupportedNetwork(t, e) {
  const r = e || z2.activeCaipNetwork, n = this.getRequestedCaipNetworks(t);
  return n.length ? n == null ? void 0 : n.some((i) => i.id === (r == null ? void 0 : r.id)) : true;
}, checkIfSupportedChainId(t) {
  var _a3;
  return z2.activeChain ? (_a3 = this.getRequestedCaipNetworks(z2.activeChain)) == null ? void 0 : _a3.some((r) => r.id === t) : true;
}, setSmartAccountEnabledNetworks(t, e) {
  this.setAdapterNetworkState(e, { smartAccountEnabledNetworks: t });
}, checkIfSmartAccountEnabled() {
  var _a3, _b;
  const t = al.caipNetworkIdToNumber((_a3 = z2.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId), e = z2.activeChain;
  return !e || !t ? false : !!((_b = this.getNetworkProp("smartAccountEnabledNetworks", e)) == null ? void 0 : _b.includes(Number(t)));
}, getActiveNetworkTokenAddress() {
  var _a3, _b;
  const t = ((_a3 = z2.activeCaipNetwork) == null ? void 0 : _a3.chainNamespace) || "eip155", e = ((_b = z2.activeCaipNetwork) == null ? void 0 : _b.id) || 1, r = Te2.NATIVE_TOKEN_ADDRESS[t];
  return `${t}:${e}:${r}`;
}, showUnsupportedChainUI() {
  he2.open({ view: "UnsupportedChain" });
}, checkIfNamesSupported() {
  const t = z2.activeCaipNetwork;
  return !!((t == null ? void 0 : t.chainNamespace) && Te2.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace));
}, resetNetwork(t) {
  this.setAdapterNetworkState(t, { approvedCaipNetworkIds: void 0, supportsAllNetworks: true, smartAccountEnabledNetworks: [] });
}, resetAccount(t) {
  const e = t;
  if (!e) throw new Error("Chain is required to set account prop");
  z2.activeCaipAddress = void 0, this.setChainAccountData(e, { smartAccountDeployed: false, currentTab: 0, caipAddress: void 0, address: void 0, balance: void 0, balanceSymbol: void 0, profileName: void 0, profileImage: void 0, addressExplorerUrl: void 0, tokenBalance: [], connectedWalletInfo: void 0, preferredAccountTypes: void 0, socialProvider: void 0, socialWindow: void 0, farcasterUrl: void 0, allAccounts: [], user: void 0, status: "disconnected" }), j2.removeConnectorId(e);
}, async disconnect(t) {
  const e = m1(t);
  try {
    Ld.resetSend();
    const r = await Promise.allSettled(e.map(async ([i, o4]) => {
      var _a3;
      try {
        const { caipAddress: s } = this.getAccountData(i) || {};
        s && ((_a3 = o4.connectionControllerClient) == null ? void 0 : _a3.disconnect) && await o4.connectionControllerClient.disconnect(i), this.resetAccount(i), this.resetNetwork(i);
      } catch (s) {
        throw new Error(`Failed to disconnect chain ${i}: ${s.message}`);
      }
    }));
    Y.resetWcConnection();
    const n = r.filter((i) => i.status === "rejected");
    if (n.length > 0) throw new Error(n.map((i) => i.reason.message).join(", "));
    q.deleteConnectedSocialProvider(), t ? j2.removeConnectorId(t) : j2.resetConnectorIds(), le2.sendEvent({ type: "track", event: "DISCONNECT_SUCCESS", properties: { namespace: t || "all" } });
  } catch (r) {
    console.error(r.message || "Failed to disconnect chains"), le2.sendEvent({ type: "track", event: "DISCONNECT_ERROR", properties: { message: r.message || "Failed to disconnect chains" } });
  }
}, setIsSwitchingNamespace(t) {
  z2.isSwitchingNamespace = t;
}, getFirstCaipNetworkSupportsAuthConnector() {
  var _a3, _b;
  const t = [];
  let e;
  if (z2.chains.forEach((r) => {
    G2.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((n) => n === r.namespace) && r.namespace && t.push(r.namespace);
  }), t.length > 0) {
    const r = t[0];
    return e = r ? (_b = (_a3 = z2.chains.get(r)) == null ? void 0 : _a3.caipNetworks) == null ? void 0 : _b[0] : void 0, e;
  }
}, getAccountData(t) {
  var _a3;
  return t ? (_a3 = f2.state.chains.get(t)) == null ? void 0 : _a3.accountState : Q.state;
}, getNetworkData(t) {
  var _a3;
  const e = t || z2.activeChain;
  if (e) return (_a3 = f2.state.chains.get(e)) == null ? void 0 : _a3.networkState;
}, getCaipNetworkByNamespace(t, e) {
  var _a3, _b, _c2;
  if (!t) return;
  const r = f2.state.chains.get(t), n = (_a3 = r == null ? void 0 : r.caipNetworks) == null ? void 0 : _a3.find((i) => i.id === e);
  return n || ((_b = r == null ? void 0 : r.networkState) == null ? void 0 : _b.caipNetwork) || ((_c2 = r == null ? void 0 : r.caipNetworks) == null ? void 0 : _c2[0]);
}, getRequestedCaipNetworkIds() {
  const t = j2.state.filterByNamespace;
  return (t ? [z2.chains.get(t)] : Array.from(z2.chains.values())).flatMap((r) => (r == null ? void 0 : r.caipNetworks) || []).map((r) => r.caipNetworkId);
}, getCaipNetworks(t) {
  return t ? f2.getRequestedCaipNetworks(t) : f2.getAllRequestedCaipNetworks();
} };
var kf = { purchaseCurrencies: [{ id: "2b92315d-eab7-5bef-84fa-089a131333f5", name: "USD Coin", symbol: "USDC", networks: [{ name: "ethereum-mainnet", display_name: "Ethereum", chain_id: "1", contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" }, { name: "polygon-mainnet", display_name: "Polygon", chain_id: "137", contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174" }] }, { id: "2b92315d-eab7-5bef-84fa-089a131333f5", name: "Ether", symbol: "ETH", networks: [{ name: "ethereum-mainnet", display_name: "Ethereum", chain_id: "1", contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" }, { name: "polygon-mainnet", display_name: "Polygon", chain_id: "137", contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174" }] }], paymentCurrencies: [{ id: "USD", payment_method_limits: [{ id: "card", min: "10.00", max: "7500.00" }, { id: "ach_bank_account", min: "10.00", max: "25000.00" }] }, { id: "EUR", payment_method_limits: [{ id: "card", min: "10.00", max: "7500.00" }, { id: "ach_bank_account", min: "10.00", max: "25000.00" }] }] };
var Ud = U3.getBlockchainApiUrl();
var ct2 = xe3({ clientId: null, api: new Eo({ baseUrl: Ud, clientId: null }), supportedChains: { http: [], ws: [] } });
var oe3 = { state: ct2, async get(t) {
  const { st: e, sv: r } = oe3.getSdkProperties(), n = T2.state.projectId, i = { ...t.params || {}, st: e, sv: r, projectId: n };
  return ct2.api.get({ ...t, params: i });
}, getSdkProperties() {
  const { sdkType: t, sdkVersion: e } = T2.state;
  return { st: t || "unknown", sv: e || "unknown" };
}, async isNetworkSupported(t) {
  if (!t) return false;
  try {
    ct2.supportedChains.http.length || await oe3.getSupportedNetworks();
  } catch {
    return false;
  }
  return ct2.supportedChains.http.includes(t);
}, async getSupportedNetworks() {
  const t = await oe3.get({ path: "v1/supported-chains" });
  return ct2.supportedChains = t, t;
}, async fetchIdentity({ address: t, caipNetworkId: e }) {
  if (!await oe3.isNetworkSupported(e)) return { avatar: "", name: "" };
  const n = q.getIdentityFromCacheForAddress(t);
  if (n) return n;
  const i = await oe3.get({ path: `/v1/identity/${t}`, params: { sender: f2.state.activeCaipAddress ? U3.getPlainAddress(f2.state.activeCaipAddress) : void 0 } });
  return q.updateIdentityCache({ address: t, identity: i, timestamp: Date.now() }), i;
}, async fetchTransactions({ account: t, cursor: e, onramp: r, signal: n, cache: i, chainId: o4 }) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? oe3.get({ path: `/v1/account/${t}/history`, params: { cursor: e, onramp: r, chainId: o4 }, signal: n, cache: i }) : { data: [], next: void 0 };
}, async fetchSwapQuote({ amount: t, userAddress: e, from: r, to: n, gasPrice: i }) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? oe3.get({ path: "/v1/convert/quotes", headers: { "Content-Type": "application/json" }, params: { amount: t, userAddress: e, from: r, to: n, gasPrice: i } }) : { quotes: [] };
}, async fetchSwapTokens({ chainId: t }) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? oe3.get({ path: "/v1/convert/tokens", params: { chainId: t } }) : { tokens: [] };
}, async fetchTokenPrice({ addresses: t }) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? ct2.api.post({ path: "/v1/fungible/price", body: { currency: "usd", addresses: t, projectId: T2.state.projectId }, headers: { "Content-Type": "application/json" } }) : { fungibles: [] };
}, async fetchSwapAllowance({ tokenAddress: t, userAddress: e }) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? oe3.get({ path: "/v1/convert/allowance", params: { tokenAddress: t, userAddress: e }, headers: { "Content-Type": "application/json" } }) : { allowance: "0" };
}, async fetchGasPrice({ chainId: t }) {
  var _a3;
  const { st: e, sv: r } = oe3.getSdkProperties();
  if (!await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId)) throw new Error("Network not supported for Gas Price");
  return oe3.get({ path: "/v1/convert/gas-price", headers: { "Content-Type": "application/json" }, params: { chainId: t, st: e, sv: r } });
}, async generateSwapCalldata({ amount: t, from: e, to: r, userAddress: n, disableEstimate: i }) {
  var _a3;
  if (!await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId)) throw new Error("Network not supported for Swaps");
  return ct2.api.post({ path: "/v1/convert/build-transaction", headers: { "Content-Type": "application/json" }, body: { amount: t, eip155: { slippage: Te2.CONVERT_SLIPPAGE_TOLERANCE }, projectId: T2.state.projectId, from: e, to: r, userAddress: n, disableEstimate: i } });
}, async generateApproveCalldata({ from: t, to: e, userAddress: r }) {
  var _a3;
  const { st: n, sv: i } = oe3.getSdkProperties();
  if (!await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId)) throw new Error("Network not supported for Swaps");
  return oe3.get({ path: "/v1/convert/build-approve", headers: { "Content-Type": "application/json" }, params: { userAddress: r, from: t, to: e, st: n, sv: i } });
}, async getBalance(t, e, r) {
  var _a3;
  const { st: n, sv: i } = oe3.getSdkProperties();
  if (!await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId)) return Ee3.showError("Token Balance Unavailable"), { balances: [] };
  const s = `${e}:${t}`, a = q.getBalanceCacheForCaipAddress(s);
  if (a) return a;
  const c4 = await oe3.get({ path: `/v1/account/${t}/balance`, params: { currency: "usd", chainId: e, forceUpdate: r, st: n, sv: i } });
  return q.updateBalanceCache({ caipAddress: s, balance: c4, timestamp: Date.now() }), c4;
}, async lookupEnsName(t) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? oe3.get({ path: `/v1/profile/account/${t}`, params: { apiVersion: "2" } }) : { addresses: {}, attributes: [] };
}, async reverseLookupEnsName({ address: t }) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? oe3.get({ path: `/v1/profile/reverse/${t}`, params: { sender: Q.state.address, apiVersion: "2" } }) : [];
}, async getEnsNameSuggestions(t) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? oe3.get({ path: `/v1/profile/suggestions/${t}`, params: { zone: "reown.id" } }) : { suggestions: [] };
}, async registerEnsName({ coinType: t, address: e, message: r, signature: n }) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? ct2.api.post({ path: "/v1/profile/account", body: { coin_type: t, address: e, message: r, signature: n }, headers: { "Content-Type": "application/json" } }) : { success: false };
}, async generateOnRampURL({ destinationWallets: t, partnerUserId: e, defaultNetwork: r, purchaseAmount: n, paymentAmount: i }) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? (await ct2.api.post({ path: "/v1/generators/onrampurl", params: { projectId: T2.state.projectId }, body: { destinationWallets: t, defaultNetwork: r, partnerUserId: e, defaultExperience: "buy", presetCryptoAmount: n, presetFiatAmount: i } })).url : "";
}, async getOnrampOptions() {
  var _a3;
  if (!await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId)) return { paymentCurrencies: [], purchaseCurrencies: [] };
  try {
    return await oe3.get({ path: "/v1/onramp/options" });
  } catch {
    return kf;
  }
}, async getOnrampQuote({ purchaseCurrency: t, paymentCurrency: e, amount: r, network: n }) {
  var _a3;
  try {
    return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? await ct2.api.post({ path: "/v1/onramp/quote", params: { projectId: T2.state.projectId }, body: { purchaseCurrency: t, paymentCurrency: e, amount: r, network: n } }) : null;
  } catch {
    return { coinbaseFee: { amount: r, currency: e.id }, networkFee: { amount: r, currency: e.id }, paymentSubtotal: { amount: r, currency: e.id }, paymentTotal: { amount: r, currency: e.id }, purchaseAmount: { amount: r, currency: e.id }, quoteId: "mocked-quote-id" };
  }
}, async getSmartSessions(t) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? oe3.get({ path: `/v1/sessions/${t}` }) : [];
}, async revokeSmartSession(t, e, r) {
  var _a3;
  return await oe3.isNetworkSupported((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId) ? ct2.api.post({ path: `/v1/sessions/${t}/revoke`, params: { projectId: T2.state.projectId }, body: { pci: e, signature: r } }) : { success: false };
}, setClientId(t) {
  ct2.clientId = t, ct2.api = new Eo({ baseUrl: Ud, clientId: t });
} };
var ft2 = xe3({ currentTab: 0, tokenBalance: [], smartAccountDeployed: false, addressLabels: /* @__PURE__ */ new Map(), allAccounts: [] });
var Q = { state: ft2, replaceState(t) {
  t && Object.assign(ft2, Ir(t));
}, subscribe(t) {
  return f2.subscribeChainProp("accountState", (e) => {
    if (e) return t(e);
  });
}, subscribeKey(t, e, r) {
  let n;
  return f2.subscribeChainProp("accountState", (i) => {
    if (i) {
      const o4 = i[t];
      n !== o4 && (n = o4, e(o4));
    }
  }, r);
}, setStatus(t, e) {
  f2.setAccountProp("status", t, e);
}, getCaipAddress(t) {
  return f2.getAccountProp("caipAddress", t);
}, setCaipAddress(t, e) {
  const r = t ? U3.getPlainAddress(t) : void 0;
  e === f2.state.activeChain && (f2.state.activeCaipAddress = t), f2.setAccountProp("caipAddress", t, e), f2.setAccountProp("address", r, e);
}, setBalance(t, e, r) {
  f2.setAccountProp("balance", t, r), f2.setAccountProp("balanceSymbol", e, r);
}, setProfileName(t, e) {
  f2.setAccountProp("profileName", t, e);
}, setProfileImage(t, e) {
  f2.setAccountProp("profileImage", t, e);
}, setUser(t, e) {
  f2.setAccountProp("user", t, e);
}, setAddressExplorerUrl(t, e) {
  f2.setAccountProp("addressExplorerUrl", t, e);
}, setSmartAccountDeployed(t, e) {
  f2.setAccountProp("smartAccountDeployed", t, e);
}, setCurrentTab(t) {
  f2.setAccountProp("currentTab", t, f2.state.activeChain);
}, setTokenBalance(t, e) {
  t && f2.setAccountProp("tokenBalance", t, e);
}, setShouldUpdateToAddress(t, e) {
  f2.setAccountProp("shouldUpdateToAddress", t, e);
}, setAllAccounts(t, e) {
  f2.setAccountProp("allAccounts", t, e);
}, addAddressLabel(t, e, r) {
  const n = f2.getAccountProp("addressLabels", r) || /* @__PURE__ */ new Map();
  n.set(t, e), f2.setAccountProp("addressLabels", n, r);
}, removeAddressLabel(t, e) {
  const r = f2.getAccountProp("addressLabels", e) || /* @__PURE__ */ new Map();
  r.delete(t), f2.setAccountProp("addressLabels", r, e);
}, setConnectedWalletInfo(t, e) {
  f2.setAccountProp("connectedWalletInfo", t, e, false);
}, setPreferredAccountType(t, e) {
  f2.setAccountProp("preferredAccountTypes", { ...ft2.preferredAccountTypes, [e]: t }, e);
}, setPreferredAccountTypes(t) {
  ft2.preferredAccountTypes = t;
}, setSocialProvider(t, e) {
  t && f2.setAccountProp("socialProvider", t, e);
}, setSocialWindow(t, e) {
  f2.setAccountProp("socialWindow", t ? Ir(t) : void 0, e);
}, setFarcasterUrl(t, e) {
  f2.setAccountProp("farcasterUrl", t, e);
}, async fetchTokenBalance(t) {
  var _a3, _b;
  ft2.balanceLoading = true;
  const e = (_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.caipNetworkId, r = (_b = f2.state.activeCaipNetwork) == null ? void 0 : _b.chainNamespace, n = f2.state.activeCaipAddress, i = n ? U3.getPlainAddress(n) : void 0;
  if (ft2.lastRetry && !U3.isAllowedRetry(ft2.lastRetry, 30 * Te2.ONE_SEC_MS)) return ft2.balanceLoading = false, [];
  try {
    if (i && e && r) {
      const s = (await oe3.getBalance(i, e)).balances.filter((a) => a.quantity.decimals !== "0");
      return this.setTokenBalance(s, r), ft2.lastRetry = void 0, ft2.balanceLoading = false, s;
    }
  } catch (o4) {
    ft2.lastRetry = Date.now(), t == null ? void 0 : t(o4), Ee3.showError("Token Balance Unavailable");
  } finally {
    ft2.balanceLoading = false;
  }
  return [];
}, resetAccount(t) {
  f2.resetAccount(t);
} };
var Qe2 = xe3({ loading: false, loadingNamespaceMap: /* @__PURE__ */ new Map(), open: false, shake: false, namespace: void 0 });
var he2 = { state: Qe2, subscribe(t) {
  return We2(Qe2, () => t(Qe2));
}, subscribeKey(t, e) {
  return He2(Qe2, t, e);
}, async open(t) {
  var _a3;
  const e = Q.state.status === "connected";
  Y.state.wcBasic ? W2.prefetch({ fetchNetworkImages: false, fetchConnectorImages: false }) : await W2.prefetch({ fetchConnectorImages: !e, fetchFeaturedWallets: !e, fetchRecommendedWallets: !e }), (t == null ? void 0 : t.namespace) ? (await f2.switchActiveNamespace(t.namespace), he2.setLoading(true, t.namespace)) : he2.setLoading(true), j2.setFilterByNamespace(t == null ? void 0 : t.namespace);
  const r = (_a3 = f2.getAccountData(t == null ? void 0 : t.namespace)) == null ? void 0 : _a3.caipAddress;
  f2.state.noAdapters && !r ? U3.isMobile() ? D2.reset("AllWallets") : D2.reset("ConnectingWalletConnectBasic") : (t == null ? void 0 : t.view) ? D2.reset(t.view, t.data) : r ? D2.reset("Account") : D2.reset("Connect"), Qe2.open = true, zt2.set({ open: true }), le2.sendEvent({ type: "track", event: "MODAL_OPEN", properties: { connected: !!r } });
}, close() {
  const t = T2.state.enableEmbedded, e = !!f2.state.activeCaipAddress;
  Qe2.open && le2.sendEvent({ type: "track", event: "MODAL_CLOSE", properties: { connected: e } }), Qe2.open = false, he2.clearLoading(), t ? e ? D2.replace("Account") : D2.push("Connect") : zt2.set({ open: false }), Y.resetUri();
}, setLoading(t, e) {
  e && Qe2.loadingNamespaceMap.set(e, t), Qe2.loading = t, zt2.set({ loading: t });
}, clearLoading() {
  Qe2.loadingNamespaceMap.clear(), Qe2.loading = false;
}, shake() {
  Qe2.shake || (Qe2.shake = true, setTimeout(() => {
    Qe2.shake = false;
  }, 500));
} };
var Md = { id: "2b92315d-eab7-5bef-84fa-089a131333f5", name: "USD Coin", symbol: "USDC", networks: [{ name: "ethereum-mainnet", display_name: "Ethereum", chain_id: "1", contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" }, { name: "polygon-mainnet", display_name: "Polygon", chain_id: "137", contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174" }] };
var Tf = { id: "USD", payment_method_limits: [{ id: "card", min: "10.00", max: "7500.00" }, { id: "ach_bank_account", min: "10.00", max: "25000.00" }] };
var Of = { providers: s1, selectedProvider: null, error: null, purchaseCurrency: Md, paymentCurrency: Tf, purchaseCurrencies: [Md], paymentCurrencies: [], quotesLoading: false };
xe3(Of);
var $f = { initializing: false, initialized: false, loadingPrices: false, loadingQuote: false, loadingApprovalTransaction: false, loadingBuildTransaction: false, loadingTransaction: false, fetchError: false, approvalTransaction: void 0, swapTransaction: void 0, transactionError: void 0, sourceToken: void 0, sourceTokenAmount: "", sourceTokenPriceInUSD: 0, toToken: void 0, toTokenAmount: "", toTokenPriceInUSD: 0, networkPrice: "0", networkBalanceInUSD: "0", networkTokenSymbol: "", inputError: void 0, slippage: Te2.CONVERT_SLIPPAGE_TOLERANCE, tokens: void 0, popularTokens: void 0, suggestedTokens: void 0, foundTokens: void 0, myTokensWithBalance: void 0, tokensPriceMap: {}, gasFee: "0", gasPriceInUSD: 0, priceImpact: void 0, maxSlippage: void 0, providerFee: void 0 };
xe3($f);
var Et = xe3({ message: "", open: false, triggerRect: { width: 0, height: 0, top: 0, left: 0 }, variant: "shade" });
var mn = { state: Et, subscribe(t) {
  return We2(Et, () => t(Et));
}, subscribeKey(t, e) {
  return He2(Et, t, e);
}, showTooltip({ message: t, triggerRect: e, variant: r }) {
  Et.open = true, Et.message = t, Et.triggerRect = e, Et.variant = r;
}, hide() {
  Et.open = false, Et.message = "", Et.triggerRect = { width: 0, height: 0, top: 0, left: 0 };
} };
var Dd = 2147483648;
var Pf = { convertEVMChainIdToCoinType(t) {
  if (t >= Dd) throw new Error("Invalid chainId");
  return (Dd | t) >>> 0;
} };
var gt2 = xe3({ suggestions: [], loading: false });
var zd = { state: gt2, subscribe(t) {
  return We2(gt2, () => t(gt2));
}, subscribeKey(t, e) {
  return He2(gt2, t, e);
}, async resolveName(t) {
  var _a3, _b;
  try {
    return await oe3.lookupEnsName(t);
  } catch (e) {
    const r = e;
    throw new Error(((_b = (_a3 = r == null ? void 0 : r.reasons) == null ? void 0 : _a3[0]) == null ? void 0 : _b.description) || "Error resolving name");
  }
}, async isNameRegistered(t) {
  try {
    return await oe3.lookupEnsName(t), true;
  } catch {
    return false;
  }
}, async getSuggestions(t) {
  try {
    gt2.loading = true, gt2.suggestions = [];
    const e = await oe3.getEnsNameSuggestions(t);
    return gt2.suggestions = e.suggestions.map((r) => ({ ...r, name: r.name })) || [], gt2.suggestions;
  } catch (e) {
    const r = this.parseEnsApiError(e, "Error fetching name suggestions");
    throw new Error(r);
  } finally {
    gt2.loading = false;
  }
}, async getNamesForAddress(t) {
  try {
    if (!f2.state.activeCaipNetwork) return [];
    const r = q.getEnsFromCacheForAddress(t);
    if (r) return r;
    const n = await oe3.reverseLookupEnsName({ address: t });
    return q.updateEnsCache({ address: t, ens: n, timestamp: Date.now() }), n;
  } catch (e) {
    const r = this.parseEnsApiError(e, "Error fetching names for address");
    throw new Error(r);
  }
}, async registerName(t) {
  const e = f2.state.activeCaipNetwork;
  if (!e) throw new Error("Network not found");
  const r = Q.state.address, n = j2.getAuthConnector();
  if (!r || !n) throw new Error("Address or auth connector not found");
  gt2.loading = true;
  try {
    const i = JSON.stringify({ name: t, attributes: {}, timestamp: Math.floor(Date.now() / 1e3) });
    D2.pushTransactionStack({ view: "RegisterAccountNameSuccess", goBack: false, replace: true, onCancel() {
      gt2.loading = false;
    } });
    const o4 = await Y.signMessage(i), s = e.id;
    if (!s) throw new Error("Network not found");
    const a = Pf.convertEVMChainIdToCoinType(Number(s));
    await oe3.registerEnsName({ coinType: a, address: r, signature: o4, message: i }), Q.setProfileName(t, e.chainNamespace), D2.replace("RegisterAccountNameSuccess");
  } catch (i) {
    const o4 = this.parseEnsApiError(i, `Error registering name ${t}`);
    throw D2.replace("RegisterAccountName"), new Error(o4);
  } finally {
    gt2.loading = false;
  }
}, validateName(t) {
  return /^[a-zA-Z0-9-]{4,}$/u.test(t);
}, parseEnsApiError(t, e) {
  var _a3, _b;
  return ((_b = (_a3 = t == null ? void 0 : t.reasons) == null ? void 0 : _a3[0]) == null ? void 0 : _b.description) || e;
} };
xe3({ isLegalCheckboxChecked: false });
var Be2 = { METMASK_CONNECTOR_NAME: "MetaMask", TRUST_CONNECTOR_NAME: "Trust Wallet", SOLFLARE_CONNECTOR_NAME: "Solflare", PHANTOM_CONNECTOR_NAME: "Phantom", COIN98_CONNECTOR_NAME: "Coin98", MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden", BACKPACK_CONNECTOR_NAME: "Backpack", BITGET_CONNECTOR_NAME: "Bitget Wallet", FRONTIER_CONNECTOR_NAME: "Frontier", XVERSE_CONNECTOR_NAME: "Xverse Wallet", LEATHER_CONNECTOR_NAME: "Leather", EIP155: "eip155", ADD_CHAIN_METHOD: "wallet_addEthereumChain", EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider", EIP6963_REQUEST_EVENT: "eip6963:requestProvider", CONNECTOR_RDNS_MAP: { coinbaseWallet: "com.coinbase.wallet", coinbaseWalletSDK: "com.coinbase.wallet" }, CONNECTOR_TYPE_EXTERNAL: "EXTERNAL", CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT", CONNECTOR_TYPE_INJECTED: "INJECTED", CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED", CONNECTOR_TYPE_AUTH: "AUTH", CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN", CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH" };
var Fo = { ConnectorExplorerIds: { [G2.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", [G2.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", [G2.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f", [G2.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927", [G2.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709", [Be2.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", [Be2.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", [Be2.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79", [Be2.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393", [Be2.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01", [Be2.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6", [Be2.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0", [Be2.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662", [Be2.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041", [Be2.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b", [Be2.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13" }, NetworkImageIds: { 1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900", 42161: "3bff954d-5cb0-47a0-9a23-d20192e74600", 43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00", 56: "93564157-2e8e-4ce7-81df-b264dbee9b00", 250: "06b26297-fe0c-4733-5d6b-ffa5498aac00", 10: "ab9c186a-c52f-464b-2906-ca59d760a400", 137: "41d04d42-da3b-4453-8506-668cc0727900", 5e3: "e86fae9b-b770-4eea-e520-150e12c81100", 295: "6a97d510-cac8-4e58-c7ce-e8681b044c00", 11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800", 84532: "a18a7ecd-e307-4360-4746-283182228e00", 1301: "4eeea7ef-0014-4649-5d1d-07271a80f600", 130: "2257980a-3463-48c6-cbac-a42d2a956e00", 10143: "0a728e83-bacb-46db-7844-948f05434900", 100: "02b53f6a-e3d4-479e-1cb4-21178987d100", 9001: "f926ff41-260d-4028-635e-91913fc28e00", 324: "b310f07f-4ef7-49f3-7073-2a0a39685800", 314: "5a73b3dd-af74-424e-cae0-0de859ee9400", 4689: "34e68754-e536-40da-c153-6ef2e7188a00", 1088: "3897a66d-40b9-4833-162f-a2c90531c900", 1284: "161038da-44ae-4ec7-1208-0ea569454b00", 1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00", 7777777: "845c60df-d429-4991-e687-91ae45791600", 42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00", 8453: "7289c336-3981-4081-c5f4-efc26ac64a00", 1313161554: "3ff73439-a619-4894-9262-4470c773a100", 2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00", 2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00", 80094: "e329c2c9-59b0-4a02-83e4-212ff3779900", 2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900", "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700", "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700", EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700", "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00", "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200" }, ConnectorImageIds: { [G2.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800", [G2.CONNECTOR_ID.COINBASE_SDK]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800", [G2.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800", [G2.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300", [G2.CONNECTOR_ID.WALLET_CONNECT]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400", [G2.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00" }, ConnectorNamesMap: { [G2.CONNECTOR_ID.INJECTED]: "Browser Wallet", [G2.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect", [G2.CONNECTOR_ID.COINBASE]: "Coinbase", [G2.CONNECTOR_ID.COINBASE_SDK]: "Coinbase", [G2.CONNECTOR_ID.LEDGER]: "Ledger", [G2.CONNECTOR_ID.SAFE]: "Safe" }, ConnectorTypesMap: { [G2.CONNECTOR_ID.INJECTED]: "INJECTED", [G2.CONNECTOR_ID.WALLET_CONNECT]: "WALLET_CONNECT", [G2.CONNECTOR_ID.EIP6963]: "ANNOUNCED", [G2.CONNECTOR_ID.AUTH]: "AUTH" }, WalletConnectRpcChainIds: [1, 5, 11155111, 10, 420, 42161, 421613, 137, 80001, 42220, 1313161554, 1313161555, 56, 97, 43114, 43113, 100, 8453, 84531, 7777777, 999, 324, 280] };
var Ja = { getCaipTokens(t) {
  if (!t) return;
  const e = {};
  return Object.entries(t).forEach(([r, n]) => {
    e[`${Be2.EIP155}:${r}`] = n;
  }), e;
}, isLowerCaseMatch(t, e) {
  return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
} };
var Ho = { UniversalProviderErrors: { UNAUTHORIZED_DOMAIN_NOT_ALLOWED: { message: "Unauthorized: origin not allowed", alertErrorKey: "INVALID_APP_CONFIGURATION" }, JWT_VALIDATION_ERROR: { message: "JWT validation error: JWT Token is not yet valid", alertErrorKey: "JWT_TOKEN_NOT_VALID" }, INVALID_KEY: { message: "Unauthorized: invalid key", alertErrorKey: "INVALID_PROJECT_ID" } }, ALERT_ERRORS: { SWITCH_NETWORK_NOT_FOUND: { shortMessage: "Network Not Found", longMessage: "Network not found - please make sure it is included in 'networks' array in createAppKit function" }, INVALID_APP_CONFIGURATION: { shortMessage: "Invalid App Configuration", longMessage: () => `Origin ${Bf() ? window.origin : "unknown"} not found on Allowlist - update configuration on cloud.reown.com` }, SOCIALS_TIMEOUT: { shortMessage: "Invalid App Configuration", longMessage: () => "There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com" }, JWT_TOKEN_NOT_VALID: { shortMessage: "Session Expired", longMessage: "Invalid session found on UniversalProvider - please check your time settings and connect again" }, INVALID_PROJECT_ID: { shortMessage: "Invalid App Configuration", longMessage: "Invalid Project ID - update configuration" }, PROJECT_ID_NOT_CONFIGURED: { shortMessage: "Project ID Not Configured", longMessage: "Project ID Not Configured - update configuration on cloud.reown.com" } } };
function Bf() {
  return typeof window < "u";
}
function Rf(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return '"[Circular]"';
  }
}
var Lf = Uf;
function Uf(t, e, r) {
  var n = r && r.stringify || Rf, i = 1;
  if (typeof t == "object" && t !== null) {
    var o4 = e.length + i;
    if (o4 === 1) return t;
    var s = new Array(o4);
    s[0] = n(t);
    for (var a = 1; a < o4; a++) s[a] = n(e[a]);
    return s.join(" ");
  }
  if (typeof t != "string") return t;
  var c4 = e.length;
  if (c4 === 0) return t;
  for (var l4 = "", d4 = 1 - i, u4 = -1, h4 = t && t.length || 0, p4 = 0; p4 < h4; ) {
    if (t.charCodeAt(p4) === 37 && p4 + 1 < h4) {
      switch (u4 = u4 > -1 ? u4 : 0, t.charCodeAt(p4 + 1)) {
        case 100:
        case 102:
          if (d4 >= c4 || e[d4] == null) break;
          u4 < p4 && (l4 += t.slice(u4, p4)), l4 += Number(e[d4]), u4 = p4 + 2, p4++;
          break;
        case 105:
          if (d4 >= c4 || e[d4] == null) break;
          u4 < p4 && (l4 += t.slice(u4, p4)), l4 += Math.floor(Number(e[d4])), u4 = p4 + 2, p4++;
          break;
        case 79:
        case 111:
        case 106:
          if (d4 >= c4 || e[d4] === void 0) break;
          u4 < p4 && (l4 += t.slice(u4, p4));
          var v4 = typeof e[d4];
          if (v4 === "string") {
            l4 += "'" + e[d4] + "'", u4 = p4 + 2, p4++;
            break;
          }
          if (v4 === "function") {
            l4 += e[d4].name || "<anonymous>", u4 = p4 + 2, p4++;
            break;
          }
          l4 += n(e[d4]), u4 = p4 + 2, p4++;
          break;
        case 115:
          if (d4 >= c4) break;
          u4 < p4 && (l4 += t.slice(u4, p4)), l4 += String(e[d4]), u4 = p4 + 2, p4++;
          break;
        case 37:
          u4 < p4 && (l4 += t.slice(u4, p4)), l4 += "%", u4 = p4 + 2, p4++, d4--;
          break;
      }
      ++d4;
    }
    ++p4;
  }
  return u4 === -1 ? t : (u4 < h4 && (l4 += t.slice(u4)), l4);
}
var Wd = Lf;
var Rr = Ot;
var ri = Gf().console || {};
var Mf = { mapHttpRequest: Zo, mapHttpResponse: Zo, wrapRequestSerializer: ec, wrapResponseSerializer: ec, wrapErrorSerializer: ec, req: Zo, res: Zo, err: Ff };
function Df(t, e) {
  return Array.isArray(t) ? t.filter(function(n) {
    return n !== "!stdSerializers.err";
  }) : t === true ? Object.keys(e) : false;
}
function Ot(t) {
  t = t || {}, t.browser = t.browser || {};
  const e = t.browser.transmit;
  if (e && typeof e.send != "function") throw Error("pino: transmit option must have a send function");
  const r = t.browser.write || ri;
  t.browser.write && (t.browser.asObject = true);
  const n = t.serializers || {}, i = Df(t.browser.serialize, n);
  let o4 = t.browser.serialize;
  Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (o4 = false);
  const s = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof r == "function" && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), t.enabled === false && (t.level = "silent");
  const a = t.level || "info", c4 = Object.create(r);
  c4.log || (c4.log = ni), Object.defineProperty(c4, "levelVal", { get: d4 }), Object.defineProperty(c4, "level", { get: u4, set: h4 });
  const l4 = { transmit: e, serialize: i, asObject: t.browser.asObject, levels: s, timestamp: Hf(t) };
  c4.levels = Ot.levels, c4.level = a, c4.setMaxListeners = c4.getMaxListeners = c4.emit = c4.addListener = c4.on = c4.prependListener = c4.once = c4.prependOnceListener = c4.removeListener = c4.removeAllListeners = c4.listeners = c4.listenerCount = c4.eventNames = c4.write = c4.flush = ni, c4.serializers = n, c4._serialize = i, c4._stdErrSerialize = o4, c4.child = p4, e && (c4._logEvent = Qa());
  function d4() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function u4() {
    return this._level;
  }
  function h4(v4) {
    if (v4 !== "silent" && !this.levels.values[v4]) throw Error("unknown level " + v4);
    this._level = v4, bn(l4, c4, "error", "log"), bn(l4, c4, "fatal", "error"), bn(l4, c4, "warn", "error"), bn(l4, c4, "info", "log"), bn(l4, c4, "debug", "log"), bn(l4, c4, "trace", "log");
  }
  function p4(v4, m4) {
    if (!v4) throw new Error("missing bindings for child Pino");
    m4 = m4 || {}, i && v4.serializers && (m4.serializers = v4.serializers);
    const g4 = m4.serializers;
    if (i && g4) {
      var b4 = Object.assign({}, n, g4), y4 = t.browser.serialize === true ? Object.keys(b4) : i;
      delete v4.serializers, Vo([v4], y4, b4, this._stdErrSerialize);
    }
    function x4(E4) {
      this._childLevel = (E4._childLevel | 0) + 1, this.error = vn(E4, v4, "error"), this.fatal = vn(E4, v4, "fatal"), this.warn = vn(E4, v4, "warn"), this.info = vn(E4, v4, "info"), this.debug = vn(E4, v4, "debug"), this.trace = vn(E4, v4, "trace"), b4 && (this.serializers = b4, this._serialize = y4), e && (this._logEvent = Qa([].concat(E4._logEvent.bindings, v4)));
    }
    return x4.prototype = this, new x4(this);
  }
  return c4;
}
Ot.levels = { values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 }, labels: { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" } }, Ot.stdSerializers = Mf, Ot.stdTimeFunctions = Object.assign({}, { nullTime: jd, epochTime: Fd, unixTime: Vf, isoTime: Zf });
function bn(t, e, r, n) {
  const i = Object.getPrototypeOf(e);
  e[r] = e.levelVal > e.levels.values[r] ? ni : i[r] ? i[r] : ri[r] || ri[n] || ni, zf(t, e, r);
}
function zf(t, e, r) {
  !t.transmit && e[r] === ni || (e[r] = /* @__PURE__ */ function(n) {
    return function() {
      const o4 = t.timestamp(), s = new Array(arguments.length), a = Object.getPrototypeOf && Object.getPrototypeOf(this) === ri ? ri : this;
      for (var c4 = 0; c4 < s.length; c4++) s[c4] = arguments[c4];
      if (t.serialize && !t.asObject && Vo(s, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? n.call(a, Wf(this, r, s, o4)) : n.apply(a, s), t.transmit) {
        const l4 = t.transmit.level || e.level, d4 = Ot.levels.values[l4], u4 = Ot.levels.values[r];
        if (u4 < d4) return;
        jf(this, { ts: o4, methodLevel: r, methodValue: u4, transmitLevel: l4, transmitValue: Ot.levels.values[t.transmit.level || e.level], send: t.transmit.send, val: e.levelVal }, s);
      }
    };
  }(e[r]));
}
function Wf(t, e, r, n) {
  t._serialize && Vo(r, t._serialize, t.serializers, t._stdErrSerialize);
  const i = r.slice();
  let o4 = i[0];
  const s = {};
  n && (s.time = n), s.level = Ot.levels.values[e];
  let a = (t._childLevel | 0) + 1;
  if (a < 1 && (a = 1), o4 !== null && typeof o4 == "object") {
    for (; a-- && typeof i[0] == "object"; ) Object.assign(s, i.shift());
    o4 = i.length ? Wd(i.shift(), i) : void 0;
  } else typeof o4 == "string" && (o4 = Wd(i.shift(), i));
  return o4 !== void 0 && (s.msg = o4), s;
}
function Vo(t, e, r, n) {
  for (const i in t) if (n && t[i] instanceof Error) t[i] = Ot.stdSerializers.err(t[i]);
  else if (typeof t[i] == "object" && !Array.isArray(t[i])) for (const o4 in t[i]) e && e.indexOf(o4) > -1 && o4 in r && (t[i][o4] = r[o4](t[i][o4]));
}
function vn(t, e, r) {
  return function() {
    const n = new Array(1 + arguments.length);
    n[0] = e;
    for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
    return t[r].apply(this, n);
  };
}
function jf(t, e, r) {
  const n = e.send, i = e.ts, o4 = e.methodLevel, s = e.methodValue, a = e.val, c4 = t._logEvent.bindings;
  Vo(r, t._serialize || Object.keys(t.serializers), t.serializers, t._stdErrSerialize === void 0 ? true : t._stdErrSerialize), t._logEvent.ts = i, t._logEvent.messages = r.filter(function(l4) {
    return c4.indexOf(l4) === -1;
  }), t._logEvent.level.label = o4, t._logEvent.level.value = s, n(o4, t._logEvent, a), t._logEvent = Qa(c4);
}
function Qa(t) {
  return { ts: 0, messages: [], bindings: t || [], level: { label: "", value: 0 } };
}
function Ff(t) {
  const e = { type: t.constructor.name, msg: t.message, stack: t.stack };
  for (const r in t) e[r] === void 0 && (e[r] = t[r]);
  return e;
}
function Hf(t) {
  return typeof t.timestamp == "function" ? t.timestamp : t.timestamp === false ? jd : Fd;
}
function Zo() {
  return {};
}
function ec(t) {
  return t;
}
function ni() {
}
function jd() {
  return false;
}
function Fd() {
  return Date.now();
}
function Vf() {
  return Math.round(Date.now() / 1e3);
}
function Zf() {
  return new Date(Date.now()).toISOString();
}
function Gf() {
  function t(e) {
    return typeof e < "u" && e;
  }
  try {
    return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", { get: function() {
      return delete Object.prototype.globalThis, this.globalThis = this;
    }, configurable: true }), globalThis;
  } catch {
    return t(self) || t(window) || t(this) || {};
  }
}
var qf = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r);
function Hd(t) {
  return typeof t == "string" ? t : qf(t) || "";
}
var Kf = { level: "info" };
var tc = 1e3 * 1024;
var Yf = class {
  constructor(e) {
    this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
var Vd = class {
  constructor(e) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
  }
  append(e) {
    const r = new Yf(e);
    if (r.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${r.size}`);
    for (; this.size + r.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = r), this.tail = r) : (this.head = r, this.tail = r), this.lengthInNodes++, this.sizeInBytes += r.size;
  }
  shift() {
    if (!this.head) return;
    const e = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
  }
  toArray() {
    const e = [];
    let r = this.head;
    for (; r !== null; ) e.push(r.value), r = r.next;
    return e;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e = this.head;
    return { next: () => {
      if (!e) return { done: true, value: null };
      const r = e.value;
      return e = e.next, { done: false, value: r };
    } };
  }
};
var Zd = class {
  constructor(e, r = tc) {
    this.level = e ?? "error", this.levelValue = Rr.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = r, this.logs = new Vd(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e, r) {
    r === Rr.levels.values.error ? console.error(e) : r === Rr.levels.values.warn ? console.warn(e) : r === Rr.levels.values.debug ? console.debug(e) : r === Rr.levels.values.trace ? console.trace(e) : console.log(e);
  }
  appendToLogs(e) {
    this.logs.append(Hd({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e }));
    const r = typeof e == "string" ? JSON.parse(e).level : e.level;
    r >= this.levelValue && this.forwardToConsole(e, r);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new Vd(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e) {
    const r = this.getLogArray();
    return r.push(Hd({ extraMetadata: e })), new Blob(r, { type: "application/json" });
  }
};
var Xf = class {
  constructor(e, r = tc) {
    this.baseChunkLogger = new Zd(e, r);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
  downloadLogsBlobInBrowser(e) {
    const r = URL.createObjectURL(this.logsToBlob(e)), n = document.createElement("a");
    n.href = r, n.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(r);
  }
};
var Jf = class {
  constructor(e, r = tc) {
    this.baseChunkLogger = new Zd(e, r);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
};
var Qf = Object.defineProperty;
var eg = Object.defineProperties;
var tg = Object.getOwnPropertyDescriptors;
var Gd = Object.getOwnPropertySymbols;
var rg = Object.prototype.hasOwnProperty;
var ng = Object.prototype.propertyIsEnumerable;
var qd = (t, e, r) => e in t ? Qf(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r;
var Go = (t, e) => {
  for (var r in e || (e = {})) rg.call(e, r) && qd(t, r, e[r]);
  if (Gd) for (var r of Gd(e)) ng.call(e, r) && qd(t, r, e[r]);
  return t;
};
var qo = (t, e) => eg(t, tg(e));
function ig(t) {
  return qo(Go({}, t), { level: (t == null ? void 0 : t.level) || Kf.level });
}
function og(t) {
  var e, r;
  const n = new Xf((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return { logger: Rr(qo(Go({}, t.opts), { level: "trace", browser: qo(Go({}, (r = t.opts) == null ? void 0 : r.browser), { write: (i) => n.write(i) }) })), chunkLoggerController: n };
}
function sg(t) {
  var e;
  const r = new Jf((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return { logger: Rr(qo(Go({}, t.opts), { level: "trace" })), chunkLoggerController: r };
}
function ag(t) {
  return typeof t.loggerOverride < "u" && typeof t.loggerOverride != "string" ? { logger: t.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? og(t) : sg(t);
}
var cg = { createLogger(t, e = "error") {
  const r = ig({ level: e }), { logger: n } = ag({ opts: r });
  return n.error = (...i) => {
    for (const o4 of i) if (o4 instanceof Error) {
      t(o4, ...i);
      return;
    }
    t(void 0, ...i);
  }, n;
} };
var lg = "rpc.walletconnect.org";
function Kd(t, e) {
  const r = new URL("https://rpc.walletconnect.org/v1/");
  return r.searchParams.set("chainId", t), r.searchParams.set("projectId", e), r.toString();
}
var rc = ["near:mainnet", "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp", "eip155:1101", "eip155:56", "eip155:42161", "eip155:7777777", "eip155:59144", "eip155:324", "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1", "eip155:5000", "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz", "eip155:80084", "eip155:5003", "eip155:100", "eip155:8453", "eip155:42220", "eip155:1313161555", "eip155:17000", "eip155:1", "eip155:300", "eip155:1313161554", "eip155:1329", "eip155:84532", "eip155:421614", "eip155:11155111", "eip155:8217", "eip155:43114", "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z", "eip155:999999999", "eip155:11155420", "eip155:80002", "eip155:97", "eip155:43113", "eip155:137", "eip155:10", "eip155:1301", "bip122:000000000019d6689c085ae165831e93", "bip122:000000000933ea01ad0ee984209779ba"];
var Cn = { extendRpcUrlWithProjectId(t, e) {
  let r = false;
  try {
    r = new URL(t).host === lg;
  } catch {
    r = false;
  }
  if (r) {
    const n = new URL(t);
    return n.searchParams.has("projectId") || n.searchParams.set("projectId", e), n.toString();
  }
  return t;
}, isCaipNetwork(t) {
  return "chainNamespace" in t && "caipNetworkId" in t;
}, getChainNamespace(t) {
  return this.isCaipNetwork(t) ? t.chainNamespace : G2.CHAIN.EVM;
}, getCaipNetworkId(t) {
  return this.isCaipNetwork(t) ? t.caipNetworkId : `${G2.CHAIN.EVM}:${t.id}`;
}, getDefaultRpcUrl(t, e, r) {
  var _a3, _b, _c2;
  const n = (_c2 = (_b = (_a3 = t.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b.http) == null ? void 0 : _c2[0];
  return rc.includes(e) ? Kd(e, r) : n || "";
}, extendCaipNetwork(t, { customNetworkImageUrls: e, projectId: r, customRpcUrls: n }) {
  var _a3, _b, _c2, _d2, _e3;
  const i = this.getChainNamespace(t), o4 = this.getCaipNetworkId(t), s = (_a3 = t.rpcUrls.default.http) == null ? void 0 : _a3[0], a = this.getDefaultRpcUrl(t, o4, r), c4 = ((_d2 = (_c2 = (_b = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _b.chainDefault) == null ? void 0 : _c2.http) == null ? void 0 : _d2[0]) || s, l4 = ((_e3 = n == null ? void 0 : n[o4]) == null ? void 0 : _e3.map((h4) => h4.url)) || [], d4 = [...l4, a], u4 = [...l4];
  return c4 && !u4.includes(c4) && u4.push(c4), { ...t, chainNamespace: i, caipNetworkId: o4, assets: { imageId: Fo.NetworkImageIds[t.id], imageUrl: e == null ? void 0 : e[t.id] }, rpcUrls: { ...t.rpcUrls, default: { http: d4 }, chainDefault: { http: u4 } } };
}, extendCaipNetworks(t, { customNetworkImageUrls: e, projectId: r, customRpcUrls: n }) {
  return t.map((i) => Cn.extendCaipNetwork(i, { customNetworkImageUrls: e, customRpcUrls: n, projectId: r }));
}, getViemTransport(t, e, r) {
  var _a3, _b, _c2;
  const n = [];
  return r == null ? void 0 : r.forEach((i) => {
    n.push(Lo(i.url, i.config));
  }), rc.includes(t.caipNetworkId) && n.push(Lo(Kd(t.caipNetworkId, e), { fetchOptions: { headers: { "Content-Type": "text/plain" } } })), (_c2 = (_b = (_a3 = t == null ? void 0 : t.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b.http) == null ? void 0 : _c2.forEach((i) => {
    n.push(Lo(i));
  }), nd(n);
}, extendWagmiTransports(t, e, r) {
  if (rc.includes(t.caipNetworkId)) {
    const n = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
    return nd([r, Lo(n)]);
  }
  return r;
}, getUnsupportedNetwork(t) {
  return { id: t.split(":")[1], caipNetworkId: t, name: G2.UNSUPPORTED_NETWORK_NAME, chainNamespace: t.split(":")[0], nativeCurrency: { name: "", decimals: 0, symbol: "" }, rpcUrls: { default: { http: [] } } };
}, getCaipNetworkFromStorage(t) {
  var _a3;
  const e = q.getActiveCaipNetworkId(), r = f2.getAllRequestedCaipNetworks(), n = Array.from(((_a3 = f2.state.chains) == null ? void 0 : _a3.keys()) || []), i = e == null ? void 0 : e.split(":")[0], o4 = i ? n.includes(i) : false, s = r == null ? void 0 : r.find((c4) => c4.caipNetworkId === e);
  return o4 && !s && e ? this.getUnsupportedNetwork(e) : s || t || (r == null ? void 0 : r[0]);
} };
var Ko2 = { eip155: void 0, solana: void 0, polkadot: void 0, bip122: void 0 };
var et2 = xe3({ providers: { ...Ko2 }, providerIds: { ...Ko2 } });
var _e2 = { state: et2, subscribeKey(t, e) {
  return He2(et2, t, e);
}, subscribe(t) {
  return We2(et2, () => {
    t(et2);
  });
}, subscribeProviders(t) {
  return We2(et2.providers, () => t(et2.providers));
}, setProvider(t, e) {
  e && (et2.providers[t] = Ir(e));
}, getProvider(t) {
  return et2.providers[t];
}, setProviderId(t, e) {
  e && (et2.providerIds[t] = e);
}, getProviderId(t) {
  if (t) return et2.providerIds[t];
}, reset() {
  et2.providers = { ...Ko2 }, et2.providerIds = { ...Ko2 };
}, resetChain(t) {
  et2.providers[t] = void 0, et2.providerIds[t] = void 0;
} };
var Yd;
(function(t) {
  t.Google = "google", t.Github = "github", t.Apple = "apple", t.Facebook = "facebook", t.X = "x", t.Discord = "discord", t.Farcaster = "farcaster";
})(Yd || (Yd = {}));
var gr = { ACCOUNT_TABS: [{ label: "Tokens" }, { label: "NFTs" }, { label: "Activity" }], SECURE_SITE_ORIGIN: (typeof process < "u" && typeof process.env < "u" ? process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org", VIEW_DIRECTION: { Next: "next", Prev: "prev" }, DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"], ANIMATION_DURATIONS: { HeaderText: 120, ModalHeight: 150, ViewTransition: 150 } };
var Lr = { filterOutDuplicatesByRDNS(t) {
  const e = T2.state.enableEIP6963 ? j2.state.connectors : [], r = q.getRecentWallets(), n = e.map((a) => {
    var _a3;
    return (_a3 = a.info) == null ? void 0 : _a3.rdns;
  }).filter(Boolean), i = r.map((a) => a.rdns).filter(Boolean), o4 = n.concat(i);
  if (o4.includes("io.metamask.mobile") && U3.isMobile()) {
    const a = o4.indexOf("io.metamask.mobile");
    o4[a] = "io.metamask";
  }
  return t.filter((a) => !o4.includes(String(a == null ? void 0 : a.rdns)));
}, filterOutDuplicatesByIds(t) {
  const e = j2.state.connectors.filter((a) => a.type === "ANNOUNCED" || a.type === "INJECTED"), r = q.getRecentWallets(), n = e.map((a) => a.explorerId), i = r.map((a) => a.id), o4 = n.concat(i);
  return t.filter((a) => !o4.includes(a == null ? void 0 : a.id));
}, filterOutDuplicateWallets(t) {
  const e = this.filterOutDuplicatesByRDNS(t);
  return this.filterOutDuplicatesByIds(e);
}, markWalletsAsInstalled(t) {
  const { connectors: e } = j2.state, r = e.filter((o4) => o4.type === "ANNOUNCED").reduce((o4, s) => {
    var _a3;
    return ((_a3 = s.info) == null ? void 0 : _a3.rdns) && (o4[s.info.rdns] = true), o4;
  }, {});
  return t.map((o4) => ({ ...o4, installed: !!o4.rdns && !!r[o4.rdns ?? ""] })).sort((o4, s) => Number(s.installed) - Number(o4.installed));
}, getConnectOrderMethod(t, e) {
  var _a3;
  const r = (t == null ? void 0 : t.connectMethodsOrder) || ((_a3 = T2.state.features) == null ? void 0 : _a3.connectMethodsOrder), n = e || j2.state.connectors;
  if (r) return r;
  const { injected: i, announced: o4 } = Kt2.getConnectorsByType(n, W2.state.recommended, W2.state.featured), s = i.filter(Kt2.showConnector), a = o4.filter(Kt2.showConnector);
  return s.length || a.length ? ["wallet", "email", "social"] : gr.DEFAULT_CONNECT_METHOD_ORDER;
}, isExcluded(t) {
  const e = !!t.rdns && W2.state.excludedWallets.some((n) => n.rdns === t.rdns), r = !!t.name && W2.state.excludedWallets.some((n) => Ja.isLowerCaseMatch(n.name, t.name));
  return e || r;
} };
var Kt2 = { getConnectorsByType(t, e, r) {
  const { customWallets: n } = T2.state, i = q.getRecentWallets(), o4 = Lr.filterOutDuplicateWallets(e), s = Lr.filterOutDuplicateWallets(r), a = t.filter((u4) => u4.type === "MULTI_CHAIN"), c4 = t.filter((u4) => u4.type === "ANNOUNCED"), l4 = t.filter((u4) => u4.type === "INJECTED"), d4 = t.filter((u4) => u4.type === "EXTERNAL");
  return { custom: n, recent: i, external: d4, multiChain: a, announced: c4, injected: l4, recommended: o4, featured: s };
}, showConnector(t) {
  var _a3;
  const e = (_a3 = t.info) == null ? void 0 : _a3.rdns, r = !!e && W2.state.excludedWallets.some((i) => !!i.rdns && i.rdns === e), n = !!t.name && W2.state.excludedWallets.some((i) => Ja.isLowerCaseMatch(i.name, t.name));
  return !(t.type === "INJECTED" && (!U3.isMobile() && t.name === "Browser Wallet" || !e && !Y.checkInstalled() || r || n) || (t.type === "ANNOUNCED" || t.type === "EXTERNAL") && (r || n));
}, getIsConnectedWithWC() {
  return Array.from(f2.state.chains.values()).some((r) => j2.getConnectorId(r.namespace) === G2.CONNECTOR_ID.WALLET_CONNECT);
}, getConnectorTypeOrder({ recommended: t, featured: e, custom: r, recent: n, announced: i, injected: o4, multiChain: s, external: a, overriddenConnectors: c4 = ((_a3) => (_a3 = T2.state.features) == null ? void 0 : _a3.connectorTypeOrder)() ?? [] }) {
  const l4 = Kt2.getIsConnectedWithWC(), h4 = [{ type: "walletConnect", isEnabled: T2.state.enableWalletConnect && !l4 }, { type: "recent", isEnabled: n.length > 0 }, { type: "injected", isEnabled: [...o4, ...i, ...s].length > 0 }, { type: "featured", isEnabled: e.length > 0 }, { type: "custom", isEnabled: r && r.length > 0 }, { type: "external", isEnabled: a.length > 0 }, { type: "recommended", isEnabled: t.length > 0 }].filter((g4) => g4.isEnabled), p4 = new Set(h4.map((g4) => g4.type)), v4 = c4.filter((g4) => p4.has(g4)).map((g4) => ({ type: g4, isEnabled: true })), m4 = h4.filter(({ type: g4 }) => !v4.some(({ type: y4 }) => y4 === g4));
  return Array.from(new Set([...v4, ...m4].map(({ type: g4 }) => g4)));
} };
var Yo = globalThis;
var nc = Yo.ShadowRoot && (Yo.ShadyCSS === void 0 || Yo.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var ic = Symbol();
var Xd = /* @__PURE__ */ new WeakMap();
var Jd = class {
  constructor(e, r, n) {
    if (this._$cssResult$ = true, n !== ic) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (nc && e === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (e = Xd.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Xd.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
var wt2 = (t) => new Jd(typeof t == "string" ? t : t + "", void 0, ic);
var te2 = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((n, i, o4) => n + ((s) => {
    if (s._$cssResult$ === true) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[o4 + 1], t[0]);
  return new Jd(r, t, ic);
};
var dg = (t, e) => {
  if (nc) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const n = document.createElement("style"), i = Yo.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = r.cssText, t.appendChild(n);
  }
};
var Qd = nc ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const n of e.cssRules) r += n.cssText;
  return wt2(r);
})(t) : t;
var { is: ug, defineProperty: hg, getOwnPropertyDescriptor: pg, getOwnPropertyNames: fg, getOwnPropertySymbols: gg, getPrototypeOf: wg } = Object;
var Xo = globalThis;
var eu = Xo.trustedTypes;
var mg = eu ? eu.emptyScript : "";
var bg = Xo.reactiveElementPolyfillSupport;
var ii = (t, e) => t;
var Jo = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? mg : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} };
var oc = (t, e) => !ug(t, e);
var tu = { attribute: true, type: String, converter: Jo, reflect: false, useDefault: false, hasChanged: oc };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Xo.litPropertyMetadata ?? (Xo.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var yn = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = tu) {
    if (r.state && (r.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = true), this.elementProperties.set(e, r), !r.noAccessor) {
      const n = Symbol(), i = this.getPropertyDescriptor(e, n, r);
      i !== void 0 && hg(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, r, n) {
    const { get: i, set: o4 } = pg(this.prototype, e) ?? { get() {
      return this[r];
    }, set(s) {
      this[r] = s;
    } };
    return { get: i, set(s) {
      const a = i == null ? void 0 : i.call(this);
      o4 == null ? void 0 : o4.call(this, s), this.requestUpdate(e, a, n);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? tu;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ii("elementProperties"))) return;
    const e = wg(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ii("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(ii("properties"))) {
      const r = this.properties, n = [...fg(r), ...gg(r)];
      for (const i of n) this.createProperty(i, r[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [n, i] of r) this.elementProperties.set(n, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const i = this._$Eu(r, n);
      i !== void 0 && this._$Eh.set(i, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const i of n) r.unshift(Qd(i));
    } else e !== void 0 && r.push(Qd(e));
    return r;
  }
  static _$Eu(e, r) {
    const n = r.attribute;
    return n === false ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a3;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a3 = this.constructor.l) == null ? void 0 : _a3.forEach((e) => e(this));
  }
  addController(e) {
    var _a3;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((_a3 = e.hostConnected) == null ? void 0 : _a3.call(e));
  }
  removeController(e) {
    var _a3;
    (_a3 = this._$EO) == null ? void 0 : _a3.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return dg(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var _a3;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a3 = this._$EO) == null ? void 0 : _a3.forEach((e) => {
      var _a4;
      return (_a4 = e.hostConnected) == null ? void 0 : _a4.call(e);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var _a3;
    (_a3 = this._$EO) == null ? void 0 : _a3.forEach((e) => {
      var _a4;
      return (_a4 = e.hostDisconnected) == null ? void 0 : _a4.call(e);
    });
  }
  attributeChangedCallback(e, r, n) {
    this._$AK(e, n);
  }
  _$ET(e, r) {
    var _a3;
    const n = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, n);
    if (i !== void 0 && n.reflect === true) {
      const o4 = (((_a3 = n.converter) == null ? void 0 : _a3.toAttribute) !== void 0 ? n.converter : Jo).toAttribute(r, n.type);
      this._$Em = e, o4 == null ? this.removeAttribute(i) : this.setAttribute(i, o4), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var _a3, _b;
    const n = this.constructor, i = n._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const o4 = n.getPropertyOptions(i), s = typeof o4.converter == "function" ? { fromAttribute: o4.converter } : ((_a3 = o4.converter) == null ? void 0 : _a3.fromAttribute) !== void 0 ? o4.converter : Jo;
      this._$Em = i, this[i] = s.fromAttribute(r, o4.type) ?? ((_b = this._$Ej) == null ? void 0 : _b.get(i)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(e, r, n) {
    var _a3;
    if (e !== void 0) {
      const i = this.constructor, o4 = this[e];
      if (n ?? (n = i.getPropertyOptions(e)), !((n.hasChanged ?? oc)(o4, r) || n.useDefault && n.reflect && o4 === ((_a3 = this._$Ej) == null ? void 0 : _a3.get(e)) && !this.hasAttribute(i._$Eu(e, n)))) return;
      this.C(e, r, n);
    }
    this.isUpdatePending === false && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: n, reflect: i, wrapped: o4 }, s) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, s ?? r ?? this[e]), o4 !== true || s !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (r = void 0), this._$AL.set(e, r)), i === true && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a3;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, o4] of this._$Ep) this[i] = o4;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [i, o4] of n) {
        const { wrapped: s } = o4, a = this[i];
        s !== true || this._$AL.has(i) || a === void 0 || this.C(i, void 0, o4, a);
      }
    }
    let e = false;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (_a3 = this._$EO) == null ? void 0 : _a3.forEach((n) => {
        var _a4;
        return (_a4 = n.hostUpdate) == null ? void 0 : _a4.call(n);
      }), this.update(r)) : this._$EM();
    } catch (n) {
      throw e = false, this._$EM(), n;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var _a3;
    (_a3 = this._$EO) == null ? void 0 : _a3.forEach((r) => {
      var _a4;
      return (_a4 = r.hostUpdated) == null ? void 0 : _a4.call(r);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return true;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
yn.elementStyles = [], yn.shadowRootOptions = { mode: "open" }, yn[ii("elementProperties")] = /* @__PURE__ */ new Map(), yn[ii("finalized")] = /* @__PURE__ */ new Map(), bg == null ? void 0 : bg({ ReactiveElement: yn }), (Xo.reactiveElementVersions ?? (Xo.reactiveElementVersions = [])).push("2.1.0");
var sc = globalThis;
var Qo = sc.trustedTypes;
var ru = Qo ? Qo.createPolicy("lit-html", { createHTML: (t) => t }) : void 0;
var nu = "$lit$";
var wr = `lit$${Math.random().toFixed(9).slice(2)}$`;
var iu = "?" + wr;
var vg = `<${iu}>`;
var Ur = document;
var oi = () => Ur.createComment("");
var si = (t) => t === null || typeof t != "object" && typeof t != "function";
var ac = Array.isArray;
var Cg = (t) => ac(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function";
var cc = `[ 	
\f\r]`;
var ai = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var ou = /-->/g;
var su = />/g;
var Mr = RegExp(`>|${cc}(?:([^\\s"'>=/]+)(${cc}*=${cc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var au = /'/g;
var cu = /"/g;
var lu = /^(?:script|style|textarea|title)$/i;
var du = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r });
var w3 = du(1);
var M = du(2);
var Yt2 = Symbol.for("lit-noChange");
var Ne2 = Symbol.for("lit-nothing");
var uu = /* @__PURE__ */ new WeakMap();
var Dr = Ur.createTreeWalker(Ur, 129);
function hu(t, e) {
  if (!ac(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ru !== void 0 ? ru.createHTML(e) : e;
}
var yg = (t, e) => {
  const r = t.length - 1, n = [];
  let i, o4 = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = ai;
  for (let a = 0; a < r; a++) {
    const c4 = t[a];
    let l4, d4, u4 = -1, h4 = 0;
    for (; h4 < c4.length && (s.lastIndex = h4, d4 = s.exec(c4), d4 !== null); ) h4 = s.lastIndex, s === ai ? d4[1] === "!--" ? s = ou : d4[1] !== void 0 ? s = su : d4[2] !== void 0 ? (lu.test(d4[2]) && (i = RegExp("</" + d4[2], "g")), s = Mr) : d4[3] !== void 0 && (s = Mr) : s === Mr ? d4[0] === ">" ? (s = i ?? ai, u4 = -1) : d4[1] === void 0 ? u4 = -2 : (u4 = s.lastIndex - d4[2].length, l4 = d4[1], s = d4[3] === void 0 ? Mr : d4[3] === '"' ? cu : au) : s === cu || s === au ? s = Mr : s === ou || s === su ? s = ai : (s = Mr, i = void 0);
    const p4 = s === Mr && t[a + 1].startsWith("/>") ? " " : "";
    o4 += s === ai ? c4 + vg : u4 >= 0 ? (n.push(l4), c4.slice(0, u4) + nu + c4.slice(u4) + wr + p4) : c4 + wr + (u4 === -2 ? a : p4);
  }
  return [hu(t, o4 + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
var fo = class _fo {
  constructor({ strings: e, _$litType$: r }, n) {
    let i;
    this.parts = [];
    let o4 = 0, s = 0;
    const a = e.length - 1, c4 = this.parts, [l4, d4] = yg(e, r);
    if (this.el = _fo.createElement(l4, n), Dr.currentNode = this.el.content, r === 2 || r === 3) {
      const u4 = this.el.content.firstChild;
      u4.replaceWith(...u4.childNodes);
    }
    for (; (i = Dr.nextNode()) !== null && c4.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const u4 of i.getAttributeNames()) if (u4.endsWith(nu)) {
          const h4 = d4[s++], p4 = i.getAttribute(u4).split(wr), v4 = /([.?@])?(.*)/.exec(h4);
          c4.push({ type: 1, index: o4, name: v4[2], strings: p4, ctor: v4[1] === "." ? Eg : v4[1] === "?" ? Ag : v4[1] === "@" ? Sg : es2 }), i.removeAttribute(u4);
        } else u4.startsWith(wr) && (c4.push({ type: 6, index: o4 }), i.removeAttribute(u4));
        if (lu.test(i.tagName)) {
          const u4 = i.textContent.split(wr), h4 = u4.length - 1;
          if (h4 > 0) {
            i.textContent = Qo ? Qo.emptyScript : "";
            for (let p4 = 0; p4 < h4; p4++) i.append(u4[p4], oi()), Dr.nextNode(), c4.push({ type: 2, index: ++o4 });
            i.append(u4[h4], oi());
          }
        }
      } else if (i.nodeType === 8) if (i.data === iu) c4.push({ type: 2, index: o4 });
      else {
        let u4 = -1;
        for (; (u4 = i.data.indexOf(wr, u4 + 1)) !== -1; ) c4.push({ type: 7, index: o4 }), u4 += wr.length - 1;
      }
      o4++;
    }
  }
  static createElement(e, r) {
    const n = Ur.createElement("template");
    return n.innerHTML = e, n;
  }
};
function xn(t, e, r = t, n) {
  var _a3, _b;
  if (e === Yt2) return e;
  let i = n !== void 0 ? (_a3 = r._$Co) == null ? void 0 : _a3[n] : r._$Cl;
  const o4 = si(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o4 && ((_b = i == null ? void 0 : i._$AO) == null ? void 0 : _b.call(i, false), o4 === void 0 ? i = void 0 : (i = new o4(t), i._$AT(t, r, n)), n !== void 0 ? (r._$Co ?? (r._$Co = []))[n] = i : r._$Cl = i), i !== void 0 && (e = xn(t, i._$AS(t, e.values), i, n)), e;
}
var xg = class {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: r }, parts: n } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? Ur).importNode(r, true);
    Dr.currentNode = i;
    let o4 = Dr.nextNode(), s = 0, a = 0, c4 = n[0];
    for (; c4 !== void 0; ) {
      if (s === c4.index) {
        let l4;
        c4.type === 2 ? l4 = new go(o4, o4.nextSibling, this, e) : c4.type === 1 ? l4 = new c4.ctor(o4, c4.name, c4.strings, this, e) : c4.type === 6 && (l4 = new _g(o4, this, e)), this._$AV.push(l4), c4 = n[++a];
      }
      s !== (c4 == null ? void 0 : c4.index) && (o4 = Dr.nextNode(), s++);
    }
    return Dr.currentNode = Ur, i;
  }
  p(e) {
    let r = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, r), r += n.strings.length - 2) : n._$AI(e[r])), r++;
  }
};
var go = class _go {
  get _$AU() {
    var _a3;
    return ((_a3 = this._$AM) == null ? void 0 : _a3._$AU) ?? this._$Cv;
  }
  constructor(e, r, n, i) {
    this.type = 2, this._$AH = Ne2, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = n, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? true;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = xn(this, e, r), si(e) ? e === Ne2 || e == null || e === "" ? (this._$AH !== Ne2 && this._$AR(), this._$AH = Ne2) : e !== this._$AH && e !== Yt2 && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Cg(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== Ne2 && si(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Ur.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var _a3;
    const { values: r, _$litType$: n } = e, i = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = fo.createElement(hu(n.h, n.h[0]), this.options)), n);
    if (((_a3 = this._$AH) == null ? void 0 : _a3._$AD) === i) this._$AH.p(r);
    else {
      const o4 = new xg(i, this), s = o4.u(this.options);
      o4.p(r), this.T(s), this._$AH = o4;
    }
  }
  _$AC(e) {
    let r = uu.get(e.strings);
    return r === void 0 && uu.set(e.strings, r = new fo(e)), r;
  }
  k(e) {
    ac(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, i = 0;
    for (const o4 of e) i === r.length ? r.push(n = new _go(this.O(oi()), this.O(oi()), this, this.options)) : n = r[i], n._$AI(o4), i++;
    i < r.length && (this._$AR(n && n._$AB.nextSibling, i), r.length = i);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var _a3;
    for ((_a3 = this._$AP) == null ? void 0 : _a3.call(this, false, true, r); e && e !== this._$AB; ) {
      const n = e.nextSibling;
      e.remove(), e = n;
    }
  }
  setConnected(e) {
    var _a3;
    this._$AM === void 0 && (this._$Cv = e, (_a3 = this._$AP) == null ? void 0 : _a3.call(this, e));
  }
};
var es2 = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, n, i, o4) {
    this.type = 1, this._$AH = Ne2, this._$AN = void 0, this.element = e, this.name = r, this._$AM = i, this.options = o4, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Ne2;
  }
  _$AI(e, r = this, n, i) {
    const o4 = this.strings;
    let s = false;
    if (o4 === void 0) e = xn(this, e, r, 0), s = !si(e) || e !== this._$AH && e !== Yt2, s && (this._$AH = e);
    else {
      const a = e;
      let c4, l4;
      for (e = o4[0], c4 = 0; c4 < o4.length - 1; c4++) l4 = xn(this, a[n + c4], r, c4), l4 === Yt2 && (l4 = this._$AH[c4]), s || (s = !si(l4) || l4 !== this._$AH[c4]), l4 === Ne2 ? e = Ne2 : e !== Ne2 && (e += (l4 ?? "") + o4[c4 + 1]), this._$AH[c4] = l4;
    }
    s && !i && this.j(e);
  }
  j(e) {
    e === Ne2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
};
var Eg = class extends es2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === Ne2 ? void 0 : e;
  }
};
var Ag = class extends es2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== Ne2);
  }
};
var Sg = class extends es2 {
  constructor(e, r, n, i, o4) {
    super(e, r, n, i, o4), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = xn(this, e, r, 0) ?? Ne2) === Yt2) return;
    const n = this._$AH, i = e === Ne2 && n !== Ne2 || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, o4 = e !== Ne2 && (n === Ne2 || i);
    i && this.element.removeEventListener(this.name, this, n), o4 && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var _a3;
    typeof this._$AH == "function" ? this._$AH.call(((_a3 = this.options) == null ? void 0 : _a3.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
};
var _g = class {
  constructor(e, r, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    xn(this, e);
  }
};
var Ig = sc.litHtmlPolyfillSupport;
Ig == null ? void 0 : Ig(fo, go), (sc.litHtmlVersions ?? (sc.litHtmlVersions = [])).push("3.3.0");
var Ng = (t, e, r) => {
  const n = (r == null ? void 0 : r.renderBefore) ?? e;
  let i = n._$litPart$;
  if (i === void 0) {
    const o4 = (r == null ? void 0 : r.renderBefore) ?? null;
    n._$litPart$ = i = new go(e.insertBefore(oi(), o4), o4, void 0, r ?? {});
  }
  return i._$AI(t), i;
};
var lc = globalThis;
var V2 = class extends yn {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a3;
    const e = super.createRenderRoot();
    return (_a3 = this.renderOptions).renderBefore ?? (_a3.renderBefore = e.firstChild), e;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ng(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a3;
    super.connectedCallback(), (_a3 = this._$Do) == null ? void 0 : _a3.setConnected(true);
  }
  disconnectedCallback() {
    var _a3;
    super.disconnectedCallback(), (_a3 = this._$Do) == null ? void 0 : _a3.setConnected(false);
  }
  render() {
    return Yt2;
  }
};
var _a2;
V2._$litElement$ = true, V2.finalized = true, (_a2 = lc.litElementHydrateSupport) == null ? void 0 : _a2.call(lc, { LitElement: V2 });
var kg = lc.litElementPolyfillSupport;
kg == null ? void 0 : kg({ LitElement: V2 }), (lc.litElementVersions ?? (lc.litElementVersions = [])).push("4.2.0");
var ci;
var mr;
var br;
function Tg(t, e) {
  ci = document.createElement("style"), mr = document.createElement("style"), br = document.createElement("style"), ci.textContent = En(t).core.cssText, mr.textContent = En(t).dark.cssText, br.textContent = En(t).light.cssText, document.head.appendChild(ci), document.head.appendChild(mr), document.head.appendChild(br), pu(e);
}
function pu(t) {
  mr && br && (t === "light" ? (mr.removeAttribute("media"), br.media = "enabled") : (br.removeAttribute("media"), mr.media = "enabled"));
}
function Og(t) {
  ci && mr && br && (ci.textContent = En(t).core.cssText, mr.textContent = En(t).dark.cssText, br.textContent = En(t).light.cssText);
}
function En(t) {
  return { core: te2`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${wt2((t == null ? void 0 : t["--w3m-color-mix-strength"]) ? `${t["--w3m-color-mix-strength"]}%` : "0%")};
        --w3m-font-family: ${wt2((t == null ? void 0 : t["--w3m-font-family"]) || "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${wt2((t == null ? void 0 : t["--w3m-font-size-master"]) || "10px")};
        --w3m-border-radius-master: ${wt2((t == null ? void 0 : t["--w3m-border-radius-master"]) || "4px")};
        --w3m-z-index: ${wt2((t == null ? void 0 : t["--w3m-z-index"]) || 999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `, light: te2`
      :root {
        --w3m-color-mix: ${wt2((t == null ? void 0 : t["--w3m-color-mix"]) || "#fff")};
        --w3m-accent: ${wt2(ir(t, "dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${wt2(ir(t, "dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `, dark: te2`
      :root {
        --w3m-color-mix: ${wt2((t == null ? void 0 : t["--w3m-color-mix"]) || "#000")};
        --w3m-accent: ${wt2(ir(t, "light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${wt2(ir(t, "light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    ` };
}
var we2 = te2`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`;
var De2 = te2`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;
var li = te2`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;
var Me2 = { getSpacingStyles(t, e) {
  if (Array.isArray(t)) return t[e] ? `var(--wui-spacing-${t[e]})` : void 0;
  if (typeof t == "string") return `var(--wui-spacing-${t})`;
}, getFormattedDate(t) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(t);
}, getHostName(t) {
  try {
    return new URL(t).hostname;
  } catch {
    return "";
  }
}, getTruncateString({ string: t, charsStart: e, charsEnd: r, truncate: n }) {
  return t.length <= e + r ? t : n === "end" ? `${t.substring(0, e)}...` : n === "start" ? `...${t.substring(t.length - r)}` : `${t.substring(0, Math.floor(e))}...${t.substring(t.length - Math.floor(r))}`;
}, generateAvatarColors(t) {
  const r = t.toLowerCase().replace(/^0x/iu, "").replace(/[^a-f0-9]/gu, "").substring(0, 6).padEnd(6, "0"), n = this.hexToRgb(r), i = getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"), s = 100 - 3 * Number(i == null ? void 0 : i.replace("px", "")), a = `${s}% ${s}% at 65% 40%`, c4 = [];
  for (let l4 = 0; l4 < 5; l4 += 1) {
    const d4 = this.tintColor(n, 0.15 * l4);
    c4.push(`rgb(${d4[0]}, ${d4[1]}, ${d4[2]})`);
  }
  return `
    --local-color-1: ${c4[0]};
    --local-color-2: ${c4[1]};
    --local-color-3: ${c4[2]};
    --local-color-4: ${c4[3]};
    --local-color-5: ${c4[4]};
    --local-radial-circle: ${a}
   `;
}, hexToRgb(t) {
  const e = parseInt(t, 16), r = e >> 16 & 255, n = e >> 8 & 255, i = e & 255;
  return [r, n, i];
}, tintColor(t, e) {
  const [r, n, i] = t, o4 = Math.round(r + (255 - r) * e), s = Math.round(n + (255 - n) * e), a = Math.round(i + (255 - i) * e);
  return [o4, s, a];
}, isNumber(t) {
  return { number: /^[0-9]+$/u }.number.test(t);
}, getColorTheme(t) {
  var _a3;
  return t || (typeof window < "u" && window.matchMedia ? ((_a3 = window.matchMedia("(prefers-color-scheme: dark)")) == null ? void 0 : _a3.matches) ? "dark" : "light" : "dark");
}, splitBalance(t) {
  const e = t.split(".");
  return e.length === 2 ? [e[0], e[1]] : ["0", "00"];
}, roundNumber(t, e, r) {
  return t.toString().length >= e ? Number(t).toFixed(r) : t;
}, formatNumberToLocalString(t, e = 2) {
  return t === void 0 ? "0.00" : typeof t == "number" ? t.toLocaleString("en-US", { maximumFractionDigits: e, minimumFractionDigits: e }) : parseFloat(t).toLocaleString("en-US", { maximumFractionDigits: e, minimumFractionDigits: e });
} };
function $g(t, e) {
  const { kind: r, elements: n } = e;
  return { kind: r, elements: n, finisher(i) {
    customElements.get(t) || customElements.define(t, i);
  } };
}
function Pg(t, e) {
  return customElements.get(t) || customElements.define(t, e), e;
}
function F2(t) {
  return function(r) {
    return typeof r == "function" ? Pg(t, r) : $g(t, r);
  };
}
function Bg(t) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  const e = new Uint8Array(256);
  for (let l4 = 0; l4 < e.length; l4++) e[l4] = 255;
  for (let l4 = 0; l4 < t.length; l4++) {
    const d4 = t.charAt(l4), u4 = d4.charCodeAt(0);
    if (e[u4] !== 255) throw new TypeError(d4 + " is ambiguous");
    e[u4] = l4;
  }
  const r = t.length, n = t.charAt(0), i = Math.log(r) / Math.log(256), o4 = Math.log(256) / Math.log(r);
  function s(l4) {
    if (l4 instanceof Uint8Array || (ArrayBuffer.isView(l4) ? l4 = new Uint8Array(l4.buffer, l4.byteOffset, l4.byteLength) : Array.isArray(l4) && (l4 = Uint8Array.from(l4))), !(l4 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (l4.length === 0) return "";
    let d4 = 0, u4 = 0, h4 = 0;
    const p4 = l4.length;
    for (; h4 !== p4 && l4[h4] === 0; ) h4++, d4++;
    const v4 = (p4 - h4) * o4 + 1 >>> 0, m4 = new Uint8Array(v4);
    for (; h4 !== p4; ) {
      let y4 = l4[h4], x4 = 0;
      for (let E4 = v4 - 1; (y4 !== 0 || x4 < u4) && E4 !== -1; E4--, x4++) y4 += 256 * m4[E4] >>> 0, m4[E4] = y4 % r >>> 0, y4 = y4 / r >>> 0;
      if (y4 !== 0) throw new Error("Non-zero carry");
      u4 = x4, h4++;
    }
    let g4 = v4 - u4;
    for (; g4 !== v4 && m4[g4] === 0; ) g4++;
    let b4 = n.repeat(d4);
    for (; g4 < v4; ++g4) b4 += t.charAt(m4[g4]);
    return b4;
  }
  function a(l4) {
    if (typeof l4 != "string") throw new TypeError("Expected String");
    if (l4.length === 0) return new Uint8Array();
    let d4 = 0, u4 = 0, h4 = 0;
    for (; l4[d4] === n; ) u4++, d4++;
    const p4 = (l4.length - d4) * i + 1 >>> 0, v4 = new Uint8Array(p4);
    for (; d4 < l4.length; ) {
      const y4 = l4.charCodeAt(d4);
      if (y4 > 255) return;
      let x4 = e[y4];
      if (x4 === 255) return;
      let E4 = 0;
      for (let I4 = p4 - 1; (x4 !== 0 || E4 < h4) && I4 !== -1; I4--, E4++) x4 += r * v4[I4] >>> 0, v4[I4] = x4 % 256 >>> 0, x4 = x4 / 256 >>> 0;
      if (x4 !== 0) throw new Error("Non-zero carry");
      h4 = E4, d4++;
    }
    let m4 = p4 - h4;
    for (; m4 !== p4 && v4[m4] === 0; ) m4++;
    const g4 = new Uint8Array(u4 + (p4 - m4));
    let b4 = u4;
    for (; m4 !== p4; ) g4[b4++] = v4[m4++];
    return g4;
  }
  function c4(l4) {
    const d4 = a(l4);
    if (d4) return d4;
    throw new Error("Non-base" + r + " character");
  }
  return { encode: s, decodeUnsafe: a, decode: c4 };
}
var Rg = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Lg = Bg(Rg);
var ts2 = { ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902, ERROR_CODE_DEFAULT: 5e3, ERROR_INVALID_CHAIN_ID: 32603 };
var fu = { gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" }, l1Block: { address: "0x4200000000000000000000000000000000000015" }, l2CrossDomainMessenger: { address: "0x4200000000000000000000000000000000000007" }, l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" }, l2StandardBridge: { address: "0x4200000000000000000000000000000000000010" }, l2ToL1MessagePasser: { address: "0x4200000000000000000000000000000000000016" } };
var Ug = { block: Vl({ format(t) {
  var _a3;
  return { transactions: (_a3 = t.transactions) == null ? void 0 : _a3.map((r) => {
    if (typeof r == "string") return r;
    const n = $o(r);
    return n.typeHex === "0x7e" && (n.isSystemTx = r.isSystemTx, n.mint = r.mint ? Wt2(r.mint) : void 0, n.sourceHash = r.sourceHash, n.type = "deposit"), n;
  }), stateRoot: t.stateRoot };
} }), transaction: Hl({ format(t) {
  const e = {};
  return t.type === "0x7e" && (e.isSystemTx = t.isSystemTx, e.mint = t.mint ? Wt2(t.mint) : void 0, e.sourceHash = t.sourceHash, e.type = "deposit"), e;
} }), transactionReceipt: dp({ format(t) {
  return { l1GasPrice: t.l1GasPrice ? Wt2(t.l1GasPrice) : null, l1GasUsed: t.l1GasUsed ? Wt2(t.l1GasUsed) : null, l1Fee: t.l1Fee ? Wt2(t.l1Fee) : null, l1FeeScalar: t.l1FeeScalar ? Number(t.l1FeeScalar) : null };
} }) };
function gu(t, e) {
  return zg(t) ? Dg(t) : tp(t, e);
}
var Mg = { transaction: gu };
function Dg(t) {
  Wg(t);
  const { sourceHash: e, data: r, from: n, gas: i, isSystemTx: o4, mint: s, to: a, value: c4 } = t, l4 = [e, n, a ?? "0x", s ? ie2(s) : "0x", c4 ? ie2(c4) : "0x", i ? ie2(i) : "0x", o4 ? "0x1" : "0x", r ?? "0x"];
  return dn(["0x7e", hr(l4)]);
}
function zg(t) {
  return t.type === "deposit" || typeof t.sourceHash < "u";
}
function Wg(t) {
  const { from: e, to: r } = t;
  if (e && !Ht(e)) throw new ur({ address: e });
  if (r && !Ht(r)) throw new ur({ address: r });
}
var O3 = { contracts: fu, formatters: Ug, serializers: Mg };
var rs = 1;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: rs + "", portal: rs + "", l1StandardBridge: rs + "" } });
var ns = 11155111;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: ns + "", portal: ns + "", l1StandardBridge: ns + "" } });
var di = 1;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: di + "", l2OutputOracle: di + "", portal: di + "", l1StandardBridge: di + "" } });
var is = 5;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: is + "", portal: is + "", l1StandardBridge: is + "" } });
var ui = 11155111;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: ui + "", l2OutputOracle: ui + "", portal: ui + "", l1StandardBridge: ui + "" } }, J2({ id: 53456, name: "BirdLayer", nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }, rpcUrls: { default: { http: ["https://rpc.birdlayer.xyz", "https://rpc1.birdlayer.xyz"], webSocket: ["wss://rpc.birdlayer.xyz/ws"] } }, blockExplorers: { default: { name: "BirdLayer Explorer", url: "https://scan.birdlayer.xyz" } } }));
({ ...O3, contracts: { ...O3.contracts } });
var dc = 1;
J2({ ...O3, id: 60808, name: "BOB", nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" }, rpcUrls: { default: { http: ["https://rpc.gobob.xyz"], webSocket: ["wss://rpc.gobob.xyz"] } }, blockExplorers: { default: { name: "BOB Explorer", url: "https://explorer.gobob.xyz" } }, contracts: { ...O3.contracts, multicall3: { address: "0xcA11bde05977b3631167028862bE2a173976CA11", blockCreated: 23131 }, l2OutputOracle: { [dc]: { address: "0xdDa53E23f8a32640b04D7256e651C1db98dB11C1", blockCreated: 4462615 } }, portal: { [dc]: { address: "0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E", blockCreated: 4462615 } } }, sourceId: dc });
var uc = 11155111;
J2({ ...O3, id: 808813, name: "BOB Sepolia", nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" }, rpcUrls: { default: { http: ["https://bob-sepolia.rpc.gobob.xyz"], webSocket: ["wss://bob-sepolia.rpc.gobob.xyz"] } }, blockExplorers: { default: { name: "BOB Sepolia Explorer", url: "https://bob-sepolia.explorer.gobob.xyz" } }, contracts: { ...O3.contracts, multicall3: { address: "0xcA11bde05977b3631167028862bE2a173976CA11", blockCreated: 35677 }, l2OutputOracle: { [uc]: { address: "0x14D0069452b4AE2b250B395b8adAb771E4267d2f", blockCreated: 4462615 } }, portal: { [uc]: { address: "0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4", blockCreated: 4462615 } } }, testnet: true, sourceId: uc });
var Fg = { estimateFeesPerGas: async (t) => {
  var _a3;
  if (!((_a3 = t.request) == null ? void 0 : _a3.feeCurrency)) return null;
  const [e, r] = await Promise.all([Hg(t.client, t.request.feeCurrency), Vg(t.client, t.request.feeCurrency)]);
  return { maxFeePerGas: t.multiply(e - r) + r, maxPriorityFeePerGas: r };
} };
async function Hg(t, e) {
  const r = await t.request({ method: "eth_gasPrice", params: [e] });
  return BigInt(r);
}
async function Vg(t, e) {
  const r = await t.request({ method: "eth_maxPriorityFeePerGas", params: [e] });
  return BigInt(r);
}
function wu(t) {
  return t === 0 || t === 0n || t === void 0 || t === null || t === "0" || t === "" || typeof t == "string" && (sn(t).toLowerCase() === "0x" || sn(t).toLowerCase() === "0x00");
}
function hi(t) {
  return !wu(t);
}
function Zg(t) {
  return typeof t.maxFeePerGas < "u" && typeof t.maxPriorityFeePerGas < "u";
}
function mu(t) {
  return t.type === "cip64" ? true : Zg(t) && hi(t.feeCurrency);
}
var Gg = { block: Vl({ format(t) {
  var _a3;
  return { transactions: (_a3 = t.transactions) == null ? void 0 : _a3.map((r) => typeof r == "string" ? r : { ...$o(r), ...r.gatewayFee ? { gatewayFee: Wt2(r.gatewayFee), gatewayFeeRecipient: r.gatewayFeeRecipient } : {}, feeCurrency: r.feeCurrency }), ...t.randomness ? { randomness: t.randomness } : {} };
} }), transaction: Hl({ format(t) {
  if (t.type === "0x7e") return { isSystemTx: t.isSystemTx, mint: t.mint ? Wt2(t.mint) : void 0, sourceHash: t.sourceHash, type: "deposit" };
  const e = { feeCurrency: t.feeCurrency };
  return t.type === "0x7b" ? e.type = "cip64" : (t.type === "0x7c" && (e.type = "cip42"), e.gatewayFee = t.gatewayFee ? Wt2(t.gatewayFee) : null, e.gatewayFeeRecipient = t.gatewayFeeRecipient), e;
} }), transactionRequest: bh({ format(t) {
  const e = {};
  return t.feeCurrency && (e.feeCurrency = t.feeCurrency), mu(t) && (e.type = "0x7b"), e;
} }) };
function qg(t, e) {
  return mu(t) ? Yg(t, e) : gu(t, e);
}
var Kg = { transaction: qg };
function Yg(t, e) {
  Jg(t);
  const { chainId: r, gas: n, nonce: i, to: o4, value: s, maxFeePerGas: a, maxPriorityFeePerGas: c4, accessList: l4, feeCurrency: d4, data: u4 } = t, h4 = [ie2(r), i ? ie2(i) : "0x", c4 ? ie2(c4) : "0x", a ? ie2(a) : "0x", n ? ie2(n) : "0x", o4 ?? "0x", s ? ie2(s) : "0x", u4 ?? "0x", Jn(l4), d4, ...un(t, e)];
  return dn(["0x7b", hr(h4)]);
}
var Xg = Oo;
function Jg(t) {
  const { chainId: e, maxPriorityFeePerGas: r, gasPrice: n, maxFeePerGas: i, to: o4, feeCurrency: s } = t;
  if (e <= 0) throw new Xn({ chainId: e });
  if (o4 && !Ht(o4)) throw new ur({ address: o4 });
  if (n) throw new de2("`gasPrice` is not a valid CIP-64 Transaction attribute.");
  if (hi(i) && i > Xg) throw new Yn({ maxFeePerGas: i });
  if (hi(r) && hi(i) && r > i) throw new Sa({ maxFeePerGas: i, maxPriorityFeePerGas: r });
  if (hi(s) && !Ht(s)) throw new de2("`feeCurrency` MUST be a token address for CIP-64 transactions.");
  if (wu(s)) throw new de2("`feeCurrency` must be provided for CIP-64 transactions.");
}
var bu = { contracts: fu, formatters: Gg, serializers: Kg, fees: Fg };
var os = 17e3;
({ ...bu, contracts: { ...bu.contracts, portal: os + "", disputeGameFactory: os + "", l2OutputOracle: os + "", l1StandardBridge: os + "" } }, J2({ id: 44, name: "Crab Network", nativeCurrency: { decimals: 18, name: "Crab Network Native Token", symbol: "CRAB" }, rpcUrls: { default: { http: ["https://crab-rpc.darwinia.network"], webSocket: ["wss://crab-rpc.darwinia.network"] } }, blockExplorers: { default: { name: "Blockscout", url: "https://crab-scan.darwinia.network" } }, contracts: { multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11", blockCreated: 3032593 } } })), J2({ id: 66665, name: "Creator", nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }, rpcUrls: { default: { http: ["https://rpc.creatorchain.io"] } }, blockExplorers: { default: { name: "Explorer", url: "https://explorer.creatorchain.io" } }, contracts: { multicall3: { address: "0xcA11bde05977b3631167028862bE2a173976CA11" } }, testnet: true }), { ...O3, contracts: { ...O3.contracts } }, { ...O3, contracts: { ...O3.contracts } }, J2({ id: 53457, name: "DODOchain Testnet", nativeCurrency: { decimals: 18, name: "DODO", symbol: "DODO" }, rpcUrls: { default: { http: ["https://dodochain-testnet.alt.technology"], webSocket: ["wss://dodochain-testnet.alt.technology/ws"] } }, blockExplorers: { default: { name: "DODOchain Testnet (Sepolia) Explorer", url: "https://testnet-scan.dodochain.com" } }, testnet: true });
var An = 1;
({ ...O3.contracts, addressManager: An + "", l1CrossDomainMessenger: An + "", l2OutputOracle: An + "", portal: An + "", l1StandardBridge: An + "" });
var Sn = 11155111;
({ ...O3.contracts, addressManager: Sn + "", l1CrossDomainMessenger: Sn + "", l2OutputOracle: Sn + "", portal: Sn + "", l1StandardBridge: Sn + "" });
var ss = 1;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: ss + "", portal: ss + "", l1StandardBridge: ss + "" } });
var as = 17e3;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: as + "", portal: as + "", l1StandardBridge: as + "" } });
({ ...O3, contracts: { ...O3.contracts } });
var e2 = 11155111;
J2({ ...O3, id: 3397901, network: "funkiSepolia", name: "Funki Sepolia Sandbox", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: { default: { http: ["https://funki-testnet.alt.technology"] } }, blockExplorers: { default: { name: "Funki Sepolia Sandbox Explorer", url: "https://sepolia-sandbox.funkichain.com/" } }, testnet: true, contracts: { ...O3.contracts, multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11", blockCreated: 1620204 } }, sourceId: e2 });
var cs = 17e3;
J2({ ...O3, name: "Garnet Testnet", testnet: true, id: 17069, sourceId: cs, nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: { default: { http: ["https://rpc.garnetchain.com"], webSocket: ["wss://rpc.garnetchain.com"] } }, blockExplorers: { default: { name: "Blockscout", url: "https://explorer.garnetchain.com" } }, contracts: { ...O3.contracts, multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11" }, portal: { [cs]: { address: "0x57ee40586fbE286AfC75E67cb69511A6D9aF5909", blockCreated: 1274684 } }, l2OutputOracle: { [cs]: { address: "0xCb8E7AC561b8EF04F2a15865e9fbc0766FEF569B", blockCreated: 1274684 } }, l1StandardBridge: { [cs]: { address: "0x09bcDd311FE398F80a78BE37E489f5D440DB95DE", blockCreated: 1274684 } } } });
var ls = 1;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: ls + "", portal: ls + "", l1StandardBridge: ls + "" } });
var ds = 11155111;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: ds + "", portal: ds + "", l1StandardBridge: ds + "" } }, J2({ id: 701, name: "Koi Network", nativeCurrency: { decimals: 18, name: "Koi Network Native Token", symbol: "KRING" }, rpcUrls: { default: { http: ["https://koi-rpc.darwinia.network"], webSocket: ["wss://koi-rpc.darwinia.network"] } }, blockExplorers: { default: { name: "Blockscout", url: "https://koi-scan.darwinia.network" } }, contracts: { multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11", blockCreated: 180001 } }, testnet: true }));
var us = 1;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: us + "", portal: us + "", l1StandardBridge: us + "" } });
var hs = 11155111;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: hs + "", portal: hs + "", l1StandardBridge: hs + "" } });
var ps = 1;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: ps + "", portal: ps + "", l1StandardBridge: ps + "" } });
var fs = 1;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: fs + "", portal: fs + "", l1StandardBridge: fs + "" } });
var gs = 11155111;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: gs + "", portal: gs + "", l1StandardBridge: gs + "" } });
var ws = 56;
({ ...O3.contracts, l2OutputOracle: ws + "", portal: ws + "", l1StandardBridge: ws + "" });
var ms = 97;
({ ...O3.contracts, l2OutputOracle: ms + "", portal: ms + "", l1StandardBridge: ms + "" });
var pi = 1;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: pi + "", l2OutputOracle: pi + "", portal: pi + "", l1StandardBridge: pi + "" } });
var bs = 5;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: bs + "", portal: bs + "", l1StandardBridge: bs + "" } });
var fi = 11155111;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: fi + "", l2OutputOracle: fi + "", portal: fi + "", l1StandardBridge: fi + "" } });
var vu = 11155111;
J2({ ...O3, name: "Pyrope Testnet", testnet: true, id: 695569, sourceId: vu, nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: { default: { http: ["https://rpc.pyropechain.com"], webSocket: ["wss://rpc.pyropechain.com"] } }, blockExplorers: { default: { name: "Blockscout", url: "https://pyrope.blockscout.com" } }, contracts: { ...O3.contracts, l1StandardBridge: { [vu]: { address: "0xC24932c31D9621aE9e792576152B7ef010cFC2F8" } } } });
var vs = 1;
J2({ ...O3, name: "Redstone", id: 690, sourceId: vs, nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }, rpcUrls: { default: { http: ["https://rpc.redstonechain.com"], webSocket: ["wss://rpc.redstonechain.com"] } }, blockExplorers: { default: { name: "Blockscout", url: "https://explorer.redstone.xyz" } }, contracts: { ...O3.contracts, multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11" }, portal: { [vs]: { address: "0xC7bCb0e8839a28A1cFadd1CF716de9016CdA51ae", blockCreated: 19578329 } }, l2OutputOracle: { [vs]: { address: "0xa426A052f657AEEefc298b3B5c35a470e4739d69", blockCreated: 19578337 } }, l1StandardBridge: { [vs]: { address: "0xc473ca7E02af24c129c2eEf51F2aDf0411c1Df69", blockCreated: 19578331 } } } });
var Cs = 1;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: Cs + "", portal: Cs + "", l1StandardBridge: Cs + "" } });
var ys = 11155111;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: ys + "", portal: ys + "", l1StandardBridge: ys + "" } });
var xs = 1;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: xs + "", portal: xs + "", l1StandardBridge: xs + "" } });
({ ...O3, contracts: { ...O3.contracts } });
var gi = 1;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: gi + "", l2OutputOracle: gi + "", portal: gi + "", l1StandardBridge: gi + "" } });
var wi = 11155111;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: wi + "", l2OutputOracle: wi + "", portal: wi + "", l1StandardBridge: wi + "" } });
var mi = 1;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: mi + "", l2OutputOracle: mi + "", portal: mi + "", l1StandardBridge: mi + "" } });
var bi = 11155111;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: bi + "", l2OutputOracle: bi + "", portal: bi + "", l1StandardBridge: bi + "" } });
var vi = 1;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: vi + "", l2OutputOracle: vi + "", portal: vi + "", l1StandardBridge: vi + "" } });
var hc = 11155111;
({ ...O3, contracts: { ...O3.contracts, portal: hc + "", l1StandardBridge: hc + "" } }, { ...O3, contracts: { ...O3.contracts } }), { ...O3, contracts: { ...O3.contracts } };
var Es = 1;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: Es + "", portal: Es + "", l1StandardBridge: Es + "" } });
var As = 11155111;
({ ...O3, contracts: { ...O3.contracts, portal: As + "", l1StandardBridge: As + "", disputeGameFactory: As + "" } });
var Ci = 1;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: Ci + "", l2OutputOracle: Ci + "", portal: Ci + "", l1StandardBridge: Ci + "" } });
var yi = 11155111;
({ ...O3, contracts: { ...O3.contracts, disputeGameFactory: yi + "", l2OutputOracle: yi + "", portal: yi + "", l1StandardBridge: yi + "" } });
var Ss = 1;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: Ss + "", portal: Ss + "", l1StandardBridge: Ss + "" } });
var _s = 11155111;
({ ...O3, contracts: { ...O3.contracts, l2OutputOracle: _s + "", portal: _s + "", l1StandardBridge: _s + "" } });
var Cu = 5;
({ ...O3, contracts: { ...O3.contracts, portal: Cu + "" } });
function _n(t) {
  return { formatters: void 0, fees: void 0, serializers: void 0, ...t };
}
var yu = _n({ id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp", name: "Solana", network: "solana-mainnet", nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } }, blockExplorers: { default: { name: "Solscan", url: "https://solscan.io" } }, testnet: false, chainNamespace: "solana", caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp", deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ" });
var xu = _n({ id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1", name: "Solana Devnet", network: "solana-devnet", nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } }, blockExplorers: { default: { name: "Solscan", url: "https://solscan.io" } }, testnet: true, chainNamespace: "solana", caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1", deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K" });
_n({ id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z", name: "Solana Testnet", network: "solana-testnet", nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } }, blockExplorers: { default: { name: "Solscan", url: "https://solscan.io" } }, testnet: true, chainNamespace: "solana", caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z" }), _n({ id: "000000000019d6689c085ae165831e93", caipNetworkId: "bip122:000000000019d6689c085ae165831e93", chainNamespace: "bip122", name: "Bitcoin", nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 8 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } } }), _n({ id: "000000000933ea01ad0ee984209779ba", caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba", chainNamespace: "bip122", name: "Bitcoin Testnet", nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 8 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } }, testnet: true });
var r2 = { solana: ["solana_signMessage", "solana_signTransaction", "solana_requestAccounts", "solana_getAccounts", "solana_signAllTransactions", "solana_signAndSendTransaction"], eip155: ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_getCallsStatus", "wallet_showCallsStatus", "wallet_sendCalls", "wallet_getCapabilities", "wallet_grantPermissions", "wallet_revokePermissions", "wallet_getAssets"], bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"] };
var Eu = { getMethodsByChainNamespace(t) {
  return r2[t] || [];
}, createDefaultNamespace(t) {
  return { methods: this.getMethodsByChainNamespace(t), events: ["accountsChanged", "chainChanged"], chains: [], rpcMap: {} };
}, applyNamespaceOverrides(t, e) {
  if (!e) return { ...t };
  const r = { ...t }, n = /* @__PURE__ */ new Set();
  if (e.methods && Object.keys(e.methods).forEach((i) => n.add(i)), e.chains && Object.keys(e.chains).forEach((i) => n.add(i)), e.events && Object.keys(e.events).forEach((i) => n.add(i)), e.rpcMap && Object.keys(e.rpcMap).forEach((i) => {
    const [o4] = i.split(":");
    o4 && n.add(o4);
  }), n.forEach((i) => {
    r[i] || (r[i] = this.createDefaultNamespace(i));
  }), e.methods && Object.entries(e.methods).forEach(([i, o4]) => {
    r[i] && (r[i].methods = o4);
  }), e.chains && Object.entries(e.chains).forEach(([i, o4]) => {
    r[i] && (r[i].chains = o4);
  }), e.events && Object.entries(e.events).forEach(([i, o4]) => {
    r[i] && (r[i].events = o4);
  }), e.rpcMap) {
    const i = /* @__PURE__ */ new Set();
    Object.entries(e.rpcMap).forEach(([o4, s]) => {
      const [a, c4] = o4.split(":");
      !a || !c4 || !r[a] || (r[a].rpcMap || (r[a].rpcMap = {}), i.has(a) || (r[a].rpcMap = {}, i.add(a)), r[a].rpcMap[c4] = s);
    });
  }
  return r;
}, createNamespaces(t, e) {
  const r = t.reduce((n, i) => {
    const { id: o4, chainNamespace: s, rpcUrls: a } = i, c4 = a.default.http[0];
    n[s] || (n[s] = this.createDefaultNamespace(s));
    const l4 = `${s}:${o4}`, d4 = n[s];
    switch (d4.chains.push(l4), l4) {
      case yu.caipNetworkId:
        d4.chains.push(yu.deprecatedCaipNetworkId);
        break;
      case xu.caipNetworkId:
        d4.chains.push(xu.deprecatedCaipNetworkId);
        break;
    }
    return (d4 == null ? void 0 : d4.rpcMap) && c4 && (d4.rpcMap[o4] = c4), n;
  }, {});
  return this.applyNamespaceOverrides(r, e);
}, resolveReownName: async (t) => {
  var _a3;
  const e = await zd.resolveName(t);
  return ((_a3 = (Object.values(e == null ? void 0 : e.addresses) || [])[0]) == null ? void 0 : _a3.address) || false;
}, getChainsFromNamespaces(t = {}) {
  return Object.values(t).flatMap((e) => {
    const r = e.chains || [], n = e.accounts.map((i) => {
      const [o4, s] = i.split(":");
      return `${o4}:${s}`;
    });
    return Array.from(/* @__PURE__ */ new Set([...r, ...n]));
  });
}, isSessionEventData(t) {
  return typeof t == "object" && t !== null && "id" in t && "topic" in t && "params" in t && typeof t.params == "object" && t.params !== null && "chainId" in t.params && "event" in t.params && typeof t.params.event == "object" && t.params.event !== null;
} };
var Au = class {
  constructor({ provider: e, namespace: r }) {
    this.id = G2.CONNECTOR_ID.WALLET_CONNECT, this.name = Fo.ConnectorNamesMap[G2.CONNECTOR_ID.WALLET_CONNECT], this.type = "WALLET_CONNECT", this.imageId = Fo.ConnectorImageIds[G2.CONNECTOR_ID.WALLET_CONNECT], this.getCaipNetworks = f2.getCaipNetworks.bind(f2), this.caipNetworks = this.getCaipNetworks(), this.provider = e, this.chain = r;
  }
  get chains() {
    return this.getCaipNetworks();
  }
  async connectWalletConnect() {
    if (!await this.authenticate()) {
      const r = this.getCaipNetworks(), n = T2.state.universalProviderConfigOverride, i = Eu.createNamespaces(r, n);
      await this.provider.connect({ optionalNamespaces: i });
    }
    return { clientId: await this.provider.client.core.crypto.getClientId(), session: this.provider.session };
  }
  async disconnect() {
    await this.provider.disconnect();
  }
  async authenticate() {
    const e = this.chains.map((r) => r.caipNetworkId);
    return lr.universalProviderAuthenticate({ universalProvider: this.provider, chains: e, methods: n2 });
  }
};
var n2 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_getCallsStatus", "wallet_sendCalls", "wallet_getCapabilities", "wallet_grantPermissions", "wallet_revokePermissions", "wallet_getAssets"];
var i2 = class {
  constructor(e) {
    this.availableConnectors = [], this.eventListeners = /* @__PURE__ */ new Map(), this.getCaipNetworks = (r) => f2.getCaipNetworks(r), e && this.construct(e);
  }
  construct(e) {
    this.projectId = e.projectId, this.namespace = e.namespace, this.adapterType = e.adapterType;
  }
  get connectors() {
    return this.availableConnectors;
  }
  get networks() {
    return this.getCaipNetworks(this.namespace);
  }
  setAuthProvider(e) {
    this.addConnector({ id: G2.CONNECTOR_ID.AUTH, type: "AUTH", name: G2.CONNECTOR_NAMES.AUTH, provider: e, imageId: Fo.ConnectorImageIds[G2.CONNECTOR_ID.AUTH], chain: this.namespace, chains: [] });
  }
  addConnector(...e) {
    const r = /* @__PURE__ */ new Set();
    this.availableConnectors = [...e, ...this.availableConnectors].filter((n) => r.has(n.id) ? false : (r.add(n.id), true)), this.emit("connectors", this.availableConnectors);
  }
  setStatus(e, r) {
    Q.setStatus(e, r);
  }
  on(e, r) {
    var _a3;
    this.eventListeners.has(e) || this.eventListeners.set(e, /* @__PURE__ */ new Set()), (_a3 = this.eventListeners.get(e)) == null ? void 0 : _a3.add(r);
  }
  off(e, r) {
    const n = this.eventListeners.get(e);
    n && n.delete(r);
  }
  removeAllEventListeners() {
    this.eventListeners.forEach((e) => {
      e.clear();
    });
  }
  emit(e, r) {
    const n = this.eventListeners.get(e);
    n && n.forEach((i) => i(r));
  }
  async connectWalletConnect(e) {
    return { clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId };
  }
  async switchNetwork(e) {
    var _a3;
    const { caipNetwork: r, providerType: n } = e;
    if (!e.provider) return;
    const i = "provider" in e.provider ? e.provider.provider : e.provider;
    if (n === "WALLET_CONNECT") {
      i.setDefaultChain(r.caipNetworkId);
      return;
    }
    if (i && n === "AUTH") {
      const o4 = i, s = (_a3 = Q.state.preferredAccountTypes) == null ? void 0 : _a3[r.chainNamespace];
      await o4.switchNetwork(r.caipNetworkId);
      const a = await o4.getUser({ chainId: r.caipNetworkId, preferredAccountType: s });
      this.emit("switchNetwork", a);
    }
  }
  getWalletConnectConnector() {
    const e = this.connectors.find((r) => r instanceof Au);
    if (!e) throw new Error("WalletConnectConnector not found");
    return e;
  }
};
var o22 = class extends i2 {
  setUniversalProvider(e) {
    this.addConnector(new Au({ provider: e, caipNetworks: this.getCaipNetworks(), namespace: this.namespace }));
  }
  async connect(e) {
    return Promise.resolve({ id: "WALLET_CONNECT", type: "WALLET_CONNECT", chainId: Number(e.chainId), provider: this.provider, address: "" });
  }
  async disconnect() {
    try {
      await this.getWalletConnectConnector().disconnect();
    } catch (e) {
      console.warn("UniversalAdapter:disconnect - error", e);
    }
  }
  async getAccounts({ namespace: e }) {
    var _a3, _b, _c2, _d2, _e3;
    const n = ((_e3 = (_d2 = (_c2 = (_b = (_a3 = this.provider) == null ? void 0 : _a3.session) == null ? void 0 : _b.namespaces) == null ? void 0 : _c2[e]) == null ? void 0 : _d2.accounts) == null ? void 0 : _e3.map((i) => {
      const [, , o4] = i.split(":");
      return o4;
    }).filter((i, o4, s) => s.indexOf(i) === o4)) || [];
    return Promise.resolve({ accounts: n.map((i) => U3.createAccount(e, i, e === "bip122" ? "payment" : "eoa")) });
  }
  async syncConnectors() {
    return Promise.resolve();
  }
  async getBalance(e) {
    var _a3, _b, _c2, _d2, _e3;
    if (!(e.caipNetwork && Te2.BALANCE_SUPPORTED_CHAINS.includes((_a3 = e.caipNetwork) == null ? void 0 : _a3.chainNamespace)) || ((_b = e.caipNetwork) == null ? void 0 : _b.testnet)) return { balance: "0.00", symbol: ((_c2 = e.caipNetwork) == null ? void 0 : _c2.nativeCurrency.symbol) || "" };
    if (Q.state.balanceLoading && e.chainId === ((_d2 = f2.state.activeCaipNetwork) == null ? void 0 : _d2.id)) return { balance: Q.state.balance || "0.00", symbol: Q.state.balanceSymbol || "" };
    const i = (await Q.fetchTokenBalance()).find((o4) => {
      var _a4, _b2;
      return o4.chainId === `${(_a4 = e.caipNetwork) == null ? void 0 : _a4.chainNamespace}:${e.chainId}` && o4.symbol === ((_b2 = e.caipNetwork) == null ? void 0 : _b2.nativeCurrency.symbol);
    });
    return { balance: (i == null ? void 0 : i.quantity.numeric) || "0.00", symbol: (i == null ? void 0 : i.symbol) || ((_e3 = e.caipNetwork) == null ? void 0 : _e3.nativeCurrency.symbol) || "" };
  }
  async signMessage(e) {
    var _a3, _b, _c2;
    const { provider: r, message: n, address: i } = e;
    if (!r) throw new Error("UniversalAdapter:signMessage - provider is undefined");
    let o4 = "";
    return ((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.chainNamespace) === G2.CHAIN.SOLANA ? o4 = (await r.request({ method: "solana_signMessage", params: { message: Lg.encode(new TextEncoder().encode(n)), pubkey: i } }, (_b = f2.state.activeCaipNetwork) == null ? void 0 : _b.caipNetworkId)).signature : o4 = await r.request({ method: "personal_sign", params: [n, i] }, (_c2 = f2.state.activeCaipNetwork) == null ? void 0 : _c2.caipNetworkId), { signature: o4 };
  }
  async estimateGas() {
    return Promise.resolve({ gas: BigInt(0) });
  }
  async getProfile() {
    return Promise.resolve({ profileImage: "", profileName: "" });
  }
  async sendTransaction() {
    return Promise.resolve({ hash: "" });
  }
  walletGetAssets(e) {
    return Promise.resolve({});
  }
  async writeContract() {
    return Promise.resolve({ hash: "" });
  }
  async getEnsAddress() {
    return Promise.resolve({ address: false });
  }
  parseUnits() {
    return 0n;
  }
  formatUnits() {
    return "0";
  }
  async getCapabilities() {
    return Promise.resolve({});
  }
  async grantPermissions() {
    return Promise.resolve({});
  }
  async revokePermissions() {
    return Promise.resolve("0x");
  }
  async syncConnection() {
    return Promise.resolve({ id: "WALLET_CONNECT", type: "WALLET_CONNECT", chainId: 1, provider: this.provider, address: "" });
  }
  async switchNetwork(e) {
    var _a3, _b, _c2, _d2, _e3, _f2;
    const { caipNetwork: r } = e, n = this.getWalletConnectConnector();
    if (r.chainNamespace === G2.CHAIN.EVM) try {
      await ((_a3 = n.provider) == null ? void 0 : _a3.request({ method: "wallet_switchEthereumChain", params: [{ chainId: ie2(r.id) }] }));
    } catch (i) {
      if (i.code === ts2.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || i.code === ts2.ERROR_INVALID_CHAIN_ID || i.code === ts2.ERROR_CODE_DEFAULT || ((_c2 = (_b = i == null ? void 0 : i.data) == null ? void 0 : _b.originalError) == null ? void 0 : _c2.code) === ts2.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
        await ((_f2 = n.provider) == null ? void 0 : _f2.request({ method: "wallet_addEthereumChain", params: [{ chainId: ie2(r.id), rpcUrls: [(_d2 = r == null ? void 0 : r.rpcUrls.chainDefault) == null ? void 0 : _d2.http], chainName: r.name, nativeCurrency: r.nativeCurrency, blockExplorerUrls: [(_e3 = r.blockExplorers) == null ? void 0 : _e3.default.url] }] }));
      } catch {
        throw new Error("Chain is not supported");
      }
    }
    n.provider.setDefaultChain(r.caipNetworkId);
  }
  getWalletConnectProvider() {
    var _a3;
    return (_a3 = this.connectors.find((n) => n.type === "WALLET_CONNECT")) == null ? void 0 : _a3.provider;
  }
};
var s2 = class {
  constructor(e) {
    this.chainNamespaces = [], this.reportedAlertErrors = {}, this.getCaipNetwork = (r, n) => {
      var _a3, _b, _c2, _d2;
      if (r) {
        const i = (_b = (_a3 = f2.getNetworkData(r)) == null ? void 0 : _a3.requestedCaipNetworks) == null ? void 0 : _b.find((s) => s.id === n);
        if (i) return i;
        const o4 = (_c2 = f2.getNetworkData(r)) == null ? void 0 : _c2.caipNetwork;
        return o4 || ((_d2 = f2.getRequestedCaipNetworks(r).filter((s) => s.chainNamespace === r)) == null ? void 0 : _d2[0]);
      }
      return f2.state.activeCaipNetwork || this.defaultCaipNetwork;
    }, this.getCaipNetworkId = () => {
      const r = this.getCaipNetwork();
      if (r) return r.id;
    }, this.getCaipNetworks = (r) => f2.getCaipNetworks(r), this.getActiveChainNamespace = () => f2.state.activeChain, this.setRequestedCaipNetworks = (r, n) => {
      f2.setRequestedCaipNetworks(r, n);
    }, this.getApprovedCaipNetworkIds = () => f2.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (r) => f2.state.activeChain === r || !r ? f2.state.activeCaipAddress : f2.getAccountProp("caipAddress", r), this.setClientId = (r) => {
      oe3.setClientId(r);
    }, this.getProvider = (r) => _e2.getProvider(r), this.getProviderType = (r) => _e2.getProviderId(r), this.getPreferredAccountType = (r) => {
      var _a3;
      return (_a3 = Q.state.preferredAccountTypes) == null ? void 0 : _a3[r];
    }, this.setCaipAddress = (r, n) => {
      Q.setCaipAddress(r, n);
    }, this.setBalance = (r, n, i) => {
      Q.setBalance(r, n, i);
    }, this.setProfileName = (r, n) => {
      Q.setProfileName(r, n);
    }, this.setProfileImage = (r, n) => {
      Q.setProfileImage(r, n);
    }, this.setUser = (r, n) => {
      Q.setUser(r, n), T2.state.enableEmbedded && he2.close();
    }, this.resetAccount = (r) => {
      Q.resetAccount(r);
    }, this.setCaipNetwork = (r) => {
      f2.setActiveCaipNetwork(r);
    }, this.setCaipNetworkOfNamespace = (r, n) => {
      f2.setChainNetworkData(n, { caipNetwork: r });
    }, this.setAllAccounts = (r, n) => {
      Q.setAllAccounts(r, n), T2.setHasMultipleAddresses((r == null ? void 0 : r.length) > 1);
    }, this.setStatus = (r, n) => {
      Q.setStatus(r, n), j2.isConnected() ? q.setConnectionStatus("connected") : q.setConnectionStatus("disconnected");
    }, this.getAddressByChainNamespace = (r) => f2.getAccountProp("address", r), this.setConnectors = (r) => {
      const n = [...j2.state.allConnectors, ...r];
      j2.setConnectors(n);
    }, this.fetchIdentity = (r) => oe3.fetchIdentity(r), this.getReownName = (r) => zd.getNamesForAddress(r), this.getConnectors = () => j2.getConnectors(), this.getConnectorImage = (r) => Oe2.getConnectorImage(r), this.setConnectedWalletInfo = (r, n) => {
      const i = _e2.getProviderId(n), o4 = r ? { ...r, type: i } : void 0;
      Q.setConnectedWalletInfo(o4, n);
    }, this.getIsConnectedState = () => !!f2.state.activeCaipAddress, this.addAddressLabel = (r, n, i) => {
      Q.addAddressLabel(r, n, i);
    }, this.removeAddressLabel = (r, n) => {
      Q.removeAddressLabel(r, n);
    }, this.getAddress = (r) => f2.state.activeChain === r || !r ? Q.state.address : f2.getAccountProp("address", r), this.setApprovedCaipNetworksData = (r) => f2.setApprovedCaipNetworksData(r), this.resetNetwork = (r) => {
      f2.resetNetwork(r);
    }, this.addConnector = (r) => {
      j2.addConnector(r);
    }, this.resetWcConnection = () => {
      Y.resetWcConnection();
    }, this.setAddressExplorerUrl = (r, n) => {
      Q.setAddressExplorerUrl(r, n);
    }, this.setSmartAccountDeployed = (r, n) => {
      Q.setSmartAccountDeployed(r, n);
    }, this.setSmartAccountEnabledNetworks = (r, n) => {
      f2.setSmartAccountEnabledNetworks(r, n);
    }, this.setPreferredAccountType = (r, n) => {
      Q.setPreferredAccountType(r, n);
    }, this.setEIP6963Enabled = (r) => {
      T2.setEIP6963Enabled(r);
    }, this.handleUnsafeRPCRequest = () => {
      if (this.isOpen()) {
        if (this.isTransactionStackEmpty()) return;
        this.redirect("ApproveTransaction");
      } else this.open({ view: "ApproveTransaction" });
    }, this.options = e, this.version = e.sdkVersion, this.caipNetworks = this.extendCaipNetworks(e), this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e), this.chainAdapters = this.createAdapters(e.adapters), this.initialize(e);
  }
  getChainNamespacesSet(e, r) {
    const n = e == null ? void 0 : e.map((o4) => o4.namespace).filter((o4) => !!o4);
    if (n == null ? void 0 : n.length) return [...new Set(n)];
    const i = r == null ? void 0 : r.map((o4) => o4.chainNamespace);
    return [...new Set(i)];
  }
  async initialize(e) {
    this.initControllers(e), await this.initChainAdapters(), await this.injectModalUi(), this.sendInitializeEvent(e), zt2.set({ initialized: true }), await this.syncExistingConnection();
  }
  sendInitializeEvent(e) {
    var _a3;
    const { ...r } = e;
    delete r.adapters, delete r.universalProvider, le2.sendEvent({ type: "track", event: "INITIALIZE", properties: { ...r, networks: e.networks.map((n) => n.id), siweConfig: { options: ((_a3 = e.siweConfig) == null ? void 0 : _a3.options) || {} } } });
  }
  initControllers(e) {
    this.initializeOptionsController(e), this.initializeChainController(e), this.initializeThemeController(e), this.initializeConnectionController(e), this.initializeConnectorController();
  }
  initializeThemeController(e) {
    e.themeMode && $e2.setThemeMode(e.themeMode), e.themeVariables && $e2.setThemeVariables(e.themeVariables);
  }
  initializeChainController(e) {
    if (!this.connectionControllerClient || !this.networkControllerClient) throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");
    f2.initialize(e.adapters ?? [], this.caipNetworks, { connectionControllerClient: this.connectionControllerClient, networkControllerClient: this.networkControllerClient });
    const r = this.getDefaultNetwork();
    r && f2.setActiveCaipNetwork(r);
  }
  initializeConnectionController(e) {
    Y.setWcBasic(e.basic ?? false);
  }
  initializeConnectorController() {
    j2.initialize(this.chainNamespaces);
  }
  initializeOptionsController(e) {
    var _a3;
    T2.setDebug(e.debug !== false), T2.setEnableWalletConnect(e.enableWalletConnect !== false), T2.setEnableWalletGuide(e.enableWalletGuide !== false), T2.setEnableWallets(e.enableWallets !== false), T2.setEIP6963Enabled(e.enableEIP6963 !== false), T2.setEnableNetworkSwitch(e.enableNetworkSwitch !== false), T2.setEnableAuthLogger(e.enableAuthLogger !== false), T2.setCustomRpcUrls(e.customRpcUrls), T2.setSdkVersion(e.sdkVersion), T2.setProjectId(e.projectId), T2.setEnableEmbedded(e.enableEmbedded), T2.setAllWallets(e.allWallets), T2.setIncludeWalletIds(e.includeWalletIds), T2.setExcludeWalletIds(e.excludeWalletIds), T2.setFeaturedWalletIds(e.featuredWalletIds), T2.setTokens(e.tokens), T2.setTermsConditionsUrl(e.termsConditionsUrl), T2.setPrivacyPolicyUrl(e.privacyPolicyUrl), T2.setCustomWallets(e.customWallets), T2.setFeatures(e.features), T2.setAllowUnsupportedChain(e.allowUnsupportedChain), T2.setUniversalProviderConfigOverride(e.universalProviderConfigOverride), T2.setDefaultAccountTypes(e.defaultAccountTypes);
    const r = q.getPreferredAccountTypes(), n = { ...T2.state.defaultAccountTypes, ...r };
    Q.setPreferredAccountTypes(n);
    const i = this.getDefaultMetaData();
    if (!e.metadata && i && (e.metadata = i), T2.setMetadata(e.metadata), T2.setDisableAppend(e.disableAppend), T2.setEnableEmbedded(e.enableEmbedded), T2.setSIWX(e.siwx), !e.projectId) {
      ar.open(Ho.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
      return;
    }
    if (((_a3 = e.adapters) == null ? void 0 : _a3.find((s) => s.namespace === G2.CHAIN.EVM)) && e.siweConfig) {
      if (e.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
      T2.setSIWX(e.siweConfig.mapToSIWX());
    }
  }
  getDefaultMetaData() {
    var _a3, _b, _c2, _d2;
    return typeof window < "u" && typeof document < "u" ? { name: ((_b = (_a3 = document.getElementsByTagName("title")) == null ? void 0 : _a3[0]) == null ? void 0 : _b.textContent) || "", description: ((_c2 = document.querySelector('meta[property="og:description"]')) == null ? void 0 : _c2.content) || "", url: window.location.origin, icons: [((_d2 = document.querySelector('link[rel~="icon"]')) == null ? void 0 : _d2.href) || ""] } : null;
  }
  setUnsupportedNetwork(e) {
    const r = this.getActiveChainNamespace();
    if (r) {
      const n = Cn.getUnsupportedNetwork(`${r}:${e}`);
      f2.setActiveCaipNetwork(n);
    }
  }
  getDefaultNetwork() {
    return Cn.getCaipNetworkFromStorage(this.defaultCaipNetwork);
  }
  extendCaipNetwork(e, r) {
    return Cn.extendCaipNetwork(e, { customNetworkImageUrls: r.chainImages, projectId: r.projectId });
  }
  extendCaipNetworks(e) {
    return Cn.extendCaipNetworks(e.networks, { customNetworkImageUrls: e.chainImages, customRpcUrls: e.customRpcUrls, projectId: e.projectId });
  }
  extendDefaultCaipNetwork(e) {
    const r = e.networks.find((i) => {
      var _a3;
      return i.id === ((_a3 = e.defaultNetwork) == null ? void 0 : _a3.id);
    });
    return r ? Cn.extendCaipNetwork(r, { customNetworkImageUrls: e.chainImages, customRpcUrls: e.customRpcUrls, projectId: e.projectId }) : void 0;
  }
  createClients() {
    this.connectionControllerClient = { connectWalletConnect: async () => {
      var _a3;
      const e = f2.state.activeChain, r = this.getAdapter(e), n = (_a3 = this.getCaipNetwork(e)) == null ? void 0 : _a3.id;
      if (!r) throw new Error("Adapter not found");
      const i = await r.connectWalletConnect(n);
      this.close(), this.setClientId((i == null ? void 0 : i.clientId) || null), q.setConnectedNamespaces([...f2.state.chains.keys()]), this.chainNamespaces.forEach((o4) => {
        j2.setConnectorId(Be2.CONNECTOR_TYPE_WALLET_CONNECT, o4);
      }), await this.syncWalletConnectAccount();
    }, connectExternal: async ({ id: e, info: r, type: n, provider: i, chain: o4, caipNetwork: s }) => {
      var _a3, _b, _c2, _d2, _e3, _f2;
      const a = f2.state.activeChain, c4 = o4 || a, l4 = this.getAdapter(c4);
      if (o4 && o4 !== a && !s) {
        const p4 = this.getCaipNetworks().find((v4) => v4.chainNamespace === o4);
        p4 && this.setCaipNetwork(p4);
      }
      if (!l4) throw new Error("Adapter not found");
      const d4 = this.getCaipNetwork(c4), u4 = await l4.connect({ id: e, info: r, type: n, provider: i, chainId: (s == null ? void 0 : s.id) || (d4 == null ? void 0 : d4.id), rpcUrl: ((_c2 = (_b = (_a3 = s == null ? void 0 : s.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b.http) == null ? void 0 : _c2[0]) || ((_f2 = (_e3 = (_d2 = d4 == null ? void 0 : d4.rpcUrls) == null ? void 0 : _d2.default) == null ? void 0 : _e3.http) == null ? void 0 : _f2[0]) });
      if (!u4) return;
      q.addConnectedNamespace(c4), this.syncProvider({ ...u4, chainNamespace: c4 });
      const { accounts: h4 } = await l4.getAccounts({ namespace: c4, id: e });
      this.setAllAccounts(h4, c4), this.setStatus("connected", c4);
    }, reconnectExternal: async ({ id: e, info: r, type: n, provider: i }) => {
      var _a3;
      const o4 = f2.state.activeChain, s = this.getAdapter(o4);
      (s == null ? void 0 : s.reconnect) && (await (s == null ? void 0 : s.reconnect({ id: e, info: r, type: n, provider: i, chainId: (_a3 = this.getCaipNetwork()) == null ? void 0 : _a3.id })), q.addConnectedNamespace(o4));
    }, disconnect: async (e) => {
      const r = e || f2.state.activeChain, n = this.getAdapter(r), i = _e2.getProvider(r), o4 = _e2.getProviderId(r);
      await (n == null ? void 0 : n.disconnect({ provider: i, providerType: o4 })), q.removeConnectedNamespace(r), _e2.resetChain(r), this.setUser(void 0, r), this.setStatus("disconnected", r);
    }, checkInstalled: (e) => e ? e.some((r) => {
      var _a3;
      return !!((_a3 = window.ethereum) == null ? void 0 : _a3[String(r)]);
    }) : !!window.ethereum, signMessage: async (e) => {
      var _a3, _b;
      return ((_b = await ((_a3 = this.getAdapter(f2.state.activeChain)) == null ? void 0 : _a3.signMessage({ message: e, address: Q.state.address, provider: _e2.getProvider(f2.state.activeChain) }))) == null ? void 0 : _b.signature) || "";
    }, sendTransaction: async (e) => {
      var _a3;
      if (e.chainNamespace === G2.CHAIN.EVM) {
        const r = this.getAdapter(f2.state.activeChain), n = _e2.getProvider(f2.state.activeChain);
        return ((_a3 = await (r == null ? void 0 : r.sendTransaction({ ...e, caipNetwork: this.getCaipNetwork(), provider: n }))) == null ? void 0 : _a3.hash) || "";
      }
      return "";
    }, estimateGas: async (e) => {
      var _a3;
      if (e.chainNamespace === G2.CHAIN.EVM) {
        const r = this.getAdapter(f2.state.activeChain), n = _e2.getProvider(f2.state.activeChain), i = this.getCaipNetwork();
        if (!i) throw new Error("CaipNetwork is undefined");
        return ((_a3 = await (r == null ? void 0 : r.estimateGas({ ...e, provider: n, caipNetwork: i }))) == null ? void 0 : _a3.gas) || 0n;
      }
      return 0n;
    }, getEnsAvatar: async () => {
      var _a3, _b, _c2;
      return ((_c2 = await ((_b = this.getAdapter(f2.state.activeChain)) == null ? void 0 : _b.getProfile({ address: Q.state.address, chainId: Number((_a3 = this.getCaipNetwork()) == null ? void 0 : _a3.id) }))) == null ? void 0 : _c2.profileImage) || false;
    }, getEnsAddress: async (e) => {
      var _a3;
      const r = this.getAdapter(f2.state.activeChain), n = this.getCaipNetwork();
      return n && ((_a3 = await (r == null ? void 0 : r.getEnsAddress({ name: e, caipNetwork: n }))) == null ? void 0 : _a3.address) || false;
    }, writeContract: async (e) => {
      var _a3;
      const r = this.getAdapter(f2.state.activeChain), n = this.getCaipNetwork(), i = this.getCaipAddress(), o4 = _e2.getProvider(f2.state.activeChain);
      if (!n || !i) throw new Error("CaipNetwork or CaipAddress is undefined");
      return (_a3 = await (r == null ? void 0 : r.writeContract({ ...e, caipNetwork: n, provider: o4, caipAddress: i }))) == null ? void 0 : _a3.hash;
    }, parseUnits: (e, r) => {
      var _a3;
      return ((_a3 = this.getAdapter(f2.state.activeChain)) == null ? void 0 : _a3.parseUnits({ value: e, decimals: r })) ?? 0n;
    }, formatUnits: (e, r) => {
      var _a3;
      return ((_a3 = this.getAdapter(f2.state.activeChain)) == null ? void 0 : _a3.formatUnits({ value: e, decimals: r })) ?? "0";
    }, getCapabilities: async (e) => {
      var _a3;
      return await ((_a3 = this.getAdapter(f2.state.activeChain)) == null ? void 0 : _a3.getCapabilities(e));
    }, grantPermissions: async (e) => {
      var _a3;
      return await ((_a3 = this.getAdapter(f2.state.activeChain)) == null ? void 0 : _a3.grantPermissions(e));
    }, revokePermissions: async (e) => {
      const r = this.getAdapter(f2.state.activeChain);
      return (r == null ? void 0 : r.revokePermissions) ? await r.revokePermissions(e) : "0x";
    }, walletGetAssets: async (e) => {
      var _a3;
      return await ((_a3 = this.getAdapter(f2.state.activeChain)) == null ? void 0 : _a3.walletGetAssets(e)) ?? {};
    } }, this.networkControllerClient = { switchCaipNetwork: async (e) => await this.switchCaipNetwork(e), getApprovedCaipNetworksData: async () => this.getApprovedCaipNetworksData() }, Y.setClient(this.connectionControllerClient);
  }
  getApprovedCaipNetworksData() {
    var _a3, _b, _c2, _d2, _e3;
    if (_e2.getProviderId(f2.state.activeChain) === Be2.CONNECTOR_TYPE_WALLET_CONNECT) {
      const r = (_b = (_a3 = this.universalProvider) == null ? void 0 : _a3.session) == null ? void 0 : _b.namespaces;
      return { supportsAllNetworks: ((_e3 = (_d2 = (_c2 = this.universalProvider) == null ? void 0 : _c2.session) == null ? void 0 : _d2.peer) == null ? void 0 : _e3.metadata.name) === "MetaMask Wallet", approvedCaipNetworkIds: this.getChainsFromNamespaces(r) };
    }
    return { supportsAllNetworks: true, approvedCaipNetworkIds: [] };
  }
  async switchCaipNetwork(e) {
    var _a3;
    if (!e) return;
    const r = e.chainNamespace;
    if (this.getAddressByChainNamespace(e.chainNamespace)) {
      const i = _e2.getProvider(r), o4 = _e2.getProviderId(r);
      if (e.chainNamespace === f2.state.activeChain) await ((_a3 = this.getAdapter(r)) == null ? void 0 : _a3.switchNetwork({ caipNetwork: e, provider: i, providerType: o4 }));
      else if (this.setCaipNetwork(e), o4 === Be2.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
      else {
        const s = this.getAddressByChainNamespace(r);
        s && this.syncAccount({ address: s, chainId: e.id, chainNamespace: r });
      }
    } else this.setCaipNetwork(e);
  }
  getChainsFromNamespaces(e = {}) {
    return Object.values(e).flatMap((r) => {
      const n = r.chains || [], i = r.accounts.map((o4) => {
        const { chainId: s, chainNamespace: a } = nr.parseCaipAddress(o4);
        return `${a}:${s}`;
      });
      return Array.from(/* @__PURE__ */ new Set([...n, ...i]));
    });
  }
  createAdapters(e) {
    return this.createClients(), this.chainNamespaces.reduce((r, n) => {
      var _a3;
      const i = e == null ? void 0 : e.find((o4) => o4.namespace === n);
      return i ? (i.construct({ namespace: n, projectId: (_a3 = this.options) == null ? void 0 : _a3.projectId, networks: this.getCaipNetworks() }), r[n] = i) : r[n] = new o22({ namespace: n, networks: this.getCaipNetworks() }), r;
    }, {});
  }
  async initChainAdapter(e) {
    var _a3;
    this.onConnectors(e), this.listenAdapter(e), (_a3 = this.chainAdapters) == null ? void 0 : _a3[e].syncConnectors(this.options, this), await this.createUniversalProviderForAdapter(e);
  }
  async initChainAdapters() {
    await Promise.all(this.chainNamespaces.map(async (e) => {
      await this.initChainAdapter(e);
    }));
  }
  onConnectors(e) {
    var _a3;
    (_a3 = this.getAdapter(e)) == null ? void 0 : _a3.on("connectors", this.setConnectors.bind(this));
  }
  listenAdapter(e) {
    const r = this.getAdapter(e);
    if (!r) return;
    const n = q.getConnectionStatus();
    n === "connected" ? this.setStatus("connecting", e) : n === "disconnected" ? (q.clearAddressCache(), this.setStatus(n, e)) : this.setStatus(n, e), r.on("switchNetwork", ({ address: i, chainId: o4 }) => {
      const s = this.getCaipNetworks().find((l4) => l4.id === o4 || l4.caipNetworkId === o4), a = f2.state.activeChain === e, c4 = f2.getAccountProp("address", e);
      if (s) {
        const l4 = a && i ? i : c4;
        l4 && this.syncAccount({ address: l4, chainId: s.id, chainNamespace: e });
      } else this.setUnsupportedNetwork(o4);
    }), r.on("disconnect", this.disconnect.bind(this, e)), r.on("pendingTransactions", () => {
      const i = Q.state.address, o4 = f2.state.activeCaipNetwork;
      !i || !(o4 == null ? void 0 : o4.id) || this.updateNativeBalance(i, o4.id, o4.chainNamespace);
    }), r.on("accountChanged", ({ address: i, chainId: o4 }) => {
      var _a3, _b;
      const s = f2.state.activeChain === e;
      s && o4 ? this.syncAccount({ address: i, chainId: o4, chainNamespace: e }) : s && ((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.id) ? this.syncAccount({ address: i, chainId: (_b = f2.state.activeCaipNetwork) == null ? void 0 : _b.id, chainNamespace: e }) : this.syncAccountInfo(i, o4, e);
    });
  }
  async createUniversalProviderForAdapter(e) {
    var _a3, _b, _c2;
    await this.getUniversalProvider(), this.universalProvider && ((_c2 = (_b = (_a3 = this.chainAdapters) == null ? void 0 : _a3[e]) == null ? void 0 : _b.setUniversalProvider) == null ? void 0 : _c2.call(_b, this.universalProvider));
  }
  async syncExistingConnection() {
    await Promise.allSettled(this.chainNamespaces.map((e) => this.syncNamespaceConnection(e)));
  }
  async syncNamespaceConnection(e) {
    try {
      const r = j2.getConnectorId(e);
      switch (this.setStatus("connecting", e), r) {
        case G2.CONNECTOR_ID.WALLET_CONNECT:
          await this.syncWalletConnectAccount();
          break;
        case G2.CONNECTOR_ID.AUTH:
          break;
        default:
          await this.syncAdapterConnection(e);
      }
    } catch (r) {
      console.warn("AppKit couldn't sync existing connection", r), this.setStatus("disconnected", e);
    }
  }
  async syncAdapterConnection(e) {
    var _a3, _b, _c2;
    const r = this.getAdapter(e), n = j2.getConnectorId(e), i = this.getCaipNetwork(e), o4 = j2.getConnectors(e).find((s) => s.id === n);
    try {
      if (!r || !o4) throw new Error(`Adapter or connector not found for namespace ${e}`);
      if (!(i == null ? void 0 : i.id)) throw new Error("CaipNetwork not found");
      const s = await (r == null ? void 0 : r.syncConnection({ namespace: e, id: o4.id, chainId: i.id, rpcUrl: (_c2 = (_b = (_a3 = i == null ? void 0 : i.rpcUrls) == null ? void 0 : _a3.default) == null ? void 0 : _b.http) == null ? void 0 : _c2[0] }));
      if (s) {
        const a = await (r == null ? void 0 : r.getAccounts({ namespace: e, id: o4.id }));
        a && a.accounts.length > 0 ? this.setAllAccounts(a.accounts, e) : this.setAllAccounts([U3.createAccount(e, s.address, "eoa")], e), this.syncProvider({ ...s, chainNamespace: e }), await this.syncAccount({ ...s, chainNamespace: e }), this.setStatus("connected", e);
      } else this.setStatus("disconnected", e);
    } catch {
      this.setStatus("disconnected", e);
    }
  }
  async syncWalletConnectAccount() {
    const e = this.chainNamespaces.map(async (r) => {
      var _a3, _b, _c2, _d2, _e3;
      const n = this.getAdapter(r), i = ((_d2 = (_c2 = (_b = (_a3 = this.universalProvider) == null ? void 0 : _a3.session) == null ? void 0 : _b.namespaces) == null ? void 0 : _c2[r]) == null ? void 0 : _d2.accounts) || [], o4 = (_e3 = f2.state.activeCaipNetwork) == null ? void 0 : _e3.id, s = i.find((a) => {
        const { chainId: c4 } = nr.parseCaipAddress(a);
        return c4 === (o4 == null ? void 0 : o4.toString());
      }) || i[0];
      if (s) {
        const a = nr.validateCaipAddress(s), { chainId: c4, address: l4 } = nr.parseCaipAddress(a);
        if (_e2.setProviderId(r, Be2.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && f2.state.activeCaipNetwork && (n == null ? void 0 : n.namespace) !== G2.CHAIN.EVM) {
          const d4 = n == null ? void 0 : n.getWalletConnectProvider({ caipNetworks: this.getCaipNetworks(), provider: this.universalProvider, activeCaipNetwork: f2.state.activeCaipNetwork });
          _e2.setProvider(r, d4);
        } else _e2.setProvider(r, this.universalProvider);
        j2.setConnectorId(G2.CONNECTOR_ID.WALLET_CONNECT, r), q.addConnectedNamespace(r), this.syncWalletConnectAccounts(r), await this.syncAccount({ address: l4, chainId: c4, chainNamespace: r });
      } else this.setStatus("disconnected", r);
      await f2.setApprovedCaipNetworksData(r);
    });
    await Promise.all(e);
  }
  syncWalletConnectAccounts(e) {
    var _a3, _b, _c2, _d2, _e3;
    const r = (_e3 = (_d2 = (_c2 = (_b = (_a3 = this.universalProvider) == null ? void 0 : _a3.session) == null ? void 0 : _b.namespaces) == null ? void 0 : _c2[e]) == null ? void 0 : _d2.accounts) == null ? void 0 : _e3.map((n) => {
      const { address: i } = nr.parseCaipAddress(n);
      return i;
    }).filter((n, i, o4) => o4.indexOf(n) === i);
    r && this.setAllAccounts(r.map((n) => U3.createAccount(e, n, e === "bip122" ? "payment" : "eoa")), e);
  }
  syncProvider({ type: e, provider: r, id: n, chainNamespace: i }) {
    _e2.setProviderId(i, e), _e2.setProvider(i, r), j2.setConnectorId(n, i);
  }
  async syncAccount(e) {
    var _a3, _b;
    const r = e.chainNamespace === f2.state.activeChain, n = f2.getCaipNetworkByNamespace(e.chainNamespace, e.chainId), { address: i, chainId: o4, chainNamespace: s } = e, { chainId: a } = q.getActiveNetworkProps(), c4 = o4 || a, l4 = ((_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.name) === G2.UNSUPPORTED_NETWORK_NAME, d4 = f2.getNetworkProp("supportsAllNetworks", s);
    if (this.setStatus("connected", s), !(l4 && !d4) && c4) {
      let u4 = this.getCaipNetworks().find((v4) => v4.id.toString() === c4.toString()), h4 = this.getCaipNetworks().find((v4) => v4.chainNamespace === s);
      if (!d4 && !u4 && !h4) {
        const v4 = this.getApprovedCaipNetworkIds() || [], m4 = v4.find((b4) => {
          var _a4;
          return ((_a4 = nr.parseCaipNetworkId(b4)) == null ? void 0 : _a4.chainId) === c4.toString();
        }), g4 = v4.find((b4) => {
          var _a4;
          return ((_a4 = nr.parseCaipNetworkId(b4)) == null ? void 0 : _a4.chainNamespace) === s;
        });
        u4 = this.getCaipNetworks().find((b4) => b4.caipNetworkId === m4), h4 = this.getCaipNetworks().find((b4) => b4.caipNetworkId === g4 || "deprecatedCaipNetworkId" in b4 && b4.deprecatedCaipNetworkId === g4);
      }
      const p4 = u4 || h4;
      (p4 == null ? void 0 : p4.chainNamespace) === f2.state.activeChain ? T2.state.enableNetworkSwitch && !T2.state.allowUnsupportedChain && ((_b = f2.state.activeCaipNetwork) == null ? void 0 : _b.name) === G2.UNSUPPORTED_NETWORK_NAME ? f2.showUnsupportedChainUI() : this.setCaipNetwork(p4) : r || n && this.setCaipNetworkOfNamespace(n, s), this.syncConnectedWalletInfo(s), Ja.isLowerCaseMatch(i, Q.state.address) || this.syncAccountInfo(i, p4 == null ? void 0 : p4.id, s), r ? await this.syncBalance({ address: i, chainId: p4 == null ? void 0 : p4.id, chainNamespace: s }) : await this.syncBalance({ address: i, chainId: n == null ? void 0 : n.id, chainNamespace: s });
    }
  }
  async syncAccountInfo(e, r, n) {
    const i = this.getCaipAddress(n), o4 = r || (i == null ? void 0 : i.split(":")[1]);
    if (!o4) return;
    const s = `${n}:${o4}:${e}`;
    this.setCaipAddress(s, n), await this.syncIdentity({ address: e, chainId: o4, chainNamespace: n });
  }
  async syncReownName(e, r) {
    try {
      const n = await this.getReownName(e);
      if (n[0]) {
        const i = n[0];
        this.setProfileName(i.name, r);
      } else this.setProfileName(null, r);
    } catch {
      this.setProfileName(null, r);
    }
  }
  syncConnectedWalletInfo(e) {
    var _a3;
    const r = j2.getConnectorId(e), n = _e2.getProviderId(e);
    if (n === Be2.CONNECTOR_TYPE_ANNOUNCED || n === Be2.CONNECTOR_TYPE_INJECTED) {
      if (r) {
        const i = this.getConnectors().find((o4) => o4.id === r);
        if (i) {
          const { info: o4, name: s, imageUrl: a } = i, c4 = a || this.getConnectorImage(i);
          this.setConnectedWalletInfo({ name: s, icon: c4, ...o4 }, e);
        }
      }
    } else if (n === Be2.CONNECTOR_TYPE_WALLET_CONNECT) {
      const i = _e2.getProvider(e);
      (i == null ? void 0 : i.session) && this.setConnectedWalletInfo({ ...i.session.peer.metadata, name: i.session.peer.metadata.name, icon: (_a3 = i.session.peer.metadata.icons) == null ? void 0 : _a3[0] }, e);
    } else if (r) if (r === G2.CONNECTOR_ID.COINBASE) {
      const i = this.getConnectors().find((o4) => o4.id === G2.CONNECTOR_ID.COINBASE);
      this.setConnectedWalletInfo({ name: "Coinbase Wallet", icon: this.getConnectorImage(i) }, e);
    } else this.setConnectedWalletInfo({ name: r }, e);
  }
  async syncBalance(e) {
    !al.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find((n) => {
      var _a3;
      return n.id.toString() === ((_a3 = e.chainId) == null ? void 0 : _a3.toString());
    }) || !e.chainId || await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace);
  }
  async updateNativeBalance(e, r, n) {
    const i = this.getAdapter(n), o4 = f2.getCaipNetworkByNamespace(n, r);
    if (i) {
      const s = await i.getBalance({ address: e, chainId: r, caipNetwork: o4, tokens: this.options.tokens });
      this.setBalance(s.balance, s.symbol, n);
    }
  }
  async initializeUniversalAdapter() {
    var _a3, _b, _c2, _d2, _e3, _f2, _g2, _h2, _i2, _j;
    const e = cg.createLogger((n, ...i) => {
      n && this.handleAlertError(n), console.error(...i);
    }), r = { projectId: (_a3 = this.options) == null ? void 0 : _a3.projectId, metadata: { name: ((_b = this.options) == null ? void 0 : _b.metadata) ? (_c2 = this.options) == null ? void 0 : _c2.metadata.name : "", description: ((_d2 = this.options) == null ? void 0 : _d2.metadata) ? (_e3 = this.options) == null ? void 0 : _e3.metadata.description : "", url: ((_f2 = this.options) == null ? void 0 : _f2.metadata) ? (_g2 = this.options) == null ? void 0 : _g2.metadata.url : "", icons: ((_h2 = this.options) == null ? void 0 : _h2.metadata) ? (_i2 = this.options) == null ? void 0 : _i2.metadata.icons : [""] }, logger: e };
    T2.setManualWCControl(!!((_j = this.options) == null ? void 0 : _j.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await x.init(r), this.listenWalletConnect();
  }
  listenWalletConnect() {
    this.universalProvider && (this.universalProvider.on("display_uri", (e) => {
      Y.setUri(e);
    }), this.universalProvider.on("connect", Y.finalizeWcConnection), this.universalProvider.on("disconnect", () => {
      this.chainNamespaces.forEach((e) => {
        this.resetAccount(e);
      }), Y.resetWcConnection();
    }), this.universalProvider.on("chainChanged", (e) => {
      const r = this.getCaipNetworks().find((i) => i.id == e), n = this.getCaipNetwork();
      if (!r) {
        this.setUnsupportedNetwork(e);
        return;
      }
      (n == null ? void 0 : n.id) !== (r == null ? void 0 : r.id) && this.setCaipNetwork(r);
    }), this.universalProvider.on("session_event", (e) => {
      if (Eu.isSessionEventData(e)) {
        const { name: r, data: n } = e.params.event;
        r === "accountsChanged" && Array.isArray(n) && U3.isCaipAddress(n[0]) && this.syncAccount(nr.parseCaipAddress(n[0]));
      }
    }));
  }
  createUniversalProvider() {
    var _a3;
    return !this.universalProviderInitPromise && U3.isClient() && ((_a3 = this.options) == null ? void 0 : _a3.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
  }
  async getUniversalProvider() {
    if (!this.universalProvider) try {
      await this.createUniversalProvider();
    } catch (e) {
      le2.sendEvent({ type: "error", event: "INTERNAL_SDK_ERROR", properties: { errorType: "UniversalProviderInitError", errorMessage: e instanceof Error ? e.message : "Unknown", uncaught: false } }), console.error("AppKit:getUniversalProvider - Cannot create provider", e);
    }
    return this.universalProvider;
  }
  handleAlertError(e) {
    const r = Object.entries(Ho.UniversalProviderErrors).find(([, { message: a }]) => e.message.includes(a)), [n, i] = r ?? [], { message: o4, alertErrorKey: s } = i ?? {};
    if (n && o4 && !this.reportedAlertErrors[n]) {
      const a = Ho.ALERT_ERRORS[s];
      a && (ar.open(a, "error"), this.reportedAlertErrors[n] = true);
    }
  }
  getAdapter(e) {
    var _a3;
    if (e) return (_a3 = this.chainAdapters) == null ? void 0 : _a3[e];
  }
  createAdapter(e) {
    var _a3;
    if (!e) return;
    const r = e.namespace;
    if (!r) return;
    this.createClients();
    const n = e;
    n.namespace = r, n.construct({ namespace: r, projectId: (_a3 = this.options) == null ? void 0 : _a3.projectId, networks: this.getCaipNetworks() }), this.chainNamespaces.includes(r) || this.chainNamespaces.push(r), this.chainAdapters && (this.chainAdapters[r] = n);
  }
  async open(e) {
    if (await this.injectModalUi(), (e == null ? void 0 : e.uri) && Y.setUri(e.uri), e == null ? void 0 : e.arguments) switch (e == null ? void 0 : e.view) {
      case "Swap":
        return he2.open({ ...e, data: { swap: e.arguments } });
    }
    return he2.open(e);
  }
  async close() {
    await this.injectModalUi(), he2.close();
  }
  setLoading(e, r) {
    he2.setLoading(e, r);
  }
  async disconnect(e) {
    await Y.disconnect(e);
  }
  getError() {
    return "";
  }
  getChainId() {
    var _a3;
    return (_a3 = f2.state.activeCaipNetwork) == null ? void 0 : _a3.id;
  }
  async switchNetwork(e) {
    const r = this.getCaipNetworks().find((n) => n.id === e.id);
    if (!r) {
      ar.open(Ho.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
      return;
    }
    await f2.switchActiveNetwork(r);
  }
  getWalletProvider() {
    return f2.state.activeChain ? _e2.state.providers[f2.state.activeChain] : null;
  }
  getWalletProviderType() {
    return _e2.getProviderId(f2.state.activeChain);
  }
  subscribeProviders(e) {
    return _e2.subscribeProviders(e);
  }
  getThemeMode() {
    return $e2.state.themeMode;
  }
  getThemeVariables() {
    return $e2.state.themeVariables;
  }
  setThemeMode(e) {
    $e2.setThemeMode(e), pu($e2.state.themeMode);
  }
  setTermsConditionsUrl(e) {
    T2.setTermsConditionsUrl(e);
  }
  setPrivacyPolicyUrl(e) {
    T2.setPrivacyPolicyUrl(e);
  }
  setThemeVariables(e) {
    $e2.setThemeVariables(e), Og($e2.state.themeVariables);
  }
  subscribeTheme(e) {
    return $e2.subscribe(e);
  }
  getWalletInfo() {
    return Q.state.connectedWalletInfo;
  }
  getAccount(e) {
    var _a3;
    const r = j2.getAuthConnector(e), n = f2.getAccountData(e), i = f2.state.activeChain;
    if (n) return { allAccounts: n.allAccounts, caipAddress: n.caipAddress, address: U3.getPlainAddress(n.caipAddress), isConnected: !!n.caipAddress, status: n.status, embeddedWalletInfo: r ? { user: n.user ? { ...n.user, username: q.getConnectedSocialUsername() } : void 0, authProvider: n.socialProvider || "email", accountType: (_a3 = n.preferredAccountTypes) == null ? void 0 : _a3[e || i], isSmartAccountDeployed: !!n.smartAccountDeployed } : void 0 };
  }
  subscribeAccount(e, r) {
    const n = () => {
      const i = this.getAccount(r);
      i && e(i);
    };
    r ? f2.subscribeChainProp("accountState", n, r) : f2.subscribe(n), j2.subscribe(n);
  }
  subscribeNetwork(e) {
    return f2.subscribe(({ activeCaipNetwork: r }) => {
      e({ caipNetwork: r, chainId: r == null ? void 0 : r.id, caipNetworkId: r == null ? void 0 : r.caipNetworkId });
    });
  }
  subscribeWalletInfo(e) {
    return Q.subscribeKey("connectedWalletInfo", e);
  }
  subscribeShouldUpdateToAddress(e) {
    Q.subscribeKey("shouldUpdateToAddress", e);
  }
  subscribeCaipNetworkChange(e) {
    f2.subscribeKey("activeCaipNetwork", e);
  }
  getState() {
    return zt2.state;
  }
  subscribeState(e) {
    return zt2.subscribe(e);
  }
  showErrorMessage(e) {
    Ee3.showError(e);
  }
  showSuccessMessage(e) {
    Ee3.showSuccess(e);
  }
  getEvent() {
    return { ...le2.state };
  }
  subscribeEvents(e) {
    return le2.subscribe(e);
  }
  replace(e) {
    D2.replace(e);
  }
  redirect(e) {
    D2.push(e);
  }
  popTransactionStack(e) {
    D2.popTransactionStack(e);
  }
  isOpen() {
    return he2.state.open;
  }
  isTransactionStackEmpty() {
    return D2.state.transactionStack.length === 0;
  }
  isTransactionShouldReplaceView() {
    var _a3;
    return (_a3 = D2.state.transactionStack[D2.state.transactionStack.length - 1]) == null ? void 0 : _a3.replace;
  }
  static getInstance() {
    return this.instance;
  }
  updateFeatures(e) {
    T2.setFeatures(e);
  }
  updateOptions(e) {
    const n = { ...T2.state || {}, ...e };
    T2.setOptions(n);
  }
  setConnectMethodsOrder(e) {
    T2.setConnectMethodsOrder(e);
  }
  setWalletFeaturesOrder(e) {
    T2.setWalletFeaturesOrder(e);
  }
  setCollapseWallets(e) {
    T2.setCollapseWallets(e);
  }
  setSocialsOrder(e) {
    T2.setSocialsOrder(e);
  }
  getConnectMethodsOrder() {
    return Lr.getConnectOrderMethod(T2.state.features, j2.getConnectors());
  }
  addNetwork(e, r) {
    if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
    const n = this.extendCaipNetwork(r, this.options);
    this.getCaipNetworks().find((i) => i.id === n.id) || f2.addNetwork(n);
  }
  removeNetwork(e, r) {
    if (this.chainAdapters && !this.chainAdapters[e]) throw new Error(`Adapter for namespace ${e} doesn't exist`);
    this.getCaipNetworks().find((i) => i.id === r) && f2.removeNetwork(e, r);
  }
};
var Su = false;
var _u = class extends s2 {
  async open(e) {
    j2.isConnected() || await super.open(e);
  }
  async close() {
    await super.close(), this.options.manualWCControl && Y.finalizeWcConnection();
  }
  async syncIdentity(e) {
    return Promise.resolve();
  }
  async syncBalance(e) {
    return Promise.resolve();
  }
  async injectModalUi() {
    if (!Su && U3.isClient()) {
      if (await Promise.resolve().then(function() {
        return bm;
      }), await Promise.resolve().then(function() {
        return Bm;
      }), !document.querySelector("w3m-modal")) {
        const r = document.createElement("w3m-modal");
        !T2.state.disableAppend && !T2.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", r);
      }
      Su = true;
    }
  }
};
var a2 = "1.7.3";
function c2(t) {
  return new _u({ ...t, basic: true, sdkVersion: `html-core-${a2}` });
}
var l2 = Object.freeze({ __proto__: null, createAppKit: c2, AppKit: _u });
var d22 = Object.defineProperty;
var u2 = Object.defineProperties;
var h2 = Object.getOwnPropertyDescriptors;
var Iu = Object.getOwnPropertySymbols;
var p22 = Object.prototype.hasOwnProperty;
var f22 = Object.prototype.propertyIsEnumerable;
var Nu = (t, e, r) => e in t ? d22(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r;
var g22 = (t, e) => {
  for (var r in e || (e = {})) p22.call(e, r) && Nu(t, r, e[r]);
  if (Iu) for (var r of Iu(e)) f22.call(e, r) && Nu(t, r, e[r]);
  return t;
};
var w22 = (t, e) => u2(t, h2(e));
function m2(t) {
  if (t) return { "--w3m-font-family": t["--wcm-font-family"], "--w3m-accent": t["--wcm-accent-color"], "--w3m-color-mix": t["--wcm-background-color"], "--w3m-z-index": t["--wcm-z-index"] ? Number(t["--wcm-z-index"]) : void 0, "--w3m-qr-color": t["--wcm-accent-color"], "--w3m-font-size-master": t["--wcm-text-medium-regular-size"], "--w3m-border-radius-master": t["--wcm-container-border-radius"], "--w3m-color-mix-strength": 0 };
}
var b2 = (t) => {
  const [e, r] = t.split(":");
  return _n({ id: r, caipNetworkId: t, chainNamespace: e, name: "", nativeCurrency: { name: "", symbol: "", decimals: 8 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } } });
};
function v2(t) {
  var e, r, n, i, o4, s, a;
  const c4 = (e = t.chains) == null ? void 0 : e.map(b2).filter(Boolean);
  if (c4.length === 0) throw new Error("At least one chain must be specified");
  const l4 = c4.find((u4) => {
    var h4;
    return u4.id === ((h4 = t.defaultChain) == null ? void 0 : h4.id);
  }), d4 = { projectId: t.projectId, networks: c4, themeMode: t.themeMode, themeVariables: m2(t.themeVariables), chainImages: t.chainImages, connectorImages: t.walletImages, defaultNetwork: l4, metadata: w22(g22({}, t.metadata), { name: ((r = t.metadata) == null ? void 0 : r.name) || "WalletConnect", description: ((n = t.metadata) == null ? void 0 : n.description) || "Connect to WalletConnect-compatible wallets", url: ((i = t.metadata) == null ? void 0 : i.url) || "https://walletconnect.org", icons: ((o4 = t.metadata) == null ? void 0 : o4.icons) || ["https://walletconnect.org/walletconnect-logo.png"] }), showWallets: true, featuredWalletIds: t.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(t.explorerRecommendedWalletIds) ? t.explorerRecommendedWalletIds : [], excludeWalletIds: t.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(t.explorerExcludedWalletIds) ? t.explorerExcludedWalletIds : [], enableEIP6963: false, enableInjected: false, enableCoinbase: true, enableWalletConnect: true, features: { email: false, socials: false } };
  if ((s = t.mobileWallets) != null && s.length || (a = t.desktopWallets) != null && a.length) {
    const u4 = [...(t.mobileWallets || []).map((v4) => ({ id: v4.id, name: v4.name, links: v4.links })), ...(t.desktopWallets || []).map((v4) => ({ id: v4.id, name: v4.name, links: { native: v4.links.native, universal: v4.links.universal } }))], h4 = [...d4.featuredWalletIds || [], ...d4.excludeWalletIds || []], p4 = u4.filter((v4) => !h4.includes(v4.id));
    p4.length && (d4.customWallets = p4);
  }
  return d4;
}
var C2 = Object.freeze({ __proto__: null, convertWCMToAppKitOptions: v2 });
var y2 = { attribute: true, type: String, converter: Jo, reflect: false, hasChanged: oc };
var x2 = (t = y2, e, r) => {
  const { kind: n, metadata: i } = r;
  let o4 = globalThis.litPropertyMetadata.get(i);
  if (o4 === void 0 && globalThis.litPropertyMetadata.set(i, o4 = /* @__PURE__ */ new Map()), n === "setter" && ((t = Object.create(t)).wrapped = true), o4.set(r.name, t), n === "accessor") {
    const { name: s } = r;
    return { set(a) {
      const c4 = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(s, c4, t);
    }, init(a) {
      return a !== void 0 && this.C(s, void 0, t, a), a;
    } };
  }
  if (n === "setter") {
    const { name: s } = r;
    return function(a) {
      const c4 = this[s];
      e.call(this, a), this.requestUpdate(s, c4, t);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function C3(t) {
  return (e, r) => typeof r == "object" ? x2(t, e, r) : ((n, i, o4) => {
    const s = i.hasOwnProperty(o4);
    return i.constructor.createProperty(o4, n), s ? Object.getOwnPropertyDescriptor(i, o4) : void 0;
  })(t, e, r);
}
function H2(t) {
  return C3({ ...t, state: true, attribute: false });
}
var E22 = te2`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;
var lt2 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Ze2 = class extends V2 {
  render() {
    return this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && Me2.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && Me2.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && Me2.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && Me2.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && Me2.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && Me2.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && Me2.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && Me2.getSpacingStyles(this.margin, 3)};
    `, w3`<slot></slot>`;
  }
};
Ze2.styles = [we2, E22], lt2([C3()], Ze2.prototype, "flexDirection", void 0), lt2([C3()], Ze2.prototype, "flexWrap", void 0), lt2([C3()], Ze2.prototype, "flexBasis", void 0), lt2([C3()], Ze2.prototype, "flexGrow", void 0), lt2([C3()], Ze2.prototype, "flexShrink", void 0), lt2([C3()], Ze2.prototype, "alignItems", void 0), lt2([C3()], Ze2.prototype, "justifyContent", void 0), lt2([C3()], Ze2.prototype, "columnGap", void 0), lt2([C3()], Ze2.prototype, "rowGap", void 0), lt2([C3()], Ze2.prototype, "gap", void 0), lt2([C3()], Ze2.prototype, "padding", void 0), lt2([C3()], Ze2.prototype, "margin", void 0), Ze2 = lt2([F2("wui-flex")], Ze2);
var re2 = (t) => t ?? Ne2;
var A2 = (t) => t === null || typeof t != "object" && typeof t != "function";
var S2 = (t) => t.strings === void 0;
var ku = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var pc = (t) => (...e) => ({ _$litDirective$: t, values: e });
var Tu = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, r, n) {
    this._$Ct = e, this._$AM = r, this._$Ci = n;
  }
  _$AS(e, r) {
    return this.update(e, r);
  }
  update(e, r) {
    return this.render(...r);
  }
};
var xi = (t, e) => {
  var _a3;
  const r = t._$AN;
  if (r === void 0) return false;
  for (const n of r) (_a3 = n._$AO) == null ? void 0 : _a3.call(n, e, false), xi(n, e);
  return true;
};
var Is = (t) => {
  let e, r;
  do {
    if ((e = t._$AM) === void 0) break;
    r = e._$AN, r.delete(t), t = e;
  } while ((r == null ? void 0 : r.size) === 0);
};
var Ou = (t) => {
  for (let e; e = t._$AM; t = e) {
    let r = e._$AN;
    if (r === void 0) e._$AN = r = /* @__PURE__ */ new Set();
    else if (r.has(t)) break;
    r.add(t), N2(e);
  }
};
function _2(t) {
  this._$AN !== void 0 ? (Is(this), this._$AM = t, Ou(this)) : this._$AM = t;
}
function I2(t, e = false, r = 0) {
  const n = this._$AH, i = this._$AN;
  if (i !== void 0 && i.size !== 0) if (e) if (Array.isArray(n)) for (let o4 = r; o4 < n.length; o4++) xi(n[o4], false), Is(n[o4]);
  else n != null && (xi(n, false), Is(n));
  else xi(this, t);
}
var N2 = (t) => {
  t.type == ku.CHILD && (t._$AP ?? (t._$AP = I2), t._$AQ ?? (t._$AQ = _2));
};
var $u = class extends Tu {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, r, n) {
    super._$AT(e, r, n), Ou(this), this.isConnected = e._$AU;
  }
  _$AO(e, r = true) {
    var _a3, _b;
    e !== this.isConnected && (this.isConnected = e, e ? (_a3 = this.reconnected) == null ? void 0 : _a3.call(this) : (_b = this.disconnected) == null ? void 0 : _b.call(this)), r && (xi(this, e), Is(this));
  }
  setValue(e) {
    if (S2(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const r = [...this._$Ct._$AH];
      r[this._$Ci] = e, this._$Ct._$AI(r, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};
var k22 = class {
  constructor(e) {
    this.G = e;
  }
  disconnect() {
    this.G = void 0;
  }
  reconnect(e) {
    this.G = e;
  }
  deref() {
    return this.G;
  }
};
var T22 = class {
  constructor() {
    this.Y = void 0, this.Z = void 0;
  }
  get() {
    return this.Y;
  }
  pause() {
    this.Y ?? (this.Y = new Promise((e) => this.Z = e));
  }
  resume() {
    var _a3;
    (_a3 = this.Z) == null ? void 0 : _a3.call(this), this.Y = this.Z = void 0;
  }
};
var Pu = (t) => !A2(t) && typeof t.then == "function";
var Bu = 1073741823;
var O22 = class extends $u {
  constructor() {
    super(...arguments), this._$Cwt = Bu, this._$Cbt = [], this._$CK = new k22(this), this._$CX = new T22();
  }
  render(...e) {
    return e.find((r) => !Pu(r)) ?? Yt2;
  }
  update(e, r) {
    const n = this._$Cbt;
    let i = n.length;
    this._$Cbt = r;
    const o4 = this._$CK, s = this._$CX;
    this.isConnected || this.disconnected();
    for (let a = 0; a < r.length && !(a > this._$Cwt); a++) {
      const c4 = r[a];
      if (!Pu(c4)) return this._$Cwt = a, c4;
      a < i && c4 === n[a] || (this._$Cwt = Bu, i = 0, Promise.resolve(c4).then(async (l4) => {
        for (; s.get(); ) await s.get();
        const d4 = o4.deref();
        if (d4 !== void 0) {
          const u4 = d4._$Cbt.indexOf(c4);
          u4 > -1 && u4 < d4._$Cwt && (d4._$Cwt = u4, d4.setValue(l4));
        }
      }));
    }
    return Yt2;
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause();
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume();
  }
};
var $2 = pc(O22);
var P22 = class {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  set(e, r) {
    this.cache.set(e, r);
  }
  get(e) {
    return this.cache.get(e);
  }
  has(e) {
    return this.cache.has(e);
  }
  delete(e) {
    this.cache.delete(e);
  }
  clear() {
    this.cache.clear();
  }
};
var fc = new P22();
var B2 = te2`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;
var Ei = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Ru = { add: async () => (await Promise.resolve().then(function() {
  return Lm;
})).addSvg, allWallets: async () => (await Promise.resolve().then(function() {
  return Mm;
})).allWalletsSvg, arrowBottomCircle: async () => (await Promise.resolve().then(function() {
  return zm;
})).arrowBottomCircleSvg, appStore: async () => (await Promise.resolve().then(function() {
  return jm;
})).appStoreSvg, apple: async () => (await Promise.resolve().then(function() {
  return Hm;
})).appleSvg, arrowBottom: async () => (await Promise.resolve().then(function() {
  return Zm;
})).arrowBottomSvg, arrowLeft: async () => (await Promise.resolve().then(function() {
  return qm;
})).arrowLeftSvg, arrowRight: async () => (await Promise.resolve().then(function() {
  return Ym;
})).arrowRightSvg, arrowTop: async () => (await Promise.resolve().then(function() {
  return Jm;
})).arrowTopSvg, bank: async () => (await Promise.resolve().then(function() {
  return e3;
})).bankSvg, browser: async () => (await Promise.resolve().then(function() {
  return r3;
})).browserSvg, card: async () => (await Promise.resolve().then(function() {
  return i3;
})).cardSvg, checkmark: async () => (await Promise.resolve().then(function() {
  return s3;
})).checkmarkSvg, checkmarkBold: async () => (await Promise.resolve().then(function() {
  return c3;
})).checkmarkBoldSvg, chevronBottom: async () => (await Promise.resolve().then(function() {
  return d3;
})).chevronBottomSvg, chevronLeft: async () => (await Promise.resolve().then(function() {
  return h3;
})).chevronLeftSvg, chevronRight: async () => (await Promise.resolve().then(function() {
  return f3;
})).chevronRightSvg, chevronTop: async () => (await Promise.resolve().then(function() {
  return w32;
})).chevronTopSvg, chromeStore: async () => (await Promise.resolve().then(function() {
  return b3;
})).chromeStoreSvg, clock: async () => (await Promise.resolve().then(function() {
  return C32;
})).clockSvg, close: async () => (await Promise.resolve().then(function() {
  return x3;
})).closeSvg, compass: async () => (await Promise.resolve().then(function() {
  return A3;
})).compassSvg, coinPlaceholder: async () => (await Promise.resolve().then(function() {
  return _3;
})).coinPlaceholderSvg, copy: async () => (await Promise.resolve().then(function() {
  return N3;
})).copySvg, cursor: async () => (await Promise.resolve().then(function() {
  return T3;
})).cursorSvg, cursorTransparent: async () => (await Promise.resolve().then(function() {
  return $3;
})).cursorTransparentSvg, desktop: async () => (await Promise.resolve().then(function() {
  return B3;
})).desktopSvg, disconnect: async () => (await Promise.resolve().then(function() {
  return L3;
})).disconnectSvg, discord: async () => (await Promise.resolve().then(function() {
  return M3;
})).discordSvg, etherscan: async () => (await Promise.resolve().then(function() {
  return z3;
})).etherscanSvg, extension: async () => (await Promise.resolve().then(function() {
  return j3;
})).extensionSvg, externalLink: async () => (await Promise.resolve().then(function() {
  return H3;
})).externalLinkSvg, facebook: async () => (await Promise.resolve().then(function() {
  return Z3;
})).facebookSvg, farcaster: async () => (await Promise.resolve().then(function() {
  return q3;
})).farcasterSvg, filters: async () => (await Promise.resolve().then(function() {
  return Y3;
})).filtersSvg, github: async () => (await Promise.resolve().then(function() {
  return J3;
})).githubSvg, google: async () => (await Promise.resolve().then(function() {
  return e5;
})).googleSvg, helpCircle: async () => (await Promise.resolve().then(function() {
  return r5;
})).helpCircleSvg, image: async () => (await Promise.resolve().then(function() {
  return i5;
})).imageSvg, id: async () => (await Promise.resolve().then(function() {
  return s5;
})).idSvg, infoCircle: async () => (await Promise.resolve().then(function() {
  return c5;
})).infoCircleSvg, lightbulb: async () => (await Promise.resolve().then(function() {
  return d5;
})).lightbulbSvg, mail: async () => (await Promise.resolve().then(function() {
  return h5;
})).mailSvg, mobile: async () => (await Promise.resolve().then(function() {
  return f5;
})).mobileSvg, more: async () => (await Promise.resolve().then(function() {
  return w5;
})).moreSvg, networkPlaceholder: async () => (await Promise.resolve().then(function() {
  return b5;
})).networkPlaceholderSvg, nftPlaceholder: async () => (await Promise.resolve().then(function() {
  return C5;
})).nftPlaceholderSvg, off: async () => (await Promise.resolve().then(function() {
  return x5;
})).offSvg, playStore: async () => (await Promise.resolve().then(function() {
  return A5;
})).playStoreSvg, plus: async () => (await Promise.resolve().then(function() {
  return _5;
})).plusSvg, qrCode: async () => (await Promise.resolve().then(function() {
  return N5;
})).qrCodeIcon, recycleHorizontal: async () => (await Promise.resolve().then(function() {
  return T5;
})).recycleHorizontalSvg, refresh: async () => (await Promise.resolve().then(function() {
  return $5;
})).refreshSvg, search: async () => (await Promise.resolve().then(function() {
  return B5;
})).searchSvg, send: async () => (await Promise.resolve().then(function() {
  return L5;
})).sendSvg, swapHorizontal: async () => (await Promise.resolve().then(function() {
  return M5;
})).swapHorizontalSvg, swapHorizontalMedium: async () => (await Promise.resolve().then(function() {
  return z5;
})).swapHorizontalMediumSvg, swapHorizontalBold: async () => (await Promise.resolve().then(function() {
  return j5;
})).swapHorizontalBoldSvg, swapHorizontalRoundedBold: async () => (await Promise.resolve().then(function() {
  return H5;
})).swapHorizontalRoundedBoldSvg, swapVertical: async () => (await Promise.resolve().then(function() {
  return Z5;
})).swapVerticalSvg, telegram: async () => (await Promise.resolve().then(function() {
  return q5;
})).telegramSvg, threeDots: async () => (await Promise.resolve().then(function() {
  return Y5;
})).threeDotsSvg, twitch: async () => (await Promise.resolve().then(function() {
  return J5;
})).twitchSvg, twitter: async () => (await Promise.resolve().then(function() {
  return x0;
})).xSvg, twitterIcon: async () => (await Promise.resolve().then(function() {
  return tb;
})).twitterIconSvg, verify: async () => (await Promise.resolve().then(function() {
  return nb;
})).verifySvg, verifyFilled: async () => (await Promise.resolve().then(function() {
  return ob;
})).verifyFilledSvg, wallet: async () => (await Promise.resolve().then(function() {
  return ab;
})).walletSvg, walletConnect: async () => (await Promise.resolve().then(function() {
  return Yc;
})).walletConnectSvg, walletConnectLightBrown: async () => (await Promise.resolve().then(function() {
  return Yc;
})).walletConnectLightBrownSvg, walletConnectBrown: async () => (await Promise.resolve().then(function() {
  return Yc;
})).walletConnectBrownSvg, walletPlaceholder: async () => (await Promise.resolve().then(function() {
  return hb;
})).walletPlaceholderSvg, warningCircle: async () => (await Promise.resolve().then(function() {
  return fb;
})).warningCircleSvg, x: async () => (await Promise.resolve().then(function() {
  return x0;
})).xSvg, info: async () => (await Promise.resolve().then(function() {
  return wb;
})).infoSvg, exclamationTriangle: async () => (await Promise.resolve().then(function() {
  return bb;
})).exclamationTriangleSvg, reown: async () => (await Promise.resolve().then(function() {
  return Cb;
})).reownSvg };
async function R2(t) {
  if (fc.has(t)) return fc.get(t);
  const r = (Ru[t] ?? Ru.copy)();
  return fc.set(t, r), r;
}
var zr = class extends V2 {
  constructor() {
    super(...arguments), this.size = "md", this.name = "copy", this.color = "fg-300", this.aspectRatio = "1 / 1";
  }
  render() {
    return this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `, w3`${$2(R2(this.name), w3`<div class="fallback"></div>`)}`;
  }
};
zr.styles = [we2, li, B2], Ei([C3()], zr.prototype, "size", void 0), Ei([C3()], zr.prototype, "name", void 0), Ei([C3()], zr.prototype, "color", void 0), Ei([C3()], zr.prototype, "aspectRatio", void 0), zr = Ei([F2("wui-icon")], zr);
var Lu = pc(class extends Tu {
  constructor(t) {
    var _a3;
    if (super(t), t.type !== ku.ATTRIBUTE || t.name !== "class" || ((_a3 = t.strings) == null ? void 0 : _a3.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter((e) => t[e]).join(" ") + " ";
  }
  update(t, [e]) {
    var _a3, _b;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), t.strings !== void 0 && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((n) => n !== "")));
      for (const n in e) e[n] && !((_a3 = this.nt) == null ? void 0 : _a3.has(n)) && this.st.add(n);
      return this.render(e);
    }
    const r = t.element.classList;
    for (const n of this.st) n in e || (r.remove(n), this.st.delete(n));
    for (const n in e) {
      const i = !!e[n];
      i === this.st.has(n) || ((_b = this.nt) == null ? void 0 : _b.has(n)) || (i ? (r.add(n), this.st.add(n)) : (r.remove(n), this.st.delete(n)));
    }
    return Yt2;
  }
});
var L22 = te2`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;
var Ai = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Wr = class extends V2 {
  constructor() {
    super(...arguments), this.variant = "paragraph-500", this.color = "fg-300", this.align = "left", this.lineClamp = void 0;
  }
  render() {
    const e = { [`wui-font-${this.variant}`]: true, [`wui-color-${this.color}`]: true, [`wui-line-clamp-${this.lineClamp}`]: !!this.lineClamp };
    return this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `, w3`<slot class=${Lu(e)}></slot>`;
  }
};
Wr.styles = [we2, L22], Ai([C3()], Wr.prototype, "variant", void 0), Ai([C3()], Wr.prototype, "color", void 0), Ai([C3()], Wr.prototype, "align", void 0), Ai([C3()], Wr.prototype, "lineClamp", void 0), Wr = Ai([F2("wui-text")], Wr);
var U22 = te2`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;
var Xt2 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var At = class extends V2 {
  constructor() {
    super(...arguments), this.size = "md", this.backgroundColor = "accent-100", this.iconColor = "accent-100", this.background = "transparent", this.border = false, this.borderColor = "wui-color-bg-125", this.icon = "copy";
  }
  render() {
    const e = this.iconSize || this.size, r = this.size === "lg", n = this.size === "xl", i = r ? "12%" : "16%", o4 = r ? "xxs" : n ? "s" : "3xl", s = this.background === "gray", a = this.background === "opaque", c4 = this.backgroundColor === "accent-100" && a || this.backgroundColor === "success-100" && a || this.backgroundColor === "error-100" && a || this.backgroundColor === "inverse-100" && a;
    let l4 = `var(--wui-color-${this.backgroundColor})`;
    return c4 ? l4 = `var(--wui-icon-box-bg-${this.backgroundColor})` : s && (l4 = `var(--wui-color-gray-${this.backgroundColor})`), this.style.cssText = `
       --local-bg-value: ${l4};
       --local-bg-mix: ${c4 || s ? "100%" : i};
       --local-border-radius: var(--wui-border-radius-${o4});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === "wui-color-bg-125" ? "2px" : "1px"} solid ${this.border ? `var(--${this.borderColor})` : "transparent"}
   `, w3` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `;
  }
};
At.styles = [we2, De2, U22], Xt2([C3()], At.prototype, "size", void 0), Xt2([C3()], At.prototype, "backgroundColor", void 0), Xt2([C3()], At.prototype, "iconColor", void 0), Xt2([C3()], At.prototype, "iconSize", void 0), Xt2([C3()], At.prototype, "background", void 0), Xt2([C3({ type: Boolean })], At.prototype, "border", void 0), Xt2([C3()], At.prototype, "borderColor", void 0), Xt2([C3()], At.prototype, "icon", void 0), At = Xt2([F2("wui-icon-box")], At);
var M2 = te2`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;
var Ns = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var In = class extends V2 {
  constructor() {
    super(...arguments), this.src = "./path/to/image.jpg", this.alt = "Image", this.size = void 0;
  }
  render() {
    return this.style.cssText = `
      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      `, w3`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`;
  }
  handleImageError() {
    this.dispatchEvent(new CustomEvent("onLoadError", { bubbles: true, composed: true }));
  }
};
In.styles = [we2, li, M2], Ns([C3()], In.prototype, "src", void 0), Ns([C3()], In.prototype, "alt", void 0), Ns([C3()], In.prototype, "size", void 0), In = Ns([F2("wui-image")], In);
var D22 = te2`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;
var jr = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Jt2 = class extends V2 {
  constructor() {
    super(...arguments), this.size = "md", this.name = "", this.installed = false, this.badgeSize = "xs";
  }
  render() {
    let e = "xxs";
    return this.size === "lg" ? e = "m" : this.size === "md" ? e = "xs" : e = "xxs", this.style.cssText = `
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `, this.walletIcon && (this.dataset.walletIcon = this.walletIcon), w3`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `;
  }
  templateVisual() {
    return this.imageSrc ? w3`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>` : this.walletIcon ? w3`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>` : w3`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
  }
};
Jt2.styles = [De2, we2, D22], jr([C3()], Jt2.prototype, "size", void 0), jr([C3()], Jt2.prototype, "name", void 0), jr([C3()], Jt2.prototype, "imageSrc", void 0), jr([C3()], Jt2.prototype, "walletIcon", void 0), jr([C3({ type: Boolean })], Jt2.prototype, "installed", void 0), jr([C3()], Jt2.prototype, "badgeSize", void 0), Jt2 = jr([F2("wui-wallet-image")], Jt2);
var z22 = te2`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;
var Uu = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var gc = 4;
var ks = class extends V2 {
  constructor() {
    super(...arguments), this.walletImages = [];
  }
  render() {
    const e = this.walletImages.length < gc;
    return w3`${this.walletImages.slice(0, gc).map(({ src: r, walletName: n }) => w3`
            <wui-wallet-image
              size="inherit"
              imageSrc=${r}
              name=${re2(n)}
            ></wui-wallet-image>
          `)}
      ${e ? [...Array(gc - this.walletImages.length)].map(() => w3` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`) : null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`;
  }
};
ks.styles = [we2, z22], Uu([C3({ type: Array })], ks.prototype, "walletImages", void 0), ks = Uu([F2("wui-all-wallets-image")], ks);
var W22 = te2`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;
var wc = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Si = class extends V2 {
  constructor() {
    super(...arguments), this.variant = "main", this.size = "lg";
  }
  render() {
    this.dataset.variant = this.variant, this.dataset.size = this.size;
    const e = this.size === "md" ? "mini-700" : "micro-700";
    return w3`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `;
  }
};
Si.styles = [we2, W22], wc([C3()], Si.prototype, "variant", void 0), wc([C3()], Si.prototype, "size", void 0), Si = wc([F2("wui-tag")], Si);
var j22 = te2`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;
var tt2 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var je2 = class extends V2 {
  constructor() {
    super(...arguments), this.walletImages = [], this.imageSrc = "", this.name = "", this.tabIdx = void 0, this.installed = false, this.disabled = false, this.showAllWallets = false, this.loading = false, this.loadingSpinnerColor = "accent-100";
  }
  render() {
    return w3`
      <button ?disabled=${this.disabled} tabindex=${re2(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `;
  }
  templateAllWallets() {
    return this.showAllWallets && this.imageSrc ? w3` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> ` : this.showAllWallets && this.walletIcon ? w3` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> ` : null;
  }
  templateWalletImage() {
    return !this.showAllWallets && this.imageSrc ? w3`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>` : !this.showAllWallets && !this.imageSrc ? w3`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>` : null;
  }
  templateStatus() {
    return this.loading ? w3`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>` : this.tagLabel && this.tagVariant ? w3`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>` : this.icon ? w3`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>` : null;
  }
};
je2.styles = [we2, De2, j22], tt2([C3({ type: Array })], je2.prototype, "walletImages", void 0), tt2([C3()], je2.prototype, "imageSrc", void 0), tt2([C3()], je2.prototype, "name", void 0), tt2([C3()], je2.prototype, "tagLabel", void 0), tt2([C3()], je2.prototype, "tagVariant", void 0), tt2([C3()], je2.prototype, "icon", void 0), tt2([C3()], je2.prototype, "walletIcon", void 0), tt2([C3()], je2.prototype, "tabIdx", void 0), tt2([C3({ type: Boolean })], je2.prototype, "installed", void 0), tt2([C3({ type: Boolean })], je2.prototype, "disabled", void 0), tt2([C3({ type: Boolean })], je2.prototype, "showAllWallets", void 0), tt2([C3({ type: Boolean })], je2.prototype, "loading", void 0), tt2([C3({ type: String })], je2.prototype, "loadingSpinnerColor", void 0), je2 = tt2([F2("wui-list-wallet")], je2);
var _i = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Nn = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = j2.state.connectors, this.count = W2.state.count, this.isFetchingRecommendedWallets = W2.state.isFetchingRecommendedWallets, this.unsubscribe.push(j2.subscribeKey("connectors", (e) => this.connectors = e), W2.subscribeKey("count", (e) => this.count = e), W2.subscribeKey("isFetchingRecommendedWallets", (e) => this.isFetchingRecommendedWallets = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.find((a) => a.id === "walletConnect"), { allWallets: r } = T2.state;
    if (!e || r === "HIDE" || r === "ONLY_MOBILE" && !U3.isMobile()) return null;
    const n = W2.state.featured.length, i = this.count + n, o4 = i < 10 ? i : Math.floor(i / 10) * 10, s = o4 < i ? `${o4}+` : `${o4}`;
    return w3`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${re2(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets ? "fg-300" : "accent-100"}
      ></wui-list-wallet>
    `;
  }
  onAllWallets() {
    le2.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" }), D2.push("AllWallets");
  }
};
_i([C3()], Nn.prototype, "tabIdx", void 0), _i([H2()], Nn.prototype, "connectors", void 0), _i([H2()], Nn.prototype, "count", void 0), _i([H2()], Nn.prototype, "isFetchingRecommendedWallets", void 0), Nn = _i([F2("w3m-all-wallets-widget")], Nn);
var mc = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Ts = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = j2.state.connectors, this.unsubscribe.push(j2.subscribeKey("connectors", (e) => this.connectors = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.filter((r) => r.type === "ANNOUNCED");
    return (e == null ? void 0 : e.length) ? w3`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(Kt2.showConnector).map((r) => w3`
              <wui-list-wallet
                imageSrc=${re2(Oe2.getConnectorImage(r))}
                name=${r.name ?? "Unknown"}
                @click=${() => this.onConnector(r)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${r.id}`}
                .installed=${true}
                tabIdx=${re2(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnector(e) {
    e.id === "walletConnect" ? U3.isMobile() ? D2.push("AllWallets") : D2.push("ConnectingWalletConnect") : D2.push("ConnectingExternal", { connector: e });
  }
};
mc([C3()], Ts.prototype, "tabIdx", void 0), mc([H2()], Ts.prototype, "connectors", void 0), Ts = mc([F2("w3m-connect-announced-widget")], Ts);
var Os = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Ii = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = j2.state.connectors, this.loading = false, this.unsubscribe.push(j2.subscribeKey("connectors", (e) => this.connectors = e)), U3.isTelegram() && U3.isIos() && (this.loading = !Y.state.wcUri, this.unsubscribe.push(Y.subscribeKey("wcUri", (e) => this.loading = !e)));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { customWallets: e } = T2.state;
    if (!(e == null ? void 0 : e.length)) return this.style.cssText = "display: none", null;
    const r = this.filterOutDuplicateWallets(e);
    return w3`<wui-flex flexDirection="column" gap="xs">
      ${r.map((n) => w3`
          <wui-list-wallet
            imageSrc=${re2(Oe2.getWalletImage(n))}
            name=${n.name ?? "Unknown"}
            @click=${() => this.onConnectWallet(n)}
            data-testid=${`wallet-selector-${n.id}`}
            tabIdx=${re2(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`;
  }
  filterOutDuplicateWallets(e) {
    const r = q.getRecentWallets(), n = this.connectors.map((a) => {
      var _a3;
      return (_a3 = a.info) == null ? void 0 : _a3.rdns;
    }).filter(Boolean), i = r.map((a) => a.rdns).filter(Boolean), o4 = n.concat(i);
    if (o4.includes("io.metamask.mobile") && U3.isMobile()) {
      const a = o4.indexOf("io.metamask.mobile");
      o4[a] = "io.metamask";
    }
    return e.filter((a) => !o4.includes(String(a == null ? void 0 : a.rdns)));
  }
  onConnectWallet(e) {
    this.loading || D2.push("ConnectingWalletConnect", { wallet: e });
  }
};
Os([C3()], Ii.prototype, "tabIdx", void 0), Os([H2()], Ii.prototype, "connectors", void 0), Os([H2()], Ii.prototype, "loading", void 0), Ii = Os([F2("w3m-connect-custom-widget")], Ii);
var bc = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var $s = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = j2.state.connectors, this.unsubscribe.push(j2.subscribeKey("connectors", (e) => this.connectors = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const n = this.connectors.filter((i) => i.type === "EXTERNAL").filter(Kt2.showConnector).filter((i) => i.id !== G2.CONNECTOR_ID.COINBASE_SDK);
    return (n == null ? void 0 : n.length) ? w3`
      <wui-flex flexDirection="column" gap="xs">
        ${n.map((i) => w3`
            <wui-list-wallet
              imageSrc=${re2(Oe2.getConnectorImage(i))}
              .installed=${true}
              name=${i.name ?? "Unknown"}
              data-testid=${`wallet-selector-external-${i.id}`}
              @click=${() => this.onConnector(i)}
              tabIdx=${re2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnector(e) {
    D2.push("ConnectingExternal", { connector: e });
  }
};
bc([C3()], $s.prototype, "tabIdx", void 0), bc([H2()], $s.prototype, "connectors", void 0), $s = bc([F2("w3m-connect-external-widget")], $s);
var vc = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Ps = class extends V2 {
  constructor() {
    super(...arguments), this.tabIdx = void 0, this.wallets = [];
  }
  render() {
    return this.wallets.length ? w3`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((e) => w3`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${re2(Oe2.getWalletImage(e))}
              name=${e.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(e)}
              tabIdx=${re2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnectWallet(e) {
    j2.selectWalletConnector(e);
  }
};
vc([C3()], Ps.prototype, "tabIdx", void 0), vc([C3()], Ps.prototype, "wallets", void 0), Ps = vc([F2("w3m-connect-featured-widget")], Ps);
var Cc = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Bs = class extends V2 {
  constructor() {
    super(...arguments), this.tabIdx = void 0, this.connectors = [];
  }
  render() {
    var _a3;
    const e = this.connectors;
    return !(e == null ? void 0 : e.length) || e.length === 1 && ((_a3 = e[0]) == null ? void 0 : _a3.name) === "Browser Wallet" && !U3.isMobile() ? (this.style.cssText = "display: none", null) : w3`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((r) => {
      var _a4;
      const n = (_a4 = r.info) == null ? void 0 : _a4.rdns;
      return !U3.isMobile() && r.name === "Browser Wallet" ? null : !n && !Y.checkInstalled() ? (this.style.cssText = "display: none", null) : Kt2.showConnector(r) ? w3`
            <wui-list-wallet
              imageSrc=${re2(Oe2.getConnectorImage(r))}
              .installed=${true}
              name=${r.name ?? "Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${r.id}`}
              @click=${() => this.onConnector(r)}
              tabIdx=${re2(this.tabIdx)}
            >
            </wui-list-wallet>
          ` : null;
    })}
      </wui-flex>
    `;
  }
  onConnector(e) {
    j2.setActiveConnector(e), D2.push("ConnectingExternal", { connector: e });
  }
};
Cc([C3()], Bs.prototype, "tabIdx", void 0), Cc([C3()], Bs.prototype, "connectors", void 0), Bs = Cc([F2("w3m-connect-injected-widget")], Bs);
var yc = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Rs = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = j2.state.connectors, this.unsubscribe.push(j2.subscribeKey("connectors", (e) => this.connectors = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.filter((r) => r.type === "MULTI_CHAIN" && r.name !== "WalletConnect");
    return (e == null ? void 0 : e.length) ? w3`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((r) => w3`
            <wui-list-wallet
              imageSrc=${re2(Oe2.getConnectorImage(r))}
              .installed=${true}
              name=${r.name ?? "Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${r.id}`}
              @click=${() => this.onConnector(r)}
              tabIdx=${re2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnector(e) {
    j2.setActiveConnector(e), D2.push("ConnectingMultiChain");
  }
};
yc([C3()], Rs.prototype, "tabIdx", void 0), yc([H2()], Rs.prototype, "connectors", void 0), Rs = yc([F2("w3m-connect-multi-chain-widget")], Rs);
var Ls = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Ni = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = j2.state.connectors, this.loading = false, this.unsubscribe.push(j2.subscribeKey("connectors", (e) => this.connectors = e)), U3.isTelegram() && U3.isIos() && (this.loading = !Y.state.wcUri, this.unsubscribe.push(Y.subscribeKey("wcUri", (e) => this.loading = !e)));
  }
  render() {
    const r = q.getRecentWallets().filter((n) => !Lr.isExcluded(n)).filter((n) => !this.hasWalletConnector(n)).filter((n) => this.isWalletCompatibleWithCurrentChain(n));
    return r.length ? w3`
      <wui-flex flexDirection="column" gap="xs">
        ${r.map((n) => w3`
            <wui-list-wallet
              imageSrc=${re2(Oe2.getWalletImage(n))}
              name=${n.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(n)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${re2(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnectWallet(e) {
    this.loading || j2.selectWalletConnector(e);
  }
  hasWalletConnector(e) {
    return this.connectors.some((r) => r.id === e.id || r.name === e.name);
  }
  isWalletCompatibleWithCurrentChain(e) {
    const r = f2.state.activeChain;
    return r && e.chains ? e.chains.some((n) => {
      const i = n.split(":")[0];
      return r === i;
    }) : true;
  }
};
Ls([C3()], Ni.prototype, "tabIdx", void 0), Ls([H2()], Ni.prototype, "connectors", void 0), Ls([H2()], Ni.prototype, "loading", void 0), Ni = Ls([F2("w3m-connect-recent-widget")], Ni);
var Us = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var ki = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.wallets = [], this.loading = false, U3.isTelegram() && U3.isIos() && (this.loading = !Y.state.wcUri, this.unsubscribe.push(Y.subscribeKey("wcUri", (e) => this.loading = !e)));
  }
  render() {
    const { connectors: e } = j2.state, { customWallets: r, featuredWalletIds: n } = T2.state, i = q.getRecentWallets(), o4 = e.find((u4) => u4.id === "walletConnect"), a = e.filter((u4) => u4.type === "INJECTED" || u4.type === "ANNOUNCED" || u4.type === "MULTI_CHAIN").filter((u4) => u4.name !== "Browser Wallet");
    if (!o4) return null;
    if (n || r || !this.wallets.length) return this.style.cssText = "display: none", null;
    const c4 = a.length + i.length, l4 = Math.max(0, 2 - c4), d4 = Lr.filterOutDuplicateWallets(this.wallets).slice(0, l4);
    return d4.length ? w3`
      <wui-flex flexDirection="column" gap="xs">
        ${d4.map((u4) => w3`
            <wui-list-wallet
              imageSrc=${re2(Oe2.getWalletImage(u4))}
              name=${(u4 == null ? void 0 : u4.name) ?? "Unknown"}
              @click=${() => this.onConnectWallet(u4)}
              tabIdx=${re2(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    ` : (this.style.cssText = "display: none", null);
  }
  onConnectWallet(e) {
    if (this.loading) return;
    const r = j2.getConnector(e.id, e.rdns);
    r ? D2.push("ConnectingExternal", { connector: r }) : D2.push("ConnectingWalletConnect", { wallet: e });
  }
};
Us([C3()], ki.prototype, "tabIdx", void 0), Us([C3()], ki.prototype, "wallets", void 0), Us([H2()], ki.prototype, "loading", void 0), ki = Us([F2("w3m-connect-recommended-widget")], ki);
var Ms = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Ti = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = j2.state.connectors, this.connectorImages = Ye2.state.connectorImages, this.unsubscribe.push(j2.subscribeKey("connectors", (e) => this.connectors = e), Ye2.subscribeKey("connectorImages", (e) => this.connectorImages = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (U3.isMobile()) return this.style.cssText = "display: none", null;
    const e = this.connectors.find((n) => n.id === "walletConnect");
    if (!e) return this.style.cssText = "display: none", null;
    const r = e.imageUrl || this.connectorImages[(e == null ? void 0 : e.imageId) ?? ""];
    return w3`
      <wui-list-wallet
        imageSrc=${re2(r)}
        name=${e.name ?? "Unknown"}
        @click=${() => this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${re2(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
  }
  onConnector(e) {
    j2.setActiveConnector(e), D2.push("ConnectingWalletConnect");
  }
};
Ms([C3()], Ti.prototype, "tabIdx", void 0), Ms([H2()], Ti.prototype, "connectors", void 0), Ms([H2()], Ti.prototype, "connectorImages", void 0), Ti = Ms([F2("w3m-connect-walletconnect-widget")], Ti);
var F22 = te2`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
var Oi = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Fr = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.tabIdx = void 0, this.connectors = j2.state.connectors, this.recommended = W2.state.recommended, this.featured = W2.state.featured, this.unsubscribe.push(j2.subscribeKey("connectors", (e) => this.connectors = e), W2.subscribeKey("recommended", (e) => this.recommended = e), W2.subscribeKey("featured", (e) => this.featured = e));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return w3`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `;
  }
  connectorListTemplate() {
    const { custom: e, recent: r, announced: n, injected: i, multiChain: o4, recommended: s, featured: a, external: c4 } = Kt2.getConnectorsByType(this.connectors, this.recommended, this.featured);
    return Kt2.getConnectorTypeOrder({ custom: e, recent: r, announced: n, injected: i, multiChain: o4, recommended: s, featured: a, external: c4 }).map((d4) => {
      switch (d4) {
        case "injected":
          return w3`
            ${o4.length ? w3`<w3m-connect-multi-chain-widget
                  tabIdx=${re2(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>` : null}
            ${n.length ? w3`<w3m-connect-announced-widget
                  tabIdx=${re2(this.tabIdx)}
                ></w3m-connect-announced-widget>` : null}
            ${i.length ? w3`<w3m-connect-injected-widget
                  .connectors=${i}
                  tabIdx=${re2(this.tabIdx)}
                ></w3m-connect-injected-widget>` : null}
          `;
        case "walletConnect":
          return w3`<w3m-connect-walletconnect-widget
            tabIdx=${re2(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;
        case "recent":
          return w3`<w3m-connect-recent-widget
            tabIdx=${re2(this.tabIdx)}
          ></w3m-connect-recent-widget>`;
        case "featured":
          return w3`<w3m-connect-featured-widget
            .wallets=${a}
            tabIdx=${re2(this.tabIdx)}
          ></w3m-connect-featured-widget>`;
        case "custom":
          return w3`<w3m-connect-custom-widget
            tabIdx=${re2(this.tabIdx)}
          ></w3m-connect-custom-widget>`;
        case "external":
          return w3`<w3m-connect-external-widget
            tabIdx=${re2(this.tabIdx)}
          ></w3m-connect-external-widget>`;
        case "recommended":
          return w3`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${re2(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;
        default:
          return console.warn(`Unknown connector type: ${d4}`), null;
      }
    });
  }
};
Fr.styles = F22, Oi([C3()], Fr.prototype, "tabIdx", void 0), Oi([H2()], Fr.prototype, "connectors", void 0), Oi([H2()], Fr.prototype, "recommended", void 0), Oi([H2()], Fr.prototype, "featured", void 0), Fr = Oi([F2("w3m-connector-list")], Fr);
var H22 = te2`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;
var vr = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var $t = class extends V2 {
  constructor() {
    super(...arguments), this.tabs = [], this.onTabChange = () => null, this.buttons = [], this.disabled = false, this.localTabWidth = "100px", this.activeTab = 0, this.isDense = false;
  }
  render() {
    return this.isDense = this.tabs.length > 3, this.style.cssText = `
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `, this.dataset.type = this.isDense ? "flex" : "block", this.tabs.map((e, r) => {
      var _a3;
      const n = r === this.activeTab;
      return w3`
        <button
          ?disabled=${this.disabled}
          @click=${() => this.onTabClick(r)}
          data-active=${n}
          data-testid="tab-${(_a3 = e.label) == null ? void 0 : _a3.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `;
    });
  }
  firstUpdated() {
    this.shadowRoot && this.isDense && (this.buttons = [...this.shadowRoot.querySelectorAll("button")], setTimeout(() => {
      this.animateTabs(0, true);
    }, 0));
  }
  iconTemplate(e) {
    return e.icon ? w3`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>` : null;
  }
  onTabClick(e) {
    this.buttons && this.animateTabs(e, false), this.activeTab = e, this.onTabChange(e);
  }
  animateTabs(e, r) {
    const n = this.buttons[this.activeTab], i = this.buttons[e], o4 = n == null ? void 0 : n.querySelector("wui-text"), s = i == null ? void 0 : i.querySelector("wui-text"), a = i == null ? void 0 : i.getBoundingClientRect(), c4 = s == null ? void 0 : s.getBoundingClientRect();
    n && o4 && !r && e !== this.activeTab && (o4.animate([{ opacity: 0 }], { duration: 50, easing: "ease", fill: "forwards" }), n.animate([{ width: "34px" }], { duration: 500, easing: "ease", fill: "forwards" })), i && a && c4 && s && (e !== this.activeTab || r) && (this.localTabWidth = `${Math.round(a.width + c4.width) + 6}px`, i.animate([{ width: `${a.width + c4.width}px` }], { duration: r ? 0 : 500, fill: "forwards", easing: "ease" }), s.animate([{ opacity: 1 }], { duration: r ? 0 : 125, delay: r ? 0 : 200, fill: "forwards", easing: "ease" }));
  }
};
$t.styles = [we2, De2, H22], vr([C3({ type: Array })], $t.prototype, "tabs", void 0), vr([C3()], $t.prototype, "onTabChange", void 0), vr([C3({ type: Array })], $t.prototype, "buttons", void 0), vr([C3({ type: Boolean })], $t.prototype, "disabled", void 0), vr([C3()], $t.prototype, "localTabWidth", void 0), vr([H2()], $t.prototype, "activeTab", void 0), vr([H2()], $t.prototype, "isDense", void 0), $t = vr([F2("wui-tabs")], $t);
var Ds = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var $i = class extends V2 {
  constructor() {
    super(), this.platformTabs = [], this.unsubscribe = [], this.platforms = [], this.onSelectPlatfrom = void 0, this.buffering = false, this.unsubscribe.push(Y.subscribeKey("buffering", (e) => this.buffering = e));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.generateTabs();
    return w3`
      <wui-flex justifyContent="center" .padding=${["0", "0", "l", "0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const e = this.platforms.map((r) => r === "browser" ? { label: "Browser", icon: "extension", platform: "browser" } : r === "mobile" ? { label: "Mobile", icon: "mobile", platform: "mobile" } : r === "qrcode" ? { label: "Mobile", icon: "mobile", platform: "qrcode" } : r === "web" ? { label: "Webapp", icon: "browser", platform: "web" } : r === "desktop" ? { label: "Desktop", icon: "desktop", platform: "desktop" } : { label: "Browser", icon: "extension", platform: "unsupported" });
    return this.platformTabs = e.map(({ platform: r }) => r), e;
  }
  onTabChange(e) {
    var _a3;
    const r = this.platformTabs[e];
    r && ((_a3 = this.onSelectPlatfrom) == null ? void 0 : _a3.call(this, r));
  }
};
Ds([C3({ type: Array })], $i.prototype, "platforms", void 0), Ds([C3()], $i.prototype, "onSelectPlatfrom", void 0), Ds([H2()], $i.prototype, "buffering", void 0), $i = Ds([F2("w3m-connecting-header")], $i);
var V22 = te2`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;
var xc = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Pi = class extends V2 {
  constructor() {
    super(...arguments), this.color = "accent-100", this.size = "lg";
  }
  render() {
    return this.style.cssText = `--local-color: ${this.color === "inherit" ? "inherit" : `var(--wui-color-${this.color})`}`, this.dataset.size = this.size, w3`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`;
  }
};
Pi.styles = [we2, V22], xc([C3()], Pi.prototype, "color", void 0), xc([C3()], Pi.prototype, "size", void 0), Pi = xc([F2("wui-loading-spinner")], Pi);
var Z2 = te2`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;
var Pt2 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Mu = { main: "inverse-100", inverse: "inverse-000", accent: "accent-100", "accent-error": "error-100", "accent-success": "success-100", neutral: "fg-100", disabled: "gray-glass-020" };
var G22 = { lg: "paragraph-600", md: "small-600" };
var q2 = { lg: "md", md: "md" };
var mt2 = class extends V2 {
  constructor() {
    super(...arguments), this.size = "lg", this.disabled = false, this.fullWidth = false, this.loading = false, this.variant = "main", this.hasIconLeft = false, this.hasIconRight = false, this.borderRadius = "m";
  }
  render() {
    this.style.cssText = `
    --local-width: ${this.fullWidth ? "100%" : "auto"};
    --local-opacity-100: ${this.loading ? 0 : 1};
    --local-opacity-000: ${this.loading ? 1 : 0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;
    const e = this.textVariant ?? G22[this.size];
    return w3`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${() => this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${() => this.handleSlotRightChange()}></slot>
      </button>
    `;
  }
  handleSlotLeftChange() {
    this.hasIconLeft = true;
  }
  handleSlotRightChange() {
    this.hasIconRight = true;
  }
  loadingTemplate() {
    if (this.loading) {
      const e = q2[this.size], r = this.disabled ? Mu.disabled : Mu[this.variant];
      return w3`<wui-loading-spinner color=${r} size=${e}></wui-loading-spinner>`;
    }
    return w3``;
  }
};
mt2.styles = [we2, De2, Z2], Pt2([C3()], mt2.prototype, "size", void 0), Pt2([C3({ type: Boolean })], mt2.prototype, "disabled", void 0), Pt2([C3({ type: Boolean })], mt2.prototype, "fullWidth", void 0), Pt2([C3({ type: Boolean })], mt2.prototype, "loading", void 0), Pt2([C3()], mt2.prototype, "variant", void 0), Pt2([C3({ type: Boolean })], mt2.prototype, "hasIconLeft", void 0), Pt2([C3({ type: Boolean })], mt2.prototype, "hasIconRight", void 0), Pt2([C3()], mt2.prototype, "borderRadius", void 0), Pt2([C3()], mt2.prototype, "textVariant", void 0), mt2 = Pt2([F2("wui-button")], mt2);
var K2 = te2`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;
var zs = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var kn = class extends V2 {
  constructor() {
    super(...arguments), this.tabIdx = void 0, this.disabled = false, this.color = "inherit";
  }
  render() {
    return w3`
      <button ?disabled=${this.disabled} tabindex=${re2(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
  }
};
kn.styles = [we2, De2, K2], zs([C3()], kn.prototype, "tabIdx", void 0), zs([C3({ type: Boolean })], kn.prototype, "disabled", void 0), zs([C3()], kn.prototype, "color", void 0), kn = zs([F2("wui-link")], kn);
var Y2 = te2`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var Du = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Ws = class extends V2 {
  constructor() {
    super(...arguments), this.radius = 36;
  }
  render() {
    return this.svgLoaderTemplate();
  }
  svgLoaderTemplate() {
    const e = this.radius > 50 ? 50 : this.radius, n = 36 - e, i = 116 + n, o4 = 245 + n, s = 360 + n * 1.75;
    return w3`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o4}"
          stroke-dashoffset=${s}
        />
      </svg>
    `;
  }
};
Ws.styles = [we2, Y2], Du([C3({ type: Number })], Ws.prototype, "radius", void 0), Ws = Du([F2("wui-loading-thumbnail")], Ws);
var X2 = te2`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;
var Hr = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Qt2 = class extends V2 {
  constructor() {
    super(...arguments), this.variant = "accent", this.imageSrc = "", this.disabled = false, this.icon = "externalLink", this.size = "md", this.text = "";
  }
  render() {
    const e = this.size === "sm" ? "small-600" : "paragraph-600";
    return w3`
      <button
        class=${this.disabled ? "disabled" : ""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc ? w3`<wui-image src=${this.imageSrc}></wui-image>` : null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `;
  }
};
Qt2.styles = [we2, De2, X2], Hr([C3()], Qt2.prototype, "variant", void 0), Hr([C3()], Qt2.prototype, "imageSrc", void 0), Hr([C3({ type: Boolean })], Qt2.prototype, "disabled", void 0), Hr([C3()], Qt2.prototype, "icon", void 0), Hr([C3()], Qt2.prototype, "size", void 0), Hr([C3()], Qt2.prototype, "text", void 0), Qt2 = Hr([F2("wui-chip-button")], Qt2);
var J22 = te2`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;
var js = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Tn = class extends V2 {
  constructor() {
    super(...arguments), this.disabled = false, this.label = "", this.buttonLabel = "";
  }
  render() {
    return w3`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs", "2l", "1xs", "2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `;
  }
};
Tn.styles = [we2, De2, J22], js([C3({ type: Boolean })], Tn.prototype, "disabled", void 0), js([C3()], Tn.prototype, "label", void 0), js([C3()], Tn.prototype, "buttonLabel", void 0), Tn = js([F2("wui-cta-button")], Tn);
var Q2 = te2`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;
var zu = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Fs = class extends V2 {
  constructor() {
    super(...arguments), this.wallet = void 0;
  }
  render() {
    if (!this.wallet) return this.style.display = "none", null;
    const { name: e, app_store: r, play_store: n, chrome_store: i, homepage: o4 } = this.wallet, s = U3.isMobile(), a = U3.isIos(), c4 = U3.isAndroid(), l4 = [r, n, o4, i].filter(Boolean).length > 1, d4 = Me2.getTruncateString({ string: e, charsStart: 12, charsEnd: 0, truncate: "end" });
    return l4 && !s ? w3`
        <wui-cta-button
          label=${`Don't have ${d4}?`}
          buttonLabel="Get"
          @click=${() => D2.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      ` : !l4 && o4 ? w3`
        <wui-cta-button
          label=${`Don't have ${d4}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      ` : r && a ? w3`
        <wui-cta-button
          label=${`Don't have ${d4}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      ` : n && c4 ? w3`
        <wui-cta-button
          label=${`Don't have ${d4}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      ` : (this.style.display = "none", null);
  }
  onAppStore() {
    var _a3;
    ((_a3 = this.wallet) == null ? void 0 : _a3.app_store) && U3.openHref(this.wallet.app_store, "_blank");
  }
  onPlayStore() {
    var _a3;
    ((_a3 = this.wallet) == null ? void 0 : _a3.play_store) && U3.openHref(this.wallet.play_store, "_blank");
  }
  onHomePage() {
    var _a3;
    ((_a3 = this.wallet) == null ? void 0 : _a3.homepage) && U3.openHref(this.wallet.homepage, "_blank");
  }
};
Fs.styles = [Q2], zu([C3({ type: Object })], Fs.prototype, "wallet", void 0), Fs = zu([F2("w3m-mobile-download-links")], Fs);
var ew = te2`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;
var St2 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var ze2 = class extends V2 {
  constructor() {
    var _a3, _b, _c2, _d2, _e3;
    super(), this.wallet = (_a3 = D2.state.data) == null ? void 0 : _a3.wallet, this.connector = (_b = D2.state.data) == null ? void 0 : _b.connector, this.timeout = void 0, this.secondaryBtnIcon = "refresh", this.onConnect = void 0, this.onRender = void 0, this.onAutoConnect = void 0, this.isWalletConnect = true, this.unsubscribe = [], this.imageSrc = Oe2.getWalletImage(this.wallet) ?? Oe2.getConnectorImage(this.connector), this.name = ((_c2 = this.wallet) == null ? void 0 : _c2.name) ?? ((_d2 = this.connector) == null ? void 0 : _d2.name) ?? "Wallet", this.isRetrying = false, this.uri = Y.state.wcUri, this.error = Y.state.wcError, this.ready = false, this.showRetry = false, this.secondaryBtnLabel = "Try again", this.secondaryLabel = "Accept connection request in the wallet", this.buffering = false, this.isLoading = false, this.isMobile = false, this.onRetry = void 0, this.unsubscribe.push(Y.subscribeKey("wcUri", (e) => {
      var _a4;
      this.uri = e, this.isRetrying && this.onRetry && (this.isRetrying = false, (_a4 = this.onConnect) == null ? void 0 : _a4.call(this));
    }), Y.subscribeKey("wcError", (e) => this.error = e), Y.subscribeKey("buffering", (e) => this.buffering = e)), (U3.isTelegram() || U3.isSafari()) && U3.isIos() && Y.state.wcUri && ((_e3 = this.onConnect) == null ? void 0 : _e3.call(this));
  }
  firstUpdated() {
    var _a3;
    (_a3 = this.onAutoConnect) == null ? void 0 : _a3.call(this), this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), clearTimeout(this.timeout);
  }
  render() {
    var _a3;
    (_a3 = this.onRender) == null ? void 0 : _a3.call(this), this.onShowRetry();
    const e = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let r = `Continue in ${this.name}`;
    return this.buffering && (r = "Connecting..."), this.error && (r = "Connection declined"), w3`
      <wui-flex
        data-error=${re2(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${re2(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel ? w3`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying || !this.error && this.buffering || this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            ` : null}
      </wui-flex>

      ${this.isWalletConnect ? w3`
            <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onShowRetry() {
    var _a3, _b;
    this.error && !this.showRetry && (this.showRetry = true, (_b = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("wui-button")) == null ? void 0 : _b.animate([{ opacity: 0 }, { opacity: 1 }], { fill: "forwards", easing: "ease" }));
  }
  onTryAgain() {
    var _a3, _b;
    this.buffering || (Y.setWcError(false), this.onRetry ? (this.isRetrying = true, (_a3 = this.onRetry) == null ? void 0 : _a3.call(this)) : (_b = this.onConnect) == null ? void 0 : _b.call(this));
  }
  loaderTemplate() {
    const e = $e2.state.themeVariables["--w3m-border-radius-master"], r = e ? parseInt(e.replace("px", ""), 10) : 4;
    return w3`<wui-loading-thumbnail radius=${r * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      this.uri && (U3.copyToClopboard(this.uri), Ee3.showSuccess("Link copied"));
    } catch {
      Ee3.showError("Failed to copy");
    }
  }
};
ze2.styles = ew, St2([H2()], ze2.prototype, "isRetrying", void 0), St2([H2()], ze2.prototype, "uri", void 0), St2([H2()], ze2.prototype, "error", void 0), St2([H2()], ze2.prototype, "ready", void 0), St2([H2()], ze2.prototype, "showRetry", void 0), St2([H2()], ze2.prototype, "secondaryBtnLabel", void 0), St2([H2()], ze2.prototype, "secondaryLabel", void 0), St2([H2()], ze2.prototype, "buffering", void 0), St2([H2()], ze2.prototype, "isLoading", void 0), St2([C3({ type: Boolean })], ze2.prototype, "isMobile", void 0), St2([C3()], ze2.prototype, "onRetry", void 0);
var tw = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Wu = class extends ze2 {
  constructor() {
    if (super(), !this.wallet) throw new Error("w3m-connecting-wc-browser: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.onAutoConnect = this.onConnectProxy.bind(this), le2.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "browser" } });
  }
  async onConnectProxy() {
    var _a3;
    try {
      this.error = false;
      const { connectors: e } = j2.state, r = e.find((n) => {
        var _a4, _b, _c2;
        return n.type === "ANNOUNCED" && ((_a4 = n.info) == null ? void 0 : _a4.rdns) === ((_b = this.wallet) == null ? void 0 : _b.rdns) || n.type === "INJECTED" || n.name === ((_c2 = this.wallet) == null ? void 0 : _c2.name);
      });
      if (r) await Y.connectExternal(r, r.chain);
      else throw new Error("w3m-connecting-wc-browser: No connector found");
      he2.close(), le2.sendEvent({ type: "track", event: "CONNECT_SUCCESS", properties: { method: "browser", name: ((_a3 = this.wallet) == null ? void 0 : _a3.name) || "Unknown" } });
    } catch (e) {
      le2.sendEvent({ type: "track", event: "CONNECT_ERROR", properties: { message: (e == null ? void 0 : e.message) ?? "Unknown" } }), this.error = true;
    }
  }
};
Wu = tw([F2("w3m-connecting-wc-browser")], Wu);
var rw = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var ju = class extends ze2 {
  constructor() {
    if (super(), !this.wallet) throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.onRender = this.onRenderProxy.bind(this), le2.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "desktop" } });
  }
  onRenderProxy() {
    var _a3;
    !this.ready && this.uri && (this.ready = true, (_a3 = this.onConnect) == null ? void 0 : _a3.call(this));
  }
  onConnectProxy() {
    var _a3;
    if (((_a3 = this.wallet) == null ? void 0 : _a3.desktop_link) && this.uri) try {
      this.error = false;
      const { desktop_link: e, name: r } = this.wallet, { redirect: n, href: i } = U3.formatNativeUrl(e, this.uri);
      Y.setWcLinking({ name: r, href: i }), Y.setRecentWallet(this.wallet), U3.openHref(n, "_blank");
    } catch {
      this.error = true;
    }
  }
};
ju = rw([F2("w3m-connecting-wc-desktop")], ju);
var nw = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Fu = class extends ze2 {
  constructor() {
    if (super(), this.btnLabelTimeout = void 0, this.labelTimeout = void 0, this.onRender = () => {
      var _a3;
      !this.ready && this.uri && (this.ready = true, (_a3 = this.onConnect) == null ? void 0 : _a3.call(this));
    }, this.onConnect = () => {
      var _a3;
      if (((_a3 = this.wallet) == null ? void 0 : _a3.mobile_link) && this.uri) try {
        this.error = false;
        const { mobile_link: e, name: r } = this.wallet, { redirect: n, href: i } = U3.formatNativeUrl(e, this.uri);
        Y.setWcLinking({ name: r, href: i }), Y.setRecentWallet(this.wallet);
        const o4 = U3.isIframe() ? "_top" : "_self";
        U3.openHref(n, o4), clearTimeout(this.labelTimeout), this.secondaryLabel = Te2.CONNECT_LABELS.MOBILE;
      } catch (e) {
        le2.sendEvent({ type: "track", event: "CONNECT_PROXY_ERROR", properties: { message: e instanceof Error ? e.message : "Error parsing the deeplink", uri: this.uri, mobile_link: this.wallet.mobile_link, name: this.wallet.name } }), this.error = true;
      }
    }, !this.wallet) throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    this.initializeStateAndTimers(), document.addEventListener("visibilitychange", this.onBuffering.bind(this)), le2.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "mobile" } });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("visibilitychange", this.onBuffering.bind(this)), clearTimeout(this.btnLabelTimeout), clearTimeout(this.labelTimeout);
  }
  initializeStateAndTimers() {
    this.secondaryBtnLabel = void 0, this.secondaryLabel = Te2.CONNECT_LABELS.MOBILE, this.btnLabelTimeout = setTimeout(() => {
      this.secondaryBtnLabel = "Try again", this.secondaryLabel = Te2.CONNECT_LABELS.MOBILE;
    }, Te2.FIVE_SEC_MS), this.labelTimeout = setTimeout(() => {
      this.secondaryLabel = "Hold tight... it's taking longer than expected";
    }, Te2.THREE_SEC_MS);
  }
  onBuffering() {
    const e = U3.isIos();
    (document == null ? void 0 : document.visibilityState) === "visible" && !this.error && e && (Y.setBuffering(true), setTimeout(() => {
      Y.setBuffering(false);
    }, 5e3));
  }
  onTryAgain() {
    this.buffering || (clearTimeout(this.btnLabelTimeout), clearTimeout(this.labelTimeout), this.initializeStateAndTimers(), Y.setWcError(false), this.onConnect());
  }
};
Fu = nw([F2("w3m-connecting-wc-mobile")], Fu);
var Bi = {};
var iw = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
};
var Hu = {};
var dt2 = {};
var Ec;
var ow = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
dt2.getSymbolSize = function(e) {
  if (!e) throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
}, dt2.getSymbolTotalCodewords = function(e) {
  return ow[e];
}, dt2.getBCHDigit = function(t) {
  let e = 0;
  for (; t !== 0; ) e++, t >>>= 1;
  return e;
}, dt2.setToSJISFunction = function(e) {
  if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
  Ec = e;
}, dt2.isKanjiModeEnabled = function() {
  return typeof Ec < "u";
}, dt2.toSJIS = function(e) {
  return Ec(e);
};
var Hs = {};
(function(t) {
  t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
  function e(r) {
    if (typeof r != "string") throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  t.isValid = function(n) {
    return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
  }, t.from = function(n, i) {
    if (t.isValid(n)) return n;
    try {
      return e(n);
    } catch {
      return i;
    }
  };
})(Hs);
function Vu() {
  this.buffer = [], this.length = 0;
}
Vu.prototype = { get: function(t) {
  const e = Math.floor(t / 8);
  return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
}, put: function(t, e) {
  for (let r = 0; r < e; r++) this.putBit((t >>> e - r - 1 & 1) === 1);
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(t) {
  const e = Math.floor(this.length / 8);
  this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
} };
var sw = Vu;
function Ri(t) {
  if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
}
Ri.prototype.set = function(t, e, r, n) {
  const i = t * this.size + e;
  this.data[i] = r, n && (this.reservedBit[i] = true);
}, Ri.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
}, Ri.prototype.xor = function(t, e, r) {
  this.data[t * this.size + e] ^= r;
}, Ri.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var aw = Ri;
var Zu = {};
(function(t) {
  const e = dt2.getSymbolSize;
  t.getRowColCoords = function(n) {
    if (n === 1) return [];
    const i = Math.floor(n / 7) + 2, o4 = e(n), s = o4 === 145 ? 26 : Math.ceil((o4 - 13) / (2 * i - 2)) * 2, a = [o4 - 7];
    for (let c4 = 1; c4 < i - 1; c4++) a[c4] = a[c4 - 1] - s;
    return a.push(6), a.reverse();
  }, t.getPositions = function(n) {
    const i = [], o4 = t.getRowColCoords(n), s = o4.length;
    for (let a = 0; a < s; a++) for (let c4 = 0; c4 < s; c4++) a === 0 && c4 === 0 || a === 0 && c4 === s - 1 || a === s - 1 && c4 === 0 || i.push([o4[a], o4[c4]]);
    return i;
  };
})(Zu);
var Gu = {};
var cw = dt2.getSymbolSize;
var qu = 7;
Gu.getPositions = function(e) {
  const r = cw(e);
  return [[0, 0], [r - qu, 0], [0, r - qu]];
};
var Ku = {};
(function(t) {
  t.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
  const e = { N1: 3, N2: 3, N3: 40, N4: 10 };
  t.isValid = function(i) {
    return i != null && i !== "" && !isNaN(i) && i >= 0 && i <= 7;
  }, t.from = function(i) {
    return t.isValid(i) ? parseInt(i, 10) : void 0;
  }, t.getPenaltyN1 = function(i) {
    const o4 = i.size;
    let s = 0, a = 0, c4 = 0, l4 = null, d4 = null;
    for (let u4 = 0; u4 < o4; u4++) {
      a = c4 = 0, l4 = d4 = null;
      for (let h4 = 0; h4 < o4; h4++) {
        let p4 = i.get(u4, h4);
        p4 === l4 ? a++ : (a >= 5 && (s += e.N1 + (a - 5)), l4 = p4, a = 1), p4 = i.get(h4, u4), p4 === d4 ? c4++ : (c4 >= 5 && (s += e.N1 + (c4 - 5)), d4 = p4, c4 = 1);
      }
      a >= 5 && (s += e.N1 + (a - 5)), c4 >= 5 && (s += e.N1 + (c4 - 5));
    }
    return s;
  }, t.getPenaltyN2 = function(i) {
    const o4 = i.size;
    let s = 0;
    for (let a = 0; a < o4 - 1; a++) for (let c4 = 0; c4 < o4 - 1; c4++) {
      const l4 = i.get(a, c4) + i.get(a, c4 + 1) + i.get(a + 1, c4) + i.get(a + 1, c4 + 1);
      (l4 === 4 || l4 === 0) && s++;
    }
    return s * e.N2;
  }, t.getPenaltyN3 = function(i) {
    const o4 = i.size;
    let s = 0, a = 0, c4 = 0;
    for (let l4 = 0; l4 < o4; l4++) {
      a = c4 = 0;
      for (let d4 = 0; d4 < o4; d4++) a = a << 1 & 2047 | i.get(l4, d4), d4 >= 10 && (a === 1488 || a === 93) && s++, c4 = c4 << 1 & 2047 | i.get(d4, l4), d4 >= 10 && (c4 === 1488 || c4 === 93) && s++;
    }
    return s * e.N3;
  }, t.getPenaltyN4 = function(i) {
    let o4 = 0;
    const s = i.data.length;
    for (let c4 = 0; c4 < s; c4++) o4 += i.data[c4];
    return Math.abs(Math.ceil(o4 * 100 / s / 5) - 10) * e.N4;
  };
  function r(n, i, o4) {
    switch (n) {
      case t.Patterns.PATTERN000:
        return (i + o4) % 2 === 0;
      case t.Patterns.PATTERN001:
        return i % 2 === 0;
      case t.Patterns.PATTERN010:
        return o4 % 3 === 0;
      case t.Patterns.PATTERN011:
        return (i + o4) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(o4 / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return i * o4 % 2 + i * o4 % 3 === 0;
      case t.Patterns.PATTERN110:
        return (i * o4 % 2 + i * o4 % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (i * o4 % 3 + (i + o4) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  t.applyMask = function(i, o4) {
    const s = o4.size;
    for (let a = 0; a < s; a++) for (let c4 = 0; c4 < s; c4++) o4.isReserved(c4, a) || o4.xor(c4, a, r(i, c4, a));
  }, t.getBestMask = function(i, o4) {
    const s = Object.keys(t.Patterns).length;
    let a = 0, c4 = 1 / 0;
    for (let l4 = 0; l4 < s; l4++) {
      o4(l4), t.applyMask(l4, i);
      const d4 = t.getPenaltyN1(i) + t.getPenaltyN2(i) + t.getPenaltyN3(i) + t.getPenaltyN4(i);
      t.applyMask(l4, i), d4 < c4 && (c4 = d4, a = l4);
    }
    return a;
  };
})(Ku);
var Vs = {};
var Cr = Hs;
var Zs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
var Gs = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
Vs.getBlocksCount = function(e, r) {
  switch (r) {
    case Cr.L:
      return Zs[(e - 1) * 4 + 0];
    case Cr.M:
      return Zs[(e - 1) * 4 + 1];
    case Cr.Q:
      return Zs[(e - 1) * 4 + 2];
    case Cr.H:
      return Zs[(e - 1) * 4 + 3];
    default:
      return;
  }
}, Vs.getTotalCodewordsCount = function(e, r) {
  switch (r) {
    case Cr.L:
      return Gs[(e - 1) * 4 + 0];
    case Cr.M:
      return Gs[(e - 1) * 4 + 1];
    case Cr.Q:
      return Gs[(e - 1) * 4 + 2];
    case Cr.H:
      return Gs[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var Yu = {};
var qs = {};
var Li = new Uint8Array(512);
var Ks = new Uint8Array(256);
(function() {
  let e = 1;
  for (let r = 0; r < 255; r++) Li[r] = e, Ks[e] = r, e <<= 1, e & 256 && (e ^= 285);
  for (let r = 255; r < 512; r++) Li[r] = Li[r - 255];
})(), qs.log = function(e) {
  if (e < 1) throw new Error("log(" + e + ")");
  return Ks[e];
}, qs.exp = function(e) {
  return Li[e];
}, qs.mul = function(e, r) {
  return e === 0 || r === 0 ? 0 : Li[Ks[e] + Ks[r]];
}, function(t) {
  const e = qs;
  t.mul = function(n, i) {
    const o4 = new Uint8Array(n.length + i.length - 1);
    for (let s = 0; s < n.length; s++) for (let a = 0; a < i.length; a++) o4[s + a] ^= e.mul(n[s], i[a]);
    return o4;
  }, t.mod = function(n, i) {
    let o4 = new Uint8Array(n);
    for (; o4.length - i.length >= 0; ) {
      const s = o4[0];
      for (let c4 = 0; c4 < i.length; c4++) o4[c4] ^= e.mul(i[c4], s);
      let a = 0;
      for (; a < o4.length && o4[a] === 0; ) a++;
      o4 = o4.slice(a);
    }
    return o4;
  }, t.generateECPolynomial = function(n) {
    let i = new Uint8Array([1]);
    for (let o4 = 0; o4 < n; o4++) i = t.mul(i, new Uint8Array([1, e.exp(o4)]));
    return i;
  };
}(Yu);
var Xu = Yu;
function Ac(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
Ac.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = Xu.generateECPolynomial(this.degree);
}, Ac.prototype.encode = function(e) {
  if (!this.genPoly) throw new Error("Encoder not initialized");
  const r = new Uint8Array(e.length + this.degree);
  r.set(e);
  const n = Xu.mod(r, this.genPoly), i = this.degree - n.length;
  if (i > 0) {
    const o4 = new Uint8Array(this.degree);
    return o4.set(n, i), o4;
  }
  return n;
};
var lw = Ac;
var Ju = {};
var yr = {};
var Sc = {};
Sc.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var Bt2 = {};
var Qu = "[0-9]+";
var dw = "[A-Z $%*+\\-./:]+";
var Ui = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Ui = Ui.replace(/u/g, "\\u");
var uw = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Ui + `)(?:.|[\r
]))+`;
Bt2.KANJI = new RegExp(Ui, "g"), Bt2.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), Bt2.BYTE = new RegExp(uw, "g"), Bt2.NUMERIC = new RegExp(Qu, "g"), Bt2.ALPHANUMERIC = new RegExp(dw, "g");
var hw = new RegExp("^" + Ui + "$");
var pw = new RegExp("^" + Qu + "$");
var fw = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Bt2.testKanji = function(e) {
  return hw.test(e);
}, Bt2.testNumeric = function(e) {
  return pw.test(e);
}, Bt2.testAlphanumeric = function(e) {
  return fw.test(e);
}, function(t) {
  const e = Sc, r = Bt2;
  t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }, t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }, t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }, t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }, t.MIXED = { bit: -1 }, t.getCharCountIndicator = function(o4, s) {
    if (!o4.ccBits) throw new Error("Invalid mode: " + o4);
    if (!e.isValid(s)) throw new Error("Invalid version: " + s);
    return s >= 1 && s < 10 ? o4.ccBits[0] : s < 27 ? o4.ccBits[1] : o4.ccBits[2];
  }, t.getBestModeForData = function(o4) {
    return r.testNumeric(o4) ? t.NUMERIC : r.testAlphanumeric(o4) ? t.ALPHANUMERIC : r.testKanji(o4) ? t.KANJI : t.BYTE;
  }, t.toString = function(o4) {
    if (o4 && o4.id) return o4.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(o4) {
    return o4 && o4.bit && o4.ccBits;
  };
  function n(i) {
    if (typeof i != "string") throw new Error("Param is not a string");
    switch (i.toLowerCase()) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + i);
    }
  }
  t.from = function(o4, s) {
    if (t.isValid(o4)) return o4;
    try {
      return n(o4);
    } catch {
      return s;
    }
  };
}(yr), function(t) {
  const e = dt2, r = Vs, n = Hs, i = yr, o4 = Sc, s = 7973, a = e.getBCHDigit(s);
  function c4(h4, p4, v4) {
    for (let m4 = 1; m4 <= 40; m4++) if (p4 <= t.getCapacity(m4, v4, h4)) return m4;
  }
  function l4(h4, p4) {
    return i.getCharCountIndicator(h4, p4) + 4;
  }
  function d4(h4, p4) {
    let v4 = 0;
    return h4.forEach(function(m4) {
      const g4 = l4(m4.mode, p4);
      v4 += g4 + m4.getBitsLength();
    }), v4;
  }
  function u4(h4, p4) {
    for (let v4 = 1; v4 <= 40; v4++) if (d4(h4, v4) <= t.getCapacity(v4, p4, i.MIXED)) return v4;
  }
  t.from = function(p4, v4) {
    return o4.isValid(p4) ? parseInt(p4, 10) : v4;
  }, t.getCapacity = function(p4, v4, m4) {
    if (!o4.isValid(p4)) throw new Error("Invalid QR Code version");
    typeof m4 > "u" && (m4 = i.BYTE);
    const g4 = e.getSymbolTotalCodewords(p4), b4 = r.getTotalCodewordsCount(p4, v4), y4 = (g4 - b4) * 8;
    if (m4 === i.MIXED) return y4;
    const x4 = y4 - l4(m4, p4);
    switch (m4) {
      case i.NUMERIC:
        return Math.floor(x4 / 10 * 3);
      case i.ALPHANUMERIC:
        return Math.floor(x4 / 11 * 2);
      case i.KANJI:
        return Math.floor(x4 / 13);
      case i.BYTE:
      default:
        return Math.floor(x4 / 8);
    }
  }, t.getBestVersionForData = function(p4, v4) {
    let m4;
    const g4 = n.from(v4, n.M);
    if (Array.isArray(p4)) {
      if (p4.length > 1) return u4(p4, g4);
      if (p4.length === 0) return 1;
      m4 = p4[0];
    } else m4 = p4;
    return c4(m4.mode, m4.getLength(), g4);
  }, t.getEncodedBits = function(p4) {
    if (!o4.isValid(p4) || p4 < 7) throw new Error("Invalid QR Code version");
    let v4 = p4 << 12;
    for (; e.getBCHDigit(v4) - a >= 0; ) v4 ^= s << e.getBCHDigit(v4) - a;
    return p4 << 12 | v4;
  };
}(Ju);
var e0 = {};
var _c = dt2;
var t0 = 1335;
var gw = 21522;
var r0 = _c.getBCHDigit(t0);
e0.getEncodedBits = function(e, r) {
  const n = e.bit << 3 | r;
  let i = n << 10;
  for (; _c.getBCHDigit(i) - r0 >= 0; ) i ^= t0 << _c.getBCHDigit(i) - r0;
  return (n << 10 | i) ^ gw;
};
var n0 = {};
var ww = yr;
function On(t) {
  this.mode = ww.NUMERIC, this.data = t.toString();
}
On.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
}, On.prototype.getLength = function() {
  return this.data.length;
}, On.prototype.getBitsLength = function() {
  return On.getBitsLength(this.data.length);
}, On.prototype.write = function(e) {
  let r, n, i;
  for (r = 0; r + 3 <= this.data.length; r += 3) n = this.data.substr(r, 3), i = parseInt(n, 10), e.put(i, 10);
  const o4 = this.data.length - r;
  o4 > 0 && (n = this.data.substr(r), i = parseInt(n, 10), e.put(i, o4 * 3 + 1));
};
var mw = On;
var bw = yr;
var Ic = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
function $n(t) {
  this.mode = bw.ALPHANUMERIC, this.data = t;
}
$n.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
}, $n.prototype.getLength = function() {
  return this.data.length;
}, $n.prototype.getBitsLength = function() {
  return $n.getBitsLength(this.data.length);
}, $n.prototype.write = function(e) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let n = Ic.indexOf(this.data[r]) * 45;
    n += Ic.indexOf(this.data[r + 1]), e.put(n, 11);
  }
  this.data.length % 2 && e.put(Ic.indexOf(this.data[r]), 6);
};
var vw = $n;
var Cw = function(e) {
  for (var r = [], n = e.length, i = 0; i < n; i++) {
    var o4 = e.charCodeAt(i);
    if (o4 >= 55296 && o4 <= 56319 && n > i + 1) {
      var s = e.charCodeAt(i + 1);
      s >= 56320 && s <= 57343 && (o4 = (o4 - 55296) * 1024 + s - 56320 + 65536, i += 1);
    }
    if (o4 < 128) {
      r.push(o4);
      continue;
    }
    if (o4 < 2048) {
      r.push(o4 >> 6 | 192), r.push(o4 & 63 | 128);
      continue;
    }
    if (o4 < 55296 || o4 >= 57344 && o4 < 65536) {
      r.push(o4 >> 12 | 224), r.push(o4 >> 6 & 63 | 128), r.push(o4 & 63 | 128);
      continue;
    }
    if (o4 >= 65536 && o4 <= 1114111) {
      r.push(o4 >> 18 | 240), r.push(o4 >> 12 & 63 | 128), r.push(o4 >> 6 & 63 | 128), r.push(o4 & 63 | 128);
      continue;
    }
    r.push(239, 191, 189);
  }
  return new Uint8Array(r).buffer;
};
var yw = Cw;
var xw = yr;
function Pn(t) {
  this.mode = xw.BYTE, typeof t == "string" && (t = yw(t)), this.data = new Uint8Array(t);
}
Pn.getBitsLength = function(e) {
  return e * 8;
}, Pn.prototype.getLength = function() {
  return this.data.length;
}, Pn.prototype.getBitsLength = function() {
  return Pn.getBitsLength(this.data.length);
}, Pn.prototype.write = function(t) {
  for (let e = 0, r = this.data.length; e < r; e++) t.put(this.data[e], 8);
};
var Ew = Pn;
var Aw = yr;
var Sw = dt2;
function Bn(t) {
  this.mode = Aw.KANJI, this.data = t;
}
Bn.getBitsLength = function(e) {
  return e * 13;
}, Bn.prototype.getLength = function() {
  return this.data.length;
}, Bn.prototype.getBitsLength = function() {
  return Bn.getBitsLength(this.data.length);
}, Bn.prototype.write = function(t) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let r = Sw.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956) r -= 33088;
    else if (r >= 57408 && r <= 60351) r -= 49472;
    else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
    r = (r >>> 8 & 255) * 192 + (r & 255), t.put(r, 13);
  }
};
var _w = Bn;
var i0 = { exports: {} };
(function(t) {
  var e = { single_source_shortest_paths: function(r, n, i) {
    var o4 = {}, s = {};
    s[n] = 0;
    var a = e.PriorityQueue.make();
    a.push(n, 0);
    for (var c4, l4, d4, u4, h4, p4, v4, m4, g4; !a.empty(); ) {
      c4 = a.pop(), l4 = c4.value, u4 = c4.cost, h4 = r[l4] || {};
      for (d4 in h4) h4.hasOwnProperty(d4) && (p4 = h4[d4], v4 = u4 + p4, m4 = s[d4], g4 = typeof s[d4] > "u", (g4 || m4 > v4) && (s[d4] = v4, a.push(d4, v4), o4[d4] = l4));
    }
    if (typeof i < "u" && typeof s[i] > "u") {
      var b4 = ["Could not find a path from ", n, " to ", i, "."].join("");
      throw new Error(b4);
    }
    return o4;
  }, extract_shortest_path_from_predecessor_list: function(r, n) {
    for (var i = [], o4 = n; o4; ) i.push(o4), r[o4], o4 = r[o4];
    return i.reverse(), i;
  }, find_path: function(r, n, i) {
    var o4 = e.single_source_shortest_paths(r, n, i);
    return e.extract_shortest_path_from_predecessor_list(o4, i);
  }, PriorityQueue: { make: function(r) {
    var n = e.PriorityQueue, i = {}, o4;
    r = r || {};
    for (o4 in n) n.hasOwnProperty(o4) && (i[o4] = n[o4]);
    return i.queue = [], i.sorter = r.sorter || n.default_sorter, i;
  }, default_sorter: function(r, n) {
    return r.cost - n.cost;
  }, push: function(r, n) {
    var i = { value: r, cost: n };
    this.queue.push(i), this.queue.sort(this.sorter);
  }, pop: function() {
    return this.queue.shift();
  }, empty: function() {
    return this.queue.length === 0;
  } } };
  t.exports = e;
})(i0), function(t) {
  const e = yr, r = mw, n = vw, i = Ew, o4 = _w, s = Bt2, a = dt2, c4 = i0.exports;
  function l4(b4) {
    return unescape(encodeURIComponent(b4)).length;
  }
  function d4(b4, y4, x4) {
    const E4 = [];
    let I4;
    for (; (I4 = b4.exec(x4)) !== null; ) E4.push({ data: I4[0], index: I4.index, mode: y4, length: I4[0].length });
    return E4;
  }
  function u4(b4) {
    const y4 = d4(s.NUMERIC, e.NUMERIC, b4), x4 = d4(s.ALPHANUMERIC, e.ALPHANUMERIC, b4);
    let E4, I4;
    return a.isKanjiModeEnabled() ? (E4 = d4(s.BYTE, e.BYTE, b4), I4 = d4(s.KANJI, e.KANJI, b4)) : (E4 = d4(s.BYTE_KANJI, e.BYTE, b4), I4 = []), y4.concat(x4, E4, I4).sort(function(L4, Z) {
      return L4.index - Z.index;
    }).map(function(L4) {
      return { data: L4.data, mode: L4.mode, length: L4.length };
    });
  }
  function h4(b4, y4) {
    switch (y4) {
      case e.NUMERIC:
        return r.getBitsLength(b4);
      case e.ALPHANUMERIC:
        return n.getBitsLength(b4);
      case e.KANJI:
        return o4.getBitsLength(b4);
      case e.BYTE:
        return i.getBitsLength(b4);
    }
  }
  function p4(b4) {
    return b4.reduce(function(y4, x4) {
      const E4 = y4.length - 1 >= 0 ? y4[y4.length - 1] : null;
      return E4 && E4.mode === x4.mode ? (y4[y4.length - 1].data += x4.data, y4) : (y4.push(x4), y4);
    }, []);
  }
  function v4(b4) {
    const y4 = [];
    for (let x4 = 0; x4 < b4.length; x4++) {
      const E4 = b4[x4];
      switch (E4.mode) {
        case e.NUMERIC:
          y4.push([E4, { data: E4.data, mode: e.ALPHANUMERIC, length: E4.length }, { data: E4.data, mode: e.BYTE, length: E4.length }]);
          break;
        case e.ALPHANUMERIC:
          y4.push([E4, { data: E4.data, mode: e.BYTE, length: E4.length }]);
          break;
        case e.KANJI:
          y4.push([E4, { data: E4.data, mode: e.BYTE, length: l4(E4.data) }]);
          break;
        case e.BYTE:
          y4.push([{ data: E4.data, mode: e.BYTE, length: l4(E4.data) }]);
      }
    }
    return y4;
  }
  function m4(b4, y4) {
    const x4 = {}, E4 = { start: {} };
    let I4 = ["start"];
    for (let $4 = 0; $4 < b4.length; $4++) {
      const L4 = b4[$4], Z = [];
      for (let B = 0; B < L4.length; B++) {
        const R = L4[B], N4 = "" + $4 + B;
        Z.push(N4), x4[N4] = { node: R, lastCount: 0 }, E4[N4] = {};
        for (let ee2 = 0; ee2 < I4.length; ee2++) {
          const pe2 = I4[ee2];
          x4[pe2] && x4[pe2].node.mode === R.mode ? (E4[pe2][N4] = h4(x4[pe2].lastCount + R.length, R.mode) - h4(x4[pe2].lastCount, R.mode), x4[pe2].lastCount += R.length) : (x4[pe2] && (x4[pe2].lastCount = R.length), E4[pe2][N4] = h4(R.length, R.mode) + 4 + e.getCharCountIndicator(R.mode, y4));
        }
      }
      I4 = Z;
    }
    for (let $4 = 0; $4 < I4.length; $4++) E4[I4[$4]].end = 0;
    return { map: E4, table: x4 };
  }
  function g4(b4, y4) {
    let x4;
    const E4 = e.getBestModeForData(b4);
    if (x4 = e.from(y4, E4), x4 !== e.BYTE && x4.bit < E4.bit) throw new Error('"' + b4 + '" cannot be encoded with mode ' + e.toString(x4) + `.
 Suggested mode is: ` + e.toString(E4));
    switch (x4 === e.KANJI && !a.isKanjiModeEnabled() && (x4 = e.BYTE), x4) {
      case e.NUMERIC:
        return new r(b4);
      case e.ALPHANUMERIC:
        return new n(b4);
      case e.KANJI:
        return new o4(b4);
      case e.BYTE:
        return new i(b4);
    }
  }
  t.fromArray = function(y4) {
    return y4.reduce(function(x4, E4) {
      return typeof E4 == "string" ? x4.push(g4(E4, null)) : E4.data && x4.push(g4(E4.data, E4.mode)), x4;
    }, []);
  }, t.fromString = function(y4, x4) {
    const E4 = u4(y4, a.isKanjiModeEnabled()), I4 = v4(E4), $4 = m4(I4, x4), L4 = c4.find_path($4.map, "start", "end"), Z = [];
    for (let B = 1; B < L4.length - 1; B++) Z.push($4.table[L4[B]].node);
    return t.fromArray(p4(Z));
  }, t.rawSplit = function(y4) {
    return t.fromArray(u4(y4, a.isKanjiModeEnabled()));
  };
}(n0);
var Ys = dt2;
var Nc = Hs;
var Iw = sw;
var Nw = aw;
var kw = Zu;
var Tw = Gu;
var kc = Ku;
var Tc = Vs;
var Ow = lw;
var Xs = Ju;
var $w = e0;
var Pw = yr;
var Oc = n0;
function Bw(t, e) {
  const r = t.size, n = Tw.getPositions(e);
  for (let i = 0; i < n.length; i++) {
    const o4 = n[i][0], s = n[i][1];
    for (let a = -1; a <= 7; a++) if (!(o4 + a <= -1 || r <= o4 + a)) for (let c4 = -1; c4 <= 7; c4++) s + c4 <= -1 || r <= s + c4 || (a >= 0 && a <= 6 && (c4 === 0 || c4 === 6) || c4 >= 0 && c4 <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && c4 >= 2 && c4 <= 4 ? t.set(o4 + a, s + c4, true, true) : t.set(o4 + a, s + c4, false, true));
  }
}
function Rw(t) {
  const e = t.size;
  for (let r = 8; r < e - 8; r++) {
    const n = r % 2 === 0;
    t.set(r, 6, n, true), t.set(6, r, n, true);
  }
}
function Lw(t, e) {
  const r = kw.getPositions(e);
  for (let n = 0; n < r.length; n++) {
    const i = r[n][0], o4 = r[n][1];
    for (let s = -2; s <= 2; s++) for (let a = -2; a <= 2; a++) s === -2 || s === 2 || a === -2 || a === 2 || s === 0 && a === 0 ? t.set(i + s, o4 + a, true, true) : t.set(i + s, o4 + a, false, true);
  }
}
function Uw(t, e) {
  const r = t.size, n = Xs.getEncodedBits(e);
  let i, o4, s;
  for (let a = 0; a < 18; a++) i = Math.floor(a / 3), o4 = a % 3 + r - 8 - 3, s = (n >> a & 1) === 1, t.set(i, o4, s, true), t.set(o4, i, s, true);
}
function $c(t, e, r) {
  const n = t.size, i = $w.getEncodedBits(e, r);
  let o4, s;
  for (o4 = 0; o4 < 15; o4++) s = (i >> o4 & 1) === 1, o4 < 6 ? t.set(o4, 8, s, true) : o4 < 8 ? t.set(o4 + 1, 8, s, true) : t.set(n - 15 + o4, 8, s, true), o4 < 8 ? t.set(8, n - o4 - 1, s, true) : o4 < 9 ? t.set(8, 15 - o4 - 1 + 1, s, true) : t.set(8, 15 - o4 - 1, s, true);
  t.set(n - 8, 8, 1, true);
}
function Mw(t, e) {
  const r = t.size;
  let n = -1, i = r - 1, o4 = 7, s = 0;
  for (let a = r - 1; a > 0; a -= 2) for (a === 6 && a--; ; ) {
    for (let c4 = 0; c4 < 2; c4++) if (!t.isReserved(i, a - c4)) {
      let l4 = false;
      s < e.length && (l4 = (e[s] >>> o4 & 1) === 1), t.set(i, a - c4, l4), o4--, o4 === -1 && (s++, o4 = 7);
    }
    if (i += n, i < 0 || r <= i) {
      i -= n, n = -n;
      break;
    }
  }
}
function Dw(t, e, r) {
  const n = new Iw();
  r.forEach(function(c4) {
    n.put(c4.mode.bit, 4), n.put(c4.getLength(), Pw.getCharCountIndicator(c4.mode, t)), c4.write(n);
  });
  const i = Ys.getSymbolTotalCodewords(t), o4 = Tc.getTotalCodewordsCount(t, e), s = (i - o4) * 8;
  for (n.getLengthInBits() + 4 <= s && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
  const a = (s - n.getLengthInBits()) / 8;
  for (let c4 = 0; c4 < a; c4++) n.put(c4 % 2 ? 17 : 236, 8);
  return zw(n, t, e);
}
function zw(t, e, r) {
  const n = Ys.getSymbolTotalCodewords(e), i = Tc.getTotalCodewordsCount(e, r), o4 = n - i, s = Tc.getBlocksCount(e, r), a = n % s, c4 = s - a, l4 = Math.floor(n / s), d4 = Math.floor(o4 / s), u4 = d4 + 1, h4 = l4 - d4, p4 = new Ow(h4);
  let v4 = 0;
  const m4 = new Array(s), g4 = new Array(s);
  let b4 = 0;
  const y4 = new Uint8Array(t.buffer);
  for (let L4 = 0; L4 < s; L4++) {
    const Z = L4 < c4 ? d4 : u4;
    m4[L4] = y4.slice(v4, v4 + Z), g4[L4] = p4.encode(m4[L4]), v4 += Z, b4 = Math.max(b4, Z);
  }
  const x4 = new Uint8Array(n);
  let E4 = 0, I4, $4;
  for (I4 = 0; I4 < b4; I4++) for ($4 = 0; $4 < s; $4++) I4 < m4[$4].length && (x4[E4++] = m4[$4][I4]);
  for (I4 = 0; I4 < h4; I4++) for ($4 = 0; $4 < s; $4++) x4[E4++] = g4[$4][I4];
  return x4;
}
function Ww(t, e, r, n) {
  let i;
  if (Array.isArray(t)) i = Oc.fromArray(t);
  else if (typeof t == "string") {
    let l4 = e;
    if (!l4) {
      const d4 = Oc.rawSplit(t);
      l4 = Xs.getBestVersionForData(d4, r);
    }
    i = Oc.fromString(t, l4 || 40);
  } else throw new Error("Invalid data");
  const o4 = Xs.getBestVersionForData(i, r);
  if (!o4) throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e) e = o4;
  else if (e < o4) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + o4 + `.
`);
  const s = Dw(e, r, i), a = Ys.getSymbolSize(e), c4 = new Nw(a);
  return Bw(c4, e), Rw(c4), Lw(c4, e), $c(c4, r, 0), e >= 7 && Uw(c4, e), Mw(c4, s), isNaN(n) && (n = kc.getBestMask(c4, $c.bind(null, c4, r))), kc.applyMask(n, c4), $c(c4, r, n), { modules: c4, version: e, errorCorrectionLevel: r, maskPattern: n, segments: i };
}
Hu.create = function(e, r) {
  if (typeof e > "u" || e === "") throw new Error("No input text");
  let n = Nc.M, i, o4;
  return typeof r < "u" && (n = Nc.from(r.errorCorrectionLevel, Nc.M), i = Xs.from(r.version), o4 = kc.from(r.maskPattern), r.toSJISFunc && Ys.setToSJISFunction(r.toSJISFunc)), Ww(e, i, n, o4);
};
var o0 = {};
var Pc = {};
(function(t) {
  function e(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string") throw new Error("Color should be defined as hex string");
    let n = r.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8) throw new Error("Invalid hex color: " + r);
    (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(o4) {
      return [o4, o4];
    }))), n.length === 6 && n.push("F", "F");
    const i = parseInt(n.join(""), 16);
    return { r: i >> 24 & 255, g: i >> 16 & 255, b: i >> 8 & 255, a: i & 255, hex: "#" + n.slice(0, 6).join("") };
  }
  t.getOptions = function(n) {
    n || (n = {}), n.color || (n.color = {});
    const i = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, o4 = n.width && n.width >= 21 ? n.width : void 0, s = n.scale || 4;
    return { width: o4, scale: o4 ? 4 : s, margin: i, color: { dark: e(n.color.dark || "#000000ff"), light: e(n.color.light || "#ffffffff") }, type: n.type, rendererOpts: n.rendererOpts || {} };
  }, t.getScale = function(n, i) {
    return i.width && i.width >= n + i.margin * 2 ? i.width / (n + i.margin * 2) : i.scale;
  }, t.getImageWidth = function(n, i) {
    const o4 = t.getScale(n, i);
    return Math.floor((n + i.margin * 2) * o4);
  }, t.qrToImageData = function(n, i, o4) {
    const s = i.modules.size, a = i.modules.data, c4 = t.getScale(s, o4), l4 = Math.floor((s + o4.margin * 2) * c4), d4 = o4.margin * c4, u4 = [o4.color.light, o4.color.dark];
    for (let h4 = 0; h4 < l4; h4++) for (let p4 = 0; p4 < l4; p4++) {
      let v4 = (h4 * l4 + p4) * 4, m4 = o4.color.light;
      if (h4 >= d4 && p4 >= d4 && h4 < l4 - d4 && p4 < l4 - d4) {
        const g4 = Math.floor((h4 - d4) / c4), b4 = Math.floor((p4 - d4) / c4);
        m4 = u4[a[g4 * s + b4] ? 1 : 0];
      }
      n[v4++] = m4.r, n[v4++] = m4.g, n[v4++] = m4.b, n[v4] = m4.a;
    }
  };
})(Pc), function(t) {
  const e = Pc;
  function r(i, o4, s) {
    i.clearRect(0, 0, o4.width, o4.height), o4.style || (o4.style = {}), o4.height = s, o4.width = s, o4.style.height = s + "px", o4.style.width = s + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(o4, s, a) {
    let c4 = a, l4 = s;
    typeof c4 > "u" && (!s || !s.getContext) && (c4 = s, s = void 0), s || (l4 = n()), c4 = e.getOptions(c4);
    const d4 = e.getImageWidth(o4.modules.size, c4), u4 = l4.getContext("2d"), h4 = u4.createImageData(d4, d4);
    return e.qrToImageData(h4.data, o4, c4), r(u4, l4, d4), u4.putImageData(h4, 0, 0), l4;
  }, t.renderToDataURL = function(o4, s, a) {
    let c4 = a;
    typeof c4 > "u" && (!s || !s.getContext) && (c4 = s, s = void 0), c4 || (c4 = {});
    const l4 = t.render(o4, s, c4), d4 = c4.type || "image/png", u4 = c4.rendererOpts || {};
    return l4.toDataURL(d4, u4.quality);
  };
}(o0);
var s0 = {};
var jw = Pc;
function a0(t, e) {
  const r = t.a / 255, n = e + '="' + t.hex + '"';
  return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function Bc(t, e, r) {
  let n = t + e;
  return typeof r < "u" && (n += " " + r), n;
}
function Fw(t, e, r) {
  let n = "", i = 0, o4 = false, s = 0;
  for (let a = 0; a < t.length; a++) {
    const c4 = Math.floor(a % e), l4 = Math.floor(a / e);
    !c4 && !o4 && (o4 = true), t[a] ? (s++, a > 0 && c4 > 0 && t[a - 1] || (n += o4 ? Bc("M", c4 + r, 0.5 + l4 + r) : Bc("m", i, 0), i = 0, o4 = false), c4 + 1 < e && t[a + 1] || (n += Bc("h", s), s = 0)) : i++;
  }
  return n;
}
s0.render = function(e, r, n) {
  const i = jw.getOptions(r), o4 = e.modules.size, s = e.modules.data, a = o4 + i.margin * 2, c4 = i.color.light.a ? "<path " + a0(i.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "", l4 = "<path " + a0(i.color.dark, "stroke") + ' d="' + Fw(s, o4, i.margin) + '"/>', d4 = 'viewBox="0 0 ' + a + " " + a + '"', h4 = '<svg xmlns="http://www.w3.org/2000/svg" ' + (i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "") + d4 + ' shape-rendering="crispEdges">' + c4 + l4 + `</svg>
`;
  return typeof n == "function" && n(null, h4), h4;
};
var Hw = iw;
var Rc = Hu;
var c0 = o0;
var Vw = s0;
function Lc(t, e, r, n, i) {
  const o4 = [].slice.call(arguments, 1), s = o4.length, a = typeof o4[s - 1] == "function";
  if (!a && !Hw()) throw new Error("Callback required as last argument");
  if (a) {
    if (s < 2) throw new Error("Too few arguments provided");
    s === 2 ? (i = r, r = e, e = n = void 0) : s === 3 && (e.getContext && typeof i > "u" ? (i = n, n = void 0) : (i = n, n = r, r = e, e = void 0));
  } else {
    if (s < 1) throw new Error("Too few arguments provided");
    return s === 1 ? (r = e, e = n = void 0) : s === 2 && !e.getContext && (n = r, r = e, e = void 0), new Promise(function(c4, l4) {
      try {
        const d4 = Rc.create(r, n);
        c4(t(d4, e, n));
      } catch (d4) {
        l4(d4);
      }
    });
  }
  try {
    const c4 = Rc.create(r, n);
    i(null, t(c4, e, n));
  } catch (c4) {
    i(c4);
  }
}
Bi.create = Rc.create, Bi.toCanvas = Lc.bind(null, c0.render), Bi.toDataURL = Lc.bind(null, c0.renderToDataURL), Bi.toString = Lc.bind(null, function(t, e, r) {
  return Vw.render(t, r);
});
var Zw = 0.1;
var l0 = 2.5;
var er = 7;
function Uc(t, e, r) {
  return t === e ? false : (t - e < 0 ? e - t : t - e) <= r + Zw;
}
function Gw(t, e) {
  const r = Array.prototype.slice.call(Bi.create(t, { errorCorrectionLevel: e }).modules.data, 0), n = Math.sqrt(r.length);
  return r.reduce((i, o4, s) => (s % n === 0 ? i.push([o4]) : i[i.length - 1].push(o4)) && i, []);
}
var qw = { generate({ uri: t, size: e, logoSize: r, dotColor: n = "#141414" }) {
  const i = "transparent", s = [], a = Gw(t, "Q"), c4 = e / a.length, l4 = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }];
  l4.forEach(({ x: m4, y: g4 }) => {
    const b4 = (a.length - er) * c4 * m4, y4 = (a.length - er) * c4 * g4, x4 = 0.45;
    for (let E4 = 0; E4 < l4.length; E4 += 1) {
      const I4 = c4 * (er - E4 * 2);
      s.push(M`
            <rect
              fill=${E4 === 2 ? n : i}
              width=${E4 === 0 ? I4 - 5 : I4}
              rx= ${E4 === 0 ? (I4 - 5) * x4 : I4 * x4}
              ry= ${E4 === 0 ? (I4 - 5) * x4 : I4 * x4}
              stroke=${n}
              stroke-width=${E4 === 0 ? 5 : 0}
              height=${E4 === 0 ? I4 - 5 : I4}
              x= ${E4 === 0 ? y4 + c4 * E4 + 5 / 2 : y4 + c4 * E4}
              y= ${E4 === 0 ? b4 + c4 * E4 + 5 / 2 : b4 + c4 * E4}
            />
          `);
    }
  });
  const d4 = Math.floor((r + 25) / c4), u4 = a.length / 2 - d4 / 2, h4 = a.length / 2 + d4 / 2 - 1, p4 = [];
  a.forEach((m4, g4) => {
    m4.forEach((b4, y4) => {
      if (a[g4][y4] && !(g4 < er && y4 < er || g4 > a.length - (er + 1) && y4 < er || g4 < er && y4 > a.length - (er + 1)) && !(g4 > u4 && g4 < h4 && y4 > u4 && y4 < h4)) {
        const x4 = g4 * c4 + c4 / 2, E4 = y4 * c4 + c4 / 2;
        p4.push([x4, E4]);
      }
    });
  });
  const v4 = {};
  return p4.forEach(([m4, g4]) => {
    var _a3;
    v4[m4] ? (_a3 = v4[m4]) == null ? void 0 : _a3.push(g4) : v4[m4] = [g4];
  }), Object.entries(v4).map(([m4, g4]) => {
    const b4 = g4.filter((y4) => g4.every((x4) => !Uc(y4, x4, c4)));
    return [Number(m4), b4];
  }).forEach(([m4, g4]) => {
    g4.forEach((b4) => {
      s.push(M`<circle cx=${m4} cy=${b4} fill=${n} r=${c4 / l0} />`);
    });
  }), Object.entries(v4).filter(([m4, g4]) => g4.length > 1).map(([m4, g4]) => {
    const b4 = g4.filter((y4) => g4.some((x4) => Uc(y4, x4, c4)));
    return [Number(m4), b4];
  }).map(([m4, g4]) => {
    g4.sort((y4, x4) => y4 < x4 ? -1 : 1);
    const b4 = [];
    for (const y4 of g4) {
      const x4 = b4.find((E4) => E4.some((I4) => Uc(y4, I4, c4)));
      x4 ? x4.push(y4) : b4.push([y4]);
    }
    return [m4, b4.map((y4) => [y4[0], y4[y4.length - 1]])];
  }).forEach(([m4, g4]) => {
    g4.forEach(([b4, y4]) => {
      s.push(M`
              <line
                x1=${m4}
                x2=${m4}
                y1=${b4}
                y2=${y4}
                stroke=${n}
                stroke-width=${c4 / (l0 / 2)}
                stroke-linecap="round"
              />
            `);
    });
  }), s;
} };
var Kw = te2`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;
var tr = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Yw = "#3396ff";
var _t2 = class extends V2 {
  constructor() {
    super(...arguments), this.uri = "", this.size = 0, this.theme = "dark", this.imageSrc = void 0, this.alt = void 0, this.arenaClear = void 0, this.farcaster = void 0;
  }
  render() {
    return this.dataset.theme = this.theme, this.dataset.clear = String(this.arenaClear), this.style.cssText = `
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color ?? Yw}
    `, w3`${this.templateVisual()} ${this.templateSvg()}`;
  }
  templateSvg() {
    const e = this.theme === "light" ? this.size : this.size - 32;
    return M`
      <svg height=${e} width=${e}>
        ${qw.generate({ uri: this.uri, size: e, logoSize: this.arenaClear ? 0 : e / 4, dotColor: this.color })}
      </svg>
    `;
  }
  templateVisual() {
    return this.imageSrc ? w3`<wui-image src=${this.imageSrc} alt=${this.alt ?? "logo"}></wui-image>` : this.farcaster ? w3`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>` : w3`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
  }
};
_t2.styles = [we2, Kw], tr([C3()], _t2.prototype, "uri", void 0), tr([C3({ type: Number })], _t2.prototype, "size", void 0), tr([C3()], _t2.prototype, "theme", void 0), tr([C3()], _t2.prototype, "imageSrc", void 0), tr([C3()], _t2.prototype, "alt", void 0), tr([C3()], _t2.prototype, "color", void 0), tr([C3({ type: Boolean })], _t2.prototype, "arenaClear", void 0), tr([C3({ type: Boolean })], _t2.prototype, "farcaster", void 0), _t2 = tr([F2("wui-qr-code")], _t2);
var Xw = te2`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;
var Mi = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Vr = class extends V2 {
  constructor() {
    super(...arguments), this.width = "", this.height = "", this.borderRadius = "m", this.variant = "default";
  }
  render() {
    return this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `, w3`<slot></slot>`;
  }
};
Vr.styles = [Xw], Mi([C3()], Vr.prototype, "width", void 0), Mi([C3()], Vr.prototype, "height", void 0), Mi([C3()], Vr.prototype, "borderRadius", void 0), Mi([C3()], Vr.prototype, "variant", void 0), Vr = Mi([F2("wui-shimmer")], Vr);
var Jw = te2`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;
var Qw = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Mc = class extends V2 {
  render() {
    return w3`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0", "0", "l", "0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `;
  }
};
Mc.styles = [we2, De2, Jw], Mc = Qw([F2("wui-ux-by-reown")], Mc);
var em = te2`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;
var tm = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Dc = class extends ze2 {
  constructor() {
    var _a3;
    super(), this.forceUpdate = () => {
      this.requestUpdate();
    }, window.addEventListener("resize", this.forceUpdate), le2.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: ((_a3 = this.wallet) == null ? void 0 : _a3.name) ?? "WalletConnect", platform: "qrcode" } });
  }
  disconnectedCallback() {
    var _a3;
    super.disconnectedCallback(), (_a3 = this.unsubscribe) == null ? void 0 : _a3.forEach((e) => e()), window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    return this.onRenderProxy(), w3`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    !this.ready && this.uri && (this.timeout = setTimeout(() => {
      this.ready = true;
    }, 200));
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) return null;
    const e = this.getBoundingClientRect().width - 40, r = this.wallet ? this.wallet.name : void 0;
    return Y.setWcLinking(void 0), Y.setRecentWallet(this.wallet), w3` <wui-qr-code
      size=${e}
      theme=${$e2.state.themeMode}
      uri=${this.uri}
      imageSrc=${re2(Oe2.getWalletImage(this.wallet))}
      color=${re2($e2.state.themeVariables["--w3m-qr-color"])}
      alt=${re2(r)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const e = !this.uri || !this.ready;
    return w3`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
  }
};
Dc.styles = em, Dc = tm([F2("w3m-connecting-wc-qrcode")], Dc);
var rm = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var d0 = class extends V2 {
  constructor() {
    var _a3;
    if (super(), this.wallet = (_a3 = D2.state.data) == null ? void 0 : _a3.wallet, !this.wallet) throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    le2.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "browser" } });
  }
  render() {
    return w3`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${re2(Oe2.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
d0 = rm([F2("w3m-connecting-wc-unsupported")], d0);
var u0 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var zc = class extends ze2 {
  constructor() {
    if (super(), this.isLoading = true, !this.wallet) throw new Error("w3m-connecting-wc-web: No wallet provided");
    this.onConnect = this.onConnectProxy.bind(this), this.secondaryBtnLabel = "Open", this.secondaryLabel = "Open and continue in a new browser tab", this.secondaryBtnIcon = "externalLink", this.updateLoadingState(), this.unsubscribe.push(Y.subscribeKey("wcUri", () => {
      this.updateLoadingState();
    })), le2.sendEvent({ type: "track", event: "SELECT_WALLET", properties: { name: this.wallet.name, platform: "web" } });
  }
  updateLoadingState() {
    this.isLoading = !this.uri;
  }
  onConnectProxy() {
    var _a3;
    if (((_a3 = this.wallet) == null ? void 0 : _a3.webapp_link) && this.uri) try {
      this.error = false;
      const { webapp_link: e, name: r } = this.wallet, { redirect: n, href: i } = U3.formatUniversalUrl(e, this.uri);
      Y.setWcLinking({ name: r, href: i }), Y.setRecentWallet(this.wallet), U3.openHref(n, "_blank");
    } catch {
      this.error = true;
    }
  }
};
u0([H2()], zc.prototype, "isLoading", void 0), zc = u0([F2("w3m-connecting-wc-web")], zc);
var Js = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Di = class extends V2 {
  constructor() {
    var _a3;
    super(), this.wallet = (_a3 = D2.state.data) == null ? void 0 : _a3.wallet, this.platform = void 0, this.platforms = [], this.isSiwxEnabled = !!T2.state.siwx, this.determinePlatforms(), this.initializeConnection();
  }
  render() {
    return w3`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `;
  }
  async initializeConnection(e = false) {
    if (!(this.platform === "browser" || T2.state.manualWCControl && !e)) try {
      const { wcPairingExpiry: r, status: n } = Y.state;
      (e || T2.state.enableEmbedded || U3.isPairingExpired(r) || n === "connecting") && (await Y.connectWalletConnect(), this.isSiwxEnabled || he2.close());
    } catch (r) {
      le2.sendEvent({ type: "track", event: "CONNECT_ERROR", properties: { message: (r == null ? void 0 : r.message) ?? "Unknown" } }), Y.setWcError(true), Ee3.showError(r.message ?? "Connection error"), Y.resetWcConnection(), D2.goBack();
    }
  }
  determinePlatforms() {
    if (!this.wallet) {
      this.platforms.push("qrcode"), this.platform = "qrcode";
      return;
    }
    if (this.platform) return;
    const { mobile_link: e, desktop_link: r, webapp_link: n, injected: i, rdns: o4 } = this.wallet, s = i == null ? void 0 : i.map(({ injected_id: v4 }) => v4).filter(Boolean), a = [...o4 ? [o4] : s ?? []], c4 = T2.state.isUniversalProvider ? false : a.length, l4 = e, d4 = n, u4 = Y.checkInstalled(a), h4 = c4 && u4, p4 = r && !U3.isMobile();
    h4 && !f2.state.noAdapters && this.platforms.push("browser"), l4 && this.platforms.push(U3.isMobile() ? "mobile" : "qrcode"), d4 && this.platforms.push("web"), p4 && this.platforms.push("desktop"), !h4 && c4 && !f2.state.noAdapters && this.platforms.push("unsupported"), this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return w3`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "web":
        return w3`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
      case "desktop":
        return w3`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
      case "mobile":
        return w3`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return w3`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
      default:
        return w3`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    return this.platforms.length > 1 ? w3`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    ` : null;
  }
  async onSelectPlatform(e) {
    var _a3;
    const r = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("div");
    r && (await r.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards", easing: "ease" }).finished, this.platform = e, r.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards", easing: "ease" }));
  }
};
Js([H2()], Di.prototype, "platform", void 0), Js([H2()], Di.prototype, "platforms", void 0), Js([H2()], Di.prototype, "isSiwxEnabled", void 0), Di = Js([F2("w3m-connecting-wc-view")], Di);
var h0 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Qs = class extends V2 {
  constructor() {
    super(...arguments), this.isMobile = U3.isMobile();
  }
  render() {
    if (this.isMobile) {
      const { featured: e, recommended: r } = W2.state, { customWallets: n } = T2.state, i = q.getRecentWallets(), o4 = e.length || r.length || (n == null ? void 0 : n.length) || i.length;
      return w3`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs", "s", "s", "s"]}
      >
        ${o4 ? w3`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
    }
    return w3`<wui-flex flexDirection="column" .padding=${["0", "0", "l", "0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0", "m", "0", "m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`;
  }
};
h0([H2()], Qs.prototype, "isMobile", void 0), Qs = h0([F2("w3m-connecting-wc-basic-view")], Qs);
var Wc = () => new nm();
var nm = class {
};
var jc = /* @__PURE__ */ new WeakMap();
var Fc = pc(class extends $u {
  render(t) {
    return Ne2;
  }
  update(t, [e]) {
    var _a3;
    const r = e !== this.G;
    return r && this.G !== void 0 && this.rt(void 0), (r || this.lt !== this.ct) && (this.G = e, this.ht = (_a3 = t.options) == null ? void 0 : _a3.host, this.rt(this.ct = t.element)), Ne2;
  }
  rt(t) {
    if (this.isConnected || (t = void 0), typeof this.G == "function") {
      const e = this.ht ?? globalThis;
      let r = jc.get(e);
      r === void 0 && (r = /* @__PURE__ */ new WeakMap(), jc.set(e, r)), r.get(this.G) !== void 0 && this.G.call(this.ht, void 0), r.set(this.G, t), t !== void 0 && this.G.call(this.ht, t);
    } else this.G.value = t;
  }
  get lt() {
    var _a3, _b;
    return typeof this.G == "function" ? (_a3 = jc.get(this.ht ?? globalThis)) == null ? void 0 : _a3.get(this.G) : (_b = this.G) == null ? void 0 : _b.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var im = te2`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;
var p0 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var ea = class extends V2 {
  constructor() {
    super(...arguments), this.inputElementRef = Wc(), this.checked = void 0;
  }
  render() {
    return w3`
      <label>
        <input
          ${Fc(this.inputElementRef)}
          type="checkbox"
          ?checked=${re2(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
  }
  dispatchChangeEvent() {
    var _a3;
    this.dispatchEvent(new CustomEvent("switchChange", { detail: (_a3 = this.inputElementRef.value) == null ? void 0 : _a3.checked, bubbles: true, composed: true }));
  }
};
ea.styles = [we2, De2, li, im], p0([C3({ type: Boolean })], ea.prototype, "checked", void 0), ea = p0([F2("wui-switch")], ea);
var om = te2`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
var f0 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var ta = class extends V2 {
  constructor() {
    super(...arguments), this.checked = void 0;
  }
  render() {
    return w3`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${re2(this.checked)}></wui-switch>
      </button>
    `;
  }
};
ta.styles = [we2, De2, om], f0([C3({ type: Boolean })], ta.prototype, "checked", void 0), ta = f0([F2("wui-certified-switch")], ta);
var sm = te2`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;
var g0 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var ra = class extends V2 {
  constructor() {
    super(...arguments), this.icon = "copy";
  }
  render() {
    return w3`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `;
  }
};
ra.styles = [we2, De2, sm], g0([C3()], ra.prototype, "icon", void 0), ra = g0([F2("wui-input-element")], ra);
var am = te2`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;
var Rt2 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var bt2 = class extends V2 {
  constructor() {
    super(...arguments), this.inputElementRef = Wc(), this.size = "md", this.disabled = false, this.placeholder = "", this.type = "text", this.value = "";
  }
  render() {
    const e = `wui-padding-right-${this.inputRightPadding}`, n = { [`wui-size-${this.size}`]: true, [e]: !!this.inputRightPadding };
    return w3`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Fc(this.inputElementRef)}
        class=${Lu(n)}
        type=${this.type}
        enterkeyhint=${re2(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value || ""}
        tabindex=${re2(this.tabIdx)}
      />
      <slot></slot>`;
  }
  templateIcon() {
    return this.icon ? w3`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>` : null;
  }
  dispatchInputChangeEvent() {
    var _a3;
    this.dispatchEvent(new CustomEvent("inputChange", { detail: (_a3 = this.inputElementRef.value) == null ? void 0 : _a3.value, bubbles: true, composed: true }));
  }
};
bt2.styles = [we2, De2, am], Rt2([C3()], bt2.prototype, "size", void 0), Rt2([C3()], bt2.prototype, "icon", void 0), Rt2([C3({ type: Boolean })], bt2.prototype, "disabled", void 0), Rt2([C3()], bt2.prototype, "placeholder", void 0), Rt2([C3()], bt2.prototype, "type", void 0), Rt2([C3()], bt2.prototype, "keyHint", void 0), Rt2([C3()], bt2.prototype, "value", void 0), Rt2([C3()], bt2.prototype, "inputRightPadding", void 0), Rt2([C3()], bt2.prototype, "tabIdx", void 0), bt2 = Rt2([F2("wui-input-text")], bt2);
var cm = te2`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
var lm = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Hc = class extends V2 {
  constructor() {
    super(...arguments), this.inputComponentRef = Wc();
  }
  render() {
    return w3`
      <wui-input-text
        ${Fc(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `;
  }
  clearValue() {
    var _a3;
    const r = (_a3 = this.inputComponentRef.value) == null ? void 0 : _a3.inputElementRef.value;
    r && (r.value = "", r.focus(), r.dispatchEvent(new Event("input")));
  }
};
Hc.styles = [we2, cm], Hc = lm([F2("wui-search-bar")], Hc);
var dm = M`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;
var um = te2`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
var w0 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var na = class extends V2 {
  constructor() {
    super(...arguments), this.type = "wallet";
  }
  render() {
    return w3`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `;
  }
  shimmerTemplate() {
    return this.type === "network" ? w3` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${dm}` : w3`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
  }
};
na.styles = [we2, De2, um], w0([C3()], na.prototype, "type", void 0), na = w0([F2("wui-card-select-loader")], na);
var hm = te2`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
var vt2 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var rt2 = class extends V2 {
  render() {
    return this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && Me2.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && Me2.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && Me2.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && Me2.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && Me2.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && Me2.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && Me2.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && Me2.getSpacingStyles(this.margin, 3)};
    `, w3`<slot></slot>`;
  }
};
rt2.styles = [we2, hm], vt2([C3()], rt2.prototype, "gridTemplateRows", void 0), vt2([C3()], rt2.prototype, "gridTemplateColumns", void 0), vt2([C3()], rt2.prototype, "justifyItems", void 0), vt2([C3()], rt2.prototype, "alignItems", void 0), vt2([C3()], rt2.prototype, "justifyContent", void 0), vt2([C3()], rt2.prototype, "alignContent", void 0), vt2([C3()], rt2.prototype, "columnGap", void 0), vt2([C3()], rt2.prototype, "rowGap", void 0), vt2([C3()], rt2.prototype, "gap", void 0), vt2([C3()], rt2.prototype, "padding", void 0), vt2([C3()], rt2.prototype, "margin", void 0), rt2 = vt2([F2("wui-grid")], rt2);
var pm = te2`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
var zi = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Zr = class extends V2 {
  constructor() {
    super(), this.observer = new IntersectionObserver(() => {
    }), this.visible = false, this.imageSrc = void 0, this.imageLoading = false, this.wallet = void 0, this.observer = new IntersectionObserver((e) => {
      e.forEach((r) => {
        r.isIntersecting ? (this.visible = true, this.fetchImageSrc()) : this.visible = false;
      });
    }, { threshold: 0.01 });
  }
  firstUpdated() {
    this.observer.observe(this);
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    var _a3, _b;
    const e = ((_a3 = this.wallet) == null ? void 0 : _a3.badge_type) === "certified";
    return w3`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${re2(e ? "certified" : void 0)}
            >${(_b = this.wallet) == null ? void 0 : _b.name}</wui-text
          >
          ${e ? w3`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
  }
  imageTemplate() {
    var _a3, _b;
    return !this.visible && !this.imageSrc || this.imageLoading ? this.shimmerTemplate() : w3`
      <wui-wallet-image
        size="md"
        imageSrc=${re2(this.imageSrc)}
        name=${(_a3 = this.wallet) == null ? void 0 : _a3.name}
        .installed=${(_b = this.wallet) == null ? void 0 : _b.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
  }
  shimmerTemplate() {
    return w3`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
  }
  async fetchImageSrc() {
    this.wallet && (this.imageSrc = Oe2.getWalletImage(this.wallet), !this.imageSrc && (this.imageLoading = true, this.imageSrc = await Oe2.fetchWalletImage(this.wallet.image_id), this.imageLoading = false));
  }
};
Zr.styles = pm, zi([H2()], Zr.prototype, "visible", void 0), zi([H2()], Zr.prototype, "imageSrc", void 0), zi([H2()], Zr.prototype, "imageLoading", void 0), zi([C3()], Zr.prototype, "wallet", void 0), Zr = zi([F2("w3m-all-wallets-list-item")], Zr);
var fm = te2`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
var Wi = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var m0 = "local-paginator";
var Gr = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.paginationObserver = void 0, this.loading = !W2.state.wallets.length, this.wallets = W2.state.wallets, this.recommended = W2.state.recommended, this.featured = W2.state.featured, this.unsubscribe.push(W2.subscribeKey("wallets", (e) => this.wallets = e), W2.subscribeKey("recommended", (e) => this.recommended = e), W2.subscribeKey("featured", (e) => this.featured = e));
  }
  firstUpdated() {
    this.initialFetch(), this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a3;
    this.unsubscribe.forEach((e) => e()), (_a3 = this.paginationObserver) == null ? void 0 : _a3.disconnect();
  }
  render() {
    return w3`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0", "s", "s", "s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var _a3;
    this.loading = true;
    const e = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("wui-grid");
    e && (await W2.fetchWalletsByPage({ page: 1 }), await e.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards", easing: "ease" }).finished, this.loading = false, e.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards", easing: "ease" }));
  }
  shimmerTemplate(e, r) {
    return [...Array(e)].map(() => w3`
        <wui-card-select-loader type="wallet" id=${re2(r)}></wui-card-select-loader>
      `);
  }
  walletsTemplate() {
    const e = U3.uniqueBy([...this.featured, ...this.recommended, ...this.wallets], "id");
    return Lr.markWalletsAsInstalled(e).map((n) => w3`
        <w3m-all-wallets-list-item
          @click=${() => this.onConnectWallet(n)}
          .wallet=${n}
        ></w3m-all-wallets-list-item>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets: e, recommended: r, featured: n, count: i } = W2.state, o4 = window.innerWidth < 352 ? 3 : 4, s = e.length + r.length;
    let c4 = Math.ceil(s / o4) * o4 - s + o4;
    return c4 -= e.length ? n.length % o4 : 0, i === 0 && n.length > 0 ? null : i === 0 || [...n, ...e, ...r].length < i ? this.shimmerTemplate(c4, m0) : null;
  }
  createPaginationObserver() {
    var _a3;
    const e = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector(`#${m0}`);
    e && (this.paginationObserver = new IntersectionObserver(([r]) => {
      if ((r == null ? void 0 : r.isIntersecting) && !this.loading) {
        const { page: n, count: i, wallets: o4 } = W2.state;
        o4.length < i && W2.fetchWalletsByPage({ page: n + 1 });
      }
    }), this.paginationObserver.observe(e));
  }
  onConnectWallet(e) {
    j2.selectWalletConnector(e);
  }
};
Gr.styles = fm, Wi([H2()], Gr.prototype, "loading", void 0), Wi([H2()], Gr.prototype, "wallets", void 0), Wi([H2()], Gr.prototype, "recommended", void 0), Wi([H2()], Gr.prototype, "featured", void 0), Gr = Wi([F2("w3m-all-wallets-list")], Gr);
var gm = te2`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
var ia = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Rn = class extends V2 {
  constructor() {
    super(...arguments), this.prevQuery = "", this.prevBadge = void 0, this.loading = true, this.query = "";
  }
  render() {
    return this.onSearch(), this.loading ? w3`<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) && (this.prevQuery = this.query, this.prevBadge = this.badge, this.loading = true, await W2.searchWallet({ search: this.query, badge: this.badge }), this.loading = false);
  }
  walletsTemplate() {
    const { search: e } = W2.state, r = Lr.markWalletsAsInstalled(e);
    return e.length ? w3`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0", "s", "s", "s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${r.map((n) => w3`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(n)}
              .wallet=${n}
              data-testid="wallet-search-item-${n.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    ` : w3`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
  }
  onConnectWallet(e) {
    j2.selectWalletConnector(e);
  }
};
Rn.styles = gm, ia([H2()], Rn.prototype, "loading", void 0), ia([C3()], Rn.prototype, "query", void 0), ia([C3()], Rn.prototype, "badge", void 0), Rn = ia([F2("w3m-all-wallets-search")], Rn);
var Vc = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var ji = class extends V2 {
  constructor() {
    super(...arguments), this.search = "", this.onDebouncedSearch = U3.debounce((e) => {
      this.search = e;
    });
  }
  render() {
    const e = this.search.length >= 2;
    return w3`
      <wui-flex .padding=${["0", "s", "s", "s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e || this.badge ? w3`<w3m-all-wallets-search
            query=${this.search}
            badge=${re2(this.badge)}
          ></w3m-all-wallets-search>` : w3`<w3m-all-wallets-list badge=${re2(this.badge)}></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(e) {
    this.onDebouncedSearch(e.detail);
  }
  onClick() {
    if (this.badge === "certified") {
      this.badge = void 0;
      return;
    }
    this.badge = "certified", Ee3.showSvg("Only WalletConnect certified", { icon: "walletConnectBrown", iconColor: "accent-100" });
  }
  qrButtonTemplate() {
    return U3.isMobile() ? w3`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      ` : null;
  }
  onWalletConnectQr() {
    D2.push("ConnectingWalletConnect");
  }
};
Vc([H2()], ji.prototype, "search", void 0), Vc([H2()], ji.prototype, "badge", void 0), ji = Vc([F2("w3m-all-wallets-view")], ji);
var wm = te2`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
var It = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var ut2 = class extends V2 {
  constructor() {
    super(...arguments), this.tabIdx = void 0, this.variant = "icon", this.disabled = false, this.imageSrc = void 0, this.alt = void 0, this.chevron = false, this.loading = false;
  }
  render() {
    return w3`
      <button
        ?disabled=${this.loading ? true : !!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${re2(this.iconVariant)}
        tabindex=${re2(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `;
  }
  visualTemplate() {
    if (this.variant === "image" && this.imageSrc) return w3`<wui-image src=${this.imageSrc} alt=${this.alt ?? "list item"}></wui-image>`;
    if (this.iconVariant === "square" && this.icon && this.variant === "icon") return w3`<wui-icon name=${this.icon}></wui-icon>`;
    if (this.variant === "icon" && this.icon && this.iconVariant) {
      const e = ["blue", "square-blue"].includes(this.iconVariant) ? "accent-100" : "fg-200", r = this.iconVariant === "square-blue" ? "mdl" : "md", n = this.iconSize ? this.iconSize : r;
      return w3`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${r}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  loadingTemplate() {
    return this.loading ? w3`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>` : w3``;
  }
  chevronTemplate() {
    return this.chevron ? w3`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>` : null;
  }
};
ut2.styles = [we2, De2, wm], It([C3()], ut2.prototype, "icon", void 0), It([C3()], ut2.prototype, "iconSize", void 0), It([C3()], ut2.prototype, "tabIdx", void 0), It([C3()], ut2.prototype, "variant", void 0), It([C3()], ut2.prototype, "iconVariant", void 0), It([C3({ type: Boolean })], ut2.prototype, "disabled", void 0), It([C3()], ut2.prototype, "imageSrc", void 0), It([C3()], ut2.prototype, "alt", void 0), It([C3({ type: Boolean })], ut2.prototype, "chevron", void 0), It([C3({ type: Boolean })], ut2.prototype, "loading", void 0), ut2 = It([F2("wui-list-item")], ut2);
var mm = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Zc = class extends V2 {
  constructor() {
    var _a3;
    super(...arguments), this.wallet = (_a3 = D2.state.data) == null ? void 0 : _a3.wallet;
  }
  render() {
    if (!this.wallet) throw new Error("w3m-downloads-view");
    return w3`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s", "s", "l", "s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var _a3;
    return ((_a3 = this.wallet) == null ? void 0 : _a3.chrome_store) ? w3`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>` : null;
  }
  iosTemplate() {
    var _a3;
    return ((_a3 = this.wallet) == null ? void 0 : _a3.app_store) ? w3`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>` : null;
  }
  androidTemplate() {
    var _a3;
    return ((_a3 = this.wallet) == null ? void 0 : _a3.play_store) ? w3`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>` : null;
  }
  homepageTemplate() {
    var _a3;
    return ((_a3 = this.wallet) == null ? void 0 : _a3.homepage) ? w3`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    ` : null;
  }
  onChromeStore() {
    var _a3;
    ((_a3 = this.wallet) == null ? void 0 : _a3.chrome_store) && U3.openHref(this.wallet.chrome_store, "_blank");
  }
  onAppStore() {
    var _a3;
    ((_a3 = this.wallet) == null ? void 0 : _a3.app_store) && U3.openHref(this.wallet.app_store, "_blank");
  }
  onPlayStore() {
    var _a3;
    ((_a3 = this.wallet) == null ? void 0 : _a3.play_store) && U3.openHref(this.wallet.play_store, "_blank");
  }
  onHomePage() {
    var _a3;
    ((_a3 = this.wallet) == null ? void 0 : _a3.homepage) && U3.openHref(this.wallet.homepage, "_blank");
  }
};
Zc = mm([F2("w3m-downloads-view")], Zc);
var bm = Object.freeze({ __proto__: null, get W3mConnectingWcBasicView() {
  return Qs;
}, get W3mAllWalletsView() {
  return ji;
}, get W3mDownloadsView() {
  return Zc;
} });
var vm = te2`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;
var Cm = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Gc = class extends V2 {
  render() {
    return w3`<slot></slot>`;
  }
};
Gc.styles = [we2, vm], Gc = Cm([F2("wui-card")], Gc);
var ym = te2`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;
var Fi = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var qr = class extends V2 {
  constructor() {
    super(...arguments), this.message = "", this.backgroundColor = "accent-100", this.iconColor = "accent-100", this.icon = "info";
  }
  render() {
    return this.style.cssText = `
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `, w3`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `;
  }
  onClose() {
    ar.close();
  }
};
qr.styles = [we2, ym], Fi([C3()], qr.prototype, "message", void 0), Fi([C3()], qr.prototype, "backgroundColor", void 0), Fi([C3()], qr.prototype, "iconColor", void 0), Fi([C3()], qr.prototype, "icon", void 0), qr = Fi([F2("wui-alertbar")], qr);
var xm = te2`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;
var b0 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Em = { info: { backgroundColor: "fg-350", iconColor: "fg-325", icon: "info" }, success: { backgroundColor: "success-glass-reown-020", iconColor: "success-125", icon: "checkmark" }, warning: { backgroundColor: "warning-glass-reown-020", iconColor: "warning-100", icon: "warningCircle" }, error: { backgroundColor: "error-glass-reown-020", iconColor: "error-125", icon: "exclamationTriangle" } };
var oa = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.open = ar.state.open, this.onOpen(true), this.unsubscribe.push(ar.subscribeKey("open", (e) => {
      this.open = e, this.onOpen(false);
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { message: e, variant: r } = ar.state, n = Em[r];
    return w3`
      <wui-alertbar
        message=${e}
        backgroundColor=${n == null ? void 0 : n.backgroundColor}
        iconColor=${n == null ? void 0 : n.iconColor}
        icon=${n == null ? void 0 : n.icon}
      ></wui-alertbar>
    `;
  }
  onOpen(e) {
    this.open ? (this.animate([{ opacity: 0, transform: "scale(0.85)" }, { opacity: 1, transform: "scale(1)" }], { duration: 150, fill: "forwards", easing: "ease" }), this.style.cssText = "pointer-events: auto") : e || (this.animate([{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.85)" }], { duration: 150, fill: "forwards", easing: "ease" }), this.style.cssText = "pointer-events: none");
  }
};
oa.styles = xm, b0([H2()], oa.prototype, "open", void 0), oa = b0([F2("w3m-alertbar")], oa);
var Am = te2`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;
var Hi = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Kr = class extends V2 {
  constructor() {
    super(...arguments), this.size = "md", this.disabled = false, this.icon = "copy", this.iconColor = "inherit";
  }
  render() {
    const e = this.size === "lg" ? "--wui-border-radius-xs" : "--wui-border-radius-xxs", r = this.size === "lg" ? "--wui-spacing-1xs" : "--wui-spacing-2xs";
    return this.style.cssText = `
    --local-border-radius: var(${e});
    --local-padding: var(${r});
`, w3`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `;
  }
};
Kr.styles = [we2, De2, li, Am], Hi([C3()], Kr.prototype, "size", void 0), Hi([C3({ type: Boolean })], Kr.prototype, "disabled", void 0), Hi([C3()], Kr.prototype, "icon", void 0), Hi([C3()], Kr.prototype, "iconColor", void 0), Kr = Hi([F2("wui-icon-link")], Kr);
var Sm = te2`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;
var v0 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var sa = class extends V2 {
  constructor() {
    super(...arguments), this.imageSrc = "";
  }
  render() {
    return w3`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`;
  }
  imageTemplate() {
    return this.imageSrc ? w3`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>` : w3`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`;
  }
};
sa.styles = [we2, De2, li, Sm], v0([C3()], sa.prototype, "imageSrc", void 0), sa = v0([F2("wui-select")], sa);
var _m = te2`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
var Lt2 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Im = ["SmartSessionList"];
function qc() {
  var _a3, _b, _c2, _d2, _e3, _f2, _g2;
  const t = (_b = (_a3 = D2.state.data) == null ? void 0 : _a3.connector) == null ? void 0 : _b.name, e = (_d2 = (_c2 = D2.state.data) == null ? void 0 : _c2.wallet) == null ? void 0 : _d2.name, r = (_f2 = (_e3 = D2.state.data) == null ? void 0 : _e3.network) == null ? void 0 : _f2.name, n = e ?? t, i = j2.getConnectors();
  return { Connect: `Connect ${i.length === 1 && ((_g2 = i[0]) == null ? void 0 : _g2.id) === "w3m-email" ? "Email" : ""} Wallet`, Create: "Create Wallet", ChooseAccountName: void 0, Account: void 0, AccountSettings: void 0, AllWallets: "All Wallets", ApproveTransaction: "Approve Transaction", BuyInProgress: "Buy", ConnectingExternal: n ?? "Connect Wallet", ConnectingWalletConnect: n ?? "WalletConnect", ConnectingWalletConnectBasic: "WalletConnect", ConnectingSiwe: "Sign In", Convert: "Convert", ConvertSelectToken: "Select token", ConvertPreview: "Preview convert", Downloads: n ? `Get ${n}` : "Downloads", EmailLogin: "Email Login", EmailVerifyOtp: "Confirm Email", EmailVerifyDevice: "Register Device", GetWallet: "Get a wallet", Networks: "Choose Network", OnRampProviders: "Choose Provider", OnRampActivity: "Activity", OnRampTokenSelect: "Select Token", OnRampFiatSelect: "Select Currency", Profile: void 0, SwitchNetwork: r ?? "Switch Network", SwitchAddress: "Switch Address", Transactions: "Activity", UnsupportedChain: "Switch Network", UpgradeEmailWallet: "Upgrade your Wallet", UpdateEmailWallet: "Edit Email", UpdateEmailPrimaryOtp: "Confirm Current Email", UpdateEmailSecondaryOtp: "Confirm New Email", WhatIsABuy: "What is Buy?", RegisterAccountName: "Choose name", RegisterAccountNameSuccess: "", WalletReceive: "Receive", WalletCompatibleNetworks: "Compatible Networks", Swap: "Swap", SwapSelectToken: "Select token", SwapPreview: "Preview swap", WalletSend: "Send", WalletSendPreview: "Review send", WalletSendSelectToken: "Select Token", WhatIsANetwork: "What is a network?", WhatIsAWallet: "What is a wallet?", ConnectWallets: "Connect wallet", ConnectSocials: "All socials", ConnectingSocial: Q.state.socialProvider ? Q.state.socialProvider : "Connect Social", ConnectingMultiChain: "Select chain", ConnectingFarcaster: "Farcaster", SwitchActiveChain: "Switch chain", SmartSessionCreated: void 0, SmartSessionList: "Smart Sessions", SIWXSignMessage: "Sign In" };
}
var Ct = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.heading = qc()[D2.state.view], this.network = f2.state.activeCaipNetwork, this.networkImage = Oe2.getNetworkImage(this.network), this.buffering = false, this.showBack = false, this.prevHistoryLength = 1, this.view = D2.state.view, this.viewDirection = "", this.headerText = qc()[D2.state.view], this.unsubscribe.push(Ye2.subscribeNetworkImages(() => {
      this.networkImage = Oe2.getNetworkImage(this.network);
    }), D2.subscribeKey("view", (e) => {
      setTimeout(() => {
        this.view = e, this.headerText = qc()[e];
      }, gr.ANIMATION_DURATIONS.HeaderText), this.onViewChange(), this.onHistoryChange();
    }), Y.subscribeKey("buffering", (e) => this.buffering = e), f2.subscribeKey("activeCaipNetwork", (e) => {
      this.network = e, this.networkImage = Oe2.getNetworkImage(this.network);
    }));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return w3`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
  }
  onWalletHelp() {
    le2.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" }), D2.push("WhatIsAWallet");
  }
  async onClose() {
    D2.state.view === "UnsupportedChain" || await lr.isSIWXCloseDisabled() ? he2.shake() : he2.close();
  }
  rightHeaderTemplate() {
    var _a3, _b;
    const e = (_b = (_a3 = T2 == null ? void 0 : T2.state) == null ? void 0 : _a3.features) == null ? void 0 : _b.smartSessions;
    return D2.state.view !== "Account" || !e ? this.closeButtonTemplate() : w3`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${() => D2.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `;
  }
  closeButtonTemplate() {
    return w3`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `;
  }
  titleTemplate() {
    const e = Im.includes(this.view);
    return w3`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e ? w3`<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `;
  }
  leftHeaderTemplate() {
    var _a3;
    const { view: e } = D2.state, r = e === "Connect", n = T2.state.enableEmbedded, i = e === "ApproveTransaction", o4 = e === "ConnectingSiwe", s = e === "Account", a = T2.state.enableNetworkSwitch, c4 = i || o4 || r && n;
    return s && a ? w3`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${re2((_a3 = this.network) == null ? void 0 : _a3.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${re2(this.networkImage)}
      ></wui-select>` : this.showBack && !c4 ? w3`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>` : w3`<wui-icon-link
      data-hidden=${!r}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
  }
  onNetworks() {
    this.isAllowedNetworkSwitch() && (le2.sendEvent({ type: "track", event: "CLICK_NETWORKS" }), D2.push("Networks"));
  }
  isAllowedNetworkSwitch() {
    const e = f2.getAllRequestedCaipNetworks(), r = e ? e.length > 1 : false, n = e == null ? void 0 : e.find(({ id: i }) => {
      var _a3;
      return i === ((_a3 = this.network) == null ? void 0 : _a3.id);
    });
    return r || !n;
  }
  getPadding() {
    return this.heading ? ["l", "2l", "l", "2l"] : ["0", "2l", "0", "2l"];
  }
  onViewChange() {
    const { history: e } = D2.state;
    let r = gr.VIEW_DIRECTION.Next;
    e.length < this.prevHistoryLength && (r = gr.VIEW_DIRECTION.Prev), this.prevHistoryLength = e.length, this.viewDirection = r;
  }
  async onHistoryChange() {
    var _a3;
    const { history: e } = D2.state, r = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("#dynamic");
    e.length > 1 && !this.showBack && r ? (await r.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards", easing: "ease" }).finished, this.showBack = true, r.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards", easing: "ease" })) : e.length <= 1 && this.showBack && r && (await r.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards", easing: "ease" }).finished, this.showBack = false, r.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards", easing: "ease" }));
  }
  onGoBack() {
    D2.goBack();
  }
};
Ct.styles = _m, Lt2([H2()], Ct.prototype, "heading", void 0), Lt2([H2()], Ct.prototype, "network", void 0), Lt2([H2()], Ct.prototype, "networkImage", void 0), Lt2([H2()], Ct.prototype, "buffering", void 0), Lt2([H2()], Ct.prototype, "showBack", void 0), Lt2([H2()], Ct.prototype, "prevHistoryLength", void 0), Lt2([H2()], Ct.prototype, "view", void 0), Lt2([H2()], Ct.prototype, "viewDirection", void 0), Lt2([H2()], Ct.prototype, "headerText", void 0), Ct = Lt2([F2("w3m-header")], Ct);
var Nm = te2`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;
var Yr = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var rr = class extends V2 {
  constructor() {
    super(...arguments), this.backgroundColor = "accent-100", this.iconColor = "accent-100", this.icon = "checkmark", this.message = "", this.loading = false, this.iconType = "default";
  }
  render() {
    return w3`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
  }
  templateIcon() {
    return this.loading ? w3`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>` : this.iconType === "default" ? w3`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>` : w3`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`;
  }
};
rr.styles = [we2, Nm], Yr([C3()], rr.prototype, "backgroundColor", void 0), Yr([C3()], rr.prototype, "iconColor", void 0), Yr([C3()], rr.prototype, "icon", void 0), Yr([C3()], rr.prototype, "message", void 0), Yr([C3()], rr.prototype, "loading", void 0), Yr([C3()], rr.prototype, "iconType", void 0), rr = Yr([F2("wui-snackbar")], rr);
var km = te2`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;
var C0 = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Tm = { loading: void 0, success: { backgroundColor: "success-100", iconColor: "success-100", icon: "checkmark" }, error: { backgroundColor: "error-100", iconColor: "error-100", icon: "close" } };
var aa = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.timeout = void 0, this.open = Ee3.state.open, this.unsubscribe.push(Ee3.subscribeKey("open", (e) => {
      this.open = e, this.onOpen();
    }));
  }
  disconnectedCallback() {
    clearTimeout(this.timeout), this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { message: e, variant: r, svg: n } = Ee3.state, i = Tm[r], { icon: o4, iconColor: s } = n ?? i ?? {};
    return w3`
      <wui-snackbar
        message=${e}
        backgroundColor=${i == null ? void 0 : i.backgroundColor}
        iconColor=${s}
        icon=${o4}
        .loading=${r === "loading"}
      ></wui-snackbar>
    `;
  }
  onOpen() {
    clearTimeout(this.timeout), this.open ? (this.animate([{ opacity: 0, transform: "translateX(-50%) scale(0.85)" }, { opacity: 1, transform: "translateX(-50%) scale(1)" }], { duration: 150, fill: "forwards", easing: "ease" }), this.timeout && clearTimeout(this.timeout), Ee3.state.autoClose && (this.timeout = setTimeout(() => Ee3.hide(), 2500))) : this.animate([{ opacity: 1, transform: "translateX(-50%) scale(1)" }, { opacity: 0, transform: "translateX(-50%) scale(0.85)" }], { duration: 150, fill: "forwards", easing: "ease" });
  }
};
aa.styles = km, C0([H2()], aa.prototype, "open", void 0), aa = C0([F2("w3m-snackbar")], aa);
var Om = te2`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;
var Vi = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Xr = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.open = mn.state.open, this.message = mn.state.message, this.triggerRect = mn.state.triggerRect, this.variant = mn.state.variant, this.unsubscribe.push(mn.subscribe((e) => {
      this.open = e.open, this.message = e.message, this.triggerRect = e.triggerRect, this.variant = e.variant;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    this.dataset.variant = this.variant;
    const e = this.triggerRect.top, r = this.triggerRect.left;
    return this.style.cssText = `
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${r}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? "flex" : "none"};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `, w3`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`;
  }
};
Xr.styles = [Om], Vi([H2()], Xr.prototype, "open", void 0), Vi([H2()], Xr.prototype, "message", void 0), Vi([H2()], Xr.prototype, "triggerRect", void 0), Vi([H2()], Xr.prototype, "variant", void 0), Xr = Vi([F2("w3m-tooltip"), F2("w3m-tooltip")], Xr);
var $m = te2`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
var Kc = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var Zi = class extends V2 {
  constructor() {
    super(), this.resizeObserver = void 0, this.prevHeight = "0px", this.prevHistoryLength = 1, this.unsubscribe = [], this.view = D2.state.view, this.viewDirection = "", this.unsubscribe.push(D2.subscribeKey("view", (e) => this.onViewChange(e)));
  }
  firstUpdated() {
    var _a3;
    this.resizeObserver = new ResizeObserver(([e]) => {
      const r = `${e == null ? void 0 : e.contentRect.height}px`;
      this.prevHeight !== "0px" && (this.style.setProperty("--prev-height", this.prevHeight), this.style.setProperty("--new-height", r), this.style.animation = "w3m-view-height 150ms forwards ease", this.style.height = "auto"), setTimeout(() => {
        this.prevHeight = r, this.style.animation = "unset";
      }, gr.ANIMATION_DURATIONS.ModalHeight);
    }), (_a3 = this.resizeObserver) == null ? void 0 : _a3.observe(this.getWrapper());
  }
  disconnectedCallback() {
    var _a3;
    (_a3 = this.resizeObserver) == null ? void 0 : _a3.unobserve(this.getWrapper()), this.unsubscribe.forEach((e) => e());
  }
  render() {
    return w3`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`;
  }
  viewTemplate() {
    switch (this.view) {
      case "AccountSettings":
        return w3`<w3m-account-settings-view></w3m-account-settings-view>`;
      case "Account":
        return w3`<w3m-account-view></w3m-account-view>`;
      case "AllWallets":
        return w3`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "ApproveTransaction":
        return w3`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
      case "BuyInProgress":
        return w3`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
      case "ChooseAccountName":
        return w3`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
      case "Connect":
        return w3`<w3m-connect-view></w3m-connect-view>`;
      case "Create":
        return w3`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return w3`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingWalletConnectBasic":
        return w3`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;
      case "ConnectingExternal":
        return w3`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return w3`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "ConnectWallets":
        return w3`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
      case "ConnectSocials":
        return w3`<w3m-connect-socials-view></w3m-connect-socials-view>`;
      case "ConnectingSocial":
        return w3`<w3m-connecting-social-view></w3m-connecting-social-view>`;
      case "Downloads":
        return w3`<w3m-downloads-view></w3m-downloads-view>`;
      case "EmailLogin":
        return w3`<w3m-email-login-view></w3m-email-login-view>`;
      case "EmailVerifyOtp":
        return w3`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
      case "EmailVerifyDevice":
        return w3`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
      case "GetWallet":
        return w3`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Networks":
        return w3`<w3m-networks-view></w3m-networks-view>`;
      case "SwitchNetwork":
        return w3`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "Profile":
        return w3`<w3m-profile-view></w3m-profile-view>`;
      case "SwitchAddress":
        return w3`<w3m-switch-address-view></w3m-switch-address-view>`;
      case "Transactions":
        return w3`<w3m-transactions-view></w3m-transactions-view>`;
      case "OnRampProviders":
        return w3`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
      case "OnRampActivity":
        return w3`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;
      case "OnRampTokenSelect":
        return w3`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
      case "OnRampFiatSelect":
        return w3`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
      case "UpgradeEmailWallet":
        return w3`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
      case "UpdateEmailWallet":
        return w3`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
      case "UpdateEmailPrimaryOtp":
        return w3`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
      case "UpdateEmailSecondaryOtp":
        return w3`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
      case "UnsupportedChain":
        return w3`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
      case "Swap":
        return w3`<w3m-swap-view></w3m-swap-view>`;
      case "SwapSelectToken":
        return w3`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
      case "SwapPreview":
        return w3`<w3m-swap-preview-view></w3m-swap-preview-view>`;
      case "WalletSend":
        return w3`<w3m-wallet-send-view></w3m-wallet-send-view>`;
      case "WalletSendSelectToken":
        return w3`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
      case "WalletSendPreview":
        return w3`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
      case "WhatIsABuy":
        return w3`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
      case "WalletReceive":
        return w3`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
      case "WalletCompatibleNetworks":
        return w3`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
      case "WhatIsAWallet":
        return w3`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      case "ConnectingMultiChain":
        return w3`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;
      case "WhatIsANetwork":
        return w3`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      case "ConnectingFarcaster":
        return w3`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;
      case "SwitchActiveChain":
        return w3`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;
      case "RegisterAccountName":
        return w3`<w3m-register-account-name-view></w3m-register-account-name-view>`;
      case "RegisterAccountNameSuccess":
        return w3`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
      case "SmartSessionCreated":
        return w3`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;
      case "SmartSessionList":
        return w3`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;
      case "SIWXSignMessage":
        return w3`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;
      default:
        return w3`<w3m-connect-view></w3m-connect-view>`;
    }
  }
  onViewChange(e) {
    mn.hide();
    let r = gr.VIEW_DIRECTION.Next;
    const { history: n } = D2.state;
    n.length < this.prevHistoryLength && (r = gr.VIEW_DIRECTION.Prev), this.prevHistoryLength = n.length, this.viewDirection = r, setTimeout(() => {
      this.view = e;
    }, gr.ANIMATION_DURATIONS.ViewTransition);
  }
  getWrapper() {
    var _a3;
    return (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("div");
  }
};
Zi.styles = $m, Kc([H2()], Zi.prototype, "view", void 0), Kc([H2()], Zi.prototype, "viewDirection", void 0), Zi = Kc([F2("w3m-router")], Zi);
var Pm = te2`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;
var Jr = function(t, e, r, n) {
  var i = arguments.length, o4 = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o4 = Reflect.decorate(t, e, r, n);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (o4 = (i < 3 ? s(o4) : i > 3 ? s(e, r, o4) : s(e, r)) || o4);
  return i > 3 && o4 && Object.defineProperty(e, r, o4), o4;
};
var y0 = "scroll-lock";
var Ut2 = class extends V2 {
  constructor() {
    super(), this.unsubscribe = [], this.abortController = void 0, this.hasPrefetched = false, this.enableEmbedded = T2.state.enableEmbedded, this.open = he2.state.open, this.caipAddress = f2.state.activeCaipAddress, this.caipNetwork = f2.state.activeCaipNetwork, this.shake = he2.state.shake, this.filterByNamespace = j2.state.filterByNamespace, this.initializeTheming(), W2.prefetchAnalyticsConfig(), this.unsubscribe.push(he2.subscribeKey("open", (e) => e ? this.onOpen() : this.onClose()), he2.subscribeKey("shake", (e) => this.shake = e), f2.subscribeKey("activeCaipNetwork", (e) => this.onNewNetwork(e)), f2.subscribeKey("activeCaipAddress", (e) => this.onNewAddress(e)), T2.subscribeKey("enableEmbedded", (e) => this.enableEmbedded = e), j2.subscribeKey("filterByNamespace", (e) => {
      var _a3;
      this.filterByNamespace !== e && !((_a3 = f2.getAccountData(e)) == null ? void 0 : _a3.caipAddress) && (W2.fetchRecommendedWallets(), this.filterByNamespace = e);
    }));
  }
  firstUpdated() {
    if (this.caipAddress) {
      if (this.enableEmbedded) {
        he2.close(), this.prefetch();
        return;
      }
      this.onNewAddress(this.caipAddress);
    }
    this.open && this.onOpen(), this.enableEmbedded && this.prefetch();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), this.onRemoveKeyboardListener();
  }
  render() {
    return this.style.cssText = `
      --local-border-bottom-mobile-radius: ${this.enableEmbedded ? "clamp(0px, var(--wui-border-radius-l), 44px)" : "0px"};
    `, this.enableEmbedded ? w3`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> ` : this.open ? w3`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        ` : null;
  }
  contentTemplate() {
    return w3` <wui-card
      shake="${this.shake}"
      data-embedded="${re2(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
  }
  async onOverlayClick(e) {
    e.target === e.currentTarget && await this.handleClose();
  }
  async handleClose() {
    D2.state.view === "UnsupportedChain" || await lr.isSIWXCloseDisabled() ? he2.shake() : he2.close();
  }
  initializeTheming() {
    const { themeVariables: e, themeMode: r } = $e2.state, n = Me2.getColorTheme(r);
    Tg(e, n);
  }
  onClose() {
    this.open = false, this.classList.remove("open"), this.onScrollUnlock(), Ee3.hide(), this.onRemoveKeyboardListener();
  }
  onOpen() {
    this.open = true, this.classList.add("open"), this.onScrollLock(), this.onAddKeyboardListener();
  }
  onScrollLock() {
    const e = document.createElement("style");
    e.dataset.w3m = y0, e.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `, document.head.appendChild(e);
  }
  onScrollUnlock() {
    const e = document.head.querySelector(`style[data-w3m="${y0}"]`);
    e && e.remove();
  }
  onAddKeyboardListener() {
    var _a3;
    this.abortController = new AbortController();
    const e = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("wui-card");
    e == null ? void 0 : e.focus(), window.addEventListener("keydown", (r) => {
      if (r.key === "Escape") this.handleClose();
      else if (r.key === "Tab") {
        const { tagName: n } = r.target;
        n && !n.includes("W3M-") && !n.includes("WUI-") && (e == null ? void 0 : e.focus());
      }
    }, this.abortController);
  }
  onRemoveKeyboardListener() {
    var _a3;
    (_a3 = this.abortController) == null ? void 0 : _a3.abort(), this.abortController = void 0;
  }
  async onNewAddress(e) {
    const r = f2.state.isSwitchingNamespace, n = U3.getPlainAddress(e);
    !n && !r ? he2.close() : r && n && D2.goBack(), await lr.initializeIfEnabled(), this.caipAddress = e, f2.setIsSwitchingNamespace(false);
  }
  onNewNetwork(e) {
    var _a3, _b;
    const r = this.caipNetwork, n = (_a3 = r == null ? void 0 : r.caipNetworkId) == null ? void 0 : _a3.toString(), i = r == null ? void 0 : r.chainNamespace, o4 = (_b = e == null ? void 0 : e.caipNetworkId) == null ? void 0 : _b.toString(), s = e == null ? void 0 : e.chainNamespace, a = n !== o4, l4 = a && !(i !== s), d4 = (r == null ? void 0 : r.name) === G2.UNSUPPORTED_NETWORK_NAME, u4 = D2.state.view === "ConnectingExternal", h4 = !this.caipAddress, p4 = D2.state.view === "UnsupportedChain", v4 = he2.state.open;
    let m4 = false;
    v4 && !u4 && (h4 ? a && (m4 = true) : (p4 || l4 && !d4) && (m4 = true)), m4 && D2.state.view !== "SIWXSignMessage" && D2.goBack(), this.caipNetwork = e;
  }
  prefetch() {
    this.hasPrefetched || (W2.prefetch(), W2.fetchWalletsByPage({ page: 1 }), this.hasPrefetched = true);
  }
};
Ut2.styles = Pm, Jr([C3({ type: Boolean })], Ut2.prototype, "enableEmbedded", void 0), Jr([H2()], Ut2.prototype, "open", void 0), Jr([H2()], Ut2.prototype, "caipAddress", void 0), Jr([H2()], Ut2.prototype, "caipNetwork", void 0), Jr([H2()], Ut2.prototype, "shake", void 0), Jr([H2()], Ut2.prototype, "filterByNamespace", void 0), Ut2 = Jr([F2("w3m-modal")], Ut2);
var Bm = Object.freeze({ __proto__: null, get W3mModal() {
  return Ut2;
} });
var Rm = M`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`;
var Lm = Object.freeze({ __proto__: null, addSvg: Rm });
var Um = M`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;
var Mm = Object.freeze({ __proto__: null, allWalletsSvg: Um });
var Dm = M`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`;
var zm = Object.freeze({ __proto__: null, arrowBottomCircleSvg: Dm });
var Wm = M`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`;
var jm = Object.freeze({ __proto__: null, appStoreSvg: Wm });
var Fm = M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
var Hm = Object.freeze({ __proto__: null, appleSvg: Fm });
var Vm = M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
var Zm = Object.freeze({ __proto__: null, arrowBottomSvg: Vm });
var Gm = M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`;
var qm = Object.freeze({ __proto__: null, arrowLeftSvg: Gm });
var Km = M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
var Ym = Object.freeze({ __proto__: null, arrowRightSvg: Km });
var Xm = M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`;
var Jm = Object.freeze({ __proto__: null, arrowTopSvg: Xm });
var Qm = M`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`;
var e3 = Object.freeze({ __proto__: null, bankSvg: Qm });
var t3 = M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`;
var r3 = Object.freeze({ __proto__: null, browserSvg: t3 });
var n3 = M`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`;
var i3 = Object.freeze({ __proto__: null, cardSvg: n3 });
var o3 = M`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`;
var s3 = Object.freeze({ __proto__: null, checkmarkSvg: o3 });
var a3 = M`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;
var c3 = Object.freeze({ __proto__: null, checkmarkBoldSvg: a3 });
var l3 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;
var d3 = Object.freeze({ __proto__: null, chevronBottomSvg: l3 });
var u3 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;
var h3 = Object.freeze({ __proto__: null, chevronLeftSvg: u3 });
var p3 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;
var f3 = Object.freeze({ __proto__: null, chevronRightSvg: p3 });
var g3 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`;
var w32 = Object.freeze({ __proto__: null, chevronTopSvg: g3 });
var m3 = M`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`;
var b3 = Object.freeze({ __proto__: null, chromeStoreSvg: m3 });
var v3 = M`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`;
var C32 = Object.freeze({ __proto__: null, clockSvg: v3 });
var y3 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;
var x3 = Object.freeze({ __proto__: null, closeSvg: y3 });
var E3 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`;
var A3 = Object.freeze({ __proto__: null, compassSvg: E3 });
var S3 = M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`;
var _3 = Object.freeze({ __proto__: null, coinPlaceholderSvg: S3 });
var I3 = M`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`;
var N3 = Object.freeze({ __proto__: null, copySvg: I3 });
var k3 = M` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;
var T3 = Object.freeze({ __proto__: null, cursorSvg: k3 });
var O32 = M`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;
var $3 = Object.freeze({ __proto__: null, cursorTransparentSvg: O32 });
var P3 = M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`;
var B3 = Object.freeze({ __proto__: null, desktopSvg: P3 });
var R3 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;
var L3 = Object.freeze({ __proto__: null, disconnectSvg: R3 });
var U32 = M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`;
var M3 = Object.freeze({ __proto__: null, discordSvg: U32 });
var D3 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;
var z3 = Object.freeze({ __proto__: null, etherscanSvg: D3 });
var W3 = M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`;
var j3 = Object.freeze({ __proto__: null, extensionSvg: W3 });
var F3 = M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
var H3 = Object.freeze({ __proto__: null, externalLinkSvg: F3 });
var V3 = M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
var Z3 = Object.freeze({ __proto__: null, facebookSvg: V3 });
var G3 = M`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`;
var q3 = Object.freeze({ __proto__: null, farcasterSvg: G3 });
var K3 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
var Y3 = Object.freeze({ __proto__: null, filtersSvg: K3 });
var X3 = M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
var J3 = Object.freeze({ __proto__: null, githubSvg: X3 });
var Q3 = M`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`;
var e5 = Object.freeze({ __proto__: null, googleSvg: Q3 });
var t5 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`;
var r5 = Object.freeze({ __proto__: null, helpCircleSvg: t5 });
var n5 = M`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`;
var i5 = Object.freeze({ __proto__: null, imageSvg: n5 });
var o5 = M`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`;
var s5 = Object.freeze({ __proto__: null, idSvg: o5 });
var a5 = M`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`;
var c5 = Object.freeze({ __proto__: null, infoCircleSvg: a5 });
var l5 = M`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`;
var d5 = Object.freeze({ __proto__: null, lightbulbSvg: l5 });
var u5 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`;
var h5 = Object.freeze({ __proto__: null, mailSvg: u5 });
var p5 = M`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`;
var f5 = Object.freeze({ __proto__: null, mobileSvg: p5 });
var g5 = M`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`;
var w5 = Object.freeze({ __proto__: null, moreSvg: g5 });
var m5 = M`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`;
var b5 = Object.freeze({ __proto__: null, networkPlaceholderSvg: m5 });
var v5 = M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`;
var C5 = Object.freeze({ __proto__: null, nftPlaceholderSvg: v5 });
var y5 = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`;
var x5 = Object.freeze({ __proto__: null, offSvg: y5 });
var E5 = M` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`;
var A5 = Object.freeze({ __proto__: null, playStoreSvg: E5 });
var S5 = M`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;
var _5 = Object.freeze({ __proto__: null, plusSvg: S5 });
var I5 = M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`;
var N5 = Object.freeze({ __proto__: null, qrCodeIcon: I5 });
var k5 = M`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`;
var T5 = Object.freeze({ __proto__: null, recycleHorizontalSvg: k5 });
var O5 = M`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`;
var $5 = Object.freeze({ __proto__: null, refreshSvg: O5 });
var P5 = M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`;
var B5 = Object.freeze({ __proto__: null, searchSvg: P5 });
var R5 = M`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`;
var L5 = Object.freeze({ __proto__: null, sendSvg: R5 });
var U5 = M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;
var M5 = Object.freeze({ __proto__: null, swapHorizontalSvg: U5 });
var D5 = M`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`;
var z5 = Object.freeze({ __proto__: null, swapHorizontalMediumSvg: D5 });
var W5 = M`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`;
var j5 = Object.freeze({ __proto__: null, swapHorizontalBoldSvg: W5 });
var F5 = M`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`;
var H5 = Object.freeze({ __proto__: null, swapHorizontalRoundedBoldSvg: F5 });
var V5 = M`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;
var Z5 = Object.freeze({ __proto__: null, swapVerticalSvg: V5 });
var G5 = M`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`;
var q5 = Object.freeze({ __proto__: null, telegramSvg: G5 });
var K5 = M`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`;
var Y5 = Object.freeze({ __proto__: null, threeDotsSvg: K5 });
var X5 = M`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;
var J5 = Object.freeze({ __proto__: null, twitchSvg: X5 });
var Q5 = M`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;
var x0 = Object.freeze({ __proto__: null, xSvg: Q5 });
var eb = M`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;
var tb = Object.freeze({ __proto__: null, twitterIconSvg: eb });
var rb = M`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`;
var nb = Object.freeze({ __proto__: null, verifySvg: rb });
var ib = M`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`;
var ob = Object.freeze({ __proto__: null, verifyFilledSvg: ib });
var sb = M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`;
var ab = Object.freeze({ __proto__: null, walletSvg: sb });
var cb = M`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`;
var lb = M`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`;
var db = M`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`;
var Yc = Object.freeze({ __proto__: null, walletConnectSvg: cb, walletConnectLightBrownSvg: lb, walletConnectBrownSvg: db });
var ub = M`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;
var hb = Object.freeze({ __proto__: null, walletPlaceholderSvg: ub });
var pb = M`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;
var fb = Object.freeze({ __proto__: null, warningCircleSvg: pb });
var gb = M`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`;
var wb = Object.freeze({ __proto__: null, infoSvg: gb });
var mb = M`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`;
var bb = Object.freeze({ __proto__: null, exclamationTriangleSvg: mb });
var vb = M`<svg width="60" height="16" viewBox="0 0 60 16" fill="none"">
  <path d="M9.3335 4.66667C9.3335 2.08934 11.4229 0 14.0002 0H20.6669C23.2442 0 25.3335 2.08934 25.3335 4.66667V11.3333C25.3335 13.9106 23.2442 16 20.6669 16H14.0002C11.4229 16 9.3335 13.9106 9.3335 11.3333V4.66667Z" fill="#363636"/>
  <path d="M15.6055 11.0003L17.9448 4.66699H18.6316L16.2923 11.0003H15.6055Z" fill="#F6F6F6"/>
  <path d="M0 4.33333C0 1.9401 1.9401 0 4.33333 0C6.72657 0 8.66669 1.9401 8.66669 4.33333V11.6667C8.66669 14.0599 6.72657 16 4.33333 16C1.9401 16 0 14.0599 0 11.6667V4.33333Z" fill="#363636"/>
  <path d="M3.9165 9.99934V9.16602H4.74983V9.99934H3.9165Z" fill="#F6F6F6"/>
  <path d="M26 8C26 3.58172 29.3517 0 33.4863 0H52.5137C56.6483 0 60 3.58172 60 8C60 12.4183 56.6483 16 52.5137 16H33.4863C29.3517 16 26 12.4183 26 8Z" fill="#363636"/>
  <path d="M49.3687 9.95834V6.26232H50.0213V6.81966C50.256 6.40899 50.7326 6.16699 51.2606 6.16699C52.0599 6.16699 52.6173 6.67299 52.6173 7.65566V9.95834H51.972V7.69234C51.972 7.04696 51.6053 6.70966 51.07 6.70966C50.4906 6.70966 50.0213 7.17168 50.0213 7.82433V9.95834H49.3687Z" fill="#F6F6F6"/>
  <path d="M45.2538 9.95773L44.5718 6.26172H45.1877L45.6717 9.31242L46.3098 7.30306H46.9184L47.5491 9.29041L48.0404 6.26172H48.6564L47.9744 9.95773H47.2411L46.6178 8.03641L45.9871 9.95773H45.2538Z" fill="#F6F6F6"/>
  <path d="M42.3709 10.0536C41.2489 10.0536 40.5889 9.21765 40.5889 8.1103C40.5889 7.01035 41.2489 6.16699 42.3709 6.16699C43.4929 6.16699 44.1529 7.01035 44.1529 8.1103C44.1529 9.21765 43.4929 10.0536 42.3709 10.0536ZM42.3709 9.51096C43.1775 9.51096 43.4856 8.82164 43.4856 8.10296C43.4856 7.39163 43.1775 6.70966 42.3709 6.70966C41.5642 6.70966 41.2562 7.39163 41.2562 8.10296C41.2562 8.82164 41.5642 9.51096 42.3709 9.51096Z" fill="#F6F6F6"/>
  <path d="M38.2805 10.0536C37.1952 10.0536 36.5132 9.22499 36.5132 8.1103C36.5132 7.00302 37.1952 6.16699 38.2805 6.16699C39.1972 6.16699 40.0038 6.68766 39.9159 8.27896H37.1805C37.2319 8.96103 37.5472 9.5183 38.2805 9.5183C38.7718 9.5183 39.0945 9.21765 39.2045 8.87299H39.8499C39.7472 9.48903 39.1679 10.0536 38.2805 10.0536ZM37.1952 7.78765H39.2852C39.2338 7.04696 38.8892 6.70232 38.2805 6.70232C37.6132 6.70232 37.2832 7.18635 37.1952 7.78765Z" fill="#F6F6F6"/>
  <path d="M33.3828 9.95773V6.26172H34.0501V6.88506C34.2848 6.47439 34.6882 6.26172 35.1061 6.26172H35.9935V6.88506H35.0548C34.4682 6.88506 34.0501 7.26638 34.0501 8.00706V9.95773H33.3828Z" fill="#F6F6F6"/>
</svg>`;
var Cb = Object.freeze({ __proto__: null, reownSvg: vb });
export {
  U0 as EthereumProvider,
  tl as OPTIONAL_EVENTS,
  el as OPTIONAL_METHODS,
  mo as REQUIRED_EVENTS,
  wo as REQUIRED_METHODS,
  ca as default
};
/*! Bundled license information:

@walletconnect/ethereum-provider/dist/index.es.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  (**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  *)
  (**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  *)

@walletconnect/ethereum-provider/dist/index.es.js:
  (**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  *)
  (**
  * @license
  * Copyright 2018 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  *)
  (**
  * @license
  * Copyright 2020 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  *)
  (**
  * @license
  * Copyright 2021 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  *)
*/
//# sourceMappingURL=index.es-OKGY5FHN.js.map
