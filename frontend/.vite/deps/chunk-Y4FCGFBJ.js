import {
  AllWalletsUI_default,
  sortWallets
} from "./chunk-EVRLKEF4.js";
import {
  LoadingScreen,
  TextDivider,
  WalletTypeRowButton,
  compactModalMaxHeight,
  openOauthSignInWindow,
  useScreenContext
} from "./chunk-SJ2PI6CH.js";
import {
  Spinner,
  WalletButtonEl,
  WalletEntryButton,
  useSetSelectionData
} from "./chunk-JHTWP4U5.js";
import {
  linkProfile,
  preAuthenticate
} from "./chunk-GHDLIAUP.js";
import {
  ConnectingScreen
} from "./chunk-D3JLMCS4.js";
import {
  Button,
  ButtonLink,
  CheckIcon,
  ChevronLeftIcon,
  Container,
  CopyIcon,
  ExternalLinkIcon,
  FingerPrintIcon,
  IconButton,
  Img,
  Line,
  Link,
  ModalHeader,
  ModalTitle,
  OutlineWalletIcon,
  ScreenBottomContainer,
  Spacer,
  StyledButton,
  StyledDiv,
  StyledUl,
  Text,
  WalletImage,
  fadeInAnimation,
  fontSize,
  iconSize,
  noScrollBar,
  radius,
  setLastAuthProvider,
  spacing,
  useConnectionManager,
  useConnectionManagerCtx,
  useCustomTheme,
  useQuery,
  useWalletInfo
} from "./chunk-OPI7XW5K.js";
import {
  formatWalletConnectUrl
} from "./chunk-X4LMPBJA.js";
import {
  createWallet,
  getInstalledWalletProviders,
  isAndroid,
  isIOS,
  isMobile,
  openWindow
} from "./chunk-OZT5CELG.js";
import {
  isEcosystemWallet
} from "./chunk-OUUVSEDB.js";
import {
  hasStoredPasskey
} from "./chunk-IFTE4LJM.js";
import {
  loginWithOauthRedirect
} from "./chunk-LWVDNX4F.js";
import {
  webLocalStorage
} from "./chunk-HEWP63HK.js";
import {
  COINBASE,
  METAMASK,
  RAINBOW,
  ZERION
} from "./chunk-ZX53QXGD.js";
import {
  defineChain
} from "./chunk-CYZDLLAL.js";
import {
  keyframes
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

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ErrorState.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/AccentFailIcon.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var AccentFailIcon = (props) => {
  const linearGradientId = (0, import_react.useId)();
  const clipPathId = (0, import_react.useId)();
  return (0, import_jsx_runtime.jsxs)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 109 109", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime.jsxs)("g", { clipPath: `url(#${clipPathId})`, children: [(0, import_jsx_runtime.jsx)("path", { d: "M54.5 109C84.5995 109 109 84.5995 109 54.5C109 24.4005 84.5995 0 54.5 0C24.4005 0 0 24.4005 0 54.5C0 84.5995 24.4005 109 54.5 109Z", fill: "#4BABFF" }), (0, import_jsx_runtime.jsx)("path", { d: "M55 96C77.6437 96 96 77.6437 96 55C96 32.3563 77.6437 14 55 14C32.3563 14 14 32.3563 14 55C14 77.6437 32.3563 96 55 96Z", fill: "#1C85FF" }), (0, import_jsx_runtime.jsx)("path", { d: "M73.2352 69.389C73.7459 69.8997 74.0329 70.5924 74.0329 71.3147C74.0329 72.037 73.7459 72.7298 73.2352 73.2405C72.7244 73.7513 72.0317 74.0382 71.3094 74.0382C70.5871 74.0382 69.8944 73.7513 69.3836 73.2405L54.9992 58.8515L40.6102 73.236C40.0994 73.7467 39.4067 74.0337 38.6844 74.0337C37.9621 74.0337 37.2694 73.7467 36.7586 73.236C36.2479 72.7252 35.9609 72.0325 35.9609 71.3102C35.9609 70.5879 36.2479 69.8952 36.7586 69.3844L51.1476 55L36.7632 40.611C36.2524 40.1002 35.9655 39.4075 35.9655 38.6852C35.9655 37.9629 36.2524 37.2702 36.7632 36.7594C37.2739 36.2487 37.9666 35.9617 38.6889 35.9617C39.4112 35.9617 40.104 36.2487 40.6147 36.7594L54.9992 51.1484L69.3881 36.7572C69.8989 36.2464 70.5916 35.9595 71.3139 35.9595C72.0362 35.9595 72.729 36.2464 73.2397 36.7572C73.7505 37.2679 74.0374 37.9606 74.0374 38.6829C74.0374 39.4052 73.7505 40.098 73.2397 40.6087L58.8507 55L73.2352 69.389Z", fill: `url(#${linearGradientId})` })] }), (0, import_jsx_runtime.jsxs)("defs", { children: [(0, import_jsx_runtime.jsxs)("linearGradient", { gradientUnits: "userSpaceOnUse", id: linearGradientId, x1: "54.9992", x2: "54.9992", y1: "35.9595", y2: "74.0382", children: [(0, import_jsx_runtime.jsx)("stop", { stopColor: "white" }), (0, import_jsx_runtime.jsx)("stop", { offset: "1", stopColor: "#90CBFF" })] }), (0, import_jsx_runtime.jsx)("clipPath", { id: clipPathId, children: (0, import_jsx_runtime.jsx)("rect", { fill: "white", height: "109", width: "109" }) })] })] });
};

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ErrorState.js
function ErrorState(props) {
  return (0, import_jsx_runtime2.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime2.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime2.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime2.jsx)(AccentFailIcon, { size: iconSize["3xl"] }) }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime2.jsx)(Text, { center: true, color: "primaryText", size: "md", children: props.title }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime2.jsx)(Button, { fullWidth: true, onClick: props.onTryAgain, variant: "accent", children: "Try Again" })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/PoweredByTW.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/ThirdwebTextIcon.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
var ThirdwebTextIcon = (props) => {
  const clipPathId = (0, import_react2.useId)();
  return (0, import_jsx_runtime3.jsxs)("svg", { fill: "none", height: props.height, role: "presentation", viewBox: "0 0 74 11", width: props.height * 74 / 11, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime3.jsx)("path", { clipRule: "evenodd", d: "M34.1489 0.373291C33.5297 0.373291 33.022 0.874761 33.022 1.51414C33.022 2.14097 33.5297 2.64244 34.1489 2.64244C34.7681 2.64244 35.2758 2.14097 35.2758 1.51414C35.2758 0.874761 34.7681 0.373291 34.1489 0.373291ZM35.1396 3.21913H33.1706V9.97644H35.1396V3.21913ZM21.6787 0.624035H23.5982V3.21914H25.0718V5.02444H23.5982V7.40642C23.5982 7.75745 23.8706 8.03326 24.205 8.03326H25.0594V9.95138H24.205C22.818 9.95138 21.6787 8.81054 21.6787 7.39389V5.0119H20.7871V3.20661H21.6787V0.624035ZM29.7652 3.0687C28.8736 3.0687 28.1677 3.44481 27.8953 4.03403V0.624035H25.9263V9.96392H27.8953V6.17782C27.8953 5.388 28.403 4.83639 29.1213 4.83639C29.8519 4.83639 30.2605 5.31278 30.2605 6.11514V9.97646H32.2295V5.8644C32.2295 4.10925 31.3379 3.0687 29.7652 3.0687ZM37.9507 3.2066V4.13432C38.2479 3.45734 38.9661 3.0687 39.8701 3.05616C40.0063 3.05616 40.1797 3.0687 40.3902 3.09377V4.97429C40.1921 4.93668 39.9692 4.9116 39.7339 4.9116C38.607 4.9116 37.9507 5.55098 37.9507 6.66675V9.96392H35.9817V3.2066H37.9507ZM45.9257 4.09672C45.7275 3.50749 44.9474 3.09378 43.9443 3.09378C43.0032 3.09378 42.2106 3.43227 41.5791 4.10926C40.9599 4.7737 40.6379 5.61367 40.6379 6.59154C40.6379 7.5694 40.9599 8.39683 41.5791 9.08635C42.2106 9.7508 43.0032 10.0893 43.9443 10.0893C44.9474 10.0893 45.7275 9.67558 45.9257 9.08635V9.97646H47.8946V0.624035H45.9257V4.09672ZM45.5294 7.79506C45.195 8.12102 44.7864 8.27146 44.3034 8.27146C43.8329 8.27146 43.4242 8.10848 43.1022 7.79506C42.7679 7.45657 42.6069 7.0554 42.6069 6.59154C42.6069 6.12767 42.7679 5.7265 43.1022 5.40054C43.4366 5.06205 43.8329 4.89907 44.3034 4.89907C44.7988 4.89907 45.2074 5.06205 45.5294 5.40054C45.8761 5.7265 46.0495 6.12767 46.0495 6.59154C46.0495 7.0554 45.8761 7.45657 45.5294 7.79506ZM53.5787 3.2442L55.3619 6.45361L56.5631 3.21913H58.4949L55.7458 10.3651L53.5787 6.47868L51.4115 10.3651L48.6748 3.21913H50.6066L51.7954 6.45361L53.5787 3.2442ZM61.7394 3.05616C60.7239 3.05616 59.8694 3.38212 59.2007 4.03403C58.5444 4.6734 58.2101 5.5259 58.2101 6.57899V6.64167C58.2101 7.69476 58.5444 8.54726 59.2007 9.18664C59.8818 9.81347 60.7487 10.1394 61.8384 10.1394C62.8539 10.1394 63.6836 9.93884 64.3151 9.52513V7.78252C63.6959 8.22131 62.9034 8.43443 61.9499 8.43443C60.9097 8.43443 60.2286 7.92042 60.1914 7.11807H65.0829C65.1077 6.91748 65.12 6.69182 65.12 6.46616C65.12 5.50083 64.7981 4.69848 64.1789 4.04657C63.5597 3.38212 62.73 3.05616 61.7394 3.05616ZM60.1914 5.82679C60.2038 5.51337 60.3648 5.25009 60.662 5.03697C60.9716 4.82385 61.3183 4.71101 61.7394 4.71101C62.5195 4.71101 63.1263 5.22502 63.1263 5.82679H60.1914ZM69.8135 3.09378C70.7546 3.09378 71.5472 3.43227 72.1663 4.10925C72.7979 4.78624 73.1199 5.60113 73.1199 6.579C73.1199 7.55686 72.7979 8.38429 72.1663 9.07381C71.5472 9.73826 70.7546 10.0768 69.8135 10.0768C68.8104 10.0768 68.0302 9.66304 67.8321 9.07381V9.96392H65.8631V0.624035H67.8321V4.09672C68.0302 3.50749 68.8104 3.09378 69.8135 3.09378ZM69.4543 8.27146C69.9249 8.27146 70.3212 8.12102 70.6555 7.79506C70.9899 7.45657 71.1509 7.05539 71.1509 6.59153C71.1509 6.12767 70.9899 5.7265 70.6555 5.40054C70.3336 5.06205 69.9249 4.89907 69.4543 4.89907C68.9714 4.89907 68.5627 5.06205 68.216 5.40054C67.8816 5.7265 67.7083 6.12767 67.7083 6.59153C67.7083 7.05539 67.8816 7.45657 68.216 7.79506C68.5503 8.10848 68.959 8.27146 69.4543 8.27146Z", fill: "currentColor", fillRule: "evenodd" }), (0, import_jsx_runtime3.jsx)("g", { clipPath: `url(#${clipPathId})`, children: (0, import_jsx_runtime3.jsx)("path", { clipRule: "evenodd", d: "M0.045011 0.900694C-0.126602 0.467742 0.193222 0 0.661257 0H3.56697C3.83999 0 4.08181 0.162357 4.18322 0.413623L6.49609 6.18115C6.55849 6.33578 6.55849 6.50973 6.49609 6.66822L5.04128 10.2903C4.81896 10.8431 4.03111 10.8431 3.80879 10.2903L0.045011 0.900694ZM5.65759 0.881366C5.50158 0.45228 5.8214 0 6.28164 0H8.81292C9.09374 0 9.34336 0.173954 9.43697 0.432951L11.5392 6.20048C11.5899 6.34351 11.5899 6.502 11.5392 6.6489L10.2755 10.1164C10.0649 10.6962 9.23805 10.6962 9.02744 10.1164L5.65759 0.881366ZM11.3404 0C10.8724 0 10.5525 0.467742 10.7241 0.900694L14.4879 10.2903C14.7102 10.8431 15.4981 10.8431 15.7204 10.2903L17.1752 6.66822C17.2376 6.50973 17.2376 6.33578 17.1752 6.18115L14.8623 0.413623C14.7609 0.162357 14.5191 0 14.2461 0H11.3404Z", fill: "currentColor", fillRule: "evenodd" }) }), (0, import_jsx_runtime3.jsx)("defs", { children: (0, import_jsx_runtime3.jsx)("clipPath", { id: clipPathId, children: (0, import_jsx_runtime3.jsx)("rect", { fill: "white", height: "10.7049", width: "17.219" }) }) })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/PoweredByTW.js
function PoweredByThirdweb(props) {
  const link = props.link || "https://playground.thirdweb.com/connect/sign-in/button?utm_source=cw_text";
  return (0, import_jsx_runtime4.jsx)(Link, { color: "secondaryText", hoverColor: "primaryText", href: link, target: "_blank", children: (0, import_jsx_runtime4.jsxs)(Container, { center: "both", flex: "row", style: {
    color: "currentColor",
    gap: 4
  }, children: [(0, import_jsx_runtime4.jsx)(Text, { size: "xs", style: {
    color: "currentColor"
  }, weight: 600, children: "Powered by" }), (0, import_jsx_runtime4.jsx)(ThirdwebTextIcon, { height: 11 })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/GuestLogin.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
function GuestLogin(props) {
  var _a;
  const ewLocale = props.locale;
  const locale = ewLocale.socialLoginScreen;
  const [authError, setAuthError] = (0, import_react3.useState)(void 0);
  const { done, wallet } = props;
  const [status, setStatus] = (0, import_react3.useState)("connecting");
  const handleGuestLogin = async () => {
    var _a2, _b;
    const connectOptions = {
      client: props.client,
      ecosystem: isEcosystemWallet(wallet) ? {
        id: wallet.id,
        partnerId: (_a2 = wallet.getConfig()) == null ? void 0 : _a2.partnerId
      } : void 0,
      strategy: "guest"
    };
    try {
      await wallet.connect(connectOptions);
      await setLastAuthProvider("guest", webLocalStorage);
      setStatus("connected");
      done();
    } catch (e) {
      setStatus("error");
      if (e instanceof Error && ((_b = e == null ? void 0 : e.message) == null ? void 0 : _b.includes("PAYMENT_METHOD_REQUIRED"))) {
        setAuthError(ewLocale.maxAccountsExceeded);
      }
      console.error("Error generating guest account", e);
    }
  };
  const guestLogin = (_a = props.state) == null ? void 0 : _a.guestLogin;
  const socialLoginStarted = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(() => {
    if (socialLoginStarted.current) {
      return;
    }
    if (guestLogin) {
      socialLoginStarted.current = true;
      setStatus("connecting");
      guestLogin.connectionPromise.then(() => {
        done();
        setStatus("connected");
      }).catch((e) => {
        setAuthError(e.message);
        setStatus("error");
      });
    }
  }, [done, guestLogin]);
  return (0, import_jsx_runtime5.jsx)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: (0, import_jsx_runtime5.jsxs)(Container, { expand: true, flex: "column", p: "lg", style: {
    paddingBottom: 0
  }, children: [props.goBack && (0, import_jsx_runtime5.jsx)(ModalHeader, { onBack: props.goBack, title: locale.title }), props.size === "compact" ? (0, import_jsx_runtime5.jsx)(Spacer, { y: "xl" }) : null, (0, import_jsx_runtime5.jsxs)(Container, { center: "both", expand: true, flex: "column", style: {
    minHeight: "250px",
    textAlign: "center"
  }, children: [status !== "error" && (0, import_jsx_runtime5.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime5.jsx)(Text, { center: true, color: "primaryText", multiline: true, style: {
    maxWidth: "250px"
  }, children: "Generating your guest account" }), (0, import_jsx_runtime5.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime5.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime5.jsx)(Spinner, { color: "accentText", size: "lg" }) }), (0, import_jsx_runtime5.jsx)(Spacer, { y: "xxl" })] }), status === "error" && (0, import_jsx_runtime5.jsxs)(Container, { animate: "fadein", children: [authError ? (0, import_jsx_runtime5.jsx)(Text, { center: true, color: "danger", children: authError }) : (0, import_jsx_runtime5.jsx)(Text, { color: "danger", children: locale.failed }), (0, import_jsx_runtime5.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime5.jsx)(Button, { onClick: handleGuestLogin, variant: "primary", children: locale.retry }), (0, import_jsx_runtime5.jsx)(Spacer, { y: "xxl" })] })] })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/OTPLoginUI.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/FadeIn.js
var FadeIn = StyledDiv({
  animation: `${fadeInAnimation} 0.15s ease-in`
});

// node_modules/thirdweb/dist/esm/react/web/ui/components/OTPInput.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);

// node_modules/input-otp/dist/index.mjs
var n = __toESM(require_react(), 1);
var U = __toESM(require_react(), 1);
var S = __toESM(require_react(), 1);
var Bt = Object.defineProperty;
var At = Object.defineProperties;
var kt = Object.getOwnPropertyDescriptors;
var Y = Object.getOwnPropertySymbols;
var gt = Object.prototype.hasOwnProperty;
var Et = Object.prototype.propertyIsEnumerable;
var vt = (r, s, e) => s in r ? Bt(r, s, { enumerable: true, configurable: true, writable: true, value: e }) : r[s] = e;
var St = (r, s) => {
  for (var e in s || (s = {})) gt.call(s, e) && vt(r, e, s[e]);
  if (Y) for (var e of Y(s)) Et.call(s, e) && vt(r, e, s[e]);
  return r;
};
var bt = (r, s) => At(r, kt(s));
var Pt = (r, s) => {
  var e = {};
  for (var u in r) gt.call(r, u) && s.indexOf(u) < 0 && (e[u] = r[u]);
  if (r != null && Y) for (var u of Y(r)) s.indexOf(u) < 0 && Et.call(r, u) && (e[u] = r[u]);
  return e;
};
function ht(r) {
  let s = setTimeout(r, 0), e = setTimeout(r, 10), u = setTimeout(r, 50);
  return [s, e, u];
}
function _t(r) {
  let s = U.useRef();
  return U.useEffect(() => {
    s.current = r;
  }), s.current;
}
var Ot = 18;
var wt = 40;
var Gt = `${wt}px`;
var xt = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Tt({ containerRef: r, inputRef: s, pushPasswordManagerStrategy: e, isFocused: u }) {
  let [P, D] = S.useState(false), [G, H] = S.useState(false), [F, W] = S.useState(false), Z = S.useMemo(() => e === "none" ? false : (e === "increase-width" || e === "experimental-no-flickering") && P && G, [P, G, e]), T = S.useCallback(() => {
    let f = r.current, h = s.current;
    if (!f || !h || F || e === "none") return;
    let a = f, B = a.getBoundingClientRect().left + a.offsetWidth, A = a.getBoundingClientRect().top + a.offsetHeight / 2, z = B - Ot, q = A;
    document.querySelectorAll(xt).length === 0 && document.elementFromPoint(z, q) === f || (D(true), W(true));
  }, [r, s, F, e]);
  return S.useEffect(() => {
    let f = r.current;
    if (!f || e === "none") return;
    function h() {
      let A = window.innerWidth - f.getBoundingClientRect().right;
      H(A >= wt);
    }
    h();
    let a = setInterval(h, 1e3);
    return () => {
      clearInterval(a);
    };
  }, [r, e]), S.useEffect(() => {
    let f = u || document.activeElement === s.current;
    if (e === "none" || !f) return;
    let h = setTimeout(T, 0), a = setTimeout(T, 2e3), B = setTimeout(T, 5e3), A = setTimeout(() => {
      W(true);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(a), clearTimeout(B), clearTimeout(A);
    };
  }, [s, u, e, T]), { hasPWMBadge: P, willPushPWMBadge: Z, PWM_BADGE_SPACE_WIDTH: Gt };
}
var jt = n.createContext({});
var Lt = n.forwardRef((A, B) => {
  var z = A, { value: r, onChange: s, maxLength: e, textAlign: u = "left", pattern: P, placeholder: D, inputMode: G = "numeric", onComplete: H, pushPasswordManagerStrategy: F = "increase-width", pasteTransformer: W, containerClassName: Z, noScriptCSSFallback: T = Nt, render: f, children: h } = z, a = Pt(z, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]);
  var X, lt, ut, dt, ft;
  let [q, nt] = n.useState(typeof a.defaultValue == "string" ? a.defaultValue : ""), i = r != null ? r : q, I = _t(i), x = n.useCallback((t) => {
    s == null || s(t), nt(t);
  }, [s]), m = n.useMemo(() => P ? typeof P == "string" ? new RegExp(P) : P : null, [P]), l = n.useRef(null), K = n.useRef(null), J = n.useRef({ value: i, onChange: x, isIOS: typeof window != "undefined" && ((lt = (X = window == null ? void 0 : window.CSS) == null ? void 0 : X.supports) == null ? void 0 : lt.call(X, "-webkit-touch-callout", "none")) }), V = n.useRef({ prev: [(ut = l.current) == null ? void 0 : ut.selectionStart, (dt = l.current) == null ? void 0 : dt.selectionEnd, (ft = l.current) == null ? void 0 : ft.selectionDirection] });
  n.useImperativeHandle(B, () => l.current, []), n.useEffect(() => {
    let t = l.current, o = K.current;
    if (!t || !o) return;
    J.current.value !== t.value && J.current.onChange(t.value), V.current.prev = [t.selectionStart, t.selectionEnd, t.selectionDirection];
    function d() {
      if (document.activeElement !== t) {
        L(null), N(null);
        return;
      }
      let c = t.selectionStart, b = t.selectionEnd, mt = t.selectionDirection, v = t.maxLength, C = t.value, _ = V.current.prev, g = -1, E = -1, w;
      if (C.length !== 0 && c !== null && b !== null) {
        let Dt = c === b, Ht = c === C.length && C.length < v;
        if (Dt && !Ht) {
          let y = c;
          if (y === 0) g = 0, E = 1, w = "forward";
          else if (y === v) g = y - 1, E = y, w = "backward";
          else if (v > 1 && C.length > 1) {
            let et = 0;
            if (_[0] !== null && _[1] !== null) {
              w = y < _[1] ? "backward" : "forward";
              let Wt = _[0] === _[1] && _[0] < v;
              w === "backward" && !Wt && (et = -1);
            }
            g = et + y, E = et + y + 1;
          }
        }
        g !== -1 && E !== -1 && g !== E && l.current.setSelectionRange(g, E, w);
      }
      let pt = g !== -1 ? g : c, Rt = E !== -1 ? E : b, yt = w != null ? w : mt;
      L(pt), N(Rt), V.current.prev = [pt, Rt, yt];
    }
    if (document.addEventListener("selectionchange", d, { capture: true }), d(), document.activeElement === t && Q(true), !document.getElementById("input-otp-style")) {
      let c = document.createElement("style");
      if (c.id = "input-otp-style", document.head.appendChild(c), c.sheet) {
        let b = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        $(c.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), $(c.sheet, `[data-input-otp]:autofill { ${b} }`), $(c.sheet, `[data-input-otp]:-webkit-autofill { ${b} }`), $(c.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), $(c.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let R = () => {
      o && o.style.setProperty("--root-height", `${t.clientHeight}px`);
    };
    R();
    let p = new ResizeObserver(R);
    return p.observe(t), () => {
      document.removeEventListener("selectionchange", d, { capture: true }), p.disconnect();
    };
  }, []);
  let [ot, rt] = n.useState(false), [j, Q] = n.useState(false), [M, L] = n.useState(null), [k, N] = n.useState(null);
  n.useEffect(() => {
    ht(() => {
      var R, p, c, b;
      (R = l.current) == null || R.dispatchEvent(new Event("input"));
      let t = (p = l.current) == null ? void 0 : p.selectionStart, o = (c = l.current) == null ? void 0 : c.selectionEnd, d = (b = l.current) == null ? void 0 : b.selectionDirection;
      t !== null && o !== null && (L(t), N(o), V.current.prev = [t, o, d]);
    });
  }, [i, j]), n.useEffect(() => {
    I !== void 0 && i !== I && I.length < e && i.length === e && (H == null || H(i));
  }, [e, H, I, i]);
  let O = Tt({ containerRef: K, inputRef: l, pushPasswordManagerStrategy: F, isFocused: j }), st = n.useCallback((t) => {
    let o = t.currentTarget.value.slice(0, e);
    if (o.length > 0 && m && !m.test(o)) {
      t.preventDefault();
      return;
    }
    typeof I == "string" && o.length < I.length && document.dispatchEvent(new Event("selectionchange")), x(o);
  }, [e, x, I, m]), at = n.useCallback(() => {
    var t;
    if (l.current) {
      let o = Math.min(l.current.value.length, e - 1), d = l.current.value.length;
      (t = l.current) == null || t.setSelectionRange(o, d), L(o), N(d);
    }
    Q(true);
  }, [e]), ct = n.useCallback((t) => {
    var g, E;
    let o = l.current;
    if (!W && (!J.current.isIOS || !t.clipboardData || !o)) return;
    let d = t.clipboardData.getData("text/plain"), R = W ? W(d) : d;
    t.preventDefault();
    let p = (g = l.current) == null ? void 0 : g.selectionStart, c = (E = l.current) == null ? void 0 : E.selectionEnd, v = (p !== c ? i.slice(0, p) + R + i.slice(c) : i.slice(0, p) + R + i.slice(p)).slice(0, e);
    if (v.length > 0 && m && !m.test(v)) return;
    o.value = v, x(v);
    let C = Math.min(v.length, e - 1), _ = v.length;
    o.setSelectionRange(C, _), L(C), N(_);
  }, [e, x, m, i]), It = n.useMemo(() => ({ position: "relative", cursor: a.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [a.disabled]), it = n.useMemo(() => ({ position: "absolute", inset: 0, width: O.willPushPWMBadge ? `calc(100% + ${O.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: O.willPushPWMBadge ? `inset(0 ${O.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: u, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [O.PWM_BADGE_SPACE_WIDTH, O.willPushPWMBadge, u]), Mt = n.useMemo(() => n.createElement("input", bt(St({ autoComplete: a.autoComplete || "one-time-code" }, a), { "data-input-otp": true, "data-input-otp-placeholder-shown": i.length === 0 || void 0, "data-input-otp-mss": M, "data-input-otp-mse": k, inputMode: G, pattern: m == null ? void 0 : m.source, "aria-placeholder": D, style: it, maxLength: e, value: i, ref: l, onPaste: (t) => {
    var o;
    ct(t), (o = a.onPaste) == null || o.call(a, t);
  }, onChange: st, onMouseOver: (t) => {
    var o;
    rt(true), (o = a.onMouseOver) == null || o.call(a, t);
  }, onMouseLeave: (t) => {
    var o;
    rt(false), (o = a.onMouseLeave) == null || o.call(a, t);
  }, onFocus: (t) => {
    var o;
    at(), (o = a.onFocus) == null || o.call(a, t);
  }, onBlur: (t) => {
    var o;
    Q(false), (o = a.onBlur) == null || o.call(a, t);
  } })), [st, at, ct, G, it, e, k, M, a, m == null ? void 0 : m.source, i]), tt = n.useMemo(() => ({ slots: Array.from({ length: e }).map((t, o) => {
    var c;
    let d = j && M !== null && k !== null && (M === k && o === M || o >= M && o < k), R = i[o] !== void 0 ? i[o] : null, p = i[0] !== void 0 ? null : (c = D == null ? void 0 : D[o]) != null ? c : null;
    return { char: R, placeholderChar: p, isActive: d, hasFakeCaret: d && R === null };
  }), isFocused: j, isHovering: !a.disabled && ot }), [j, ot, e, k, M, a.disabled, i]), Ct = n.useMemo(() => f ? f(tt) : n.createElement(jt.Provider, { value: tt }, h), [h, tt, f]);
  return n.createElement(n.Fragment, null, T !== null && n.createElement("noscript", null, n.createElement("style", null, T)), n.createElement("div", { ref: K, "data-input-otp-container": true, style: It, className: Z }, Ct, n.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, Mt)));
});
Lt.displayName = "Input";
function $(r, s) {
  try {
    r.insertRule(s);
  } catch (e) {
    console.error("input-otp could not insert CSS rule:", s);
  }
}
var Nt = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;

// node_modules/thirdweb/dist/esm/react/web/ui/components/OTPInput.js
function OTPInput(props) {
  return (0, import_jsx_runtime6.jsx)(OTPInputContainer, { children: (0, import_jsx_runtime6.jsx)(Lt, { maxLength: 6, onChange: (newValue) => {
    props.setValue(newValue);
  }, onComplete: () => {
    props.onEnter();
  }, render: ({ slots }) => (0, import_jsx_runtime6.jsx)(Container, { center: "both", flex: "row", gap: "xs", children: slots.map((slot, idx) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is the only valid key here
    (0, import_jsx_runtime6.jsx)(Slot, { ...slot, isInvalid: props.isInvalid }, idx)
  )) }), value: props.value }) });
}
var OTPInputContainer = StyledDiv({
  "& input": {
    maxWidth: "100%"
  }
});
function Slot(props) {
  return (0, import_jsx_runtime6.jsxs)(OTPInputBox, { "data-active": props.isActive, "data-error": props.isInvalid, children: [props.char !== null && (0, import_jsx_runtime6.jsx)("div", { children: props.char }), props.hasFakeCaret && (0, import_jsx_runtime6.jsx)(FakeCaret, {})] });
}
var caretBlink = keyframes`
  0%, 100% {
    opacity: 0;
  },
  50% {
    opacity: 1;
  }
  `;
var FakeCaret = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    "&::before": {
      backgroundColor: theme.colors.primaryText,
      content: "''",
      display: "block",
      height: "1em",
      width: "1.5px"
    },
    alignItems: "center",
    animation: `${caretBlink} 1s infinite`,
    display: "flex",
    inset: 0,
    justifyContent: "center",
    pointerEvents: "none",
    position: "absolute"
  };
});
var OTPInputBox = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    "&[data-active='true']": {
      borderColor: theme.colors.accentText
    },
    "&[data-error='true']": {
      borderColor: theme.colors.danger
    },
    alignItems: "center",
    border: `2px solid ${theme.colors.borderColor}`,
    borderRadius: radius.lg,
    boxSizing: "border-box",
    color: theme.colors.primaryText,
    display: "flex",
    fontSize: fontSize.md,
    height: "40px",
    justifyContent: "center",
    padding: spacing.xs,
    position: "relative",
    textAlign: "center",
    transition: "color 200ms ease",
    width: "40px"
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/OTPLoginUI.js
function OTPLoginUI(props) {
  var _a;
  const { wallet, done, goBack, userInfo } = props;
  const isWideModal = props.size === "wide";
  const locale = props.locale;
  const [otpInput, setOtpInput] = (0, import_react5.useState)("");
  const [verifyStatus, setVerifyStatus] = (0, import_react5.useState)("idle");
  const [error, setError] = (0, import_react5.useState)();
  const [accountStatus, setAccountStatus] = (0, import_react5.useState)("sending");
  const [countdown, setCountdown] = (0, import_react5.useState)(0);
  const ecosystem = isEcosystemWallet(wallet) ? {
    id: wallet.id,
    partnerId: (_a = wallet.getConfig()) == null ? void 0 : _a.partnerId
  } : void 0;
  const [screen] = (0, import_react5.useState)("base");
  const sendEmailOrSms = (0, import_react5.useCallback)(async () => {
    setOtpInput("");
    setVerifyStatus("idle");
    setAccountStatus("sending");
    try {
      if ("email" in userInfo) {
        await preAuthenticate({
          client: props.client,
          ecosystem,
          email: userInfo.email,
          strategy: "email"
        });
        setAccountStatus("sent");
        setCountdown(60);
      } else if ("phone" in userInfo) {
        await preAuthenticate({
          client: props.client,
          ecosystem,
          phoneNumber: userInfo.phone,
          strategy: "phone"
        });
        setAccountStatus("sent");
        setCountdown(60);
      } else {
        throw new Error("Invalid userInfo");
      }
    } catch (e) {
      console.error(e);
      setVerifyStatus("idle");
      setAccountStatus("error");
    }
  }, [props.client, userInfo, ecosystem]);
  async function connect(otp) {
    if ("email" in userInfo) {
      await wallet.connect({
        chain: props.chain,
        client: props.client,
        email: userInfo.email,
        strategy: "email",
        verificationCode: otp
      });
      await setLastAuthProvider("email", webLocalStorage);
    } else if ("phone" in userInfo) {
      await wallet.connect({
        chain: props.chain,
        client: props.client,
        phoneNumber: userInfo.phone,
        strategy: "phone",
        verificationCode: otp
      });
      await setLastAuthProvider("phone", webLocalStorage);
    } else {
      throw new Error("Invalid userInfo");
    }
  }
  async function link(otp) {
    if ("email" in userInfo) {
      await linkProfile({
        client: props.client,
        ecosystem,
        email: userInfo.email,
        strategy: "email",
        verificationCode: otp
      });
    } else if ("phone" in userInfo) {
      await linkProfile({
        client: props.client,
        ecosystem,
        phoneNumber: userInfo.phone,
        strategy: "phone",
        verificationCode: otp
      });
    }
  }
  const verify = async (otp) => {
    var _a2;
    if (otp.length !== 6) {
      return;
    }
    setVerifyStatus("verifying");
    try {
      if (props.isLinking) {
        await link(otp);
      } else {
        await connect(otp);
      }
      done();
      setVerifyStatus("valid");
    } catch (e) {
      if (e instanceof Error && ((_a2 = e == null ? void 0 : e.message) == null ? void 0 : _a2.includes("PAYMENT_METHOD_REQUIRED"))) {
        setVerifyStatus("payment_required");
      } else if (e instanceof Error && (e.message.toLowerCase().includes("link") || e.message.toLowerCase().includes("profile"))) {
        setVerifyStatus("linking_error");
        setError(e.message);
      } else {
        setVerifyStatus("invalid");
      }
      console.error("Authentication Error", e);
    }
  };
  const emailSentOnMount = (0, import_react5.useRef)(false);
  (0, import_react5.useEffect)(() => {
    if (!emailSentOnMount.current) {
      emailSentOnMount.current = true;
      sendEmailOrSms();
    }
  }, [sendEmailOrSms]);
  (0, import_react5.useEffect)(() => {
    if (countdown <= 0)
      return;
    const timer = setInterval(() => {
      setCountdown((current) => {
        if (current <= 1) {
          clearInterval(timer);
          return 0;
        }
        return current - 1;
      });
    }, 1e3);
    return () => clearInterval(timer);
  }, [countdown]);
  if (screen === "base") {
    return (0, import_jsx_runtime7.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: [(0, import_jsx_runtime7.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime7.jsx)(ModalHeader, { onBack: goBack, title: locale.signIn }) }), (0, import_jsx_runtime7.jsx)(Container, { center: "y", expand: true, flex: "column", children: (0, import_jsx_runtime7.jsxs)("form", { onSubmit: (e) => {
      e.preventDefault();
    }, children: [(0, import_jsx_runtime7.jsxs)(Container, { center: "x", flex: "column", px: "lg", children: [!isWideModal && (0, import_jsx_runtime7.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime7.jsx)(Text, { children: locale.emailLoginScreen.enterCodeSendTo }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime7.jsx)(Text, { color: "primaryText", children: "email" in userInfo ? userInfo.email : userInfo.phone }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "xl" })] }), (0, import_jsx_runtime7.jsx)(OTPInput, { digits: 6, isInvalid: verifyStatus === "invalid", onEnter: () => {
      verify(otpInput);
    }, setValue: (value) => {
      setOtpInput(value);
      setVerifyStatus("idle");
    }, value: otpInput }), verifyStatus === "invalid" && (0, import_jsx_runtime7.jsxs)(FadeIn, { children: [(0, import_jsx_runtime7.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime7.jsx)(Text, { center: true, color: "danger", size: "sm", children: locale.emailLoginScreen.invalidCode })] }), verifyStatus === "linking_error" && (0, import_jsx_runtime7.jsxs)(FadeIn, { children: [(0, import_jsx_runtime7.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime7.jsx)(Text, { center: true, color: "danger", size: "sm", children: error || "Failed to verify code" })] }), verifyStatus === "payment_required" && (0, import_jsx_runtime7.jsxs)(FadeIn, { children: [(0, import_jsx_runtime7.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime7.jsx)(Text, { center: true, color: "danger", size: "sm", children: locale.maxAccountsExceeded })] }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime7.jsx)(Container, { px: isWideModal ? "xxl" : "lg", children: verifyStatus === "verifying" ? (0, import_jsx_runtime7.jsx)(Container, { animate: "fadein", center: "x", flex: "row", children: (0, import_jsx_runtime7.jsx)(Spinner, { color: "accentText", size: "lg" }) }) : (0, import_jsx_runtime7.jsx)(Container, { animate: "fadein", children: (0, import_jsx_runtime7.jsx)(Button, { onClick: () => verify(otpInput), style: {
      width: "100%"
    }, type: "submit", variant: "accent", children: locale.emailLoginScreen.verify }) }, "btn-container") }), (0, import_jsx_runtime7.jsx)(Spacer, { y: "xl" }), !isWideModal && (0, import_jsx_runtime7.jsx)(Line, {}), (0, import_jsx_runtime7.jsxs)(Container, { gap: "xs", p: isWideModal ? void 0 : "lg", children: [accountStatus === "error" && (0, import_jsx_runtime7.jsx)(Text, { center: true, color: "danger", size: "sm", children: locale.emailLoginScreen.failedToSendCode }), accountStatus === "sending" && (0, import_jsx_runtime7.jsxs)(Container, { center: "both", flex: "row", gap: "xs", style: {
      textAlign: "center"
    }, children: [(0, import_jsx_runtime7.jsx)(Text, { size: "sm", children: locale.emailLoginScreen.sendingCode }), (0, import_jsx_runtime7.jsx)(Spinner, { color: "secondaryText", size: "xs" })] }), accountStatus !== "sending" && (0, import_jsx_runtime7.jsx)(LinkButton, { onClick: countdown === 0 ? sendEmailOrSms : void 0, style: {
      cursor: countdown > 0 ? "default" : "pointer",
      opacity: countdown > 0 ? 0.5 : 1
    }, type: "button", children: countdown > 0 ? `Resend code in ${countdown} seconds` : locale.emailLoginScreen.resendCode })] })] }) })] });
  }
  return null;
}
var LinkButton = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      color: theme.colors.primaryText
    },
    all: "unset",
    color: theme.colors.accentText,
    cursor: "pointer",
    fontSize: fontSize.sm,
    fontWeight: 500,
    textAlign: "center",
    width: "100%"
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/PassKeyLogin.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/LoadingState.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function LoadingState(props) {
  return (0, import_jsx_runtime8.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime8.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime8.jsxs)(Container, { center: "x", flex: "row", style: {
    position: "relative"
  }, children: [(0, import_jsx_runtime8.jsx)(Spinner, { color: "accentText", size: "4xl" }), (0, import_jsx_runtime8.jsx)(Container, { color: "accentText", style: {
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }, children: props.icon })] }), (0, import_jsx_runtime8.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime8.jsx)(Text, { center: true, color: "primaryText", size: "lg", children: props.title }), (0, import_jsx_runtime8.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime8.jsx)(Text, { center: true, multiline: true, children: props.subtitle }), (0, import_jsx_runtime8.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime8.jsx)(Spacer, { y: "xxl" })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/PassKeyLogin.js
function PassKeyLogin(props) {
  const { wallet, done, client, chain, size, locale } = props;
  const [screen, setScreen] = (0, import_react6.useState)("loading");
  const triggered = (0, import_react6.useRef)(false);
  (0, import_react6.useEffect)(() => {
    if (triggered.current) {
      return;
    }
    triggered.current = true;
    hasStoredPasskey(client, isEcosystemWallet(wallet.id) ? wallet.id : void 0).then((isStored) => {
      if (isStored) {
        setScreen("login");
      } else {
        setScreen("select");
      }
    }).catch(() => {
      setScreen("select");
    });
  }, [client, wallet.id]);
  return (0, import_jsx_runtime9.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: [(0, import_jsx_runtime9.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime9.jsx)(ModalHeader, { onBack: props.onBack, title: props.isLinking ? locale.passkeys.linkPasskey : locale.passkeys.title }) }), (0, import_jsx_runtime9.jsx)(Container, { center: "y", expand: true, flex: "column", px: size === "wide" ? "xxl" : "lg", children: (0, import_jsx_runtime9.jsxs)("div", { children: [screen === "loading" && (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [(0, import_jsx_runtime9.jsx)(LoadingScreen, {}), (0, import_jsx_runtime9.jsx)(Spacer, { y: "xxl" })] }), screen === "select" && (0, import_jsx_runtime9.jsx)(SelectLoginMethod, { onSignin: () => {
    setScreen("login");
  }, onSignup: () => {
    setScreen("signup");
  } }), screen === "login" && (0, import_jsx_runtime9.jsx)(LoginScreen, { chain, client, done, isLinking: props.isLinking, onCreate: () => {
    setScreen("signup");
  }, wallet }), screen === "signup" && (0, import_jsx_runtime9.jsx)(SignupScreen, { chain, client, done, isLinking: props.isLinking, wallet })] }) })] });
}
function LoginScreen(props) {
  const { wallet, done, client, chain } = props;
  const [status, setStatus] = (0, import_react6.useState)("loading");
  const [error, setError] = (0, import_react6.useState)();
  async function login() {
    setStatus("loading");
    try {
      if (props.isLinking) {
        await linkProfile({
          client,
          strategy: "passkey",
          type: "sign-in"
        }).catch((e) => {
          setError(e.message);
          throw e;
        });
      } else {
        await wallet.connect({
          chain,
          client,
          strategy: "passkey",
          type: "sign-in"
        });
        await setLastAuthProvider("passkey", webLocalStorage);
      }
      done();
    } catch (e) {
      console.error("Failed to login with passkey", e);
      setStatus("error");
    }
  }
  const triggered = (0, import_react6.useRef)(false);
  (0, import_react6.useEffect)(() => {
    if (triggered.current) {
      return;
    }
    triggered.current = true;
    login();
  });
  if (status === "loading") {
    return (0, import_jsx_runtime9.jsx)(LoadingState, { icon: (0, import_jsx_runtime9.jsx)(FingerPrintIcon, { size: iconSize.xxl }), subtitle: "A pop-up prompt will appear to sign-in and verify your passkey", title: "Requesting Passkey" });
  }
  if (status === "error") {
    return (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [(0, import_jsx_runtime9.jsx)(ErrorState, { onTryAgain: login, title: error || "Failed to Login" }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime9.jsx)(Button, { fullWidth: true, onClick: props.onCreate, variant: "outline", children: "Create a new Passkey" }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "lg" })] });
  }
  return null;
}
function SignupScreen(props) {
  var _a;
  const { wallet, done, client, chain } = props;
  const [error, setError] = (0, import_react6.useState)();
  const [status, setStatus] = (0, import_react6.useState)("loading");
  const ecosystem = isEcosystemWallet(wallet) ? {
    id: wallet.id,
    partnerId: (_a = wallet.getConfig()) == null ? void 0 : _a.partnerId
  } : void 0;
  async function signup() {
    setStatus("loading");
    try {
      if (props.isLinking) {
        await linkProfile({
          client,
          ecosystem,
          strategy: "passkey",
          type: "sign-up"
        });
      } else {
        await wallet.connect({
          chain,
          client,
          strategy: "passkey",
          type: "sign-up"
        });
        await setLastAuthProvider("passkey", webLocalStorage);
      }
      done();
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        setError(`Error creating passkey: ${e.message}`);
      }
      setStatus("error");
    }
  }
  const triggered = (0, import_react6.useRef)(false);
  (0, import_react6.useEffect)(() => {
    if (triggered.current) {
      return;
    }
    triggered.current = true;
    signup();
  });
  if (status === "loading") {
    return (0, import_jsx_runtime9.jsx)(LoadingState, { icon: (0, import_jsx_runtime9.jsx)(FingerPrintIcon, { size: iconSize.xxl }), subtitle: "A pop-up prompt will appear to sign-in and verify your passkey", title: "Creating Passkey" });
  }
  if (status === "error") {
    return (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [(0, import_jsx_runtime9.jsx)(ErrorState, { onTryAgain: signup, title: error || "Failed to create passkey" }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "lg" })] });
  }
  return null;
}
function SelectLoginMethod(props) {
  return (0, import_jsx_runtime9.jsxs)(Container, { children: [(0, import_jsx_runtime9.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime9.jsx)(Container, { center: "x", color: "accentText", flex: "row", children: (0, import_jsx_runtime9.jsx)(FingerPrintIcon, { size: iconSize["4xl"] }) }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime9.jsx)(Button, { fullWidth: true, onClick: props.onSignup, variant: "accent", children: "Create a Passkey" }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime9.jsx)(Button, { fullWidth: true, onClick: props.onSignin, variant: "outline", children: "I have a Passkey" }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "lg" })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/SocialLogin.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);
function SocialLogin(props) {
  var _a, _b;
  const ewLocale = props.locale;
  const locale = ewLocale.socialLoginScreen;
  const themeObj = useCustomTheme();
  const ecosystem = isEcosystemWallet(props.wallet) ? {
    id: props.wallet.id,
    partnerId: (_a = props.wallet.getConfig()) == null ? void 0 : _a.partnerId
  } : void 0;
  const [authError, setAuthError] = (0, import_react7.useState)(void 0);
  const { done, wallet } = props;
  const [status, setStatus] = (0, import_react7.useState)("connecting");
  const handleSocialLogin = async () => {
    var _a2, _b2, _c, _d;
    const walletConfig = wallet.getConfig();
    const authMode = walletConfig && "auth" in walletConfig ? ((_a2 = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _a2.mode) ?? "popup" : "popup";
    if (walletConfig && "auth" in walletConfig && authMode !== "popup" && !props.isLinking) {
      return loginWithOauthRedirect({
        authOption: props.socialAuth,
        client: props.client,
        ecosystem,
        mode: (_b2 = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _b2.mode,
        redirectUrl: (_c = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _c.redirectUrl
      });
    }
    try {
      const socialWindow = openOauthSignInWindow({
        authOption: props.socialAuth,
        client: props.client,
        ecosystem,
        themeObj
      });
      if (!socialWindow) {
        throw new Error(`Failed to open ${props.socialAuth} login window`);
      }
      setStatus("connecting");
      if (props.isLinking) {
        await linkProfile({
          client: props.client,
          closeOpenedWindow: (openedWindow) => {
            openedWindow.close();
          },
          ecosystem,
          openedWindow: socialWindow,
          strategy: props.socialAuth
        }).catch((e) => {
          setAuthError(e.message);
          throw e;
        });
      } else {
        await wallet.connect({
          chain: props.chain,
          client: props.client,
          closeOpenedWindow: (openedWindow) => {
            openedWindow.close();
          },
          openedWindow: socialWindow,
          strategy: props.socialAuth
        });
      }
      await setLastAuthProvider(props.socialAuth, webLocalStorage);
      setStatus("connected");
      done();
    } catch (e) {
      setStatus("error");
      if (e instanceof Error && ((_d = e == null ? void 0 : e.message) == null ? void 0 : _d.includes("PAYMENT_METHOD_REQUIRED"))) {
        setAuthError(ewLocale.maxAccountsExceeded);
      }
      console.error(`Error signing in with ${props.socialAuth}`, e);
    }
  };
  const socialLogin = (_b = props.state) == null ? void 0 : _b.socialLogin;
  const socialLoginStarted = (0, import_react7.useRef)(false);
  (0, import_react7.useEffect)(() => {
    if (socialLoginStarted.current) {
      return;
    }
    if (socialLogin) {
      socialLoginStarted.current = true;
      setStatus("connecting");
      socialLogin.connectionPromise.then(() => {
        done();
        setStatus("connected");
      }).catch((e) => {
        setAuthError(e.message);
        setStatus("error");
      });
    }
  }, [done, socialLogin]);
  return (0, import_jsx_runtime10.jsx)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: (0, import_jsx_runtime10.jsxs)(Container, { expand: true, flex: "column", p: "lg", style: {
    paddingBottom: 0
  }, children: [props.goBack && (0, import_jsx_runtime10.jsx)(ModalHeader, { onBack: props.goBack, title: props.isLinking ? props.connectLocale.manageWallet.linkProfile : locale.title }), props.size === "compact" ? (0, import_jsx_runtime10.jsx)(Spacer, { y: "xl" }) : null, (0, import_jsx_runtime10.jsxs)(Container, { center: "both", expand: true, flex: "column", style: {
    minHeight: "250px",
    textAlign: "center"
  }, children: [status !== "error" && (0, import_jsx_runtime10.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime10.jsx)(Text, { center: true, color: "primaryText", multiline: true, style: {
    maxWidth: "250px"
  }, children: locale.instruction }), (0, import_jsx_runtime10.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime10.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime10.jsx)(Spinner, { color: "accentText", size: "lg" }) }), (0, import_jsx_runtime10.jsx)(Spacer, { y: "xxl" })] }), status === "error" && (0, import_jsx_runtime10.jsxs)(Container, { animate: "fadein", children: [authError ? (0, import_jsx_runtime10.jsx)(Text, { center: true, color: "danger", children: authError }) : (0, import_jsx_runtime10.jsx)(Text, { color: "danger", children: locale.failed }), (0, import_jsx_runtime10.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime10.jsx)(Button, { onClick: handleSocialLogin, variant: "primary", children: locale.retry }), (0, import_jsx_runtime10.jsx)(Spacer, { y: "xxl" })] })] })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/WalletAuth.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react18 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/wallets/defaultWallets.js
function getDefaultWallets(options) {
  return [
    createWallet("inApp", {
      executionMode: options == null ? void 0 : options.executionMode
    }),
    createWallet(METAMASK),
    createWallet(COINBASE, {
      appMetadata: options == null ? void 0 : options.appMetadata,
      chains: options == null ? void 0 : options.chains
    }),
    createWallet(RAINBOW),
    createWallet("io.rabby"),
    createWallet(ZERION)
  ];
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useAddConnectedWallet.js
function useAddConnectedWallet() {
  const manager = useConnectionManagerCtx("useAddConnectedWallet");
  return manager.addConnectedWallet;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/WalletSelector.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var import_react17 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/SmartWalletConnectUI.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var import_react16 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/smartWallet/locale/getSmartWalletLocale.js
async function getSmartWalletLocale(localeId) {
  switch (localeId) {
    case "es_ES":
      return (await import("./es-7BANI5SB.js")).default;
    case "ja_JP":
      return (await import("./ja-R7RE75R7.js")).default;
    case "tl_PH":
      return (await import("./tl-DDXJSI5B.js")).default;
    case "vi_VN":
      return (await import("./vi-O6BSASWA.js")).default;
    case "de_DE":
      return (await import("./de-BXD37NXN.js")).default;
    case "ko_KR":
      return (await import("./kr-UXTRKY2F.js")).default;
    case "fr_FR":
      return (await import("./fr-ZU7UEFZG.js")).default;
    case "ru_RU":
      return (await import("./ru-7HZ5R4LE.js")).default;
    case "pt_BR": {
      return (await import("./br-IC732Q6E.js")).default;
    }
    default:
      return (await import("./en-KHAMZ2H7.js")).default;
  }
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AnyWalletConnectUI.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var import_react15 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/injected/locale/getInjectedWalletLocale.js
async function getInjectedWalletLocale(locale) {
  switch (locale) {
    case "es_ES":
      return (await import("./es-KTG636XG.js")).default;
    case "ja_JP":
      return (await import("./ja-76WK7DB2.js")).default;
    case "tl_PH":
      return (await import("./tl-XK7566AQ.js")).default;
    case "vi_VN":
      return (await import("./vi-P2UI4CF7.js")).default;
    case "de_DE":
      return (await import("./de-VFGG6R4A.js")).default;
    case "ko_KR":
      return (await import("./kr-ULA5XIMG.js")).default;
    case "fr_FR":
      return (await import("./fr-J5HEKEFS.js")).default;
    case "ru_RU":
      return (await import("./ru-CFDFI4CH.js")).default;
    case "pt_BR": {
      return (await import("./br-VSNSRHHL.js")).default;
    }
    default:
      return (await import("./en-VSXRZWM3.js")).default;
  }
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/GetStartedScreen.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/AppleIcon.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var AppleIcon = (props) => {
  return (0, import_jsx_runtime11.jsx)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 23 28", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime11.jsx)("path", { d: "M22.4181 21.6041C22.008 22.5506 21.5224 23.422 20.9599 24.223C20.1931 25.3151 19.5652 26.0711 19.0814 26.4908C18.3313 27.1799 17.5277 27.5327 16.6671 27.5528C16.0493 27.5528 15.3043 27.3772 14.437 27.021C13.5669 26.6664 12.7673 26.4908 12.0362 26.4908C11.2694 26.4908 10.447 26.6664 9.56734 27.021C8.68636 27.3772 7.97665 27.5628 7.43403 27.5812C6.60879 27.6164 5.78624 27.2534 4.96519 26.4908C4.44116 26.0343 3.78569 25.2516 3.00047 24.1428C2.15799 22.9587 1.46536 21.5857 0.92274 20.0203C0.341611 18.3295 0.050293 16.6922 0.050293 15.1071C0.050293 13.2914 0.44307 11.7253 1.2298 10.413C1.84809 9.35886 2.67065 8.52734 3.70014 7.91691C4.72963 7.30648 5.84199 6.99541 7.03991 6.97551C7.69538 6.97551 8.55493 7.17804 9.6231 7.57607C10.6882 7.97544 11.3722 8.17797 11.672 8.17797C11.8962 8.17797 12.656 7.94116 13.944 7.46904C15.162 7.0312 16.19 6.84991 17.0321 6.92133C19.3141 7.10529 21.0285 8.00387 22.1687 9.62276C20.1278 10.858 19.1182 12.5881 19.1383 14.8076C19.1567 16.5363 19.7846 17.9749 21.0185 19.1172C21.5777 19.6473 22.2022 20.0571 22.897 20.3481C22.7463 20.7846 22.5872 21.2027 22.4181 21.6041ZM17.1845 1.03178C17.1845 2.38678 16.6889 3.65194 15.7011 4.82296C14.509 6.21507 13.0672 7.0195 11.5036 6.89256C11.4837 6.73 11.4721 6.55892 11.4721 6.37913C11.4721 5.07833 12.039 3.68622 13.0457 2.54798C13.5484 1.97167 14.1876 1.49247 14.9628 1.11021C15.7363 0.733653 16.4679 0.525407 17.156 0.489746C17.1761 0.670889 17.1845 0.85206 17.1845 1.03178Z", fill: "#959CA0" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/ChromeIcon.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var ChromeIcon = (props) => {
  return (0, import_jsx_runtime12.jsx)("svg", { height: props.size, role: "presentation", viewBox: "0 0 190.5 190.5", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime12.jsxs)("g", { transform: "translate(90.669 -507.469)", children: [(0, import_jsx_runtime12.jsx)("path", { clipPath: "none", d: "M4.583 650.342c26.304 0 47.627-21.324 47.627-47.628s-21.323-47.628-47.627-47.628-47.627 21.324-47.627 47.628 21.323 47.628 47.627 47.628z", fill: "#fff", mask: "none" }), (0, import_jsx_runtime12.jsx)("path", { clipPath: "none", d: "M-36.664 626.539l-41.24-71.43c-8.362 14.479-12.765 30.904-12.765 47.625s4.401 33.146 12.762 47.625 20.387 26.503 34.868 34.86 30.908 12.755 47.628 12.75l41.24-71.43v-.011c-4.177 7.244-10.188 13.26-17.428 17.443a47.62 47.62 0 0 1-47.632.007 47.62 47.62 0 0 1-17.433-17.437z", fill: "#229342", mask: "none" }), (0, import_jsx_runtime12.jsx)("path", { clipPath: "none", d: "M45.826 626.536l-41.239 71.43c16.72.003 33.146-4.398 47.626-12.757s26.504-20.384 34.863-34.865a95.24 95.24 0 0 0 12.755-47.627c-.003-16.72-4.408-33.145-12.772-47.623H4.58l-.01.007a47.62 47.62 0 0 1 23.819 6.372c7.243 4.179 13.257 10.19 17.439 17.431a47.62 47.62 0 0 1-.001 47.633z", fill: "#fbc116", mask: "none" }), (0, import_jsx_runtime12.jsx)("path", { clipPath: "none", d: "M4.583 640.43c20.824 0 37.705-16.881 37.705-37.706s-16.881-37.705-37.705-37.705-37.705 16.881-37.705 37.705 16.881 37.706 37.705 37.706z", fill: "#1a73e8", mask: "none" }), (0, import_jsx_runtime12.jsx)("path", { clipPath: "none", d: "M4.583 555.097h82.479c-8.358-14.481-20.381-26.507-34.861-34.868a95.23 95.23 0 0 0-47.625-12.76c-16.72.001-33.145 4.404-47.623 12.767a95.23 95.23 0 0 0-34.856 34.872l41.24 71.43.011.006a47.62 47.62 0 0 1-.015-47.633c4.179-7.242 10.193-13.256 17.434-17.436s15.456-6.381 23.818-6.379z", fill: "#e33b2e", mask: "none" })] }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/PlayStoreIcon.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var PlayStoreIcon = (props) => {
  return (0, import_jsx_runtime13.jsxs)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 23 26", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime13.jsx)("path", { d: "M10.5832 12.0978L0.0976562 23.2275C0.0980507 23.2298 0.0988382 23.2317 0.0992076 23.2341C0.420793 24.4427 1.52467 25.3326 2.83473 25.3326C3.35844 25.3326 3.85012 25.191 4.27179 24.9424L4.30528 24.9228L16.1087 18.1117L10.5838 12.0977", fill: "#EB3131" }), (0, import_jsx_runtime13.jsx)("path", { d: "M21.1922 10.2046L21.1821 10.1977L16.0862 7.2435L10.345 12.3523L16.1061 18.1127L21.1752 15.1879C22.0639 14.7081 22.6672 13.7712 22.6672 12.6908C22.6672 11.6182 22.072 10.6859 21.1922 10.2046Z", fill: "#F6B60B" }), (0, import_jsx_runtime13.jsx)("path", { d: "M0.0961678 2.10416C0.0331317 2.33661 0 2.58009 0 2.83292V22.5002C0 22.7526 0.0327407 22.9969 0.0965672 23.2285L10.9441 12.3832L0.0965672 2.10444", fill: "#5778C5" }), (0, import_jsx_runtime13.jsx)("path", { d: "M10.6603 12.6667L16.088 7.24061L4.29785 0.404818C3.8693 0.148138 3.36912 0 2.83391 0C1.52384 0 0.418474 0.891502 0.0968301 2.10147C0.0964356 2.10265 0.0964355 2.10347 0.0964355 2.1045L10.6603 12.6669", fill: "#3BAD49" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/components/QRCode.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var import_react9 = __toESM(require_react(), 1);
var QRCodeRenderer = (0, import_react9.lazy)(() => import("./QRCodeRenderer-SNPIJF5U.js"));
var QRCode = (props) => {
  const size = props.size || 310;
  const placeholder = (0, import_jsx_runtime14.jsxs)(QRPlaceholder, { style: {
    height: `${size}px`,
    width: `${size}px`
  }, children: [(0, import_jsx_runtime14.jsx)("span", { "data-v1": true }), (0, import_jsx_runtime14.jsx)("span", { "data-v2": true }), (0, import_jsx_runtime14.jsx)("span", { "data-v3": true }), (0, import_jsx_runtime14.jsx)("div", {})] });
  return (0, import_jsx_runtime14.jsxs)("div", { style: {
    display: "flex",
    justifyContent: "center",
    position: "relative"
  }, children: [props.qrCodeUri ? (0, import_jsx_runtime14.jsx)(import_react9.Suspense, { fallback: placeholder, children: (0, import_jsx_runtime14.jsx)(QRCodeContainer, { children: (0, import_jsx_runtime14.jsx)(QRCodeRenderer, { clearSize: props.QRIcon ? 70 : void 0, ecl: "M", size: size + 20, uri: props.qrCodeUri }) }) }) : placeholder, props.QRIcon && (0, import_jsx_runtime14.jsx)(IconContainer, { children: props.QRIcon })] });
};
var IconContainer = StyledDiv({
  alignContent: "center",
  display: "flex",
  justifyContent: "center",
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1e3
});
var QRCodeContainer = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    "--ck-body-background": theme.colors.modalBg,
    "--ck-qr-background": theme.colors.modalBg,
    "--ck-qr-dot-color": theme.colors.primaryText,
    animation: `${fadeInAnimation} 600ms ease`
  };
});
var PlaceholderKeyframes = keyframes`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`;
var QRPlaceholder = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    "--bg": theme.colors.modalBg,
    "--color": theme.colors.skeletonBg,
    "&::after": {
      animation: `${PlaceholderKeyframes} 1000ms linear infinite both`,
      background: "linear-gradient(90deg, transparent 50%, var(--color), transparent)",
      backgroundSize: "200% 100%",
      content: '""',
      inset: 0,
      position: "absolute",
      transform: "scale(1.5) rotate(45deg)",
      zIndex: 100
    },
    "&:before": {
      background: "repeat",
      backgroundImage: "radial-gradient(var(--color) 41%, transparent 41%)",
      backgroundSize: "1.888% 1.888%",
      content: '""',
      inset: 0,
      position: "absolute",
      zIndex: 3
    },
    "> div": {
      background: "var(--bg)",
      borderRadius: "5px",
      boxShadow: "0 0 0 7px var(--bg)",
      height: "28%",
      position: "relative",
      width: "28%",
      zIndex: 4
    },
    "> span": {
      "&:before": {
        borderRadius: "3px",
        boxShadow: "0 0 0 4px var(--bg)",
        content: '""',
        inset: "9px",
        position: "absolute"
      },
      "&[data-v1]": {
        left: 0,
        top: 0
      },
      "&[data-v2]": {
        right: 0,
        top: 0
      },
      "&[data-v3]": {
        bottom: 0,
        left: 0
      },
      background: "var(--color)",
      borderRadius: "12px",
      boxShadow: "0 0 0 4px var(--bg)",
      height: "13.25%",
      position: "absolute",
      width: "13.25%",
      zIndex: 4
    },
    alignItems: "center",
    borderRadius: radius.md,
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative"
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/GetStartedScreen.js
var GetStartedScreen = ({ wallet, walletInfo, header, footer, onBack, locale, client }) => {
  const [showScreen, setShowScreen] = (0, import_react10.useState)("base");
  const isScanScreen = showScreen === "android-scan" || showScreen === "ios-scan";
  const handleBack = onBack ? () => {
    if (showScreen === "base") {
      onBack();
    } else {
      setShowScreen("base");
    }
  } : void 0;
  return (0, import_jsx_runtime15.jsx)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: (0, import_jsx_runtime15.jsxs)(Container, { expand: true, flex: "column", p: "lg", children: [showScreen === "android-scan" && walletInfo.app.android && (0, import_jsx_runtime15.jsx)(InstallScanScreen, { client, locale: {
    scanToDownload: locale.getStartedScreen.instruction
  }, onBack: handleBack, platform: "Google Play", platformIcon: (0, import_jsx_runtime15.jsx)(PlayStoreIcon, { size: iconSize.md }), url: walletInfo.app.android, walletId: wallet.id, walletName: walletInfo.name }), showScreen === "ios-scan" && walletInfo.app.ios && (0, import_jsx_runtime15.jsx)(InstallScanScreen, { client, locale: {
    scanToDownload: locale.getStartedScreen.instruction
  }, onBack: handleBack, platform: "App Store", platformIcon: (0, import_jsx_runtime15.jsx)(AppleIcon, { size: iconSize.md }), url: walletInfo.app.ios, walletId: wallet.id, walletName: walletInfo.name }), showScreen === "base" && (0, import_jsx_runtime15.jsxs)(Container, { expand: true, flex: "column", children: [header || (0, import_jsx_runtime15.jsx)(ModalHeader, { onBack: handleBack, title: walletInfo.name }), (0, import_jsx_runtime15.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime15.jsx)(Container, { animate: "fadein", center: "y", expand: true, flex: "column", style: {
    minHeight: "250px"
  }, children: (0, import_jsx_runtime15.jsxs)(Container, { flex: "column", gap: "xs", children: [walletInfo.app.chrome && (0, import_jsx_runtime15.jsxs)(ButtonLink2, { onClick: () => {
    openWindow(walletInfo.app.chrome || "");
  }, children: [(0, import_jsx_runtime15.jsx)(ChromeIcon, { size: iconSize.lg }), (0, import_jsx_runtime15.jsx)("span", { children: locale.download.chrome })] }), walletInfo.app.android && (0, import_jsx_runtime15.jsxs)(ButtonLink2, { as: "button", onClick: () => {
    if (isMobile()) {
      openWindow(walletInfo.app.android || "");
    } else {
      setShowScreen("android-scan");
    }
  }, children: [(0, import_jsx_runtime15.jsx)(PlayStoreIcon, { size: iconSize.lg }), (0, import_jsx_runtime15.jsx)("span", { children: locale.download.android })] }), walletInfo.app.ios && (0, import_jsx_runtime15.jsxs)(ButtonLink2, { as: "button", onClick: () => {
    if (isMobile()) {
      openWindow(walletInfo.app.ios || "");
    } else {
      setShowScreen("ios-scan");
    }
  }, children: [(0, import_jsx_runtime15.jsx)(AppleIcon, { size: iconSize.lg }), (0, import_jsx_runtime15.jsx)("span", { children: locale.download.iOS })] })] }) })] }), !isScanScreen && footer] }) });
};
var InstallScanScreen = (props) => {
  return (0, import_jsx_runtime15.jsxs)(Container, { animate: "fadein", expand: true, children: [(0, import_jsx_runtime15.jsx)(ModalHeader, { onBack: props.onBack, title: props.walletName }), (0, import_jsx_runtime15.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime15.jsxs)(Container, { center: "both", expand: true, flex: "column", style: {
    textAlign: "center"
  }, children: [(0, import_jsx_runtime15.jsx)(QRCode, { QRIcon: (0, import_jsx_runtime15.jsx)(WalletImage, { client: props.client, id: props.walletId, size: iconSize.xxl }), qrCodeUri: props.url }), (0, import_jsx_runtime15.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime15.jsx)(Text, { balance: true, center: true, multiline: true, children: props.locale.scanToDownload }), (0, import_jsx_runtime15.jsx)(Spacer, { y: "xs" })] })] });
};
var ButtonLink2 = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      background: theme.colors.secondaryButtonHoverBg,
      color: theme.colors.primaryText,
      textDecoration: "none"
    },
    alignItems: "center",
    all: "unset",
    background: theme.colors.secondaryButtonBg,
    borderRadius: radius.sm,
    boxSizing: "border-box",
    color: theme.colors.secondaryButtonText,
    cursor: "pointer",
    display: "flex",
    fontWeight: 500,
    gap: spacing.md,
    padding: `${spacing.sm} ${spacing.md}`,
    textDecoration: "none",
    transition: "100ms ease",
    width: "100%"
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/WalletConnectConnection.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_react12 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/utils/promise/wait.js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ScanScreen.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var import_react11 = __toESM(require_react(), 1);
var ScanScreen = (props) => {
  const { connectModalSize, client } = props;
  const [linkCopied, setLinkCopied] = (0, import_react11.useState)(false);
  return (0, import_jsx_runtime16.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: [(0, import_jsx_runtime16.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime16.jsx)(ModalHeader, { onBack: props.onBack, title: props.walletName }) }), (0, import_jsx_runtime16.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime16.jsxs)(Container, { center: "both", expand: true, flex: "column", px: "lg", children: [!props.error && (0, import_jsx_runtime16.jsxs)("div", { style: {
    textAlign: "center"
  }, children: [(0, import_jsx_runtime16.jsx)(QRCode, { QRIcon: (0, import_jsx_runtime16.jsx)(WalletImage, { client, id: props.walletId, size: iconSize.xxl }), qrCodeUri: props.qrCodeUri }), (0, import_jsx_runtime16.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime16.jsxs)(Button, { disabled: props.qrCodeUri === void 0, onClick: () => {
    navigator.clipboard.writeText(props.qrCodeUri).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3e3);
    }).catch((err) => {
      console.error("Failed to copy link to clipboard", err);
    });
  }, style: {
    cursor: props.qrCodeUri === void 0 ? "default" : "pointer",
    fontSize: "12px",
    opacity: props.qrCodeUri === void 0 ? 0.5 : 1
  }, variant: "link", children: [linkCopied ? (0, import_jsx_runtime16.jsx)(CheckIcon, { height: 14, width: 14 }) : (0, import_jsx_runtime16.jsx)(CopyIcon, { height: 14, width: 14 }), (0, import_jsx_runtime16.jsx)("span", { style: { padding: "0 4px" }, children: "Copy Link" })] }), (0, import_jsx_runtime16.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime16.jsx)(Text, { balance: true, center: true, multiline: true, style: {
    paddingInline: spacing.lg
  }, children: props.qrScanInstruction })] }), props.error && (0, import_jsx_runtime16.jsxs)(Container, { animate: "fadein", style: {
    width: "100%"
  }, children: [(0, import_jsx_runtime16.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime16.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime16.jsx)(AccentFailIcon, { size: iconSize["3xl"] }) }), (0, import_jsx_runtime16.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime16.jsx)(Text, { center: true, color: "primaryText", size: "lg", children: "Connection Failed" }), (0, import_jsx_runtime16.jsx)(Spacer, { y: "3xl" }), (0, import_jsx_runtime16.jsx)(Button, { fullWidth: true, onClick: props.onRetry, variant: "accent", children: "Try again" })] })] }), (0, import_jsx_runtime16.jsx)(Spacer, { y: "lg" }), props.onGetStarted && (0, import_jsx_runtime16.jsx)(ScreenBottomContainer, { style: {
    border: connectModalSize === "compact" ? void 0 : "none"
  }, children: (0, import_jsx_runtime16.jsx)(Button, { onClick: props.onGetStarted, style: {
    fontSize: fontSize.sm,
    textAlign: "center"
  }, variant: "link", children: props.getStartedLink }) })] });
};

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/WalletConnectConnection.js
var WalletConnectConnection = (props) => {
  const { onBack, onGetStarted, wallet, walletInfo, locale, done } = props;
  const [qrCodeUri, setQrCodeUri] = (0, import_react12.useState)();
  const [errorConnecting, setErrorConnecting] = (0, import_react12.useState)(false);
  const connect = (0, import_react12.useCallback)(() => {
    var _a;
    setErrorConnecting(false);
    wallet.connect({
      chain: props.chain,
      client: props.client,
      walletConnect: {
        onDisplayUri(uri) {
          const preferNative = walletInfo.mobile.native || walletInfo.mobile.universal;
          try {
            if (isMobile()) {
              if (isAndroid()) {
                if (preferNative) {
                  openWindow(formatWalletConnectUrl(preferNative, uri).redirect);
                }
              } else if (isIOS()) {
                if (preferNative) {
                  openWindow(formatWalletConnectUrl(preferNative, uri).redirect);
                }
              } else {
                const preferUniversal = walletInfo.mobile.universal || walletInfo.mobile.native;
                if (preferUniversal) {
                  openWindow(formatWalletConnectUrl(preferUniversal, uri).redirect);
                }
              }
            } else {
              setQrCodeUri(uri);
            }
          } catch {
            setErrorConnecting(true);
          }
        },
        optionalChains: props.chains,
        projectId: (_a = props.walletConnect) == null ? void 0 : _a.projectId,
        showQrModal: false
      }
    }).then(() => {
      done();
    }).catch((e) => {
      setErrorConnecting(true);
      console.error(e);
    });
  }, [
    props.walletConnect,
    walletInfo.mobile.native,
    walletInfo.mobile.universal,
    wallet,
    props.chain,
    props.client,
    props.chains,
    done
  ]);
  const scanStarted = (0, import_react12.useRef)(false);
  (0, import_react12.useEffect)(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    connect();
  }, [connect]);
  if (isMobile()) {
    return (0, import_jsx_runtime17.jsx)(ConnectingScreen, { client: props.client, errorConnecting, locale: {
      failed: locale.connectionScreen.failed,
      getStartedLink: locale.getStartedLink,
      inProgress: locale.connectionScreen.inProgress,
      instruction: locale.connectionScreen.instruction,
      tryAgain: locale.connectionScreen.retry
    }, onBack, onGetStarted, onRetry: connect, size: props.size, walletId: wallet.id, walletName: walletInfo.name });
  }
  return (0, import_jsx_runtime17.jsx)(ScanScreen, { client: props.client, connectModalSize: props.size, error: errorConnecting, getStartedLink: locale.getStartedLink, onBack, onGetStarted, onRetry: connect, qrCodeUri, qrScanInstruction: locale.scanScreen.instruction, walletId: wallet.id, walletName: walletInfo.name });
};
var WalletConnectStandaloneConnection = (props) => {
  const { onBack, wallet, walletInfo, locale, done, setModalVisibility } = props;
  const [qrCodeUri, setQrCodeUri] = (0, import_react12.useState)();
  const [errorConnecting, setErrorConnecting] = (0, import_react12.useState)(false);
  const connect = (0, import_react12.useCallback)(() => {
    var _a, _b;
    setErrorConnecting(false);
    if (isMobile()) {
      let wcModalClosed = false;
      wait(2e3).then(() => {
        if (!wcModalClosed) {
          setModalVisibility(false);
        }
      });
      wallet.connect({
        chain: props.chain,
        client: props.client,
        optionalChains: props.chains,
        projectId: (_a = props.walletConnect) == null ? void 0 : _a.projectId,
        showQrModal: true
      }).then(() => {
        wcModalClosed = true;
        setModalVisibility(true);
        done();
      }).catch((e) => {
        wcModalClosed = true;
        setModalVisibility(true);
        setErrorConnecting(true);
        console.error(e);
      });
    } else {
      wallet.connect({
        chain: props.chain,
        client: props.client,
        onDisplayUri(uri) {
          const platformUris = {
            android: walletInfo.mobile.universal || "",
            ios: walletInfo.mobile.native || "",
            other: walletInfo.mobile.universal || ""
          };
          setQrCodeUri(uri);
          if (isMobile()) {
            if (isAndroid()) {
              openWindow(`${platformUris.android}wc?uri=${encodeURIComponent(uri)}`);
            } else if (isIOS()) {
              openWindow(`${platformUris.ios}wc?uri=${encodeURIComponent(uri)}`);
            } else {
              openWindow(`${platformUris.other}wc?uri=${encodeURIComponent(uri)}`);
            }
          }
        },
        optionalChains: props.chains,
        projectId: (_b = props.walletConnect) == null ? void 0 : _b.projectId,
        showQrModal: false
      }).then(() => {
        done();
      }).catch((e) => {
        setErrorConnecting(true);
        console.error(e);
      });
    }
  }, [
    props.walletConnect,
    walletInfo.mobile.native,
    walletInfo.mobile.universal,
    wallet,
    props.chain,
    props.client,
    props.chains,
    done,
    setModalVisibility
  ]);
  const scanStarted = (0, import_react12.useRef)(false);
  (0, import_react12.useEffect)(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    connect();
  }, [connect]);
  if (isMobile()) {
    return (0, import_jsx_runtime17.jsx)(ConnectingScreen, { client: props.client, errorConnecting, locale: {
      failed: locale.connectionScreen.failed,
      getStartedLink: locale.getStartedLink,
      inProgress: locale.connectionScreen.inProgress,
      instruction: locale.connectionScreen.instruction,
      tryAgain: locale.connectionScreen.retry
    }, onBack, onRetry: connect, size: props.size, walletId: wallet.id, walletName: walletInfo.name });
  }
  return (0, import_jsx_runtime17.jsx)(ScanScreen, { client: props.client, connectModalSize: props.size, error: errorConnecting, getStartedLink: locale.getStartedLink, onBack, onRetry: connect, qrCodeUri, qrScanInstruction: locale.scanScreen.instruction, walletId: wallet.id, walletName: walletInfo.name });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/DeepLinkConnectUI.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var DeepLinkConnectUI = (props) => {
  let link = window.location.toString();
  if (props.wallet.id === "io.metamask") {
    link = link.replace("https://", "");
  } else {
    link = encodeURIComponent(link);
  }
  const deeplink = `${props.deepLinkPrefix}${link}?ref=${link}`;
  return (0, import_jsx_runtime18.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime18.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime18.jsx)(ModalHeader, { onBack: props.onBack, title: props.walletInfo.name }) }), (0, import_jsx_runtime18.jsx)(Container, { animate: "fadein", center: "x", flex: "row", py: "3xl", children: (0, import_jsx_runtime18.jsx)(PulsatingContainer, { children: (0, import_jsx_runtime18.jsx)(WalletImage, { client: props.client, id: props.wallet.id, size: "80" }) }) }), (0, import_jsx_runtime18.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime18.jsxs)(ButtonLink, { fullWidth: true, gap: "xs", href: deeplink, variant: "accent", children: ["Continue in ", props.walletInfo.name, (0, import_jsx_runtime18.jsx)(ExternalLinkIcon, { height: iconSize.sm, width: iconSize.sm })] }) })] });
};
var pulseAnimation = keyframes`
0% {
  transform: scale(0.9);
}
100% {
  opacity: 0;
  transform: scale(1.4);
}
`;
var PulsatingContainer = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    "&::before": {
      animation: `${pulseAnimation} 2s cubic-bezier(0.175, 0.885, 0.32, 1.1) infinite`,
      background: theme.colors.accentText,
      borderRadius: radius.xl,
      bottom: 0,
      content: '""',
      display: "block",
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: -1
    },
    position: "relative"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/InjectedConnectUI.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var import_react14 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/utils/wait.js
var wait2 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/InjectedConnectUI.js
var InjectedConnectUI = (props) => {
  const { wallet, done } = props;
  const [errorConnecting, setErrorConnecting] = (0, import_react14.useState)(false);
  const locale = props.locale;
  const connectToExtension = (0, import_react14.useCallback)(async () => {
    try {
      connectPrompted.current = true;
      setErrorConnecting(false);
      await wait2(1e3);
      await wallet.connect({
        chain: props.chain,
        client: props.client
      });
      done();
    } catch (e) {
      setErrorConnecting(true);
      console.error(e);
    }
  }, [props.client, props.chain, done, wallet]);
  const connectPrompted = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    if (connectPrompted.current) {
      return;
    }
    connectToExtension();
  }, [connectToExtension]);
  return (0, import_jsx_runtime19.jsx)(ConnectingScreen, { client: props.client, errorConnecting, locale: {
    failed: locale.connectionScreen.failed,
    getStartedLink: locale.getStartedLink,
    inProgress: locale.connectionScreen.inProgress,
    instruction: locale.connectionScreen.instruction,
    tryAgain: locale.connectionScreen.retry
  }, onBack: props.onBack, onGetStarted: props.onGetStarted, onRetry: () => {
    connectToExtension();
  }, size: props.size, walletId: props.wallet.id, walletName: props.walletName });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/AnyWalletConnectUI.js
var CoinbaseSDKWalletConnectUI = (0, import_react15.lazy)(() => import("./CoinbaseSDKConnection-WXMRG4EL.js"));
var InAppWalletConnectUI = (0, import_react15.lazy)(() => import("./InAppWalletConnectUI-TVHYRSQK.js"));
var EcosystemWalletConnectUI = (0, import_react15.lazy)(() => import("./EcosystemWalletConnectUI-F6BKX5ZI.js"));
function AnyWalletConnectUI(props) {
  var _a, _b, _c;
  const [screen, setScreen] = (0, import_react15.useState)("main");
  const { wallet } = props;
  const walletInfo = useWalletInfo(props.wallet.id);
  const localeId = props.connectLocale.id;
  const localeFnQuery = useQuery({
    queryFn: async () => {
      return getInjectedWalletLocale(localeId);
    },
    queryKey: ["injectedWalletLocale", localeId, (_a = walletInfo.data) == null ? void 0 : _a.name],
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
  if (walletInfo.isLoading || !localeFnQuery.data) {
    return (0, import_jsx_runtime20.jsx)(LoadingScreen, {});
  }
  const localeFn = localeFnQuery.data;
  if (!walletInfo.data) {
    const injectedProvider = getInstalledWalletProviders().find((w) => w.info.rdns === wallet.id);
    if (injectedProvider) {
      return (0, import_jsx_runtime20.jsx)(InjectedConnectUI, { chain: props.chain, client: props.client, done: props.done, locale: localeFn(injectedProvider.info.name), onBack: props.onBack, size: props.size, wallet: props.wallet, walletName: injectedProvider.info.name });
    }
    return (0, import_jsx_runtime20.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: [(0, import_jsx_runtime20.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime20.jsx)(ModalHeader, { onBack: props.onBack, title: "Not Supported" }) }), (0, import_jsx_runtime20.jsxs)(Container, { center: "both", expand: true, flex: "column", p: "lg", style: {
      minHeight: "300px"
    }, children: [(0, import_jsx_runtime20.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime20.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime20.jsx)(Text, { center: true, color: "primaryText", children: "Wallet is not supported" }), (0, import_jsx_runtime20.jsx)(Spacer, { y: "xxl" })] })] });
  }
  const locale = localeFn(walletInfo.data.name);
  const isInstalled = getInstalledWalletProviders().find((w) => w.info.rdns === walletInfo.data.rdns);
  if (screen === "get-started") {
    return (0, import_jsx_runtime20.jsx)(GetStartedScreen, { client: props.client, locale, onBack: () => {
      setScreen("main");
    }, wallet: props.wallet, walletInfo: walletInfo.data });
  }
  const shouldDeeplink = walletInfo.data.deepLink && !isInstalled && isMobile() && (((_b = wallet.getConfig()) == null ? void 0 : _b.preferDeepLink) || wallet.id === "app.phantom");
  if (((_c = walletInfo.data.deepLink) == null ? void 0 : _c.mobile) && shouldDeeplink) {
    return (0, import_jsx_runtime20.jsx)(DeepLinkConnectUI, { client: props.client, deepLinkPrefix: walletInfo.data.deepLink.mobile, locale, onBack: props.onBack, onGetStarted: () => {
      setScreen("get-started");
    }, wallet: props.wallet, walletInfo: walletInfo.data });
  }
  if (walletInfo.data.rdns && isInstalled) {
    return (0, import_jsx_runtime20.jsx)(InjectedConnectUI, { chain: props.chain, client: props.client, done: props.done, locale, onBack: props.onBack, onGetStarted: () => {
      setScreen("get-started");
    }, size: props.size, wallet: props.wallet, walletName: walletInfo.data.name });
  }
  if (walletInfo.data.mobile.native || walletInfo.data.mobile.universal) {
    return (0, import_jsx_runtime20.jsx)(WalletConnectConnection, { chain: props.chain, chains: props.chains, client: props.client, done: props.done, locale, onBack: props.onBack, onGetStarted: () => {
      setScreen("get-started");
    }, size: props.size, wallet: props.wallet, walletConnect: props.walletConnect, walletInfo: walletInfo.data });
  }
  if (props.wallet.id === "walletConnect") {
    return (0, import_jsx_runtime20.jsx)(WalletConnectStandaloneConnection, { chain: props.chain, chains: props.chains, client: props.client, done: props.done, locale, onBack: props.onBack, setModalVisibility: props.setModalVisibility, size: props.size, wallet: props.wallet, walletConnect: props.walletConnect, walletInfo: walletInfo.data });
  }
  if (props.wallet.id === "inApp" || props.wallet.id === "embedded") {
    return (0, import_jsx_runtime20.jsx)(import_react15.Suspense, { fallback: (0, import_jsx_runtime20.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime20.jsx)(InAppWalletConnectUI, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, done: props.done, goBack: props.onBack, meta: props.meta, size: props.size, wallet: props.wallet, walletConnect: props.walletConnect }) });
  }
  if (isEcosystemWallet(props.wallet.id)) {
    return (0, import_jsx_runtime20.jsx)(import_react15.Suspense, { fallback: (0, import_jsx_runtime20.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime20.jsx)(EcosystemWalletConnectUI, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, done: props.done, goBack: props.onBack, meta: props.meta, size: props.size, wallet: props.wallet, walletConnect: props.walletConnect }) });
  }
  if (props.wallet.id) {
    return (0, import_jsx_runtime20.jsx)(import_react15.Suspense, { fallback: (0, import_jsx_runtime20.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime20.jsx)(CoinbaseSDKWalletConnectUI, { chain: props.chain, client: props.client, done: props.done, locale, onBack: props.onBack, onGetStarted: () => {
      setScreen("get-started");
    }, size: props.size, wallet: props.wallet, walletInfo: walletInfo.data }) });
  }
  return (0, import_jsx_runtime20.jsx)(GetStartedScreen, { client: props.client, locale, onBack: props.onBack, wallet: props.wallet, walletInfo: walletInfo.data });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/SmartWalletConnectUI.js
function SmartConnectUI(props) {
  const personalWalletInfo = useWalletInfo(props.personalWallet.id);
  const [keyConnected, setKeyConnected] = (0, import_react16.useState)(false);
  if (!personalWalletInfo.data) {
    return (0, import_jsx_runtime21.jsx)(LoadingScreen, {});
  }
  if (!keyConnected) {
    return (0, import_jsx_runtime21.jsx)(AnyWalletConnectUI, { chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, done: () => {
      setKeyConnected(true);
    }, meta: props.meta, onBack: props.onBack, setModalVisibility: props.setModalVisibility, size: props.size, wallet: props.personalWallet, walletConnect: props.walletConnect });
  }
  return (0, import_jsx_runtime21.jsx)(SmartWalletConnecting, { accountAbstraction: props.accountAbstraction, client: props.client, done: props.done, localeId: props.connectLocale.id, onBack: props.onBack, personalWallet: props.personalWallet, personalWalletInfo: personalWalletInfo.data, size: props.size });
}
function SmartWalletConnecting(props) {
  const localeQuery = useQuery({
    queryFn: () => getSmartWalletLocale(props.localeId),
    queryKey: ["getSmartWalletLocale", props.localeId]
  });
  const { personalWallet } = props;
  const { done } = props;
  const [smartWalletConnectionStatus, setSmartWalletConnectionStatus] = (0, import_react16.useState)("idle");
  const connectionManager = useConnectionManager();
  const handleConnect = (0, import_react16.useCallback)(async () => {
    if (!personalWallet) {
      throw new Error("No personal wallet");
    }
    setSmartWalletConnectionStatus("connecting");
    try {
      const connected = await connectionManager.handleConnection(personalWallet, {
        accountAbstraction: props.accountAbstraction,
        client: props.client
      });
      done(connected);
      setSmartWalletConnectionStatus("idle");
    } catch (e) {
      console.error(e);
      setSmartWalletConnectionStatus("connect-error");
    }
  }, [
    done,
    personalWallet,
    props.client,
    props.accountAbstraction,
    connectionManager
  ]);
  const connectStarted = (0, import_react16.useRef)(false);
  (0, import_react16.useEffect)(() => {
    if (!connectStarted.current) {
      handleConnect();
      connectStarted.current = true;
    }
  }, [handleConnect]);
  if (!localeQuery.data) {
    return (0, import_jsx_runtime21.jsx)(LoadingScreen, {});
  }
  if (smartWalletConnectionStatus === "connect-error") {
    return (0, import_jsx_runtime21.jsx)(Container, { animate: "fadein", center: "both", flex: "column", fullHeight: true, p: "lg", style: {
      minHeight: "300px"
    }, children: (0, import_jsx_runtime21.jsx)(Text, { color: "danger", children: localeQuery.data.failedToConnect }) });
  }
  return (0, import_jsx_runtime21.jsxs)(Container, { center: "both", flex: "column", fullHeight: true, style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime21.jsx)(Text, { center: true, color: "primaryText", multiline: true, children: localeQuery.data.connecting }), (0, import_jsx_runtime21.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime21.jsx)(Spinner, { color: "accentText", size: "lg" })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/TOS.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
function TOS(props) {
  const { termsOfServiceUrl, privacyPolicyUrl, locale, requireApproval } = props;
  if (!termsOfServiceUrl && !privacyPolicyUrl && !requireApproval) {
    return null;
  }
  const bothGiven = termsOfServiceUrl && privacyPolicyUrl;
  return (0, import_jsx_runtime22.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime22.jsxs)(Text, { balance: true, center: true, inline: true, multiline: true, size: "xs", style: {
    maxWidth: "250px"
  }, children: [requireApproval && (0, import_jsx_runtime22.jsx)("input", { checked: props.isApproved, disabled: !requireApproval, onChange: props.onApprove, style: {
    marginRight: spacing["3xs"],
    transform: "translateY(3px)"
  }, type: "checkbox" }), locale.prefix, " ", termsOfServiceUrl && (0, import_jsx_runtime22.jsxs)(Link, { href: termsOfServiceUrl, inline: true, size: "xs", style: {
    whiteSpace: "nowrap"
  }, target: "_blank", children: [" ", locale.termsOfService, " "] }), bothGiven && `${locale.and} `, privacyPolicyUrl && (0, import_jsx_runtime22.jsx)(Link, { href: privacyPolicyUrl, inline: true, size: "xs", target: "_blank", children: locale.privacyPolicy }), !privacyPolicyUrl && !termsOfServiceUrl && (0, import_jsx_runtime22.jsx)(Text, { inline: true, size: "xs", children: "Terms of Service and Privacy Policy" })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/WalletSelector.js
var InAppWalletSelectionUI = (0, import_react17.lazy)(() => import("./InAppWalletSelectionUI-MJYWHSQN.js"));
var inAppWalletId = "inApp";
function WalletSelector(props) {
  const [personalWallet, setPersonalWallet] = (0, import_react17.useState)(null);
  if (!props.accountAbstraction) {
    return (0, import_jsx_runtime23.jsx)(WalletSelectorInner, { ...props });
  }
  if (personalWallet) {
    return (0, import_jsx_runtime23.jsx)(SmartConnectUI, { accountAbstraction: props.accountAbstraction, chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, done: props.done, meta: props.meta, onBack: props.goBack, personalWallet, setModalVisibility: props.setModalVisibility, size: props.size, walletConnect: props.walletConnect });
  }
  return (0, import_jsx_runtime23.jsx)(WalletSelectorInner, { ...props, done: (w) => {
    setPersonalWallet(w);
  } });
}
var WalletSelectorInner = (props) => {
  const { walletIdsToHide } = props;
  const isCompact = props.size === "compact";
  const [isWalletGroupExpanded, setIsWalletGroupExpanded] = (0, import_react17.useState)(false);
  const [approvedTOS, setApprovedTOS] = (0, import_react17.useState)(false);
  const installedWallets = getInstalledWallets();
  const propsWallets = props.wallets;
  let _wallets = [...propsWallets];
  for (const iW of installedWallets) {
    if (!propsWallets.find((w) => w.id === iW.id)) {
      _wallets.push(iW);
    }
  }
  if (walletIdsToHide) {
    _wallets = _wallets.filter((w) => !(walletIdsToHide == null ? void 0 : walletIdsToHide.includes(w.id)));
  }
  const localWalletConfig = false;
  const nonLocalWalletConfigs = _wallets;
  const socialWallets = nonLocalWalletConfigs.filter((w) => w.id === inAppWalletId);
  const eoaWallets = sortWallets(nonLocalWalletConfigs.filter((w) => w.id !== inAppWalletId), props.recommendedWallets);
  const continueAsGuest = localWalletConfig && (0, import_jsx_runtime23.jsx)(Button, { "data-test": "continue-as-guest-button", disabled: props.meta.requireApproval && !approvedTOS, fullWidth: true, onClick: () => {
    props.selectWallet(localWalletConfig);
  }, style: !isCompact ? {
    justifyContent: "flex-start",
    textAlign: "left"
  } : void 0, variant: isCompact ? "outline" : "link", children: props.connectLocale.continueAsGuest });
  const enableTWIconLink = (0, import_react17.useRef)(false);
  (0, import_react17.useEffect)(() => {
    setTimeout(() => {
      enableTWIconLink.current = true;
    }, 1e3);
  }, []);
  const twTitle = props.modalHeader ? (0, import_jsx_runtime23.jsx)(ModalHeader, { onBack: props.modalHeader.onBack, title: props.modalHeader.title }) : (0, import_jsx_runtime23.jsxs)(Container, { center: "y", flex: "row", gap: "xxs", children: [!props.meta.titleIconUrl ? null : (0, import_jsx_runtime23.jsx)(Img, { client: props.client, height: iconSize.md, src: props.meta.titleIconUrl, width: iconSize.md }), (0, import_jsx_runtime23.jsxs)(ModalTitle, { children: [" ", props.title, " "] })] });
  const handleSelect = async (wallet) => {
    props.selectWallet(wallet);
  };
  const connectAWallet = (0, import_jsx_runtime23.jsx)(WalletTypeRowButton, { client: props.client, disabled: props.meta.requireApproval && !approvedTOS, icon: OutlineWalletIcon, onClick: () => {
    setIsWalletGroupExpanded(true);
  }, title: props.connectLocale.connectAWallet });
  const newToWallets = (0, import_jsx_runtime23.jsxs)(Container, { flex: "row", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime23.jsx)(Text, { color: "secondaryText", size: "sm", weight: 500, children: props.connectLocale.newToWallets }), (0, import_jsx_runtime23.jsx)(Link, { href: "https://blog.thirdweb.com/web3-wallet/", size: "sm", target: "_blank", weight: 500, children: props.connectLocale.getStarted })] });
  const tos = props.meta.requireApproval || props.meta.termsOfServiceUrl || props.meta.privacyPolicyUrl ? (0, import_jsx_runtime23.jsx)(TOS, { isApproved: approvedTOS, locale: props.connectLocale.agreement, onApprove: () => setApprovedTOS(!approvedTOS), privacyPolicyUrl: props.meta.privacyPolicyUrl, requireApproval: props.meta.requireApproval, termsOfServiceUrl: props.meta.termsOfServiceUrl }) : void 0;
  let topSection;
  let bottomSection;
  if (!isCompact) {
    topSection = (0, import_jsx_runtime23.jsx)(WalletSelection, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS, done: props.done, goBack: props.goBack, onShowAll: props.onShowAll, recommendedWallets: props.recommendedWallets, selectWallet: handleSelect, showAllWallets: props.showAllWallets, size: props.size, wallets: nonLocalWalletConfigs });
    if (continueAsGuest) {
      bottomSection = (0, import_jsx_runtime23.jsx)(ScreenBottomContainer, { children: continueAsGuest });
    }
  } else {
    if (socialWallets.length === 0) {
      topSection = (0, import_jsx_runtime23.jsx)(WalletSelection, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS, done: props.done, goBack: props.goBack, onShowAll: props.onShowAll, recommendedWallets: props.recommendedWallets, selectWallet: handleSelect, showAllWallets: props.showAllWallets, size: props.size, wallets: nonLocalWalletConfigs });
      bottomSection = (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [(0, import_jsx_runtime23.jsx)(Line, {}), (0, import_jsx_runtime23.jsxs)(Container, { flex: "column", gap: "md", p: "md", children: [newToWallets, continueAsGuest] }), !continueAsGuest && (0, import_jsx_runtime23.jsx)(Line, {}), tos && (0, import_jsx_runtime23.jsx)(Container, { px: "md", style: {
        paddingBottom: spacing.md,
        paddingTop: continueAsGuest ? 0 : spacing.md
      }, children: tos })] });
    } else {
      if (!isWalletGroupExpanded) {
        topSection = (0, import_jsx_runtime23.jsxs)(Container, { px: "xs", children: [(0, import_jsx_runtime23.jsx)(WalletSelection, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS, done: props.done, goBack: props.goBack, recommendedWallets: props.recommendedWallets, selectWallet: handleSelect, showAllWallets: props.showAllWallets, size: props.size, wallets: socialWallets }), eoaWallets.length > 0 && (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [(0, import_jsx_runtime23.jsx)(TextDivider, { text: props.connectLocale.or }), (0, import_jsx_runtime23.jsx)(Spacer, { y: "lg" })] })] });
        if (eoaWallets.length === 0) {
          bottomSection = tos || continueAsGuest ? (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [(0, import_jsx_runtime23.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime23.jsx)(Line, {}), continueAsGuest && (0, import_jsx_runtime23.jsxs)(Container, { p: "lg", children: [" ", continueAsGuest] }), tos && (0, import_jsx_runtime23.jsxs)(Container, { p: "md", children: [" ", tos, " "] })] }) : (0, import_jsx_runtime23.jsx)(Spacer, { y: "sm" });
        } else {
          if (eoaWallets.length > 1) {
            bottomSection = (0, import_jsx_runtime23.jsxs)(Container, { flex: "column", gap: "sm", style: { position: "relative" }, children: [(0, import_jsx_runtime23.jsx)(GradientDiv, {}), (0, import_jsx_runtime23.jsxs)(Container, { flex: "column", gap: "md", px: "lg", children: [connectAWallet, continueAsGuest] }), tos ? (0, import_jsx_runtime23.jsxs)(Container, { p: "md", children: [" ", tos, " "] }) : (0, import_jsx_runtime23.jsx)(Spacer, { y: "xxs" })] });
          } else {
            bottomSection = (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [(0, import_jsx_runtime23.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime23.jsx)(WalletSelection, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS, done: props.done, goBack: props.goBack, onShowAll: props.onShowAll, recommendedWallets: props.recommendedWallets, selectWallet: handleSelect, showAllWallets: props.showAllWallets, size: props.size, wallets: eoaWallets }) }), continueAsGuest && (0, import_jsx_runtime23.jsx)(Container, { flex: "column", gap: "lg", px: "lg", children: continueAsGuest }), tos ? (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [continueAsGuest ? (0, import_jsx_runtime23.jsx)(Spacer, { y: "md" }) : (0, import_jsx_runtime23.jsx)(Line, {}), (0, import_jsx_runtime23.jsxs)(Container, { p: "md", children: [" ", tos, " "] })] }) : continueAsGuest && (0, import_jsx_runtime23.jsx)(Spacer, { y: "xl" })] });
          }
        }
      } else {
        topSection = (0, import_jsx_runtime23.jsx)(WalletSelection, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, diableSelectionDataReset: props.disableSelectionDataReset, disabled: props.meta.requireApproval && !approvedTOS, done: props.done, goBack: props.goBack, onShowAll: props.onShowAll, recommendedWallets: props.recommendedWallets, selectWallet: handleSelect, showAllWallets: props.showAllWallets, size: props.size, wallets: eoaWallets });
        bottomSection = (0, import_jsx_runtime23.jsx)(ScreenBottomContainer, { children: newToWallets });
      }
    }
  }
  const showHeader = !props.hideHeader || props.modalHeader;
  return (0, import_jsx_runtime23.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, scrollY: true, style: {
    maxHeight: props.size === "compact" ? compactModalMaxHeight : void 0
  }, children: [showHeader && (0, import_jsx_runtime23.jsx)(Container, { p: "lg", children: isWalletGroupExpanded ? (0, import_jsx_runtime23.jsx)(ModalHeader, { onBack: () => {
    setIsWalletGroupExpanded(false);
  }, title: twTitle }) : twTitle }), (0, import_jsx_runtime23.jsxs)(Container, { expand: true, px: "md", scrollY: true, style: !showHeader ? {
    paddingTop: spacing.lg
  } : {
    paddingTop: "2px"
  }, children: [!showHeader && isWalletGroupExpanded && (0, import_jsx_runtime23.jsx)(Container, { center: "y", flex: "row", style: {
    padding: spacing.sm,
    paddingTop: 0
  }, children: (0, import_jsx_runtime23.jsxs)(IconButton, { onClick: () => {
    setIsWalletGroupExpanded(false);
  }, style: {
    gap: spacing.xxs,
    paddingBlock: spacing.xxs,
    paddingRight: spacing.xs,
    transform: `translateX(-${spacing.xs})`
  }, children: [(0, import_jsx_runtime23.jsx)(ChevronLeftIcon, { height: iconSize.sm, width: iconSize.sm }), props.connectLocale.goBackButton] }) }), topSection] }), bottomSection, isCompact && props.meta.showThirdwebBranding !== false && (0, import_jsx_runtime23.jsx)(Container, { py: "md", children: (0, import_jsx_runtime23.jsx)(PoweredByThirdweb, {}) })] });
};
var _installedWallets = [];
function getInstalledWallets() {
  if (_installedWallets.length === 0) {
    const providers = getInstalledWalletProviders();
    const walletIds = providers.map((provider) => provider.info.rdns);
    _installedWallets = walletIds.map((w) => createWallet(w));
  }
  return _installedWallets;
}
var WalletSelection = (props) => {
  const wallets = sortWallets(props.wallets, props.recommendedWallets);
  const { screen } = useScreenContext();
  const setSelectionData = useSetSelectionData();
  return (0, import_jsx_runtime23.jsxs)(WalletList, { style: {
    maxHeight: "370px",
    minHeight: "100%"
  }, children: [wallets.map((wallet) => {
    const isActive = screen ? typeof screen === "object" && screen.id === wallet.id : false;
    return (0, import_jsx_runtime23.jsx)("li", { children: wallet.id === "inApp" && props.size === "compact" ? (0, import_jsx_runtime23.jsx)(import_react17.Suspense, { fallback: (0, import_jsx_runtime23.jsx)(LoadingScreen, { height: "195px" }), children: (0, import_jsx_runtime23.jsx)(InAppWalletSelectionUI, { chain: props.chain, client: props.client, connectLocale: props.connectLocale, disabled: props.disabled, done: () => props.done(wallet), goBack: props.goBack, recommendedWallets: props.recommendedWallets, select: () => props.selectWallet(wallet), size: props.size, wallet }) }) : (0, import_jsx_runtime23.jsx)(WalletEntryButton, { badge: void 0, client: props.client, connectLocale: props.connectLocale, isActive, recommendedWallets: props.recommendedWallets, selectWallet: () => {
      if (!props.diableSelectionDataReset) {
        setSelectionData({});
      }
      props.selectWallet(wallet);
    }, wallet }) }, wallet.id);
  }), props.onShowAll && props.showAllWallets !== false && (0, import_jsx_runtime23.jsx)(ButtonContainer, { children: (0, import_jsx_runtime23.jsxs)(WalletButtonEl, { onClick: props.onShowAll, children: [(0, import_jsx_runtime23.jsxs)(ShowAllWalletsIcon, { children: [(0, import_jsx_runtime23.jsx)("div", { "data-dot": true }), (0, import_jsx_runtime23.jsx)("div", { "data-dot": true }), (0, import_jsx_runtime23.jsx)("div", { "data-dot": true }), (0, import_jsx_runtime23.jsx)("div", { "data-dot": true })] }), (0, import_jsx_runtime23.jsxs)(Container, { flex: "row", gap: "xs", children: [(0, import_jsx_runtime23.jsx)(Text, { color: "primaryText", children: "All Wallets" }), (0, import_jsx_runtime23.jsx)(BadgeText, { children: " 500+ " })] })] }) })] });
};
var BadgeText = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    backgroundColor: theme.colors.secondaryButtonBg,
    borderRadius: radius.sm,
    color: theme.colors.secondaryText,
    fontSize: fontSize.xs,
    paddingBlock: "3px",
    paddingInline: spacing.xxs
  };
});
var ButtonContainer = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    "&:hover [data-dot]": {
      background: theme.colors.primaryText
    }
  };
});
var ShowAllWalletsIcon = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    "& div": {
      background: theme.colors.secondaryText,
      borderRadius: "50%",
      height: "10px",
      transition: "background 200ms ease",
      width: "10px"
    },
    alignItems: "center",
    backgroundColor: theme.colors.tertiaryBg,
    border: `2px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    display: "grid",
    gap: spacing["4xs"],
    gridTemplateColumns: "1fr 1fr",
    height: `${iconSize.xl}px`,
    justifyItems: "center",
    padding: spacing.xs,
    width: `${iconSize.xl}px`
  };
});
var WalletList = StyledUl({
  all: "unset",
  boxSizing: "border-box",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "2px",
  listStyleType: "none",
  overflowY: "auto",
  ...noScrollBar,
  margin: "-2px",
  marginBottom: 0,
  // to show the box-shadow of inputs that overflows
  padding: "2px",
  paddingBottom: spacing.lg
});
var GradientDiv = StyledDiv((_) => {
  const theme = useCustomTheme();
  theme.colors.modalBg;
  return {
    background: `linear-gradient(to bottom, transparent 0%, ${theme.colors.modalBg} 80%)`,
    height: spacing.lg,
    left: 0,
    pointerEvents: "none",
    position: "absolute",
    top: `-${spacing.lg}`,
    width: "100%"
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/WalletAuth.js
function WalletAuth(props) {
  var _a;
  const { wallet, done } = props;
  const addConnectedWallet = useAddConnectedWallet();
  const walletToConnect = (0, import_react18.useRef)(void 0);
  const [status, setStatus] = (0, import_react18.useState)("selecting");
  const [error, setError] = (0, import_react18.useState)();
  const [showAll, setShowAll] = (0, import_react18.useState)(false);
  const ecosystem = isEcosystemWallet(wallet) ? {
    id: wallet.id,
    partnerId: (_a = wallet.getConfig()) == null ? void 0 : _a.partnerId
  } : void 0;
  const back = () => {
    setStatus("selecting");
    walletToConnect.current = void 0;
    props.onBack();
  };
  async function login(walletToLink) {
    setStatus("loading");
    setError(void 0);
    walletToConnect.current = walletToLink;
    try {
      if (props.isLinking) {
        await linkProfile({
          chain: props.chain || wallet.getChain() || defineChain(1),
          client: props.client,
          ecosystem,
          strategy: "wallet",
          wallet: walletToLink
        });
      } else {
        await wallet.connect({
          chain: props.chain || walletToLink.getChain() || defineChain(1),
          client: props.client,
          strategy: "wallet",
          wallet: walletToLink
        });
      }
      addConnectedWallet(walletToLink);
      done();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setStatus("error");
    }
  }
  if (!walletToConnect.current) {
    if (showAll) {
      return (0, import_jsx_runtime24.jsx)(import_react18.Suspense, { fallback: (0, import_jsx_runtime24.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime24.jsx)(AllWalletsUI_default, { client: props.client, connectLocale: props.locale, disableSelectionDataReset: true, onBack: () => setShowAll(false), onSelect: async (newWallet) => {
        login(newWallet);
        setShowAll(false);
      }, recommendedWallets: void 0, size: props.size, specifiedWallets: [] }) });
    }
    return (0, import_jsx_runtime24.jsx)(WalletSelector, { chain: wallet.getChain(), chains: [], client: props.client, connectLocale: props.locale, disableSelectionDataReset: true, done: () => {
    }, goBack: back, hideHeader: false, meta: props.meta || {}, modalHeader: {
      onBack: back,
      title: props.isLinking ? props.inAppLocale.linkWallet : props.inAppLocale.signInWithWallet
    }, onShowAll: () => {
      setShowAll(true);
    }, recommendedWallets: void 0, selectWallet: async (newWallet) => {
      login(newWallet);
    }, setModalVisibility: () => {
    }, showAllWallets: true, size: props.size, title: props.locale.connectAWallet, walletConnect: props.walletConnect, walletIdsToHide: ["inApp"], wallets: getDefaultWallets() });
  }
  return (0, import_jsx_runtime24.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: [(0, import_jsx_runtime24.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime24.jsx)(ModalHeader, { onBack: back, title: props.isLinking ? props.inAppLocale.linkWallet : props.inAppLocale.signInWithWallet }) }), (0, import_jsx_runtime24.jsx)(Container, { center: "y", expand: true, flex: "column", px: props.size === "wide" ? "xxl" : "lg", children: (0, import_jsx_runtime24.jsx)("div", { children: status === "error" ? (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [(0, import_jsx_runtime24.jsx)(ErrorState, { onTryAgain: () => {
    if (!walletToConnect.current) {
      throw new Error("Failed to connect to unknown wallet");
    }
    login(walletToConnect.current);
  }, title: error || "Failed to Login" }), (0, import_jsx_runtime24.jsx)(Spacer, { y: "lg" })] }) : (0, import_jsx_runtime24.jsx)(LoadingState, { icon: (0, import_jsx_runtime24.jsx)(WalletImage, { client: props.client, id: walletToConnect.current.id ?? "", size: iconSize.xl }), subtitle: "A pop-up prompt will appear to sign-in and verify your wallet", title: "Sign in with your wallet" }) }) })] });
}

export {
  AccentFailIcon,
  getDefaultWallets,
  ErrorState,
  PoweredByThirdweb,
  wait2 as wait,
  TOS,
  QRCode,
  GuestLogin,
  OTPLoginUI,
  PassKeyLogin,
  SocialLogin,
  WalletAuth,
  AnyWalletConnectUI,
  SmartConnectUI,
  WalletSelector
};
//# sourceMappingURL=chunk-Y4FCGFBJ.js.map
