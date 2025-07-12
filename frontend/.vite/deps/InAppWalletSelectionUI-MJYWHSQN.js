"use client";
import {
  ConnectWalletSocialOptions,
  LoadingScreen,
  reservedScreens,
  useInAppWalletLocale,
  useScreenContext
} from "./chunk-SJ2PI6CH.js";
import {
  WalletEntryButton,
  useSetSelectionData
} from "./chunk-JHTWP4U5.js";
import "./chunk-GHDLIAUP.js";
import "./chunk-OPI7XW5K.js";
import "./chunk-AEQBTGBF.js";
import "./chunk-23JZQXRW.js";
import "./chunk-OZT5CELG.js";
import "./chunk-DCLPAO4I.js";
import "./chunk-OUUVSEDB.js";
import "./chunk-LWVDNX4F.js";
import "./chunk-ZZUP7G4V.js";
import "./chunk-HEWP63HK.js";
import "./chunk-KLFYT75S.js";
import "./chunk-ZX53QXGD.js";
import "./chunk-44OJ64LI.js";
import "./chunk-7TFKVTFH.js";
import "./chunk-BSFH3SFE.js";
import "./chunk-2RRVHQYX.js";
import "./chunk-KJUYME5G.js";
import "./chunk-VRHOYTMZ.js";
import "./chunk-EMWJKMEZ.js";
import "./chunk-HDWEKPHM.js";
import "./chunk-673YCYST.js";
import "./chunk-A5CP6DX3.js";
import "./chunk-VQJYRYIP.js";
import "./chunk-7RUSW4Y7.js";
import "./chunk-NB244MAJ.js";
import "./chunk-AGSXJS3R.js";
import "./chunk-WHDWYZBU.js";
import "./chunk-SD26YTCZ.js";
import "./chunk-3DGGFYQ2.js";
import "./chunk-TACA3XON.js";
import "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import "./chunk-HRHEYRBD.js";
import "./chunk-PG5X2BYF.js";
import "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import "./chunk-NBODG3QK.js";
import "./chunk-UY2SRO54.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import "./chunk-DJWGHHK5.js";
import "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import "./chunk-LZWAEAXR.js";
import "./chunk-RKJ7S5H4.js";
import "./chunk-YIVCHQGZ.js";
import "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import "./chunk-NP7PJWRI.js";
import "./chunk-JGXNTIIP.js";
import "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-UQSP5VHN.js";
import "./chunk-ERYK7KJM.js";
import {
  require_jsx_runtime
} from "./chunk-4VHZN6OL.js";
import "./chunk-HQ6ZTAWL.js";
import "./chunk-NQM6PSUW.js";
import {
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InAppWalletSelectionUI.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function InAppWalletSelectionUI(props) {
  const { screen } = useScreenContext();
  const setData = useSetSelectionData();
  const locale = useInAppWalletLocale(props.connectLocale.id);
  if (props.size === "wide" || screen !== reservedScreens.main && props.size === "compact") {
    return (0, import_jsx_runtime.jsx)(WalletEntryButton, { badge: void 0, client: props.client, connectLocale: props.connectLocale, isActive: screen === props.wallet, recommendedWallets: props.recommendedWallets, selectWallet: () => {
      setData({});
      props.select();
    }, wallet: props.wallet });
  }
  if (!locale) {
    return (0, import_jsx_runtime.jsx)(LoadingScreen, { height: "195px" });
  }
  return (0, import_jsx_runtime.jsx)(ConnectWalletSocialOptions, { chain: props.chain, client: props.client, disabled: props.disabled, done: props.done, goBack: props.goBack, locale, select: props.select, size: props.size, wallet: props.wallet });
}
var InAppWalletSelectionUI_default = InAppWalletSelectionUI;
export {
  InAppWalletSelectionUI_default as default
};
//# sourceMappingURL=InAppWalletSelectionUI-MJYWHSQN.js.map
