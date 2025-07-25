import {
  GuestLogin,
  OTPLoginUI,
  PassKeyLogin,
  PoweredByThirdweb,
  SocialLogin,
  TOS,
  WalletAuth
} from "./chunk-Y4FCGFBJ.js";
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
import {
  Container,
  Img,
  ModalHeader,
  ModalTitle,
  Skeleton,
  Spacer,
  iconSize,
  radius,
  useWalletInfo
} from "./chunk-OPI7XW5K.js";
import {
  require_jsx_runtime
} from "./chunk-4VHZN6OL.js";
import {
  require_react
} from "./chunk-NQM6PSUW.js";
import {
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletConnectUI.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletFormUI.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletHeader.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function EcosystemWalletHeader(props) {
  var _a, _b, _c;
  const walletInfo = useWalletInfo(props.wallet.id);
  return (0, import_jsx_runtime.jsx)(ModalHeader, { leftAligned: true, onBack: props.onBack, title: walletInfo.isLoading ? (0, import_jsx_runtime.jsx)(Skeleton, { height: "24px", width: "200px" }) : (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!((_a = walletInfo.data) == null ? void 0 : _a.image_id) ? null : (0, import_jsx_runtime.jsx)(Img, { client: props.client, height: iconSize.md, src: (_b = walletInfo.data) == null ? void 0 : _b.image_id, style: {
    borderRadius: radius.sm
  }, width: iconSize.md }), (0, import_jsx_runtime.jsx)(ModalTitle, { children: (_c = walletInfo.data) == null ? void 0 : _c.name })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletFormUI.js
function EcosystemWalletFormUIScreen(props) {
  const isCompact = props.size === "compact";
  const { initialScreen, screen } = useScreenContext();
  const [isApproved, setIsApproved] = (0, import_react.useState)(false);
  const onBack = screen === props.wallet && initialScreen === props.wallet ? void 0 : props.goBack;
  return (0, import_jsx_runtime2.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, p: "lg", style: {
    minHeight: "250px"
  }, children: [props.isLinking ? (0, import_jsx_runtime2.jsx)(ModalHeader, { onBack, title: props.connectLocale.manageWallet.linkProfile }) : (0, import_jsx_runtime2.jsx)(EcosystemWalletHeader, { client: props.client, onBack: isCompact ? onBack : void 0, wallet: props.wallet }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime2.jsx)(Container, { center: "y", expand: true, flex: "column", p: isCompact ? void 0 : "lg", children: (0, import_jsx_runtime2.jsx)(ConnectWalletSocialOptions, { disabled: props.meta.requireApproval && !isApproved, ...props }) }), isCompact && (props.meta.showThirdwebBranding !== false || props.meta.termsOfServiceUrl || props.meta.privacyPolicyUrl) && (0, import_jsx_runtime2.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime2.jsxs)(Container, { flex: "column", gap: "lg", children: [(0, import_jsx_runtime2.jsx)(TOS, { isApproved, locale: props.connectLocale.agreement, onApprove: () => {
    setIsApproved(!isApproved);
  }, privacyPolicyUrl: props.meta.privacyPolicyUrl, requireApproval: props.meta.requireApproval, termsOfServiceUrl: props.meta.termsOfServiceUrl }), props.meta.showThirdwebBranding !== false && (0, import_jsx_runtime2.jsx)(PoweredByThirdweb, {})] })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/ecosystem/EcosystemWalletConnectUI.js
function EcosystemWalletConnectUI(props) {
  const data = useSelectionData();
  const setSelectionData = useSetSelectionData();
  const state = data;
  const localeId = props.connectLocale.id;
  const locale = useInAppWalletLocale(localeId);
  if (!locale) {
    return (0, import_jsx_runtime3.jsx)(LoadingScreen, {});
  }
  const goBackToMain = () => {
    var _a;
    if (props.size === "compact") {
      (_a = props.goBack) == null ? void 0 : _a.call(props);
    }
    setSelectionData({});
  };
  const done = () => {
    props.done();
    setSelectionData({});
  };
  const otpUserInfo = (state == null ? void 0 : state.emailLogin) ? { email: state.emailLogin } : (state == null ? void 0 : state.phoneLogin) ? { phone: state.phoneLogin } : void 0;
  if (otpUserInfo) {
    return (0, import_jsx_runtime3.jsx)(OTPLoginUI, { chain: props.chain, client: props.client, done, goBack: goBackToMain, isLinking: props.isLinking, locale, size: props.size, userInfo: otpUserInfo, wallet: props.wallet });
  }
  if (state == null ? void 0 : state.passkeyLogin) {
    return (0, import_jsx_runtime3.jsx)(PassKeyLogin, { chain: props.chain, client: props.client, done, isLinking: props.isLinking, locale: props.connectLocale, onBack: goBackToMain, size: props.size, wallet: props.wallet });
  }
  if (state == null ? void 0 : state.socialLogin) {
    return (0, import_jsx_runtime3.jsx)(SocialLogin, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, done, goBack: goBackToMain, isLinking: props.isLinking, locale, size: props.size, socialAuth: state.socialLogin.type, state, wallet: props.wallet });
  }
  if (state == null ? void 0 : state.walletLogin) {
    return (0, import_jsx_runtime3.jsx)(WalletAuth, { chain: props.chain, client: props.client, done, inAppLocale: locale, isLinking: state.walletLogin.linking, locale: props.connectLocale, meta: props.meta, onBack: goBackToMain || (() => setSelectionData({})), size: props.size, wallet: props.wallet, walletConnect: props.walletConnect });
  }
  if (state == null ? void 0 : state.guestLogin) {
    return (0, import_jsx_runtime3.jsx)(GuestLogin, { client: props.client, connectLocale: props.connectLocale, done, goBack: goBackToMain, locale, size: props.size, state, wallet: props.wallet });
  }
  return (0, import_jsx_runtime3.jsx)(EcosystemWalletFormUIScreen, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, done, goBack: props.goBack, isLinking: props.isLinking, locale, meta: props.meta, select: () => {
  }, size: props.size, wallet: props.wallet });
}
var EcosystemWalletConnectUI_default = EcosystemWalletConnectUI;

export {
  EcosystemWalletConnectUI_default
};
//# sourceMappingURL=chunk-WTFA45ER.js.map
