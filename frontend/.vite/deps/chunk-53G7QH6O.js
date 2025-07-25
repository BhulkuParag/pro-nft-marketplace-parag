import {
  HashMD
} from "./chunk-WE7GTWOF.js";
import {
  LruMap,
  checksumAddress,
  defineFormatter,
  hexToBigInt,
  hexToNumber,
  isHex,
  keccak256,
  keccak_256,
  numberToHex,
  toHex
} from "./chunk-7D6G3EL5.js";
import {
  rotl,
  wrapConstructor
} from "./chunk-IXILO7AP.js";
import {
  __commonJS,
  __esm,
  __export,
  __reExport,
  __toCommonJS,
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/events/events.js
var require_events = __commonJS({
  "node_modules/events/events.js"(exports, module) {
    "use strict";
    var R3 = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R3 && typeof R3.apply === "function" ? R3.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R3 && typeof R3.ownKeys === "function") {
      ReflectOwnKeys = R3.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter() {
      EventEmitter.init.call(this);
    }
    module.exports = EventEmitter;
    module.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n5) {
      if (typeof n5 !== "number" || n5 < 0 || NumberIsNaN(n5)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n5 + ".");
      }
      this._maxListeners = n5;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type) {
      var args = [];
      for (var i4 = 1; i4 < arguments.length; i4++) args.push(arguments[i4]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0)
        doError = doError && events.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er4;
        if (args.length > 0)
          er4 = args[0];
        if (er4 instanceof Error) {
          throw er4;
        }
        var err = new Error("Unhandled error." + (er4 ? " (" + er4.message + ")" : ""));
        err.context = er4;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i4 = 0; i4 < len; ++i4)
          ReflectApply(listeners[i4], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m3;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit(
            "newListener",
            type,
            listener.listener ? listener.listener : listener
          );
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m3 = _getMaxListeners(target);
        if (m3 > 0 && existing.length > m3 && !existing.warned) {
          existing.warned = true;
          var w4 = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w4.name = "MaxListenersExceededWarning";
          w4.emitter = target;
          w4.type = type;
          w4.count = existing.length;
          ProcessEmitWarning(w4);
        }
      }
      return target;
    }
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: void 0, target, type, listener };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter.prototype.once = function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i4, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0)
        return this;
      list = events[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i4 = list.length - 1; i4 >= 0; i4--) {
          if (list[i4] === listener || list[i4].listener === listener) {
            originalListener = list[i4].listener;
            position = i4;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events[type] = list[0];
        if (events.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i4;
      events = this._events;
      if (events === void 0)
        return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys2 = Object.keys(events);
        var key;
        for (i4 = 0; i4 < keys2.length; ++i4) {
          key = keys2[i4];
          if (key === "removeListener") continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i4 = listeners.length - 1; i4 >= 0; i4--) {
          this.removeListener(type, listeners[i4]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0)
        return [];
      var evlistener = events[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n5) {
      var copy = new Array(n5);
      for (var i4 = 0; i4 < n5; ++i4)
        copy[i4] = arr[i4];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i4 = 0; i4 < ret.length; ++i4) {
        ret[i4] = arr[i4].listener || arr[i4];
      }
      return ret;
    }
    function once(emitter, name2) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name2, resolver);
          reject(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        ;
        eventTargetAgnosticAddListener(emitter, name2, resolver, { once: true });
        if (name2 !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name2, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name2, listener);
        } else {
          emitter.on(name2, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name2, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name2, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
  }
});

// node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d4, b5) {
  extendStatics(d4, b5);
  function __() {
    this.constructor = d4;
  }
  d4.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest(s3, e2) {
  var t = {};
  for (var p4 in s3) if (Object.prototype.hasOwnProperty.call(s3, p4) && e2.indexOf(p4) < 0)
    t[p4] = s3[p4];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i4 = 0, p4 = Object.getOwnPropertySymbols(s3); i4 < p4.length; i4++) {
      if (e2.indexOf(p4[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p4[i4]))
        t[p4[i4]] = s3[p4[i4]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c6 = arguments.length, r3 = c6 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
  else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d4 = decorators[i4]) r3 = (c6 < 3 ? d4(r3) : c6 > 3 ? d4(target, key, r3) : d4(target, key)) || r3;
  return c6 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P4, generator) {
  function adopt(value) {
    return value instanceof P4 ? value : new P4(function(resolve) {
      resolve(value);
    });
  }
  return new (P4 || (P4 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f6, y5, t, g3;
  return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
    return this;
  }), g3;
  function verb(n5) {
    return function(v6) {
      return step([n5, v6]);
    };
  }
  function step(op) {
    if (f6) throw new TypeError("Generator is already executing.");
    while (_3) try {
      if (f6 = 1, y5 && (t = op[0] & 2 ? y5["return"] : op[0] ? y5["throw"] || ((t = y5["return"]) && t.call(y5), 0) : y5.next) && !(t = t.call(y5, op[1])).done) return t;
      if (y5 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y5 = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t[1]) {
            _3.label = t[1];
            t = op;
            break;
          }
          if (t && _3.label < t[2]) {
            _3.label = t[2];
            _3.ops.push(op);
            break;
          }
          if (t[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y5 = 0;
    } finally {
      f6 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o4, m3, k6, k22) {
  if (k22 === void 0) k22 = k6;
  o4[k22] = m3[k6];
}
function __exportStar(m3, exports) {
  for (var p4 in m3) if (p4 !== "default" && !exports.hasOwnProperty(p4)) exports[p4] = m3[p4];
}
function __values(o4) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o4[s3], i4 = 0;
  if (m3) return m3.call(o4);
  if (o4 && typeof o4.length === "number") return {
    next: function() {
      if (o4 && i4 >= o4.length) o4 = void 0;
      return { value: o4 && o4[i4++], done: !o4 };
    }
  };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o4, n5) {
  var m3 = typeof Symbol === "function" && o4[Symbol.iterator];
  if (!m3) return o4;
  var i4 = m3.call(o4), r3, ar4 = [], e2;
  try {
    while ((n5 === void 0 || n5-- > 0) && !(r3 = i4.next()).done) ar4.push(r3.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r3 && !r3.done && (m3 = i4["return"])) m3.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar4;
}
function __spread() {
  for (var ar4 = [], i4 = 0; i4 < arguments.length; i4++)
    ar4 = ar4.concat(__read(arguments[i4]));
  return ar4;
}
function __spreadArrays() {
  for (var s3 = 0, i4 = 0, il = arguments.length; i4 < il; i4++) s3 += arguments[i4].length;
  for (var r3 = Array(s3), k6 = 0, i4 = 0; i4 < il; i4++)
    for (var a3 = arguments[i4], j3 = 0, jl = a3.length; j3 < jl; j3++, k6++)
      r3[k6] = a3[j3];
  return r3;
}
function __await(v6) {
  return this instanceof __await ? (this.v = v6, this) : new __await(v6);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g3 = generator.apply(thisArg, _arguments || []), i4, q2 = [];
  return i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4;
  function verb(n5) {
    if (g3[n5]) i4[n5] = function(v6) {
      return new Promise(function(a3, b5) {
        q2.push([n5, v6, a3, b5]) > 1 || resume(n5, v6);
      });
    };
  }
  function resume(n5, v6) {
    try {
      step(g3[n5](v6));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r3) {
    r3.value instanceof __await ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q2[0][2], r3);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f6, v6) {
    if (f6(v6), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o4) {
  var i4, p4;
  return i4 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i4[Symbol.iterator] = function() {
    return this;
  }, i4;
  function verb(n5, f6) {
    i4[n5] = o4[n5] ? function(v6) {
      return (p4 = !p4) ? { value: __await(o4[n5](v6)), done: n5 === "return" } : f6 ? f6(v6) : v6;
    } : f6;
  }
}
function __asyncValues(o4) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m3 = o4[Symbol.asyncIterator], i4;
  return m3 ? m3.call(o4) : (o4 = typeof __values === "function" ? __values(o4) : o4[Symbol.iterator](), i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4);
  function verb(n5) {
    i4[n5] = o4[n5] && function(v6) {
      return new Promise(function(resolve, reject) {
        v6 = o4[n5](v6), settle(resolve, reject, v6.done, v6.value);
      });
    };
  }
  function settle(resolve, reject, d4, v6) {
    Promise.resolve(v6).then(function(v7) {
      resolve({ value: v7, done: d4 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k6 in mod) if (Object.hasOwnProperty.call(mod, k6)) result[k6] = mod[k6];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d4, b5) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d5, b6) {
        d5.__proto__ = b6;
      } || function(d5, b6) {
        for (var p4 in b6) if (b6.hasOwnProperty(p4)) d5[p4] = b6[p4];
      };
      return extendStatics(d4, b5);
    };
    __assign = function() {
      __assign = Object.assign || function __assign3(t) {
        for (var s3, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
          s3 = arguments[i4];
          for (var p4 in s3) if (Object.prototype.hasOwnProperty.call(s3, p4)) t[p4] = s3[p4];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/delay.js
var require_delay = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = void 0;
    function delay(timeout) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, timeout);
      });
    }
    exports.delay = delay;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/misc.js
var require_misc = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/misc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
    exports.ONE_HUNDRED = 100;
    exports.ONE_THOUSAND = 1e3;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/time.js
var require_time = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  }
});

// node_modules/@walletconnect/time/dist/cjs/constants/index.js
var require_constants = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_misc(), exports);
    tslib_1.__exportStar(require_time(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/convert.js
var require_convert = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/convert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromMiliseconds = exports.toMiliseconds = void 0;
    var constants_1 = require_constants();
    function toMiliseconds(seconds) {
      return seconds * constants_1.ONE_THOUSAND;
    }
    exports.toMiliseconds = toMiliseconds;
    function fromMiliseconds(miliseconds) {
      return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
    }
    exports.fromMiliseconds = fromMiliseconds;
  }
});

// node_modules/@walletconnect/time/dist/cjs/utils/index.js
var require_utils = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_delay(), exports);
    tslib_1.__exportStar(require_convert(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/watch.js
var require_watch = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Watch = void 0;
    var Watch = class {
      constructor() {
        this.timestamps = /* @__PURE__ */ new Map();
      }
      start(label) {
        if (this.timestamps.has(label)) {
          throw new Error(`Watch already started for label: ${label}`);
        }
        this.timestamps.set(label, { started: Date.now() });
      }
      stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") {
          throw new Error(`Watch already stopped for label: ${label}`);
        }
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, { started: timestamp.started, elapsed });
      }
      get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") {
          throw new Error(`No timestamp found for label: ${label}`);
        }
        return timestamp;
      }
      elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
      }
    };
    exports.Watch = Watch;
    exports.default = Watch;
  }
});

// node_modules/@walletconnect/time/dist/cjs/types/watch.js
var require_watch2 = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/types/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IWatch = void 0;
    var IWatch = class {
    };
    exports.IWatch = IWatch;
  }
});

// node_modules/@walletconnect/time/dist/cjs/types/index.js
var require_types = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_watch2(), exports);
  }
});

// node_modules/@walletconnect/time/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@walletconnect/time/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_utils(), exports);
    tslib_1.__exportStar(require_watch(), exports);
    tslib_1.__exportStar(require_types(), exports);
    tslib_1.__exportStar(require_constants(), exports);
  }
});

// node_modules/@walletconnect/window-getters/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@walletconnect/window-getters/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
    function getFromWindow(name2) {
      let res = void 0;
      if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
        res = window[name2];
      }
      return res;
    }
    exports.getFromWindow = getFromWindow;
    function getFromWindowOrThrow(name2) {
      const res = getFromWindow(name2);
      if (!res) {
        throw new Error(`${name2} is not defined in Window`);
      }
      return res;
    }
    exports.getFromWindowOrThrow = getFromWindowOrThrow;
    function getDocumentOrThrow() {
      return getFromWindowOrThrow("document");
    }
    exports.getDocumentOrThrow = getDocumentOrThrow;
    function getDocument() {
      return getFromWindow("document");
    }
    exports.getDocument = getDocument;
    function getNavigatorOrThrow() {
      return getFromWindowOrThrow("navigator");
    }
    exports.getNavigatorOrThrow = getNavigatorOrThrow;
    function getNavigator() {
      return getFromWindow("navigator");
    }
    exports.getNavigator = getNavigator;
    function getLocationOrThrow() {
      return getFromWindowOrThrow("location");
    }
    exports.getLocationOrThrow = getLocationOrThrow;
    function getLocation() {
      return getFromWindow("location");
    }
    exports.getLocation = getLocation;
    function getCryptoOrThrow() {
      return getFromWindowOrThrow("crypto");
    }
    exports.getCryptoOrThrow = getCryptoOrThrow;
    function getCrypto() {
      return getFromWindow("crypto");
    }
    exports.getCrypto = getCrypto;
    function getLocalStorageOrThrow() {
      return getFromWindowOrThrow("localStorage");
    }
    exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
    function getLocalStorage() {
      return getFromWindow("localStorage");
    }
    exports.getLocalStorage = getLocalStorage;
  }
});

// node_modules/@walletconnect/window-metadata/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@walletconnect/window-metadata/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWindowMetadata = void 0;
    var window_getters_1 = require_cjs2();
    function getWindowMetadata() {
      let doc;
      let loc;
      try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
      } catch (e2) {
        return null;
      }
      function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons2 = [];
        for (let i4 = 0; i4 < links.length; i4++) {
          const link = links[i4];
          const rel = link.getAttribute("rel");
          if (rel) {
            if (rel.toLowerCase().indexOf("icon") > -1) {
              const href = link.getAttribute("href");
              if (href) {
                if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                  let absoluteHref = loc.protocol + "//" + loc.host;
                  if (href.indexOf("/") === 0) {
                    absoluteHref += href;
                  } else {
                    const path = loc.pathname.split("/");
                    path.pop();
                    const finalPath = path.join("/");
                    absoluteHref += finalPath + "/" + href;
                  }
                  icons2.push(absoluteHref);
                } else if (href.indexOf("//") === 0) {
                  const absoluteUrl = loc.protocol + href;
                  icons2.push(absoluteUrl);
                } else {
                  icons2.push(href);
                }
              }
            }
          }
        }
        return icons2;
      }
      function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i4 = 0; i4 < metaTags.length; i4++) {
          const tag = metaTags[i4];
          const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
            if (attr) {
              return args.includes(attr);
            }
            return false;
          });
          if (attributes.length && attributes) {
            const content = tag.getAttribute("content");
            if (content) {
              return content;
            }
          }
        }
        return "";
      }
      function getName() {
        let name3 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name3) {
          name3 = doc.title;
        }
        return name3;
      }
      function getDescription() {
        const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description2;
      }
      const name2 = getName();
      const description = getDescription();
      const url = loc.origin;
      const icons = getIcons();
      const meta = {
        description,
        url,
        icons,
        name: name2
      };
      return meta;
    }
    exports.getWindowMetadata = getWindowMetadata;
  }
});

// node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o4) {
      try {
        return JSON.stringify(o4);
      } catch (e2) {
        return '"[Circular]"';
      }
    }
    module.exports = format;
    function format(f6, args, opts) {
      var ss = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f6 === "object" && f6 !== null) {
        var len = args.length + offset;
        if (len === 1) return f6;
        var objects = new Array(len);
        objects[0] = ss(f6);
        for (var index = 1; index < len; index++) {
          objects[index] = ss(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f6 !== "string") {
        return f6;
      }
      var argLen = args.length;
      if (argLen === 0) return f6;
      var str = "";
      var a3 = 1 - offset;
      var lastPos = -1;
      var flen = f6 && f6.length || 0;
      for (var i4 = 0; i4 < flen; ) {
        if (f6.charCodeAt(i4) === 37 && i4 + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f6.charCodeAt(i4 + 1)) {
            case 100:
            // 'd'
            case 102:
              if (a3 >= argLen)
                break;
              if (args[a3] == null) break;
              if (lastPos < i4)
                str += f6.slice(lastPos, i4);
              str += Number(args[a3]);
              lastPos = i4 + 2;
              i4++;
              break;
            case 105:
              if (a3 >= argLen)
                break;
              if (args[a3] == null) break;
              if (lastPos < i4)
                str += f6.slice(lastPos, i4);
              str += Math.floor(Number(args[a3]));
              lastPos = i4 + 2;
              i4++;
              break;
            case 79:
            // 'O'
            case 111:
            // 'o'
            case 106:
              if (a3 >= argLen)
                break;
              if (args[a3] === void 0) break;
              if (lastPos < i4)
                str += f6.slice(lastPos, i4);
              var type = typeof args[a3];
              if (type === "string") {
                str += "'" + args[a3] + "'";
                lastPos = i4 + 2;
                i4++;
                break;
              }
              if (type === "function") {
                str += args[a3].name || "<anonymous>";
                lastPos = i4 + 2;
                i4++;
                break;
              }
              str += ss(args[a3]);
              lastPos = i4 + 2;
              i4++;
              break;
            case 115:
              if (a3 >= argLen)
                break;
              if (lastPos < i4)
                str += f6.slice(lastPos, i4);
              str += String(args[a3]);
              lastPos = i4 + 2;
              i4++;
              break;
            case 37:
              if (lastPos < i4)
                str += f6.slice(lastPos, i4);
              str += "%";
              lastPos = i4 + 2;
              i4++;
              a3--;
              break;
          }
          ++a3;
        }
        ++i4;
      }
      if (lastPos === -1)
        return f6;
      else if (lastPos < flen) {
        str += f6.slice(lastPos);
      }
      return str;
    }
  }
});

// node_modules/pino/browser.js
var require_browser = __commonJS({
  "node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue
    };
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k6) {
          return k6 !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto = opts.browser.write || _console;
      if (opts.browser.write) opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
      if (typeof proto === "function") {
        proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
      }
      if (opts.enabled === false) opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log) logger.log = noop;
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = pino.levels;
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2) logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set2(setOpts, logger, "error", "log");
        set2(setOpts, logger, "fatal", "error");
        set2(setOpts, logger, "warn", "error");
        set2(setOpts, logger, "info", "log");
        set2(setOpts, logger, "debug", "log");
        set2(setOpts, logger, "trace", "log");
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.error = bind(parent, bindings, "error");
          this.fatal = bind(parent, bindings, "fatal");
          this.warn = bind(parent, bindings, "warn");
          this.info = bind(parent, bindings, "info");
          this.debug = bind(parent, bindings, "debug");
          this.trace = bind(parent, bindings, "trace");
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        return new Child(this);
      }
      return logger;
    }
    pino.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino.stdSerializers = stdSerializers;
    pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function set2(opts, logger, level, fallback2) {
      const proto = Object.getPrototypeOf(logger);
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback2] || noop;
      wrap(opts, logger, level);
    }
    function wrap(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop) return;
      logger[level] = /* @__PURE__ */ function(write) {
        return function LOG() {
          const ts2 = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i4 = 0; i4 < args.length; i4++) args[i4] = arguments[i4];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject) write.call(proto, asObject(this, level, args, ts2));
          else write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || logger.level;
            const transmitValue = pino.levels.values[transmitLevel];
            const methodValue = pino.levels.values[level];
            if (methodValue < transmitValue) return;
            transmit(this, {
              ts: ts2,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: pino.levels.values[opts.transmit.level || logger.level],
              send: opts.transmit.send,
              val: logger.levelVal
            }, args);
          }
        };
      }(logger[level]);
    }
    function asObject(logger, level, args, ts2) {
      if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const o4 = {};
      if (ts2) {
        o4.time = ts2;
      }
      o4.level = pino.levels.values[level];
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1) lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(o4, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0) o4.msg = msg;
      return o4;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i4 in args) {
        if (stdErrSerialize && args[i4] instanceof Error) {
          args[i4] = pino.stdSerializers.err(args[i4]);
        } else if (typeof args[i4] === "object" && !Array.isArray(args[i4])) {
          for (const k6 in args[i4]) {
            if (serialize && serialize.indexOf(k6) > -1 && k6 in serializers) {
              args[i4][k6] = serializers[k6](args[i4][k6]);
            }
          }
        }
      }
    }
    function bind(parent, bindings, level) {
      return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for (var i4 = 1; i4 < args.length; i4++) {
          args[i4] = arguments[i4 - 1];
        }
        return parent[level].apply(this, args);
      };
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts2 = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts2;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a3) {
      return a3;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o4) {
        return typeof o4 !== "undefined" && o4;
      }
      try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e2) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
  }
});

// node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js
var tslib_es6_exports2 = {};
__export(tslib_es6_exports2, {
  __assign: () => __assign2,
  __asyncDelegator: () => __asyncDelegator2,
  __asyncGenerator: () => __asyncGenerator2,
  __asyncValues: () => __asyncValues2,
  __await: () => __await2,
  __awaiter: () => __awaiter2,
  __classPrivateFieldGet: () => __classPrivateFieldGet2,
  __classPrivateFieldSet: () => __classPrivateFieldSet2,
  __createBinding: () => __createBinding2,
  __decorate: () => __decorate2,
  __exportStar: () => __exportStar2,
  __extends: () => __extends2,
  __generator: () => __generator2,
  __importDefault: () => __importDefault2,
  __importStar: () => __importStar2,
  __makeTemplateObject: () => __makeTemplateObject2,
  __metadata: () => __metadata2,
  __param: () => __param2,
  __read: () => __read2,
  __rest: () => __rest2,
  __spread: () => __spread2,
  __spreadArrays: () => __spreadArrays2,
  __values: () => __values2
});
function __extends2(d4, b5) {
  extendStatics2(d4, b5);
  function __() {
    this.constructor = d4;
  }
  d4.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest2(s3, e2) {
  var t = {};
  for (var p4 in s3) if (Object.prototype.hasOwnProperty.call(s3, p4) && e2.indexOf(p4) < 0)
    t[p4] = s3[p4];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i4 = 0, p4 = Object.getOwnPropertySymbols(s3); i4 < p4.length; i4++) {
      if (e2.indexOf(p4[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p4[i4]))
        t[p4[i4]] = s3[p4[i4]];
    }
  return t;
}
function __decorate2(decorators, target, key, desc) {
  var c6 = arguments.length, r3 = c6 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
  else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d4 = decorators[i4]) r3 = (c6 < 3 ? d4(r3) : c6 > 3 ? d4(target, key, r3) : d4(target, key)) || r3;
  return c6 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
}
function __param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter2(thisArg, _arguments, P4, generator) {
  function adopt(value) {
    return value instanceof P4 ? value : new P4(function(resolve) {
      resolve(value);
    });
  }
  return new (P4 || (P4 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f6, y5, t, g3;
  return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
    return this;
  }), g3;
  function verb(n5) {
    return function(v6) {
      return step([n5, v6]);
    };
  }
  function step(op) {
    if (f6) throw new TypeError("Generator is already executing.");
    while (_3) try {
      if (f6 = 1, y5 && (t = op[0] & 2 ? y5["return"] : op[0] ? y5["throw"] || ((t = y5["return"]) && t.call(y5), 0) : y5.next) && !(t = t.call(y5, op[1])).done) return t;
      if (y5 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y5 = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t[1]) {
            _3.label = t[1];
            t = op;
            break;
          }
          if (t && _3.label < t[2]) {
            _3.label = t[2];
            _3.ops.push(op);
            break;
          }
          if (t[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y5 = 0;
    } finally {
      f6 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding2(o4, m3, k6, k22) {
  if (k22 === void 0) k22 = k6;
  o4[k22] = m3[k6];
}
function __exportStar2(m3, exports) {
  for (var p4 in m3) if (p4 !== "default" && !exports.hasOwnProperty(p4)) exports[p4] = m3[p4];
}
function __values2(o4) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o4[s3], i4 = 0;
  if (m3) return m3.call(o4);
  if (o4 && typeof o4.length === "number") return {
    next: function() {
      if (o4 && i4 >= o4.length) o4 = void 0;
      return { value: o4 && o4[i4++], done: !o4 };
    }
  };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o4, n5) {
  var m3 = typeof Symbol === "function" && o4[Symbol.iterator];
  if (!m3) return o4;
  var i4 = m3.call(o4), r3, ar4 = [], e2;
  try {
    while ((n5 === void 0 || n5-- > 0) && !(r3 = i4.next()).done) ar4.push(r3.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r3 && !r3.done && (m3 = i4["return"])) m3.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar4;
}
function __spread2() {
  for (var ar4 = [], i4 = 0; i4 < arguments.length; i4++)
    ar4 = ar4.concat(__read2(arguments[i4]));
  return ar4;
}
function __spreadArrays2() {
  for (var s3 = 0, i4 = 0, il = arguments.length; i4 < il; i4++) s3 += arguments[i4].length;
  for (var r3 = Array(s3), k6 = 0, i4 = 0; i4 < il; i4++)
    for (var a3 = arguments[i4], j3 = 0, jl = a3.length; j3 < jl; j3++, k6++)
      r3[k6] = a3[j3];
  return r3;
}
function __await2(v6) {
  return this instanceof __await2 ? (this.v = v6, this) : new __await2(v6);
}
function __asyncGenerator2(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g3 = generator.apply(thisArg, _arguments || []), i4, q2 = [];
  return i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4;
  function verb(n5) {
    if (g3[n5]) i4[n5] = function(v6) {
      return new Promise(function(a3, b5) {
        q2.push([n5, v6, a3, b5]) > 1 || resume(n5, v6);
      });
    };
  }
  function resume(n5, v6) {
    try {
      step(g3[n5](v6));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r3) {
    r3.value instanceof __await2 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q2[0][2], r3);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f6, v6) {
    if (f6(v6), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator2(o4) {
  var i4, p4;
  return i4 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i4[Symbol.iterator] = function() {
    return this;
  }, i4;
  function verb(n5, f6) {
    i4[n5] = o4[n5] ? function(v6) {
      return (p4 = !p4) ? { value: __await2(o4[n5](v6)), done: n5 === "return" } : f6 ? f6(v6) : v6;
    } : f6;
  }
}
function __asyncValues2(o4) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m3 = o4[Symbol.asyncIterator], i4;
  return m3 ? m3.call(o4) : (o4 = typeof __values2 === "function" ? __values2(o4) : o4[Symbol.iterator](), i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4);
  function verb(n5) {
    i4[n5] = o4[n5] && function(v6) {
      return new Promise(function(resolve, reject) {
        v6 = o4[n5](v6), settle(resolve, reject, v6.done, v6.value);
      });
    };
  }
  function settle(resolve, reject, d4, v6) {
    Promise.resolve(v6).then(function(v7) {
      resolve({ value: v7, done: d4 });
    }, reject);
  }
}
function __makeTemplateObject2(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar2(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k6 in mod) if (Object.hasOwnProperty.call(mod, k6)) result[k6] = mod[k6];
  }
  result.default = mod;
  return result;
}
function __importDefault2(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet2(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet2(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics2, __assign2;
var init_tslib_es62 = __esm({
  "node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js"() {
    extendStatics2 = function(d4, b5) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d5, b6) {
        d5.__proto__ = b6;
      } || function(d5, b6) {
        for (var p4 in b6) if (b6.hasOwnProperty(p4)) d5[p4] = b6[p4];
      };
      return extendStatics2(d4, b5);
    };
    __assign2 = function() {
      __assign2 = Object.assign || function __assign3(t) {
        for (var s3, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
          s3 = arguments[i4];
          for (var p4 in s3) if (Object.prototype.hasOwnProperty.call(s3, p4)) t[p4] = s3[p4];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/environment/dist/cjs/crypto.js
var require_crypto = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
    function getBrowerCrypto() {
      return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
    }
    exports.getBrowerCrypto = getBrowerCrypto;
    function getSubtleCrypto() {
      const browserCrypto = getBrowerCrypto();
      return browserCrypto.subtle || browserCrypto.webkitSubtle;
    }
    exports.getSubtleCrypto = getSubtleCrypto;
    function isBrowserCryptoAvailable() {
      return !!getBrowerCrypto() && !!getSubtleCrypto();
    }
    exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/env.js
var require_env = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
    function isReactNative() {
      return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
    }
    exports.isReactNative = isReactNative;
    function isNode2() {
      return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
    }
    exports.isNode = isNode2;
    function isBrowser() {
      return !isReactNative() && !isNode2();
    }
    exports.isBrowser = isBrowser;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_crypto(), exports);
    tslib_1.__exportStar(require_env(), exports);
  }
});

// node_modules/ws/browser.js
var require_browser2 = __commonJS({
  "node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/detect-browser/es/index.js
var __spreadArray = function(to4, from8, pack) {
  if (pack || arguments.length === 2) for (var i4 = 0, l6 = from8.length, ar4; i4 < l6; i4++) {
    if (ar4 || !(i4 in from8)) {
      if (!ar4) ar4 = Array.prototype.slice.call(from8, 0, i4);
      ar4[i4] = from8[i4];
    }
  }
  return to4.concat(ar4 || Array.prototype.slice.call(from8));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BrowserInfo2(name2, version3, os2) {
      this.name = name2;
      this.version = version3;
      this.os = os2;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function NodeInfo2(version3) {
      this.version = version3;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo2;
  }()
);
var SearchBotDeviceInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function SearchBotDeviceInfo2(name2, version3, os2, bot) {
      this.name = name2;
      this.version = version3;
      this.os = os2;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  }()
);
var BotInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  }()
);
var ReactNativeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  }()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua2) {
  return ua2 !== "" && userAgentRules.reduce(function(matched, _a) {
    var browser = _a[0], regex = _a[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua2);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}
function parseUserAgent(ua2) {
  var matchedRule = matchUserAgent(ua2);
  if (!matchedRule) {
    return null;
  }
  var name2 = matchedRule[0], match = matchedRule[1];
  if (name2 === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version3 = versionParts.join(".");
  var os2 = detectOS(ua2);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua2);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name2, version3, os2, searchBotMatch[1]);
  }
  return new BrowserInfo(name2, version3, os2);
}
function detectOS(ua2) {
  for (var ii2 = 0, count = operatingSystemRules.length; ii2 < count; ii2++) {
    var _a = operatingSystemRules[ii2], os2 = _a[0], regex = _a[1];
    var match = regex.exec(ua2);
    if (match) {
      return os2;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode2 = typeof process !== "undefined" && process.version;
  return isNode2 ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii2 = 0; ii2 < count; ii2++) {
    output.push("0");
  }
  return output;
}

// node_modules/@walletconnect/utils/dist/index.es.js
var import_time2 = __toESM(require_cjs());
var import_window_getters = __toESM(require_cjs2());
var import_window_metadata = __toESM(require_cjs3());

// node_modules/@walletconnect/utils/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js
function publicKeyToAddress(publicKey) {
  const address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
  return checksumAddress(`0x${address}`);
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverPublicKey.js
async function recoverPublicKey({ hash, signature }) {
  const hashHex = isHex(hash) ? hash : toHex(hash);
  const { secp256k1: secp256k12 } = await import("./secp256k1-JKEKIU4U.js");
  const signature_ = (() => {
    if (typeof signature === "object" && "r" in signature && "s" in signature) {
      const { r: r3, s: s3, v: v6, yParity } = signature;
      const yParityOrV2 = Number(yParity ?? v6);
      const recoveryBit2 = toRecoveryBit(yParityOrV2);
      return new secp256k12.Signature(hexToBigInt(r3), hexToBigInt(s3)).addRecoveryBit(recoveryBit2);
    }
    const signatureHex = isHex(signature) ? signature : toHex(signature);
    const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
    const recoveryBit = toRecoveryBit(yParityOrV);
    return secp256k12.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
  })();
  const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
  return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
  if (yParityOrV === 0 || yParityOrV === 1)
    return yParityOrV;
  if (yParityOrV === 27)
    return 0;
  if (yParityOrV === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverAddress.js
async function recoverAddress({ hash, signature }) {
  return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/formatters/transaction.js
var transactionType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function formatTransaction(transaction) {
  const transaction_ = {
    ...transaction,
    blockHash: transaction.blockHash ? transaction.blockHash : null,
    blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
    chainId: transaction.chainId ? hexToNumber(transaction.chainId) : void 0,
    gas: transaction.gas ? BigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
    maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : void 0,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
    nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
    to: transaction.to ? transaction.to : null,
    transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
    type: transaction.type ? transactionType[transaction.type] : void 0,
    typeHex: transaction.type ? transaction.type : void 0,
    value: transaction.value ? BigInt(transaction.value) : void 0,
    v: transaction.v ? BigInt(transaction.v) : void 0
  };
  if (transaction.authorizationList)
    transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
  transaction_.yParity = (() => {
    if (transaction.yParity)
      return Number(transaction.yParity);
    if (typeof transaction_.v === "bigint") {
      if (transaction_.v === 0n || transaction_.v === 27n)
        return 0;
      if (transaction_.v === 1n || transaction_.v === 28n)
        return 1;
      if (transaction_.v >= 35n)
        return transaction_.v % 2n === 0n ? 1 : 0;
    }
    return void 0;
  })();
  if (transaction_.type === "legacy") {
    delete transaction_.accessList;
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
    delete transaction_.yParity;
  }
  if (transaction_.type === "eip2930") {
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
  }
  if (transaction_.type === "eip1559") {
    delete transaction_.maxFeePerBlobGas;
  }
  return transaction_;
}
var defineTransaction = defineFormatter("transaction", formatTransaction);
function formatAuthorizationList(authorizationList) {
  return authorizationList.map((authorization) => ({
    contractAddress: authorization.address,
    chainId: Number(authorization.chainId),
    nonce: Number(authorization.nonce),
    r: authorization.r,
    s: authorization.s,
    yParity: Number(authorization.yParity)
  }));
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/formatters/block.js
function formatBlock(block) {
  const transactions = (block.transactions ?? []).map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return formatTransaction(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
    blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
    gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
    gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
    hash: block.hash ? block.hash : null,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    nonce: block.nonce ? block.nonce : null,
    number: block.number ? BigInt(block.number) : null,
    size: block.size ? BigInt(block.size) : void 0,
    timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
    transactions,
    totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
  };
}
var defineBlock = defineFormatter("block", formatBlock);

// node_modules/@walletconnect/utils/node_modules/viem/_esm/actions/public/getTransactionCount.js
async function getTransactionCount(client, { address, blockTag = "latest", blockNumber }) {
  const count = await client.request({
    method: "eth_getTransactionCount",
    params: [address, blockNumber ? numberToHex(blockNumber) : blockTag]
  }, { dedupe: Boolean(blockNumber) });
  return hexToNumber(count);
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/constants/blob.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/formatters/log.js
function formatLog(log, { args, eventName } = {}) {
  return {
    ...log,
    blockHash: log.blockHash ? log.blockHash : null,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionHash: log.transactionHash ? log.transactionHash : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
    ...eventName ? { args, eventName } : {}
  };
}

// node_modules/@walletconnect/utils/node_modules/viem/_esm/actions/wallet/sendTransaction.js
var supportsWalletNamespace = new LruMap(128);

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/promise/withDedupe.js
var promiseCache = new LruMap(8192);

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/rpc/id.js
function createIdStore() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
var idCache = createIdStore();

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/formatters/transactionReceipt.js
var receiptStatuses = {
  "0x0": "reverted",
  "0x1": "success"
};
function formatTransactionReceipt(transactionReceipt) {
  const receipt = {
    ...transactionReceipt,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionIndex: transactionReceipt.transactionIndex ? hexToNumber(transactionReceipt.transactionIndex) : null,
    status: transactionReceipt.status ? receiptStatuses[transactionReceipt.status] : null,
    type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
  };
  if (transactionReceipt.blobGasPrice)
    receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
  if (transactionReceipt.blobGasUsed)
    receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
  return receipt;
}
var defineTransactionReceipt = defineFormatter("transactionReceipt", formatTransactionReceipt);

// node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/ripemd160.js
var Rho = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
var Id = new Uint8Array(new Array(16).fill(0).map((_3, i4) => i4));
var Pi = Id.map((i4) => (9 * i4 + 5) % 16);
var idxL = [Id];
var idxR = [Pi];
for (let i4 = 0; i4 < 4; i4++)
  for (let j3 of [idxL, idxR])
    j3.push(j3[i4].map((k6) => Rho[k6]));
var shifts = [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i4) => new Uint8Array(i4));
var shiftsL = idxL.map((idx, i4) => idx.map((j3) => shifts[i4][j3]));
var shiftsR = idxR.map((idx, i4) => idx.map((j3) => shifts[i4][j3]));
var Kl = new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]);
var Kr = new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function f(group, x4, y5, z4) {
  if (group === 0)
    return x4 ^ y5 ^ z4;
  else if (group === 1)
    return x4 & y5 | ~x4 & z4;
  else if (group === 2)
    return (x4 | ~y5) ^ z4;
  else if (group === 3)
    return x4 & z4 | y5 & ~z4;
  else
    return x4 ^ (y5 | ~z4);
}
var R_BUF = new Uint32Array(16);
var RIPEMD160 = class extends HashMD {
  constructor() {
    super(64, 20, 8, true);
    this.h0 = 1732584193 | 0;
    this.h1 = 4023233417 | 0;
    this.h2 = 2562383102 | 0;
    this.h3 = 271733878 | 0;
    this.h4 = 3285377520 | 0;
  }
  get() {
    const { h0, h1, h2: h22, h3: h32, h4: h42 } = this;
    return [h0, h1, h22, h32, h42];
  }
  set(h0, h1, h22, h32, h42) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h22 | 0;
    this.h3 = h32 | 0;
    this.h4 = h42 | 0;
  }
  process(view, offset) {
    for (let i4 = 0; i4 < 16; i4++, offset += 4)
      R_BUF[i4] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar4 = al, bl = this.h1 | 0, br4 = bl, cl = this.h2 | 0, cr4 = cl, dl = this.h3 | 0, dr4 = dl, el = this.h4 | 0, er4 = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr4 = idxR[group];
      const sl = shiftsL[group], sr4 = shiftsR[group];
      for (let i4 = 0; i4 < 16; i4++) {
        const tl = rotl(al + f(group, bl, cl, dl) + R_BUF[rl[i4]] + hbl, sl[i4]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i4 = 0; i4 < 16; i4++) {
        const tr4 = rotl(ar4 + f(rGroup, br4, cr4, dr4) + R_BUF[rr4[i4]] + hbr, sr4[i4]) + er4 | 0;
        ar4 = er4, er4 = dr4, dr4 = rotl(cr4, 10) | 0, cr4 = br4, br4 = tr4;
      }
    }
    this.set(this.h1 + cl + dr4 | 0, this.h2 + dl + er4 | 0, this.h3 + el + ar4 | 0, this.h4 + al + br4 | 0, this.h0 + bl + cr4 | 0);
  }
  roundClean() {
    R_BUF.fill(0);
  }
  destroy() {
    this.destroyed = true;
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0);
  }
};
var ripemd160 = wrapConstructor(() => new RIPEMD160());

// node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/nonceManager.js
function createNonceManager(parameters) {
  const { source } = parameters;
  const deltaMap = /* @__PURE__ */ new Map();
  const nonceMap = new LruMap(8192);
  const promiseMap = /* @__PURE__ */ new Map();
  const getKey = ({ address, chainId }) => `${address}.${chainId}`;
  return {
    async consume({ address, chainId, client }) {
      const key = getKey({ address, chainId });
      const promise = this.get({ address, chainId, client });
      this.increment({ address, chainId });
      const nonce = await promise;
      await source.set({ address, chainId }, nonce);
      nonceMap.set(key, nonce);
      return nonce;
    },
    async increment({ address, chainId }) {
      const key = getKey({ address, chainId });
      const delta = deltaMap.get(key) ?? 0;
      deltaMap.set(key, delta + 1);
    },
    async get({ address, chainId, client }) {
      const key = getKey({ address, chainId });
      let promise = promiseMap.get(key);
      if (!promise) {
        promise = (async () => {
          try {
            const nonce = await source.get({ address, chainId, client });
            const previousNonce = nonceMap.get(key) ?? 0;
            if (previousNonce > 0 && nonce <= previousNonce)
              return previousNonce + 1;
            nonceMap.delete(key);
            return nonce;
          } finally {
            this.reset({ address, chainId });
          }
        })();
        promiseMap.set(key, promise);
      }
      const delta = deltaMap.get(key) ?? 0;
      return delta + await promise;
    },
    reset({ address, chainId }) {
      const key = getKey({ address, chainId });
      deltaMap.delete(key);
      promiseMap.delete(key);
    }
  };
}
function jsonRpc() {
  return {
    async get(parameters) {
      const { address, client } = parameters;
      return getTransactionCount(client, {
        address,
        blockTag: "pending"
      });
    },
    set() {
    }
  };
}
var nonceManager = createNonceManager({
  source: jsonRpc()
});

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/version.js
var version = "0.1.1";

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/errors.js
function getVersion() {
  return version;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Errors.js
var BaseError2 = class _BaseError extends Error {
  constructor(shortMessage, options = {}) {
    const details = (() => {
      var _a;
      if (options.cause instanceof _BaseError) {
        if (options.cause.details)
          return options.cause.details;
        if (options.cause.shortMessage)
          return options.cause.shortMessage;
      }
      if ((_a = options.cause) == null ? void 0 : _a.message)
        return options.cause.message;
      return options.details;
    })();
    const docsPath = (() => {
      if (options.cause instanceof _BaseError)
        return options.cause.docsPath || options.docsPath;
      return options.docsPath;
    })();
    const docsBaseUrl = "https://oxlib.sh";
    const docs = `${docsBaseUrl}${docsPath ?? ""}`;
    const message = [
      shortMessage || "An error occurred.",
      ...options.metaMessages ? ["", ...options.metaMessages] : [],
      ...details || docsPath ? [
        "",
        details ? `Details: ${details}` : void 0,
        docsPath ? `See: ${docs}` : void 0
      ] : []
    ].filter((x4) => typeof x4 === "string").join("\n");
    super(message, options.cause ? { cause: options.cause } : void 0);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseError"
    });
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: `ox@${getVersion()}`
    });
    this.cause = options.cause;
    this.details = details;
    this.docs = docs;
    this.docsPath = docsPath;
    this.shortMessage = shortMessage;
  }
  walk(fn3) {
    return walk(this, fn3);
  }
};
function walk(err, fn3) {
  if (fn3 == null ? void 0 : fn3(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause)
    return walk(err.cause, fn3);
  return fn3 ? null : err;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/bytes.js
function assertSize(bytes, size_) {
  if (size2(bytes) > size_)
    throw new SizeOverflowError({
      givenSize: size2(bytes),
      maxSize: size_
    });
}
var charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function pad2(bytes, options = {}) {
  const { dir, size: size4 = 32 } = options;
  if (size4 === 0)
    return bytes;
  if (bytes.length > size4)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size4,
      type: "Bytes"
    });
  const paddedBytes = new Uint8Array(size4);
  for (let i4 = 0; i4 < size4; i4++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i4 : size4 - i4 - 1] = bytes[padEnd ? i4 : bytes.length - i4 - 1];
  }
  return paddedBytes;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/hex.js
function assertSize2(hex, size_) {
  if (size3(hex) > size_)
    throw new SizeOverflowError2({
      givenSize: size3(hex),
      maxSize: size_
    });
}
function pad3(hex_, options = {}) {
  const { dir, size: size4 = 32 } = options;
  if (size4 === 0)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size4 * 2)
    throw new SizeExceedsPaddingSizeError2({
      size: Math.ceil(hex.length / 2),
      targetSize: size4,
      type: "Hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size4 * 2, "0")}`;
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Bytes.js
var decoder = new TextDecoder();
var encoder = new TextEncoder();
function from(value) {
  if (value instanceof Uint8Array)
    return value;
  if (typeof value === "string")
    return fromHex2(value);
  return fromArray(value);
}
function fromArray(value) {
  return value instanceof Uint8Array ? value : new Uint8Array(value);
}
function fromHex2(value, options = {}) {
  const { size: size4 } = options;
  let hex = value;
  if (size4) {
    assertSize2(value, size4);
    hex = padRight(value, size4);
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length2 = hexString.length / 2;
  const bytes = new Uint8Array(length2);
  for (let index = 0, j3 = 0; index < length2; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j3++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j3++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError2(`Invalid byte sequence ("${hexString[j3 - 2]}${hexString[j3 - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function fromString(value, options = {}) {
  const { size: size4 } = options;
  const bytes = encoder.encode(value);
  if (typeof size4 === "number") {
    assertSize(bytes, size4);
    return padRight2(bytes, size4);
  }
  return bytes;
}
function padRight2(value, size4) {
  return pad2(value, { dir: "right", size: size4 });
}
function size2(value) {
  return value.length;
}
var SizeOverflowError = class extends BaseError2 {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeOverflowError"
    });
  }
};
var SizeExceedsPaddingSizeError = class extends BaseError2 {
  constructor({ size: size4, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size4}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Bytes.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Hex.js
var encoder2 = new TextEncoder();
var hexes = Array.from({ length: 256 }, (_v, i4) => i4.toString(16).padStart(2, "0"));
function concat2(...values) {
  return `0x${values.reduce((acc, x4) => acc + x4.replace("0x", ""), "")}`;
}
function fromBoolean(value, options = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof options.size === "number") {
    assertSize2(hex, options.size);
    return padLeft(hex, options.size);
  }
  return hex;
}
function fromBytes2(value, options = {}) {
  let string2 = "";
  for (let i4 = 0; i4 < value.length; i4++)
    string2 += hexes[value[i4]];
  const hex = `0x${string2}`;
  if (typeof options.size === "number") {
    assertSize2(hex, options.size);
    return padRight(hex, options.size);
  }
  return hex;
}
function fromNumber(value, options = {}) {
  const { signed, size: size4 } = options;
  const value_ = BigInt(value);
  let maxValue;
  if (size4) {
    if (signed)
      maxValue = (1n << BigInt(size4) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size4) * 8n) - 1n;
  } else if (typeof value === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value_ > maxValue || value_ < minValue) {
    const suffix = typeof value === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size4,
      value: `${value}${suffix}`
    });
  }
  const stringValue = (signed && value_ < 0 ? (1n << BigInt(size4 * 8)) + BigInt(value_) : value_).toString(16);
  const hex = `0x${stringValue}`;
  if (size4)
    return padLeft(hex, size4);
  return hex;
}
function fromString2(value, options = {}) {
  return fromBytes2(encoder2.encode(value), options);
}
function padLeft(value, size4) {
  return pad3(value, { dir: "left", size: size4 });
}
function padRight(value, size4) {
  return pad3(value, { dir: "right", size: size4 });
}
function size3(value) {
  return Math.ceil((value.length - 2) / 2);
}
var IntegerOutOfRangeError = class extends BaseError2 {
  constructor({ max, min, signed, size: size4, value }) {
    super(`Number \`${value}\` is not in safe${size4 ? ` ${size4 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
};
var SizeOverflowError2 = class extends BaseError2 {
  constructor({ givenSize, maxSize }) {
    super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeOverflowError"
    });
  }
};
var SizeExceedsPaddingSizeError2 = class extends BaseError2 {
  constructor({ size: size4, targetSize, type }) {
    super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size4}\`) exceeds padding size (\`${targetSize}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Hash.js
function keccak2562(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = keccak_256(from(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes2(bytes);
}

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/lru.js
var LruMap2 = class extends Map {
  constructor(size4) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size4;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
      this.delete(key);
      super.set(key, value);
    }
    return value;
  }
  set(key, value) {
    super.set(key, value);
    if (this.maxSize && this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey)
        this.delete(firstKey);
    }
    return this;
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Caches.js
var caches = {
  checksum: new LruMap2(8192)
};
var checksum = caches.checksum;

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Address.js
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert(value, options = {}) {
  const { strict = true } = options;
  if (!addressRegex.test(value))
    throw new InvalidAddressError2({
      address: value,
      cause: new InvalidInputError()
    });
  if (strict) {
    if (value.toLowerCase() === value)
      return;
    if (checksum2(value) !== value)
      throw new InvalidAddressError2({
        address: value,
        cause: new InvalidChecksumError()
      });
  }
}
function checksum2(address) {
  if (checksum.has(address))
    return checksum.get(address);
  assert(address, { strict: false });
  const hexAddress = address.substring(2).toLowerCase();
  const hash = keccak2562(fromString(hexAddress), { as: "Bytes" });
  const characters = hexAddress.split("");
  for (let i4 = 0; i4 < 40; i4 += 2) {
    if (hash[i4 >> 1] >> 4 >= 8 && characters[i4]) {
      characters[i4] = characters[i4].toUpperCase();
    }
    if ((hash[i4 >> 1] & 15) >= 8 && characters[i4 + 1]) {
      characters[i4 + 1] = characters[i4 + 1].toUpperCase();
    }
  }
  const result = `0x${characters.join("")}`;
  checksum.set(address, result);
  return result;
}
var InvalidAddressError2 = class extends BaseError2 {
  constructor({ address, cause }) {
    super(`Address "${address}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidAddressError"
    });
  }
};
var InvalidInputError = class extends BaseError2 {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidInputError"
    });
  }
};
var InvalidChecksumError = class extends BaseError2 {
  constructor() {
    super("Address does not match its checksum counterpart.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidChecksumError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/Solidity.js
var arrayRegex2 = /^(.*)\[([0-9]*)\]$/;
var bytesRegex2 = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex2 = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
var maxInt8 = 2n ** (8n - 1n) - 1n;
var maxInt16 = 2n ** (16n - 1n) - 1n;
var maxInt24 = 2n ** (24n - 1n) - 1n;
var maxInt32 = 2n ** (32n - 1n) - 1n;
var maxInt40 = 2n ** (40n - 1n) - 1n;
var maxInt48 = 2n ** (48n - 1n) - 1n;
var maxInt56 = 2n ** (56n - 1n) - 1n;
var maxInt64 = 2n ** (64n - 1n) - 1n;
var maxInt72 = 2n ** (72n - 1n) - 1n;
var maxInt80 = 2n ** (80n - 1n) - 1n;
var maxInt88 = 2n ** (88n - 1n) - 1n;
var maxInt96 = 2n ** (96n - 1n) - 1n;
var maxInt104 = 2n ** (104n - 1n) - 1n;
var maxInt112 = 2n ** (112n - 1n) - 1n;
var maxInt120 = 2n ** (120n - 1n) - 1n;
var maxInt128 = 2n ** (128n - 1n) - 1n;
var maxInt136 = 2n ** (136n - 1n) - 1n;
var maxInt144 = 2n ** (144n - 1n) - 1n;
var maxInt152 = 2n ** (152n - 1n) - 1n;
var maxInt160 = 2n ** (160n - 1n) - 1n;
var maxInt168 = 2n ** (168n - 1n) - 1n;
var maxInt176 = 2n ** (176n - 1n) - 1n;
var maxInt184 = 2n ** (184n - 1n) - 1n;
var maxInt192 = 2n ** (192n - 1n) - 1n;
var maxInt200 = 2n ** (200n - 1n) - 1n;
var maxInt208 = 2n ** (208n - 1n) - 1n;
var maxInt216 = 2n ** (216n - 1n) - 1n;
var maxInt224 = 2n ** (224n - 1n) - 1n;
var maxInt232 = 2n ** (232n - 1n) - 1n;
var maxInt240 = 2n ** (240n - 1n) - 1n;
var maxInt248 = 2n ** (248n - 1n) - 1n;
var maxInt256 = 2n ** (256n - 1n) - 1n;
var minInt8 = -(2n ** (8n - 1n));
var minInt16 = -(2n ** (16n - 1n));
var minInt24 = -(2n ** (24n - 1n));
var minInt32 = -(2n ** (32n - 1n));
var minInt40 = -(2n ** (40n - 1n));
var minInt48 = -(2n ** (48n - 1n));
var minInt56 = -(2n ** (56n - 1n));
var minInt64 = -(2n ** (64n - 1n));
var minInt72 = -(2n ** (72n - 1n));
var minInt80 = -(2n ** (80n - 1n));
var minInt88 = -(2n ** (88n - 1n));
var minInt96 = -(2n ** (96n - 1n));
var minInt104 = -(2n ** (104n - 1n));
var minInt112 = -(2n ** (112n - 1n));
var minInt120 = -(2n ** (120n - 1n));
var minInt128 = -(2n ** (128n - 1n));
var minInt136 = -(2n ** (136n - 1n));
var minInt144 = -(2n ** (144n - 1n));
var minInt152 = -(2n ** (152n - 1n));
var minInt160 = -(2n ** (160n - 1n));
var minInt168 = -(2n ** (168n - 1n));
var minInt176 = -(2n ** (176n - 1n));
var minInt184 = -(2n ** (184n - 1n));
var minInt192 = -(2n ** (192n - 1n));
var minInt200 = -(2n ** (200n - 1n));
var minInt208 = -(2n ** (208n - 1n));
var minInt216 = -(2n ** (216n - 1n));
var minInt224 = -(2n ** (224n - 1n));
var minInt232 = -(2n ** (232n - 1n));
var minInt240 = -(2n ** (240n - 1n));
var minInt248 = -(2n ** (248n - 1n));
var minInt256 = -(2n ** (256n - 1n));
var maxUint8 = 2n ** 8n - 1n;
var maxUint16 = 2n ** 16n - 1n;
var maxUint24 = 2n ** 24n - 1n;
var maxUint32 = 2n ** 32n - 1n;
var maxUint40 = 2n ** 40n - 1n;
var maxUint48 = 2n ** 48n - 1n;
var maxUint56 = 2n ** 56n - 1n;
var maxUint64 = 2n ** 64n - 1n;
var maxUint72 = 2n ** 72n - 1n;
var maxUint80 = 2n ** 80n - 1n;
var maxUint88 = 2n ** 88n - 1n;
var maxUint96 = 2n ** 96n - 1n;
var maxUint104 = 2n ** 104n - 1n;
var maxUint112 = 2n ** 112n - 1n;
var maxUint120 = 2n ** 120n - 1n;
var maxUint128 = 2n ** 128n - 1n;
var maxUint136 = 2n ** 136n - 1n;
var maxUint144 = 2n ** 144n - 1n;
var maxUint152 = 2n ** 152n - 1n;
var maxUint160 = 2n ** 160n - 1n;
var maxUint168 = 2n ** 168n - 1n;
var maxUint176 = 2n ** 176n - 1n;
var maxUint184 = 2n ** 184n - 1n;
var maxUint192 = 2n ** 192n - 1n;
var maxUint200 = 2n ** 200n - 1n;
var maxUint208 = 2n ** 208n - 1n;
var maxUint216 = 2n ** 216n - 1n;
var maxUint224 = 2n ** 224n - 1n;
var maxUint232 = 2n ** 232n - 1n;
var maxUint240 = 2n ** 240n - 1n;
var maxUint248 = 2n ** 248n - 1n;
var maxUint2562 = 2n ** 256n - 1n;

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/internal/cursor.js
var staticCursor = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new RecursiveReadLimitExceededError({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(position) {
    if (position < 0 || position > this.bytes.length - 1)
      throw new PositionOutOfBoundsError2({
        length: this.bytes.length,
        position
      });
  },
  decrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position - offset;
    this.assertPosition(position);
    this.position = position;
  },
  getReadCount(position) {
    return this.positionReadCount.get(position || this.position) || 0;
  },
  incrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position + offset;
    this.assertPosition(position);
    this.position = position;
  },
  inspectByte(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectBytes(length2, position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + length2 - 1);
    return this.bytes.subarray(position, position + length2);
  },
  inspectUint8(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectUint16(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 1);
    return this.dataView.getUint16(position);
  },
  inspectUint24(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 2);
    return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
  },
  inspectUint32(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 3);
    return this.dataView.getUint32(position);
  },
  pushByte(byte) {
    this.assertPosition(this.position);
    this.bytes[this.position] = byte;
    this.position++;
  },
  pushBytes(bytes) {
    this.assertPosition(this.position + bytes.length - 1);
    this.bytes.set(bytes, this.position);
    this.position += bytes.length;
  },
  pushUint8(value) {
    this.assertPosition(this.position);
    this.bytes[this.position] = value;
    this.position++;
  },
  pushUint16(value) {
    this.assertPosition(this.position + 1);
    this.dataView.setUint16(this.position, value);
    this.position += 2;
  },
  pushUint24(value) {
    this.assertPosition(this.position + 2);
    this.dataView.setUint16(this.position, value >> 8);
    this.dataView.setUint8(this.position + 2, value & ~4294967040);
    this.position += 3;
  },
  pushUint32(value) {
    this.assertPosition(this.position + 3);
    this.dataView.setUint32(this.position, value);
    this.position += 4;
  },
  readByte() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectByte();
    this.position++;
    return value;
  },
  readBytes(length2, size4) {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectBytes(length2);
    this.position += size4 ?? length2;
    return value;
  },
  readUint8() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint8();
    this.position += 1;
    return value;
  },
  readUint16() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint16();
    this.position += 2;
    return value;
  },
  readUint24() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint24();
    this.position += 3;
    return value;
  },
  readUint32() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint32();
    this.position += 4;
    return value;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(position) {
    const oldPosition = this.position;
    this.assertPosition(position);
    this.position = position;
    return () => this.position = oldPosition;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const count = this.getReadCount();
    this.positionReadCount.set(this.position, count + 1);
    if (count > 0)
      this.recursiveReadCount++;
  }
};
var NegativeOffsetError = class extends BaseError2 {
  constructor({ offset }) {
    super(`Offset \`${offset}\` cannot be negative.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.NegativeOffsetError"
    });
  }
};
var PositionOutOfBoundsError2 = class extends BaseError2 {
  constructor({ length: length2, position }) {
    super(`Position \`${position}\` is out of bounds (\`0 < position < ${length2}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.PositionOutOfBoundsError"
    });
  }
};
var RecursiveReadLimitExceededError = class extends BaseError2 {
  constructor({ count, limit }) {
    super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.RecursiveReadLimitExceededError"
    });
  }
};

// node_modules/@walletconnect/utils/node_modules/ox/_esm/core/AbiParameters.js
function encodePacked2(types, values) {
  if (types.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: types.length,
      givenLength: values.length
    });
  const data = [];
  for (let i4 = 0; i4 < types.length; i4++) {
    const type = types[i4];
    const value = values[i4];
    data.push(encodePacked2.encode(type, value));
  }
  return concat2(...data);
}
(function(encodePacked3) {
  function encode8(type, value, isArray = false) {
    if (type === "address") {
      const address = value;
      assert(address);
      return padLeft(address.toLowerCase(), isArray ? 32 : 0);
    }
    if (type === "string")
      return fromString2(value);
    if (type === "bytes")
      return value;
    if (type === "bool")
      return padLeft(fromBoolean(value), isArray ? 32 : 1);
    const intMatch = type.match(integerRegex2);
    if (intMatch) {
      const [_type, baseType, bits = "256"] = intMatch;
      const size4 = Number.parseInt(bits) / 8;
      return fromNumber(value, {
        size: isArray ? 32 : size4,
        signed: baseType === "int"
      });
    }
    const bytesMatch = type.match(bytesRegex2);
    if (bytesMatch) {
      const [_type, size4] = bytesMatch;
      if (Number.parseInt(size4) !== (value.length - 2) / 2)
        throw new BytesSizeMismatchError2({
          expectedSize: Number.parseInt(size4),
          value
        });
      return padRight(value, isArray ? 32 : 0);
    }
    const arrayMatch = type.match(arrayRegex2);
    if (arrayMatch && Array.isArray(value)) {
      const [_type, childType] = arrayMatch;
      const data = [];
      for (let i4 = 0; i4 < value.length; i4++) {
        data.push(encode8(childType, value[i4], true));
      }
      if (data.length === 0)
        return "0x";
      return concat2(...data);
    }
    throw new InvalidTypeError(type);
  }
  encodePacked3.encode = encode8;
})(encodePacked2 || (encodePacked2 = {}));
var BytesSizeMismatchError2 = class extends BaseError2 {
  constructor({ expectedSize, value }) {
    super(`Size of bytes "${value}" (bytes${size3(value)}) does not match expected size (bytes${expectedSize}).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.BytesSizeMismatchError"
    });
  }
};
var LengthMismatchError = class extends BaseError2 {
  constructor({ expectedLength, givenLength }) {
    super([
      "ABI encoding parameters/values length mismatch.",
      `Expected length (parameters): ${expectedLength}`,
      `Given length (values): ${givenLength}`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.LengthMismatchError"
    });
  }
};
var InvalidTypeError = class extends BaseError2 {
  constructor(type) {
    super(`Type \`${type}\` is not a valid ABI Type.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidTypeError"
    });
  }
};

// node_modules/base-x/src/esm/index.js
function base(ALPHABET2) {
  if (ALPHABET2.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  const BASE_MAP = new Uint8Array(256);
  for (let j3 = 0; j3 < BASE_MAP.length; j3++) {
    BASE_MAP[j3] = 255;
  }
  for (let i4 = 0; i4 < ALPHABET2.length; i4++) {
    const x4 = ALPHABET2.charAt(i4);
    const xc2 = x4.charCodeAt(0);
    if (BASE_MAP[xc2] !== 255) {
      throw new TypeError(x4 + " is ambiguous");
    }
    BASE_MAP[xc2] = i4;
  }
  const BASE = ALPHABET2.length;
  const LEADER = ALPHABET2.charAt(0);
  const FACTOR = Math.log(BASE) / Math.log(256);
  const iFACTOR = Math.log(256) / Math.log(BASE);
  function encode8(source) {
    if (source instanceof Uint8Array) {
    } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    let zeroes = 0;
    let length2 = 0;
    let pbegin = 0;
    const pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    const size4 = (pend - pbegin) * iFACTOR + 1 >>> 0;
    const b58 = new Uint8Array(size4);
    while (pbegin !== pend) {
      let carry = source[pbegin];
      let i4 = 0;
      for (let it1 = size4 - 1; (carry !== 0 || i4 < length2) && it1 !== -1; it1--, i4++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i4;
      pbegin++;
    }
    let it22 = size4 - length2;
    while (it22 !== size4 && b58[it22] === 0) {
      it22++;
    }
    let str = LEADER.repeat(zeroes);
    for (; it22 < size4; ++it22) {
      str += ALPHABET2.charAt(b58[it22]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    let psz = 0;
    let zeroes = 0;
    let length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    const size4 = (source.length - psz) * FACTOR + 1 >>> 0;
    const b256 = new Uint8Array(size4);
    while (psz < source.length) {
      const charCode = source.charCodeAt(psz);
      if (charCode > 255) {
        return;
      }
      let carry = BASE_MAP[charCode];
      if (carry === 255) {
        return;
      }
      let i4 = 0;
      for (let it3 = size4 - 1; (carry !== 0 || i4 < length2) && it3 !== -1; it3--, i4++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i4;
      psz++;
    }
    let it4 = size4 - length2;
    while (it4 !== size4 && b256[it4] === 0) {
      it4++;
    }
    const vch = new Uint8Array(zeroes + (size4 - it4));
    let j3 = zeroes;
    while (it4 !== size4) {
      vch[j3++] = b256[it4++];
    }
    return vch;
  }
  function decode7(string2) {
    const buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error("Non-base" + BASE + " character");
  }
  return {
    encode: encode8,
    decodeUnsafe,
    decode: decode7
  };
}
var esm_default = base;

// node_modules/bs58/src/esm/index.js
var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var esm_default2 = esm_default(ALPHABET);

// node_modules/@walletconnect/relay-auth/dist/index.es.js
var import_time = __toESM(require_cjs());

// node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}

// node_modules/@walletconnect/relay-auth/dist/index.es.js
function En(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe(t, ...e2) {
  if (!En(t)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
}
function De(t, e2 = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn(t, e2) {
  fe(t);
  const n5 = e2.outputLen;
  if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
}
var it = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
var _t = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function de(t) {
  return typeof t == "string" && (t = yn(t)), fe(t), t;
}
var xn = class {
  clone() {
    return this._cloneInto();
  }
};
function Bn(t) {
  const e2 = (r3) => t().update(de(r3)).digest(), n5 = t();
  return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = () => t(), e2;
}
function he(t = 32) {
  if (it && typeof it.getRandomValues == "function") return it.getRandomValues(new Uint8Array(t));
  if (it && typeof it.randomBytes == "function") return it.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function Cn(t, e2, n5, r3) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
  const o4 = BigInt(32), s3 = BigInt(4294967295), a3 = Number(n5 >> o4 & s3), u2 = Number(n5 & s3), i4 = r3 ? 4 : 0, D2 = r3 ? 0 : 4;
  t.setUint32(e2 + i4, a3, r3), t.setUint32(e2 + D2, u2, r3);
}
var An = class extends xn {
  constructor(e2, n5, r3, o4) {
    super(), this.blockLen = e2, this.outputLen = n5, this.padOffset = r3, this.isLE = o4, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e2), this.view = _t(this.buffer);
  }
  update(e2) {
    De(this);
    const { view: n5, buffer: r3, blockLen: o4 } = this;
    e2 = de(e2);
    const s3 = e2.length;
    for (let a3 = 0; a3 < s3; ) {
      const u2 = Math.min(o4 - this.pos, s3 - a3);
      if (u2 === o4) {
        const i4 = _t(e2);
        for (; o4 <= s3 - a3; a3 += o4) this.process(i4, a3);
        continue;
      }
      r3.set(e2.subarray(a3, a3 + u2), this.pos), this.pos += u2, a3 += u2, this.pos === o4 && (this.process(n5, 0), this.pos = 0);
    }
    return this.length += e2.length, this.roundClean(), this;
  }
  digestInto(e2) {
    De(this), gn(e2, this), this.finished = true;
    const { buffer: n5, view: r3, blockLen: o4, isLE: s3 } = this;
    let { pos: a3 } = this;
    n5[a3++] = 128, this.buffer.subarray(a3).fill(0), this.padOffset > o4 - a3 && (this.process(r3, 0), a3 = 0);
    for (let l6 = a3; l6 < o4; l6++) n5[l6] = 0;
    Cn(r3, o4 - 8, BigInt(this.length * 8), s3), this.process(r3, 0);
    const u2 = _t(e2), i4 = this.outputLen;
    if (i4 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const D2 = i4 / 4, c6 = this.get();
    if (D2 > c6.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l6 = 0; l6 < D2; l6++) u2.setUint32(4 * l6, c6[l6], s3);
  }
  digest() {
    const { buffer: e2, outputLen: n5 } = this;
    this.digestInto(e2);
    const r3 = e2.slice(0, n5);
    return this.destroy(), r3;
  }
  _cloneInto(e2) {
    e2 || (e2 = new this.constructor()), e2.set(...this.get());
    const { blockLen: n5, buffer: r3, length: o4, finished: s3, destroyed: a3, pos: u2 } = this;
    return e2.length = o4, e2.pos = u2, e2.finished = s3, e2.destroyed = a3, o4 % n5 && e2.buffer.set(r3), e2;
  }
};
var wt = BigInt(2 ** 32 - 1);
var St = BigInt(32);
function le(t, e2 = false) {
  return e2 ? { h: Number(t & wt), l: Number(t >> St & wt) } : { h: Number(t >> St & wt) | 0, l: Number(t & wt) | 0 };
}
function mn(t, e2 = false) {
  let n5 = new Uint32Array(t.length), r3 = new Uint32Array(t.length);
  for (let o4 = 0; o4 < t.length; o4++) {
    const { h: s3, l: a3 } = le(t[o4], e2);
    [n5[o4], r3[o4]] = [s3, a3];
  }
  return [n5, r3];
}
var _n = (t, e2) => BigInt(t >>> 0) << St | BigInt(e2 >>> 0);
var Sn = (t, e2, n5) => t >>> n5;
var vn = (t, e2, n5) => t << 32 - n5 | e2 >>> n5;
var In = (t, e2, n5) => t >>> n5 | e2 << 32 - n5;
var Un = (t, e2, n5) => t << 32 - n5 | e2 >>> n5;
var Tn = (t, e2, n5) => t << 64 - n5 | e2 >>> n5 - 32;
var Fn = (t, e2, n5) => t >>> n5 - 32 | e2 << 64 - n5;
var Nn = (t, e2) => e2;
var Ln = (t, e2) => t;
var On = (t, e2, n5) => t << n5 | e2 >>> 32 - n5;
var Hn = (t, e2, n5) => e2 << n5 | t >>> 32 - n5;
var zn = (t, e2, n5) => e2 << n5 - 32 | t >>> 64 - n5;
var Mn = (t, e2, n5) => t << n5 - 32 | e2 >>> 64 - n5;
function qn(t, e2, n5, r3) {
  const o4 = (e2 >>> 0) + (r3 >>> 0);
  return { h: t + n5 + (o4 / 2 ** 32 | 0) | 0, l: o4 | 0 };
}
var $n = (t, e2, n5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0);
var kn = (t, e2, n5, r3) => e2 + n5 + r3 + (t / 2 ** 32 | 0) | 0;
var Rn = (t, e2, n5, r3) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0);
var jn = (t, e2, n5, r3, o4) => e2 + n5 + r3 + o4 + (t / 2 ** 32 | 0) | 0;
var Zn = (t, e2, n5, r3, o4) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0) + (o4 >>> 0);
var Gn = (t, e2, n5, r3, o4, s3) => e2 + n5 + r3 + o4 + s3 + (t / 2 ** 32 | 0) | 0;
var x = { fromBig: le, split: mn, toBig: _n, shrSH: Sn, shrSL: vn, rotrSH: In, rotrSL: Un, rotrBH: Tn, rotrBL: Fn, rotr32H: Nn, rotr32L: Ln, rotlSH: On, rotlSL: Hn, rotlBH: zn, rotlBL: Mn, add: qn, add3L: $n, add3H: kn, add4L: Rn, add4H: jn, add5H: Gn, add5L: Zn };
var [Vn, Yn] = (() => x.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))))();
var P = new Uint32Array(80);
var Q = new Uint32Array(80);
var Jn = class extends An {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e2, Al: n5, Bh: r3, Bl: o4, Ch: s3, Cl: a3, Dh: u2, Dl: i4, Eh: D2, El: c6, Fh: l6, Fl: p4, Gh: w4, Gl: h5, Hh: g3, Hl: S4 } = this;
    return [e2, n5, r3, o4, s3, a3, u2, i4, D2, c6, l6, p4, w4, h5, g3, S4];
  }
  set(e2, n5, r3, o4, s3, a3, u2, i4, D2, c6, l6, p4, w4, h5, g3, S4) {
    this.Ah = e2 | 0, this.Al = n5 | 0, this.Bh = r3 | 0, this.Bl = o4 | 0, this.Ch = s3 | 0, this.Cl = a3 | 0, this.Dh = u2 | 0, this.Dl = i4 | 0, this.Eh = D2 | 0, this.El = c6 | 0, this.Fh = l6 | 0, this.Fl = p4 | 0, this.Gh = w4 | 0, this.Gl = h5 | 0, this.Hh = g3 | 0, this.Hl = S4 | 0;
  }
  process(e2, n5) {
    for (let d4 = 0; d4 < 16; d4++, n5 += 4) P[d4] = e2.getUint32(n5), Q[d4] = e2.getUint32(n5 += 4);
    for (let d4 = 16; d4 < 80; d4++) {
      const m3 = P[d4 - 15] | 0, F3 = Q[d4 - 15] | 0, q2 = x.rotrSH(m3, F3, 1) ^ x.rotrSH(m3, F3, 8) ^ x.shrSH(m3, F3, 7), z4 = x.rotrSL(m3, F3, 1) ^ x.rotrSL(m3, F3, 8) ^ x.shrSL(m3, F3, 7), I3 = P[d4 - 2] | 0, O5 = Q[d4 - 2] | 0, ot2 = x.rotrSH(I3, O5, 19) ^ x.rotrBH(I3, O5, 61) ^ x.shrSH(I3, O5, 6), tt3 = x.rotrSL(I3, O5, 19) ^ x.rotrBL(I3, O5, 61) ^ x.shrSL(I3, O5, 6), st2 = x.add4L(z4, tt3, Q[d4 - 7], Q[d4 - 16]), at2 = x.add4H(st2, q2, ot2, P[d4 - 7], P[d4 - 16]);
      P[d4] = at2 | 0, Q[d4] = st2 | 0;
    }
    let { Ah: r3, Al: o4, Bh: s3, Bl: a3, Ch: u2, Cl: i4, Dh: D2, Dl: c6, Eh: l6, El: p4, Fh: w4, Fl: h5, Gh: g3, Gl: S4, Hh: v6, Hl: L3 } = this;
    for (let d4 = 0; d4 < 80; d4++) {
      const m3 = x.rotrSH(l6, p4, 14) ^ x.rotrSH(l6, p4, 18) ^ x.rotrBH(l6, p4, 41), F3 = x.rotrSL(l6, p4, 14) ^ x.rotrSL(l6, p4, 18) ^ x.rotrBL(l6, p4, 41), q2 = l6 & w4 ^ ~l6 & g3, z4 = p4 & h5 ^ ~p4 & S4, I3 = x.add5L(L3, F3, z4, Yn[d4], Q[d4]), O5 = x.add5H(I3, v6, m3, q2, Vn[d4], P[d4]), ot2 = I3 | 0, tt3 = x.rotrSH(r3, o4, 28) ^ x.rotrBH(r3, o4, 34) ^ x.rotrBH(r3, o4, 39), st2 = x.rotrSL(r3, o4, 28) ^ x.rotrBL(r3, o4, 34) ^ x.rotrBL(r3, o4, 39), at2 = r3 & s3 ^ r3 & u2 ^ s3 & u2, Ct3 = o4 & a3 ^ o4 & i4 ^ a3 & i4;
      v6 = g3 | 0, L3 = S4 | 0, g3 = w4 | 0, S4 = h5 | 0, w4 = l6 | 0, h5 = p4 | 0, { h: l6, l: p4 } = x.add(D2 | 0, c6 | 0, O5 | 0, ot2 | 0), D2 = u2 | 0, c6 = i4 | 0, u2 = s3 | 0, i4 = a3 | 0, s3 = r3 | 0, a3 = o4 | 0;
      const At3 = x.add3L(ot2, st2, Ct3);
      r3 = x.add3H(At3, O5, tt3, at2), o4 = At3 | 0;
    }
    ({ h: r3, l: o4 } = x.add(this.Ah | 0, this.Al | 0, r3 | 0, o4 | 0)), { h: s3, l: a3 } = x.add(this.Bh | 0, this.Bl | 0, s3 | 0, a3 | 0), { h: u2, l: i4 } = x.add(this.Ch | 0, this.Cl | 0, u2 | 0, i4 | 0), { h: D2, l: c6 } = x.add(this.Dh | 0, this.Dl | 0, D2 | 0, c6 | 0), { h: l6, l: p4 } = x.add(this.Eh | 0, this.El | 0, l6 | 0, p4 | 0), { h: w4, l: h5 } = x.add(this.Fh | 0, this.Fl | 0, w4 | 0, h5 | 0), { h: g3, l: S4 } = x.add(this.Gh | 0, this.Gl | 0, g3 | 0, S4 | 0), { h: v6, l: L3 } = x.add(this.Hh | 0, this.Hl | 0, v6 | 0, L3 | 0), this.set(r3, o4, s3, a3, u2, i4, D2, c6, l6, p4, w4, h5, g3, S4, v6, L3);
  }
  roundClean() {
    P.fill(0), Q.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var Kn = Bn(() => new Jn());
var vt = BigInt(0);
var be = BigInt(1);
var Wn = BigInt(2);
function It(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut(t) {
  if (!It(t)) throw new Error("Uint8Array expected");
}
function Tt(t, e2) {
  if (typeof e2 != "boolean") throw new Error(t + " boolean expected, got " + e2);
}
var Xn = Array.from({ length: 256 }, (t, e2) => e2.toString(16).padStart(2, "0"));
function Ft(t) {
  Ut(t);
  let e2 = "";
  for (let n5 = 0; n5 < t.length; n5++) e2 += Xn[t[n5]];
  return e2;
}
function pe(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? vt : BigInt("0x" + t);
}
var K = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function we(t) {
  if (t >= K._0 && t <= K._9) return t - K._0;
  if (t >= K.A && t <= K.F) return t - (K.A - 10);
  if (t >= K.a && t <= K.f) return t - (K.a - 10);
}
function Ee(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e2 = t.length, n5 = e2 / 2;
  if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
  const r3 = new Uint8Array(n5);
  for (let o4 = 0, s3 = 0; o4 < n5; o4++, s3 += 2) {
    const a3 = we(t.charCodeAt(s3)), u2 = we(t.charCodeAt(s3 + 1));
    if (a3 === void 0 || u2 === void 0) {
      const i4 = t[s3] + t[s3 + 1];
      throw new Error('hex string expected, got non-hex character "' + i4 + '" at index ' + s3);
    }
    r3[o4] = a3 * 16 + u2;
  }
  return r3;
}
function Pn(t) {
  return pe(Ft(t));
}
function Et(t) {
  return Ut(t), pe(Ft(Uint8Array.from(t).reverse()));
}
function ge(t, e2) {
  return Ee(t.toString(16).padStart(e2 * 2, "0"));
}
function Nt(t, e2) {
  return ge(t, e2).reverse();
}
function W(t, e2, n5) {
  let r3;
  if (typeof e2 == "string") try {
    r3 = Ee(e2);
  } catch (s3) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + s3);
  }
  else if (It(e2)) r3 = Uint8Array.from(e2);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o4 = r3.length;
  if (typeof n5 == "number" && o4 !== n5) throw new Error(t + " of length " + n5 + " expected, got " + o4);
  return r3;
}
function ye(...t) {
  let e2 = 0;
  for (let r3 = 0; r3 < t.length; r3++) {
    const o4 = t[r3];
    Ut(o4), e2 += o4.length;
  }
  const n5 = new Uint8Array(e2);
  for (let r3 = 0, o4 = 0; r3 < t.length; r3++) {
    const s3 = t[r3];
    n5.set(s3, o4), o4 += s3.length;
  }
  return n5;
}
var Lt = (t) => typeof t == "bigint" && vt <= t;
function Qn(t, e2, n5) {
  return Lt(t) && Lt(e2) && Lt(n5) && e2 <= t && t < n5;
}
function ft(t, e2, n5, r3) {
  if (!Qn(e2, n5, r3)) throw new Error("expected valid " + t + ": " + n5 + " <= n < " + r3 + ", got " + e2);
}
function tr(t) {
  let e2;
  for (e2 = 0; t > vt; t >>= be, e2 += 1) ;
  return e2;
}
var er = (t) => (Wn << BigInt(t - 1)) - be;
var nr = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || It(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e2) => e2.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Ot(t, e2, n5 = {}) {
  const r3 = (o4, s3, a3) => {
    const u2 = nr[s3];
    if (typeof u2 != "function") throw new Error("invalid validator function");
    const i4 = t[o4];
    if (!(a3 && i4 === void 0) && !u2(i4, t)) throw new Error("param " + String(o4) + " is invalid. Expected " + s3 + ", got " + i4);
  };
  for (const [o4, s3] of Object.entries(e2)) r3(o4, s3, false);
  for (const [o4, s3] of Object.entries(n5)) r3(o4, s3, true);
  return t;
}
function xe(t) {
  const e2 = /* @__PURE__ */ new WeakMap();
  return (n5, ...r3) => {
    const o4 = e2.get(n5);
    if (o4 !== void 0) return o4;
    const s3 = t(n5, ...r3);
    return e2.set(n5, s3), s3;
  };
}
var M = BigInt(0);
var N = BigInt(1);
var nt = BigInt(2);
var rr = BigInt(3);
var Ht = BigInt(4);
var Be = BigInt(5);
var Ce = BigInt(8);
function H(t, e2) {
  const n5 = t % e2;
  return n5 >= M ? n5 : e2 + n5;
}
function or(t, e2, n5) {
  if (e2 < M) throw new Error("invalid exponent, negatives unsupported");
  if (n5 <= M) throw new Error("invalid modulus");
  if (n5 === N) return M;
  let r3 = N;
  for (; e2 > M; ) e2 & N && (r3 = r3 * t % n5), t = t * t % n5, e2 >>= N;
  return r3;
}
function J(t, e2, n5) {
  let r3 = t;
  for (; e2-- > M; ) r3 *= r3, r3 %= n5;
  return r3;
}
function Ae(t, e2) {
  if (t === M) throw new Error("invert: expected non-zero number");
  if (e2 <= M) throw new Error("invert: expected positive modulus, got " + e2);
  let n5 = H(t, e2), r3 = e2, o4 = M, s3 = N;
  for (; n5 !== M; ) {
    const u2 = r3 / n5, i4 = r3 % n5, D2 = o4 - s3 * u2;
    r3 = n5, n5 = i4, o4 = s3, s3 = D2;
  }
  if (r3 !== N) throw new Error("invert: does not exist");
  return H(o4, e2);
}
function sr(t) {
  const e2 = (t - N) / nt;
  let n5, r3, o4;
  for (n5 = t - N, r3 = 0; n5 % nt === M; n5 /= nt, r3++) ;
  for (o4 = nt; o4 < t && or(o4, e2, t) !== t - N; o4++) if (o4 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r3 === 1) {
    const a3 = (t + N) / Ht;
    return function(i4, D2) {
      const c6 = i4.pow(D2, a3);
      if (!i4.eql(i4.sqr(c6), D2)) throw new Error("Cannot find square root");
      return c6;
    };
  }
  const s3 = (n5 + N) / nt;
  return function(u2, i4) {
    if (u2.pow(i4, e2) === u2.neg(u2.ONE)) throw new Error("Cannot find square root");
    let D2 = r3, c6 = u2.pow(u2.mul(u2.ONE, o4), n5), l6 = u2.pow(i4, s3), p4 = u2.pow(i4, n5);
    for (; !u2.eql(p4, u2.ONE); ) {
      if (u2.eql(p4, u2.ZERO)) return u2.ZERO;
      let w4 = 1;
      for (let g3 = u2.sqr(p4); w4 < D2 && !u2.eql(g3, u2.ONE); w4++) g3 = u2.sqr(g3);
      const h5 = u2.pow(c6, N << BigInt(D2 - w4 - 1));
      c6 = u2.sqr(h5), l6 = u2.mul(l6, h5), p4 = u2.mul(p4, c6), D2 = w4;
    }
    return l6;
  };
}
function ir(t) {
  if (t % Ht === rr) {
    const e2 = (t + N) / Ht;
    return function(r3, o4) {
      const s3 = r3.pow(o4, e2);
      if (!r3.eql(r3.sqr(s3), o4)) throw new Error("Cannot find square root");
      return s3;
    };
  }
  if (t % Ce === Be) {
    const e2 = (t - Be) / Ce;
    return function(r3, o4) {
      const s3 = r3.mul(o4, nt), a3 = r3.pow(s3, e2), u2 = r3.mul(o4, a3), i4 = r3.mul(r3.mul(u2, nt), a3), D2 = r3.mul(u2, r3.sub(i4, r3.ONE));
      if (!r3.eql(r3.sqr(D2), o4)) throw new Error("Cannot find square root");
      return D2;
    };
  }
  return sr(t);
}
var ur = (t, e2) => (H(t, e2) & N) === N;
var cr = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function ar(t) {
  const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n5 = cr.reduce((r3, o4) => (r3[o4] = "function", r3), e2);
  return Ot(t, n5);
}
function fr(t, e2, n5) {
  if (n5 < M) throw new Error("invalid exponent, negatives unsupported");
  if (n5 === M) return t.ONE;
  if (n5 === N) return e2;
  let r3 = t.ONE, o4 = e2;
  for (; n5 > M; ) n5 & N && (r3 = t.mul(r3, o4)), o4 = t.sqr(o4), n5 >>= N;
  return r3;
}
function Dr(t, e2) {
  const n5 = new Array(e2.length), r3 = e2.reduce((s3, a3, u2) => t.is0(a3) ? s3 : (n5[u2] = s3, t.mul(s3, a3)), t.ONE), o4 = t.inv(r3);
  return e2.reduceRight((s3, a3, u2) => t.is0(a3) ? s3 : (n5[u2] = t.mul(s3, n5[u2]), t.mul(s3, a3)), o4), n5;
}
function me(t, e2) {
  const n5 = e2 !== void 0 ? e2 : t.toString(2).length, r3 = Math.ceil(n5 / 8);
  return { nBitLength: n5, nByteLength: r3 };
}
function _e(t, e2, n5 = false, r3 = {}) {
  if (t <= M) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: o4, nByteLength: s3 } = me(t, e2);
  if (s3 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a3;
  const u2 = Object.freeze({ ORDER: t, isLE: n5, BITS: o4, BYTES: s3, MASK: er(o4), ZERO: M, ONE: N, create: (i4) => H(i4, t), isValid: (i4) => {
    if (typeof i4 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i4);
    return M <= i4 && i4 < t;
  }, is0: (i4) => i4 === M, isOdd: (i4) => (i4 & N) === N, neg: (i4) => H(-i4, t), eql: (i4, D2) => i4 === D2, sqr: (i4) => H(i4 * i4, t), add: (i4, D2) => H(i4 + D2, t), sub: (i4, D2) => H(i4 - D2, t), mul: (i4, D2) => H(i4 * D2, t), pow: (i4, D2) => fr(u2, i4, D2), div: (i4, D2) => H(i4 * Ae(D2, t), t), sqrN: (i4) => i4 * i4, addN: (i4, D2) => i4 + D2, subN: (i4, D2) => i4 - D2, mulN: (i4, D2) => i4 * D2, inv: (i4) => Ae(i4, t), sqrt: r3.sqrt || ((i4) => (a3 || (a3 = ir(t)), a3(u2, i4))), invertBatch: (i4) => Dr(u2, i4), cmov: (i4, D2, c6) => c6 ? D2 : i4, toBytes: (i4) => n5 ? Nt(i4, s3) : ge(i4, s3), fromBytes: (i4) => {
    if (i4.length !== s3) throw new Error("Field.fromBytes: expected " + s3 + " bytes, got " + i4.length);
    return n5 ? Et(i4) : Pn(i4);
  } });
  return Object.freeze(u2);
}
var Se = BigInt(0);
var gt = BigInt(1);
function zt(t, e2) {
  const n5 = e2.negate();
  return t ? n5 : e2;
}
function ve(t, e2) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t);
}
function Mt(t, e2) {
  ve(t, e2);
  const n5 = Math.ceil(e2 / t) + 1, r3 = 2 ** (t - 1);
  return { windows: n5, windowSize: r3 };
}
function dr(t, e2) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n5, r3) => {
    if (!(n5 instanceof e2)) throw new Error("invalid point at index " + r3);
  });
}
function hr(t, e2) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n5, r3) => {
    if (!e2.isValid(n5)) throw new Error("invalid scalar at index " + r3);
  });
}
var qt = /* @__PURE__ */ new WeakMap();
var Ie = /* @__PURE__ */ new WeakMap();
function $t(t) {
  return Ie.get(t) || 1;
}
function lr(t, e2) {
  return { constTimeNegate: zt, hasPrecomputes(n5) {
    return $t(n5) !== 1;
  }, unsafeLadder(n5, r3, o4 = t.ZERO) {
    let s3 = n5;
    for (; r3 > Se; ) r3 & gt && (o4 = o4.add(s3)), s3 = s3.double(), r3 >>= gt;
    return o4;
  }, precomputeWindow(n5, r3) {
    const { windows: o4, windowSize: s3 } = Mt(r3, e2), a3 = [];
    let u2 = n5, i4 = u2;
    for (let D2 = 0; D2 < o4; D2++) {
      i4 = u2, a3.push(i4);
      for (let c6 = 1; c6 < s3; c6++) i4 = i4.add(u2), a3.push(i4);
      u2 = i4.double();
    }
    return a3;
  }, wNAF(n5, r3, o4) {
    const { windows: s3, windowSize: a3 } = Mt(n5, e2);
    let u2 = t.ZERO, i4 = t.BASE;
    const D2 = BigInt(2 ** n5 - 1), c6 = 2 ** n5, l6 = BigInt(n5);
    for (let p4 = 0; p4 < s3; p4++) {
      const w4 = p4 * a3;
      let h5 = Number(o4 & D2);
      o4 >>= l6, h5 > a3 && (h5 -= c6, o4 += gt);
      const g3 = w4, S4 = w4 + Math.abs(h5) - 1, v6 = p4 % 2 !== 0, L3 = h5 < 0;
      h5 === 0 ? i4 = i4.add(zt(v6, r3[g3])) : u2 = u2.add(zt(L3, r3[S4]));
    }
    return { p: u2, f: i4 };
  }, wNAFUnsafe(n5, r3, o4, s3 = t.ZERO) {
    const { windows: a3, windowSize: u2 } = Mt(n5, e2), i4 = BigInt(2 ** n5 - 1), D2 = 2 ** n5, c6 = BigInt(n5);
    for (let l6 = 0; l6 < a3; l6++) {
      const p4 = l6 * u2;
      if (o4 === Se) break;
      let w4 = Number(o4 & i4);
      if (o4 >>= c6, w4 > u2 && (w4 -= D2, o4 += gt), w4 === 0) continue;
      let h5 = r3[p4 + Math.abs(w4) - 1];
      w4 < 0 && (h5 = h5.negate()), s3 = s3.add(h5);
    }
    return s3;
  }, getPrecomputes(n5, r3, o4) {
    let s3 = qt.get(r3);
    return s3 || (s3 = this.precomputeWindow(r3, n5), n5 !== 1 && qt.set(r3, o4(s3))), s3;
  }, wNAFCached(n5, r3, o4) {
    const s3 = $t(n5);
    return this.wNAF(s3, this.getPrecomputes(s3, n5, o4), r3);
  }, wNAFCachedUnsafe(n5, r3, o4, s3) {
    const a3 = $t(n5);
    return a3 === 1 ? this.unsafeLadder(n5, r3, s3) : this.wNAFUnsafe(a3, this.getPrecomputes(a3, n5, o4), r3, s3);
  }, setWindowSize(n5, r3) {
    ve(r3, e2), Ie.set(n5, r3), qt.delete(n5);
  } };
}
function br(t, e2, n5, r3) {
  if (dr(n5, t), hr(r3, e2), n5.length !== r3.length) throw new Error("arrays of points and scalars must have equal length");
  const o4 = t.ZERO, s3 = tr(BigInt(n5.length)), a3 = s3 > 12 ? s3 - 3 : s3 > 4 ? s3 - 2 : s3 ? 2 : 1, u2 = (1 << a3) - 1, i4 = new Array(u2 + 1).fill(o4), D2 = Math.floor((e2.BITS - 1) / a3) * a3;
  let c6 = o4;
  for (let l6 = D2; l6 >= 0; l6 -= a3) {
    i4.fill(o4);
    for (let w4 = 0; w4 < r3.length; w4++) {
      const h5 = r3[w4], g3 = Number(h5 >> BigInt(l6) & BigInt(u2));
      i4[g3] = i4[g3].add(n5[w4]);
    }
    let p4 = o4;
    for (let w4 = i4.length - 1, h5 = o4; w4 > 0; w4--) h5 = h5.add(i4[w4]), p4 = p4.add(h5);
    if (c6 = c6.add(p4), l6 !== 0) for (let w4 = 0; w4 < a3; w4++) c6 = c6.double();
  }
  return c6;
}
function pr(t) {
  return ar(t.Fp), Ot(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...me(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
var G = BigInt(0);
var j = BigInt(1);
var yt = BigInt(2);
var wr = BigInt(8);
var Er = { zip215: true };
function gr(t) {
  const e2 = pr(t);
  return Ot(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e2 });
}
function yr(t) {
  const e2 = gr(t), { Fp: n5, n: r3, prehash: o4, hash: s3, randomBytes: a3, nByteLength: u2, h: i4 } = e2, D2 = yt << BigInt(u2 * 8) - j, c6 = n5.create, l6 = _e(e2.n, e2.nBitLength), p4 = e2.uvRatio || ((y5, f6) => {
    try {
      return { isValid: true, value: n5.sqrt(y5 * n5.inv(f6)) };
    } catch {
      return { isValid: false, value: G };
    }
  }), w4 = e2.adjustScalarBytes || ((y5) => y5), h5 = e2.domain || ((y5, f6, b5) => {
    if (Tt("phflag", b5), f6.length || b5) throw new Error("Contexts/pre-hash are not supported");
    return y5;
  });
  function g3(y5, f6) {
    ft("coordinate " + y5, f6, G, D2);
  }
  function S4(y5) {
    if (!(y5 instanceof d4)) throw new Error("ExtendedPoint expected");
  }
  const v6 = xe((y5, f6) => {
    const { ex: b5, ey: E5, ez: B3 } = y5, C5 = y5.is0();
    f6 == null && (f6 = C5 ? wr : n5.inv(B3));
    const A3 = c6(b5 * f6), U2 = c6(E5 * f6), _3 = c6(B3 * f6);
    if (C5) return { x: G, y: j };
    if (_3 !== j) throw new Error("invZ was invalid");
    return { x: A3, y: U2 };
  }), L3 = xe((y5) => {
    const { a: f6, d: b5 } = e2;
    if (y5.is0()) throw new Error("bad point: ZERO");
    const { ex: E5, ey: B3, ez: C5, et: A3 } = y5, U2 = c6(E5 * E5), _3 = c6(B3 * B3), T3 = c6(C5 * C5), $3 = c6(T3 * T3), R3 = c6(U2 * f6), V4 = c6(T3 * c6(R3 + _3)), Y3 = c6($3 + c6(b5 * c6(U2 * _3)));
    if (V4 !== Y3) throw new Error("bad point: equation left != right (1)");
    const Z2 = c6(E5 * B3), X2 = c6(C5 * A3);
    if (Z2 !== X2) throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class d4 {
    constructor(f6, b5, E5, B3) {
      this.ex = f6, this.ey = b5, this.ez = E5, this.et = B3, g3("x", f6), g3("y", b5), g3("z", E5), g3("t", B3), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(f6) {
      if (f6 instanceof d4) throw new Error("extended point not allowed");
      const { x: b5, y: E5 } = f6 || {};
      return g3("x", b5), g3("y", E5), new d4(b5, E5, j, c6(b5 * E5));
    }
    static normalizeZ(f6) {
      const b5 = n5.invertBatch(f6.map((E5) => E5.ez));
      return f6.map((E5, B3) => E5.toAffine(b5[B3])).map(d4.fromAffine);
    }
    static msm(f6, b5) {
      return br(d4, l6, f6, b5);
    }
    _setWindowSize(f6) {
      q2.setWindowSize(this, f6);
    }
    assertValidity() {
      L3(this);
    }
    equals(f6) {
      S4(f6);
      const { ex: b5, ey: E5, ez: B3 } = this, { ex: C5, ey: A3, ez: U2 } = f6, _3 = c6(b5 * U2), T3 = c6(C5 * B3), $3 = c6(E5 * U2), R3 = c6(A3 * B3);
      return _3 === T3 && $3 === R3;
    }
    is0() {
      return this.equals(d4.ZERO);
    }
    negate() {
      return new d4(c6(-this.ex), this.ey, this.ez, c6(-this.et));
    }
    double() {
      const { a: f6 } = e2, { ex: b5, ey: E5, ez: B3 } = this, C5 = c6(b5 * b5), A3 = c6(E5 * E5), U2 = c6(yt * c6(B3 * B3)), _3 = c6(f6 * C5), T3 = b5 + E5, $3 = c6(c6(T3 * T3) - C5 - A3), R3 = _3 + A3, V4 = R3 - U2, Y3 = _3 - A3, Z2 = c6($3 * V4), X2 = c6(R3 * Y3), et2 = c6($3 * Y3), pt3 = c6(V4 * R3);
      return new d4(Z2, X2, pt3, et2);
    }
    add(f6) {
      S4(f6);
      const { a: b5, d: E5 } = e2, { ex: B3, ey: C5, ez: A3, et: U2 } = this, { ex: _3, ey: T3, ez: $3, et: R3 } = f6;
      if (b5 === BigInt(-1)) {
        const re3 = c6((C5 - B3) * (T3 + _3)), oe2 = c6((C5 + B3) * (T3 - _3)), mt3 = c6(oe2 - re3);
        if (mt3 === G) return this.double();
        const se3 = c6(A3 * yt * R3), ie3 = c6(U2 * yt * $3), ue3 = ie3 + se3, ce3 = oe2 + re3, ae2 = ie3 - se3, Dn2 = c6(ue3 * mt3), dn3 = c6(ce3 * ae2), hn3 = c6(ue3 * ae2), ln3 = c6(mt3 * ce3);
        return new d4(Dn2, dn3, ln3, hn3);
      }
      const V4 = c6(B3 * _3), Y3 = c6(C5 * T3), Z2 = c6(U2 * E5 * R3), X2 = c6(A3 * $3), et2 = c6((B3 + C5) * (_3 + T3) - V4 - Y3), pt3 = X2 - Z2, ee3 = X2 + Z2, ne2 = c6(Y3 - b5 * V4), un3 = c6(et2 * pt3), cn3 = c6(ee3 * ne2), an3 = c6(et2 * ne2), fn3 = c6(pt3 * ee3);
      return new d4(un3, cn3, fn3, an3);
    }
    subtract(f6) {
      return this.add(f6.negate());
    }
    wNAF(f6) {
      return q2.wNAFCached(this, f6, d4.normalizeZ);
    }
    multiply(f6) {
      const b5 = f6;
      ft("scalar", b5, j, r3);
      const { p: E5, f: B3 } = this.wNAF(b5);
      return d4.normalizeZ([E5, B3])[0];
    }
    multiplyUnsafe(f6, b5 = d4.ZERO) {
      const E5 = f6;
      return ft("scalar", E5, G, r3), E5 === G ? F3 : this.is0() || E5 === j ? this : q2.wNAFCachedUnsafe(this, E5, d4.normalizeZ, b5);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i4).is0();
    }
    isTorsionFree() {
      return q2.unsafeLadder(this, r3).is0();
    }
    toAffine(f6) {
      return v6(this, f6);
    }
    clearCofactor() {
      const { h: f6 } = e2;
      return f6 === j ? this : this.multiplyUnsafe(f6);
    }
    static fromHex(f6, b5 = false) {
      const { d: E5, a: B3 } = e2, C5 = n5.BYTES;
      f6 = W("pointHex", f6, C5), Tt("zip215", b5);
      const A3 = f6.slice(), U2 = f6[C5 - 1];
      A3[C5 - 1] = U2 & -129;
      const _3 = Et(A3), T3 = b5 ? D2 : n5.ORDER;
      ft("pointHex.y", _3, G, T3);
      const $3 = c6(_3 * _3), R3 = c6($3 - j), V4 = c6(E5 * $3 - B3);
      let { isValid: Y3, value: Z2 } = p4(R3, V4);
      if (!Y3) throw new Error("Point.fromHex: invalid y coordinate");
      const X2 = (Z2 & j) === j, et2 = (U2 & 128) !== 0;
      if (!b5 && Z2 === G && et2) throw new Error("Point.fromHex: x=0 and x_0=1");
      return et2 !== X2 && (Z2 = c6(-Z2)), d4.fromAffine({ x: Z2, y: _3 });
    }
    static fromPrivateKey(f6) {
      return O5(f6).point;
    }
    toRawBytes() {
      const { x: f6, y: b5 } = this.toAffine(), E5 = Nt(b5, n5.BYTES);
      return E5[E5.length - 1] |= f6 & j ? 128 : 0, E5;
    }
    toHex() {
      return Ft(this.toRawBytes());
    }
  }
  d4.BASE = new d4(e2.Gx, e2.Gy, j, c6(e2.Gx * e2.Gy)), d4.ZERO = new d4(G, j, j, G);
  const { BASE: m3, ZERO: F3 } = d4, q2 = lr(d4, u2 * 8);
  function z4(y5) {
    return H(y5, r3);
  }
  function I3(y5) {
    return z4(Et(y5));
  }
  function O5(y5) {
    const f6 = n5.BYTES;
    y5 = W("private key", y5, f6);
    const b5 = W("hashed private key", s3(y5), 2 * f6), E5 = w4(b5.slice(0, f6)), B3 = b5.slice(f6, 2 * f6), C5 = I3(E5), A3 = m3.multiply(C5), U2 = A3.toRawBytes();
    return { head: E5, prefix: B3, scalar: C5, point: A3, pointBytes: U2 };
  }
  function ot2(y5) {
    return O5(y5).pointBytes;
  }
  function tt3(y5 = new Uint8Array(), ...f6) {
    const b5 = ye(...f6);
    return I3(s3(h5(b5, W("context", y5), !!o4)));
  }
  function st2(y5, f6, b5 = {}) {
    y5 = W("message", y5), o4 && (y5 = o4(y5));
    const { prefix: E5, scalar: B3, pointBytes: C5 } = O5(f6), A3 = tt3(b5.context, E5, y5), U2 = m3.multiply(A3).toRawBytes(), _3 = tt3(b5.context, U2, C5, y5), T3 = z4(A3 + _3 * B3);
    ft("signature.s", T3, G, r3);
    const $3 = ye(U2, Nt(T3, n5.BYTES));
    return W("result", $3, n5.BYTES * 2);
  }
  const at2 = Er;
  function Ct3(y5, f6, b5, E5 = at2) {
    const { context: B3, zip215: C5 } = E5, A3 = n5.BYTES;
    y5 = W("signature", y5, 2 * A3), f6 = W("message", f6), b5 = W("publicKey", b5, A3), C5 !== void 0 && Tt("zip215", C5), o4 && (f6 = o4(f6));
    const U2 = Et(y5.slice(A3, 2 * A3));
    let _3, T3, $3;
    try {
      _3 = d4.fromHex(b5, C5), T3 = d4.fromHex(y5.slice(0, A3), C5), $3 = m3.multiplyUnsafe(U2);
    } catch {
      return false;
    }
    if (!C5 && _3.isSmallOrder()) return false;
    const R3 = tt3(B3, T3.toRawBytes(), _3.toRawBytes(), f6);
    return T3.add(_3.multiplyUnsafe(R3)).subtract($3).clearCofactor().equals(d4.ZERO);
  }
  return m3._setWindowSize(8), { CURVE: e2, getPublicKey: ot2, sign: st2, verify: Ct3, ExtendedPoint: d4, utils: { getExtendedPublicKey: O5, randomPrivateKey: () => a3(n5.BYTES), precompute(y5 = 8, f6 = d4.BASE) {
    return f6._setWindowSize(y5), f6.multiply(BigInt(3)), f6;
  } } };
}
BigInt(0), BigInt(1);
var kt = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
var Ue = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
var xr = BigInt(1);
var Te = BigInt(2);
BigInt(3);
var Br = BigInt(5);
var Cr = BigInt(8);
function Ar(t) {
  const e2 = BigInt(10), n5 = BigInt(20), r3 = BigInt(40), o4 = BigInt(80), s3 = kt, u2 = t * t % s3 * t % s3, i4 = J(u2, Te, s3) * u2 % s3, D2 = J(i4, xr, s3) * t % s3, c6 = J(D2, Br, s3) * D2 % s3, l6 = J(c6, e2, s3) * c6 % s3, p4 = J(l6, n5, s3) * l6 % s3, w4 = J(p4, r3, s3) * p4 % s3, h5 = J(w4, o4, s3) * w4 % s3, g3 = J(h5, o4, s3) * w4 % s3, S4 = J(g3, e2, s3) * c6 % s3;
  return { pow_p_5_8: J(S4, Te, s3) * t % s3, b2: u2 };
}
function mr(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r(t, e2) {
  const n5 = kt, r3 = H(e2 * e2 * e2, n5), o4 = H(r3 * r3 * e2, n5), s3 = Ar(t * o4).pow_p_5_8;
  let a3 = H(t * r3 * s3, n5);
  const u2 = H(e2 * a3 * a3, n5), i4 = a3, D2 = H(a3 * Ue, n5), c6 = u2 === t, l6 = u2 === H(-t, n5), p4 = u2 === H(-t * Ue, n5);
  return c6 && (a3 = i4), (l6 || p4) && (a3 = D2), ur(a3, n5) && (a3 = H(-a3, n5)), { isValid: c6 || l6, value: a3 };
}
var Sr = (() => _e(kt, void 0, true))();
var vr = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: Sr, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: Cr, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: Kn, randomBytes: he, adjustScalarBytes: mr, uvRatio: _r }))();
var Rt = (() => yr(vr))();
var jt = "EdDSA";
var Zt = "JWT";
var ut = ".";
var Dt = "base64url";
var Gt = "utf8";
var xt = "utf8";
var Vt = ":";
var Yt = "did";
var Jt = "key";
var dt = "base58btc";
var Kt = "z";
var Wt = "K36";
var Ne = 32;
function Xt(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Oe(t, e2) {
  e2 || (e2 = t.reduce((o4, s3) => o4 + s3.length, 0));
  const n5 = Le(e2);
  let r3 = 0;
  for (const o4 of t) n5.set(o4, r3), r3 += o4.length;
  return Xt(n5);
}
function Ir(t, e2) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var n5 = new Uint8Array(256), r3 = 0; r3 < n5.length; r3++) n5[r3] = 255;
  for (var o4 = 0; o4 < t.length; o4++) {
    var s3 = t.charAt(o4), a3 = s3.charCodeAt(0);
    if (n5[a3] !== 255) throw new TypeError(s3 + " is ambiguous");
    n5[a3] = o4;
  }
  var u2 = t.length, i4 = t.charAt(0), D2 = Math.log(u2) / Math.log(256), c6 = Math.log(256) / Math.log(u2);
  function l6(h5) {
    if (h5 instanceof Uint8Array || (ArrayBuffer.isView(h5) ? h5 = new Uint8Array(h5.buffer, h5.byteOffset, h5.byteLength) : Array.isArray(h5) && (h5 = Uint8Array.from(h5))), !(h5 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (h5.length === 0) return "";
    for (var g3 = 0, S4 = 0, v6 = 0, L3 = h5.length; v6 !== L3 && h5[v6] === 0; ) v6++, g3++;
    for (var d4 = (L3 - v6) * c6 + 1 >>> 0, m3 = new Uint8Array(d4); v6 !== L3; ) {
      for (var F3 = h5[v6], q2 = 0, z4 = d4 - 1; (F3 !== 0 || q2 < S4) && z4 !== -1; z4--, q2++) F3 += 256 * m3[z4] >>> 0, m3[z4] = F3 % u2 >>> 0, F3 = F3 / u2 >>> 0;
      if (F3 !== 0) throw new Error("Non-zero carry");
      S4 = q2, v6++;
    }
    for (var I3 = d4 - S4; I3 !== d4 && m3[I3] === 0; ) I3++;
    for (var O5 = i4.repeat(g3); I3 < d4; ++I3) O5 += t.charAt(m3[I3]);
    return O5;
  }
  function p4(h5) {
    if (typeof h5 != "string") throw new TypeError("Expected String");
    if (h5.length === 0) return new Uint8Array();
    var g3 = 0;
    if (h5[g3] !== " ") {
      for (var S4 = 0, v6 = 0; h5[g3] === i4; ) S4++, g3++;
      for (var L3 = (h5.length - g3) * D2 + 1 >>> 0, d4 = new Uint8Array(L3); h5[g3]; ) {
        var m3 = n5[h5.charCodeAt(g3)];
        if (m3 === 255) return;
        for (var F3 = 0, q2 = L3 - 1; (m3 !== 0 || F3 < v6) && q2 !== -1; q2--, F3++) m3 += u2 * d4[q2] >>> 0, d4[q2] = m3 % 256 >>> 0, m3 = m3 / 256 >>> 0;
        if (m3 !== 0) throw new Error("Non-zero carry");
        v6 = F3, g3++;
      }
      if (h5[g3] !== " ") {
        for (var z4 = L3 - v6; z4 !== L3 && d4[z4] === 0; ) z4++;
        for (var I3 = new Uint8Array(S4 + (L3 - z4)), O5 = S4; z4 !== L3; ) I3[O5++] = d4[z4++];
        return I3;
      }
    }
  }
  function w4(h5) {
    var g3 = p4(h5);
    if (g3) return g3;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: l6, decodeUnsafe: p4, decode: w4 };
}
var Ur = Ir;
var Tr = Ur;
var He = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var Fr = (t) => new TextEncoder().encode(t);
var Nr = (t) => new TextDecoder().decode(t);
var Lr = class {
  constructor(e2, n5, r3) {
    this.name = e2, this.prefix = n5, this.baseEncode = r3;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var Or = class {
  constructor(e2, n5, r3) {
    if (this.name = e2, this.prefix = n5, n5.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = n5.codePointAt(0), this.baseDecode = r3;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return ze(this, e2);
  }
};
var Hr = class {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return ze(this, e2);
  }
  decode(e2) {
    const n5 = e2[0], r3 = this.decoders[n5];
    if (r3) return r3.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var ze = (t, e2) => new Hr({ ...t.decoders || { [t.prefix]: t }, ...e2.decoders || { [e2.prefix]: e2 } });
var zr = class {
  constructor(e2, n5, r3, o4) {
    this.name = e2, this.prefix = n5, this.baseEncode = r3, this.baseDecode = o4, this.encoder = new Lr(e2, n5, r3), this.decoder = new Or(e2, n5, o4);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
var Bt = ({ name: t, prefix: e2, encode: n5, decode: r3 }) => new zr(t, e2, n5, r3);
var ht = ({ prefix: t, name: e2, alphabet: n5 }) => {
  const { encode: r3, decode: o4 } = Tr(n5, e2);
  return Bt({ prefix: t, name: e2, encode: r3, decode: (s3) => He(o4(s3)) });
};
var Mr = (t, e2, n5, r3) => {
  const o4 = {};
  for (let c6 = 0; c6 < e2.length; ++c6) o4[e2[c6]] = c6;
  let s3 = t.length;
  for (; t[s3 - 1] === "="; ) --s3;
  const a3 = new Uint8Array(s3 * n5 / 8 | 0);
  let u2 = 0, i4 = 0, D2 = 0;
  for (let c6 = 0; c6 < s3; ++c6) {
    const l6 = o4[t[c6]];
    if (l6 === void 0) throw new SyntaxError(`Non-${r3} character`);
    i4 = i4 << n5 | l6, u2 += n5, u2 >= 8 && (u2 -= 8, a3[D2++] = 255 & i4 >> u2);
  }
  if (u2 >= n5 || 255 & i4 << 8 - u2) throw new SyntaxError("Unexpected end of data");
  return a3;
};
var qr = (t, e2, n5) => {
  const r3 = e2[e2.length - 1] === "=", o4 = (1 << n5) - 1;
  let s3 = "", a3 = 0, u2 = 0;
  for (let i4 = 0; i4 < t.length; ++i4) for (u2 = u2 << 8 | t[i4], a3 += 8; a3 > n5; ) a3 -= n5, s3 += e2[o4 & u2 >> a3];
  if (a3 && (s3 += e2[o4 & u2 << n5 - a3]), r3) for (; s3.length * n5 & 7; ) s3 += "=";
  return s3;
};
var k = ({ name: t, prefix: e2, bitsPerChar: n5, alphabet: r3 }) => Bt({ prefix: e2, name: t, encode(o4) {
  return qr(o4, r3, n5);
}, decode(o4) {
  return Mr(o4, r3, n5, t);
} });
var $r = Bt({ prefix: "\0", name: "identity", encode: (t) => Nr(t), decode: (t) => Fr(t) });
var kr = Object.freeze({ __proto__: null, identity: $r });
var Rr = k({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var jr = Object.freeze({ __proto__: null, base2: Rr });
var Zr = k({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Gr = Object.freeze({ __proto__: null, base8: Zr });
var Vr = ht({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Yr = Object.freeze({ __proto__: null, base10: Vr });
var Jr = k({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Kr2 = k({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Wr = Object.freeze({ __proto__: null, base16: Jr, base16upper: Kr2 });
var Xr = k({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Pr = k({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Qr = k({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var to = k({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var eo = k({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var no = k({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var ro = k({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var oo = k({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var so = k({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var io = Object.freeze({ __proto__: null, base32: Xr, base32upper: Pr, base32pad: Qr, base32padupper: to, base32hex: eo, base32hexupper: no, base32hexpad: ro, base32hexpadupper: oo, base32z: so });
var uo = ht({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var co = ht({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var ao = Object.freeze({ __proto__: null, base36: uo, base36upper: co });
var fo = ht({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Do = ht({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ho = Object.freeze({ __proto__: null, base58btc: fo, base58flickr: Do });
var lo = k({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var bo = k({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var po = k({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var wo = k({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Eo = Object.freeze({ __proto__: null, base64: lo, base64pad: bo, base64url: po, base64urlpad: wo });
var Me = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var go = Me.reduce((t, e2, n5) => (t[n5] = e2, t), []);
var yo = Me.reduce((t, e2, n5) => (t[e2.codePointAt(0)] = n5, t), []);
function xo(t) {
  return t.reduce((e2, n5) => (e2 += go[n5], e2), "");
}
function Bo(t) {
  const e2 = [];
  for (const n5 of t) {
    const r3 = yo[n5.codePointAt(0)];
    if (r3 === void 0) throw new Error(`Non-base256emoji character: ${n5}`);
    e2.push(r3);
  }
  return new Uint8Array(e2);
}
var Co = Bt({ prefix: "🚀", name: "base256emoji", encode: xo, decode: Bo });
var Ao = Object.freeze({ __proto__: null, base256emoji: Co });
var mo = $e;
var qe = 128;
var _o = 127;
var So = ~_o;
var vo = Math.pow(2, 31);
function $e(t, e2, n5) {
  e2 = e2 || [], n5 = n5 || 0;
  for (var r3 = n5; t >= vo; ) e2[n5++] = t & 255 | qe, t /= 128;
  for (; t & So; ) e2[n5++] = t & 255 | qe, t >>>= 7;
  return e2[n5] = t | 0, $e.bytes = n5 - r3 + 1, e2;
}
var Io = Pt;
var Uo = 128;
var ke = 127;
function Pt(t, r3) {
  var n5 = 0, r3 = r3 || 0, o4 = 0, s3 = r3, a3, u2 = t.length;
  do {
    if (s3 >= u2) throw Pt.bytes = 0, new RangeError("Could not decode varint");
    a3 = t[s3++], n5 += o4 < 28 ? (a3 & ke) << o4 : (a3 & ke) * Math.pow(2, o4), o4 += 7;
  } while (a3 >= Uo);
  return Pt.bytes = s3 - r3, n5;
}
var To = Math.pow(2, 7);
var Fo = Math.pow(2, 14);
var No = Math.pow(2, 21);
var Lo = Math.pow(2, 28);
var Oo = Math.pow(2, 35);
var Ho = Math.pow(2, 42);
var zo = Math.pow(2, 49);
var Mo = Math.pow(2, 56);
var qo = Math.pow(2, 63);
var $o = function(t) {
  return t < To ? 1 : t < Fo ? 2 : t < No ? 3 : t < Lo ? 4 : t < Oo ? 5 : t < Ho ? 6 : t < zo ? 7 : t < Mo ? 8 : t < qo ? 9 : 10;
};
var ko = { encode: mo, decode: Io, encodingLength: $o };
var Re = ko;
var je = (t, e2, n5 = 0) => (Re.encode(t, e2, n5), e2);
var Ze = (t) => Re.encodingLength(t);
var Qt = (t, e2) => {
  const n5 = e2.byteLength, r3 = Ze(t), o4 = r3 + Ze(n5), s3 = new Uint8Array(o4 + n5);
  return je(t, s3, 0), je(n5, s3, r3), s3.set(e2, o4), new Ro(t, n5, e2, s3);
};
var Ro = class {
  constructor(e2, n5, r3, o4) {
    this.code = e2, this.size = n5, this.digest = r3, this.bytes = o4;
  }
};
var Ge = ({ name: t, code: e2, encode: n5 }) => new jo(t, e2, n5);
var jo = class {
  constructor(e2, n5, r3) {
    this.name = e2, this.code = n5, this.encode = r3;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const n5 = this.encode(e2);
      return n5 instanceof Uint8Array ? Qt(this.code, n5) : n5.then((r3) => Qt(this.code, r3));
    } else throw Error("Unknown type, must be binary type");
  }
};
var Ve = (t) => async (e2) => new Uint8Array(await crypto.subtle.digest(t, e2));
var Zo = Ge({ name: "sha2-256", code: 18, encode: Ve("SHA-256") });
var Go = Ge({ name: "sha2-512", code: 19, encode: Ve("SHA-512") });
var Vo = Object.freeze({ __proto__: null, sha256: Zo, sha512: Go });
var Ye = 0;
var Yo = "identity";
var Je = He;
var Jo = (t) => Qt(Ye, Je(t));
var Ko = { code: Ye, name: Yo, encode: Je, digest: Jo };
var Wo = Object.freeze({ __proto__: null, identity: Ko });
new TextEncoder(), new TextDecoder();
var Ke = { ...kr, ...jr, ...Gr, ...Yr, ...Wr, ...io, ...ao, ...ho, ...Eo, ...Ao };
({ ...Vo, ...Wo });
function We(t, e2, n5, r3) {
  return { name: t, prefix: e2, encoder: { name: t, prefix: e2, encode: n5 }, decoder: { decode: r3 } };
}
var Xe = We("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1)));
var te = We("ascii", "a", (t) => {
  let e2 = "a";
  for (let n5 = 0; n5 < t.length; n5++) e2 += String.fromCharCode(t[n5]);
  return e2;
}, (t) => {
  t = t.substring(1);
  const e2 = Le(t.length);
  for (let n5 = 0; n5 < t.length; n5++) e2[n5] = t.charCodeAt(n5);
  return e2;
});
var Pe = { utf8: Xe, "utf-8": Xe, hex: Ke.base16, latin1: te, ascii: te, binary: te, ...Ke };
function ct(t, e2 = "utf8") {
  const n5 = Pe[e2];
  if (!n5) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n5.encoder.encode(t).substring(1);
}
function rt(t, e2 = "utf8") {
  const n5 = Pe[e2];
  if (!n5) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt(globalThis.Buffer.from(t, "utf-8")) : n5.decoder.decode(`${n5.prefix}${t}`);
}
function lt(t) {
  return safeJsonParse(ct(rt(t, Dt), Gt));
}
function bt(t) {
  return ct(rt(safeJsonStringify(t), Gt), Dt);
}
function Qe(t) {
  const e2 = rt(Wt, dt), n5 = Kt + ct(Oe([e2, t]), dt);
  return [Yt, Jt, n5].join(Vt);
}
function en(t) {
  return ct(t, Dt);
}
function nn(t) {
  return rt(t, Dt);
}
function rn(t) {
  return rt([bt(t.header), bt(t.payload)].join(ut), xt);
}
function on(t) {
  return [bt(t.header), bt(t.payload), en(t.signature)].join(ut);
}
function sn(t) {
  const e2 = t.split(ut), n5 = lt(e2[0]), r3 = lt(e2[1]), o4 = nn(e2[2]), s3 = rt(e2.slice(0, 2).join(ut), xt);
  return { header: n5, payload: r3, signature: o4, data: s3 };
}
function Po(t = he(Ne)) {
  const e2 = Rt.getPublicKey(t);
  return { secretKey: Oe([t, e2]), publicKey: e2 };
}
async function Qo(t, e2, n5, r3, o4 = (0, import_time.fromMiliseconds)(Date.now())) {
  const s3 = { alg: jt, typ: Zt }, a3 = Qe(r3.publicKey), u2 = o4 + n5, i4 = { iss: a3, sub: t, aud: e2, iat: o4, exp: u2 }, D2 = rn({ header: s3, payload: i4 }), c6 = Rt.sign(D2, r3.secretKey.slice(0, 32));
  return on({ header: s3, payload: i4, signature: c6 });
}

// node_modules/uint8arrays/esm/src/alloc.js
function allocUnsafe(size4 = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size4);
  }
  return new Uint8Array(size4);
}

// node_modules/uint8arrays/esm/src/concat.js
function concat3(arrays, length2) {
  if (!length2) {
    length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length2);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}

// node_modules/multiformats/esm/src/bases/identity.js
var identity_exports = {};
__export(identity_exports, {
  identity: () => identity
});

// node_modules/multiformats/esm/vendor/base-x.js
function base2(ALPHABET2, name2) {
  if (ALPHABET2.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j3 = 0; j3 < BASE_MAP.length; j3++) {
    BASE_MAP[j3] = 255;
  }
  for (var i4 = 0; i4 < ALPHABET2.length; i4++) {
    var x4 = ALPHABET2.charAt(i4);
    var xc2 = x4.charCodeAt(0);
    if (BASE_MAP[xc2] !== 255) {
      throw new TypeError(x4 + " is ambiguous");
    }
    BASE_MAP[xc2] = i4;
  }
  var BASE = ALPHABET2.length;
  var LEADER = ALPHABET2.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode8(source) {
    if (source instanceof Uint8Array) ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size4 = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size4);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i5 = 0;
      for (var it1 = size4 - 1; (carry !== 0 || i5 < length2) && it1 !== -1; it1--, i5++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i5;
      pbegin++;
    }
    var it22 = size4 - length2;
    while (it22 !== size4 && b58[it22] === 0) {
      it22++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it22 < size4; ++it22) {
      str += ALPHABET2.charAt(b58[it22]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size4 = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size4);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i5 = 0;
      for (var it3 = size4 - 1; (carry !== 0 || i5 < length2) && it3 !== -1; it3--, i5++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i5;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size4 - length2;
    while (it4 !== size4 && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size4 - it4));
    var j4 = zeroes;
    while (it4 !== size4) {
      vch[j4++] = b256[it4++];
    }
    return vch;
  }
  function decode7(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode8,
    decodeUnsafe,
    decode: decode7
  };
}
var src = base2;
var _brrp__multiformats_scope_baseX = src;
var base_x_default = _brrp__multiformats_scope_baseX;

// node_modules/multiformats/esm/src/bytes.js
var empty = new Uint8Array(0);
var equals = (aa2, bb) => {
  if (aa2 === bb)
    return true;
  if (aa2.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii2 = 0; ii2 < aa2.byteLength; ii2++) {
    if (aa2[ii2] !== bb[ii2]) {
      return false;
    }
  }
  return true;
};
var coerce = (o4) => {
  if (o4 instanceof Uint8Array && o4.constructor.name === "Uint8Array")
    return o4;
  if (o4 instanceof ArrayBuffer)
    return new Uint8Array(o4);
  if (ArrayBuffer.isView(o4)) {
    return new Uint8Array(o4.buffer, o4.byteOffset, o4.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
var fromString3 = (str) => new TextEncoder().encode(str);
var toString2 = (b5) => new TextDecoder().decode(b5);

// node_modules/multiformats/esm/src/bases/base.js
var Encoder = class {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder = class {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder2) {
    return or2(this, decoder2);
  }
};
var ComposedDecoder = class {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder2) {
    return or2(this, decoder2);
  }
  decode(input) {
    const prefix = input[0];
    const decoder2 = this.decoders[prefix];
    if (decoder2) {
      return decoder2.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or2 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
var Codec = class {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from6 = ({ name: name2, prefix, encode: encode8, decode: decode7 }) => new Codec(name2, prefix, encode8, decode7);
var baseX = ({ prefix, name: name2, alphabet: alphabet2 }) => {
  const { encode: encode8, decode: decode7 } = base_x_default(alphabet2, name2);
  return from6({
    prefix,
    name: name2,
    encode: encode8,
    decode: (text) => coerce(decode7(text))
  });
};
var decode2 = (string2, alphabet2, bitsPerChar, name2) => {
  const codes = {};
  for (let i4 = 0; i4 < alphabet2.length; ++i4) {
    codes[alphabet2[i4]] = i4;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i4 = 0; i4 < end; ++i4) {
    const value = codes[string2[i4]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode4 = (data, alphabet2, bitsPerChar) => {
  const pad4 = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i4 = 0; i4 < data.length; ++i4) {
    buffer = buffer << 8 | data[i4];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad4) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from6({
    prefix,
    name: name2,
    encode(input) {
      return encode4(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode2(input, alphabet2, bitsPerChar, name2);
    }
  });
};

// node_modules/multiformats/esm/src/bases/identity.js
var identity = from6({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString2(buf),
  decode: (str) => fromString3(str)
});

// node_modules/multiformats/esm/src/bases/base2.js
var base2_exports = {};
__export(base2_exports, {
  base2: () => base22
});
var base22 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});

// node_modules/multiformats/esm/src/bases/base8.js
var base8_exports = {};
__export(base8_exports, {
  base8: () => base8
});
var base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});

// node_modules/multiformats/esm/src/bases/base10.js
var base10_exports = {};
__export(base10_exports, {
  base10: () => base10
});
var base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});

// node_modules/multiformats/esm/src/bases/base16.js
var base16_exports = {};
__export(base16_exports, {
  base16: () => base16,
  base16upper: () => base16upper
});
var base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
var base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});

// node_modules/multiformats/esm/src/bases/base32.js
var base32_exports = {};
__export(base32_exports, {
  base32: () => base32,
  base32hex: () => base32hex,
  base32hexpad: () => base32hexpad,
  base32hexpadupper: () => base32hexpadupper,
  base32hexupper: () => base32hexupper,
  base32pad: () => base32pad,
  base32padupper: () => base32padupper,
  base32upper: () => base32upper,
  base32z: () => base32z
});
var base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// node_modules/multiformats/esm/src/bases/base36.js
var base36_exports = {};
__export(base36_exports, {
  base36: () => base36,
  base36upper: () => base36upper
});
var base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});

// node_modules/multiformats/esm/src/bases/base58.js
var base58_exports = {};
__export(base58_exports, {
  base58btc: () => base58btc,
  base58flickr: () => base58flickr
});
var base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// node_modules/multiformats/esm/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  base64pad: () => base64pad,
  base64url: () => base64url,
  base64urlpad: () => base64urlpad
});
var base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});

// node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_exports = {};
__export(base256emoji_exports, {
  base256emoji: () => base256emoji
});
var alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var alphabetBytesToChars = alphabet.reduce((p4, c6, i4) => {
  p4[i4] = c6;
  return p4;
}, []);
var alphabetCharsToBytes = alphabet.reduce((p4, c6, i4) => {
  p4[c6.codePointAt(0)] = i4;
  return p4;
}, []);
function encode5(data) {
  return data.reduce((p4, c6) => {
    p4 += alphabetBytesToChars[c6];
    return p4;
  }, "");
}
function decode3(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
var base256emoji = from6({
  prefix: "🚀",
  name: "base256emoji",
  encode: encode5,
  decode: decode3
});

// node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_exports = {};
__export(sha2_browser_exports, {
  sha256: () => sha2563,
  sha512: () => sha512
});

// node_modules/multiformats/esm/vendor/varint.js
var encode_1 = encode6;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode6(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode6.bytes = offset - oldOffset + 1;
  return out;
}
var decode4 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b5, l6 = buf.length;
  do {
    if (counter >= l6) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b5 = buf[counter++];
    res += shift < 28 ? (b5 & REST$1) << shift : (b5 & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b5 >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode4,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// node_modules/multiformats/esm/src/varint.js
var decode5 = (data, offset = 0) => {
  const code2 = varint_default.decode(data, offset);
  return [
    code2,
    varint_default.decode.bytes
  ];
};
var encodeTo = (int, target, offset = 0) => {
  varint_default.encode(int, target, offset);
  return target;
};
var encodingLength = (int) => {
  return varint_default.encodingLength(int);
};

// node_modules/multiformats/esm/src/hashes/digest.js
var create2 = (code2, digest2) => {
  const size4 = digest2.byteLength;
  const sizeOffset = encodingLength(code2);
  const digestOffset = sizeOffset + encodingLength(size4);
  const bytes = new Uint8Array(digestOffset + size4);
  encodeTo(code2, bytes, 0);
  encodeTo(size4, bytes, sizeOffset);
  bytes.set(digest2, digestOffset);
  return new Digest(code2, size4, digest2, bytes);
};
var decode6 = (multihash) => {
  const bytes = coerce(multihash);
  const [code2, sizeOffset] = decode5(bytes);
  const [size4, digestOffset] = decode5(bytes.subarray(sizeOffset));
  const digest2 = bytes.subarray(sizeOffset + digestOffset);
  if (digest2.byteLength !== size4) {
    throw new Error("Incorrect length");
  }
  return new Digest(code2, size4, digest2, bytes);
};
var equals2 = (a3, b5) => {
  if (a3 === b5) {
    return true;
  } else {
    return a3.code === b5.code && a3.size === b5.size && equals(a3.bytes, b5.bytes);
  }
};
var Digest = class {
  constructor(code2, size4, digest2, bytes) {
    this.code = code2;
    this.size = size4;
    this.digest = digest2;
    this.bytes = bytes;
  }
};

// node_modules/multiformats/esm/src/hashes/hasher.js
var from7 = ({ name: name2, code: code2, encode: encode8 }) => new Hasher(name2, code2, encode8);
var Hasher = class {
  constructor(name2, code2, encode8) {
    this.name = name2;
    this.code = code2;
    this.encode = encode8;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create2(this.code, result) : result.then((digest2) => create2(this.code, digest2));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
var sha2563 = from7({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
var sha512 = from7({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});

// node_modules/multiformats/esm/src/hashes/identity.js
var identity_exports2 = {};
__export(identity_exports2, {
  identity: () => identity2
});
var code = 0;
var name = "identity";
var encode7 = coerce;
var digest = (input) => create2(code, encode7(input));
var identity2 = {
  code,
  name,
  encode: encode7,
  digest
};

// node_modules/multiformats/esm/src/codecs/json.js
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();

// node_modules/multiformats/esm/src/cid.js
var CID = class _CID {
  constructor(version3, code2, multihash, bytes) {
    this.code = code2;
    this.version = version3;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = /* @__PURE__ */ new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      default: {
        const { code: code2, multihash } = this;
        if (code2 !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return _CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code2, digest: digest2 } = this.multihash;
        const multihash = create2(code2, digest2);
        return _CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && equals2(this.multihash, other.multihash);
  }
  toString(base3) {
    const { bytes, version: version3, _baseCache } = this;
    switch (version3) {
      case 0:
        return toStringV0(bytes, _baseCache, base3 || base58btc.encoder);
      default:
        return toStringV1(bytes, _baseCache, base3 || base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "CID(" + this.toString() + ")";
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error("Deprecated, use .toString()");
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof _CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const { version: version3, code: code2, multihash, bytes } = value;
      return new _CID(version3, code2, multihash, bytes || encodeCID(version3, code2, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const { version: version3, multihash, code: code2 } = value;
      const digest2 = decode6(multihash);
      return _CID.create(version3, code2, digest2);
    } else {
      return null;
    }
  }
  static create(version3, code2, digest2) {
    if (typeof code2 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    switch (version3) {
      case 0: {
        if (code2 !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
        } else {
          return new _CID(version3, code2, digest2, digest2.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID(version3, code2, digest2.bytes);
        return new _CID(version3, code2, digest2, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  static createV0(digest2) {
    return _CID.create(0, DAG_PB_CODE, digest2);
  }
  static createV1(code2, digest2) {
    return _CID.create(1, code2, digest2);
  }
  static decode(bytes) {
    const [cid, remainder] = _CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = _CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i4, length2] = decode5(initialBytes.subarray(offset));
      offset += length2;
      return i4;
    };
    let version3 = next();
    let codec = DAG_PB_CODE;
    if (version3 === 18) {
      version3 = 0;
      offset = 0;
    } else if (version3 === 1) {
      codec = next();
    }
    if (version3 !== 0 && version3 !== 1) {
      throw new RangeError(`Invalid CID version ${version3}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size4 = offset + digestSize;
    const multihashSize = size4 - prefixSize;
    return {
      version: version3,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size: size4
    };
  }
  static parse(source, base3) {
    const [prefix, bytes] = parseCIDtoBytes(source, base3);
    const cid = _CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
};
var parseCIDtoBytes = (source, base3) => {
  switch (source[0]) {
    case "Q": {
      const decoder2 = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder2.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder2 = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder2.decode(source)
      ];
    }
    case base32.prefix: {
      const decoder2 = base3 || base32;
      return [
        base32.prefix,
        decoder2.decode(source)
      ];
    }
    default: {
      if (base3 == null) {
        throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
      }
      return [
        source[0],
        base3.decode(source)
      ];
    }
  }
};
var toStringV0 = (bytes, cache, base3) => {
  const { prefix } = base3;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes).slice(1);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var toStringV1 = (bytes, cache, base3) => {
  const { prefix } = base3;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var DAG_PB_CODE = 112;
var SHA_256_CODE = 18;
var encodeCID = (version3, code2, multihash) => {
  const codeOffset = encodingLength(version3);
  const hashOffset = codeOffset + encodingLength(code2);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version3, bytes, 0);
  encodeTo(code2, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
var cidSymbol = Symbol.for("@ipld/js-cid/CID");
var readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
var hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
var version2 = "0.0.0-dev";
var deprecate = (range, message) => {
  if (range.test(version2)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

// node_modules/multiformats/esm/src/basics.js
var bases = {
  ...identity_exports,
  ...base2_exports,
  ...base8_exports,
  ...base10_exports,
  ...base16_exports,
  ...base32_exports,
  ...base36_exports,
  ...base58_exports,
  ...base64_exports,
  ...base256emoji_exports
};
var hashes = {
  ...sha2_browser_exports,
  ...identity_exports2
};

// node_modules/uint8arrays/esm/src/util/bases.js
function createCodec(name2, prefix, encode8, decode7) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode8
    },
    decoder: { decode: decode7 }
  };
}
var string = createCodec("utf8", "u", (buf) => {
  const decoder2 = new TextDecoder("utf8");
  return "u" + decoder2.decode(buf);
}, (str) => {
  const encoder3 = new TextEncoder();
  return encoder3.encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i4 = 0; i4 < buf.length; i4++) {
    string2 += String.fromCharCode(buf[i4]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i4 = 0; i4 < str.length; i4++) {
    buf[i4] = str.charCodeAt(i4);
  }
  return buf;
});
var BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
var bases_default = BASES;

// node_modules/uint8arrays/esm/src/from-string.js
function fromString4(string2, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string2, "utf8");
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}

// node_modules/uint8arrays/esm/src/to-string.js
function toString3(array, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}

// node_modules/@walletconnect/relay-api/dist/index.es.js
var C = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };

// node_modules/@walletconnect/utils/dist/index.es.js
var se = ":";
function Ie2(t) {
  const [e2, n5] = t.split(se);
  return { namespace: e2, reference: n5 };
}
function Ko2(t, e2 = []) {
  const n5 = [];
  return Object.keys(t).forEach((r3) => {
    if (e2.length && !e2.includes(r3)) return;
    const o4 = t[r3];
    n5.push(...o4.accounts);
  }), n5;
}
function ce(t, e2) {
  return t.includes(":") ? [t] : e2.chains || [];
}
var Zo2 = Object.defineProperty;
var Yo2 = Object.defineProperties;
var Go2 = Object.getOwnPropertyDescriptors;
var Tn2 = Object.getOwnPropertySymbols;
var Wo2 = Object.prototype.hasOwnProperty;
var Xo = Object.prototype.propertyIsEnumerable;
var Rn2 = (t, e2, n5) => e2 in t ? Zo2(t, e2, { enumerable: true, configurable: true, writable: true, value: n5 }) : t[e2] = n5;
var _n2 = (t, e2) => {
  for (var n5 in e2 || (e2 = {})) Wo2.call(e2, n5) && Rn2(t, n5, e2[n5]);
  if (Tn2) for (var n5 of Tn2(e2)) Xo.call(e2, n5) && Rn2(t, n5, e2[n5]);
  return t;
};
var Jo2 = (t, e2) => Yo2(t, Go2(e2));
var $n2 = "ReactNative";
var Y = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
var jn2 = "js";
function Re2() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function pt() {
  return !(0, import_window_getters.getDocument)() && !!(0, import_window_getters.getNavigator)() && navigator.product === $n2;
}
function ei() {
  return pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function ni() {
  return pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Yt2() {
  return !Re2() && !!(0, import_window_getters.getNavigator)() && !!(0, import_window_getters.getDocument)();
}
function xt2() {
  return pt() ? Y.reactNative : Re2() ? Y.node : Yt2() ? Y.browser : Y.unknown;
}
function ri() {
  var t;
  try {
    return pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function Cn2(t, e2) {
  const n5 = new URLSearchParams(t);
  for (const r3 of Object.keys(e2).sort()) if (e2.hasOwnProperty(r3)) {
    const o4 = e2[r3];
    o4 !== void 0 && n5.set(r3, o4);
  }
  return n5.toString();
}
function oi(t) {
  var e2, n5;
  const r3 = Pn2();
  try {
    return t != null && t.url && r3.url && t.url !== r3.url && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r3.url}. This is probably unintended and can lead to issues.`), t.url = r3.url), (e2 = t == null ? void 0 : t.icons) != null && e2.length && t.icons.length > 0 && (t.icons = t.icons.filter((o4) => o4 !== "")), Jo2(_n2(_n2({}, r3), t), { url: (t == null ? void 0 : t.url) || r3.url, name: (t == null ? void 0 : t.name) || r3.name, description: (t == null ? void 0 : t.description) || r3.description, icons: (n5 = t == null ? void 0 : t.icons) != null && n5.length && t.icons.length > 0 ? t.icons : r3.icons });
  } catch (o4) {
    return console.warn("Error populating app metadata", o4), t || r3;
  }
}
function Pn2() {
  return (0, import_window_metadata.getWindowMetadata)() || { name: "", description: "", url: "", icons: [""] };
}
function kn2() {
  if (xt2() === Y.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: n5, Version: r3 } = global.Platform;
    return [n5, r3].join("-");
  }
  const t = detect();
  if (t === null) return "unknown";
  const e2 = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e2, t.name, t.version].join("-") : [e2, t.version].join("-");
}
function Vn2() {
  var t;
  const e2 = xt2();
  return e2 === Y.browser ? [e2, ((t = (0, import_window_getters.getLocation)()) == null ? void 0 : t.host) || "unknown"].join(":") : e2;
}
function Mn2(t, e2, n5) {
  const r3 = kn2(), o4 = Vn2();
  return [[t, e2].join("-"), [jn2, n5].join("-"), r3, o4].join("/");
}
function si({ protocol: t, version: e2, relayUrl: n5, sdkVersion: r3, auth: o4, projectId: i4, useOnCloseEvent: s3, bundleId: c6, packageName: a3 }) {
  const u2 = n5.split("?"), l6 = Mn2(t, e2, r3), f6 = { auth: o4, ua: l6, projectId: i4, useOnCloseEvent: s3 || void 0, packageName: a3 || void 0, bundleId: c6 || void 0 }, h5 = Cn2(u2[1] || "", f6);
  return u2[0] + "?" + h5;
}
function gt2(t, e2) {
  return t.filter((n5) => e2.includes(n5)).length === t.length;
}
function fi(t) {
  return Object.fromEntries(t.entries());
}
function li(t) {
  return new Map(Object.entries(t));
}
function gi(t = import_time2.FIVE_MINUTES, e2) {
  const n5 = (0, import_time2.toMiliseconds)(t || import_time2.FIVE_MINUTES);
  let r3, o4, i4, s3;
  return { resolve: (c6) => {
    i4 && r3 && (clearTimeout(i4), r3(c6), s3 = Promise.resolve(c6));
  }, reject: (c6) => {
    i4 && o4 && (clearTimeout(i4), o4(c6));
  }, done: () => new Promise((c6, a3) => {
    if (s3) return c6(s3);
    i4 = setTimeout(() => {
      const u2 = new Error(e2);
      s3 = Promise.reject(u2), a3(u2);
    }, n5), r3 = c6, o4 = a3;
  }) };
}
function yi(t, e2, n5) {
  return new Promise(async (r3, o4) => {
    const i4 = setTimeout(() => o4(new Error(n5)), e2);
    try {
      const s3 = await t;
      r3(s3);
    } catch (s3) {
      o4(s3);
    }
    clearTimeout(i4);
  });
}
function _e2(t, e2) {
  if (typeof e2 == "string" && e2.startsWith(`${t}:`)) return e2;
  if (t.toLowerCase() === "topic") {
    if (typeof e2 != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e2}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e2 != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e2}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function mi(t) {
  return _e2("topic", t);
}
function wi(t) {
  return _e2("id", t);
}
function bi(t) {
  const [e2, n5] = t.split(":"), r3 = { id: void 0, topic: void 0 };
  if (e2 === "topic" && typeof n5 == "string") r3.topic = n5;
  else if (e2 === "id" && Number.isInteger(Number(n5))) r3.id = Number(n5);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e2}:${n5}`);
  return r3;
}
function Ei(t, e2) {
  return (0, import_time2.fromMiliseconds)((e2 || Date.now()) + (0, import_time2.toMiliseconds)(t));
}
function vi(t) {
  return Date.now() >= (0, import_time2.toMiliseconds)(t);
}
function xi(t, e2) {
  return `${t}${e2 ? `:${e2}` : ""}`;
}
function at(t = [], e2 = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e2])];
}
async function Si({ id: t, topic: e2, wcDeepLink: n5 }) {
  var r3;
  try {
    if (!n5) return;
    const o4 = typeof n5 == "string" ? JSON.parse(n5) : n5, i4 = o4 == null ? void 0 : o4.href;
    if (typeof i4 != "string") return;
    const s3 = Kn2(i4, t, e2), c6 = xt2();
    if (c6 === Y.browser) {
      if (!((r3 = (0, import_window_getters.getDocument)()) != null && r3.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      Fn2(s3);
    } else c6 === Y.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s3);
  } catch (o4) {
    console.error(o4);
  }
}
function Kn2(t, e2, n5) {
  const r3 = `requestId=${e2}&sessionTopic=${n5}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let o4 = `${t}`;
  if (t.startsWith("https://t.me")) {
    const i4 = t.includes("?") ? "&startapp=" : "?startapp=";
    o4 = `${o4}${i4}${Yn2(r3, true)}`;
  } else o4 = `${o4}/wc?${r3}`;
  return o4;
}
function Fn2(t) {
  let e2 = "_self";
  Zn2() ? e2 = "_top" : (zn2() || t.startsWith("https://") || t.startsWith("http://")) && (e2 = "_blank"), window.open(t, e2, "noreferrer noopener");
}
async function Oi(t, e2) {
  let n5 = "";
  try {
    if (Yt2() && (n5 = localStorage.getItem(e2), n5)) return n5;
    n5 = await t.getItem(e2);
  } catch (r3) {
    console.error(r3);
  }
  return n5;
}
function Ai(t, e2) {
  if (!t.includes(e2)) return null;
  const n5 = t.split(/([&,?,=])/), r3 = n5.indexOf(e2);
  return n5[r3 + 2];
}
function Bi() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e2 = Math.random() * 16 | 0;
    return (t === "x" ? e2 : e2 & 3 | 8).toString(16);
  });
}
function Ii() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function zn2() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function Zn2() {
  try {
    return window.self !== window.top;
  } catch {
    return false;
  }
}
function Yn2(t, e2 = false) {
  const n5 = Buffer.from(t).toString("base64");
  return e2 ? n5.replace(/[=]/g, "") : n5;
}
function Le2(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function Ni(t) {
  return new Promise((e2) => setTimeout(e2, t));
}
function Gt2(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Ui(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Wt2(t, ...e2) {
  if (!Ui(t)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
}
function je2(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Gt2(t.outputLen), Gt2(t.blockLen);
}
function Tt2(t, e2 = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
}
function Gn2(t, e2) {
  Wt2(t);
  const n5 = e2.outputLen;
  if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
}
var ue = BigInt(2 ** 32 - 1);
var Wn2 = BigInt(32);
function Ti(t, e2 = false) {
  return e2 ? { h: Number(t & ue), l: Number(t >> Wn2 & ue) } : { h: Number(t >> Wn2 & ue) | 0, l: Number(t & ue) | 0 };
}
function Ri(t, e2 = false) {
  let n5 = new Uint32Array(t.length), r3 = new Uint32Array(t.length);
  for (let o4 = 0; o4 < t.length; o4++) {
    const { h: i4, l: s3 } = Ti(t[o4], e2);
    [n5[o4], r3[o4]] = [i4, s3];
  }
  return [n5, r3];
}
var _i = (t, e2, n5) => t << n5 | e2 >>> 32 - n5;
var $i = (t, e2, n5) => e2 << n5 | t >>> 32 - n5;
var Li = (t, e2, n5) => e2 << n5 - 32 | t >>> 64 - n5;
var ji = (t, e2, n5) => t << n5 - 32 | e2 >>> 64 - n5;
var Rt2 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function Ci(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Ce2(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function st(t, e2) {
  return t << 32 - e2 | t >>> e2;
}
var Xn2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Pi2(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
function Jn2(t) {
  for (let e2 = 0; e2 < t.length; e2++) t[e2] = Pi2(t[e2]);
}
function ki(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function _t2(t) {
  return typeof t == "string" && (t = ki(t)), Wt2(t), t;
}
function Vi(...t) {
  let e2 = 0;
  for (let r3 = 0; r3 < t.length; r3++) {
    const o4 = t[r3];
    Wt2(o4), e2 += o4.length;
  }
  const n5 = new Uint8Array(e2);
  for (let r3 = 0, o4 = 0; r3 < t.length; r3++) {
    const i4 = t[r3];
    n5.set(i4, o4), o4 += i4.length;
  }
  return n5;
}
var Pe2 = class {
  clone() {
    return this._cloneInto();
  }
};
function Qn2(t) {
  const e2 = (r3) => t().update(_t2(r3)).digest(), n5 = t();
  return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = () => t(), e2;
}
function $t2(t = 32) {
  if (Rt2 && typeof Rt2.getRandomValues == "function") return Rt2.getRandomValues(new Uint8Array(t));
  if (Rt2 && typeof Rt2.randomBytes == "function") return Rt2.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
var tr2 = [];
var er2 = [];
var nr2 = [];
var Mi = BigInt(0);
var Xt2 = BigInt(1);
var Di = BigInt(2);
var Hi = BigInt(7);
var qi = BigInt(256);
var Ki = BigInt(113);
for (let t = 0, e2 = Xt2, n5 = 1, r3 = 0; t < 24; t++) {
  [n5, r3] = [r3, (2 * n5 + 3 * r3) % 5], tr2.push(2 * (5 * r3 + n5)), er2.push((t + 1) * (t + 2) / 2 % 64);
  let o4 = Mi;
  for (let i4 = 0; i4 < 7; i4++) e2 = (e2 << Xt2 ^ (e2 >> Hi) * Ki) % qi, e2 & Di && (o4 ^= Xt2 << (Xt2 << BigInt(i4)) - Xt2);
  nr2.push(o4);
}
var [Fi, zi] = Ri(nr2, true);
var rr2 = (t, e2, n5) => n5 > 32 ? Li(t, e2, n5) : _i(t, e2, n5);
var or3 = (t, e2, n5) => n5 > 32 ? ji(t, e2, n5) : $i(t, e2, n5);
function Zi(t, e2 = 24) {
  const n5 = new Uint32Array(10);
  for (let r3 = 24 - e2; r3 < 24; r3++) {
    for (let s3 = 0; s3 < 10; s3++) n5[s3] = t[s3] ^ t[s3 + 10] ^ t[s3 + 20] ^ t[s3 + 30] ^ t[s3 + 40];
    for (let s3 = 0; s3 < 10; s3 += 2) {
      const c6 = (s3 + 8) % 10, a3 = (s3 + 2) % 10, u2 = n5[a3], l6 = n5[a3 + 1], f6 = rr2(u2, l6, 1) ^ n5[c6], h5 = or3(u2, l6, 1) ^ n5[c6 + 1];
      for (let y5 = 0; y5 < 50; y5 += 10) t[s3 + y5] ^= f6, t[s3 + y5 + 1] ^= h5;
    }
    let o4 = t[2], i4 = t[3];
    for (let s3 = 0; s3 < 24; s3++) {
      const c6 = er2[s3], a3 = rr2(o4, i4, c6), u2 = or3(o4, i4, c6), l6 = tr2[s3];
      o4 = t[l6], i4 = t[l6 + 1], t[l6] = a3, t[l6 + 1] = u2;
    }
    for (let s3 = 0; s3 < 50; s3 += 10) {
      for (let c6 = 0; c6 < 10; c6++) n5[c6] = t[s3 + c6];
      for (let c6 = 0; c6 < 10; c6++) t[s3 + c6] ^= ~n5[(c6 + 2) % 10] & n5[(c6 + 4) % 10];
    }
    t[0] ^= Fi[r3], t[1] ^= zi[r3];
  }
  n5.fill(0);
}
var En2 = class _En extends Pe2 {
  constructor(e2, n5, r3, o4 = false, i4 = 24) {
    if (super(), this.blockLen = e2, this.suffix = n5, this.outputLen = r3, this.enableXOF = o4, this.rounds = i4, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, Gt2(r3), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Ci(this.state);
  }
  keccak() {
    Xn2 || Jn2(this.state32), Zi(this.state32, this.rounds), Xn2 || Jn2(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e2) {
    Tt2(this);
    const { blockLen: n5, state: r3 } = this;
    e2 = _t2(e2);
    const o4 = e2.length;
    for (let i4 = 0; i4 < o4; ) {
      const s3 = Math.min(n5 - this.pos, o4 - i4);
      for (let c6 = 0; c6 < s3; c6++) r3[this.pos++] ^= e2[i4++];
      this.pos === n5 && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: e2, suffix: n5, pos: r3, blockLen: o4 } = this;
    e2[r3] ^= n5, (n5 & 128) !== 0 && r3 === o4 - 1 && this.keccak(), e2[o4 - 1] ^= 128, this.keccak();
  }
  writeInto(e2) {
    Tt2(this, false), Wt2(e2), this.finish();
    const n5 = this.state, { blockLen: r3 } = this;
    for (let o4 = 0, i4 = e2.length; o4 < i4; ) {
      this.posOut >= r3 && this.keccak();
      const s3 = Math.min(r3 - this.posOut, i4 - o4);
      e2.set(n5.subarray(this.posOut, this.posOut + s3), o4), this.posOut += s3, o4 += s3;
    }
    return e2;
  }
  xofInto(e2) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e2);
  }
  xof(e2) {
    return Gt2(e2), this.xofInto(new Uint8Array(e2));
  }
  digestInto(e2) {
    if (Gn2(e2, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e2), this.destroy(), e2;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, this.state.fill(0);
  }
  _cloneInto(e2) {
    const { blockLen: n5, suffix: r3, outputLen: o4, rounds: i4, enableXOF: s3 } = this;
    return e2 || (e2 = new _En(n5, r3, o4, s3, i4)), e2.state32.set(this.state32), e2.pos = this.pos, e2.posOut = this.posOut, e2.finished = this.finished, e2.rounds = i4, e2.suffix = r3, e2.outputLen = o4, e2.enableXOF = s3, e2.destroyed = this.destroyed, e2;
  }
};
var Yi = (t, e2, n5) => Qn2(() => new En2(e2, t, n5));
var Gi = Yi(1, 136, 256 / 8);
var Wi = "https://rpc.walletconnect.org/v1";
function ke2(t) {
  const e2 = `Ethereum Signed Message:
${t.length}`, n5 = new TextEncoder().encode(e2 + t);
  return "0x" + Buffer.from(Gi(n5)).toString("hex");
}
async function ir2(t, e2, n5, r3, o4, i4) {
  switch (n5.t) {
    case "eip191":
      return await sr2(t, e2, n5.s);
    case "eip1271":
      return await cr2(t, e2, n5.s, r3, o4, i4);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n5.t}`);
  }
}
async function sr2(t, e2, n5) {
  return (await recoverAddress({ hash: ke2(e2), signature: n5 })).toLowerCase() === t.toLowerCase();
}
async function cr2(t, e2, n5, r3, o4, i4) {
  const s3 = Ie2(r3);
  if (!s3.namespace || !s3.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r3}`);
  try {
    const c6 = "0x1626ba7e", a3 = "0000000000000000000000000000000000000000000000000000000000000040", u2 = "0000000000000000000000000000000000000000000000000000000000000041", l6 = n5.substring(2), f6 = ke2(e2).substring(2), h5 = c6 + f6 + a3 + u2 + l6, y5 = await fetch(`${i4 || Wi}/?chainId=${r3}&projectId=${o4}`, { method: "POST", body: JSON.stringify({ id: Xi(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: h5 }, "latest"] }) }), { result: E5 } = await y5.json();
    return E5 ? E5.slice(0, c6.length).toLowerCase() === c6.toLowerCase() : false;
  } catch (c6) {
    return console.error("isValidEip1271Signature: ", c6), false;
  }
}
function Xi() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function Ji(t) {
  const e2 = atob(t), n5 = new Uint8Array(e2.length);
  for (let s3 = 0; s3 < e2.length; s3++) n5[s3] = e2.charCodeAt(s3);
  const r3 = n5[0];
  if (r3 === 0) throw new Error("No signatures found");
  const o4 = 1 + r3 * 64;
  if (n5.length < o4) throw new Error("Transaction data too short for claimed signature count");
  if (n5.length < 100) throw new Error("Transaction too short");
  const i4 = Buffer.from(t, "base64").slice(1, 65);
  return esm_default2.encode(i4);
}
var Qi = Object.defineProperty;
var ts = Object.defineProperties;
var es = Object.getOwnPropertyDescriptors;
var ar2 = Object.getOwnPropertySymbols;
var ns = Object.prototype.hasOwnProperty;
var rs = Object.prototype.propertyIsEnumerable;
var ur2 = (t, e2, n5) => e2 in t ? Qi(t, e2, { enumerable: true, configurable: true, writable: true, value: n5 }) : t[e2] = n5;
var Ve2 = (t, e2) => {
  for (var n5 in e2 || (e2 = {})) ns.call(e2, n5) && ur2(t, n5, e2[n5]);
  if (ar2) for (var n5 of ar2(e2)) rs.call(e2, n5) && ur2(t, n5, e2[n5]);
  return t;
};
var fr2 = (t, e2) => ts(t, es(e2));
var os = "did:pkh:";
var fe2 = (t) => t == null ? void 0 : t.split(":");
var lr2 = (t) => {
  const e2 = t && fe2(t);
  if (e2) return t.includes(os) ? e2[3] : e2[1];
};
var dr2 = (t) => {
  const e2 = t && fe2(t);
  if (e2) return e2[2] + ":" + e2[3];
};
var Me2 = (t) => {
  const e2 = t && fe2(t);
  if (e2) return e2.pop();
};
async function is(t) {
  const { cacao: e2, projectId: n5 } = t, { s: r3, p: o4 } = e2, i4 = hr2(o4, o4.iss), s3 = Me2(o4.iss);
  return await ir2(s3, i4, r3, dr2(o4.iss), n5);
}
var hr2 = (t, e2) => {
  const n5 = `${t.domain} wants you to sign in with your Ethereum account:`, r3 = Me2(e2);
  if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let o4 = t.statement || void 0;
  const i4 = `URI: ${t.aud || t.uri}`, s3 = `Version: ${t.version}`, c6 = `Chain ID: ${lr2(e2)}`, a3 = `Nonce: ${t.nonce}`, u2 = `Issued At: ${t.iat}`, l6 = t.exp ? `Expiration Time: ${t.exp}` : void 0, f6 = t.nbf ? `Not Before: ${t.nbf}` : void 0, h5 = t.requestId ? `Request ID: ${t.requestId}` : void 0, y5 = t.resources ? `Resources:${t.resources.map((p4) => `
- ${p4}`).join("")}` : void 0, E5 = de2(t.resources);
  if (E5) {
    const p4 = yt2(E5);
    o4 = qe2(o4, p4);
  }
  return [n5, r3, "", o4, "", i4, s3, c6, a3, u2, l6, f6, h5, y5].filter((p4) => p4 != null).join(`
`);
};
function mr2(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function wr2(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function ct2(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  const e2 = Object.keys(t.att);
  if (!(e2 != null && e2.length)) throw new Error("No resources found in `att` property");
  e2.forEach((n5) => {
    const r3 = t.att[n5];
    if (Array.isArray(r3)) throw new Error(`Resource must be an object: ${n5}`);
    if (typeof r3 != "object") throw new Error(`Resource must be an object: ${n5}`);
    if (!Object.keys(r3).length) throw new Error(`Resource object is empty: ${n5}`);
    Object.keys(r3).forEach((o4) => {
      const i4 = r3[o4];
      if (!Array.isArray(i4)) throw new Error(`Ability limits ${o4} must be an array of objects, found: ${i4}`);
      if (!i4.length) throw new Error(`Value of ${o4} is empty array, must be an array with objects`);
      i4.forEach((s3) => {
        if (typeof s3 != "object") throw new Error(`Ability limits (${o4}) must be an array of objects, found: ${s3}`);
      });
    });
  });
}
function br2(t, e2, n5, r3 = {}) {
  return n5 == null ? void 0 : n5.sort((o4, i4) => o4.localeCompare(i4)), { att: { [t]: De2(e2, n5, r3) } };
}
function De2(t, e2, n5 = {}) {
  e2 = e2 == null ? void 0 : e2.sort((o4, i4) => o4.localeCompare(i4));
  const r3 = e2.map((o4) => ({ [`${t}/${o4}`]: [n5] }));
  return Object.assign({}, ...r3);
}
function le2(t) {
  return ct2(t), `urn:recap:${mr2(t).replace(/=/g, "")}`;
}
function yt2(t) {
  const e2 = wr2(t.replace("urn:recap:", ""));
  return ct2(e2), e2;
}
function fs(t, e2, n5) {
  const r3 = br2(t, e2, n5);
  return le2(r3);
}
function He2(t) {
  return t && t.includes("urn:recap:");
}
function ls(t, e2) {
  const n5 = yt2(t), r3 = yt2(e2), o4 = vr2(n5, r3);
  return le2(o4);
}
function vr2(t, e2) {
  ct2(t), ct2(e2);
  const n5 = Object.keys(t.att).concat(Object.keys(e2.att)).sort((o4, i4) => o4.localeCompare(i4)), r3 = { att: {} };
  return n5.forEach((o4) => {
    var i4, s3;
    Object.keys(((i4 = t.att) == null ? void 0 : i4[o4]) || {}).concat(Object.keys(((s3 = e2.att) == null ? void 0 : s3[o4]) || {})).sort((c6, a3) => c6.localeCompare(a3)).forEach((c6) => {
      var a3, u2;
      r3.att[o4] = fr2(Ve2({}, r3.att[o4]), { [c6]: ((a3 = t.att[o4]) == null ? void 0 : a3[c6]) || ((u2 = e2.att[o4]) == null ? void 0 : u2[c6]) });
    });
  }), r3;
}
function qe2(t = "", e2) {
  ct2(e2);
  const n5 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(n5)) return t;
  const r3 = [];
  let o4 = 0;
  Object.keys(e2.att).forEach((c6) => {
    const a3 = Object.keys(e2.att[c6]).map((f6) => ({ ability: f6.split("/")[0], action: f6.split("/")[1] }));
    a3.sort((f6, h5) => f6.action.localeCompare(h5.action));
    const u2 = {};
    a3.forEach((f6) => {
      u2[f6.ability] || (u2[f6.ability] = []), u2[f6.ability].push(f6.action);
    });
    const l6 = Object.keys(u2).map((f6) => (o4++, `(${o4}) '${f6}': '${u2[f6].join("', '")}' for '${c6}'.`));
    r3.push(l6.join(", ").replace(".,", "."));
  });
  const i4 = r3.join(" "), s3 = `${n5}${i4}`;
  return `${t ? t + " " : ""}${s3}`;
}
function ds(t) {
  var e2;
  const n5 = yt2(t);
  ct2(n5);
  const r3 = (e2 = n5.att) == null ? void 0 : e2.eip155;
  return r3 ? Object.keys(r3).map((o4) => o4.split("/")[1]) : [];
}
function hs(t) {
  const e2 = yt2(t);
  ct2(e2);
  const n5 = [];
  return Object.values(e2.att).forEach((r3) => {
    Object.values(r3).forEach((o4) => {
      var i4;
      (i4 = o4 == null ? void 0 : o4[0]) != null && i4.chains && n5.push(o4[0].chains);
    });
  }), [...new Set(n5.flat())];
}
function de2(t) {
  if (!t) return;
  const e2 = t == null ? void 0 : t[t.length - 1];
  return He2(e2) ? e2 : void 0;
}
function Ke2(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Sr2(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function tt(t, ...e2) {
  if (!Sr2(t)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
}
function Or2(t, e2 = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
}
function ps(t, e2) {
  tt(t);
  const n5 = e2.outputLen;
  if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
}
function Ar2(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
var mt = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
var gs = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
var ys = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!ys) throw new Error("Non little-endian hardware is not supported");
function ms(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function Fe(t) {
  if (typeof t == "string") t = ms(t);
  else if (Sr2(t)) t = ze2(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function ws(t, e2) {
  if (e2 == null || typeof e2 != "object") throw new Error("options must be defined");
  return Object.assign(t, e2);
}
function bs(t, e2) {
  if (t.length !== e2.length) return false;
  let n5 = 0;
  for (let r3 = 0; r3 < t.length; r3++) n5 |= t[r3] ^ e2[r3];
  return n5 === 0;
}
var Es = (t, e2) => {
  function n5(r3, ...o4) {
    if (tt(r3), t.nonceLength !== void 0) {
      const l6 = o4[0];
      if (!l6) throw new Error("nonce / iv required");
      t.varSizeNonce ? tt(l6) : tt(l6, t.nonceLength);
    }
    const i4 = t.tagLength;
    i4 && o4[1] !== void 0 && tt(o4[1]);
    const s3 = e2(r3, ...o4), c6 = (l6, f6) => {
      if (f6 !== void 0) {
        if (l6 !== 2) throw new Error("cipher output not supported");
        tt(f6);
      }
    };
    let a3 = false;
    return { encrypt(l6, f6) {
      if (a3) throw new Error("cannot encrypt() twice with same key + nonce");
      return a3 = true, tt(l6), c6(s3.encrypt.length, f6), s3.encrypt(l6, f6);
    }, decrypt(l6, f6) {
      if (tt(l6), i4 && l6.length < i4) throw new Error("invalid ciphertext length: smaller than tagLength=" + i4);
      return c6(s3.decrypt.length, f6), s3.decrypt(l6, f6);
    } };
  }
  return Object.assign(n5, t), n5;
};
function Br2(t, e2, n5 = true) {
  if (e2 === void 0) return new Uint8Array(t);
  if (e2.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e2.length);
  if (n5 && !vs(e2)) throw new Error("invalid output, must be aligned");
  return e2;
}
function Ir2(t, e2, n5, r3) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
  const o4 = BigInt(32), i4 = BigInt(4294967295), s3 = Number(n5 >> o4 & i4), c6 = Number(n5 & i4), a3 = r3 ? 4 : 0, u2 = r3 ? 0 : 4;
  t.setUint32(e2 + a3, s3, r3), t.setUint32(e2 + u2, c6, r3);
}
function vs(t) {
  return t.byteOffset % 4 === 0;
}
function ze2(t) {
  return Uint8Array.from(t);
}
function Lt2(...t) {
  for (let e2 = 0; e2 < t.length; e2++) t[e2].fill(0);
}
var Nr2 = (t) => Uint8Array.from(t.split("").map((e2) => e2.charCodeAt(0)));
var xs = Nr2("expand 16-byte k");
var Ss = Nr2("expand 32-byte k");
var Os = mt(xs);
var As = mt(Ss);
function V(t, e2) {
  return t << e2 | t >>> 32 - e2;
}
function Ze2(t) {
  return t.byteOffset % 4 === 0;
}
var he2 = 64;
var Bs = 16;
var Ur2 = 2 ** 32 - 1;
var Tr2 = new Uint32Array();
function Is(t, e2, n5, r3, o4, i4, s3, c6) {
  const a3 = o4.length, u2 = new Uint8Array(he2), l6 = mt(u2), f6 = Ze2(o4) && Ze2(i4), h5 = f6 ? mt(o4) : Tr2, y5 = f6 ? mt(i4) : Tr2;
  for (let E5 = 0; E5 < a3; s3++) {
    if (t(e2, n5, r3, l6, s3, c6), s3 >= Ur2) throw new Error("arx: counter overflow");
    const p4 = Math.min(he2, a3 - E5);
    if (f6 && p4 === he2) {
      const d4 = E5 / 4;
      if (E5 % 4 !== 0) throw new Error("arx: invalid block position");
      for (let v6 = 0, m3; v6 < Bs; v6++) m3 = d4 + v6, y5[m3] = h5[m3] ^ l6[v6];
      E5 += he2;
      continue;
    }
    for (let d4 = 0, v6; d4 < p4; d4++) v6 = E5 + d4, i4[v6] = o4[v6] ^ u2[d4];
    E5 += p4;
  }
}
function Ns(t, e2) {
  const { allowShortKeys: n5, extendNonceFn: r3, counterLength: o4, counterRight: i4, rounds: s3 } = ws({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, e2);
  if (typeof t != "function") throw new Error("core must be a function");
  return Ke2(o4), Ke2(s3), Ar2(i4), Ar2(n5), (c6, a3, u2, l6, f6 = 0) => {
    tt(c6), tt(a3), tt(u2);
    const h5 = u2.length;
    if (l6 === void 0 && (l6 = new Uint8Array(h5)), tt(l6), Ke2(f6), f6 < 0 || f6 >= Ur2) throw new Error("arx: counter overflow");
    if (l6.length < h5) throw new Error(`arx: output (${l6.length}) is shorter than data (${h5})`);
    const y5 = [];
    let E5 = c6.length, p4, d4;
    if (E5 === 32) y5.push(p4 = ze2(c6)), d4 = As;
    else if (E5 === 16 && n5) p4 = new Uint8Array(32), p4.set(c6), p4.set(c6, 16), d4 = Os, y5.push(p4);
    else throw new Error(`arx: invalid 32-byte key, got length=${E5}`);
    Ze2(a3) || y5.push(a3 = ze2(a3));
    const v6 = mt(p4);
    if (r3) {
      if (a3.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r3(d4, v6, mt(a3.subarray(0, 16)), v6), a3 = a3.subarray(16);
    }
    const m3 = 16 - o4;
    if (m3 !== a3.length) throw new Error(`arx: nonce must be ${m3} or 16 bytes`);
    if (m3 !== 12) {
      const N12 = new Uint8Array(12);
      N12.set(a3, i4 ? 0 : 12 - a3.length), a3 = N12, y5.push(a3);
    }
    const O5 = mt(a3);
    return Is(t, d4, v6, O5, u2, l6, f6, s3), Lt2(...y5), l6;
  };
}
var F = (t, e2) => t[e2++] & 255 | (t[e2++] & 255) << 8;
var Us = class {
  constructor(e2) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e2 = Fe(e2), tt(e2, 32);
    const n5 = F(e2, 0), r3 = F(e2, 2), o4 = F(e2, 4), i4 = F(e2, 6), s3 = F(e2, 8), c6 = F(e2, 10), a3 = F(e2, 12), u2 = F(e2, 14);
    this.r[0] = n5 & 8191, this.r[1] = (n5 >>> 13 | r3 << 3) & 8191, this.r[2] = (r3 >>> 10 | o4 << 6) & 7939, this.r[3] = (o4 >>> 7 | i4 << 9) & 8191, this.r[4] = (i4 >>> 4 | s3 << 12) & 255, this.r[5] = s3 >>> 1 & 8190, this.r[6] = (s3 >>> 14 | c6 << 2) & 8191, this.r[7] = (c6 >>> 11 | a3 << 5) & 8065, this.r[8] = (a3 >>> 8 | u2 << 8) & 8191, this.r[9] = u2 >>> 5 & 127;
    for (let l6 = 0; l6 < 8; l6++) this.pad[l6] = F(e2, 16 + 2 * l6);
  }
  process(e2, n5, r3 = false) {
    const o4 = r3 ? 0 : 2048, { h: i4, r: s3 } = this, c6 = s3[0], a3 = s3[1], u2 = s3[2], l6 = s3[3], f6 = s3[4], h5 = s3[5], y5 = s3[6], E5 = s3[7], p4 = s3[8], d4 = s3[9], v6 = F(e2, n5 + 0), m3 = F(e2, n5 + 2), O5 = F(e2, n5 + 4), N12 = F(e2, n5 + 6), $3 = F(e2, n5 + 8), B3 = F(e2, n5 + 10), A3 = F(e2, n5 + 12), T3 = F(e2, n5 + 14);
    let S4 = i4[0] + (v6 & 8191), L3 = i4[1] + ((v6 >>> 13 | m3 << 3) & 8191), U2 = i4[2] + ((m3 >>> 10 | O5 << 6) & 8191), _3 = i4[3] + ((O5 >>> 7 | N12 << 9) & 8191), j3 = i4[4] + ((N12 >>> 4 | $3 << 12) & 8191), g3 = i4[5] + ($3 >>> 1 & 8191), w4 = i4[6] + (($3 >>> 14 | B3 << 2) & 8191), b5 = i4[7] + ((B3 >>> 11 | A3 << 5) & 8191), I3 = i4[8] + ((A3 >>> 8 | T3 << 8) & 8191), R3 = i4[9] + (T3 >>> 5 | o4), x4 = 0, C5 = x4 + S4 * c6 + L3 * (5 * d4) + U2 * (5 * p4) + _3 * (5 * E5) + j3 * (5 * y5);
    x4 = C5 >>> 13, C5 &= 8191, C5 += g3 * (5 * h5) + w4 * (5 * f6) + b5 * (5 * l6) + I3 * (5 * u2) + R3 * (5 * a3), x4 += C5 >>> 13, C5 &= 8191;
    let P4 = x4 + S4 * a3 + L3 * c6 + U2 * (5 * d4) + _3 * (5 * p4) + j3 * (5 * E5);
    x4 = P4 >>> 13, P4 &= 8191, P4 += g3 * (5 * y5) + w4 * (5 * h5) + b5 * (5 * f6) + I3 * (5 * l6) + R3 * (5 * u2), x4 += P4 >>> 13, P4 &= 8191;
    let k6 = x4 + S4 * u2 + L3 * a3 + U2 * c6 + _3 * (5 * d4) + j3 * (5 * p4);
    x4 = k6 >>> 13, k6 &= 8191, k6 += g3 * (5 * E5) + w4 * (5 * y5) + b5 * (5 * h5) + I3 * (5 * f6) + R3 * (5 * l6), x4 += k6 >>> 13, k6 &= 8191;
    let M4 = x4 + S4 * l6 + L3 * u2 + U2 * a3 + _3 * c6 + j3 * (5 * d4);
    x4 = M4 >>> 13, M4 &= 8191, M4 += g3 * (5 * p4) + w4 * (5 * E5) + b5 * (5 * y5) + I3 * (5 * h5) + R3 * (5 * f6), x4 += M4 >>> 13, M4 &= 8191;
    let D2 = x4 + S4 * f6 + L3 * l6 + U2 * u2 + _3 * a3 + j3 * c6;
    x4 = D2 >>> 13, D2 &= 8191, D2 += g3 * (5 * d4) + w4 * (5 * p4) + b5 * (5 * E5) + I3 * (5 * y5) + R3 * (5 * h5), x4 += D2 >>> 13, D2 &= 8191;
    let z4 = x4 + S4 * h5 + L3 * f6 + U2 * l6 + _3 * u2 + j3 * a3;
    x4 = z4 >>> 13, z4 &= 8191, z4 += g3 * c6 + w4 * (5 * d4) + b5 * (5 * p4) + I3 * (5 * E5) + R3 * (5 * y5), x4 += z4 >>> 13, z4 &= 8191;
    let Z2 = x4 + S4 * y5 + L3 * h5 + U2 * f6 + _3 * l6 + j3 * u2;
    x4 = Z2 >>> 13, Z2 &= 8191, Z2 += g3 * a3 + w4 * c6 + b5 * (5 * d4) + I3 * (5 * p4) + R3 * (5 * E5), x4 += Z2 >>> 13, Z2 &= 8191;
    let it3 = x4 + S4 * E5 + L3 * y5 + U2 * h5 + _3 * f6 + j3 * l6;
    x4 = it3 >>> 13, it3 &= 8191, it3 += g3 * u2 + w4 * a3 + b5 * c6 + I3 * (5 * d4) + R3 * (5 * p4), x4 += it3 >>> 13, it3 &= 8191;
    let W3 = x4 + S4 * p4 + L3 * E5 + U2 * y5 + _3 * h5 + j3 * f6;
    x4 = W3 >>> 13, W3 &= 8191, W3 += g3 * l6 + w4 * u2 + b5 * a3 + I3 * c6 + R3 * (5 * d4), x4 += W3 >>> 13, W3 &= 8191;
    let J4 = x4 + S4 * d4 + L3 * p4 + U2 * E5 + _3 * y5 + j3 * h5;
    x4 = J4 >>> 13, J4 &= 8191, J4 += g3 * f6 + w4 * l6 + b5 * u2 + I3 * a3 + R3 * c6, x4 += J4 >>> 13, J4 &= 8191, x4 = (x4 << 2) + x4 | 0, x4 = x4 + C5 | 0, C5 = x4 & 8191, x4 = x4 >>> 13, P4 += x4, i4[0] = C5, i4[1] = P4, i4[2] = k6, i4[3] = M4, i4[4] = D2, i4[5] = z4, i4[6] = Z2, i4[7] = it3, i4[8] = W3, i4[9] = J4;
  }
  finalize() {
    const { h: e2, pad: n5 } = this, r3 = new Uint16Array(10);
    let o4 = e2[1] >>> 13;
    e2[1] &= 8191;
    for (let c6 = 2; c6 < 10; c6++) e2[c6] += o4, o4 = e2[c6] >>> 13, e2[c6] &= 8191;
    e2[0] += o4 * 5, o4 = e2[0] >>> 13, e2[0] &= 8191, e2[1] += o4, o4 = e2[1] >>> 13, e2[1] &= 8191, e2[2] += o4, r3[0] = e2[0] + 5, o4 = r3[0] >>> 13, r3[0] &= 8191;
    for (let c6 = 1; c6 < 10; c6++) r3[c6] = e2[c6] + o4, o4 = r3[c6] >>> 13, r3[c6] &= 8191;
    r3[9] -= 8192;
    let i4 = (o4 ^ 1) - 1;
    for (let c6 = 0; c6 < 10; c6++) r3[c6] &= i4;
    i4 = ~i4;
    for (let c6 = 0; c6 < 10; c6++) e2[c6] = e2[c6] & i4 | r3[c6];
    e2[0] = (e2[0] | e2[1] << 13) & 65535, e2[1] = (e2[1] >>> 3 | e2[2] << 10) & 65535, e2[2] = (e2[2] >>> 6 | e2[3] << 7) & 65535, e2[3] = (e2[3] >>> 9 | e2[4] << 4) & 65535, e2[4] = (e2[4] >>> 12 | e2[5] << 1 | e2[6] << 14) & 65535, e2[5] = (e2[6] >>> 2 | e2[7] << 11) & 65535, e2[6] = (e2[7] >>> 5 | e2[8] << 8) & 65535, e2[7] = (e2[8] >>> 8 | e2[9] << 5) & 65535;
    let s3 = e2[0] + n5[0];
    e2[0] = s3 & 65535;
    for (let c6 = 1; c6 < 8; c6++) s3 = (e2[c6] + n5[c6] | 0) + (s3 >>> 16) | 0, e2[c6] = s3 & 65535;
    Lt2(r3);
  }
  update(e2) {
    Or2(this);
    const { buffer: n5, blockLen: r3 } = this;
    e2 = Fe(e2);
    const o4 = e2.length;
    for (let i4 = 0; i4 < o4; ) {
      const s3 = Math.min(r3 - this.pos, o4 - i4);
      if (s3 === r3) {
        for (; r3 <= o4 - i4; i4 += r3) this.process(e2, i4);
        continue;
      }
      n5.set(e2.subarray(i4, i4 + s3), this.pos), this.pos += s3, i4 += s3, this.pos === r3 && (this.process(n5, 0, false), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Lt2(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e2) {
    Or2(this), ps(e2, this), this.finished = true;
    const { buffer: n5, h: r3 } = this;
    let { pos: o4 } = this;
    if (o4) {
      for (n5[o4++] = 1; o4 < 16; o4++) n5[o4] = 0;
      this.process(n5, 0, true);
    }
    this.finalize();
    let i4 = 0;
    for (let s3 = 0; s3 < 8; s3++) e2[i4++] = r3[s3] >>> 0, e2[i4++] = r3[s3] >>> 8;
    return e2;
  }
  digest() {
    const { buffer: e2, outputLen: n5 } = this;
    this.digestInto(e2);
    const r3 = e2.slice(0, n5);
    return this.destroy(), r3;
  }
};
function Ts(t) {
  const e2 = (r3, o4) => t(o4).update(Fe(r3)).digest(), n5 = t(new Uint8Array(32));
  return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = (r3) => t(r3), e2;
}
var Rs = Ts((t) => new Us(t));
function _s(t, e2, n5, r3, o4, i4 = 20) {
  let s3 = t[0], c6 = t[1], a3 = t[2], u2 = t[3], l6 = e2[0], f6 = e2[1], h5 = e2[2], y5 = e2[3], E5 = e2[4], p4 = e2[5], d4 = e2[6], v6 = e2[7], m3 = o4, O5 = n5[0], N12 = n5[1], $3 = n5[2], B3 = s3, A3 = c6, T3 = a3, S4 = u2, L3 = l6, U2 = f6, _3 = h5, j3 = y5, g3 = E5, w4 = p4, b5 = d4, I3 = v6, R3 = m3, x4 = O5, C5 = N12, P4 = $3;
  for (let M4 = 0; M4 < i4; M4 += 2) B3 = B3 + L3 | 0, R3 = V(R3 ^ B3, 16), g3 = g3 + R3 | 0, L3 = V(L3 ^ g3, 12), B3 = B3 + L3 | 0, R3 = V(R3 ^ B3, 8), g3 = g3 + R3 | 0, L3 = V(L3 ^ g3, 7), A3 = A3 + U2 | 0, x4 = V(x4 ^ A3, 16), w4 = w4 + x4 | 0, U2 = V(U2 ^ w4, 12), A3 = A3 + U2 | 0, x4 = V(x4 ^ A3, 8), w4 = w4 + x4 | 0, U2 = V(U2 ^ w4, 7), T3 = T3 + _3 | 0, C5 = V(C5 ^ T3, 16), b5 = b5 + C5 | 0, _3 = V(_3 ^ b5, 12), T3 = T3 + _3 | 0, C5 = V(C5 ^ T3, 8), b5 = b5 + C5 | 0, _3 = V(_3 ^ b5, 7), S4 = S4 + j3 | 0, P4 = V(P4 ^ S4, 16), I3 = I3 + P4 | 0, j3 = V(j3 ^ I3, 12), S4 = S4 + j3 | 0, P4 = V(P4 ^ S4, 8), I3 = I3 + P4 | 0, j3 = V(j3 ^ I3, 7), B3 = B3 + U2 | 0, P4 = V(P4 ^ B3, 16), b5 = b5 + P4 | 0, U2 = V(U2 ^ b5, 12), B3 = B3 + U2 | 0, P4 = V(P4 ^ B3, 8), b5 = b5 + P4 | 0, U2 = V(U2 ^ b5, 7), A3 = A3 + _3 | 0, R3 = V(R3 ^ A3, 16), I3 = I3 + R3 | 0, _3 = V(_3 ^ I3, 12), A3 = A3 + _3 | 0, R3 = V(R3 ^ A3, 8), I3 = I3 + R3 | 0, _3 = V(_3 ^ I3, 7), T3 = T3 + j3 | 0, x4 = V(x4 ^ T3, 16), g3 = g3 + x4 | 0, j3 = V(j3 ^ g3, 12), T3 = T3 + j3 | 0, x4 = V(x4 ^ T3, 8), g3 = g3 + x4 | 0, j3 = V(j3 ^ g3, 7), S4 = S4 + L3 | 0, C5 = V(C5 ^ S4, 16), w4 = w4 + C5 | 0, L3 = V(L3 ^ w4, 12), S4 = S4 + L3 | 0, C5 = V(C5 ^ S4, 8), w4 = w4 + C5 | 0, L3 = V(L3 ^ w4, 7);
  let k6 = 0;
  r3[k6++] = s3 + B3 | 0, r3[k6++] = c6 + A3 | 0, r3[k6++] = a3 + T3 | 0, r3[k6++] = u2 + S4 | 0, r3[k6++] = l6 + L3 | 0, r3[k6++] = f6 + U2 | 0, r3[k6++] = h5 + _3 | 0, r3[k6++] = y5 + j3 | 0, r3[k6++] = E5 + g3 | 0, r3[k6++] = p4 + w4 | 0, r3[k6++] = d4 + b5 | 0, r3[k6++] = v6 + I3 | 0, r3[k6++] = m3 + R3 | 0, r3[k6++] = O5 + x4 | 0, r3[k6++] = N12 + C5 | 0, r3[k6++] = $3 + P4 | 0;
}
var $s = Ns(_s, { counterRight: false, counterLength: 4, allowShortKeys: false });
var Ls = new Uint8Array(16);
var Rr2 = (t, e2) => {
  t.update(e2);
  const n5 = e2.length % 16;
  n5 && t.update(Ls.subarray(n5));
};
var js = new Uint8Array(32);
function _r2(t, e2, n5, r3, o4) {
  const i4 = t(e2, n5, js), s3 = Rs.create(i4);
  o4 && Rr2(s3, o4), Rr2(s3, r3);
  const c6 = new Uint8Array(16), a3 = gs(c6);
  Ir2(a3, 0, BigInt(o4 ? o4.length : 0), true), Ir2(a3, 8, BigInt(r3.length), true), s3.update(c6);
  const u2 = s3.digest();
  return Lt2(i4, c6), u2;
}
var Cs = (t) => (e2, n5, r3) => ({ encrypt(i4, s3) {
  const c6 = i4.length;
  s3 = Br2(c6 + 16, s3, false), s3.set(i4);
  const a3 = s3.subarray(0, -16);
  t(e2, n5, a3, a3, 1);
  const u2 = _r2(t, e2, n5, a3, r3);
  return s3.set(u2, c6), Lt2(u2), s3;
}, decrypt(i4, s3) {
  s3 = Br2(i4.length - 16, s3, false);
  const c6 = i4.subarray(0, -16), a3 = i4.subarray(-16), u2 = _r2(t, e2, n5, c6, r3);
  if (!bs(a3, u2)) throw new Error("invalid tag");
  return s3.set(i4.subarray(0, -16)), t(e2, n5, s3, s3, 1), Lt2(u2), s3;
} });
var $r2 = Es({ blockSize: 64, nonceLength: 12, tagLength: 16 }, Cs($s));
var Lr2 = class extends Pe2 {
  constructor(e2, n5) {
    super(), this.finished = false, this.destroyed = false, je2(e2);
    const r3 = _t2(n5);
    if (this.iHash = e2.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o4 = this.blockLen, i4 = new Uint8Array(o4);
    i4.set(r3.length > o4 ? e2.create().update(r3).digest() : r3);
    for (let s3 = 0; s3 < i4.length; s3++) i4[s3] ^= 54;
    this.iHash.update(i4), this.oHash = e2.create();
    for (let s3 = 0; s3 < i4.length; s3++) i4[s3] ^= 106;
    this.oHash.update(i4), i4.fill(0);
  }
  update(e2) {
    return Tt2(this), this.iHash.update(e2), this;
  }
  digestInto(e2) {
    Tt2(this), Wt2(e2, this.outputLen), this.finished = true, this.iHash.digestInto(e2), this.oHash.update(e2), this.oHash.digestInto(e2), this.destroy();
  }
  digest() {
    const e2 = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e2), e2;
  }
  _cloneInto(e2) {
    e2 || (e2 = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n5, iHash: r3, finished: o4, destroyed: i4, blockLen: s3, outputLen: c6 } = this;
    return e2 = e2, e2.finished = o4, e2.destroyed = i4, e2.blockLen = s3, e2.outputLen = c6, e2.oHash = n5._cloneInto(e2.oHash), e2.iHash = r3._cloneInto(e2.iHash), e2;
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
var pe2 = (t, e2, n5) => new Lr2(t, e2).update(n5).digest();
pe2.create = (t, e2) => new Lr2(t, e2);
function Ps(t, e2, n5) {
  return je2(t), n5 === void 0 && (n5 = new Uint8Array(t.outputLen)), pe2(t, _t2(n5), _t2(e2));
}
var Ye2 = new Uint8Array([0]);
var jr2 = new Uint8Array();
function ks(t, e2, n5, r3 = 32) {
  if (je2(t), Gt2(r3), r3 > 255 * t.outputLen) throw new Error("Length should be <= 255*HashLen");
  const o4 = Math.ceil(r3 / t.outputLen);
  n5 === void 0 && (n5 = jr2);
  const i4 = new Uint8Array(o4 * t.outputLen), s3 = pe2.create(t, e2), c6 = s3._cloneInto(), a3 = new Uint8Array(s3.outputLen);
  for (let u2 = 0; u2 < o4; u2++) Ye2[0] = u2 + 1, c6.update(u2 === 0 ? jr2 : a3).update(n5).update(Ye2).digestInto(a3), i4.set(a3, t.outputLen * u2), s3._cloneInto(c6);
  return s3.destroy(), c6.destroy(), a3.fill(0), Ye2.fill(0), i4.slice(0, r3);
}
var Vs = (t, e2, n5, r3, o4) => ks(t, Ps(t, e2, n5), r3, o4);
function Ms(t, e2, n5, r3) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
  const o4 = BigInt(32), i4 = BigInt(4294967295), s3 = Number(n5 >> o4 & i4), c6 = Number(n5 & i4), a3 = r3 ? 4 : 0, u2 = r3 ? 0 : 4;
  t.setUint32(e2 + a3, s3, r3), t.setUint32(e2 + u2, c6, r3);
}
function Ds(t, e2, n5) {
  return t & e2 ^ ~t & n5;
}
function Hs(t, e2, n5) {
  return t & e2 ^ t & n5 ^ e2 & n5;
}
var qs = class extends Pe2 {
  constructor(e2, n5, r3, o4) {
    super(), this.blockLen = e2, this.outputLen = n5, this.padOffset = r3, this.isLE = o4, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e2), this.view = Ce2(this.buffer);
  }
  update(e2) {
    Tt2(this);
    const { view: n5, buffer: r3, blockLen: o4 } = this;
    e2 = _t2(e2);
    const i4 = e2.length;
    for (let s3 = 0; s3 < i4; ) {
      const c6 = Math.min(o4 - this.pos, i4 - s3);
      if (c6 === o4) {
        const a3 = Ce2(e2);
        for (; o4 <= i4 - s3; s3 += o4) this.process(a3, s3);
        continue;
      }
      r3.set(e2.subarray(s3, s3 + c6), this.pos), this.pos += c6, s3 += c6, this.pos === o4 && (this.process(n5, 0), this.pos = 0);
    }
    return this.length += e2.length, this.roundClean(), this;
  }
  digestInto(e2) {
    Tt2(this), Gn2(e2, this), this.finished = true;
    const { buffer: n5, view: r3, blockLen: o4, isLE: i4 } = this;
    let { pos: s3 } = this;
    n5[s3++] = 128, this.buffer.subarray(s3).fill(0), this.padOffset > o4 - s3 && (this.process(r3, 0), s3 = 0);
    for (let f6 = s3; f6 < o4; f6++) n5[f6] = 0;
    Ms(r3, o4 - 8, BigInt(this.length * 8), i4), this.process(r3, 0);
    const c6 = Ce2(e2), a3 = this.outputLen;
    if (a3 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u2 = a3 / 4, l6 = this.get();
    if (u2 > l6.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f6 = 0; f6 < u2; f6++) c6.setUint32(4 * f6, l6[f6], i4);
  }
  digest() {
    const { buffer: e2, outputLen: n5 } = this;
    this.digestInto(e2);
    const r3 = e2.slice(0, n5);
    return this.destroy(), r3;
  }
  _cloneInto(e2) {
    e2 || (e2 = new this.constructor()), e2.set(...this.get());
    const { blockLen: n5, buffer: r3, length: o4, finished: i4, destroyed: s3, pos: c6 } = this;
    return e2.length = o4, e2.pos = c6, e2.finished = i4, e2.destroyed = s3, o4 % n5 && e2.buffer.set(r3), e2;
  }
};
var Ks = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var wt2 = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
var bt2 = new Uint32Array(64);
var Fs = class extends qs {
  constructor() {
    super(64, 32, 8, false), this.A = wt2[0] | 0, this.B = wt2[1] | 0, this.C = wt2[2] | 0, this.D = wt2[3] | 0, this.E = wt2[4] | 0, this.F = wt2[5] | 0, this.G = wt2[6] | 0, this.H = wt2[7] | 0;
  }
  get() {
    const { A: e2, B: n5, C: r3, D: o4, E: i4, F: s3, G: c6, H: a3 } = this;
    return [e2, n5, r3, o4, i4, s3, c6, a3];
  }
  set(e2, n5, r3, o4, i4, s3, c6, a3) {
    this.A = e2 | 0, this.B = n5 | 0, this.C = r3 | 0, this.D = o4 | 0, this.E = i4 | 0, this.F = s3 | 0, this.G = c6 | 0, this.H = a3 | 0;
  }
  process(e2, n5) {
    for (let f6 = 0; f6 < 16; f6++, n5 += 4) bt2[f6] = e2.getUint32(n5, false);
    for (let f6 = 16; f6 < 64; f6++) {
      const h5 = bt2[f6 - 15], y5 = bt2[f6 - 2], E5 = st(h5, 7) ^ st(h5, 18) ^ h5 >>> 3, p4 = st(y5, 17) ^ st(y5, 19) ^ y5 >>> 10;
      bt2[f6] = p4 + bt2[f6 - 7] + E5 + bt2[f6 - 16] | 0;
    }
    let { A: r3, B: o4, C: i4, D: s3, E: c6, F: a3, G: u2, H: l6 } = this;
    for (let f6 = 0; f6 < 64; f6++) {
      const h5 = st(c6, 6) ^ st(c6, 11) ^ st(c6, 25), y5 = l6 + h5 + Ds(c6, a3, u2) + Ks[f6] + bt2[f6] | 0, p4 = (st(r3, 2) ^ st(r3, 13) ^ st(r3, 22)) + Hs(r3, o4, i4) | 0;
      l6 = u2, u2 = a3, a3 = c6, c6 = s3 + y5 | 0, s3 = i4, i4 = o4, o4 = r3, r3 = y5 + p4 | 0;
    }
    r3 = r3 + this.A | 0, o4 = o4 + this.B | 0, i4 = i4 + this.C | 0, s3 = s3 + this.D | 0, c6 = c6 + this.E | 0, a3 = a3 + this.F | 0, u2 = u2 + this.G | 0, l6 = l6 + this.H | 0, this.set(r3, o4, i4, s3, c6, a3, u2, l6);
  }
  roundClean() {
    bt2.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
var Jt2 = Qn2(() => new Fs());
var ge2 = BigInt(0);
var ye2 = BigInt(1);
var zs = BigInt(2);
function St2(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Qt2(t) {
  if (!St2(t)) throw new Error("Uint8Array expected");
}
function jt2(t, e2) {
  if (typeof e2 != "boolean") throw new Error(t + " boolean expected, got " + e2);
}
var Zs = Array.from({ length: 256 }, (t, e2) => e2.toString(16).padStart(2, "0"));
function Ct(t) {
  Qt2(t);
  let e2 = "";
  for (let n5 = 0; n5 < t.length; n5++) e2 += Zs[t[n5]];
  return e2;
}
function Pt2(t) {
  const e2 = t.toString(16);
  return e2.length & 1 ? "0" + e2 : e2;
}
function Ge2(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? ge2 : BigInt("0x" + t);
}
var ut2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Cr2(t) {
  if (t >= ut2._0 && t <= ut2._9) return t - ut2._0;
  if (t >= ut2.A && t <= ut2.F) return t - (ut2.A - 10);
  if (t >= ut2.a && t <= ut2.f) return t - (ut2.a - 10);
}
function kt2(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e2 = t.length, n5 = e2 / 2;
  if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
  const r3 = new Uint8Array(n5);
  for (let o4 = 0, i4 = 0; o4 < n5; o4++, i4 += 2) {
    const s3 = Cr2(t.charCodeAt(i4)), c6 = Cr2(t.charCodeAt(i4 + 1));
    if (s3 === void 0 || c6 === void 0) {
      const a3 = t[i4] + t[i4 + 1];
      throw new Error('hex string expected, got non-hex character "' + a3 + '" at index ' + i4);
    }
    r3[o4] = s3 * 16 + c6;
  }
  return r3;
}
function Ot2(t) {
  return Ge2(Ct(t));
}
function te2(t) {
  return Qt2(t), Ge2(Ct(Uint8Array.from(t).reverse()));
}
function Vt2(t, e2) {
  return kt2(t.toString(16).padStart(e2 * 2, "0"));
}
function me2(t, e2) {
  return Vt2(t, e2).reverse();
}
function Ys(t) {
  return kt2(Pt2(t));
}
function et(t, e2, n5) {
  let r3;
  if (typeof e2 == "string") try {
    r3 = kt2(e2);
  } catch (i4) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + i4);
  }
  else if (St2(e2)) r3 = Uint8Array.from(e2);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o4 = r3.length;
  if (typeof n5 == "number" && o4 !== n5) throw new Error(t + " of length " + n5 + " expected, got " + o4);
  return r3;
}
function ee(...t) {
  let e2 = 0;
  for (let r3 = 0; r3 < t.length; r3++) {
    const o4 = t[r3];
    Qt2(o4), e2 += o4.length;
  }
  const n5 = new Uint8Array(e2);
  for (let r3 = 0, o4 = 0; r3 < t.length; r3++) {
    const i4 = t[r3];
    n5.set(i4, o4), o4 += i4.length;
  }
  return n5;
}
function Gs(t, e2) {
  if (t.length !== e2.length) return false;
  let n5 = 0;
  for (let r3 = 0; r3 < t.length; r3++) n5 |= t[r3] ^ e2[r3];
  return n5 === 0;
}
function Ws(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
var We2 = (t) => typeof t == "bigint" && ge2 <= t;
function we2(t, e2, n5) {
  return We2(t) && We2(e2) && We2(n5) && e2 <= t && t < n5;
}
function ft2(t, e2, n5, r3) {
  if (!we2(e2, n5, r3)) throw new Error("expected valid " + t + ": " + n5 + " <= n < " + r3 + ", got " + e2);
}
function Pr2(t) {
  let e2;
  for (e2 = 0; t > ge2; t >>= ye2, e2 += 1) ;
  return e2;
}
function Xs(t, e2) {
  return t >> BigInt(e2) & ye2;
}
function Js(t, e2, n5) {
  return t | (n5 ? ye2 : ge2) << BigInt(e2);
}
var Xe2 = (t) => (zs << BigInt(t - 1)) - ye2;
var Je2 = (t) => new Uint8Array(t);
var kr2 = (t) => Uint8Array.from(t);
function Vr2(t, e2, n5) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e2 != "number" || e2 < 2) throw new Error("qByteLen must be a number");
  if (typeof n5 != "function") throw new Error("hmacFn must be a function");
  let r3 = Je2(t), o4 = Je2(t), i4 = 0;
  const s3 = () => {
    r3.fill(1), o4.fill(0), i4 = 0;
  }, c6 = (...f6) => n5(o4, r3, ...f6), a3 = (f6 = Je2()) => {
    o4 = c6(kr2([0]), f6), r3 = c6(), f6.length !== 0 && (o4 = c6(kr2([1]), f6), r3 = c6());
  }, u2 = () => {
    if (i4++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let f6 = 0;
    const h5 = [];
    for (; f6 < e2; ) {
      r3 = c6();
      const y5 = r3.slice();
      h5.push(y5), f6 += r3.length;
    }
    return ee(...h5);
  };
  return (f6, h5) => {
    s3(), a3(f6);
    let y5;
    for (; !(y5 = h5(u2())); ) a3();
    return s3(), y5;
  };
}
var Qs = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || St2(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e2) => e2.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Mt2(t, e2, n5 = {}) {
  const r3 = (o4, i4, s3) => {
    const c6 = Qs[i4];
    if (typeof c6 != "function") throw new Error("invalid validator function");
    const a3 = t[o4];
    if (!(s3 && a3 === void 0) && !c6(a3, t)) throw new Error("param " + String(o4) + " is invalid. Expected " + i4 + ", got " + a3);
  };
  for (const [o4, i4] of Object.entries(e2)) r3(o4, i4, false);
  for (const [o4, i4] of Object.entries(n5)) r3(o4, i4, true);
  return t;
}
var tc = () => {
  throw new Error("not implemented");
};
function Qe2(t) {
  const e2 = /* @__PURE__ */ new WeakMap();
  return (n5, ...r3) => {
    const o4 = e2.get(n5);
    if (o4 !== void 0) return o4;
    const i4 = t(n5, ...r3);
    return e2.set(n5, i4), i4;
  };
}
var ec = Object.freeze({ __proto__: null, isBytes: St2, abytes: Qt2, abool: jt2, bytesToHex: Ct, numberToHexUnpadded: Pt2, hexToNumber: Ge2, hexToBytes: kt2, bytesToNumberBE: Ot2, bytesToNumberLE: te2, numberToBytesBE: Vt2, numberToBytesLE: me2, numberToVarBytesBE: Ys, ensureBytes: et, concatBytes: ee, equalBytes: Gs, utf8ToBytes: Ws, inRange: we2, aInRange: ft2, bitLen: Pr2, bitGet: Xs, bitSet: Js, bitMask: Xe2, createHmacDrbg: Vr2, validateObject: Mt2, notImplemented: tc, memoized: Qe2 });
var q = BigInt(0);
var H2 = BigInt(1);
var At = BigInt(2);
var nc = BigInt(3);
var tn = BigInt(4);
var Mr2 = BigInt(5);
var Dr2 = BigInt(8);
function X(t, e2) {
  const n5 = t % e2;
  return n5 >= q ? n5 : e2 + n5;
}
function Hr2(t, e2, n5) {
  if (e2 < q) throw new Error("invalid exponent, negatives unsupported");
  if (n5 <= q) throw new Error("invalid modulus");
  if (n5 === H2) return q;
  let r3 = H2;
  for (; e2 > q; ) e2 & H2 && (r3 = r3 * t % n5), t = t * t % n5, e2 >>= H2;
  return r3;
}
function ot(t, e2, n5) {
  let r3 = t;
  for (; e2-- > q; ) r3 *= r3, r3 %= n5;
  return r3;
}
function en2(t, e2) {
  if (t === q) throw new Error("invert: expected non-zero number");
  if (e2 <= q) throw new Error("invert: expected positive modulus, got " + e2);
  let n5 = X(t, e2), r3 = e2, o4 = q, i4 = H2;
  for (; n5 !== q; ) {
    const c6 = r3 / n5, a3 = r3 % n5, u2 = o4 - i4 * c6;
    r3 = n5, n5 = a3, o4 = i4, i4 = u2;
  }
  if (r3 !== H2) throw new Error("invert: does not exist");
  return X(o4, e2);
}
function rc(t) {
  const e2 = (t - H2) / At;
  let n5, r3, o4;
  for (n5 = t - H2, r3 = 0; n5 % At === q; n5 /= At, r3++) ;
  for (o4 = At; o4 < t && Hr2(o4, e2, t) !== t - H2; o4++) if (o4 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r3 === 1) {
    const s3 = (t + H2) / tn;
    return function(a3, u2) {
      const l6 = a3.pow(u2, s3);
      if (!a3.eql(a3.sqr(l6), u2)) throw new Error("Cannot find square root");
      return l6;
    };
  }
  const i4 = (n5 + H2) / At;
  return function(c6, a3) {
    if (c6.pow(a3, e2) === c6.neg(c6.ONE)) throw new Error("Cannot find square root");
    let u2 = r3, l6 = c6.pow(c6.mul(c6.ONE, o4), n5), f6 = c6.pow(a3, i4), h5 = c6.pow(a3, n5);
    for (; !c6.eql(h5, c6.ONE); ) {
      if (c6.eql(h5, c6.ZERO)) return c6.ZERO;
      let y5 = 1;
      for (let p4 = c6.sqr(h5); y5 < u2 && !c6.eql(p4, c6.ONE); y5++) p4 = c6.sqr(p4);
      const E5 = c6.pow(l6, H2 << BigInt(u2 - y5 - 1));
      l6 = c6.sqr(E5), f6 = c6.mul(f6, E5), h5 = c6.mul(h5, l6), u2 = y5;
    }
    return f6;
  };
}
function oc(t) {
  if (t % tn === nc) {
    const e2 = (t + H2) / tn;
    return function(r3, o4) {
      const i4 = r3.pow(o4, e2);
      if (!r3.eql(r3.sqr(i4), o4)) throw new Error("Cannot find square root");
      return i4;
    };
  }
  if (t % Dr2 === Mr2) {
    const e2 = (t - Mr2) / Dr2;
    return function(r3, o4) {
      const i4 = r3.mul(o4, At), s3 = r3.pow(i4, e2), c6 = r3.mul(o4, s3), a3 = r3.mul(r3.mul(c6, At), s3), u2 = r3.mul(c6, r3.sub(a3, r3.ONE));
      if (!r3.eql(r3.sqr(u2), o4)) throw new Error("Cannot find square root");
      return u2;
    };
  }
  return rc(t);
}
var ic = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function sc(t) {
  const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n5 = ic.reduce((r3, o4) => (r3[o4] = "function", r3), e2);
  return Mt2(t, n5);
}
function cc(t, e2, n5) {
  if (n5 < q) throw new Error("invalid exponent, negatives unsupported");
  if (n5 === q) return t.ONE;
  if (n5 === H2) return e2;
  let r3 = t.ONE, o4 = e2;
  for (; n5 > q; ) n5 & H2 && (r3 = t.mul(r3, o4)), o4 = t.sqr(o4), n5 >>= H2;
  return r3;
}
function ac(t, e2) {
  const n5 = new Array(e2.length), r3 = e2.reduce((i4, s3, c6) => t.is0(s3) ? i4 : (n5[c6] = i4, t.mul(i4, s3)), t.ONE), o4 = t.inv(r3);
  return e2.reduceRight((i4, s3, c6) => t.is0(s3) ? i4 : (n5[c6] = t.mul(i4, n5[c6]), t.mul(i4, s3)), o4), n5;
}
function qr2(t, e2) {
  const n5 = e2 !== void 0 ? e2 : t.toString(2).length, r3 = Math.ceil(n5 / 8);
  return { nBitLength: n5, nByteLength: r3 };
}
function Kr3(t, e2, n5 = false, r3 = {}) {
  if (t <= q) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: o4, nByteLength: i4 } = qr2(t, e2);
  if (i4 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let s3;
  const c6 = Object.freeze({ ORDER: t, isLE: n5, BITS: o4, BYTES: i4, MASK: Xe2(o4), ZERO: q, ONE: H2, create: (a3) => X(a3, t), isValid: (a3) => {
    if (typeof a3 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof a3);
    return q <= a3 && a3 < t;
  }, is0: (a3) => a3 === q, isOdd: (a3) => (a3 & H2) === H2, neg: (a3) => X(-a3, t), eql: (a3, u2) => a3 === u2, sqr: (a3) => X(a3 * a3, t), add: (a3, u2) => X(a3 + u2, t), sub: (a3, u2) => X(a3 - u2, t), mul: (a3, u2) => X(a3 * u2, t), pow: (a3, u2) => cc(c6, a3, u2), div: (a3, u2) => X(a3 * en2(u2, t), t), sqrN: (a3) => a3 * a3, addN: (a3, u2) => a3 + u2, subN: (a3, u2) => a3 - u2, mulN: (a3, u2) => a3 * u2, inv: (a3) => en2(a3, t), sqrt: r3.sqrt || ((a3) => (s3 || (s3 = oc(t)), s3(c6, a3))), invertBatch: (a3) => ac(c6, a3), cmov: (a3, u2, l6) => l6 ? u2 : a3, toBytes: (a3) => n5 ? me2(a3, i4) : Vt2(a3, i4), fromBytes: (a3) => {
    if (a3.length !== i4) throw new Error("Field.fromBytes: expected " + i4 + " bytes, got " + a3.length);
    return n5 ? te2(a3) : Ot2(a3);
  } });
  return Object.freeze(c6);
}
function Fr2(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e2 = t.toString(2).length;
  return Math.ceil(e2 / 8);
}
function zr2(t) {
  const e2 = Fr2(t);
  return e2 + Math.ceil(e2 / 2);
}
function uc(t, e2, n5 = false) {
  const r3 = t.length, o4 = Fr2(e2), i4 = zr2(e2);
  if (r3 < 16 || r3 < i4 || r3 > 1024) throw new Error("expected " + i4 + "-1024 bytes of input, got " + r3);
  const s3 = n5 ? te2(t) : Ot2(t), c6 = X(s3, e2 - H2) + H2;
  return n5 ? me2(c6, o4) : Vt2(c6, o4);
}
var Zr2 = BigInt(0);
var be2 = BigInt(1);
function nn2(t, e2) {
  const n5 = e2.negate();
  return t ? n5 : e2;
}
function Yr2(t, e2) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t);
}
function rn2(t, e2) {
  Yr2(t, e2);
  const n5 = Math.ceil(e2 / t) + 1, r3 = 2 ** (t - 1);
  return { windows: n5, windowSize: r3 };
}
function fc(t, e2) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n5, r3) => {
    if (!(n5 instanceof e2)) throw new Error("invalid point at index " + r3);
  });
}
function lc(t, e2) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n5, r3) => {
    if (!e2.isValid(n5)) throw new Error("invalid scalar at index " + r3);
  });
}
var on2 = /* @__PURE__ */ new WeakMap();
var Gr2 = /* @__PURE__ */ new WeakMap();
function sn2(t) {
  return Gr2.get(t) || 1;
}
function dc(t, e2) {
  return { constTimeNegate: nn2, hasPrecomputes(n5) {
    return sn2(n5) !== 1;
  }, unsafeLadder(n5, r3, o4 = t.ZERO) {
    let i4 = n5;
    for (; r3 > Zr2; ) r3 & be2 && (o4 = o4.add(i4)), i4 = i4.double(), r3 >>= be2;
    return o4;
  }, precomputeWindow(n5, r3) {
    const { windows: o4, windowSize: i4 } = rn2(r3, e2), s3 = [];
    let c6 = n5, a3 = c6;
    for (let u2 = 0; u2 < o4; u2++) {
      a3 = c6, s3.push(a3);
      for (let l6 = 1; l6 < i4; l6++) a3 = a3.add(c6), s3.push(a3);
      c6 = a3.double();
    }
    return s3;
  }, wNAF(n5, r3, o4) {
    const { windows: i4, windowSize: s3 } = rn2(n5, e2);
    let c6 = t.ZERO, a3 = t.BASE;
    const u2 = BigInt(2 ** n5 - 1), l6 = 2 ** n5, f6 = BigInt(n5);
    for (let h5 = 0; h5 < i4; h5++) {
      const y5 = h5 * s3;
      let E5 = Number(o4 & u2);
      o4 >>= f6, E5 > s3 && (E5 -= l6, o4 += be2);
      const p4 = y5, d4 = y5 + Math.abs(E5) - 1, v6 = h5 % 2 !== 0, m3 = E5 < 0;
      E5 === 0 ? a3 = a3.add(nn2(v6, r3[p4])) : c6 = c6.add(nn2(m3, r3[d4]));
    }
    return { p: c6, f: a3 };
  }, wNAFUnsafe(n5, r3, o4, i4 = t.ZERO) {
    const { windows: s3, windowSize: c6 } = rn2(n5, e2), a3 = BigInt(2 ** n5 - 1), u2 = 2 ** n5, l6 = BigInt(n5);
    for (let f6 = 0; f6 < s3; f6++) {
      const h5 = f6 * c6;
      if (o4 === Zr2) break;
      let y5 = Number(o4 & a3);
      if (o4 >>= l6, y5 > c6 && (y5 -= u2, o4 += be2), y5 === 0) continue;
      let E5 = r3[h5 + Math.abs(y5) - 1];
      y5 < 0 && (E5 = E5.negate()), i4 = i4.add(E5);
    }
    return i4;
  }, getPrecomputes(n5, r3, o4) {
    let i4 = on2.get(r3);
    return i4 || (i4 = this.precomputeWindow(r3, n5), n5 !== 1 && on2.set(r3, o4(i4))), i4;
  }, wNAFCached(n5, r3, o4) {
    const i4 = sn2(n5);
    return this.wNAF(i4, this.getPrecomputes(i4, n5, o4), r3);
  }, wNAFCachedUnsafe(n5, r3, o4, i4) {
    const s3 = sn2(n5);
    return s3 === 1 ? this.unsafeLadder(n5, r3, i4) : this.wNAFUnsafe(s3, this.getPrecomputes(s3, n5, o4), r3, i4);
  }, setWindowSize(n5, r3) {
    Yr2(r3, e2), Gr2.set(n5, r3), on2.delete(n5);
  } };
}
function hc(t, e2, n5, r3) {
  if (fc(n5, t), lc(r3, e2), n5.length !== r3.length) throw new Error("arrays of points and scalars must have equal length");
  const o4 = t.ZERO, i4 = Pr2(BigInt(n5.length)), s3 = i4 > 12 ? i4 - 3 : i4 > 4 ? i4 - 2 : i4 ? 2 : 1, c6 = (1 << s3) - 1, a3 = new Array(c6 + 1).fill(o4), u2 = Math.floor((e2.BITS - 1) / s3) * s3;
  let l6 = o4;
  for (let f6 = u2; f6 >= 0; f6 -= s3) {
    a3.fill(o4);
    for (let y5 = 0; y5 < r3.length; y5++) {
      const E5 = r3[y5], p4 = Number(E5 >> BigInt(f6) & BigInt(c6));
      a3[p4] = a3[p4].add(n5[y5]);
    }
    let h5 = o4;
    for (let y5 = a3.length - 1, E5 = o4; y5 > 0; y5--) E5 = E5.add(a3[y5]), h5 = h5.add(E5);
    if (l6 = l6.add(h5), f6 !== 0) for (let y5 = 0; y5 < s3; y5++) l6 = l6.double();
  }
  return l6;
}
function Wr2(t) {
  return sc(t.Fp), Mt2(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...qr2(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8);
var Dt2 = BigInt(0);
var cn = BigInt(1);
function pc(t) {
  return Mt2(t, { a: "bigint" }, { montgomeryBits: "isSafeInteger", nByteLength: "isSafeInteger", adjustScalarBytes: "function", domain: "function", powPminus2: "function", Gu: "bigint" }), Object.freeze({ ...t });
}
function gc(t) {
  const e2 = pc(t), { P: n5 } = e2, r3 = (m3) => X(m3, n5), o4 = e2.montgomeryBits, i4 = Math.ceil(o4 / 8), s3 = e2.nByteLength, c6 = e2.adjustScalarBytes || ((m3) => m3), a3 = e2.powPminus2 || ((m3) => Hr2(m3, n5 - BigInt(2), n5));
  function u2(m3, O5, N12) {
    const $3 = r3(m3 * (O5 - N12));
    return O5 = r3(O5 - $3), N12 = r3(N12 + $3), [O5, N12];
  }
  const l6 = (e2.a - BigInt(2)) / BigInt(4);
  function f6(m3, O5) {
    ft2("u", m3, Dt2, n5), ft2("scalar", O5, Dt2, n5);
    const N12 = O5, $3 = m3;
    let B3 = cn, A3 = Dt2, T3 = m3, S4 = cn, L3 = Dt2, U2;
    for (let j3 = BigInt(o4 - 1); j3 >= Dt2; j3--) {
      const g3 = N12 >> j3 & cn;
      L3 ^= g3, U2 = u2(L3, B3, T3), B3 = U2[0], T3 = U2[1], U2 = u2(L3, A3, S4), A3 = U2[0], S4 = U2[1], L3 = g3;
      const w4 = B3 + A3, b5 = r3(w4 * w4), I3 = B3 - A3, R3 = r3(I3 * I3), x4 = b5 - R3, C5 = T3 + S4, P4 = T3 - S4, k6 = r3(P4 * w4), M4 = r3(C5 * I3), D2 = k6 + M4, z4 = k6 - M4;
      T3 = r3(D2 * D2), S4 = r3($3 * r3(z4 * z4)), B3 = r3(b5 * R3), A3 = r3(x4 * (b5 + r3(l6 * x4)));
    }
    U2 = u2(L3, B3, T3), B3 = U2[0], T3 = U2[1], U2 = u2(L3, A3, S4), A3 = U2[0], S4 = U2[1];
    const _3 = a3(A3);
    return r3(B3 * _3);
  }
  function h5(m3) {
    return me2(r3(m3), i4);
  }
  function y5(m3) {
    const O5 = et("u coordinate", m3, i4);
    return s3 === 32 && (O5[31] &= 127), te2(O5);
  }
  function E5(m3) {
    const O5 = et("scalar", m3), N12 = O5.length;
    if (N12 !== i4 && N12 !== s3) {
      let $3 = "" + i4 + " or " + s3;
      throw new Error("invalid scalar, expected " + $3 + " bytes, got " + N12);
    }
    return te2(c6(O5));
  }
  function p4(m3, O5) {
    const N12 = y5(O5), $3 = E5(m3), B3 = f6(N12, $3);
    if (B3 === Dt2) throw new Error("invalid private or public key received");
    return h5(B3);
  }
  const d4 = h5(e2.Gu);
  function v6(m3) {
    return p4(m3, d4);
  }
  return { scalarMult: p4, scalarMultBase: v6, getSharedSecret: (m3, O5) => p4(m3, O5), getPublicKey: (m3) => v6(m3), utils: { randomPrivateKey: () => e2.randomBytes(e2.nByteLength) }, GuBytes: d4 };
}
var an = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
var yc = BigInt(1);
var Xr2 = BigInt(2);
var mc = BigInt(3);
var wc = BigInt(5);
BigInt(8);
function bc(t) {
  const e2 = BigInt(10), n5 = BigInt(20), r3 = BigInt(40), o4 = BigInt(80), i4 = an, c6 = t * t % i4 * t % i4, a3 = ot(c6, Xr2, i4) * c6 % i4, u2 = ot(a3, yc, i4) * t % i4, l6 = ot(u2, wc, i4) * u2 % i4, f6 = ot(l6, e2, i4) * l6 % i4, h5 = ot(f6, n5, i4) * f6 % i4, y5 = ot(h5, r3, i4) * h5 % i4, E5 = ot(y5, o4, i4) * y5 % i4, p4 = ot(E5, o4, i4) * y5 % i4, d4 = ot(p4, e2, i4) * l6 % i4;
  return { pow_p_5_8: ot(d4, Xr2, i4) * t % i4, b2: c6 };
}
function Ec(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
var un = gc({ P: an, a: BigInt(486662), montgomeryBits: 255, nByteLength: 32, Gu: BigInt(9), powPminus2: (t) => {
  const e2 = an, { pow_p_5_8: n5, b2: r3 } = bc(t);
  return X(ot(n5, mc, e2) * r3, e2);
}, adjustScalarBytes: Ec, randomBytes: $t2 });
function Jr2(t) {
  t.lowS !== void 0 && jt2("lowS", t.lowS), t.prehash !== void 0 && jt2("prehash", t.prehash);
}
function vc(t) {
  const e2 = Wr2(t);
  Mt2(e2, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
  const { endo: n5, Fp: r3, a: o4 } = e2;
  if (n5) {
    if (!r3.eql(o4, r3.ZERO)) throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
    if (typeof n5 != "object" || typeof n5.beta != "bigint" || typeof n5.splitScalar != "function") throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e2 });
}
var { bytesToNumberBE: xc, hexToBytes: Sc } = ec;
var Oc = class extends Error {
  constructor(e2 = "") {
    super(e2);
  }
};
var lt2 = { Err: Oc, _tlv: { encode: (t, e2) => {
  const { Err: n5 } = lt2;
  if (t < 0 || t > 256) throw new n5("tlv.encode: wrong tag");
  if (e2.length & 1) throw new n5("tlv.encode: unpadded data");
  const r3 = e2.length / 2, o4 = Pt2(r3);
  if (o4.length / 2 & 128) throw new n5("tlv.encode: long form length too big");
  const i4 = r3 > 127 ? Pt2(o4.length / 2 | 128) : "";
  return Pt2(t) + i4 + o4 + e2;
}, decode(t, e2) {
  const { Err: n5 } = lt2;
  let r3 = 0;
  if (t < 0 || t > 256) throw new n5("tlv.encode: wrong tag");
  if (e2.length < 2 || e2[r3++] !== t) throw new n5("tlv.decode: wrong tlv");
  const o4 = e2[r3++], i4 = !!(o4 & 128);
  let s3 = 0;
  if (!i4) s3 = o4;
  else {
    const a3 = o4 & 127;
    if (!a3) throw new n5("tlv.decode(long): indefinite length not supported");
    if (a3 > 4) throw new n5("tlv.decode(long): byte length is too big");
    const u2 = e2.subarray(r3, r3 + a3);
    if (u2.length !== a3) throw new n5("tlv.decode: length bytes not complete");
    if (u2[0] === 0) throw new n5("tlv.decode(long): zero leftmost byte");
    for (const l6 of u2) s3 = s3 << 8 | l6;
    if (r3 += a3, s3 < 128) throw new n5("tlv.decode(long): not minimal encoding");
  }
  const c6 = e2.subarray(r3, r3 + s3);
  if (c6.length !== s3) throw new n5("tlv.decode: wrong value length");
  return { v: c6, l: e2.subarray(r3 + s3) };
} }, _int: { encode(t) {
  const { Err: e2 } = lt2;
  if (t < dt2) throw new e2("integer: negative integers are not allowed");
  let n5 = Pt2(t);
  if (Number.parseInt(n5[0], 16) & 8 && (n5 = "00" + n5), n5.length & 1) throw new e2("unexpected DER parsing assertion: unpadded hex");
  return n5;
}, decode(t) {
  const { Err: e2 } = lt2;
  if (t[0] & 128) throw new e2("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e2("invalid signature integer: unnecessary leading zero");
  return xc(t);
} }, toSig(t) {
  const { Err: e2, _int: n5, _tlv: r3 } = lt2, o4 = typeof t == "string" ? Sc(t) : t;
  Qt2(o4);
  const { v: i4, l: s3 } = r3.decode(48, o4);
  if (s3.length) throw new e2("invalid signature: left bytes after parsing");
  const { v: c6, l: a3 } = r3.decode(2, i4), { v: u2, l: l6 } = r3.decode(2, a3);
  if (l6.length) throw new e2("invalid signature: left bytes after parsing");
  return { r: n5.decode(c6), s: n5.decode(u2) };
}, hexFromSig(t) {
  const { _tlv: e2, _int: n5 } = lt2, r3 = e2.encode(2, n5.encode(t.r)), o4 = e2.encode(2, n5.encode(t.s)), i4 = r3 + o4;
  return e2.encode(48, i4);
} };
var dt2 = BigInt(0);
var K2 = BigInt(1);
BigInt(2);
var Qr2 = BigInt(3);
BigInt(4);
function Ac(t) {
  const e2 = vc(t), { Fp: n5 } = e2, r3 = Kr3(e2.n, e2.nBitLength), o4 = e2.toBytes || ((p4, d4, v6) => {
    const m3 = d4.toAffine();
    return ee(Uint8Array.from([4]), n5.toBytes(m3.x), n5.toBytes(m3.y));
  }), i4 = e2.fromBytes || ((p4) => {
    const d4 = p4.subarray(1), v6 = n5.fromBytes(d4.subarray(0, n5.BYTES)), m3 = n5.fromBytes(d4.subarray(n5.BYTES, 2 * n5.BYTES));
    return { x: v6, y: m3 };
  });
  function s3(p4) {
    const { a: d4, b: v6 } = e2, m3 = n5.sqr(p4), O5 = n5.mul(m3, p4);
    return n5.add(n5.add(O5, n5.mul(p4, d4)), v6);
  }
  if (!n5.eql(n5.sqr(e2.Gy), s3(e2.Gx))) throw new Error("bad generator point: equation left != right");
  function c6(p4) {
    return we2(p4, K2, e2.n);
  }
  function a3(p4) {
    const { allowedPrivateKeyLengths: d4, nByteLength: v6, wrapPrivateKey: m3, n: O5 } = e2;
    if (d4 && typeof p4 != "bigint") {
      if (St2(p4) && (p4 = Ct(p4)), typeof p4 != "string" || !d4.includes(p4.length)) throw new Error("invalid private key");
      p4 = p4.padStart(v6 * 2, "0");
    }
    let N12;
    try {
      N12 = typeof p4 == "bigint" ? p4 : Ot2(et("private key", p4, v6));
    } catch {
      throw new Error("invalid private key, expected hex or " + v6 + " bytes, got " + typeof p4);
    }
    return m3 && (N12 = X(N12, O5)), ft2("private key", N12, K2, O5), N12;
  }
  function u2(p4) {
    if (!(p4 instanceof h5)) throw new Error("ProjectivePoint expected");
  }
  const l6 = Qe2((p4, d4) => {
    const { px: v6, py: m3, pz: O5 } = p4;
    if (n5.eql(O5, n5.ONE)) return { x: v6, y: m3 };
    const N12 = p4.is0();
    d4 == null && (d4 = N12 ? n5.ONE : n5.inv(O5));
    const $3 = n5.mul(v6, d4), B3 = n5.mul(m3, d4), A3 = n5.mul(O5, d4);
    if (N12) return { x: n5.ZERO, y: n5.ZERO };
    if (!n5.eql(A3, n5.ONE)) throw new Error("invZ was invalid");
    return { x: $3, y: B3 };
  }), f6 = Qe2((p4) => {
    if (p4.is0()) {
      if (e2.allowInfinityPoint && !n5.is0(p4.py)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: d4, y: v6 } = p4.toAffine();
    if (!n5.isValid(d4) || !n5.isValid(v6)) throw new Error("bad point: x or y not FE");
    const m3 = n5.sqr(v6), O5 = s3(d4);
    if (!n5.eql(m3, O5)) throw new Error("bad point: equation left != right");
    if (!p4.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  class h5 {
    constructor(d4, v6, m3) {
      if (this.px = d4, this.py = v6, this.pz = m3, d4 == null || !n5.isValid(d4)) throw new Error("x required");
      if (v6 == null || !n5.isValid(v6)) throw new Error("y required");
      if (m3 == null || !n5.isValid(m3)) throw new Error("z required");
      Object.freeze(this);
    }
    static fromAffine(d4) {
      const { x: v6, y: m3 } = d4 || {};
      if (!d4 || !n5.isValid(v6) || !n5.isValid(m3)) throw new Error("invalid affine point");
      if (d4 instanceof h5) throw new Error("projective point not allowed");
      const O5 = (N12) => n5.eql(N12, n5.ZERO);
      return O5(v6) && O5(m3) ? h5.ZERO : new h5(v6, m3, n5.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(d4) {
      const v6 = n5.invertBatch(d4.map((m3) => m3.pz));
      return d4.map((m3, O5) => m3.toAffine(v6[O5])).map(h5.fromAffine);
    }
    static fromHex(d4) {
      const v6 = h5.fromAffine(i4(et("pointHex", d4)));
      return v6.assertValidity(), v6;
    }
    static fromPrivateKey(d4) {
      return h5.BASE.multiply(a3(d4));
    }
    static msm(d4, v6) {
      return hc(h5, r3, d4, v6);
    }
    _setWindowSize(d4) {
      E5.setWindowSize(this, d4);
    }
    assertValidity() {
      f6(this);
    }
    hasEvenY() {
      const { y: d4 } = this.toAffine();
      if (n5.isOdd) return !n5.isOdd(d4);
      throw new Error("Field doesn't support isOdd");
    }
    equals(d4) {
      u2(d4);
      const { px: v6, py: m3, pz: O5 } = this, { px: N12, py: $3, pz: B3 } = d4, A3 = n5.eql(n5.mul(v6, B3), n5.mul(N12, O5)), T3 = n5.eql(n5.mul(m3, B3), n5.mul($3, O5));
      return A3 && T3;
    }
    negate() {
      return new h5(this.px, n5.neg(this.py), this.pz);
    }
    double() {
      const { a: d4, b: v6 } = e2, m3 = n5.mul(v6, Qr2), { px: O5, py: N12, pz: $3 } = this;
      let B3 = n5.ZERO, A3 = n5.ZERO, T3 = n5.ZERO, S4 = n5.mul(O5, O5), L3 = n5.mul(N12, N12), U2 = n5.mul($3, $3), _3 = n5.mul(O5, N12);
      return _3 = n5.add(_3, _3), T3 = n5.mul(O5, $3), T3 = n5.add(T3, T3), B3 = n5.mul(d4, T3), A3 = n5.mul(m3, U2), A3 = n5.add(B3, A3), B3 = n5.sub(L3, A3), A3 = n5.add(L3, A3), A3 = n5.mul(B3, A3), B3 = n5.mul(_3, B3), T3 = n5.mul(m3, T3), U2 = n5.mul(d4, U2), _3 = n5.sub(S4, U2), _3 = n5.mul(d4, _3), _3 = n5.add(_3, T3), T3 = n5.add(S4, S4), S4 = n5.add(T3, S4), S4 = n5.add(S4, U2), S4 = n5.mul(S4, _3), A3 = n5.add(A3, S4), U2 = n5.mul(N12, $3), U2 = n5.add(U2, U2), S4 = n5.mul(U2, _3), B3 = n5.sub(B3, S4), T3 = n5.mul(U2, L3), T3 = n5.add(T3, T3), T3 = n5.add(T3, T3), new h5(B3, A3, T3);
    }
    add(d4) {
      u2(d4);
      const { px: v6, py: m3, pz: O5 } = this, { px: N12, py: $3, pz: B3 } = d4;
      let A3 = n5.ZERO, T3 = n5.ZERO, S4 = n5.ZERO;
      const L3 = e2.a, U2 = n5.mul(e2.b, Qr2);
      let _3 = n5.mul(v6, N12), j3 = n5.mul(m3, $3), g3 = n5.mul(O5, B3), w4 = n5.add(v6, m3), b5 = n5.add(N12, $3);
      w4 = n5.mul(w4, b5), b5 = n5.add(_3, j3), w4 = n5.sub(w4, b5), b5 = n5.add(v6, O5);
      let I3 = n5.add(N12, B3);
      return b5 = n5.mul(b5, I3), I3 = n5.add(_3, g3), b5 = n5.sub(b5, I3), I3 = n5.add(m3, O5), A3 = n5.add($3, B3), I3 = n5.mul(I3, A3), A3 = n5.add(j3, g3), I3 = n5.sub(I3, A3), S4 = n5.mul(L3, b5), A3 = n5.mul(U2, g3), S4 = n5.add(A3, S4), A3 = n5.sub(j3, S4), S4 = n5.add(j3, S4), T3 = n5.mul(A3, S4), j3 = n5.add(_3, _3), j3 = n5.add(j3, _3), g3 = n5.mul(L3, g3), b5 = n5.mul(U2, b5), j3 = n5.add(j3, g3), g3 = n5.sub(_3, g3), g3 = n5.mul(L3, g3), b5 = n5.add(b5, g3), _3 = n5.mul(j3, b5), T3 = n5.add(T3, _3), _3 = n5.mul(I3, b5), A3 = n5.mul(w4, A3), A3 = n5.sub(A3, _3), _3 = n5.mul(w4, j3), S4 = n5.mul(I3, S4), S4 = n5.add(S4, _3), new h5(A3, T3, S4);
    }
    subtract(d4) {
      return this.add(d4.negate());
    }
    is0() {
      return this.equals(h5.ZERO);
    }
    wNAF(d4) {
      return E5.wNAFCached(this, d4, h5.normalizeZ);
    }
    multiplyUnsafe(d4) {
      const { endo: v6, n: m3 } = e2;
      ft2("scalar", d4, dt2, m3);
      const O5 = h5.ZERO;
      if (d4 === dt2) return O5;
      if (this.is0() || d4 === K2) return this;
      if (!v6 || E5.hasPrecomputes(this)) return E5.wNAFCachedUnsafe(this, d4, h5.normalizeZ);
      let { k1neg: N12, k1: $3, k2neg: B3, k2: A3 } = v6.splitScalar(d4), T3 = O5, S4 = O5, L3 = this;
      for (; $3 > dt2 || A3 > dt2; ) $3 & K2 && (T3 = T3.add(L3)), A3 & K2 && (S4 = S4.add(L3)), L3 = L3.double(), $3 >>= K2, A3 >>= K2;
      return N12 && (T3 = T3.negate()), B3 && (S4 = S4.negate()), S4 = new h5(n5.mul(S4.px, v6.beta), S4.py, S4.pz), T3.add(S4);
    }
    multiply(d4) {
      const { endo: v6, n: m3 } = e2;
      ft2("scalar", d4, K2, m3);
      let O5, N12;
      if (v6) {
        const { k1neg: $3, k1: B3, k2neg: A3, k2: T3 } = v6.splitScalar(d4);
        let { p: S4, f: L3 } = this.wNAF(B3), { p: U2, f: _3 } = this.wNAF(T3);
        S4 = E5.constTimeNegate($3, S4), U2 = E5.constTimeNegate(A3, U2), U2 = new h5(n5.mul(U2.px, v6.beta), U2.py, U2.pz), O5 = S4.add(U2), N12 = L3.add(_3);
      } else {
        const { p: $3, f: B3 } = this.wNAF(d4);
        O5 = $3, N12 = B3;
      }
      return h5.normalizeZ([O5, N12])[0];
    }
    multiplyAndAddUnsafe(d4, v6, m3) {
      const O5 = h5.BASE, N12 = (B3, A3) => A3 === dt2 || A3 === K2 || !B3.equals(O5) ? B3.multiplyUnsafe(A3) : B3.multiply(A3), $3 = N12(this, v6).add(N12(d4, m3));
      return $3.is0() ? void 0 : $3;
    }
    toAffine(d4) {
      return l6(this, d4);
    }
    isTorsionFree() {
      const { h: d4, isTorsionFree: v6 } = e2;
      if (d4 === K2) return true;
      if (v6) return v6(h5, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: d4, clearCofactor: v6 } = e2;
      return d4 === K2 ? this : v6 ? v6(h5, this) : this.multiplyUnsafe(e2.h);
    }
    toRawBytes(d4 = true) {
      return jt2("isCompressed", d4), this.assertValidity(), o4(h5, this, d4);
    }
    toHex(d4 = true) {
      return jt2("isCompressed", d4), Ct(this.toRawBytes(d4));
    }
  }
  h5.BASE = new h5(e2.Gx, e2.Gy, n5.ONE), h5.ZERO = new h5(n5.ZERO, n5.ONE, n5.ZERO);
  const y5 = e2.nBitLength, E5 = dc(h5, e2.endo ? Math.ceil(y5 / 2) : y5);
  return { CURVE: e2, ProjectivePoint: h5, normPrivateKeyToScalar: a3, weierstrassEquation: s3, isWithinCurveOrder: c6 };
}
function Bc(t) {
  const e2 = Wr2(t);
  return Mt2(e2, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: true, ...e2 });
}
function Ic(t) {
  const e2 = Bc(t), { Fp: n5, n: r3 } = e2, o4 = n5.BYTES + 1, i4 = 2 * n5.BYTES + 1;
  function s3(g3) {
    return X(g3, r3);
  }
  function c6(g3) {
    return en2(g3, r3);
  }
  const { ProjectivePoint: a3, normPrivateKeyToScalar: u2, weierstrassEquation: l6, isWithinCurveOrder: f6 } = Ac({ ...e2, toBytes(g3, w4, b5) {
    const I3 = w4.toAffine(), R3 = n5.toBytes(I3.x), x4 = ee;
    return jt2("isCompressed", b5), b5 ? x4(Uint8Array.from([w4.hasEvenY() ? 2 : 3]), R3) : x4(Uint8Array.from([4]), R3, n5.toBytes(I3.y));
  }, fromBytes(g3) {
    const w4 = g3.length, b5 = g3[0], I3 = g3.subarray(1);
    if (w4 === o4 && (b5 === 2 || b5 === 3)) {
      const R3 = Ot2(I3);
      if (!we2(R3, K2, n5.ORDER)) throw new Error("Point is not on curve");
      const x4 = l6(R3);
      let C5;
      try {
        C5 = n5.sqrt(x4);
      } catch (M4) {
        const D2 = M4 instanceof Error ? ": " + M4.message : "";
        throw new Error("Point is not on curve" + D2);
      }
      const P4 = (C5 & K2) === K2;
      return (b5 & 1) === 1 !== P4 && (C5 = n5.neg(C5)), { x: R3, y: C5 };
    } else if (w4 === i4 && b5 === 4) {
      const R3 = n5.fromBytes(I3.subarray(0, n5.BYTES)), x4 = n5.fromBytes(I3.subarray(n5.BYTES, 2 * n5.BYTES));
      return { x: R3, y: x4 };
    } else {
      const R3 = o4, x4 = i4;
      throw new Error("invalid Point, expected length of " + R3 + ", or uncompressed " + x4 + ", got " + w4);
    }
  } }), h5 = (g3) => Ct(Vt2(g3, e2.nByteLength));
  function y5(g3) {
    const w4 = r3 >> K2;
    return g3 > w4;
  }
  function E5(g3) {
    return y5(g3) ? s3(-g3) : g3;
  }
  const p4 = (g3, w4, b5) => Ot2(g3.slice(w4, b5));
  class d4 {
    constructor(w4, b5, I3) {
      this.r = w4, this.s = b5, this.recovery = I3, this.assertValidity();
    }
    static fromCompact(w4) {
      const b5 = e2.nByteLength;
      return w4 = et("compactSignature", w4, b5 * 2), new d4(p4(w4, 0, b5), p4(w4, b5, 2 * b5));
    }
    static fromDER(w4) {
      const { r: b5, s: I3 } = lt2.toSig(et("DER", w4));
      return new d4(b5, I3);
    }
    assertValidity() {
      ft2("r", this.r, K2, r3), ft2("s", this.s, K2, r3);
    }
    addRecoveryBit(w4) {
      return new d4(this.r, this.s, w4);
    }
    recoverPublicKey(w4) {
      const { r: b5, s: I3, recovery: R3 } = this, x4 = B3(et("msgHash", w4));
      if (R3 == null || ![0, 1, 2, 3].includes(R3)) throw new Error("recovery id invalid");
      const C5 = R3 === 2 || R3 === 3 ? b5 + e2.n : b5;
      if (C5 >= n5.ORDER) throw new Error("recovery id 2 or 3 invalid");
      const P4 = (R3 & 1) === 0 ? "02" : "03", k6 = a3.fromHex(P4 + h5(C5)), M4 = c6(C5), D2 = s3(-x4 * M4), z4 = s3(I3 * M4), Z2 = a3.BASE.multiplyAndAddUnsafe(k6, D2, z4);
      if (!Z2) throw new Error("point at infinify");
      return Z2.assertValidity(), Z2;
    }
    hasHighS() {
      return y5(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new d4(this.r, s3(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return kt2(this.toDERHex());
    }
    toDERHex() {
      return lt2.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return kt2(this.toCompactHex());
    }
    toCompactHex() {
      return h5(this.r) + h5(this.s);
    }
  }
  const v6 = { isValidPrivateKey(g3) {
    try {
      return u2(g3), true;
    } catch {
      return false;
    }
  }, normPrivateKeyToScalar: u2, randomPrivateKey: () => {
    const g3 = zr2(e2.n);
    return uc(e2.randomBytes(g3), e2.n);
  }, precompute(g3 = 8, w4 = a3.BASE) {
    return w4._setWindowSize(g3), w4.multiply(BigInt(3)), w4;
  } };
  function m3(g3, w4 = true) {
    return a3.fromPrivateKey(g3).toRawBytes(w4);
  }
  function O5(g3) {
    const w4 = St2(g3), b5 = typeof g3 == "string", I3 = (w4 || b5) && g3.length;
    return w4 ? I3 === o4 || I3 === i4 : b5 ? I3 === 2 * o4 || I3 === 2 * i4 : g3 instanceof a3;
  }
  function N12(g3, w4, b5 = true) {
    if (O5(g3)) throw new Error("first arg must be private key");
    if (!O5(w4)) throw new Error("second arg must be public key");
    return a3.fromHex(w4).multiply(u2(g3)).toRawBytes(b5);
  }
  const $3 = e2.bits2int || function(g3) {
    if (g3.length > 8192) throw new Error("input is too large");
    const w4 = Ot2(g3), b5 = g3.length * 8 - e2.nBitLength;
    return b5 > 0 ? w4 >> BigInt(b5) : w4;
  }, B3 = e2.bits2int_modN || function(g3) {
    return s3($3(g3));
  }, A3 = Xe2(e2.nBitLength);
  function T3(g3) {
    return ft2("num < 2^" + e2.nBitLength, g3, dt2, A3), Vt2(g3, e2.nByteLength);
  }
  function S4(g3, w4, b5 = L3) {
    if (["recovered", "canonical"].some((W3) => W3 in b5)) throw new Error("sign() legacy options not supported");
    const { hash: I3, randomBytes: R3 } = e2;
    let { lowS: x4, prehash: C5, extraEntropy: P4 } = b5;
    x4 == null && (x4 = true), g3 = et("msgHash", g3), Jr2(b5), C5 && (g3 = et("prehashed msgHash", I3(g3)));
    const k6 = B3(g3), M4 = u2(w4), D2 = [T3(M4), T3(k6)];
    if (P4 != null && P4 !== false) {
      const W3 = P4 === true ? R3(n5.BYTES) : P4;
      D2.push(et("extraEntropy", W3));
    }
    const z4 = ee(...D2), Z2 = k6;
    function it3(W3) {
      const J4 = $3(W3);
      if (!f6(J4)) return;
      const Oe3 = c6(J4), Ft3 = a3.BASE.multiply(J4).toAffine(), vt2 = s3(Ft3.x);
      if (vt2 === dt2) return;
      const zt3 = s3(Oe3 * s3(Z2 + vt2 * M4));
      if (zt3 === dt2) return;
      let Ut3 = (Ft3.x === vt2 ? 0 : 2) | Number(Ft3.y & K2), vn3 = zt3;
      return x4 && y5(zt3) && (vn3 = E5(zt3), Ut3 ^= 1), new d4(vt2, vn3, Ut3);
    }
    return { seed: z4, k2sig: it3 };
  }
  const L3 = { lowS: e2.lowS, prehash: false }, U2 = { lowS: e2.lowS, prehash: false };
  function _3(g3, w4, b5 = L3) {
    const { seed: I3, k2sig: R3 } = S4(g3, w4, b5), x4 = e2;
    return Vr2(x4.hash.outputLen, x4.nByteLength, x4.hmac)(I3, R3);
  }
  a3.BASE._setWindowSize(8);
  function j3(g3, w4, b5, I3 = U2) {
    var _a;
    const R3 = g3;
    w4 = et("msgHash", w4), b5 = et("publicKey", b5);
    const { lowS: x4, prehash: C5, format: P4 } = I3;
    if (Jr2(I3), "strict" in I3) throw new Error("options.strict was renamed to lowS");
    if (P4 !== void 0 && P4 !== "compact" && P4 !== "der") throw new Error("format must be compact or der");
    const k6 = typeof R3 == "string" || St2(R3), M4 = !k6 && !P4 && typeof R3 == "object" && R3 !== null && typeof R3.r == "bigint" && typeof R3.s == "bigint";
    if (!k6 && !M4) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let D2, z4;
    try {
      if (M4 && (D2 = new d4(R3.r, R3.s)), k6) {
        try {
          P4 !== "compact" && (D2 = d4.fromDER(R3));
        } catch (Ut3) {
          if (!(Ut3 instanceof lt2.Err)) throw Ut3;
        }
        !D2 && P4 !== "der" && (D2 = d4.fromCompact(R3));
      }
      z4 = a3.fromHex(b5);
    } catch {
      return false;
    }
    if (!D2 || x4 && D2.hasHighS()) return false;
    C5 && (w4 = e2.hash(w4));
    const { r: Z2, s: it3 } = D2, W3 = B3(w4), J4 = c6(it3), Oe3 = s3(W3 * J4), Ft3 = s3(Z2 * J4), vt2 = (_a = a3.BASE.multiplyAndAddUnsafe(z4, Oe3, Ft3)) == null ? void 0 : _a.toAffine();
    return vt2 ? s3(vt2.x) === Z2 : false;
  }
  return { CURVE: e2, getPublicKey: m3, getSharedSecret: N12, sign: _3, verify: j3, ProjectivePoint: a3, Signature: d4, utils: v6 };
}
function Nc(t) {
  return { hash: t, hmac: (e2, ...n5) => pe2(t, e2, Vi(...n5)), randomBytes: $t2 };
}
function Uc(t, e2) {
  const n5 = (r3) => Ic({ ...t, ...Nc(r3) });
  return { ...n5(e2), create: n5 };
}
var to2 = Kr3(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"));
var Tc = to2.create(BigInt("-3"));
var Rc = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b");
var _c = Uc({ a: Tc, b: Rc, Fp: to2, n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"), h: BigInt(1), lowS: false }, Jt2);
var fn = "base10";
var G2 = "base16";
var Ht2 = "base64pad";
var Ee2 = "base64url";
var qt2 = "utf8";
var ln = 0;
var Kt2 = 1;
var ne = 2;
var $c = 0;
var eo2 = 1;
var re = 12;
var dn = 32;
function Lc() {
  const t = un.utils.randomPrivateKey(), e2 = un.getPublicKey(t);
  return { privateKey: toString3(t, G2), publicKey: toString3(e2, G2) };
}
function jc() {
  const t = $t2(dn);
  return toString3(t, G2);
}
function Cc(t, e2) {
  const n5 = un.getSharedSecret(fromString4(t, G2), fromString4(e2, G2)), r3 = Vs(Jt2, n5, void 0, void 0, dn);
  return toString3(r3, G2);
}
function Pc(t) {
  const e2 = Jt2(fromString4(t, G2));
  return toString3(e2, G2);
}
function kc(t) {
  const e2 = Jt2(fromString4(t, qt2));
  return toString3(e2, G2);
}
function hn(t) {
  return fromString4(`${t}`, fn);
}
function Bt2(t) {
  return Number(toString3(t, fn));
}
function no2(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function ro2(t) {
  const e2 = t.replace(/-/g, "+").replace(/_/g, "/"), n5 = (4 - e2.length % 4) % 4;
  return e2 + "=".repeat(n5);
}
function Vc(t) {
  const e2 = hn(typeof t.type < "u" ? t.type : ln);
  if (Bt2(e2) === Kt2 && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const n5 = typeof t.senderPublicKey < "u" ? fromString4(t.senderPublicKey, G2) : void 0, r3 = typeof t.iv < "u" ? fromString4(t.iv, G2) : $t2(re), o4 = fromString4(t.symKey, G2), i4 = $r2(o4, r3).encrypt(fromString4(t.message, qt2)), s3 = pn({ type: e2, sealed: i4, iv: r3, senderPublicKey: n5 });
  return t.encoding === Ee2 ? no2(s3) : s3;
}
function Mc(t) {
  const e2 = fromString4(t.symKey, G2), { sealed: n5, iv: r3 } = ve2({ encoded: t.encoded, encoding: t.encoding }), o4 = $r2(e2, r3).decrypt(n5);
  if (o4 === null) throw new Error("Failed to decrypt");
  return toString3(o4, qt2);
}
function Dc(t, e2) {
  const n5 = hn(ne), r3 = $t2(re), o4 = fromString4(t, qt2), i4 = pn({ type: n5, sealed: o4, iv: r3 });
  return e2 === Ee2 ? no2(i4) : i4;
}
function Hc(t, e2) {
  const { sealed: n5 } = ve2({ encoded: t, encoding: e2 });
  return toString3(n5, qt2);
}
function pn(t) {
  if (Bt2(t.type) === ne) return toString3(concat3([t.type, t.sealed]), Ht2);
  if (Bt2(t.type) === Kt2) {
    if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString3(concat3([t.type, t.senderPublicKey, t.iv, t.sealed]), Ht2);
  }
  return toString3(concat3([t.type, t.iv, t.sealed]), Ht2);
}
function ve2(t) {
  const e2 = (t.encoding || Ht2) === Ee2 ? ro2(t.encoded) : t.encoded, n5 = fromString4(e2, Ht2), r3 = n5.slice($c, eo2), o4 = eo2;
  if (Bt2(r3) === Kt2) {
    const a3 = o4 + dn, u2 = a3 + re, l6 = n5.slice(o4, a3), f6 = n5.slice(a3, u2), h5 = n5.slice(u2);
    return { type: r3, sealed: h5, iv: f6, senderPublicKey: l6 };
  }
  if (Bt2(r3) === ne) {
    const a3 = n5.slice(o4), u2 = $t2(re);
    return { type: r3, sealed: a3, iv: u2 };
  }
  const i4 = o4 + re, s3 = n5.slice(o4, i4), c6 = n5.slice(i4);
  return { type: r3, sealed: c6, iv: s3 };
}
function qc(t, e2) {
  const n5 = ve2({ encoded: t, encoding: e2 == null ? void 0 : e2.encoding });
  return oo2({ type: Bt2(n5.type), senderPublicKey: typeof n5.senderPublicKey < "u" ? toString3(n5.senderPublicKey, G2) : void 0, receiverPublicKey: e2 == null ? void 0 : e2.receiverPublicKey });
}
function oo2(t) {
  const e2 = (t == null ? void 0 : t.type) || ln;
  if (e2 === Kt2) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: e2, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Kc(t) {
  return t.type === Kt2 && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function Fc(t) {
  return t.type === ne;
}
function io2(t) {
  const e2 = Buffer.from(t.x, "base64"), n5 = Buffer.from(t.y, "base64");
  return concat3([new Uint8Array([4]), e2, n5]);
}
function zc(t, e2) {
  const [n5, r3, o4] = t.split("."), i4 = Buffer.from(ro2(o4), "base64");
  if (i4.length !== 64) throw new Error("Invalid signature length");
  const s3 = i4.slice(0, 32), c6 = i4.slice(32, 64), a3 = `${n5}.${r3}`, u2 = Jt2(a3), l6 = io2(e2);
  if (!_c.verify(concat3([s3, c6]), u2, l6)) throw new Error("Invalid signature");
  return sn(t).payload;
}
var so2 = "irn";
function Zc(t) {
  return (t == null ? void 0 : t.relay) || { protocol: so2 };
}
function Yc(t) {
  const e2 = C[t];
  if (typeof e2 > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e2;
}
function co2(t, e2 = "-") {
  const n5 = {}, r3 = "relay" + e2;
  return Object.keys(t).forEach((o4) => {
    if (o4.startsWith(r3)) {
      const i4 = o4.replace(r3, ""), s3 = t[o4];
      n5[i4] = s3;
    }
  }), n5;
}
function Gc(t) {
  if (!t.includes("wc:")) {
    const u2 = Le2(t);
    u2 != null && u2.includes("wc:") && (t = u2);
  }
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e2 = t.indexOf(":"), n5 = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r3 = t.substring(0, e2), o4 = t.substring(e2 + 1, n5).split("@"), i4 = typeof n5 < "u" ? t.substring(n5) : "", s3 = new URLSearchParams(i4), c6 = {};
  s3.forEach((u2, l6) => {
    c6[l6] = u2;
  });
  const a3 = typeof c6.methods == "string" ? c6.methods.split(",") : void 0;
  return { protocol: r3, topic: ao2(o4[0]), version: parseInt(o4[1], 10), symKey: c6.symKey, relay: co2(c6), methods: a3, expiryTimestamp: c6.expiryTimestamp ? parseInt(c6.expiryTimestamp, 10) : void 0 };
}
function ao2(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function uo2(t, e2 = "-") {
  const n5 = "relay", r3 = {};
  return Object.keys(t).forEach((o4) => {
    const i4 = o4, s3 = n5 + e2 + i4;
    t[i4] && (r3[s3] = t[i4]);
  }), r3;
}
function Wc(t) {
  const e2 = new URLSearchParams(), n5 = uo2(t.relay);
  Object.keys(n5).sort().forEach((o4) => {
    e2.set(o4, n5[o4]);
  }), e2.set("symKey", t.symKey), t.expiryTimestamp && e2.set("expiryTimestamp", t.expiryTimestamp.toString()), t.methods && e2.set("methods", t.methods.join(","));
  const r3 = e2.toString();
  return `${t.protocol}:${t.topic}@${t.version}?${r3}`;
}
function Xc(t, e2, n5) {
  return `${t}?wc_ev=${n5}&topic=${e2}`;
}
function It2(t) {
  const e2 = [];
  return t.forEach((n5) => {
    const [r3, o4] = n5.split(":");
    e2.push(`${r3}:${o4}`);
  }), e2;
}
function ho2(t) {
  const e2 = [];
  return Object.values(t).forEach((n5) => {
    e2.push(...It2(n5.accounts));
  }), e2;
}
function po2(t, e2) {
  const n5 = [];
  return Object.values(t).forEach((r3) => {
    It2(r3.accounts).includes(e2) && n5.push(...r3.methods);
  }), n5;
}
function go2(t, e2) {
  const n5 = [];
  return Object.values(t).forEach((r3) => {
    It2(r3.accounts).includes(e2) && n5.push(...r3.events);
  }), n5;
}
function gn2(t) {
  return t.includes(":");
}
function yo2(t) {
  return gn2(t) ? t.split(":")[0] : t;
}
function mo2(t) {
  const e2 = {};
  return t == null ? void 0 : t.forEach((n5) => {
    var r3;
    const [o4, i4] = n5.split(":");
    e2[o4] || (e2[o4] = { accounts: [], chains: [], events: [], methods: [] }), e2[o4].accounts.push(n5), (r3 = e2[o4].chains) == null || r3.push(`${o4}:${i4}`);
  }), e2;
}
function ca(t, e2) {
  e2 = e2.map((r3) => r3.replace("did:pkh:", ""));
  const n5 = mo2(e2);
  for (const [r3, o4] of Object.entries(n5)) o4.methods ? o4.methods = at(o4.methods, t) : o4.methods = t, o4.events = ["chainChanged", "accountsChanged"];
  return n5;
}
var wo2 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
var bo2 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function ht2(t, e2) {
  const { message: n5, code: r3 } = bo2[t];
  return { message: e2 ? `${n5} ${e2}` : n5, code: r3 };
}
function Nt2(t, e2) {
  const { message: n5, code: r3 } = wo2[t];
  return { message: e2 ? `${n5} ${e2}` : n5, code: r3 };
}
function oe(t, e2) {
  return Array.isArray(t) ? typeof e2 < "u" && t.length ? t.every(e2) : true : false;
}
function xe2(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Et2(t) {
  return typeof t > "u";
}
function nt2(t, e2) {
  return e2 && Et2(t) ? true : typeof t == "string" && !!t.trim().length;
}
function Se2(t, e2) {
  return e2 && Et2(t) ? true : typeof t == "number" && !isNaN(t);
}
function aa(t, e2) {
  const { requiredNamespaces: n5 } = e2, r3 = Object.keys(t.namespaces), o4 = Object.keys(n5);
  let i4 = true;
  return gt2(o4, r3) ? (r3.forEach((s3) => {
    const { accounts: c6, methods: a3, events: u2 } = t.namespaces[s3], l6 = It2(c6), f6 = n5[s3];
    (!gt2(ce(s3, f6), l6) || !gt2(f6.methods, a3) || !gt2(f6.events, u2)) && (i4 = false);
  }), i4) : false;
}
function ie(t) {
  return nt2(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
}
function Eo2(t) {
  if (nt2(t, false) && t.includes(":")) {
    const e2 = t.split(":");
    if (e2.length === 3) {
      const n5 = e2[0] + ":" + e2[1];
      return !!e2[2] && ie(n5);
    }
  }
  return false;
}
function ua(t) {
  function e2(n5) {
    try {
      return typeof new URL(n5) < "u";
    } catch {
      return false;
    }
  }
  try {
    if (nt2(t, false)) {
      if (e2(t)) return true;
      const n5 = Le2(t);
      return e2(n5);
    }
  } catch {
  }
  return false;
}
function fa(t) {
  var e2;
  return (e2 = t == null ? void 0 : t.proposer) == null ? void 0 : e2.publicKey;
}
function la(t) {
  return t == null ? void 0 : t.topic;
}
function da(t, e2) {
  let n5 = null;
  return nt2(t == null ? void 0 : t.publicKey, false) || (n5 = ht2("MISSING_OR_INVALID", `${e2} controller public key should be a string`)), n5;
}
function mn2(t) {
  let e2 = true;
  return oe(t) ? t.length && (e2 = t.every((n5) => nt2(n5, false))) : e2 = false, e2;
}
function vo2(t, e2, n5) {
  let r3 = null;
  return oe(e2) && e2.length ? e2.forEach((o4) => {
    r3 || ie(o4) || (r3 = Nt2("UNSUPPORTED_CHAINS", `${n5}, chain ${o4} should be a string and conform to "namespace:chainId" format`));
  }) : ie(t) || (r3 = Nt2("UNSUPPORTED_CHAINS", `${n5}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r3;
}
function xo2(t, e2, n5) {
  let r3 = null;
  return Object.entries(t).forEach(([o4, i4]) => {
    if (r3) return;
    const s3 = vo2(o4, ce(o4, i4), `${e2} ${n5}`);
    s3 && (r3 = s3);
  }), r3;
}
function So2(t, e2) {
  let n5 = null;
  return oe(t) ? t.forEach((r3) => {
    n5 || Eo2(r3) || (n5 = Nt2("UNSUPPORTED_ACCOUNTS", `${e2}, account ${r3} should be a string and conform to "namespace:chainId:address" format`));
  }) : n5 = Nt2("UNSUPPORTED_ACCOUNTS", `${e2}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n5;
}
function Oo2(t, e2) {
  let n5 = null;
  return Object.values(t).forEach((r3) => {
    if (n5) return;
    const o4 = So2(r3 == null ? void 0 : r3.accounts, `${e2} namespace`);
    o4 && (n5 = o4);
  }), n5;
}
function Ao2(t, e2) {
  let n5 = null;
  return mn2(t == null ? void 0 : t.methods) ? mn2(t == null ? void 0 : t.events) || (n5 = Nt2("UNSUPPORTED_EVENTS", `${e2}, events should be an array of strings or empty array for no events`)) : n5 = Nt2("UNSUPPORTED_METHODS", `${e2}, methods should be an array of strings or empty array for no methods`), n5;
}
function wn(t, e2) {
  let n5 = null;
  return Object.values(t).forEach((r3) => {
    if (n5) return;
    const o4 = Ao2(r3, `${e2}, namespace`);
    o4 && (n5 = o4);
  }), n5;
}
function ha(t, e2, n5) {
  let r3 = null;
  if (t && xe2(t)) {
    const o4 = wn(t, e2);
    o4 && (r3 = o4);
    const i4 = xo2(t, e2, n5);
    i4 && (r3 = i4);
  } else r3 = ht2("MISSING_OR_INVALID", `${e2}, ${n5} should be an object with data`);
  return r3;
}
function Bo2(t, e2) {
  let n5 = null;
  if (t && xe2(t)) {
    const r3 = wn(t, e2);
    r3 && (n5 = r3);
    const o4 = Oo2(t, e2);
    o4 && (n5 = o4);
  } else n5 = ht2("MISSING_OR_INVALID", `${e2}, namespaces should be an object with data`);
  return n5;
}
function Io2(t) {
  return nt2(t.protocol, true);
}
function pa(t, e2) {
  let n5 = false;
  return e2 && !t ? n5 = true : t && oe(t) && t.length && t.forEach((r3) => {
    n5 = Io2(r3);
  }), n5;
}
function ga(t) {
  return typeof t == "number";
}
function ya(t) {
  return typeof t < "u" && typeof t !== null;
}
function ma(t) {
  return !(!t || typeof t != "object" || !t.code || !Se2(t.code, false) || !t.message || !nt2(t.message, false));
}
function wa(t) {
  return !(Et2(t) || !nt2(t.method, false));
}
function ba(t) {
  return !(Et2(t) || Et2(t.result) && Et2(t.error) || !Se2(t.id, false) || !nt2(t.jsonrpc, false));
}
function Ea(t) {
  return !(Et2(t) || !nt2(t.name, false));
}
function va(t, e2) {
  return !(!ie(e2) || !ho2(t).includes(e2));
}
function xa(t, e2, n5) {
  return nt2(n5, false) ? po2(t, e2).includes(n5) : false;
}
function Sa(t, e2, n5) {
  return nt2(n5, false) ? go2(t, e2).includes(n5) : false;
}
function No2(t, e2, n5) {
  let r3 = null;
  const o4 = Oa(t), i4 = Aa(e2), s3 = Object.keys(o4), c6 = Object.keys(i4), a3 = Uo2(Object.keys(t)), u2 = Uo2(Object.keys(e2)), l6 = a3.filter((f6) => !u2.includes(f6));
  return l6.length && (r3 = ht2("NON_CONFORMING_NAMESPACES", `${n5} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l6.toString()}
      Received: ${Object.keys(e2).toString()}`)), gt2(s3, c6) || (r3 = ht2("NON_CONFORMING_NAMESPACES", `${n5} namespaces chains don't satisfy required namespaces.
      Required: ${s3.toString()}
      Approved: ${c6.toString()}`)), Object.keys(e2).forEach((f6) => {
    if (!f6.includes(":") || r3) return;
    const h5 = It2(e2[f6].accounts);
    h5.includes(f6) || (r3 = ht2("NON_CONFORMING_NAMESPACES", `${n5} namespaces accounts don't satisfy namespace accounts for ${f6}
        Required: ${f6}
        Approved: ${h5.toString()}`));
  }), s3.forEach((f6) => {
    r3 || (gt2(o4[f6].methods, i4[f6].methods) ? gt2(o4[f6].events, i4[f6].events) || (r3 = ht2("NON_CONFORMING_NAMESPACES", `${n5} namespaces events don't satisfy namespace events for ${f6}`)) : r3 = ht2("NON_CONFORMING_NAMESPACES", `${n5} namespaces methods don't satisfy namespace methods for ${f6}`));
  }), r3;
}
function Oa(t) {
  const e2 = {};
  return Object.keys(t).forEach((n5) => {
    var r3;
    n5.includes(":") ? e2[n5] = t[n5] : (r3 = t[n5].chains) == null || r3.forEach((o4) => {
      e2[o4] = { methods: t[n5].methods, events: t[n5].events };
    });
  }), e2;
}
function Uo2(t) {
  return [...new Set(t.map((e2) => e2.includes(":") ? e2.split(":")[0] : e2))];
}
function Aa(t) {
  const e2 = {};
  return Object.keys(t).forEach((n5) => {
    if (n5.includes(":")) e2[n5] = t[n5];
    else {
      const r3 = It2(t[n5].accounts);
      r3 == null ? void 0 : r3.forEach((o4) => {
        e2[o4] = { accounts: t[n5].accounts.filter((i4) => i4.includes(`${o4}:`)), methods: t[n5].methods, events: t[n5].events };
      });
    }
  }), e2;
}
function Ba(t, e2) {
  return Se2(t, false) && t <= e2.max && t >= e2.min;
}
function Ia() {
  const t = xt2();
  return new Promise((e2) => {
    switch (t) {
      case Y.browser:
        e2(To2());
        break;
      case Y.reactNative:
        e2(Ro2());
        break;
      case Y.node:
        e2(_o2());
        break;
      default:
        e2(true);
    }
  });
}
function To2() {
  return Yt2() && (navigator == null ? void 0 : navigator.onLine);
}
async function Ro2() {
  if (pt() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return true;
}
function _o2() {
  return true;
}
function Na(t) {
  switch (xt2()) {
    case Y.browser:
      $o2(t);
      break;
    case Y.reactNative:
      Lo2(t);
      break;
    case Y.node:
      break;
  }
}
function $o2(t) {
  !pt() && Yt2() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
}
function Lo2(t) {
  pt() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((e2) => t(e2 == null ? void 0 : e2.isConnected)));
}
var bn2 = {};
var Ua = class {
  static get(e2) {
    return bn2[e2];
  }
  static set(e2, n5) {
    bn2[e2] = n5;
  }
  static delete(e2) {
    delete bn2[e2];
  }
};

// node_modules/@walletconnect/logger/dist/index.es.js
var import_pino = __toESM(require_browser());
var import_pino2 = __toESM(require_browser());
var c = { level: "info" };
var n = "custom_context";
var l = 1e3 * 1024;
var O = class {
  constructor(e2) {
    this.nodeValue = e2, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
var d = class {
  constructor(e2) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
  }
  append(e2) {
    const t = new O(e2);
    if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t.size}`);
    for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
  }
  shift() {
    if (!this.head) return;
    const e2 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
  }
  toArray() {
    const e2 = [];
    let t = this.head;
    for (; t !== null; ) e2.push(t.value), t = t.next;
    return e2;
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
    let e2 = this.head;
    return { next: () => {
      if (!e2) return { done: true, value: null };
      const t = e2.value;
      return e2 = e2.next, { done: false, value: t };
    } };
  }
};
var L = class {
  constructor(e2, t = l) {
    this.level = e2 ?? "error", this.levelValue = import_pino.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e2, t) {
    t === import_pino.levels.values.error ? console.error(e2) : t === import_pino.levels.values.warn ? console.warn(e2) : t === import_pino.levels.values.debug ? console.debug(e2) : t === import_pino.levels.values.trace ? console.trace(e2) : console.log(e2);
  }
  appendToLogs(e2) {
    this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e2 }));
    const t = typeof e2 == "string" ? JSON.parse(e2).level : e2.level;
    t >= this.levelValue && this.forwardToConsole(e2, t);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e2) {
    const t = this.getLogArray();
    return t.push(safeJsonStringify({ extraMetadata: e2 })), new Blob(t, { type: "application/json" });
  }
};
var m = class {
  constructor(e2, t = l) {
    this.baseChunkLogger = new L(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
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
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
  downloadLogsBlobInBrowser(e2) {
    const t = URL.createObjectURL(this.logsToBlob(e2)), o4 = document.createElement("a");
    o4.href = t, o4.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o4), o4.click(), document.body.removeChild(o4), URL.revokeObjectURL(t);
  }
};
var B = class {
  constructor(e2, t = l) {
    this.baseChunkLogger = new L(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
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
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
};
var x2 = Object.defineProperty;
var S = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty;
var z = Object.prototype.propertyIsEnumerable;
var f2 = (r3, e2, t) => e2 in r3 ? x2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var i = (r3, e2) => {
  for (var t in e2 || (e2 = {})) T.call(e2, t) && f2(r3, t, e2[t]);
  if (p) for (var t of p(e2)) z.call(e2, t) && f2(r3, t, e2[t]);
  return r3;
};
var g = (r3, e2) => S(r3, _(e2));
function k2(r3) {
  return g(i({}, r3), { level: (r3 == null ? void 0 : r3.level) || c.level });
}
function v(r3, e2 = n) {
  return r3[e2] || "";
}
function b(r3, e2, t = n) {
  return r3[t] = e2, r3;
}
function y(r3, e2 = n) {
  let t = "";
  return typeof r3.bindings > "u" ? t = v(r3, e2) : t = r3.bindings().context || "", t;
}
function w(r3, e2, t = n) {
  const o4 = y(r3, t);
  return o4.trim() ? `${o4}/${e2}` : e2;
}
function E(r3, e2, t = n) {
  const o4 = w(r3, e2, t), a3 = r3.child({ context: o4 });
  return b(a3, o4, t);
}
function C2(r3) {
  var e2, t;
  const o4 = new m((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i({}, r3.opts), { level: "trace", browser: g(i({}, (t = r3.opts) == null ? void 0 : t.browser), { write: (a3) => o4.write(a3) }) })), chunkLoggerController: o4 };
}
function I(r3) {
  var e2;
  const t = new B((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i({}, r3.opts), { level: "trace" }), t), chunkLoggerController: t };
}
function A(r3) {
  return typeof r3.loggerOverride < "u" && typeof r3.loggerOverride != "string" ? { logger: r3.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C2(r3) : I(r3);
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js
var PARSE_ERROR = "PARSE_ERROR";
var INVALID_REQUEST = "INVALID_REQUEST";
var METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
var INVALID_PARAMS = "INVALID_PARAMS";
var INTERNAL_ERROR = "INTERNAL_ERROR";
var SERVER_ERROR = "SERVER_ERROR";
var RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
var SERVER_ERROR_CODE_RANGE = [-32e3, -32099];
var STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
var DEFAULT_ERROR = SERVER_ERROR;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js
function isServerErrorCode(code2) {
  return code2 <= SERVER_ERROR_CODE_RANGE[0] && code2 >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code2) {
  return RESERVED_ERROR_CODES.includes(code2);
}
function isValidErrorCode(code2) {
  return typeof code2 === "number";
}
function getError(type) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code2) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e2) => e2.code === code2);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function validateJsonRpcError(response) {
  if (typeof response.error.code === "undefined") {
    return { valid: false, error: "Missing code for JSON-RPC error" };
  }
  if (typeof response.error.message === "undefined") {
    return { valid: false, error: "Missing message for JSON-RPC error" };
  }
  if (!isValidErrorCode(response.error.code)) {
    return {
      valid: false,
      error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
  }
  if (isReservedErrorCode(response.error.code)) {
    const error = getErrorByCode(response.error.code);
    if (error.message !== STANDARD_ERROR_MAP[DEFAULT_ERROR].message && response.error.message === error.message) {
      return {
        valid: false,
        error: `Invalid error code message for JSON-RPC: ${response.error.code}`
      };
    }
  }
  return { valid: true };
}
function parseConnectionError(e2, url, type) {
  return e2.message.includes("getaddrinfo ENOTFOUND") || e2.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e2;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error, data)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (typeof data !== "undefined") {
    error.data = data;
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  DEFAULT_ERROR: () => DEFAULT_ERROR,
  IBaseJsonRpcProvider: () => n2,
  IEvents: () => e,
  IJsonRpcConnection: () => o,
  IJsonRpcProvider: () => r,
  INTERNAL_ERROR: () => INTERNAL_ERROR,
  INVALID_PARAMS: () => INVALID_PARAMS,
  INVALID_REQUEST: () => INVALID_REQUEST,
  METHOD_NOT_FOUND: () => METHOD_NOT_FOUND,
  PARSE_ERROR: () => PARSE_ERROR,
  RESERVED_ERROR_CODES: () => RESERVED_ERROR_CODES,
  SERVER_ERROR: () => SERVER_ERROR,
  SERVER_ERROR_CODE_RANGE: () => SERVER_ERROR_CODE_RANGE,
  STANDARD_ERROR_MAP: () => STANDARD_ERROR_MAP,
  formatErrorMessage: () => formatErrorMessage,
  formatJsonRpcError: () => formatJsonRpcError,
  formatJsonRpcRequest: () => formatJsonRpcRequest,
  formatJsonRpcResult: () => formatJsonRpcResult,
  getBigIntRpcId: () => getBigIntRpcId,
  getError: () => getError,
  getErrorByCode: () => getErrorByCode,
  isHttpUrl: () => isHttpUrl,
  isJsonRpcError: () => isJsonRpcError,
  isJsonRpcPayload: () => isJsonRpcPayload,
  isJsonRpcRequest: () => isJsonRpcRequest,
  isJsonRpcResponse: () => isJsonRpcResponse,
  isJsonRpcResult: () => isJsonRpcResult,
  isJsonRpcValidationInvalid: () => isJsonRpcValidationInvalid,
  isLocalhostUrl: () => isLocalhostUrl,
  isNodeJs: () => isNodeJs,
  isReservedErrorCode: () => isReservedErrorCode,
  isServerErrorCode: () => isServerErrorCode,
  isValidDefaultRoute: () => isValidDefaultRoute,
  isValidErrorCode: () => isValidErrorCode,
  isValidLeadingWildcardRoute: () => isValidLeadingWildcardRoute,
  isValidRoute: () => isValidRoute,
  isValidTrailingWildcardRoute: () => isValidTrailingWildcardRoute,
  isValidWildcardRoute: () => isValidWildcardRoute,
  isWsUrl: () => isWsUrl,
  parseConnectionError: () => parseConnectionError,
  payloadId: () => payloadId,
  validateJsonRpcError: () => validateJsonRpcError
});

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js
var env_exports = {};
__export(env_exports, {
  isNodeJs: () => isNodeJs
});
var import_environment = __toESM(require_cjs4());
__reExport(env_exports, __toESM(require_cjs4()));
var isNodeJs = import_environment.isNode;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
__reExport(esm_exports, env_exports);

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js
function isValidRoute(route) {
  if (route.includes("*")) {
    return isValidWildcardRoute(route);
  }
  if (/\W/g.test(route)) {
    return false;
  }
  return true;
}
function isValidDefaultRoute(route) {
  return route === "*";
}
function isValidWildcardRoute(route) {
  if (isValidDefaultRoute(route)) {
    return true;
  }
  if (!route.includes("*")) {
    return false;
  }
  if (route.split("*").length !== 2) {
    return false;
  }
  if (route.split("*").filter((x4) => x4.trim() === "").length !== 1) {
    return false;
  }
  return true;
}
function isValidLeadingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}

// node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
var e = class {
};
var o = class extends e {
  constructor(c6) {
    super();
  }
};
var n2 = class extends e {
  constructor() {
    super();
  }
};
var r = class extends n2 {
  constructor(c6) {
    super();
  }
};

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js
var HTTP_REGEX = "^https?:";
var WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
  return "error" in validation && validation.valid === false;
}

// node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var import_events = __toESM(require_events());
var o2 = class extends r {
  constructor(t) {
    super(t), this.events = new import_events.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async request(t, e2) {
    return this.requestStrict(formatJsonRpcRequest(t.method, t.params || [], t.id || getBigIntRpcId().toString()), e2);
  }
  async requestStrict(t, e2) {
    return new Promise(async (i4, s3) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (n5) {
        s3(n5);
      }
      this.events.on(`${t.id}`, (n5) => {
        isJsonRpcError(n5) ? s3(n5.error) : i4(n5.result);
      });
      try {
        await this.connection.send(t, e2);
      } catch (n5) {
        s3(n5);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), isJsonRpcResponse(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = true);
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_events7 = __toESM(require_events());

// node_modules/@walletconnect/heartbeat/dist/index.es.js
var import_events2 = __toESM(require_events());
var import_time3 = __toESM(require_cjs());

// node_modules/@walletconnect/events/dist/esm/events.js
var IEvents = class {
};

// node_modules/@walletconnect/heartbeat/dist/index.es.js
var n3 = class extends IEvents {
  constructor(e2) {
    super();
  }
};
var s2 = import_time3.FIVE_SECONDS;
var r2 = { pulse: "heartbeat_pulse" };
var i2 = class _i3 extends n3 {
  constructor(e2) {
    super(e2), this.events = new import_events2.EventEmitter(), this.interval = s2, this.interval = (e2 == null ? void 0 : e2.interval) || s2;
  }
  static async init(e2) {
    const t = new _i3(e2);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), (0, import_time3.toMiliseconds)(this.interval));
  }
  pulse() {
    this.events.emit(r2.pulse);
  }
};

// node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

// node_modules/unstorage/dist/shared/unstorage.CoCt7NXC.mjs
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify3(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify3(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
var BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c6) => c6.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key) {
  var _a;
  if (!key) {
    return "";
  }
  return ((_a = key.split("?")[0]) == null ? void 0 : _a.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base3) {
  base3 = normalizeKey(base3);
  return base3 ? base3 + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base3) {
  if (base3) {
    return key.startsWith(base3) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

// node_modules/unstorage/dist/index.mjs
function defineDriver(factory) {
  return factory;
}
var DRIVER_NAME = "memory";
var memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base3 of context.mountpoints) {
      if (key.startsWith(base3)) {
        return {
          base: base3,
          relativeKey: key.slice(base3.length),
          driver: context.mounts[base3]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base3, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base3) || includeParent && base3.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base3.length > mountpoint.length ? base3.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r3) => r3.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r3) => r3.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify3(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify3(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify3(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base3, opts = {}) {
      var _a;
      base3 = normalizeBaseKey(base3);
      const mounts = getMounts(base3, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!((_a = mount.driver.flags) == null ? void 0 : _a.maxDepth)) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p4) => fullKey.startsWith(p4))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p4) => !p4.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base3)
      );
    },
    // Utils
    async clear(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      await Promise.all(
        getMounts(base3, false).map(async (m3) => {
          if (m3.driver.clear) {
            return asyncCall(m3.driver.clear, m3.relativeBase, opts);
          }
          if (m3.driver.removeItem) {
            const keys2 = await m3.driver.getKeys(m3.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m3.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base3, driver) {
      base3 = normalizeBaseKey(base3);
      if (base3 && context.mounts[base3]) {
        throw new Error(`already mounted at ${base3}`);
      }
      if (base3) {
        context.mountpoints.push(base3);
        context.mountpoints.sort((a3, b5) => b5.length - a3.length);
      }
      context.mounts[base3] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base3)).then((unwatcher) => {
          context.unwatch[base3] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base3, _dispose = true) {
      var _a, _b;
      base3 = normalizeBaseKey(base3);
      if (!base3 || !context.mounts[base3]) {
        return;
      }
      if (context.watching && base3 in context.unwatch) {
        (_b = (_a = context.unwatch)[base3]) == null ? void 0 : _b.call(_a);
        delete context.unwatch[base3];
      }
      if (_dispose) {
        await dispose(context.mounts[base3]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base3);
      delete context.mounts[base3];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m3 = getMount(key);
      return {
        driver: m3.driver,
        base: m3.base
      };
    },
    getMounts(base3 = "", opts = {}) {
      base3 = normalizeKey(base3);
      const mounts = getMounts(base3, opts.parents);
      return mounts.map((m3) => ({
        driver: m3.driver,
        base: m3.mountpoint
      }));
    },
    // Aliases
    keys: (base3, opts = {}) => storage.getKeys(base3, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base3) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base3 + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

// node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  let dbp;
  const getDB = () => {
    if (dbp)
      return dbp;
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    dbp = promisifyRequest(request);
    dbp.then((db) => {
      db.onclose = () => dbp = void 0;
    }, () => {
    });
    return dbp;
  };
  return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}

// node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
var x3 = "idb-keyval";
var z2 = (i4 = {}) => {
  const t = i4.base && i4.base.length > 0 ? `${i4.base}:` : "", e2 = (s3) => t + s3;
  let n5;
  return i4.dbName && i4.storeName && (n5 = createStore(i4.dbName, i4.storeName)), { name: x3, options: i4, async hasItem(s3) {
    return !(typeof await get(e2(s3), n5) > "u");
  }, async getItem(s3) {
    return await get(e2(s3), n5) ?? null;
  }, setItem(s3, a3) {
    return set(e2(s3), a3, n5);
  }, removeItem(s3) {
    return del(e2(s3), n5);
  }, getKeys() {
    return keys(n5);
  }, clear() {
    return clear(n5);
  } };
};
var D = "WALLET_CONNECT_V2_INDEXED_DB";
var E2 = "keyvaluestorage";
var _2 = class {
  constructor() {
    this.indexedDb = createStorage({ driver: z2({ dbName: D, storeName: E2 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e2 = await this.indexedDb.getItem(t);
    if (e2 !== null) return e2;
  }
  async setItem(t, e2) {
    await this.indexedDb.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var l3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var c3 = { exports: {} };
(function() {
  let i4;
  function t() {
  }
  i4 = t, i4.prototype.getItem = function(e2) {
    return this.hasOwnProperty(e2) ? String(this[e2]) : null;
  }, i4.prototype.setItem = function(e2, n5) {
    this[e2] = String(n5);
  }, i4.prototype.removeItem = function(e2) {
    delete this[e2];
  }, i4.prototype.clear = function() {
    const e2 = this;
    Object.keys(e2).forEach(function(n5) {
      e2[n5] = void 0, delete e2[n5];
    });
  }, i4.prototype.key = function(e2) {
    return e2 = e2 || 0, Object.keys(this)[e2];
  }, i4.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l3 < "u" && l3.localStorage ? c3.exports = l3.localStorage : typeof window < "u" && window.localStorage ? c3.exports = window.localStorage : c3.exports = new t();
})();
function k3(i4) {
  var t;
  return [i4[0], safeJsonParse((t = i4[1]) != null ? t : "")];
}
var K3 = class {
  constructor() {
    this.localStorage = c3.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k3);
  }
  async getItem(t) {
    const e2 = this.localStorage.getItem(t);
    if (e2 !== null) return safeJsonParse(e2);
  }
  async setItem(t, e2) {
    this.localStorage.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
var N10 = "wc_storage_version";
var y2 = 1;
var O2 = async (i4, t, e2) => {
  const n5 = N10, s3 = await t.getItem(n5);
  if (s3 && s3 >= y2) {
    e2(t);
    return;
  }
  const a3 = await i4.getKeys();
  if (!a3.length) {
    e2(t);
    return;
  }
  const m3 = [];
  for (; a3.length; ) {
    const r3 = a3.shift();
    if (!r3) continue;
    const o4 = r3.toLowerCase();
    if (o4.includes("wc@") || o4.includes("walletconnect") || o4.includes("wc_") || o4.includes("wallet_connect")) {
      const f6 = await i4.getItem(r3);
      await t.setItem(r3, f6), m3.push(r3);
    }
  }
  await t.setItem(n5, y2), e2(t), j2(i4, m3);
};
var j2 = async (i4, t) => {
  t.length && t.forEach(async (e2) => {
    await i4.removeItem(e2);
  });
};
var h2 = class {
  constructor() {
    this.initialized = false, this.setInitialized = (e2) => {
      this.storage = e2, this.initialized = true;
    };
    const t = new K3();
    this.storage = t;
    try {
      const e2 = new _2();
      O2(t, e2, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, e2) {
    return await this.initialize(), this.storage.setItem(t, e2);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const e2 = setInterval(() => {
        this.initialized && (clearInterval(e2), t());
      }, 20);
    });
  }
};

// node_modules/@walletconnect/types/dist/index.es.js
var import_events5 = __toESM(require_events());
var a2 = Object.defineProperty;
var u = (e2, s3, r3) => s3 in e2 ? a2(e2, s3, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[s3] = r3;
var c4 = (e2, s3, r3) => u(e2, typeof s3 != "symbol" ? s3 + "" : s3, r3);
var h3 = class extends IEvents {
  constructor(s3) {
    super(), this.opts = s3, c4(this, "protocol", "wc"), c4(this, "version", 2);
  }
};
var p2 = Object.defineProperty;
var b2 = (e2, s3, r3) => s3 in e2 ? p2(e2, s3, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[s3] = r3;
var v2 = (e2, s3, r3) => b2(e2, typeof s3 != "symbol" ? s3 + "" : s3, r3);
var I2 = class extends IEvents {
  constructor(s3, r3) {
    super(), this.core = s3, this.logger = r3, v2(this, "records", /* @__PURE__ */ new Map());
  }
};
var y3 = class {
  constructor(s3, r3) {
    this.logger = s3, this.core = r3;
  }
};
var m2 = class extends IEvents {
  constructor(s3, r3) {
    super(), this.relayer = s3, this.logger = r3;
  }
};
var d2 = class extends IEvents {
  constructor(s3) {
    super();
  }
};
var f3 = class {
  constructor(s3, r3, t, q2) {
    this.core = s3, this.logger = r3, this.name = t;
  }
};
var P2 = class extends IEvents {
  constructor(s3, r3) {
    super(), this.relayer = s3, this.logger = r3;
  }
};
var S2 = class extends IEvents {
  constructor(s3, r3) {
    super(), this.core = s3, this.logger = r3;
  }
};
var M2 = class {
  constructor(s3, r3, t) {
    this.core = s3, this.logger = r3, this.store = t;
  }
};
var O3 = class {
  constructor(s3, r3) {
    this.projectId = s3, this.logger = r3;
  }
};
var R = class {
  constructor(s3, r3, t) {
    this.core = s3, this.logger = r3, this.telemetryEnabled = t;
  }
};
var T2 = Object.defineProperty;
var k4 = (e2, s3, r3) => s3 in e2 ? T2(e2, s3, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[s3] = r3;
var i3 = (e2, s3, r3) => k4(e2, typeof s3 != "symbol" ? s3 + "" : s3, r3);
var J2 = class {
  constructor(s3) {
    this.opts = s3, i3(this, "protocol", "wc"), i3(this, "version", 2);
  }
};
var V2 = class {
  constructor(s3) {
    this.client = s3;
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_time4 = __toESM(require_cjs());

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var import_events6 = __toESM(require_events());
var v3 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser2();
var w2 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u";
var d3 = (r3) => r3.split("?")[0];
var h4 = 10;
var b3 = v3();
var f4 = class {
  constructor(e2) {
    if (this.url = e2, this.events = new import_events6.EventEmitter(), this.registering = false, !isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    this.url = e2;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async open(e2 = this.url) {
    await this.register(e2);
  }
  async close() {
    return new Promise((e2, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n5) => {
        this.onClose(n5), e2();
      }, this.socket.close();
    });
  }
  async send(e2) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e2));
    } catch (t) {
      this.onError(e2.id, t);
    }
  }
  register(e2 = this.url) {
    if (!isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n5, s3) => {
        this.events.once("register_error", (o4) => {
          this.resetMaxListeners(), s3(o4);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return s3(new Error("WebSocket connection is missing or invalid"));
          n5(this.socket);
        });
      });
    }
    return this.url = e2, this.registering = true, new Promise((t, n5) => {
      const s3 = (0, esm_exports.isReactNative)() ? void 0 : { rejectUnauthorized: !isLocalhostUrl(e2) }, o4 = new b3(e2, [], s3);
      w2() ? o4.onerror = (i4) => {
        const a3 = i4;
        n5(this.emitError(a3.error));
      } : o4.on("error", (i4) => {
        n5(this.emitError(i4));
      }), o4.onopen = () => {
        this.onOpen(o4), t(o4);
      };
    });
  }
  onOpen(e2) {
    e2.onmessage = (t) => this.onPayload(t), e2.onclose = (t) => this.onClose(t), this.socket = e2, this.registering = false, this.events.emit("open");
  }
  onClose(e2) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e2);
  }
  onPayload(e2) {
    if (typeof e2.data > "u") return;
    const t = typeof e2.data == "string" ? safeJsonParse(e2.data) : e2.data;
    this.events.emit("payload", t);
  }
  onError(e2, t) {
    const n5 = this.parseError(t), s3 = n5.message || n5.toString(), o4 = formatJsonRpcError(e2, s3);
    this.events.emit("payload", o4);
  }
  parseError(e2, t = this.url) {
    return parseConnectionError(e2, d3(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h4 && this.events.setMaxListeners(h4);
  }
  emitError(e2) {
    const t = this.parseError(new Error((e2 == null ? void 0 : e2.message) || `WebSocket connection failed for host: ${d3(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_window_getters2 = __toESM(require_cjs2());
var ze3 = "wc";
var Le3 = 2;
var he3 = "core";
var B2 = `${ze3}@2:${he3}:`;
var Et3 = { name: he3, logger: "error" };
var It3 = { database: ":memory:" };
var Tt3 = "crypto";
var ke3 = "client_ed25519_seed";
var Ct2 = import_time4.ONE_DAY;
var Pt3 = "keychain";
var St3 = "0.3";
var Rt3 = "messages";
var Ot3 = "0.3";
var je3 = import_time4.SIX_HOURS;
var At2 = "publisher";
var xt3 = "irn";
var Nt3 = "error";
var Ue2 = "wss://relay.walletconnect.org";
var $t3 = "relayer";
var C3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var zt2 = "_subscription";
var L2 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var Lt3 = 0.1;
var _e3 = "2.19.2";
var Q2 = { link_mode: "link_mode", relay: "relay" };
var le3 = { inbound: "inbound", outbound: "outbound" };
var kt3 = "0.3";
var jt3 = "WALLETCONNECT_CLIENT_ID";
var Fe2 = "WALLETCONNECT_LINK_MODE_APPS";
var $ = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var Ut2 = "subscription";
var Ft2 = "0.3";
var Hs2 = import_time4.FIVE_SECONDS * 1e3;
var Mt3 = "pairing";
var Kt3 = "0.3";
var ie2 = { wc_pairingDelete: { req: { ttl: import_time4.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time4.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time4.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time4.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time4.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time4.ONE_DAY, prompt: false, tag: 0 } } };
var se2 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var F2 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var Bt3 = "history";
var Vt3 = "0.3";
var qt3 = "expirer";
var M3 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var Gt3 = "0.3";
var Wt3 = "verify-api";
var Xs2 = "https://verify.walletconnect.com";
var Ht3 = "https://verify.walletconnect.org";
var ue2 = Ht3;
var Yt3 = `${ue2}/v3`;
var Jt3 = [Xs2, Ht3];
var Xt3 = "echo";
var Zt2 = "https://echo.walletconnect.com";
var G3 = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" };
var Y2 = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" };
var Qs2 = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" };
var er3 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" };
var tr3 = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" };
var ir3 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" };
var Qt3 = 0.1;
var ei2 = "event-client";
var ti = 86400;
var ii = "https://pulse.walletconnect.org/batch";
function sr3(r3, e2) {
  if (r3.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i4 = 0; i4 < t.length; i4++) t[i4] = 255;
  for (var s3 = 0; s3 < r3.length; s3++) {
    var n5 = r3.charAt(s3), o4 = n5.charCodeAt(0);
    if (t[o4] !== 255) throw new TypeError(n5 + " is ambiguous");
    t[o4] = s3;
  }
  var a3 = r3.length, c6 = r3.charAt(0), h5 = Math.log(a3) / Math.log(256), l6 = Math.log(256) / Math.log(a3);
  function d4(u2) {
    if (u2 instanceof Uint8Array || (ArrayBuffer.isView(u2) ? u2 = new Uint8Array(u2.buffer, u2.byteOffset, u2.byteLength) : Array.isArray(u2) && (u2 = Uint8Array.from(u2))), !(u2 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u2.length === 0) return "";
    for (var b5 = 0, x4 = 0, I3 = 0, D2 = u2.length; I3 !== D2 && u2[I3] === 0; ) I3++, b5++;
    for (var j3 = (D2 - I3) * l6 + 1 >>> 0, T3 = new Uint8Array(j3); I3 !== D2; ) {
      for (var q2 = u2[I3], J4 = 0, K5 = j3 - 1; (q2 !== 0 || J4 < x4) && K5 !== -1; K5--, J4++) q2 += 256 * T3[K5] >>> 0, T3[K5] = q2 % a3 >>> 0, q2 = q2 / a3 >>> 0;
      if (q2 !== 0) throw new Error("Non-zero carry");
      x4 = J4, I3++;
    }
    for (var H3 = j3 - x4; H3 !== j3 && T3[H3] === 0; ) H3++;
    for (var me4 = c6.repeat(b5); H3 < j3; ++H3) me4 += r3.charAt(T3[H3]);
    return me4;
  }
  function g3(u2) {
    if (typeof u2 != "string") throw new TypeError("Expected String");
    if (u2.length === 0) return new Uint8Array();
    var b5 = 0;
    if (u2[b5] !== " ") {
      for (var x4 = 0, I3 = 0; u2[b5] === c6; ) x4++, b5++;
      for (var D2 = (u2.length - b5) * h5 + 1 >>> 0, j3 = new Uint8Array(D2); u2[b5]; ) {
        var T3 = t[u2.charCodeAt(b5)];
        if (T3 === 255) return;
        for (var q2 = 0, J4 = D2 - 1; (T3 !== 0 || q2 < I3) && J4 !== -1; J4--, q2++) T3 += a3 * j3[J4] >>> 0, j3[J4] = T3 % 256 >>> 0, T3 = T3 / 256 >>> 0;
        if (T3 !== 0) throw new Error("Non-zero carry");
        I3 = q2, b5++;
      }
      if (u2[b5] !== " ") {
        for (var K5 = D2 - I3; K5 !== D2 && j3[K5] === 0; ) K5++;
        for (var H3 = new Uint8Array(x4 + (D2 - K5)), me4 = x4; K5 !== D2; ) H3[me4++] = j3[K5++];
        return H3;
      }
    }
  }
  function _3(u2) {
    var b5 = g3(u2);
    if (b5) return b5;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: d4, decodeUnsafe: g3, decode: _3 };
}
var rr3 = sr3;
var nr3 = rr3;
var si2 = (r3) => {
  if (r3 instanceof Uint8Array && r3.constructor.name === "Uint8Array") return r3;
  if (r3 instanceof ArrayBuffer) return new Uint8Array(r3);
  if (ArrayBuffer.isView(r3)) return new Uint8Array(r3.buffer, r3.byteOffset, r3.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var or4 = (r3) => new TextEncoder().encode(r3);
var ar3 = (r3) => new TextDecoder().decode(r3);
var cr3 = class {
  constructor(e2, t, i4) {
    this.name = e2, this.prefix = t, this.baseEncode = i4;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var hr3 = class {
  constructor(e2, t, i4) {
    if (this.name = e2, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i4;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return ri2(this, e2);
  }
};
var lr3 = class {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return ri2(this, e2);
  }
  decode(e2) {
    const t = e2[0], i4 = this.decoders[t];
    if (i4) return i4.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var ri2 = (r3, e2) => new lr3({ ...r3.decoders || { [r3.prefix]: r3 }, ...e2.decoders || { [e2.prefix]: e2 } });
var ur3 = class {
  constructor(e2, t, i4, s3) {
    this.name = e2, this.prefix = t, this.baseEncode = i4, this.baseDecode = s3, this.encoder = new cr3(e2, t, i4), this.decoder = new hr3(e2, t, s3);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
var Ee3 = ({ name: r3, prefix: e2, encode: t, decode: i4 }) => new ur3(r3, e2, t, i4);
var de3 = ({ prefix: r3, name: e2, alphabet: t }) => {
  const { encode: i4, decode: s3 } = nr3(t, e2);
  return Ee3({ prefix: r3, name: e2, encode: i4, decode: (n5) => si2(s3(n5)) });
};
var dr3 = (r3, e2, t, i4) => {
  const s3 = {};
  for (let l6 = 0; l6 < e2.length; ++l6) s3[e2[l6]] = l6;
  let n5 = r3.length;
  for (; r3[n5 - 1] === "="; ) --n5;
  const o4 = new Uint8Array(n5 * t / 8 | 0);
  let a3 = 0, c6 = 0, h5 = 0;
  for (let l6 = 0; l6 < n5; ++l6) {
    const d4 = s3[r3[l6]];
    if (d4 === void 0) throw new SyntaxError(`Non-${i4} character`);
    c6 = c6 << t | d4, a3 += t, a3 >= 8 && (a3 -= 8, o4[h5++] = 255 & c6 >> a3);
  }
  if (a3 >= t || 255 & c6 << 8 - a3) throw new SyntaxError("Unexpected end of data");
  return o4;
};
var gr2 = (r3, e2, t) => {
  const i4 = e2[e2.length - 1] === "=", s3 = (1 << t) - 1;
  let n5 = "", o4 = 0, a3 = 0;
  for (let c6 = 0; c6 < r3.length; ++c6) for (a3 = a3 << 8 | r3[c6], o4 += 8; o4 > t; ) o4 -= t, n5 += e2[s3 & a3 >> o4];
  if (o4 && (n5 += e2[s3 & a3 << t - o4]), i4) for (; n5.length * t & 7; ) n5 += "=";
  return n5;
};
var P3 = ({ name: r3, prefix: e2, bitsPerChar: t, alphabet: i4 }) => Ee3({ prefix: e2, name: r3, encode(s3) {
  return gr2(s3, i4, t);
}, decode(s3) {
  return dr3(s3, i4, t, r3);
} });
var pr2 = Ee3({ prefix: "\0", name: "identity", encode: (r3) => ar3(r3), decode: (r3) => or4(r3) });
var yr2 = Object.freeze({ __proto__: null, identity: pr2 });
var br3 = P3({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var mr3 = Object.freeze({ __proto__: null, base2: br3 });
var fr3 = P3({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Dr3 = Object.freeze({ __proto__: null, base8: fr3 });
var vr3 = de3({ prefix: "9", name: "base10", alphabet: "0123456789" });
var wr3 = Object.freeze({ __proto__: null, base10: vr3 });
var _r3 = P3({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Er2 = P3({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Ir3 = Object.freeze({ __proto__: null, base16: _r3, base16upper: Er2 });
var Tr3 = P3({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Cr3 = P3({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Pr3 = P3({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var Sr3 = P3({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var Rr3 = P3({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var Or3 = P3({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var Ar3 = P3({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var xr2 = P3({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var Nr3 = P3({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var $r3 = Object.freeze({ __proto__: null, base32: Tr3, base32upper: Cr3, base32pad: Pr3, base32padupper: Sr3, base32hex: Rr3, base32hexupper: Or3, base32hexpad: Ar3, base32hexpadupper: xr2, base32z: Nr3 });
var zr3 = de3({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var Lr3 = de3({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var kr3 = Object.freeze({ __proto__: null, base36: zr3, base36upper: Lr3 });
var jr3 = de3({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Ur3 = de3({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Fr3 = Object.freeze({ __proto__: null, base58btc: jr3, base58flickr: Ur3 });
var Mr3 = P3({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var Kr4 = P3({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var Br3 = P3({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Vr3 = P3({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var qr3 = Object.freeze({ __proto__: null, base64: Mr3, base64pad: Kr4, base64url: Br3, base64urlpad: Vr3 });
var ni2 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var Gr3 = ni2.reduce((r3, e2, t) => (r3[t] = e2, r3), []);
var Wr3 = ni2.reduce((r3, e2, t) => (r3[e2.codePointAt(0)] = t, r3), []);
function Hr3(r3) {
  return r3.reduce((e2, t) => (e2 += Gr3[t], e2), "");
}
function Yr3(r3) {
  const e2 = [];
  for (const t of r3) {
    const i4 = Wr3[t.codePointAt(0)];
    if (i4 === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e2.push(i4);
  }
  return new Uint8Array(e2);
}
var Jr3 = Ee3({ prefix: "🚀", name: "base256emoji", encode: Hr3, decode: Yr3 });
var Xr3 = Object.freeze({ __proto__: null, base256emoji: Jr3 });
var Zr3 = ai;
var oi2 = 128;
var Qr3 = 127;
var en3 = ~Qr3;
var tn2 = Math.pow(2, 31);
function ai(r3, e2, t) {
  e2 = e2 || [], t = t || 0;
  for (var i4 = t; r3 >= tn2; ) e2[t++] = r3 & 255 | oi2, r3 /= 128;
  for (; r3 & en3; ) e2[t++] = r3 & 255 | oi2, r3 >>>= 7;
  return e2[t] = r3 | 0, ai.bytes = t - i4 + 1, e2;
}
var sn3 = Me3;
var rn3 = 128;
var ci = 127;
function Me3(r3, i4) {
  var t = 0, i4 = i4 || 0, s3 = 0, n5 = i4, o4, a3 = r3.length;
  do {
    if (n5 >= a3) throw Me3.bytes = 0, new RangeError("Could not decode varint");
    o4 = r3[n5++], t += s3 < 28 ? (o4 & ci) << s3 : (o4 & ci) * Math.pow(2, s3), s3 += 7;
  } while (o4 >= rn3);
  return Me3.bytes = n5 - i4, t;
}
var nn3 = Math.pow(2, 7);
var on3 = Math.pow(2, 14);
var an2 = Math.pow(2, 21);
var cn2 = Math.pow(2, 28);
var hn2 = Math.pow(2, 35);
var ln2 = Math.pow(2, 42);
var un2 = Math.pow(2, 49);
var dn2 = Math.pow(2, 56);
var gn3 = Math.pow(2, 63);
var pn2 = function(r3) {
  return r3 < nn3 ? 1 : r3 < on3 ? 2 : r3 < an2 ? 3 : r3 < cn2 ? 4 : r3 < hn2 ? 5 : r3 < ln2 ? 6 : r3 < un2 ? 7 : r3 < dn2 ? 8 : r3 < gn3 ? 9 : 10;
};
var yn2 = { encode: Zr3, decode: sn3, encodingLength: pn2 };
var hi = yn2;
var li2 = (r3, e2, t = 0) => (hi.encode(r3, e2, t), e2);
var ui = (r3) => hi.encodingLength(r3);
var Ke3 = (r3, e2) => {
  const t = e2.byteLength, i4 = ui(r3), s3 = i4 + ui(t), n5 = new Uint8Array(s3 + t);
  return li2(r3, n5, 0), li2(t, n5, i4), n5.set(e2, s3), new bn3(r3, t, e2, n5);
};
var bn3 = class {
  constructor(e2, t, i4, s3) {
    this.code = e2, this.size = t, this.digest = i4, this.bytes = s3;
  }
};
var di = ({ name: r3, code: e2, encode: t }) => new mn3(r3, e2, t);
var mn3 = class {
  constructor(e2, t, i4) {
    this.name = e2, this.code = t, this.encode = i4;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const t = this.encode(e2);
      return t instanceof Uint8Array ? Ke3(this.code, t) : t.then((i4) => Ke3(this.code, i4));
    } else throw Error("Unknown type, must be binary type");
  }
};
var gi2 = (r3) => async (e2) => new Uint8Array(await crypto.subtle.digest(r3, e2));
var fn2 = di({ name: "sha2-256", code: 18, encode: gi2("SHA-256") });
var Dn = di({ name: "sha2-512", code: 19, encode: gi2("SHA-512") });
var vn2 = Object.freeze({ __proto__: null, sha256: fn2, sha512: Dn });
var pi = 0;
var wn2 = "identity";
var yi2 = si2;
var _n3 = (r3) => Ke3(pi, yi2(r3));
var En3 = { code: pi, name: wn2, encode: yi2, digest: _n3 };
var In2 = Object.freeze({ __proto__: null, identity: En3 });
new TextEncoder(), new TextDecoder();
var bi2 = { ...yr2, ...mr3, ...Dr3, ...wr3, ...Ir3, ...$r3, ...kr3, ...Fr3, ...qr3, ...Xr3 };
({ ...vn2, ...In2 });
function Tn3(r3 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r3) : new Uint8Array(r3);
}
function mi2(r3, e2, t, i4) {
  return { name: r3, prefix: e2, encoder: { name: r3, prefix: e2, encode: t }, decoder: { decode: i4 } };
}
var fi2 = mi2("utf8", "u", (r3) => "u" + new TextDecoder("utf8").decode(r3), (r3) => new TextEncoder().encode(r3.substring(1)));
var Be3 = mi2("ascii", "a", (r3) => {
  let e2 = "a";
  for (let t = 0; t < r3.length; t++) e2 += String.fromCharCode(r3[t]);
  return e2;
}, (r3) => {
  r3 = r3.substring(1);
  const e2 = Tn3(r3.length);
  for (let t = 0; t < r3.length; t++) e2[t] = r3.charCodeAt(t);
  return e2;
});
var Cn3 = { utf8: fi2, "utf-8": fi2, hex: bi2.base16, latin1: Be3, ascii: Be3, binary: Be3, ...bi2 };
function Pn3(r3, e2 = "utf8") {
  const t = Cn3[e2];
  if (!t) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r3, "utf8") : t.decoder.decode(`${t.prefix}${r3}`);
}
var Sn3 = Object.defineProperty;
var Rn3 = (r3, e2, t) => e2 in r3 ? Sn3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var W2 = (r3, e2, t) => Rn3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Di2 = class {
  constructor(e2, t) {
    this.core = e2, this.logger = t, W2(this, "keychain", /* @__PURE__ */ new Map()), W2(this, "name", Pt3), W2(this, "version", St3), W2(this, "initialized", false), W2(this, "storagePrefix", B2), W2(this, "init", async () => {
      if (!this.initialized) {
        const i4 = await this.getKeyChain();
        typeof i4 < "u" && (this.keychain = i4), this.initialized = true;
      }
    }), W2(this, "has", (i4) => (this.isInitialized(), this.keychain.has(i4))), W2(this, "set", async (i4, s3) => {
      this.isInitialized(), this.keychain.set(i4, s3), await this.persist();
    }), W2(this, "get", (i4) => {
      this.isInitialized();
      const s3 = this.keychain.get(i4);
      if (typeof s3 > "u") {
        const { message: n5 } = ht2("NO_MATCHING_KEY", `${this.name}: ${i4}`);
        throw new Error(n5);
      }
      return s3;
    }), W2(this, "del", async (i4) => {
      this.isInitialized(), this.keychain.delete(i4), await this.persist();
    }), this.core = e2, this.logger = E(t, this.name);
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e2) {
    await this.core.storage.setItem(this.storageKey, fi(e2));
  }
  async getKeyChain() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? li(e2) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var On3 = Object.defineProperty;
var An2 = (r3, e2, t) => e2 in r3 ? On3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var S3 = (r3, e2, t) => An2(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var vi2 = class {
  constructor(e2, t, i4) {
    this.core = e2, this.logger = t, S3(this, "name", Tt3), S3(this, "keychain"), S3(this, "randomSessionIdentifier", jc()), S3(this, "initialized", false), S3(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }), S3(this, "hasKeys", (s3) => (this.isInitialized(), this.keychain.has(s3))), S3(this, "getClientId", async () => {
      this.isInitialized();
      const s3 = await this.getClientSeed(), n5 = Po(s3);
      return Qe(n5.publicKey);
    }), S3(this, "generateKeyPair", () => {
      this.isInitialized();
      const s3 = Lc();
      return this.setPrivateKey(s3.publicKey, s3.privateKey);
    }), S3(this, "signJWT", async (s3) => {
      this.isInitialized();
      const n5 = await this.getClientSeed(), o4 = Po(n5), a3 = this.randomSessionIdentifier, c6 = Ct2;
      return await Qo(a3, s3, c6, o4);
    }), S3(this, "generateSharedKey", (s3, n5, o4) => {
      this.isInitialized();
      const a3 = this.getPrivateKey(s3), c6 = Cc(a3, n5);
      return this.setSymKey(c6, o4);
    }), S3(this, "setSymKey", async (s3, n5) => {
      this.isInitialized();
      const o4 = n5 || Pc(s3);
      return await this.keychain.set(o4, s3), o4;
    }), S3(this, "deleteKeyPair", async (s3) => {
      this.isInitialized(), await this.keychain.del(s3);
    }), S3(this, "deleteSymKey", async (s3) => {
      this.isInitialized(), await this.keychain.del(s3);
    }), S3(this, "encode", async (s3, n5, o4) => {
      this.isInitialized();
      const a3 = oo2(o4), c6 = safeJsonStringify(n5);
      if (Fc(a3)) return Dc(c6, o4 == null ? void 0 : o4.encoding);
      if (Kc(a3)) {
        const g3 = a3.senderPublicKey, _3 = a3.receiverPublicKey;
        s3 = await this.generateSharedKey(g3, _3);
      }
      const h5 = this.getSymKey(s3), { type: l6, senderPublicKey: d4 } = a3;
      return Vc({ type: l6, symKey: h5, message: c6, senderPublicKey: d4, encoding: o4 == null ? void 0 : o4.encoding });
    }), S3(this, "decode", async (s3, n5, o4) => {
      this.isInitialized();
      const a3 = qc(n5, o4);
      if (Fc(a3)) {
        const c6 = Hc(n5, o4 == null ? void 0 : o4.encoding);
        return safeJsonParse(c6);
      }
      if (Kc(a3)) {
        const c6 = a3.receiverPublicKey, h5 = a3.senderPublicKey;
        s3 = await this.generateSharedKey(c6, h5);
      }
      try {
        const c6 = this.getSymKey(s3), h5 = Mc({ symKey: c6, encoded: n5, encoding: o4 == null ? void 0 : o4.encoding });
        return safeJsonParse(h5);
      } catch (c6) {
        this.logger.error(`Failed to decode message from topic: '${s3}', clientId: '${await this.getClientId()}'`), this.logger.error(c6);
      }
    }), S3(this, "getPayloadType", (s3, n5 = Ht2) => {
      const o4 = ve2({ encoded: s3, encoding: n5 });
      return Bt2(o4.type);
    }), S3(this, "getPayloadSenderPublicKey", (s3, n5 = Ht2) => {
      const o4 = ve2({ encoded: s3, encoding: n5 });
      return o4.senderPublicKey ? toString3(o4.senderPublicKey, G2) : void 0;
    }), this.core = e2, this.logger = E(t, this.name), this.keychain = i4 || new Di2(this.core, this.logger);
  }
  get context() {
    return y(this.logger);
  }
  async setPrivateKey(e2, t) {
    return await this.keychain.set(e2, t), e2;
  }
  getPrivateKey(e2) {
    return this.keychain.get(e2);
  }
  async getClientSeed() {
    let e2 = "";
    try {
      e2 = this.keychain.get(ke3);
    } catch {
      e2 = jc(), await this.keychain.set(ke3, e2);
    }
    return Pn3(e2, "base16");
  }
  getSymKey(e2) {
    return this.keychain.get(e2);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var xn3 = Object.defineProperty;
var Nn2 = Object.defineProperties;
var $n3 = Object.getOwnPropertyDescriptors;
var wi2 = Object.getOwnPropertySymbols;
var zn3 = Object.prototype.hasOwnProperty;
var Ln2 = Object.prototype.propertyIsEnumerable;
var Ve3 = (r3, e2, t) => e2 in r3 ? xn3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var kn3 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) zn3.call(e2, t) && Ve3(r3, t, e2[t]);
  if (wi2) for (var t of wi2(e2)) Ln2.call(e2, t) && Ve3(r3, t, e2[t]);
  return r3;
};
var jn3 = (r3, e2) => Nn2(r3, $n3(e2));
var k5 = (r3, e2, t) => Ve3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var _i2 = class extends y3 {
  constructor(e2, t) {
    super(e2, t), this.logger = e2, this.core = t, k5(this, "messages", /* @__PURE__ */ new Map()), k5(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), k5(this, "name", Rt3), k5(this, "version", Ot3), k5(this, "initialized", false), k5(this, "storagePrefix", B2), k5(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i4 = await this.getRelayerMessages();
          typeof i4 < "u" && (this.messages = i4);
          const s3 = await this.getRelayerMessagesWithoutClientAck();
          typeof s3 < "u" && (this.messagesWithoutClientAck = s3), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i4) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i4);
        } finally {
          this.initialized = true;
        }
      }
    }), k5(this, "set", async (i4, s3, n5) => {
      this.isInitialized();
      const o4 = kc(s3);
      let a3 = this.messages.get(i4);
      if (typeof a3 > "u" && (a3 = {}), typeof a3[o4] < "u") return o4;
      if (a3[o4] = s3, this.messages.set(i4, a3), n5 === le3.inbound) {
        const c6 = this.messagesWithoutClientAck.get(i4) || {};
        this.messagesWithoutClientAck.set(i4, jn3(kn3({}, c6), { [o4]: s3 }));
      }
      return await this.persist(), o4;
    }), k5(this, "get", (i4) => {
      this.isInitialized();
      let s3 = this.messages.get(i4);
      return typeof s3 > "u" && (s3 = {}), s3;
    }), k5(this, "getWithoutAck", (i4) => {
      this.isInitialized();
      const s3 = {};
      for (const n5 of i4) {
        const o4 = this.messagesWithoutClientAck.get(n5) || {};
        s3[n5] = Object.values(o4);
      }
      return s3;
    }), k5(this, "has", (i4, s3) => {
      this.isInitialized();
      const n5 = this.get(i4), o4 = kc(s3);
      return typeof n5[o4] < "u";
    }), k5(this, "ack", async (i4, s3) => {
      this.isInitialized();
      const n5 = this.messagesWithoutClientAck.get(i4);
      if (typeof n5 > "u") return;
      const o4 = kc(s3);
      delete n5[o4], Object.keys(n5).length === 0 ? this.messagesWithoutClientAck.delete(i4) : this.messagesWithoutClientAck.set(i4, n5), await this.persist();
    }), k5(this, "del", async (i4) => {
      this.isInitialized(), this.messages.delete(i4), this.messagesWithoutClientAck.delete(i4), await this.persist();
    }), this.logger = E(e2, this.name), this.core = t;
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e2) {
    await this.core.storage.setItem(this.storageKey, fi(e2));
  }
  async setRelayerMessagesWithoutClientAck(e2) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, fi(e2));
  }
  async getRelayerMessages() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? li(e2) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e2 = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e2 < "u" ? li(e2) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Un2 = Object.defineProperty;
var Fn3 = Object.defineProperties;
var Mn3 = Object.getOwnPropertyDescriptors;
var Ei2 = Object.getOwnPropertySymbols;
var Kn3 = Object.prototype.hasOwnProperty;
var Bn2 = Object.prototype.propertyIsEnumerable;
var qe3 = (r3, e2, t) => e2 in r3 ? Un2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var Ie3 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) Kn3.call(e2, t) && qe3(r3, t, e2[t]);
  if (Ei2) for (var t of Ei2(e2)) Bn2.call(e2, t) && qe3(r3, t, e2[t]);
  return r3;
};
var Ge3 = (r3, e2) => Fn3(r3, Mn3(e2));
var V3 = (r3, e2, t) => qe3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Vn3 = class extends m2 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, V3(this, "events", new import_events7.EventEmitter()), V3(this, "name", At2), V3(this, "queue", /* @__PURE__ */ new Map()), V3(this, "publishTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE)), V3(this, "initialPublishTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND * 15)), V3(this, "needsTransportRestart", false), V3(this, "publish", async (i4, s3, n5) => {
      var o4;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i4, message: s3, opts: n5 } });
      const a3 = (n5 == null ? void 0 : n5.ttl) || je3, c6 = Zc(n5), h5 = (n5 == null ? void 0 : n5.prompt) || false, l6 = (n5 == null ? void 0 : n5.tag) || 0, d4 = (n5 == null ? void 0 : n5.id) || getBigIntRpcId().toString(), g3 = { topic: i4, message: s3, opts: { ttl: a3, relay: c6, prompt: h5, tag: l6, id: d4, attestation: n5 == null ? void 0 : n5.attestation, tvf: n5 == null ? void 0 : n5.tvf } }, _3 = `Failed to publish payload, please try again. id:${d4} tag:${l6}`;
      try {
        const u2 = new Promise(async (b5) => {
          const x4 = ({ id: D2 }) => {
            g3.opts.id === D2 && (this.removeRequestFromQueue(D2), this.relayer.events.removeListener(C3.publish, x4), b5(g3));
          };
          this.relayer.events.on(C3.publish, x4);
          const I3 = yi(new Promise((D2, j3) => {
            this.rpcPublish({ topic: i4, message: s3, ttl: a3, prompt: h5, tag: l6, id: d4, attestation: n5 == null ? void 0 : n5.attestation, tvf: n5 == null ? void 0 : n5.tvf }).then(D2).catch((T3) => {
              this.logger.warn(T3, T3 == null ? void 0 : T3.message), j3(T3);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${d4} tag:${l6}`);
          try {
            await I3, this.events.removeListener(C3.publish, x4);
          } catch (D2) {
            this.queue.set(d4, Ge3(Ie3({}, g3), { attempt: 1 })), this.logger.warn(D2, D2 == null ? void 0 : D2.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: d4, topic: i4, message: s3, opts: n5 } }), await yi(u2, this.publishTimeout, _3);
      } catch (u2) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(u2), (o4 = n5 == null ? void 0 : n5.internal) != null && o4.throwOnFailedPublish) throw u2;
      } finally {
        this.queue.delete(d4);
      }
    }), V3(this, "on", (i4, s3) => {
      this.events.on(i4, s3);
    }), V3(this, "once", (i4, s3) => {
      this.events.once(i4, s3);
    }), V3(this, "off", (i4, s3) => {
      this.events.off(i4, s3);
    }), V3(this, "removeListener", (i4, s3) => {
      this.events.removeListener(i4, s3);
    }), this.relayer = e2, this.logger = E(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y(this.logger);
  }
  async rpcPublish(e2) {
    var t, i4, s3, n5;
    const { topic: o4, message: a3, ttl: c6 = je3, prompt: h5, tag: l6, id: d4, attestation: g3, tvf: _3 } = e2, u2 = { method: Yc(Zc().protocol).publish, params: Ie3({ topic: o4, message: a3, ttl: c6, prompt: h5, tag: l6, attestation: g3 }, _3), id: d4 };
    Et2((t = u2.params) == null ? void 0 : t.prompt) && ((i4 = u2.params) == null || delete i4.prompt), Et2((s3 = u2.params) == null ? void 0 : s3.tag) && ((n5 = u2.params) == null || delete n5.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: u2 });
    const b5 = await this.relayer.request(u2);
    return this.relayer.events.emit(C3.publish, e2), this.logger.debug("Successfully Published Payload"), b5;
  }
  removeRequestFromQueue(e2) {
    this.queue.delete(e2);
  }
  checkQueue() {
    this.queue.forEach(async (e2, t) => {
      const i4 = e2.attempt + 1;
      this.queue.set(t, Ge3(Ie3({}, e2), { attempt: i4 }));
      const { topic: s3, message: n5, opts: o4, attestation: a3 } = e2;
      this.logger.warn({}, `Publisher: queue->publishing: ${e2.opts.id}, tag: ${e2.opts.tag}, attempt: ${i4}`), await this.rpcPublish(Ge3(Ie3({}, e2), { topic: s3, message: n5, ttl: o4.ttl, prompt: o4.prompt, tag: o4.tag, id: o4.id, attestation: a3, tvf: o4.tvf })), this.logger.warn({}, `Publisher: queue->published: ${e2.opts.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r2.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(C3.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(C3.message_ack, (e2) => {
      this.removeRequestFromQueue(e2.id.toString());
    });
  }
};
var qn2 = Object.defineProperty;
var Gn3 = (r3, e2, t) => e2 in r3 ? qn2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var re2 = (r3, e2, t) => Gn3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Wn3 = class {
  constructor() {
    re2(this, "map", /* @__PURE__ */ new Map()), re2(this, "set", (e2, t) => {
      const i4 = this.get(e2);
      this.exists(e2, t) || this.map.set(e2, [...i4, t]);
    }), re2(this, "get", (e2) => this.map.get(e2) || []), re2(this, "exists", (e2, t) => this.get(e2).includes(t)), re2(this, "delete", (e2, t) => {
      if (typeof t > "u") {
        this.map.delete(e2);
        return;
      }
      if (!this.map.has(e2)) return;
      const i4 = this.get(e2);
      if (!this.exists(e2, t)) return;
      const s3 = i4.filter((n5) => n5 !== t);
      if (!s3.length) {
        this.map.delete(e2);
        return;
      }
      this.map.set(e2, s3);
    }), re2(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var Hn2 = Object.defineProperty;
var Yn3 = Object.defineProperties;
var Jn3 = Object.getOwnPropertyDescriptors;
var Ii2 = Object.getOwnPropertySymbols;
var Xn3 = Object.prototype.hasOwnProperty;
var Zn3 = Object.prototype.propertyIsEnumerable;
var We3 = (r3, e2, t) => e2 in r3 ? Hn2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var ge3 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) Xn3.call(e2, t) && We3(r3, t, e2[t]);
  if (Ii2) for (var t of Ii2(e2)) Zn3.call(e2, t) && We3(r3, t, e2[t]);
  return r3;
};
var He3 = (r3, e2) => Yn3(r3, Jn3(e2));
var f5 = (r3, e2, t) => We3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Ti2 = class extends P2 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, f5(this, "subscriptions", /* @__PURE__ */ new Map()), f5(this, "topicMap", new Wn3()), f5(this, "events", new import_events7.EventEmitter()), f5(this, "name", Ut2), f5(this, "version", Ft2), f5(this, "pending", /* @__PURE__ */ new Map()), f5(this, "cached", []), f5(this, "initialized", false), f5(this, "storagePrefix", B2), f5(this, "subscribeTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE)), f5(this, "initialSubscribeTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND * 15)), f5(this, "clientId"), f5(this, "batchSubscribeTopicsLimit", 500), f5(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
    }), f5(this, "subscribe", async (i4, s3) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i4, opts: s3 } });
      try {
        const n5 = Zc(s3), o4 = { topic: i4, relay: n5, transportType: s3 == null ? void 0 : s3.transportType };
        this.pending.set(i4, o4);
        const a3 = await this.rpcSubscribe(i4, n5, s3);
        return typeof a3 == "string" && (this.onSubscribe(a3, o4), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i4, opts: s3 } })), a3;
      } catch (n5) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n5), n5;
      }
    }), f5(this, "unsubscribe", async (i4, s3) => {
      this.isInitialized(), typeof (s3 == null ? void 0 : s3.id) < "u" ? await this.unsubscribeById(i4, s3.id, s3) : await this.unsubscribeByTopic(i4, s3);
    }), f5(this, "isSubscribed", (i4) => new Promise((s3) => {
      s3(this.topicMap.topics.includes(i4));
    })), f5(this, "isKnownTopic", (i4) => new Promise((s3) => {
      s3(this.topicMap.topics.includes(i4) || this.pending.has(i4) || this.cached.some((n5) => n5.topic === i4));
    })), f5(this, "on", (i4, s3) => {
      this.events.on(i4, s3);
    }), f5(this, "once", (i4, s3) => {
      this.events.once(i4, s3);
    }), f5(this, "off", (i4, s3) => {
      this.events.off(i4, s3);
    }), f5(this, "removeListener", (i4, s3) => {
      this.events.removeListener(i4, s3);
    }), f5(this, "start", async () => {
      await this.onConnect();
    }), f5(this, "stop", async () => {
      await this.onDisconnect();
    }), f5(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), f5(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const i4 = [];
      this.pending.forEach((s3) => {
        i4.push(s3);
      }), await this.batchSubscribe(i4);
    }), f5(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(r2.pulse, async () => {
        await this.checkPending();
      }), this.events.on($.created, async (i4) => {
        const s3 = $.created;
        this.logger.info(`Emitting ${s3}`), this.logger.debug({ type: "event", event: s3, data: i4 }), await this.persist();
      }), this.events.on($.deleted, async (i4) => {
        const s3 = $.deleted;
        this.logger.info(`Emitting ${s3}`), this.logger.debug({ type: "event", event: s3, data: i4 }), await this.persist();
      });
    }), this.relayer = e2, this.logger = E(t, this.name), this.clientId = "";
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e2, t) {
    let i4 = false;
    try {
      i4 = this.getSubscription(e2).topic === t;
    } catch {
    }
    return i4;
  }
  reset() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e2, t) {
    const i4 = this.topicMap.get(e2);
    await Promise.all(i4.map(async (s3) => await this.unsubscribeById(e2, s3, t)));
  }
  async unsubscribeById(e2, t, i4) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i4 } });
    try {
      const s3 = Zc(i4);
      await this.restartToComplete({ topic: e2, id: t, relay: s3 }), await this.rpcUnsubscribe(e2, t, s3);
      const n5 = Nt2("USER_DISCONNECTED", `${this.name}, ${e2}`);
      await this.onUnsubscribe(e2, t, n5), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i4 } });
    } catch (s3) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s3), s3;
    }
  }
  async rpcSubscribe(e2, t, i4) {
    var s3;
    (!i4 || (i4 == null ? void 0 : i4.transportType) === Q2.relay) && await this.restartToComplete({ topic: e2, id: e2, relay: t });
    const n5 = { method: Yc(t.protocol).subscribe, params: { topic: e2 } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n5 });
    const o4 = (s3 = i4 == null ? void 0 : i4.internal) == null ? void 0 : s3.throwOnFailedPublish;
    try {
      const a3 = await this.getSubscriptionId(e2);
      if ((i4 == null ? void 0 : i4.transportType) === Q2.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n5).catch((l6) => this.logger.warn(l6));
      }, (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND)), a3;
      const c6 = new Promise(async (l6) => {
        const d4 = (g3) => {
          g3.topic === e2 && (this.events.removeListener($.created, d4), l6(g3.id));
        };
        this.events.on($.created, d4);
        try {
          const g3 = await yi(new Promise((_3, u2) => {
            this.relayer.request(n5).catch((b5) => {
              this.logger.warn(b5, b5 == null ? void 0 : b5.message), u2(b5);
            }).then(_3);
          }), this.initialSubscribeTimeout, `Subscribing to ${e2} failed, please try again`);
          this.events.removeListener($.created, d4), l6(g3);
        } catch {
        }
      }), h5 = await yi(c6, this.subscribeTimeout, `Subscribing to ${e2} failed, please try again`);
      if (!h5 && o4) throw new Error(`Subscribing to ${e2} failed, please try again`);
      return h5 ? a3 : null;
    } catch (a3) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(C3.connection_stalled), o4) throw a3;
    }
    return null;
  }
  async rpcBatchSubscribe(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, i4 = { method: Yc(t.protocol).batchSubscribe, params: { topics: e2.map((s3) => s3.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i4 });
    try {
      await await yi(new Promise((s3) => {
        this.relayer.request(i4).catch((n5) => this.logger.warn(n5)).then(s3);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(C3.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, i4 = { method: Yc(t.protocol).batchFetchMessages, params: { topics: e2.map((n5) => n5.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i4 });
    let s3;
    try {
      s3 = await await yi(new Promise((n5, o4) => {
        this.relayer.request(i4).catch((a3) => {
          this.logger.warn(a3), o4(a3);
        }).then(n5);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(C3.connection_stalled);
    }
    return s3;
  }
  rpcUnsubscribe(e2, t, i4) {
    const s3 = { method: Yc(i4.protocol).unsubscribe, params: { topic: e2, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s3 }), this.relayer.request(s3);
  }
  onSubscribe(e2, t) {
    this.setSubscription(e2, He3(ge3({}, t), { id: e2 })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e2) {
    e2.length && e2.forEach((t) => {
      this.setSubscription(t.id, ge3({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e2, t, i4) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e2) && this.deleteSubscription(t, i4), await this.relayer.messages.del(e2);
  }
  async setRelayerSubscriptions(e2) {
    await this.relayer.core.storage.setItem(this.storageKey, e2);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e2, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e2, subscription: t }), this.addSubscription(e2, t);
  }
  addSubscription(e2, t) {
    this.subscriptions.set(e2, ge3({}, t)), this.topicMap.set(t.topic, e2), this.events.emit($.created, t);
  }
  getSubscription(e2) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e2 });
    const t = this.subscriptions.get(e2);
    if (!t) {
      const { message: i4 } = ht2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i4);
    }
    return t;
  }
  deleteSubscription(e2, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e2, reason: t });
    const i4 = this.getSubscription(e2);
    this.subscriptions.delete(e2), this.topicMap.delete(i4.topic, e2), this.events.emit($.deleted, He3(ge3({}, i4), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit($.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e2 = [...this.cached], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let i4 = 0; i4 < t; i4++) {
        const s3 = e2.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s3);
      }
    }
    this.events.emit($.resubscribed);
  }
  async restore() {
    try {
      const e2 = await this.getRelayerSubscriptions();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.subscriptions.size) {
        const { message: t } = ht2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e2);
    }
  }
  async batchSubscribe(e2) {
    e2.length && (await this.rpcBatchSubscribe(e2), this.onBatchSubscribe(await Promise.all(e2.map(async (t) => He3(ge3({}, t), { id: await this.getSubscriptionId(t.topic) })))));
  }
  async batchFetchMessages(e2) {
    if (!e2.length) return;
    this.logger.trace(`Fetching batch messages for ${e2.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e2);
    t && t.messages && (await Ni((0, import_time4.toMiliseconds)(import_time4.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async restartToComplete(e2) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e2), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e2) {
    return kc(e2 + await this.getClientId());
  }
};
var Qn3 = Object.defineProperty;
var Ci2 = Object.getOwnPropertySymbols;
var eo3 = Object.prototype.hasOwnProperty;
var to3 = Object.prototype.propertyIsEnumerable;
var Ye3 = (r3, e2, t) => e2 in r3 ? Qn3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var Pi3 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) eo3.call(e2, t) && Ye3(r3, t, e2[t]);
  if (Ci2) for (var t of Ci2(e2)) to3.call(e2, t) && Ye3(r3, t, e2[t]);
  return r3;
};
var y4 = (r3, e2, t) => Ye3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Si2 = class extends d2 {
  constructor(e2) {
    super(e2), y4(this, "protocol", "wc"), y4(this, "version", 2), y4(this, "core"), y4(this, "logger"), y4(this, "events", new import_events7.EventEmitter()), y4(this, "provider"), y4(this, "messages"), y4(this, "subscriber"), y4(this, "publisher"), y4(this, "name", $t3), y4(this, "transportExplicitlyClosed", false), y4(this, "initialized", false), y4(this, "connectionAttemptInProgress", false), y4(this, "relayUrl"), y4(this, "projectId"), y4(this, "packageName"), y4(this, "bundleId"), y4(this, "hasExperiencedNetworkDisruption", false), y4(this, "pingTimeout"), y4(this, "heartBeatTimeout", (0, import_time4.toMiliseconds)(import_time4.THIRTY_SECONDS + import_time4.FIVE_SECONDS)), y4(this, "reconnectTimeout"), y4(this, "connectPromise"), y4(this, "reconnectInProgress", false), y4(this, "requestsInFlight", []), y4(this, "connectTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND * 15)), y4(this, "request", async (t) => {
      var i4, s3;
      this.logger.debug("Publishing Request Payload");
      const n5 = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: n5, method: t.method, topic: (i4 = t.params) == null ? void 0 : i4.topic }, "relayer.request - publishing...");
        const o4 = `${n5}:${((s3 = t.params) == null ? void 0 : s3.tag) || ""}`;
        this.requestsInFlight.push(o4);
        const a3 = await this.provider.request(t);
        return this.requestsInFlight = this.requestsInFlight.filter((c6) => c6 !== o4), a3;
      } catch (o4) {
        throw this.logger.debug(`Failed to Publish Request: ${n5}`), o4;
      }
    }), y4(this, "resetPingTimeout", () => {
      Re2() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var t, i4, s3, n5;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n5 = (s3 = (i4 = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i4.socket) == null ? void 0 : s3.terminate) == null || n5.call(s3);
        } catch (o4) {
          this.logger.warn(o4, o4 == null ? void 0 : o4.message);
        }
      }, this.heartBeatTimeout));
    }), y4(this, "onPayloadHandler", (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }), y4(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(C3.connect);
    }), y4(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), y4(this, "onProviderErrorHandler", (t) => {
      this.logger.fatal(`Fatal socket error: ${t.message}`), this.events.emit(C3.error, t), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), y4(this, "registerProviderListeners", () => {
      this.provider.on(L2.payload, this.onPayloadHandler), this.provider.on(L2.connect, this.onConnectHandler), this.provider.on(L2.disconnect, this.onDisconnectHandler), this.provider.on(L2.error, this.onProviderErrorHandler);
    }), this.core = e2.core, this.logger = typeof e2.logger < "u" && typeof e2.logger != "string" ? E(e2.logger, this.name) : (0, import_pino2.default)(k2({ level: e2.logger || Nt3 })), this.messages = new _i2(this.logger, e2.core), this.subscriber = new Ti2(this, this.logger), this.publisher = new Vn3(this, this.logger), this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || Ue2, this.projectId = e2.projectId, ei() ? this.packageName = ri() : ni() && (this.bundleId = ri()), this.provider = {};
  }
  async init() {
    if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.subscriber.hasAnyTopics) try {
      await this.transportOpen();
    } catch (e2) {
      this.logger.warn(e2, e2 == null ? void 0 : e2.message);
    }
  }
  get context() {
    return y(this.logger);
  }
  get connected() {
    var e2, t, i4;
    return ((i4 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i4.readyState) === 1 || false;
  }
  get connecting() {
    var e2, t, i4;
    return ((i4 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i4.readyState) === 0 || this.connectPromise !== void 0 || false;
  }
  async publish(e2, t, i4) {
    this.isInitialized(), await this.publisher.publish(e2, t, i4), await this.recordMessageEvent({ topic: e2, message: t, publishedAt: Date.now(), transportType: Q2.relay }, le3.outbound);
  }
  async subscribe(e2, t) {
    var i4, s3, n5;
    this.isInitialized(), (!(t != null && t.transportType) || (t == null ? void 0 : t.transportType) === "relay") && await this.toEstablishConnection();
    const o4 = typeof ((i4 = t == null ? void 0 : t.internal) == null ? void 0 : i4.throwOnFailedPublish) > "u" ? true : (s3 = t == null ? void 0 : t.internal) == null ? void 0 : s3.throwOnFailedPublish;
    let a3 = ((n5 = this.subscriber.topicMap.get(e2)) == null ? void 0 : n5[0]) || "", c6;
    const h5 = (l6) => {
      l6.topic === e2 && (this.subscriber.off($.created, h5), c6());
    };
    return await Promise.all([new Promise((l6) => {
      c6 = l6, this.subscriber.on($.created, h5);
    }), new Promise(async (l6, d4) => {
      a3 = await this.subscriber.subscribe(e2, Pi3({ internal: { throwOnFailedPublish: o4 } }, t)).catch((g3) => {
        o4 && d4(g3);
      }) || a3, l6();
    })]), a3;
  }
  async unsubscribe(e2, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e2, t);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await yi(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e2) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, i4) => {
      await this.connect(e2).then(t).catch(i4).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e2) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e2 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Ia()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e2) {
    if ((e2 == null ? void 0 : e2.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e2.sort((i4, s3) => i4.publishedAt - s3.publishedAt);
    this.logger.debug(`Batch of ${t.length} message events sorted`);
    for (const i4 of t) try {
      await this.onMessageEvent(i4);
    } catch (s3) {
      this.logger.warn(s3, "Error while processing batch message event: " + (s3 == null ? void 0 : s3.message));
    }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  async onLinkMessageEvent(e2, t) {
    const { topic: i4 } = e2;
    if (!t.sessionExists) {
      const s3 = Ei(import_time4.FIVE_MINUTES), n5 = { topic: i4, expiry: s3, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(i4, n5);
    }
    this.events.emit(C3.message, e2), await this.recordMessageEvent(e2, le3.inbound);
  }
  async connect(e2) {
    await this.confirmOnlineStateOrThrow(), e2 && e2 !== this.relayUrl && (this.relayUrl = e2, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    let t = 1;
    for (; t < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (i4, s3) => {
          const n5 = () => {
            s3(new Error("Connection interrupted while trying to subscribe"));
          };
          this.provider.once(L2.disconnect, n5), await yi(new Promise((o4, a3) => {
            this.provider.connect().then(o4).catch(a3);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o4) => {
            s3(o4);
          }).finally(() => {
            this.provider.off(L2.disconnect, n5), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o4, a3) => {
            const c6 = () => {
              a3(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(L2.disconnect, c6), await this.subscriber.start().then(o4).catch(a3).finally(() => {
              this.provider.off(L2.disconnect, c6);
            });
          }), this.hasExperiencedNetworkDisruption = false, i4();
        });
      } catch (i4) {
        await this.subscriber.stop();
        const s3 = i4;
        this.logger.warn({}, s3.message), this.hasExperiencedNetworkDisruption = true;
      } finally {
        this.connectionAttemptInProgress = false;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
        break;
      }
      await new Promise((i4) => setTimeout(i4, (0, import_time4.toMiliseconds)(t * 1))), t++;
    }
  }
  startPingTimeout() {
    var e2, t, i4, s3, n5;
    if (Re2()) try {
      (t = (e2 = this.provider) == null ? void 0 : e2.connection) != null && t.socket && ((n5 = (s3 = (i4 = this.provider) == null ? void 0 : i4.connection) == null ? void 0 : s3.socket) == null || n5.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o4) {
      this.logger.warn(o4, o4 == null ? void 0 : o4.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e2 = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o2(new f4(si({ sdkVersion: _e3, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e2, useOnCloseEvent: true, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e2, t) {
    const { topic: i4, message: s3 } = e2;
    await this.messages.set(i4, s3, t);
  }
  async shouldIgnoreMessageEvent(e2) {
    const { topic: t, message: i4 } = e2;
    if (!i4 || i4.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i4}`), true;
    if (!await this.subscriber.isKnownTopic(t)) return this.logger.warn(`Ignoring message for unknown topic ${t}`), true;
    const s3 = this.messages.has(t, i4);
    return s3 && this.logger.warn(`Ignoring duplicate message: ${i4}`), s3;
  }
  async onProviderPayload(e2) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e2 }), isJsonRpcRequest(e2)) {
      if (!e2.method.endsWith(zt2)) return;
      const t = e2.params, { topic: i4, message: s3, publishedAt: n5, attestation: o4 } = t.data, a3 = { topic: i4, message: s3, publishedAt: n5, transportType: Q2.relay, attestation: o4 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Pi3({ type: "event", event: t.id }, a3)), this.events.emit(t.id, a3), await this.acknowledgePayload(e2), await this.onMessageEvent(a3);
    } else isJsonRpcResponse(e2) && this.events.emit(C3.message_ack, e2);
  }
  async onMessageEvent(e2) {
    await this.shouldIgnoreMessageEvent(e2) || (await this.recordMessageEvent(e2, le3.inbound), this.events.emit(C3.message, e2));
  }
  async acknowledgePayload(e2) {
    const t = formatJsonRpcResult(e2.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(L2.payload, this.onPayloadHandler), this.provider.off(L2.connect, this.onConnectHandler), this.provider.off(L2.disconnect, this.onDisconnectHandler), this.provider.off(L2.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e2 = await Ia();
    Na(async (t) => {
      e2 !== t && (e2 = t, t ? await this.transportOpen().catch((i4) => this.logger.error(i4, i4 == null ? void 0 : i4.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(C3.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e2) => this.logger.error(e2, e2 == null ? void 0 : e2.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
    }, (0, import_time4.toMiliseconds)(Lt3)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectPromise) {
        await this.connectPromise;
        return;
      }
      await this.connect();
    }
  }
};
function io3() {
}
function Ri2(r3) {
  if (!r3 || typeof r3 != "object") return false;
  const e2 = Object.getPrototypeOf(r3);
  return e2 === null || e2 === Object.prototype || Object.getPrototypeOf(e2) === null ? Object.prototype.toString.call(r3) === "[object Object]" : false;
}
function Oi2(r3) {
  return Object.getOwnPropertySymbols(r3).filter((e2) => Object.prototype.propertyIsEnumerable.call(r3, e2));
}
function Ai2(r3) {
  return r3 == null ? r3 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r3);
}
var so3 = "[object RegExp]";
var ro3 = "[object String]";
var no3 = "[object Number]";
var oo3 = "[object Boolean]";
var xi2 = "[object Arguments]";
var ao3 = "[object Symbol]";
var co3 = "[object Date]";
var ho3 = "[object Map]";
var lo2 = "[object Set]";
var uo3 = "[object Array]";
var go3 = "[object Function]";
var po3 = "[object ArrayBuffer]";
var Je3 = "[object Object]";
var yo3 = "[object Error]";
var bo3 = "[object DataView]";
var mo3 = "[object Uint8Array]";
var fo2 = "[object Uint8ClampedArray]";
var Do2 = "[object Uint16Array]";
var vo3 = "[object Uint32Array]";
var wo3 = "[object BigUint64Array]";
var _o3 = "[object Int8Array]";
var Eo3 = "[object Int16Array]";
var Io3 = "[object Int32Array]";
var To3 = "[object BigInt64Array]";
var Co3 = "[object Float32Array]";
var Po3 = "[object Float64Array]";
function So3(r3, e2) {
  return r3 === e2 || Number.isNaN(r3) && Number.isNaN(e2);
}
function Ro3(r3, e2, t) {
  return pe3(r3, e2, void 0, void 0, void 0, void 0, t);
}
function pe3(r3, e2, t, i4, s3, n5, o4) {
  const a3 = o4(r3, e2, t, i4, s3, n5);
  if (a3 !== void 0) return a3;
  if (typeof r3 == typeof e2) switch (typeof r3) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return r3 === e2;
    case "number":
      return r3 === e2 || Object.is(r3, e2);
    case "function":
      return r3 === e2;
    case "object":
      return ye3(r3, e2, n5, o4);
  }
  return ye3(r3, e2, n5, o4);
}
function ye3(r3, e2, t, i4) {
  if (Object.is(r3, e2)) return true;
  let s3 = Ai2(r3), n5 = Ai2(e2);
  if (s3 === xi2 && (s3 = Je3), n5 === xi2 && (n5 = Je3), s3 !== n5) return false;
  switch (s3) {
    case ro3:
      return r3.toString() === e2.toString();
    case no3: {
      const c6 = r3.valueOf(), h5 = e2.valueOf();
      return So3(c6, h5);
    }
    case oo3:
    case co3:
    case ao3:
      return Object.is(r3.valueOf(), e2.valueOf());
    case so3:
      return r3.source === e2.source && r3.flags === e2.flags;
    case go3:
      return r3 === e2;
  }
  t = t ?? /* @__PURE__ */ new Map();
  const o4 = t.get(r3), a3 = t.get(e2);
  if (o4 != null && a3 != null) return o4 === e2;
  t.set(r3, e2), t.set(e2, r3);
  try {
    switch (s3) {
      case ho3: {
        if (r3.size !== e2.size) return false;
        for (const [c6, h5] of r3.entries()) if (!e2.has(c6) || !pe3(h5, e2.get(c6), c6, r3, e2, t, i4)) return false;
        return true;
      }
      case lo2: {
        if (r3.size !== e2.size) return false;
        const c6 = Array.from(r3.values()), h5 = Array.from(e2.values());
        for (let l6 = 0; l6 < c6.length; l6++) {
          const d4 = c6[l6], g3 = h5.findIndex((_3) => pe3(d4, _3, void 0, r3, e2, t, i4));
          if (g3 === -1) return false;
          h5.splice(g3, 1);
        }
        return true;
      }
      case uo3:
      case mo3:
      case fo2:
      case Do2:
      case vo3:
      case wo3:
      case _o3:
      case Eo3:
      case Io3:
      case To3:
      case Co3:
      case Po3: {
        if (typeof Buffer < "u" && Buffer.isBuffer(r3) !== Buffer.isBuffer(e2) || r3.length !== e2.length) return false;
        for (let c6 = 0; c6 < r3.length; c6++) if (!pe3(r3[c6], e2[c6], c6, r3, e2, t, i4)) return false;
        return true;
      }
      case po3:
        return r3.byteLength !== e2.byteLength ? false : ye3(new Uint8Array(r3), new Uint8Array(e2), t, i4);
      case bo3:
        return r3.byteLength !== e2.byteLength || r3.byteOffset !== e2.byteOffset ? false : ye3(new Uint8Array(r3), new Uint8Array(e2), t, i4);
      case yo3:
        return r3.name === e2.name && r3.message === e2.message;
      case Je3: {
        if (!(ye3(r3.constructor, e2.constructor, t, i4) || Ri2(r3) && Ri2(e2))) return false;
        const h5 = [...Object.keys(r3), ...Oi2(r3)], l6 = [...Object.keys(e2), ...Oi2(e2)];
        if (h5.length !== l6.length) return false;
        for (let d4 = 0; d4 < h5.length; d4++) {
          const g3 = h5[d4], _3 = r3[g3];
          if (!Object.hasOwn(e2, g3)) return false;
          const u2 = e2[g3];
          if (!pe3(_3, u2, g3, r3, e2, t, i4)) return false;
        }
        return true;
      }
      default:
        return false;
    }
  } finally {
    t.delete(r3), t.delete(e2);
  }
}
function Oo3(r3, e2) {
  return Ro3(r3, e2, io3);
}
var Ao3 = Object.defineProperty;
var Ni2 = Object.getOwnPropertySymbols;
var xo3 = Object.prototype.hasOwnProperty;
var No3 = Object.prototype.propertyIsEnumerable;
var Xe3 = (r3, e2, t) => e2 in r3 ? Ao3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var $i2 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) xo3.call(e2, t) && Xe3(r3, t, e2[t]);
  if (Ni2) for (var t of Ni2(e2)) No3.call(e2, t) && Xe3(r3, t, e2[t]);
  return r3;
};
var z3 = (r3, e2, t) => Xe3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var zi2 = class extends f3 {
  constructor(e2, t, i4, s3 = B2, n5 = void 0) {
    super(e2, t, i4, s3), this.core = e2, this.logger = t, this.name = i4, z3(this, "map", /* @__PURE__ */ new Map()), z3(this, "version", kt3), z3(this, "cached", []), z3(this, "initialized", false), z3(this, "getKey"), z3(this, "storagePrefix", B2), z3(this, "recentlyDeleted", []), z3(this, "recentlyDeletedLimit", 200), z3(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o4) => {
        this.getKey && o4 !== null && !Et2(o4) ? this.map.set(this.getKey(o4), o4) : fa(o4) ? this.map.set(o4.id, o4) : la(o4) && this.map.set(o4.topic, o4);
      }), this.cached = [], this.initialized = true);
    }), z3(this, "set", async (o4, a3) => {
      this.isInitialized(), this.map.has(o4) ? await this.update(o4, a3) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o4, value: a3 }), this.map.set(o4, a3), await this.persist());
    }), z3(this, "get", (o4) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o4 }), this.getData(o4))), z3(this, "getAll", (o4) => (this.isInitialized(), o4 ? this.values.filter((a3) => Object.keys(o4).every((c6) => Oo3(a3[c6], o4[c6]))) : this.values)), z3(this, "update", async (o4, a3) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o4, update: a3 });
      const c6 = $i2($i2({}, this.getData(o4)), a3);
      this.map.set(o4, c6), await this.persist();
    }), z3(this, "delete", async (o4, a3) => {
      this.isInitialized(), this.map.has(o4) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o4, reason: a3 }), this.map.delete(o4), this.addToRecentlyDeleted(o4), await this.persist());
    }), this.logger = E(t, this.name), this.storagePrefix = s3, this.getKey = n5;
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e2) {
    this.recentlyDeleted.push(e2), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e2) {
    const t = this.map.get(e2);
    if (!t) {
      if (this.recentlyDeleted.includes(e2)) {
        const { message: s3 } = ht2("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e2}`);
        throw this.logger.error(s3), new Error(s3);
      }
      const { message: i4 } = ht2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.error(i4), new Error(i4);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e2 = await this.getDataStore();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.map.size) {
        const { message: t } = ht2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var $o3 = Object.defineProperty;
var zo2 = (r3, e2, t) => e2 in r3 ? $o3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var p3 = (r3, e2, t) => zo2(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Li2 = class {
  constructor(e2, t) {
    this.core = e2, this.logger = t, p3(this, "name", Mt3), p3(this, "version", Kt3), p3(this, "events", new import_events7.default()), p3(this, "pairings"), p3(this, "initialized", false), p3(this, "storagePrefix", B2), p3(this, "ignoredPayloadTypes", [Kt2]), p3(this, "registeredMethods", []), p3(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }), p3(this, "register", ({ methods: i4 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i4])];
    }), p3(this, "create", async (i4) => {
      this.isInitialized();
      const s3 = jc(), n5 = await this.core.crypto.setSymKey(s3), o4 = Ei(import_time4.FIVE_MINUTES), a3 = { protocol: xt3 }, c6 = { topic: n5, expiry: o4, relay: a3, active: false, methods: i4 == null ? void 0 : i4.methods }, h5 = Wc({ protocol: this.core.protocol, version: this.core.version, topic: n5, symKey: s3, relay: a3, expiryTimestamp: o4, methods: i4 == null ? void 0 : i4.methods });
      return this.events.emit(se2.create, c6), this.core.expirer.set(n5, o4), await this.pairings.set(n5, c6), await this.core.relayer.subscribe(n5, { transportType: i4 == null ? void 0 : i4.transportType }), { topic: n5, uri: h5 };
    }), p3(this, "pair", async (i4) => {
      this.isInitialized();
      const s3 = this.core.eventClient.createEvent({ properties: { topic: i4 == null ? void 0 : i4.uri, trace: [G3.pairing_started] } });
      this.isValidPair(i4, s3);
      const { topic: n5, symKey: o4, relay: a3, expiryTimestamp: c6, methods: h5 } = Gc(i4.uri);
      s3.props.properties.topic = n5, s3.addTrace(G3.pairing_uri_validation_success), s3.addTrace(G3.pairing_uri_not_expired);
      let l6;
      if (this.pairings.keys.includes(n5)) {
        if (l6 = this.pairings.get(n5), s3.addTrace(G3.existing_pairing), l6.active) throw s3.setError(Y2.active_pairing_already_exists), new Error(`Pairing already exists: ${n5}. Please try again with a new connection URI.`);
        s3.addTrace(G3.pairing_not_expired);
      }
      const d4 = c6 || Ei(import_time4.FIVE_MINUTES), g3 = { topic: n5, relay: a3, expiry: d4, active: false, methods: h5 };
      this.core.expirer.set(n5, d4), await this.pairings.set(n5, g3), s3.addTrace(G3.store_new_pairing), i4.activatePairing && await this.activate({ topic: n5 }), this.events.emit(se2.create, g3), s3.addTrace(G3.emit_inactive_pairing), this.core.crypto.keychain.has(n5) || await this.core.crypto.setSymKey(o4, n5), s3.addTrace(G3.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        s3.setError(Y2.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n5, { relay: a3 });
      } catch (_3) {
        throw s3.setError(Y2.subscribe_pairing_topic_failure), _3;
      }
      return s3.addTrace(G3.subscribe_pairing_topic_success), g3;
    }), p3(this, "activate", async ({ topic: i4 }) => {
      this.isInitialized();
      const s3 = Ei(import_time4.FIVE_MINUTES);
      this.core.expirer.set(i4, s3), await this.pairings.update(i4, { active: true, expiry: s3 });
    }), p3(this, "ping", async (i4) => {
      this.isInitialized(), await this.isValidPing(i4), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: s3 } = i4;
      if (this.pairings.keys.includes(s3)) {
        const n5 = await this.sendRequest(s3, "wc_pairingPing", {}), { done: o4, resolve: a3, reject: c6 } = gi();
        this.events.once(xi("pairing_ping", n5), ({ error: h5 }) => {
          h5 ? c6(h5) : a3();
        }), await o4();
      }
    }), p3(this, "updateExpiry", async ({ topic: i4, expiry: s3 }) => {
      this.isInitialized(), await this.pairings.update(i4, { expiry: s3 });
    }), p3(this, "updateMetadata", async ({ topic: i4, metadata: s3 }) => {
      this.isInitialized(), await this.pairings.update(i4, { peerMetadata: s3 });
    }), p3(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), p3(this, "disconnect", async (i4) => {
      this.isInitialized(), await this.isValidDisconnect(i4);
      const { topic: s3 } = i4;
      this.pairings.keys.includes(s3) && (await this.sendRequest(s3, "wc_pairingDelete", Nt2("USER_DISCONNECTED")), await this.deletePairing(s3));
    }), p3(this, "formatUriFromPairing", (i4) => {
      this.isInitialized();
      const { topic: s3, relay: n5, expiry: o4, methods: a3 } = i4, c6 = this.core.crypto.keychain.get(s3);
      return Wc({ protocol: this.core.protocol, version: this.core.version, topic: s3, symKey: c6, relay: n5, expiryTimestamp: o4, methods: a3 });
    }), p3(this, "sendRequest", async (i4, s3, n5) => {
      const o4 = formatJsonRpcRequest(s3, n5), a3 = await this.core.crypto.encode(i4, o4), c6 = ie2[s3].req;
      return this.core.history.set(i4, o4), this.core.relayer.publish(i4, a3, c6), o4.id;
    }), p3(this, "sendResult", async (i4, s3, n5) => {
      const o4 = formatJsonRpcResult(i4, n5), a3 = await this.core.crypto.encode(s3, o4), c6 = (await this.core.history.get(s3, i4)).request.method, h5 = ie2[c6].res;
      await this.core.relayer.publish(s3, a3, h5), await this.core.history.resolve(o4);
    }), p3(this, "sendError", async (i4, s3, n5) => {
      const o4 = formatJsonRpcError(i4, n5), a3 = await this.core.crypto.encode(s3, o4), c6 = (await this.core.history.get(s3, i4)).request.method, h5 = ie2[c6] ? ie2[c6].res : ie2.unregistered_method.res;
      await this.core.relayer.publish(s3, a3, h5), await this.core.history.resolve(o4);
    }), p3(this, "deletePairing", async (i4, s3) => {
      await this.core.relayer.unsubscribe(i4), await Promise.all([this.pairings.delete(i4, Nt2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i4), s3 ? Promise.resolve() : this.core.expirer.del(i4)]);
    }), p3(this, "cleanup", async () => {
      const i4 = this.pairings.getAll().filter((s3) => vi(s3.expiry));
      await Promise.all(i4.map((s3) => this.deletePairing(s3.topic)));
    }), p3(this, "onRelayEventRequest", async (i4) => {
      const { topic: s3, payload: n5 } = i4;
      switch (n5.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(s3, n5);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(s3, n5);
        default:
          return await this.onUnknownRpcMethodRequest(s3, n5);
      }
    }), p3(this, "onRelayEventResponse", async (i4) => {
      const { topic: s3, payload: n5 } = i4, o4 = (await this.core.history.get(s3, n5.id)).request.method;
      switch (o4) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s3, n5);
        default:
          return this.onUnknownRpcMethodResponse(o4);
      }
    }), p3(this, "onPairingPingRequest", async (i4, s3) => {
      const { id: n5 } = s3;
      try {
        this.isValidPing({ topic: i4 }), await this.sendResult(n5, i4, true), this.events.emit(se2.ping, { id: n5, topic: i4 });
      } catch (o4) {
        await this.sendError(n5, i4, o4), this.logger.error(o4);
      }
    }), p3(this, "onPairingPingResponse", (i4, s3) => {
      const { id: n5 } = s3;
      setTimeout(() => {
        isJsonRpcResult(s3) ? this.events.emit(xi("pairing_ping", n5), {}) : isJsonRpcError(s3) && this.events.emit(xi("pairing_ping", n5), { error: s3.error });
      }, 500);
    }), p3(this, "onPairingDeleteRequest", async (i4, s3) => {
      const { id: n5 } = s3;
      try {
        this.isValidDisconnect({ topic: i4 }), await this.deletePairing(i4), this.events.emit(se2.delete, { id: n5, topic: i4 });
      } catch (o4) {
        await this.sendError(n5, i4, o4), this.logger.error(o4);
      }
    }), p3(this, "onUnknownRpcMethodRequest", async (i4, s3) => {
      const { id: n5, method: o4 } = s3;
      try {
        if (this.registeredMethods.includes(o4)) return;
        const a3 = Nt2("WC_METHOD_UNSUPPORTED", o4);
        await this.sendError(n5, i4, a3), this.logger.error(a3);
      } catch (a3) {
        await this.sendError(n5, i4, a3), this.logger.error(a3);
      }
    }), p3(this, "onUnknownRpcMethodResponse", (i4) => {
      this.registeredMethods.includes(i4) || this.logger.error(Nt2("WC_METHOD_UNSUPPORTED", i4));
    }), p3(this, "isValidPair", (i4, s3) => {
      var n5;
      if (!ya(i4)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", `pair() params: ${i4}`);
        throw s3.setError(Y2.malformed_pairing_uri), new Error(a3);
      }
      if (!ua(i4.uri)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", `pair() uri: ${i4.uri}`);
        throw s3.setError(Y2.malformed_pairing_uri), new Error(a3);
      }
      const o4 = Gc(i4 == null ? void 0 : i4.uri);
      if (!((n5 = o4 == null ? void 0 : o4.relay) != null && n5.protocol)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw s3.setError(Y2.malformed_pairing_uri), new Error(a3);
      }
      if (!(o4 != null && o4.symKey)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", "pair() uri#symKey");
        throw s3.setError(Y2.malformed_pairing_uri), new Error(a3);
      }
      if (o4 != null && o4.expiryTimestamp && (0, import_time4.toMiliseconds)(o4 == null ? void 0 : o4.expiryTimestamp) < Date.now()) {
        s3.setError(Y2.pairing_expired);
        const { message: a3 } = ht2("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a3);
      }
    }), p3(this, "isValidPing", async (i4) => {
      if (!ya(i4)) {
        const { message: n5 } = ht2("MISSING_OR_INVALID", `ping() params: ${i4}`);
        throw new Error(n5);
      }
      const { topic: s3 } = i4;
      await this.isValidPairingTopic(s3);
    }), p3(this, "isValidDisconnect", async (i4) => {
      if (!ya(i4)) {
        const { message: n5 } = ht2("MISSING_OR_INVALID", `disconnect() params: ${i4}`);
        throw new Error(n5);
      }
      const { topic: s3 } = i4;
      await this.isValidPairingTopic(s3);
    }), p3(this, "isValidPairingTopic", async (i4) => {
      if (!nt2(i4, false)) {
        const { message: s3 } = ht2("MISSING_OR_INVALID", `pairing topic should be a string: ${i4}`);
        throw new Error(s3);
      }
      if (!this.pairings.keys.includes(i4)) {
        const { message: s3 } = ht2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i4}`);
        throw new Error(s3);
      }
      if (vi(this.pairings.get(i4).expiry)) {
        await this.deletePairing(i4);
        const { message: s3 } = ht2("EXPIRED", `pairing topic: ${i4}`);
        throw new Error(s3);
      }
    }), this.core = e2, this.logger = E(t, this.name), this.pairings = new zi2(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(C3.message, async (e2) => {
      const { topic: t, message: i4, transportType: s3 } = e2;
      if (this.pairings.keys.includes(t) && s3 !== Q2.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i4))) try {
        const n5 = await this.core.crypto.decode(t, i4);
        isJsonRpcRequest(n5) ? (this.core.history.set(t, n5), await this.onRelayEventRequest({ topic: t, payload: n5 })) : isJsonRpcResponse(n5) && (await this.core.history.resolve(n5), await this.onRelayEventResponse({ topic: t, payload: n5 }), this.core.history.delete(t, n5.id)), await this.core.relayer.messages.ack(t, i4);
      } catch (n5) {
        this.logger.error(n5);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(M3.expired, async (e2) => {
      const { topic: t } = bi(e2.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(se2.expire, { topic: t }));
    });
  }
};
var Lo3 = Object.defineProperty;
var ko2 = (r3, e2, t) => e2 in r3 ? Lo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var R2 = (r3, e2, t) => ko2(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var ki2 = class extends I2 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, R2(this, "records", /* @__PURE__ */ new Map()), R2(this, "events", new import_events7.EventEmitter()), R2(this, "name", Bt3), R2(this, "version", Vt3), R2(this, "cached", []), R2(this, "initialized", false), R2(this, "storagePrefix", B2), R2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i4) => this.records.set(i4.id, i4)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), R2(this, "set", (i4, s3, n5) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i4, request: s3, chainId: n5 }), this.records.has(s3.id)) return;
      const o4 = { id: s3.id, topic: i4, request: { method: s3.method, params: s3.params || null }, chainId: n5, expiry: Ei(import_time4.THIRTY_DAYS) };
      this.records.set(o4.id, o4), this.persist(), this.events.emit(F2.created, o4);
    }), R2(this, "resolve", async (i4) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i4 }), !this.records.has(i4.id)) return;
      const s3 = await this.getRecord(i4.id);
      typeof s3.response > "u" && (s3.response = isJsonRpcError(i4) ? { error: i4.error } : { result: i4.result }, this.records.set(s3.id, s3), this.persist(), this.events.emit(F2.updated, s3));
    }), R2(this, "get", async (i4, s3) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i4, id: s3 }), await this.getRecord(s3))), R2(this, "delete", (i4, s3) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s3 }), this.values.forEach((n5) => {
        if (n5.topic === i4) {
          if (typeof s3 < "u" && n5.id !== s3) return;
          this.records.delete(n5.id), this.events.emit(F2.deleted, n5);
        }
      }), this.persist();
    }), R2(this, "exists", async (i4, s3) => (this.isInitialized(), this.records.has(s3) ? (await this.getRecord(s3)).topic === i4 : false)), R2(this, "on", (i4, s3) => {
      this.events.on(i4, s3);
    }), R2(this, "once", (i4, s3) => {
      this.events.once(i4, s3);
    }), R2(this, "off", (i4, s3) => {
      this.events.off(i4, s3);
    }), R2(this, "removeListener", (i4, s3) => {
      this.events.removeListener(i4, s3);
    }), this.logger = E(t, this.name);
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e2 = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u") return;
      const i4 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e2.push(i4);
    }), e2;
  }
  async setJsonRpcRecords(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e2) {
    this.isInitialized();
    const t = this.records.get(e2);
    if (!t) {
      const { message: i4 } = ht2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i4);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(F2.sync);
  }
  async restore() {
    try {
      const e2 = await this.getJsonRpcRecords();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.records.size) {
        const { message: t } = ht2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e2);
    }
  }
  registerEventListeners() {
    this.events.on(F2.created, (e2) => {
      const t = F2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(F2.updated, (e2) => {
      const t = F2.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(F2.deleted, (e2) => {
      const t = F2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.core.heartbeat.on(r2.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e2 = false;
      this.records.forEach((t) => {
        (0, import_time4.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(F2.deleted, t, false), e2 = true);
      }), e2 && this.persist();
    } catch (e2) {
      this.logger.warn(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var jo2 = Object.defineProperty;
var Uo3 = (r3, e2, t) => e2 in r3 ? jo2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var A2 = (r3, e2, t) => Uo3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var ji2 = class extends S2 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, A2(this, "expirations", /* @__PURE__ */ new Map()), A2(this, "events", new import_events7.EventEmitter()), A2(this, "name", qt3), A2(this, "version", Gt3), A2(this, "cached", []), A2(this, "initialized", false), A2(this, "storagePrefix", B2), A2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i4) => this.expirations.set(i4.target, i4)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), A2(this, "has", (i4) => {
      try {
        const s3 = this.formatTarget(i4);
        return typeof this.getExpiration(s3) < "u";
      } catch {
        return false;
      }
    }), A2(this, "set", (i4, s3) => {
      this.isInitialized();
      const n5 = this.formatTarget(i4), o4 = { target: n5, expiry: s3 };
      this.expirations.set(n5, o4), this.checkExpiry(n5, o4), this.events.emit(M3.created, { target: n5, expiration: o4 });
    }), A2(this, "get", (i4) => {
      this.isInitialized();
      const s3 = this.formatTarget(i4);
      return this.getExpiration(s3);
    }), A2(this, "del", (i4) => {
      if (this.isInitialized(), this.has(i4)) {
        const s3 = this.formatTarget(i4), n5 = this.getExpiration(s3);
        this.expirations.delete(s3), this.events.emit(M3.deleted, { target: s3, expiration: n5 });
      }
    }), A2(this, "on", (i4, s3) => {
      this.events.on(i4, s3);
    }), A2(this, "once", (i4, s3) => {
      this.events.once(i4, s3);
    }), A2(this, "off", (i4, s3) => {
      this.events.off(i4, s3);
    }), A2(this, "removeListener", (i4, s3) => {
      this.events.removeListener(i4, s3);
    }), this.logger = E(t, this.name);
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e2) {
    if (typeof e2 == "string") return mi(e2);
    if (typeof e2 == "number") return wi(e2);
    const { message: t } = ht2("UNKNOWN_TYPE", `Target type: ${typeof e2}`);
    throw new Error(t);
  }
  async setExpirations(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(M3.sync);
  }
  async restore() {
    try {
      const e2 = await this.getExpirations();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.expirations.size) {
        const { message: t } = ht2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e2);
    }
  }
  getExpiration(e2) {
    const t = this.expirations.get(e2);
    if (!t) {
      const { message: i4 } = ht2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.warn(i4), new Error(i4);
    }
    return t;
  }
  checkExpiry(e2, t) {
    const { expiry: i4 } = t;
    (0, import_time4.toMiliseconds)(i4) - Date.now() <= 0 && this.expire(e2, t);
  }
  expire(e2, t) {
    this.expirations.delete(e2), this.events.emit(M3.expired, { target: e2, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e2, t) => this.checkExpiry(t, e2));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r2.pulse, () => this.checkExpirations()), this.events.on(M3.created, (e2) => {
      const t = M3.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(M3.expired, (e2) => {
      const t = M3.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(M3.deleted, (e2) => {
      const t = M3.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Fo2 = Object.defineProperty;
var Mo2 = (r3, e2, t) => e2 in r3 ? Fo2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var w3 = (r3, e2, t) => Mo2(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Ui2 = class extends M2 {
  constructor(e2, t, i4) {
    super(e2, t, i4), this.core = e2, this.logger = t, this.store = i4, w3(this, "name", Wt3), w3(this, "abortController"), w3(this, "isDevEnv"), w3(this, "verifyUrlV3", Yt3), w3(this, "storagePrefix", B2), w3(this, "version", Le3), w3(this, "publicKey"), w3(this, "fetchPromise"), w3(this, "init", async () => {
      var s3;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, import_time4.toMiliseconds)((s3 = this.publicKey) == null ? void 0 : s3.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), w3(this, "register", async (s3) => {
      if (!Yt2() || this.isDevEnv) return;
      const n5 = window.location.origin, { id: o4, decryptedId: a3 } = s3, c6 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n5}&id=${o4}&decryptedId=${a3}`;
      try {
        const h5 = (0, import_window_getters2.getDocument)(), l6 = this.startAbortTimer(import_time4.ONE_SECOND * 5), d4 = await new Promise((g3, _3) => {
          const u2 = () => {
            window.removeEventListener("message", x4), h5.body.removeChild(b5), _3("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", u2);
          const b5 = h5.createElement("iframe");
          b5.src = c6, b5.style.display = "none", b5.addEventListener("error", u2, { signal: this.abortController.signal });
          const x4 = (I3) => {
            if (I3.data && typeof I3.data == "string") try {
              const D2 = JSON.parse(I3.data);
              if (D2.type === "verify_attestation") {
                if (sn(D2.attestation).payload.id !== o4) return;
                clearInterval(l6), h5.body.removeChild(b5), this.abortController.signal.removeEventListener("abort", u2), window.removeEventListener("message", x4), g3(D2.attestation === null ? "" : D2.attestation);
              }
            } catch (D2) {
              this.logger.warn(D2);
            }
          };
          h5.body.appendChild(b5), window.addEventListener("message", x4, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", d4), d4;
      } catch (h5) {
        this.logger.warn(h5);
      }
      return "";
    }), w3(this, "resolve", async (s3) => {
      if (this.isDevEnv) return "";
      const { attestationId: n5, hash: o4, encryptedId: a3 } = s3;
      if (n5 === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n5) {
        if (sn(n5).payload.id !== a3) return;
        const h5 = await this.isValidJwtAttestation(n5);
        if (h5) {
          if (!h5.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h5;
        }
      }
      if (!o4) return;
      const c6 = this.getVerifyUrl(s3 == null ? void 0 : s3.verifyUrl);
      return this.fetchAttestation(o4, c6);
    }), w3(this, "fetchAttestation", async (s3, n5) => {
      this.logger.debug(`resolving attestation: ${s3} from url: ${n5}`);
      const o4 = this.startAbortTimer(import_time4.ONE_SECOND * 5), a3 = await fetch(`${n5}/attestation/${s3}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o4), a3.status === 200 ? await a3.json() : void 0;
    }), w3(this, "getVerifyUrl", (s3) => {
      let n5 = s3 || ue2;
      return Jt3.includes(n5) || (this.logger.info(`verify url: ${n5}, not included in trusted list, assigning default: ${ue2}`), n5 = ue2), n5;
    }), w3(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const s3 = this.startAbortTimer(import_time4.FIVE_SECONDS), n5 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(s3), await n5.json();
      } catch (s3) {
        this.logger.warn(s3);
      }
    }), w3(this, "persistPublicKey", async (s3) => {
      this.logger.debug("persisting public key to local storage", s3), await this.store.setItem(this.storeKey, s3), this.publicKey = s3;
    }), w3(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), w3(this, "isValidJwtAttestation", async (s3) => {
      const n5 = await this.getPublicKey();
      try {
        if (n5) return this.validateAttestation(s3, n5);
      } catch (a3) {
        this.logger.error(a3), this.logger.warn("error validating attestation");
      }
      const o4 = await this.fetchAndPersistPublicKey();
      try {
        if (o4) return this.validateAttestation(s3, o4);
      } catch (a3) {
        this.logger.error(a3), this.logger.warn("error validating attestation");
      }
    }), w3(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), w3(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n5) => {
        const o4 = await this.fetchPublicKey();
        o4 && (await this.persistPublicKey(o4), n5(o4));
      });
      const s3 = await this.fetchPromise;
      return this.fetchPromise = void 0, s3;
    }), w3(this, "validateAttestation", (s3, n5) => {
      const o4 = zc(s3, n5.publicKey), a3 = { hasExpired: (0, import_time4.toMiliseconds)(o4.exp) < Date.now(), payload: o4 };
      if (a3.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a3.payload.origin, isScam: a3.payload.isScam, isVerified: a3.payload.isVerified };
    }), this.logger = E(t, this.name), this.abortController = new AbortController(), this.isDevEnv = Ii(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return y(this.logger);
  }
  startAbortTimer(e2) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time4.toMiliseconds)(e2));
  }
};
var Ko3 = Object.defineProperty;
var Bo3 = (r3, e2, t) => e2 in r3 ? Ko3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var Fi2 = (r3, e2, t) => Bo3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Mi2 = class extends O3 {
  constructor(e2, t) {
    super(e2, t), this.projectId = e2, this.logger = t, Fi2(this, "context", Xt3), Fi2(this, "registerDeviceToken", async (i4) => {
      const { clientId: s3, token: n5, notificationType: o4, enableEncrypted: a3 = false } = i4, c6 = `${Zt2}/${this.projectId}/clients`;
      await fetch(c6, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s3, type: o4, token: n5, always_raw: a3 }) });
    }), this.logger = E(t, this.context);
  }
};
var Vo2 = Object.defineProperty;
var Ki2 = Object.getOwnPropertySymbols;
var qo2 = Object.prototype.hasOwnProperty;
var Go3 = Object.prototype.propertyIsEnumerable;
var Ze3 = (r3, e2, t) => e2 in r3 ? Vo2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var be3 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) qo2.call(e2, t) && Ze3(r3, t, e2[t]);
  if (Ki2) for (var t of Ki2(e2)) Go3.call(e2, t) && Ze3(r3, t, e2[t]);
  return r3;
};
var E3 = (r3, e2, t) => Ze3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Bi2 = class extends R {
  constructor(e2, t, i4 = true) {
    super(e2, t, i4), this.core = e2, this.logger = t, E3(this, "context", ei2), E3(this, "storagePrefix", B2), E3(this, "storageVersion", Qt3), E3(this, "events", /* @__PURE__ */ new Map()), E3(this, "shouldPersist", false), E3(this, "init", async () => {
      if (!Ii()) try {
        const s3 = { eventId: Bi(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: Mn2(this.core.relayer.protocol, this.core.relayer.version, _e3) } } };
        await this.sendEvent([s3]);
      } catch (s3) {
        this.logger.warn(s3);
      }
    }), E3(this, "createEvent", (s3) => {
      const { event: n5 = "ERROR", type: o4 = "", properties: { topic: a3, trace: c6 } } = s3, h5 = Bi(), l6 = this.core.projectId || "", d4 = Date.now(), g3 = be3({ eventId: h5, timestamp: d4, props: { event: n5, type: o4, properties: { topic: a3, trace: c6 } }, bundleId: l6, domain: this.getAppDomain() }, this.setMethods(h5));
      return this.telemetryEnabled && (this.events.set(h5, g3), this.shouldPersist = true), g3;
    }), E3(this, "getEvent", (s3) => {
      const { eventId: n5, topic: o4 } = s3;
      if (n5) return this.events.get(n5);
      const a3 = Array.from(this.events.values()).find((c6) => c6.props.properties.topic === o4);
      if (a3) return be3(be3({}, a3), this.setMethods(a3.eventId));
    }), E3(this, "deleteEvent", (s3) => {
      const { eventId: n5 } = s3;
      this.events.delete(n5), this.shouldPersist = true;
    }), E3(this, "setEventListeners", () => {
      this.core.heartbeat.on(r2.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((s3) => {
          (0, import_time4.fromMiliseconds)(Date.now()) - (0, import_time4.fromMiliseconds)(s3.timestamp) > ti && (this.events.delete(s3.eventId), this.shouldPersist = true);
        });
      });
    }), E3(this, "setMethods", (s3) => ({ addTrace: (n5) => this.addTrace(s3, n5), setError: (n5) => this.setError(s3, n5) })), E3(this, "addTrace", (s3, n5) => {
      const o4 = this.events.get(s3);
      o4 && (o4.props.properties.trace.push(n5), this.events.set(s3, o4), this.shouldPersist = true);
    }), E3(this, "setError", (s3, n5) => {
      const o4 = this.events.get(s3);
      o4 && (o4.props.type = n5, o4.timestamp = Date.now(), this.events.set(s3, o4), this.shouldPersist = true);
    }), E3(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }), E3(this, "restore", async () => {
      try {
        const s3 = await this.core.storage.getItem(this.storageKey) || [];
        if (!s3.length) return;
        s3.forEach((n5) => {
          this.events.set(n5.eventId, be3(be3({}, n5), this.setMethods(n5.eventId)));
        });
      } catch (s3) {
        this.logger.warn(s3);
      }
    }), E3(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const s3 = [];
      for (const [n5, o4] of this.events) o4.props.type && s3.push(o4);
      if (s3.length !== 0) try {
        if ((await this.sendEvent(s3)).ok) for (const n5 of s3) this.events.delete(n5.eventId), this.shouldPersist = true;
      } catch (n5) {
        this.logger.warn(n5);
      }
    }), E3(this, "sendEvent", async (s3) => {
      const n5 = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${ii}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${_e3}${n5}`, { method: "POST", body: JSON.stringify(s3) });
    }), E3(this, "getAppDomain", () => Pn2().url), this.logger = E(t, this.context), this.telemetryEnabled = i4, i4 ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
};
var Wo3 = Object.defineProperty;
var Vi2 = Object.getOwnPropertySymbols;
var Ho2 = Object.prototype.hasOwnProperty;
var Yo3 = Object.prototype.propertyIsEnumerable;
var Qe3 = (r3, e2, t) => e2 in r3 ? Wo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var qi2 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) Ho2.call(e2, t) && Qe3(r3, t, e2[t]);
  if (Vi2) for (var t of Vi2(e2)) Yo3.call(e2, t) && Qe3(r3, t, e2[t]);
  return r3;
};
var v4 = (r3, e2, t) => Qe3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Te2 = class _Te extends h3 {
  constructor(e2) {
    var t;
    super(e2), v4(this, "protocol", ze3), v4(this, "version", Le3), v4(this, "name", he3), v4(this, "relayUrl"), v4(this, "projectId"), v4(this, "customStoragePrefix"), v4(this, "events", new import_events7.EventEmitter()), v4(this, "logger"), v4(this, "heartbeat"), v4(this, "relayer"), v4(this, "crypto"), v4(this, "storage"), v4(this, "history"), v4(this, "expirer"), v4(this, "pairing"), v4(this, "verify"), v4(this, "echoClient"), v4(this, "linkModeSupportedApps"), v4(this, "eventClient"), v4(this, "initialized", false), v4(this, "logChunkController"), v4(this, "on", (a3, c6) => this.events.on(a3, c6)), v4(this, "once", (a3, c6) => this.events.once(a3, c6)), v4(this, "off", (a3, c6) => this.events.off(a3, c6)), v4(this, "removeListener", (a3, c6) => this.events.removeListener(a3, c6)), v4(this, "dispatchEnvelope", ({ topic: a3, message: c6, sessionExists: h5 }) => {
      if (!a3 || !c6) return;
      const l6 = { topic: a3, message: c6, publishedAt: Date.now(), transportType: Q2.link_mode };
      this.relayer.onLinkMessageEvent(l6, { sessionExists: h5 });
    });
    const i4 = this.getGlobalCore(e2 == null ? void 0 : e2.customStoragePrefix);
    if (i4) try {
      return this.customStoragePrefix = i4.customStoragePrefix, this.logger = i4.logger, this.heartbeat = i4.heartbeat, this.crypto = i4.crypto, this.history = i4.history, this.expirer = i4.expirer, this.storage = i4.storage, this.relayer = i4.relayer, this.pairing = i4.pairing, this.verify = i4.verify, this.echoClient = i4.echoClient, this.linkModeSupportedApps = i4.linkModeSupportedApps, this.eventClient = i4.eventClient, this.initialized = i4.initialized, this.logChunkController = i4.logChunkController, i4;
    } catch (a3) {
      console.warn("Failed to copy global core", a3);
    }
    this.projectId = e2 == null ? void 0 : e2.projectId, this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || Ue2, this.customStoragePrefix = e2 != null && e2.customStoragePrefix ? `:${e2.customStoragePrefix}` : "";
    const s3 = k2({ level: typeof (e2 == null ? void 0 : e2.logger) == "string" && e2.logger ? e2.logger : Et3.logger, name: he3 }), { logger: n5, chunkLoggerController: o4 } = A({ opts: s3, maxSizeInBytes: e2 == null ? void 0 : e2.maxLogBlobSizeInBytes, loggerOverride: e2 == null ? void 0 : e2.logger });
    this.logChunkController = o4, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a3, c6;
      (a3 = this.logChunkController) != null && a3.downloadLogsBlobInBrowser && ((c6 = this.logChunkController) == null || c6.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E(n5, this.name), this.heartbeat = new i2(), this.crypto = new vi2(this, this.logger, e2 == null ? void 0 : e2.keychain), this.history = new ki2(this, this.logger), this.expirer = new ji2(this, this.logger), this.storage = e2 != null && e2.storage ? e2.storage : new h2(qi2(qi2({}, It3), e2 == null ? void 0 : e2.storageOptions)), this.relayer = new Si2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Li2(this, this.logger), this.verify = new Ui2(this, this.logger, this.storage), this.echoClient = new Mi2(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Bi2(this, this.logger, e2 == null ? void 0 : e2.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e2) {
    const t = new _Te(e2);
    await t.initialize();
    const i4 = await t.crypto.getClientId();
    return await t.storage.setItem(jt3, i4), t;
  }
  get context() {
    return y(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e2;
    return (e2 = this.logChunkController) == null ? void 0 : e2.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e2) {
    this.linkModeSupportedApps.includes(e2) || (this.linkModeSupportedApps.push(e2), await this.storage.setItem(Fe2, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Fe2) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e2) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e2), this.logger.error(e2.message), e2;
    }
  }
  getGlobalCore(e2 = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const t = `_walletConnectCore_${e2}`, i4 = `${t}_count`;
      return globalThis[i4] = (globalThis[i4] || 0) + 1, globalThis[i4] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i4]} times.`), globalThis[t];
    } catch (t) {
      console.warn("Failed to get global WalletConnect core", t);
      return;
    }
  }
  setGlobalCore(e2) {
    var t;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const i4 = `_walletConnectCore_${((t = e2.opts) == null ? void 0 : t.customStoragePrefix) || ""}`;
      globalThis[i4] = e2;
    } catch (i4) {
      console.warn("Failed to set global WalletConnect core", i4);
    }
  }
  isGlobalCoreDisabled() {
    try {
      return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true";
    } catch {
      return true;
    }
  }
};
var Jo3 = Te2;

// node_modules/@walletconnect/sign-client/dist/index.es.js
var import_time5 = __toESM(require_cjs());
var import_events8 = __toESM(require_events());
var De3 = "wc";
var Le4 = 2;
var ke4 = "client";
var we3 = `${De3}@${Le4}:${ke4}:`;
var me3 = { name: ke4, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.org" };
var Me4 = "WALLETCONNECT_DEEPLINK_CHOICE";
var pt2 = "proposal";
var $e2 = "Proposal expired";
var ht3 = "session";
var J3 = import_time5.SEVEN_DAYS;
var dt3 = "engine";
var N11 = { wc_sessionPropose: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: import_time5.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: import_time5.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1119 } } };
var _e4 = { min: import_time5.FIVE_MINUTES, max: import_time5.SEVEN_DAYS };
var $2 = { idle: "IDLE", active: "ACTIVE" };
var Ue3 = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" } };
var ut3 = "request";
var gt3 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"];
var yt3 = "wc";
var wt3 = "auth";
var mt2 = "authKeys";
var _t3 = "pairingTopics";
var Et4 = "requests";
var ae = `${yt3}@${1.5}:${wt3}:`;
var ce2 = `${ae}:PUB_KEY`;
var Rs2 = Object.defineProperty;
var vs2 = Object.defineProperties;
var Is2 = Object.getOwnPropertyDescriptors;
var ft3 = Object.getOwnPropertySymbols;
var Ts2 = Object.prototype.hasOwnProperty;
var qs2 = Object.prototype.propertyIsEnumerable;
var Ke4 = (S4, n5, e2) => n5 in S4 ? Rs2(S4, n5, { enumerable: true, configurable: true, writable: true, value: e2 }) : S4[n5] = e2;
var v5 = (S4, n5) => {
  for (var e2 in n5 || (n5 = {})) Ts2.call(n5, e2) && Ke4(S4, e2, n5[e2]);
  if (ft3) for (var e2 of ft3(n5)) qs2.call(n5, e2) && Ke4(S4, e2, n5[e2]);
  return S4;
};
var b4 = (S4, n5) => vs2(S4, Is2(n5));
var c5 = (S4, n5, e2) => Ke4(S4, typeof n5 != "symbol" ? n5 + "" : n5, e2);
var Ps2 = class extends V2 {
  constructor(n5) {
    super(n5), c5(this, "name", dt3), c5(this, "events", new import_events8.default()), c5(this, "initialized", false), c5(this, "requestQueue", { state: $2.idle, queue: [] }), c5(this, "sessionRequestQueue", { state: $2.idle, queue: [] }), c5(this, "requestQueueDelay", import_time5.ONE_SECOND), c5(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c5(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c5(this, "recentlyDeletedLimit", 200), c5(this, "relayMessageCache", []), c5(this, "pendingSessions", /* @__PURE__ */ new Map()), c5(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(N11) }), this.initialized = true, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, (0, import_time5.toMiliseconds)(this.requestQueueDelay)));
    }), c5(this, "connect", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const t = b4(v5({}, e2), { requiredNamespaces: e2.requiredNamespaces || {}, optionalNamespaces: e2.optionalNamespaces || {} });
      await this.isValidConnect(t);
      const { pairingTopic: s3, requiredNamespaces: i4, optionalNamespaces: r3, sessionProperties: o4, scopedProperties: a3, relays: l6 } = t;
      let p4 = s3, h5, u2 = false;
      try {
        if (p4) {
          const T3 = this.client.core.pairing.pairings.get(p4);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), u2 = T3.active;
        }
      } catch (T3) {
        throw this.client.logger.error(`connect() -> pairing.get(${p4}) failed`), T3;
      }
      if (!p4 || !u2) {
        const { topic: T3, uri: U2 } = await this.client.core.pairing.create();
        p4 = T3, h5 = U2;
      }
      if (!p4) {
        const { message: T3 } = ht2("NO_MATCHING_KEY", `connect() pairing topic: ${p4}`);
        throw new Error(T3);
      }
      const d4 = await this.client.core.crypto.generateKeyPair(), w4 = N11.wc_sessionPropose.req.ttl || import_time5.FIVE_MINUTES, m3 = Ei(w4), f6 = b4(v5(v5({ requiredNamespaces: i4, optionalNamespaces: r3, relays: l6 ?? [{ protocol: xt3 }], proposer: { publicKey: d4, metadata: this.client.metadata }, expiryTimestamp: m3, pairingTopic: p4 }, o4 && { sessionProperties: o4 }), a3 && { scopedProperties: a3 }), { id: payloadId() }), _3 = xi("session_connect", f6.id), { reject: g3, resolve: A3, done: D2 } = gi(w4, $e2), I3 = ({ id: T3 }) => {
        T3 === f6.id && (this.client.events.off("proposal_expire", I3), this.pendingSessions.delete(f6.id), this.events.emit(_3, { error: { message: $e2, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", I3), this.events.once(_3, ({ error: T3, session: U2 }) => {
        this.client.events.off("proposal_expire", I3), T3 ? g3(T3) : U2 && A3(U2);
      }), await this.sendRequest({ topic: p4, method: "wc_sessionPropose", params: f6, throwOnFailedPublish: true, clientRpcId: f6.id }), await this.setProposal(f6.id, f6), { uri: h5, approval: D2 };
    }), c5(this, "pair", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(e2);
      } catch (t) {
        throw this.client.logger.error("pair() failed"), t;
      }
    }), c5(this, "approve", async (e2) => {
      var t, s3, i4;
      const r3 = this.client.core.eventClient.createEvent({ properties: { topic: (t = e2 == null ? void 0 : e2.id) == null ? void 0 : t.toString(), trace: [Qs2.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (q2) {
        throw r3.setError(er3.no_internet_connection), q2;
      }
      try {
        await this.isValidProposalId(e2 == null ? void 0 : e2.id);
      } catch (q2) {
        throw this.client.logger.error(`approve() -> proposal.get(${e2 == null ? void 0 : e2.id}) failed`), r3.setError(er3.proposal_not_found), q2;
      }
      try {
        await this.isValidApprove(e2);
      } catch (q2) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), r3.setError(er3.session_approve_namespace_validation_failure), q2;
      }
      const { id: o4, relayProtocol: a3, namespaces: l6, sessionProperties: p4, scopedProperties: h5, sessionConfig: u2 } = e2, d4 = this.client.proposal.get(o4);
      this.client.core.eventClient.deleteEvent({ eventId: r3.eventId });
      const { pairingTopic: w4, proposer: m3, requiredNamespaces: f6, optionalNamespaces: _3 } = d4;
      let g3 = (s3 = this.client.core.eventClient) == null ? void 0 : s3.getEvent({ topic: w4 });
      g3 || (g3 = (i4 = this.client.core.eventClient) == null ? void 0 : i4.createEvent({ type: Qs2.session_approve_started, properties: { topic: w4, trace: [Qs2.session_approve_started, Qs2.session_namespaces_validation_success] } }));
      const A3 = await this.client.core.crypto.generateKeyPair(), D2 = m3.publicKey, I3 = await this.client.core.crypto.generateSharedKey(A3, D2), T3 = v5(v5(v5({ relay: { protocol: a3 ?? "irn" }, namespaces: l6, controller: { publicKey: A3, metadata: this.client.metadata }, expiry: Ei(J3) }, p4 && { sessionProperties: p4 }), h5 && { scopedProperties: h5 }), u2 && { sessionConfig: u2 }), U2 = Q2.relay;
      g3.addTrace(Qs2.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(I3, { transportType: U2 });
      } catch (q2) {
        throw g3.setError(er3.subscribe_session_topic_failure), q2;
      }
      g3.addTrace(Qs2.subscribe_session_topic_success);
      const fe4 = b4(v5({}, T3), { topic: I3, requiredNamespaces: f6, optionalNamespaces: _3, pairingTopic: w4, acknowledged: false, self: T3.controller, peer: { publicKey: m3.publicKey, metadata: m3.metadata }, controller: A3, transportType: Q2.relay });
      await this.client.session.set(I3, fe4), g3.addTrace(Qs2.store_session);
      try {
        g3.addTrace(Qs2.publishing_session_settle), await this.sendRequest({ topic: I3, method: "wc_sessionSettle", params: T3, throwOnFailedPublish: true }).catch((q2) => {
          throw g3 == null ? void 0 : g3.setError(er3.session_settle_publish_failure), q2;
        }), g3.addTrace(Qs2.session_settle_publish_success), g3.addTrace(Qs2.publishing_session_approve), await this.sendResult({ id: o4, topic: w4, result: { relay: { protocol: a3 ?? "irn" }, responderPublicKey: A3 }, throwOnFailedPublish: true }).catch((q2) => {
          throw g3 == null ? void 0 : g3.setError(er3.session_approve_publish_failure), q2;
        }), g3.addTrace(Qs2.session_approve_publish_success);
      } catch (q2) {
        throw this.client.logger.error(q2), this.client.session.delete(I3, Nt2("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(I3), q2;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: g3.eventId }), await this.client.core.pairing.updateMetadata({ topic: w4, metadata: m3.metadata }), await this.client.proposal.delete(o4, Nt2("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: w4 }), await this.setExpiry(I3, Ei(J3)), { topic: I3, acknowledged: () => Promise.resolve(this.client.session.get(I3)) };
    }), c5(this, "reject", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(e2);
      } catch (r3) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r3;
      }
      const { id: t, reason: s3 } = e2;
      let i4;
      try {
        i4 = this.client.proposal.get(t).pairingTopic;
      } catch (r3) {
        throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`), r3;
      }
      i4 && (await this.sendError({ id: t, topic: i4, error: s3, rpcOpts: N11.wc_sessionPropose.reject }), await this.client.proposal.delete(t, Nt2("USER_DISCONNECTED")));
    }), c5(this, "update", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(e2);
      } catch (h5) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), h5;
      }
      const { topic: t, namespaces: s3 } = e2, { done: i4, resolve: r3, reject: o4 } = gi(), a3 = payloadId(), l6 = getBigIntRpcId().toString(), p4 = this.client.session.get(t).namespaces;
      return this.events.once(xi("session_update", a3), ({ error: h5 }) => {
        h5 ? o4(h5) : r3();
      }), await this.client.session.update(t, { namespaces: s3 }), await this.sendRequest({ topic: t, method: "wc_sessionUpdate", params: { namespaces: s3 }, throwOnFailedPublish: true, clientRpcId: a3, relayRpcId: l6 }).catch((h5) => {
        this.client.logger.error(h5), this.client.session.update(t, { namespaces: p4 }), o4(h5);
      }), { acknowledged: i4 };
    }), c5(this, "extend", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(e2);
      } catch (a3) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a3;
      }
      const { topic: t } = e2, s3 = payloadId(), { done: i4, resolve: r3, reject: o4 } = gi();
      return this.events.once(xi("session_extend", s3), ({ error: a3 }) => {
        a3 ? o4(a3) : r3();
      }), await this.setExpiry(t, Ei(J3)), this.sendRequest({ topic: t, method: "wc_sessionExtend", params: {}, clientRpcId: s3, throwOnFailedPublish: true }).catch((a3) => {
        o4(a3);
      }), { acknowledged: i4 };
    }), c5(this, "request", async (e2) => {
      this.isInitialized();
      try {
        await this.isValidRequest(e2);
      } catch (_3) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), _3;
      }
      const { chainId: t, request: s3, topic: i4, expiry: r3 = N11.wc_sessionRequest.req.ttl } = e2, o4 = this.client.session.get(i4);
      (o4 == null ? void 0 : o4.transportType) === Q2.relay && await this.confirmOnlineStateOrThrow();
      const a3 = payloadId(), l6 = getBigIntRpcId().toString(), { done: p4, resolve: h5, reject: u2 } = gi(r3, "Request expired. Please try again.");
      this.events.once(xi("session_request", a3), ({ error: _3, result: g3 }) => {
        _3 ? u2(_3) : h5(g3);
      });
      const d4 = "wc_sessionRequest", w4 = this.getAppLinkIfEnabled(o4.peer.metadata, o4.transportType);
      if (w4) return await this.sendRequest({ clientRpcId: a3, relayRpcId: l6, topic: i4, method: d4, params: { request: b4(v5({}, s3), { expiryTimestamp: Ei(r3) }), chainId: t }, expiry: r3, throwOnFailedPublish: true, appLink: w4 }).catch((_3) => u2(_3)), this.client.events.emit("session_request_sent", { topic: i4, request: s3, chainId: t, id: a3 }), await p4();
      const m3 = { request: b4(v5({}, s3), { expiryTimestamp: Ei(r3) }), chainId: t }, f6 = this.shouldSetTVF(d4, m3);
      return await Promise.all([new Promise(async (_3) => {
        await this.sendRequest(v5({ clientRpcId: a3, relayRpcId: l6, topic: i4, method: d4, params: m3, expiry: r3, throwOnFailedPublish: true }, f6 && { tvf: this.getTVFParams(a3, m3) })).catch((g3) => u2(g3)), this.client.events.emit("session_request_sent", { topic: i4, request: s3, chainId: t, id: a3 }), _3();
      }), new Promise(async (_3) => {
        var g3;
        if (!((g3 = o4.sessionConfig) != null && g3.disableDeepLink)) {
          const A3 = await Oi(this.client.core.storage, Me4);
          await Si({ id: a3, topic: i4, wcDeepLink: A3 });
        }
        _3();
      }), p4()]).then((_3) => _3[2]);
    }), c5(this, "respond", async (e2) => {
      this.isInitialized(), await this.isValidRespond(e2);
      const { topic: t, response: s3 } = e2, { id: i4 } = s3, r3 = this.client.session.get(t);
      r3.transportType === Q2.relay && await this.confirmOnlineStateOrThrow();
      const o4 = this.getAppLinkIfEnabled(r3.peer.metadata, r3.transportType);
      isJsonRpcResult(s3) ? await this.sendResult({ id: i4, topic: t, result: s3.result, throwOnFailedPublish: true, appLink: o4 }) : isJsonRpcError(s3) && await this.sendError({ id: i4, topic: t, error: s3.error, appLink: o4 }), this.cleanupAfterResponse(e2);
    }), c5(this, "ping", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(e2);
      } catch (s3) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s3;
      }
      const { topic: t } = e2;
      if (this.client.session.keys.includes(t)) {
        const s3 = payloadId(), i4 = getBigIntRpcId().toString(), { done: r3, resolve: o4, reject: a3 } = gi();
        this.events.once(xi("session_ping", s3), ({ error: l6 }) => {
          l6 ? a3(l6) : o4();
        }), await Promise.all([this.sendRequest({ topic: t, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s3, relayRpcId: i4 }), r3()]);
      } else this.client.core.pairing.pairings.keys.includes(t) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: t }));
    }), c5(this, "emit", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e2);
      const { topic: t, event: s3, chainId: i4 } = e2, r3 = getBigIntRpcId().toString(), o4 = payloadId();
      await this.sendRequest({ topic: t, method: "wc_sessionEvent", params: { event: s3, chainId: i4 }, throwOnFailedPublish: true, relayRpcId: r3, clientRpcId: o4 });
    }), c5(this, "disconnect", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e2);
      const { topic: t } = e2;
      if (this.client.session.keys.includes(t)) await this.sendRequest({ topic: t, method: "wc_sessionDelete", params: Nt2("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: t, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({ topic: t });
      else {
        const { message: s3 } = ht2("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
        throw new Error(s3);
      }
    }), c5(this, "find", (e2) => (this.isInitialized(), this.client.session.getAll().filter((t) => aa(t, e2)))), c5(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c5(this, "authenticate", async (e2, t) => {
      var s3;
      this.isInitialized(), this.isValidAuthenticate(e2);
      const i4 = t && this.client.core.linkModeSupportedApps.includes(t) && ((s3 = this.client.metadata.redirect) == null ? void 0 : s3.linkMode), r3 = i4 ? Q2.link_mode : Q2.relay;
      r3 === Q2.relay && await this.confirmOnlineStateOrThrow();
      const { chains: o4, statement: a3 = "", uri: l6, domain: p4, nonce: h5, type: u2, exp: d4, nbf: w4, methods: m3 = [], expiry: f6 } = e2, _3 = [...e2.resources || []], { topic: g3, uri: A3 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r3 });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: g3, uri: A3 } });
      const D2 = await this.client.core.crypto.generateKeyPair(), I3 = Pc(D2);
      if (await Promise.all([this.client.auth.authKeys.set(ce2, { responseTopic: I3, publicKey: D2 }), this.client.auth.pairingTopics.set(I3, { topic: I3, pairingTopic: g3 })]), await this.client.core.relayer.subscribe(I3, { transportType: r3 }), this.client.logger.info(`sending request to new pairing topic: ${g3}`), m3.length > 0) {
        const { namespace: x4 } = Ie2(o4[0]);
        let L3 = fs(x4, "request", m3);
        de2(_3) && (L3 = ls(L3, _3.pop())), _3.push(L3);
      }
      const T3 = f6 && f6 > N11.wc_sessionAuthenticate.req.ttl ? f6 : N11.wc_sessionAuthenticate.req.ttl, U2 = { authPayload: { type: u2 ?? "caip122", chains: o4, statement: a3, aud: l6, domain: p4, version: "1", nonce: h5, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: d4, nbf: w4, resources: _3 }, requester: { publicKey: D2, metadata: this.client.metadata }, expiryTimestamp: Ei(T3) }, fe4 = { eip155: { chains: o4, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m3])], events: ["chainChanged", "accountsChanged"] } }, q2 = { requiredNamespaces: {}, optionalNamespaces: fe4, relays: [{ protocol: "irn" }], pairingTopic: g3, proposer: { publicKey: D2, metadata: this.client.metadata }, expiryTimestamp: Ei(N11.wc_sessionPropose.req.ttl), id: payloadId() }, { done: Rt4, resolve: je4, reject: Se4 } = gi(T3, "Request expired"), te4 = payloadId(), le4 = xi("session_connect", q2.id), Re3 = xi("session_request", te4), pe4 = async ({ error: x4, session: L3 }) => {
        this.events.off(Re3, ve3), x4 ? Se4(x4) : L3 && je4({ session: L3 });
      }, ve3 = async (x4) => {
        var L3, Fe3, Qe4;
        if (await this.deletePendingAuthRequest(te4, { message: "fulfilled", code: 0 }), x4.error) {
          const ie3 = Nt2("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return x4.error.code === ie3.code ? void 0 : (this.events.off(le4, pe4), Se4(x4.error.message));
        }
        await this.deleteProposal(q2.id), this.events.off(le4, pe4);
        const { cacaos: He4, responder: Q3 } = x4.result, Te3 = [], ze4 = [];
        for (const ie3 of He4) {
          await is({ cacao: ie3, projectId: this.client.core.projectId }) || (this.client.logger.error(ie3, "Signature verification failed"), Se4(Nt2("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: qe4 } = ie3, Pe4 = de2(qe4.resources), Ye4 = [dr2(qe4.iss)], vt2 = Me2(qe4.iss);
          if (Pe4) {
            const Ne2 = ds(Pe4), It4 = hs(Pe4);
            Te3.push(...Ne2), Ye4.push(...It4);
          }
          for (const Ne2 of Ye4) ze4.push(`${Ne2}:${vt2}`);
        }
        const se3 = await this.client.core.crypto.generateSharedKey(D2, Q3.publicKey);
        let he4;
        Te3.length > 0 && (he4 = { topic: se3, acknowledged: true, self: { publicKey: D2, metadata: this.client.metadata }, peer: Q3, controller: Q3.publicKey, expiry: Ei(J3), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: g3, namespaces: ca([...new Set(Te3)], [...new Set(ze4)]), transportType: r3 }, await this.client.core.relayer.subscribe(se3, { transportType: r3 }), await this.client.session.set(se3, he4), g3 && await this.client.core.pairing.updateMetadata({ topic: g3, metadata: Q3.metadata }), he4 = this.client.session.get(se3)), (L3 = this.client.metadata.redirect) != null && L3.linkMode && (Fe3 = Q3.metadata.redirect) != null && Fe3.linkMode && (Qe4 = Q3.metadata.redirect) != null && Qe4.universal && t && (this.client.core.addLinkModeSupportedApp(Q3.metadata.redirect.universal), this.client.session.update(se3, { transportType: Q2.link_mode })), je4({ auths: He4, session: he4 });
      };
      this.events.once(le4, pe4), this.events.once(Re3, ve3);
      let Ie4;
      try {
        if (i4) {
          const x4 = formatJsonRpcRequest("wc_sessionAuthenticate", U2, te4);
          this.client.core.history.set(g3, x4);
          const L3 = await this.client.core.crypto.encode("", x4, { type: ne, encoding: Ee2 });
          Ie4 = Xc(t, g3, L3);
        } else await Promise.all([this.sendRequest({ topic: g3, method: "wc_sessionAuthenticate", params: U2, expiry: e2.expiry, throwOnFailedPublish: true, clientRpcId: te4 }), this.sendRequest({ topic: g3, method: "wc_sessionPropose", params: q2, expiry: N11.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: q2.id })]);
      } catch (x4) {
        throw this.events.off(le4, pe4), this.events.off(Re3, ve3), x4;
      }
      return await this.setProposal(q2.id, q2), await this.setAuthRequest(te4, { request: b4(v5({}, U2), { verifyContext: {} }), pairingTopic: g3, transportType: r3 }), { uri: Ie4 ?? A3, response: Rt4 };
    }), c5(this, "approveSessionAuthenticate", async (e2) => {
      const { id: t, auths: s3 } = e2, i4 = this.client.core.eventClient.createEvent({ properties: { topic: t.toString(), trace: [tr3.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (f6) {
        throw i4.setError(ir3.no_internet_connection), f6;
      }
      const r3 = this.getPendingAuthRequest(t);
      if (!r3) throw i4.setError(ir3.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${t}`);
      const o4 = r3.transportType || Q2.relay;
      o4 === Q2.relay && await this.confirmOnlineStateOrThrow();
      const a3 = r3.requester.publicKey, l6 = await this.client.core.crypto.generateKeyPair(), p4 = Pc(a3), h5 = { type: Kt2, receiverPublicKey: a3, senderPublicKey: l6 }, u2 = [], d4 = [];
      for (const f6 of s3) {
        if (!await is({ cacao: f6, projectId: this.client.core.projectId })) {
          i4.setError(ir3.invalid_cacao);
          const I3 = Nt2("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: t, topic: p4, error: I3, encodeOpts: h5 }), new Error(I3.message);
        }
        i4.addTrace(tr3.cacaos_verified);
        const { p: _3 } = f6, g3 = de2(_3.resources), A3 = [dr2(_3.iss)], D2 = Me2(_3.iss);
        if (g3) {
          const I3 = ds(g3), T3 = hs(g3);
          u2.push(...I3), A3.push(...T3);
        }
        for (const I3 of A3) d4.push(`${I3}:${D2}`);
      }
      const w4 = await this.client.core.crypto.generateSharedKey(l6, a3);
      i4.addTrace(tr3.create_authenticated_session_topic);
      let m3;
      if ((u2 == null ? void 0 : u2.length) > 0) {
        m3 = { topic: w4, acknowledged: true, self: { publicKey: l6, metadata: this.client.metadata }, peer: { publicKey: a3, metadata: r3.requester.metadata }, controller: a3, expiry: Ei(J3), authentication: s3, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r3.pairingTopic, namespaces: ca([...new Set(u2)], [...new Set(d4)]), transportType: o4 }, i4.addTrace(tr3.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(w4, { transportType: o4 });
        } catch (f6) {
          throw i4.setError(ir3.subscribe_authenticated_session_topic_failure), f6;
        }
        i4.addTrace(tr3.subscribe_authenticated_session_topic_success), await this.client.session.set(w4, m3), i4.addTrace(tr3.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r3.pairingTopic, metadata: r3.requester.metadata });
      }
      i4.addTrace(tr3.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: p4, id: t, result: { cacaos: s3, responder: { publicKey: l6, metadata: this.client.metadata } }, encodeOpts: h5, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r3.requester.metadata, o4) });
      } catch (f6) {
        throw i4.setError(ir3.authenticated_session_approve_publish_failure), f6;
      }
      return await this.client.auth.requests.delete(t, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r3.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i4.eventId }), { session: m3 };
    }), c5(this, "rejectSessionAuthenticate", async (e2) => {
      this.isInitialized();
      const { id: t, reason: s3 } = e2, i4 = this.getPendingAuthRequest(t);
      if (!i4) throw new Error(`Could not find pending auth request with id ${t}`);
      i4.transportType === Q2.relay && await this.confirmOnlineStateOrThrow();
      const r3 = i4.requester.publicKey, o4 = await this.client.core.crypto.generateKeyPair(), a3 = Pc(r3), l6 = { type: Kt2, receiverPublicKey: r3, senderPublicKey: o4 };
      await this.sendError({ id: t, topic: a3, error: s3, encodeOpts: l6, rpcOpts: N11.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i4.requester.metadata, i4.transportType) }), await this.client.auth.requests.delete(t, { message: "rejected", code: 0 }), await this.client.proposal.delete(t, Nt2("USER_DISCONNECTED"));
    }), c5(this, "formatAuthMessage", (e2) => {
      this.isInitialized();
      const { request: t, iss: s3 } = e2;
      return hr2(t, s3);
    }), c5(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const e2 = this.relayMessageCache.shift();
          e2 && await this.onRelayMessage(e2);
        } catch (e2) {
          this.client.logger.error(e2);
        }
      }, 50);
    }), c5(this, "cleanupDuplicatePairings", async (e2) => {
      if (e2.pairingTopic) try {
        const t = this.client.core.pairing.pairings.get(e2.pairingTopic), s3 = this.client.core.pairing.pairings.getAll().filter((i4) => {
          var r3, o4;
          return ((r3 = i4.peerMetadata) == null ? void 0 : r3.url) && ((o4 = i4.peerMetadata) == null ? void 0 : o4.url) === e2.peer.metadata.url && i4.topic && i4.topic !== t.topic;
        });
        if (s3.length === 0) return;
        this.client.logger.info(`Cleaning up ${s3.length} duplicate pairing(s)`), await Promise.all(s3.map((i4) => this.client.core.pairing.disconnect({ topic: i4.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (t) {
        this.client.logger.error(t);
      }
    }), c5(this, "deleteSession", async (e2) => {
      var t;
      const { topic: s3, expirerHasDeleted: i4 = false, emitEvent: r3 = true, id: o4 = 0 } = e2, { self: a3 } = this.client.session.get(s3);
      await this.client.core.relayer.unsubscribe(s3), await this.client.session.delete(s3, Nt2("USER_DISCONNECTED")), this.addToRecentlyDeleted(s3, "session"), this.client.core.crypto.keychain.has(a3.publicKey) && await this.client.core.crypto.deleteKeyPair(a3.publicKey), this.client.core.crypto.keychain.has(s3) && await this.client.core.crypto.deleteSymKey(s3), i4 || this.client.core.expirer.del(s3), this.client.core.storage.removeItem(Me4).catch((l6) => this.client.logger.warn(l6)), this.getPendingSessionRequests().forEach((l6) => {
        l6.topic === s3 && this.deletePendingSessionRequest(l6.id, Nt2("USER_DISCONNECTED"));
      }), s3 === ((t = this.sessionRequestQueue.queue[0]) == null ? void 0 : t.topic) && (this.sessionRequestQueue.state = $2.idle), r3 && this.client.events.emit("session_delete", { id: o4, topic: s3 });
    }), c5(this, "deleteProposal", async (e2, t) => {
      if (t) try {
        const s3 = this.client.proposal.get(e2), i4 = this.client.core.eventClient.getEvent({ topic: s3.pairingTopic });
        i4 == null ? void 0 : i4.setError(er3.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(e2, Nt2("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e2)]), this.addToRecentlyDeleted(e2, "proposal");
    }), c5(this, "deletePendingSessionRequest", async (e2, t, s3 = false) => {
      await Promise.all([this.client.pendingRequest.delete(e2, t), s3 ? Promise.resolve() : this.client.core.expirer.del(e2)]), this.addToRecentlyDeleted(e2, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i4) => i4.id !== e2), s3 && (this.sessionRequestQueue.state = $2.idle, this.client.events.emit("session_request_expire", { id: e2 }));
    }), c5(this, "deletePendingAuthRequest", async (e2, t, s3 = false) => {
      await Promise.all([this.client.auth.requests.delete(e2, t), s3 ? Promise.resolve() : this.client.core.expirer.del(e2)]);
    }), c5(this, "setExpiry", async (e2, t) => {
      this.client.session.keys.includes(e2) && (this.client.core.expirer.set(e2, t), await this.client.session.update(e2, { expiry: t }));
    }), c5(this, "setProposal", async (e2, t) => {
      this.client.core.expirer.set(e2, Ei(N11.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e2, t);
    }), c5(this, "setAuthRequest", async (e2, t) => {
      const { request: s3, pairingTopic: i4, transportType: r3 = Q2.relay } = t;
      this.client.core.expirer.set(e2, s3.expiryTimestamp), await this.client.auth.requests.set(e2, { authPayload: s3.authPayload, requester: s3.requester, expiryTimestamp: s3.expiryTimestamp, id: e2, pairingTopic: i4, verifyContext: s3.verifyContext, transportType: r3 });
    }), c5(this, "setPendingSessionRequest", async (e2) => {
      const { id: t, topic: s3, params: i4, verifyContext: r3 } = e2, o4 = i4.request.expiryTimestamp || Ei(N11.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(t, o4), await this.client.pendingRequest.set(t, { id: t, topic: s3, params: i4, verifyContext: r3 });
    }), c5(this, "sendRequest", async (e2) => {
      const { topic: t, method: s3, params: i4, expiry: r3, relayRpcId: o4, clientRpcId: a3, throwOnFailedPublish: l6, appLink: p4, tvf: h5 } = e2, u2 = formatJsonRpcRequest(s3, i4, a3);
      let d4;
      const w4 = !!p4;
      try {
        const _3 = w4 ? Ee2 : Ht2;
        d4 = await this.client.core.crypto.encode(t, u2, { encoding: _3 });
      } catch (_3) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`), _3;
      }
      let m3;
      if (gt3.includes(s3)) {
        const _3 = kc(JSON.stringify(u2)), g3 = kc(d4);
        m3 = await this.client.core.verify.register({ id: g3, decryptedId: _3 });
      }
      const f6 = N11[s3].req;
      if (f6.attestation = m3, r3 && (f6.ttl = r3), o4 && (f6.id = o4), this.client.core.history.set(t, u2), w4) {
        const _3 = Xc(p4, t, d4);
        await global.Linking.openURL(_3, this.client.name);
      } else {
        const _3 = N11[s3].req;
        r3 && (_3.ttl = r3), o4 && (_3.id = o4), _3.tvf = b4(v5({}, h5), { correlationId: u2.id }), l6 ? (_3.internal = b4(v5({}, _3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t, d4, _3)) : this.client.core.relayer.publish(t, d4, _3).catch((g3) => this.client.logger.error(g3));
      }
      return u2.id;
    }), c5(this, "sendResult", async (e2) => {
      const { id: t, topic: s3, result: i4, throwOnFailedPublish: r3, encodeOpts: o4, appLink: a3 } = e2, l6 = formatJsonRpcResult(t, i4);
      let p4;
      const h5 = a3 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const w4 = h5 ? Ee2 : Ht2;
        p4 = await this.client.core.crypto.encode(s3, l6, b4(v5({}, o4 || {}), { encoding: w4 }));
      } catch (w4) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s3} failed`), w4;
      }
      let u2, d4;
      try {
        u2 = await this.client.core.history.get(s3, t);
        const w4 = u2.request;
        try {
          this.shouldSetTVF(w4.method, w4.params) && (d4 = this.getTVFParams(t, w4.params, i4));
        } catch (m3) {
          this.client.logger.warn("sendResult() -> getTVFParams() failed", m3);
        }
      } catch (w4) {
        throw this.client.logger.error(`sendResult() -> history.get(${s3}, ${t}) failed`), w4;
      }
      if (h5) {
        const w4 = Xc(a3, s3, p4);
        await global.Linking.openURL(w4, this.client.name);
      } else {
        const w4 = u2.request.method, m3 = N11[w4].res;
        m3.tvf = b4(v5({}, d4), { correlationId: t }), r3 ? (m3.internal = b4(v5({}, m3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s3, p4, m3)) : this.client.core.relayer.publish(s3, p4, m3).catch((f6) => this.client.logger.error(f6));
      }
      await this.client.core.history.resolve(l6);
    }), c5(this, "sendError", async (e2) => {
      const { id: t, topic: s3, error: i4, encodeOpts: r3, rpcOpts: o4, appLink: a3 } = e2, l6 = formatJsonRpcError(t, i4);
      let p4;
      const h5 = a3 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const d4 = h5 ? Ee2 : Ht2;
        p4 = await this.client.core.crypto.encode(s3, l6, b4(v5({}, r3 || {}), { encoding: d4 }));
      } catch (d4) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s3} failed`), d4;
      }
      let u2;
      try {
        u2 = await this.client.core.history.get(s3, t);
      } catch (d4) {
        throw this.client.logger.error(`sendError() -> history.get(${s3}, ${t}) failed`), d4;
      }
      if (h5) {
        const d4 = Xc(a3, s3, p4);
        await global.Linking.openURL(d4, this.client.name);
      } else {
        const d4 = u2.request.method, w4 = o4 || N11[d4].res;
        this.client.core.relayer.publish(s3, p4, w4);
      }
      await this.client.core.history.resolve(l6);
    }), c5(this, "cleanup", async () => {
      const e2 = [], t = [];
      this.client.session.getAll().forEach((s3) => {
        let i4 = false;
        vi(s3.expiry) && (i4 = true), this.client.core.crypto.keychain.has(s3.topic) || (i4 = true), i4 && e2.push(s3.topic);
      }), this.client.proposal.getAll().forEach((s3) => {
        vi(s3.expiryTimestamp) && t.push(s3.id);
      }), await Promise.all([...e2.map((s3) => this.deleteSession({ topic: s3 })), ...t.map((s3) => this.deleteProposal(s3))]);
    }), c5(this, "onProviderMessageEvent", async (e2) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(e2) : await this.onRelayMessage(e2);
    }), c5(this, "onRelayEventRequest", async (e2) => {
      this.requestQueue.queue.push(e2), await this.processRequestsQueue();
    }), c5(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === $2.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = $2.active;
        const e2 = this.requestQueue.queue.shift();
        if (e2) try {
          await this.processRequest(e2);
        } catch (t) {
          this.client.logger.warn(t);
        }
      }
      this.requestQueue.state = $2.idle;
    }), c5(this, "processRequest", async (e2) => {
      const { topic: t, payload: s3, attestation: i4, transportType: r3, encryptedId: o4 } = e2, a3 = s3.method;
      if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: a3 })) switch (a3) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: t, payload: s3, attestation: i4, encryptedId: o4 });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(t, s3);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(t, s3);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(t, s3);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(t, s3);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(t, s3);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: t, payload: s3, attestation: i4, encryptedId: o4, transportType: r3 });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(t, s3);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: t, payload: s3, attestation: i4, encryptedId: o4, transportType: r3 });
        default:
          return this.client.logger.info(`Unsupported request method ${a3}`);
      }
    }), c5(this, "onRelayEventResponse", async (e2) => {
      const { topic: t, payload: s3, transportType: i4 } = e2, r3 = (await this.client.core.history.get(t, s3.id)).request.method;
      switch (r3) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(t, s3, i4);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(t, s3);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(t, s3);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(t, s3);
        case "wc_sessionPing":
          return this.onSessionPingResponse(t, s3);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(t, s3);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(t, s3);
        default:
          return this.client.logger.info(`Unsupported response method ${r3}`);
      }
    }), c5(this, "onRelayEventUnknownPayload", (e2) => {
      const { topic: t } = e2, { message: s3 } = ht2("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s3);
    }), c5(this, "shouldIgnorePairingRequest", (e2) => {
      const { topic: t, requestMethod: s3 } = e2, i4 = this.expectedPairingMethodMap.get(t);
      return !i4 || i4.includes(s3) ? false : !!(i4.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), c5(this, "onSessionProposeRequest", async (e2) => {
      const { topic: t, payload: s3, attestation: i4, encryptedId: r3 } = e2, { params: o4, id: a3 } = s3;
      try {
        const l6 = this.client.core.eventClient.getEvent({ topic: t });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l6 == null ? void 0 : l6.setError(Y2.proposal_listener_not_found)), this.isValidConnect(v5({}, s3.params));
        const p4 = o4.expiryTimestamp || Ei(N11.wc_sessionPropose.req.ttl), h5 = v5({ id: a3, pairingTopic: t, expiryTimestamp: p4 }, o4);
        await this.setProposal(a3, h5);
        const u2 = await this.getVerifyContext({ attestationId: i4, hash: kc(JSON.stringify(s3)), encryptedId: r3, metadata: h5.proposer.metadata });
        l6 == null ? void 0 : l6.addTrace(G3.emit_session_proposal), this.client.events.emit("session_proposal", { id: a3, params: h5, verifyContext: u2 });
      } catch (l6) {
        await this.sendError({ id: a3, topic: t, error: l6, rpcOpts: N11.wc_sessionPropose.autoReject }), this.client.logger.error(l6);
      }
    }), c5(this, "onSessionProposeResponse", async (e2, t, s3) => {
      const { id: i4 } = t;
      if (isJsonRpcResult(t)) {
        const { result: r3 } = t;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r3 });
        const o4 = this.client.proposal.get(i4);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o4 });
        const a3 = o4.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a3 });
        const l6 = r3.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l6 });
        const p4 = await this.client.core.crypto.generateSharedKey(a3, l6);
        this.pendingSessions.set(i4, { sessionTopic: p4, pairingTopic: e2, proposalId: i4, publicKey: a3 });
        const h5 = await this.client.core.relayer.subscribe(p4, { transportType: s3 });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h5 }), await this.client.core.pairing.activate({ topic: e2 });
      } else if (isJsonRpcError(t)) {
        await this.client.proposal.delete(i4, Nt2("USER_DISCONNECTED"));
        const r3 = xi("session_connect", i4);
        if (this.events.listenerCount(r3) === 0) throw new Error(`emitting ${r3} without any listeners, 954`);
        this.events.emit(r3, { error: t.error });
      }
    }), c5(this, "onSessionSettleRequest", async (e2, t) => {
      const { id: s3, params: i4 } = t;
      try {
        this.isValidSessionSettleRequest(i4);
        const { relay: r3, controller: o4, expiry: a3, namespaces: l6, sessionProperties: p4, scopedProperties: h5, sessionConfig: u2 } = t.params, d4 = [...this.pendingSessions.values()].find((f6) => f6.sessionTopic === e2);
        if (!d4) return this.client.logger.error(`Pending session not found for topic ${e2}`);
        const w4 = this.client.proposal.get(d4.proposalId), m3 = b4(v5(v5(v5({ topic: e2, relay: r3, expiry: a3, namespaces: l6, acknowledged: true, pairingTopic: d4.pairingTopic, requiredNamespaces: w4.requiredNamespaces, optionalNamespaces: w4.optionalNamespaces, controller: o4.publicKey, self: { publicKey: d4.publicKey, metadata: this.client.metadata }, peer: { publicKey: o4.publicKey, metadata: o4.metadata } }, p4 && { sessionProperties: p4 }), h5 && { scopedProperties: h5 }), u2 && { sessionConfig: u2 }), { transportType: Q2.relay });
        await this.client.session.set(m3.topic, m3), await this.setExpiry(m3.topic, m3.expiry), await this.client.core.pairing.updateMetadata({ topic: d4.pairingTopic, metadata: m3.peer.metadata }), this.client.events.emit("session_connect", { session: m3 }), this.events.emit(xi("session_connect", d4.proposalId), { session: m3 }), this.pendingSessions.delete(d4.proposalId), this.deleteProposal(d4.proposalId, false), this.cleanupDuplicatePairings(m3), await this.sendResult({ id: t.id, topic: e2, result: true, throwOnFailedPublish: true });
      } catch (r3) {
        await this.sendError({ id: s3, topic: e2, error: r3 }), this.client.logger.error(r3);
      }
    }), c5(this, "onSessionSettleResponse", async (e2, t) => {
      const { id: s3 } = t;
      isJsonRpcResult(t) ? (await this.client.session.update(e2, { acknowledged: true }), this.events.emit(xi("session_approve", s3), {})) : isJsonRpcError(t) && (await this.client.session.delete(e2, Nt2("USER_DISCONNECTED")), this.events.emit(xi("session_approve", s3), { error: t.error }));
    }), c5(this, "onSessionUpdateRequest", async (e2, t) => {
      const { params: s3, id: i4 } = t;
      try {
        const r3 = `${e2}_session_update`, o4 = Ua.get(r3);
        if (o4 && this.isRequestOutOfSync(o4, i4)) {
          this.client.logger.warn(`Discarding out of sync request - ${i4}`), this.sendError({ id: i4, topic: e2, error: Nt2("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(v5({ topic: e2 }, s3));
        try {
          Ua.set(r3, i4), await this.client.session.update(e2, { namespaces: s3.namespaces }), await this.sendResult({ id: i4, topic: e2, result: true, throwOnFailedPublish: true });
        } catch (a3) {
          throw Ua.delete(r3), a3;
        }
        this.client.events.emit("session_update", { id: i4, topic: e2, params: s3 });
      } catch (r3) {
        await this.sendError({ id: i4, topic: e2, error: r3 }), this.client.logger.error(r3);
      }
    }), c5(this, "isRequestOutOfSync", (e2, t) => t.toString().slice(0, -3) < e2.toString().slice(0, -3)), c5(this, "onSessionUpdateResponse", (e2, t) => {
      const { id: s3 } = t, i4 = xi("session_update", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(xi("session_update", s3), {}) : isJsonRpcError(t) && this.events.emit(xi("session_update", s3), { error: t.error });
    }), c5(this, "onSessionExtendRequest", async (e2, t) => {
      const { id: s3 } = t;
      try {
        this.isValidExtend({ topic: e2 }), await this.setExpiry(e2, Ei(J3)), await this.sendResult({ id: s3, topic: e2, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_extend", { id: s3, topic: e2 });
      } catch (i4) {
        await this.sendError({ id: s3, topic: e2, error: i4 }), this.client.logger.error(i4);
      }
    }), c5(this, "onSessionExtendResponse", (e2, t) => {
      const { id: s3 } = t, i4 = xi("session_extend", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(xi("session_extend", s3), {}) : isJsonRpcError(t) && this.events.emit(xi("session_extend", s3), { error: t.error });
    }), c5(this, "onSessionPingRequest", async (e2, t) => {
      const { id: s3 } = t;
      try {
        this.isValidPing({ topic: e2 }), await this.sendResult({ id: s3, topic: e2, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s3, topic: e2 });
      } catch (i4) {
        await this.sendError({ id: s3, topic: e2, error: i4 }), this.client.logger.error(i4);
      }
    }), c5(this, "onSessionPingResponse", (e2, t) => {
      const { id: s3 } = t, i4 = xi("session_ping", s3);
      setTimeout(() => {
        if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners 2176`);
        isJsonRpcResult(t) ? this.events.emit(xi("session_ping", s3), {}) : isJsonRpcError(t) && this.events.emit(xi("session_ping", s3), { error: t.error });
      }, 500);
    }), c5(this, "onSessionDeleteRequest", async (e2, t) => {
      const { id: s3 } = t;
      try {
        this.isValidDisconnect({ topic: e2, reason: t.params }), Promise.all([new Promise((i4) => {
          this.client.core.relayer.once(C3.publish, async () => {
            i4(await this.deleteSession({ topic: e2, id: s3 }));
          });
        }), this.sendResult({ id: s3, topic: e2, result: true, throwOnFailedPublish: true }), this.cleanupPendingSentRequestsForTopic({ topic: e2, error: Nt2("USER_DISCONNECTED") })]).catch((i4) => this.client.logger.error(i4));
      } catch (i4) {
        this.client.logger.error(i4);
      }
    }), c5(this, "onSessionRequest", async (e2) => {
      var t, s3, i4;
      const { topic: r3, payload: o4, attestation: a3, encryptedId: l6, transportType: p4 } = e2, { id: h5, params: u2 } = o4;
      try {
        await this.isValidRequest(v5({ topic: r3 }, u2));
        const d4 = this.client.session.get(r3), w4 = await this.getVerifyContext({ attestationId: a3, hash: kc(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", u2, h5))), encryptedId: l6, metadata: d4.peer.metadata, transportType: p4 }), m3 = { id: h5, topic: r3, params: u2, verifyContext: w4 };
        await this.setPendingSessionRequest(m3), p4 === Q2.link_mode && (t = d4.peer.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp((s3 = d4.peer.metadata.redirect) == null ? void 0 : s3.universal), (i4 = this.client.signConfig) != null && i4.disableRequestQueue ? this.emitSessionRequest(m3) : (this.addSessionRequestToSessionRequestQueue(m3), this.processSessionRequestQueue());
      } catch (d4) {
        await this.sendError({ id: h5, topic: r3, error: d4 }), this.client.logger.error(d4);
      }
    }), c5(this, "onSessionRequestResponse", (e2, t) => {
      const { id: s3 } = t, i4 = xi("session_request", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(xi("session_request", s3), { result: t.result }) : isJsonRpcError(t) && this.events.emit(xi("session_request", s3), { error: t.error });
    }), c5(this, "onSessionEventRequest", async (e2, t) => {
      const { id: s3, params: i4 } = t;
      try {
        const r3 = `${e2}_session_event_${i4.event.name}`, o4 = Ua.get(r3);
        if (o4 && this.isRequestOutOfSync(o4, s3)) {
          this.client.logger.info(`Discarding out of sync request - ${s3}`);
          return;
        }
        this.isValidEmit(v5({ topic: e2 }, i4)), this.client.events.emit("session_event", { id: s3, topic: e2, params: i4 }), Ua.set(r3, s3);
      } catch (r3) {
        await this.sendError({ id: s3, topic: e2, error: r3 }), this.client.logger.error(r3);
      }
    }), c5(this, "onSessionAuthenticateResponse", (e2, t) => {
      const { id: s3 } = t;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: e2, payload: t }), isJsonRpcResult(t) ? this.events.emit(xi("session_request", s3), { result: t.result }) : isJsonRpcError(t) && this.events.emit(xi("session_request", s3), { error: t.error });
    }), c5(this, "onSessionAuthenticateRequest", async (e2) => {
      var t;
      const { topic: s3, payload: i4, attestation: r3, encryptedId: o4, transportType: a3 } = e2;
      try {
        const { requester: l6, authPayload: p4, expiryTimestamp: h5 } = i4.params, u2 = await this.getVerifyContext({ attestationId: r3, hash: kc(JSON.stringify(i4)), encryptedId: o4, metadata: l6.metadata, transportType: a3 }), d4 = { requester: l6, pairingTopic: s3, id: i4.id, authPayload: p4, verifyContext: u2, expiryTimestamp: h5 };
        await this.setAuthRequest(i4.id, { request: d4, pairingTopic: s3, transportType: a3 }), a3 === Q2.link_mode && (t = l6.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp(l6.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s3, params: i4.params, id: i4.id, verifyContext: u2 });
      } catch (l6) {
        this.client.logger.error(l6);
        const p4 = i4.params.requester.publicKey, h5 = await this.client.core.crypto.generateKeyPair(), u2 = this.getAppLinkIfEnabled(i4.params.requester.metadata, a3), d4 = { type: Kt2, receiverPublicKey: p4, senderPublicKey: h5 };
        await this.sendError({ id: i4.id, topic: s3, error: l6, encodeOpts: d4, rpcOpts: N11.wc_sessionAuthenticate.autoReject, appLink: u2 });
      }
    }), c5(this, "addSessionRequestToSessionRequestQueue", (e2) => {
      this.sessionRequestQueue.queue.push(e2);
    }), c5(this, "cleanupAfterResponse", (e2) => {
      this.deletePendingSessionRequest(e2.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = $2.idle, this.processSessionRequestQueue();
      }, (0, import_time5.toMiliseconds)(this.requestQueueDelay));
    }), c5(this, "cleanupPendingSentRequestsForTopic", ({ topic: e2, error: t }) => {
      const s3 = this.client.core.history.pending;
      s3.length > 0 && s3.filter((i4) => i4.topic === e2 && i4.request.method === "wc_sessionRequest").forEach((i4) => {
        const r3 = i4.request.id, o4 = xi("session_request", r3);
        if (this.events.listenerCount(o4) === 0) throw new Error(`emitting ${o4} without any listeners`);
        this.events.emit(xi("session_request", i4.request.id), { error: t });
      });
    }), c5(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === $2.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e2 = this.sessionRequestQueue.queue[0];
      if (!e2) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = $2.active, this.emitSessionRequest(e2);
      } catch (t) {
        this.client.logger.error(t);
      }
    }), c5(this, "emitSessionRequest", (e2) => {
      this.client.events.emit("session_request", e2);
    }), c5(this, "onPairingCreated", (e2) => {
      if (e2.methods && this.expectedPairingMethodMap.set(e2.topic, e2.methods), e2.active) return;
      const t = this.client.proposal.getAll().find((s3) => s3.pairingTopic === e2.topic);
      t && this.onSessionProposeRequest({ topic: e2.topic, payload: formatJsonRpcRequest("wc_sessionPropose", b4(v5({}, t), { requiredNamespaces: t.requiredNamespaces, optionalNamespaces: t.optionalNamespaces, relays: t.relays, proposer: t.proposer, sessionProperties: t.sessionProperties, scopedProperties: t.scopedProperties }), t.id) });
    }), c5(this, "isValidConnect", async (e2) => {
      if (!ya(e2)) {
        const { message: l6 } = ht2("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e2)}`);
        throw new Error(l6);
      }
      const { pairingTopic: t, requiredNamespaces: s3, optionalNamespaces: i4, sessionProperties: r3, scopedProperties: o4, relays: a3 } = e2;
      if (Et2(t) || await this.isValidPairingTopic(t), !pa(a3, true)) {
        const { message: l6 } = ht2("MISSING_OR_INVALID", `connect() relays: ${a3}`);
        throw new Error(l6);
      }
      if (!Et2(s3) && xe2(s3) !== 0 && this.validateNamespaces(s3, "requiredNamespaces"), !Et2(i4) && xe2(i4) !== 0 && this.validateNamespaces(i4, "optionalNamespaces"), Et2(r3) || this.validateSessionProps(r3, "sessionProperties"), !Et2(o4)) {
        this.validateSessionProps(o4, "scopedProperties");
        const l6 = Object.keys(s3 || {}).concat(Object.keys(i4 || {}));
        if (!Object.keys(o4).every((p4) => l6.includes(p4))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(o4)}, required/optional namespaces: ${JSON.stringify(l6)}`);
      }
    }), c5(this, "validateNamespaces", (e2, t) => {
      const s3 = ha(e2, "connect()", t);
      if (s3) throw new Error(s3.message);
    }), c5(this, "isValidApprove", async (e2) => {
      if (!ya(e2)) throw new Error(ht2("MISSING_OR_INVALID", `approve() params: ${e2}`).message);
      const { id: t, namespaces: s3, relayProtocol: i4, sessionProperties: r3, scopedProperties: o4 } = e2;
      this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
      const a3 = this.client.proposal.get(t), l6 = Bo2(s3, "approve()");
      if (l6) throw new Error(l6.message);
      const p4 = No2(a3.requiredNamespaces, s3, "approve()");
      if (p4) throw new Error(p4.message);
      if (!nt2(i4, true)) {
        const { message: h5 } = ht2("MISSING_OR_INVALID", `approve() relayProtocol: ${i4}`);
        throw new Error(h5);
      }
      if (Et2(r3) || this.validateSessionProps(r3, "sessionProperties"), !Et2(o4)) {
        this.validateSessionProps(o4, "scopedProperties");
        const h5 = new Set(Object.keys(s3));
        if (!Object.keys(o4).every((u2) => h5.has(u2))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(o4)}, approved namespaces: ${Array.from(h5).join(", ")}`);
      }
    }), c5(this, "isValidReject", async (e2) => {
      if (!ya(e2)) {
        const { message: i4 } = ht2("MISSING_OR_INVALID", `reject() params: ${e2}`);
        throw new Error(i4);
      }
      const { id: t, reason: s3 } = e2;
      if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !ma(s3)) {
        const { message: i4 } = ht2("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s3)}`);
        throw new Error(i4);
      }
    }), c5(this, "isValidSessionSettleRequest", (e2) => {
      if (!ya(e2)) {
        const { message: l6 } = ht2("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e2}`);
        throw new Error(l6);
      }
      const { relay: t, controller: s3, namespaces: i4, expiry: r3 } = e2;
      if (!Io2(t)) {
        const { message: l6 } = ht2("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l6);
      }
      const o4 = da(s3, "onSessionSettleRequest()");
      if (o4) throw new Error(o4.message);
      const a3 = Bo2(i4, "onSessionSettleRequest()");
      if (a3) throw new Error(a3.message);
      if (vi(r3)) {
        const { message: l6 } = ht2("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l6);
      }
    }), c5(this, "isValidUpdate", async (e2) => {
      if (!ya(e2)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", `update() params: ${e2}`);
        throw new Error(a3);
      }
      const { topic: t, namespaces: s3 } = e2;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const i4 = this.client.session.get(t), r3 = Bo2(s3, "update()");
      if (r3) throw new Error(r3.message);
      const o4 = No2(i4.requiredNamespaces, s3, "update()");
      if (o4) throw new Error(o4.message);
    }), c5(this, "isValidExtend", async (e2) => {
      if (!ya(e2)) {
        const { message: s3 } = ht2("MISSING_OR_INVALID", `extend() params: ${e2}`);
        throw new Error(s3);
      }
      const { topic: t } = e2;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
    }), c5(this, "isValidRequest", async (e2) => {
      if (!ya(e2)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", `request() params: ${e2}`);
        throw new Error(a3);
      }
      const { topic: t, request: s3, chainId: i4, expiry: r3 } = e2;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const { namespaces: o4 } = this.client.session.get(t);
      if (!va(o4, i4)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", `request() chainId: ${i4}`);
        throw new Error(a3);
      }
      if (!wa(s3)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", `request() ${JSON.stringify(s3)}`);
        throw new Error(a3);
      }
      if (!xa(o4, i4, s3.method)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", `request() method: ${s3.method}`);
        throw new Error(a3);
      }
      if (r3 && !Ba(r3, _e4)) {
        const { message: a3 } = ht2("MISSING_OR_INVALID", `request() expiry: ${r3}. Expiry must be a number (in seconds) between ${_e4.min} and ${_e4.max}`);
        throw new Error(a3);
      }
    }), c5(this, "isValidRespond", async (e2) => {
      var t;
      if (!ya(e2)) {
        const { message: r3 } = ht2("MISSING_OR_INVALID", `respond() params: ${e2}`);
        throw new Error(r3);
      }
      const { topic: s3, response: i4 } = e2;
      try {
        await this.isValidSessionTopic(s3);
      } catch (r3) {
        throw (t = e2 == null ? void 0 : e2.response) != null && t.id && this.cleanupAfterResponse(e2), r3;
      }
      if (!ba(i4)) {
        const { message: r3 } = ht2("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i4)}`);
        throw new Error(r3);
      }
    }), c5(this, "isValidPing", async (e2) => {
      if (!ya(e2)) {
        const { message: s3 } = ht2("MISSING_OR_INVALID", `ping() params: ${e2}`);
        throw new Error(s3);
      }
      const { topic: t } = e2;
      await this.isValidSessionOrPairingTopic(t);
    }), c5(this, "isValidEmit", async (e2) => {
      if (!ya(e2)) {
        const { message: o4 } = ht2("MISSING_OR_INVALID", `emit() params: ${e2}`);
        throw new Error(o4);
      }
      const { topic: t, event: s3, chainId: i4 } = e2;
      await this.isValidSessionTopic(t);
      const { namespaces: r3 } = this.client.session.get(t);
      if (!va(r3, i4)) {
        const { message: o4 } = ht2("MISSING_OR_INVALID", `emit() chainId: ${i4}`);
        throw new Error(o4);
      }
      if (!Ea(s3)) {
        const { message: o4 } = ht2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s3)}`);
        throw new Error(o4);
      }
      if (!Sa(r3, i4, s3.name)) {
        const { message: o4 } = ht2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s3)}`);
        throw new Error(o4);
      }
    }), c5(this, "isValidDisconnect", async (e2) => {
      if (!ya(e2)) {
        const { message: s3 } = ht2("MISSING_OR_INVALID", `disconnect() params: ${e2}`);
        throw new Error(s3);
      }
      const { topic: t } = e2;
      await this.isValidSessionOrPairingTopic(t);
    }), c5(this, "isValidAuthenticate", (e2) => {
      const { chains: t, uri: s3, domain: i4, nonce: r3 } = e2;
      if (!Array.isArray(t) || t.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!nt2(s3, false)) throw new Error("uri is required parameter");
      if (!nt2(i4, false)) throw new Error("domain is required parameter");
      if (!nt2(r3, false)) throw new Error("nonce is required parameter");
      if ([...new Set(t.map((a3) => Ie2(a3).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: o4 } = Ie2(t[0]);
      if (o4 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), c5(this, "getVerifyContext", async (e2) => {
      const { attestationId: t, hash: s3, encryptedId: i4, metadata: r3, transportType: o4 } = e2, a3 = { verified: { verifyUrl: r3.verifyUrl || ue2, validation: "UNKNOWN", origin: r3.url || "" } };
      try {
        if (o4 === Q2.link_mode) {
          const p4 = this.getAppLinkIfEnabled(r3, o4);
          return a3.verified.validation = p4 && new URL(p4).origin === new URL(r3.url).origin ? "VALID" : "INVALID", a3;
        }
        const l6 = await this.client.core.verify.resolve({ attestationId: t, hash: s3, encryptedId: i4, verifyUrl: r3.verifyUrl });
        l6 && (a3.verified.origin = l6.origin, a3.verified.isScam = l6.isScam, a3.verified.validation = l6.origin === new URL(r3.url).origin ? "VALID" : "INVALID");
      } catch (l6) {
        this.client.logger.warn(l6);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(a3)}`), a3;
    }), c5(this, "validateSessionProps", (e2, t) => {
      Object.values(e2).forEach((s3, i4) => {
        if (s3 == null) {
          const { message: r3 } = ht2("MISSING_OR_INVALID", `${t} must contain an existing value for each key. Received: ${s3} for key ${Object.keys(e2)[i4]}`);
          throw new Error(r3);
        }
      });
    }), c5(this, "getPendingAuthRequest", (e2) => {
      const t = this.client.auth.requests.get(e2);
      return typeof t == "object" ? t : void 0;
    }), c5(this, "addToRecentlyDeleted", (e2, t) => {
      if (this.recentlyDeletedMap.set(e2, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s3 = 0;
        const i4 = this.recentlyDeletedLimit / 2;
        for (const r3 of this.recentlyDeletedMap.keys()) {
          if (s3++ >= i4) break;
          this.recentlyDeletedMap.delete(r3);
        }
      }
    }), c5(this, "checkRecentlyDeleted", (e2) => {
      const t = this.recentlyDeletedMap.get(e2);
      if (t) {
        const { message: s3 } = ht2("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e2}`);
        throw new Error(s3);
      }
    }), c5(this, "isLinkModeEnabled", (e2, t) => {
      var s3, i4, r3, o4, a3, l6, p4, h5, u2;
      return !e2 || t !== Q2.link_mode ? false : ((i4 = (s3 = this.client.metadata) == null ? void 0 : s3.redirect) == null ? void 0 : i4.linkMode) === true && ((o4 = (r3 = this.client.metadata) == null ? void 0 : r3.redirect) == null ? void 0 : o4.universal) !== void 0 && ((l6 = (a3 = this.client.metadata) == null ? void 0 : a3.redirect) == null ? void 0 : l6.universal) !== "" && ((p4 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : p4.universal) !== void 0 && ((h5 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : h5.universal) !== "" && ((u2 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : u2.linkMode) === true && this.client.core.linkModeSupportedApps.includes(e2.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), c5(this, "getAppLinkIfEnabled", (e2, t) => {
      var s3;
      return this.isLinkModeEnabled(e2, t) ? (s3 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : s3.universal : void 0;
    }), c5(this, "handleLinkModeMessage", ({ url: e2 }) => {
      if (!e2 || !e2.includes("wc_ev") || !e2.includes("topic")) return;
      const t = Ai(e2, "topic") || "", s3 = decodeURIComponent(Ai(e2, "wc_ev") || ""), i4 = this.client.session.keys.includes(t);
      i4 && this.client.session.update(t, { transportType: Q2.link_mode }), this.client.core.dispatchEnvelope({ topic: t, message: s3, sessionExists: i4 });
    }), c5(this, "registerLinkModeListeners", async () => {
      var e2;
      if (Ii() || pt() && (e2 = this.client.metadata.redirect) != null && e2.linkMode) {
        const t = global == null ? void 0 : global.Linking;
        if (typeof t < "u") {
          t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s3 = await t.getInitialURL();
          s3 && setTimeout(() => {
            this.handleLinkModeMessage({ url: s3 });
          }, 50);
        }
      }
    }), c5(this, "shouldSetTVF", (e2, t) => {
      if (!t || e2 !== "wc_sessionRequest") return false;
      const { request: s3 } = t;
      return Object.keys(Ue3).includes(s3.method);
    }), c5(this, "getTVFParams", (e2, t, s3) => {
      var i4, r3;
      try {
        const o4 = t.request.method, a3 = this.extractTxHashesFromResult(o4, s3);
        return b4(v5({ correlationId: e2, rpcMethods: [o4], chainId: t.chainId }, this.isValidContractData(t.request.params) && { contractAddresses: [(r3 = (i4 = t.request.params) == null ? void 0 : i4[0]) == null ? void 0 : r3.to] }), { txHashes: a3 });
      } catch (o4) {
        this.client.logger.warn("Error getting TVF params", o4);
      }
      return {};
    }), c5(this, "isValidContractData", (e2) => {
      var t;
      if (!e2) return false;
      try {
        const s3 = (e2 == null ? void 0 : e2.data) || ((t = e2 == null ? void 0 : e2[0]) == null ? void 0 : t.data);
        if (!s3.startsWith("0x")) return false;
        const i4 = s3.slice(2);
        return /^[0-9a-fA-F]*$/.test(i4) ? i4.length % 2 === 0 : false;
      } catch {
      }
      return false;
    }), c5(this, "extractTxHashesFromResult", (e2, t) => {
      try {
        const s3 = Ue3[e2];
        if (typeof t == "string") return [t];
        const i4 = t[s3.key];
        if (oe(i4)) return e2 === "solana_signAllTransactions" ? i4.map((r3) => Ji(r3)) : i4;
        if (typeof i4 == "string") return [i4];
      } catch (s3) {
        this.client.logger.warn("Error extracting tx hashes from result", s3);
      }
      return [];
    });
  }
  async processPendingMessageEvents() {
    try {
      const n5 = this.client.session.keys, e2 = this.client.core.relayer.messages.getWithoutAck(n5);
      for (const [t, s3] of Object.entries(e2)) for (const i4 of s3) try {
        await this.onProviderMessageEvent({ topic: t, message: i4, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${t}, message: ${i4}`);
      }
    } catch (n5) {
      this.client.logger.warn("processPendingMessageEvents failed", n5);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: n5 } = ht2("NOT_INITIALIZED", this.name);
      throw new Error(n5);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(C3.message, (n5) => {
      this.onProviderMessageEvent(n5);
    });
  }
  async onRelayMessage(n5) {
    const { topic: e2, message: t, attestation: s3, transportType: i4 } = n5, { publicKey: r3 } = this.client.auth.authKeys.keys.includes(ce2) ? this.client.auth.authKeys.get(ce2) : { responseTopic: void 0, publicKey: void 0 };
    try {
      const o4 = await this.client.core.crypto.decode(e2, t, { receiverPublicKey: r3, encoding: i4 === Q2.link_mode ? Ee2 : Ht2 });
      isJsonRpcRequest(o4) ? (this.client.core.history.set(e2, o4), await this.onRelayEventRequest({ topic: e2, payload: o4, attestation: s3, transportType: i4, encryptedId: kc(t) })) : isJsonRpcResponse(o4) ? (await this.client.core.history.resolve(o4), await this.onRelayEventResponse({ topic: e2, payload: o4, transportType: i4 }), this.client.core.history.delete(e2, o4.id)) : await this.onRelayEventUnknownPayload({ topic: e2, payload: o4, transportType: i4 }), await this.client.core.relayer.messages.ack(e2, t);
    } catch (o4) {
      this.client.logger.error(o4);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(M3.expired, async (n5) => {
      const { topic: e2, id: t } = bi(n5.target);
      if (t && this.client.pendingRequest.keys.includes(t)) return await this.deletePendingSessionRequest(t, ht2("EXPIRED"), true);
      if (t && this.client.auth.requests.keys.includes(t)) return await this.deletePendingAuthRequest(t, ht2("EXPIRED"), true);
      e2 ? this.client.session.keys.includes(e2) && (await this.deleteSession({ topic: e2, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e2 })) : t && (await this.deleteProposal(t, true), this.client.events.emit("proposal_expire", { id: t }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(se2.create, (n5) => this.onPairingCreated(n5)), this.client.core.pairing.events.on(se2.delete, (n5) => {
      this.addToRecentlyDeleted(n5.topic, "pairing");
    });
  }
  isValidPairingTopic(n5) {
    if (!nt2(n5, false)) {
      const { message: e2 } = ht2("MISSING_OR_INVALID", `pairing topic should be a string: ${n5}`);
      throw new Error(e2);
    }
    if (!this.client.core.pairing.pairings.keys.includes(n5)) {
      const { message: e2 } = ht2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n5}`);
      throw new Error(e2);
    }
    if (vi(this.client.core.pairing.pairings.get(n5).expiry)) {
      const { message: e2 } = ht2("EXPIRED", `pairing topic: ${n5}`);
      throw new Error(e2);
    }
  }
  async isValidSessionTopic(n5) {
    if (!nt2(n5, false)) {
      const { message: e2 } = ht2("MISSING_OR_INVALID", `session topic should be a string: ${n5}`);
      throw new Error(e2);
    }
    if (this.checkRecentlyDeleted(n5), !this.client.session.keys.includes(n5)) {
      const { message: e2 } = ht2("NO_MATCHING_KEY", `session topic doesn't exist: ${n5}`);
      throw new Error(e2);
    }
    if (vi(this.client.session.get(n5).expiry)) {
      await this.deleteSession({ topic: n5 });
      const { message: e2 } = ht2("EXPIRED", `session topic: ${n5}`);
      throw new Error(e2);
    }
    if (!this.client.core.crypto.keychain.has(n5)) {
      const { message: e2 } = ht2("MISSING_OR_INVALID", `session topic does not exist in keychain: ${n5}`);
      throw await this.deleteSession({ topic: n5 }), new Error(e2);
    }
  }
  async isValidSessionOrPairingTopic(n5) {
    if (this.checkRecentlyDeleted(n5), this.client.session.keys.includes(n5)) await this.isValidSessionTopic(n5);
    else if (this.client.core.pairing.pairings.keys.includes(n5)) this.isValidPairingTopic(n5);
    else if (nt2(n5, false)) {
      const { message: e2 } = ht2("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n5}`);
      throw new Error(e2);
    } else {
      const { message: e2 } = ht2("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n5}`);
      throw new Error(e2);
    }
  }
  async isValidProposalId(n5) {
    if (!ga(n5)) {
      const { message: e2 } = ht2("MISSING_OR_INVALID", `proposal id should be a number: ${n5}`);
      throw new Error(e2);
    }
    if (!this.client.proposal.keys.includes(n5)) {
      const { message: e2 } = ht2("NO_MATCHING_KEY", `proposal id doesn't exist: ${n5}`);
      throw new Error(e2);
    }
    if (vi(this.client.proposal.get(n5).expiryTimestamp)) {
      await this.deleteProposal(n5);
      const { message: e2 } = ht2("EXPIRED", `proposal id: ${n5}`);
      throw new Error(e2);
    }
  }
};
var Ns2 = class extends zi2 {
  constructor(n5, e2) {
    super(n5, e2, pt2, we3), this.core = n5, this.logger = e2;
  }
};
var St4 = class extends zi2 {
  constructor(n5, e2) {
    super(n5, e2, ht3, we3), this.core = n5, this.logger = e2;
  }
};
var Os2 = class extends zi2 {
  constructor(n5, e2) {
    super(n5, e2, ut3, we3, (t) => t.id), this.core = n5, this.logger = e2;
  }
};
var bs2 = class extends zi2 {
  constructor(n5, e2) {
    super(n5, e2, mt2, ae, () => ce2), this.core = n5, this.logger = e2;
  }
};
var As2 = class extends zi2 {
  constructor(n5, e2) {
    super(n5, e2, _t3, ae), this.core = n5, this.logger = e2;
  }
};
var xs2 = class extends zi2 {
  constructor(n5, e2) {
    super(n5, e2, Et4, ae, (t) => t.id), this.core = n5, this.logger = e2;
  }
};
var Cs2 = Object.defineProperty;
var Vs3 = (S4, n5, e2) => n5 in S4 ? Cs2(S4, n5, { enumerable: true, configurable: true, writable: true, value: e2 }) : S4[n5] = e2;
var Ge4 = (S4, n5, e2) => Vs3(S4, typeof n5 != "symbol" ? n5 + "" : n5, e2);
var Ds2 = class {
  constructor(n5, e2) {
    this.core = n5, this.logger = e2, Ge4(this, "authKeys"), Ge4(this, "pairingTopics"), Ge4(this, "requests"), this.authKeys = new bs2(this.core, this.logger), this.pairingTopics = new As2(this.core, this.logger), this.requests = new xs2(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
};
var Ls2 = Object.defineProperty;
var ks2 = (S4, n5, e2) => n5 in S4 ? Ls2(S4, n5, { enumerable: true, configurable: true, writable: true, value: e2 }) : S4[n5] = e2;
var E4 = (S4, n5, e2) => ks2(S4, typeof n5 != "symbol" ? n5 + "" : n5, e2);
var Ee4 = class _Ee extends J2 {
  constructor(n5) {
    super(n5), E4(this, "protocol", De3), E4(this, "version", Le4), E4(this, "name", me3.name), E4(this, "metadata"), E4(this, "core"), E4(this, "logger"), E4(this, "events", new import_events8.EventEmitter()), E4(this, "engine"), E4(this, "session"), E4(this, "proposal"), E4(this, "pendingRequest"), E4(this, "auth"), E4(this, "signConfig"), E4(this, "on", (t, s3) => this.events.on(t, s3)), E4(this, "once", (t, s3) => this.events.once(t, s3)), E4(this, "off", (t, s3) => this.events.off(t, s3)), E4(this, "removeListener", (t, s3) => this.events.removeListener(t, s3)), E4(this, "removeAllListeners", (t) => this.events.removeAllListeners(t)), E4(this, "connect", async (t) => {
      try {
        return await this.engine.connect(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "pair", async (t) => {
      try {
        return await this.engine.pair(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "approve", async (t) => {
      try {
        return await this.engine.approve(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "reject", async (t) => {
      try {
        return await this.engine.reject(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "update", async (t) => {
      try {
        return await this.engine.update(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "extend", async (t) => {
      try {
        return await this.engine.extend(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "request", async (t) => {
      try {
        return await this.engine.request(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "respond", async (t) => {
      try {
        return await this.engine.respond(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "ping", async (t) => {
      try {
        return await this.engine.ping(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "emit", async (t) => {
      try {
        return await this.engine.emit(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "disconnect", async (t) => {
      try {
        return await this.engine.disconnect(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "find", (t) => {
      try {
        return this.engine.find(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }), E4(this, "authenticate", async (t, s3) => {
      try {
        return await this.engine.authenticate(t, s3);
      } catch (i4) {
        throw this.logger.error(i4.message), i4;
      }
    }), E4(this, "formatAuthMessage", (t) => {
      try {
        return this.engine.formatAuthMessage(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "approveSessionAuthenticate", async (t) => {
      try {
        return await this.engine.approveSessionAuthenticate(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), E4(this, "rejectSessionAuthenticate", async (t) => {
      try {
        return await this.engine.rejectSessionAuthenticate(t);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), this.name = (n5 == null ? void 0 : n5.name) || me3.name, this.metadata = oi(n5 == null ? void 0 : n5.metadata), this.signConfig = n5 == null ? void 0 : n5.signConfig;
    const e2 = typeof (n5 == null ? void 0 : n5.logger) < "u" && typeof (n5 == null ? void 0 : n5.logger) != "string" ? n5.logger : (0, import_pino2.default)(k2({ level: (n5 == null ? void 0 : n5.logger) || me3.logger }));
    this.core = (n5 == null ? void 0 : n5.core) || new Jo3(n5), this.logger = E(e2, this.name), this.session = new St4(this.core, this.logger), this.proposal = new Ns2(this.core, this.logger), this.pendingRequest = new Os2(this.core, this.logger), this.engine = new Ps2(this), this.auth = new Ds2(this.core, this.logger);
  }
  static async init(n5) {
    const e2 = new _Ee(n5);
    return await e2.initialize(), e2;
  }
  get context() {
    return y(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), setTimeout(() => {
        this.engine.processRelayMessageCache();
      }, (0, import_time5.toMiliseconds)(import_time5.ONE_SECOND));
    } catch (n5) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n5.message), n5;
    }
  }
};
var $s2 = Ee4;

export {
  require_events,
  safeJsonParse,
  safeJsonStringify,
  Ie2 as Ie,
  Ko2 as Ko,
  at,
  gn2 as gn,
  yo2 as yo,
  Nt2 as Nt,
  oe,
  xe2 as xe,
  import_pino2 as import_pino,
  k2 as k,
  parseConnectionError,
  formatJsonRpcRequest,
  formatJsonRpcResult,
  formatJsonRpcError,
  isHttpUrl,
  esm_exports,
  o2 as o,
  Ee4 as Ee,
  $s2 as $s
};
/*! Bundled license information:

tslib/tslib.es6.js:
tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@walletconnect/relay-auth/dist/index.es.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@walletconnect/utils/dist/index.es.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=chunk-53G7QH6O.js.map
