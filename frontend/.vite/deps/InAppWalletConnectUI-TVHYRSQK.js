"use client";
import {
  GuestLogin,
  OTPLoginUI,
  PassKeyLogin,
  PoweredByThirdweb,
  SocialLogin,
  TOS,
  WalletAuth
} from "./chunk-Y4FCGFBJ.js";
import "./chunk-EVRLKEF4.js";
import {
  ConnectWalletSocialOptions,
  LoadingScreen,
  useInAppWalletLocale,
  useScreenContext
} from "./chunk-SJ2PI6CH.js";
import {
  useSelectionData,
  useSetSelectionData
} from "./chunk-JHTWP4U5.js";
import "./chunk-GHDLIAUP.js";
import "./chunk-D3JLMCS4.js";
import {
  Container,
  Img,
  ModalHeader,
  ModalTitle,
  Spacer,
  iconSize
} from "./chunk-OPI7XW5K.js";
import "./chunk-AEQBTGBF.js";
import "./chunk-X4LMPBJA.js";
import "./chunk-23JZQXRW.js";
import "./chunk-OZT5CELG.js";
import "./chunk-DCLPAO4I.js";
import "./chunk-OUUVSEDB.js";
import "./chunk-IFTE4LJM.js";
import "./chunk-LWVDNX4F.js";
import "./chunk-ZZUP7G4V.js";
import "./chunk-CYVKJMZE.js";
import "./chunk-HEWP63HK.js";
import "./chunk-KLFYT75S.js";
import "./chunk-ZX53QXGD.js";
import "./chunk-44OJ64LI.js";
import "./chunk-7TFKVTFH.js";
import "./chunk-BSFH3SFE.js";
import "./chunk-2RRVHQYX.js";
import "./chunk-VJOHABJ4.js";
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

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InAppWalletConnectUI.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InAppWalletFormUI.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
function InAppWalletFormUIScreen(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const isCompact = props.size === "compact";
  const { initialScreen, screen } = useScreenContext();
  const [isApproved, setIsApproved] = (0, import_react.useState)(false);
  const isInitialScreen = screen === props.wallet && initialScreen === props.wallet;
  const onBack = isInitialScreen && !props.isLinking ? void 0 : props.goBack;
  return (0, import_jsx_runtime.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, p: "lg", style: {
    minHeight: "250px"
  }, children: [isCompact && (isInitialScreen ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(ModalHeader, { leftAligned: !props.isLinking, onBack, title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!((_a = props.meta) == null ? void 0 : _a.titleIconUrl) ? null : (0, import_jsx_runtime.jsx)(Img, { client: props.client, height: iconSize.md, src: (_b = props.meta) == null ? void 0 : _b.titleIconUrl, width: iconSize.md }), (0, import_jsx_runtime.jsx)(ModalTitle, { children: ((_c = props.meta) == null ? void 0 : _c.title) ?? props.inAppWalletLocale.emailLoginScreen.title })] }) }), (0, import_jsx_runtime.jsx)(Spacer, { y: "lg" })] }) : (0, import_jsx_runtime.jsx)(ModalHeader, { onBack, title: props.inAppWalletLocale.signIn })), (0, import_jsx_runtime.jsx)(Container, { center: "y", expand: true, flex: "column", p: isCompact ? void 0 : "lg", children: (0, import_jsx_runtime.jsx)(ConnectWalletSocialOptions, { ...props, disabled: ((_d = props.meta) == null ? void 0 : _d.requireApproval) && !isApproved, locale: props.inAppWalletLocale }) }), isCompact && (((_e = props.meta) == null ? void 0 : _e.showThirdwebBranding) !== false || ((_f = props.meta) == null ? void 0 : _f.termsOfServiceUrl) || ((_g = props.meta) == null ? void 0 : _g.privacyPolicyUrl)) && (0, import_jsx_runtime.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime.jsxs)(Container, { flex: "column", gap: "lg", children: [(0, import_jsx_runtime.jsx)(TOS, { isApproved, locale: props.connectLocale.agreement, onApprove: () => {
    setIsApproved(!isApproved);
  }, privacyPolicyUrl: (_h = props.meta) == null ? void 0 : _h.privacyPolicyUrl, requireApproval: (_i = props.meta) == null ? void 0 : _i.requireApproval, termsOfServiceUrl: (_j = props.meta) == null ? void 0 : _j.termsOfServiceUrl }), ((_k = props.meta) == null ? void 0 : _k.showThirdwebBranding) !== false && (0, import_jsx_runtime.jsx)(PoweredByThirdweb, {})] })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InAppWalletConnectUI.js
function InAppWalletConnectUI(props) {
  const data = useSelectionData();
  const setSelectionData = useSetSelectionData();
  const state = data;
  const localeId = props.connectLocale.id;
  const locale = useInAppWalletLocale(localeId);
  const { initialScreen } = useScreenContext();
  if (!locale) {
    return (0, import_jsx_runtime2.jsx)(LoadingScreen, {});
  }
  const goBackToMain = () => {
    var _a;
    if (initialScreen === props.wallet) {
      setSelectionData({});
    } else {
      (_a = props.goBack) == null ? void 0 : _a.call(props);
      setSelectionData({});
    }
  };
  const done = () => {
    props.done();
    setSelectionData({});
  };
  const otpUserInfo = (state == null ? void 0 : state.emailLogin) ? { email: state.emailLogin } : (state == null ? void 0 : state.phoneLogin) ? { phone: state.phoneLogin } : void 0;
  if (otpUserInfo) {
    return (0, import_jsx_runtime2.jsx)(OTPLoginUI, { chain: props.chain, client: props.client, done, goBack: goBackToMain, isLinking: props.isLinking, locale, size: props.size, userInfo: otpUserInfo, wallet: props.wallet });
  }
  if (state == null ? void 0 : state.passkeyLogin) {
    return (0, import_jsx_runtime2.jsx)(PassKeyLogin, { chain: props.chain, client: props.client, done, isLinking: props.isLinking, locale: props.connectLocale, onBack: goBackToMain, size: props.size, wallet: props.wallet });
  }
  if (state == null ? void 0 : state.walletLogin) {
    return (0, import_jsx_runtime2.jsx)(WalletAuth, { chain: props.chain, client: props.client, done, inAppLocale: locale, isLinking: state.walletLogin.linking, locale: props.connectLocale, meta: props.meta, onBack: goBackToMain || (() => setSelectionData({})), size: props.size, wallet: props.wallet, walletConnect: props.walletConnect });
  }
  if (state == null ? void 0 : state.socialLogin) {
    return (0, import_jsx_runtime2.jsx)(SocialLogin, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, done, goBack: goBackToMain, isLinking: props.isLinking, locale, size: props.size, socialAuth: state.socialLogin.type, state, wallet: props.wallet });
  }
  if (state == null ? void 0 : state.guestLogin) {
    return (0, import_jsx_runtime2.jsx)(GuestLogin, { client: props.client, connectLocale: props.connectLocale, done, goBack: goBackToMain, locale, size: props.size, state, wallet: props.wallet });
  }
  return (0, import_jsx_runtime2.jsx)(InAppWalletFormUIScreen, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, done, goBack: props.goBack, inAppWalletLocale: locale, isLinking: props.isLinking, meta: props.meta, select: () => {
  }, size: props.size, wallet: props.wallet });
}
var InAppWalletConnectUI_default = InAppWalletConnectUI;
export {
  InAppWalletConnectUI_default as default
};
//# sourceMappingURL=InAppWalletConnectUI-TVHYRSQK.js.map
