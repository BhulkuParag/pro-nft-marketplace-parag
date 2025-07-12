import {
  getEcosystemInfo
} from "./chunk-KLFYT75S.js";
import "./chunk-Z5XIAL4H.js";
import "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/wallets/ecosystem/get-ecosystem-wallet-info.js
async function getEcosystemWalletInfo(walletId) {
  const data = await getEcosystemInfo(walletId);
  return {
    app: {
      android: null,
      browser: null,
      chrome: null,
      edge: null,
      firefox: null,
      ios: null,
      linux: null,
      mac: null,
      opera: null,
      safari: null,
      windows: null
    },
    desktop: {
      native: null,
      universal: null
    },
    homepage: data.homepage || "",
    id: walletId,
    image_id: data.imageUrl || "",
    mobile: {
      native: null,
      universal: null
    },
    name: data.name,
    rdns: null
  };
}
export {
  getEcosystemWalletInfo
};
//# sourceMappingURL=get-ecosystem-wallet-info-ATML6DYM.js.map
