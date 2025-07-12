import {
  ConnectingScreen
} from "./chunk-D3JLMCS4.js";
import "./chunk-OPI7XW5K.js";
import "./chunk-AEQBTGBF.js";
import "./chunk-23JZQXRW.js";
import "./chunk-OZT5CELG.js";
import "./chunk-DCLPAO4I.js";
import "./chunk-OUUVSEDB.js";
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
import {
  require_react
} from "./chunk-NQM6PSUW.js";
import {
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/CoinbaseSDKConnection.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
function ExternalWalletConnectUI(props) {
  const { onBack, done, wallet, walletInfo, onGetStarted, locale } = props;
  const [errorConnecting, setErrorConnecting] = (0, import_react.useState)(false);
  const connect = (0, import_react.useCallback)(() => {
    setErrorConnecting(false);
    wallet.connect({
      chain: props.chain,
      client: props.client
    }).then(() => {
      done();
    }).catch((e) => {
      console.error(e);
      setErrorConnecting(true);
    });
  }, [props.client, wallet, props.chain, done]);
  const scanStarted = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    connect();
  }, [connect]);
  return (0, import_jsx_runtime.jsx)(ConnectingScreen, { client: props.client, errorConnecting, locale: {
    failed: locale.connectionScreen.failed,
    getStartedLink: locale.getStartedLink,
    inProgress: locale.connectionScreen.inProgress,
    instruction: locale.connectionScreen.instruction,
    tryAgain: locale.connectionScreen.retry
  }, onBack, onGetStarted, onRetry: connect, size: props.size, walletId: wallet.id, walletName: walletInfo.name });
}
var CoinbaseSDKConnection_default = ExternalWalletConnectUI;
export {
  CoinbaseSDKConnection_default as default
};
//# sourceMappingURL=CoinbaseSDKConnection-WXMRG4EL.js.map
