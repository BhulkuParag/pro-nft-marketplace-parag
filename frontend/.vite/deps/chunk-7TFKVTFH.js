// node_modules/thirdweb/dist/esm/utils/platform.js
function isReactNative() {
  return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
}
function isNode() {
  return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
}
function isBrowser() {
  return !isReactNative() && !isNode();
}

// node_modules/thirdweb/dist/esm/wallets/utils/defaultDappMetadata.js
function getDefaultAppMetadata() {
  if (!isBrowser()) {
    return {
      description: "thirdweb powered dApp",
      logoUrl: "https://thirdweb.com/favicon.ico",
      name: "thirdweb powered dApp",
      url: "https://thirdweb.com"
    };
  }
  const { protocol, hostname, port } = window.location;
  let baseUrl = `${protocol}//${hostname}`;
  if (port && port !== "80" && port !== "443") {
    baseUrl += `:${port}`;
  }
  const logoUrl = `${baseUrl}/favicon.ico`;
  return {
    description: window.document.title || "thirdweb powered dApp",
    logoUrl,
    name: window.document.title || "thirdweb powered dApp",
    url: baseUrl
  };
}

export {
  isBrowser,
  getDefaultAppMetadata
};
//# sourceMappingURL=chunk-7TFKVTFH.js.map
