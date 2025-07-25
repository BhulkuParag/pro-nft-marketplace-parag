// node_modules/thirdweb/dist/esm/utils/domains.js
var DEFAULT_RPC_URL = "rpc.thirdweb.com";
var DEFAULT_SOCIAL_URL = "social.thirdweb.com";
var DEFAULT_IN_APP_WALLET_URL = "embedded-wallet.thirdweb.com";
var DEFAULT_PAY_URL = "pay.thirdweb.com";
var DEFAULT_STORAGE_URL = "storage.thirdweb.com";
var DEFAULT_BUNDLER_URL = "bundler.thirdweb.com";
var DEFAULT_ANALYTICS_URL = "c.thirdweb.com";
var DEFAULT_INSIGHT_URL = "insight.thirdweb.com";
var DEFAULT_ENGINE_CLOUD_URL = "engine.thirdweb.com";
var DEFAULT_BRIDGE_URL = "bridge.thirdweb.com";
var domains = {
  analytics: DEFAULT_ANALYTICS_URL,
  bridge: DEFAULT_BRIDGE_URL,
  bundler: DEFAULT_BUNDLER_URL,
  engineCloud: DEFAULT_ENGINE_CLOUD_URL,
  inAppWallet: DEFAULT_IN_APP_WALLET_URL,
  insight: DEFAULT_INSIGHT_URL,
  pay: DEFAULT_PAY_URL,
  rpc: DEFAULT_RPC_URL,
  social: DEFAULT_SOCIAL_URL,
  storage: DEFAULT_STORAGE_URL
};
var setThirdwebDomains = (DomainOverrides) => {
  domains = {
    analytics: DomainOverrides.analytics ?? DEFAULT_ANALYTICS_URL,
    bridge: DomainOverrides.bridge ?? DEFAULT_BRIDGE_URL,
    bundler: DomainOverrides.bundler ?? DEFAULT_BUNDLER_URL,
    engineCloud: DomainOverrides.engineCloud ?? DEFAULT_ENGINE_CLOUD_URL,
    inAppWallet: DomainOverrides.inAppWallet ?? DEFAULT_IN_APP_WALLET_URL,
    insight: DomainOverrides.insight ?? DEFAULT_INSIGHT_URL,
    pay: DomainOverrides.pay ?? DEFAULT_PAY_URL,
    rpc: DomainOverrides.rpc ?? DEFAULT_RPC_URL,
    social: DomainOverrides.social ?? DEFAULT_SOCIAL_URL,
    storage: DomainOverrides.storage ?? DEFAULT_STORAGE_URL
  };
};
var getThirdwebDomains = () => {
  return domains;
};
var getThirdwebBaseUrl = (service) => {
  const origin = domains[service];
  if (origin.startsWith("localhost")) {
    return `http://${origin}`;
  }
  return `https://${origin}`;
};
var serviceKey = null;
var setServiceKey = (key) => {
  serviceKey = key;
};
var getServiceKey = () => {
  return serviceKey;
};

export {
  DEFAULT_RPC_URL,
  setThirdwebDomains,
  getThirdwebDomains,
  getThirdwebBaseUrl,
  setServiceKey,
  getServiceKey
};
//# sourceMappingURL=chunk-UQSP5VHN.js.map
