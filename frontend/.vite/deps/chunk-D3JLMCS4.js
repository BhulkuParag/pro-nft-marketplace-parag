import {
  Button,
  Container,
  Line,
  ModalHeader,
  ReloadIcon,
  Spacer,
  StyledDiv,
  Text,
  WalletImage,
  fadeInAnimation,
  iconSize,
  radius,
  spacing,
  useCustomTheme
} from "./chunk-OPI7XW5K.js";
import {
  keyframes
} from "./chunk-ERYK7KJM.js";
import {
  require_jsx_runtime
} from "./chunk-4VHZN6OL.js";
import {
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectingScreen.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletLogoSpinner.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function WalletLogoSpinner(props) {
  const loaderRadius = 20;
  const radiusFactor = 36 - loaderRadius;
  const dashArrayStart = 116 + radiusFactor;
  const dashArrayEnd = 245 + radiusFactor;
  const dashOffset = -1 * (360 + radiusFactor * 1.75);
  return (0, import_jsx_runtime.jsx)(LogoContainer, { "data-error": props.error, children: (0, import_jsx_runtime.jsx)("div", { "data-container": true, style: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    position: "relative"
  }, children: (0, import_jsx_runtime.jsxs)("div", { "data-img-container": true, children: [!props.hideSpinner && (0, import_jsx_runtime.jsx)("svg", { role: "presentation", style: {
    display: props.error ? "none" : "block"
  }, viewBox: "0 0 110 110", children: (0, import_jsx_runtime.jsx)("rect", { fill: "none", height: "106", rx: loaderRadius, strokeDasharray: `${dashArrayStart} ${dashArrayEnd}`, strokeDashoffset: dashOffset, strokeLinecap: "round", strokeWidth: 4, width: "106", x: "2", y: "2" }) }), (0, import_jsx_runtime.jsx)(WalletBg, { children: (0, import_jsx_runtime.jsx)(WalletImage, { client: props.client, id: props.id, size: "68" }) })] }) }) });
}
var WalletBg = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    alignItems: "center",
    background: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: "13px",
    display: "flex",
    justifyContent: "center",
    padding: spacing.xs
  };
});
var dashRotateAnimation = keyframes`
from {
  stroke-dashoffset: 0px;
}
`;
var shakeErrorAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;
var pulseAnimation = keyframes`
0% {
  transform: scale(0.95);
}
100% {
  opacity: 0;
  transform: scale(1.3);
}
`;
var LogoContainer = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    "[data-img-container]": {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      position: "relative"
    },
    "&[data-error='true'] [data-container]": {
      animation: `${shakeErrorAnimation} 0.25s linear`
    },
    "&[data-error='true'] [data-img-container]::before": {
      animation: `${pulseAnimation} 1.5s ease infinite`,
      background: theme.colors.danger,
      borderRadius: "20px",
      content: '""',
      inset: 0,
      position: "absolute",
      zIndex: -1
    },
    borderRadius: radius.xl,
    display: "flex",
    img: {
      zIndex: 100
    },
    justifyContent: "center",
    position: "relative",
    rect: {
      animation: `${dashRotateAnimation} 1.2s linear infinite`,
      stroke: theme.colors.accentText
    },
    svg: {
      animation: `${fadeInAnimation} 400ms ease`,
      height: "calc(100% + 16px)",
      /* can't use inset because safari doesn't like it */
      left: "-8px",
      position: "absolute",
      top: "-8px",
      width: "calc(100% + 16px)"
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectingScreen.js
var ConnectingScreen = (props) => {
  const { locale } = props;
  return (0, import_jsx_runtime2.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: [(0, import_jsx_runtime2.jsx)(Container, { p: "lg", style: {
    paddingBottom: 0
  }, children: (0, import_jsx_runtime2.jsx)(ModalHeader, { onBack: props.onBack, title: props.walletName }) }), (0, import_jsx_runtime2.jsxs)(Container, { center: "y", expand: true, flex: "column", px: props.size === "compact" ? "lg" : "xxl", relative: true, style: {
    paddingTop: 0
  }, children: [(0, import_jsx_runtime2.jsx)(Container, { py: "3xl", children: (0, import_jsx_runtime2.jsx)(WalletLogoSpinner, { client: props.client, error: props.errorConnecting, id: props.walletId }) }), (0, import_jsx_runtime2.jsxs)(Container, { animate: "fadein", style: {
    animationDuration: "200ms"
  }, children: [(0, import_jsx_runtime2.jsx)(Text, { center: true, color: "primaryText", size: "lg", weight: 600, children: props.errorConnecting ? locale.failed : locale.inProgress }), (0, import_jsx_runtime2.jsx)(Spacer, { y: "md" }), !props.errorConnecting ? (0, import_jsx_runtime2.jsx)(Text, { balance: true, center: true, multiline: true, children: locale.instruction }) : (0, import_jsx_runtime2.jsx)(Container, { animate: "fadein", center: "x", flex: "row", children: (0, import_jsx_runtime2.jsxs)(Button, { fullWidth: true, onClick: props.onRetry, style: {
    alignItems: "center",
    gap: spacing.xs
  }, variant: "accent", children: [(0, import_jsx_runtime2.jsx)(ReloadIcon, { height: iconSize.sm, width: iconSize.sm }), locale.tryAgain] }) })] })] }), props.onGetStarted ? (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [(0, import_jsx_runtime2.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime2.jsx)(Line, {}), (0, import_jsx_runtime2.jsx)(Container, { center: "x", flex: "row", p: "lg", children: (0, import_jsx_runtime2.jsx)(Button, { onClick: props.onGetStarted, variant: "link", children: locale.getStartedLink }) })] }) : (0, import_jsx_runtime2.jsx)(Spacer, { y: props.size === "compact" ? "lg" : "xxl" })] });
};

export {
  WalletLogoSpinner,
  ConnectingScreen
};
//# sourceMappingURL=chunk-D3JLMCS4.js.map
