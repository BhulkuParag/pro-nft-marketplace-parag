import {
  Input,
  InputContainer,
  Spinner,
  useSetSelectionData
} from "./chunk-JHTWP4U5.js";
import {
  linkProfile
} from "./chunk-GHDLIAUP.js";
import {
  ArrowRightIcon,
  Button,
  Container,
  EmailIcon,
  FingerPrintIcon,
  GuestIcon,
  IconButton,
  Img,
  OutlineWalletIcon,
  PhoneIcon,
  Spacer,
  StyledDiv,
  StyledOption,
  StyledSelect,
  Text,
  fontSize,
  iconSize,
  radius,
  setLastAuthProvider,
  socialIcons,
  spacing,
  useConnectionManagerCtx,
  useCustomTheme,
  useQuery
} from "./chunk-OPI7XW5K.js";
import {
  isEcosystemWallet
} from "./chunk-OUUVSEDB.js";
import {
  getLoginUrl,
  loginWithOauthRedirect
} from "./chunk-LWVDNX4F.js";
import {
  socialAuthOptions
} from "./chunk-ZZUP7G4V.js";
import {
  webLocalStorage
} from "./chunk-HEWP63HK.js";
import {
  getEcosystemInfo
} from "./chunk-KLFYT75S.js";
import {
  newStyled
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

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js
var import_react = __toESM(require_react(), 1);
function useActiveAccount() {
  const manager = useConnectionManagerCtx("useActiveAccount");
  const store = manager.activeAccountStore;
  return (0, import_react.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/LoadingScreen.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function LoadingScreen(props) {
  return (0, import_jsx_runtime.jsx)(Container, { center: "both", flex: "row", fullHeight: true, style: {
    minHeight: props.height || "350px"
  }, children: (0, import_jsx_runtime.jsx)(Spinner, { color: "secondaryText", size: "xl" }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/constants.js
var reservedScreens = {
  getStarted: "getStarted",
  main: "main",
  showAll: "showAll",
  signIn: "signIn"
};
var modalMaxWidthCompact = "400px";
var wideModalWidth = 730;
var modalMaxWidthWide = `${wideModalWidth}px`;
var wideModalScreenThreshold = wideModalWidth + 40;
var wideModalMaxHeight = "570px";
var compactModalMaxHeight = "660px";
var modalCloseFadeOutDuration = 250;
function onModalUnmount(cb) {
  setTimeout(cb, modalCloseFadeOutDuration + 100);
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/screen.js
var import_react2 = __toESM(require_react(), 1);
var ScreenSetupContext = (0, import_react2.createContext)(void 0);
function useSetupScreen(props) {
  let initialScreen = reservedScreens.main;
  const socialLogin = props.wallets.find((w) => w.id === "embedded" || w.id === "inApp");
  if (props.wallets.length === 1 && props.wallets[0]) {
    initialScreen = props.wallets[0];
  } else if (props.size === "wide" && !props.welcomeScreen && socialLogin) {
    initialScreen = socialLogin;
  }
  const [screen, setScreen] = (0, import_react2.useState)(initialScreen);
  const prevInitialScreen = (0, import_react2.useRef)(initialScreen);
  const activeAccount = useActiveAccount();
  (0, import_react2.useEffect)(() => {
    if (initialScreen !== prevInitialScreen.current) {
      prevInitialScreen.current = initialScreen;
      setScreen(initialScreen);
    }
  }, [initialScreen]);
  (0, import_react2.useEffect)(() => {
    if (!activeAccount && screen === reservedScreens.signIn) {
      setScreen(reservedScreens.main);
    }
  }, [activeAccount, screen]);
  return {
    initialScreen,
    screen,
    setScreen
  };
}
function useScreenContext() {
  const ctx = (0, import_react2.useContext)(ScreenSetupContext);
  if (!ctx) {
    throw new Error("useScreenContext must be used within a <ScreenSetupContext.Provider />");
  }
  return ctx;
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectWalletSocialOptions.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/WalletTypeRowButton.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function WalletTypeRowButton(props) {
  return (0, import_jsx_runtime2.jsx)(Button, { disabled: props.disabled, fullWidth: true, onClick: () => {
    props.onClick();
  }, style: {
    display: "flex",
    justifyContent: "flex-start",
    padding: spacing.sm
  }, variant: "outline", children: (0, import_jsx_runtime2.jsxs)(Container, { center: "y", color: "accentText", flex: "row", gap: "sm", children: [(0, import_jsx_runtime2.jsx)(props.icon, { size: iconSize.md }), (0, import_jsx_runtime2.jsx)(Text, { color: "primaryText", children: props.title })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/TextDivider.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var TextDivider = (props) => {
  return (0, import_jsx_runtime3.jsx)(TextDividerEl, { style: {
    paddingBlock: props.py ? spacing[props.py] : 0
  }, children: (0, import_jsx_runtime3.jsxs)("span", { children: [" ", props.text] }) });
};
var TextDividerEl = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    "&::before, &::after": {
      borderBottom: `1px solid ${theme.colors.separatorLine}`,
      content: '""',
      flex: 1
    },
    alignItems: "center",
    color: theme.colors.secondaryText,
    display: "flex",
    fontSize: fontSize.sm,
    span: {
      margin: "0 16px"
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InputSelectionUI.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/CountrySelector.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/supported-sms-countries.js
var supportedSmsCountries = [
  {
    countryIsoCode: "AD",
    countryName: "Andorra",
    phoneNumberCode: "376"
  },
  {
    countryIsoCode: "AE",
    countryName: "United Arab Emirates",
    phoneNumberCode: "971"
  },
  {
    countryIsoCode: "AF",
    countryName: "Afghanistan",
    phoneNumberCode: "93"
  },
  {
    countryIsoCode: "AG",
    countryName: "Antigua and Barbuda",
    phoneNumberCode: "1268"
  },
  {
    countryIsoCode: "AI",
    countryName: "Anguilla",
    phoneNumberCode: "1264"
  },
  {
    countryIsoCode: "AL",
    countryName: "Albania",
    phoneNumberCode: "355"
  },
  {
    countryIsoCode: "AM",
    countryName: "Armenia",
    phoneNumberCode: "374"
  },
  {
    countryIsoCode: "AN",
    countryName: "Netherlands Antilles",
    phoneNumberCode: "599"
  },
  {
    countryIsoCode: "AO",
    countryName: "Angola",
    phoneNumberCode: "244"
  },
  {
    countryIsoCode: "AQ",
    countryName: "Antarctica",
    phoneNumberCode: "672"
  },
  {
    countryIsoCode: "AR",
    countryName: "Argentina",
    phoneNumberCode: "54"
  },
  {
    countryIsoCode: "AS",
    countryName: "American Samoa",
    phoneNumberCode: "1684"
  },
  {
    countryIsoCode: "AT",
    countryName: "Austria",
    phoneNumberCode: "43"
  },
  {
    countryIsoCode: "AU",
    countryName: "Australia",
    phoneNumberCode: "61"
  },
  {
    countryIsoCode: "AW",
    countryName: "Aruba",
    phoneNumberCode: "297"
  },
  {
    countryIsoCode: "AX",
    countryName: "Aland Islands",
    phoneNumberCode: "35818"
  },
  {
    countryIsoCode: "AZ",
    countryName: "Azerbaijan",
    phoneNumberCode: "994"
  },
  {
    countryIsoCode: "BA",
    countryName: "Bosnia and Herzegovina",
    phoneNumberCode: "387"
  },
  {
    countryIsoCode: "BB",
    countryName: "Barbados",
    phoneNumberCode: "1246"
  },
  {
    countryIsoCode: "BD",
    countryName: "Bangladesh",
    phoneNumberCode: "880"
  },
  {
    countryIsoCode: "BE",
    countryName: "Belgium",
    phoneNumberCode: "32"
  },
  {
    countryIsoCode: "BF",
    countryName: "Burkina Faso",
    phoneNumberCode: "226"
  },
  {
    countryIsoCode: "BG",
    countryName: "Bulgaria",
    phoneNumberCode: "359"
  },
  {
    countryIsoCode: "BH",
    countryName: "Bahrain",
    phoneNumberCode: "973"
  },
  {
    countryIsoCode: "BI",
    countryName: "Burundi",
    phoneNumberCode: "257"
  },
  {
    countryIsoCode: "BJ",
    countryName: "Benin",
    phoneNumberCode: "229"
  },
  {
    countryIsoCode: "BL",
    countryName: "Saint Barthelemy",
    phoneNumberCode: "590"
  },
  {
    countryIsoCode: "BM",
    countryName: "Bermuda",
    phoneNumberCode: "1441"
  },
  {
    countryIsoCode: "BN",
    countryName: "Brunei Darussalam",
    phoneNumberCode: "673"
  },
  {
    countryIsoCode: "BO",
    countryName: "Bolivia",
    phoneNumberCode: "591"
  },
  {
    countryIsoCode: "BR",
    countryName: "Brazil",
    phoneNumberCode: "55"
  },
  {
    countryIsoCode: "BS",
    countryName: "Bahamas",
    phoneNumberCode: "1242"
  },
  {
    countryIsoCode: "BT",
    countryName: "Bhutan",
    phoneNumberCode: "975"
  },
  {
    countryIsoCode: "BV",
    countryName: "Bouvet Island",
    phoneNumberCode: "47"
  },
  {
    countryIsoCode: "BW",
    countryName: "Botswana",
    phoneNumberCode: "267"
  },
  {
    countryIsoCode: "BY",
    countryName: "Belarus",
    phoneNumberCode: "375"
  },
  {
    countryIsoCode: "BZ",
    countryName: "Belize",
    phoneNumberCode: "501"
  },
  {
    countryIsoCode: "CA",
    countryName: "Canada",
    phoneNumberCode: "1"
  },
  {
    countryIsoCode: "CC",
    countryName: "Cocos (Keeling) Islands",
    phoneNumberCode: "672"
  },
  {
    countryIsoCode: "CF",
    countryName: "Central African Republic",
    phoneNumberCode: "236"
  },
  {
    countryIsoCode: "CG",
    countryName: "Congo",
    phoneNumberCode: "242"
  },
  {
    countryIsoCode: "CH",
    countryName: "Switzerland",
    phoneNumberCode: "41"
  },
  {
    countryIsoCode: "CI",
    countryName: "Cote d`Ivoire",
    phoneNumberCode: "225"
  },
  {
    countryIsoCode: "CK",
    countryName: "Cook Islands",
    phoneNumberCode: "682"
  },
  {
    countryIsoCode: "CL",
    countryName: "Chile",
    phoneNumberCode: "56"
  },
  {
    countryIsoCode: "CM",
    countryName: "Cameroon",
    phoneNumberCode: "237"
  },
  {
    countryIsoCode: "CN",
    countryName: "China",
    phoneNumberCode: "86"
  },
  {
    countryIsoCode: "CO",
    countryName: "Colombia",
    phoneNumberCode: "57"
  },
  {
    countryIsoCode: "CR",
    countryName: "Costa Rica",
    phoneNumberCode: "506"
  },
  {
    countryIsoCode: "CU",
    countryName: "Cuba",
    phoneNumberCode: "53"
  },
  {
    countryIsoCode: "CV",
    countryName: "Cape Verde",
    phoneNumberCode: "238"
  },
  {
    countryIsoCode: "CW",
    countryName: "Curacao",
    phoneNumberCode: "5999"
  },
  {
    countryIsoCode: "CX",
    countryName: "Christmas Island",
    phoneNumberCode: "6189164"
  },
  {
    countryIsoCode: "CY",
    countryName: "Cyprus",
    phoneNumberCode: "357"
  },
  {
    countryIsoCode: "CZ",
    countryName: "Czechia",
    phoneNumberCode: "420"
  },
  {
    countryIsoCode: "DE",
    countryName: "Germany",
    phoneNumberCode: "49"
  },
  {
    countryIsoCode: "DJ",
    countryName: "Djibouti",
    phoneNumberCode: "253"
  },
  {
    countryIsoCode: "DK",
    countryName: "Denmark",
    phoneNumberCode: "45"
  },
  {
    countryIsoCode: "DM",
    countryName: "Dominica",
    phoneNumberCode: "1767"
  },
  {
    countryIsoCode: "DO",
    countryName: "Dominican Republic",
    phoneNumberCode: "1809"
  },
  {
    countryIsoCode: "DZ",
    countryName: "Algeria",
    phoneNumberCode: "213"
  },
  {
    countryIsoCode: "EC",
    countryName: "Ecuador",
    phoneNumberCode: "593"
  },
  {
    countryIsoCode: "EE",
    countryName: "Estonia",
    phoneNumberCode: "372"
  },
  {
    countryIsoCode: "EG",
    countryName: "Egypt",
    phoneNumberCode: "20"
  },
  {
    countryIsoCode: "EH",
    countryName: "Western Sahara",
    phoneNumberCode: "212"
  },
  {
    countryIsoCode: "ER",
    countryName: "Eritrea",
    phoneNumberCode: "291"
  },
  {
    countryIsoCode: "ES",
    countryName: "Spain",
    phoneNumberCode: "34"
  },
  {
    countryIsoCode: "ET",
    countryName: "Ethiopia",
    phoneNumberCode: "251"
  },
  {
    countryIsoCode: "FI",
    countryName: "Finland",
    phoneNumberCode: "358"
  },
  {
    countryIsoCode: "FJ",
    countryName: "Fiji",
    phoneNumberCode: "679"
  },
  {
    countryIsoCode: "FO",
    countryName: "Faroe Islands",
    phoneNumberCode: "298"
  },
  {
    countryIsoCode: "FR",
    countryName: "France",
    phoneNumberCode: "33"
  },
  {
    countryIsoCode: "GA",
    countryName: "Gabon",
    phoneNumberCode: "241"
  },
  {
    countryIsoCode: "GB",
    countryName: "United Kingdom",
    phoneNumberCode: "44"
  },
  {
    countryIsoCode: "GD",
    countryName: "Grenada",
    phoneNumberCode: "1473"
  },
  {
    countryIsoCode: "GE",
    countryName: "Georgia",
    phoneNumberCode: "995"
  },
  {
    countryIsoCode: "GF",
    countryName: "French Guiana",
    phoneNumberCode: "594"
  },
  {
    countryIsoCode: "GG",
    countryName: "Guernsey",
    phoneNumberCode: "441481"
  },
  {
    countryIsoCode: "GH",
    countryName: "Ghana",
    phoneNumberCode: "233"
  },
  {
    countryIsoCode: "GI",
    countryName: "Gibraltar",
    phoneNumberCode: "350"
  },
  {
    countryIsoCode: "GL",
    countryName: "Greenland",
    phoneNumberCode: "299"
  },
  {
    countryIsoCode: "GM",
    countryName: "Gambia",
    phoneNumberCode: "220"
  },
  {
    countryIsoCode: "GN",
    countryName: "Guinea",
    phoneNumberCode: "224"
  },
  {
    countryIsoCode: "GP",
    countryName: "Guadeloupe",
    phoneNumberCode: "590"
  },
  {
    countryIsoCode: "GQ",
    countryName: "Equatorial Guinea",
    phoneNumberCode: "240"
  },
  {
    countryIsoCode: "GR",
    countryName: "Greece",
    phoneNumberCode: "30"
  },
  {
    countryIsoCode: "GT",
    countryName: "Guatemala",
    phoneNumberCode: "502"
  },
  {
    countryIsoCode: "GU",
    countryName: "Guam",
    phoneNumberCode: "1671"
  },
  {
    countryIsoCode: "GW",
    countryName: "Guinea-Bissau",
    phoneNumberCode: "245"
  },
  {
    countryIsoCode: "GY",
    countryName: "Guyana",
    phoneNumberCode: "592"
  },
  {
    countryIsoCode: "HN",
    countryName: "Honduras",
    phoneNumberCode: "504"
  },
  {
    countryIsoCode: "HR",
    countryName: "Croatia",
    phoneNumberCode: "385"
  },
  {
    countryIsoCode: "HT",
    countryName: "Haiti",
    phoneNumberCode: "509"
  },
  {
    countryIsoCode: "HU",
    countryName: "Hungary",
    phoneNumberCode: "36"
  },
  {
    countryIsoCode: "ID",
    countryName: "Indonesia",
    phoneNumberCode: "62"
  },
  {
    countryIsoCode: "IE",
    countryName: "Ireland",
    phoneNumberCode: "353"
  },
  {
    countryIsoCode: "IL",
    countryName: "Israel",
    phoneNumberCode: "972"
  },
  {
    countryIsoCode: "IM",
    countryName: "Isle Of Man",
    phoneNumberCode: "441624"
  },
  {
    countryIsoCode: "IN",
    countryName: "India",
    phoneNumberCode: "91"
  },
  {
    countryIsoCode: "IO",
    countryName: "British Indian Ocean Territory",
    phoneNumberCode: "246"
  },
  {
    countryIsoCode: "IQ",
    countryName: "Iraq",
    phoneNumberCode: "964"
  },
  {
    countryIsoCode: "IR",
    countryName: "Iran (Islamic Republic of)",
    phoneNumberCode: "98"
  },
  {
    countryIsoCode: "IS",
    countryName: "Iceland",
    phoneNumberCode: "354"
  },
  {
    countryIsoCode: "IT",
    countryName: "Italy",
    phoneNumberCode: "39"
  },
  {
    countryIsoCode: "JE",
    countryName: "Jersey",
    phoneNumberCode: "441534"
  },
  {
    countryIsoCode: "JM",
    countryName: "Jamaica",
    phoneNumberCode: "1876"
  },
  {
    countryIsoCode: "JO",
    countryName: "Jordan",
    phoneNumberCode: "962"
  },
  {
    countryIsoCode: "JP",
    countryName: "Japan",
    phoneNumberCode: "81"
  },
  {
    countryIsoCode: "KE",
    countryName: "Kenya",
    phoneNumberCode: "254"
  },
  {
    countryIsoCode: "KG",
    countryName: "Kyrgyzstan",
    phoneNumberCode: "996"
  },
  {
    countryIsoCode: "KH",
    countryName: "Cambodia",
    phoneNumberCode: "855"
  },
  {
    countryIsoCode: "KI",
    countryName: "Kiribati",
    phoneNumberCode: "686"
  },
  {
    countryIsoCode: "KM",
    countryName: "Comoros",
    phoneNumberCode: "269"
  },
  {
    countryIsoCode: "KN",
    countryName: "Saint Kitts and Nevis",
    phoneNumberCode: "1869"
  },
  {
    countryIsoCode: "KR",
    countryName: "Republic of Korea",
    phoneNumberCode: "82"
  },
  {
    countryIsoCode: "KW",
    countryName: "Kuwait",
    phoneNumberCode: "965"
  },
  {
    countryIsoCode: "KY",
    countryName: "Cayman Islands",
    phoneNumberCode: "1345"
  },
  {
    countryIsoCode: "KZ",
    countryName: "Kazakhstan",
    phoneNumberCode: "7"
  },
  {
    countryIsoCode: "LB",
    countryName: "Lebanon",
    phoneNumberCode: "961"
  },
  {
    countryIsoCode: "LC",
    countryName: "Saint Lucia",
    phoneNumberCode: "1758"
  },
  {
    countryIsoCode: "LI",
    countryName: "Liechtenstein",
    phoneNumberCode: "423"
  },
  {
    countryIsoCode: "LK",
    countryName: "Sri Lanka",
    phoneNumberCode: "94"
  },
  {
    countryIsoCode: "LR",
    countryName: "Liberia",
    phoneNumberCode: "231"
  },
  {
    countryIsoCode: "LS",
    countryName: "Lesotho",
    phoneNumberCode: "266"
  },
  {
    countryIsoCode: "LT",
    countryName: "Lithuania",
    phoneNumberCode: "370"
  },
  {
    countryIsoCode: "LU",
    countryName: "Luxembourg",
    phoneNumberCode: "352"
  },
  {
    countryIsoCode: "LV",
    countryName: "Latvia",
    phoneNumberCode: "371"
  },
  {
    countryIsoCode: "LY",
    countryName: "Libyan Arab Jamahiriya",
    phoneNumberCode: "218"
  },
  {
    countryIsoCode: "MA",
    countryName: "Morocco",
    phoneNumberCode: "212"
  },
  {
    countryIsoCode: "MC",
    countryName: "Monaco",
    phoneNumberCode: "377"
  },
  {
    countryIsoCode: "MD",
    countryName: "Moldova (Republic of)",
    phoneNumberCode: "373"
  },
  {
    countryIsoCode: "ME",
    countryName: "Montenegro",
    phoneNumberCode: "382"
  },
  {
    countryIsoCode: "MF",
    countryName: "Saint Martin French",
    phoneNumberCode: "590"
  },
  {
    countryIsoCode: "MG",
    countryName: "Madagascar",
    phoneNumberCode: "261"
  },
  {
    countryIsoCode: "MH",
    countryName: "Marshall Islands",
    phoneNumberCode: "692"
  },
  {
    countryIsoCode: "ML",
    countryName: "Mali",
    phoneNumberCode: "223"
  },
  {
    countryIsoCode: "MM",
    countryName: "Myanmar",
    phoneNumberCode: "95"
  },
  {
    countryIsoCode: "MN",
    countryName: "Mongolia",
    phoneNumberCode: "976"
  },
  {
    countryIsoCode: "MP",
    countryName: "Northern Mariana Islands",
    phoneNumberCode: "1670"
  },
  {
    countryIsoCode: "MQ",
    countryName: "Martinique",
    phoneNumberCode: "596"
  },
  {
    countryIsoCode: "MR",
    countryName: "Mauritania",
    phoneNumberCode: "222"
  },
  {
    countryIsoCode: "MS",
    countryName: "Montserrat",
    phoneNumberCode: "1664"
  },
  {
    countryIsoCode: "MT",
    countryName: "Malta",
    phoneNumberCode: "356"
  },
  {
    countryIsoCode: "MU",
    countryName: "Mauritius",
    phoneNumberCode: "230"
  },
  {
    countryIsoCode: "MV",
    countryName: "Maldives",
    phoneNumberCode: "960"
  },
  {
    countryIsoCode: "MW",
    countryName: "Malawi",
    phoneNumberCode: "265"
  },
  {
    countryIsoCode: "MX",
    countryName: "Mexico",
    phoneNumberCode: "52"
  },
  {
    countryIsoCode: "MY",
    countryName: "Malaysia",
    phoneNumberCode: "60"
  },
  {
    countryIsoCode: "MZ",
    countryName: "Mozambique",
    phoneNumberCode: "258"
  },
  {
    countryIsoCode: "NA",
    countryName: "Namibia",
    phoneNumberCode: "264"
  },
  {
    countryIsoCode: "NC",
    countryName: "New Caledonia",
    phoneNumberCode: "687"
  },
  {
    countryIsoCode: "NE",
    countryName: "Niger",
    phoneNumberCode: "227"
  },
  {
    countryIsoCode: "NF",
    countryName: "Norfolk Island",
    phoneNumberCode: "672"
  },
  {
    countryIsoCode: "NG",
    countryName: "Nigeria",
    phoneNumberCode: "234"
  },
  {
    countryIsoCode: "NI",
    countryName: "Nicaragua",
    phoneNumberCode: "505"
  },
  {
    countryIsoCode: "NL",
    countryName: "Netherlands",
    phoneNumberCode: "31"
  },
  {
    countryIsoCode: "NO",
    countryName: "Norway",
    phoneNumberCode: "47"
  },
  {
    countryIsoCode: "NP",
    countryName: "Nepal",
    phoneNumberCode: "977"
  },
  {
    countryIsoCode: "NR",
    countryName: "Nauru",
    phoneNumberCode: "674"
  },
  {
    countryIsoCode: "NU",
    countryName: "Niue",
    phoneNumberCode: "683"
  },
  {
    countryIsoCode: "NZ",
    countryName: "New Zealand",
    phoneNumberCode: "64"
  },
  {
    countryIsoCode: "OM",
    countryName: "Oman",
    phoneNumberCode: "968"
  },
  {
    countryIsoCode: "PA",
    countryName: "Panama",
    phoneNumberCode: "507"
  },
  {
    countryIsoCode: "PE",
    countryName: "Peru",
    phoneNumberCode: "51"
  },
  {
    countryIsoCode: "PF",
    countryName: "French Polynesia",
    phoneNumberCode: "689"
  },
  {
    countryIsoCode: "PG",
    countryName: "Papua New Guinea",
    phoneNumberCode: "675"
  },
  {
    countryIsoCode: "PH",
    countryName: "Philippines",
    phoneNumberCode: "63"
  },
  {
    countryIsoCode: "PK",
    countryName: "Pakistan",
    phoneNumberCode: "92"
  },
  {
    countryIsoCode: "PL",
    countryName: "Poland",
    phoneNumberCode: "48"
  },
  {
    countryIsoCode: "PM",
    countryName: "Saint Pierre and Miquelon",
    phoneNumberCode: "508"
  },
  {
    countryIsoCode: "PN",
    countryName: "Pitcairn",
    phoneNumberCode: "64"
  },
  {
    countryIsoCode: "PR",
    countryName: "Puerto Rico",
    phoneNumberCode: "1787"
  },
  {
    countryIsoCode: "PT",
    countryName: "Portugal",
    phoneNumberCode: "351"
  },
  {
    countryIsoCode: "PW",
    countryName: "Palau",
    phoneNumberCode: "680"
  },
  {
    countryIsoCode: "PY",
    countryName: "Paraguay",
    phoneNumberCode: "595"
  },
  {
    countryIsoCode: "QA",
    countryName: "Qatar",
    phoneNumberCode: "974"
  },
  {
    countryIsoCode: "RE",
    countryName: "Reunion",
    phoneNumberCode: "262"
  },
  {
    countryIsoCode: "RO",
    countryName: "Romania",
    phoneNumberCode: "40"
  },
  {
    countryIsoCode: "RS",
    countryName: "Serbia",
    phoneNumberCode: "381"
  },
  {
    countryIsoCode: "RU",
    countryName: "Russian Federation",
    phoneNumberCode: "7"
  },
  {
    countryIsoCode: "RW",
    countryName: "Rwanda",
    phoneNumberCode: "250"
  },
  {
    countryIsoCode: "SA",
    countryName: "Saudi Arabia",
    phoneNumberCode: "966"
  },
  {
    countryIsoCode: "SB",
    countryName: "Solomon Islands",
    phoneNumberCode: "677"
  },
  {
    countryIsoCode: "SC",
    countryName: "Seychelles",
    phoneNumberCode: "248"
  },
  {
    countryIsoCode: "SD",
    countryName: "Sudan",
    phoneNumberCode: "249"
  },
  {
    countryIsoCode: "SE",
    countryName: "Sweden",
    phoneNumberCode: "46"
  },
  {
    countryIsoCode: "SG",
    countryName: "Singapore",
    phoneNumberCode: "65"
  },
  {
    countryIsoCode: "SH",
    countryName: "Saint Helena",
    phoneNumberCode: "290"
  },
  {
    countryIsoCode: "SI",
    countryName: "Slovenia",
    phoneNumberCode: "386"
  },
  {
    countryIsoCode: "SK",
    countryName: "Slovakia",
    phoneNumberCode: "421"
  },
  {
    countryIsoCode: "SL",
    countryName: "Sierra Leone",
    phoneNumberCode: "232"
  },
  {
    countryIsoCode: "SM",
    countryName: "San Marino",
    phoneNumberCode: "378"
  },
  {
    countryIsoCode: "SN",
    countryName: "Senegal",
    phoneNumberCode: "221"
  },
  {
    countryIsoCode: "SO",
    countryName: "Somalia",
    phoneNumberCode: "252"
  },
  {
    countryIsoCode: "SR",
    countryName: "Suriname",
    phoneNumberCode: "597"
  },
  {
    countryIsoCode: "SS",
    countryName: "South Sudan",
    phoneNumberCode: "211"
  },
  {
    countryIsoCode: "ST",
    countryName: "Sao Tome and Principe",
    phoneNumberCode: "239"
  },
  {
    countryIsoCode: "SV",
    countryName: "El Salvador",
    phoneNumberCode: "503"
  },
  {
    countryIsoCode: "SX",
    countryName: "Sint Maarten Dutch",
    phoneNumberCode: "1721"
  },
  {
    countryIsoCode: "SY",
    countryName: "Syrian Arab Republic",
    phoneNumberCode: "963"
  },
  {
    countryIsoCode: "SZ",
    countryName: "Swaziland",
    phoneNumberCode: "268"
  },
  {
    countryIsoCode: "TC",
    countryName: "Turks and Caicos Islands",
    phoneNumberCode: "1649"
  },
  {
    countryIsoCode: "TD",
    countryName: "Chad",
    phoneNumberCode: "235"
  },
  {
    countryIsoCode: "TF",
    countryName: "French Southern Territories",
    phoneNumberCode: "1"
  },
  {
    countryIsoCode: "TG",
    countryName: "Togo",
    phoneNumberCode: "228"
  },
  {
    countryIsoCode: "TH",
    countryName: "Thailand",
    phoneNumberCode: "66"
  },
  {
    countryIsoCode: "TJ",
    countryName: "Tajikistan",
    phoneNumberCode: "992"
  },
  {
    countryIsoCode: "TK",
    countryName: "Tokelau",
    phoneNumberCode: "690"
  },
  {
    countryIsoCode: "TL",
    countryName: "Timor-Leste (East Timor)",
    phoneNumberCode: "670"
  },
  {
    countryIsoCode: "TM",
    countryName: "Turkmenistan",
    phoneNumberCode: "993"
  },
  {
    countryIsoCode: "TN",
    countryName: "Tunisia",
    phoneNumberCode: "216"
  },
  {
    countryIsoCode: "TO",
    countryName: "Tonga",
    phoneNumberCode: "676"
  },
  {
    countryIsoCode: "TR",
    countryName: "Turkey",
    phoneNumberCode: "90"
  },
  {
    countryIsoCode: "TT",
    countryName: "Trinidad and Tobago",
    phoneNumberCode: "1868"
  },
  {
    countryIsoCode: "TV",
    countryName: "Tuvalu",
    phoneNumberCode: "688"
  },
  {
    countryIsoCode: "TW",
    countryName: "Taiwan (Province of China)",
    phoneNumberCode: "886"
  },
  {
    countryIsoCode: "TZ",
    countryName: "Tanzania (United Republic of)",
    phoneNumberCode: "255"
  },
  {
    countryIsoCode: "UA",
    countryName: "Ukraine",
    phoneNumberCode: "380"
  },
  {
    countryIsoCode: "UG",
    countryName: "Uganda",
    phoneNumberCode: "256"
  },
  {
    countryIsoCode: "US",
    countryName: "United States",
    phoneNumberCode: "1"
  },
  {
    countryIsoCode: "UY",
    countryName: "Uruguay",
    phoneNumberCode: "598"
  },
  {
    countryIsoCode: "UZ",
    countryName: "Uzbekistan",
    phoneNumberCode: "998"
  },
  {
    countryIsoCode: "VE",
    countryName: "Venezuela",
    phoneNumberCode: "58"
  },
  {
    countryIsoCode: "VG",
    countryName: "Virgin Islands British",
    phoneNumberCode: "1284"
  },
  {
    countryIsoCode: "VI",
    countryName: "Virgin Islands US",
    phoneNumberCode: "1340"
  },
  {
    countryIsoCode: "VN",
    countryName: "Vietnam",
    phoneNumberCode: "84"
  },
  {
    countryIsoCode: "VU",
    countryName: "Vanuatu",
    phoneNumberCode: "678"
  },
  {
    countryIsoCode: "WF",
    countryName: "Wallis and Futuna Islands",
    phoneNumberCode: "681"
  },
  {
    countryIsoCode: "WS",
    countryName: "Samoa",
    phoneNumberCode: "685"
  },
  {
    countryIsoCode: "XK",
    countryName: "Kosovo",
    phoneNumberCode: "383"
  },
  {
    countryIsoCode: "YE",
    countryName: "Yemen",
    phoneNumberCode: "967"
  },
  {
    countryIsoCode: "YT",
    countryName: "Mayotte",
    phoneNumberCode: "262269"
  },
  {
    countryIsoCode: "YU",
    countryName: "Yugoslavia",
    phoneNumberCode: "38"
  },
  {
    countryIsoCode: "ZA",
    countryName: "South Africa",
    phoneNumberCode: "27"
  },
  {
    countryIsoCode: "ZM",
    countryName: "Zambia",
    phoneNumberCode: "260"
  },
  {
    countryIsoCode: "ZW",
    countryName: "Zimbabwe",
    phoneNumberCode: "263"
  }
];

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/CountrySelector.js
function getCountrySelector(countryIsoCode) {
  const country = supportedSmsCountries.find((country2) => country2.countryIsoCode === countryIsoCode);
  if (!country) {
    return "US +1";
  }
  return `${country.countryIsoCode} +${country.phoneNumberCode}`;
}
function CountrySelector({ countryCode, setCountryCode, allowedCountryCodes }) {
  const selectRef = (0, import_react3.useRef)(null);
  const supportedCountriesForSms = allowedCountryCodes && allowedCountryCodes.length > 0 ? supportedSmsCountries.filter((c) => allowedCountryCodes.includes(c.countryIsoCode)) : supportedSmsCountries ?? [
    {
      countryIsoCode: "US",
      countryName: "United States",
      phoneNumberCode: 1
    }
  ];
  return (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: (0, import_jsx_runtime4.jsxs)(Select, { name: "countries", onChange: (e) => {
    setCountryCode(e.target.value);
  }, ref: selectRef, style: {
    padding: `${spacing.sm} ${spacing.md}`
  }, value: countryCode, children: [(0, import_jsx_runtime4.jsx)(Option, { style: {
    display: "none"
  }, value: countryCode, children: countryCode }), supportedCountriesForSms.map((country) => {
    return (0, import_jsx_runtime4.jsxs)(Option, { value: getCountrySelector(country.countryIsoCode), children: [country.countryName, " +", country.phoneNumberCode] }, country.countryIsoCode);
  })] }) });
}
var Option = StyledOption(() => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      background: theme.colors.tertiaryBg
    },
    background: theme.colors.modalBg,
    color: theme.colors.primaryText,
    transition: "background 0.3s ease"
  };
});
var Select = StyledSelect((_) => {
  const theme = useCustomTheme();
  return {
    "&::placeholder": {
      color: theme.colors.secondaryText
    },
    "&[disabled]": {
      cursor: "not-allowed"
    },
    appearance: "none",
    background: "transparent",
    border: "none",
    borderRadius: radius.lg,
    boxSizing: "border-box",
    color: theme.colors.primaryText,
    cursor: "pointer",
    display: "block",
    maxWidth: "90px",
    minWidth: "0px",
    outline: "none",
    overflow: "hidden",
    padding: spacing.sm,
    textOverflow: "ellipsis",
    WebkitAppearance: "none",
    whiteSpace: "nowrap"
  };
});

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InputSelectionUI.js
function InputSelectionUI(props) {
  const [countryCodeInfo, setCountryCodeInfo] = (0, import_react4.useState)(props.defaultSmsCountryCode ? getCountrySelector(props.defaultSmsCountryCode) : props.allowedSmsCountryCodes && props.allowedSmsCountryCodes.length > 0 && props.allowedSmsCountryCodes[0] ? getCountrySelector(props.allowedSmsCountryCodes[0]) : "US +1");
  const [input, setInput] = (0, import_react4.useState)("");
  const [error, setError] = (0, import_react4.useState)();
  const [showError, setShowError] = (0, import_react4.useState)(false);
  const handleSelect = () => {
    setShowError(true);
    if (!input || !!error) {
      return;
    }
    props.onSelect(props.format === "phone" ? `+${countryCodeInfo.split("+")[1]}${input}` : input);
  };
  const renderingError = showError && !!error || !input && !!props.emptyErrorMessage && showError;
  return (0, import_jsx_runtime5.jsxs)("div", { style: {
    width: "100%"
  }, children: [(0, import_jsx_runtime5.jsxs)(InputContainer, { "data-error": renderingError, style: {
    display: "flex",
    flexDirection: "row",
    position: "relative"
  }, children: [props.format === "phone" && (0, import_jsx_runtime5.jsx)(CountrySelector, { allowedCountryCodes: props.allowedSmsCountryCodes, countryCode: countryCodeInfo, setCountryCode: setCountryCodeInfo }), (0, import_jsx_runtime5.jsx)(Input, { disabled: props.disabled, name: props.name, onChange: (e) => {
    setInput(e.target.value);
    if (props.errorMessage) {
      setError(props.errorMessage(e.target.value));
    } else {
      setError(void 0);
    }
  }, onKeyDown: (e) => {
    if (e.key === "Enter") {
      handleSelect();
    }
  }, placeholder: props.placeholder, style: {
    flexGrow: 1,
    padding: `${spacing.sm} ${props.format === "phone" ? 0 : spacing.sm}`
  }, tabIndex: -1, type: props.type, value: input, variant: "transparent" }), (0, import_jsx_runtime5.jsx)(IconButton, { disabled: props.disabled, onClick: handleSelect, style: {
    borderRadius: `0 ${radius.md} ${radius.md} 0`,
    padding: spacing.sm
  }, children: (0, import_jsx_runtime5.jsx)(ArrowRightIcon, { height: iconSize.md, width: iconSize.md }) })] }), showError && error && (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [(0, import_jsx_runtime5.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime5.jsx)(Text, { color: "danger", size: "sm", children: error })] }), !(showError && error) && !input && props.emptyErrorMessage && showError && (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [(0, import_jsx_runtime5.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime5.jsx)(Text, { color: "danger", size: "sm", children: props.emptyErrorMessage })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/validateEmail.js
function validateEmail(str) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(str.replace(/\+/g, ""));
}

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/oauthSignIn.js
function getBodyTitle(authOption) {
  switch (authOption) {
    case "google":
      return "Sign In - Google Accounts";
    default:
      return `Sign In - ${authOption.slice(0, 1).toUpperCase()}${authOption.slice(1)}`;
  }
}
function getWidthAndHeight(authOption) {
  switch (authOption) {
    case "facebook":
      return { height: 555, width: 715 };
    default:
      return { height: 500, width: 350 };
  }
}
function getOauthLoginPath(authOption, client, ecosystem) {
  switch (authOption) {
    case "apple":
    case "facebook":
    case "google":
    case "farcaster":
    case "telegram":
    case "github":
    case "twitch":
    case "steam":
    case "line":
    case "x":
    case "guest":
    case "coinbase":
    case "discord":
      return getLoginUrl({ authOption, client, ecosystem });
    default:
      throw new Error(`Unsupported auth option: ${authOption}`);
  }
}
function openOauthSignInWindow({ authOption, themeObj, client, ecosystem }) {
  const { height, width } = getWidthAndHeight(authOption);
  const top = (window.innerHeight - height) / 2;
  const left = (window.innerWidth - width) / 2;
  const win = window.open(getOauthLoginPath(authOption, client, ecosystem), void 0, `width=${width}, height=${height}, top=${top}, left=${left}`);
  if (win) {
    const title = getBodyTitle(authOption);
    win.document.title = title;
    win.document.body.innerHTML = spinnerWindowHtml;
    win.document.body.style.background = themeObj.colors.modalBg;
    win.document.body.style.color = themeObj.colors.accentText;
  }
  if (win) {
    window.addEventListener("beforeunload", () => {
      win == null ? void 0 : win.close();
    });
  }
  return win;
}
var spinnerWindowHtml = `
<svg class="loader" viewBox="0 0 50 50">
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
  />
</svg>

<style>
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  .loader circle {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
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
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
        }
  }
</style>
`;

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectWalletSocialOptions.js
var defaultAuthOptions = [
  "email",
  "phone",
  "google",
  "apple",
  "facebook",
  "passkey"
];
var ConnectWalletSocialOptions = (props) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const locale = props.locale;
  const { wallet } = props;
  const setData = useSetSelectionData();
  const themeObj = useCustomTheme();
  const optionalImageMetadata = (0, import_react5.useMemo)(() => {
    var _a2, _b2;
    return props.wallet.id === "inApp" ? (_b2 = (_a2 = props.wallet.getConfig()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b2.image : void 0;
  }, [props.wallet]);
  const loginMethodsLabel = {
    apple: locale.signInWithApple,
    coinbase: "Coinbase",
    discord: locale.signInWithDiscord,
    facebook: locale.signInWithFacebook,
    farcaster: "Farcaster",
    github: "GitHub",
    google: locale.signInWithGoogle,
    line: "LINE",
    steam: "Steam",
    telegram: "Telegram",
    twitch: "Twitch",
    x: "X"
  };
  const { data: ecosystemAuthOptions, isLoading } = useQuery({
    enabled: isEcosystemWallet(wallet),
    queryFn: async () => {
      if (isEcosystemWallet(wallet)) {
        const options = await getEcosystemInfo(wallet.id);
        return (options == null ? void 0 : options.authOptions) ?? null;
      }
      return null;
    },
    queryKey: ["auth-options", wallet.id],
    retry: false
  });
  const authOptions = isEcosystemWallet(wallet) ? ecosystemAuthOptions ?? defaultAuthOptions : ((_b = (_a = wallet.getConfig()) == null ? void 0 : _a.auth) == null ? void 0 : _b.options) ?? defaultAuthOptions;
  const emailIndex = authOptions.indexOf("email");
  const isEmailEnabled = emailIndex !== -1;
  const phoneIndex = authOptions.indexOf("phone");
  const isPhoneEnabled = phoneIndex !== -1;
  const socialLogins = authOptions.filter((o) => socialAuthOptions.includes(o));
  const columnCount = (0, import_react5.useMemo)(() => {
    switch (socialLogins.length) {
      case 7:
        return 4;
      case 6:
        return 4;
      default:
        return 5;
    }
  }, [socialLogins.length]);
  const socialLoginColumns = (0, import_react5.useMemo)(() => {
    return Array.from({ length: Math.ceil(socialLogins.length / columnCount) }, (_, i) => socialLogins.slice(i * columnCount, (i + 1) * columnCount));
  }, [socialLogins, columnCount]);
  const [manualInputMode, setManualInputMode] = (0, import_react5.useState)(null);
  const inputMode = (0, import_react5.useMemo)(() => {
    if (manualInputMode) {
      return manualInputMode;
    }
    if (isEmailEnabled && isPhoneEnabled) {
      return emailIndex < phoneIndex ? "email" : "phone";
    }
    if (isEmailEnabled) {
      return "email";
    }
    if (isPhoneEnabled) {
      return "phone";
    }
    return "none";
  }, [isEmailEnabled, isPhoneEnabled, emailIndex, phoneIndex, manualInputMode]);
  if (isEcosystemWallet(wallet) && isLoading) {
    return (0, import_jsx_runtime6.jsx)(LoadingScreen, {});
  }
  const passKeyEnabled = authOptions.includes("passkey");
  const guestEnabled = authOptions.includes("guest");
  const siweEnabled = authOptions.includes("wallet");
  const placeholder = inputMode === "email" ? locale.emailPlaceholder : locale.phonePlaceholder;
  const emptyErrorMessage = inputMode === "email" ? locale.emailRequired : locale.phoneRequired;
  let type = "text";
  if (inputMode === "email") {
    type = "email";
  } else if (inputMode === "phone") {
    type = "tel";
  }
  const hasSocialLogins = socialLogins.length > 0;
  const ecosystemInfo = isEcosystemWallet(wallet) ? {
    id: wallet.id,
    partnerId: (_c = wallet.getConfig()) == null ? void 0 : _c.partnerId
  } : void 0;
  const handleGuestLogin = async () => {
    const connectOptions = {
      chain: props.chain,
      client: props.client,
      ecosystem: ecosystemInfo,
      strategy: "guest"
    };
    const connectPromise = (async () => {
      const result = await wallet.connect(connectOptions);
      setLastAuthProvider("guest", webLocalStorage);
      return result;
    })();
    setData({
      guestLogin: {
        connectionPromise: connectPromise
      }
    });
    props.select();
  };
  const handleSocialLogin = async (strategy) => {
    var _a2, _b2;
    const walletConfig = wallet.getConfig();
    const authMode = ((_a2 = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _a2.mode) ?? "popup";
    if (walletConfig && "auth" in walletConfig && authMode !== "popup" && !props.isLinking) {
      return loginWithOauthRedirect({
        authOption: strategy,
        client: props.client,
        ecosystem: ecosystemInfo,
        mode: authMode,
        redirectUrl: (_b2 = walletConfig == null ? void 0 : walletConfig.auth) == null ? void 0 : _b2.redirectUrl
      });
    }
    try {
      const socialLoginWindow = openOauthSignInWindow({
        authOption: strategy,
        client: props.client,
        ecosystem: ecosystemInfo,
        themeObj
      });
      if (!socialLoginWindow) {
        throw new Error("Failed to open login window");
      }
      const connectOptions = {
        chain: props.chain,
        client: props.client,
        closeOpenedWindow: (openedWindow) => {
          openedWindow.close();
        },
        ecosystem: ecosystemInfo,
        openedWindow: socialLoginWindow,
        strategy
      };
      const connectPromise = (() => {
        if (props.isLinking) {
          if (wallet.id !== "inApp" && !isEcosystemWallet(wallet)) {
            throw new Error("Only in-app wallets support multi-auth");
          }
          return linkProfile(connectOptions);
        }
        const connectPromise2 = wallet.connect(connectOptions);
        setLastAuthProvider(strategy, webLocalStorage);
        return connectPromise2;
      })();
      setData({
        socialLogin: {
          connectionPromise: connectPromise,
          type: strategy
        }
      });
      props.select();
    } catch (e) {
      console.error(`Error signing in with ${strategy}`, e);
    }
  };
  function handlePassKeyLogin() {
    setData({
      passkeyLogin: true
    });
    props.select();
  }
  function handleWalletLogin() {
    setData({
      walletLogin: {
        linking: props.isLinking || false
      }
    });
    props.select();
  }
  const showOnlyIcons = socialLogins.length > 2;
  return (0, import_jsx_runtime6.jsxs)(Container, { flex: "column", gap: "md", style: {
    position: "relative"
  }, children: [optionalImageMetadata && (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [(0, import_jsx_runtime6.jsx)(Img, { alt: optionalImageMetadata.alt, client: props.client, height: `${optionalImageMetadata.height}`, src: optionalImageMetadata.src, style: { margin: "auto" }, width: `${optionalImageMetadata.width}` }), (0, import_jsx_runtime6.jsx)(Spacer, { y: "xxs" })] }), hasSocialLogins && (0, import_jsx_runtime6.jsx)(Container, { flex: "column", gap: socialLogins.length > 4 ? "xs" : "sm", children: socialLoginColumns.map((column) => (0, import_jsx_runtime6.jsx)(SocialButtonRow, { children: column.map((loginMethod) => {
    const imgIconSize = (() => {
      if (!showOnlyIcons) {
        return iconSize.md;
      }
      if (socialLogins.length > 4) {
        return iconSize.md;
      }
      return iconSize.lg;
    })();
    return (0, import_jsx_runtime6.jsxs)(SocialButton, { "aria-label": `Login with ${loginMethod}`, "data-variant": showOnlyIcons ? "icon" : "full", disabled: props.disabled, onClick: () => {
      handleSocialLogin(loginMethod);
    }, style: {
      flexGrow: socialLogins.length < 7 ? 1 : 0
    }, variant: "outline", children: [(0, import_jsx_runtime6.jsx)(Img, { client: props.client, height: imgIconSize, src: socialIcons[loginMethod], width: imgIconSize }), !showOnlyIcons && `${socialLogins.length === 1 ? "Continue with " : ""}${loginMethodsLabel[loginMethod]}`] }, loginMethod);
  }) }, column[0])) }), props.size === "wide" && hasSocialLogins && (isEmailEnabled || isPhoneEnabled) && (0, import_jsx_runtime6.jsx)(TextDivider, { text: locale.or }), isEmailEnabled && (inputMode === "email" ? (0, import_jsx_runtime6.jsx)(InputSelectionUI, { disabled: props.disabled, emptyErrorMessage, errorMessage: (input) => {
    const isValidEmail = validateEmail(input.toLowerCase());
    if (!isValidEmail) {
      return locale.invalidEmail;
    }
    return void 0;
  }, name: "email", onSelect: (value) => {
    setData({ emailLogin: value });
    props.select();
  }, placeholder, submitButtonText: locale.submitEmail, type }) : (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, disabled: props.disabled, icon: EmailIcon, onClick: () => {
    setManualInputMode("email");
  }, title: locale.emailPlaceholder })), isPhoneEnabled && (inputMode === "phone" ? (0, import_jsx_runtime6.jsx)(InputSelectionUI, { allowedSmsCountryCodes: (_e = (_d = wallet.getConfig()) == null ? void 0 : _d.auth) == null ? void 0 : _e.allowedSmsCountryCodes, defaultSmsCountryCode: (_g = (_f = wallet.getConfig()) == null ? void 0 : _f.auth) == null ? void 0 : _g.defaultSmsCountryCode, disabled: props.disabled, emptyErrorMessage, errorMessage: (_input) => {
    const input = _input.replace(/[-() ]/g, "");
    const isPhone = /^[0-9]+$/.test(input);
    if (!isPhone && isPhoneEnabled) {
      return locale.invalidPhone;
    }
    return void 0;
  }, format: "phone", name: "phone", onSelect: (value) => {
    setData({ phoneLogin: value.replace(/[-() ]/g, "") });
    props.select();
  }, placeholder, submitButtonText: locale.submitEmail, type }) : (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, disabled: props.disabled, icon: PhoneIcon, onClick: () => {
    setManualInputMode("phone");
  }, title: locale.phonePlaceholder })), passKeyEnabled && (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, disabled: props.disabled, icon: FingerPrintIcon, onClick: () => {
    handlePassKeyLogin();
  }, title: locale.passkey }), siweEnabled && !props.isLinking && (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, icon: OutlineWalletIcon, onClick: () => {
    handleWalletLogin();
  }, title: locale.signInWithWallet }), guestEnabled && (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, disabled: props.disabled, icon: GuestIcon, onClick: () => {
    handleGuestLogin();
  }, title: locale.loginAsGuest }), props.isLinking && (0, import_jsx_runtime6.jsx)(WalletTypeRowButton, { client: props.client, icon: OutlineWalletIcon, onClick: () => {
    handleWalletLogin();
  }, title: locale.linkWallet })] });
};
var SocialButtonRow = (props) => (0, import_jsx_runtime6.jsx)(Container, { center: "x", flex: "row", gap: props.children.length > 4 ? "xs" : "sm", style: {
  display: "flex",
  justifyContent: "center",
  ...{
    "& > *": {
      flexBasis: `${100 / props.children.length}%`,
      maxWidth: `${100 / props.children.length}%`
    }
  }
}, children: props.children });
var SocialButton = newStyled(Button)({
  "&[data-variant='full']": {
    "&:active": {
      boxShadow: "none"
    },
    display: "flex",
    fontSize: fontSize.md,
    fontWeight: 500,
    gap: spacing.sm,
    justifyContent: "flex-start",
    padding: spacing.md,
    transition: "background-color 0.2s ease"
  },
  "&[data-variant='icon']": {
    padding: spacing.sm
  }
});

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/useInAppWalletLocale.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/wallets/shared/locale/getConnectLocale.js
async function getInAppWalletLocale(localeId) {
  switch (localeId) {
    case "es_ES":
      return (await import("./es-4DIXDPXO.js")).default;
    case "ja_JP":
      return (await import("./ja-JCGBOP2L.js")).default;
    case "tl_PH":
      return (await import("./tl-2N26MVFX.js")).default;
    case "vi_VN":
      return (await import("./vi-7CH5FNKO.js")).default;
    case "de_DE":
      return (await import("./de-6PIOVMBO.js")).default;
    case "ko_KR":
      return (await import("./kr-QGRHAXB7.js")).default;
    case "fr_FR":
      return (await import("./fr-6245DQNL.js")).default;
    case "ru_RU":
      return (await import("./ru-L3UQS2TM.js")).default;
    case "pt_BR": {
      return (await import("./br-CFFFCUSQ.js")).default;
    }
    default:
      return (await import("./en-QDW2GZDA.js")).default;
  }
}

// node_modules/thirdweb/dist/esm/react/web/wallets/in-app/useInAppWalletLocale.js
function useInAppWalletLocale(localeId) {
  const [locale, setLocale] = (0, import_react6.useState)(void 0);
  (0, import_react6.useEffect)(() => {
    getInAppWalletLocale(localeId).then((l) => {
      setLocale(l);
    });
  }, [localeId]);
  return locale;
}

export {
  useActiveAccount,
  LoadingScreen,
  reservedScreens,
  modalMaxWidthCompact,
  modalMaxWidthWide,
  wideModalScreenThreshold,
  wideModalMaxHeight,
  compactModalMaxHeight,
  modalCloseFadeOutDuration,
  onModalUnmount,
  ScreenSetupContext,
  useSetupScreen,
  useScreenContext,
  TextDivider,
  openOauthSignInWindow,
  WalletTypeRowButton,
  InputSelectionUI,
  ConnectWalletSocialOptions,
  useInAppWalletLocale
};
//# sourceMappingURL=chunk-SJ2PI6CH.js.map
