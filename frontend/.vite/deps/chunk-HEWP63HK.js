// node_modules/thirdweb/dist/esm/utils/storage/webStorage.js
var webLocalStorage = {
  async getItem(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        return localStorage.getItem(key);
      }
    } catch {
    }
    return null;
  },
  async removeItem(key) {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    }
  },
  async setItem(key, value) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(key, value);
      }
    } catch {
    }
  }
};

export {
  webLocalStorage
};
//# sourceMappingURL=chunk-HEWP63HK.js.map
