import {
  Input,
  Spinner,
  WalletEntryButton,
  useSetSelectionData
} from "./chunk-JHTWP4U5.js";
import {
  Container,
  CrossCircledIcon,
  MagnifyingGlassIcon,
  ModalHeader,
  Spacer,
  Text,
  iconSize,
  spacing,
  useCustomTheme
} from "./chunk-OPI7XW5K.js";
import {
  createWallet,
  getInstalledWalletProviders
} from "./chunk-OZT5CELG.js";
import {
  newStyled
} from "./chunk-ERYK7KJM.js";
import {
  require_jsx_runtime
} from "./chunk-4VHZN6OL.js";
import {
  require_react
} from "./chunk-NQM6PSUW.js";
import {
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AllWalletsUI.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/fuse.js/dist/fuse.mjs
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
var INFINITY = 1 / 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
var hasOwn = Object.prototype.hasOwnProperty;
var KeyStore = class {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      let obj = createKey(key);
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return { path, id, weight, src, getFn };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
var MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
var BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
var FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
var AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};
var SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
var FuseIndex = class {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];
        while (stack.length) {
          const { nestedArrIndex, value: value2 } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
};
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
var MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
var stripDiacritics = String.prototype.normalize ? (str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "") : (str) => str;
var BitapSearch = class {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    if (this.pattern === text) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
};
var BaseMatch = class {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
};
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
var ExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InverseExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var PrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InversePrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var SuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }
};
var InverseSuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var FuzzyMatch = class extends BaseMatch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text) {
    return this._bitapSearch.searchIn(text);
  }
};
var IncludeMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text) {
    let location = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
};
var searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];
var searchersLen = searchers.length;
var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
var OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
var ExtendedSearch = class {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers2 = query[i];
      allIndices.length = 0;
      numMatches = 0;
      for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
        const searcher = searchers2[j];
        const { isMatch, indices, score } = searcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
};
var registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
var LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
var KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
var isPath = (query) => !!query[KeyType.PATH];
var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
var convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, { auto = true } = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({ key, norm: norm2, score }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
      );
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const { indices, value } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);
  return results.map((result) => {
    const { idx } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
var Fuse = class {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };
    if (this.options.useExtendedSearch && false) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
    }
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, { ignoreFieldNorm });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];
    records.forEach(({ v: text, i: idx, n: norm2 }) => {
      if (!isDefined(text)) {
        return;
      }
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm: norm2, indices }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;
        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });
        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ];
        }
        return [];
      }
      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return;
      }
      let matches = [];
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });
      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });
    return results;
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches = [];
    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm2 } = value;
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        matches.push({ score, key, value: text, norm: norm2, indices });
      }
    }
    return matches;
  }
};
Fuse.version = "7.1.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AllWalletsUI.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/wallets/__generated__/wallet-infos.js
var ALL_MINIMAL_WALLET_INFOS = [
  {
    hasMobileSupport: true,
    id: "io.metamask",
    name: "MetaMask"
  },
  {
    hasMobileSupport: true,
    id: "com.trustwallet.app",
    name: "Trust Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.bitget.web3",
    name: "Bitget Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.okex.wallet",
    name: "OKX Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.binance.wallet",
    name: "Binance Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.safepal",
    name: "SafePal"
  },
  {
    hasMobileSupport: true,
    id: "pro.tokenpocket",
    name: "TokenPocket"
  },
  {
    hasMobileSupport: true,
    id: "com.bybit",
    name: "Bybit Wallet"
  },
  {
    hasMobileSupport: true,
    id: "org.uniswap",
    name: "Uniswap Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.zerion.wallet",
    name: "Zerion"
  },
  {
    hasMobileSupport: true,
    id: "me.rainbow",
    name: "Rainbow"
  },
  {
    hasMobileSupport: true,
    id: "com.ledger",
    name: "Ledger Live"
  },
  {
    hasMobileSupport: true,
    id: "com.crypto.wallet",
    name: "Crypto.com Onchain"
  },
  {
    hasMobileSupport: true,
    id: "com.kraken",
    name: "Kraken Wallet "
  },
  {
    hasMobileSupport: true,
    id: "io.1inch.wallet",
    name: "1inch Wallet"
  },
  {
    hasMobileSupport: true,
    id: "im.token",
    name: "imToken"
  },
  {
    hasMobileSupport: true,
    id: "global.safe",
    name: "Safe"
  },
  {
    hasMobileSupport: true,
    id: "xyz.timelesswallet",
    name: "Timeless X"
  },
  {
    hasMobileSupport: true,
    id: "com.roninchain.wallet",
    name: "Ronin Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.elrond.maiar.wallet",
    name: "xPortal"
  },
  {
    hasMobileSupport: true,
    id: "app.backpack",
    name: "Backpack"
  },
  {
    hasMobileSupport: true,
    id: "com.exodus",
    name: "Exodus"
  },
  {
    hasMobileSupport: true,
    id: "com.fireblocks",
    name: "Fireblocks"
  },
  {
    hasMobileSupport: true,
    id: "ag.jup",
    name: "Jupiter"
  },
  {
    hasMobileSupport: true,
    id: "com.blockchain",
    name: "Blockchain.com"
  },
  {
    hasMobileSupport: true,
    id: "io.magiceden.wallet",
    name: "Magic Eden"
  },
  {
    hasMobileSupport: true,
    id: "com.bifrostwallet",
    name: "Bifrost Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.tangem",
    name: "Tangem Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.wemixplay",
    name: "WEMIX Play"
  },
  {
    hasMobileSupport: true,
    id: "com.robinhood.wallet",
    name: "Robinhood Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.bitcoin",
    name: "Bitcoin.com Wallet"
  },
  {
    hasMobileSupport: true,
    id: "org.mathwallet",
    name: "MathWallet"
  },
  {
    hasMobileSupport: true,
    id: "network.blackfort",
    name: "BlackFort Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.keplr",
    name: "Keplr"
  },
  {
    hasMobileSupport: true,
    id: "com.bee",
    name: "BeeWallet"
  },
  {
    hasMobileSupport: true,
    id: "com.veworld",
    name: "VeWorld Mobile"
  },
  {
    hasMobileSupport: true,
    id: "com.bestwallet",
    name: "Best Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.fastex.wallet",
    name: "Yo Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.valoraapp",
    name: "Valora"
  },
  {
    hasMobileSupport: true,
    id: "id.co.pintu",
    name: "Pintu"
  },
  {
    hasMobileSupport: true,
    id: "app.core.extension",
    name: "Core"
  },
  {
    hasMobileSupport: true,
    id: "com.opera",
    name: "Opera Crypto Browser"
  },
  {
    hasMobileSupport: true,
    id: "app.girin",
    name: "Girin Wallet"
  },
  {
    hasMobileSupport: true,
    id: "dev.auroracloud",
    name: "Aurora Pass"
  },
  {
    hasMobileSupport: true,
    id: "com.chain",
    name: "Chain"
  },
  {
    hasMobileSupport: true,
    id: "app.wombat",
    name: "Wombat"
  },
  {
    hasMobileSupport: true,
    id: "me.haha",
    name: "HaHa"
  },
  {
    hasMobileSupport: true,
    id: "io.huddln",
    name: "Huddln"
  },
  {
    hasMobileSupport: true,
    id: "so.onekey.app.wallet",
    name: "OneKey"
  },
  {
    hasMobileSupport: true,
    id: "app.subwallet",
    name: "SubWallet"
  },
  {
    hasMobileSupport: true,
    id: "pk.modular",
    name: "Modular Wallet Prod"
  },
  {
    hasMobileSupport: true,
    id: "com.dcentwallet",
    name: "D'CENT Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.internetmoney",
    name: "Internet Money Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.hashpack.wallet",
    name: "HashPack"
  },
  {
    hasMobileSupport: true,
    id: "app.kabila",
    name: "Kabila Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.sabay.wallet",
    name: "Sabay Wallet App"
  },
  {
    hasMobileSupport: true,
    id: "com.mewwallet",
    name: "MEW wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.tokoin",
    name: "Tokoin | My-T Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.atomicwallet",
    name: "Atomic Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.leapwallet",
    name: "Leap"
  },
  {
    hasMobileSupport: true,
    id: "io.novawallet",
    name: "Nova Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.flowfoundation.wallet",
    name: "Flow Wallet"
  },
  {
    hasMobileSupport: true,
    id: "org.gooddollar",
    name: "GoodDollar"
  },
  {
    hasMobileSupport: true,
    id: "network.cvl",
    name: "CVL Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.bitso",
    name: "Bitso Web3 Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.zengo",
    name: "Zengo Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.klipwallet",
    name: "Klip"
  },
  {
    hasMobileSupport: true,
    id: "xyz.argent",
    name: "Argent"
  },
  {
    hasMobileSupport: true,
    id: "app.everspace",
    name: "Everspace"
  },
  {
    hasMobileSupport: true,
    id: "io.enjin",
    name: "Enjin Wallet"
  },
  {
    hasMobileSupport: true,
    id: "xyz.uniultra.wallet",
    name: "U2U Wallet"
  },
  {
    hasMobileSupport: true,
    id: "social.halo",
    name: "Halo Wallet"
  },
  {
    hasMobileSupport: true,
    id: "tech.okto",
    name: "Okto"
  },
  {
    hasMobileSupport: true,
    id: "io.kriptomat",
    name: "Kriptomat"
  },
  {
    hasMobileSupport: true,
    id: "co.xellar",
    name: "Xellar"
  },
  {
    hasMobileSupport: true,
    id: "network.haqq",
    name: "HAQQ Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.oxalus",
    name: "Oxalus Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.ullapay",
    name: "WOW EARN"
  },
  {
    hasMobileSupport: true,
    id: "org.alephium",
    name: "Alephium Wallet"
  },
  {
    hasMobileSupport: true,
    id: "xyz.frontier.wallet",
    name: "Frontier"
  },
  {
    hasMobileSupport: true,
    id: "network.over",
    name: "OverFlex"
  },
  {
    hasMobileSupport: true,
    id: "money.unstoppable",
    name: "Unstoppable Wallet"
  },
  {
    hasMobileSupport: true,
    id: "me.iopay",
    name: "ioPay"
  },
  {
    hasMobileSupport: true,
    id: "com.tomi",
    name: "tomi Wallet"
  },
  {
    hasMobileSupport: true,
    id: "xyz.coca",
    name: "COCA Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.coin98",
    name: "Coin98 Super Wallet"
  },
  {
    hasMobileSupport: true,
    id: "org.thorwallet",
    name: "THORWallet"
  },
  {
    hasMobileSupport: true,
    id: "com.monarchwallet",
    name: "Monarch Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.loopring.wallet",
    name: "Loopring"
  },
  {
    hasMobileSupport: true,
    id: "one.metapro.wallet",
    name: "metapro wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.burritowallet",
    name: "Burrito"
  },
  {
    hasMobileSupport: true,
    id: "com.mtpelerin",
    name: "Bridge Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.pluswallet",
    name: "Plus Wallet"
  },
  {
    hasMobileSupport: true,
    id: "cc.localtrade.lab",
    name: "LocalTrade Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.uptn.dapp-web",
    name: "UPTN"
  },
  {
    hasMobileSupport: true,
    id: "app.herewallet",
    name: "HERE Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.xcapit",
    name: "Xcapit"
  },
  {
    hasMobileSupport: true,
    id: "app.zeal",
    name: "Zeal"
  },
  {
    hasMobileSupport: true,
    id: "com.oasys-wallet",
    name: "Oasys Passport"
  },
  {
    hasMobileSupport: true,
    id: "com.coolbitx.cwsapp",
    name: "CoolWallet"
  },
  {
    hasMobileSupport: true,
    id: "app.linen",
    name: "Linen"
  },
  {
    hasMobileSupport: true,
    id: "io.nabox",
    name: "Nabox"
  },
  {
    hasMobileSupport: true,
    id: "co.family.wallet",
    name: "Family"
  },
  {
    hasMobileSupport: true,
    id: "app.krystal",
    name: "Krystal"
  },
  {
    hasMobileSupport: true,
    id: "com.ellipal",
    name: "ELLIPAL"
  },
  {
    hasMobileSupport: true,
    id: "io.yusetoken",
    name: "Yuse Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.walletnow",
    name: "NOW Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.saakuru.app",
    name: "Saakuru All-in-One crypto App"
  },
  {
    hasMobileSupport: true,
    id: "com.foxwallet",
    name: "FoxWallet"
  },
  {
    hasMobileSupport: true,
    id: "com.withpaper",
    name: "Paper"
  },
  {
    hasMobileSupport: true,
    id: "io.ricewallet",
    name: "RiceWallet"
  },
  {
    hasMobileSupport: true,
    id: "io.okse",
    name: "Okse Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.aktionariat",
    name: "Aktionariat"
  },
  {
    hasMobileSupport: true,
    id: "io.cypherhq",
    name: "Cypher Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.paybolt",
    name: "PayBolt"
  },
  {
    hasMobileSupport: true,
    id: "io.compasswallet",
    name: "Compass Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.plasma-wallet",
    name: "Plasma Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.cosmostation",
    name: "Cosmostation"
  },
  {
    hasMobileSupport: true,
    id: "org.bytebank",
    name: "ByteBank"
  },
  {
    hasMobileSupport: true,
    id: "com.unstoppabledomains",
    name: "Unstoppable Domains"
  },
  {
    hasMobileSupport: true,
    id: "io.koalawallet",
    name: "Koala Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.optowallet",
    name: "Opto Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.miraiapp",
    name: "Mirai App"
  },
  {
    hasMobileSupport: true,
    id: "app.beewallet",
    name: "Bee Wallet"
  },
  {
    hasMobileSupport: true,
    id: "xyz.sequence",
    name: "Sequence Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.fizen",
    name: "Fizen Wallet"
  },
  {
    hasMobileSupport: true,
    id: "it.airgap",
    name: "AirGap Wallet"
  },
  {
    hasMobileSupport: true,
    id: "org.thepulsewallet",
    name: "The Pulse Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.holdstation",
    name: "Holdstation Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.coinomi",
    name: "Coinomi"
  },
  {
    hasMobileSupport: true,
    id: "com.trusteeglobal",
    name: "Trustee Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.wallacy",
    name: "Wallacy"
  },
  {
    hasMobileSupport: true,
    id: "technology.jambo",
    name: "Jambo"
  },
  {
    hasMobileSupport: true,
    id: "io.bladewallet",
    name: "Blade Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.keyring",
    name: "KEYRING PRO"
  },
  {
    hasMobileSupport: true,
    id: "com.abra",
    name: "Abra Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.premanft",
    name: "PREMA Wallet"
  },
  {
    hasMobileSupport: true,
    id: "finance.voltage",
    name: "Volt Wallet"
  },
  {
    hasMobileSupport: true,
    id: "org.bitizen",
    name: "Bitizen"
  },
  {
    hasMobileSupport: true,
    id: "com.wigwam.wallet",
    name: "Wigwam"
  },
  {
    hasMobileSupport: true,
    id: "app.ultimate",
    name: "Ultimate"
  },
  {
    hasMobileSupport: true,
    id: "com.cakewallet",
    name: "Cake Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.fizzwallet",
    name: "Fizz"
  },
  {
    hasMobileSupport: true,
    id: "com.kucoin",
    name: "KuCoin Web3 Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.stickey",
    name: "Stickey Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.neonwallet",
    name: "Neon Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.coinstats",
    name: "CoinStats"
  },
  {
    hasMobileSupport: true,
    id: "ai.pundi",
    name: "Pundi Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.ripio",
    name: "Ripio Portal"
  },
  {
    hasMobileSupport: true,
    id: "co.arculus",
    name: "Arculus Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.harti",
    name: "HARTi Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.gemwallet",
    name: "Gem Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.dttd",
    name: "DTTD"
  },
  {
    hasMobileSupport: true,
    id: "io.zelcore",
    name: "Zelcore"
  },
  {
    hasMobileSupport: true,
    id: "org.thetatoken",
    name: "Theta Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.blocto",
    name: "Blocto"
  },
  {
    hasMobileSupport: true,
    id: "com.tellaw",
    name: "Tellaw Wallet"
  },
  {
    hasMobileSupport: true,
    id: "xyz.ctrl",
    name: "Ctrl Wallet"
  },
  {
    hasMobileSupport: true,
    id: "is.callback",
    name: "Callback"
  },
  {
    hasMobileSupport: true,
    id: "io.summonersarena",
    name: "SA ASSISTANT"
  },
  {
    hasMobileSupport: true,
    id: "com.safemoon",
    name: "SafeMoon"
  },
  {
    hasMobileSupport: true,
    id: "world.ixo",
    name: "Impact Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.bitpie",
    name: "Bitpie"
  },
  {
    hasMobileSupport: true,
    id: "net.gateweb3",
    name: "GateWallet"
  },
  {
    hasMobileSupport: true,
    id: "io.wallypto",
    name: "Wallypto"
  },
  {
    hasMobileSupport: true,
    id: "io.alpha-u.wallet.web",
    name: "αU wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.lif3",
    name: "Lif3 Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.ammer",
    name: "Ammer Wallet"
  },
  {
    hasMobileSupport: true,
    id: "us.binance",
    name: "Binance.US"
  },
  {
    hasMobileSupport: true,
    id: "com.bitpay",
    name: "BitPay Wallet"
  },
  {
    hasMobileSupport: true,
    id: "co.muza",
    name: "MUZA"
  },
  {
    hasMobileSupport: true,
    id: "jp.co.rakuten-wallet",
    name: "Rakuten Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.ryipay",
    name: "RYIPAY"
  },
  {
    hasMobileSupport: true,
    id: "org.dota168",
    name: "MetaWallet"
  },
  {
    hasMobileSupport: true,
    id: "com.alphawallet",
    name: "AlphaWallet"
  },
  {
    hasMobileSupport: true,
    id: "io.noone",
    name: "Noone Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.myabcwallet",
    name: "ABC Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.wallet3",
    name: "Wallet 3"
  },
  {
    hasMobileSupport: true,
    id: "com.coininn",
    name: "Coininn Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.ambire",
    name: "Ambire Wallet"
  },
  {
    hasMobileSupport: true,
    id: "cc.avacus",
    name: "Avacus"
  },
  {
    hasMobileSupport: true,
    id: "me.easy",
    name: "EASY"
  },
  {
    hasMobileSupport: true,
    id: "app.utorg",
    name: "UTORG"
  },
  {
    hasMobileSupport: true,
    id: "io.scramberry",
    name: "ScramberryWallet"
  },
  {
    hasMobileSupport: true,
    id: "com.saitamatoken",
    name: "SaitaPro"
  },
  {
    hasMobileSupport: true,
    id: "com.secuxtech",
    name: "SecuX"
  },
  {
    hasMobileSupport: true,
    id: "finance.openwallet",
    name: "Open Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.shido",
    name: "Shido App"
  },
  {
    hasMobileSupport: true,
    id: "com.unitywallet",
    name: "Unity Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.onto",
    name: "ONTO"
  },
  {
    hasMobileSupport: true,
    id: "com.companyname.swaptobe",
    name: "TobeWallet"
  },
  {
    hasMobileSupport: true,
    id: "com.midoin",
    name: "midoin"
  },
  {
    hasMobileSupport: true,
    id: "io.hyperpay",
    name: "HyperPay"
  },
  {
    hasMobileSupport: true,
    id: "id.competence",
    name: "Competence.id"
  },
  {
    hasMobileSupport: true,
    id: "io.tradestrike",
    name: "StrikeX Wallet"
  },
  {
    hasMobileSupport: true,
    id: "llc.besc",
    name: "BeanBag"
  },
  {
    hasMobileSupport: true,
    id: "baby.smart",
    name: "Smart.Baby"
  },
  {
    hasMobileSupport: true,
    id: "com.coinsdo",
    name: "CoinWallet"
  },
  {
    hasMobileSupport: true,
    id: "com.ivirse",
    name: "IApp"
  },
  {
    hasMobileSupport: true,
    id: "ch.dssecurity",
    name: "DS Security SA"
  },
  {
    hasMobileSupport: true,
    id: "com.concordium",
    name: "Concordium"
  },
  {
    hasMobileSupport: true,
    id: "io.zkape",
    name: "Ape Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.status",
    name: "Status"
  },
  {
    hasMobileSupport: true,
    id: "io.pitaka",
    name: "Pitaka"
  },
  {
    hasMobileSupport: true,
    id: "io.ozonewallet",
    name: "OzoneWallet"
  },
  {
    hasMobileSupport: true,
    id: "org.mugambo",
    name: "rss wallet"
  },
  {
    hasMobileSupport: true,
    id: "network.mrhb",
    name: "Sahal Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.crossmint",
    name: "Crossmint"
  },
  {
    hasMobileSupport: true,
    id: "io.konio",
    name: "Konio"
  },
  {
    hasMobileSupport: true,
    id: "io.legionnetwork",
    name: "LegionNetwork"
  },
  {
    hasMobileSupport: true,
    id: "com.meld.app",
    name: "MELDapp"
  },
  {
    hasMobileSupport: true,
    id: "io.pltwallet",
    name: "PLTwallet"
  },
  {
    hasMobileSupport: true,
    id: "com.authentrend",
    name: "AT.Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.pockie",
    name: "pockie"
  },
  {
    hasMobileSupport: true,
    id: "io.klever",
    name: "Klever Wallet"
  },
  {
    hasMobileSupport: true,
    id: "org.kelp",
    name: "Kelp"
  },
  {
    hasMobileSupport: true,
    id: "io.ethermail",
    name: "EtherMail"
  },
  {
    hasMobileSupport: true,
    id: "pro.fintoken",
    name: "FINTOKEN"
  },
  {
    hasMobileSupport: true,
    id: "com.paliwallet",
    name: "Pali Wallet"
  },
  {
    hasMobileSupport: true,
    id: "vc.uincubator.api",
    name: "UIIC"
  },
  {
    hasMobileSupport: true,
    id: "io.unagi.unawallet",
    name: "una Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.liberawallet",
    name: "Libera"
  },
  {
    hasMobileSupport: true,
    id: "io.armana.portal",
    name: "Armana Portal"
  },
  {
    hasMobileSupport: true,
    id: "io.nash",
    name: "Nash"
  },
  {
    hasMobileSupport: true,
    id: "com.x9wallet",
    name: "X9Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.kigo",
    name: "Kigo"
  },
  {
    hasMobileSupport: true,
    id: "world.dosi.vault",
    name: "DOSI Vault"
  },
  {
    hasMobileSupport: true,
    id: "io.nonbank",
    name: "NonBank"
  },
  {
    hasMobileSupport: true,
    id: "app.hbwallet",
    name: "HB WALLET"
  },
  {
    hasMobileSupport: true,
    id: "com.getcogni",
    name: "Cogni "
  },
  {
    hasMobileSupport: true,
    id: "gg.indi",
    name: "IndiGG"
  },
  {
    hasMobileSupport: true,
    id: "app.qubic.wallet",
    name: "Qubic Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.fxwallet",
    name: "FxWallet"
  },
  {
    hasMobileSupport: true,
    id: "app.sinum",
    name: "Sinum"
  },
  {
    hasMobileSupport: true,
    id: "com.kryptogo",
    name: "KryptoGO Wallet"
  },
  {
    hasMobileSupport: true,
    id: "finance.soulswap.app",
    name: "SoulSwap"
  },
  {
    hasMobileSupport: true,
    id: "com.shapeshift",
    name: "ShapeShift"
  },
  {
    hasMobileSupport: true,
    id: "io.ready",
    name: "Ready"
  },
  {
    hasMobileSupport: true,
    id: "org.shefi",
    name: "SheFi"
  },
  {
    hasMobileSupport: true,
    id: "money.keychain",
    name: "Keychain"
  },
  {
    hasMobileSupport: true,
    id: "com.beexo",
    name: "Beexo"
  },
  {
    hasMobileSupport: true,
    id: "live.superex",
    name: "SuperWallet"
  },
  {
    hasMobileSupport: true,
    id: "io.getclave",
    name: "Clave"
  },
  {
    hasMobileSupport: true,
    id: "com.bettatrade",
    name: "Bettatrade"
  },
  {
    hasMobileSupport: true,
    id: "io.neopin",
    name: "NEOPIN"
  },
  {
    hasMobileSupport: true,
    id: "online.puzzle",
    name: "Puzzle Wallet"
  },
  {
    hasMobileSupport: true,
    id: "xyz.echooo",
    name: "Echooo Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.get-verso",
    name: "Verso"
  },
  {
    hasMobileSupport: true,
    id: "com.wemix",
    name: "WemixWallet"
  },
  {
    hasMobileSupport: true,
    id: "io.trinity-tech",
    name: "Essentials"
  },
  {
    hasMobileSupport: true,
    id: "io.trustasset",
    name: "Trust Asset Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.dfinnwallet",
    name: "Dfinn Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.bmawallet",
    name: "BMA Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.transi",
    name: "Transi"
  },
  {
    hasMobileSupport: true,
    id: "io.safecryptowallet",
    name: "SafeWallet"
  },
  {
    hasMobileSupport: true,
    id: "finance.plena",
    name: "Plena-App"
  },
  {
    hasMobileSupport: true,
    id: "io.certhis",
    name: "Certhis"
  },
  {
    hasMobileSupport: true,
    id: "inc.tomo",
    name: "Tomo Wallet"
  },
  {
    hasMobileSupport: true,
    id: "me.komet.app",
    name: "Komet"
  },
  {
    hasMobileSupport: true,
    id: "com.pandoshi",
    name: "Pandoshi Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.guardiianwallet",
    name: "GUARDIIAN Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.bscecowallet",
    name: "BSC Wallet"
  },
  {
    hasMobileSupport: true,
    id: "co.lifedefi",
    name: "Life DeFi"
  },
  {
    hasMobileSupport: true,
    id: "com.zypto",
    name: "Zypto"
  },
  {
    hasMobileSupport: true,
    id: "com.broearn",
    name: "Broearn Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.ttmwallet",
    name: "MDAO Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.tastycrypto",
    name: "tastycrypto"
  },
  {
    hasMobileSupport: true,
    id: "com.ipmb",
    name: "IPMB Wallet"
  },
  {
    hasMobileSupport: true,
    id: "xyz.nestwallet",
    name: "Nest Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.nicegram",
    name: "Nicegram Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.ballet",
    name: "Ballet Crypto"
  },
  {
    hasMobileSupport: true,
    id: "app.omni",
    name: "Omni"
  },
  {
    hasMobileSupport: true,
    id: "io.paraswap",
    name: "ParaSwap Wallet"
  },
  {
    hasMobileSupport: true,
    id: "one.mixin.messenger",
    name: "Mixin Messenger"
  },
  {
    hasMobileSupport: true,
    id: "com.cryptokara",
    name: "Cryptokara"
  },
  {
    hasMobileSupport: true,
    id: "com.caesiumlab",
    name: "Caesium"
  },
  {
    hasMobileSupport: true,
    id: "com.nodle",
    name: "Nodle"
  },
  {
    hasMobileSupport: true,
    id: "io.universaleverything",
    name: "UniversalProfiles"
  },
  {
    hasMobileSupport: true,
    id: "finance.islamicoin",
    name: "ISLAMIwallet"
  },
  {
    hasMobileSupport: true,
    id: "com.thirdweb",
    name: "thirdweb"
  },
  {
    hasMobileSupport: true,
    id: "com.opz",
    name: "OPZ Wallet"
  },
  {
    hasMobileSupport: true,
    id: "fun.tobi",
    name: "Tobi"
  },
  {
    hasMobileSupport: true,
    id: "trade.flooz.wallet",
    name: "Flooz"
  },
  {
    hasMobileSupport: true,
    id: "org.talkapp",
    name: "T+ Wallet "
  },
  {
    hasMobileSupport: true,
    id: "io.plutope",
    name: "Plutope"
  },
  {
    hasMobileSupport: true,
    id: "org.ecoinwallet",
    name: "ECOIN Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.poolsmobility.wallet",
    name: "poolswallet"
  },
  {
    hasMobileSupport: true,
    id: "xyz.roam.wallet",
    name: "Roam"
  },
  {
    hasMobileSupport: true,
    id: "com.dextrade",
    name: "DexTrade"
  },
  {
    hasMobileSupport: true,
    id: "app.gamic",
    name: "Gamic"
  },
  {
    hasMobileSupport: true,
    id: "world.fncy",
    name: "Fncy Mobile Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.m1nty",
    name: "M1NTY"
  },
  {
    hasMobileSupport: true,
    id: "com.3swallet",
    name: "3S Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.catecoin",
    name: "Catecoin Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.payperless",
    name: "Payperless"
  },
  {
    hasMobileSupport: true,
    id: "com.coincircle",
    name: "CoinCircle"
  },
  {
    hasMobileSupport: true,
    id: "io.helixid",
    name: "helix id"
  },
  {
    hasMobileSupport: true,
    id: "io.passpay",
    name: "PassPay Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.kresus",
    name: "Kresus SuperApp"
  },
  {
    hasMobileSupport: true,
    id: "com.nufinetes",
    name: "Nufinetes"
  },
  {
    hasMobileSupport: true,
    id: "world.qoin",
    name: "Qoin Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.copiosa",
    name: "Copiosa"
  },
  {
    hasMobileSupport: true,
    id: "io.ancrypto",
    name: "Ancrypto"
  },
  {
    hasMobileSupport: true,
    id: "app.keeper-wallet",
    name: "Keeper"
  },
  {
    hasMobileSupport: true,
    id: "io.bharatbox",
    name: "BharatBox App"
  },
  {
    hasMobileSupport: true,
    id: "xyz.orion",
    name: "Orion"
  },
  {
    hasMobileSupport: true,
    id: "com.cryptnox",
    name: "Cryptnox Wallet"
  },
  {
    hasMobileSupport: true,
    id: "zone.bitverse",
    name: "Bitverse"
  },
  {
    hasMobileSupport: true,
    id: "cc.dropp",
    name: "Dropp"
  },
  {
    hasMobileSupport: true,
    id: "com.sinohope",
    name: "Sinohope"
  },
  {
    hasMobileSupport: true,
    id: "ai.hacken",
    name: "hAI by Hacken"
  },
  {
    hasMobileSupport: true,
    id: "net.spatium",
    name: "Spatium"
  },
  {
    hasMobileSupport: true,
    id: "com.bitnovo",
    name: "Bitnovo Wallet"
  },
  {
    hasMobileSupport: true,
    id: "co.swopme",
    name: "SWOP"
  },
  {
    hasMobileSupport: true,
    id: "land.liker",
    name: "LikerLand App"
  },
  {
    hasMobileSupport: true,
    id: "io.owallet",
    name: "OWallet"
  },
  {
    hasMobileSupport: true,
    id: "com.dolletwallet",
    name: "Dollet"
  },
  {
    hasMobileSupport: true,
    id: "net.shinobi-wallet",
    name: "Shinobi-Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.azcoiner",
    name: "AZCoiner"
  },
  {
    hasMobileSupport: true,
    id: "com.pierwallet",
    name: "pier"
  },
  {
    hasMobileSupport: true,
    id: "io.talken",
    name: "Talken Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.passwallet.app",
    name: "Pass App: Web3 Smart Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.coinex.wallet",
    name: "CoinEx Wallet"
  },
  {
    hasMobileSupport: true,
    id: "pub.dg",
    name: "DGPub App"
  },
  {
    hasMobileSupport: true,
    id: "app.xverse",
    name: "Xverse"
  },
  {
    hasMobileSupport: true,
    id: "nl.greenhood.wallet",
    name: "Greenhood"
  },
  {
    hasMobileSupport: true,
    id: "com.flash-wallet",
    name: "Flash Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.vgxfoundation",
    name: "VGX Wallet"
  },
  {
    hasMobileSupport: true,
    id: "org.arianee",
    name: "Arianee Wallet"
  },
  {
    hasMobileSupport: true,
    id: "ai.spotonchain.platform",
    name: "Spot On Chain App"
  },
  {
    hasMobileSupport: true,
    id: "com.tiduswallet",
    name: "Tidus Wallet "
  },
  {
    hasMobileSupport: true,
    id: "technology.obvious",
    name: "Obvious"
  },
  {
    hasMobileSupport: true,
    id: "com.daffione",
    name: "DaffiOne"
  },
  {
    hasMobileSupport: true,
    id: "com.webauth",
    name: "WebAuth"
  },
  {
    hasMobileSupport: true,
    id: "app.tofee",
    name: "Tofee Wallet Official"
  },
  {
    hasMobileSupport: true,
    id: "io.didwallet",
    name: "DIDWallet"
  },
  {
    hasMobileSupport: true,
    id: "xyz.bonuz",
    name: "Bonuz Social Smart Wallet"
  },
  {
    hasMobileSupport: true,
    id: "social.gm2",
    name: "GM² Social"
  },
  {
    hasMobileSupport: true,
    id: "co.cyber.wallet",
    name: "CyberWallet"
  },
  {
    hasMobileSupport: true,
    id: "me.astrox",
    name: "Me Wallet"
  },
  {
    hasMobileSupport: true,
    id: "fi.pillar",
    name: "Pillar"
  },
  {
    hasMobileSupport: true,
    id: "io.buzz-up",
    name: "BUZZUP"
  },
  {
    hasMobileSupport: true,
    id: "io.moonstake",
    name: "MOONSTAKE"
  },
  {
    hasMobileSupport: true,
    id: "io.hippowallet",
    name: "Hippo Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.amazewallet",
    name: "AmazeWallet"
  },
  {
    hasMobileSupport: true,
    id: "com.kriptonio",
    name: "Kriptonio"
  },
  {
    hasMobileSupport: true,
    id: "io.altme",
    name: "Altme"
  },
  {
    hasMobileSupport: true,
    id: "io.ukiss",
    name: "UKISS Hub"
  },
  {
    hasMobileSupport: true,
    id: "fi.dropmate",
    name: "Dropmate"
  },
  {
    hasMobileSupport: true,
    id: "io.zelus",
    name: "Zelus Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.xucre",
    name: "Xucre"
  },
  {
    hasMobileSupport: true,
    id: "net.myrenegade",
    name: "Renegade"
  },
  {
    hasMobileSupport: true,
    id: "net.stasis",
    name: "Stasis Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.clingon",
    name: "Cling Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.humbl",
    name: "HUMBL WALLET"
  },
  {
    hasMobileSupport: true,
    id: "com.peakdefi",
    name: "PEAKDEFI"
  },
  {
    hasMobileSupport: true,
    id: "network.dgg",
    name: "DGG Wallet"
  },
  {
    hasMobileSupport: true,
    id: "finance.panaroma",
    name: "Panaroma Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.icewal",
    name: "icewal"
  },
  {
    hasMobileSupport: true,
    id: "io.streakk",
    name: "Streakk Wallet"
  },
  {
    hasMobileSupport: true,
    id: "network.gridlock",
    name: "Gridlock Wallet"
  },
  {
    hasMobileSupport: true,
    id: "network.trustkeys",
    name: "TrustKeys Web3 SocialFi"
  },
  {
    hasMobileSupport: true,
    id: "finance.slingshot",
    name: "Slingshot Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.mpcvault.broswerplugin",
    name: "MPCVault | Team crypto wallet"
  },
  {
    hasMobileSupport: true,
    id: "digital.minerva",
    name: "Minerva Wallet"
  },
  {
    hasMobileSupport: true,
    id: "finance.porta",
    name: "PortaWallet"
  },
  {
    hasMobileSupport: true,
    id: "io.earthwallet",
    name: "Earth Wallet"
  },
  {
    hasMobileSupport: true,
    id: "app.clot",
    name: "Clot"
  },
  {
    hasMobileSupport: true,
    id: "com.alicebob",
    name: "Alicebob Wallet"
  },
  {
    hasMobileSupport: true,
    id: "net.spatium.wallet",
    name: "Spatium"
  },
  {
    hasMobileSupport: true,
    id: "id.plumaa",
    name: "Plumaa ID"
  },
  {
    hasMobileSupport: true,
    id: "com.apollox",
    name: "ApolloX"
  },
  {
    hasMobileSupport: true,
    id: "io.legacynetwork",
    name: "Legacy Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.ethos",
    name: "Ethos Self-Custody Vault"
  },
  {
    hasMobileSupport: true,
    id: "com.rktechworks",
    name: "ID Pocket"
  },
  {
    hasMobileSupport: true,
    id: "com.greengloryglobal",
    name: "Blockaura"
  },
  {
    hasMobileSupport: true,
    id: "co.filwallet",
    name: "FILWallet"
  },
  {
    hasMobileSupport: true,
    id: "money.snowball",
    name: "Snowball"
  },
  {
    hasMobileSupport: true,
    id: "com.ennowallet",
    name: "Enno Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.safematrix",
    name: "Safematrix"
  },
  {
    hasMobileSupport: true,
    id: "pro.assure",
    name: "Assure"
  },
  {
    hasMobileSupport: true,
    id: "app.edge",
    name: "Edge Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.neftipedia",
    name: "NeftiWallet"
  },
  {
    hasMobileSupport: true,
    id: "io.goldbit",
    name: "GoldBit"
  },
  {
    hasMobileSupport: true,
    id: "com.coingrig",
    name: "Coingrig"
  },
  {
    hasMobileSupport: true,
    id: "io.xfun",
    name: "XFUN Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.antiersolutions",
    name: "Ancrypto Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.itoken",
    name: "iToken Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.cardstack",
    name: "Card Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.slavi",
    name: "Slavi Wallet"
  },
  {
    hasMobileSupport: true,
    id: "tech.defiantapp",
    name: "Defiant"
  },
  {
    hasMobileSupport: true,
    id: "app.imem",
    name: "iMe"
  },
  {
    hasMobileSupport: true,
    id: "com.socios.app",
    name: "Socios.com - Wallet & Tokens"
  },
  {
    hasMobileSupport: true,
    id: "io.bimwallet",
    name: "BIM Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.adftechnology",
    name: "ADF Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.reown.appkit-lab",
    name: "Flutter Sample Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.reown",
    name: "React Native Sample Wallet"
  },
  {
    hasMobileSupport: true,
    id: "com.reown.docs",
    name: "Kotlin Sample Internal Wallet"
  },
  {
    hasMobileSupport: true,
    id: "io.yowallet",
    name: "YoWallet"
  },
  {
    hasMobileSupport: true,
    id: "org.hot-labs",
    name: "HOT Wallet"
  },
  {
    hasMobileSupport: true,
    id: "ai.purewallet",
    name: "PureWallet app"
  },
  {
    hasMobileSupport: true,
    id: "io.walletverse",
    name: "Walletverse"
  },
  {
    hasMobileSupport: true,
    id: "com.berasig",
    name: "BeraSig"
  },
  {
    hasMobileSupport: false,
    id: "app.phantom",
    name: "Phantom"
  },
  {
    hasMobileSupport: false,
    id: "com.coinbase.wallet",
    name: "Coinbase Wallet"
  },
  {
    hasMobileSupport: false,
    id: "io.rabby",
    name: "Rabby"
  },
  {
    hasMobileSupport: false,
    id: "com.brave.wallet",
    name: "Brave Wallet"
  },
  {
    hasMobileSupport: false,
    id: "com.moongate.one",
    name: "MG"
  },
  {
    hasMobileSupport: false,
    id: "tech.levain",
    name: "Levain"
  },
  {
    hasMobileSupport: false,
    id: "com.enkrypt",
    name: "Enkrypt"
  },
  {
    hasMobileSupport: false,
    id: "com.scramble",
    name: "Scramble"
  },
  {
    hasMobileSupport: false,
    id: "io.finoa",
    name: "FinoaConnect"
  },
  {
    hasMobileSupport: false,
    id: "com.blanqlabs.wallet",
    name: "Blanq"
  },
  {
    hasMobileSupport: false,
    id: "com.walletconnect.com",
    name: "SampleW"
  },
  {
    hasMobileSupport: false,
    id: "app.nightly",
    name: "Nightly"
  },
  {
    hasMobileSupport: false,
    id: "com.blazpay.wallet",
    name: "Blazpay"
  },
  {
    hasMobileSupport: false,
    id: "io.getjoin.prd",
    name: "JOIN MOBILE APP"
  },
  {
    hasMobileSupport: false,
    id: "xyz.talisman",
    name: "Talisman Wallet"
  },
  {
    hasMobileSupport: false,
    id: "eu.flashsoft.clear-wallet",
    name: "clear-wallet"
  },
  {
    hasMobileSupport: false,
    id: "app.berasig",
    name: "BeraSig"
  },
  {
    hasMobileSupport: false,
    id: "com.wallet.reown",
    name: "Leather"
  },
  {
    hasMobileSupport: false,
    id: "com.lootrush",
    name: "LootRush"
  },
  {
    hasMobileSupport: false,
    id: "xyz.dawnwallet",
    name: "Dawn Wallet"
  },
  {
    hasMobileSupport: false,
    id: "xyz.abs",
    name: "Abstract Global Wallet"
  },
  {
    hasMobileSupport: true,
    id: "smart",
    name: "Smart Wallet"
  },
  {
    hasMobileSupport: true,
    id: "inApp",
    name: "In-App Wallet"
  },
  {
    hasMobileSupport: true,
    id: "embedded",
    name: "In-App Wallet"
  },
  {
    hasMobileSupport: false,
    id: "walletConnect",
    name: "WalletConnect"
  }
];
var wallet_infos_default = ALL_MINIMAL_WALLET_INFOS;

// node_modules/thirdweb/dist/esm/react/web/utils/sortWallets.js
function sortWallets(wallets, recommendedWallets) {
  const providers = getInstalledWalletProviders();
  return wallets.sort((a, b) => {
    const aInstalled = providers.find((p) => p.info.rdns === a.id);
    const bInstalled = providers.find((p) => p.info.rdns === b.id);
    if (aInstalled && !bInstalled) {
      return -1;
    }
    if (!aInstalled && bInstalled) {
      return 1;
    }
    return 0;
  }).sort((a, b) => {
    const aIsRecommended = recommendedWallets == null ? void 0 : recommendedWallets.find((w) => w.id === a.id);
    const bIsRecommended = recommendedWallets == null ? void 0 : recommendedWallets.find((w) => w.id === b.id);
    if (aIsRecommended && !bIsRecommended) {
      return -1;
    }
    if (!aIsRecommended && bIsRecommended) {
      return 1;
    }
    return 0;
  }).sort((a, b) => {
    const aIsInApp = a.id === "inApp" || a.id === "embedded";
    const bIsInApp = b.id === "inApp" || b.id === "embedded";
    if (aIsInApp && !bIsInApp) {
      return -1;
    }
    if (!aIsInApp && bIsInApp) {
      return 1;
    }
    return 0;
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/hooks/useDebouncedValue.js
var import_react = __toESM(require_react(), 1);
function useDebouncedValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(value);
  (0, import_react.useEffect)(() => {
    let ignore = false;
    const id = setTimeout(() => {
      if (ignore) {
        return;
      }
      setDebouncedValue(value);
    }, delay);
    return () => {
      ignore = true;
      clearTimeout(id);
    };
  }, [value, delay]);
  return debouncedValue;
}

// node_modules/thirdweb/dist/esm/react/web/ui/hooks/useShowMore.js
var import_react2 = __toESM(require_react(), 1);
function useShowMore(initialItemsToShow, itemsToAdd) {
  const [itemsToShow, setItemsToShow] = (0, import_react2.useState)(initialItemsToShow);
  const lastItemRef = (0, import_react2.useCallback)((node) => {
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      var _a;
      if ((_a = entries[0]) == null ? void 0 : _a.isIntersecting) {
        setItemsToShow((prev) => prev + itemsToAdd);
      }
    }, { threshold: 1 });
    observer.observe(node);
  }, [itemsToAdd]);
  return { itemsToShow, lastItemRef };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AllWalletsUI.js
function AllWalletsUI(props) {
  const { itemsToShow, lastItemRef } = useShowMore(10, 10);
  const setSelectionData = useSetSelectionData();
  const walletList = (0, import_react3.useMemo)(() => {
    return wallet_infos_default.filter((wallet) => {
      return props.specifiedWallets.findIndex((x) => x.id === wallet.id) === -1;
    });
  }, [props.specifiedWallets]);
  const fuseInstance = (0, import_react3.useMemo)(() => {
    return new Fuse(walletList, {
      keys: [
        {
          name: "name",
          weight: 1
        }
      ],
      threshold: 0.4
    });
  }, [walletList]);
  const listContainer = (0, import_react3.useRef)(null);
  const [searchTerm, setSearchTerm] = (0, import_react3.useState)("");
  const deferredSearchTerm = useDebouncedValue(searchTerm, 300);
  const searchResults = deferredSearchTerm ? fuseInstance.search(deferredSearchTerm).map((result) => result.item) : walletList;
  const walletInfosToShow = (0, import_react3.useMemo)(() => {
    return sortWallets(searchResults.slice(0, itemsToShow));
  }, [searchResults, itemsToShow]);
  return (0, import_jsx_runtime.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: [(0, import_jsx_runtime.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime.jsx)(ModalHeader, { onBack: props.onBack, title: "Select Wallet" }) }), (0, import_jsx_runtime.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime.jsxs)("div", { style: {
    alignItems: "center",
    display: "flex",
    position: "relative"
  }, children: [(0, import_jsx_runtime.jsx)(StyledMagnifyingGlassIcon, { height: iconSize.md, width: iconSize.md }), (0, import_jsx_runtime.jsx)(Input, { onChange: (e) => {
    var _a, _b;
    (_b = (_a = listContainer.current) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.scroll({
      top: 0
    });
    setSearchTerm(e.target.value);
  }, placeholder: "Search Wallet", style: {
    padding: `${spacing.sm} ${spacing.sm} ${spacing.sm} ${spacing.xxl}`
  }, tabIndex: -1, value: searchTerm, variant: "outline" }), deferredSearchTerm !== searchTerm && (0, import_jsx_runtime.jsx)("div", { style: {
    position: "absolute",
    right: spacing.md
  }, children: (0, import_jsx_runtime.jsx)(Spinner, { color: "accentText", size: "md" }) })] }) }), walletInfosToShow.length > 0 && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime.jsxs)(Container, { animate: "fadein", expand: true, scrollY: true, children: [(0, import_jsx_runtime.jsx)("div", { ref: listContainer, style: {
    maxHeight: props.size === "compact" ? "400px" : void 0,
    paddingInline: spacing.md
  }, children: walletInfosToShow.map((walletInfo, i) => {
    const isLast = i === walletInfosToShow.length - 1;
    const wallet = createWallet(walletInfo.id);
    return (0, import_jsx_runtime.jsx)("li", { ref: isLast ? lastItemRef : void 0, style: {
      listStyle: "none"
    }, children: (0, import_jsx_runtime.jsx)(WalletEntryButton, { badge: void 0, client: props.client, connectLocale: props.connectLocale, isActive: false, recommendedWallets: props.recommendedWallets, selectWallet: () => {
      props.onSelect(wallet);
      if (!props.disableSelectionDataReset) {
        setSelectionData({});
      }
    }, wallet }) }, walletInfo.id);
  }) }), (0, import_jsx_runtime.jsx)(Spacer, { y: "xl" })] })] }), walletInfosToShow.length === 0 && (0, import_jsx_runtime.jsxs)(Container, { animate: "fadein", center: "both", color: "secondaryText", expand: true, flex: "column", gap: "md", style: {
    minHeight: "250px"
  }, children: [(0, import_jsx_runtime.jsx)(CrossCircledIcon, { height: iconSize.xl, width: iconSize.xl }), (0, import_jsx_runtime.jsx)(Text, { children: " No Results " })] })] });
}
var StyledMagnifyingGlassIcon = newStyled(MagnifyingGlassIcon)((_) => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.secondaryText,
    left: spacing.sm,
    position: "absolute"
  };
});
var AllWalletsUI_default = AllWalletsUI;

export {
  Fuse,
  useDebouncedValue,
  useShowMore,
  sortWallets,
  AllWalletsUI_default
};
//# sourceMappingURL=chunk-EVRLKEF4.js.map
