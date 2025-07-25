import {
  Container,
  CustomThemeProvider,
  Img,
  Skeleton,
  StyledButton,
  StyledCircle,
  StyledDiv,
  StyledInput,
  StyledLabel,
  StyledSvg,
  Text,
  WalletImage,
  fontSize,
  iconSize,
  radius,
  spacing,
  useCustomTheme,
  useWalletInfo
} from "./chunk-OPI7XW5K.js";
import {
  getInstalledWalletProviders
} from "./chunk-OZT5CELG.js";
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

// node_modules/thirdweb/dist/esm/react/web/ui/components/Spinner.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var Spinner = (props) => {
  const theme = useCustomTheme();
  return (0, import_jsx_runtime.jsx)(Svg, { style: {
    height: `${iconSize[props.size]}px`,
    width: `${iconSize[props.size]}px`
  }, viewBox: "0 0 50 50", children: (0, import_jsx_runtime.jsx)(Circle, { cx: "25", cy: "25", fill: "none", r: "20", stroke: props.color ? theme.colors[props.color] : "currentColor", strokeWidth: Number(iconSize[props.size]) > 64 ? "2" : "4" }) });
};
var dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;
var rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
var Svg = StyledSvg({
  animation: `${rotateAnimation} 2s linear infinite`,
  height: "1em",
  width: "1em"
});
var Circle = StyledCircle({
  animation: `${dashAnimation} 1.5s ease-in-out infinite`,
  strokeLinecap: "round"
});

// node_modules/thirdweb/dist/esm/react/web/providers/wallet-ui-states-provider.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
var WalletModalOpen = (0, import_react2.createContext)(false);
var SetWalletModalOpen = (0, import_react2.createContext)(() => {
});
var SelectionUIDataCtx = (0, import_react2.createContext)({});
var SetSelectionUIDataCtx = (0, import_react2.createContext)(() => {
});
var WalletUIStatesProvider = (props) => {
  const [isWalletModalOpen, setIsWalletModalOpen] = (0, import_react2.useState)(props.isOpen);
  const [selectionUIData, setSelectionUIData] = (0, import_react2.useState)({});
  return (0, import_jsx_runtime2.jsx)(WalletModalOpen.Provider, { value: isWalletModalOpen, children: (0, import_jsx_runtime2.jsx)(SetWalletModalOpen.Provider, { value: setIsWalletModalOpen, children: (0, import_jsx_runtime2.jsx)(SelectionUIDataCtx.Provider, { value: selectionUIData, children: (0, import_jsx_runtime2.jsx)(SetSelectionUIDataCtx.Provider, { value: setSelectionUIData, children: (0, import_jsx_runtime2.jsx)(CustomThemeProvider, { theme: props.theme, children: props.children }) }) }) }) });
};
var useIsWalletModalOpen = () => {
  return (0, import_react2.useContext)(WalletModalOpen);
};
var useSetIsWalletModalOpen = () => {
  const context = (0, import_react2.useContext)(SetWalletModalOpen);
  if (context === void 0) {
    throw new Error("useSetWalletModalOpen must be used within a ThirdwebProvider");
  }
  return context;
};
function useSetSelectionData() {
  return (0, import_react2.useContext)(SetSelectionUIDataCtx);
}
function useSelectionData() {
  return (0, import_react2.useContext)(SelectionUIDataCtx);
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/formElements.js
var Label = StyledLabel((props) => {
  const theme = useCustomTheme();
  return {
    color: theme.colors[props.color || "primaryText"],
    display: "block",
    fontSize: fontSize.sm,
    fontWeight: 500
  };
});
var Input = StyledInput((props) => {
  const theme = useCustomTheme();
  return {
    "&:-webkit-autofill": {
      boxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset !important`,
      transition: "background-color 5000s ease-in-out 0s",
      WebkitBoxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset !important`,
      WebkitTextFillColor: theme.colors.primaryText
    },
    "&:-webkit-autofill:focus": {
      boxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset, 0 0 0 2px ${props.variant === "outline" ? theme.colors.accentText : "transparent"} !important`,
      WebkitBoxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset, 0 0 0 2px ${props.variant === "outline" ? theme.colors.accentText : "transparent"} !important`
    },
    "&::placeholder": {
      color: theme.colors.secondaryText
    },
    "&:focus": {
      boxShadow: `0 0 0 2px ${theme.colors.accentText}`
    },
    "&:not([type='password'])": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    "&[data-error='true']": {
      boxShadow: `0 0 0 2px ${theme.colors.danger} !important`
    },
    "&[data-focus='false']:focus": {
      boxShadow: "none"
    },
    "&[data-placeholder='true']": {
      color: theme.colors.secondaryText
    },
    "&[disabled]": {
      cursor: "not-allowed"
    },
    "&[type='number']": {
      appearance: "none",
      MozAppearance: "textfield"
    },
    "&[type='number']::-webkit-outer-spin-button, &[type='number']::-webkit-inner-spin-button": {
      margin: 0,
      WebkitAppearance: "none"
    },
    appearance: "none",
    background: "transparent",
    border: "none",
    borderRadius: radius.md,
    boxShadow: `0 0 0 1.5px ${props.variant === "outline" ? theme.colors.borderColor : "transparent"}`,
    boxSizing: "border-box",
    color: theme.colors.primaryText,
    display: "block",
    fontFamily: "inherit",
    fontSize: fontSize.md,
    outline: "none",
    padding: props.sm ? spacing.sm : fontSize.sm,
    WebkitAppearance: "none",
    width: "100%"
  };
});
var InputContainer = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    "&:focus-within": {
      boxShadow: `0 0 0px 1px ${theme.colors.accentText}`
    },
    // show error ring on container instead of input
    "&[data-error='true']": {
      boxShadow: `0 0 0px 1px ${theme.colors.danger}`
    },
    borderRadius: radius.md,
    boxShadow: `0 0 0px 1px ${theme.colors.borderColor}`,
    display: "flex",
    "input:focus": {
      boxShadow: "none"
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/WalletEntryButton.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function WalletEntryButton(props) {
  var _a, _b, _c, _d;
  const { selectWallet, wallet } = props;
  const walletId = wallet.id;
  const isRecommended = (_a = props.recommendedWallets) == null ? void 0 : _a.find((w) => w.id === walletId);
  const walletInfo = useWalletInfo(walletId);
  const walletName = ((_b = getInstalledWalletProviders().find((p) => p.info.rdns === walletId)) == null ? void 0 : _b.info.name) || ((_c = walletInfo.data) == null ? void 0 : _c.name);
  const isInstalled = getInstalledWalletProviders().find((p) => p.info.rdns === walletId);
  const customMeta = wallet && walletId === "inApp" ? (_d = wallet.getConfig()) == null ? void 0 : _d.metadata : void 0;
  const nameOverride = (customMeta == null ? void 0 : customMeta.name) || walletName;
  const iconOverride = customMeta == null ? void 0 : customMeta.icon;
  return (0, import_jsx_runtime3.jsxs)(WalletButtonEl, { "data-active": props.isActive, onClick: selectWallet, type: "button", children: [iconOverride ? (0, import_jsx_runtime3.jsx)(Img, { alt: nameOverride, client: props.client, height: `${iconSize.xl}`, src: iconOverride, width: `${iconSize.xl}` }) : (0, import_jsx_runtime3.jsx)(WalletImage, { client: props.client, id: walletId, size: iconSize.xl }), (0, import_jsx_runtime3.jsxs)(Container, { expand: true, flex: "column", gap: "xxs", children: [nameOverride ? (0, import_jsx_runtime3.jsx)(Text, { color: "primaryText", weight: 600, children: nameOverride }) : (0, import_jsx_runtime3.jsx)(Skeleton, { height: fontSize.md, width: "100px" }), props.badge ? (0, import_jsx_runtime3.jsx)(Text, { size: "sm", children: props.badge }) : isRecommended ? (0, import_jsx_runtime3.jsx)(Text, { size: "sm", children: props.connectLocale.recommended }) : isInstalled ? (0, import_jsx_runtime3.jsx)(Text, { size: "sm", children: props.connectLocale.installed }) : null] })] });
}
var WalletButtonEl = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      backgroundColor: theme.colors.tertiaryBg,
      transform: "scale(1.01)"
    },
    '&[data-active="true"]': {
      backgroundColor: theme.colors.tertiaryBg
    },
    alignItems: "center",
    borderRadius: radius.md,
    boxSizing: "border-box",
    color: theme.colors.secondaryText,
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    gap: spacing.sm,
    padding: `${spacing.xs} ${spacing.xs}`,
    transition: "background-color 200ms ease, transform 200ms ease",
    width: "100%"
  };
});

export {
  Spinner,
  WalletUIStatesProvider,
  useIsWalletModalOpen,
  useSetIsWalletModalOpen,
  useSetSelectionData,
  useSelectionData,
  Label,
  Input,
  InputContainer,
  WalletEntryButton,
  WalletButtonEl
};
//# sourceMappingURL=chunk-JHTWP4U5.js.map
