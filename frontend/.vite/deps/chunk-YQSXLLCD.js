import {
  createWalletConnectClient,
  createWalletConnectSession,
  disconnectWalletConnectSession,
  getActiveWalletConnectSessions
} from "./chunk-S2Y3R76M.js";
import {
  EcosystemWalletConnectUI_default
} from "./chunk-WTFA45ER.js";
import {
  AccentFailIcon,
  AnyWalletConnectUI,
  ErrorState,
  PoweredByThirdweb,
  QRCode,
  SmartConnectUI,
  TOS,
  WalletSelector,
  getDefaultWallets,
  wait
} from "./chunk-Y4FCGFBJ.js";
import {
  Fuse,
  useDebouncedValue,
  useShowMore
} from "./chunk-EVRLKEF4.js";
import {
  InputSelectionUI,
  LoadingScreen,
  ScreenSetupContext,
  TextDivider,
  compactModalMaxHeight,
  modalCloseFadeOutDuration,
  modalMaxWidthCompact,
  modalMaxWidthWide,
  onModalUnmount,
  reservedScreens,
  useActiveAccount,
  useSetupScreen,
  wideModalMaxHeight,
  wideModalScreenThreshold
} from "./chunk-SJ2PI6CH.js";
import {
  Input,
  Label,
  Spinner,
  WalletButtonEl,
  WalletUIStatesProvider,
  useIsWalletModalOpen,
  useSetIsWalletModalOpen,
  useSetSelectionData
} from "./chunk-JHTWP4U5.js";
import {
  getProfiles,
  unlinkProfile
} from "./chunk-GHDLIAUP.js";
import {
  WalletLogoSpinner
} from "./chunk-D3JLMCS4.js";
import {
  Button,
  ButtonLink,
  CardStackIcon,
  CheckCircledIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClockIcon,
  Container,
  CopyIcon,
  Cross1Icon,
  Cross2Icon,
  CrossCircledIcon,
  CustomThemeProvider,
  EmailIcon,
  ExitIcon,
  ExternalLinkIcon,
  FingerPrintIcon,
  IconButton,
  Img,
  Line,
  Link,
  MagnifyingGlassIcon,
  MinusIcon,
  ModalHeader,
  ModalTitle,
  OutlineWalletIcon,
  PREFERRED_FIAT_PROVIDER_STORAGE_KEY,
  PaperPlaneIcon,
  PhoneIcon,
  PinBottomIcon,
  PlusIcon,
  RadiobuttonIcon,
  ReloadIcon,
  ShuffleIcon,
  Skeleton,
  Spacer,
  StyledButton,
  StyledDiv,
  StyledP,
  StyledUl,
  Text,
  TextAlignJustifyIcon,
  UNIVERSAL_RESOLVER_ADDRESS,
  WalletImage,
  fadeInAnimation,
  fontSize,
  genericTokenIcon,
  getLastAuthProvider,
  getSocialIcon,
  getSocialProfiles,
  getWalletBalance,
  iconSize,
  media,
  namehash,
  noScrollBar,
  packetToBytes,
  parseAvatarRecord,
  parseTheme,
  radius,
  resolve,
  resolveAvatar,
  resolveName,
  setLastAuthProvider,
  shadow,
  spacing,
  useActiveWallet,
  useConnectionManager,
  useConnectionManagerCtx,
  useCustomTheme,
  useEnsName,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
  useSocialProfiles,
  useWalletBalance,
  useWalletInfo
} from "./chunk-OPI7XW5K.js";
import {
  deleteConnectParamsFromStorage
} from "./chunk-FZBIW4FA.js";
import {
  formatExplorerAddressUrl,
  formatExplorerTxUrl
} from "./chunk-X4LMPBJA.js";
import {
  createWallet,
  getInstalledWalletProviders,
  injectedProvider,
  smartWallet
} from "./chunk-OZT5CELG.js";
import {
  isInAppWallet
} from "./chunk-CUXYKA5K.js";
import {
  approve,
  hasSponsoredTransactionsEnabled,
  isSmartWallet
} from "./chunk-SCLL75R7.js";
import {
  allowance
} from "./chunk-2HHM4MRW.js";
import {
  once
} from "./chunk-XS3SQPWF.js";
import {
  isEcosystemWallet
} from "./chunk-OUUVSEDB.js";
import {
  socialAuthOptions
} from "./chunk-ZZUP7G4V.js";
import {
  ClientScopedStorage
} from "./chunk-CYVKJMZE.js";
import {
  webLocalStorage
} from "./chunk-HEWP63HK.js";
import {
  COINBASE
} from "./chunk-ZX53QXGD.js";
import {
  isInsightEnabled
} from "./chunk-HDHHYE6C.js";
import {
  getCurrencyMetadata
} from "./chunk-3AOHHKCD.js";
import {
  resolveArweaveScheme
} from "./chunk-6FLJU7W7.js";
import {
  getBuyWithCryptoQuote,
  getBuyWithCryptoStatus,
  getBuyWithCryptoTransfer
} from "./chunk-4U5PUIC4.js";
import {
  eth_getBalance
} from "./chunk-KJUYME5G.js";
import {
  sendAndConfirmTransaction
} from "./chunk-LUJKADEG.js";
import {
  getOwnedTokens
} from "./chunk-N6DSQFYO.js";
import {
  getOwnedNFTs
} from "./chunk-KU7G4WMB.js";
import {
  prepareContractCall
} from "./chunk-HEMRZHKU.js";
import {
  prepareTransaction
} from "./chunk-6J7DXZMD.js";
import {
  isContractDeployed
} from "./chunk-EMWJKMEZ.js";
import {
  waitForReceipt
} from "./chunk-E2LANL2Y.js";
import {
  sendTransaction
} from "./chunk-ACMOF3FM.js";
import {
  createStore,
  getPastTransactions,
  getTransactionStore
} from "./chunk-PPBEOXQH.js";
import {
  sendBatchTransaction
} from "./chunk-HBA3XICU.js";
import {
  add,
  prepare,
  routes,
  status,
  tokens
} from "./chunk-RFFLYT44.js";
import {
  ApiError
} from "./chunk-QBAAWPM3.js";
import {
  decimals
} from "./chunk-73PJS7P3.js";
import {
  NATIVE_TOKEN_ADDRESS,
  ZERO_ADDRESS
} from "./chunk-673YCYST.js";
import {
  Address_exports
} from "./chunk-A5CP6DX3.js";
import {
  encodeAbiParameters,
  getTransactionGasCost
} from "./chunk-SD26YTCZ.js";
import {
  estimateGas
} from "./chunk-3DGGFYQ2.js";
import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import {
  track
} from "./chunk-CZLU53MF.js";
import {
  resolveScheme
} from "./chunk-HRHEYRBD.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  getAddress,
  isAddress,
  shortenAddress,
  shortenHex
} from "./chunk-6WE3JIZ5.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
import {
  toTokens,
  toUnits,
  toWei
} from "./chunk-UY2SRO54.js";
import {
  encode
} from "./chunk-JJDFOOW3.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";
import {
  randomBytesHex
} from "./chunk-YIVCHQGZ.js";
import {
  toHex
} from "./chunk-AT6CAMHI.js";
import {
  hexToNumber
} from "./chunk-U2WFZAGU.js";
import {
  polygon
} from "./chunk-2GSDSUQU.js";
import {
  ethereum
} from "./chunk-NP7PJWRI.js";
import {
  cacheChains,
  convertApiChainToChain,
  getCachedChain,
  getChainDecimals,
  getChainMetadata,
  getChainNativeCurrencyName,
  getChainSymbol
} from "./chunk-CYZDLLAL.js";
import {
  withCache
} from "./chunk-Z5XIAL4H.js";
import {
  getThirdwebBaseUrl
} from "./chunk-UQSP5VHN.js";
import {
  keyframes,
  newStyled
} from "./chunk-ERYK7KJM.js";
import {
  require_jsx_runtime
} from "./chunk-4VHZN6OL.js";
import {
  require_react_dom
} from "./chunk-TJWAQMZD.js";
import {
  require_react
} from "./chunk-NQM6PSUW.js";
import {
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/BuyScreen.js
var import_jsx_runtime108 = __toESM(require_jsx_runtime(), 1);
var import_react58 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/analytics/track/pay.js
async function trackPayEvent(args) {
  const data = {
    action: args.event,
    amountWei: args.amountWei,
    chainId: args.chainId,
    clientId: args.client.clientId,
    dstChainId: args.toChainId,
    dstTokenAddress: args.toToken,
    errorCode: args.error,
    source: "pay",
    tokenAddress: args.fromToken,
    walletAddress: args.walletAddress,
    walletType: args.walletType
  };
  return track({
    client: args.client,
    data,
    ecosystem: args.ecosystem
  });
}

// node_modules/thirdweb/dist/esm/utils/formatNumber.js
function formatNumber(value, decimalPlaces) {
  if (value === 0)
    return 0;
  const precision = 10 ** decimalPlaces;
  const threshold = 1 / 10 ** decimalPlaces;
  const fn = value < threshold ? "ceil" : "round";
  return Math[fn]((value + Number.EPSILON) * precision) / precision;
}

// node_modules/thirdweb/dist/esm/react/core/providers/invalidateWalletBalance.js
function invalidateWalletBalance(queryClient, chainId) {
  queryClient.invalidateQueries({
    // invalidate any walletBalance queries for this chainId
    // TODO: add wallet address in here if we can get it somehow
    queryKey: chainId ? ["walletBalance", chainId] : ["walletBalance"]
  });
  queryClient.invalidateQueries({
    queryKey: chainId ? ["internal_account_balance", chainId] : ["internal_account_balance"]
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/ChainName.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/others/useChainQuery.js
var import_react = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/utils/promise/p-limit.js
var Node2 = class {
  constructor(value) {
    Object.defineProperty(this, "value", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "next", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.value = value;
  }
};
var Queue = class {
  constructor() {
    Object.defineProperty(this, "head", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "tail", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "size", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.clear();
    this.size = 0;
  }
  enqueue(value) {
    const node = new Node2(value);
    if (this.head) {
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }
  dequeue() {
    var _a;
    const current = this.head;
    if (!current) {
      return;
    }
    this.head = (_a = this.head) == null ? void 0 : _a.next;
    this.size--;
    return current.value;
  }
  clear() {
    this.head = void 0;
    this.tail = void 0;
    this.size = 0;
  }
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};
var AsyncResource = {
  bind(fn, _type, thisArg) {
    return fn.bind(thisArg);
  }
};
function pLimit(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }
  const queue = new Queue();
  let activeCount = 0;
  const next = () => {
    activeCount--;
    if (queue.size > 0) {
      const fn = queue.dequeue();
      if (fn) {
        fn();
      }
    }
  };
  const run = async (function_, resolve2, arguments_) => {
    activeCount++;
    const result = (async () => function_(...arguments_))();
    resolve2(result);
    try {
      await result;
    } catch {
    }
    next();
  };
  const enqueue = (function_, resolve2, arguments_) => {
    queue.enqueue(AsyncResource.bind(run.bind(void 0, function_, resolve2, arguments_)));
    (async () => {
      await Promise.resolve();
      if (activeCount < concurrency && queue.size > 0) {
        const fn = queue.dequeue();
        if (fn) {
          fn();
        }
      }
    })();
  };
  const generator = (function_, ...arguments_) => new Promise((resolve2) => {
    enqueue(function_, resolve2, arguments_);
  });
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    clearQueue: {
      value() {
        queue.clear();
      }
    },
    pendingCount: {
      get: () => queue.size
    }
  });
  return generator;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/others/useChainQuery.js
function useChainName(chain) {
  var _a;
  const isEnabled = !!chain && !chain.name;
  const chainQuery = useQuery({
    enabled: isEnabled,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    },
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3
  });
  return {
    isLoading: isEnabled && chainQuery.isLoading,
    name: (chain == null ? void 0 : chain.name) ?? ((_a = chainQuery.data) == null ? void 0 : _a.name)
  };
}
function useChainIconUrl(chain) {
  var _a, _b, _c, _d;
  const isEnabled = !!chain && !((_a = chain.icon) == null ? void 0 : _a.url);
  const chainQuery = useQuery({
    // only if we have a chain and no chain icon url!
    enabled: isEnabled,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    },
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3
  });
  return {
    isLoading: isEnabled && chainQuery.isLoading,
    url: ((_b = chain == null ? void 0 : chain.icon) == null ? void 0 : _b.url) ?? ((_d = (_c = chainQuery.data) == null ? void 0 : _c.icon) == null ? void 0 : _d.url)
  };
}
function useChainFaucets(chain) {
  var _a, _b;
  const isEnabled = !!chain && "testnet" in chain && !((_a = chain.faucets) == null ? void 0 : _a.length) && chain.id !== 1337;
  const chainQuery = useQuery({
    enabled: isEnabled,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    },
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3
  });
  return {
    faucets: (chain == null ? void 0 : chain.faucets) ?? ((_b = chainQuery.data) == null ? void 0 : _b.faucets) ?? [],
    isLoading: isEnabled && chainQuery.isLoading
  };
}
function useChainSymbol(chain) {
  var _a, _b, _c, _d;
  const isEnabled = !!chain && !((_a = chain.nativeCurrency) == null ? void 0 : _a.symbol);
  const chainQuery = useQuery({
    // only if we have a chain and no chain icon url!
    enabled: isEnabled,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    },
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3
  });
  return {
    isLoading: isEnabled && chainQuery.isLoading,
    symbol: ((_b = chain == null ? void 0 : chain.nativeCurrency) == null ? void 0 : _b.symbol) ?? ((_d = (_c = chainQuery.data) == null ? void 0 : _c.nativeCurrency) == null ? void 0 : _d.symbol)
  };
}
function useChainExplorers(chain) {
  var _a, _b;
  const isEnabled = !!chain && !((_a = chain.blockExplorers) == null ? void 0 : _a.length);
  const chainQuery = useQuery({
    enabled: isEnabled,
    queryFn: async () => {
      if (!chain) {
        throw new Error("chain is required");
      }
      return convertApiChainToChain(await getChainMetadata(chain));
    },
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    retry: false,
    // 1 hour
    staleTime: 60 * 60 * 1e3
  });
  return {
    explorers: (chain == null ? void 0 : chain.blockExplorers) ?? ((_b = chainQuery.data) == null ? void 0 : _b.blockExplorers) ?? [],
    isLoading: isEnabled && chainQuery.isLoading
  };
}
function getQueryOptions(chain) {
  return {
    enabled: !!chain,
    queryKey: ["chain", chain == null ? void 0 : chain.id],
    staleTime: 1e3 * 60 * 60
    // 1 hour
  };
}
function useChainMetadata(chain) {
  return useQuery({
    ...getQueryOptions(chain),
    queryFn: async () => {
      if (!chain) {
        throw new Error("chainId is required");
      }
      return getChainMetadata(chain);
    }
  });
}
function useChainsQuery(chains, maxConcurrency) {
  const queryList = (0, import_react.useMemo)(() => {
    const limit = pLimit(maxConcurrency);
    return chains.map((chain) => {
      return {
        ...getQueryOptions(chain),
        queryFn: () => limit(() => getChainMetadata(chain))
      };
    });
  }, [chains, maxConcurrency]);
  return useQueries({
    queries: queryList
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/ChainName.js
var ChainName = (props) => {
  const { name } = useChainName(props.chain);
  if (name) {
    return (0, import_jsx_runtime.jsx)(Text, { color: props.color, size: props.size, style: props.style, children: props.short ? shorterChainName(name) : name });
  }
  return (0, import_jsx_runtime.jsx)(Skeleton, { height: fontSize[props.size], width: "50px" });
};
function shorterChainName(name) {
  const split = name.split(" ");
  const wordsToRemove = /* @__PURE__ */ new Set(["mainnet", "testnet", "chain"]);
  return split.filter((s) => {
    return !wordsToRemove.has(s.toLowerCase());
  }).join(" ");
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/token/TokenSymbol.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/nativeToken.js
var NATIVE_TOKEN = { nativeToken: true };
function isNativeToken(token) {
  var _a;
  return token && ("nativeToken" in token || ((_a = token.address) == null ? void 0 : _a.toLowerCase()) === NATIVE_TOKEN_ADDRESS.toLowerCase() || (token == null ? void 0 : token.address) === ZERO_ADDRESS) || false;
}
function getTokenAddress(token) {
  if (isNativeToken(token)) {
    return NATIVE_TOKEN_ADDRESS;
  }
  return getAddress(token.address);
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/token/TokenSymbol.js
function TokenSymbol(props) {
  if (!isNativeToken(props.token)) {
    return (0, import_jsx_runtime2.jsx)(Text, { color: props.color || "primaryText", inline: props.inline, size: props.size, children: props.token.symbol });
  }
  return (0, import_jsx_runtime2.jsx)(NativeTokenSymbol, { chain: props.chain, color: props.color, inline: props.inline, size: props.size });
}
function NativeTokenSymbol(props) {
  const chainSymbolQuery = useChainSymbol(props.chain);
  if (chainSymbolQuery.isLoading) {
    return (0, import_jsx_runtime2.jsx)(Skeleton, { height: fontSize[props.size], width: "70px" });
  }
  return (0, import_jsx_runtime2.jsx)(Text, { color: props.color || "primaryText", inline: props.inline, size: props.size, children: chainSymbolQuery.symbol ?? "ETH" });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/ConnectButton.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var import_react40 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/account/provider.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
var AccountProviderContext = (0, import_react2.createContext)(void 0);
function AccountProvider(props) {
  if (!props.address) {
    throw new Error("AccountProvider: No address passed. Ensure an address is always provided to the AccountProvider");
  }
  return (0, import_jsx_runtime3.jsx)(AccountProviderContext.Provider, { value: props, children: props.children });
}
function useAccountContext() {
  const ctx = (0, import_react2.useContext)(AccountProviderContext);
  if (!ctx) {
    throw new Error("AccountProviderContext not found. Make sure you are using AccountName, AccountAvatar, etc. inside an <AccountProvider /> component");
  }
  return ctx;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/auth/useSiweAuth.js
function useSiweAuth(activeWallet, activeAccount, authOptions) {
  const requiresAuth = !!authOptions;
  const queryClient = useQueryClient();
  const isLoggedInQuery = useQuery({
    enabled: requiresAuth && !!(activeAccount == null ? void 0 : activeAccount.address),
    gcTime: 0,
    placeholderData: false,
    queryFn: () => {
      if (!authOptions || !(activeAccount == null ? void 0 : activeAccount.address)) {
        return false;
      }
      return authOptions.isLoggedIn(activeAccount.address);
    },
    queryKey: ["siwe_auth", "isLoggedIn", activeAccount == null ? void 0 : activeAccount.address],
    refetchOnWindowFocus: false
  });
  const loginMutation = useMutation({
    mutationFn: async () => {
      if (!authOptions) {
        throw new Error("No auth options provided");
      }
      if (!activeWallet) {
        throw new Error("No active wallet");
      }
      const chain = activeWallet.getChain();
      if (!chain) {
        throw new Error("No active chain");
      }
      if (!activeAccount) {
        throw new Error("No active account");
      }
      const [payload, { signLoginPayload }] = await Promise.all([
        authOptions.getLoginPayload({
          address: activeAccount.address,
          chainId: chain.id
        }),
        // we lazy-load this because it's only needed when logging in
        import("./sign-login-payload-XQ4VD24W.js")
      ]);
      if (payload.chain_id && Number(payload.chain_id) !== chain.id) {
        await activeWallet.switchChain(getCachedChain(Number(payload.chain_id)));
      }
      const signedPayload = await signLoginPayload({
        account: activeAccount,
        payload
      });
      return await authOptions.doLogin(signedPayload);
    },
    mutationKey: ["siwe_auth", "login", activeAccount == null ? void 0 : activeAccount.address],
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ["siwe_auth", "isLoggedIn"]
      });
    }
  });
  const logoutMutation = useMutation({
    mutationFn: async () => {
      if (!authOptions) {
        throw new Error("No auth options provided");
      }
      return await authOptions.doLogout();
    },
    mutationKey: ["siwe_auth", "logout", activeAccount == null ? void 0 : activeAccount.address],
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ["siwe_auth", "isLoggedIn"]
      });
    }
  });
  return {
    // login
    doLogin: loginMutation.mutateAsync,
    // logout
    doLogout: logoutMutation.mutateAsync,
    isLoading: isLoggedInQuery.isFetching,
    // checking if logged in
    isLoggedIn: isLoggedInQuery.data,
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
    isPending: isLoggedInQuery.isPending,
    // is auth even enabled
    requiresAuth
  };
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveWalletConnectionStatus.js
var import_react3 = __toESM(require_react(), 1);
function useActiveWalletConnectionStatus() {
  const manager = useConnectionManagerCtx("useActiveWalletConnectionStatus");
  const store = manager.activeWalletConnectionStatusStore;
  return (0, import_react3.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/react/core/utils/defaultTokens.js
var wrappedEthIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzYyN0VFQSIvPjxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDR2OC44N2w3LjQ5NyAzLjM1eiIvPjxwYXRoIGQ9Ik0xNi40OTggNEw5IDE2LjIybDcuNDk4LTMuMzV6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDIxLjk2OHY2LjAyN0wyNCAxNy42MTZ6Ii8+PHBhdGggZD0iTTE2LjQ5OCAyNy45OTV2LTYuMDI4TDkgMTcuNjE2eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Ik0xNi40OTggMjAuNTczbDcuNDk3LTQuMzUzLTcuNDk3LTMuMzQ4eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjYwMiIgZD0iTTkgMTYuMjJsNy40OTggNC4zNTN2LTcuNzAxeiIvPjwvZz48L2c+PC9zdmc+";
var tetherUsdIcon = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzkuNDMgMjk1LjI3Ij48dGl0bGU+dGV0aGVyLXVzZHQtbG9nbzwvdGl0bGU+PHBhdGggZD0iTTYyLjE1LDEuNDVsLTYxLjg5LDEzMGEyLjUyLDIuNTIsMCwwLDAsLjU0LDIuOTRMMTY3Ljk1LDI5NC41NmEyLjU1LDIuNTUsMCwwLDAsMy41MywwTDMzOC42MywxMzQuNGEyLjUyLDIuNTIsMCwwLDAsLjU0LTIuOTRsLTYxLjg5LTEzMEEyLjUsMi41LDAsMCwwLDI3NSwwSDY0LjQ1YTIuNSwyLjUsMCwwLDAtMi4zLDEuNDVoMFoiIHN0eWxlPSJmaWxsOiM1MGFmOTU7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48cGF0aCBkPSJNMTkxLjE5LDE0NC44djBjLTEuMi4wOS03LjQsMC40Ni0yMS4yMywwLjQ2LTExLDAtMTguODEtLjMzLTIxLjU1LTAuNDZ2MGMtNDIuNTEtMS44Ny03NC4yNC05LjI3LTc0LjI0LTE4LjEzczMxLjczLTE2LjI1LDc0LjI0LTE4LjE1djI4LjkxYzIuNzgsMC4yLDEwLjc0LjY3LDIxLjc0LDAuNjcsMTMuMiwwLDE5LjgxLS41NSwyMS0wLjY2di0yOC45YzQyLjQyLDEuODksNzQuMDgsOS4yOSw3NC4wOCwxOC4xM3MtMzEuNjUsMTYuMjQtNzQuMDgsMTguMTJoMFptMC0zOS4yNVY3OS42OGg1OS4yVjQwLjIzSDg5LjIxVjc5LjY4SDE0OC40djI1Ljg2Yy00OC4xMSwyLjIxLTg0LjI5LDExLjc0LTg0LjI5LDIzLjE2czM2LjE4LDIwLjk0LDg0LjI5LDIzLjE2djgyLjloNDIuNzhWMTUxLjgzYzQ4LTIuMjEsODQuMTItMTEuNzMsODQuMTItMjMuMTRzLTM2LjA5LTIwLjkzLTg0LjEyLTIzLjE1aDBabTAsMGgwWiIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLXJ1bGU6ZXZlbm9kZCIvPjwvc3ZnPg==";
var usdcIcon = "data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9Ijg2OTc3Njg0LTEyZGItNDg1MC04ZjMwLTIzM2E3YzI2N2QxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAwMCAyMDAwIj4KICA8cGF0aCBkPSJNMTAwMCAyMDAwYzU1NC4xNyAwIDEwMDAtNDQ1LjgzIDEwMDAtMTAwMFMxNTU0LjE3IDAgMTAwMCAwIDAgNDQ1LjgzIDAgMTAwMHM0NDUuODMgMTAwMCAxMDAwIDEwMDB6IiBmaWxsPSIjMjc3NWNhIi8+CiAgPHBhdGggZD0iTTEyNzUgMTE1OC4zM2MwLTE0NS44My04Ny41LTE5NS44My0yNjIuNS0yMTYuNjYtMTI1LTE2LjY3LTE1MC01MC0xNTAtMTA4LjM0czQxLjY3LTk1LjgzIDEyNS05NS44M2M3NSAwIDExNi42NyAyNSAxMzcuNSA4Ny41IDQuMTcgMTIuNSAxNi42NyAyMC44MyAyOS4xNyAyMC44M2g2Ni42NmMxNi42NyAwIDI5LjE3LTEyLjUgMjkuMTctMjkuMTZ2LTQuMTdjLTE2LjY3LTkxLjY3LTkxLjY3LTE2Mi41LTE4Ny41LTE3MC44M3YtMTAwYzAtMTYuNjctMTIuNS0yOS4xNy0zMy4zMy0zMy4zNGgtNjIuNWMtMTYuNjcgMC0yOS4xNyAxMi41LTMzLjM0IDMzLjM0djk1LjgzYy0xMjUgMTYuNjctMjA0LjE2IDEwMC0yMDQuMTYgMjA0LjE3IDAgMTM3LjUgODMuMzMgMTkxLjY2IDI1OC4zMyAyMTIuNSAxMTYuNjcgMjAuODMgMTU0LjE3IDQ1LjgzIDE1NC4xNyAxMTIuNXMtNTguMzQgMTEyLjUtMTM3LjUgMTEyLjVjLTEwOC4zNCAwLTE0NS44NC00NS44NC0xNTguMzQtMTA4LjM0LTQuMTYtMTYuNjYtMTYuNjYtMjUtMjkuMTYtMjVoLTcwLjg0Yy0xNi42NiAwLTI5LjE2IDEyLjUtMjkuMTYgMjkuMTd2NC4xN2MxNi42NiAxMDQuMTYgODMuMzMgMTc5LjE2IDIyMC44MyAyMDB2MTAwYzAgMTYuNjYgMTIuNSAyOS4xNiAzMy4zMyAzMy4zM2g2Mi41YzE2LjY3IDAgMjkuMTctMTIuNSAzMy4zNC0zMy4zM3YtMTAwYzEyNS0yMC44NCAyMDguMzMtMTA4LjM0IDIwOC4zMy0yMjAuODR6IiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0iTTc4Ny41IDE1OTUuODNjLTMyNS0xMTYuNjYtNDkxLjY3LTQ3OS4xNi0zNzAuODMtODAwIDYyLjUtMTc1IDIwMC0zMDguMzMgMzcwLjgzLTM3MC44MyAxNi42Ny04LjMzIDI1LTIwLjgzIDI1LTQxLjY3VjMyNWMwLTE2LjY3LTguMzMtMjkuMTctMjUtMzMuMzMtNC4xNyAwLTEyLjUgMC0xNi42NyA0LjE2LTM5NS44MyAxMjUtNjEyLjUgNTQ1Ljg0LTQ4Ny41IDk0MS42NyA3NSAyMzMuMzMgMjU0LjE3IDQxMi41IDQ4Ny41IDQ4Ny41IDE2LjY3IDguMzMgMzMuMzQgMCAzNy41LTE2LjY3IDQuMTctNC4xNiA0LjE3LTguMzMgNC4xNy0xNi42NnYtNTguMzRjMC0xMi41LTEyLjUtMjkuMTYtMjUtMzcuNXpNMTIyOS4xNyAyOTUuODNjLTE2LjY3LTguMzMtMzMuMzQgMC0zNy41IDE2LjY3LTQuMTcgNC4xNy00LjE3IDguMzMtNC4xNyAxNi42N3Y1OC4zM2MwIDE2LjY3IDEyLjUgMzMuMzMgMjUgNDEuNjcgMzI1IDExNi42NiA0OTEuNjcgNDc5LjE2IDM3MC44MyA4MDAtNjIuNSAxNzUtMjAwIDMwOC4zMy0zNzAuODMgMzcwLjgzLTE2LjY3IDguMzMtMjUgMjAuODMtMjUgNDEuNjdWMTcwMGMwIDE2LjY3IDguMzMgMjkuMTcgMjUgMzMuMzMgNC4xNyAwIDEyLjUgMCAxNi42Ny00LjE2IDM5NS44My0xMjUgNjEyLjUtNTQ1Ljg0IDQ4Ny41LTk0MS42Ny03NS0yMzcuNS0yNTguMzQtNDE2LjY3LTQ4Ny41LTQ5MS42N3oiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==";
var wrappedBtcIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkuMjYgMTA5LjI2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzVhNTU2NDt9LmNscy0ye2ZpbGw6I2YwOTI0Mjt9LmNscy0ze2ZpbGw6IzI4MjEzODt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPndyYXBwZWQtYml0Y29pbi13YnRjPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxnIGlkPSJQYWdlLTEiPjxnIGlkPSJ3YnRjX2NvbG91ciIgZGF0YS1uYW1lPSJ3YnRjIGNvbG91ciI+PHBhdGggaWQ9IlNoYXBlIiBjbGFzcz0iY2xzLTEiIGQ9Ik04OS4wOSwyMi45M2wtMywzYTQyLjQ3LDQyLjQ3LDAsMCwxLDAsNTcuMzJsMywzYTQ2Ljc2LDQ2Ljc2LDAsMCwwLDAtNjMuMzlaIi8+PHBhdGggaWQ9IlNoYXBlLTIiIGRhdGEtbmFtZT0iU2hhcGUiIGNsYXNzPSJjbHMtMSIgZD0iTTI2LDIzLjE5YTQyLjQ3LDQyLjQ3LDAsMCwxLDU3LjMyLDBsMy0zYTQ2Ljc2LDQ2Ljc2LDAsMCwwLTYzLjM5LDBaIi8+PHBhdGggaWQ9IlNoYXBlLTMiIGRhdGEtbmFtZT0iU2hhcGUiIGNsYXNzPSJjbHMtMSIgZD0iTTIzLjE5LDgzLjI4YTQyLjQ3LDQyLjQ3LDAsMCwxLDAtNTcuMjlsLTMtM2E0Ni43Niw0Ni43NiwwLDAsMCwwLDYzLjM5WiIvPjxwYXRoIGlkPSJTaGFwZS00IiBkYXRhLW5hbWU9IlNoYXBlIiBjbGFzcz0iY2xzLTEiIGQ9Ik04My4yOCw4Ni4wNWE0Mi40Nyw0Mi40NywwLDAsMS01Ny4zMiwwbC0zLDNhNDYuNzYsNDYuNzYsMCwwLDAsNjMuMzksMFoiLz48cGF0aCBpZD0iU2hhcGUtNSIgZGF0YS1uYW1lPSJTaGFwZSIgY2xhc3M9ImNscy0yIiBkPSJNNzMuNTcsNDQuNjJjLS42LTYuMjYtNi04LjM2LTEyLjgzLTlWMjdINTUuNDZ2OC40NmMtMS4zOSwwLTIuODEsMC00LjIyLDBWMjdINDZ2OC42OEgzNS4yOXY1LjY1czMuOS0uMDcsMy44NCwwYTIuNzMsMi43MywwLDAsMSwzLDIuMzJWNjcuNDFhMS44NSwxLjg1LDAsMCwxLS42NCwxLjI5LDEuODMsMS44MywwLDAsMS0xLjM2LjQ2Yy4wNy4wNi0zLjg0LDAtMy44NCwwbC0xLDYuMzFINDUuOXY4LjgyaDUuMjhWNzUuNkg1NS40djguNjVoNS4yOVY3NS41M2M4LjkyLS41NCwxNS4xNC0yLjc0LDE1LjkyLTExLjA5LjYzLTYuNzItMi41My05LjcyLTcuNTgtMTAuOTNDNzIuMSw1Miw3NCw0OS4yLDczLjU3LDQ0LjYyWk02Ni4xNyw2My40YzAsNi41Ni0xMS4yNCw1LjgxLTE0LjgyLDUuODFWNTcuNTdDNTQuOTMsNTcuNTgsNjYuMTcsNTYuNTUsNjYuMTcsNjMuNFpNNjMuNzIsNDdjMCw2LTkuMzgsNS4yNy0xMi4zNiw1LjI3VjQxLjY5QzU0LjM0LDQxLjY5LDYzLjcyLDQwLjc1LDYzLjcyLDQ3WiIvPjxwYXRoIGlkPSJTaGFwZS02IiBkYXRhLW5hbWU9IlNoYXBlIiBjbGFzcz0iY2xzLTMiIGQ9Ik01NC42MiwxMDkuMjZhNTQuNjMsNTQuNjMsMCwxLDEsNTQuNjQtNTQuNjRBNTQuNjMsNTQuNjMsMCwwLDEsNTQuNjIsMTA5LjI2Wm0wLTEwNUE1MC4zNCw1MC4zNCwwLDEsMCwxMDUsNTQuNjIsNTAuMzQsNTAuMzQsMCwwLDAsNTQuNjIsNC4yNloiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+";
var maticIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzgyNDdFNSIvPgo8cGF0aCBkPSJNNjgxLjQ2OSA0MDIuNDU2QzY2OS4xODkgMzk1LjMxMiA2NTMuMjI0IDM5NS4zMTIgNjM5LjcxNiA0MDIuNDU2TDU0My45MjggNDU3LjIyOEw0NzguODQyIDQ5Mi45NDlMMzgzLjA1NSA1NDcuNzIxQzM3MC43NzQgNTU0Ljg2NSAzNTQuODEgNTU0Ljg2NSAzNDEuMzAxIDU0Ny43MjFMMjY1LjE2MiA1MDQuODU2QzI1Mi44ODIgNDk3LjcxMiAyNDQuMjg2IDQ4NC42MTQgMjQ0LjI4NiA0NzAuMzI1VjM4NS43ODZDMjQ0LjI4NiAzNzEuNDk4IDI1MS42NTQgMzU4LjQgMjY1LjE2MiAzNTEuMjU2TDM0MC4wNzMgMzA5LjU4MUMzNTIuMzUzIDMwMi40MzcgMzY4LjMxOCAzMDIuNDM3IDM4MS44MjcgMzA5LjU4MUw0NTYuNzM3IDM1MS4yNTZDNDY5LjAxOCAzNTguNCA0NzcuNjE0IDM3MS40OTggNDc3LjYxNCAzODUuNzg2VjQ0MC41NThMNTQyLjcgNDAzLjY0NlYzNDguODc0QzU0Mi43IDMzNC41ODYgNTM1LjMzMiAzMjEuNDg4IDUyMS44MjQgMzE0LjM0NEwzODMuMDU1IDIzNS43NThDMzcwLjc3NCAyMjguNjE0IDM1NC44MSAyMjguNjE0IDM0MS4zMDEgMjM1Ljc1OEwyMDAuMDc2IDMxNC4zNDRDMTg2LjU2NyAzMjEuNDg4IDE3OS4xOTkgMzM0LjU4NiAxNzkuMTk5IDM0OC44NzRWNTA3LjIzN0MxNzkuMTk5IDUyMS41MjUgMTg2LjU2NyA1MzQuNjIzIDIwMC4wNzYgNTQxLjc2N0wzNDEuMzAxIDYyMC4zNTNDMzUzLjU4MiA2MjcuNDk4IDM2OS41NDYgNjI3LjQ5OCAzODMuMDU1IDYyMC4zNTNMNDc4Ljg0MiA1NjYuNzcyTDU0My45MjggNTI5Ljg2TDYzOS43MTYgNDc2LjI3OUM2NTEuOTk2IDQ2OS4xMzUgNjY3Ljk2MSA0NjkuMTM1IDY4MS40NjkgNDc2LjI3OUw3NTYuMzggNTE3Ljk1M0M3NjguNjYgNTI1LjA5OCA3NzcuMjU3IDUzOC4xOTUgNzc3LjI1NyA1NTIuNDg0VjYzNy4wMjNDNzc3LjI1NyA2NTEuMzEyIDc2OS44ODggNjY0LjQwOSA3NTYuMzggNjcxLjU1M0w2ODEuNDY5IDcxNC40MTlDNjY5LjE4OSA3MjEuNTYzIDY1My4yMjQgNzIxLjU2MyA2MzkuNzE2IDcxNC40MTlMNTY0LjgwNSA2NzIuNzQ0QzU1Mi41MjUgNjY1LjYgNTQzLjkyOCA2NTIuNTAyIDU0My45MjggNjM4LjIxNFY1ODMuNDQyTDQ3OC44NDIgNjIwLjM1M1Y2NzUuMTI1QzQ3OC44NDIgNjg5LjQxNCA0ODYuMjEgNzAyLjUxMiA0OTkuNzE5IDcwOS42NTZMNjQwLjk0NCA3ODguMjQyQzY1My4yMjQgNzk1LjM4NiA2NjkuMTg5IDc5NS4zODYgNjgyLjY5NyA3ODguMjQyTDgyMy45MjIgNzA5LjY1NkM4MzYuMjAzIDcwMi41MTIgODQ0Ljc5OSA2ODkuNDE0IDg0NC43OTkgNjc1LjEyNVY1MTYuNzYzQzg0NC43OTkgNTAyLjQ3NCA4MzcuNDMxIDQ4OS4zNzcgODIzLjkyMiA0ODIuMjMyTDY4MS40NjkgNDAyLjQ1NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
var binanceCoinIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNGM0JBMkYiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTIuMTE2IDE0LjQwNEwxNiAxMC41MmwzLjg4NiAzLjg4NiAyLjI2LTIuMjZMMTYgNmwtNi4xNDQgNi4xNDQgMi4yNiAyLjI2ek02IDE2bDIuMjYtMi4yNkwxMC41MiAxNmwtMi4yNiAyLjI2TDYgMTZ6bTYuMTE2IDEuNTk2TDE2IDIxLjQ4bDMuODg2LTMuODg2IDIuMjYgMi4yNTlMMTYgMjZsLTYuMTQ0LTYuMTQ0LS4wMDMtLjAwMyAyLjI2My0yLjI1N3pNMjEuNDggMTZsMi4yNi0yLjI2TDI2IDE2bC0yLjI2IDIuMjZMMjEuNDggMTZ6bS0zLjE4OC0uMDAyaC4wMDJ2LjAwMkwxNiAxOC4yOTRsLTIuMjkxLTIuMjktLjAwNC0uMDA0LjAwNC0uMDAzLjQwMS0uNDAyLjE5NS0uMTk1TDE2IDEzLjcwNmwyLjI5MyAyLjI5M3oiLz48L2c+PC9zdmc+";
var BUSDIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzYuNDEgMzM3LjQyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YwYjkwYjtzdHJva2U6I2YwYjkwYjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTY4LjIuNzFsNDEuNSw0Mi41TDEwNS4yLDE0Ny43MWwtNDEuNS00MS41WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzMS4yLDYzLjcxbDQxLjUsNDIuNUwxMDUuMiwyNzMuNzFsLTQxLjUtNDEuNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00Mi4yLDEyNi43MWw0MS41LDQyLjUtNDEuNSw0MS41TC43LDE2OS4yMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yOTQuMiwxMjYuNzFsNDEuNSw0Mi41TDE2OC4yLDMzNi43MWwtNDEuNS00MS41WiIvPjwvZz48L2c+PC9zdmc+";
var fantomIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7ZmlsbDojMTNiNWVjO30uY2xzLTN7bWFzazp1cmwoI21hc2spO308L3N0eWxlPjxtYXNrIGlkPSJtYXNrIiB4PSIxMCIgeT0iNiIgd2lkdGg9IjkzLjEiIGhlaWdodD0iMjAiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPjxnIGlkPSJhIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMCw2aDkzLjFWMjZIMTBaIi8+PC9nPjwvbWFzaz48L2RlZnM+PHRpdGxlPmZhPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiLz48ZyBjbGFzcz0iY2xzLTMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE3LjIsMTIuOWwzLjYtMi4xVjE1Wm0zLjYsOUwxNiwyNC43bC00LjgtMi44VjE3TDE2LDE5LjgsMjAuOCwxN1pNMTEuMiwxMC44bDMuNiwyLjFMMTEuMiwxNVptNS40LDMuMUwyMC4yLDE2bC0zLjYsMi4xWm0tMS4yLDQuMkwxMS44LDE2bDMuNi0yLjFabTQuOC04LjNMMTYsMTIuMiwxMS44LDkuOCwxNiw3LjNaTTEwLDkuNFYyMi41bDYsMy40LDYtMy40VjkuNEwxNiw2WiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
var DEFAULT_TOKENS = {
  "1": [
    {
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      icon: wrappedEthIcon,
      name: "Wrapped Ether",
      symbol: "WETH"
    },
    {
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      icon: tetherUsdIcon,
      name: "Tether USD",
      symbol: "USDT"
    },
    {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    },
    {
      address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      icon: wrappedBtcIcon,
      name: "Wrapped Bitcoin",
      symbol: "WBTC"
    },
    {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      icon: maticIcon,
      name: "Polygon",
      symbol: "WMATIC"
    }
  ],
  "10": [
    {
      address: "0x4200000000000000000000000000000000000006",
      icon: wrappedEthIcon,
      name: "Wrapped Ether",
      symbol: "WETH"
    },
    {
      address: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    }
  ],
  "56": [
    {
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      icon: binanceCoinIcon,
      name: "Wrapped Binance Chain Token",
      symbol: "WBNB"
    },
    {
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      icon: BUSDIcon,
      name: "Binance USD",
      symbol: "BUSD"
    }
  ],
  "97": [
    {
      address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      icon: binanceCoinIcon,
      name: "Wrapped Binance Chain Testnet Token",
      symbol: "WBNB"
    },
    {
      address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
      icon: BUSDIcon,
      name: "Binance USD",
      symbol: "BUSD"
    }
  ],
  "137": [
    {
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    },
    {
      address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      icon: maticIcon,
      name: "Wrapped Matic",
      symbol: "WMATIC"
    },
    {
      address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      icon: wrappedEthIcon,
      name: "Wrapped Ether",
      symbol: "WETH"
    },
    {
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      icon: tetherUsdIcon,
      name: "Tether USD",
      symbol: "USDT"
    },
    {
      address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      icon: wrappedBtcIcon,
      name: "Wrapped BTC",
      symbol: "WBTC"
    }
  ],
  "250": [
    {
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      icon: fantomIcon,
      name: "Wrapped Fantom",
      symbol: "WFTM"
    },
    {
      address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
      icon: wrappedEthIcon,
      name: "Wrapped Ether",
      symbol: "WETH"
    },
    {
      address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    },
    {
      address: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
      icon: wrappedBtcIcon,
      name: "Wrapped Bitcoin",
      symbol: "WBTC"
    }
  ],
  "420": [
    {
      address: "0x4200000000000000000000000000000000000006",
      icon: wrappedEthIcon,
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  ],
  "4002": [
    {
      address: "0xf1277d1Ed8AD466beddF92ef448A132661956621",
      icon: fantomIcon,
      name: "Wrapped Fantom",
      symbol: "WFTM"
    }
  ],
  // Base mainnet
  "8453": [
    {
      address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    }
  ],
  "42161": [
    {
      address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
      icon: wrappedEthIcon,
      name: "Wrapped Ether",
      symbol: "WETH"
    },
    {
      address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    }
  ],
  "43113": [
    {
      address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo=",
      name: "Wrapped AVAX",
      symbol: "WAVAX"
    },
    {
      address: "0x5425890298aed601595a70AB815c96711a31Bc65",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    }
  ],
  "43114": [
    {
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo=",
      name: "Wrapped AVAX",
      symbol: "WAVAX"
    },
    {
      address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      icon: wrappedEthIcon,
      name: "Wrapped Ether",
      symbol: "WETH"
    },
    {
      address: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
      icon: tetherUsdIcon,
      name: "Tether USD",
      symbol: "USDT"
    },
    {
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    },
    {
      address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
      icon: wrappedBtcIcon,
      name: "Wrapped BTC",
      symbol: "WBTC"
    }
  ],
  "80001": [
    {
      address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
      icon: maticIcon,
      name: "Wrapped Matic",
      symbol: "WMATIC"
    },
    {
      address: "0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa",
      icon: wrappedEthIcon,
      name: "Wrapped Ether",
      symbol: "WETH"
    },
    {
      address: "0x0FA8781a83E46826621b3BC094Ea2A0212e71B23",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    },
    {
      address: "0x3813e82e6f7098b9583FC0F33a962D02018B6803",
      icon: tetherUsdIcon,
      name: "Tether USD",
      symbol: "USDT"
    }
  ],
  // Base sepolia
  "84532": [
    {
      address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    }
  ],
  "421613": [
    {
      address: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
      icon: wrappedEthIcon,
      name: "Wrapped Ether",
      symbol: "WETH"
    },
    {
      address: "0xfd064A18f3BF249cf1f87FC203E90D8f650f2d63",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    }
  ],
  "11155111": [
    {
      address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
      icon: usdcIcon,
      name: "USD Coin",
      symbol: "USDC"
    }
  ]
};
var defaultTokens = DEFAULT_TOKENS;
function getDefaultToken(chain, symbol) {
  const tokens2 = defaultTokens[chain.id];
  return tokens2 == null ? void 0 : tokens2.find((t) => t.symbol === symbol);
}

// node_modules/thirdweb/dist/esm/react/web/utils/canFitWideModal.js
function canFitWideModal() {
  if (typeof window !== "undefined") {
    return window.innerWidth >= wideModalScreenThreshold;
  }
  return false;
}

// node_modules/thirdweb/dist/esm/react/web/utils/usePreloadWalletProviders.js
function usePreloadWalletProviders({ wallets }) {
  useQueries({
    queries: wallets.filter((w) => w.id === COINBASE || w.id === "inApp" || isEcosystemWallet(w.id)).map((w) => ({
      queryFn: async () => {
        switch (true) {
          case COINBASE === w.id: {
            const { getCoinbaseWebProvider } = await import("./coinbase-web-ASSCYQ4P.js");
            await getCoinbaseWebProvider(w.getConfig());
            return true;
          }
          // potentially add more wallets here
          default: {
            return false;
          }
        }
      },
      queryKey: ["preload-wallet", w.id]
    }))
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/AutoConnect/AutoConnect.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/utils/timeoutPromise.js
function timeoutPromise(promise, option) {
  return new Promise((resolve2, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(option.message));
    }, option.ms);
    promise.then((res) => {
      clearTimeout(timeoutId);
      resolve2(res);
    }, (err) => {
      clearTimeout(timeoutId);
      reject(err);
    });
  });
}

// node_modules/thirdweb/dist/esm/wallets/in-app/core/wallet/is-in-app-signer.js
function isInAppSigner(options) {
  const isInAppOrEcosystem = (w) => isInAppWallet(w) || isEcosystemWallet(w);
  const isSmartWalletWithAdmin = isSmartWallet(options.wallet) && options.connectedWallets.some((w) => {
    var _a, _b, _c, _d, _e, _f;
    return isInAppOrEcosystem(w) && ((_b = (_a = w.getAccount()) == null ? void 0 : _a.address) == null ? void 0 : _b.toLowerCase()) === ((_f = (_e = (_d = (_c = options.wallet).getAdminAccount) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e.address) == null ? void 0 : _f.toLowerCase());
  });
  return isInAppOrEcosystem(options.wallet) || isSmartWalletWithAdmin;
}

// node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/get-url-token.js
function getUrlToken() {
  if (typeof document === "undefined") {
    return void 0;
  }
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const authResultString = params.get("authResult");
  const walletId = params.get("walletId");
  const authProvider = params.get("authProvider");
  const authCookie = params.get("authCookie");
  if ((authCookie || authResultString) && walletId) {
    const authResult = (() => {
      if (authResultString) {
        params.delete("authResult");
        return JSON.parse(decodeURIComponent(authResultString));
      }
    })();
    params.delete("walletId");
    params.delete("authProvider");
    params.delete("authCookie");
    window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
    return { authCookie, authProvider, authResult, walletId };
  }
  return void 0;
}

// node_modules/thirdweb/dist/esm/reactive/computedStore.js
function computedStore(computation, dependencies) {
  const listeners = /* @__PURE__ */ new Set();
  let value = computation();
  const notify = () => {
    for (const listener of listeners) {
      listener();
    }
  };
  const setValue = (newValue) => {
    value = newValue;
    notify();
  };
  for (const store of dependencies) {
    store.subscribe(() => {
      setValue(computation());
    });
  }
  return {
    getValue() {
      return value;
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    }
  };
}

// node_modules/thirdweb/dist/esm/reactive/effect.js
function effect(effectFn, dependencies, runOnMount = true) {
  if (runOnMount) {
    effectFn();
  }
  const unsubscribeList = dependencies.map((store) => {
    return store.subscribe(() => {
      effectFn();
    });
  });
  return () => {
    for (const fn of unsubscribeList) {
      fn();
    }
  };
}

// node_modules/thirdweb/dist/esm/wallets/manager/index.js
var CONNECTED_WALLET_IDS = "thirdweb:connected-wallet-ids";
var LAST_ACTIVE_EOA_ID = "thirdweb:active-wallet-id";
var LAST_ACTIVE_CHAIN = "thirdweb:active-chain";
function createConnectionManager(storage) {
  const activeWalletStore = createStore(void 0);
  const activeAccountStore = createStore(void 0);
  const activeWalletChainStore = createStore(void 0);
  const activeWalletConnectionStatusStore = createStore("unknown");
  const definedChainsStore = createStore(/* @__PURE__ */ new Map());
  effect(() => {
    cacheChains([...definedChainsStore.getValue().values()]);
  }, [definedChainsStore]);
  effect(() => {
    const chainVal = activeWalletChainStore.getValue();
    if (!chainVal) {
      return;
    }
    const definedChain = definedChainsStore.getValue().get(chainVal.id);
    if (!definedChain || definedChain === chainVal) {
      return;
    }
    activeWalletChainStore.setValue(definedChain);
  }, [definedChainsStore, activeWalletChainStore]);
  const walletIdToConnectedWalletMap = createStore(/* @__PURE__ */ new Map());
  const isAutoConnecting = createStore(false);
  const connectedWallets = computedStore(() => {
    return Array.from(walletIdToConnectedWalletMap.getValue().values());
  }, [walletIdToConnectedWalletMap]);
  const addConnectedWallet = (wallet) => {
    const oldValue = walletIdToConnectedWalletMap.getValue();
    if (oldValue.has(wallet.id)) {
      return;
    }
    const newValue = new Map(oldValue);
    newValue.set(wallet.id, wallet);
    walletIdToConnectedWalletMap.setValue(newValue);
  };
  const removeConnectedWallet = (wallet) => {
    const oldValue = walletIdToConnectedWalletMap.getValue();
    const newValue = new Map(oldValue);
    newValue.delete(wallet.id);
    walletIdToConnectedWalletMap.setValue(newValue);
  };
  const onWalletDisconnect = (wallet) => {
    deleteConnectParamsFromStorage(storage, wallet.id);
    removeConnectedWallet(wallet);
    if (activeWalletStore.getValue() === wallet) {
      storage.removeItem(LAST_ACTIVE_EOA_ID);
      activeAccountStore.setValue(void 0);
      activeWalletChainStore.setValue(void 0);
      activeWalletStore.setValue(void 0);
      activeWalletConnectionStatusStore.setValue("disconnected");
    }
  };
  const disconnectWallet = (wallet) => {
    onWalletDisconnect(wallet);
    wallet.disconnect();
  };
  const handleConnection = async (wallet, options) => {
    const account = wallet.getAccount();
    if (!account) {
      throw new Error("Cannot set a wallet without an account as active");
    }
    const activeWallet = await (async () => {
      if ((options == null ? void 0 : options.accountAbstraction) && !isSmartWallet(wallet)) {
        return await handleSmartWalletConnection(wallet, options.client, options.accountAbstraction, onWalletDisconnect);
      } else {
        return wallet;
      }
    })();
    await storage.setItem(LAST_ACTIVE_EOA_ID, wallet.id);
    addConnectedWallet(wallet);
    if ((options == null ? void 0 : options.setWalletAsActive) !== false) {
      handleSetActiveWallet(activeWallet);
    }
    wallet.subscribe("accountChanged", async () => {
      var _a;
      const newWallet = await handleConnection(wallet, options);
      (_a = options == null ? void 0 : options.onConnect) == null ? void 0 : _a.call(options, newWallet);
    });
    return activeWallet;
  };
  const connect = async (wallet, options) => {
    var _a;
    const connectedWallet = await handleConnection(wallet, options);
    (_a = options == null ? void 0 : options.onConnect) == null ? void 0 : _a.call(options, connectedWallet);
    return connectedWallet;
  };
  const handleSetActiveWallet = (activeWallet) => {
    const account = activeWallet.getAccount();
    if (!account) {
      throw new Error("Cannot set a wallet without an account as active");
    }
    addConnectedWallet(activeWallet);
    activeWalletStore.setValue(activeWallet);
    activeAccountStore.setValue(account);
    activeWalletChainStore.setValue(activeWallet.getChain());
    activeWalletConnectionStatusStore.setValue("connected");
    const onAccountsChanged = (newAccount) => {
      activeAccountStore.setValue(newAccount);
    };
    const unsubAccounts = activeWallet.subscribe("accountChanged", onAccountsChanged);
    const unsubChainChanged = activeWallet.subscribe("chainChanged", (chain) => activeWalletChainStore.setValue(chain));
    const unsubDisconnect = activeWallet.subscribe("disconnect", () => {
      handleDisconnect();
    });
    const handleDisconnect = () => {
      onWalletDisconnect(activeWallet);
      unsubAccounts();
      unsubChainChanged();
      unsubDisconnect();
    };
  };
  const setActiveWallet = async (activeWallet) => {
    handleSetActiveWallet(activeWallet);
    if (activeWallet.id !== "smart") {
      await storage.setItem(LAST_ACTIVE_EOA_ID, activeWallet.id);
    }
  };
  effect(() => {
    const _chain = activeWalletChainStore.getValue();
    if (_chain) {
      storage.setItem(LAST_ACTIVE_CHAIN, stringify(_chain));
    } else {
      storage.removeItem(LAST_ACTIVE_CHAIN);
    }
  }, [activeWalletChainStore], false);
  effect(async () => {
    const prevAccounts = await getStoredConnectedWalletIds(storage) || [];
    const accounts = connectedWallets.getValue();
    const ids = accounts.map((acc) => acc == null ? void 0 : acc.id).filter((c) => !!c);
    storage.setItem(CONNECTED_WALLET_IDS, stringify(Array.from(/* @__PURE__ */ new Set([...prevAccounts, ...ids]))));
  }, [connectedWallets], false);
  const switchActiveWalletChain = async (chain) => {
    const wallet = activeWalletStore.getValue();
    if (!wallet) {
      throw new Error("No active wallet found");
    }
    if (!wallet.switchChain) {
      throw new Error("Wallet does not support switching chains");
    }
    if (isSmartWallet(wallet)) {
      const personalWalletId = await getStoredActiveWalletId(storage);
      if (personalWalletId) {
        const personalWallet = connectedWallets.getValue().find((w) => w.id === personalWalletId);
        if (personalWallet) {
          await personalWallet.switchChain(chain);
          await wallet.switchChain(chain);
          handleSetActiveWallet(wallet);
          return;
        }
      }
      await wallet.switchChain(chain);
      handleSetActiveWallet(wallet);
    } else {
      await wallet.switchChain(chain);
    }
    activeWalletChainStore.setValue(wallet.getChain());
  };
  function defineChains(chains) {
    const currentMapVal = definedChainsStore.getValue();
    const allChainsSame = chains.every((c) => {
      const definedChain = currentMapVal.get(c.id);
      return stringify(definedChain) === stringify(c);
    });
    if (allChainsSame) {
      return;
    }
    const newMapVal = new Map(currentMapVal);
    for (const c of chains) {
      newMapVal.set(c.id, c);
    }
    definedChainsStore.setValue(newMapVal);
  }
  return {
    activeAccountStore,
    activeWalletChainStore,
    activeWalletConnectionStatusStore,
    activeWalletStore,
    addConnectedWallet,
    connect,
    connectedWallets,
    defineChains,
    disconnectWallet,
    handleConnection,
    isAutoConnecting,
    removeConnectedWallet,
    setActiveWallet,
    switchActiveWalletChain
  };
}
async function getStoredConnectedWalletIds(storage) {
  try {
    const value = await storage.getItem(CONNECTED_WALLET_IDS);
    if (value) {
      return JSON.parse(value);
    }
    return [];
  } catch {
    return [];
  }
}
async function getStoredActiveWalletId(storage) {
  try {
    const value = await storage.getItem(LAST_ACTIVE_EOA_ID);
    if (value) {
      return value;
    }
  } catch {
  }
  return null;
}
async function getLastConnectedChain(storage) {
  try {
    const value = await storage.getItem(LAST_ACTIVE_CHAIN);
    if (value) {
      return JSON.parse(value);
    }
  } catch {
  }
  return null;
}
var handleSmartWalletConnection = async (eoaWallet, client, options, onWalletDisconnect) => {
  const signer = eoaWallet.getAccount();
  if (!signer) {
    throw new Error("Cannot set a wallet without an account as active");
  }
  const wallet = smartWallet(options);
  await wallet.connect({
    chain: options.chain,
    client,
    personalAccount: signer
  });
  const disconnectUnsub = eoaWallet.subscribe("disconnect", () => {
    handleDisconnect();
  });
  const handleDisconnect = () => {
    disconnectUnsub();
    onWalletDisconnect(wallet);
  };
  return wallet;
};

// node_modules/thirdweb/dist/esm/wallets/connection/autoConnectCore.js
var lastAutoConnectionResultPromise;
var autoConnectCore = async (props) => {
  if (lastAutoConnectionResultPromise && !props.force) {
    const lastResult = await lastAutoConnectionResultPromise;
    if (lastResult) {
      return true;
    }
  }
  const resultPromise = _autoConnectCore(props);
  lastAutoConnectionResultPromise = resultPromise;
  return resultPromise;
};
var _autoConnectCore = async ({ storage, props, createWalletFn, manager, connectOverride, getInstalledWallets, setLastAuthProvider: setLastAuthProvider2 }) => {
  var _a, _b, _c, _d, _e;
  const { wallets, onConnect } = props;
  const timeout = props.timeout ?? 15e3;
  let autoConnected = false;
  manager.isAutoConnecting.setValue(true);
  let [lastConnectedWalletIds, lastActiveWalletId] = await Promise.all([
    getStoredConnectedWalletIds(storage),
    getStoredActiveWalletId(storage)
  ]);
  const urlToken = getUrlToken();
  const wallet = wallets.find((w) => w.id === (urlToken == null ? void 0 : urlToken.walletId));
  if ((urlToken == null ? void 0 : urlToken.authCookie) && wallet) {
    const clientStorage = new ClientScopedStorage({
      clientId: props.client.clientId,
      ecosystem: isEcosystemWallet(wallet) ? {
        id: wallet.id,
        partnerId: (_a = wallet.getConfig()) == null ? void 0 : _a.partnerId
      } : void 0,
      storage
    });
    await clientStorage.saveAuthCookie(urlToken.authCookie);
  }
  if (urlToken == null ? void 0 : urlToken.walletId) {
    lastActiveWalletId = urlToken.walletId;
    lastConnectedWalletIds = (lastConnectedWalletIds == null ? void 0 : lastConnectedWalletIds.includes(urlToken.walletId)) ? lastConnectedWalletIds : [urlToken.walletId, ...lastConnectedWalletIds || []];
  }
  if (urlToken == null ? void 0 : urlToken.authProvider) {
    await (setLastAuthProvider2 == null ? void 0 : setLastAuthProvider2(urlToken.authProvider, storage));
  }
  if (!lastConnectedWalletIds) {
    return autoConnected;
  }
  const lastConnectedChain = await getLastConnectedChain(storage) || props.chain;
  const availableWallets = [...wallets, ...(getInstalledWallets == null ? void 0 : getInstalledWallets()) ?? []];
  const activeWallet = lastActiveWalletId && (availableWallets.find((w) => w.id === lastActiveWalletId) || createWalletFn(lastActiveWalletId));
  if (activeWallet) {
    manager.activeWalletConnectionStatusStore.setValue("connecting");
    await timeoutPromise(handleWalletConnection({
      authResult: urlToken == null ? void 0 : urlToken.authResult,
      client: props.client,
      lastConnectedChain,
      wallet: activeWallet
    }), {
      message: `AutoConnect timeout: ${timeout}ms limit exceeded.`,
      ms: timeout
    }).catch((err) => {
      console.warn(err.message);
      if (props.onTimeout) {
        props.onTimeout();
      }
    });
    try {
      const connectedWallet = await (connectOverride ? connectOverride(activeWallet) : manager.connect(activeWallet, {
        accountAbstraction: props.accountAbstraction,
        client: props.client
      }));
      if (connectedWallet) {
        autoConnected = true;
        try {
          onConnect == null ? void 0 : onConnect(connectedWallet);
        } catch {
        }
      } else {
        manager.activeWalletConnectionStatusStore.setValue("disconnected");
      }
    } catch (e) {
      if (e instanceof Error) {
        console.warn("Error auto connecting wallet:", e.message);
      }
      manager.activeWalletConnectionStatusStore.setValue("disconnected");
    }
  } else {
    manager.activeWalletConnectionStatusStore.setValue("disconnected");
  }
  const otherWallets = availableWallets.filter((w) => w.id !== lastActiveWalletId && lastConnectedWalletIds.includes(w.id));
  for (const wallet2 of otherWallets) {
    try {
      await handleWalletConnection({
        authResult: urlToken == null ? void 0 : urlToken.authResult,
        client: props.client,
        lastConnectedChain,
        wallet: wallet2
      });
      manager.addConnectedWallet(wallet2);
    } catch {
    }
  }
  const isIAW = activeWallet && isInAppSigner({
    connectedWallets: activeWallet ? [activeWallet, ...otherWallets] : otherWallets,
    wallet: activeWallet
  });
  if (isIAW && ((_b = props.siweAuth) == null ? void 0 : _b.requiresAuth) && !((_c = props.siweAuth) == null ? void 0 : _c.isLoggedIn) && !((_d = props.siweAuth) == null ? void 0 : _d.isLoggingIn)) {
    await ((_e = props.siweAuth) == null ? void 0 : _e.doLogin().catch((err) => {
      console.warn("Error signing in with SIWE:", err.message);
    }));
  }
  manager.isAutoConnecting.setValue(false);
  return autoConnected;
};
async function handleWalletConnection(props) {
  return props.wallet.autoConnect({
    authResult: props.authResult,
    chain: props.lastConnectedChain,
    client: props.client
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useConnect.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSetActiveWalletConnectionStatus.js
function useSetActiveWalletConnectionStatus() {
  const manager = useConnectionManagerCtx("useSetActiveWalletConnectionStatus");
  return manager.activeWalletConnectionStatusStore.setValue;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useConnect.js
function useConnect(options) {
  const manager = useConnectionManagerCtx("useConnect");
  const { connect } = manager;
  const setConnectionStatus = useSetActiveWalletConnectionStatus();
  const [isConnecting, setIsConnecting] = (0, import_react4.useState)(false);
  const [error, setError] = (0, import_react4.useState)(null);
  const handleConnection = (0, import_react4.useCallback)(async (walletOrFn) => {
    setError(null);
    setConnectionStatus("connecting");
    if (typeof walletOrFn !== "function") {
      const account = await connect(walletOrFn, options);
      setConnectionStatus("connected");
      return account;
    }
    setIsConnecting(true);
    try {
      const w = await walletOrFn();
      const account = await connect(w, options);
      setConnectionStatus("connected");
      return account;
    } catch (e) {
      console.error(e);
      setError(e);
      setConnectionStatus("disconnected");
    } finally {
      setIsConnecting(false);
    }
    return null;
  }, [connect, options, setConnectionStatus]);
  return { connect: handleConnection, error, isConnecting };
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useAutoConnect.js
function useAutoConnectCore(storage, props, createWalletFn, getInstalledWallets) {
  const manager = useConnectionManagerCtx("useAutoConnect");
  const { connect } = useConnect({
    accountAbstraction: props.accountAbstraction,
    client: props.client
  });
  const query = useQuery({
    queryFn: () => autoConnectCore({
      connectOverride: connect,
      createWalletFn,
      getInstalledWallets,
      manager,
      props,
      setLastAuthProvider,
      storage
    }),
    queryKey: ["autoConnect", props.client.clientId],
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
  return query;
}

// node_modules/thirdweb/dist/esm/react/web/hooks/wallets/useAutoConnect.js
function useAutoConnect(props) {
  const wallets = props.wallets || getDefaultWallets(props);
  return useAutoConnectCore(webLocalStorage, {
    ...props,
    wallets
  }, createWallet, () => {
    const specifiedWalletIds = new Set(wallets.map((x) => x.id));
    const installedWallets = getInstalledWalletProviders().filter((x) => !specifiedWalletIds.has(x.info.rdns)).map((x) => createWallet(x.info.rdns));
    return installedWallets;
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/AutoConnect/AutoConnect.js
function AutoConnect(props) {
  useAutoConnect(props);
  return (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {});
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/Modal.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var React27 = __toESM(require_react(), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require_react(), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// node_modules/@radix-ui/react-context/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function createContext22(rootComponentName, defaultContext) {
  const Context = React2.createContext(defaultContext);
  const Provider2 = (props) => {
    const { children, ...context } = props;
    const value = React2.useMemo(() => context, Object.values(context));
    return (0, import_jsx_runtime5.jsx)(Context.Provider, { value, children });
  };
  Provider2.displayName = rootComponentName + "Provider";
  function useContext22(consumerName) {
    const context = React2.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider2, useContext22];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React2.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider2 = (props) => {
      var _a;
      const { scope, children, ...context } = props;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index2]) || BaseContext;
      const value = React2.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime5.jsx)(Context.Provider, { value, children });
    };
    Provider2.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      var _a;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index2]) || BaseContext;
      const context = React2.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React2.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React2.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React2.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var React4 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React3 = __toESM(require_react(), 1);
var useLayoutEffect2 = (globalThis == null ? void 0 : globalThis.document) ? React3.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-id/dist/index.mjs
var useReactId = React4[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React4.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React6 = __toESM(require_react(), 1);
var React22 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var React5 = __toESM(require_react(), 1);
var useReactEffectEvent = React5[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = React5[" useInsertionEffect ".trim().toString()];

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var useInsertionEffect = React6[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React6.useRef(prop !== void 0);
    React6.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React6.useCallback(
    (nextValue) => {
      var _a;
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          (_a = onChangeRef.current) == null ? void 0 : _a.call(onChangeRef, value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React6.useState(defaultProp);
  const prevValueRef = React6.useRef(value);
  const onChangeRef = React6.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React6.useEffect(() => {
    var _a;
    if (prevValueRef.current !== value) {
      (_a = onChangeRef.current) == null ? void 0 : _a.call(onChangeRef, value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React11 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React8 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React7 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function createSlot(ownerName) {
  const SlotClone = createSlotClone(ownerName);
  const Slot22 = React7.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React7.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React7.Children.count(newElement) > 1) return React7.Children.only(null);
          return React7.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime6.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React7.isValidElement(newElement) ? React7.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime6.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot22.displayName = `${ownerName}.Slot`;
  return Slot22;
}
var Slot = createSlot("Slot");
function createSlotClone(ownerName) {
  const SlotClone = React7.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React7.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React7.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React7.cloneElement(children, props2);
    }
    return React7.Children.count(children) > 1 ? React7.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function createSlottable(ownerName) {
  const Slottable22 = ({ children }) => {
    return (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children });
  };
  Slottable22.displayName = `${ownerName}.Slottable`;
  Slottable22.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable22;
}
var Slottable = createSlottable("Slottable");
function isSlottable(child) {
  return React7.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot3 = createSlot(`Primitive.${node}`);
  const Node3 = React8.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot3 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime7.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node3.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node3 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React9 = __toESM(require_react(), 1);
function useCallbackRef(callback) {
  const callbackRef = React9.useRef(callback);
  React9.useEffect(() => {
    callbackRef.current = callback;
  });
  return React9.useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var React10 = __toESM(require_react(), 1);
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React10.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React11.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = React11.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React11.useContext(DismissableLayerContext);
    const [node, setNode] = React11.useState(null);
    const ownerDocument = (node == null ? void 0 : node.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document);
    const [, force] = React11.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index2 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside == null ? void 0 : onFocusOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index2 === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React11.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React11.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React11.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return (0, import_jsx_runtime8.jsx)(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React11.forwardRef((props, forwardedRef) => {
  const context = React11.useContext(DismissableLayerContext);
  const ref = React11.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React11.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return (0, import_jsx_runtime8.jsx)(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React11.useRef(false);
  const handleClickRef = React11.useRef(() => {
  });
  React11.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React11.useRef(false);
  React11.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var React12 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React12.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React12.useState(null);
  const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React12.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = React12.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React12.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React12.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React12.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return (0, import_jsx_runtime9.jsx)(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope == null ? void 0 : activeFocusScope.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _a;
      stack = arrayRemove(stack, focusScope);
      (_a = stack[0]) == null ? void 0 : _a.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}

// node_modules/@radix-ui/react-portal/dist/index.mjs
var React13 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var PORTAL_NAME = "Portal";
var Portal = React13.forwardRef((props, forwardedRef) => {
  var _a;
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React13.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return container ? import_react_dom.default.createPortal((0, import_jsx_runtime10.jsx)(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React23 = __toESM(require_react(), 1);
var React14 = __toESM(require_react(), 1);
function useStateMachine(initialState, machine) {
  return React14.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React23.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React23.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React23.useState();
  const stylesRef = React23.useRef(null);
  const prevPresentRef = React23.useRef(present);
  const prevAnimationNameRef = React23.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React23.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React23.useCallback((node2) => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return (styles == null ? void 0 : styles.animationName) || "none";
}
function getElementRef2(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React15 = __toESM(require_react(), 1);
var count2 = 0;
function useFocusGuards() {
  React15.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count2++;
    return () => {
      if (count2 === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count2--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React26 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React20 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react5 = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react5.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React16 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React16.useLayoutEffect : React16.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React17 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react6 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React18 = __toESM(require_react());
var import_react7 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React19 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React19.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React20.forwardRef(function(props, parentRef) {
  var ref = React20.useRef(null);
  var _a = React20.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container2 = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React20.createElement(
    React20.Fragment,
    null,
    enabled && React20.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React20.cloneElement(React20.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React20.createElement(Container2, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React25 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React24 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React21 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React21.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React24.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React24.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React24.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React25.useRef([]);
  var touchStartRef = React25.useRef([0, 0]);
  var activeAxis = React25.useRef();
  var id = React25.useState(idCounter++)[0];
  var Style2 = React25.useState(styleSingleton)[0];
  var lastProps = React25.useRef(props);
  React25.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React25.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React25.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React25.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React25.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React25.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React25.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React25.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React25.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React25.createElement(
    React25.Fragment,
    null,
    inert ? React25.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React25.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React26.forwardRef(function(props, ref) {
  return React26.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React27.useRef(null);
  const contentRef = React27.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return (0, import_jsx_runtime11.jsx)(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React27.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return (0, import_jsx_runtime11.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME2 = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME2, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME2, __scopeDialog);
  return (0, import_jsx_runtime11.jsx)(PortalProvider, { scope: __scopeDialog, forceMount, children: React27.Children.map(children, (child) => (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime11.jsx)(Portal, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME2;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = React27.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime11.jsx)(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var Slot2 = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      (0, import_jsx_runtime11.jsx)(Combination_default, { as: Slot2, allowPinchZoom: true, shards: [context.contentRef], children: (0, import_jsx_runtime11.jsx)(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContent = React27.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? (0, import_jsx_runtime11.jsx)(DialogContentModal, { ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime11.jsx)(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = React27.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = React27.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React27.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return (0, import_jsx_runtime11.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = React27.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = React27.useRef(false);
    const hasPointerDownOutsideRef = React27.useRef(false);
    return (0, import_jsx_runtime11.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = React27.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      (0, import_jsx_runtime11.jsx)(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: (0, import_jsx_runtime11.jsx)(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
        (0, import_jsx_runtime11.jsx)(TitleWarning, { titleId: context.titleId }),
        (0, import_jsx_runtime11.jsx)(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return (0, import_jsx_runtime11.jsx)(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return (0, import_jsx_runtime11.jsx)(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return (0, import_jsx_runtime11.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext22(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React27.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  React27.useEffect(() => {
    var _a;
    const describedById = (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal2 = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Close = DialogClose;

// node_modules/thirdweb/dist/esm/react/web/ui/components/Modal.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/DynamicHeight.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_react8 = __toESM(require_react(), 1);
function DynamicHeight(props) {
  const { height, elementRef } = useHeightObserver();
  return (0, import_jsx_runtime12.jsx)("div", { style: {
    boxSizing: "border-box",
    height: height ? `${height}px` : "auto",
    overflow: "hidden",
    transition: "height 210ms cubic-bezier(0.175, 0.885, 0.32, 1.1)"
  }, children: (0, import_jsx_runtime12.jsx)("div", { ref: elementRef, style: {
    maxHeight: props.maxHeight
  }, children: props.children }) });
}
function useHeightObserver() {
  const elementRef = (0, import_react8.useRef)(null);
  const [height, setHeight] = (0, import_react8.useState)();
  (0, import_react8.useEffect)(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      setHeight(element.scrollHeight);
    });
    resizeObserver.observe(element);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return { elementRef, height };
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/Overlay.js
var Overlay2 = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    animation: `${fadeInAnimation} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    backdropFilter: "blur(10px)",
    backgroundColor: theme.colors.modalOverlayBg,
    inset: 0,
    position: "fixed",
    zIndex: 9999
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/components/Modal.js
var Modal = (props) => {
  const [open, setOpen] = (0, import_react10.useState)(props.open);
  const contentRef = (0, import_react10.useRef)(null);
  const overlayRef = (0, import_react10.useRef)(null);
  (0, import_react10.useEffect)(() => {
    var _a;
    if (!props.open) {
      if (contentRef.current) {
        const animationConfig = {
          duration: modalCloseFadeOutDuration,
          fill: "forwards",
          easing: "ease"
        };
        contentRef.current.animate([{ opacity: 0 }], {
          ...animationConfig
        }).onfinish = () => {
          setOpen(false);
        };
        (_a = overlayRef.current) == null ? void 0 : _a.animate([{ opacity: 0 }], {
          ...animationConfig,
          duration: modalCloseFadeOutDuration + 100
        });
      } else {
        setOpen(props.open);
      }
    } else {
      setOpen(props.open);
    }
  }, [props.open]);
  return (0, import_jsx_runtime13.jsxs)(Root, { open, onOpenChange: props.setOpen, children: [props.trigger && (0, import_jsx_runtime13.jsx)(Trigger, { asChild: true, children: props.trigger }), (0, import_jsx_runtime13.jsxs)(Portal2, { children: [!props.hide && (0, import_jsx_runtime13.jsx)(Overlay, { asChild: true, children: (0, import_jsx_runtime13.jsx)(Overlay2, { ref: overlayRef }) }), (0, import_jsx_runtime13.jsx)(FocusScope, { trapped: !props.hide, children: (0, import_jsx_runtime13.jsx)(Content, { asChild: true, "aria-describedby": void 0, children: (0, import_jsx_runtime13.jsxs)(DialogContent2, { ref: contentRef, style: props.hide ? { width: 0, height: 0, overflow: "hidden", opacity: 0 } : {
    height: props.size === "compact" ? "auto" : wideModalMaxHeight,
    maxWidth: props.size === "compact" ? modalMaxWidthCompact : modalMaxWidthWide
  }, children: [(0, import_jsx_runtime13.jsx)(Title, { style: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0
  }, children: "Connect Modal" }), props.size === "compact" ? (0, import_jsx_runtime13.jsx)(DynamicHeight, { maxHeight: compactModalMaxHeight, children: props.children }) : props.children, !props.hideCloseIcon && (0, import_jsx_runtime13.jsx)(CrossContainer, { children: (0, import_jsx_runtime13.jsx)(Close, { asChild: true, children: (0, import_jsx_runtime13.jsx)(IconButton, { autoFocus: true, type: "button", "aria-label": "Close", children: (0, import_jsx_runtime13.jsx)(Cross2Icon, { width: iconSize.md, height: iconSize.md, style: {
    color: "inherit"
  } }) }) }) })] }) }) })] })] });
};
var CrossContainer = StyledDiv({
  position: "absolute",
  top: spacing.lg,
  right: spacing.lg,
  transform: "translateX(6px)"
});
var modalAnimationDesktop = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
var modalAnimationMobile = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 50%);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
var DialogContent2 = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    zIndex: 1e4,
    background: theme.colors.modalBg,
    "--bg": theme.colors.modalBg,
    color: theme.colors.primaryText,
    borderRadius: radius.lg,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100vw - 40px)",
    boxSizing: "border-box",
    animation: `${modalAnimationDesktop} 300ms ease`,
    boxShadow: shadow.lg,
    lineHeight: "normal",
    border: `1px solid ${theme.colors.borderColor}`,
    outline: "none",
    overflow: "hidden",
    fontFamily: theme.fontFamily,
    "& *": {
      boxSizing: "border-box"
    },
    [media.mobile]: {
      top: "auto",
      bottom: 0,
      left: 0,
      right: 0,
      transform: "none",
      width: "100vw",
      animation: `${modalAnimationMobile} 0.35s cubic-bezier(0.15, 1.15, 0.6, 1)`,
      borderRadius: radius.xl,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      maxWidth: "none !important"
    },
    "& *::selection": {
      backgroundColor: theme.colors.selectedTextBg,
      color: theme.colors.selectedTextColor
    },
    ...noScrollBar
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Details.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var import_react38 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveWalletChain.js
var import_react11 = __toESM(require_react(), 1);
function useActiveWalletChain() {
  const manager = useConnectionManagerCtx("useActiveWalletChain");
  const store = manager.activeWalletChainStore;
  return (0, import_react11.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useConnectedWallets.js
var import_react12 = __toESM(require_react(), 1);
function useConnectedWallets() {
  const manager = useConnectionManagerCtx("useConnectedWallets");
  const store = manager.connectedWallets;
  return (0, import_react12.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useAdminWallet.js
function useAdminWallet() {
  var _a;
  const activeWallet = useActiveWallet();
  const connectedWallets = useConnectedWallets();
  const adminAccount = (_a = activeWallet == null ? void 0 : activeWallet.getAdminAccount) == null ? void 0 : _a.call(activeWallet);
  if (!adminAccount) {
    return activeWallet;
  }
  return connectedWallets.find((wallet) => {
    var _a2, _b, _c;
    return ((_b = (_a2 = wallet.getAccount()) == null ? void 0 : _a2.address) == null ? void 0 : _b.toLowerCase()) === ((_c = adminAccount == null ? void 0 : adminAccount.address) == null ? void 0 : _c.toLowerCase());
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useDisconnect.js
function useDisconnect() {
  const manager = useConnectionManagerCtx("useDisconnect");
  const disconnect = manager.disconnectWallet;
  return { disconnect };
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSwitchActiveWalletChain.js
function useSwitchActiveWalletChain() {
  const manager = useConnectionManagerCtx("useSwitchActiveWalletChain");
  return manager.switchActiveWalletChain;
}

// node_modules/thirdweb/dist/esm/react/core/providers/RootElementContext.js
var import_react13 = __toESM(require_react(), 1);
var SetRootElementContext = (0, import_react13.createContext)(() => {
});

// node_modules/thirdweb/dist/esm/pay/convert/get-token.js
async function getToken(client, tokenAddress, chainId) {
  return withCache(async () => {
    const result = await tokens({
      chainId,
      client,
      tokenAddress
    });
    const token = result[0];
    if (!token) {
      const tokenResult = await add({
        chainId,
        client,
        tokenAddress
      }).catch(() => {
        throw new Error("Token not supported");
      });
      return tokenResult;
    }
    return token;
  }, {
    cacheKey: `get-token-price-${tokenAddress}-${chainId}`,
    cacheTime: 1e3 * 60
    // 1 minute
  });
}

// node_modules/thirdweb/dist/esm/pay/convert/cryptoToFiat.js
async function convertCryptoToFiat(options) {
  const { client, fromTokenAddress, chain, fromAmount } = options;
  if (Number(fromAmount) === 0) {
    return { result: 0 };
  }
  if (chain.testnet === true) {
    throw new Error(`Cannot fetch price for a testnet (chainId: ${chain.id})`);
  }
  if (!isAddress(fromTokenAddress)) {
    throw new Error("Invalid fromTokenAddress. Expected a valid EVM contract address");
  }
  const token = await getToken(client, fromTokenAddress, chain.id);
  if (token.priceUsd === 0) {
    throw new Error(`Error: Failed to fetch price for token ${fromTokenAddress} on chainId: ${chain.id}`);
  }
  return { result: token.priceUsd * fromAmount };
}

// node_modules/thirdweb/dist/esm/pay/convert/type.js
function getFiatSymbol(showBalanceInFiat) {
  switch (showBalanceInFiat) {
    case "USD":
      return "$";
    case "CAD":
      return "$";
    case "GBP":
      return "£";
    case "EUR":
      return "€";
    case "JPY":
      return "¥";
    case "AUD":
      return "$";
    case "NZD":
      return "$";
    default:
      return "$";
  }
}

// node_modules/thirdweb/dist/esm/utils/shortenLargeNumber.js
function shortenLargeNumber(value) {
  if (value === 0) {
    return "0.00";
  }
  if (value < 1e3) {
    return value.toString();
  }
  if (value < 1e4) {
    return value.toLocaleString("en-US");
  }
  if (value < 1e6) {
    return formatLargeNumber(value, 1e3, "k");
  }
  if (value < 1e9) {
    return formatLargeNumber(value, 1e6, "M");
  }
  return formatLargeNumber(value, 1e9, "B");
}
function formatLargeNumber(value, divisor, suffix) {
  const quotient = value / divisor;
  if (Number.isInteger(quotient)) {
    return Math.floor(quotient) + suffix;
  }
  return quotient.toFixed(1).replace(/\.0$/, "") + suffix;
}

// node_modules/thirdweb/dist/esm/react/core/utils/account.js
var COLOR_OPTIONS = [
  ["#fca5a5", "#b91c1c"],
  ["#fdba74", "#c2410c"],
  ["#fcd34d", "#b45309"],
  ["#fde047", "#a16207"],
  ["#a3e635", "#4d7c0f"],
  ["#86efac", "#15803d"],
  ["#67e8f9", "#0e7490"],
  ["#7dd3fc", "#0369a1"],
  ["#93c5fd", "#1d4ed8"],
  ["#a5b4fc", "#4338ca"],
  ["#c4b5fd", "#6d28d9"],
  ["#d8b4fe", "#7e22ce"],
  ["#f0abfc", "#a21caf"],
  ["#f9a8d4", "#be185d"],
  ["#fda4af", "#be123c"]
];
async function loadAccountBalance(props) {
  const { chain, client, address, tokenAddress, showBalanceInFiat } = props;
  if (!chain) {
    throw new Error("chain is required");
  }
  if (tokenAddress && (tokenAddress == null ? void 0 : tokenAddress.toLowerCase()) === NATIVE_TOKEN_ADDRESS.toLowerCase()) {
    throw new Error(`Invalid tokenAddress - cannot be ${NATIVE_TOKEN_ADDRESS}`);
  }
  if (!isAddress(address)) {
    throw new Error("Invalid wallet address. Expected an EVM address");
  }
  if (tokenAddress && !isAddress(tokenAddress)) {
    throw new Error("Invalid tokenAddress. Expected an EVM contract address");
  }
  const tokenBalanceData = await getWalletBalance({
    address,
    chain,
    client,
    tokenAddress
  }).catch(() => void 0);
  if (!tokenBalanceData) {
    throw new Error(`Failed to retrieve ${tokenAddress ? `token: ${tokenAddress}` : "native token"} balance for address: ${address} on chainId:${chain.id}`);
  }
  if (showBalanceInFiat) {
    const fiatData = await convertCryptoToFiat({
      chain,
      client,
      fromAmount: Number(tokenBalanceData.displayValue),
      fromTokenAddress: tokenAddress || NATIVE_TOKEN_ADDRESS,
      to: showBalanceInFiat
    }).catch(() => void 0);
    if (fiatData === void 0) {
      throw new Error(`Failed to resolve fiat value for ${tokenAddress ? `token: ${tokenAddress}` : "native token"} on chainId: ${chain.id}`);
    }
    const result = {
      balance: fiatData == null ? void 0 : fiatData.result,
      symbol: getFiatSymbol(showBalanceInFiat)
    };
    return result;
  }
  return {
    balance: Number(tokenBalanceData.displayValue),
    symbol: tokenBalanceData.symbol
  };
}
function formatAccountTokenBalance(props) {
  const formattedTokenBalance = formatNumber(props.balance, props.decimals);
  return `${formattedTokenBalance} ${props.symbol}`;
}
function formatAccountFiatBalance(props) {
  const num = formatNumber(props.balance, props.decimals);
  const formattedFiatBalance = shortenLargeNumber(num);
  return `${props.symbol}${formattedFiatBalance}`;
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/ChainActiveDot.js
var ChainActiveDot = StyledDiv({
  backgroundColor: "#00d395",
  borderRadius: "50%",
  bottom: 0,
  boxShadow: "0 0 0 2px var(--bg)",
  height: "28%",
  position: "absolute",
  right: 0,
  width: "28%"
});

// node_modules/thirdweb/dist/esm/react/web/ui/components/CopyIcon.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/hooks/useCopyClipboard.js
var import_react14 = __toESM(require_react(), 1);
function useClipboard(text) {
  const [hasCopied, setHasCopied] = (0, import_react14.useState)(false);
  const onCopy = (0, import_react14.useCallback)(async () => {
    await navigator.clipboard.writeText(text);
    setHasCopied(true);
  }, [text]);
  (0, import_react14.useEffect)(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, 1500);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [hasCopied]);
  return { hasCopied, onCopy };
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/Tooltip.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var React33 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-popper/dist/index.mjs
var React31 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => d.overflows[0] > 0 && getSideAxis(d.placement) === initialSideAxis)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode2(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode2(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode2(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
var containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@radix-ui/react-popper/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React28 = __toESM(require_react(), 1);
var import_react15 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);
var isClient = typeof document !== "undefined";
var noop = function noop2() {
};
var index = isClient ? import_react15.useLayoutEffect : noop;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React28.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React28.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React28.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React28.useState(null);
  const [_floating, _setFloating] = React28.useState(null);
  const setReference = React28.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React28.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React28.useRef(null);
  const floatingRef = React28.useRef(null);
  const dataRef = React28.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React28.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM3.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React28.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React28.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React28.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React28.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React28.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// node_modules/@radix-ui/react-arrow/dist/index.mjs
var React29 = __toESM(require_react(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var NAME = "Arrow";
var Arrow = React29.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return (0, import_jsx_runtime14.jsx)(
    Primitive.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props.asChild ? children : (0, import_jsx_runtime14.jsx)("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow.displayName = NAME;
var Root2 = Arrow;

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var React30 = __toESM(require_react(), 1);
function useSize(element) {
  const [size4, setSize] = React30.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size4;
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React31.useState(null);
  return (0, import_jsx_runtime15.jsx)(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = React31.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React31.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React31.useEffect(() => {
      context.onAnchorChange((virtualRef == null ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : (0, import_jsx_runtime15.jsx)(Primitive.div, { ...anchorProps, ref: composedRefs });
  }
);
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME2 = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME2);
var PopperContent = React31.forwardRef(
  (props, forwardedRef) => {
    var _a, _b, _c, _d, _e, _f;
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME2, __scopePopper);
    const [content, setContent] = React31.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [arrow4, setArrow] = React31.useState(null);
    const arrowSize = useSize(arrow4);
    const arrowWidth = (arrowSize == null ? void 0 : arrowSize.width) ?? 0;
    const arrowHeight = (arrowSize == null ? void 0 : arrowSize.height) ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift3({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift3() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip3({ ...detectOverflowOptions }),
        size3({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
      ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced == null ? void 0 : handlePlaced();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = (_a = middlewareData.arrow) == null ? void 0 : _a.x;
    const arrowY = (_b = middlewareData.arrow) == null ? void 0 : _b.y;
    const cannotCenterArrow = ((_c = middlewareData.arrow) == null ? void 0 : _c.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = React31.useState();
    useLayoutEffect2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return (0, import_jsx_runtime15.jsx)(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          ["--radix-popper-transform-origin"]: [
            (_d = middlewareData.transformOrigin) == null ? void 0 : _d.x,
            (_e = middlewareData.transformOrigin) == null ? void 0 : _e.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((_f = middlewareData.hide) == null ? void 0 : _f.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: (0, import_jsx_runtime15.jsx)(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: (0, import_jsx_runtime15.jsx)(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: !isPositioned ? "none" : void 0
                }
              }
            )
          }
        )
      }
    );
  }
);
PopperContent.displayName = CONTENT_NAME2;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React31.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0, import_jsx_runtime15.jsx)(
      "span",
      {
        ref: contentContext.onArrowChange,
        style: {
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: (0, import_jsx_runtime15.jsx)(
          Root2,
          {
            ...arrowProps,
            ref: forwardedRef,
            style: {
              ...arrowProps.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _a, _b, _c;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_a = middlewareData.arrow) == null ? void 0 : _a.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (((_b = middlewareData.arrow) == null ? void 0 : _b.x) ?? 0) + arrowWidth / 2;
    const arrowYCenter = (((_c = middlewareData.arrow) == null ? void 0 : _c.y) ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root22 = Popper;
var Anchor = PopperAnchor;
var Content2 = PopperContent;
var Arrow2 = PopperArrow;

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var React32 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var VISUALLY_HIDDEN_STYLES = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
});
var NAME2 = "VisuallyHidden";
var VisuallyHidden = React32.forwardRef(
  (props, forwardedRef) => {
    return (0, import_jsx_runtime16.jsx)(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: { ...VISUALLY_HIDDEN_STYLES, ...props.style }
      }
    );
  }
);
VisuallyHidden.displayName = NAME2;
var Root3 = VisuallyHidden;

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const isOpenDelayedRef = React33.useRef(true);
  const isPointerInTransitRef = React33.useRef(false);
  const skipDelayTimerRef = React33.useRef(0);
  React33.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return (0, import_jsx_runtime17.jsx)(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayedRef,
      delayDuration,
      onOpen: React33.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        isOpenDelayedRef.current = false;
      }, []),
      onClose: React33.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => isOpenDelayedRef.current = true,
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: React33.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = React33.useState(null);
  const contentId = useId();
  const openTimerRef = React33.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = React33.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: (open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange == null ? void 0 : onOpenChange(open2);
    },
    caller: TOOLTIP_NAME
  });
  const stateAttribute = React33.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = React33.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = React33.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = React33.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
      openTimerRef.current = 0;
    }, delayDuration);
  }, [delayDuration, setOpen]);
  React33.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    };
  }, []);
  return (0, import_jsx_runtime17.jsx)(Root22, { ...popperScope, children: (0, import_jsx_runtime17.jsx)(
    TooltipContextProvider,
    {
      scope: __scopeTooltip,
      contentId,
      open,
      stateAttribute,
      trigger,
      onTriggerChange: setTrigger,
      onTriggerEnter: React33.useCallback(() => {
        if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
        else handleOpen();
      }, [providerContext.isOpenDelayedRef, handleDelayedOpen, handleOpen]),
      onTriggerLeave: React33.useCallback(() => {
        if (disableHoverableContent) {
          handleClose();
        } else {
          window.clearTimeout(openTimerRef.current);
          openTimerRef.current = 0;
        }
      }, [handleClose, disableHoverableContent]),
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      children
    }
  ) });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME2 = "TooltipTrigger";
var TooltipTrigger = React33.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME2, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME2, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = React33.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = React33.useRef(false);
    const hasPointerMoveOpenedRef = React33.useRef(false);
    const handlePointerUp = React33.useCallback(() => isPointerDownRef.current = false, []);
    React33.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return (0, import_jsx_runtime17.jsx)(Anchor, { asChild: true, ...popperScope, children: (0, import_jsx_runtime17.jsx)(
      Primitive.button,
      {
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute,
        ...triggerProps,
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          if (event.pointerType === "touch") return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, () => {
          if (context.open) {
            context.onClose();
          }
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props.onFocus, () => {
          if (!isPointerDownRef.current) context.onOpen();
        }),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onClick: composeEventHandlers(props.onClick, context.onClose)
      }
    ) });
  }
);
TooltipTrigger.displayName = TRIGGER_NAME2;
var PORTAL_NAME3 = "TooltipPortal";
var [PortalProvider2, usePortalContext2] = createTooltipContext(PORTAL_NAME3, {
  forceMount: void 0
});
var TooltipPortal = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = useTooltipContext(PORTAL_NAME3, __scopeTooltip);
  return (0, import_jsx_runtime17.jsx)(PortalProvider2, { scope: __scopeTooltip, forceMount, children: (0, import_jsx_runtime17.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime17.jsx)(Portal, { asChild: true, container, children }) }) });
};
TooltipPortal.displayName = PORTAL_NAME3;
var CONTENT_NAME3 = "TooltipContent";
var TooltipContent = React33.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext2(CONTENT_NAME3, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME3, props.__scopeTooltip);
    return (0, import_jsx_runtime17.jsx)(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? (0, import_jsx_runtime17.jsx)(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime17.jsx)(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
  }
);
var TooltipContentHoverable = React33.forwardRef((props, forwardedRef) => {
  const context = useTooltipContext(CONTENT_NAME3, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME3, props.__scopeTooltip);
  const ref = React33.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = React33.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = React33.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = React33.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  React33.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  React33.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  React33.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = (trigger == null ? void 0 : trigger.contains(target)) || (content == null ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return (0, import_jsx_runtime17.jsx)(TooltipContentImpl, { ...props, ref: composedRefs });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var Slottable2 = createSlottable("TooltipContent");
var TooltipContentImpl = React33.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      onEscapeKeyDown,
      onPointerDownOutside,
      ...contentProps
    } = props;
    const context = useTooltipContext(CONTENT_NAME3, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    React33.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    React33.useEffect(() => {
      if (context.trigger) {
        const handleScroll2 = (event) => {
          const target = event.target;
          if (target == null ? void 0 : target.contains(context.trigger)) onClose();
        };
        window.addEventListener("scroll", handleScroll2, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll2, { capture: true });
      }
    }, [context.trigger, onClose]);
    return (0, import_jsx_runtime17.jsx)(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: (0, import_jsx_runtime17.jsxs)(
          Content2,
          {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
              ...contentProps.style,
              // re-namespace exposed content custom properties
              ...{
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              }
            },
            children: [
              (0, import_jsx_runtime17.jsx)(Slottable2, { children }),
              (0, import_jsx_runtime17.jsx)(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: (0, import_jsx_runtime17.jsx)(Root3, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
            ]
          }
        )
      }
    );
  }
);
TooltipContent.displayName = CONTENT_NAME3;
var ARROW_NAME2 = "TooltipArrow";
var TooltipArrow = React33.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(
      ARROW_NAME2,
      __scopeTooltip
    );
    return visuallyHiddenContentContext.isInside ? null : (0, import_jsx_runtime17.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
TooltipArrow.displayName = ARROW_NAME2;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon2) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon2.length - 1; i < polygon2.length; j = i++) {
    const ii = polygon2[i];
    const jj = polygon2[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Provider = TooltipProvider;
var Root32 = Tooltip;
var Trigger2 = TooltipTrigger;
var Portal3 = TooltipPortal;
var Content22 = TooltipContent;
var Arrow22 = TooltipArrow;

// node_modules/thirdweb/dist/esm/react/web/ui/components/Tooltip.js
var ToolTip = (props) => {
  return (0, import_jsx_runtime18.jsx)(Provider, { delayDuration: 200, children: (0, import_jsx_runtime18.jsxs)(Root32, { children: [(0, import_jsx_runtime18.jsx)(Trigger2, { asChild: true, children: props.children }), (0, import_jsx_runtime18.jsx)(Portal3, { children: (0, import_jsx_runtime18.jsxs)(TooltipContent2, { align: props.align || "center", side: props.side || "top", sideOffset: props.sideOffset || 6, children: [props.tip, (0, import_jsx_runtime18.jsx)(TooltipArrow2, {})] }) })] }) });
};
var slideUpAndFade = keyframes`
from {
  opacity: 0;
  transform: translateY(2px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;
var TooltipContent2 = (() => newStyled(Content22)((_) => {
  const theme = useCustomTheme();
  return {
    animation: `${slideUpAndFade} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
    background: theme.colors.tooltipBg,
    borderRadius: radius.sm,
    boxShadow: shadow.sm,
    color: theme.colors.tooltipText,
    fontSize: fontSize.sm,
    lineHeight: 1.5,
    maxWidth: "300px",
    padding: `${spacing.xs} ${spacing.sm}`,
    userSelect: "none",
    willChange: "transform, opacity",
    zIndex: 999999999999999
  };
}))();
var TooltipArrow2 = (() => newStyled(Arrow22)(() => {
  const theme = useCustomTheme();
  return {
    fill: theme.colors.tooltipBg
  };
}))();

// node_modules/thirdweb/dist/esm/react/web/ui/components/CopyIcon.js
var CopyIcon2 = (props) => {
  const { hasCopied, onCopy } = useClipboard(props.text);
  const showCheckIcon = props.hasCopied || hasCopied;
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: TODO
    (0, import_jsx_runtime19.jsx)("div", { onClick: onCopy, onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        onCopy();
      }
    }, style: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    }, children: (0, import_jsx_runtime19.jsx)(ToolTip, { align: props.align, side: props.side, tip: props.tip, children: (0, import_jsx_runtime19.jsx)("div", { children: (0, import_jsx_runtime19.jsx)(Container, { center: "both", color: showCheckIcon ? "success" : void 0, flex: "row", children: showCheckIcon ? (0, import_jsx_runtime19.jsx)(CheckIcon, { className: "tw-check-icon" }) : (0, import_jsx_runtime19.jsx)(CopyIcon, { className: "tw-copy-icon" }) }) }) }) })
  );
};

// node_modules/thirdweb/dist/esm/react/web/ui/components/fallbackChainIcon.js
var fallbackChainIcon = "data:image/svg+xml;charset=UTF-8,%3csvg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 8.04238e-07C5.1435 8.04238e-07 3.36301 0.737501 2.05025 2.05025C0.7375 3.36301 0 5.1435 0 7C0 7.225 -1.52737e-07 7.445 0.0349998 7.665C0.16385 9.0151 0.68213 10.2988 1.52686 11.3598C2.37158 12.4209 3.50637 13.2137 4.79326 13.642C6.0801 14.0702 7.4637 14.1153 8.7758 13.7719C10.0879 13.4285 11.2719 12.7113 12.184 11.7075C13.0961 10.7038 13.6969 9.4567 13.9135 8.1178C14.1301 6.7789 13.9531 5.406 13.4039 4.16587C12.8548 2.92574 11.9573 1.87184 10.8204 1.13228C9.6835 0.392721 8.3563 -0.000649196 7 8.04238e-07ZM7 1C8.581 1.00137 10.0975 1.62668 11.22 2.74V3.24C9.2438 2.55991 7.0956 2.56872 5.125 3.265C4.96758 3.1116 4.76997 3.00586 4.555 2.96H4.43C4.37 2.75 4.315 2.54 4.27 2.325C4.225 2.11 4.2 1.92 4.175 1.715C5.043 1.24658 6.0137 1.00091 7 1ZM5.5 3.935C7.3158 3.32693 9.2838 3.34984 11.085 4C10.8414 5.2703 10.3094 6.4677 9.53 7.5C9.312 7.4077 9.0707 7.3855 8.8395 7.4366C8.6083 7.4877 8.3988 7.6094 8.24 7.785C8.065 7.685 7.89 7.585 7.74 7.47C6.7307 6.7966 5.8877 5.9023 5.275 4.855C5.374 4.73221 5.4461 4.58996 5.4866 4.43749C5.5271 4.28502 5.5351 4.12575 5.51 3.97L5.5 3.935ZM3.5 2.135C3.5 2.24 3.53 2.35 3.55 2.455C3.595 2.675 3.655 2.89 3.715 3.105C3.52353 3.21838 3.36943 3.38531 3.2717 3.58522C3.17397 3.78513 3.13688 4.00927 3.165 4.23C2.37575 4.7454 1.67078 5.3795 1.075 6.11C1.19455 5.3189 1.47112 4.55966 1.88843 3.87701C2.30575 3.19437 2.85539 2.60208 3.505 2.135H3.5ZM3.5 9.99C3.30481 10.0555 3.13037 10.1714 2.9943 10.3259C2.85822 10.4804 2.76533 10.6681 2.725 10.87H2.405C1.59754 9.9069 1.1146 8.7136 1.025 7.46L1.08 7.365C1.70611 6.3942 2.52463 5.562 3.485 4.92C3.62899 5.0704 3.81094 5.179 4.01162 5.2345C4.2123 5.2899 4.42423 5.2901 4.625 5.235C5.2938 6.3652 6.208 7.3306 7.3 8.06C7.505 8.195 7.715 8.32 7.925 8.44C7.9082 8.6312 7.9391 8.8237 8.015 9C7.1 9.7266 6.0445 10.256 4.915 10.555C4.78401 10.3103 4.57028 10.1201 4.31199 10.0184C4.05369 9.9167 3.76766 9.9102 3.505 10L3.5 9.99ZM7 12.99C5.9831 12.9903 4.98307 12.7304 4.095 12.235L4.235 12.205C4.43397 12.1397 4.61176 12.0222 4.74984 11.8648C4.88792 11.7074 4.98122 11.5158 5.02 11.31C6.2985 10.984 7.4921 10.3872 8.52 9.56C8.7642 9.7027 9.0525 9.75 9.3295 9.6927C9.6064 9.6355 9.8524 9.4778 10.02 9.25C10.7254 9.4334 11.4511 9.5275 12.18 9.53H12.445C11.9626 10.5673 11.1938 11.4451 10.2291 12.0599C9.2643 12.6747 8.144 13.0009 7 13V12.99ZM10.255 8.54C10.2545 8.3304 10.1975 8.1249 10.09 7.945C10.9221 6.8581 11.5012 5.5991 11.785 4.26C12.035 4.37667 12.2817 4.50667 12.525 4.65C13.0749 5.9495 13.1493 7.4012 12.735 8.75C11.9049 8.8142 11.0698 8.7484 10.26 8.555L10.255 8.54Z' fill='%23646D7A'/%3e%3c/svg%3e";

// node_modules/thirdweb/dist/esm/react/web/ui/components/IconContainer.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var IconContainer = (props) => {
  const theme = useCustomTheme();
  return (0, import_jsx_runtime20.jsx)("div", { style: {
    alignItems: "center",
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: "100%",
    display: "flex",
    flexShrink: 0,
    justifyItems: "center",
    overflow: "hidden",
    padding: props.padding ?? "6px",
    position: "relative",
    ...props.style
  }, children: props.children });
};

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/address.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
function AccountAddress({ formatFn, ...restProps }) {
  const { address } = useAccountContext();
  const value = formatFn ? formatFn(address) : address;
  return (0, import_jsx_runtime21.jsx)("span", { ...restProps, children: value });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/avatar.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
function AccountAvatar({ socialType, resolverAddress, resolverChain, loadingComponent, fallbackComponent, queryOptions, ...restProps }) {
  const { address, client } = useAccountContext();
  const avatarQuery = useQuery({
    queryFn: async () => {
      var _a;
      const [socialData, ensName] = await Promise.all([
        getSocialProfiles({ address, client }),
        resolveName({
          address: address || "",
          client,
          resolverAddress,
          resolverChain
        })
      ]);
      const uri = (_a = socialData == null ? void 0 : socialData.filter((p) => p.avatar && (socialType ? p.type === socialType : true))[0]) == null ? void 0 : _a.avatar;
      const [resolvedSocialAvatar, resolvedENSAvatar] = await Promise.all([
        uri ? parseAvatarRecord({ client, uri }) : void 0,
        ensName ? resolveAvatar({
          client,
          name: ensName
        }) : void 0
      ]);
      if (!resolvedSocialAvatar && !resolvedENSAvatar) {
        throw new Error("Failed to resolve social + ens avatar");
      }
      if (resolvedSocialAvatar) {
        return resolvedSocialAvatar;
      }
      if (resolvedENSAvatar) {
        return resolvedENSAvatar;
      }
      throw new Error("Failed to resolve social + ens avatar");
    },
    queryKey: [
      "account-avatar",
      address,
      { socialType },
      { resolverAddress, resolverChain }
    ],
    retry: false,
    ...queryOptions
  });
  if (avatarQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!avatarQuery.data) {
    return fallbackComponent || null;
  }
  return (0, import_jsx_runtime22.jsx)("img", { src: avatarQuery.data, ...restProps, alt: restProps.alt });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/balance.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
function AccountBalance({ chain, tokenAddress, loadingComponent, fallbackComponent, queryOptions, formatFn, showBalanceInFiat, ...restProps }) {
  const { address, client } = useAccountContext();
  const walletChain = useActiveWalletChain();
  const chainToLoad = chain || walletChain;
  const balanceQuery = useQuery({
    queryFn: async () => loadAccountBalance({
      address: getAddress(address),
      chain: chainToLoad,
      client,
      showBalanceInFiat,
      tokenAddress: tokenAddress ? getAddress(tokenAddress) : void 0
    }),
    queryKey: [
      "internal_account_balance",
      (chainToLoad == null ? void 0 : chainToLoad.id) || -1,
      address,
      { tokenAddress },
      showBalanceInFiat
    ],
    retry: false,
    ...queryOptions
  });
  if (balanceQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!balanceQuery.data) {
    return fallbackComponent || null;
  }
  if (formatFn) {
    return (0, import_jsx_runtime23.jsx)("span", { ...restProps, children: formatFn(balanceQuery.data) });
  }
  if (showBalanceInFiat) {
    return (0, import_jsx_runtime23.jsx)("span", { ...restProps, children: formatAccountFiatBalance({ ...balanceQuery.data, decimals: 0 }) });
  }
  return (0, import_jsx_runtime23.jsx)("span", { ...restProps, children: formatAccountTokenBalance({
    ...balanceQuery.data,
    decimals: balanceQuery.data.balance < 1 ? 3 : 2
  }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/blobbie.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Blobbie.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react17 = __toESM(require_react(), 1);
function Blobbie(props) {
  const id = (0, import_react17.useId)();
  const colors = (0, import_react17.useMemo)(() => COLOR_OPTIONS[Number(hexToNumber(props.address.slice(2, 4))) % COLOR_OPTIONS.length], [props.address]);
  return (0, import_jsx_runtime24.jsx)("div", { className: props.className, id, style: {
    ...props.style,
    backgroundImage: `radial-gradient(ellipse at left bottom, ${colors[0]}, ${colors[1]})`,
    ...props.size ? {
      height: `${props.size}px`,
      width: `${props.size}px`
    } : void 0
  } });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/blobbie.js
function AccountBlobbie(props) {
  const { address } = useAccountContext();
  return (0, import_jsx_runtime25.jsx)(Blobbie, { ...props, address });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Account/name.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
function AccountName({ resolverAddress, resolverChain, socialType, formatFn, queryOptions, loadingComponent, fallbackComponent, ...restProps }) {
  const { address, client } = useAccountContext();
  const nameQuery = useQuery({
    queryFn: async () => {
      var _a;
      const [socialData, ensName] = await Promise.all([
        getSocialProfiles({ address, client }),
        resolveName({
          address,
          client,
          resolverAddress,
          resolverChain
        })
      ]);
      const name = ((_a = socialData == null ? void 0 : socialData.filter((p) => p.name && (socialType ? p.type === socialType : true))[0]) == null ? void 0 : _a.name) || ensName;
      if (!name) {
        throw new Error("Failed to resolve account name");
      }
      return formatFn ? formatFn(name) : name;
    },
    queryKey: [
      "account-name",
      address,
      { socialType },
      { resolverAddress, resolverChain }
    ],
    retry: false,
    ...queryOptions
  });
  if (nameQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!nameQuery.data) {
    return fallbackComponent || null;
  }
  return (0, import_jsx_runtime26.jsx)("span", { ...restProps, children: nameQuery.data });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Chain/icon.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/utils/function-id.js
var functionIdCache = /* @__PURE__ */ new Map();
function getFunctionId(fn) {
  if (functionIdCache.has(fn)) {
    return functionIdCache.get(fn);
  }
  const id = randomBytesHex();
  functionIdCache.set(fn, id);
  return id;
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Chain/provider.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var import_react18 = __toESM(require_react(), 1);
var ChainProviderContext = (0, import_react18.createContext)(void 0);
function ChainProvider(props) {
  return (0, import_jsx_runtime27.jsx)(ChainProviderContext.Provider, { value: props, children: props.children });
}
function useChainContext() {
  const ctx = (0, import_react18.useContext)(ChainProviderContext);
  if (!ctx) {
    throw new Error("ChainProviderContext not found. Make sure you are using ChainName, ChainIcon, etc. inside a <ChainProvider /> component");
  }
  return ctx;
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Chain/icon.js
function ChainIcon({ iconResolver, loadingComponent, fallbackComponent, queryOptions, client, ...restProps }) {
  const { chain } = useChainContext();
  const iconQuery = useQuery({
    queryFn: async () => fetchChainIcon({ chain, client, iconResolver }),
    queryKey: getQueryKeys({ chainId: chain.id, iconResolver }),
    ...queryOptions
  });
  if (iconQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!iconQuery.data) {
    return fallbackComponent || null;
  }
  return (0, import_jsx_runtime28.jsx)("img", { src: iconQuery.data, ...restProps, alt: restProps.alt });
}
async function fetchChainIcon(props) {
  var _a;
  const { chain, client, iconResolver } = props;
  if (typeof iconResolver === "string") {
    return iconResolver;
  }
  if (typeof iconResolver === "function") {
    return iconResolver();
  }
  if ((_a = chain.icon) == null ? void 0 : _a.url) {
    return resolveScheme({ client, uri: chain.icon.url });
  }
  const possibleUrl = await getChainMetadata(chain).then((data) => {
    var _a2;
    return (_a2 = data.icon) == null ? void 0 : _a2.url;
  }).catch(() => void 0);
  if (!possibleUrl) {
    throw new Error("Failed to resolve icon for chain");
  }
  return resolveScheme({ client, uri: possibleUrl });
}
function getQueryKeys(props) {
  const { chainId, iconResolver } = props;
  return [
    "_internal_chain_icon_",
    chainId,
    {
      resolver: typeof iconResolver === "string" ? iconResolver : typeof iconResolver === "function" ? getFunctionId(iconResolver) : void 0
    }
  ];
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Chain/name.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
function ChainName2({ nameResolver, formatFn, loadingComponent, fallbackComponent, queryOptions, ...restProps }) {
  const { chain } = useChainContext();
  const nameQuery = useQuery({
    queryFn: async () => fetchChainName({ chain, nameResolver }),
    queryKey: getQueryKeys2({ chainId: chain.id, nameResolver }),
    ...queryOptions
  });
  if (nameQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!nameQuery.data) {
    return fallbackComponent || null;
  }
  const displayValue = formatFn ? formatFn(nameQuery.data) : nameQuery.data;
  return (0, import_jsx_runtime29.jsx)("span", { ...restProps, children: displayValue });
}
async function fetchChainName(props) {
  const { nameResolver, chain } = props;
  if (typeof nameResolver === "string") {
    return nameResolver;
  }
  if (typeof nameResolver === "function") {
    return nameResolver();
  }
  if (chain.name) {
    return chain.name;
  }
  return getChainMetadata(chain).then((data) => data.name);
}
function getQueryKeys2(props) {
  if (typeof props.nameResolver === "function") {
    return [
      "_internal_chain_name_",
      props.chainId,
      { resolver: getFunctionId(props.nameResolver) }
    ];
  }
  return ["_internal_chain_name_", props.chainId];
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/CoinsIcon.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var CoinsIcon = (props) => {
  return (0, import_jsx_runtime30.jsxs)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 24 24", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime30.jsx)("path", { d: "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }), (0, import_jsx_runtime30.jsx)("path", { d: "M18.0901 10.37C19.0354 10.7224 19.8766 11.3075 20.5358 12.0712C21.1951 12.8349 21.6512 13.7524 21.8618 14.7391C22.0725 15.7257 22.031 16.7495 21.7411 17.7158C21.4513 18.6822 20.9224 19.5598 20.2035 20.2676C19.4846 20.9754 18.5988 21.4905 17.6281 21.7652C16.6573 22.04 15.633 22.0655 14.6498 21.8395C13.6666 21.6134 12.7562 21.1431 12.0029 20.472C11.2496 19.8009 10.6777 18.9507 10.3401 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }), (0, import_jsx_runtime30.jsx)("path", { d: "M7 6H8V10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }), (0, import_jsx_runtime30.jsx)("path", { d: "M16.7101 13.88L17.4101 14.59L14.5901 17.41", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/FundsIcon.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var FundsIcon = ({ size: size4 }) => {
  return (0, import_jsx_runtime31.jsxs)("svg", { fill: "none", height: size4, role: "presentation", viewBox: "0 0 16 16", width: size4, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime31.jsx)("path", { d: "M14.001 8.00048C14.001 9.18726 13.649 10.3474 12.9897 11.3342C12.3304 12.3209 11.3932 13.09 10.2968 13.5442C9.20032 13.9984 7.99382 14.1172 6.82984 13.8857C5.66587 13.6541 4.59668 13.0826 3.7575 12.2435C2.91832 11.4043 2.34683 10.3351 2.1153 9.17111C1.88377 8.00713 2.0026 6.80064 2.45676 5.70419C2.91092 4.60775 3.68002 3.6706 4.66679 3.01126C5.65357 2.35192 6.8137 2 8.00048 2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2001" }), (0, import_jsx_runtime31.jsx)("path", { d: "M14.0005 2L8 8.00048", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2001" }), (0, import_jsx_runtime31.jsx)("path", { d: "M10.3984 2H13.9987V5.60029", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2001" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/locale/getConnectLocale.js
async function getConnectLocale(localeId) {
  switch (localeId) {
    case "es_ES": {
      return (await import("./es-HCHSVIDI.js")).default;
    }
    case "ja_JP": {
      return (await import("./ja-KTRRWVSP.js")).default;
    }
    case "tl_PH": {
      return (await import("./tl-LGJOC3OD.js")).default;
    }
    case "vi_VN": {
      return (await import("./vi-KWBYOO2M.js")).default;
    }
    case "de_DE": {
      return (await import("./de-NXG2XTYO.js")).default;
    }
    case "ko_KR": {
      return (await import("./kr-DZUS3HQG.js")).default;
    }
    case "fr_FR": {
      return (await import("./fr-BPDKE726.js")).default;
    }
    case "ru_RU": {
      return (await import("./ru-YS6LWJOD.js")).default;
    }
    case "pt_BR": {
      return (await import("./br-UILKQOA5.js")).default;
    }
    default: {
      return (await import("./en-WVBFOYJH.js")).default;
    }
  }
}
function useConnectLocale(localeId) {
  return useQuery({
    queryFn: async () => {
      return getConnectLocale(localeId);
    },
    queryKey: ["connect-locale", localeId],
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/MenuButton.js
var MenuButton = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      backgroundColor: theme.colors.tertiaryBg,
      svg: {
        color: theme.colors.accentText
      }
    },
    "&[data-variant='danger']:hover svg": {
      color: `${theme.colors.danger}!important`
    },
    "&[data-variant='primary']:hover svg": {
      color: `${theme.colors.primaryText}!important`
    },
    "&[disabled]": {
      cursor: "not-allowed"
    },
    alignItems: "center",
    all: "unset",
    backgroundColor: "transparent",
    borderRadius: radius.md,
    // border: `1px solid ${theme.colors.borderColor}`,
    boxSizing: "border-box",
    color: theme.colors.secondaryText,
    cursor: "pointer",
    display: "flex",
    fontSize: fontSize.md,
    fontWeight: 500,
    gap: spacing.sm,
    lineHeight: 1.3,
    padding: `${spacing.sm} ${spacing.sm}`,
    svg: {
      color: theme.colors.secondaryText,
      transition: "color 200ms ease"
    },
    transition: "background-color 200ms ease, transform 200ms ease",
    WebkitTapHighlightColor: "transparent",
    width: "100%"
  };
});
var MenuLink = (() => MenuButton.withComponent("a"))();

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/NetworkSelector.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var import_react19 = __toESM(require_react(), 1);
function NetworkSelectorContent(props) {
  var _a, _b, _c, _d;
  const locale = props.connectLocale.networkSelector;
  const [searchTerm, setSearchTerm] = (0, import_react19.useState)("");
  const [selectedTab, setSelectedTab] = (0, import_react19.useState)("all");
  const deferredSearchTerm = useDebouncedValue(searchTerm, 300);
  const { onSwitch, onCustomClick } = props.networkSelector || {};
  const othersLabel = locale.categoryLabel.others;
  const popularLabel = locale.categoryLabel.popular;
  const recentLabel = locale.categoryLabel.recentlyUsed;
  const { chainSections, allChains, allChainsToSectionMap } = (0, import_react19.useMemo)(() => {
    var _a2, _b2, _c2, _d2;
    const chainSectionsValue = [];
    const allChainsValue = [];
    const allChainsToSectionMapValue = /* @__PURE__ */ new Map();
    function addChain(c, section) {
      allChainsToSectionMapValue.set(c.id, section);
      allChainsValue.push(c);
    }
    if ((_a2 = props.networkSelector) == null ? void 0 : _a2.sections) {
      for (const s of props.networkSelector.sections) {
        const chainsToAdd = s.chains.filter((c) => !allChainsToSectionMapValue.has(c.id));
        if (chainsToAdd.length > 0) {
          chainSectionsValue.push({
            chains: chainsToAdd,
            label: s.label
          });
          for (const c of chainsToAdd) {
            addChain(c, s.label);
          }
        }
      }
    } else {
      const allChainsMap = new Map(props.chains.map((c) => [c.id, c]));
      if (((_b2 = props.networkSelector) == null ? void 0 : _b2.recentChainIds) && ((_c2 = props.networkSelector) == null ? void 0 : _c2.recentChainIds.length) > 0) {
        const recentChains = props.networkSelector.recentChainIds.map((id) => allChainsMap.get(id)).filter((c) => c !== void 0);
        chainSectionsValue.push({
          chains: recentChains,
          label: recentLabel
        });
        for (const c of recentChains) {
          addChain(c, recentLabel);
        }
      }
      if (((_d2 = props.networkSelector) == null ? void 0 : _d2.popularChainIds) && props.networkSelector.popularChainIds.length > 0) {
        const popularChains = props.networkSelector.popularChainIds.map((id) => allChainsMap.get(id)).filter((c) => c !== void 0);
        const chainsToAdd = popularChains.filter((c) => !allChainsToSectionMapValue.has(c.id));
        if (chainsToAdd.length > 0) {
          chainSectionsValue.push({
            chains: chainsToAdd,
            label: popularLabel
          });
          for (const c of chainsToAdd) {
            addChain(c, popularLabel);
          }
        }
      }
    }
    const otherChainsToAdd = props.chains.filter((c) => !allChainsToSectionMapValue.has(c.id));
    if (otherChainsToAdd.length > 0) {
      chainSectionsValue.push({
        chains: otherChainsToAdd,
        label: othersLabel
      });
      for (const c of otherChainsToAdd) {
        addChain(c, othersLabel);
      }
    }
    return {
      allChains: allChainsValue,
      allChainsToSectionMap: allChainsToSectionMapValue,
      chainSections: chainSectionsValue
    };
  }, [
    (_a = props.networkSelector) == null ? void 0 : _a.sections,
    (_b = props.networkSelector) == null ? void 0 : _b.recentChainIds,
    (_c = props.networkSelector) == null ? void 0 : _c.popularChainIds,
    props.chains,
    recentLabel,
    popularLabel,
    othersLabel
  ]);
  const chainsHaveName = allChains.every((c) => !!c.name);
  const allChainsQuery = useChainsQuery(chainsHaveName ? [] : allChains, 10);
  const isAllChainsQueryLoading = chainsHaveName ? false : allChainsQuery.some((q) => q.isLoading);
  const allChainsMetadata = chainsHaveName ? allChains : !isAllChainsQueryLoading ? allChainsQuery.filter((x) => !!x.data).map((q) => convertApiChainToChain(q.data)) : [];
  const fuse = (0, import_react19.useMemo)(() => {
    return new Fuse(allChainsMetadata, {
      keys: [
        {
          name: "name",
          weight: 1
        },
        {
          name: "chainId",
          weight: 1
        }
      ],
      threshold: 0.4
    });
  }, [allChainsMetadata]);
  const searchedChainSections = (0, import_react19.useMemo)(() => {
    if (deferredSearchTerm === "") {
      return void 0;
    }
    const filteredChainSectionsValue = [];
    const filteredAllChains = fuse.search(deferredSearchTerm).map((r) => r.item);
    for (const c of filteredAllChains) {
      const label = allChainsToSectionMap.get(c.id);
      if (!label) {
        return;
      }
      const section = filteredChainSectionsValue.find((s) => s.label === label);
      if (section) {
        section.chains.push(c);
      } else {
        filteredChainSectionsValue.push({
          chains: [c],
          label
        });
      }
    }
    return filteredChainSectionsValue;
  }, [deferredSearchTerm, fuse, allChainsToSectionMap]) || chainSections;
  const filteredChainSections = (0, import_react19.useMemo)(() => {
    if (selectedTab === "all") {
      return searchedChainSections;
    }
    return searchedChainSections.map((section) => ({
      chains: section.chains.filter((c) => selectedTab === "mainnet" && !c.testnet || selectedTab === "testnet" && c.testnet),
      label: section.label
    }));
  }, [searchedChainSections, selectedTab]);
  const handleSwitch = (0, import_react19.useCallback)((chain) => {
    if (onSwitch) {
      onSwitch(chain);
    }
    props.closeModal();
  }, [onSwitch, props]);
  return (0, import_jsx_runtime32.jsxs)(Container, { children: [(0, import_jsx_runtime32.jsx)(Container, { p: "lg", children: props.onBack ? (0, import_jsx_runtime32.jsx)(ModalHeader, { onBack: props.onBack, title: locale.title }) : (0, import_jsx_runtime32.jsx)(ModalTitle, { children: locale.title }) }), props.showTabs !== false && (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [(0, import_jsx_runtime32.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime32.jsxs)(Container, { flex: "row", gap: "xxs", children: [(0, import_jsx_runtime32.jsx)(TabButton, { "data-active": selectedTab === "all", onClick: () => setSelectedTab("all"), children: locale.allNetworks }), (0, import_jsx_runtime32.jsx)(TabButton, { "data-active": selectedTab === "mainnet", onClick: () => setSelectedTab("mainnet"), children: locale.mainnets }), (0, import_jsx_runtime32.jsx)(TabButton, { "data-active": selectedTab === "testnet", onClick: () => setSelectedTab("testnet"), children: locale.testnets })] }) }), (0, import_jsx_runtime32.jsx)(Spacer, { y: "lg" })] }), props.showTabs === false && (0, import_jsx_runtime32.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime32.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime32.jsxs)("div", { style: {
    alignItems: "center",
    display: "flex",
    position: "relative"
  }, children: [(0, import_jsx_runtime32.jsx)(StyledMagnifyingGlassIcon, { height: iconSize.md, width: iconSize.md }), (0, import_jsx_runtime32.jsx)(Input, { disabled: isAllChainsQueryLoading, onChange: (e) => {
    setSearchTerm(e.target.value);
  }, placeholder: isAllChainsQueryLoading ? "Loading chains..." : locale.inputPlaceholder, style: {
    padding: `${spacing.sm} ${spacing.md} ${spacing.sm} ${spacing.xxl}`
  }, tabIndex: -1, value: searchTerm, variant: "outline" }), (deferredSearchTerm !== searchTerm || isAllChainsQueryLoading) && (0, import_jsx_runtime32.jsx)("div", { style: {
    position: "absolute",
    right: spacing.md
  }, children: (0, import_jsx_runtime32.jsx)(Spinner, { color: "accentText", size: "md" }) })] }) }), (0, import_jsx_runtime32.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime32.jsx)(Container, { px: "md", children: (0, import_jsx_runtime32.jsx)(NetworkTabContent, { chainSections: filteredChainSections, client: props.client, close: props.closeModal, connectLocale: props.connectLocale, onSwitch: handleSwitch, renderChain: (_d = props.networkSelector) == null ? void 0 : _d.renderChain }) }), onCustomClick && (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [(0, import_jsx_runtime32.jsx)(Line, {}), (0, import_jsx_runtime32.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime32.jsx)(Button, { fullWidth: true, onClick: () => {
    onCustomClick();
    props.closeModal();
  }, style: {
    boxShadow: "none",
    display: "flex",
    fontSize: fontSize.sm
  }, variant: "link", children: locale.addCustomNetwork }) })] })] });
}
var NetworkTabContent = (props) => {
  const { chainSections } = props;
  const noChainsToShow = chainSections.every((section) => section.chains.length === 0);
  return (0, import_jsx_runtime32.jsx)(Container, { animate: "fadein", scrollY: true, style: {
    height: "330px",
    paddingBottom: spacing.lg
  }, children: noChainsToShow ? (0, import_jsx_runtime32.jsxs)(Container, { center: "both", color: "secondaryText", flex: "column", gap: "md", children: [(0, import_jsx_runtime32.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime32.jsx)(CrossCircledIcon, { height: iconSize.xl, width: iconSize.xl }), (0, import_jsx_runtime32.jsx)(Text, { children: " No Results " })] }) : chainSections.map((section, idx) => {
    if (section.chains.length === 0) {
      return null;
    }
    return (0, import_jsx_runtime32.jsxs)(import_react19.Fragment, { children: [idx !== 0 && (0, import_jsx_runtime32.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime32.jsx)(SectionLabel, { children: section.label }), (0, import_jsx_runtime32.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime32.jsx)(NetworkList, { chains: section.chains, client: props.client, close: props.close, connectLocale: props.connectLocale, onSwitch: props.onSwitch, renderChain: props.renderChain })] }, section.label);
  }) });
};
var NetworkList = (0, import_react19.memo)(function NetworkList2(props) {
  const { itemsToShow, lastItemRef } = useShowMore(10, 10);
  const switchChain = useSwitchActiveWalletChain();
  const activeChain = useActiveWalletChain();
  const [switchingChainId, setSwitchingChainId] = (0, import_react19.useState)(-1);
  const [errorSwitchingChainId, setErrorSwitchingChainId] = (0, import_react19.useState)(-1);
  const close = props.close;
  (0, import_react19.useEffect)(() => {
    if (switchingChainId !== -1 && (activeChain == null ? void 0 : activeChain.id) === switchingChainId) {
      if (close) {
        close();
      }
    }
  }, [switchingChainId, close, activeChain == null ? void 0 : activeChain.id]);
  const handleSwitch = async (chain) => {
    setErrorSwitchingChainId(-1);
    setSwitchingChainId(chain.id);
    try {
      await switchChain(chain);
      props.onSwitch(chain);
    } catch (e) {
      setErrorSwitchingChainId(chain.id);
      console.error(e);
    } finally {
      setSwitchingChainId(-1);
    }
  };
  const RenderChain = props.renderChain;
  const chainsToShow = props.chains.slice(0, itemsToShow);
  return (0, import_jsx_runtime32.jsx)(NetworkListUl, { children: chainsToShow.map((chain, i) => {
    if (!chain) {
      return null;
    }
    const confirming = switchingChainId === chain.id;
    const switchingFailed = errorSwitchingChainId === chain.id;
    const isLast = i === chainsToShow.length - 1;
    return (0, import_jsx_runtime32.jsx)("li", { ref: isLast ? lastItemRef : void 0, children: RenderChain ? (0, import_jsx_runtime32.jsx)(RenderChain, { chain, close: props.close, switchChain: () => {
      handleSwitch(chain);
    }, switchFailed: errorSwitchingChainId === chain.id, switching: switchingChainId === chain.id }) : (0, import_jsx_runtime32.jsx)(ChainButton, { chain, client: props.client, confirming, connectLocale: props.connectLocale, onClick: () => handleSwitch(chain), switchingFailed }) }, chain.id);
  }) });
});
var ChainButton = (0, import_react19.memo)(function ChainButton2(props) {
  const locale = props.connectLocale;
  const { chain, confirming, switchingFailed } = props;
  const activeChain = useActiveWalletChain();
  return (0, import_jsx_runtime32.jsx)(ChainProvider, { chain, children: (0, import_jsx_runtime32.jsxs)(NetworkButton, { "data-active": (activeChain == null ? void 0 : activeChain.id) === chain.id, onClick: props.onClick, children: [(0, import_jsx_runtime32.jsxs)(Container, { style: {
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    position: "relative"
  }, children: [(0, import_jsx_runtime32.jsx)(ChainIcon, { client: props.client, fallbackComponent: (0, import_jsx_runtime32.jsx)("img", { alt: "", src: fallbackChainIcon, style: {
    height: `${iconSize.lg}px`,
    width: `${iconSize.lg}px`
  } }), loading: "lazy", loadingComponent: (0, import_jsx_runtime32.jsx)(Skeleton, { height: `${iconSize.lg}px`, width: `${iconSize.lg}px` }), style: {
    height: `${iconSize.lg}px`,
    width: `${iconSize.lg}px`
  } }), (activeChain == null ? void 0 : activeChain.id) === chain.id && (0, import_jsx_runtime32.jsx)(ChainActiveDot, { className: "tw-chain-active-dot-button-network-selector" })] }), confirming || switchingFailed ? (0, import_jsx_runtime32.jsxs)("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs
  }, children: [(0, import_jsx_runtime32.jsx)(ChainName2, { loadingComponent: (0, import_jsx_runtime32.jsx)(Skeleton, { height: "20px", width: "150px" }) }), (0, import_jsx_runtime32.jsxs)(Container, { animate: "fadein", center: "y", flex: "row", gap: "xxs", children: [confirming && (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [(0, import_jsx_runtime32.jsx)(Text, { color: "accentText", size: "xs", children: locale.switchingNetwork }), (0, import_jsx_runtime32.jsx)(Spinner, { color: "accentText", size: "xs" })] }), switchingFailed && (0, import_jsx_runtime32.jsx)(Container, { animate: "fadein", children: (0, import_jsx_runtime32.jsx)(Text, { color: "danger", size: "xs", children: locale.networkSelector.failedToSwitch }) })] })] }) : (0, import_jsx_runtime32.jsx)(ChainName2, { className: "tw-chain-icon-none-confirming", loadingComponent: (0, import_jsx_runtime32.jsx)(Skeleton, { height: "20px", width: "150px" }) })] }) });
});
var TabButton = (() => newStyled.button((_) => {
  const theme = useCustomTheme();
  return {
    "&[data-active='true']": {
      background: theme.colors.secondaryButtonBg,
      color: theme.colors.primaryText
    },
    all: "unset",
    borderRadius: radius.lg,
    color: theme.colors.secondaryText,
    cursor: "pointer",
    fontSize: fontSize.sm,
    fontWeight: 500,
    padding: `${spacing.sm} ${spacing.sm}`,
    transition: "background 0.2s ease, color 0.2s ease",
    WebkitTapHighlightColor: "transparent"
  };
}))();
var SectionLabel = StyledP(() => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.secondaryText,
    display: "block",
    fontSize: fontSize.sm,
    margin: 0,
    padding: `0 ${spacing.xs}`
  };
});
var NetworkListUl = StyledUl({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: spacing.xs,
  listStyle: "none",
  margin: 0,
  padding: 0
});
var NetworkButton = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      background: theme.colors.secondaryButtonBg
    },
    alignItems: "center",
    all: "unset",
    borderRadius: radius.md,
    boxSizing: "border-box",
    color: theme.colors.primaryText,
    cursor: "pointer",
    display: "flex",
    fontSize: fontSize.md,
    fontWeight: 500,
    gap: spacing.md,
    padding: `${spacing.xs} ${spacing.sm}`,
    transition: "background 0.2s ease",
    width: "100%",
    [media.mobile]: {
      fontSize: fontSize.sm
    }
  };
});
var StyledMagnifyingGlassIcon = newStyled(MagnifyingGlassIcon)((_) => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.secondaryText,
    left: spacing.sm,
    position: "absolute"
  };
});
function useNetworkSwitcherModal() {
  const activeChain = useActiveWalletChain();
  const setRootEl = (0, import_react19.useContext)(SetRootElementContext);
  const closeModal = (0, import_react19.useCallback)(() => {
    setRootEl(null);
  }, [setRootEl]);
  const openNetworkSwitcher = (0, import_react19.useCallback)(async (props) => {
    if (!activeChain) {
      throw new Error("No active wallet found");
    }
    const locale = await getConnectLocale(props.locale || "en_US");
    setRootEl((0, import_jsx_runtime32.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime32.jsx)(Modal, { open: true, setOpen: (value) => {
      if (!value) {
        closeModal();
      }
    }, size: "compact", style: {
      paddingBottom: props.onCustomClick ? spacing.md : "0px"
    }, children: (0, import_jsx_runtime32.jsx)(NetworkSelectorContent, { chains: [activeChain], client: props.client, closeModal, connectLocale: locale, networkSelector: {
      onCustomClick: props.onCustomClick,
      onSwitch: props.onSwitch,
      renderChain: props.renderChain,
      sections: props.sections
    } }) }) }));
  }, [setRootEl, closeModal, activeChain]);
  return {
    close: closeModal,
    open: openNetworkSwitcher
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/LazyBuyScreen.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var import_react20 = __toESM(require_react(), 1);
var BuyScreen = (0, import_react20.lazy)(() => import("./BuyScreen-VFSY5DPT.js"));
function LazyBuyScreen(props) {
  return (0, import_jsx_runtime33.jsx)(import_react20.Suspense, { fallback: (0, import_jsx_runtime33.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime33.jsx)(BuyScreen, { ...props }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Details/WalletManagerScreen.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var import_react27 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSetActiveWallet.js
function useSetActiveWallet() {
  const manager = useConnectionManagerCtx("useSetActiveWallet");
  return manager.setActiveWallet;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/currencies.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/CADIcon.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var import_react21 = __toESM(require_react(), 1);
var CADIcon = (props) => {
  const id = (0, import_react21.useId)();
  return (0, import_jsx_runtime34.jsxs)("svg", { "aria-hidden": "true", height: props.size, viewBox: "0 0 512 512", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime34.jsx)("mask", { id, children: (0, import_jsx_runtime34.jsx)("circle", { cx: "256", cy: "256", fill: "#fff", r: "256" }) }), (0, import_jsx_runtime34.jsxs)("g", { mask: `url(#${id})`, children: [(0, import_jsx_runtime34.jsx)("path", { d: "M0 0v512h144l112-64 112 64h144V0H368L256 64 144 0Z", fill: "#d80027" }), (0, import_jsx_runtime34.jsx)("path", { d: "M144 0h224v512H144Z", fill: "#eee" }), (0, import_jsx_runtime34.jsx)("path", { d: "m301 289 44-22-22-11v-22l-45 22 23-44h-23l-22-34-22 33h-23l23 45-45-22v22l-22 11 45 22-12 23h45v33h22v-33h45z", fill: "#d80027" })] })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/EURIcon.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var import_react22 = __toESM(require_react(), 1);
var EURIcon = (props) => {
  const id = (0, import_react22.useId)();
  return (0, import_jsx_runtime35.jsxs)("svg", { "aria-hidden": "true", height: props.size, viewBox: "0 0 512 512", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime35.jsx)("mask", { id, children: (0, import_jsx_runtime35.jsx)("circle", { cx: "256", cy: "256", fill: "#fff", r: "256" }) }), (0, import_jsx_runtime35.jsxs)("g", { mask: `url(#${id})`, children: [(0, import_jsx_runtime35.jsx)("path", { d: "M0 0h512v512H0z", fill: "#0052b4" }), (0, import_jsx_runtime35.jsx)("path", { d: "m256 100.2 8.3 25.5H291l-21.7 15.7 8.3 25.6-21.7-15.8-21.7 15.8 8.3-25.6-21.7-15.7h26.8zm-110.2 45.6 24 12.2 18.9-19-4.2 26.5 23.9 12.2-26.5 4.2-4.2 26.5-12.2-24-26.5 4.3 19-19zM100.2 256l25.5-8.3V221l15.7 21.7 25.6-8.3-15.8 21.7 15.8 21.7-25.6-8.3-15.7 21.7v-26.8zm45.6 110.2 12.2-24-19-18.9 26.5 4.2 12.2-23.9 4.2 26.5 26.5 4.2-24 12.2 4.3 26.5-19-19zM256 411.8l-8.3-25.5H221l21.7-15.7-8.3-25.6 21.7 15.8 21.7-15.8-8.3 25.6 21.7 15.7h-26.8zm110.2-45.6-24-12.2-18.9 19 4.2-26.5-23.9-12.2 26.5-4.2 4.2-26.5 12.2 24 26.5-4.3-19 19zM411.8 256l-25.5 8.3V291l-15.7-21.7-25.6 8.3 15.8-21.7-15.8-21.7 25.6 8.3 15.7-21.7v26.8zm-45.6-110.2-12.2 24 19 18.9-26.5-4.2-12.2 23.9-4.2-26.5-26.5-4.2 24-12.2-4.3-26.5 19 19z", fill: "#ffda44" })] })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/GBPIcon.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var GBPIcon = (props) => {
  return (0, import_jsx_runtime36.jsxs)("svg", { "aria-hidden": "true", height: props.size, version: "1.1", viewBox: "0 0 512 512", width: props.size, x: "0px", xmlns: "http://www.w3.org/2000/svg", y: "0px", children: [(0, import_jsx_runtime36.jsx)("circle", { cx: "256", cy: "256", fill: "#F0F0F0", r: "256" }), (0, import_jsx_runtime36.jsxs)("g", { children: [(0, import_jsx_runtime36.jsx)("path", { d: "M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z", fill: "#0052B4" }), (0, import_jsx_runtime36.jsx)("path", { d: "M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z", fill: "#0052B4" }), (0, import_jsx_runtime36.jsx)("path", { d: "M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z", fill: "#0052B4" }), (0, import_jsx_runtime36.jsx)("path", { d: "M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z", fill: "#0052B4" }), (0, import_jsx_runtime36.jsx)("path", { d: "M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z", fill: "#0052B4" }), (0, import_jsx_runtime36.jsx)("path", { d: "M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z", fill: "#0052B4" }), (0, import_jsx_runtime36.jsx)("path", { d: "M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z", fill: "#0052B4" }), (0, import_jsx_runtime36.jsx)("path", { d: "M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z", fill: "#0052B4" })] }), (0, import_jsx_runtime36.jsxs)("g", { children: [(0, import_jsx_runtime36.jsx)("path", { d: "M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z", fill: "#D80027" }), (0, import_jsx_runtime36.jsx)("path", { d: "M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z", fill: "#D80027" }), (0, import_jsx_runtime36.jsx)("path", { d: "M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z", fill: "#D80027" }), (0, import_jsx_runtime36.jsx)("path", { d: "M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z", fill: "#D80027" }), (0, import_jsx_runtime36.jsx)("path", { d: "M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z", fill: "#D80027" })] })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/JPYIcon.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var JPYIcon = (props) => {
  return (0, import_jsx_runtime37.jsx)("svg", { height: props.size, role: "presentation", viewBox: "0 0 32 32", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime37.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [(0, import_jsx_runtime37.jsx)("circle", { cx: "16", cy: "16", fill: "#a81b1b", r: "16" }), (0, import_jsx_runtime37.jsx)("path", { d: "M17.548 18.711v1.878h5.063v2.288h-5.063V25.5h-3.096v-2.623H9.389v-2.288h5.063v-1.878H9.389v-2.288h4.171L7.5 7.5h3.752l4.8 7.534L20.853 7.5H24.5l-6.086 8.923h4.197v2.288z", fill: "#ffffff" })] }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/currencies/USDIcon.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var USDIcon = (props) => {
  return (0, import_jsx_runtime38.jsxs)("svg", { "aria-hidden": "true", height: props.size, version: "1.1", viewBox: "0 0 512 512", width: props.size, x: "0px", xmlns: "http://www.w3.org/2000/svg", y: "0px", children: [(0, import_jsx_runtime38.jsx)("circle", { cx: "256", cy: "256", fill: "#F0F0F0", r: "256" }), (0, import_jsx_runtime38.jsxs)("g", { children: [(0, import_jsx_runtime38.jsx)("path", { d: "M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z", fill: "#D80027" }), (0, import_jsx_runtime38.jsx)("path", { d: "M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z", fill: "#D80027" }), (0, import_jsx_runtime38.jsx)("path", { d: "M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z", fill: "#D80027" }), (0, import_jsx_runtime38.jsx)("path", { d: "M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819   C15.236,346.596,24.993,369.036,37.574,389.565z", fill: "#D80027" })] }), (0, import_jsx_runtime38.jsx)("path", { d: "M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037  C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941  c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444  C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4  l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z   M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822  L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822  l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822  l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509  l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z", fill: "#0052B4" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/currencies.js
var usdCurrency = {
  countryCode: "US",
  icon: USDIcon,
  name: "US Dollar",
  shorthand: "USD",
  symbol: "$"
};
var currencies = [
  usdCurrency,
  {
    countryCode: "CA",
    icon: CADIcon,
    name: "Canadian Dollar",
    shorthand: "CAD",
    symbol: "$"
  },
  {
    countryCode: "GB",
    icon: GBPIcon,
    name: "British Pound",
    shorthand: "GBP",
    symbol: "£"
  },
  {
    countryCode: "EU",
    icon: EURIcon,
    name: "Euro",
    shorthand: "EUR",
    symbol: "€"
  },
  {
    countryCode: "JP",
    icon: JPYIcon,
    name: "Japanese Yen",
    shorthand: "JPY",
    symbol: "¥"
  },
  {
    countryCode: "AU",
    name: "Australian Dollar",
    shorthand: "AUD",
    symbol: "$"
  },
  {
    countryCode: "NZ",
    name: "New Zealand Dollar",
    shorthand: "NZD",
    symbol: "$"
  }
];
function getCurrencyMeta(shorthand) {
  return currencies.find((currency) => currency.shorthand.toLowerCase() === shorthand.toLowerCase()) ?? {
    countryCode: "US",
    // This should never happen
    icon: UnknownCurrencyIcon,
    name: shorthand,
    shorthand,
    symbol: "$"
  };
}
function getFiatIcon(currency, size4) {
  return currency.icon ? (0, import_jsx_runtime39.jsx)(currency.icon, { size: iconSize[size4] }) : (0, import_jsx_runtime39.jsx)("img", { alt: currency.shorthand, height: iconSize[size4], src: `https://flagsapi.com/${currency.countryCode.toUpperCase()}/flat/64.png`, width: iconSize[size4] });
}
function getFiatCurrencyIcon(props) {
  return getFiatIcon(getCurrencyMeta(props.currency), props.size);
}
var UnknownCurrencyIcon = (props) => {
  return (0, import_jsx_runtime39.jsx)(RadiobuttonIcon, { height: props.size, width: props.size });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/formatTokenBalance.js
function formatTokenBalance(balanceData, showSymbol = true, decimals2 = 5) {
  return formatNumber(Number(balanceData.displayValue), decimals2) + (showSymbol ? ` ${balanceData.symbol}` : "");
}
function formatTokenAmount(amount, decimals2, decimalsToShow = 5) {
  return formatNumber(Number.parseFloat(toTokens(amount, decimals2)), decimalsToShow).toString();
}
function formatCurrencyAmount(currency, amount, decimals2 = 2) {
  const symbol = getCurrencyMeta(currency).symbol;
  return `${symbol}${formatNumber(amount, decimals2).toFixed(decimals2)}`;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletSwitcherConnectionScreen.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectModalContent.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var import_react26 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/SignatureScreen.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var import_react24 = __toESM(require_react(), 1);
var SignatureScreen = (props) => {
  const { onDone, modalSize, onClose, termsOfServiceUrl, privacyPolicyUrl, connectLocale } = props;
  const wallet = useActiveWallet();
  const adminWallet = useAdminWallet();
  const activeAccount = useActiveAccount();
  const siweAuth = useSiweAuth(wallet, activeAccount, props.auth);
  const [error, setError] = (0, import_react24.useState)(void 0);
  const [status2, setStatus] = (0, import_react24.useState)(error ? "failed" : "idle");
  const { disconnect } = useDisconnect();
  const locale = connectLocale.signatureScreen;
  const signIn = (0, import_react24.useCallback)(async () => {
    try {
      setError(void 0);
      setStatus("signing");
      await siweAuth.doLogin();
      onDone == null ? void 0 : onDone();
    } catch (err) {
      await wait(1e3);
      setError(err.message);
      setStatus("failed");
    }
  }, [onDone, siweAuth]);
  if (!wallet || siweAuth.isPending) {
    return (0, import_jsx_runtime40.jsx)(LoadingScreen, { "data-testid": "loading-screen" });
  }
  if (isHeadlessSignSupported(wallet.id) || wallet.id === "smart" && adminWallet && isHeadlessSignSupported(adminWallet.id)) {
    return (0, import_jsx_runtime40.jsx)(HeadlessSignIn, { connectLocale, error, signIn, status: status2, wallet });
  }
  const handleRetry = () => {
    signIn();
  };
  return (0, import_jsx_runtime40.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: [(0, import_jsx_runtime40.jsx)(Container, { p: "lg", style: {
    paddingBottom: 0
  }, children: (0, import_jsx_runtime40.jsx)(ModalHeader, { title: locale.instructionScreen.title }) }), (0, import_jsx_runtime40.jsx)(Container, { center: "y", expand: true, flex: "column", px: modalSize === "compact" ? "lg" : "xxl", style: {
    paddingBottom: spacing.xl,
    paddingTop: 0
  }, children: status2 === "idle" ? (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [(0, import_jsx_runtime40.jsx)(Container, { animate: "fadein", center: "x", flex: "row", py: "3xl", children: (0, import_jsx_runtime40.jsx)(PulsatingContainer, { children: (0, import_jsx_runtime40.jsx)(WalletImage, { client: props.client, id: wallet.id, size: "80" }) }) }), (0, import_jsx_runtime40.jsx)(Text, { balance: true, center: true, multiline: true, children: locale.instructionScreen.instruction }), (0, import_jsx_runtime40.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime40.jsx)(Button, { "data-testid": "sign-in-button", fullWidth: true, onClick: signIn, style: {
    alignItems: "center",
    padding: spacing.md
  }, variant: "accent", children: connectLocale.signatureScreen.instructionScreen.signInButton }), (0, import_jsx_runtime40.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime40.jsx)(Button, { "data-testid": "disconnect-button", fullWidth: true, onClick: () => {
    onClose == null ? void 0 : onClose();
    disconnect(wallet);
  }, style: {
    alignItems: "center",
    padding: spacing.md
  }, variant: "secondary", children: connectLocale.signatureScreen.instructionScreen.disconnectWallet })] }) : (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [(0, import_jsx_runtime40.jsx)(Container, { py: "3xl", children: (0, import_jsx_runtime40.jsx)(WalletLogoSpinner, { client: props.client, error: status2 === "failed", id: wallet.id }) }), (0, import_jsx_runtime40.jsxs)(Container, { animate: "fadein", flex: "column", gap: "md", children: [(0, import_jsx_runtime40.jsx)(Text, { center: true, color: "primaryText", size: "lg", children: status2 === "failed" ? error || locale.signingScreen.failedToSignIn : locale.signingScreen.inProgress }), status2 === "signing" && (0, import_jsx_runtime40.jsx)(Text, { balance: true, center: true, multiline: true, children: connectLocale.signatureScreen.signingScreen.prompt }), status2 === "failed" && (0, import_jsx_runtime40.jsxs)(Container, { children: [(0, import_jsx_runtime40.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime40.jsxs)(Button, { fullWidth: true, onClick: handleRetry, style: {
    alignItems: "center",
    gap: spacing.xs,
    padding: spacing.md
  }, variant: "accent", children: [(0, import_jsx_runtime40.jsx)(ReloadIcon, { height: iconSize.sm, width: iconSize.sm }), locale.signingScreen.tryAgain] }), (0, import_jsx_runtime40.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime40.jsx)(Button, { fullWidth: true, onClick: () => {
    disconnect(wallet);
  }, style: {
    alignItems: "center",
    padding: spacing.md
  }, variant: "secondary", children: locale.instructionScreen.disconnectWallet })] })] }, status2)] }) }), (termsOfServiceUrl || privacyPolicyUrl) && (0, import_jsx_runtime40.jsx)(Container, { animate: "fadein", p: "md", children: (0, import_jsx_runtime40.jsx)(TOS, { locale: connectLocale.agreement, privacyPolicyUrl, termsOfServiceUrl }) })] });
};
function isHeadlessSignSupported(walletId) {
  return walletId === "inApp" || walletId === "embedded" || walletId.startsWith("ecosystem");
}
function HeadlessSignIn({ signIn, error, status: status2, connectLocale, wallet }) {
  const locale = connectLocale.signatureScreen;
  const mounted = (0, import_react24.useRef)(false);
  const { disconnect } = useDisconnect();
  (0, import_react24.useEffect)(() => {
    if (mounted.current) {
      return;
    }
    mounted.current = true;
    signIn();
  }, [signIn]);
  return (0, import_jsx_runtime40.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, p: "lg", children: [(0, import_jsx_runtime40.jsx)(ModalHeader, { title: locale.signingScreen.title }), (0, import_jsx_runtime40.jsxs)(Container, { center: "both", expand: true, flex: "row", style: {
    minHeight: "250px"
  }, children: [status2 === "signing" && (0, import_jsx_runtime40.jsx)(Spinner, { color: "accentText", size: "xl" }), status2 === "failed" && (0, import_jsx_runtime40.jsxs)(Container, { children: [(0, import_jsx_runtime40.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime40.jsx)(Text, { center: true, color: "danger", size: "lg", children: error || locale.signingScreen.failedToSignIn }), (0, import_jsx_runtime40.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime40.jsxs)(Button, { fullWidth: true, onClick: () => {
    signIn();
  }, style: {
    alignItems: "center",
    gap: spacing.xs,
    padding: spacing.md
  }, variant: "accent", children: [(0, import_jsx_runtime40.jsx)(ReloadIcon, { height: iconSize.sm, width: iconSize.sm }), locale.signingScreen.tryAgain] }), (0, import_jsx_runtime40.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime40.jsx)(Button, { "data-testid": "disconnect-button", fullWidth: true, onClick: () => {
    disconnect(wallet);
  }, style: {
    alignItems: "center",
    padding: spacing.md
  }, variant: "secondary", children: locale.instructionScreen.disconnectWallet })] })] })] });
}
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

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/StartScreen.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/GlobalIcon.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var GlobeIcon = (props) => {
  return (0, import_jsx_runtime41.jsx)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 129 131", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime41.jsx)("path", { d: "M59.7178 0C62.7511 0 65.788 0 68.8212 0C71.4429 0.423181 74.1011 0.679982 76.6755 1.29848C103.785 7.78725 120.277 24.7723 126.755 51.5485C127.428 54.3335 127.712 57.2089 128.175 60.0446V69.8103C127.803 72.1722 127.472 74.5449 127.057 76.8995C122.582 102.298 103.177 122.722 77.9136 128.56C74.8003 129.28 71.6104 129.67 68.457 130.213H59.3537C57.3838 129.913 55.4065 129.663 53.4475 129.305C27.0442 124.491 6.91125 104.974 1.44197 78.8526C0.841148 75.9808 0.473373 73.0656 0 70.1684C0 66.9132 0 63.6579 0 60.4027C0.371416 58.0408 0.706418 55.6718 1.11425 53.3135C5.52026 28.0493 24.9905 7.50151 50.0902 1.70719C53.2618 0.97657 56.5062 0.560624 59.7178 0ZM96.8813 10.3119C96.8959 10.2865 96.9104 10.2576 96.9286 10.2323C96.8886 10.2504 96.8522 10.2648 96.8121 10.2829C96.8085 10.2287 96.8048 10.178 96.8012 10.1238C96.8303 10.1853 96.8558 10.2504 96.8849 10.3119H96.8813ZM25.1762 115.709C25.2089 115.716 25.2454 115.72 25.2781 115.727C25.249 115.749 25.2235 115.771 25.1944 115.792C25.2053 115.767 25.2162 115.742 25.2271 115.716C25.1252 115.525 25.0196 115.333 24.9176 115.141C22.7328 113.087 21.127 110.421 18.3305 109.014C18.2977 109.032 18.2613 109.05 18.2285 109.065C18.2758 109.058 18.3232 109.054 18.3705 109.047C18.4397 109.365 18.3997 109.795 18.5926 109.984C20.3587 111.687 22.1502 113.362 23.9745 115.004C24.1675 115.177 24.5972 115.083 24.9176 115.116C25.0014 115.311 25.0851 115.51 25.1725 115.706L25.1762 115.709ZM27.594 12.4567L27.2262 12.9197C27.1898 13.1439 27.1571 13.3682 27.1206 13.5924C26.8038 13.5924 26.4871 13.596 26.1703 13.5996C26.0683 13.813 25.9663 14.0264 25.8607 14.2362L25.7661 14.2652L25.8243 14.1856C25.9336 13.9686 26.0428 13.7479 26.1557 13.5309C26.4688 13.5418 26.7856 13.5526 27.0988 13.5671C27.1243 13.332 27.1498 13.0969 27.1753 12.8618C27.2954 12.7352 27.412 12.6122 27.5321 12.4856C27.543 12.511 27.554 12.5399 27.5649 12.5652C27.5758 12.529 27.5831 12.4893 27.594 12.4531V12.4567ZM106.589 111.926C106.738 111.868 106.891 111.806 107.041 111.749C107.616 111.354 108.286 111.043 108.756 110.548C110.281 108.924 111.771 107.26 113.205 105.553C113.919 104.703 114.483 103.726 115.113 102.808C113.981 103.448 112.849 104.084 111.716 104.725C111.669 104.753 111.632 104.811 111.6 104.862C110.088 107.166 108.577 109.474 107.07 111.778L106.556 111.958L106.625 112.06L106.589 111.926ZM79.6906 2.95141C79.6906 2.92971 79.6906 2.90801 79.6906 2.88631C79.6724 2.89716 79.6505 2.91163 79.6323 2.92248C79.8253 2.9478 80.0146 2.97311 80.2076 2.99843C80.0328 2.98397 79.8617 2.96588 79.6869 2.95141H79.6906ZM95.1662 8.90488C95.1116 8.90488 95.0533 8.89764 94.9987 8.90849C94.9732 8.91211 94.955 8.94828 94.9368 8.96998C95.0242 8.93381 95.1116 8.89764 95.199 8.86147C95.301 9.07125 95.3956 9.28827 95.5194 9.49082C95.5376 9.51975 95.6796 9.47273 95.7634 9.45827C95.5668 9.2738 95.3665 9.08934 95.1699 8.90126L95.1662 8.90488ZM86.7729 124.603C85.8772 124.921 84.9778 125.229 84.0893 125.565C83.94 125.623 83.8417 125.811 83.7215 125.941C83.8562 125.988 84.031 126.111 84.1184 126.068C85.0069 125.605 85.8808 125.117 86.7584 124.636C86.8021 124.621 86.8494 124.592 86.8895 124.596C86.9259 124.6 86.9623 124.643 86.9951 124.665C86.9186 124.643 86.8458 124.621 86.7693 124.603H86.7729ZM82.2431 4.35478L82.2941 4.31138V4.32223C82.5672 4.5935 82.793 5.00583 83.1207 5.11072C85.8189 5.99325 88.5317 6.82153 91.2445 7.6498C91.4193 7.70406 91.6341 7.64257 91.8271 7.63172C91.6596 7.46896 91.514 7.25917 91.3173 7.14705C88.4844 5.599 85.4912 4.56456 82.2395 4.35116L82.2431 4.35478ZM29.9609 10.9991C30.2995 11.0135 30.6928 11.1438 30.9732 11.0208C33.8389 9.75847 36.6937 8.46361 39.5376 7.15428C39.9054 6.98429 40.2331 6.70217 40.5244 6.41643C40.7319 6.21388 40.8412 5.91729 40.9941 5.66049C40.6664 5.68943 40.2913 5.62432 40.0219 5.76177C36.6573 7.49066 33.3109 9.2521 29.9609 11.0027C29.9864 11.0461 30.0119 11.0895 30.041 11.1293C30.0701 11.1655 30.1102 11.1944 30.1466 11.2233L29.9609 10.9991ZM8.93219 95.5918C8.89213 95.628 8.84844 95.6677 8.80838 95.7039C8.85208 95.6641 8.89942 95.6243 8.94311 95.5845C8.99773 96.0801 8.91398 96.6443 9.12882 97.0566C11.7397 102.034 14.7984 106.641 19.9509 109.43C19.9436 109.437 19.9363 109.445 19.9327 109.455C19.7579 108.913 19.6413 108.345 19.401 107.828C18.4943 105.875 17.6204 103.903 16.5899 102.015C16.1347 101.18 15.4283 100.417 14.6746 99.82C12.8102 98.3479 10.8512 96.9915 8.93219 95.5918ZM23.0533 112.295C23.097 112.248 23.1407 112.201 23.1844 112.15C23.1443 112.19 23.1006 112.23 23.0606 112.269C23.279 112.472 23.5449 112.646 23.7087 112.888C27.1206 117.861 32.1275 120.35 37.7861 121.818C38.1648 121.916 38.5763 121.887 38.9732 121.919C38.813 121.608 38.6709 121.283 38.4925 120.983C37.7861 119.789 37.1525 118.541 36.3259 117.434C35.8344 116.776 35.1206 116.125 34.3669 115.843C31.1917 114.657 27.9691 113.597 24.7501 112.53C24.2149 112.353 23.6177 112.367 23.0496 112.291L23.0533 112.295ZM69.8298 86.3252C73.0378 86.3252 75.4666 86.2927 77.8917 86.3397C78.9514 86.3614 79.4029 86.025 79.4284 84.9074C79.5049 81.4134 79.6432 77.9195 79.818 74.4291C79.8763 73.25 79.4757 72.9353 78.2777 72.8919C71.4903 72.6605 64.7065 72.353 57.9227 71.9986C56.8048 71.9407 56.2804 72.1107 56.204 73.3477C55.9855 76.8344 55.7015 80.3211 55.341 83.797C55.2135 85.0267 55.665 85.3595 56.8048 85.4282C61.4074 85.7067 66.0028 86.0539 69.8262 86.3216L69.8298 86.3252ZM69.9245 72.2192C72.2076 72.2192 74.9969 72.1505 77.7789 72.2481C79.2937 72.3024 79.9527 71.9371 79.869 70.2697C79.7015 66.9638 79.6796 63.6507 79.7088 60.3412C79.7197 58.8836 79.2536 58.4315 77.7315 58.3881C71.6177 58.2217 65.5076 57.9251 59.4011 57.5779C58.1994 57.5092 57.828 57.8274 57.7224 58.9776C57.3838 62.6307 56.9832 66.2838 56.528 69.9261C56.3897 71.0401 56.8776 71.2571 57.8171 71.3222C61.6842 71.5862 65.5513 71.8937 69.9281 72.2228L69.9245 72.2192ZM55.3956 74.3749C55.4247 74.0892 55.432 73.5394 55.5412 73.0149C55.7415 72.0564 55.2936 71.7852 54.4088 71.6333C47.8471 70.5048 41.2927 69.3401 34.742 68.1429C33.9481 67.9982 33.4748 68.0019 33.3655 68.9459C32.9249 72.6496 32.4115 76.3461 32.0401 80.0571C32 80.473 32.6118 81.2905 33.0269 81.3664C39.7488 82.6396 46.4852 83.8151 53.2181 85.0267C54.2267 85.2076 54.6091 84.8531 54.671 83.8115C54.853 80.7479 55.1334 77.688 55.3956 74.3749ZM54.143 71.2065C55.4757 71.3511 55.7634 70.7073 55.8726 69.5788C56.2222 65.9294 56.6264 62.2835 57.0888 58.6449C57.2272 57.5489 56.7429 57.3645 55.8253 57.2089C49.8644 56.1926 43.9108 55.1437 37.9718 54.0297C37.0178 53.8488 36.6464 54.0731 36.4461 54.9484C35.6122 58.5798 34.7638 62.2075 33.9008 65.8317C33.6823 66.754 33.8753 67.2966 34.9131 67.4955C41.3255 68.7144 47.7342 69.9659 54.1466 71.2101L54.143 71.2065ZM68.519 99.3606C71.5449 99.3606 73.97 99.3172 76.3915 99.3787C77.564 99.4077 78.1612 99.0894 78.2595 97.8198C78.5035 94.702 78.8203 91.5879 79.1808 88.4809C79.3119 87.3524 78.9514 87.0558 77.8262 87.0161C70.8093 86.7629 63.7925 86.4554 56.7793 86.0901C55.6286 86.0286 55.1334 86.2565 55.0897 87.4646C54.9805 90.5896 54.813 93.7146 54.5981 96.836C54.518 97.9753 54.8676 98.4094 56.0656 98.4781C60.417 98.7277 64.7611 99.0857 68.5153 99.3606H68.519ZM80.5244 79.623H80.4261C80.3278 81.3664 80.2659 83.1134 80.1202 84.8531C80.0365 85.8442 80.3023 86.318 81.3947 86.2095C87.7816 85.5621 94.1721 84.9616 100.555 84.2636C101.007 84.2129 101.728 83.4968 101.739 83.0772C101.826 79.3482 101.779 75.6155 101.772 71.8864C101.772 71.1486 101.488 70.852 100.654 70.9388C94.3287 71.5935 88.0001 72.2083 81.6678 72.8015C80.8339 72.8811 80.4989 73.1849 80.5171 74.0277C80.5572 75.894 80.5281 77.7603 80.5281 79.6267L80.5244 79.623ZM80.3788 65.1156C80.437 65.1156 80.4953 65.1156 80.5536 65.1156C80.5536 66.9819 80.5936 68.8518 80.5353 70.7182C80.5062 71.6911 80.7393 72.2011 81.8389 72.089C88.0474 71.4633 94.2559 70.852 100.468 70.2624C101.418 70.172 101.699 69.7271 101.579 68.8374C101.058 65.0794 100.559 61.3178 100.057 57.5598C99.9473 56.7424 99.5795 56.5217 98.7056 56.6158C93.0433 57.2234 87.3738 57.7768 81.7006 58.2868C80.7138 58.3772 80.3096 58.6557 80.3533 59.6938C80.4297 61.4986 80.3751 63.3071 80.3751 65.1119L80.3788 65.1156ZM54.1393 91.8881C54.1393 91.8881 54.1466 91.8881 54.1503 91.8881C54.2413 90.2677 54.2959 88.6401 54.4416 87.0233C54.518 86.1805 54.2304 85.8767 53.3892 85.7357C46.6527 84.5819 39.9199 83.4027 33.198 82.173C32.1675 81.9849 31.7342 82.173 31.7379 83.2581C31.7451 86.5639 31.6687 89.8734 31.7379 93.1793C31.7488 93.6386 32.3496 94.4054 32.7829 94.485C39.3774 95.7365 45.99 96.8939 52.599 98.0802C53.5385 98.2502 53.9026 97.8777 53.9136 96.93C53.9391 95.2482 54.0592 93.5663 54.1393 91.8844V91.8881ZM70.1758 44.2893C66.5199 44.018 63.8508 43.8878 61.2035 43.5912C60.0929 43.4682 59.7106 43.7395 59.5831 44.8391C59.1717 48.3656 58.7019 51.8884 58.1594 55.3969C57.9773 56.5724 58.4033 56.8653 59.4702 56.9087C65.6423 57.1619 71.8144 57.4404 77.9864 57.7406C79.2063 57.8021 79.5631 57.3211 79.4612 56.1492C79.1516 52.6118 78.8822 49.0709 78.6819 45.5263C78.62 44.4412 78.1102 44.264 77.1817 44.2784C74.5162 44.3182 71.8508 44.2929 70.1758 44.2929V44.2893ZM82.6983 99.3715C87.9782 98.7168 93.2582 98.0513 98.5417 97.4147C99.4084 97.3098 100.006 97.0747 100.14 96.0728C100.585 92.7995 101.091 89.5334 101.579 86.2637C101.728 85.2655 101.458 84.9182 100.319 85.0412C94.0665 85.714 87.8107 86.3397 81.544 86.8678C80.2695 86.9763 79.9163 87.4428 79.8471 88.593C79.7088 90.8717 79.5085 93.1504 79.2427 95.4182C78.7912 99.2919 78.762 99.2883 82.6983 99.3715ZM58.9495 44.0035C58.9714 43.4682 58.9714 43.4755 57.6423 43.2368C52.6427 42.3398 47.6396 41.4681 42.6509 40.5168C41.6823 40.3324 41.2308 40.553 40.9213 41.4789C39.7633 44.9584 38.5617 48.4234 37.3309 51.8776C37.0105 52.7782 37.1999 53.2159 38.1539 53.3822C44.1694 54.4311 50.1776 55.5162 56.204 56.5109C56.5499 56.5688 57.3146 56.019 57.3692 55.6754C57.9372 51.9318 58.4033 48.1739 58.9532 44.0035H58.9495ZM83.798 57.7225C88.5499 57.1619 93.3019 56.6122 98.0538 56.0371C98.8767 55.9358 99.8308 55.9539 99.4484 54.5903C98.4289 50.9372 97.4603 47.2696 96.488 43.6057C96.2732 42.7919 95.8071 42.6472 95.0097 42.734C90.2541 43.2476 85.4948 43.7504 80.7283 44.1518C79.6177 44.2459 79.2572 44.5497 79.3738 45.6637C79.6651 48.4777 79.8981 51.2989 80.0693 54.1237C80.2841 57.6647 80.2477 57.6683 83.798 57.7189V57.7225ZM32.6154 68.0344C32.437 67.9259 31.9673 67.5244 31.4283 67.3255C26.538 65.546 21.6222 63.8279 16.7392 62.0231C15.8835 61.7084 15.421 61.571 15.2535 62.6669C14.711 66.2404 14.092 69.7995 13.5895 73.3766C13.5239 73.8396 13.8443 74.7004 14.1939 74.8306C19.5175 76.8344 24.8667 78.7622 30.2376 80.643C30.467 80.7226 31.188 80.2162 31.2244 79.9233C31.7124 76.1617 32.1202 72.3856 32.6154 68.0308V68.0344ZM32.6919 66.8951C32.8485 66.5189 33.0851 66.1174 33.1907 65.687C34.0574 62.0629 34.8439 58.417 35.7797 54.8073C36.0565 53.7403 35.6705 53.5052 34.7893 53.1978C30.2813 51.6389 25.777 50.0547 21.3164 48.3692C20.3223 47.993 19.9181 48.116 19.594 49.0781C18.4324 52.554 17.249 56.0262 16.0364 59.4876C15.6759 60.5148 16.0328 61.0465 17.005 61.3901C21.9026 63.1226 26.7893 64.8768 31.6832 66.6202C31.909 66.6998 32.1493 66.7468 32.6955 66.8915L32.6919 66.8951ZM67.1207 110.645C69.8116 110.645 72.2404 110.598 74.6619 110.667C75.7324 110.696 76.1767 110.298 76.3405 109.282C76.7738 106.605 77.2363 103.936 77.7679 101.278C77.9828 100.207 77.5203 100.098 76.6282 100.062C69.7242 99.7874 62.8239 99.4836 55.9236 99.1364C54.9259 99.0857 54.5035 99.2774 54.5071 100.359C54.5144 102.949 54.467 105.538 54.3287 108.124C54.2595 109.383 54.7292 109.817 55.9527 109.886C59.7652 110.099 63.574 110.396 67.1207 110.642V110.645ZM53.615 104.106C53.6769 104.106 53.7351 104.106 53.797 104.106C53.797 102.844 53.7351 101.578 53.8153 100.319C53.8772 99.3642 53.6113 98.9483 52.5918 98.7783C46.0264 97.6679 39.472 96.5141 32.9249 95.306C31.8871 95.1143 31.7706 95.4471 31.8835 96.2935C32.2658 99.093 32.6518 101.892 32.9759 104.699C33.0924 105.712 33.6059 106.15 34.5672 106.32C40.4698 107.358 46.3651 108.407 52.2604 109.488C53.3637 109.691 53.655 109.257 53.6223 108.258C53.5786 106.877 53.6113 105.491 53.6113 104.106H53.615ZM30.9586 87.8552C30.9805 87.8552 31.0059 87.8552 31.0278 87.8552C31.0278 86.2927 30.9513 84.7229 31.0533 83.164C31.1225 82.0717 30.7583 81.6304 29.6951 81.2688C24.6627 79.5543 19.6596 77.7495 14.6746 75.9085C13.7351 75.5612 13.3309 75.5793 13.3673 76.6716C13.4766 80.0354 13.5166 83.4027 13.7169 86.7629C13.7497 87.3199 14.3359 88.1337 14.8566 88.329C19.8307 90.2026 24.8448 91.964 29.8444 93.7761C30.7474 94.1052 31.0096 93.8267 30.9768 92.908C30.9186 91.2262 30.9622 89.5407 30.9622 87.8552H30.9586ZM40.6009 40.2564C40.1785 40.0719 39.7524 39.8622 39.3118 39.703C35.554 38.343 31.7706 37.0518 28.0492 35.5978C27.0587 35.2108 26.6436 35.417 26.2103 36.2308C24.477 39.4752 22.7547 42.7268 20.9595 45.935C20.3769 46.9803 20.701 47.4396 21.7023 47.7941C26.152 49.3674 30.6054 50.9372 35.0369 52.5684C36.0783 52.9518 36.3915 52.5467 36.6901 51.6497C37.848 48.1594 39.0715 44.6944 40.2695 41.2185C40.3496 40.9906 40.4261 40.7628 40.6045 40.26L40.6009 40.2564ZM117.997 64.3632C117.018 60.4172 116.082 56.5688 115.062 52.742C115.004 52.5214 114.236 52.2791 113.897 52.3767C109.786 53.5776 105.69 54.8218 101.611 56.1275C101.233 56.2505 100.734 56.9124 100.774 57.2704C101.225 61.1478 101.753 65.0179 102.332 68.8772C102.383 69.2063 103.039 69.7633 103.257 69.6982C107.882 68.331 112.488 66.9023 117.083 65.4302C117.422 65.3217 117.63 64.8045 117.994 64.3632H117.997ZM81.0087 110.443C81.016 110.501 81.0269 110.555 81.0342 110.613C85.666 110.034 90.3014 109.484 94.9222 108.848C95.4903 108.768 96.3205 108.367 96.4807 107.918C97.5513 104.978 98.4762 101.983 99.4339 99.0025C99.6523 98.3262 99.4776 98.0296 98.651 98.1164C92.3187 98.7602 85.9828 99.3425 79.6541 100.015C79.2463 100.059 78.6601 100.641 78.5654 101.061C78.1539 102.88 77.8808 104.732 77.5859 106.576C77.3783 107.86 77.2181 109.155 77.036 110.443H81.0051H81.0087ZM102.518 77.131C102.518 77.131 102.529 77.131 102.533 77.131C102.533 78.9973 102.54 80.86 102.529 82.7264C102.525 83.3485 102.423 84.0827 103.414 83.7789C108.148 82.3249 112.878 80.8528 117.582 79.3156C117.946 79.1962 118.354 78.5126 118.351 78.0967C118.311 74.4291 118.172 70.7652 118.081 67.0976C118.059 66.2259 117.852 66.0053 116.89 66.3164C112.524 67.7306 108.133 69.0797 103.72 70.3456C102.682 70.6422 102.402 71.022 102.485 72.0745C102.616 73.7492 102.522 75.4419 102.522 77.1237L102.518 77.131ZM70.8895 43.5767C73.1871 43.5767 75.1243 43.537 77.0579 43.5912C78.1102 43.6201 78.4634 43.2512 78.3105 42.2168C77.8226 38.9471 77.3565 35.6774 76.9414 32.3968C76.8285 31.4962 76.4607 31.2069 75.554 31.1815C71.4429 31.0658 67.3319 30.9103 63.2245 30.6933C62.2559 30.6426 61.7861 30.8849 61.6368 31.8651C61.1562 35.0119 60.661 38.1586 60.0893 41.2945C59.8671 42.5134 60.3187 42.8968 61.4657 42.9583C64.7283 43.1391 67.9837 43.3814 70.8858 43.5731L70.8895 43.5767ZM58.3596 42.857C58.7056 42.3723 59.2372 41.9491 59.3319 41.4428C59.9181 38.2454 60.3587 35.0191 60.9559 31.8217C61.1489 30.7873 60.9122 30.4871 59.8781 30.3207C56.051 29.7058 52.2349 29.0078 48.4297 28.2771C47.5048 28.0999 46.9659 28.2771 46.5617 29.1524C45.1489 32.216 43.696 35.2614 42.2212 38.2996C41.7879 39.1894 41.7916 39.6958 42.9532 39.9092C47.9563 40.8351 52.9486 41.8153 58.356 42.857H58.3596ZM101.029 55.8743C105.457 54.3841 109.691 52.9808 113.894 51.4906C114.156 51.3965 114.414 50.5466 114.276 50.2102C112.779 46.6041 111.224 43.0197 109.611 39.4643C109.484 39.1858 108.745 38.9362 108.395 39.0375C104.863 40.0647 101.342 41.1462 97.8426 42.2819C97.5295 42.3832 97.118 43.027 97.1872 43.3091C98.1375 47.096 99.1535 50.8649 100.191 54.6301C100.29 54.9918 100.628 55.2884 101.025 55.8671L101.029 55.8743ZM82.5089 43.5731C86.4816 43.0993 90.4507 42.6183 94.4234 42.1625C95.4648 42.0432 95.9746 41.7611 95.4502 40.5783C94.0374 37.3846 92.7484 34.1329 91.2918 30.9573C91.0843 30.5016 90.1922 30.0603 89.6532 30.1001C86.0301 30.3713 82.4179 30.8235 78.7948 31.1056C77.6951 31.1888 77.4985 31.5432 77.666 32.5451C78.0993 35.1602 78.4379 37.7897 78.8094 40.4119C79.1055 42.5098 80.3375 43.5635 82.5053 43.5731H82.5089ZM118.245 81.8981C117.735 81.3881 119.017 79.8762 117.357 80.3283C112.692 81.6015 108.082 83.0772 103.479 84.5529C103.006 84.7048 102.442 85.345 102.361 85.8297C101.812 89.1537 101.397 92.4993 100.89 95.8305C100.745 96.7818 101.04 97.0675 101.946 96.7854C106.276 95.4399 110.624 94.1486 114.91 92.6838C115.583 92.4523 116.268 91.4866 116.446 90.7451C117.153 87.8226 117.662 84.8531 118.245 81.8981ZM32.1857 105.224C31.7925 101.784 31.4866 98.7313 31.0533 95.6967C30.9914 95.2699 30.3906 94.749 29.9281 94.579C24.9868 92.7778 20.0128 91.0706 15.0751 89.2622C14.0519 88.886 13.8844 89.1247 14.1102 90.0507C14.8494 93.0853 15.574 96.1271 16.3569 99.1545C16.4661 99.5704 16.8157 100.106 17.1834 100.243C21.9317 102.034 26.7019 103.77 31.4793 105.48C31.716 105.564 32.0911 105.26 32.1821 105.224H32.1857ZM65.8244 119.662C67.8854 119.662 69.9464 119.626 72.0037 119.681C72.9832 119.706 73.6023 119.449 73.8717 118.433C74.3815 116.516 74.9313 114.606 75.5358 112.714C75.8599 111.691 75.6341 111.376 74.5126 111.34C68.2786 111.134 62.0447 110.902 55.8143 110.551C54.4743 110.475 54.2704 110.924 54.3432 112.038C54.4634 113.839 54.5435 115.644 54.5472 117.449C54.5472 118.512 54.955 118.928 56.0292 118.99C59.2955 119.171 62.5544 119.435 65.8244 119.666V119.662ZM40.7174 39.2871C40.914 39.023 41.2672 38.6794 41.4639 38.2671C42.9495 35.171 44.3769 32.0496 45.8881 28.968C46.3068 28.1144 46.2558 27.778 45.2727 27.4525C42.3451 26.4831 39.4757 25.351 36.5481 24.3817C36.0783 24.2262 35.1971 24.3926 34.9131 24.7362C32.579 27.5755 30.3505 30.5052 28.0601 33.3842C27.361 34.2632 27.5977 34.737 28.5772 35.0842C32.3387 36.4116 36.0965 37.7571 39.858 39.0954C40.0292 39.1569 40.2112 39.1749 40.7137 39.2871H40.7174ZM53.757 114.577C53.6732 113.26 54.0774 111.492 53.3783 110.75C52.6209 109.947 50.833 110.103 49.493 109.839C49.3146 109.803 49.1361 109.781 48.9577 109.745C44.3259 108.877 39.6796 108.067 35.066 107.112C33.5658 106.801 33.391 107.199 33.828 108.468C34.4943 110.399 35.1243 112.342 35.7215 114.291C36.0201 115.271 36.6282 115.738 37.6368 115.923C41.6787 116.657 45.6987 117.532 49.7552 118.194C53.8881 118.867 53.9026 118.784 53.757 114.573V114.577ZM10.4215 40.8894C10.163 41.3017 9.90442 41.6128 9.75513 41.9672C8.40055 45.1863 7.09696 48.4234 5.71325 51.6316C5.2508 52.7023 5.49113 53.5305 6.34684 54.1816C8.84116 56.0732 11.3755 57.9215 13.888 59.7878C14.8603 60.5076 15.1297 60.0446 15.4392 59.0825C16.5644 55.5886 17.7369 52.1018 19.026 48.6658C19.4047 47.6566 19.0587 47.3709 18.3123 46.8537C15.8908 45.1682 13.5494 43.3634 11.1825 41.5983C10.9458 41.4211 10.7492 41.1968 10.4215 40.8894ZM97.2272 41.9564C100.996 40.6977 104.605 39.5041 108.188 38.2454C108.37 38.1803 108.534 37.3882 108.373 37.1458C106.229 33.8725 104.047 30.6245 101.804 27.4199C101.604 27.1306 100.861 26.9859 100.468 27.1016C97.8572 27.8503 95.2755 28.7112 92.6719 29.4816C91.9618 29.6914 91.6487 29.8433 92.0128 30.6824C93.4803 34.0425 94.8603 37.4424 96.3023 40.817C96.4589 41.1823 96.8157 41.4645 97.2272 41.96V41.9564ZM14.5872 61.3503C14.4961 61.2635 14.1102 60.8331 13.655 60.4931C11.0879 58.5942 8.4661 56.7604 5.94265 54.8001C5.22531 54.2394 4.90852 53.9718 4.71917 55.0677C4.11106 58.5653 3.46655 62.0592 2.93491 65.5677C2.85116 66.1247 3.10242 66.9927 3.51753 67.3255C6.24124 69.5065 9.04507 71.5899 11.8416 73.6804C12.4752 74.1543 12.7519 73.883 12.8575 73.1343C13.3855 69.3763 13.9536 65.6255 14.5872 61.3431V61.3503ZM26.1703 34.8817C25.868 34.661 25.584 34.4621 25.3073 34.2523C23.2353 32.7006 21.1197 31.2069 19.1206 29.5684C18.4288 29.0005 18.1411 29.1488 17.7369 29.7348C15.5885 32.8598 13.4511 35.9957 11.2808 39.1026C10.7346 39.8839 10.9641 40.477 11.6013 40.9653C13.8953 42.7195 16.2185 44.434 18.5198 46.1773C19.4447 46.8754 19.878 46.5933 20.3842 45.595C22.0446 42.3217 23.8289 39.1135 25.5694 35.8799C25.7406 35.5616 25.9372 35.2614 26.1666 34.878L26.1703 34.8817ZM77.6332 119.492C79.7488 119.308 81.8644 119.156 83.9764 118.935C91.5431 118.147 91.7106 118.02 95.0643 111.21C95.1189 111.101 95.1844 110.996 95.2208 110.884C95.3483 110.494 95.4648 110.099 95.585 109.709C95.1699 109.705 94.7511 109.662 94.3396 109.705C89.6387 110.182 84.9414 110.732 80.2331 111.137C76.6865 111.445 76.6828 111.362 75.7106 114.859C75.5649 115.38 75.4193 115.904 75.2627 116.422C74.6194 118.541 75.4096 119.565 77.6332 119.492ZM97.7625 108.812C102.398 107.17 106.669 105.665 110.926 104.131C111.17 104.045 111.396 103.733 111.509 103.477C112.834 100.446 114.141 97.4039 115.427 94.3584C115.529 94.1161 115.448 93.8014 115.452 93.5193C115.172 93.5772 114.884 93.6169 114.611 93.6965C110.267 94.995 105.919 96.279 101.59 97.6281C101.102 97.78 100.493 98.2177 100.341 98.6626C99.3246 101.621 98.4143 104.616 97.4967 107.607C97.4275 107.828 97.5986 108.121 97.7625 108.819V108.812ZM70.5399 30.5052C72.3205 30.5052 73.8353 30.4726 75.3501 30.516C76.3587 30.545 76.6173 30.1326 76.4061 29.2067C75.7834 26.447 75.2445 23.6692 74.5454 20.9312C74.4361 20.4971 73.6933 19.9618 73.2053 19.9257C70.5508 19.7195 67.8817 19.6869 65.2235 19.5206C64.3788 19.4663 64.0219 19.7448 63.869 20.5405C63.3592 23.199 62.8348 25.8574 62.2668 28.505C62.0228 29.6335 62.4379 30.0024 63.5485 30.0494C65.9664 30.1543 68.3842 30.3605 70.5363 30.5052H70.5399ZM60.4862 29.9011C60.8103 29.525 61.371 29.1633 61.4766 28.7003C62.1029 25.937 62.5981 23.1483 63.1917 20.3814C63.3665 19.5712 63.0897 19.3252 62.3287 19.2023C59.8162 18.7936 57.3219 18.28 54.8057 17.911C54.3323 17.8423 53.564 18.0846 53.32 18.4463C51.5176 21.0867 49.828 23.7994 48.0729 26.4723C47.534 27.2933 47.9636 27.4923 48.681 27.6297C52.4898 28.3567 56.295 29.0946 60.4862 29.9011ZM80.2841 30.3677C80.2877 30.4075 80.295 30.4473 80.2987 30.4835C83.2955 30.1182 86.2923 29.7348 89.2928 29.3984C90.2286 29.2935 90.4361 28.9607 89.93 28.1469C88.2186 25.3908 86.5727 22.5913 84.7848 19.8859C84.4898 19.4374 83.5904 19.148 82.9932 19.1806C80.7648 19.3035 78.5472 19.6508 76.3187 19.7846C75.2736 19.8461 75.1498 20.215 75.3647 21.112C75.9109 23.3871 76.366 25.6838 76.8831 27.9661C77.5167 30.762 76.7993 30.4509 79.9236 30.3822C80.0438 30.3822 80.1639 30.3713 80.2841 30.3677ZM12.5553 81.0915C12.5954 81.0915 12.6318 81.0915 12.6718 81.0915C12.6718 79.4639 12.6136 77.8363 12.6937 76.2123C12.741 75.2972 12.3805 74.8668 11.6377 74.364C8.98681 72.5809 6.42331 70.6712 3.8234 68.8084C3.53938 68.6059 3.25171 68.4033 2.96404 68.2008C2.86209 68.5914 2.65453 68.9857 2.67638 69.3691C2.85845 72.6749 3.05508 75.9772 3.31361 79.2794C3.35367 79.775 3.6122 80.4007 3.98362 80.7009C6.61266 82.8023 9.29268 84.8495 11.9763 86.8822C12.6172 87.3669 12.9413 87.1571 12.8794 86.3216C12.7447 84.5782 12.6573 82.8349 12.5517 81.0915H12.5553ZM28.7774 19.0395C28.457 19.2529 28.1293 19.4121 27.878 19.6508C25.1216 22.2622 22.3796 24.8953 19.6231 27.5031C18.9859 28.1035 19.0332 28.6642 19.6814 29.1488C21.6987 30.6679 23.716 32.1907 25.8025 33.6157C26.0829 33.8074 26.9604 33.6049 27.208 33.3011C29.5931 30.3496 31.8835 27.3259 34.2504 24.3564C34.7711 23.7053 34.6728 23.4594 34.0064 23C32.4188 21.9113 30.9222 20.6961 29.3892 19.5278C29.2035 19.3867 29.0287 19.2348 28.7811 19.0359L28.7774 19.0395ZM126.128 57.5272C125.076 53.9971 123.962 50.25 122.808 46.5173C122.786 46.4414 122.159 46.4016 121.977 46.5426C120.098 48.0364 118.223 49.5411 116.421 51.1217C116.071 51.4291 115.783 52.1308 115.874 52.5648C116.65 56.2758 117.502 59.9687 118.402 63.6543C118.471 63.9328 119.203 64.3488 119.381 64.2547C121.799 62.9454 123.995 61.354 125.499 58.9921C125.717 58.6485 125.83 58.2362 126.132 57.5309L126.128 57.5272ZM122.083 44.745C122.028 44.5388 122.017 44.4086 121.963 44.3074C120.091 40.8062 118.223 37.305 116.311 33.8255C116.253 33.7206 115.634 33.7604 115.43 33.9232C113.835 35.1963 112.259 36.4912 110.737 37.8475C110.449 38.1043 110.194 38.759 110.321 39.0664C111.825 42.6761 113.391 46.2605 115.001 49.8232C115.139 50.127 115.929 50.4959 116.057 50.3947C117.965 48.8575 119.822 47.2552 121.661 45.6312C121.905 45.4178 121.966 45.0018 122.087 44.745H122.083ZM17.4238 101.245C17.4529 101.668 17.3874 101.994 17.5075 102.225C18.8038 104.735 20.1002 107.246 21.4657 109.72C21.706 110.157 22.1939 110.573 22.6637 110.75C26.4434 112.193 30.2449 113.586 34.0465 114.964C34.3487 115.073 34.731 114.968 35.077 114.964C34.9932 114.624 34.924 114.277 34.8221 113.94C34.203 111.929 33.4966 109.944 32.9795 107.907C32.721 106.895 32.2404 106.475 31.2499 106.146C27.0041 104.743 22.8057 103.213 18.589 101.722C18.305 101.621 18.0282 101.491 17.4238 101.241V101.245ZM45.7096 14.9271C45.6878 14.9379 45.4402 14.9922 45.2763 15.1405C42.4288 17.6542 39.5849 20.1716 36.7593 22.7035C36.0492 23.34 36.6464 23.6294 37.1707 23.8175C40.0692 24.8628 42.9641 25.9081 45.8881 26.8738C46.2522 26.9931 46.9987 26.7653 47.2026 26.4578C49.0051 23.756 50.7383 21.0035 52.4534 18.2402C52.5918 18.0159 52.5153 17.3613 52.3842 17.3142C50.2395 16.504 48.0692 15.7553 45.7133 14.9271H45.7096ZM119.254 73.0873C119.214 73.0873 119.177 73.0909 119.137 73.0945C119.137 74.5376 119.174 75.9844 119.123 77.4276C119.093 78.3354 119.447 78.5995 120.135 78.0352C122.079 76.4402 124.024 74.8306 125.848 73.1017C126.354 72.6243 126.671 71.6984 126.664 70.9822C126.635 67.557 126.467 64.1317 126.329 60.7065C126.318 60.4461 126.132 60.1893 126.03 59.9325C125.808 60.1025 125.579 60.2689 125.36 60.4461C123.481 61.9435 121.653 63.5133 119.698 64.9058C118.951 65.4375 118.653 65.8896 118.747 66.7902C118.973 68.8844 119.09 70.9858 119.254 73.0873ZM91.0807 29.3948C94.5945 28.241 97.2891 27.3765 99.9582 26.4289C100.118 26.371 100.235 25.474 100.049 25.2787C97.4603 22.5949 94.8312 19.9474 92.1548 17.3504C91.8599 17.0647 91.1608 16.9706 90.7311 17.0828C89.158 17.4915 87.6287 18.0666 86.0592 18.5006C85.229 18.7285 85.1489 19.0106 85.5932 19.7231C87.3446 22.5262 89.0561 25.3547 90.742 28.194C90.9823 28.6027 91.0115 29.1344 91.0843 29.3948H91.0807ZM115.401 32.5053C115.139 32.093 114.931 31.6626 114.629 31.3081C112.452 28.7401 110.216 26.2191 108.086 23.6113C107.103 22.4105 106.487 22.4503 105.548 23.6836C104.914 24.5155 103.942 25.1376 103.024 25.6983C102.219 26.1902 102.092 26.5121 102.667 27.3367C104.801 30.3894 106.869 33.4891 108.898 36.6142C109.378 37.3556 109.775 37.7282 110.554 37.0844C111.938 35.9378 113.333 34.8021 114.684 33.6193C114.986 33.3553 115.139 32.9249 115.401 32.5089V32.5053ZM63.7197 125.876C64.5317 125.876 65.5003 125.869 66.4689 125.876C70.8021 125.916 70.762 125.902 72.5317 121.858C73.0633 120.639 72.8558 120.364 71.5267 120.339C67.2845 120.266 63.046 120.093 58.8075 119.905C54.0155 119.691 54.5472 118.44 55.1807 123.967C55.29 124.932 55.7306 125.316 56.6628 125.374C58.9605 125.515 61.2581 125.695 63.716 125.873L63.7197 125.876ZM110.263 105.679C109.87 105.679 109.575 105.614 109.32 105.69C105.438 106.819 101.56 107.944 97.6969 109.134C97.1981 109.289 96.6665 109.723 96.397 110.172C95.1444 112.291 93.9719 114.458 92.7848 116.617C92.6501 116.863 92.5882 117.149 92.4935 117.416C92.7848 117.416 93.0943 117.492 93.3601 117.409C96.6373 116.375 99.9145 115.337 103.174 114.248C103.661 114.085 104.157 113.723 104.477 113.322C106.269 111.061 108.006 108.757 109.761 106.464C109.906 106.276 110.023 106.063 110.267 105.679H110.263ZM37.3018 116.834C37.2909 116.935 37.1307 117.301 37.2508 117.492C38.2085 119.019 39.1807 120.541 40.2331 122.003C40.5207 122.4 41.0742 122.748 41.5622 122.842C45.5385 123.609 49.5258 124.328 53.5203 124.99C53.8007 125.037 54.4671 124.498 54.4561 124.256C54.3979 122.939 54.2486 121.616 53.9755 120.324C53.8954 119.945 53.3528 119.449 52.9559 119.384C47.8908 118.519 42.8111 117.72 37.3018 116.834ZM3.87074 82.8421C4.34411 84.5348 4.95221 86.3108 5.32363 88.1337C6.3869 93.3601 10.0319 96.3622 14.3905 98.7855C14.6746 98.9411 15.0278 98.97 15.3519 99.0568C15.3227 98.7711 15.3191 98.4781 15.2572 98.1996C14.5981 95.2626 13.9536 92.3257 13.2399 89.4032C13.1124 88.8824 12.7847 88.2892 12.3623 87.9818C9.78062 86.0974 7.14794 84.2817 4.52982 82.4515C4.36232 82.3321 4.14384 82.2851 3.9472 82.2055C3.929 82.3755 3.90715 82.5455 3.87074 82.8493V82.8421ZM44.7301 14.5147C44.6209 14.3267 44.5881 14.2001 44.508 14.135C43.361 13.256 42.2285 12.3554 41.0342 11.5416C40.8412 11.4078 40.3278 11.585 40.0474 11.755C36.752 13.7696 33.4748 15.8168 30.1903 17.8495C29.4839 18.2872 29.4729 18.7646 30.1138 19.2384C31.6104 20.3488 33.0888 21.4954 34.6582 22.4973C34.975 22.6998 35.8052 22.5045 36.1475 22.2043C38.8348 19.8714 41.4602 17.4698 44.1038 15.0862C44.3187 14.8945 44.5262 14.6956 44.7228 14.5111L44.7301 14.5147ZM75.1935 125.71C77.6551 125.406 80.2477 125.164 82.8075 124.733C83.7689 124.571 84.7848 124.129 85.5495 123.533C86.8239 122.538 87.9382 121.33 89.0816 120.176C89.3911 119.861 89.5622 119.413 89.7989 119.022C89.3255 119.033 88.8522 119.011 88.3824 119.055C84.4134 119.431 80.448 119.966 76.468 120.147C74.5563 120.234 73.442 120.755 72.9286 122.614C72.6337 123.681 72.0802 124.679 71.6396 125.71H75.1899H75.1935ZM126.474 75.4925C126.314 74.9464 126.223 74.6389 126.132 74.3315C125.903 74.5051 125.677 74.6823 125.448 74.8559C123.678 76.1978 121.897 77.5252 120.149 78.8924C119.712 79.236 119.133 79.6701 119.046 80.1439C118.394 83.6198 117.848 87.1173 117.273 90.6077C117.182 91.1538 117.164 91.6783 117.954 91.1972C120.557 89.6166 123.201 87.9384 124.177 84.9218C125.189 81.7968 125.753 78.5271 126.474 75.4961V75.4925ZM95.4248 13.7552C94.6783 14.4207 94.0338 15.1513 93.2436 15.6577C92.3442 16.2328 92.4716 16.58 93.1598 17.2347C95.3009 19.2746 97.4311 21.329 99.4594 23.4775C101.844 26.0057 102.026 26.06 104.619 23.633C104.881 23.3871 105.111 23.1013 105.369 22.8481C106.09 22.1464 106.036 21.5424 105.216 20.9348C102.212 18.7031 99.2263 16.4498 96.2295 14.2109C95.9928 14.0337 95.7124 13.9179 95.4248 13.7552ZM69.9099 19.1625C70.9696 19.1625 71.9382 19.1299 72.9068 19.1733C73.8426 19.2131 74.0865 18.8514 73.7989 17.9906C73.2126 16.2219 72.6992 14.4279 72.0693 12.6773C71.8653 12.1095 71.4393 11.245 71.0242 11.1872C69.4876 10.981 67.9108 11.0352 66.3487 11.0606C66.2176 11.0606 66.0501 11.5561 65.9773 11.8382C65.4821 13.7588 65.0196 15.6866 64.5135 17.6072C64.2841 18.4789 64.5972 18.8044 65.4712 18.8478C66.9823 18.9201 68.4898 19.0612 69.9099 19.1661V19.1625ZM62.7584 18.6633C63.0497 18.327 63.6032 17.9436 63.7816 17.4336C64.1967 16.2472 64.4261 14.9958 64.7392 13.7733C65.4639 10.9593 65.4712 10.9267 62.5508 10.3625C61.7898 10.2142 60.65 10.0406 60.2349 10.4421C58.3778 12.2397 56.7138 14.2398 54.9878 16.1677C54.467 16.75 54.6309 17.1298 55.3701 17.2708C57.686 17.7157 60.0055 18.1461 62.762 18.6633H62.7584ZM76.4134 19.1444C78.3906 18.9238 80.3678 18.6706 82.3487 18.4934C83.5431 18.3885 83.503 17.9544 82.8403 17.1949C81.6569 15.8349 80.3715 14.54 79.3483 13.0716C77.8444 10.9123 75.9254 10.3914 73.453 10.9267C72.5535 11.1221 72.3678 11.3137 72.681 12.1782C73.351 14.0373 73.9955 15.9145 74.4762 17.8315C74.7638 18.9853 75.3574 19.2891 76.4134 19.1408V19.1444ZM17.1725 23.7741C17.4311 24.8266 17.584 25.5861 17.8061 26.3276C18.1375 27.4308 18.5307 27.6297 19.4629 26.6604C21.5931 24.4432 23.7633 22.2441 26.1084 20.262C27.5467 19.0431 28.7192 18.034 27.4556 16.0772C27.3646 15.9362 27.35 15.7264 27.361 15.5492C27.4338 14.3447 27.0223 14.1567 26.1011 14.9271C23.5521 17.0538 20.9413 19.1082 18.4798 21.329C17.7952 21.9475 17.5476 23.0398 17.1725 23.7741ZM8.80838 35.2072C9.11425 36.2597 9.35458 37.2435 9.69323 38.1948C10.0027 39.0628 10.3414 39.193 10.9386 38.2779C12.6718 35.6087 14.3942 32.9177 16.3387 30.4039C17.4165 29.0114 18.2103 27.8684 17.005 26.1938C16.7174 25.7923 16.7647 25.1557 16.6482 24.6313C16.5863 24.3528 16.5025 24.0779 16.4261 23.7994C16.153 23.9766 15.7997 24.096 15.6177 24.3419C13.6441 26.9895 11.6377 29.619 9.77698 32.3426C9.23078 33.1419 9.12154 34.2306 8.80474 35.2072H8.80838ZM56.2877 8.43468C56.102 8.50701 55.8617 8.56488 55.6578 8.68786C52.8467 10.3553 50.0428 12.0263 47.239 13.7045C46.427 14.1928 46.802 14.5256 47.4284 14.7498C49.1361 15.3683 50.8403 16.0121 52.5772 16.5294C52.985 16.6523 53.7024 16.4751 53.9864 16.1677C55.7597 14.2688 57.4602 12.3048 59.1498 10.3336C59.2991 10.1563 59.3027 9.56316 59.219 9.52699C58.2759 9.12913 57.3 8.79999 56.2841 8.43829L56.2877 8.43468ZM84.8394 18.1714C86.5727 17.6434 88.1312 17.1659 89.6897 16.6885C90.5927 16.4136 90.7784 16.0447 89.8972 15.4479C87.4502 13.7877 84.9814 12.1565 82.5927 10.4168C81.3801 9.53422 80.2841 9.51975 78.9259 10.0623C77.9791 10.4421 77.9391 10.6048 78.5945 11.321C80.3824 13.2777 82.0902 15.3068 83.8453 17.2925C84.1366 17.6217 84.508 17.8857 84.8358 18.1714H84.8394ZM27.838 14.7064C28.1584 15.7662 28.3041 16.4787 28.6063 17.1153C28.701 17.3179 29.3273 17.5132 29.5166 17.3974C32.9723 15.3068 36.4133 13.1909 39.818 11.028C41.016 10.2648 39.5995 9.30997 39.8726 8.44914C39.4356 8.40212 38.9113 8.17787 38.5763 8.34064C35.4702 9.81272 32.3678 11.292 29.3382 12.9088C28.6609 13.2705 28.2713 14.1639 27.8343 14.71L27.838 14.7064ZM3.23714 47.9894C3.53573 48.9913 3.81976 50.0293 4.16568 51.0493C4.24579 51.2844 4.5371 51.4508 4.73009 51.6461C4.88303 51.411 5.07602 51.1904 5.17797 50.9336C6.20483 48.4234 7.09332 45.8518 8.26947 43.4176C9.22714 41.4355 10.3013 39.6054 8.65181 37.5003C8.44789 37.2399 8.47338 36.8095 8.3605 36.4659C8.28039 36.2163 8.1493 35.9848 8.04006 35.7425C7.858 35.9631 7.61038 36.1548 7.50843 36.4044C6.32135 39.3015 5.13064 42.1951 3.99818 45.1139C3.65226 46.0037 3.49932 46.9658 3.2335 47.9894H3.23714ZM122.837 89.1862C122.775 88.9837 122.727 88.8426 122.684 88.6979C122.534 88.7847 122.378 88.8607 122.24 88.9583C120.608 90.0941 118.977 91.2298 117.36 92.3836C117.076 92.5861 116.741 92.8248 116.617 93.125C115.368 96.185 114.159 99.263 112.947 102.337C112.885 102.493 112.892 102.674 112.87 102.844C113.074 102.818 113.307 102.844 113.478 102.753C113.854 102.558 114.192 102.305 114.549 102.081C117.404 100.283 118.82 97.3894 120.291 94.5573C121.205 92.7959 121.992 90.973 122.837 89.1826V89.1862ZM53.5421 6.52494C52.8102 6.72749 52.3915 6.81068 51.9946 6.95535C49.1034 8.01873 46.2012 9.05317 43.3391 10.1853C41.5476 10.8942 41.5585 11.1221 43.077 12.3012C45.3564 14.0698 45.3273 14.0301 47.7197 12.4893C49.7479 11.1835 51.8526 9.99719 53.9136 8.73488C54.3432 8.47084 54.7147 8.11277 55.1152 7.79448C54.5362 7.3279 53.9573 6.8577 53.5385 6.5177L53.5421 6.52494ZM102.107 115.854C101.364 115.951 101.098 115.959 100.85 116.027C98.0538 116.787 95.2536 117.532 92.4753 118.349C91.8781 118.527 91.27 118.888 90.8258 119.326C89.5804 120.549 88.4152 121.847 87.2281 123.127C87.0315 123.341 86.8749 123.59 86.7001 123.826C86.9769 123.811 87.2645 123.833 87.534 123.782C92.8576 122.744 97.3219 120.096 101.265 116.49C101.397 116.367 101.553 116.273 102.11 115.861L102.107 115.854ZM83.0806 7.8415C82.7238 8.14532 82.3305 8.47808 81.9336 8.81445C82.1885 9.09657 82.3997 9.43657 82.7056 9.64635C85.1344 11.3174 87.6141 12.9233 90.0174 14.6305C91.7907 15.8928 92.184 15.8964 93.7716 14.352C94.5108 13.6358 94.6273 13.1186 93.564 12.6303C90.3924 11.1618 87.239 9.66443 84.0747 8.18511C83.8053 8.05851 83.5103 7.98618 83.0806 7.83788V7.8415ZM95.5449 12.0118C95.8144 12.4856 95.971 13.1041 96.3715 13.408C99.4302 15.7481 102.536 18.0304 105.639 20.3163C105.85 20.4718 106.152 20.5007 106.411 20.5912C106.48 20.3091 106.691 19.9618 106.596 19.7557C106.039 18.544 105.704 16.9996 104.75 16.2472C102.351 14.3556 99.6596 12.8256 97.0816 11.1618C96.204 10.594 95.443 10.301 95.5486 12.0154L95.5449 12.0118ZM116.148 30.0639C115.947 29.2899 115.966 28.4363 115.554 27.9263C113.063 24.8411 110.482 21.8318 107.911 18.8116C107.82 18.7068 107.463 18.667 107.368 18.7502C107.103 18.9889 107.452 21.9584 107.732 22.2767C110.125 24.9966 112.51 27.7201 114.906 30.4401C115.135 30.7005 115.416 30.9211 115.674 31.1598C115.834 30.7909 115.995 30.4256 116.151 30.0639H116.148ZM62.4525 126.603C62.4525 126.567 62.4525 126.531 62.4525 126.495C60.7593 126.383 59.0661 126.238 57.3728 126.173C56.8376 126.151 56.2914 126.336 55.7524 126.426C56.0583 127.124 56.3023 127.858 56.7028 128.499C56.8339 128.708 57.3728 128.712 57.7297 128.73C60.3915 128.86 63.0606 129.117 65.7151 129.012C66.793 128.969 67.8562 128.162 68.8831 127.623C69.1161 127.5 69.1708 127.052 69.3055 126.752C69.0215 126.701 68.7374 126.611 68.4498 126.611C66.4507 126.6 64.4516 126.603 62.4525 126.603ZM0.666364 60.938C0.972236 62.1678 1.20892 63.2167 1.51115 64.2439C1.58034 64.4754 1.88257 64.6417 2.07556 64.837C2.14474 64.6092 2.23214 64.3849 2.27583 64.1535C2.77834 61.3756 3.0041 58.5147 3.85253 55.8454C4.51889 53.7584 4.02731 52.138 3.1097 50.4272C3.00774 50.2355 2.82567 50.0872 2.68002 49.9208C2.59627 50.1415 2.47246 50.3549 2.43241 50.5864C1.82795 54.0731 1.23805 57.5634 0.662723 60.938H0.666364ZM40.5826 8.26468C40.7793 9.6572 40.8812 10.4529 42.3159 9.8706C45.5676 8.55404 48.8849 7.40385 52.1584 6.14154C52.5044 6.00772 52.7301 5.57369 53.0105 5.2771C52.6355 5.09263 52.2131 4.68754 51.8963 4.75988C48.4734 5.5339 45.0578 6.34409 41.6678 7.24471C41.1762 7.37492 40.823 8.02596 40.5826 8.26468ZM54.2522 128.354C55.0752 128.484 55.5485 128.408 55.2281 127.352C54.9441 126.415 54.6236 125.858 53.4693 125.703C50.1776 125.261 46.9113 124.618 43.6341 124.071C43.2044 123.999 42.7602 124.032 42.3196 124.014C42.6473 124.346 42.9495 124.715 43.31 125.008C46.4925 127.627 50.5162 127.536 54.2522 128.35V128.354ZM122.928 41.8804C122.666 40.9906 122.516 40.0213 122.108 39.1713C120.885 36.6214 119.589 34.104 118.252 31.6083C117.928 31.0043 117.338 30.5413 116.872 30.0097C116.778 30.9428 116.661 31.8724 116.61 32.8055C116.599 33.0008 116.861 33.2034 116.978 33.4132C118.591 36.3067 120.197 39.2039 121.813 42.0938C122.006 42.4374 122.265 42.7412 122.491 43.0668C122.622 42.7051 122.753 42.347 122.924 41.8768L122.928 41.8804ZM95.0934 11.8961C95.1553 11.6899 95.2172 11.4837 95.2828 11.2776C94.7074 10.6555 94.2486 9.75124 93.5349 9.4655C90.5709 8.28276 87.534 7.27364 84.508 6.24643C84.1803 6.13431 83.7543 6.32239 83.3719 6.36941C83.6086 6.71302 83.7689 7.21215 84.0966 7.3713C87.4102 8.96998 90.742 10.5216 94.092 12.0444C94.3506 12.1601 94.7584 11.9539 95.0934 11.8961ZM71.0096 128.915C75.463 128.549 78.6091 127.808 81.1835 126.401C81.4348 126.263 81.6496 126.064 81.879 125.894C81.5695 125.855 81.2527 125.757 80.9468 125.779C77.8699 126.021 74.7893 126.26 71.716 126.56C71.2281 126.607 70.6892 126.857 70.3214 127.178C69.8444 127.594 69.5167 128.177 69.1234 128.687L71.006 128.915H71.0096ZM69.3565 10.3733C71.1698 10.4059 71.2281 10.3155 70.4452 8.62999C70.2449 8.19596 70.0483 7.75831 69.808 7.3496C69.3637 6.59366 68.8904 5.85581 68.4279 5.11072C68.0456 5.93176 67.5941 6.7311 67.2955 7.5847C66.3342 10.3155 66.356 10.3227 69.3565 10.3733ZM52.6318 2.81759C50.4725 3.17566 48.4188 3.39268 46.4343 3.88458C45.0615 4.22457 43.7761 4.92264 42.4689 5.50496C42.2613 5.599 42.1557 5.92453 42.0064 6.14154C42.2358 6.13431 42.4725 6.15963 42.6946 6.11261C45.9937 5.38199 49.2927 4.6586 52.5845 3.8882C52.9377 3.80501 53.229 3.4614 53.5494 3.24077C53.2254 3.09247 52.9049 2.94418 52.6318 2.81759ZM64.9286 10.1274C65.2782 9.80187 65.8025 9.52699 65.9846 9.10381C66.4361 8.0549 66.7383 6.9445 67.077 5.85219C67.1425 5.64602 67.0952 5.40731 67.0988 5.17944C66.8804 5.23731 66.6255 5.23731 66.4507 5.35667C65.5585 5.97878 64.6555 6.59366 63.8144 7.28088C63.0861 7.87767 62.4306 8.5685 61.7461 9.21593C62.711 9.49082 63.676 9.7657 64.925 10.1202L64.9286 10.1274ZM73.0815 10.5867C73.1799 10.4819 73.2818 10.377 73.3801 10.2721C73.6787 10.2504 73.9882 10.2612 74.2795 10.1997C74.7274 10.1057 75.1644 9.96464 75.605 9.84166C75.3246 9.4872 75.0988 9.06764 74.7529 8.79637C73.4784 7.7981 72.1712 6.83961 70.8567 5.88836C70.5799 5.68943 70.2377 5.5773 69.9281 5.42539C70.0228 5.79794 70.0702 6.18856 70.2231 6.53579C70.6091 7.41109 70.955 8.32255 71.4866 9.10742C71.8835 9.69337 72.5426 10.1021 73.0852 10.5904L73.0815 10.5867ZM126.824 54.6662C125.972 51.4074 125.072 47.9351 124.144 44.4665C124.042 44.0867 123.78 43.7467 123.59 43.3887C123.416 43.8263 123.201 44.2567 123.081 44.7088C123.026 44.915 123.139 45.1718 123.204 45.3961C124.162 48.6079 125.12 51.8197 126.092 55.0279C126.154 55.2305 126.358 55.3933 126.493 55.5705C126.565 55.3679 126.638 55.1654 126.82 54.6662H126.824ZM64.6446 5.11072C62.4889 5.92091 60.2386 6.75642 58.0028 7.6281C57.8972 7.66789 57.8863 8.23574 57.9008 8.23936C58.8621 8.43829 60.0565 9.04594 60.752 8.68786C62.2704 7.91022 63.5412 6.64791 64.9031 5.57007C65.0087 5.48688 65.0342 5.30603 65.0961 5.17221C64.9832 5.15774 64.8703 5.13965 64.6482 5.11072H64.6446ZM1.90442 71.749C1.94447 71.749 1.98088 71.749 2.02094 71.749C2.02094 70.4252 2.08648 69.0978 1.99545 67.7776C1.94811 67.094 1.65316 66.4177 1.42012 65.7558C1.35093 65.5604 1.11789 65.423 0.961312 65.2602C0.881203 65.4555 0.717342 65.6545 0.735549 65.8389C1.0305 69.3148 1.33637 72.7907 1.67137 76.2593C1.69322 76.5016 1.94811 76.7223 2.09012 76.9538C2.12654 76.7223 2.19936 76.4836 2.18844 76.2557C2.10469 74.7547 1.99909 73.25 1.90078 71.749H1.90442ZM77.3674 9.71869C77.7352 9.63911 77.9828 9.61741 78.2049 9.53061C78.6382 9.36061 79.0606 9.15806 79.4866 8.96636C79.1225 8.70233 78.7912 8.36957 78.387 8.18872C76.5736 7.38215 74.7384 6.61536 72.9068 5.84496C72.6992 5.75815 72.4625 5.73645 72.2404 5.68581C72.3424 5.85942 72.4006 6.08729 72.5463 6.20303C73.8644 7.25194 75.1899 8.29 76.5299 9.30636C76.7993 9.5089 77.1453 9.61379 77.3674 9.71869ZM42.6218 125.355C42.163 125.005 41.9372 124.889 41.7843 124.712C39.7379 122.31 36.5116 122.578 33.9663 121.312C33.879 121.268 33.7479 121.323 33.635 121.33C33.7151 121.456 33.7661 121.652 33.8826 121.706C36.4971 122.932 39.1152 124.144 41.737 125.345C41.8826 125.413 42.0902 125.352 42.6218 125.352V125.355ZM62.0046 4.78881C59.9108 5.19391 57.726 5.60624 55.5485 6.05112C55.3082 6.09814 55.1079 6.32962 54.8894 6.4743C55.046 6.6443 55.1662 6.89025 55.3628 6.96982C55.7852 7.14705 56.3132 7.45087 56.6737 7.33151C58.549 6.69855 60.3879 5.94985 62.2304 5.23008C62.3833 5.16859 62.4925 4.99859 62.62 4.88285C62.4489 4.85753 62.2777 4.83222 62.0046 4.79243V4.78881ZM75.3319 5.50135C75.026 5.55198 74.9131 5.57007 74.7966 5.59177C74.8986 5.7039 74.9787 5.86304 75.1061 5.92091C76.8503 6.72749 78.5872 7.55215 80.3606 8.29C80.6701 8.42021 81.1653 8.23936 81.5185 8.0766C81.635 8.02235 81.6314 7.35321 81.5695 7.33513C79.443 6.68047 77.3055 6.0692 75.3319 5.50135ZM54.4743 5.47603C56.5936 5.06732 58.4871 4.70562 60.3842 4.3367C60.4971 4.315 60.5991 4.25351 60.7083 4.2101C60.5881 4.15223 60.4643 4.03649 60.3478 4.04011C58.4179 4.145 56.488 4.23904 54.5654 4.40542C54.3178 4.42712 54.0993 4.81775 53.8699 5.03838C54.1211 5.21923 54.3687 5.40007 54.478 5.47603H54.4743ZM77.0287 4.76711C76.854 4.80328 76.5918 4.85392 76.3333 4.90817C76.5991 5.03838 76.854 5.21561 77.138 5.29518C78.5363 5.69666 79.9345 6.09452 81.3474 6.44175C81.686 6.52494 82.0756 6.40196 82.4434 6.37664C82.1667 6.10176 81.9263 5.65326 81.6023 5.58454C80.1239 5.26263 78.62 5.042 77.0324 4.77073L77.0287 4.76711ZM69.4293 1.27316C68.4789 1.19359 67.8271 1.10316 67.1717 1.09955C66.9459 1.09955 66.7201 1.30933 66.4907 1.42507C67.0697 1.89889 67.6487 2.3727 68.224 2.85014C68.5408 2.43781 68.854 2.02548 69.4256 1.27316H69.4293ZM77.2581 3.55544C77.2545 3.58799 77.2509 3.62055 77.2472 3.6531C76.8867 3.6531 76.5226 3.64225 76.1621 3.65671C75.9254 3.66756 75.6887 3.72182 75.452 3.75437C75.6705 3.82309 75.8817 3.92075 76.1038 3.9533C77.3565 4.13777 78.6091 4.31499 79.8653 4.47052C80.0583 4.49584 80.2659 4.39818 80.4662 4.3584C80.2914 4.21372 80.1312 3.98224 79.9345 3.94607C79.0497 3.78331 78.1539 3.67842 77.2618 3.55182L77.2581 3.55544ZM72.7575 1.71804C72.0073 1.59145 71.4794 1.38167 71.006 1.46124C70.5362 1.54081 70.1066 1.89889 69.6878 2.17739C69.5859 2.24611 69.6041 2.48845 69.564 2.64759C70.0192 2.59695 70.4743 2.57525 70.9222 2.48845C71.3337 2.40887 71.7379 2.27866 72.1384 2.14122C72.2768 2.0942 72.3897 1.97123 72.7575 1.71081V1.71804ZM55.5631 3.55906C57.067 3.45778 58.3269 3.37821 59.5904 3.28055C59.7579 3.26609 59.9181 3.16843 60.082 3.10694C59.9327 3.04907 59.7798 2.94418 59.6305 2.94056C58.3669 2.89716 57.1034 2.84291 55.8398 2.86822C55.5376 2.87546 55.239 3.17205 54.9368 3.33481C55.2172 3.43608 55.4975 3.53736 55.5667 3.56267L55.5631 3.55906ZM63.5267 1.05976C63.29 1.12486 63.0169 1.20082 62.7474 1.27678C62.9841 1.43592 63.2026 1.63485 63.4575 1.74698C63.7889 1.89165 64.1421 2.00739 64.4953 2.06165C64.965 2.13399 65.4457 2.13399 65.919 2.16654C65.4966 1.84825 65.1034 1.46847 64.6373 1.22614C64.3351 1.07061 63.9309 1.1104 63.5267 1.05614V1.05976ZM59.9036 1.57336C59.889 1.61677 59.8781 1.65655 59.8635 1.69996C59.7433 1.69272 59.6195 1.65655 59.5067 1.68187C59.1644 1.75421 58.8294 1.85187 58.4871 1.93867C58.793 2.0291 59.0952 2.13399 59.4047 2.20633C59.5758 2.24611 59.7615 2.23164 59.94 2.2425C60.7629 2.2859 61.5859 2.3293 62.4052 2.3727C61.5713 2.10867 60.7338 1.84102 59.8999 1.57698L59.9036 1.57336ZM54.3214 2.25696C54.7183 2.10867 55.2354 1.91335 55.7561 1.72166C55.5594 1.66017 55.3519 1.51911 55.1698 1.54805C54.4161 1.65655 53.6696 1.8157 52.9195 1.95676C53.3237 2.04356 53.7279 2.13037 54.3214 2.26058V2.25696ZM75.2008 2.97311C75.452 2.92248 75.9946 2.81397 76.5372 2.70546C75.9291 2.60419 75.3246 2.48121 74.7165 2.40887C74.4871 2.37994 74.2395 2.43419 74.0137 2.4993C73.8062 2.55717 73.6168 2.67291 73.4165 2.76333C73.6095 2.83205 73.7989 2.94056 73.9992 2.96588C74.2905 3.00205 74.5927 2.97311 75.2008 2.97311ZM127.064 58.5436C127.017 58.4496 126.966 58.3555 126.919 58.2579C126.875 58.3447 126.78 58.4459 126.795 58.5219C126.82 58.6413 126.919 58.7425 126.984 58.851C127.01 58.7498 127.035 58.6485 127.064 58.5436Z", fill: "currentColor" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/StartScreen.js
function StartScreen(props) {
  const WelcomeScreen = props.welcomeScreen;
  if (WelcomeScreen) {
    if (typeof WelcomeScreen === "function") {
      return (0, import_jsx_runtime42.jsx)(WelcomeScreen, {});
    }
  }
  const title = (typeof WelcomeScreen === "object" ? WelcomeScreen == null ? void 0 : WelcomeScreen.title : void 0) || props.connectLocale.welcomeScreen.defaultTitle;
  const subtitle = (typeof WelcomeScreen === "object" ? WelcomeScreen == null ? void 0 : WelcomeScreen.subtitle : void 0) || props.connectLocale.welcomeScreen.defaultSubtitle;
  const img = typeof WelcomeScreen === "object" ? WelcomeScreen == null ? void 0 : WelcomeScreen.img : void 0;
  const showTOS = props.meta.termsOfServiceUrl || props.meta.privacyPolicyUrl;
  return (0, import_jsx_runtime42.jsxs)(Container, { animate: "fadein", flex: "column", fullHeight: true, children: [(0, import_jsx_runtime42.jsxs)(Container, { center: "both", expand: true, flex: "column", p: "lg", style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime42.jsx)(Container, { center: "x", flex: "row", children: img ? (0, import_jsx_runtime42.jsx)(Img, { client: props.client, height: img.height ? String(img.height) : void 0, src: img.src, width: img.width ? String(img.width) : void 0 }) : (0, import_jsx_runtime42.jsx)(GlobalContainer, { children: (0, import_jsx_runtime42.jsx)(GlobeIcon, { size: "150" }) }) }), (0, import_jsx_runtime42.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime42.jsx)(Text, { center: true, color: "primaryText", multiline: true, weight: 600, children: title }), (0, import_jsx_runtime42.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime42.jsx)(Text, { color: "secondaryText", multiline: true, style: {
    textAlign: "center"
  }, children: subtitle }), (0, import_jsx_runtime42.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime42.jsx)(Link, { center: true, href: "https://blog.thirdweb.com/web3-wallet/", target: "_blank", children: props.connectLocale.newToWallets })] }), (0, import_jsx_runtime42.jsx)(Container, { flex: "column", gap: "lg", py: "lg", children: (0, import_jsx_runtime42.jsxs)("div", { children: [showTOS && (0, import_jsx_runtime42.jsx)(TOS, { locale: props.connectLocale.agreement, privacyPolicyUrl: props.meta.privacyPolicyUrl, termsOfServiceUrl: props.meta.termsOfServiceUrl }), props.meta.showThirdwebBranding !== false && (0, import_jsx_runtime42.jsx)(Container, { style: {
    paddingTop: spacing.xl
  }, children: (0, import_jsx_runtime42.jsx)(PoweredByThirdweb, {}) })] }) })] });
}
var floatingAnimation = keyframes`
  from {
    transform: translateY(4px);
  }
  to {
    transform: translateY(-4px);
  }
`;
var GlobalContainer = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    animation: `${floatingAnimation} 2s ease infinite alternate`,
    color: theme.colors.accentText,
    filter: `drop-shadow(0px 6px 10px ${theme.colors.accentText})`
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectModalSkeleton.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
function ConnectModalWideLayout(props) {
  return (0, import_jsx_runtime43.jsxs)("div", { style: {
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    height: "100%"
  }, children: [(0, import_jsx_runtime43.jsxs)(LeftContainer, { children: [" ", props.left, " "] }), (0, import_jsx_runtime43.jsx)(Container, { flex: "column", relative: true, scrollY: true, children: props.right })] });
}
function ConnectModalCompactLayout(props) {
  return (0, import_jsx_runtime43.jsx)(Container, { flex: "column", relative: true, scrollY: true, style: {
    maxHeight: compactModalMaxHeight
  }, children: props.children });
}
var LeftContainer = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    ...noScrollBar,
    borderRight: `1px solid ${theme.colors.separatorLine}`,
    position: "relative"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectModalContent.js
var AllWalletsUI = (0, import_react26.lazy)(() => import("./AllWalletsUI-FQDIKKBF.js"));
var ConnectModalContent = (props) => {
  const { setModalVisibility, onClose, shouldSetActive } = props;
  const { screen, setScreen, initialScreen } = props.screenSetup;
  const setActiveWallet = useSetActiveWallet();
  const setSelectionData = useSetSelectionData();
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const siweAuth = useSiweAuth(activeWallet, activeAccount, props.auth);
  const showSignatureScreen = siweAuth.requiresAuth && !siweAuth.isLoggedIn;
  const connectionManager = useConnectionManager();
  const handleConnected = (0, import_react26.useCallback)((wallet) => {
    if (shouldSetActive) {
      setActiveWallet(wallet);
    } else {
      connectionManager.addConnectedWallet(wallet);
    }
    if (props.onConnect) {
      props.onConnect(wallet);
    }
    onModalUnmount(() => {
      setSelectionData({});
      setModalVisibility(true);
    });
    if (showSignatureScreen) {
      setScreen(reservedScreens.signIn);
    } else {
      setScreen(initialScreen);
      onClose == null ? void 0 : onClose();
    }
  }, [
    setModalVisibility,
    onClose,
    props.onConnect,
    setActiveWallet,
    showSignatureScreen,
    setScreen,
    setSelectionData,
    shouldSetActive,
    initialScreen,
    connectionManager
  ]);
  const handleBack = (0, import_react26.useCallback)(() => {
    setSelectionData({});
    setScreen(initialScreen);
  }, [setScreen, initialScreen, setSelectionData]);
  const walletList = (0, import_jsx_runtime44.jsx)(WalletSelector, { accountAbstraction: props.accountAbstraction, chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, done: handleConnected, goBack: props.wallets.length > 1 ? handleBack : void 0, hideHeader: props.hideHeader, meta: props.meta, modalHeader: props.modalHeader, onShowAll: () => {
    setScreen(reservedScreens.showAll);
  }, recommendedWallets: props.recommendedWallets, selectWallet: (newWallet) => {
    if (newWallet.onConnectRequested) {
      newWallet.onConnectRequested().then(() => setScreen(newWallet)).catch(console.error);
    } else {
      setScreen(newWallet);
    }
  }, setModalVisibility, showAllWallets: props.showAllWallets, size: props.size, title: props.meta.title || props.connectLocale.defaultModalTitle, walletConnect: props.walletConnect, walletIdsToHide: props.walletIdsToHide, wallets: props.wallets });
  const showAll = (0, import_jsx_runtime44.jsx)(import_react26.Suspense, { fallback: (0, import_jsx_runtime44.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime44.jsx)(AllWalletsUI, { client: props.client, connectLocale: props.connectLocale, onBack: handleBack, onSelect: setScreen, recommendedWallets: props.recommendedWallets, size: props.size, specifiedWallets: props.wallets }) });
  const getStarted = (0, import_jsx_runtime44.jsx)(StartScreen, { client: props.client, connectLocale: props.connectLocale, meta: props.meta, welcomeScreen: props.welcomeScreen });
  const goBack = props.wallets.length > 1 ? handleBack : void 0;
  const getWalletUI = (wallet) => {
    if (props.accountAbstraction) {
      return (0, import_jsx_runtime44.jsx)(SmartConnectUI, { accountAbstraction: props.accountAbstraction, chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, done: (smartWallet2) => {
        handleConnected(smartWallet2);
      }, meta: props.meta, onBack: goBack, personalWallet: wallet, setModalVisibility: props.setModalVisibility, size: props.size, walletConnect: props.walletConnect }, wallet.id);
    }
    return (0, import_jsx_runtime44.jsx)(AnyWalletConnectUI, { chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, done: () => {
      handleConnected(wallet);
    }, meta: props.meta, onBack: goBack, setModalVisibility: props.setModalVisibility, size: props.size, wallet, walletConnect: props.walletConnect }, wallet.id);
  };
  const signatureScreen = (0, import_jsx_runtime44.jsx)(SignatureScreen, { auth: props.auth, client: props.client, connectLocale: props.connectLocale, modalSize: props.size, onClose, onDone: onClose, privacyPolicyUrl: props.meta.privacyPolicyUrl, termsOfServiceUrl: props.meta.termsOfServiceUrl });
  return (0, import_jsx_runtime44.jsx)(ScreenSetupContext.Provider, { value: props.screenSetup, children: props.size === "wide" ? (0, import_jsx_runtime44.jsx)(ConnectModalWideLayout, { left: walletList, right: (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [screen === reservedScreens.signIn && signatureScreen, screen === reservedScreens.main && getStarted, screen === reservedScreens.getStarted && getStarted, screen === reservedScreens.showAll && showAll, typeof screen !== "string" && getWalletUI(screen)] }) }) : (0, import_jsx_runtime44.jsxs)(ConnectModalCompactLayout, { children: [screen === reservedScreens.signIn && signatureScreen, screen === reservedScreens.main && walletList, screen === reservedScreens.getStarted && getStarted, screen === reservedScreens.showAll && showAll, typeof screen !== "string" && getWalletUI(screen)] }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletSwitcherConnectionScreen.js
function WalletSwitcherConnectionScreen(props) {
  const walletChain = useActiveWalletChain();
  const connectedWallets = useConnectedWallets();
  const wallets = props.wallets || getDefaultWallets({
    appMetadata: props.appMetadata,
    chains: props.chains
  }).filter((w) => w.id !== "inApp");
  const screenSetup = useSetupScreen({
    size: "compact",
    wallets,
    welcomeScreen: void 0
  });
  return (0, import_jsx_runtime45.jsx)(ConnectModalContent, { accountAbstraction: props.accountAbstraction, auth: void 0, chain: props.chain || walletChain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, hideHeader: props.isEmbed, isOpen: true, meta: {
    showThirdwebBranding: false
  }, modalHeader: {
    onBack: props.onBack,
    title: "Connect"
  }, onClose: () => {
  }, onConnect: (w) => {
    props.onSelect(w);
    props.onBack();
  }, recommendedWallets: props.recommendedWallets, screenSetup, setModalVisibility: () => {
  }, shouldSetActive: false, showAllWallets: props.showAllWallets, size: "compact", walletConnect: props.walletConnect, walletIdsToHide: connectedWallets.map((x) => x.id), wallets, welcomeScreen: void 0 });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Details/WalletManagerScreen.js
function WalletManagerScreen(props) {
  var _a;
  const [screen, setScreen] = (0, import_react27.useState)("wallets");
  const connectedWallets = useConnectedWallets();
  const setActive = useSetActiveWallet();
  const hideConnectButton = !props.showAllWallets && ((_a = props.wallets) == null ? void 0 : _a.every((w) => connectedWallets.includes(w)));
  if (screen === "connect") {
    return (0, import_jsx_runtime46.jsx)(WalletSwitcherConnectionScreen, { ...props, isEmbed: false, onSelect: (w) => {
      setActive(w);
      props.onBack();
    } });
  }
  return (0, import_jsx_runtime46.jsxs)(Container, { children: [(0, import_jsx_runtime46.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime46.jsx)(ModalHeader, { onBack: props.onBack, title: "Wallets" }) }), (0, import_jsx_runtime46.jsx)(Line, {}), (0, import_jsx_runtime46.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime46.jsx)(Container, { px: "md", style: {
    minHeight: "150px"
  }, children: (0, import_jsx_runtime46.jsx)(Container, { flex: "column", gap: "xs", children: connectedWallets.filter((w) => {
    var _a2;
    return !((_a2 = props.hiddenWallets) == null ? void 0 : _a2.includes(w.id));
  }).map((w) => {
    return (0, import_jsx_runtime46.jsx)(WalletManangerButton, { chain: props.activeChain, client: props.client, onClick: () => {
      setActive(w);
      props.onBack();
    }, wallet: w }, w.id);
  }) }) }), (0, import_jsx_runtime46.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime46.jsx)(Container, { p: "lg", children: !hideConnectButton && (0, import_jsx_runtime46.jsxs)(Button, { fullWidth: true, gap: "xs", onClick: () => {
    setScreen("connect");
  }, variant: "accent", children: [(0, import_jsx_runtime46.jsx)(PlusIcon, { height: iconSize.sm, width: iconSize.sm }), "Connect Wallet"] }) })] });
}
function WalletManangerButton(props) {
  var _a;
  const theme = useCustomTheme();
  const activeWallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const walletId = props.wallet.id;
  const address = (_a = props.wallet.getAccount()) == null ? void 0 : _a.address;
  const balanceQuery = useWalletBalance({
    address,
    chain: props.chain,
    client: props.client
  });
  return (0, import_jsx_runtime46.jsxs)("div", { style: {
    position: "relative"
  }, children: [(0, import_jsx_runtime46.jsx)(WalletButtonEl, { onClick: props.onClick, style: {
    justifyContent: "space-between"
  }, children: (0, import_jsx_runtime46.jsxs)(Container, { center: "y", flex: "row", gap: "md", children: [(0, import_jsx_runtime46.jsx)(WalletImage, { client: props.client, id: walletId, size: iconSize.lg }), (0, import_jsx_runtime46.jsxs)(Container, { flex: "column", gap: "4xs", children: [(0, import_jsx_runtime46.jsx)(Text, { color: "primaryText", children: shortenAddress(address || "") }), balanceQuery.data ? (0, import_jsx_runtime46.jsx)(Text, { color: "secondaryText", size: "xs", weight: 400, children: formatTokenBalance(balanceQuery.data) }) : (0, import_jsx_runtime46.jsx)(Skeleton, { height: fontSize.sm, width: "100px" })] })] }) }), (0, import_jsx_runtime46.jsx)("div", { style: {
    position: "absolute",
    right: spacing.xxs,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1
  }, children: (activeWallet == null ? void 0 : activeWallet.id) === props.wallet.id ? (0, import_jsx_runtime46.jsx)(ToolTip, { tip: "Active Wallet", children: (0, import_jsx_runtime46.jsx)(IconButton, { children: (0, import_jsx_runtime46.jsx)(CheckIcon, { height: iconSize.md, width: iconSize.md }) }) }) : (0, import_jsx_runtime46.jsx)(ToolTip, { tip: "Disconnect", children: (0, import_jsx_runtime46.jsx)(IconButton, { onClick: () => {
    disconnect(props.wallet);
  }, children: (0, import_jsx_runtime46.jsx)(MinusIcon, { height: iconSize.md, style: {
    color: theme.colors.secondaryText
  }, width: iconSize.md }) }) }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/LinkedProfilesScreen.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/hooks/wallets/useUnlinkProfile.js
function useUnlinkProfile() {
  const wallets = useConnectedWallets();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ client, profileToUnlink, allowAccountDeletion = false }) => {
      var _a;
      const ecosystemWallet = wallets.find((w) => isEcosystemWallet(w));
      const ecosystem = ecosystemWallet ? {
        id: ecosystemWallet.id,
        partnerId: (_a = ecosystemWallet.getConfig()) == null ? void 0 : _a.partnerId
      } : void 0;
      await unlinkProfile({
        allowAccountDeletion,
        client,
        ecosystem,
        profileToUnlink
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
    }
  });
}

// node_modules/thirdweb/dist/esm/react/web/hooks/wallets/useProfiles.js
function useProfiles(args) {
  const wallets = useConnectedWallets();
  const enabled = wallets.length > 0 && wallets.some((w) => w.id === "inApp" || isEcosystemWallet(w));
  return useQuery({
    enabled,
    queryFn: async () => {
      var _a;
      const ecosystemWallet = wallets.find((w) => isEcosystemWallet(w));
      const ecosystem = ecosystemWallet ? {
        id: ecosystemWallet.id,
        partnerId: (_a = ecosystemWallet.getConfig()) == null ? void 0 : _a.partnerId
      } : void 0;
      return getProfiles({
        client: args.client,
        ecosystem
      });
    },
    queryKey: [
      "profiles",
      wallets.map((w) => {
        var _a;
        return `${w.id}-${(_a = w.getAccount()) == null ? void 0 : _a.address}`;
      })
    ]
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/AddUserIcon.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var AddUserIcon = (props) => {
  return (0, import_jsx_runtime47.jsx)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 24 24", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime47.jsx)("path", { d: "M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M19 21V15M16 18H22M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/LinkedProfilesScreen.js
function getProfileDisplayName(profile) {
  switch (true) {
    case (profile.type === "email" && profile.details.email !== void 0):
      return profile.details.email;
    case (profile.type === "google" && profile.details.email !== void 0):
      return profile.details.email;
    case (profile.type === "phone" && profile.details.phone !== void 0):
      return profile.details.phone;
    case profile.details.address !== void 0:
      return shortenAddress(profile.details.address, 6);
    case (profile.type === "cognito" && profile.details.email !== void 0):
      return profile.details.email;
    case profile.type.toLowerCase() === "custom_auth_endpoint":
      return "Custom Profile";
    default:
      return profile.type.slice(0, 1).toUpperCase() + profile.type.slice(1);
  }
}
function LinkedProfilesScreen(props) {
  const { data: connectedProfiles, isLoading } = useProfiles({
    client: props.client
  });
  if (isLoading) {
    return (0, import_jsx_runtime48.jsx)(LoadingScreen, {});
  }
  return (0, import_jsx_runtime48.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime48.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime48.jsx)(ModalHeader, { onBack: props.onBack, title: props.locale.manageWallet.linkedProfiles }) }), (0, import_jsx_runtime48.jsx)(Line, {}), (0, import_jsx_runtime48.jsxs)(Container, { scrollY: true, style: {
    height: "300px"
  }, children: [(0, import_jsx_runtime48.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime48.jsxs)(Container, { px: "sm", children: [(0, import_jsx_runtime48.jsxs)(MenuButton, { onClick: () => {
    props.setScreen("link-profile");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime48.jsx)(AddUserIcon, { size: iconSize.lg }), (0, import_jsx_runtime48.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.linkProfile })] }), (0, import_jsx_runtime48.jsx)(Spacer, { y: "xs" }), connectedProfiles == null ? void 0 : connectedProfiles.filter((profile) => profile.type.toLowerCase() !== "guest" && profile.type.toLowerCase() !== "custom_jwt" && profile.type.toLowerCase() !== "custom_auth_endpoint").map((profile) => (0, import_jsx_runtime48.jsx)(LinkedProfile, { client: props.client, enableUnlinking: connectedProfiles.length > 1, profile }, `${JSON.stringify(profile)}`))] }), (0, import_jsx_runtime48.jsx)(Spacer, { y: "md" })] })] });
}
function LinkedProfile({ profile, enableUnlinking, client }) {
  var _a, _b, _c;
  const { data: socialProfiles } = useSocialProfiles({
    address: profile.details.address,
    client
  });
  const { mutate: unlinkProfileMutation, isPending } = useUnlinkProfile();
  return (0, import_jsx_runtime48.jsxs)(MenuButton, { as: "div", disabled: true, style: {
    cursor: "default",
    fontSize: fontSize.sm
  }, children: [(socialProfiles == null ? void 0 : socialProfiles.some((p) => p.avatar)) ? (0, import_jsx_runtime48.jsx)(Img, { client, height: iconSize.lg, loading: "eager", src: (_a = socialProfiles == null ? void 0 : socialProfiles.find((p) => p.avatar)) == null ? void 0 : _a.avatar, style: {
    borderRadius: "100%"
  }, width: iconSize.lg }) : profile.details.address !== void 0 ? (0, import_jsx_runtime48.jsx)(Container, { style: {
    borderRadius: "100%",
    height: "32px",
    overflow: "hidden",
    width: "32px"
  }, children: (0, import_jsx_runtime48.jsx)(Blobbie, { address: profile.details.address, size: 32 }) }) : profile.type === "passkey" ? (0, import_jsx_runtime48.jsx)(FingerPrintIcon, { size: iconSize.lg }) : profile.type === "email" ? (0, import_jsx_runtime48.jsx)(EmailIcon, { size: iconSize.lg }) : profile.type === "phone" ? (0, import_jsx_runtime48.jsx)(PhoneIcon, { size: iconSize.lg }) : (0, import_jsx_runtime48.jsx)(Img, { client, height: iconSize.lg, loading: "eager", src: getSocialIcon(profile.type), width: iconSize.lg }), (0, import_jsx_runtime48.jsxs)("div", { style: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime48.jsx)(Text, { color: "primaryText", children: ((_b = socialProfiles == null ? void 0 : socialProfiles.find((p) => p.avatar)) == null ? void 0 : _b.name) || getProfileDisplayName(profile) }), (0, import_jsx_runtime48.jsxs)("div", { style: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "8px"
  }, children: [((_c = socialProfiles == null ? void 0 : socialProfiles.find((p) => p.avatar)) == null ? void 0 : _c.name) && profile.details.address && (0, import_jsx_runtime48.jsx)(Text, { color: "secondaryText", size: "sm", children: shortenAddress(profile.details.address, 4) }), enableUnlinking && (0, import_jsx_runtime48.jsx)(IconButton, { "aria-label": "Unlink", autoFocus: true, disabled: isPending, onClick: () => unlinkProfileMutation({
    client,
    profileToUnlink: profile
  }), style: {
    pointerEvents: "auto"
  }, type: "button", children: (0, import_jsx_runtime48.jsx)(Cross2Icon, { height: iconSize.md, style: {
    color: "inherit"
  }, width: iconSize.md }) })] })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/LinkProfileScreen.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var import_react28 = __toESM(require_react(), 1);
var InAppWalletConnectUI = (0, import_react28.lazy)(() => import("./InAppWalletConnectUI-TVHYRSQK.js"));
function LinkProfileScreen(props) {
  const adminWallet = useAdminWallet();
  const activeWallet = useActiveWallet();
  const chain = useActiveWalletChain();
  const queryClient = useQueryClient();
  const wallet = adminWallet || activeWallet;
  if (!wallet) {
    return (0, import_jsx_runtime49.jsx)(LoadingScreen, {});
  }
  if (wallet.id === "inApp") {
    return (0, import_jsx_runtime49.jsx)(import_react28.Suspense, { fallback: (0, import_jsx_runtime49.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime49.jsx)(InAppWalletConnectUI, { chain, client: props.client, connectLocale: props.locale, done: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["profiles"] });
      }, 500);
      props.onBack();
    }, goBack: props.onBack, isLinking: true, meta: {
      showThirdwebBranding: false,
      title: props.locale.manageWallet.linkProfile
    }, size: "compact", wallet, walletConnect: props.walletConnect }) });
  }
  if (isEcosystemWallet(wallet)) {
    return (0, import_jsx_runtime49.jsx)(import_react28.Suspense, { fallback: (0, import_jsx_runtime49.jsx)(LoadingScreen, {}), children: (0, import_jsx_runtime49.jsx)(EcosystemWalletConnectUI_default, { chain, client: props.client, connectLocale: props.locale, done: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["profiles"] });
      }, 500);
      props.onBack();
    }, goBack: props.onBack, isLinking: true, meta: {
      showThirdwebBranding: false,
      title: props.locale.manageWallet.linkProfile
    }, size: "compact", wallet, walletConnect: props.walletConnect }) });
  }
  return (0, import_jsx_runtime49.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime49.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime49.jsx)(ModalHeader, { onBack: props.onBack, title: props.locale.manageWallet.linkProfile }) }), (0, import_jsx_runtime49.jsx)(Line, {}), (0, import_jsx_runtime49.jsxs)(Container, { center: "both", color: "secondaryText", flex: "column", gap: "md", px: "xl", style: {
    flex: "1",
    minHeight: "250px"
  }, children: [(0, import_jsx_runtime49.jsx)(CrossCircledIcon, { height: iconSize.xl, width: iconSize.xl }), (0, import_jsx_runtime49.jsx)(Text, { center: true, children: "This wallet does not support account linking" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ManageWalletScreen.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/KeyIcon.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var KeyIcon = (props) => {
  return (0, import_jsx_runtime50.jsxs)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 24 24", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime50.jsx)("path", { d: "M2 5.99999L2 2.99999C2 2.39999 2.4 1.99999 3 1.99999H7L7 4.99999H10V7.99999H12L13.4 9.39999C14.7898 8.91585 16.3028 8.9177 17.6915 9.40524C19.0801 9.89278 20.2622 10.8372 21.0444 12.0839C21.8265 13.3306 22.1624 14.8058 21.9971 16.2683C21.8318 17.7307 21.1751 19.0937 20.1344 20.1344C19.0937 21.1751 17.7307 21.8318 16.2683 21.9971C14.8058 22.1624 13.3306 21.8265 12.0839 21.0444C10.8372 20.2622 9.89279 19.0801 9.40525 17.6915C8.91771 16.3028 8.91585 14.7898 9.4 13.4L2 5.99999Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }), (0, import_jsx_runtime50.jsx)("path", { d: "M15.5 15C15.7761 15 16 15.2239 16 15.5C16 15.7761 15.7761 16 15.5 16C15.2239 16 15 15.7761 15 15.5C15 15.2239 15.2239 15 15.5 15Z", fill: "currentColor", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/MultiUserIcon.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var MultiUserIcon = (props) => {
  return (0, import_jsx_runtime51.jsx)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 24 24", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime51.jsx)("path", { d: "M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/WalletConnectIcon.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var WalletConnectIcon = (props) => {
  return (0, import_jsx_runtime52.jsx)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 24 24", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime52.jsx)("path", { d: "M4.91334 7.73539C8.82714 4.0882 15.1729 4.0882 19.0867 7.73539L19.5577 8.17432C19.7534 8.35664 19.7534 8.65232 19.5577 8.83464L17.9464 10.3362C17.8485 10.4274 17.6899 10.4274 17.5921 10.3362L16.9439 9.73217C14.2134 7.18782 9.7866 7.18782 7.05614 9.73217L6.36193 10.379C6.26407 10.4702 6.10547 10.4702 6.0076 10.379L4.39629 8.87747C4.20056 8.69515 4.20056 8.39947 4.39629 8.21715L4.91334 7.73539ZM22.4191 10.8407L23.8532 12.1771C24.0489 12.3594 24.0489 12.6551 23.8532 12.8374L17.3867 18.8632C17.1911 19.0456 16.8738 19.0456 16.6781 18.8632L12.0886 14.5865C12.0397 14.5409 11.9604 14.5409 11.9115 14.5865L7.32202 18.8632C7.12638 19.0456 6.8091 19.0456 6.61337 18.8632L0.146771 12.8373C-0.0489237 12.655 -0.0489237 12.3593 0.146771 12.177L1.58087 10.8406C1.77657 10.6582 2.09384 10.6582 2.28954 10.8406L6.87907 15.1173C6.928 15.163 7.0073 15.163 7.05623 15.1173L11.6456 10.8406C11.8412 10.6582 12.1585 10.6582 12.3542 10.8406L16.9438 15.1173C16.9927 15.163 17.072 15.163 17.1209 15.1173L21.7105 10.8407C21.9061 10.6583 22.2234 10.6583 22.4191 10.8407Z", fill: "currentColor" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ManageWalletScreen.js
function ManageWalletScreen(props) {
  var _a, _b;
  const adminWallet = useAdminWallet();
  const activeWallet = useActiveWallet();
  const wallet = adminWallet || activeWallet;
  return (0, import_jsx_runtime53.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime53.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime53.jsx)(ModalHeader, { onBack: props.onBack, title: props.locale.manageWallet.title }) }), (0, import_jsx_runtime53.jsx)(Line, {}), (0, import_jsx_runtime53.jsxs)(Container, { px: "sm", scrollY: true, style: {
    maxHeight: "500px"
  }, children: [(0, import_jsx_runtime53.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime53.jsxs)(Container, { style: { height: "250px", position: "relative" }, children: [(0, import_jsx_runtime53.jsx)(SwitchMetamaskAccount, { closeModal: props.closeModal, connectLocale: props.locale }), typeof wallet !== "undefined" && ((_a = props.manageWallet) == null ? void 0 : _a.allowLinkingProfiles) !== false && (0, import_jsx_runtime53.jsxs)(MenuButton, { onClick: () => {
    props.setScreen("linked-profiles");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime53.jsx)(MultiUserIcon, { size: iconSize.md }), (0, import_jsx_runtime53.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.linkedProfiles })] }), (0, import_jsx_runtime53.jsxs)(MenuButton, { onClick: () => {
    props.setScreen("wallet-connect-receiver");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime53.jsx)(WalletConnectIcon, { size: iconSize.md }), (0, import_jsx_runtime53.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.connectAnApp })] }), wallet && isInAppWallet(wallet) && !((_b = wallet.getConfig()) == null ? void 0 : _b.hidePrivateKeyExport) && (0, import_jsx_runtime53.jsxs)(MenuButton, { onClick: () => {
    props.setScreen("private-key");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime53.jsx)(KeyIcon, { size: iconSize.md }), (0, import_jsx_runtime53.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.exportPrivateKey })] })] }), (0, import_jsx_runtime53.jsx)(Spacer, { y: "lg" })] })] });
}
function SwitchMetamaskAccount(props) {
  const wallet = useActiveWallet();
  const connectLocale = props.connectLocale;
  if ((wallet == null ? void 0 : wallet.id) !== "io.metamask") {
    return null;
  }
  const injectedMetamaskProvider = injectedProvider("io.metamask");
  if (!injectedMetamaskProvider) {
    return null;
  }
  return (0, import_jsx_runtime53.jsxs)(MenuButton, { onClick: async () => {
    await injectedMetamaskProvider.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }]
    });
    props.closeModal();
  }, type: "button", children: [(0, import_jsx_runtime53.jsx)(ShuffleIcon, { height: iconSize.md, width: iconSize.md }), (0, import_jsx_runtime53.jsx)(Text, { color: "primaryText", children: connectLocale.switchAccount })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/PrivateKey.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var import_react29 = __toESM(require_react(), 1);
function PrivateKey(props) {
  var _a;
  const [isLoading, setLoading] = (0, import_react29.useState)(true);
  const baseDomain = getThirdwebBaseUrl("inAppWallet");
  (0, import_react29.useEffect)(() => {
    const loginReady = async (e) => {
      var _a2, _b;
      if (typeof e.data === "object" && "eventType" in e.data && e.origin === baseDomain) {
        if (e.data.eventType === "exportPrivateKeyIframeLoaded") {
          const iframe = document.getElementById(`export-wallet-${(_a2 = props.wallet) == null ? void 0 : _a2.id}`);
          if (!(iframe instanceof HTMLIFrameElement)) {
            return;
          }
          if (!props.wallet) {
            return;
          }
          const clientStorage = new ClientScopedStorage({
            clientId: props.client.clientId,
            ecosystem: isEcosystemWallet(props.wallet) ? {
              id: props.wallet.id,
              partnerId: (_b = props.wallet.getConfig()) == null ? void 0 : _b.partnerId
            } : void 0,
            storage: webLocalStorage
          });
          if (iframe == null ? void 0 : iframe.contentWindow) {
            iframe.contentWindow.postMessage({
              authToken: await clientStorage.getAuthCookie(),
              eventType: "initExportPrivateKey"
            }, e.origin);
          }
        }
      }
    };
    window.addEventListener("message", loginReady);
    return () => {
      window.removeEventListener("message", loginReady);
    };
  }, [props.wallet, props.client.clientId, baseDomain]);
  if (!props.wallet) {
    throw new Error("[PrivateKey] No wallet found");
  }
  const ecosystem = isEcosystemWallet(props.wallet) ? { id: props.wallet.id, partnerId: (_a = props.wallet.getConfig()) == null ? void 0 : _a.partnerId } : void 0;
  return (0, import_jsx_runtime54.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime54.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime54.jsx)(ModalHeader, { onBack: props.onBack, title: props.connectLocale.manageWallet.exportPrivateKey }) }), (0, import_jsx_runtime54.jsx)(Line, {}), (0, import_jsx_runtime54.jsxs)(Container, { px: "sm", scrollY: true, style: {
    maxHeight: "500px"
  }, children: [(0, import_jsx_runtime54.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime54.jsxs)(Container, { style: { height: "250px", position: "relative" }, children: [isLoading ? (0, import_jsx_runtime54.jsx)(Container, { center: "both", flex: "column", style: { height: "100%", position: "absolute", width: "100%" }, children: (0, import_jsx_runtime54.jsx)(Spinner, { color: "primaryButtonBg", size: "lg" }) }) : null, (0, import_jsx_runtime54.jsx)(Container, { style: {
    height: "100%",
    position: "absolute",
    width: "100%",
    zIndex: 11
  }, children: (0, import_jsx_runtime54.jsx)("iframe", { allow: "clipboard-read; clipboard-write", id: `export-wallet-${props.wallet.id}`, onLoad: () => {
    setLoading(false);
  }, src: `${baseDomain}/sdk/2022-08-12/embedded-wallet/export-private-key?clientId=${props.client.clientId}&theme=${typeof props.theme === "string" ? props.theme : props.theme.type}${ecosystem ? `&ecosystemId=${ecosystem.id}` : ""}${(ecosystem == null ? void 0 : ecosystem.partnerId) ? `&partnerId=${ecosystem.partnerId}` : ""}`, style: {
    height: "250px",
    visibility: isLoading ? "hidden" : "unset",
    width: "100%"
  }, title: "Export In-App Wallet" }) })] }), (0, import_jsx_runtime54.jsx)(Spacer, { y: "lg" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ReceiveFunds.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/utils/addresses.js
function shortenString(str, extraShort = true) {
  return `${str.substring(0, extraShort ? 4 : 6)}...${str.substring(str.length - (extraShort ? 3 : 4))}`;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ReceiveFunds.js
function ReceiveFunds(props) {
  const account = useActiveAccount();
  const address = account == null ? void 0 : account.address;
  const { hasCopied, onCopy } = useClipboard(address || "");
  const { connectLocale, client } = props;
  const locale = connectLocale.receiveFundsScreen;
  return (0, import_jsx_runtime55.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime55.jsx)(ModalHeader, { onBack: props.onBack, title: locale.title }), (0, import_jsx_runtime55.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime55.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime55.jsx)(QRCode, { QRIcon: props.walletId && (0, import_jsx_runtime55.jsx)(WalletImage, { client, id: props.walletId, size: iconSize.xxl }), qrCodeUri: address, size: 310 }) }), (0, import_jsx_runtime55.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime55.jsxs)(WalletAddressContainer, { onClick: onCopy, children: [(0, import_jsx_runtime55.jsx)(Text, { color: "primaryText", size: "md", children: shortenString(address || "") }), (0, import_jsx_runtime55.jsx)(CopyIcon2, { hasCopied, text: address || "", tip: "Copy address" })] }), (0, import_jsx_runtime55.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime55.jsx)(Text, { balance: true, center: true, className: "receive_fund_screen_instruction", multiline: true, children: locale.instruction })] });
}
var WalletAddressContainer = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      borderColor: theme.colors.accentText
    },
    all: "unset",
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    boxSizing: "border-box",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    padding: spacing.md,
    transition: "border-color 200ms ease",
    width: "100%"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/SendFunds.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var import_react32 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/extensions/ens/__generated__/AddressResolver/read/addr.js
var FN_SELECTOR = "0x3b3b57de";
var FN_INPUTS = [
  {
    name: "name",
    type: "bytes32"
  }
];
function encodeAddrParams(options) {
  return encodeAbiParameters(FN_INPUTS, [options.name]);
}
function encodeAddr(options) {
  return FN_SELECTOR + encodeAddrParams(options).slice(2);
}

// node_modules/thirdweb/dist/esm/extensions/ens/resolve-address.js
async function resolveAddress(options) {
  const { client, name, resolverAddress, resolverChain } = options;
  if (isAddress(name)) {
    return getAddress(name);
  }
  return withCache(async () => {
    const contract = getContract({
      address: resolverAddress || UNIVERSAL_RESOLVER_ADDRESS,
      chain: resolverChain || ethereum,
      client
    });
    const data = encodeAddr({ name: namehash(name) });
    const result = await resolve({
      contract,
      data,
      name: toHex(packetToBytes(name))
    });
    const resolvedAddress = getAddress(`0x${result[0].slice(-40)}`);
    return resolvedAddress;
  }, {
    cacheKey: `ens:addr:${(resolverChain == null ? void 0 : resolverChain.id) || 1}:${name}`,
    // 1min cache
    cacheTime: 60 * 1e3
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/write/transfer.js
var FN_SELECTOR2 = "0xa9059cbb";
var FN_INPUTS2 = [
  {
    name: "to",
    type: "address"
  },
  {
    name: "value",
    type: "uint256"
  }
];
var FN_OUTPUTS = [
  {
    type: "bool"
  }
];
function transfer(options) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });
  return prepareContractCall({
    accessList: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.accessList;
    },
    authorizationList: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.authorizationList;
    },
    contract: options.contract,
    erc20Value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.erc20Value;
    },
    extraGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.extraGas;
    },
    gas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gas;
    },
    gasPrice: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gasPrice;
    },
    maxFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxFeePerGas;
    },
    maxPriorityFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxPriorityFeePerGas;
    },
    method: [FN_SELECTOR2, FN_INPUTS2, FN_OUTPUTS],
    nonce: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.nonce;
    },
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.to, resolvedOptions.value];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    }
  });
}

// node_modules/thirdweb/dist/esm/extensions/erc20/write/transfer.js
function transfer2(options) {
  return transfer({
    asyncParams: async () => {
      let amount;
      if ("amount" in options) {
        const { decimals: decimals2 } = await import("./decimals-L6WUBRL6.js");
        const d = await decimals2(options).catch(() => 18);
        amount = toUnits(options.amount.toString(), d);
      } else {
        amount = options.amountWei;
      }
      return {
        overrides: {
          erc20Value: {
            amountWei: amount,
            tokenAddress: options.contract.address
          },
          ...options.overrides
        },
        to: options.to,
        value: amount
      };
    },
    contract: options.contract
  });
}

// node_modules/thirdweb/dist/esm/utils/ens/isValidENSName.js
function isValidENSName(name) {
  const parts = name.split(".");
  const tld = parts[parts.length - 1];
  if (parts.length < 2 || !tld) {
    return false;
  }
  if (/\s/.test(tld)) {
    return false;
  }
  if (/^\d+$/.test(tld)) {
    return false;
  }
  return parts.every((part) => {
    if (part.length < 1) {
      return false;
    }
    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    return true;
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSendToken.js
function useSendToken(client) {
  const wallet = useActiveWallet();
  const queryClient = useQueryClient();
  return useMutation({
    async mutationFn(option) {
      const { tokenAddress, receiverAddress, amount } = option;
      const activeChain = wallet == null ? void 0 : wallet.getChain();
      const account = wallet == null ? void 0 : wallet.getAccount();
      if (!activeChain) {
        throw new Error("No active chain");
      }
      if (!account) {
        throw new Error("No active account");
      }
      if (!receiverAddress || !isValidENSName(receiverAddress) && !isAddress(receiverAddress)) {
        throw new Error("Invalid receiver address");
      }
      if (!amount || Number.isNaN(Number(amount)) || Number(amount) < 0) {
        throw new Error("Invalid amount");
      }
      let to = receiverAddress;
      try {
        to = await resolveAddress({
          client,
          name: receiverAddress
        });
      } catch {
        throw new Error("Failed to resolve address");
      }
      if (!tokenAddress) {
        const sendNativeTokenTx = prepareTransaction({
          chain: activeChain,
          client,
          to,
          value: toWei(amount)
        });
        const gasEstimate = await estimateGas({
          account,
          transaction: sendNativeTokenTx
        });
        const balance = await getWalletBalance({
          address: account.address,
          chain: activeChain,
          client
        });
        if (toWei(amount) + gasEstimate > balance.value) {
          throw new Error("Insufficient balance for transfer amount and gas");
        }
        return await sendTransaction({
          account,
          transaction: sendNativeTokenTx
        });
      } else {
        const contract = getContract({
          address: tokenAddress,
          chain: activeChain,
          client
        });
        const tx = transfer2({
          amount,
          contract,
          to
        });
        return await sendTransaction({
          account,
          transaction: tx
        });
      }
    },
    onSettled: async (data, error) => {
      if (error) {
        return;
      }
      if (data == null ? void 0 : data.transactionHash) {
        await waitForReceipt({
          chain: data.chain,
          client,
          maxBlocksWaitTime: 1e4,
          transactionHash: data.transactionHash
        });
      }
      invalidateWalletBalance(queryClient);
    }
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/TokenIcon.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var import_react30 = __toESM(require_react(), 1);
function TokenIcon(props) {
  var _a;
  const chainMeta = useChainMetadata(props.chain).data;
  const tokenImage = (0, import_react30.useMemo)(() => {
    var _a2;
    if (isNativeToken(props.token) || props.token.address === NATIVE_TOKEN_ADDRESS) {
      if ((chainMeta == null ? void 0 : chainMeta.nativeCurrency.symbol) === "ETH") {
        return "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
      }
      return (_a2 = chainMeta == null ? void 0 : chainMeta.icon) == null ? void 0 : _a2.url;
    }
    return props.token.icon;
  }, [props.token, (_a = chainMeta == null ? void 0 : chainMeta.icon) == null ? void 0 : _a.url, chainMeta == null ? void 0 : chainMeta.nativeCurrency.symbol]);
  return tokenImage ? (0, import_jsx_runtime56.jsx)(Img, { client: props.client, fallbackImage: genericTokenIcon, height: iconSize[props.size], src: tokenImage, width: iconSize[props.size] }) : (0, import_jsx_runtime56.jsx)(Container, { center: "both", color: "secondaryText", style: { height: iconSize[props.size], width: iconSize[props.size] }, children: (0, import_jsx_runtime56.jsx)(CoinsIcon, { size: iconSize[props.size] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/TokenSelector.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var import_react31 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/wallets/utils/getTokenBalance.js
async function getTokenBalance(options) {
  const { account, client, chain, tokenAddress } = options;
  if (tokenAddress) {
    const { getBalance } = await import("./getBalance-2VRTA7AP.js");
    return getBalance({
      address: account.address,
      contract: getContract({ address: tokenAddress, chain, client })
    });
  }
  const rpcRequest = getRpcClient({ chain, client });
  const [nativeSymbol, nativeDecimals, nativeName, nativeBalance] = await Promise.all([
    getChainSymbol(chain),
    getChainDecimals(chain),
    getChainNativeCurrencyName(chain),
    eth_getBalance(rpcRequest, { address: account.address })
  ]);
  return {
    decimals: nativeDecimals,
    displayValue: toTokens(nativeBalance, nativeDecimals),
    name: nativeName,
    symbol: nativeSymbol,
    value: nativeBalance
  };
}

// node_modules/thirdweb/dist/esm/react/core/hooks/others/useTokenInfo.js
function useTokenInfo(options) {
  const { chain, tokenAddress, client } = options;
  return useQuery({
    enabled: !!chain && !!client,
    queryFn: async () => {
      if (tokenAddress) {
        const { getCurrencyMetadata: getCurrencyMetadata2 } = await import("./getCurrencyMetadata-NFUGSXPM.js");
        const result2 = await getCurrencyMetadata2({
          contract: getContract({ address: tokenAddress, chain, client })
        });
        return result2;
      }
      const { getChainDecimals: getChainDecimals2, getChainNativeCurrencyName: getChainNativeCurrencyName2, getChainSymbol: getChainSymbol2 } = await import("./utils-6UX76OJX.js");
      const [nativeSymbol, nativeDecimals, nativeName] = await Promise.all([
        getChainSymbol2(chain),
        getChainDecimals2(chain),
        getChainNativeCurrencyName2(chain)
      ]);
      const result = {
        decimals: nativeDecimals,
        name: nativeName,
        symbol: nativeSymbol
      };
      return result;
    },
    queryKey: ["tokenInfo", (chain == null ? void 0 : chain.id) || -1, { tokenAddress }]
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/ChainIcon.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var ChainIcon2 = (props) => {
  return (0, import_jsx_runtime57.jsxs)(Container, { style: {
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    position: "relative"
  }, children: [(0, import_jsx_runtime57.jsx)(Img, { client: props.client, fallbackImage: fallbackChainIcon, height: props.size, src: getSrcChainIcon(props), width: props.size }), props.active && (0, import_jsx_runtime57.jsx)(ChainActiveDot, { className: "tw-chain-active-dot-legacy-chain-icon" })] });
};
var getSrcChainIcon = (props) => {
  const url = props.chainIconUrl;
  if (!url) {
    return fallbackChainIcon;
  }
  try {
    return resolveScheme({
      client: props.client,
      uri: url
    });
  } catch {
    return fallbackChainIcon;
  }
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/TokenSelector.js
function TokenSelector(props) {
  const [screen, setScreen] = (0, import_react31.useState)("base");
  const [input, setInput] = (0, import_react31.useState)("");
  const chain = props.chain;
  const chainNameQuery = useChainName(chain);
  const chainIconQuery = useChainIconUrl(chain);
  const tokenQuery = useTokenInfo({
    chain,
    client: props.client,
    tokenAddress: input
  });
  const locale = props.connectLocale.sendFundsScreen;
  let tokenList = props.tokenList;
  if (tokenQuery.data && input) {
    tokenList = [
      {
        ...tokenQuery.data,
        address: input
      },
      ...tokenList
    ];
  }
  const filteredList = input ? tokenList.filter((t) => {
    const inputStr = input.toLowerCase();
    return t.name.toLowerCase().includes(inputStr) || t.symbol.toLowerCase().includes(inputStr) || t.address.includes(input);
  }) : tokenList;
  const { chainSelection } = props;
  if (screen === "select-chain" && chainSelection) {
    return (0, import_jsx_runtime58.jsx)(NetworkSelectorContent, {
      chains: chainSelection.chains,
      client: props.client,
      closeModal: () => setScreen("base"),
      connectLocale: props.connectLocale,
      // pass swap supported chains
      networkSelector: {
        renderChain(renderChainProps) {
          return (0, import_jsx_runtime58.jsx)(ChainButton, { chain: renderChainProps.chain, client: props.client, confirming: false, connectLocale: props.connectLocale, onClick: () => {
            chainSelection.select(renderChainProps.chain);
            setScreen("base");
          }, switchingFailed: false });
        }
      },
      onBack: () => setScreen("base"),
      showTabs: false
    });
  }
  return (0, import_jsx_runtime58.jsxs)(Container, { animate: "fadein", style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime58.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime58.jsx)(ModalHeader, { onBack: props.onBack, title: props.modalTitle || locale.selectTokenTitle }) }), (0, import_jsx_runtime58.jsx)(Line, {}), (0, import_jsx_runtime58.jsxs)(Container, { scrollY: true, style: {
    maxHeight: "450px"
  }, children: [(0, import_jsx_runtime58.jsx)(Spacer, { y: "md" }), props.chainSelection && (0, import_jsx_runtime58.jsxs)(Container, { px: "lg", children: [(0, import_jsx_runtime58.jsx)(Text, { size: "sm", children: "Select Network" }), (0, import_jsx_runtime58.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime58.jsxs)(SelectTokenBtn, { fullWidth: true, onClick: () => {
    setScreen("select-chain");
  }, variant: "secondary", children: [(0, import_jsx_runtime58.jsx)(ChainIcon2, { chainIconUrl: chainIconQuery.url, client: props.client, size: iconSize.lg }), chainNameQuery.name ? (0, import_jsx_runtime58.jsx)(Text, { color: "primaryText", size: "sm", children: chainNameQuery.name }) : (0, import_jsx_runtime58.jsx)(Skeleton, { height: fontSize.md }), (0, import_jsx_runtime58.jsx)(ChevronDownIcon, { height: iconSize.sm, style: {
    marginLeft: "auto"
  }, width: iconSize.sm })] }), (0, import_jsx_runtime58.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime58.jsx)(Text, { size: "sm", children: "Select Token" })] }), (0, import_jsx_runtime58.jsxs)(Container, { px: "lg", children: [(0, import_jsx_runtime58.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime58.jsx)(Input, { onChange: (e) => {
    setInput(e.target.value);
  }, placeholder: locale.searchToken, value: input, variant: "outline" })] }), (0, import_jsx_runtime58.jsx)(Spacer, { y: "md" }), (filteredList.length > 0 || !input) && (0, import_jsx_runtime58.jsxs)(Container, { flex: "column", gap: "xs", px: "lg", scrollY: true, style: {
    paddingBottom: spacing.lg,
    paddingTop: 0
  }, children: [!input && (0, import_jsx_runtime58.jsx)(SelectTokenButton, { chain: props.chain, client: props.client, onClick: () => {
    props.onTokenSelect(NATIVE_TOKEN);
  }, token: NATIVE_TOKEN }), filteredList.map((token) => {
    return (0, import_jsx_runtime58.jsx)(SelectTokenButton, { chain: props.chain, client: props.client, onClick: () => props.onTokenSelect(token), token }, token.address);
  })] }), filteredList.length === 0 && tokenQuery.isLoading && input && (0, import_jsx_runtime58.jsx)(Container, { animate: "fadein", center: "both", color: "secondaryText", flex: "column", gap: "md", p: "lg", style: {
    minHeight: "200px",
    paddingTop: 0
  }, children: (0, import_jsx_runtime58.jsx)(Spinner, { color: "accentText", size: "lg" }) }), filteredList.length === 0 && !tokenQuery.isLoading && input && (0, import_jsx_runtime58.jsxs)(Container, { animate: "fadein", center: "both", color: "secondaryText", flex: "column", gap: "md", p: "lg", style: {
    minHeight: "200px",
    paddingTop: 0
  }, children: [(0, import_jsx_runtime58.jsx)(CrossCircledIcon, { height: iconSize.lg, width: iconSize.lg }), locale.noTokensFound] }), (0, import_jsx_runtime58.jsx)(Spacer, { y: "md" })] })] });
}
function SelectTokenButton(props) {
  var _a;
  const account = useActiveAccount();
  const tokenInfoQuery = useTokenInfo({
    chain: props.chain,
    client: props.client,
    tokenAddress: isNativeToken(props.token) ? void 0 : props.token.address
  });
  const tokenName = isNativeToken(props.token) ? (_a = tokenInfoQuery.data) == null ? void 0 : _a.name : props.token.name;
  return (0, import_jsx_runtime58.jsxs)(SelectTokenBtn, { fullWidth: true, onClick: props.onClick, variant: "secondary", children: [(0, import_jsx_runtime58.jsx)(TokenIcon, { chain: props.chain, client: props.client, size: "lg", token: props.token }), (0, import_jsx_runtime58.jsxs)(Container, { flex: "column", gap: "4xs", children: [tokenName ? (0, import_jsx_runtime58.jsx)(Text, { color: "primaryText", size: "sm", children: tokenName }) : (0, import_jsx_runtime58.jsx)(Skeleton, { height: fontSize.md, width: "150px" }), account && (0, import_jsx_runtime58.jsx)(TokenBalance, { account, chain: props.chain, client: props.client, tokenAddress: isNativeToken(props.token) ? void 0 : props.token.address })] })] });
}
function TokenBalance(props) {
  const tokenBalanceQuery = useQuery({
    queryFn: async () => {
      return getTokenBalance({
        account: props.account,
        chain: props.chain,
        client: props.client,
        tokenAddress: props.tokenAddress
      });
    },
    queryKey: ["tokenBalance", props]
  });
  if (tokenBalanceQuery.data) {
    return (0, import_jsx_runtime58.jsxs)(Text, { size: "xs", children: [" ", formatTokenBalance(tokenBalanceQuery.data)] });
  }
  return (0, import_jsx_runtime58.jsx)(Skeleton, { height: fontSize.xs, width: "100px" });
}
var SelectTokenBtn = newStyled(Button)(() => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      background: theme.colors.secondaryButtonBg,
      transform: "scale(1.01)"
    },
    background: theme.colors.tertiaryBg,
    gap: spacing.sm,
    justifyContent: "flex-start",
    padding: spacing.sm,
    transition: "background 200ms ease, transform 150ms ease"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/SendFunds.js
function SendFunds(props) {
  const [screen, setScreen] = (0, import_react32.useState)("base");
  const activeChain = useActiveWalletChain();
  const chainId = activeChain == null ? void 0 : activeChain.id;
  const { connectLocale, client } = props;
  let defaultToken = NATIVE_TOKEN;
  const supportedTokens = props.supportedTokens || defaultTokens;
  if (
    // if we know chainId
    chainId && // if there is a list of tokens for this chain
    supportedTokens[chainId] && // if the list of tokens is not the default list
    supportedTokens[chainId] !== defaultTokens[chainId]
  ) {
    const tokensForChain = supportedTokens[chainId];
    const firstToken = tokensForChain == null ? void 0 : tokensForChain[0];
    if (firstToken) {
      defaultToken = firstToken;
    }
  }
  const [token, setToken] = (0, import_react32.useState)(defaultToken);
  const [receiverAddress, setReceiverAddress] = (0, import_react32.useState)("");
  const [amount, setAmount] = (0, import_react32.useState)("0");
  const chain = useActiveWalletChain();
  const tokenList = ((chain == null ? void 0 : chain.id) ? supportedTokens[chain.id] : void 0) || [];
  if (screen === "tokenSelector" && chain) {
    return (0, import_jsx_runtime59.jsx)(TokenSelector, { chain, client, connectLocale, onBack: () => {
      setScreen("base");
    }, onTokenSelect: (_token) => {
      setToken(_token);
      setScreen("base");
    }, tokenList });
  }
  return (0, import_jsx_runtime59.jsx)(SendFundsForm, { amount, client, connectLocale, onBack: props.onBack, onTokenSelect: () => {
    setScreen("tokenSelector");
  }, receiverAddress, setAmount, setReceiverAddress, token });
}
function SendFundsForm(props) {
  var _a, _b;
  const locale = props.connectLocale.sendFundsScreen;
  const tokenAddress = props.token && "address" in props.token ? props.token.address : void 0;
  const chain = useActiveWalletChain();
  const activeAccount = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const balanceQuery = useWalletBalance({
    address: activeAccount == null ? void 0 : activeAccount.address,
    chain,
    client: props.client,
    tokenAddress
  });
  const { receiverAddress, setReceiverAddress, amount, setAmount } = props;
  const sendTokenMutation = useSendToken(props.client);
  function getErrorMessage2(error) {
    var _a2;
    const message = ((_a2 = error == null ? void 0 : error.data) == null ? void 0 : _a2.message) || (error == null ? void 0 : error.message);
    if (!message) {
      return locale.transactionFailed;
    }
    if (message.includes("user rejected") || message.includes("user closed modal") || message.includes("user denied")) {
      return locale.transactionRejected;
    }
    if (message.includes("insufficient funds")) {
      return locale.insufficientFunds;
    }
    return message;
  }
  const tokenId = (0, import_react32.useId)();
  const receiverId = (0, import_react32.useId)();
  const amountId = (0, import_react32.useId)();
  if (!activeChain) {
    return null;
  }
  if (sendTokenMutation.isError) {
    return (0, import_jsx_runtime59.jsxs)(Container, { animate: "fadein", p: "lg", children: [(0, import_jsx_runtime59.jsx)(ModalHeader, { onBack: () => {
      sendTokenMutation.reset();
    }, title: locale.title }), (0, import_jsx_runtime59.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime59.jsxs)(Container, { animate: "fadein", center: "both", color: "danger", flex: "column", gap: "lg", style: {
      minHeight: "200px"
    }, children: [(0, import_jsx_runtime59.jsx)(CrossCircledIcon, { height: iconSize.xl, width: iconSize.xl }), (0, import_jsx_runtime59.jsx)(Text, { center: true, color: "danger", multiline: true, children: getErrorMessage2(sendTokenMutation.error) })] })] });
  }
  if (sendTokenMutation.isSuccess) {
    return (0, import_jsx_runtime59.jsxs)(Container, { animate: "fadein", p: "lg", children: [(0, import_jsx_runtime59.jsx)(ModalHeader, { onBack: () => {
      sendTokenMutation.reset();
    }, title: locale.title }), (0, import_jsx_runtime59.jsxs)(Container, { animate: "fadein", center: "both", color: "success", flex: "column", gap: "lg", style: {
      minHeight: "250px"
    }, children: [(0, import_jsx_runtime59.jsx)(CheckCircledIcon, { height: iconSize.xl, width: iconSize.xl }), (0, import_jsx_runtime59.jsxs)(Text, { color: "success", children: [" ", locale.successMessage, " "] })] })] });
  }
  const tokenName = (props.token && "name" in props.token ? props.token.name : void 0) || ((_a = balanceQuery == null ? void 0 : balanceQuery.data) == null ? void 0 : _a.name);
  const tokenSymbol = (props.token && "symbol" in props.token ? props.token.symbol : void 0) || ((_b = balanceQuery == null ? void 0 : balanceQuery.data) == null ? void 0 : _b.symbol);
  return (0, import_jsx_runtime59.jsxs)(Container, { animate: "fadein", p: "lg", children: [(0, import_jsx_runtime59.jsx)(ModalHeader, { onBack: props.onBack, title: locale.title }), (0, import_jsx_runtime59.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime59.jsxs)("form", { onSubmit: (e) => {
    e.preventDefault();
  }, children: [(0, import_jsx_runtime59.jsx)(Label, { color: "secondaryText", htmlFor: tokenId, children: locale.token }), (0, import_jsx_runtime59.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime59.jsxs)(Button, { fullWidth: true, id: tokenId, onClick: props.onTokenSelect, style: {
    gap: spacing.sm,
    justifyContent: "flex-start",
    padding: spacing.sm
  }, variant: "outline", children: [(0, import_jsx_runtime59.jsx)(TokenIcon, { chain: activeChain, client: props.client, size: "lg", token: props.token }), (0, import_jsx_runtime59.jsxs)(Container, { flex: "column", gap: "xs", children: [tokenName ? (0, import_jsx_runtime59.jsx)(Text, { color: "primaryText", size: "sm", children: tokenName }) : (0, import_jsx_runtime59.jsx)(Skeleton, { height: fontSize.xs, width: "150px" }), balanceQuery.data ? (0, import_jsx_runtime59.jsx)(Text, { size: "xs", children: formatTokenBalance(balanceQuery.data) }) : (0, import_jsx_runtime59.jsx)(Skeleton, { height: fontSize.xs, width: "100px" })] })] }), (0, import_jsx_runtime59.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime59.jsx)(Label, { color: "secondaryText", htmlFor: receiverId, children: locale.sendTo }), (0, import_jsx_runtime59.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime59.jsx)(Input, { id: receiverId, onChange: (e) => {
    setReceiverAddress(e.target.value);
  }, placeholder: "0x... or ENS name", required: true, value: receiverAddress, variant: "outline" }), (0, import_jsx_runtime59.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime59.jsx)(Label, { color: "secondaryText", htmlFor: amountId, children: locale.amount }), (0, import_jsx_runtime59.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime59.jsxs)(Container, { relative: true, children: [(0, import_jsx_runtime59.jsx)(Input, { id: amountId, onChange: (e) => {
    setAmount(e.target.value);
  }, required: true, type: "number", value: amount, variant: "outline" }), (0, import_jsx_runtime59.jsx)(CurrencyBadge, { children: (0, import_jsx_runtime59.jsxs)(Text, { size: "xs", children: [" ", tokenSymbol, " "] }) })] }), (0, import_jsx_runtime59.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime59.jsxs)(Button, { className: "tw-sendfunds-screen-send-button", fullWidth: true, onClick: async () => {
    if (!receiverAddress || !amount) {
      return;
    }
    await sendTokenMutation.mutateAsync({
      amount,
      receiverAddress,
      tokenAddress
    });
  }, style: {
    alignItems: "center",
    gap: spacing.sm,
    padding: spacing.md
  }, type: "submit", variant: "accent", children: [sendTokenMutation.isPending && (0, import_jsx_runtime59.jsx)(Spinner, { color: "accentButtonText", size: "sm" }), sendTokenMutation.isPending ? locale.sending : locale.submitButton] })] })] });
}
var CurrencyBadge = StyledDiv({
  position: "absolute",
  right: spacing.sm,
  top: "50%",
  transform: "translateY(-50%)"
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewAssets.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var import_react35 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/Tabs.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
function Tabs({ selected, onSelect, options, children }) {
  const theme = useCustomTheme();
  return (0, import_jsx_runtime60.jsxs)("div", { children: [(0, import_jsx_runtime60.jsx)(Container, { bg: "secondaryButtonBg", center: "y", flex: "row", p: "xxs", style: { borderRadius: radius.lg, width: "100%" }, children: options.map((option) => (0, import_jsx_runtime60.jsx)(Button, { onClick: () => onSelect(option.value), style: {
    alignItems: "center",
    backgroundColor: option.value === selected ? theme.colors.modalBg : "transparent",
    borderRadius: radius.md,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    paddingBlock: spacing.sm,
    position: "relative"
  }, type: "button", variant: "accent", children: (0, import_jsx_runtime60.jsx)(Text, { color: option.value === selected ? "primaryText" : "secondaryText", size: "sm", style: { textAlign: "center" }, children: option.label }) }, option.value)) }), (0, import_jsx_runtime60.jsx)(Spacer, { y: "sm" }), children] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/ImageIcon.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var ImageIcon = (props) => {
  return (0, import_jsx_runtime61.jsxs)("svg", { fill: "none", height: props.size, role: "presentation", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime61.jsx)("rect", { height: "18", rx: "2", ry: "2", width: "18", x: "3", y: "3" }), (0, import_jsx_runtime61.jsx)("circle", { cx: "9", cy: "9", r: "2" }), (0, import_jsx_runtime61.jsx)("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewNFTs.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/MediaRenderer.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var import_react34 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/icons.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var CarbonDocumentUnknown = (props) => {
  return (0, import_jsx_runtime62.jsxs)("svg", { height: "16", role: "presentation", viewBox: "0 0 32 32", width: "16", ...props, children: [(0, import_jsx_runtime62.jsx)("circle", { cx: "9", cy: "28.5", fill: "currentColor", r: "1.5" }), (0, import_jsx_runtime62.jsx)("path", { d: "M10 25H8v-4h2a2 2 0 0 0 0-4H8a2.002 2.002 0 0 0-2 2v.5H4V19a4.005 4.005 0 0 1 4-4h2a4 4 0 0 1 0 8Z", fill: "currentColor" }), (0, import_jsx_runtime62.jsx)("path", { d: "m27.7 9.3l-7-7A.908.908 0 0 0 20 2H10a2.006 2.006 0 0 0-2 2v8h2V4h8v6a2.006 2.006 0 0 0 2 2h6v16H14v2h12a2.006 2.006 0 0 0 2-2V10a.91.91 0 0 0-.3-.7ZM20 10V4.4l5.6 5.6Z", fill: "currentColor" })] });
};
var CarbonDocumentAudio = (props) => {
  return (0, import_jsx_runtime62.jsxs)("svg", { height: "16", role: "presentation", viewBox: "0 0 32 32", width: "16", ...props, children: [(0, import_jsx_runtime62.jsx)("path", { d: "M29 31a.999.999 0 0 1-.625-.22L23.65 27H20a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3.65l4.726-3.78A1 1 0 0 1 30 17v13a1 1 0 0 1-1 1Zm-8-6h3a1 1 0 0 1 .625.22L28 27.92v-8.84l-3.376 2.7A1 1 0 0 1 24 22h-3Z", fill: "currentColor" }), (0, import_jsx_runtime62.jsx)("path", { d: "M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z", fill: "currentColor" })] });
};
var CarbonPauseFilled = (props) => {
  return (0, import_jsx_runtime62.jsx)("svg", { height: "16", role: "presentation", viewBox: "0 0 32 32", width: "16", ...props, children: (0, import_jsx_runtime62.jsx)("path", { d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z", fill: "currentColor" }) });
};
var CarbonPlayFilledAlt = (props) => {
  return (0, import_jsx_runtime62.jsx)("svg", { height: "16", role: "presentation", viewBox: "0 0 32 32", width: "16", ...props, children: (0, import_jsx_runtime62.jsx)("path", { d: "M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z", fill: "currentColor" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/useResolvedMediaType.js
var import_react33 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/mime/types.js
var AUDIO_MPEG = "audio/mpeg";
var AUDIO_MIDI = "audio/midi";
var AUDIO_OG = "audio/ogg";
var IMG_JPEG = "image/jpeg";
var extensionsToMimeType = {
  // audio
  "*3gpp": "audio/3gpp",
  "*jpm": "video/jpm",
  "*mp3": "audio/mp3",
  "*wav": "audio/wave",
  "*x3db": "model/x3d+binary",
  "*x3dv": "model/x3d+vrml",
  "3g2": "video/3gpp2",
  // videos
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  // 3d models
  "3mf": "model/3mf",
  adp: "audio/adpcm",
  amr: "audio/amr",
  apng: "image/apng",
  au: "audio/basic",
  avif: "image/avif",
  bmp: "image/bmp",
  cgm: "image/cgm",
  drle: "image/dicom-rle",
  emf: "image/emf",
  exr: "image/aces",
  fits: "image/fits",
  g3: "image/g3fax",
  gif: "image/gif",
  glb: "model/gltf-binary",
  gltf: "model/gltf+json",
  h261: "video/h261",
  h263: "video/h263",
  h264: "video/h264",
  heic: "image/heic",
  heics: "image/heic-sequence",
  heif: "image/heif",
  heifs: "image/heif-sequence",
  hej2: "image/hej2k",
  hsj2: "image/hsj2",
  htm: "text/html",
  // html
  html: "text/html",
  ief: "image/ief",
  iges: "model/iges",
  igs: "model/iges",
  jhc: "image/jphc",
  jls: "image/jls",
  jp2: "image/jp2",
  jpe: IMG_JPEG,
  jpeg: IMG_JPEG,
  jpf: "image/jpx",
  jpg: IMG_JPEG,
  jpg2: "image/jp2",
  jpgm: "video/jpm",
  jpgv: "video/jpeg",
  jph: "image/jph",
  jpm: "image/jpm",
  jpx: "image/jpx",
  jxr: "image/jxr",
  jxra: "image/jxra",
  jxrs: "image/jxrs",
  jxs: "image/jxs",
  jxsc: "image/jxsc",
  jxsi: "image/jxsi",
  jxss: "image/jxss",
  kar: AUDIO_MIDI,
  ktx: "image/ktx",
  ktx2: "image/ktx2",
  m1v: "video/mpeg",
  m2a: AUDIO_MPEG,
  m2v: "video/mpeg",
  m3a: AUDIO_MPEG,
  m4a: "audio/mp4",
  m4s: "video/iso.segment",
  mesh: "model/mesh",
  mid: AUDIO_MIDI,
  midi: AUDIO_MIDI,
  mj2: "video/mj2",
  mjp2: "video/mj2",
  mkv: "video/x-matroska",
  mov: "video/quicktime",
  mp2: AUDIO_MPEG,
  mp2a: AUDIO_MPEG,
  mp3: AUDIO_MPEG,
  mp4: "video/mp4",
  mp4a: "audio/mp4",
  mp4v: "video/mp4",
  mpe: "video/mpeg",
  mpeg: "video/mpeg",
  mpg: "video/mpeg",
  mpg4: "video/mp4",
  mpga: AUDIO_MPEG,
  msh: "model/mesh",
  mtl: "model/mtl",
  mxmf: "audio/mobile-xmf",
  obj: "model/obj",
  oga: AUDIO_OG,
  ogg: AUDIO_OG,
  ogv: "video/ogg",
  opus: AUDIO_OG,
  png: "image/png",
  qt: "video/quicktime",
  rmi: AUDIO_MIDI,
  s3m: "audio/s3m",
  sgi: "image/sgi",
  shtml: "text/html",
  sil: "audio/silk",
  silo: "model/mesh",
  snd: "audio/basic",
  spx: AUDIO_OG,
  stl: "model/stl",
  svg: "image/svg+xml",
  svgz: "image/svg+xml",
  t38: "image/t38",
  tfx: "image/tiff-fx",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "video/mp2t",
  vrml: "model/vrml",
  wav: "audio/wav",
  weba: "audio/webm",
  webm: "video/webm",
  webp: "image/webp",
  wmf: "image/wmf",
  wrl: "model/vrml",
  x3d: "model/x3d+xml",
  x3db: "model/x3d+fastinfoset",
  x3dbz: "model/x3d+binary",
  x3dv: "model/x3d-vrml",
  x3dvz: "model/x3d+vrml",
  x3dz: "model/x3d+xml",
  // images
  xm: "audio/xm"
};

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/mime/mime.js
function getMimeTypeFromUrl(url) {
  const last = url.replace(/^.*[/\\]/, "").toLowerCase();
  const fileExtension = last.replace(/^.*\./, "").toLowerCase();
  const hasPath = last.length < url.length;
  const hasDot = fileExtension.length < last.length - 1;
  return (hasDot || !hasPath) && extensionsToMimeType[fileExtension] || null;
}

// node_modules/thirdweb/dist/esm/react/web/utils/resolveMimeType.js
async function resolveMimeType(url) {
  if (!url) {
    return void 0;
  }
  const mimeType = getMimeTypeFromUrl(url);
  if (mimeType) {
    return mimeType;
  }
  const res = url.startsWith("blob:") ? await fetch(url) : await fetch(url, {
    method: "HEAD"
  });
  if (res.ok && res.headers.has("content-type")) {
    return res.headers.get("content-type") || void 0;
  }
  return void 0;
}

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/useResolvedMediaType.js
function useResolvedMediaType(client, uri, mimeType, gatewayUrl) {
  const resolvedUrl = (0, import_react33.useMemo)(() => {
    if (!uri) {
      return "";
    }
    if (uri.startsWith("ar://")) {
      return resolveArweaveScheme({ gatewayUrl, uri });
    }
    if (gatewayUrl) {
      return uri.replace("ipfs://", gatewayUrl);
    }
    try {
      return resolveScheme({
        client,
        uri
      });
    } catch {
      return uri.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
  }, [uri, gatewayUrl, client]);
  const resolvedMimeType = useQuery({
    enabled: !!resolvedUrl && !mimeType,
    initialData: mimeType,
    queryFn: () => resolveMimeType(resolvedUrl),
    queryKey: ["mime-type", resolvedUrl]
  });
  return {
    isFetched: resolvedMimeType.isFetched || !!mimeType,
    mediaInfo: {
      mimeType: resolvedMimeType.data || "image/",
      url: resolvedUrl
      // default to image if no mime type is found
    }
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/MediaRenderer/MediaRenderer.js
var MediaRenderer = (() => (0, import_react34.forwardRef)(function Media_Renderer({ src, poster, alt, gatewayUrl, requireInteraction = false, width = "300px", height = "300px", style, mimeType, client, controls, className }, ref) {
  var _a, _b;
  const mergedStyle = {
    objectFit: "contain",
    ...style
  };
  const { mediaInfo, isFetched: mediaInfoIsFetched } = useResolvedMediaType(client, src ?? void 0, mimeType, gatewayUrl);
  const { mediaInfo: possiblePosterSrc } = useResolvedMediaType(client, poster ?? void 0, void 0, gatewayUrl);
  if (!mediaInfoIsFetched || !src) {
    return (0, import_jsx_runtime63.jsx)("div", { className, style });
  }
  if (mediaInfo.mimeType) {
    if (mediaInfo.mimeType.startsWith("text/html")) {
      return (0, import_jsx_runtime63.jsx)(IframePlayer, { alt, className, poster: possiblePosterSrc.url, ref, requireInteraction, src: mediaInfo.url, style: mergedStyle });
    }
    if (mediaInfo.mimeType.startsWith("model")) {
      console.error("Encountered an unsupported media type. 3D model support was removed in v5.92.0. To add a 3D model to your app, use @google/model-viewer and use the ModelViewer component.");
      if ((_a = possiblePosterSrc.mimeType) == null ? void 0 : _a.startsWith("image/")) {
        return (0, import_jsx_runtime63.jsx)(ImageRenderer, { alt, className, height, ref, src: possiblePosterSrc.url, style: mergedStyle, width });
      }
    }
    if (mediaInfo.mimeType.startsWith("video")) {
      return (0, import_jsx_runtime63.jsx)(VideoPlayer, { className, controls, poster: ((_b = possiblePosterSrc.mimeType) == null ? void 0 : _b.startsWith("image/")) ? possiblePosterSrc.url : void 0, ref, requireInteraction, src: mediaInfo.url, style: mergedStyle });
    }
    if (mediaInfo.mimeType.startsWith("audio")) {
      return (0, import_jsx_runtime63.jsx)(AudioPlayer, { alt, className, controls, height, poster: possiblePosterSrc.url, ref, src: mediaInfo.url, style: mergedStyle, width });
    }
    if (mediaInfo.mimeType.startsWith("image/")) {
      return (0, import_jsx_runtime63.jsx)(ImageRenderer, { alt, className, height, ref, src: mediaInfo.url, style: mergedStyle, width });
    }
  }
  return (0, import_jsx_runtime63.jsx)(LinkPlayer, { alt, className, ref, src: mediaInfo.url, style: mergedStyle });
}))();
var PlayButton = ({ onClick, isPlaying }) => {
  const [isHovering, setIsHovering] = (0, import_react34.useState)(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);
  const onMouseDown = () => setIsHovering(false);
  const onMouseUp = () => setIsHovering(true);
  return (0, import_jsx_runtime63.jsx)("button", { onClick, onMouseDown, onMouseEnter, onMouseLeave, onMouseUp, style: {
    backgroundColor: "#fff",
    border: "1px solid rgb(229, 232, 235)",
    borderRadius: "50%",
    bottom: 0,
    color: "rgb(138, 147, 155)",
    cursor: "pointer",
    display: "grid",
    height: "32px",
    padding: 0,
    placeItems: "center",
    position: "absolute",
    right: 0,
    transform: "translate(-25%, -25%)",
    width: "32px",
    zIndex: 3,
    ...isHovering ? {
      boxShadow: "rgb(4 17 29 / 25%) 0px 0px 8px 0px",
      color: "rgb(53, 56, 64)"
    } : {}
  }, type: "button", children: !isPlaying ? (0, import_jsx_runtime63.jsx)(CarbonPlayFilledAlt, {}) : (0, import_jsx_runtime63.jsx)(CarbonPauseFilled, {}) });
};
var ImageRenderer = (() => (0, import_react34.forwardRef)(function Image_Renderer(props, ref) {
  const { style, src, alt, className, height, width } = props;
  const [error, setError] = (0, import_react34.useState)(false);
  if (error) {
    return (0, import_jsx_runtime63.jsx)(LinkPlayer, { alt, className, ref, src, style });
  }
  return (0, import_jsx_runtime63.jsx)("img", { alt, className, height, onError: () => {
    setError(true);
  }, ref, src: src ?? void 0, style, width });
}))();
var VideoPlayer = (() => (0, import_react34.forwardRef)(function Video_Player({ src, alt, poster, requireInteraction, style, width, height, controls, className }, ref) {
  const videoRef = (0, import_react34.useRef)(null);
  const [playing, setPlaying] = (0, import_react34.useState)(!requireInteraction);
  const [muted, setMuted] = (0, import_react34.useState)(true);
  const [error, setError] = (0, import_react34.useState)(false);
  (0, import_react34.useEffect)(() => {
    if (videoRef.current) {
      if (playing) {
        try {
          videoRef.current.play();
        } catch (err) {
          console.error("Error playing video", err);
        }
      } else {
        try {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        } catch (err) {
          console.error("Error pausing video", err);
        }
      }
    }
  }, [playing]);
  if (error) {
    return (0, import_jsx_runtime63.jsx)(LinkPlayer, { alt, className, ref, src, style });
  }
  return (0, import_jsx_runtime63.jsxs)("div", { className, style: { position: "relative", ...style }, children: [(0, import_jsx_runtime63.jsx)("video", { controls, controlsList: "nodownload", height, loop: true, muted, onCanPlay: () => {
    var _a;
    if (playing) {
      (_a = videoRef.current) == null ? void 0 : _a.play();
    }
  }, onError: () => {
    setError(true);
  }, playsInline: true, poster: poster ?? void 0, preload: poster ? "metadata" : "auto", ref: mergeRefs2([videoRef, ref]), src: src ?? void 0, style: {
    height: "100%",
    objectFit: "contain",
    opacity: !poster ? 1 : playing ? 1 : 0,
    transition: "opacity .5s",
    width: "100%",
    zIndex: 1
  }, width }), poster && (0, import_jsx_runtime63.jsx)("img", { alt, src: poster, style: {
    bottom: 0,
    height: "100%",
    left: 0,
    objectFit: "contain",
    opacity: playing ? 0 : 1,
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    top: 0,
    transition: "opacity .5s",
    width: "100%",
    zIndex: 2
  } }), (0, import_jsx_runtime63.jsx)(PlayButton, { isPlaying: playing, onClick: () => {
    setPlaying((prev) => !prev);
    setMuted(false);
  } })] });
}))();
var AudioPlayer = (() => (0, import_react34.forwardRef)(function Audio_Player({ src, alt, poster, style, height, width, className, controls }, ref) {
  const audioRef = (0, import_react34.useRef)(null);
  const [playing, setPlaying] = (0, import_react34.useState)(false);
  const [muted, setMuted] = (0, import_react34.useState)(true);
  const [error, setError] = (0, import_react34.useState)(false);
  (0, import_react34.useEffect)(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [playing]);
  if (error) {
    return (0, import_jsx_runtime63.jsx)(LinkPlayer, { alt, className, ref, src, style });
  }
  return (0, import_jsx_runtime63.jsxs)("div", { className, style: { position: "relative", ...style }, children: [poster ? (0, import_jsx_runtime63.jsx)("img", { alt, height, src: poster, style: {
    height: "100%",
    objectFit: "contain",
    pointerEvents: "none",
    width: "100%"
  }, width }) : (0, import_jsx_runtime63.jsx)("div", { style: {
    backgroundColor: "#fff",
    color: "rgb(138, 147, 155)",
    display: "grid",
    height: "100%",
    placeItems: "center",
    pointerEvents: "none",
    width: "100%"
  }, children: (0, import_jsx_runtime63.jsx)(CarbonDocumentAudio, { style: { height: "64px", width: "64px" } }) }), (0, import_jsx_runtime63.jsx)(PlayButton, { isPlaying: playing, onClick: () => {
    setPlaying((prev) => !prev);
    setMuted(false);
  } }), (0, import_jsx_runtime63.jsx)("audio", { controls, controlsList: "nodownload", loop: true, muted, onError: () => {
    setError(true);
  }, playsInline: true, preload: "none", ref: mergeRefs2([audioRef, ref]), src: src ?? void 0, style: {
    opacity: 0,
    pointerEvents: "none",
    position: "absolute",
    visibility: "hidden",
    zIndex: -1
  } })] });
}))();
var IframePlayer = (() => (0, import_react34.forwardRef)(function Iframe_Player({ src, alt, poster, requireInteraction, style, ...restProps }, ref) {
  const [playing, setPlaying] = (0, import_react34.useState)(!requireInteraction);
  return (0, import_jsx_runtime63.jsxs)("div", { style: { position: "relative", ...style }, ...restProps, children: [(0, import_jsx_runtime63.jsx)("iframe", { allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", ref, sandbox: "allow-scripts", src: playing ? src ?? void 0 : void 0, style: {
    border: "none",
    height: "100%",
    objectFit: "contain",
    opacity: !poster ? 1 : playing ? 1 : 0,
    transition: "opacity .5s",
    width: "100%",
    zIndex: 1
  }, title: alt || "thirdweb iframe player" }), poster && (0, import_jsx_runtime63.jsx)("img", { alt, src: poster, style: {
    bottom: 0,
    height: "100%",
    left: 0,
    objectFit: "contain",
    opacity: playing ? 0 : 1,
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    top: 0,
    transition: "opacity .5s",
    width: "100%",
    zIndex: 2
  } }), (0, import_jsx_runtime63.jsx)(PlayButton, { isPlaying: playing, onClick: () => {
    setPlaying((prev) => !prev);
  } })] });
}))();
var LinkPlayer = (() => (0, import_react34.forwardRef)(function Link_Player({ src, alt, style, className }, ref) {
  return (0, import_jsx_runtime63.jsx)("div", { className, style: { position: "relative", ...style }, children: (0, import_jsx_runtime63.jsx)("div", { style: {
    backgroundColor: "#fff",
    color: "rgb(138, 147, 155)",
    display: "grid",
    height: "100%",
    placeItems: "center",
    width: "100%"
  }, children: (0, import_jsx_runtime63.jsxs)("div", { style: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    gap: "8px"
  }, children: [(0, import_jsx_runtime63.jsx)(CarbonDocumentUnknown, { style: {
    aspectRatio: "1",
    maxWidth: "128px",
    minWidth: "48px",
    width: "50%"
  } }), (0, import_jsx_runtime63.jsx)("a", { href: src ?? void 0, ref, rel: "noopener noreferrer", style: {
    color: "rgb(138, 147, 155)",
    textDecoration: "underline"
  }, target: "_blank", children: alt || "File" })] }) }) });
}))();
function mergeRefs2(refs) {
  return (value) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    }
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewNFTs.js
function ViewNFTs(props) {
  return (0, import_jsx_runtime64.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime64.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime64.jsx)(ModalHeader, { onBack: props.onBack, title: props.connectLocale.viewFunds.viewNFTs }) }), (0, import_jsx_runtime64.jsx)(Line, {}), (0, import_jsx_runtime64.jsxs)(Container, { px: "sm", scrollY: true, style: {
    maxHeight: "500px"
  }, children: [(0, import_jsx_runtime64.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime64.jsx)(ViewNFTsContent, { ...props })] })] });
}
function ViewNFTsContent(props) {
  var _a, _b, _c;
  const activeAccount = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const nftQuery = useQuery({
    enabled: !!activeChain && !!activeAccount,
    queryFn: async () => {
      if (!activeAccount) {
        throw new Error("No active account");
      }
      if (!activeChain) {
        throw new Error("No active chain");
      }
      const result = await getOwnedNFTs({
        chains: [activeChain],
        client: props.client,
        ownerAddress: activeAccount.address
      });
      return result.filter((nft) => !!nft.metadata.name && !!nft.metadata.image).map((nft) => {
        return {
          address: nft.tokenAddress,
          chain: getCachedChain(nft.chainId),
          ...nft
        };
      });
    },
    queryKey: ["nfts", activeChain == null ? void 0 : activeChain.id, activeAccount == null ? void 0 : activeAccount.address]
  });
  if (!(activeChain == null ? void 0 : activeChain.id) || !(activeAccount == null ? void 0 : activeAccount.address)) {
    return null;
  }
  const filteredNFTs = ((_a = props.supportedNFTs) == null ? void 0 : _a[activeChain.id]) ? (_b = nftQuery.data) == null ? void 0 : _b.filter((nft) => {
    var _a2, _b2;
    return (_b2 = (_a2 = props.supportedNFTs) == null ? void 0 : _a2[activeChain.id]) == null ? void 0 : _b2.map((supportedNFTAddress) => supportedNFTAddress.toLowerCase()).includes(nft.address.toLowerCase());
  }) : nftQuery.data;
  return (0, import_jsx_runtime64.jsxs)(import_jsx_runtime64.Fragment, { children: [nftQuery.error ? (0, import_jsx_runtime64.jsx)(Container, { center: "both", py: "lg", children: (0, import_jsx_runtime64.jsx)(Text, { center: true, color: "secondaryText", size: "sm", children: "Error loading NFTs" }) }) : ((_c = nftQuery.data) == null ? void 0 : _c.length) === 0 && !nftQuery.isLoading ? (0, import_jsx_runtime64.jsx)(Container, { center: "both", py: "lg", children: (0, import_jsx_runtime64.jsx)(Text, { center: true, color: "secondaryText", size: "sm", children: "No NFTs found on this chain" }) }) : (0, import_jsx_runtime64.jsx)(Container, { style: {
    display: "grid",
    gap: "12px",
    gridTemplateColumns: "1fr 1fr"
  }, children: nftQuery.isLoading || !filteredNFTs ? (0, import_jsx_runtime64.jsxs)(import_jsx_runtime64.Fragment, { children: [(0, import_jsx_runtime64.jsx)(Skeleton, { height: "150px", width: "150px" }), (0, import_jsx_runtime64.jsx)(Skeleton, { height: "150px", width: "150px" }), (0, import_jsx_runtime64.jsx)(Skeleton, { height: "150px", width: "150px" })] }) : filteredNFTs.map((nft) => (0, import_jsx_runtime64.jsx)(NftCard, { ...nft, chain: nft.chain, client: props.client, theme: props.theme }, `${nft.chain.id}:${nft.address}:${nft.id}`)) }), (0, import_jsx_runtime64.jsx)(Spacer, { y: "lg" })] });
}
function NftCard(props) {
  var _a;
  const theme = typeof props.theme === "string" ? props.theme : props.theme.type;
  const themeObject = typeof props.theme === "string" ? void 0 : props.theme;
  const content = (0, import_jsx_runtime64.jsxs)("div", { style: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    width: "150px"
  }, children: [(0, import_jsx_runtime64.jsxs)("div", { style: {
    alignItems: "center",
    background: theme === "light" ? "rgba(0, 0, 0, 0.10)" : "rgba(0, 0, 0, 0.20)",
    borderRadius: "8px",
    display: "flex",
    flexShrink: 0,
    height: "150px",
    overflow: "hidden",
    position: "relative",
    width: "150px"
  }, children: [props.metadata.image && (0, import_jsx_runtime64.jsx)(MediaRenderer, { client: props.client, src: props.metadata.image, style: {
    height: "100%",
    width: "100%"
  } }), props.quantityOwned > 1 && (0, import_jsx_runtime64.jsx)("div", { style: {
    alignItems: "center",
    background: ((_a = themeObject == null ? void 0 : themeObject.colors) == null ? void 0 : _a.modalBg) ?? (theme === "light" ? "white" : "black"),
    borderRadius: "100%",
    bottom: "4px",
    display: "flex",
    fontSize: "10px",
    height: "20px",
    justifyContent: "center",
    padding: "4px 4px",
    position: "absolute",
    right: "4px",
    width: "20px"
  }, children: props.quantityOwned.toString() }), props.chain.icon && (0, import_jsx_runtime64.jsx)("img", { alt: props.chain.name, src: props.chain.icon.url, style: {
    bottom: "4px",
    height: "20px",
    left: "4px",
    position: "absolute",
    width: "20px"
  } })] }), (0, import_jsx_runtime64.jsx)(Text, { color: "primaryText", size: "xs", style: {
    fontWeight: 600,
    maxLines: 2,
    textAlign: "center"
  }, children: props.metadata.name })] });
  if (props.chain.name) {
    return (0, import_jsx_runtime64.jsx)("a", { href: `https://thirdweb.com/${props.chain.id}/${props.address}/nfts/${props.id}`, rel: "noreferrer", target: "_blank", children: content });
  }
  return content;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewTokens.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
function ViewTokens(props) {
  return (0, import_jsx_runtime65.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime65.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime65.jsx)(ModalHeader, { onBack: props.onBack, title: props.connectLocale.viewFunds.viewTokens }) }), (0, import_jsx_runtime65.jsx)(Line, {}), (0, import_jsx_runtime65.jsxs)(Container, { px: "sm", scrollY: true, style: {
    maxHeight: "500px"
  }, children: [(0, import_jsx_runtime65.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime65.jsx)(ViewTokensContent, { ...props }), (0, import_jsx_runtime65.jsx)(Spacer, { y: "lg" })] })] });
}
function ViewTokensContent(props) {
  var _a;
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const supportedTokens = props.supportedTokens || defaultTokens;
  const tokenList = ((activeChain == null ? void 0 : activeChain.id) ? supportedTokens[activeChain.id] : void 0) || [];
  const erc20TokensQuery = useQuery({
    // only fetch tokens if no explicit supported tokens are provided
    enabled: !!activeChain && !!account && (!props.supportedTokens || !props.supportedTokens[activeChain.id]),
    queryFn: async () => {
      if (!activeChain) {
        throw new Error("No active chain");
      }
      if (!account) {
        throw new Error("No account");
      }
      const result = await getOwnedTokens({
        chains: [activeChain],
        client: props.client,
        ownerAddress: account.address
      });
      return result.filter((token) => {
        var _a2;
        return !((_a2 = defaultTokens[activeChain.id]) == null ? void 0 : _a2.some((t) => t.address.toLowerCase() === token.tokenAddress.toLowerCase()));
      });
    },
    queryKey: ["tokens", activeChain == null ? void 0 : activeChain.id, account == null ? void 0 : account.address]
  });
  if (!activeChain || !account) {
    return null;
  }
  return (0, import_jsx_runtime65.jsxs)(import_jsx_runtime65.Fragment, { children: [(0, import_jsx_runtime65.jsx)(TokenInfo, { chain: activeChain, client: props.client, token: NATIVE_TOKEN }), tokenList.map((token) => {
    return (0, import_jsx_runtime65.jsx)(TokenInfo, { chain: activeChain, client: props.client, token }, token.address);
  }), erc20TokensQuery.isLoading && (0, import_jsx_runtime65.jsxs)(Container, { flex: "column", gap: "sm", p: "sm", children: [(0, import_jsx_runtime65.jsx)(Skeleton, { height: fontSize.md, width: "100%" }), (0, import_jsx_runtime65.jsx)(Skeleton, { height: fontSize.md, width: "100%" })] }), (_a = erc20TokensQuery.data) == null ? void 0 : _a.map((token) => {
    return (0, import_jsx_runtime65.jsx)(TokenInfo, { balanceData: token, chain: activeChain, client: props.client, token: {
      address: token.tokenAddress,
      name: token.name ?? "",
      symbol: token.symbol ?? ""
    } }, token.tokenAddress);
  })] });
}
function TokenInfo(props) {
  var _a;
  const account = useActiveAccount();
  const tokenBalanceQuery = useWalletBalance({
    address: account == null ? void 0 : account.address,
    chain: props.chain,
    client: props.client,
    tokenAddress: isNativeToken(props.token) ? void 0 : props.token.address
  }, {
    enabled: props.balanceData === void 0
  });
  const tokenName = isNativeToken(props.token) ? (_a = tokenBalanceQuery.data) == null ? void 0 : _a.name : props.token.name;
  return (0, import_jsx_runtime65.jsxs)(Container, { flex: "row", gap: "sm", p: "sm", children: [(0, import_jsx_runtime65.jsx)(TokenIcon, { chain: props.chain, client: props.client, size: "lg", token: props.token }), (0, import_jsx_runtime65.jsxs)(Container, { flex: "column", gap: "xxs", children: [tokenName ? (0, import_jsx_runtime65.jsx)(Text, { color: "primaryText", size: "sm", children: tokenName }) : (0, import_jsx_runtime65.jsx)(Skeleton, { height: fontSize.md, width: "150px" }), props.balanceData ? (0, import_jsx_runtime65.jsxs)(Text, { size: "xs", children: [" ", formatTokenBalance(props.balanceData)] }) : tokenBalanceQuery.data ? (0, import_jsx_runtime65.jsxs)(Text, { size: "xs", children: [" ", formatTokenBalance(tokenBalanceQuery.data)] }) : (0, import_jsx_runtime65.jsx)(Skeleton, { height: fontSize.xs, width: "100px" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/ViewAssets.js
var TokenTab = {
  label: (0, import_jsx_runtime66.jsxs)("span", { className: "flex gap-2", children: [(0, import_jsx_runtime66.jsx)(CoinsIcon, { size: iconSize.sm }), " Tokens"] }),
  value: "Tokens"
};
var NftTab = {
  label: (0, import_jsx_runtime66.jsxs)("span", { className: "flex gap-2", children: [(0, import_jsx_runtime66.jsx)(ImageIcon, { size: iconSize.sm }), " NFTs"] }),
  value: "NFTs"
};
function ViewAssets(props) {
  var _a;
  const { connectLocale } = props;
  const options = (0, import_react35.useMemo)(() => {
    if (!props.assetTabs) {
      return [TokenTab, NftTab];
    }
    if (!props.assetTabs.length) {
      return [];
    }
    const tabs = [];
    for (const item of props.assetTabs) {
      if (item === "token") {
        tabs.push(TokenTab);
      } else if (item === "nft") {
        tabs.push(NftTab);
      }
    }
    return tabs;
  }, [props.assetTabs]);
  const [activeTab, setActiveTab] = (0, import_react35.useState)(((_a = options[0]) == null ? void 0 : _a.value) || "Tokens");
  return (0, import_jsx_runtime66.jsxs)(Container, { animate: "fadein", style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime66.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime66.jsx)(ModalHeader, { onBack: props.onBack, title: connectLocale.viewFunds.viewAssets }) }), (0, import_jsx_runtime66.jsx)(Line, {}), (0, import_jsx_runtime66.jsxs)(Container, { px: "lg", scrollY: true, style: {
    minHeight: "330px"
  }, children: [(0, import_jsx_runtime66.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime66.jsx)(Tabs, { onSelect: setActiveTab, options, selected: activeTab, children: (0, import_jsx_runtime66.jsxs)(Container, { scrollY: true, style: {
    maxHeight: "300px"
  }, children: [activeTab === "Tokens" && (0, import_jsx_runtime66.jsx)(ViewTokensContent, { client: props.client, connectLocale, supportedTokens: props.supportedTokens }), activeTab === "NFTs" && (0, import_jsx_runtime66.jsx)(ViewNFTsContent, { client: props.client, connectLocale, supportedNFTs: props.supportedNFTs, theme: props.theme })] }) }), (0, import_jsx_runtime66.jsx)(Spacer, { y: "lg" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletConnectReceiverScreen.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var import_react36 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletConnectDisconnectScreen.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
function WalletConnectDisconnectScreen(props) {
  return (0, import_jsx_runtime67.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime67.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime67.jsx)(ModalHeader, { onBack: props.onBack, title: "Connect an App" }) }), (0, import_jsx_runtime67.jsx)(Line, {}), (0, import_jsx_runtime67.jsx)(Container, { px: "lg", scrollY: true, style: {
    maxHeight: "500px"
  }, children: (0, import_jsx_runtime67.jsxs)(Container, { py: "lg", style: { position: "relative" }, children: [(0, import_jsx_runtime67.jsx)(Container, { py: "md", children: (0, import_jsx_runtime67.jsx)(WalletLogoSpinner, { client: props.client, error: !!props.error, hideSpinner: true, id: "walletConnect" }) }), (0, import_jsx_runtime67.jsx)(Container, { animate: "fadein", style: {
    animationDuration: "200ms"
  }, children: !props.error ? (0, import_jsx_runtime67.jsxs)(import_jsx_runtime67.Fragment, { children: [(0, import_jsx_runtime67.jsxs)(Text, { balance: true, center: true, multiline: true, size: "md", children: ["Connected to ", props.session.origin ?? "another app."] }), (0, import_jsx_runtime67.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime67.jsx)(Button, { fullWidth: true, onClick: () => {
    props.disconnect();
  }, variant: "accent", children: "Disconnect" })] }) : (0, import_jsx_runtime67.jsxs)(import_jsx_runtime67.Fragment, { children: [(0, import_jsx_runtime67.jsx)(Text, { balance: true, center: true, multiline: true, size: "sm", children: props.error }), (0, import_jsx_runtime67.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime67.jsx)(Container, { animate: "fadein", center: "x", flex: "row", children: (0, import_jsx_runtime67.jsxs)(Button, { fullWidth: true, onClick: () => props.disconnect(), style: {
    alignItems: "center",
    gap: spacing.xs
  }, variant: "accent", children: [(0, import_jsx_runtime67.jsx)(ReloadIcon, { height: iconSize.sm, width: iconSize.sm }), "Retry"] }) })] }) })] }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletConnectReceiverScreen.js
function WalletConnectReceiverScreen(props) {
  const activeWallet = useActiveWallet();
  const [loading, setLoading] = (0, import_react36.useState)(false);
  const [errorConnecting, setErrorConnecting] = (0, import_react36.useState)(false);
  const queryClient = useQueryClient();
  const { data: walletConnectClient } = useQuery({
    enabled: !!activeWallet,
    queryFn: async () => {
      if (!activeWallet)
        return;
      try {
        const client = await createWalletConnectClient({
          chains: props.chains,
          client: props.client,
          onConnect: () => {
            setLoading(false);
            queryClient.invalidateQueries({
              queryKey: ["walletConnectSession"]
            });
          },
          onDisconnect: () => {
            setLoading(false);
            queryClient.invalidateQueries({
              queryKey: ["walletConnectSession"]
            });
          },
          onError: (error) => {
            setErrorConnecting(error.message);
            setLoading(false);
          },
          wallet: activeWallet
        });
        return client;
      } catch {
        setErrorConnecting("Failed to establish WalletConnect connection");
        return;
      }
    },
    queryKey: ["walletConnectClient"],
    retry: false
  });
  const { data: session, refetch: refetchSession } = useQuery({
    enabled: !!walletConnectClient,
    queryFn: async () => {
      if (!walletConnectClient)
        return null;
      const sessions = await getActiveWalletConnectSessions();
      return sessions[0] || null;
    },
    queryKey: ["walletConnectSession"]
  });
  const { mutateAsync: disconnect } = useMutation({
    mutationFn: async () => {
      if (!walletConnectClient || !session)
        throw new Error("No session");
      await disconnectWalletConnectSession({
        session,
        walletConnectClient
      });
    },
    onError: (error) => {
      console.error(error);
      setErrorConnecting(error.message);
    },
    onSuccess: () => {
      setErrorConnecting(false);
      queryClient.invalidateQueries({
        queryKey: ["walletConnectSession"]
      });
      refetchSession();
    }
  });
  if (session) {
    return (0, import_jsx_runtime68.jsx)(WalletConnectDisconnectScreen, { disconnect, error: errorConnecting, ...props, session });
  }
  return (0, import_jsx_runtime68.jsxs)(Container, { style: {
    minHeight: "300px"
  }, children: [(0, import_jsx_runtime68.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime68.jsx)(ModalHeader, { onBack: props.onBack, title: "Connect an App" }) }), (0, import_jsx_runtime68.jsx)(Line, {}), (0, import_jsx_runtime68.jsx)(Container, { px: "lg", scrollY: true, style: {
    maxHeight: "500px"
  }, children: (0, import_jsx_runtime68.jsxs)(Container, { py: "sm", style: { position: "relative" }, children: [(0, import_jsx_runtime68.jsx)(Container, { py: "md", children: (0, import_jsx_runtime68.jsx)(WalletLogoSpinner, { client: props.client, error: !!errorConnecting, hideSpinner: !loading, id: "walletConnect" }) }), (0, import_jsx_runtime68.jsx)(Container, { animate: "fadein", style: {
    animationDuration: "200ms"
  }, children: !errorConnecting ? (0, import_jsx_runtime68.jsxs)(import_jsx_runtime68.Fragment, { children: [(0, import_jsx_runtime68.jsx)(Text, { balance: true, center: true, multiline: true, size: "sm", children: "Copy your connection URI from the external app." }), (0, import_jsx_runtime68.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime68.jsx)(InputSelectionUI, { disabled: loading || !!errorConnecting || !walletConnectClient, emptyErrorMessage: "Please enter a valid URI", name: "wcUri", onSelect: async (value) => {
    setLoading(true);
    if (!walletConnectClient) {
      setErrorConnecting("No WalletConnect client found");
    } else {
      try {
        createWalletConnectSession({
          uri: value,
          walletConnectClient
        });
      } catch {
        setErrorConnecting("Error creating WalletConnect session");
      }
    }
  }, placeholder: "WalletConnect URI", submitButtonText: "Connect", type: "text" })] }) : (0, import_jsx_runtime68.jsxs)(import_jsx_runtime68.Fragment, { children: [(0, import_jsx_runtime68.jsx)(Text, { balance: true, center: true, multiline: true, size: "sm", children: errorConnecting }), (0, import_jsx_runtime68.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime68.jsx)(Container, { animate: "fadein", center: "x", flex: "row", children: (0, import_jsx_runtime68.jsxs)(Button, { fullWidth: true, onClick: () => setErrorConnecting(false), style: {
    alignItems: "center",
    gap: spacing.xs
  }, variant: "accent", children: [(0, import_jsx_runtime68.jsx)(ReloadIcon, { height: iconSize.sm, width: iconSize.sm }), "Retry"] }) })] }) })] }) }), (0, import_jsx_runtime68.jsxs)(Container, { children: [(0, import_jsx_runtime68.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime68.jsx)(Line, {}), (0, import_jsx_runtime68.jsx)(Container, { center: "x", flex: "row", p: "lg", children: (0, import_jsx_runtime68.jsx)("a", { href: "https://blog.thirdweb.com/p/a62c0ef4-1d8f-424d-95b9-a006e5239849/", children: (0, import_jsx_runtime68.jsx)(Button, { onClick: () => {
  }, variant: "link", children: "Where do I find the URI?" }) }) })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/TransactionsScreen.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletTransactionHistory.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var import_react37 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/contract/useWaitForReceipt.js
function useWaitForReceipt(options) {
  var _a;
  return useQuery({
    enabled: !!(options == null ? void 0 : options.transactionHash) && (((_a = options == null ? void 0 : options.queryOptions) == null ? void 0 : _a.enabled) ?? true),
    queryFn: async () => {
      if (!(options == null ? void 0 : options.transactionHash)) {
        throw new Error("No transaction hash or user op hash provided");
      }
      return waitForReceipt(options);
    },
    queryKey: [
      "waitForReceipt",
      // TODO: here chain can be undfined so we go to a `-1` chain but this feels wrong
      (options == null ? void 0 : options.chain.id) || -1,
      options == null ? void 0 : options.transactionHash
    ],
    retry: false
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletTransactionHistory.js
function WalletTransactionHistory(props) {
  const activeChain = useActiveWalletChain();
  const chainExplorers = useChainExplorers(activeChain);
  const transactionStore = getTransactionStore(props.address);
  const reverseChronologicalTransactions = (0, import_react37.useSyncExternalStore)(transactionStore.subscribe, transactionStore.getValue);
  const historicalTxQuery = useQuery({
    enabled: !!activeChain,
    queryFn: () => getPastTransactions({
      chain: activeChain || ethereum,
      client: props.client,
      walletAddress: props.address
    }),
    queryKey: ["transactions", props.address, activeChain]
  });
  const transactions = [
    ...[...reverseChronologicalTransactions].reverse(),
    ...historicalTxQuery.data || []
  ];
  return (0, import_jsx_runtime69.jsx)(Container, { flex: "column", fullHeight: true, scrollY: true, style: {
    maxHeight: "370px",
    minHeight: "250px",
    paddingBottom: spacing.lg
  }, children: (0, import_jsx_runtime69.jsxs)(Container, { expand: true, flex: "column", gap: "xs", children: [historicalTxQuery.isLoading && (0, import_jsx_runtime69.jsxs)(Container, { center: "both", color: "secondaryText", flex: "column", gap: "md", style: {
    flex: "1",
    minHeight: "250px"
  }, children: [(0, import_jsx_runtime69.jsx)(Spinner, { color: "secondaryText", size: "md" }), (0, import_jsx_runtime69.jsx)(Text, { children: "Loading recent transactions..." })] }), !historicalTxQuery.isLoading && transactions.length === 0 ? (0, import_jsx_runtime69.jsxs)(Container, { center: "both", color: "secondaryText", flex: "column", gap: "md", style: {
    flex: "1",
    minHeight: "250px"
  }, children: [(0, import_jsx_runtime69.jsx)(CrossCircledIcon, { height: iconSize.xl, width: iconSize.xl }), (0, import_jsx_runtime69.jsx)(Text, { children: "No Transactions" })] }) : (0, import_jsx_runtime69.jsx)(Container, { animate: "fadein", flex: "column", gap: "xs", style: { minHeight: "250px" }, children: transactions.map((tx) => {
    var _a;
    return (0, import_jsx_runtime69.jsx)(TransactionButton, { client: props.client, explorerUrl: (_a = chainExplorers.explorers[0]) == null ? void 0 : _a.url, tx }, tx.transactionHash);
  }) })] }) });
}
function TransactionButton(props) {
  const { data: fetchedReceipt, isLoading, error } = useWaitForReceipt({
    chain: getCachedChain(props.tx.chainId),
    client: props.client,
    queryOptions: {
      enabled: props.tx.receipt === void 0
    },
    transactionHash: props.tx.transactionHash
  });
  const chainIconQuery = useChainIconUrl(getCachedChain(props.tx.chainId));
  const receipt = props.tx.receipt ?? fetchedReceipt;
  const content = (0, import_jsx_runtime69.jsxs)(TxButton, { fullWidth: true, style: {
    paddingBlock: spacing.sm
  }, variant: "secondary", children: [(0, import_jsx_runtime69.jsxs)(Container, { center: "y", flex: "row", gap: "md", style: {
    flex: 1
  }, children: [(0, import_jsx_runtime69.jsx)(ChainIcon2, { chainIconUrl: chainIconQuery.url, client: props.client, size: iconSize.lg }), (0, import_jsx_runtime69.jsxs)("div", { style: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }, children: [(0, import_jsx_runtime69.jsx)(Container, { center: "y", flex: "row", gap: "xs", style: {
    justifyContent: "space-between"
  }, children: (0, import_jsx_runtime69.jsx)(Text, { color: "primaryText", size: "sm", children: (receipt == null ? void 0 : receipt.to) ? `Interacted with ${shortenHex(receipt == null ? void 0 : receipt.to, 4)}` : `Hash: ${shortenHex(props.tx.transactionHash, 4)}` }) }), (0, import_jsx_runtime69.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime69.jsx)(Container, { center: "y", flex: "row", gap: "xxs", style: {
    justifyContent: "space-between"
  }, children: (0, import_jsx_runtime69.jsx)(ChainName, { chain: getCachedChain(props.tx.chainId), client: props.client, size: "xs" }) })] })] }), (0, import_jsx_runtime69.jsxs)(Container, { center: "y", flex: "row", gap: "xxs", children: [isLoading && (0, import_jsx_runtime69.jsx)(Spinner, { color: "primaryText", size: "sm" }), !isLoading && receipt && receipt.status === "success" && (0, import_jsx_runtime69.jsx)(Text, { color: "success", size: "md", children: (0, import_jsx_runtime69.jsx)(CheckIcon, { height: iconSize.md, width: iconSize.md }) }), (error || !isLoading && receipt && receipt.status !== "success") && (0, import_jsx_runtime69.jsx)(Text, { color: "danger", size: "md", children: (0, import_jsx_runtime69.jsx)(CrossCircledIcon, { height: iconSize.md, width: iconSize.md }) })] })] });
  if (props.explorerUrl) {
    return (0, import_jsx_runtime69.jsx)("a", { href: formatExplorerTxUrl(props.explorerUrl, props.tx.transactionHash), rel: "noreferrer", target: "_blank", children: content });
  }
  return content;
}
var TxButton = newStyled(Button)(() => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      background: theme.colors.secondaryButtonBg
    },
    background: theme.colors.tertiaryBg,
    height: "62px"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/TransactionsScreen.js
function TransactionsScreen(props) {
  var _a;
  const activeChain = useActiveWalletChain();
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const chainExplorers = useChainExplorers(activeChain);
  const payer = activeChain && activeAccount && activeWallet ? { account: activeAccount, chain: activeChain, wallet: activeWallet } : void 0;
  if (!payer) {
    return (0, import_jsx_runtime70.jsx)(LoadingScreen, {});
  }
  return (0, import_jsx_runtime70.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime70.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime70.jsx)(ModalHeader, { onBack: props.onBack, title: props.locale.transactions }) }), (0, import_jsx_runtime70.jsx)(Line, {}), (0, import_jsx_runtime70.jsxs)(Container, { px: "lg", scrollY: true, style: {
    minHeight: "330px"
  }, children: [(0, import_jsx_runtime70.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime70.jsx)(WalletTransactionHistory, { address: payer.account.address, client: props.client, locale: props.locale })] }), (0, import_jsx_runtime70.jsx)(Line, {}), (0, import_jsx_runtime70.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime70.jsxs)(ButtonLink, { as: "a", fullWidth: true, gap: "xs", href: formatExplorerAddressUrl(((_a = chainExplorers.explorers[0]) == null ? void 0 : _a.url) ?? "", (activeAccount == null ? void 0 : activeAccount.address) ?? ""), style: {
    color: "inherit",
    textDecoration: "none"
  }, target: "_blank", variant: "outline", children: ["View on Explorer", (0, import_jsx_runtime70.jsx)(ExternalLinkIcon, { height: iconSize.sm, width: iconSize.sm })] }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Details.js
var TW_CONNECTED_WALLET = "tw-connected-wallet";
var LocalhostChainId = 1337;
var ConnectedWalletDetails = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { connectLocale: locale, client } = props;
  const setRootEl = (0, import_react38.useContext)(SetRootElementContext);
  const walletChain = useActiveWalletChain();
  function closeModal() {
    setRootEl(null);
  }
  function openModal() {
    var _a2, _b2;
    setRootEl((0, import_jsx_runtime71.jsx)(DetailsModal, { assetTabs: (_a2 = props.detailsModal) == null ? void 0 : _a2.assetTabs, chains: props.chains, client, closeModal, connectOptions: props.connectOptions, detailsModal: props.detailsModal, displayBalanceToken: (_b2 = props.detailsButton) == null ? void 0 : _b2.displayBalanceToken, locale, onDisconnect: props.onDisconnect, supportedNFTs: props.supportedNFTs, supportedTokens: props.supportedTokens, theme: props.theme }));
  }
  const isNetworkMismatch = props.chain && walletChain && walletChain.id !== props.chain.id;
  if ((_a = props.detailsButton) == null ? void 0 : _a.render) {
    return (
      // biome-ignore lint/a11y/useKeyWithClickEvents: ok
      // biome-ignore lint/a11y/noStaticElementInteractions: TODO
      (0, import_jsx_runtime71.jsx)("div", { onClick: openModal, children: (0, import_jsx_runtime71.jsx)(props.detailsButton.render, {}) })
    );
  }
  if (props.chain && isNetworkMismatch) {
    return (0, import_jsx_runtime71.jsx)(SwitchNetworkButton, { className: (_b = props.switchButton) == null ? void 0 : _b.className, connectLocale: locale, style: (_c = props.switchButton) == null ? void 0 : _c.style, switchNetworkBtnTitle: (_d = props.switchButton) == null ? void 0 : _d.label, targetChain: props.chain });
  }
  const combinedClassName = `${TW_CONNECTED_WALLET} ${((_e = props.detailsButton) == null ? void 0 : _e.className) || ""}`;
  const tokenAddress = (_g = (_f = props.detailsButton) == null ? void 0 : _f.displayBalanceToken) == null ? void 0 : _g[Number(walletChain == null ? void 0 : walletChain.id)];
  return (0, import_jsx_runtime71.jsxs)(WalletInfoButton, { className: combinedClassName, "data-test": "connected-wallet-details", onClick: openModal, style: (_h = props.detailsButton) == null ? void 0 : _h.style, type: "button", children: [(0, import_jsx_runtime71.jsx)(Container, { style: {
    borderRadius: "100%",
    height: "35px",
    overflow: "hidden",
    width: "35px"
  }, children: ((_i = props.detailsButton) == null ? void 0 : _i.connectedAccountAvatarUrl) ? (0, import_jsx_runtime71.jsx)("img", { alt: "", src: props.detailsButton.connectedAccountAvatarUrl, style: {
    height: "100%",
    objectFit: "cover",
    width: "100%"
  } }) : (0, import_jsx_runtime71.jsx)(AccountAvatar, { className: `${TW_CONNECTED_WALLET}__account_avatar`, fallbackComponent: (0, import_jsx_runtime71.jsx)(AccountBlobbie, { className: `${TW_CONNECTED_WALLET}__account_avatar`, size: 35 }), loadingComponent: (0, import_jsx_runtime71.jsx)(AccountBlobbie, { className: `${TW_CONNECTED_WALLET}__account_avatar`, size: 35 }), queryOptions: {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  }, style: {
    height: "100%",
    objectFit: "cover",
    width: "100%"
  } }) }), (0, import_jsx_runtime71.jsxs)(Container, { flex: "column", gap: "4xs", style: {
    borderRadius: `0 ${radius.md} ${radius.md} 0`,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, children: [((_j = props.detailsButton) == null ? void 0 : _j.connectedAccountName) ? (0, import_jsx_runtime71.jsx)(Text, { className: `${TW_CONNECTED_WALLET}__address`, color: "primaryText", size: "xs", weight: 500, children: props.detailsButton.connectedAccountName }) : (0, import_jsx_runtime71.jsx)(Text, { className: `${TW_CONNECTED_WALLET}__address`, color: "primaryText", size: "xs", weight: 500, children: (0, import_jsx_runtime71.jsx)(AccountName, { fallbackComponent: (0, import_jsx_runtime71.jsx)(AccountAddress, { formatFn: shortenAddress }), loadingComponent: (0, import_jsx_runtime71.jsx)(AccountAddress, { formatFn: shortenAddress }) }) }), (0, import_jsx_runtime71.jsx)(Text, { className: `${TW_CONNECTED_WALLET}__balance`, color: "secondaryText", size: "xs", style: {
    alignItems: "center",
    display: "flex",
    gap: "2px"
  }, weight: 400, children: ((_k = props.detailsButton) == null ? void 0 : _k.showBalanceInFiat) ? (0, import_jsx_runtime71.jsxs)(import_jsx_runtime71.Fragment, { children: [(0, import_jsx_runtime71.jsx)(AccountBalance, { chain: walletChain, fallbackComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: fontSize.xs, width: "50px" }), loadingComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: fontSize.xs, width: "50px" }), tokenAddress }), (0, import_jsx_runtime71.jsx)(AccountBalance, { chain: walletChain, formatFn: detailsBtn_formatFiatBalanceForButton, loadingComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: fontSize.xs, width: "20px" }), showBalanceInFiat: "USD", tokenAddress })] }) : (0, import_jsx_runtime71.jsx)(AccountBalance, { chain: walletChain, fallbackComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: fontSize.xs, width: "70px" }), formatFn: detailsBtn_formatTokenBalanceForButton, loadingComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: fontSize.xs, width: "70px" }), tokenAddress }) })] })] });
};
function detailsBtn_formatFiatBalanceForButton(props) {
  return ` (${formatAccountFiatBalance({ ...props, decimals: 0 })})`;
}
function detailsBtn_formatTokenBalanceForButton(props) {
  return `${formatAccountTokenBalance({ ...props, decimals: props.balance < 1 ? 5 : 4 })}`;
}
function DetailsModal(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
  const [screen, setScreen] = (0, import_react38.useState)("main");
  const { disconnect } = useDisconnect();
  const [isOpen, setIsOpen] = (0, import_react38.useState)(true);
  const { client, locale } = props;
  const walletChain = useActiveWalletChain();
  const activeAccount = useActiveAccount();
  const theme = parseTheme(props.theme);
  const activeWallet = useActiveWallet();
  const chainFaucetsQuery = useChainFaucets(walletChain);
  const disableSwitchChain = !(activeWallet == null ? void 0 : activeWallet.switchChain);
  const screenSetup = useSetupScreen({
    size: "compact",
    wallets: activeWallet ? [activeWallet] : [],
    welcomeScreen: void 0
  });
  const closeModal = (0, import_react38.useCallback)(() => {
    setIsOpen(false);
    onModalUnmount(() => {
      props.closeModal();
    });
  }, [props.closeModal]);
  function handleDisconnect(info) {
    setIsOpen(false);
    props.closeModal();
    props.onDisconnect(info);
  }
  (0, import_react38.useEffect)(() => {
    if (!activeAccount) {
      closeModal();
    }
  }, [activeAccount, closeModal]);
  const { hideSendFunds, hideReceiveFunds, hideBuyFunds } = props.detailsModal || {};
  const hideAllButtons = hideSendFunds && hideReceiveFunds && hideBuyFunds;
  const avatarContent = (0, import_jsx_runtime71.jsxs)(Container, { style: {
    height: `${iconSize.xl}px`,
    position: "relative",
    width: `${iconSize.xl}px`
  }, children: [(0, import_jsx_runtime71.jsx)(Container, { style: {
    borderRadius: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  }, children: ((_a = props.detailsModal) == null ? void 0 : _a.connectedAccountAvatarUrl) ? (0, import_jsx_runtime71.jsx)("img", { alt: "", src: props.detailsModal.connectedAccountAvatarUrl, style: {
    height: "100%",
    objectFit: "cover",
    width: "100%"
  } }) : activeAccount && (0, import_jsx_runtime71.jsx)(AccountAvatar, { fallbackComponent: (0, import_jsx_runtime71.jsx)(AccountBlobbie, { size: Number(iconSize.xxl) }), loadingComponent: (0, import_jsx_runtime71.jsx)(AccountBlobbie, { size: Number(iconSize.xxl) }), style: {
    height: "100%",
    objectFit: "cover",
    width: "100%"
  } }) }), !((_b = props.detailsModal) == null ? void 0 : _b.hideSwitchWallet) ? (0, import_jsx_runtime71.jsx)(Container, { style: {
    bottom: -2,
    position: "absolute",
    right: -2
  }, children: (0, import_jsx_runtime71.jsx)(IconContainer, { padding: "4px", style: {
    background: theme.colors.modalBg
  }, children: activeWallet && (0, import_jsx_runtime71.jsx)(WalletImage, { client, id: activeWallet.id, size: "12", style: { borderRadius: 0 } }) }) }) : null] });
  let content = (0, import_jsx_runtime71.jsxs)("div", { className: `${TW_CONNECTED_WALLET}__default_modal_screen`, children: [(0, import_jsx_runtime71.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime71.jsxs)(Container, { center: "y", flex: "row", gap: "sm", px: "lg", style: {
    paddingBottom: hideAllButtons ? spacing.md : spacing.lg,
    paddingTop: spacing.lg
  }, children: [((_c = props.detailsModal) == null ? void 0 : _c.hideSwitchWallet) ? avatarContent : (0, import_jsx_runtime71.jsx)(ToolTip, { tip: "Switch wallet", children: (0, import_jsx_runtime71.jsx)("div", { onClick: () => {
    setScreen("wallet-manager");
  }, onKeyDown: (e) => {
    if (e.key === "w") {
      setScreen("wallet-manager");
    }
  }, style: {
    cursor: "pointer"
  }, children: avatarContent }) }), (0, import_jsx_runtime71.jsxs)(Container, { flex: "column", gap: "3xs", children: [(0, import_jsx_runtime71.jsxs)("div", { style: {
    alignItems: "center",
    display: "flex",
    gap: spacing.xxs
  }, children: [((_d = props.detailsModal) == null ? void 0 : _d.connectedAccountName) ? (0, import_jsx_runtime71.jsx)(Text, { color: "primaryText", size: "md", weight: 500, children: props.detailsModal.connectedAccountName }) : (0, import_jsx_runtime71.jsx)(Text, { color: "primaryText", size: "md", weight: 500, children: (0, import_jsx_runtime71.jsx)(AccountName, { fallbackComponent: (0, import_jsx_runtime71.jsx)(AccountAddress, { formatFn: shortenAddress }), loadingComponent: (0, import_jsx_runtime71.jsx)(AccountAddress, { formatFn: shortenAddress }) }) }), (0, import_jsx_runtime71.jsx)(IconButton, { children: (0, import_jsx_runtime71.jsx)(CopyIcon2, { text: (activeAccount == null ? void 0 : activeAccount.address) || "", tip: locale.copyAddress }) })] }), (0, import_jsx_runtime71.jsx)(InAppWalletUserInfo, { client, locale })] })] }), !hideAllButtons && (0, import_jsx_runtime71.jsxs)(import_jsx_runtime71.Fragment, { children: [(0, import_jsx_runtime71.jsx)(Container, { px: "lg", children: (0, import_jsx_runtime71.jsxs)(Container, { style: {
    display: "flex",
    gap: spacing.xs
  }, children: [!hideSendFunds && (0, import_jsx_runtime71.jsxs)(Button, { onClick: () => {
    setScreen("send");
  }, style: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    fontSize: fontSize.sm,
    gap: spacing.xs,
    padding: spacing.sm
  }, variant: "outline", children: [(0, import_jsx_runtime71.jsx)(Container, { center: "both", color: "secondaryText", flex: "row", children: (0, import_jsx_runtime71.jsx)(PaperPlaneIcon, { height: iconSize.sm, style: {
    transform: "translateY(-10%) rotate(-45deg) "
  }, width: iconSize.sm }) }), locale.send] }), !hideReceiveFunds && (0, import_jsx_runtime71.jsxs)(Button, { onClick: () => {
    setScreen("receive");
  }, style: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    fontSize: fontSize.sm,
    gap: spacing.xs,
    padding: spacing.sm
  }, variant: "outline", children: [(0, import_jsx_runtime71.jsx)(Container, { center: "both", color: "secondaryText", flex: "row", children: (0, import_jsx_runtime71.jsx)(PinBottomIcon, { height: iconSize.sm, width: iconSize.sm }) }), locale.receive] }), !hideBuyFunds && (0, import_jsx_runtime71.jsxs)(Button, { onClick: () => {
    trackPayEvent({
      client,
      event: "details_modal_buy_click",
      walletAddress: activeAccount == null ? void 0 : activeAccount.address,
      walletType: activeWallet == null ? void 0 : activeWallet.id
    });
    setScreen("buy");
  }, style: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    fontSize: fontSize.sm,
    gap: spacing.xs,
    padding: spacing.sm
  }, variant: "outline", children: [(0, import_jsx_runtime71.jsx)(Container, { center: "both", color: "secondaryText", flex: "row", children: (0, import_jsx_runtime71.jsx)(PlusIcon, { height: iconSize.sm, width: iconSize.sm }) }), locale.buy] })] }) }), (0, import_jsx_runtime71.jsx)(Spacer, { y: "md" })] }), (0, import_jsx_runtime71.jsxs)(Container, { px: "md", children: [(0, import_jsx_runtime71.jsxs)(Container, { flex: "column", style: {
    gap: "1px"
  }, children: [(0, import_jsx_runtime71.jsx)(NetworkSwitcherButton, { client: props.client, disableSwitchChain, displayBalanceToken: props.displayBalanceToken, setScreen: () => setScreen("network-switcher"), showBalanceInFiat: (_e = props.detailsModal) == null ? void 0 : _e.showBalanceInFiat }), (0, import_jsx_runtime71.jsxs)(MenuButton, { onClick: () => {
    setScreen("transactions");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime71.jsx)(TextAlignJustifyIcon, { height: iconSize.md, width: iconSize.md }), (0, import_jsx_runtime71.jsx)(Container, { center: "y", flex: "row", gap: "xs", children: (0, import_jsx_runtime71.jsx)(Text, { color: "primaryText", children: locale.transactions }) })] }), (props.assetTabs === void 0 || props.assetTabs.length > 0) && (0, import_jsx_runtime71.jsxs)(MenuButton, { onClick: () => {
    setScreen("view-assets");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime71.jsx)(CoinsIcon, { size: iconSize.md }), (0, import_jsx_runtime71.jsx)(Text, { color: "primaryText", children: locale.viewFunds.viewAssets })] }), (0, import_jsx_runtime71.jsxs)(MenuButton, { onClick: () => {
    setScreen("manage-wallet");
  }, style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime71.jsx)(OutlineWalletIcon, { size: iconSize.md }), (0, import_jsx_runtime71.jsx)(Text, { color: "primaryText", children: props.locale.manageWallet.title })] }), (((_f = props.detailsModal) == null ? void 0 : _f.showTestnetFaucet) ?? false) && (chainFaucetsQuery.faucets.length > 0 || (walletChain == null ? void 0 : walletChain.id) === LocalhostChainId) && (0, import_jsx_runtime71.jsxs)(MenuLink, { as: "a", href: chainFaucetsQuery.faucets ? chainFaucetsQuery.faucets[0] : "#", style: {
    color: "inherit",
    textDecoration: "none"
  }, target: "_blank", children: [(0, import_jsx_runtime71.jsx)(Container, { center: "both", color: "secondaryText", flex: "row", children: (0, import_jsx_runtime71.jsx)(FundsIcon, { size: iconSize.md }) }), locale.requestTestnetFunds] }), ((_g = props.detailsModal) == null ? void 0 : _g.footer) && (0, import_jsx_runtime71.jsx)(props.detailsModal.footer, { close: closeModal })] }), (0, import_jsx_runtime71.jsx)(Spacer, { y: "md" })] }), ((_h = props.detailsModal) == null ? void 0 : _h.hideDisconnect) !== true && (0, import_jsx_runtime71.jsxs)(Container, { children: [(0, import_jsx_runtime71.jsx)(Line, {}), (0, import_jsx_runtime71.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime71.jsx)(Container, { px: "md", children: (0, import_jsx_runtime71.jsxs)(MenuButton, { "data-variant": "danger", onClick: () => {
    if (activeWallet && activeAccount) {
      disconnect(activeWallet);
      handleDisconnect({
        account: activeAccount,
        wallet: activeWallet
      });
    }
  }, type: "button", children: [(0, import_jsx_runtime71.jsx)(ExitIcon, { height: iconSize.md, width: iconSize.md }), (0, import_jsx_runtime71.jsx)(Text, { color: "primaryText", children: locale.disconnectWallet })] }) }), (0, import_jsx_runtime71.jsx)(Spacer, { y: "sm" })] })] });
  if (screen === "transactions") {
    content = (0, import_jsx_runtime71.jsx)(TransactionsScreen, { client, closeModal, locale, onBack: () => setScreen("main"), setScreen, title: locale.buy });
  }
  if (screen === "wallet-manager" && activeAccount && walletChain && activeWallet) {
    content = (0, import_jsx_runtime71.jsx)(WalletManagerScreen, { accountAbstraction: (_i = props.connectOptions) == null ? void 0 : _i.accountAbstraction, activeAccount, activeChain: walletChain, activeWallet, appMetadata: (_j = props.connectOptions) == null ? void 0 : _j.appMetadata, chain: (_k = props.connectOptions) == null ? void 0 : _k.chain, chains: (_l = props.connectOptions) == null ? void 0 : _l.chains, client, connectLocale: locale, hiddenWallets: (_m = props.connectOptions) == null ? void 0 : _m.hiddenWallets, onBack: () => setScreen("main"), recommendedWallets: (_n = props.connectOptions) == null ? void 0 : _n.recommendedWallets, showAllWallets: !!((_o = props.connectOptions) == null ? void 0 : _o.showAllWallets), walletConnect: (_p = props.connectOptions) == null ? void 0 : _p.walletConnect, wallets: (_q = props.connectOptions) == null ? void 0 : _q.wallets });
  }
  if (screen === "network-switcher") {
    content = (0, import_jsx_runtime71.jsx)(
      NetworkSelectorContent,
      {
        // add currently connected chain to the list of chains if it's not already in the list
        chains: walletChain && props.chains.find((c) => c.id === walletChain.id) === void 0 ? [walletChain, ...props.chains] : props.chains,
        client,
        closeModal,
        connectLocale: locale,
        networkSelector: (_r = props.detailsModal) == null ? void 0 : _r.networkSelector,
        onBack: () => {
          setScreen("main");
        }
      }
    );
  } else if (screen === "view-assets") {
    content = (0, import_jsx_runtime71.jsx)(ViewAssets, { assetTabs: (_s = props.detailsModal) == null ? void 0 : _s.assetTabs, client, connectLocale: locale, onBack: () => {
      setScreen("main");
    }, setScreen, supportedNFTs: props.supportedNFTs, supportedTokens: props.supportedTokens, theme: props.theme });
  } else if (screen === "view-nfts") {
    content = (0, import_jsx_runtime71.jsx)(ViewNFTs, { client, connectLocale: locale, onBack: () => {
      setScreen("main");
    }, supportedNFTs: props.supportedNFTs, theme: props.theme });
  } else if (screen === "view-tokens") {
    content = (0, import_jsx_runtime71.jsx)(ViewTokens, { client, connectLocale: locale, onBack: () => {
      setScreen("main");
    }, supportedTokens: props.supportedTokens });
  } else if (screen === "private-key") {
    content = (0, import_jsx_runtime71.jsx)(PrivateKey, { client, connectLocale: locale, onBack: () => {
      setScreen("manage-wallet");
    }, theme: props.theme, wallet: activeWallet });
  } else if (screen === "manage-wallet") {
    content = (0, import_jsx_runtime71.jsx)(ManageWalletScreen, { client, closeModal, locale, onBack: () => {
      setScreen("main");
    }, setScreen });
  } else if (screen === "wallet-connect-receiver") {
    content = (0, import_jsx_runtime71.jsx)(WalletConnectReceiverScreen, { chains: props.chains, client, onBack: () => {
      setScreen("manage-wallet");
    } });
  } else if (screen === "linked-profiles") {
    content = (0, import_jsx_runtime71.jsx)(LinkedProfilesScreen, { client, locale, onBack: () => setScreen("manage-wallet"), setScreen });
  } else if (screen === "link-profile") {
    content = (0, import_jsx_runtime71.jsx)(LinkProfileScreen, { client, locale, onBack: () => {
      setScreen("linked-profiles");
    }, walletConnect: (_t = props.connectOptions) == null ? void 0 : _t.walletConnect });
  } else if (screen === "send") {
    content = (0, import_jsx_runtime71.jsx)(SendFunds, { client, connectLocale: locale, onBack: () => {
      setScreen("main");
    }, supportedTokens: props.supportedTokens });
  } else if (screen === "receive") {
    content = (0, import_jsx_runtime71.jsx)(ReceiveFunds, { client, connectLocale: locale, onBack: () => {
      setScreen("main");
    }, walletId: activeWallet == null ? void 0 : activeWallet.id });
  } else if (screen === "buy") {
    content = (0, import_jsx_runtime71.jsx)(LazyBuyScreen, { client, connectLocale: locale, connectOptions: void 0, hiddenWallets: (_u = props.detailsModal) == null ? void 0 : _u.hiddenWallets, isEmbed: false, onBack: () => setScreen("main"), onDone: closeModal, payOptions: ((_v = props.detailsModal) == null ? void 0 : _v.payOptions) || {
      mode: "fund_wallet"
    }, supportedTokens: props.supportedTokens, theme: typeof props.theme === "string" ? props.theme : props.theme.type, title: locale.buy });
  }
  return (0, import_jsx_runtime71.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime71.jsx)(WalletUIStatesProvider, { isOpen: false, theme: props.theme, children: (0, import_jsx_runtime71.jsx)(ScreenSetupContext.Provider, { value: screenSetup, children: (0, import_jsx_runtime71.jsx)(Modal, { open: isOpen, setOpen: (_open) => {
    var _a2, _b2;
    if (!_open) {
      closeModal();
      if ((_a2 = props.detailsModal) == null ? void 0 : _a2.onClose) {
        (_b2 = props.detailsModal) == null ? void 0 : _b2.onClose(screen);
      }
    }
  }, size: "compact", children: (activeAccount == null ? void 0 : activeAccount.address) && (0, import_jsx_runtime71.jsx)(AccountProvider, { address: activeAccount.address, client, children: content }) }) }) }) });
}
function NetworkSwitcherButton(props) {
  var _a, _b, _c;
  const { disableSwitchChain, setScreen, showBalanceInFiat, client } = props;
  const walletChain = useActiveWalletChain();
  if (!walletChain) {
    return null;
  }
  return (0, import_jsx_runtime71.jsxs)(MenuButton, { className: "tw-internal-network-switcher-button", "data-variant": "primary", disabled: disableSwitchChain, onClick: () => {
    setScreen("network-switcher");
  }, type: "button", children: [(0, import_jsx_runtime71.jsxs)(ChainProvider, { chain: walletChain, children: [(0, import_jsx_runtime71.jsx)("div", { style: {
    alignItems: "center",
    display: "flex",
    position: "relative"
  }, children: (0, import_jsx_runtime71.jsxs)(Container, { style: {
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    position: "relative"
  }, children: [(0, import_jsx_runtime71.jsx)(ChainIcon, { client, fallbackComponent: (0, import_jsx_runtime71.jsx)("img", { alt: "", src: fallbackChainIcon, style: {
    height: `${iconSize.md}px`,
    width: `${iconSize.md}px`
  } }), loadingComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: `${iconSize.md}px`, width: `${iconSize.md}px` }), style: {
    height: `${iconSize.md}px`,
    width: `${iconSize.md}px`
  } }), (0, import_jsx_runtime71.jsx)(ChainActiveDot, { className: "tw-chain-active-dot-details-button" })] }) }), (0, import_jsx_runtime71.jsxs)(Text, { color: "primaryText", multiline: true, size: "md", children: [(0, import_jsx_runtime71.jsx)(ChainName2, { fallbackComponent: (0, import_jsx_runtime71.jsxs)("span", { children: ["Unknown chain #", walletChain == null ? void 0 : walletChain.id] }), loadingComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: "16px", width: "150px" }) }), (0, import_jsx_runtime71.jsx)(Text, { color: "secondaryText", size: "xs", children: showBalanceInFiat ? (0, import_jsx_runtime71.jsxs)(import_jsx_runtime71.Fragment, { children: [(0, import_jsx_runtime71.jsx)(AccountBalance, { chain: walletChain, fallbackComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: "1em", width: "70px" }), formatFn: (props2) => formatAccountTokenBalance({ ...props2, decimals: 7 }), loadingComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: "1em", width: "70px" }), tokenAddress: (_a = props.displayBalanceToken) == null ? void 0 : _a[Number(walletChain == null ? void 0 : walletChain.id)] }), " ", (0, import_jsx_runtime71.jsx)(AccountBalance, { chain: walletChain, formatFn: (props2) => ` (${formatAccountFiatBalance({ ...props2, decimals: 3 })})`, loadingComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: "1em", width: "30px" }), showBalanceInFiat: "USD", tokenAddress: (_b = props.displayBalanceToken) == null ? void 0 : _b[Number(walletChain == null ? void 0 : walletChain.id)] })] }) : (0, import_jsx_runtime71.jsx)(AccountBalance, { chain: walletChain, fallbackComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: "1em", width: "100px" }), formatFn: (props2) => formatAccountTokenBalance({ ...props2, decimals: 7 }), loadingComponent: (0, import_jsx_runtime71.jsx)(Skeleton, { height: "1em", width: "100px" }), tokenAddress: (_c = props.displayBalanceToken) == null ? void 0 : _c[Number(walletChain == null ? void 0 : walletChain.id)] }) })] })] }), (0, import_jsx_runtime71.jsx)(StyledChevronRightIcon, { height: iconSize.sm, style: {
    flexShrink: 0,
    marginLeft: "auto"
  }, width: iconSize.sm })] });
}
var WalletInfoButton = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      background: theme.colors.connectedButtonBgHover,
      transition: "background 250ms ease"
    },
    alignItems: "center",
    all: "unset",
    animation: `${fadeInAnimation} 300ms ease`,
    background: theme.colors.connectedButtonBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    boxSizing: "border-box",
    cursor: "pointer",
    display: "inline-flex",
    gap: spacing.xs,
    height: "50px",
    lineHeight: "normal",
    minWidth: "165px",
    overflow: "hidden",
    padding: spacing.xs,
    WebkitTapHighlightColor: "transparent"
  };
});
var StyledChevronRightIcon = newStyled(
  ChevronRightIcon
)(() => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.secondaryText
  };
});
function ConnectedToSmartWallet(props) {
  const activeAccount = useActiveAccount();
  const activeWallet = useActiveWallet();
  const isSW = isSmartWallet(activeWallet);
  const chain = useActiveWalletChain();
  const { client, connectLocale: locale } = props;
  const [isSmartWalletDeployed, setIsSmartWalletDeployed] = (0, import_react38.useState)(false);
  (0, import_react38.useEffect)(() => {
    if (activeAccount && isSW && activeAccount.address && chain) {
      const contract = getContract({
        address: activeAccount.address,
        chain,
        client
      });
      isContractDeployed(contract).then((isDeployed) => {
        setIsSmartWalletDeployed(isDeployed);
      });
    } else {
      setIsSmartWalletDeployed(false);
    }
  }, [activeAccount, chain, client, isSW]);
  const content = (0, import_jsx_runtime71.jsx)(Container, { center: "y", flex: "row", gap: "3xs", children: (0, import_jsx_runtime71.jsx)(Text, { color: "secondaryText", size: "xs", weight: 400, children: locale.connectedToSmartWallet }) });
  if (chain && activeAccount && isSW) {
    return (0, import_jsx_runtime71.jsx)(import_jsx_runtime71.Fragment, { children: isSmartWalletDeployed ? (0, import_jsx_runtime71.jsx)(Link, { color: "secondaryText", hoverColor: "primaryText", href: `https://thirdweb.com/${chain.id}/${activeAccount.address}/account`, size: "sm", target: "_blank", children: content }) : (0, import_jsx_runtime71.jsxs)(Text, { size: "sm", children: [" ", content] }) });
  }
  return null;
}
function InAppWalletUserInfo(props) {
  const { client, locale } = props;
  const account = useActiveAccount();
  const activeWallet = useActiveWallet();
  const adminWallet = useAdminWallet();
  const { data: walletInfo } = useWalletInfo(activeWallet == null ? void 0 : activeWallet.id);
  const isSW = isSmartWallet(activeWallet);
  const { data: walletName } = useQuery({
    enabled: !!(activeWallet == null ? void 0 : activeWallet.id) && !!walletInfo,
    queryFn: async () => {
      const lastAuthProvider = await getLastAuthProvider(webLocalStorage);
      if (lastAuthProvider === "guest") {
        return "Guest";
      }
      if (lastAuthProvider && ((activeWallet == null ? void 0 : activeWallet.id) === "inApp" || (activeWallet == null ? void 0 : activeWallet.id) === "smart") && socialAuthOptions.includes(lastAuthProvider)) {
        return lastAuthProvider.slice(0, 1).toUpperCase() + lastAuthProvider.slice(1);
      }
      return walletInfo == null ? void 0 : walletInfo.name;
    },
    queryKey: [
      "wallet-name",
      { walletAddress: account == null ? void 0 : account.address, walletId: activeWallet == null ? void 0 : activeWallet.id }
    ]
  });
  const userInfoQuery = useQuery({
    enabled: !!adminWallet,
    queryFn: async () => {
      var _a;
      const isInAppWallet2 = adminWallet && (adminWallet.id === "inApp" || adminWallet.id.startsWith("ecosystem."));
      if (!isInAppWallet2) {
        return null;
      }
      let ecosystem;
      if (isEcosystemWallet(adminWallet)) {
        const ecosystemWallet = adminWallet;
        const partnerId = (_a = ecosystemWallet.getConfig()) == null ? void 0 : _a.partnerId;
        ecosystem = {
          id: ecosystemWallet.id,
          partnerId
        };
      }
      const { getUserEmail, getUserPhoneNumber } = await import("./auth-JI5HGIRD.js");
      const [email, phone] = await Promise.all([
        getUserEmail({
          client,
          ecosystem
        }),
        getUserPhoneNumber({
          client,
          ecosystem
        })
      ]);
      return email || phone || null;
    },
    queryKey: ["in-app-wallet-user", client, account == null ? void 0 : account.address]
  });
  if (!userInfoQuery.data && isSW) {
    return (0, import_jsx_runtime71.jsx)(ConnectedToSmartWallet, { client, connectLocale: locale });
  }
  if (userInfoQuery.data || walletName) {
    return (0, import_jsx_runtime71.jsx)(Text, { size: "xs", weight: 400, children: userInfoQuery.data || walletName });
  }
  return (0, import_jsx_runtime71.jsx)(Skeleton, { className: "InAppWalletUserInfo__skeleton", height: "10px", width: "50px" });
}
function SwitchNetworkButton(props) {
  const switchChain = useSwitchActiveWalletChain();
  const [switching, setSwitching] = (0, import_react38.useState)(false);
  const locale = props.connectLocale;
  const switchNetworkBtnTitle = props.switchNetworkBtnTitle ?? locale.switchNetwork;
  return (0, import_jsx_runtime71.jsx)(Button, { "aria-label": switching ? locale.switchingNetwork : void 0, className: `tw-connect-wallet--switch-network ${props.className || ""}`, "data-is-loading": switching, "data-test": "switch-network-button", disabled: switching, onClick: async () => {
    setSwitching(true);
    try {
      await switchChain(props.targetChain);
    } catch (e) {
      console.error(e);
    }
    setSwitching(false);
  }, style: {
    minWidth: "140px",
    ...props.style
  }, type: "button", variant: "primary", children: switching ? (0, import_jsx_runtime71.jsx)(Spinner, { color: "primaryButtonText", size: "sm" }) : switchNetworkBtnTitle });
}
function useWalletDetailsModal() {
  const account = useActiveAccount();
  const setRootEl = (0, import_react38.useContext)(SetRootElementContext);
  function closeModal() {
    setRootEl(null);
  }
  function openModal(props) {
    if (!account) {
      throw new Error("Wallet is not connected.");
    }
    getConnectLocale(props.locale || "en_US").then((locale) => {
      setRootEl((0, import_jsx_runtime71.jsx)(DetailsModal, { chains: props.chains || [], client: props.client, closeModal, connectOptions: props.connectOptions, detailsModal: {
        assetTabs: props.assetTabs,
        connectedAccountAvatarUrl: props.connectedAccountAvatarUrl,
        connectedAccountName: props.connectedAccountName,
        footer: props.footer,
        hideBuyFunds: props.hideBuyFunds,
        hideDisconnect: props.hideDisconnect,
        hideReceiveFunds: props.hideReceiveFunds,
        hideSendFunds: props.hideSendFunds,
        hideSwitchWallet: props.hideSwitchWallet,
        networkSelector: props.networkSelector,
        onClose: props.onClose,
        payOptions: props.payOptions,
        showTestnetFaucet: props.showTestnetFaucet
      }, displayBalanceToken: props.displayBalanceToken, locale, onDisconnect: (info) => {
        var _a;
        (_a = props.onDisconnect) == null ? void 0 : _a.call(props, info);
        closeModal();
      }, supportedNFTs: props.supportedNFTs, supportedTokens: props.supportedTokens, theme: props.theme || "dark" }));
    }).catch(() => {
      closeModal();
    });
  }
  return {
    open: openModal
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/LockIcon.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var LockIcon = (props) => {
  return (0, import_jsx_runtime72.jsx)("svg", { fill: "none", height: props.size, role: "presentation", viewBox: "0 0 16 21", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime72.jsx)("path", { d: "M2 21C1.45 21 0.979333 20.8043 0.588 20.413C0.196 20.021 0 19.55 0 19V9C0 8.45 0.196 7.979 0.588 7.587C0.979333 7.19567 1.45 7 2 7H3V5C3 3.61667 3.48767 2.43733 4.463 1.462C5.43767 0.487333 6.61667 0 8 0C9.38333 0 10.5627 0.487333 11.538 1.462C12.5127 2.43733 13 3.61667 13 5V7H14C14.55 7 15.021 7.19567 15.413 7.587C15.8043 7.979 16 8.45 16 9V19C16 19.55 15.8043 20.021 15.413 20.413C15.021 20.8043 14.55 21 14 21H2ZM8 16C8.55 16 9.021 15.8043 9.413 15.413C9.80433 15.021 10 14.55 10 14C10 13.45 9.80433 12.979 9.413 12.587C9.021 12.1957 8.55 12 8 12C7.45 12 6.97933 12.1957 6.588 12.587C6.196 12.979 6 13.45 6 14C6 14.55 6.196 15.021 6.588 15.413C6.97933 15.8043 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z", fill: "currentColor" }) });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectModal.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var import_react39 = __toESM(require_react(), 1);
var ConnectModal = (props) => {
  const screenSetup = useSetupScreen({
    size: props.size,
    wallets: props.wallets,
    welcomeScreen: props.welcomeScreen
  });
  const setSelectionData = useSetSelectionData();
  const { screen, setScreen, initialScreen } = screenSetup;
  const isWalletModalOpen = useIsWalletModalOpen();
  const setIsWalletModalOpen = useSetIsWalletModalOpen();
  const [hideModal, setHideModal] = (0, import_react39.useState)(false);
  const closeModal = (0, import_react39.useCallback)(() => {
    var _a;
    (_a = props.onClose) == null ? void 0 : _a.call(props);
    setIsWalletModalOpen(false);
    onModalUnmount(() => {
      setScreen(initialScreen);
      setSelectionData({});
    });
  }, [
    initialScreen,
    setIsWalletModalOpen,
    setScreen,
    setSelectionData,
    props.onClose
  ]);
  const activeAccount = useActiveAccount();
  (0, import_react39.useEffect)(() => {
    if (!isWalletModalOpen) {
      onModalUnmount(() => {
        setHideModal(false);
      });
    }
  }, [isWalletModalOpen]);
  const setModalVisibility = (0, import_react39.useCallback)((value) => setHideModal(!value), []);
  (0, import_react39.useEffect)(() => {
    if (isWalletModalOpen && screen === reservedScreens.signIn && !activeAccount) {
      setScreen(initialScreen);
      setIsWalletModalOpen(false);
    }
  }, [
    initialScreen,
    isWalletModalOpen,
    screen,
    setIsWalletModalOpen,
    setScreen,
    activeAccount
  ]);
  return (0, import_jsx_runtime73.jsx)(Modal, { hide: hideModal, open: isWalletModalOpen, setOpen: (value) => {
    if (hideModal) {
      return;
    }
    if (!value) {
      closeModal();
    }
  }, size: props.size, children: (0, import_jsx_runtime73.jsx)(ConnectModalContent, { accountAbstraction: props.accountAbstraction, auth: props.auth, chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, hideHeader: false, isOpen: isWalletModalOpen, meta: props.meta, modalHeader: void 0, onClose: closeModal, onConnect: props.onConnect, recommendedWallets: props.recommendedWallets, screenSetup, setModalVisibility, shouldSetActive: props.shouldSetActive, showAllWallets: props.showAllWallets, size: props.size, walletConnect: props.walletConnect, walletIdsToHide: props.hiddenWallets, wallets: props.wallets, welcomeScreen: props.welcomeScreen }) });
};
var ConnectModal_default = ConnectModal;

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/ConnectButton.js
var TW_CONNECT_WALLET = "tw-connect-wallet";
function ConnectButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const wallets = (0, import_react40.useMemo)(() => props.wallets || getDefaultWallets({
    appMetadata: props.appMetadata,
    chains: props.chains,
    executionMode: props.accountAbstraction ? {
      mode: "EIP4337",
      smartAccount: props.accountAbstraction
    } : void 0
  }), [props.wallets, props.appMetadata, props.chains, props.accountAbstraction]);
  const localeQuery = useConnectLocale(props.locale || "en_US");
  const connectionManager = useConnectionManager();
  const activeAccount = useActiveAccount();
  const activeWallet = useActiveWallet();
  const siweAuth = useSiweAuth(activeWallet, activeAccount, props.auth);
  const hiddenWallets = props.hiddenWallets || ((_a = props.detailsModal) == null ? void 0 : _a.hiddenWallets);
  usePreloadWalletProviders({
    wallets
  });
  (0, import_react40.useEffect)(() => {
    if (props.chain) {
      connectionManager.defineChains([props.chain]);
    }
  }, [props.chain, connectionManager]);
  (0, import_react40.useEffect)(() => {
    if (props.chains) {
      connectionManager.defineChains(props.chains);
    }
  }, [props.chains, connectionManager]);
  const size4 = (0, import_react40.useMemo)(() => {
    var _a2;
    return !canFitWideModal() || wallets.length === 1 ? "compact" : ((_a2 = props.connectModal) == null ? void 0 : _a2.size) || "compact";
  }, [wallets.length, (_b = props.connectModal) == null ? void 0 : _b.size]);
  const preferredChain = ((_c = props.accountAbstraction) == null ? void 0 : _c.chain) || props.chain || ((_d = props.chains) == null ? void 0 : _d[0]);
  const autoConnectComp = props.autoConnect !== false && (0, import_jsx_runtime74.jsx)(AutoConnect, { accountAbstraction: props.accountAbstraction, appMetadata: props.appMetadata, chain: preferredChain, client: props.client, onConnect: props.onConnect, siweAuth, timeout: typeof props.autoConnect === "boolean" ? void 0 : (_e = props.autoConnect) == null ? void 0 : _e.timeout, wallets });
  if (!localeQuery.data) {
    const combinedClassName = `${((_f = props.connectButton) == null ? void 0 : _f.className) || ""} ${TW_CONNECT_WALLET}`;
    return (0, import_jsx_runtime74.jsxs)(AnimatedButton, { className: combinedClassName, disabled: true, style: {
      height: "50px",
      minWidth: "165px",
      ...(_g = props.connectButton) == null ? void 0 : _g.style
    }, type: "button", variant: "primary", children: [autoConnectComp, (0, import_jsx_runtime74.jsx)(Spinner, { color: "primaryButtonText", size: "sm" })] });
  }
  return (0, import_jsx_runtime74.jsxs)(WalletUIStatesProvider, { isOpen: false, theme: props.theme, children: [(0, import_jsx_runtime74.jsx)(ConnectButtonInner, { ...props, connectLocale: localeQuery.data, siweAuth }), (0, import_jsx_runtime74.jsx)(ConnectModal_default, { accountAbstraction: props.accountAbstraction, auth: props.auth, chain: preferredChain, chains: props.chains, client: props.client, connectLocale: localeQuery.data, hiddenWallets, localeId: props.locale || "en_US", meta: {
    privacyPolicyUrl: (_h = props.connectModal) == null ? void 0 : _h.privacyPolicyUrl,
    requireApproval: (_i = props.connectModal) == null ? void 0 : _i.requireApproval,
    showThirdwebBranding: (_j = props.connectModal) == null ? void 0 : _j.showThirdwebBranding,
    termsOfServiceUrl: (_k = props.connectModal) == null ? void 0 : _k.termsOfServiceUrl,
    title: (_l = props.connectModal) == null ? void 0 : _l.title,
    titleIconUrl: (_m = props.connectModal) == null ? void 0 : _m.titleIcon
  }, onConnect: props.onConnect, recommendedWallets: props.recommendedWallets, shouldSetActive: true, showAllWallets: props.showAllWallets, size: size4, walletConnect: props.walletConnect, wallets, welcomeScreen: (_n = props.connectModal) == null ? void 0 : _n.welcomeScreen }), autoConnectComp] });
}
function ConnectButtonInner(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const siweAuth = props.siweAuth;
  const activeAccount = useActiveAccount();
  const [showSignatureModal, setShowSignatureModal] = (0, import_react40.useState)(false);
  const hiddenWallets = props.hiddenWallets || ((_a = props.detailsModal) == null ? void 0 : _a.hiddenWallets);
  (0, import_react40.useEffect)(() => {
    if (!activeAccount) {
      setShowSignatureModal(false);
    }
  }, [activeAccount]);
  const theme = props.theme || "dark";
  const connectionStatus = useActiveWalletConnectionStatus();
  const locale = props.connectLocale;
  const isLoading = connectionStatus === "connecting";
  const connectButtonLabel = ((_b = props.connectButton) == null ? void 0 : _b.label) || locale.defaultButtonTitle;
  const setIsWalletModalOpen = useSetIsWalletModalOpen();
  const supportedTokens = (0, import_react40.useMemo)(() => {
    if (!props.supportedTokens) {
      return void 0;
    }
    const tokens2 = { ...defaultTokens };
    for (const k in props.supportedTokens) {
      const key = Number(k);
      const tokenList = props.supportedTokens[key];
      if (tokenList) {
        tokens2[key] = tokenList;
      }
    }
    return tokens2;
  }, [props.supportedTokens]);
  if (!activeAccount) {
    const combinedClassName = `${((_c = props.connectButton) == null ? void 0 : _c.className) || ""} ${TW_CONNECT_WALLET}`;
    return (0, import_jsx_runtime74.jsx)(AnimatedButton, { "aria-label": connectionStatus === "connecting" ? locale.connecting : typeof connectButtonLabel === "string" ? connectButtonLabel : locale.defaultButtonTitle, className: combinedClassName, "data-is-loading": isLoading, "data-test": "connect-wallet-button", "data-theme": theme, disabled: isLoading, onClick: () => {
      setIsWalletModalOpen(true);
    }, style: {
      fontSize: "16px",
      height: "50px",
      minWidth: "165px",
      ...(_d = props.connectButton) == null ? void 0 : _d.style
    }, type: "button", variant: "primary", children: isLoading ? (0, import_jsx_runtime74.jsx)(Spinner, { color: "primaryButtonText", size: "sm" }) : connectButtonLabel });
  }
  if (siweAuth.requiresAuth) {
    if (siweAuth.isPending || siweAuth.isLoggingIn || siweAuth.isLoggingOut) {
      const combinedClassName = `${((_e = props.connectButton) == null ? void 0 : _e.className) || ""} ${TW_CONNECT_WALLET}`;
      return (0, import_jsx_runtime74.jsx)(AnimatedButton, { className: combinedClassName, disabled: true, style: {
        height: "50px",
        minWidth: "165px",
        ...(_f = props.connectButton) == null ? void 0 : _f.style
      }, type: "button", variant: "primary", children: (0, import_jsx_runtime74.jsx)(Spinner, { color: "primaryButtonText", size: "sm" }) });
    }
    if (!siweAuth.isLoggedIn) {
      return (0, import_jsx_runtime74.jsxs)(import_jsx_runtime74.Fragment, { children: [(0, import_jsx_runtime74.jsx)(Button, { className: (_g = props.signInButton) == null ? void 0 : _g.className, onClick: () => {
        setShowSignatureModal(true);
      }, style: {
        minHeight: "50px",
        minWidth: "165px",
        ...(_h = props.signInButton) == null ? void 0 : _h.style
      }, type: "button", variant: "primary", children: siweAuth.isLoggingIn ? (0, import_jsx_runtime74.jsx)(Spinner, { color: "primaryButtonText", size: "sm" }) : (0, import_jsx_runtime74.jsxs)(Container, { center: "y", flex: "row", gap: "sm", children: [(0, import_jsx_runtime74.jsx)(LockIcon, { size: iconSize.sm }), (0, import_jsx_runtime74.jsxs)("span", { children: [" ", ((_i = props.signInButton) == null ? void 0 : _i.label) || locale.signIn, " "] })] }) }), (0, import_jsx_runtime74.jsx)(Modal, { open: showSignatureModal, setOpen: setShowSignatureModal, size: "compact", children: (0, import_jsx_runtime74.jsx)(SignatureScreen, { auth: props.auth, client: props.client, connectLocale: locale, modalSize: "compact", onDone: () => setShowSignatureModal(false), privacyPolicyUrl: (_j = props.connectModal) == null ? void 0 : _j.privacyPolicyUrl, termsOfServiceUrl: (_k = props.connectModal) == null ? void 0 : _k.termsOfServiceUrl }) })] });
    }
  }
  return (0, import_jsx_runtime74.jsx)(AccountProvider, { address: activeAccount.address, client: props.client, children: (0, import_jsx_runtime74.jsx)(ConnectedWalletDetails, { chain: props.chain, chains: (props == null ? void 0 : props.chains) || [], client: props.client, connectLocale: locale, connectOptions: {
    accountAbstraction: props.accountAbstraction,
    appMetadata: props.appMetadata,
    chain: props.chain,
    chains: props.chains,
    connectModal: props.connectModal,
    hiddenWallets,
    recommendedWallets: props.recommendedWallets,
    showAllWallets: props.showAllWallets,
    walletConnect: props.walletConnect,
    wallets: props.wallets
  }, detailsButton: props.detailsButton, detailsModal: {
    ...props.detailsModal,
    hiddenWallets
  }, onDisconnect: (info) => {
    var _a2;
    if (siweAuth.requiresAuth) {
      siweAuth.doLogout();
    }
    (_a2 = props.onDisconnect) == null ? void 0 : _a2.call(props, info);
  }, supportedNFTs: props.supportedNFTs, supportedTokens, switchButton: props.switchButton, theme }) });
}
var AnimatedButton = newStyled(Button)({
  animation: `${fadeInAnimation} 300ms ease`
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/DirectPaymentModeScreen.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
function DirectPaymentModeScreen(props) {
  var _a, _b, _c, _d, _e, _f;
  const { payUiOptions, supportedDestinations, client, onContinue, payerAccount } = props;
  const theme = useCustomTheme();
  const activeWallet = useActiveWallet();
  const metadata = payUiOptions.metadata;
  const paymentInfo = payUiOptions.paymentInfo;
  const { data: chainData } = useChainMetadata(paymentInfo.chain);
  const { data: sellerEns } = useEnsName({
    address: paymentInfo.sellerAddress,
    client
  });
  const totalCostQuery = useQuery({
    queryFn: async () => {
      let tokenDecimals = 18;
      if (paymentInfo.token && !isNativeToken(paymentInfo.token)) {
        tokenDecimals = await decimals({
          contract: getContract({
            address: paymentInfo.token.address,
            chain: paymentInfo.chain,
            client
          })
        });
      }
      let cost;
      if ("amountWei" in paymentInfo) {
        cost = toTokens(paymentInfo.amountWei, tokenDecimals);
      } else {
        cost = paymentInfo.amount;
      }
      return cost;
    },
    queryKey: ["amount", paymentInfo]
  });
  const totalCost = totalCostQuery.data;
  if (!chainData || totalCost === void 0) {
    return (0, import_jsx_runtime75.jsx)(LoadingScreen, {});
  }
  const token = paymentInfo.token ? {
    address: paymentInfo.token.address || NATIVE_TOKEN_ADDRESS,
    icon: ((_a = paymentInfo.token) == null ? void 0 : _a.icon) || ((_c = (_b = supportedDestinations.find((c) => c.chain.id === paymentInfo.chain.id)) == null ? void 0 : _b.tokens.find((t) => {
      var _a2;
      return t.address.toLowerCase() === ((_a2 = paymentInfo.token) == null ? void 0 : _a2.address.toLowerCase());
    })) == null ? void 0 : _c.icon),
    name: paymentInfo.token.name || chainData.nativeCurrency.name,
    symbol: paymentInfo.token.symbol || chainData.nativeCurrency.symbol
  } : {
    address: NATIVE_TOKEN_ADDRESS,
    icon: (_d = chainData.icon) == null ? void 0 : _d.url,
    name: chainData.nativeCurrency.name,
    symbol: chainData.nativeCurrency.symbol
  };
  return (0, import_jsx_runtime75.jsxs)(Container, { px: "lg", children: [(0, import_jsx_runtime75.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime75.jsx)(ModalHeader, { title: (metadata == null ? void 0 : metadata.name) || "Payment Details" }), (0, import_jsx_runtime75.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime75.jsxs)(Container, { children: [(metadata == null ? void 0 : metadata.image) ? (0, import_jsx_runtime75.jsx)(Img, { client, src: metadata == null ? void 0 : metadata.image, style: {
    backgroundColor: theme.colors.tertiaryBg,
    borderRadius: spacing.md,
    width: "100%"
  } }) : activeWallet ? (0, import_jsx_runtime75.jsxs)(Container, { center: "both", flex: "row", style: {
    backgroundColor: theme.colors.tertiaryBg,
    borderRadius: spacing.md,
    marginBottom: spacing.md,
    padding: spacing.md
  }, children: [(0, import_jsx_runtime75.jsx)(WalletImage, { client, id: activeWallet.id, size: iconSize.xl }), (0, import_jsx_runtime75.jsx)("div", { style: {
    borderBottom: "6px dotted",
    borderColor: theme.colors.secondaryIconColor,
    flexGrow: 1,
    marginLeft: spacing.md,
    marginRight: spacing.md
  } }), (0, import_jsx_runtime75.jsx)(ChainIcon2, { chainIconUrl: (_e = chainData.icon) == null ? void 0 : _e.url, client, size: iconSize.xl })] }) : null, (0, import_jsx_runtime75.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime75.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime75.jsx)(Container, { expand: true, flex: "column", children: (0, import_jsx_runtime75.jsx)(Text, { color: "primaryText", size: "md", weight: 700, children: "Price" }) }), (0, import_jsx_runtime75.jsx)(Container, { expand: true, children: (0, import_jsx_runtime75.jsxs)(Container, { center: "y", flex: "row", gap: "xs", style: { justifyContent: "right" }, children: [(0, import_jsx_runtime75.jsx)(TokenIcon, { chain: paymentInfo.chain, client: props.client, size: "sm", token }), (0, import_jsx_runtime75.jsxs)(Text, { color: "primaryText", size: "md", weight: 700, children: [String(formatNumber(Number(totalCost), 6)), " ", token.symbol] })] }) })] }), (0, import_jsx_runtime75.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime75.jsx)(Line, {}), (0, import_jsx_runtime75.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime75.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime75.jsx)(Container, { expand: true, flex: "column", children: (0, import_jsx_runtime75.jsx)(Text, { color: "secondaryText", size: "xs", children: "Network" }) }), (0, import_jsx_runtime75.jsx)(Container, { expand: true, children: (0, import_jsx_runtime75.jsxs)(Container, { center: "y", flex: "row", gap: "xs", style: { justifyContent: "right" }, children: [(0, import_jsx_runtime75.jsx)(ChainIcon2, { chainIconUrl: (_f = chainData.icon) == null ? void 0 : _f.url, client: props.client, size: "xs" }), (0, import_jsx_runtime75.jsx)(Text, { color: "secondaryText", size: "xs", style: { textAlign: "right" }, children: chainData.name })] }) })] }), (0, import_jsx_runtime75.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime75.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime75.jsx)(Container, { expand: true, flex: "column", children: (0, import_jsx_runtime75.jsx)(Text, { color: "secondaryText", size: "xs", children: "Seller" }) }), (0, import_jsx_runtime75.jsx)(Container, { expand: true, children: (0, import_jsx_runtime75.jsx)(Container, { center: "y", flex: "row", gap: "xs", style: { justifyContent: "right" }, children: (0, import_jsx_runtime75.jsx)(Text, { color: "secondaryText", size: "xs", style: { textAlign: "right" }, children: sellerEns || shortenAddress(paymentInfo.sellerAddress) }) }) })] })] }), (0, import_jsx_runtime75.jsx)(Spacer, { y: "xl" }), payerAccount ? (0, import_jsx_runtime75.jsx)(Button, { fullWidth: true, onClick: () => {
    var _a2;
    trackPayEvent({
      client,
      event: "choose_payment_method_direct_payment_mode",
      toChainId: paymentInfo.chain.id,
      toToken: (_a2 = paymentInfo.token) == null ? void 0 : _a2.address,
      walletAddress: payerAccount.address,
      walletType: activeWallet == null ? void 0 : activeWallet.id
    });
    onContinue(totalCost, paymentInfo.chain, token);
  }, variant: "accent", children: "Choose Payment Method" }) : (0, import_jsx_runtime75.jsx)("div", { children: (0, import_jsx_runtime75.jsx)(ConnectButton, { ...props.connectOptions, client, connectButton: {
    style: {
      width: "100%"
    }
  }, theme }) }), (0, import_jsx_runtime75.jsx)(Spacer, { y: "lg" }), payUiOptions.showThirdwebBranding !== false && (0, import_jsx_runtime75.jsxs)(import_jsx_runtime75.Fragment, { children: [(0, import_jsx_runtime75.jsx)(PoweredByThirdweb, { link: "https://playground.thirdweb.com/connect/pay?utm_source=ub_text" }), (0, import_jsx_runtime75.jsx)(Spacer, { y: "sm" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/CurrencySelection.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
function CurrencySelection(props) {
  return (0, import_jsx_runtime76.jsxs)(Container, { children: [(0, import_jsx_runtime76.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime76.jsx)(ModalHeader, { onBack: props.onBack, title: "Pay with" }) }), (0, import_jsx_runtime76.jsx)(Line, {}), (0, import_jsx_runtime76.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime76.jsx)(Container, { flex: "column", gap: "xs", px: "lg", children: currencies.map((c) => {
    return (0, import_jsx_runtime76.jsxs)(SelectCurrencyButton, { fullWidth: true, gap: "sm", onClick: () => props.onSelect(c), variant: "secondary", children: [getFiatIcon(c, "lg"), (0, import_jsx_runtime76.jsxs)(Container, { flex: "column", gap: "xxs", children: [(0, import_jsx_runtime76.jsx)(Text, { color: "primaryText", children: c.shorthand }), (0, import_jsx_runtime76.jsx)(Text, { size: "sm", children: c.name })] })] }, c.shorthand);
  }) }), (0, import_jsx_runtime76.jsx)(Spacer, { y: "lg" })] });
}
var SelectCurrencyButton = newStyled(Button)(() => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      background: theme.colors.secondaryButtonBg,
      transform: "scale(1.01)"
    },
    background: theme.colors.tertiaryBg,
    gap: spacing.sm,
    justifyContent: "flex-start",
    padding: spacing.sm,
    transition: "background 200ms ease, transform 150ms ease"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatScreenContent.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var import_react43 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/pay/utils/commonTypes.js
var FiatProviders = ["coinbase", "stripe", "transak"];

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/getQuote.js
async function getBuyWithFiatQuote(params) {
  try {
    const mapProviderToOnramp = (provider) => {
      switch (provider) {
        case "stripe":
          return "stripe";
        case "transak":
          return "transak";
        default:
          return "coinbase";
      }
    };
    const onrampProvider = mapProviderToOnramp(params.preferredProvider);
    const d = params.toTokenAddress !== NATIVE_TOKEN_ADDRESS ? await decimals({
      contract: getContract({
        address: params.toTokenAddress,
        chain: getCachedChain(params.toChainId),
        client: params.client
      })
    }) : 18;
    const amountWei = params.toAmount ? toUnits(params.toAmount, d) : void 0;
    const prepared = await prepare({
      amount: amountWei,
      chainId: params.toChainId,
      client: params.client,
      currency: params.fromCurrencySymbol,
      maxSteps: 2,
      onramp: onrampProvider,
      onrampChainId: params.onrampChainId,
      onrampTokenAddress: params.onrampTokenAddress,
      paymentLinkId: params.paymentLinkId,
      purchaseData: params.purchaseData,
      receiver: params.toAddress,
      // force onramp to native token to avoid missing gas issues
      sender: params.fromAddress,
      tokenAddress: params.toTokenAddress
    });
    const hasSteps = prepared.steps.length > 0;
    const firstStep = hasSteps ? prepared.steps[0] : void 0;
    const estimatedDurationSeconds = Math.max(120, Math.ceil(prepared.steps.reduce((acc, s) => acc + s.estimatedExecutionTimeMs, 0) / 1e3));
    const estimatedToAmountMinWeiBigInt = prepared.destinationAmount;
    const maxSlippageBPS = params.maxSlippageBPS ?? 0;
    const slippageWei = estimatedToAmountMinWeiBigInt * BigInt(maxSlippageBPS) / 10000n;
    const toAmountMinWeiBigInt = estimatedToAmountMinWeiBigInt - slippageWei;
    const estimatedToAmountMin = toTokens(estimatedToAmountMinWeiBigInt, d);
    const toAmountMin = toTokens(toAmountMinWeiBigInt, d);
    const tokenToPayTokenInfo = (token) => ({
      chainId: token.chainId,
      decimals: token.decimals,
      name: token.name,
      priceUSDCents: Math.round(token.priceUsd * 100),
      symbol: token.symbol,
      tokenAddress: token.address
    });
    const toTokenRaw = prepared.destinationToken;
    const onRampTokenRaw = prepared.steps.length > 0 && firstStep ? firstStep.originToken : toTokenRaw;
    const routingTokenRaw = prepared.steps.length > 1 ? prepared.steps[1].originToken : void 0;
    const onRampTokenAmountWei = prepared.steps.length > 0 && firstStep ? firstStep.originAmount : prepared.destinationAmount;
    const onRampTokenAmount = toTokens(onRampTokenAmountWei, onRampTokenRaw.decimals);
    const onRampTokenObject = {
      amount: onRampTokenAmount,
      amountUSDCents: Math.round(Number(onRampTokenAmount) * onRampTokenRaw.priceUsd * 100),
      amountWei: onRampTokenAmountWei.toString(),
      token: tokenToPayTokenInfo(onRampTokenRaw)
    };
    let routingTokenObject;
    if (routingTokenRaw) {
      const routingAmountWei = prepared.steps[1].originAmount;
      const routingAmount = toTokens(routingAmountWei, routingTokenRaw.decimals);
      routingTokenObject = {
        amount: routingAmount,
        amountUSDCents: Math.round(Number(routingAmount) * routingTokenRaw.priceUsd * 100),
        amountWei: routingAmountWei.toString(),
        token: tokenToPayTokenInfo(routingTokenRaw)
      };
    }
    const buyWithFiatQuote = {
      estimatedDurationSeconds,
      estimatedToAmountMin,
      estimatedToAmountMinWei: estimatedToAmountMinWeiBigInt.toString(),
      fromAddress: params.fromAddress,
      fromCurrency: {
        amount: prepared.currencyAmount.toString(),
        amountUnits: Number(prepared.currencyAmount).toFixed(2),
        currencySymbol: prepared.currency,
        decimals: 2
      },
      fromCurrencyWithFees: {
        amount: prepared.currencyAmount.toString(),
        amountUnits: Number(prepared.currencyAmount).toFixed(2),
        currencySymbol: prepared.currency,
        decimals: 2
      },
      intentId: prepared.id,
      maxSlippageBPS,
      onRampLink: prepared.link,
      onRampToken: onRampTokenObject,
      processingFees: [],
      provider: params.preferredProvider ?? "COINBASE",
      routingToken: routingTokenObject,
      toAddress: params.toAddress,
      toAmountMin,
      toAmountMinWei: toAmountMinWeiBigInt.toString(),
      toToken: tokenToPayTokenInfo(toTokenRaw)
    };
    return buyWithFiatQuote;
  } catch (error) {
    console.error("Error getting buy with fiat quote", error);
    throw error;
  }
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithFiatQuote.js
function useBuyWithFiatQuote(params, queryOptions) {
  return useQuery({
    ...queryOptions,
    enabled: !!params,
    queryFn: async () => {
      if (!params) {
        throw new Error("No params provided");
      }
      return getBuyWithFiatQuote(params);
    },
    queryKey: ["useBuyWithFiatQuote", params],
    retry: false
  });
}

// node_modules/thirdweb/dist/esm/react/web/utils/errors.js
function getErrorMessage(err) {
  if (err instanceof ApiError) {
    if (err.code === "INTERNAL_SERVER_ERROR") {
      return {
        code: "INTERNAL_SERVER_ERROR",
        message: "An unknown error occurred. Please try again.",
        title: "Failed to Find Quote"
      };
    }
    return {
      code: err.code,
      message: getErrorMessageFromBridgeApiError(err),
      title: "Failed to Find Quote"
    };
  }
  if (err instanceof Error) {
    return {
      code: "UNABLE_TO_GET_PRICE_QUOTE",
      message: err.message || "We couldn't get a quote for this token pair. Select another token or pay with card.",
      title: "Failed to Find Quote"
    };
  }
  return {
    code: "UNABLE_TO_GET_PRICE_QUOTE",
    message: "We couldn't get a quote for this token pair. Select another token or pay with card.",
    title: "Failed to Find Quote"
  };
}
function getErrorMessageFromBridgeApiError(err) {
  let msg = err.message;
  if (msg.includes("Details")) {
    msg = msg.substring(0, msg.indexOf("Details"));
  }
  if (msg.includes("{")) {
    msg = msg.substring(0, msg.indexOf("{"));
  }
  return msg;
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/Drawer.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var import_react42 = __toESM(require_react(), 1);
var Drawer = (0, import_react42.forwardRef)(function Drawer_(props, ref) {
  return (0, import_jsx_runtime77.jsx)(DrawerContainer, { ref, children: (0, import_jsx_runtime77.jsx)(DynamicHeight, { children: (0, import_jsx_runtime77.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime77.jsx)(CrossContainer, { children: (0, import_jsx_runtime77.jsx)(IconButton, { "aria-label": "Close", onClick: props.close, type: "button", children: (0, import_jsx_runtime77.jsx)(Cross2Icon, { height: iconSize.md, style: {
    color: "inherit"
  }, width: iconSize.md }) }) }), props.children] }) }) });
});
var DrawerContainer = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    animation: `${drawerOpenAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)`,
    background: theme.colors.modalBg,
    borderTop: `1px solid ${theme.colors.borderColor}`,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    zIndex: 1e4
  };
});
var drawerOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
var DrawerOverlay = StyledDiv((_) => {
  const theme = useCustomTheme();
  return {
    animation: `${fadeInAnimation} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    backgroundColor: theme.colors.modalOverlayBg,
    inset: 0,
    position: "absolute",
    zIndex: 9999
  };
});
function useDrawer() {
  const [isOpen, _setIsOpen] = (0, import_react42.useState)(false);
  const drawerRef = (0, import_react42.useRef)(null);
  const drawerOverlayRef = (0, import_react42.useRef)(null);
  const closeDrawerAnimation = (0, import_react42.useCallback)(() => {
    return new Promise((resolve2) => {
      var _a;
      if (drawerRef.current) {
        const animOptions = {
          duration: 300,
          easing: "cubic-bezier(0.175, 0.885, 0.32, 1.1)",
          fill: "forwards"
        };
        const closeAnimation = drawerRef.current.animate([{ opacity: 0, transform: "translateY(100%)" }], animOptions);
        (_a = drawerOverlayRef.current) == null ? void 0 : _a.animate([{ opacity: 0 }], animOptions);
        closeAnimation.onfinish = () => resolve2();
      } else {
        resolve2();
      }
    });
  }, []);
  const setIsOpen = (0, import_react42.useCallback)(async (value) => {
    if (value) {
      _setIsOpen(true);
    } else {
      await closeDrawerAnimation();
      _setIsOpen(false);
    }
  }, [closeDrawerAnimation]);
  (0, import_react42.useLayoutEffect)(() => {
    if (!isOpen) {
      return;
    }
    const handleClick = (event) => {
      if (drawerRef.current && event.target instanceof Node && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    requestAnimationFrame(() => {
      document.addEventListener("click", handleClick);
    });
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen, setIsOpen]);
  return {
    drawerOverlayRef,
    drawerRef,
    isOpen,
    setIsOpen
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/EstimatedTimeAndFees.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/formatSeconds.js
function formatSeconds(seconds) {
  if (seconds > 3600) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    return `${hours} Hours ${minutes} Minutes`;
  }
  if (seconds > 60) {
    const minutes = Math.ceil(seconds / 60);
    return `${minutes} Minutes`;
  }
  return `${seconds}s`;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/EstimatedTimeAndFees.js
function EstimatedTimeAndFees(props) {
  const { estimatedSeconds, quoteIsLoading } = props;
  return (0, import_jsx_runtime78.jsxs)(Container, { bg: "tertiaryBg", borderColor: "borderColor", flex: "row", style: {
    alignItems: "center",
    borderRadius: radius.md,
    borderStyle: "solid",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: "1px",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime78.jsxs)(Container, { center: "y", color: "accentText", flex: "row", gap: "xxs", p: "sm", children: [(0, import_jsx_runtime78.jsx)(ClockIcon, { height: iconSize.sm, width: iconSize.sm }), quoteIsLoading ? (0, import_jsx_runtime78.jsx)(Skeleton, { color: "borderColor", height: fontSize.xs, width: "50px" }) : (0, import_jsx_runtime78.jsx)(Text, { color: "secondaryText", size: "xs", children: estimatedSeconds !== void 0 ? `~${formatSeconds(estimatedSeconds)}` : "--" })] }), (0, import_jsx_runtime78.jsxs)(Button, { gap: "xs", onClick: props.onViewFees, variant: "ghost", children: [(0, import_jsx_runtime78.jsx)(Container, { center: "both", color: "accentText", flex: "row", children: (0, import_jsx_runtime78.jsx)(ViewFeeIcon, { size: iconSize.sm }) }), (0, import_jsx_runtime78.jsx)(Text, { color: "secondaryText", size: "xs", children: "View Fees" })] })] });
}
var ViewFeeIcon = (props) => {
  return (0, import_jsx_runtime78.jsxs)("svg", { "aria-hidden": "true", fill: "none", height: props.size, viewBox: "0 0 12 12", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime78.jsx)("path", { d: "M9.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5V2.5C10.5 1.94772 10.0523 1.5 9.5 1.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), (0, import_jsx_runtime78.jsx)("path", { d: "M4.5 7.5L7.5 4.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayProviderSelection.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/utils.js
function getBuyTokenAmountFontSize(value) {
  return value.length > 10 ? "26px" : value.length > 6 ? "34px" : "50px";
}
function getProviderLabel(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayProviderSelection.js
var PayProviderSelection = (props) => {
  const ProviderItem = (0, import_jsx_runtime79.jsxs)(Container, { center: "y", color: "secondaryText", flex: "row", gap: "xxs", style: { padding: spacing.md }, children: [(0, import_jsx_runtime79.jsx)(Text, { size: "xs", children: getProviderLabel(props.preferredProvider ?? props.quotedProvider ?? "") }), props.supportedProviders.length > 1 && (0, import_jsx_runtime79.jsx)(ChevronDownIcon, { height: iconSize.sm, width: iconSize.sm })] });
  return (0, import_jsx_runtime79.jsxs)(Container, { bg: "tertiaryBg", borderColor: "borderColor", flex: "row", style: {
    alignItems: "center",
    borderBottom: "none",
    borderStyle: "solid",
    borderWidth: "1px",
    justifyContent: "space-between",
    paddingLeft: spacing.md
  }, children: [(0, import_jsx_runtime79.jsx)(Text, { color: "secondaryText", size: "xs", children: "Provider" }), props.supportedProviders.length > 1 ? (0, import_jsx_runtime79.jsx)(Button, {
    onClick: props.onShowProviders,
    style: { padding: 0 },
    variant: "ghost",
    children: ProviderItem
  }) : ProviderItem] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayWIthCreditCard.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
function PayWithCreditCard(props) {
  return (0, import_jsx_runtime80.jsxs)(Container, { bg: "tertiaryBg", borderColor: "borderColor", flex: "row", style: {
    alignItems: "center",
    borderBottom: "none",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    flexWrap: "nowrap",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime80.jsxs)(CurrencyButton, { gap: "sm", onClick: props.onSelectCurrency, style: {
    justifyContent: "flex-start",
    minHeight: "64px",
    minWidth: "50%"
  }, variant: "ghost", children: [getFiatIcon(props.currency, "md"), (0, import_jsx_runtime80.jsxs)(Container, { center: "y", color: "secondaryText", flex: "row", gap: "xxs", children: [(0, import_jsx_runtime80.jsx)(Text, { color: "primaryText", children: props.currency.shorthand }), (0, import_jsx_runtime80.jsx)(ChevronDownIcon, { height: iconSize.sm, width: iconSize.sm })] })] }), (0, import_jsx_runtime80.jsx)("div", { style: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    gap: spacing.xxs,
    justifyContent: "center",
    overflow: "hidden",
    paddingRight: spacing.sm,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, children: props.isLoading ? (0, import_jsx_runtime80.jsx)(Skeleton, { height: fontSize.lg, width: "100px" }) : (0, import_jsx_runtime80.jsx)(Text, { color: props.value ? "primaryText" : "secondaryText", size: "lg", children: props.value ? `${props.currency.symbol}${formatNumber(Number(props.value), 2)}` : "--" }) })] });
}
var CurrencyButton = newStyled(Button)(() => {
  return {
    "&[disabled]:hover": {
      borderColor: "transparent"
    }
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/Fees.js
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
function SwapFees(props) {
  return (0, import_jsx_runtime81.jsx)(Container, { flex: "column", gap: "xs", style: {
    alignItems: "flex-start"
  }, children: props.quote.processingFees.map((fee) => {
    const feeAmount = formatNumber(Number(fee.amount), 6);
    return (0, import_jsx_runtime81.jsxs)(Container, { flex: "row", gap: "xxs", children: [(0, import_jsx_runtime81.jsxs)(Text, { color: "primaryText", size: "sm", children: [feeAmount === 0 ? "~" : "", feeAmount, " ", fee.token.symbol] }), (0, import_jsx_runtime81.jsxs)(Text, { color: "secondaryText", size: "sm", children: ["($", (fee.amountUSDCents / 100).toFixed(2), ")"] })] }, `${fee.token.chainId}_${fee.token.tokenAddress}_${feeAmount}`);
  }) });
}
function FiatFees(props) {
  return (0, import_jsx_runtime81.jsxs)(Container, { flex: "column", gap: "xs", children: [(0, import_jsx_runtime81.jsxs)("div", { style: {
    display: "flex",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime81.jsx)(Text, { color: "secondaryText", inline: true, children: "Amount" }), (0, import_jsx_runtime81.jsxs)(Text, { color: "primaryText", inline: true, children: [formatNumber(Number(props.quote.fromCurrency.amount), 2), " ", props.quote.fromCurrency.currencySymbol] })] }), props.quote.processingFees.map((fee, i) => {
    const feeAmount = formatNumber(Number(fee.amount), 6);
    return (0, import_jsx_runtime81.jsxs)("div", { style: {
      display: "flex",
      justifyContent: "space-between"
    }, children: [(0, import_jsx_runtime81.jsx)(Text, { color: "secondaryText", inline: true, children: fee.feeType === "NETWORK" ? "Network Fee" : "Processing Fee" }), (0, import_jsx_runtime81.jsxs)(Text, { color: "primaryText", inline: true, children: [feeAmount === 0 ? "~" : "", " ", feeAmount, " ", fee.currencySymbol] })] }, i);
  }), (0, import_jsx_runtime81.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime81.jsx)(Line, {}), (0, import_jsx_runtime81.jsx)(Spacer, { y: "xxs" }), (0, import_jsx_runtime81.jsxs)("div", { style: {
    display: "flex",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime81.jsx)(Text, { color: "secondaryText", inline: true, children: "Total" }), (0, import_jsx_runtime81.jsxs)(Text, { color: "primaryText", inline: true, children: [formatNumber(Number(props.quote.fromCurrencyWithFees.amount), 6), " ", props.quote.fromCurrencyWithFees.currencySymbol] })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/Providers.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
function Providers(props) {
  return (0, import_jsx_runtime82.jsx)(Container, { expand: true, flex: "column", gap: "sm", style: {
    alignItems: "flex-start"
  }, children: props.supportedProviders.map((provider) => (0, import_jsx_runtime82.jsx)(Container, { expand: true, flex: "row", style: {
    justifyContent: "space-between"
  }, children: (0, import_jsx_runtime82.jsx)(Button, { fullWidth: true, onClick: () => props.onSelect(provider), variant: "link", children: (0, import_jsx_runtime82.jsx)(Link, { color: props.preferredProvider === provider ? "primaryText" : "secondaryText", hoverColor: "primaryText", size: "sm", children: getProviderLabel(provider) }) }) }, provider)) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatScreenContent.js
function FiatScreenContent(props) {
  var _a, _b, _c, _d, _e, _f;
  const { toToken, tokenAmount, payer, client, setScreen, toChain, showCurrencySelector, selectedCurrency, paymentLinkId } = props;
  const defaultRecipientAddress = (_b = (_a = props.payOptions) == null ? void 0 : _a.paymentInfo) == null ? void 0 : _b.sellerAddress;
  const receiverAddress = defaultRecipientAddress || props.payer.account.address;
  const { drawerRef, drawerOverlayRef, isOpen, setIsOpen } = useDrawer();
  const [drawerScreen, setDrawerScreen] = (0, import_react43.useState)("fees");
  const buyWithFiatOptions = props.payOptions.buyWithFiat;
  const [preferredProvider, setPreferredProvider] = (0, import_react43.useState)(buyWithFiatOptions !== false ? (buyWithFiatOptions == null ? void 0 : buyWithFiatOptions.preferredProvider) || (localStorage.getItem(PREFERRED_FIAT_PROVIDER_STORAGE_KEY) ?? void 0) : void 0);
  const supportedProviders = (() => {
    if (!buyWithFiatOptions)
      return [...FiatProviders];
    const options = (buyWithFiatOptions == null ? void 0 : buyWithFiatOptions.supportedProviders) ?? [];
    const optionsWithPreferred = options.length > 0 ? /* @__PURE__ */ new Set([
      ...preferredProvider ? [preferredProvider] : [],
      ...options
    ]) : FiatProviders;
    return Array.from(optionsWithPreferred);
  })();
  const fiatQuoteQuery = useBuyWithFiatQuote(buyWithFiatOptions !== false && tokenAmount ? {
    client,
    fromAddress: payer.account.address,
    fromCurrencySymbol: selectedCurrency.shorthand,
    isTestMode: buyWithFiatOptions == null ? void 0 : buyWithFiatOptions.testMode,
    onrampChainId: buyWithFiatOptions == null ? void 0 : buyWithFiatOptions.onrampChainId,
    onrampTokenAddress: buyWithFiatOptions == null ? void 0 : buyWithFiatOptions.onrampTokenAddress,
    paymentLinkId,
    preferredProvider: preferredProvider ?? supportedProviders[0],
    purchaseData: props.payOptions.purchaseData,
    toAddress: receiverAddress,
    toAmount: tokenAmount,
    toChainId: toChain.id,
    toTokenAddress: isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address
  } : void 0);
  function handleSubmit() {
    if (!fiatQuoteQuery.data) {
      return;
    }
    setScreen({
      id: "fiat-flow",
      quote: fiatQuoteQuery.data
    });
  }
  function showFees() {
    if (!fiatQuoteQuery.data) {
      return;
    }
    setDrawerScreen("fees");
    setIsOpen(true);
  }
  function showProviders() {
    setDrawerScreen("providers");
    setIsOpen(true);
  }
  const disableSubmit = !fiatQuoteQuery.data;
  const errorMsg = !fiatQuoteQuery.isLoading && fiatQuoteQuery.error ? getErrorMessage(fiatQuoteQuery.error) : void 0;
  return (0, import_jsx_runtime83.jsxs)(Container, { animate: "fadein", flex: "column", gap: "lg", children: [isOpen && (0, import_jsx_runtime83.jsxs)(import_jsx_runtime83.Fragment, { children: [(0, import_jsx_runtime83.jsx)(DrawerOverlay, { ref: drawerOverlayRef }), (0, import_jsx_runtime83.jsxs)(Drawer, { close: () => setIsOpen(false), ref: drawerRef, children: [drawerScreen === "fees" && fiatQuoteQuery.data && (0, import_jsx_runtime83.jsxs)("div", { children: [(0, import_jsx_runtime83.jsx)(Text, { color: "primaryText", size: "lg", children: "Fees" }), (0, import_jsx_runtime83.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime83.jsx)(FiatFees, { quote: fiatQuoteQuery.data })] }), drawerScreen === "providers" && (0, import_jsx_runtime83.jsxs)("div", { children: [(0, import_jsx_runtime83.jsx)(Text, { color: "primaryText", size: "lg", children: "Providers" }), (0, import_jsx_runtime83.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime83.jsx)(Providers, { onSelect: (provider) => {
    setPreferredProvider(provider);
    localStorage.setItem(PREFERRED_FIAT_PROVIDER_STORAGE_KEY, provider);
    setIsOpen(false);
  }, preferredProvider: preferredProvider || ((_c = fiatQuoteQuery.data) == null ? void 0 : _c.provider), supportedProviders })] })] })] }), (0, import_jsx_runtime83.jsxs)(Container, { flex: "column", gap: "sm", children: [(0, import_jsx_runtime83.jsx)(Text, { size: "sm", children: "Pay with card" }), (0, import_jsx_runtime83.jsxs)("div", { children: [(0, import_jsx_runtime83.jsx)(PayWithCreditCard, { client, currency: selectedCurrency, isLoading: fiatQuoteQuery.isLoading, onSelectCurrency: showCurrencySelector, value: (_d = fiatQuoteQuery.data) == null ? void 0 : _d.fromCurrencyWithFees.amount }), (0, import_jsx_runtime83.jsx)(PayProviderSelection, { onShowProviders: showProviders, preferredProvider, quotedProvider: (_e = fiatQuoteQuery.data) == null ? void 0 : _e.provider, supportedProviders }), (0, import_jsx_runtime83.jsx)(EstimatedTimeAndFees, { estimatedSeconds: (_f = fiatQuoteQuery.data) == null ? void 0 : _f.estimatedDurationSeconds, onViewFees: showFees, quoteIsLoading: fiatQuoteQuery.isLoading })] }), errorMsg && (0, import_jsx_runtime83.jsxs)("div", { children: [(0, import_jsx_runtime83.jsx)(Text, { center: true, color: "danger", multiline: true, size: "xs", children: errorMsg.title }), (0, import_jsx_runtime83.jsx)(Text, { center: true, multiline: true, size: "xs", children: errorMsg.message })] })] }), (0, import_jsx_runtime83.jsx)(Button, { "data-disabled": disableSubmit, disabled: disableSubmit, fullWidth: true, gap: "xs", onClick: () => {
    trackPayEvent({
      client,
      event: "confirm_onramp_quote",
      toChainId: toChain.id,
      toToken: isNativeToken(toToken) ? void 0 : toToken.address,
      walletAddress: payer.account.address,
      walletType: payer.wallet.id
    });
    handleSubmit();
  }, variant: disableSubmit ? "outline" : "accent", children: fiatQuoteQuery.isLoading ? (0, import_jsx_runtime83.jsxs)(import_jsx_runtime83.Fragment, { children: ["Getting price quote", (0, import_jsx_runtime83.jsx)(Spinner, { size: "sm" })] }) : "Continue" })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/OnRampScreen.js
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var import_react46 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/getStatus.js
async function getBuyWithFiatStatus(params) {
  const result = await status({
    client: params.client,
    id: params.intentId
  });
  return toBuyWithFiatStatus({ intentId: params.intentId, result });
}
function toBuyWithFiatStatus(args) {
  const { intentId, result } = args;
  const STATUS_MAP = {
    COMPLETED: "ON_RAMP_TRANSFER_COMPLETED",
    CREATED: "PENDING_PAYMENT",
    FAILED: "PAYMENT_FAILED",
    PENDING: "PENDING_PAYMENT"
  };
  const mappedStatus = STATUS_MAP[result.status];
  return buildPlaceholderStatus({
    intentId,
    purchaseData: result.purchaseData,
    status: mappedStatus
  });
}
function buildPlaceholderStatus(args) {
  const { intentId, status: status2, purchaseData } = args;
  const emptyToken = {
    chainId: 0,
    decimals: 18,
    name: "",
    priceUSDCents: 0,
    symbol: "",
    tokenAddress: ""
  };
  const quote = {
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    estimatedDurationSeconds: 0,
    estimatedOnRampAmount: "0",
    estimatedOnRampAmountWei: "0",
    estimatedToTokenAmount: "0",
    estimatedToTokenAmountWei: "0",
    fromCurrency: {
      amount: "0",
      amountUnits: "USD",
      currencySymbol: "USD",
      decimals: 2
    },
    fromCurrencyWithFees: {
      amount: "0",
      amountUnits: "USD",
      currencySymbol: "USD",
      decimals: 2
    },
    onRampToken: emptyToken,
    toToken: emptyToken
  };
  const base = {
    fromAddress: "",
    intentId,
    purchaseData,
    quote,
    status: status2,
    toAddress: ""
  };
  return base;
}

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/isSwapRequiredPostOnramp.js
function isSwapRequiredPostOnramp(buyWithFiatQuote) {
  const sameChain = buyWithFiatQuote.toToken.chainId === buyWithFiatQuote.onRampToken.token.chainId;
  const sameToken = getAddress(buyWithFiatQuote.toToken.tokenAddress) === getAddress(buyWithFiatQuote.onRampToken.token.tokenAddress);
  return !(sameChain && sameToken);
}
function getOnRampSteps(buyWithFiatQuote) {
  const isSwapRequired = isSwapRequiredPostOnramp(buyWithFiatQuote);
  if (!isSwapRequired) {
    return [
      {
        action: "buy",
        amount: buyWithFiatQuote.estimatedToAmountMin,
        token: buyWithFiatQuote.toToken
      }
    ];
  }
  if (buyWithFiatQuote.routingToken) {
    return [
      {
        action: "buy",
        amount: buyWithFiatQuote.onRampToken.amount,
        token: buyWithFiatQuote.onRampToken.token
      },
      {
        action: "swap",
        amount: buyWithFiatQuote.routingToken.amount,
        token: buyWithFiatQuote.routingToken.token
      },
      {
        action: "bridge",
        amount: buyWithFiatQuote.estimatedToAmountMin,
        token: buyWithFiatQuote.toToken
      }
    ];
  }
  return [
    {
      action: "buy",
      amount: buyWithFiatQuote.onRampToken.amount,
      token: buyWithFiatQuote.onRampToken.token
    },
    {
      action: "swap",
      amount: buyWithFiatQuote.estimatedToAmountMin,
      token: buyWithFiatQuote.toToken
    }
  ];
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithCryptoStatus.js
function useBuyWithCryptoStatus(params) {
  return useQuery({
    enabled: !!params,
    queryFn: async () => {
      if (!params) {
        throw new Error("No params");
      }
      return getBuyWithCryptoStatus(params);
    },
    queryKey: ["getBuyWithCryptoStatus", params == null ? void 0 : params.transactionHash],
    refetchInterval: (query) => {
      var _a;
      const status2 = (_a = query.state.data) == null ? void 0 : _a.status;
      if (status2 === "COMPLETED" || status2 === "FAILED") {
        return false;
      }
      return 5e3;
    },
    refetchIntervalInBackground: true,
    retry: true
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithFiatStatus.js
function useBuyWithFiatStatus(params) {
  return useQuery({
    enabled: !!params,
    queryFn: async () => {
      if (!params) {
        throw new Error("No params provided");
      }
      return getBuyWithFiatStatus(params);
    },
    queryKey: ["useBuyWithFiatStatus", params],
    refetchInterval: (query) => {
      const data = query.state.data;
      const status2 = data == null ? void 0 : data.status;
      if (status2 === "PAYMENT_FAILED" || // onRampToken and toToken being the same means there is no additional swap step
      status2 === "ON_RAMP_TRANSFER_COMPLETED" && (data == null ? void 0 : data.quote.toToken.chainId) === (data == null ? void 0 : data.quote.onRampToken.chainId) && (data == null ? void 0 : data.quote.toToken.tokenAddress.toLowerCase()) === (data == null ? void 0 : data.quote.onRampToken.tokenAddress.toLowerCase())) {
        return false;
      }
      return 5e3;
    },
    refetchIntervalInBackground: true,
    retry: true,
    ...params == null ? void 0 : params.queryOptions
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/components/SwitchNetwork.js
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var import_react44 = __toESM(require_react(), 1);
function SwitchNetworkButton2(props) {
  const [isSwitching, setIsSwitching] = (0, import_react44.useState)(false);
  return (0, import_jsx_runtime84.jsx)(Button, { ...props, gap: "xs", onClick: async () => {
    setIsSwitching(true);
    try {
      await props.switchChain();
    } catch {
    }
    setIsSwitching(false);
  }, children: isSwitching ? (0, import_jsx_runtime84.jsxs)(import_jsx_runtime84.Fragment, { children: ["Switching", (0, import_jsx_runtime84.jsx)(Spinner, { color: "accentButtonText", size: "sm" })] }) : "Switch Network" });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/openOnRamppopup.js
function openOnrampPopup(link, theme) {
  const height = 750;
  const width = 500;
  const top = (window.innerHeight - height) / 2;
  const left = (window.innerWidth - width) / 2;
  return window.open(`${link}&theme=${theme}`, "thirdweb Pay", `width=${width}, height=${height}, top=${top}, left=${left}`);
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayTokenIcon.js
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/useSwapSupportedChains.js
async function fetchBuySupportedDestinations({ client, originChainId, originTokenAddress }) {
  return withCache(async () => {
    const routes2 = await routes({
      client,
      limit: 1e6,
      maxSteps: 1,
      originChainId,
      originTokenAddress,
      sortBy: "popularity"
    });
    const tokens2 = /* @__PURE__ */ new Set();
    const chains = /* @__PURE__ */ new Set();
    const destinationTokens = [];
    for (const route of routes2) {
      const key = `${route.destinationToken.chainId}:${route.destinationToken.address}`;
      if (!tokens2.has(key)) {
        tokens2.add(key);
        if (!chains.has(route.destinationToken.chainId)) {
          chains.add(route.destinationToken.chainId);
        }
        const existing = destinationTokens[route.destinationToken.chainId];
        if (!existing) {
          destinationTokens[route.destinationToken.chainId] = [];
        }
        destinationTokens[route.destinationToken.chainId] = [
          ...existing || [],
          {
            address: Address_exports.checksum(route.destinationToken.address),
            // We support both options for all tokens
            buyWithCryptoEnabled: true,
            buyWithFiatEnabled: true,
            icon: route.destinationToken.iconUri,
            name: route.destinationToken.name,
            symbol: route.destinationToken.symbol
          }
        ];
      }
    }
    return [...chains].map((chainId) => ({
      chain: getCachedChain(chainId),
      tokens: destinationTokens[chainId] || []
    }));
  }, {
    cacheKey: `buy-supported-destinations-${originChainId}:${originTokenAddress}`,
    cacheTime: 5 * 60 * 1e3
  });
}
function useBuySupportedDestinations(client, _isTestMode) {
  return useQuery({
    queryFn: async () => {
      return fetchBuySupportedDestinations({ client });
    },
    queryKey: ["destination-tokens", client]
  });
}
function useBuySupportedSources(options) {
  return useQuery({
    queryFn: async () => {
      const routes2 = await routes({
        client: options.client,
        destinationChainId: options.destinationChainId,
        destinationTokenAddress: options.destinationTokenAddress,
        limit: 50,
        maxSteps: 1,
        sortBy: "popularity"
      });
      const tokens2 = /* @__PURE__ */ new Set();
      const chains = /* @__PURE__ */ new Set();
      const originTokens = [];
      for (const route of routes2) {
        const key = `${route.originToken.chainId}:${route.originToken.address}`;
        if (!tokens2.has(key)) {
          tokens2.add(key);
          if (!chains.has(route.originToken.chainId)) {
            chains.add(route.originToken.chainId);
          }
          const existing = originTokens[route.originToken.chainId];
          if (!existing) {
            originTokens[route.originToken.chainId] = [];
          }
          originTokens[route.originToken.chainId] = [
            ...existing || [],
            {
              address: Address_exports.checksum(route.originToken.address),
              // We support both options for all tokens
              buyWithCryptoEnabled: true,
              buyWithFiatEnabled: true,
              icon: route.originToken.iconUri,
              name: route.originToken.name,
              symbol: route.originToken.symbol
            }
          ];
        }
      }
      return [...chains].map((chainId) => ({
        chain: getCachedChain(chainId),
        tokens: originTokens[chainId] || []
      }));
    },
    queryKey: ["source-tokens", options]
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayTokenIcon.js
function PayTokenIcon(props) {
  var _a, _b, _c;
  const supportedDestinationsQuery = useBuySupportedDestinations(props.client);
  const token = props.token;
  const tokenIcon = !isNativeToken(token) ? (_c = (_b = (_a = supportedDestinationsQuery.data) == null ? void 0 : _a.find((c) => c.chain.id === props.chain.id)) == null ? void 0 : _b.tokens.find((t) => getAddress(t.address) === getAddress(token.address))) == null ? void 0 : _c.icon : void 0;
  return (0, import_jsx_runtime85.jsx)(TokenIcon, { chain: props.chain, client: props.client, size: props.size, token: isNativeToken(token) ? { nativeToken: true } : {
    address: token.address,
    icon: token.icon || tokenIcon
  } });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/pendingSwapTx.js
var pendingTransactions = createStore([]);
var addPendingTx = (txInfo) => {
  const currentValue = pendingTransactions.getValue();
  pendingTransactions.setValue([txInfo, ...currentValue]);
};

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/StepConnector.js
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
function StepConnectorArrow() {
  const theme = useCustomTheme();
  return (0, import_jsx_runtime86.jsx)(Container, { center: "both", flex: "row", style: {
    marginBottom: "-10px",
    marginTop: "-10px",
    position: "relative",
    width: "100%",
    zIndex: 1e3
  }, children: (0, import_jsx_runtime86.jsx)(Container, { center: "both", color: "primaryText", flex: "row", style: {
    backgroundColor: theme.colors.modalBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: "100%",
    height: "30px",
    width: "30px"
  }, children: (0, import_jsx_runtime86.jsx)(ChevronDownIcon, { height: 16, width: 16 }) }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/WalletRow.js
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
function WalletRow(props) {
  var _a, _b, _c, _d;
  const { client, address } = props;
  const connectedWallets = useConnectedWallets();
  const profile = useProfiles({ client });
  const wallet = connectedWallets.find((w) => {
    var _a2, _b2;
    return ((_b2 = (_a2 = w.getAccount()) == null ? void 0 : _a2.address) == null ? void 0 : _b2.toLowerCase()) === address.toLowerCase();
  });
  const email = wallet && (wallet.id === "inApp" || isEcosystemWallet(wallet) || isSmartWallet(wallet)) ? (_b = (_a = profile.data) == null ? void 0 : _a.find((p) => !!p.details.email)) == null ? void 0 : _b.details.email : void 0;
  const walletInfo = useWalletInfo(wallet == null ? void 0 : wallet.id);
  const ensNameQuery = useEnsName({
    address,
    client
  });
  const addressOrENS = address ? ensNameQuery.data || shortenAddress(address) : "";
  return (0, import_jsx_runtime87.jsx)(Container, { flex: "row", style: { justifyContent: "space-between" }, children: (0, import_jsx_runtime87.jsxs)(Container, { center: "y", color: "secondaryText", flex: "row", gap: "md", children: [wallet ? (0, import_jsx_runtime87.jsx)(WalletImage, { client: props.client, id: wallet.id, size: iconSize[props.iconSize || "md"] }) : (0, import_jsx_runtime87.jsx)(OutlineWalletIcon, { size: iconSize[props.iconSize || "md"] }), (0, import_jsx_runtime87.jsxs)(Container, { flex: "column", gap: "3xs", children: [props.label ? (0, import_jsx_runtime87.jsx)(Text, { color: "secondaryText", size: "xs", children: props.label }) : null, (0, import_jsx_runtime87.jsx)(Text, { color: "primaryText", size: props.textSize || "xs", style: { fontFamily: "monospace", fontWeight: 600 }, children: addressOrENS || shortenAddress(props.address) }), profile.isLoading ? (0, import_jsx_runtime87.jsx)(Skeleton, { height: fontSize.sm, width: "100px" }) : email || ((_c = walletInfo == null ? void 0 : walletInfo.data) == null ? void 0 : _c.name) ? (0, import_jsx_runtime87.jsx)(Text, { color: "secondaryText", size: "xs", children: email || ((_d = walletInfo == null ? void 0 : walletInfo.data) == null ? void 0 : _d.name) }) : null] })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatSteps.js
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/Stepper.js
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
function StepIcon(props) {
  return (0, import_jsx_runtime88.jsx)(Container, { center: "both", color: props.isDone ? "success" : props.isActive ? "accentText" : "secondaryText", flex: "row", children: (0, import_jsx_runtime88.jsx)(Circle, { children: props.isDone ? (0, import_jsx_runtime88.jsx)(CheckIcon, { height: iconSize.sm, width: iconSize.sm }) : (0, import_jsx_runtime88.jsx)(PulsingDot, { "data-active": props.isActive }) }) });
}
function Step(props) {
  return (0, import_jsx_runtime88.jsxs)(Container, { center: "y", color: props.isDone ? "success" : props.isActive ? "accentText" : "secondaryText", flex: "row", gap: "xs", style: {
    fontSize: fontSize.sm
  }, children: [(0, import_jsx_runtime88.jsx)(StepIcon, { isActive: props.isActive, isDone: props.isDone }), props.label] });
}
var pulseAnimation2 = keyframes`
0% {
  opacity: 1;
  transform: scale(0.5);
}
100% {
  opacity: 0;
  transform: scale(1.5);
}
`;
var PulsingDot = StyledDiv(() => {
  return {
    '&[data-active="true"]': {
      animation: `${pulseAnimation2} 1s infinite`
    },
    background: "currentColor",
    borderRadius: "50%",
    height: "10px",
    width: "10px"
  };
});
var Circle = StyledDiv(() => {
  return {
    alignItems: "center",
    border: "1px solid currentColor",
    borderRadius: "50%",
    display: "flex",
    height: "20px",
    justifyContent: "center",
    width: "20px"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatSteps.js
function StepContainer(props) {
  let color = "borderColor";
  let text;
  if (props.state === "pending") {
    text = "Pending";
    color = "accentText";
  } else if (props.state === "actionRequired") {
    color = "accentText";
  } else if (props.state === "completed") {
    text = "Completed";
    color = "success";
  } else if (props.state === "failed") {
    color = "danger";
    text = "Failed";
  }
  return (0, import_jsx_runtime89.jsxs)(Container, { bg: "tertiaryBg", borderColor: color === "success" ? "borderColor" : color, px: "md", py: "sm", style: {
    alignItems: "flex-start",
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: "1px",
    position: "relative",
    ...props.style
  }, children: [props.children, (0, import_jsx_runtime89.jsxs)("div", { style: {
    alignItems: "center",
    display: "flex",
    gap: spacing.xs,
    position: "absolute",
    right: spacing.xs,
    top: spacing.xs
  }, children: [props.state && text && (0, import_jsx_runtime89.jsx)(Text, { color, size: "xs", children: text }), (props.state === "actionRequired" || props.state === "completed") && (0, import_jsx_runtime89.jsx)(StepIcon, { isActive: props.state === "actionRequired", isDone: props.state === "completed" }), props.state === "pending" && (0, import_jsx_runtime89.jsx)(Spinner, { color: "accentText", size: "sm" }), props.state === "failed" && (0, import_jsx_runtime89.jsx)(Container, { center: "both", color: "danger", flex: "row", children: (0, import_jsx_runtime89.jsx)(Cross1Icon, { height: iconSize.sm, width: iconSize.sm }) })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/OnRampScreen.js
function OnRampScreen(props) {
  var _a;
  const connectedWallets = useConnectedWallets();
  const isAutoMode = isInAppSigner({
    connectedWallets,
    wallet: props.payer.wallet
  });
  const state = useOnRampScreenState({
    client: props.client,
    isAutoMode,
    onDone: props.onDone,
    onSuccess: props.onSuccess,
    payer: props.payer,
    paymentLinkId: props.paymentLinkId,
    quote: props.quote,
    theme: props.theme
  });
  const firstStepChainId = (_a = state.steps[0]) == null ? void 0 : _a.step.token.chainId;
  return (0, import_jsx_runtime90.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime90.jsx)(ModalHeader, { onBack: props.onBack, title: props.title }), (0, import_jsx_runtime90.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime90.jsx)(Container, { center: "y", flex: "column", gap: "xs", style: {
    paddingLeft: spacing.md
  }, children: (0, import_jsx_runtime90.jsx)(WalletRow, { address: props.receiverAddress, client: props.client, iconSize: "md", label: "Recipient wallet", textSize: "sm" }) }), (0, import_jsx_runtime90.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime90.jsx)(Container, { flex: "column", children: state.steps.map(({ step, status: status2 }, index2) => (0, import_jsx_runtime90.jsxs)(Container, { flex: "column", children: [(0, import_jsx_runtime90.jsx)(StepContainer, { index: index2, state: status2, style: {
    flex: "1"
  }, children: (0, import_jsx_runtime90.jsx)(StepUI, { client: props.client, index: index2, payer: props.payer, step }) }), index2 < state.steps.length - 1 && (0, import_jsx_runtime90.jsx)(StepConnectorArrow, {})] }, step.action)) }), (0, import_jsx_runtime90.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime90.jsx)(Text, { center: true, color: "secondaryText", size: "xs", style: { padding: `0 ${spacing.xl}` }, children: "Keep this window open until all transactions are complete." }), (0, import_jsx_runtime90.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime90.jsx)(Container, { flex: "column", gap: "md", children: !state.isDone && firstStepChainId && firstStepChainId !== props.payer.chain.id ? (0, import_jsx_runtime90.jsx)(SwitchNetworkButton2, { fullWidth: true, switchChain: async () => {
    await props.payer.wallet.switchChain(getCachedChain(firstStepChainId));
  }, variant: "accent" }) : (0, import_jsx_runtime90.jsxs)(Button, { disabled: state.isLoading, fullWidth: true, gap: "sm", onClick: state.handleContinue, variant: "accent", children: [state.isLoading ? "Processing" : state.isDone ? props.transactionMode ? "Continue Transaction" : "Done" : state.isFailed ? "Retry" : "Continue", state.isLoading && (0, import_jsx_runtime90.jsx)(Spinner, { color: "primaryText", size: "sm" })] }) })] });
}
function StepUI(props) {
  const { step, client } = props;
  const chain = useChainName(getCachedChain(step.token.chainId));
  return (0, import_jsx_runtime90.jsx)(Container, { flex: "column", gap: "xs", py: "3xs", children: (0, import_jsx_runtime90.jsxs)(Container, { center: "y", flex: "row", gap: "sm", style: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime90.jsx)(PayTokenIcon, { chain: getCachedChain(step.token.chainId), client, size: "md", token: {
    address: step.token.tokenAddress
  } }), (0, import_jsx_runtime90.jsxs)(Container, { center: "y", flex: "column", gap: "3xs", style: { flex: "1" }, children: [(0, import_jsx_runtime90.jsx)(Text, { color: "primaryText", size: "sm", children: getProviderLabel(step.action) }), (0, import_jsx_runtime90.jsxs)(Container, { center: "y", flex: "row", gap: "xs", style: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime90.jsxs)(Container, { center: "y", flex: "row", gap: "xxs", style: {
    flex: "1 1 60%",
    flexWrap: "nowrap",
    maxWidth: "60%",
    minWidth: 0,
    overflow: "hidden"
  }, children: [(0, import_jsx_runtime90.jsx)(Text, { color: "primaryText", size: "sm", children: formatNumber(Number(step.amount), 5) }), (0, import_jsx_runtime90.jsx)(TokenSymbol, { chain: getCachedChain(step.token.chainId), color: "secondaryText", size: "sm", token: {
    address: step.token.tokenAddress,
    name: step.token.name || "",
    symbol: step.token.symbol || ""
  } })] }), (0, import_jsx_runtime90.jsx)(Container, { center: "y", flex: "row", gap: "xs", style: {
    flex: "1 1 40%",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    maxWidth: "40%",
    minWidth: 0
  }, children: (0, import_jsx_runtime90.jsx)(Text, { size: "xs", style: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, children: chain.name }) })] })] })] }) });
}
function useOnRampScreenState(props) {
  const onRampSteps = getOnRampSteps(props.quote);
  const [currentStepIndex, setCurrentStepIndex] = (0, import_react46.useState)(0);
  const [swapTxHash, setSwapTxHash] = (0, import_react46.useState)();
  const [popupWindow, setPopupWindow] = (0, import_react46.useState)(null);
  const { uiStatus: fiatOnrampStatus } = useOnRampStatus({
    client: props.client,
    intentId: props.quote.intentId,
    onSuccess: (status2) => {
      if (onRampSteps.length === 1) {
        props.onSuccess(status2);
      } else {
        setCurrentStepIndex((prev) => prev + 1);
      }
    },
    openedWindow: popupWindow
  });
  const previousStep = onRampSteps[currentStepIndex - 1];
  const currentStep = onRampSteps[currentStepIndex];
  const swapMutation = useSwapMutation({
    client: props.client,
    isFiatFlow: true,
    payer: props.payer,
    paymentLinkId: props.paymentLinkId
  });
  const { uiStatus: swapStatus } = useSwapStatus({
    chainId: swapTxHash == null ? void 0 : swapTxHash.chainId,
    client: props.client,
    onSuccess: () => {
      if (currentStepIndex === onRampSteps.length - 1) {
        getBuyWithFiatStatus({
          client: props.client,
          intentId: props.quote.intentId
        }).then(props.onSuccess);
      } else {
        setSwapTxHash(void 0);
        swapMutation.reset();
        setCurrentStepIndex((prev) => prev + 1);
      }
    },
    transactionHash: swapTxHash == null ? void 0 : swapTxHash.hash
  });
  const steps = onRampSteps.map((step, index2) => {
    let status2 = "unknown";
    if (index2 === 0) {
      status2 = fiatOnrampStatus;
    } else if (index2 < currentStepIndex) {
      status2 = "completed";
    } else if (index2 === currentStepIndex) {
      if (swapMutation.isPending) {
        status2 = "pending";
      } else if (swapMutation.error) {
        status2 = "failed";
      } else if (swapTxHash) {
        status2 = swapStatus;
      } else {
        status2 = "actionRequired";
      }
    }
    return {
      index: index2,
      status: status2,
      step
    };
  });
  const isLoading = steps.some((step) => step.status === "pending");
  const isDone = steps.every((step) => step.status === "completed");
  const isFailed = steps.some((step) => step.status === "failed");
  const handleContinue = (0, import_react46.useCallback)(async () => {
    if (isDone) {
      props.onDone();
      return;
    }
    if (currentStepIndex === 0) {
      const popup = openOnrampPopup(props.quote.onRampLink, props.theme);
      trackPayEvent({
        amountWei: props.quote.onRampToken.amountWei,
        client: props.client,
        event: "open_onramp_popup",
        toChainId: props.quote.onRampToken.token.chainId,
        toToken: props.quote.onRampToken.token.tokenAddress,
        walletAddress: props.payer.account.address,
        walletType: props.payer.wallet.id
      });
      setPopupWindow(popup);
      addPendingTx({
        intentId: props.quote.intentId,
        type: "fiat"
      });
    } else if (previousStep && currentStep && !swapTxHash) {
      try {
        const result = await swapMutation.mutateAsync({
          amount: currentStep.amount,
          fromToken: previousStep.token,
          toToken: currentStep.token
        });
        setSwapTxHash({
          chainId: result.chainId,
          hash: result.transactionHash
        });
      } catch (e) {
        console.error("Failed to execute swap:", e);
      }
    } else if (isFailed) {
      setSwapTxHash(void 0);
      swapMutation.reset();
    }
  }, [
    isDone,
    currentStepIndex,
    swapTxHash,
    props.quote,
    props.onDone,
    swapMutation,
    props.theme,
    isFailed,
    swapMutation.reset,
    props.client,
    props.payer.account.address,
    props.payer.wallet.id,
    currentStep,
    previousStep
  ]);
  (0, import_react46.useEffect)(() => {
    if (!props.isAutoMode) {
      return;
    }
    if (!isLoading && !isDone && !isFailed && currentStepIndex > 0 && currentStepIndex < onRampSteps.length && !swapTxHash) {
      handleContinue();
    }
  }, [
    props.isAutoMode,
    currentStepIndex,
    swapTxHash,
    onRampSteps.length,
    handleContinue,
    isDone,
    isFailed,
    isLoading
  ]);
  return {
    handleContinue,
    isDone,
    isFailed,
    isLoading,
    steps
  };
}
function useOnRampStatus(props) {
  var _a;
  const queryClient = useQueryClient();
  const statusQuery = useBuyWithFiatStatus({
    client: props.client,
    intentId: props.intentId,
    queryOptions: {
      enabled: !!props.openedWindow
    }
  });
  let uiStatus = "actionRequired";
  switch ((_a = statusQuery.data) == null ? void 0 : _a.status) {
    case "ON_RAMP_TRANSFER_COMPLETED":
      uiStatus = "completed";
      break;
    case "PAYMENT_FAILED":
      uiStatus = "failed";
      break;
    case "PENDING_PAYMENT":
      uiStatus = "pending";
      break;
    default:
      uiStatus = "actionRequired";
      break;
  }
  const purchaseCbCalled = (0, import_react46.useRef)(false);
  (0, import_react46.useEffect)(() => {
    if (purchaseCbCalled.current || !props.onSuccess) {
      return;
    }
    if (statusQuery.data && uiStatus === "completed") {
      purchaseCbCalled.current = true;
      props.onSuccess(statusQuery.data);
    }
  }, [props.onSuccess, statusQuery.data, uiStatus]);
  (0, import_react46.useEffect)(() => {
    if (!props.openedWindow) {
      return;
    }
    if (uiStatus === "completed") {
      try {
        if (props.openedWindow && !props.openedWindow.closed) {
          props.openedWindow.close();
        }
      } catch (e) {
        console.warn("Failed to close payment window:", e);
      }
    }
  }, [props.openedWindow, uiStatus]);
  const invalidatedBalance = (0, import_react46.useRef)(false);
  (0, import_react46.useEffect)(() => {
    if (!invalidatedBalance.current && uiStatus === "completed") {
      invalidatedBalance.current = true;
      invalidateWalletBalance(queryClient);
    }
  }, [uiStatus, queryClient]);
  return { uiStatus };
}
function useSwapStatus(props) {
  var _a;
  const swapStatus = useBuyWithCryptoStatus(props.transactionHash && props.chainId ? {
    chainId: props.chainId,
    client: props.client,
    transactionHash: props.transactionHash
  } : void 0);
  let uiStatus = "unknown";
  switch ((_a = swapStatus.data) == null ? void 0 : _a.status) {
    case "COMPLETED":
      uiStatus = "completed";
      break;
    case "FAILED":
      uiStatus = "failed";
      break;
    case "PENDING":
    case "NOT_FOUND":
      uiStatus = "pending";
      break;
    case "NONE":
      uiStatus = "unknown";
      break;
    default:
      uiStatus = "unknown";
      break;
  }
  const purchaseCbCalled = (0, import_react46.useRef)(false);
  (0, import_react46.useEffect)(() => {
    var _a2;
    if (purchaseCbCalled.current || !props.onSuccess) {
      return;
    }
    if (((_a2 = swapStatus.data) == null ? void 0 : _a2.status) === "COMPLETED") {
      purchaseCbCalled.current = true;
      props.onSuccess(swapStatus.data);
    }
  }, [props.onSuccess, swapStatus]);
  const queryClient = useQueryClient();
  const balanceInvalidated = (0, import_react46.useRef)(false);
  (0, import_react46.useEffect)(() => {
    if (uiStatus === "completed" && !balanceInvalidated.current) {
      balanceInvalidated.current = true;
      invalidateWalletBalance(queryClient);
    }
  }, [queryClient, uiStatus]);
  return { uiStatus };
}
function useSwapMutation(props) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      var _a;
      const { fromToken, toToken, amount } = input;
      const wallet = props.payer.wallet;
      if (((_a = wallet.getChain()) == null ? void 0 : _a.id) !== fromToken.chainId) {
        await wallet.switchChain(getCachedChain(fromToken.chainId));
      }
      const account = wallet.getAccount();
      if (!account) {
        throw new Error("Payer wallet has no account");
      }
      const quote = await getBuyWithCryptoQuote({
        client: props.client,
        fromAddress: account.address,
        fromChainId: fromToken.chainId,
        fromTokenAddress: fromToken.tokenAddress,
        paymentLinkId: props.paymentLinkId,
        toAddress: account.address,
        toAmount: amount,
        toChainId: toToken.chainId,
        toTokenAddress: toToken.tokenAddress
      });
      const canBatch = account.sendBatchTransaction;
      const tokenContract = getContract({
        address: quote.swapDetails.fromToken.tokenAddress,
        chain: getCachedChain(quote.swapDetails.fromToken.chainId),
        client: props.client
      });
      const approveTxRequired = quote.approvalData && await allowance({
        contract: tokenContract,
        owner: account.address,
        spender: quote.approvalData.spenderAddress
      }) < BigInt(quote.approvalData.amountWei);
      if (approveTxRequired && quote.approvalData && !canBatch) {
        trackPayEvent({
          amountWei: quote.swapDetails.fromAmountWei,
          chainId: quote.swapDetails.fromToken.chainId,
          client: props.client,
          event: "prompt_swap_approval",
          fromToken: quote.swapDetails.fromToken.tokenAddress,
          toChainId: quote.swapDetails.toToken.chainId,
          toToken: quote.swapDetails.toToken.tokenAddress,
          walletAddress: account.address,
          walletType: props.payer.wallet.id
        });
        const transaction = approve({
          amountWei: BigInt(quote.approvalData.amountWei),
          contract: tokenContract,
          spender: quote.approvalData.spenderAddress
        });
        const tx2 = await sendTransaction({
          account,
          transaction
        });
        await waitForReceipt({ ...tx2, maxBlocksWaitTime: 50 });
        trackPayEvent({
          amountWei: quote.swapDetails.fromAmountWei,
          chainId: quote.swapDetails.fromToken.chainId,
          client: props.client,
          event: "swap_approval_success",
          fromToken: quote.swapDetails.fromToken.tokenAddress,
          toChainId: quote.swapDetails.toToken.chainId,
          toToken: quote.swapDetails.toToken.tokenAddress,
          walletAddress: account.address,
          walletType: props.payer.wallet.id
        });
      }
      trackPayEvent({
        amountWei: quote.swapDetails.fromAmountWei,
        chainId: quote.swapDetails.fromToken.chainId,
        client: props.client,
        event: "prompt_swap_execution",
        fromToken: quote.swapDetails.fromToken.tokenAddress,
        toChainId: quote.swapDetails.toToken.chainId,
        toToken: quote.swapDetails.toToken.tokenAddress,
        walletAddress: account.address,
        walletType: props.payer.wallet.id
      });
      const tx = quote.transactionRequest;
      let _swapTx;
      if (canBatch && quote.approvalData && approveTxRequired) {
        const approveTx = approve({
          amountWei: BigInt(quote.approvalData.amountWei),
          contract: tokenContract,
          spender: quote.approvalData.spenderAddress
        });
        _swapTx = await sendBatchTransaction({
          account,
          transactions: [approveTx, tx]
        });
      } else {
        _swapTx = await sendTransaction({
          account,
          transaction: tx
        });
      }
      await waitForReceipt({ ..._swapTx, maxBlocksWaitTime: 50 });
      trackPayEvent({
        amountWei: quote.swapDetails.fromAmountWei,
        chainId: quote.swapDetails.fromToken.chainId,
        client: props.client,
        event: "swap_execution_success",
        fromToken: quote.swapDetails.fromToken.tokenAddress,
        toChainId: quote.swapDetails.toToken.chainId,
        toToken: quote.swapDetails.toToken.tokenAddress,
        walletAddress: account.address,
        walletType: props.payer.wallet.id
      });
      if (!props.isFiatFlow) {
        addPendingTx({
          chainId: _swapTx.chain.id,
          txHash: _swapTx.transactionHash,
          type: "swap"
        });
      }
      return {
        chainId: _swapTx.chain.id,
        transactionHash: _swapTx.transactionHash
      };
    },
    onSuccess: () => {
      invalidateWalletBalance(queryClient);
    }
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useEnabledPaymentMethods.js
function useEnabledPaymentMethods(options) {
  const { payOptions, supportedDestinations, toChain, toToken } = options;
  function getEnabledPayMethodsForSelectedToken() {
    const chain = supportedDestinations.find((c) => c.chain.id === toChain.id);
    if (!chain) {
      return {
        fiat: false,
        swap: false
      };
    }
    const toTokenAddress = isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address;
    const tokenInfo = chain.tokens.find((t) => t.address.toLowerCase() === toTokenAddress.toLowerCase());
    if (!tokenInfo) {
      return {
        fiat: true,
        swap: true
      };
    }
    return {
      fiat: tokenInfo.buyWithFiatEnabled,
      swap: tokenInfo.buyWithCryptoEnabled
    };
  }
  const { fiat, swap } = getEnabledPayMethodsForSelectedToken();
  const buyWithFiatEnabled = payOptions.buyWithFiat !== false && fiat;
  const buyWithCryptoEnabled = payOptions.buyWithCrypto !== false && swap;
  return {
    buyWithCryptoEnabled,
    buyWithFiatEnabled
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useUISelectionStates.js
var import_react47 = __toESM(require_react(), 1);
function useToTokenSelectionStates(options) {
  var _a, _b, _c, _d;
  const { payOptions, supportedDestinations } = options;
  const prefillBuy = payOptions == null ? void 0 : payOptions.prefillBuy;
  const activeChain = useActiveWalletChain();
  const initialTokenAmount = (prefillBuy == null ? void 0 : prefillBuy.amount) || "";
  const [tokenAmount, setTokenAmount] = (0, import_react47.useState)(initialTokenAmount);
  const deferredTokenAmount = useDebouncedValue(tokenAmount, 300);
  (0, import_react47.useEffect)(() => {
    if (prefillBuy == null ? void 0 : prefillBuy.amount) {
      setTokenAmount(prefillBuy.amount);
    }
    if (prefillBuy == null ? void 0 : prefillBuy.chain) {
      setToChain(prefillBuy.chain);
    }
    if (prefillBuy == null ? void 0 : prefillBuy.token) {
      setToToken(prefillBuy.token);
    }
  }, [prefillBuy == null ? void 0 : prefillBuy.amount, prefillBuy == null ? void 0 : prefillBuy.chain, prefillBuy == null ? void 0 : prefillBuy.token]);
  const [toChain, setToChain] = (0, import_react47.useState)(
    // use prefill chain if available
    (prefillBuy == null ? void 0 : prefillBuy.chain) || payOptions.mode === "transaction" && ((_a = payOptions.transaction) == null ? void 0 : _a.chain) || payOptions.mode === "direct_payment" && ((_b = payOptions.paymentInfo) == null ? void 0 : _b.chain) || // use active chain if its supported as destination
    ((_c = supportedDestinations.find((x) => x.chain.id === (activeChain == null ? void 0 : activeChain.id))) == null ? void 0 : _c.chain) || // default to the first chain in supportedDestinations, or polygon if nothing is found at all
    ((_d = supportedDestinations[0]) == null ? void 0 : _d.chain) || polygon
  );
  const [toToken, setToToken] = (0, import_react47.useState)((prefillBuy == null ? void 0 : prefillBuy.token) || payOptions.mode === "direct_payment" && payOptions.paymentInfo.token || NATIVE_TOKEN);
  return {
    deferredTokenAmount,
    setToChain,
    setTokenAmount,
    setToToken,
    toChain,
    tokenAmount,
    toToken
  };
}
function useFromTokenSelectionStates(options) {
  var _a, _b, _c, _d, _e, _f;
  const { payOptions } = options;
  const [fromChain_, setFromChain] = (0, import_react47.useState)();
  const fromChainDevSpecified = payOptions.buyWithCrypto !== false && ((_b = (_a = payOptions.buyWithCrypto) == null ? void 0 : _a.prefillSource) == null ? void 0 : _b.chain) || payOptions.mode === "transaction" && ((_c = payOptions.transaction) == null ? void 0 : _c.chain) || payOptions.mode === "direct_payment" && ((_d = payOptions.paymentInfo) == null ? void 0 : _d.chain);
  const fromChain = fromChain_ || fromChainDevSpecified || void 0;
  const [fromToken_, setFromToken] = (0, import_react47.useState)();
  const fromTokenDevSpecified = payOptions.buyWithCrypto !== false && ((_f = (_e = payOptions.buyWithCrypto) == null ? void 0 : _e.prefillSource) == null ? void 0 : _f.token) || payOptions.mode === "direct_payment" && payOptions.paymentInfo.token;
  const fromToken = fromToken_ || fromTokenDevSpecified || void 0;
  return {
    fromChain,
    fromToken,
    setFromChain,
    setFromToken
  };
}
function useFiatCurrencySelectionStates(options) {
  var _a, _b;
  const { payOptions } = options;
  const devSpecifiedDefaultCurrency = payOptions.buyWithFiat !== false ? (_b = (_a = payOptions.buyWithFiat) == null ? void 0 : _a.prefillSource) == null ? void 0 : _b.currency : void 0;
  const defaultSelectedCurrencyShorthand = devSpecifiedDefaultCurrency || getDefaultCurrencyBasedOnLocation();
  const [selectedCurrency, setSelectedCurrency] = (0, import_react47.useState)(currencies.find((x) => x.shorthand === defaultSelectedCurrencyShorthand) || usdCurrency);
  return {
    selectedCurrency,
    setSelectedCurrency
  };
}
function getDefaultCurrencyBasedOnLocation() {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
    if (timeZone.includes("london")) {
      return "GBP";
    }
    if (timeZone.includes("europe")) {
      return "EUR";
    }
    if (timeZone.includes("japan")) {
      return "JPY";
    }
    if (timeZone.includes("canada")) {
      return "CAD";
    }
    if (timeZone.includes("australia")) {
      return "AUD";
    }
    if (timeZone.includes("new zealand")) {
      return "NZD";
    }
    return "USD";
  } catch {
    return "USD";
  }
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/BuyTokenInput.js
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var import_react48 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/token/TokenRow.js
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
function TokenRow(props) {
  const { name } = useChainName(props.chain);
  if (!props.token || !props.chain) {
    return (0, import_jsx_runtime91.jsxs)(Button, { fullWidth: true, gap: "xxs", onClick: props.onSelectToken, style: {
      fontSize: fontSize.sm,
      justifyContent: "space-between",
      paddingBottom: spacing.md,
      paddingTop: spacing.md,
      ...props.style
    }, variant: "secondary", children: [(0, import_jsx_runtime91.jsx)(Text, { color: "primaryText", size: "sm", children: "Select payment token" }), (0, import_jsx_runtime91.jsx)(Container, { color: "primaryText", children: (0, import_jsx_runtime91.jsx)(ChevronDownIcon, { height: iconSize.sm, width: iconSize.sm }) })] });
  }
  return (0, import_jsx_runtime91.jsxs)(TokenButton, { disabled: props.freezeChainAndToken, fullWidth: true, gap: "xxs", onClick: props.onSelectToken, style: {
    fontSize: fontSize.sm,
    ...props.style
  }, variant: "secondary", children: [(0, import_jsx_runtime91.jsxs)(Container, { center: "y", flex: "row", gap: "sm", children: [(0, import_jsx_runtime91.jsx)(PayTokenIcon, { chain: props.chain, client: props.client, size: "md", token: props.token }), (0, import_jsx_runtime91.jsxs)(Container, { flex: "column", gap: "4xs", children: [(0, import_jsx_runtime91.jsx)(Container, { flex: "column", gap: "4xs", children: props.isLoading ? (0, import_jsx_runtime91.jsx)(Skeleton, { color: "borderColor", height: fontSize.md, width: "120px" }) : props.value ? (0, import_jsx_runtime91.jsxs)(Container, { center: "y", color: "primaryText", flex: "row", gap: "xxs", children: [(0, import_jsx_runtime91.jsx)(Text, { color: props.value ? "primaryText" : "secondaryText", size: "md", children: formatNumber(Number(props.value), 6) || "" }), (0, import_jsx_runtime91.jsx)(TokenSymbol, { chain: props.chain, color: "secondaryText", size: "sm", token: props.token })] }) : (0, import_jsx_runtime91.jsx)(TokenSymbol, { chain: props.chain, size: "sm", token: props.token }) }), name ? (0, import_jsx_runtime91.jsx)(Text, { color: "secondaryText", size: "xs", children: name }) : (0, import_jsx_runtime91.jsx)(Skeleton, { height: fontSize.xs, width: "90px" })] })] }), !props.freezeChainAndToken && (0, import_jsx_runtime91.jsx)(Container, { color: "primaryText", children: (0, import_jsx_runtime91.jsx)(ChevronDownIcon, { height: iconSize.sm, width: iconSize.sm }) })] });
}
var TokenButton = newStyled(Button)(() => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    justifyContent: "space-between",
    padding: spacing.sm,
    transition: "background 0.3s"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/FiatValue.js
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
function FiatValue(props) {
  var _a;
  const deferredTokenAmount = useDebouncedValue(props.tokenAmount, 500);
  const cryptoToFiatQuery = useQuery({
    queryFn: () => convertCryptoToFiat({
      chain: props.chain,
      client: props.client,
      fromAmount: Number(deferredTokenAmount),
      fromTokenAddress: getTokenAddress(props.token),
      to: "USD"
    }),
    queryKey: [
      "cryptoToFiat",
      props.chain.id,
      getTokenAddress(props.token),
      deferredTokenAmount
    ]
  });
  if (cryptoToFiatQuery.isLoading) {
    return (0, import_jsx_runtime92.jsx)(Skeleton, { height: fontSize.lg, width: "50px" });
  }
  return ((_a = cryptoToFiatQuery.data) == null ? void 0 : _a.result) ? (0, import_jsx_runtime92.jsxs)(Text, { ...props, children: ["$", Number(formatNumber(cryptoToFiatQuery.data.result, 2).toFixed(2)).toLocaleString(void 0, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })] }) : null;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/BuyTokenInput.js
function BuyTokenInput(props) {
  const getWidth = () => {
    let chars = props.value.replace(".", "").length;
    const hasDot = props.value.includes(".");
    if (hasDot) {
      chars += 0.3;
    }
    return `calc(${`${Math.max(1, chars)}ch`} + 6px)`;
  };
  const inputRef = (0, import_react48.useRef)(null);
  return (0, import_jsx_runtime93.jsxs)(Container, { children: [(0, import_jsx_runtime93.jsx)("div", { onClick: () => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, children: (0, import_jsx_runtime93.jsxs)(Container, { center: "both", flex: "row", gap: "xs", style: {
    flexWrap: "nowrap"
  }, children: [(0, import_jsx_runtime93.jsx)(Input, { "data-placeholder": props.value === "", disabled: props.freezeAmount, inputMode: "decimal", onChange: (e) => {
    let value = e.target.value;
    value = value.replace(",", ".");
    if (value.startsWith(".")) {
      value = `0${value}`;
    }
    const numValue = Number(value);
    if (Number.isNaN(numValue)) {
      return;
    }
    if (value.startsWith("0") && !value.startsWith("0.")) {
      props.onChange(value.slice(1));
    } else {
      props.onChange(value);
    }
  }, onClick: (e) => {
    if (props.value === "") {
      e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
    }
  }, pattern: "^[0-9]*[.,]?[0-9]*$", placeholder: "0", ref: inputRef, style: {
    border: "none",
    borderRadius: "0",
    boxShadow: "none",
    fontSize: getBuyTokenAmountFontSize(props.value),
    fontWeight: 600,
    maxWidth: "calc(100% - 100px)",
    padding: "0",
    paddingBlock: "2px",
    textAlign: "right",
    width: getWidth()
  }, tabIndex: -1, type: "text", value: props.value || "0", variant: "outline" }), (0, import_jsx_runtime93.jsx)(TokenSymbol, { chain: props.chain, color: "secondaryText", size: "lg", token: props.token })] }) }), (0, import_jsx_runtime93.jsx)(Container, { center: "both", flex: "row", style: {
    height: fontSize.xl
  }, children: (0, import_jsx_runtime93.jsx)(FiatValue, { chain: props.chain, client: props.client, size: "md", token: props.token, tokenAmount: props.value }) }), !props.hideTokenSelector && (0, import_jsx_runtime93.jsxs)(import_jsx_runtime93.Fragment, { children: [(0, import_jsx_runtime93.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime93.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime93.jsx)(TokenRow, { chain: props.chain, client: props.client, freezeChainAndToken: props.freezeChainAndToken, onSelectToken: props.onSelectToken, token: props.token }) })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/fetchBalancesForWallet.js
var CHUNK_SIZE = 5;
function chunkChains(chains) {
  const chunks = [];
  for (let i = 0; i < chains.length; i += CHUNK_SIZE) {
    chunks.push(chains.slice(i, i + CHUNK_SIZE));
  }
  return chunks;
}
function useWalletsAndBalances(props) {
  const activeAccount = useActiveAccount();
  const connectedWallets = useConnectedWallets();
  const chainInfo = useChainMetadata(props.toChain);
  return useQuery({
    enabled: !!props.sourceSupportedTokens && !!chainInfo.data && !!activeAccount,
    queryFn: async () => {
      const entries = await Promise.all(connectedWallets.map(async (wallet) => {
        var _a;
        const balances = await fetchBalancesForWallet({
          accountAddress: activeAccount == null ? void 0 : activeAccount.address,
          client: props.client,
          mode: props.mode,
          sourceSupportedTokens: props.sourceSupportedTokens || [],
          toChain: props.toChain,
          toToken: props.toToken,
          wallet
        });
        return [
          {
            address: ((_a = wallet.getAccount()) == null ? void 0 : _a.address) || "",
            id: wallet.id
          },
          balances
        ];
      }));
      const map = /* @__PURE__ */ new Map();
      for (const entry of entries) {
        map.set(entry[0], entry[1]);
      }
      return map;
    },
    queryKey: [
      "wallets-and-balances",
      props.sourceSupportedTokens,
      props.toChain.id,
      props.toToken,
      props.mode,
      activeAccount == null ? void 0 : activeAccount.address,
      connectedWallets.map((w) => {
        var _a;
        return (_a = w.getAccount()) == null ? void 0 : _a.address;
      })
    ]
  });
}
async function fetchBalancesForWallet({ wallet, accountAddress, sourceSupportedTokens, toChain, toToken, mode, client }) {
  var _a, _b, _c;
  const account = wallet.getAccount();
  if (!account) {
    return [];
  }
  const balances = [];
  const uniqueChains = Object.keys(sourceSupportedTokens).map((id) => getCachedChain(Number(id)));
  const insightSupport = await Promise.all(uniqueChains.map(async (c) => ({
    chain: c,
    enabled: await isInsightEnabled(c)
  })));
  const insightEnabledChains = insightSupport.filter((c) => c.enabled).map((c) => c.chain);
  const insightChunks = chunkChains(insightEnabledChains);
  await Promise.all(insightChunks.map(async (chunk) => {
    var _a2;
    let owned = [];
    let page = 0;
    const limit = 100;
    while (true) {
      const batch = await getOwnedTokens({
        chains: chunk,
        client,
        ownerAddress: account.address,
        queryOptions: {
          limit,
          page
        }
      }).catch((err) => {
        console.error("error fetching balances from insight", err);
        return [];
      });
      if (batch.length === 0) {
        break;
      }
      owned = [...owned, ...batch];
      page += 1;
    }
    for (const b of owned) {
      const matching = (_a2 = sourceSupportedTokens[b.chainId]) == null ? void 0 : _a2.find((t) => t.address.toLowerCase() === b.tokenAddress.toLowerCase());
      if (matching && b.value > 0n) {
        balances.push({
          balance: b,
          chain: getCachedChain(b.chainId),
          token: matching
        });
      }
    }
  }));
  const destinationToken = isNativeToken(toToken) ? {
    address: NATIVE_TOKEN_ADDRESS,
    icon: (_a = toChain.icon) == null ? void 0 : _a.url,
    name: ((_b = toChain.nativeCurrency) == null ? void 0 : _b.name) || "",
    symbol: ((_c = toChain.nativeCurrency) == null ? void 0 : _c.symbol) || ""
  } : toToken;
  const tokenMap = {
    ...sourceSupportedTokens,
    [toChain.id]: [
      destinationToken,
      ...sourceSupportedTokens[toChain.id] || []
    ]
  };
  const rpcCalls = [];
  for (const [chainIdStr, tokens2] of Object.entries(tokenMap)) {
    const chainId = Number(chainIdStr);
    const chain = getCachedChain(chainId);
    if (insightEnabledChains.some((c) => c.id === chainId)) {
      continue;
    }
    for (const token of tokens2) {
      const isNative = isNativeToken(token);
      const isAlreadyFetched = balances.some((b) => b.chain.id === chainId && b.token.address.toLowerCase() === token.address.toLowerCase());
      if (isAlreadyFetched) {
        continue;
      }
      rpcCalls.push((async () => {
        try {
          const balance = await getWalletBalance({
            address: account.address,
            chain,
            client,
            tokenAddress: isNative ? void 0 : token.address
          });
          const include = token.address.toLowerCase() === destinationToken.address.toLowerCase() && chain.id === toChain.id ? !(mode === "fund_wallet" && account.address === accountAddress) && balance.value > 0n : balance.value > 0n;
          if (include) {
            balances.push({ balance, chain, token });
          }
        } catch (err) {
          console.warn(`Failed to fetch RPC balance for ${token.symbol} on chain ${chainId}`, err);
        }
      })());
    }
  }
  await Promise.all(rpcCalls);
  {
    const uniq = {};
    for (const b of balances) {
      const k = `${b.chain.id}-${b.token.address.toLowerCase()}`;
      if (!uniq[k]) {
        uniq[k] = b;
      }
    }
    balances.splice(0, balances.length, ...Object.values(uniq));
  }
  balances.sort((a, b) => {
    const destAddress = destinationToken.address;
    if (a.chain.id === toChain.id && a.token.address === destAddress)
      return -1;
    if (b.chain.id === toChain.id && b.token.address === destAddress)
      return 1;
    if (a.chain.id === toChain.id)
      return -1;
    if (b.chain.id === toChain.id)
      return 1;
    return a.chain.id - b.chain.id;
  });
  return balances;
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapFlow.js
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);
var import_react52 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/ConfirmationScreen.js
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
var import_react49 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/components/StepBar.js
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
function StepBar(props) {
  return (0, import_jsx_runtime94.jsx)(Container, { bg: "tertiaryBg", flex: "row", style: {
    borderRadius: radius.lg,
    height: "8px"
  }, children: (0, import_jsx_runtime94.jsx)(Container, { bg: "accentText", style: {
    borderRadius: radius.lg,
    width: `${props.currentStep / props.steps * 95}%`
  }, children: null }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/ErrorText.js
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
function ErrorText(props) {
  return (0, import_jsx_runtime95.jsxs)(Container, { flex: "column", gap: "xxs", children: [(0, import_jsx_runtime95.jsxs)(Container, { center: "both", color: "danger", flex: "row", gap: "xxs", children: [(0, import_jsx_runtime95.jsx)(CrossCircledIcon, { height: iconSize.sm, width: iconSize.sm }), (0, import_jsx_runtime95.jsx)(Text, { color: "danger", size: "sm", children: props.title })] }), (0, import_jsx_runtime95.jsx)(Text, { center: true, size: "xs", children: props.message })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapSummary.js
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
function SwapSummary(props) {
  const theme = useCustomTheme();
  const isDifferentRecipient = props.receiver.toLowerCase() !== props.sender.toLowerCase();
  return (0, import_jsx_runtime96.jsxs)(Container, { children: [(0, import_jsx_runtime96.jsxs)(Container, { bg: "tertiaryBg", flex: "column", style: {
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.lg
  }, children: [(0, import_jsx_runtime96.jsx)(Container, { flex: "row", gap: "sm", p: "sm", style: {
    borderBottom: `1px solid ${theme.colors.borderColor}`
  }, children: (0, import_jsx_runtime96.jsx)(WalletRow, { address: props.sender, client: props.client, iconSize: "md", textSize: "sm" }) }), (0, import_jsx_runtime96.jsx)(TokenRow, { chain: props.fromChain, client: props.client, freezeChainAndToken: true, isLoading: false, onSelectToken: () => {
  }, style: {
    background: "transparent",
    border: "none",
    borderRadius: 0
  }, token: props.fromToken, value: props.fromAmount })] }), (0, import_jsx_runtime96.jsx)(StepConnectorArrow, {}), (0, import_jsx_runtime96.jsxs)(Container, { bg: "tertiaryBg", flex: "column", style: {
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.lg
  }, children: [isDifferentRecipient && (0, import_jsx_runtime96.jsx)(Container, { flex: "row", gap: "sm", p: "sm", style: {
    borderBottom: `1px solid ${theme.colors.borderColor}`
  }, children: (0, import_jsx_runtime96.jsx)(WalletRow, { address: props.receiver, client: props.client, iconSize: "md", textSize: "sm" }) }), (0, import_jsx_runtime96.jsx)(TokenRow, { chain: props.toChain, client: props.client, freezeChainAndToken: true, isLoading: false, onSelectToken: () => {
  }, style: {
    background: "transparent",
    border: "none",
    borderRadius: 0
  }, token: props.toToken, value: props.toAmount })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/ConfirmationScreen.js
function SwapConfirmationScreen(props) {
  const approveTxRequired = props.quote.approvalData && props.preApprovedAmount !== void 0 && props.preApprovedAmount < BigInt(props.quote.approvalData.amountWei);
  const needsApprovalStep = approveTxRequired && !props.payer.account.sendBatchTransaction;
  const initialStep = needsApprovalStep ? "approval" : "swap";
  const [step, setStep] = (0, import_react49.useState)(initialStep);
  const [error, setError] = (0, import_react49.useState)();
  const [status2, setStatus] = (0, import_react49.useState)("idle");
  const receiver = props.quote.swapDetails.toAddress;
  const sender = props.quote.swapDetails.fromAddress;
  const uiErrorMessage = (0, import_react49.useMemo)(() => {
    if (step === "approval" && status2 === "error" && error) {
      if (error.toLowerCase().includes("user rejected") || error.toLowerCase().includes("user closed modal") || error.toLowerCase().includes("user denied")) {
        return {
          message: "Your wallet rejected the approval request.",
          title: "Failed to Approve"
        };
      }
      if (error.toLowerCase().includes("insufficient funds for gas")) {
        return {
          message: "You do not have enough native funds to approve the transaction.",
          title: "Insufficient Native Funds"
        };
      }
      return {
        message: "Your wallet failed to approve the transaction for an unknown reason. Please try again or contact support.",
        title: "Failed to Approve"
      };
    }
    if (step === "swap" && status2 === "error" && error) {
      if (error.toLowerCase().includes("user rejected") || error.toLowerCase().includes("user closed modal") || error.toLowerCase().includes("user denied")) {
        return {
          message: "Your wallet rejected the confirmation request.",
          title: "Failed to Confirm"
        };
      }
      if (error.toLowerCase().includes("insufficient funds for gas")) {
        return {
          message: "You do not have enough native funds to confirm the transaction.",
          title: "Insufficient Native Funds"
        };
      }
      return {
        message: "Your wallet failed to confirm the transaction for an unknown reason. Please try again or contact support.",
        title: "Failed to Confirm"
      };
    }
    return void 0;
  }, [error, step, status2]);
  return (0, import_jsx_runtime97.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime97.jsx)(ModalHeader, { onBack: props.onBack, title: props.title }), props.isFiatFlow ? (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime97.jsx)(StepBar, { currentStep: 2, steps: 2 }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime97.jsxs)(Text, { size: "xs", children: ["Step 2 of 2 - Converting ", props.fromTokenSymbol, " to", " ", props.toTokenSymbol] }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" })] }) : (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime97.jsx)(Text, { size: "sm", children: "Confirm payment" }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" })] }), (0, import_jsx_runtime97.jsx)(SwapSummary, { client: props.client, fromAmount: props.fromAmount, fromChain: props.fromChain, fromToken: props.fromToken, receiver, sender, toAmount: props.toAmount, toChain: props.toChain, toToken: props.toToken }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" }), needsApprovalStep && (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime97.jsxs)(Container, { center: "y", color: "accentText", flex: "row", gap: "sm", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime97.jsx)(Step, { isActive: step === "approval", isDone: step === "swap", label: step === "approval" ? "Approve" : "Approved" }), (0, import_jsx_runtime97.jsx)(ConnectorLine, {}), (0, import_jsx_runtime97.jsx)(Step, { isActive: step === "swap", isDone: false, label: "Confirm" })] }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "lg" })] }), uiErrorMessage && (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsx)(ErrorText, { message: uiErrorMessage.message, title: uiErrorMessage.title }), (0, import_jsx_runtime97.jsx)(Spacer, { y: "md" })] }), props.payer.chain.id !== props.fromChain.id ? (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime97.jsx)(SwitchNetworkButton2, { fullWidth: true, switchChain: async () => {
    await props.payer.wallet.switchChain(props.fromChain);
  }, variant: "accent" })] }) : (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [(0, import_jsx_runtime97.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime97.jsxs)(Button, { disabled: status2 === "pending", fullWidth: true, gap: "xs", onClick: async () => {
    var _a;
    const wallet = props.payer.wallet;
    if (((_a = wallet.getChain()) == null ? void 0 : _a.id) !== props.fromChain.id) {
      await wallet.switchChain(props.fromChain);
    }
    const account = wallet.getAccount();
    if (!account) {
      throw new Error("Payer wallet has no account");
    }
    if (step === "approval" && props.quote.approvalData) {
      try {
        setStatus("pending");
        trackPayEvent({
          amountWei: props.quote.swapDetails.fromAmountWei,
          chainId: props.quote.swapDetails.fromToken.chainId,
          client: props.client,
          event: "prompt_swap_approval",
          fromToken: props.quote.swapDetails.fromToken.tokenAddress,
          toChainId: props.quote.swapDetails.toToken.chainId,
          toToken: props.quote.swapDetails.toToken.tokenAddress,
          walletAddress: account.address,
          walletType: wallet.id
        });
        const transaction = approve({
          amountWei: BigInt(props.quote.approvalData.amountWei),
          contract: getContract({
            address: props.quote.swapDetails.fromToken.tokenAddress,
            chain: props.fromChain,
            client: props.client
          }),
          spender: props.quote.approvalData.spenderAddress
        });
        const tx = await sendTransaction({
          account,
          transaction
        });
        await waitForReceipt({ ...tx, maxBlocksWaitTime: 50 });
        trackPayEvent({
          amountWei: props.quote.swapDetails.fromAmountWei,
          chainId: props.quote.swapDetails.fromToken.chainId,
          client: props.client,
          event: "swap_approval_success",
          fromToken: props.quote.swapDetails.fromToken.tokenAddress,
          toChainId: props.quote.swapDetails.toToken.chainId,
          toToken: props.quote.swapDetails.toToken.tokenAddress,
          walletAddress: account.address,
          walletType: wallet.id
        });
        setStep("swap");
        setStatus("idle");
      } catch (e) {
        console.error(e);
        setError(e.message);
        setStatus("error");
      }
    }
    if (step === "swap") {
      setStatus("pending");
      try {
        trackPayEvent({
          amountWei: props.quote.swapDetails.fromAmountWei,
          chainId: props.quote.swapDetails.fromToken.chainId,
          client: props.client,
          event: "prompt_swap_execution",
          fromToken: props.quote.swapDetails.fromToken.tokenAddress,
          toChainId: props.quote.swapDetails.toToken.chainId,
          toToken: props.quote.swapDetails.toToken.tokenAddress,
          walletAddress: account.address,
          walletType: wallet.id
        });
        const tx = props.quote.transactionRequest;
        let _swapTx;
        const canBatch = account.sendBatchTransaction;
        if (canBatch && props.quote.approvalData && approveTxRequired) {
          const approveTx = approve({
            amountWei: BigInt(props.quote.approvalData.amountWei),
            contract: getContract({
              address: props.quote.swapDetails.fromToken.tokenAddress,
              chain: props.fromChain,
              client: props.client
            }),
            spender: props.quote.approvalData.spenderAddress
          });
          _swapTx = await sendBatchTransaction({
            account,
            transactions: [approveTx, tx]
          });
        } else {
          _swapTx = await sendTransaction({
            account,
            transaction: tx
          });
        }
        trackPayEvent({
          amountWei: props.quote.swapDetails.fromAmountWei,
          chainId: props.quote.swapDetails.fromToken.chainId,
          client: props.client,
          event: "swap_execution_success",
          fromToken: props.quote.swapDetails.fromToken.tokenAddress,
          toChainId: props.quote.swapDetails.toToken.chainId,
          toToken: props.quote.swapDetails.toToken.tokenAddress,
          walletAddress: account.address,
          walletType: wallet.id
        });
        if (!props.isFiatFlow) {
          addPendingTx({
            chainId: _swapTx.chain.id,
            txHash: _swapTx.transactionHash,
            type: "swap"
          });
        }
        props.setSwapTxHash(_swapTx.transactionHash);
      } catch (e) {
        console.error(e);
        setStatus("error");
        setError(e.message);
      }
    }
  }, variant: "accent", children: [step === "approval" && (status2 === "pending" ? "Approving" : "Approve"), step === "swap" && (status2 === "pending" ? "Confirming" : "Confirm"), status2 === "pending" && (0, import_jsx_runtime97.jsx)(Spinner, { color: "accentButtonText", size: "sm" })] })] })] });
}
var ConnectorLine = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    background: theme.colors.borderColor,
    flex: 1,
    height: "4px"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapStatusScreen.js
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var import_react51 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/SwapDetailsScreen.js
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/statusMeta.js
function getBuyWithCryptoStatusMeta(cryptoStatus) {
  if (cryptoStatus.status === "NOT_FOUND") {
    return {
      color: "secondaryText",
      status: "Unknown"
    };
  }
  const subStatus = cryptoStatus.subStatus;
  const status2 = cryptoStatus.status;
  if (subStatus === "WAITING_BRIDGE") {
    return {
      color: "accentText",
      loading: true,
      status: "Bridging"
    };
  }
  if (subStatus === "PARTIAL_SUCCESS") {
    return {
      color: "secondaryText",
      status: "Incomplete"
    };
  }
  if (status2 === "PENDING") {
    return {
      color: "accentText",
      loading: true,
      status: "Pending"
    };
  }
  if (status2 === "FAILED") {
    return {
      color: "danger",
      status: "Failed"
    };
  }
  if (status2 === "COMPLETED") {
    return {
      color: "success",
      status: "Completed"
    };
  }
  return {
    color: "secondaryText",
    status: "Unknown"
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/TokenInfoRow.js
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
var import_react50 = __toESM(require_react(), 1);
function TokenInfoRow(props) {
  const chainObj = (0, import_react50.useMemo)(() => getCachedChain(props.chainId), [props.chainId]);
  const { name } = useChainName(chainObj);
  return (0, import_jsx_runtime98.jsxs)(Container, { flex: "row", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime98.jsx)(Text, { size: "sm", children: props.label }), (0, import_jsx_runtime98.jsxs)(Container, { flex: "column", gap: "3xs", style: {
    alignItems: "flex-end"
  }, children: [(0, import_jsx_runtime98.jsxs)(Container, { center: "y", flex: "row", gap: "xs", children: [(0, import_jsx_runtime98.jsx)(PayTokenIcon, { chain: chainObj, client: props.client, size: "sm", token: {
    address: props.tokenAddress
  } }), (0, import_jsx_runtime98.jsxs)(Text, { color: "primaryText", size: "sm", children: [formatNumber(Number(props.tokenAmount), 6), " ", props.tokenSymbol] })] }), (0, import_jsx_runtime98.jsx)(Text, { size: "xs", children: name })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/SwapDetailsScreen.js
function SwapTxDetailsTable(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let uiData;
  let showStatusRow = true;
  if (props.type === "status") {
    const status2 = props.status;
    if (props.hideStatusRow) {
      showStatusRow = false;
    }
    const isPartialSuccess2 = status2.status === "COMPLETED" && status2.subStatus === "PARTIAL_SUCCESS";
    uiData = {
      destinationTxHash: (_a = status2.destination) == null ? void 0 : _a.transactionHash,
      estimatedDuration: status2.quote.estimated.durationSeconds || 0,
      fromAddress: status2.fromAddress,
      fromToken: {
        address: status2.quote.fromToken.tokenAddress,
        amount: status2.quote.fromAmount,
        chainId: status2.quote.fromToken.chainId,
        symbol: status2.quote.fromToken.symbol || ""
      },
      gotToken: status2.destination ? {
        address: status2.destination.token.tokenAddress,
        amount: status2.destination.amount,
        chainId: status2.destination.token.chainId,
        symbol: status2.destination.token.symbol || ""
      } : void 0,
      isPartialSuccess: isPartialSuccess2,
      quotedToToken: {
        address: status2.quote.toToken.tokenAddress,
        amount: status2.quote.toAmount,
        chainId: status2.quote.toToken.chainId,
        symbol: status2.quote.toToken.symbol || ""
      },
      sourceTxHash: (_b = status2.source) == null ? void 0 : _b.transactionHash,
      statusMeta: getBuyWithCryptoStatusMeta(status2),
      toAddress: status2.toAddress
    };
  } else {
    const quote = props.quote;
    uiData = {
      estimatedDuration: quote.swapDetails.estimated.durationSeconds || 0,
      fromAddress: quote.swapDetails.fromAddress,
      fromToken: {
        address: quote.swapDetails.fromToken.tokenAddress,
        amount: quote.swapDetails.fromAmount,
        chainId: quote.swapDetails.fromToken.chainId,
        symbol: quote.swapDetails.fromToken.symbol || ""
      },
      isPartialSuccess: false,
      quotedToToken: {
        address: quote.swapDetails.toToken.tokenAddress,
        amount: quote.swapDetails.toAmount,
        chainId: quote.swapDetails.toToken.chainId,
        symbol: quote.swapDetails.toToken.symbol || ""
      },
      toAddress: quote.swapDetails.toAddress
    };
  }
  const { client } = props;
  const { fromToken, quotedToToken: toToken, statusMeta, sourceTxHash, destinationTxHash, isPartialSuccess, gotToken } = uiData;
  const fromChainId = fromToken.chainId;
  const toChainId = toToken.chainId;
  const fromChainName = useChainName(getCachedChain(fromChainId));
  const fromChainExplorers = useChainExplorers(getCachedChain(fromChainId));
  const toChainName = useChainName(getCachedChain(toChainId));
  const toChainExplorers = useChainExplorers(getCachedChain(toChainId));
  const lineSpacer = (0, import_jsx_runtime99.jsxs)(import_jsx_runtime99.Fragment, { children: [(0, import_jsx_runtime99.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime99.jsx)(Line, {}), (0, import_jsx_runtime99.jsx)(Spacer, { y: "md" })] });
  return (0, import_jsx_runtime99.jsxs)("div", { children: [(0, import_jsx_runtime99.jsx)(TokenInfoRow, { chainId: fromToken.chainId, client, label: "Paid", tokenAddress: fromToken.address, tokenAmount: fromToken.amount, tokenSymbol: fromToken.symbol || "" }), lineSpacer, isPartialSuccess && gotToken ? (
    // Expected + Got
    (0, import_jsx_runtime99.jsxs)(import_jsx_runtime99.Fragment, { children: [(0, import_jsx_runtime99.jsx)(TokenInfoRow, { chainId: toToken.chainId, client, label: isPartialSuccess ? "Expected" : "Received", tokenAddress: toToken.address, tokenAmount: toToken.amount, tokenSymbol: toToken.symbol || "" }), lineSpacer, (0, import_jsx_runtime99.jsx)(TokenInfoRow, { chainId: gotToken.chainId, client, label: "Got", tokenAddress: gotToken.address, tokenAmount: gotToken.amount, tokenSymbol: gotToken.symbol || "" })] })
  ) : (
    // Receive
    (0, import_jsx_runtime99.jsx)(TokenInfoRow, { chainId: toToken.chainId, client, label: "Received", tokenAddress: toToken.address, tokenAmount: toToken.amount, tokenSymbol: toToken.symbol || "" })
  ), lineSpacer, (0, import_jsx_runtime99.jsxs)(Container, { flex: "row", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime99.jsx)(Text, { size: "sm", children: "Recipient" }), (0, import_jsx_runtime99.jsx)(WalletRow, { address: uiData.toAddress, client, iconSize: "sm" })] }), statusMeta && showStatusRow && (0, import_jsx_runtime99.jsxs)(import_jsx_runtime99.Fragment, { children: [lineSpacer, (0, import_jsx_runtime99.jsxs)(Container, { flex: "row", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime99.jsx)(Text, { size: "sm", children: "Status" }), (0, import_jsx_runtime99.jsx)(Container, { center: "y", flex: "column", gap: "3xs", style: {
    alignItems: "flex-end"
  }, children: (0, import_jsx_runtime99.jsx)(Text, { color: statusMeta.color, size: "sm", children: statusMeta.status }) })] })] }), (0, import_jsx_runtime99.jsx)(Spacer, { y: "lg" }), ((_d = (_c = fromChainExplorers.explorers) == null ? void 0 : _c[0]) == null ? void 0 : _d.url) && sourceTxHash && (0, import_jsx_runtime99.jsxs)(ButtonLink, { fullWidth: true, gap: "xs", href: formatExplorerTxUrl((_e = fromChainExplorers.explorers[0]) == null ? void 0 : _e.url, sourceTxHash), style: {
    fontSize: fontSize.sm,
    padding: spacing.sm
  }, target: "_blank", variant: "outline", children: ["View on ", fromChainName.name, " Explorer", (0, import_jsx_runtime99.jsx)(ExternalLinkIcon, { height: iconSize.sm, width: iconSize.sm })] }), destinationTxHash && sourceTxHash !== destinationTxHash && ((_g = (_f = toChainExplorers == null ? void 0 : toChainExplorers.explorers) == null ? void 0 : _f[0]) == null ? void 0 : _g.url) && (0, import_jsx_runtime99.jsxs)(import_jsx_runtime99.Fragment, { children: [(0, import_jsx_runtime99.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime99.jsxs)(ButtonLink, { fullWidth: true, gap: "xs", href: formatExplorerTxUrl((_h = toChainExplorers.explorers[0]) == null ? void 0 : _h.url, destinationTxHash), style: {
    fontSize: fontSize.sm,
    padding: spacing.sm
  }, target: "_blank", variant: "outline", children: ["View on ", toChainName.name, " Explorer", (0, import_jsx_runtime99.jsx)(ExternalLinkIcon, { height: iconSize.sm, width: iconSize.sm })] })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapStatusScreen.js
function SwapStatusScreen(props) {
  var _a, _b, _c, _d, _e, _f;
  const { onSuccess } = props;
  const [showDetails, setShowDetails] = (0, import_react51.useState)(false);
  const swapStatus = useBuyWithCryptoStatus({
    chainId: props.fromChain.id,
    client: props.client,
    transactionHash: props.swapTxHash
  });
  let uiStatus = "pending";
  if (((_a = swapStatus.data) == null ? void 0 : _a.status) === "COMPLETED") {
    uiStatus = "success";
  } else if (((_b = swapStatus.data) == null ? void 0 : _b.status) === "FAILED") {
    uiStatus = "failed";
  }
  if (((_c = swapStatus.data) == null ? void 0 : _c.status) === "COMPLETED" && ((_d = swapStatus.data) == null ? void 0 : _d.subStatus) === "PARTIAL_SUCCESS") {
    uiStatus = "partialSuccess";
  }
  const purchaseCbCalled = (0, import_react51.useRef)(false);
  (0, import_react51.useEffect)(() => {
    var _a2;
    if (purchaseCbCalled.current || !onSuccess) {
      return;
    }
    if (((_a2 = swapStatus.data) == null ? void 0 : _a2.status) === "COMPLETED") {
      purchaseCbCalled.current = true;
      onSuccess(swapStatus.data);
    }
  }, [onSuccess, swapStatus]);
  const queryClient = useQueryClient();
  const balanceInvalidated = (0, import_react51.useRef)(false);
  (0, import_react51.useEffect)(() => {
    if ((uiStatus === "success" || uiStatus === "partialSuccess") && !balanceInvalidated.current) {
      balanceInvalidated.current = true;
      invalidateWalletBalance(queryClient);
    }
  }, [queryClient, uiStatus]);
  const swapDetails = swapStatus.data && swapStatus.data.status !== "NOT_FOUND" ? (0, import_jsx_runtime100.jsx)(SwapTxDetailsTable, { client: props.client, status: swapStatus.data, type: "status" }) : props.quote ? (0, import_jsx_runtime100.jsx)(SwapTxDetailsTable, { client: props.client, quote: props.quote, type: "quote" }) : null;
  if (showDetails) {
    return (0, import_jsx_runtime100.jsx)(Container, { animate: "fadein", children: (0, import_jsx_runtime100.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime100.jsx)(ModalHeader, { onBack: () => setShowDetails(false), title: "Transaction Details" }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "xl" }), swapDetails] }) });
  }
  return (0, import_jsx_runtime100.jsx)(Container, { animate: "fadein", children: (0, import_jsx_runtime100.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime100.jsx)(ModalHeader, { onBack: props.onBack, title: props.title }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "sm" }), uiStatus === "success" && (0, import_jsx_runtime100.jsxs)(import_jsx_runtime100.Fragment, { children: [(0, import_jsx_runtime100.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime100.jsxs)(Container, { center: "x", color: "success", flex: "column", children: [(0, import_jsx_runtime100.jsx)(CheckCircledIcon, { height: iconSize["3xl"], width: iconSize["3xl"] }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime100.jsx)(Text, { color: "primaryText", size: "lg", children: "Buy Complete" })] }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime100.jsx)(Button, { fullWidth: true, onClick: () => setShowDetails(true), variant: "outline", children: "View transaction details" }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime100.jsx)(Button, { fullWidth: true, onClick: props.onDone, variant: "accent", children: props.transactionMode ? "Continue Transaction" : "Done" })] }), uiStatus === "partialSuccess" && ((_e = swapStatus.data) == null ? void 0 : _e.status) !== "NOT_FOUND" && ((_f = swapStatus.data) == null ? void 0 : _f.destination) && (0, import_jsx_runtime100.jsxs)(import_jsx_runtime100.Fragment, { children: [(0, import_jsx_runtime100.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime100.jsxs)(Container, { center: "x", color: "success", flex: "column", children: [(0, import_jsx_runtime100.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime100.jsx)(Text, { color: "primaryText", size: "lg", children: "Incomplete" }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime100.jsxs)(Text, { color: "danger", size: "sm", children: ["Expected ", swapStatus.data.quote.toToken.symbol, ", Got", " ", swapStatus.data.destination.token.symbol, " instead"] })] }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "xl" })] }), uiStatus === "failed" && (0, import_jsx_runtime100.jsxs)(import_jsx_runtime100.Fragment, { children: [(0, import_jsx_runtime100.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime100.jsxs)(Container, { flex: "column", children: [(0, import_jsx_runtime100.jsxs)(Container, { center: "both", flex: "column", children: [(0, import_jsx_runtime100.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime100.jsx)(Text, { color: "primaryText", size: "lg", children: "Transaction Failed" }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime100.jsxs)(Text, { size: "sm", children: ["Your transaction ", `couldn't`, " be processed"] })] }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime100.jsx)(Button, { fullWidth: true, onClick: () => setShowDetails(true), variant: "outline", children: "View transaction details" }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime100.jsx)(Button, { fullWidth: true, onClick: props.onTryAgain, variant: "accent", children: "Try Again" })] })] }), uiStatus === "pending" && (0, import_jsx_runtime100.jsxs)(import_jsx_runtime100.Fragment, { children: [(0, import_jsx_runtime100.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime100.jsxs)(Container, { animate: "fadein", center: "both", flex: "column", children: [(0, import_jsx_runtime100.jsx)("div", { style: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    position: "relative"
  }, children: (0, import_jsx_runtime100.jsx)(Spinner, { color: "accentText", size: "3xl" }) }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime100.jsx)(Text, { color: "primaryText", size: "lg", children: "Buy Pending" }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime100.jsx)(Text, { color: "secondaryText", size: "sm", children: "This may take a minute to complete" })] }), (0, import_jsx_runtime100.jsx)(Spacer, { y: "xl" })] })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapFlow.js
function SwapFlow(props) {
  const [swapTxHash, setSwapTxHash] = (0, import_react52.useState)();
  const quote = props.buyWithCryptoQuote;
  const fromChain = (0, import_react52.useMemo)(() => getCachedChain(quote.swapDetails.fromToken.chainId), [quote]);
  const toChain = (0, import_react52.useMemo)(() => getCachedChain(quote.swapDetails.toToken.chainId), [quote]);
  const fromTokenSymbol = quote.swapDetails.fromToken.symbol || "";
  const toTokenSymbol = quote.swapDetails.toToken.symbol || "";
  const fromAmount = quote.swapDetails.fromAmount;
  const toAmount = quote.swapDetails.toAmount;
  const _toToken = quote.swapDetails.toToken;
  const _fromToken = quote.swapDetails.fromToken;
  const toToken = (0, import_react52.useMemo)(() => {
    if (_toToken.tokenAddress === NATIVE_TOKEN_ADDRESS) {
      return NATIVE_TOKEN;
    }
    const tokenInfo = {
      address: _toToken.tokenAddress,
      name: _toToken.name || "",
      symbol: _toToken.symbol || ""
    };
    return tokenInfo;
  }, [_toToken]);
  const fromToken = (0, import_react52.useMemo)(() => {
    if (_fromToken.tokenAddress === NATIVE_TOKEN_ADDRESS) {
      return NATIVE_TOKEN;
    }
    const tokenInfo = {
      address: _fromToken.tokenAddress,
      name: _fromToken.name || "",
      symbol: _fromToken.symbol || ""
    };
    return tokenInfo;
  }, [_fromToken]);
  if (swapTxHash) {
    return (0, import_jsx_runtime101.jsx)(SwapStatusScreen, { client: props.client, fromChain, isEmbed: props.isEmbed, onBack: props.onBack, onDone: props.onDone, onSuccess: props.onSuccess, onTryAgain: props.onTryAgain, quote, swapTxHash, title: props.title, transactionMode: props.transactionMode });
  }
  return (0, import_jsx_runtime101.jsx)(SwapConfirmationScreen, { client: props.client, fromAmount, fromChain, fromToken, fromTokenSymbol, isFiatFlow: props.isFiatFlow, onBack: props.onBack, onTryAgain: props.onTryAgain, payer: props.payer, preApprovedAmount: props.approvalAmount, quote, setSwapTxHash, title: props.title, toAmount, toChain, toToken, toTokenSymbol });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapScreenContent.js
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);
var import_react53 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithCryptoQuote.js
function useBuyWithCryptoQuote(params, queryParams) {
  return useQuery({
    ...queryParams,
    enabled: !!params,
    queryFn: () => {
      if (!params) {
        throw new Error("Swap params are required");
      }
      return getBuyWithCryptoQuote(params);
    },
    queryKey: ["buyWithCryptoQuote", params],
    refetchInterval: 2e4,
    retry: false
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/PayWithCrypto.js
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);
function PayWithCryptoQuoteInfo(props) {
  var _a;
  const theme = useCustomTheme();
  const balanceQuery = useWalletBalance({
    address: props.payerAccount.address,
    chain: props.chain,
    client: props.client,
    tokenAddress: isNativeToken(props.token) ? void 0 : (_a = props.token) == null ? void 0 : _a.address
  }, {
    enabled: !!props.chain && !!props.token
  });
  return (0, import_jsx_runtime102.jsxs)(Container, { bg: "tertiaryBg", style: {
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.lg,
    ...props.swapRequired ? {
      borderBottom: "none",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    } : {}
  }, children: [(0, import_jsx_runtime102.jsxs)(Container, { flex: "row", gap: "sm", style: {
    borderBottom: `1px solid ${theme.colors.borderColor}`,
    justifyContent: "space-between",
    padding: spacing.sm
  }, children: [(0, import_jsx_runtime102.jsx)(WalletRow, { address: props.payerAccount.address, client: props.client }), props.token && props.chain && balanceQuery.data ? (0, import_jsx_runtime102.jsxs)(Container, { center: "y", flex: "row", gap: "3xs", children: [(0, import_jsx_runtime102.jsx)(Text, { color: "secondaryText", size: "xs", weight: 500, children: formatTokenBalance(balanceQuery.data, false, 4) }), (0, import_jsx_runtime102.jsx)(TokenSymbol, { chain: props.chain, color: "secondaryText", size: "xs", token: props.token })] }) : props.token && props.chain && balanceQuery.isLoading ? (0, import_jsx_runtime102.jsx)(Skeleton, { height: fontSize.xs, width: "70px" }) : null] }), (0, import_jsx_runtime102.jsx)(TokenRow, { chain: props.chain, client: props.client, isLoading: props.isLoading, onSelectToken: props.onSelectToken, style: {
    border: "none",
    borderBottomLeftRadius: !props.token || !props.chain || !props.swapRequired ? radius.lg : 0,
    borderBottomRightRadius: !props.token || !props.chain || !props.swapRequired ? radius.lg : 0,
    borderRadius: 0
  }, token: props.token, value: props.value })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapScreenContent.js
function SwapScreenContent(props) {
  var _a, _b, _c, _d, _e, _f, _g;
  const { setScreen, payer, client, toChain, tokenAmount, toToken, fromChain, fromToken, payOptions, disableTokenSelection } = props;
  const defaultRecipientAddress = (_b = (_a = props.payOptions) == null ? void 0 : _a.paymentInfo) == null ? void 0 : _b.sellerAddress;
  const receiverAddress = defaultRecipientAddress || props.activeAccount.address;
  const { drawerRef, drawerOverlayRef, isOpen, setIsOpen } = useDrawer();
  const [drawerScreen, setDrawerScreen] = (0, import_react53.useState)("fees");
  const fromTokenBalanceQuery = useWalletBalance({
    address: payer.account.address,
    chain: fromChain,
    client,
    tokenAddress: isNativeToken(fromToken) ? void 0 : fromToken == null ? void 0 : fromToken.address
  }, {
    enabled: !!fromChain && !!fromToken
  });
  const fromTokenId = isNativeToken(fromToken) ? NATIVE_TOKEN_ADDRESS : (_c = fromToken == null ? void 0 : fromToken.address) == null ? void 0 : _c.toLowerCase();
  const toTokenId = isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address.toLowerCase();
  const swapRequired = !!tokenAmount && !!fromChain && !!fromTokenId && !((fromChain == null ? void 0 : fromChain.id) === toChain.id && fromTokenId === toTokenId);
  const quoteParams = fromChain && fromToken && swapRequired ? {
    client,
    // wallets
    fromAddress: payer.account.address,
    // from
    fromChainId: fromChain.id,
    fromTokenAddress: isNativeToken(fromToken) ? NATIVE_TOKEN_ADDRESS : fromToken.address,
    paymentLinkId: props.paymentLinkId,
    purchaseData: payOptions.purchaseData,
    toAddress: receiverAddress,
    toAmount: tokenAmount,
    // to
    toChainId: toChain.id,
    toTokenAddress: isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address
  } : void 0;
  const quoteQuery = useBuyWithCryptoQuote(quoteParams, {
    gcTime: 30 * 1e3,
    refetchInterval: 30 * 1e3,
    // refetch every 30 seconds
    staleTime: 30 * 1e3
  });
  const allowanceQuery = useQuery({
    enabled: !!((_d = quoteQuery.data) == null ? void 0 : _d.approvalData),
    queryFn: () => {
      var _a2;
      if (!((_a2 = quoteQuery.data) == null ? void 0 : _a2.approvalData)) {
        return null;
      }
      return allowance({
        contract: getContract({
          address: quoteQuery.data.swapDetails.fromToken.tokenAddress,
          chain: getCachedChain(quoteQuery.data.swapDetails.fromToken.chainId),
          client: props.client
        }),
        owner: props.payer.account.address,
        spender: quoteQuery.data.approvalData.spenderAddress
      });
    },
    queryKey: [
      "allowance",
      payer.account.address,
      (_e = quoteQuery.data) == null ? void 0 : _e.approvalData
    ],
    refetchOnMount: true
  });
  const sourceTokenAmount = swapRequired ? (_f = quoteQuery.data) == null ? void 0 : _f.swapDetails.fromAmount : tokenAmount;
  const isNotEnoughBalance = !!sourceTokenAmount && !!fromTokenBalanceQuery.data && Number(fromTokenBalanceQuery.data.displayValue) < Number(sourceTokenAmount);
  const disableContinue = !fromChain || !fromToken || swapRequired && !quoteQuery.data || isNotEnoughBalance || allowanceQuery.isLoading;
  const errorMsg = !quoteQuery.isLoading && quoteQuery.error ? getErrorMessage(quoteQuery.error) : void 0;
  function showSwapFlow() {
    if ((props.payOptions.mode === "direct_payment" || props.payOptions.mode === "fund_wallet") && !isNotEnoughBalance && !swapRequired) {
      setScreen({
        id: "transfer-flow"
      });
    } else if (props.payOptions.mode === "transaction" && !isNotEnoughBalance && !swapRequired) {
      if (payer.account.address !== receiverAddress) {
        setScreen({
          id: "transfer-flow"
        });
      } else {
        props.onDone();
      }
      return;
    }
    if (!quoteQuery.data) {
      return;
    }
    setScreen({
      approvalAmount: allowanceQuery.data ?? void 0,
      id: "swap-flow",
      quote: quoteQuery.data
    });
  }
  function showFees() {
    if (!quoteQuery.data) {
      return;
    }
    setIsOpen(true);
    setDrawerScreen("fees");
  }
  return (0, import_jsx_runtime103.jsxs)(Container, { animate: "fadein", flex: "column", gap: "lg", children: [isOpen && (0, import_jsx_runtime103.jsxs)(import_jsx_runtime103.Fragment, { children: [(0, import_jsx_runtime103.jsx)(DrawerOverlay, { ref: drawerOverlayRef }), (0, import_jsx_runtime103.jsx)(Drawer, { close: () => setIsOpen(false), ref: drawerRef, children: drawerScreen === "fees" && quoteQuery.data && (0, import_jsx_runtime103.jsxs)("div", { children: [(0, import_jsx_runtime103.jsx)(Text, { color: "primaryText", size: "lg", children: "Fees" }), (0, import_jsx_runtime103.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime103.jsx)(SwapFees, { quote: quoteQuery.data })] }) })] }), (0, import_jsx_runtime103.jsxs)(Container, { flex: "column", gap: "sm", children: [(0, import_jsx_runtime103.jsxs)(Container, { center: "y", flex: "row", gap: "xxs", children: [(0, import_jsx_runtime103.jsx)(Text, { size: "sm", children: "Pay with" }), fromToken && fromChain ? (0, import_jsx_runtime103.jsx)(TokenSymbol, { chain: fromChain, color: "secondaryText", size: "sm", token: fromToken }) : "crypto"] }), (0, import_jsx_runtime103.jsxs)("div", { children: [(0, import_jsx_runtime103.jsx)(PayWithCryptoQuoteInfo, { chain: fromChain, client, freezeChainAndTokenSelection: disableTokenSelection, isLoading: quoteQuery.isLoading && !sourceTokenAmount, onSelectToken: props.showFromTokenSelector, payerAccount: props.payer.account, swapRequired, token: fromToken, value: sourceTokenAmount || "" }), swapRequired && fromChain && fromToken && (0, import_jsx_runtime103.jsx)(EstimatedTimeAndFees, { estimatedSeconds: (_g = quoteQuery.data) == null ? void 0 : _g.swapDetails.estimated.durationSeconds, onViewFees: showFees, quoteIsLoading: quoteQuery.isLoading })] }), errorMsg && (0, import_jsx_runtime103.jsx)("div", { children: (0, import_jsx_runtime103.jsxs)("div", { children: [(0, import_jsx_runtime103.jsx)(Text, { center: true, color: "danger", multiline: true, size: "xs", children: errorMsg.title }), (0, import_jsx_runtime103.jsx)(Text, { center: true, multiline: true, size: "xs", children: errorMsg.message })] }) }), !errorMsg && isNotEnoughBalance && (0, import_jsx_runtime103.jsxs)("div", { children: [(0, import_jsx_runtime103.jsx)(Text, { center: true, color: "danger", multiline: true, size: "xs", children: "Insufficient Funds" }), (0, import_jsx_runtime103.jsx)(Text, { center: true, multiline: true, size: "xs", children: "Select another token or pay with card." })] })] }), isNotEnoughBalance || errorMsg ? (0, import_jsx_runtime103.jsx)(Button, { fullWidth: true, onClick: () => props.showFromTokenSelector(), variant: "accent", children: "Pay with another token" }) : (0, import_jsx_runtime103.jsx)(Button, { "data-disabled": disableContinue, disabled: disableContinue, fullWidth: true, gap: "xs", onClick: async () => {
    var _a2;
    if (!disableContinue) {
      if (((_a2 = props.payer.wallet.getChain()) == null ? void 0 : _a2.id) !== (fromChain == null ? void 0 : fromChain.id)) {
        await props.payer.wallet.switchChain(fromChain);
      }
      showSwapFlow();
      trackPayEvent({
        chainId: fromChain.id,
        client,
        event: "confirm_swap_quote",
        fromToken: isNativeToken(fromToken) ? void 0 : fromToken.address,
        toChainId: toChain.id,
        toToken: isNativeToken(toToken) ? void 0 : toToken.address,
        walletAddress: payer.account.address,
        walletType: payer.wallet.id
      });
    }
  }, variant: disableContinue ? "outline" : "accent", children: quoteQuery.isLoading ? (0, import_jsx_runtime103.jsxs)(import_jsx_runtime103.Fragment, { children: ["Getting price quote", (0, import_jsx_runtime103.jsx)(Spinner, { size: "sm" })] }) : "Continue" })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/TokenSelectorScreen.js
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
function TokenSelectorScreen(props) {
  var _a;
  const connectedWallets = useConnectedWallets();
  const activeAccount = useActiveAccount();
  const activeWallet = useActiveWallet();
  const chainInfo = useChainMetadata(props.toChain);
  const theme = useCustomTheme();
  const walletsAndBalances = useWalletsAndBalances({
    client: props.client,
    mode: props.mode,
    sourceSupportedTokens: props.sourceSupportedTokens || [],
    toChain: props.toChain,
    toToken: props.toToken
  });
  if (walletsAndBalances.isLoading || chainInfo.isLoading || !chainInfo.data || !props.sourceSupportedTokens) {
    return (0, import_jsx_runtime104.jsx)(LoadingScreen, {});
  }
  const filteredWallets = Array.from(((_a = walletsAndBalances.data) == null ? void 0 : _a.entries()) || []).filter(([w]) => {
    var _a2;
    return !((_a2 = props.hiddenWallets) == null ? void 0 : _a2.includes(w.id));
  }).filter(([, balances]) => {
    const hasEnoughBalance = balances.some((b) => b.balance.value > 0);
    return hasEnoughBalance;
  });
  return (0, import_jsx_runtime104.jsxs)(Container, { animate: "fadein", style: {
    minHeight: "200px"
  }, children: [filteredWallets.length === 0 ? (0, import_jsx_runtime104.jsx)(Container, { flex: "column", gap: "xs", py: "lg", children: (0, import_jsx_runtime104.jsxs)(Text, { center: true, color: "secondaryText", size: "xs", children: ["No suitable payment token found", (0, import_jsx_runtime104.jsx)("br", {}), "in connected wallets"] }) }) : (0, import_jsx_runtime104.jsxs)(Container, { flex: "column", gap: "xs", children: [(0, import_jsx_runtime104.jsx)(Text, { size: "sm", children: "Select payment token" }), (0, import_jsx_runtime104.jsx)(Spacer, { y: "xs" })] }), (0, import_jsx_runtime104.jsx)(Container, { scrollY: true, style: {
    maxHeight: "350px"
  }, children: (0, import_jsx_runtime104.jsxs)(Container, { flex: "column", gap: "sm", children: [filteredWallets.map(([w, balances]) => {
    const address = w.address;
    const wallet = connectedWallets.find((w2) => {
      var _a2;
      return ((_a2 = w2.getAccount()) == null ? void 0 : _a2.address) === address;
    });
    if (!wallet)
      return null;
    return (0, import_jsx_runtime104.jsx)(WalletRowWithBalances, { address, balances, client: props.client, onClick: (wallet2, token, chain) => {
      trackPayEvent({
        chainId: chain.id,
        client: props.client,
        event: "choose_payment_method_token",
        fromToken: isNativeToken(token) ? void 0 : token.address,
        toChainId: props.toChain.id,
        toToken: isNativeToken(props.toToken) ? void 0 : props.toToken.address,
        walletAddress: activeAccount == null ? void 0 : activeAccount.address,
        walletType: activeWallet == null ? void 0 : activeWallet.id
      });
      props.onSelectToken(wallet2, token, chain);
    }, wallet }, w.id);
  }), filteredWallets.length > 0 && (0, import_jsx_runtime104.jsx)(TextDivider, { text: "OR" }), (0, import_jsx_runtime104.jsx)(Button, { bg: "tertiaryBg", fullWidth: true, onClick: () => {
    trackPayEvent({
      client: props.client,
      event: "choose_payment_method_another_wallet",
      toChainId: props.toChain.id,
      toToken: isNativeToken(props.toToken) ? void 0 : props.toToken.address,
      walletAddress: activeAccount == null ? void 0 : activeAccount.address,
      walletType: activeWallet == null ? void 0 : activeWallet.id
    });
    props.onConnect();
  }, style: {
    border: `1px solid ${theme.colors.borderColor}`,
    padding: spacing.sm
  }, variant: "secondary", children: (0, import_jsx_runtime104.jsxs)(Container, { center: "y", color: "secondaryIconColor", expand: true, flex: "row", gap: "sm", children: [(0, import_jsx_runtime104.jsx)(OutlineWalletIcon, { size: iconSize.md }), (0, import_jsx_runtime104.jsx)(Text, { color: "primaryText", size: "sm", children: "Pay with another wallet" })] }) }), props.fiatSupported && (0, import_jsx_runtime104.jsx)(Button, { bg: "tertiaryBg", fullWidth: true, onClick: () => {
    trackPayEvent({
      client: props.client,
      event: "choose_payment_method_with_card",
      toChainId: props.toChain.id,
      toToken: isNativeToken(props.toToken) ? void 0 : props.toToken.address,
      walletAddress: activeAccount == null ? void 0 : activeAccount.address,
      walletType: activeWallet == null ? void 0 : activeWallet.id
    });
    props.onPayWithFiat();
  }, style: {
    border: `1px solid ${theme.colors.borderColor}`,
    padding: spacing.sm
  }, variant: "secondary", children: (0, import_jsx_runtime104.jsxs)(Container, { center: "y", color: "secondaryIconColor", expand: true, flex: "row", gap: "sm", children: [(0, import_jsx_runtime104.jsx)(CardStackIcon, { height: iconSize.md, width: iconSize.md }), (0, import_jsx_runtime104.jsx)(Text, { color: "primaryText", size: "sm", children: "Pay with card" })] }) })] }) })] });
}
function WalletRowWithBalances(props) {
  const theme = useCustomTheme();
  const displayedBalances = props.balances;
  const activeAccount = useActiveAccount();
  const { disconnect } = useDisconnect();
  const isActiveAccount = (activeAccount == null ? void 0 : activeAccount.address) === props.address;
  return (0, import_jsx_runtime104.jsxs)(Container, { flex: "column", style: {
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.lg
  }, children: [(0, import_jsx_runtime104.jsxs)(Container, { bg: "tertiaryBg", flex: "row", gap: "sm", style: {
    borderBottom: `1px solid ${theme.colors.borderColor}`,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    justifyContent: "space-between",
    padding: spacing.sm,
    paddingRight: spacing.xs
  }, children: [(0, import_jsx_runtime104.jsx)(WalletRow, { ...props }), !isActiveAccount && (0, import_jsx_runtime104.jsx)(Button, { onClick: () => disconnect(props.wallet), style: {
    color: theme.colors.secondaryText,
    padding: spacing.xxs
  }, variant: "ghost", children: (0, import_jsx_runtime104.jsx)(Cross2Icon, { height: iconSize.sm, width: iconSize.sm }) })] }), (0, import_jsx_runtime104.jsx)(Container, { flex: "column", children: props.balances.length > 0 ? displayedBalances.map((b, idx) => (0, import_jsx_runtime104.jsx)(TokenBalanceRow, { client: props.client, onClick: () => props.onClick(props.wallet, b.token, b.chain), style: {
    borderBottom: idx === displayedBalances.length - 1 ? "none" : `1px solid ${theme.colors.borderColor}`,
    borderBottomLeftRadius: idx === displayedBalances.length - 1 ? radius.lg : 0,
    borderBottomRightRadius: idx === displayedBalances.length - 1 ? radius.lg : 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }, tokenBalance: b, wallet: props.wallet }, `${b.token.address}-${b.chain.id}`)) : (0, import_jsx_runtime104.jsx)(Container, { style: { padding: spacing.sm }, children: (0, import_jsx_runtime104.jsx)(Text, { color: "secondaryText", size: "sm", children: "Insufficient Funds" }) }) })] });
}
function TokenBalanceRow(props) {
  const { tokenBalance, wallet, onClick, client, style } = props;
  const chainInfo = useChainName(tokenBalance.chain);
  return (0, import_jsx_runtime104.jsxs)(StyledButton2, { onClick: () => onClick(tokenBalance.token, wallet), style: {
    ...style,
    display: "flex",
    justifyContent: "space-between",
    minWidth: 0
    // Needed for text truncation to work
  }, variant: "secondary", children: [(0, import_jsx_runtime104.jsxs)(Container, { center: "y", flex: "row", gap: "sm", style: {
    flex: "1 1 50%",
    flexWrap: "nowrap",
    maxWidth: "50%",
    minWidth: 0,
    overflow: "hidden"
  }, children: [(0, import_jsx_runtime104.jsx)(TokenIcon, { chain: tokenBalance.chain, client, size: "md", token: tokenBalance.token }), (0, import_jsx_runtime104.jsxs)(Container, { flex: "column", gap: "4xs", style: { minWidth: 0 }, children: [(0, import_jsx_runtime104.jsx)(Text, { color: "primaryText", size: "xs", style: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, children: tokenBalance.token.symbol }), chainInfo && (0, import_jsx_runtime104.jsx)(Text, { size: "xs", style: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, children: chainInfo.name })] })] }), (0, import_jsx_runtime104.jsxs)(Container, { center: "y", color: "secondaryText", flex: "row", gap: "4xs", style: {
    flex: "1 1 50%",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    maxWidth: "50%",
    minWidth: 0
  }, children: [(0, import_jsx_runtime104.jsxs)(Container, { color: "secondaryText", flex: "column", gap: "4xs", style: {
    alignItems: "flex-end",
    minWidth: 0,
    overflow: "hidden"
  }, children: [(0, import_jsx_runtime104.jsx)(Text, { color: "primaryText", size: "xs", style: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, children: formatTokenBalance(tokenBalance.balance, true, 2) }), (0, import_jsx_runtime104.jsx)(FiatValue, { chain: tokenBalance.chain, client, size: "xs", token: tokenBalance.token, tokenAmount: tokenBalance.balance.displayValue })] }), (0, import_jsx_runtime104.jsx)(ChevronRightIcon, { height: iconSize.md, style: { flexShrink: 0 }, width: iconSize.md })] })] });
}
var StyledButton2 = newStyled(Button)((props) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      background: theme.colors.secondaryButtonBg,
      transform: "scale(1.01)"
    },
    background: "transparent",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: spacing.sm,
    justifyContent: "space-between",
    padding: spacing.sm,
    paddingRight: spacing.xs,
    transition: "background 200ms ease, transform 150ms ease",
    ...props.style
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/TransferFlow.js
var import_jsx_runtime106 = __toESM(require_jsx_runtime(), 1);
var import_react55 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/TransferConfirmationScreen.js
var import_jsx_runtime105 = __toESM(require_jsx_runtime(), 1);
var import_react54 = __toESM(require_react(), 1);
function TransferConfirmationScreen(props) {
  var _a;
  const { title, onBack, receiverAddress, client, payer, onDone, chain, token, tokenAmount, transactionMode, setTransactionHash, payOptions, paymentLinkId } = props;
  const [step, setStep] = (0, import_react54.useState)("transfer");
  const [status2, setStatus] = (0, import_react54.useState)({ id: "idle" });
  const transferQuery = useQuery({
    queryFn: async () => {
      const transferResponse = await getBuyWithCryptoTransfer({
        amount: tokenAmount,
        chainId: chain.id,
        client,
        feePayer: (payOptions == null ? void 0 : payOptions.mode) === "direct_payment" ? payOptions.paymentInfo.feePayer : void 0,
        fromAddress: payer.account.address,
        paymentLinkId,
        purchaseData: payOptions == null ? void 0 : payOptions.purchaseData,
        toAddress: receiverAddress,
        tokenAddress: isNativeToken(token) ? NATIVE_TOKEN_ADDRESS : token.address
      });
      return transferResponse;
    },
    queryKey: [
      "transfer",
      isNativeToken(token) ? NATIVE_TOKEN_ADDRESS : token.address,
      tokenAmount,
      receiverAddress,
      payer.account.address,
      payOptions == null ? void 0 : payOptions.purchaseData
    ],
    refetchInterval: 30 * 1e3
  });
  const uiErrorMessage = (0, import_react54.useMemo)(() => {
    if (step === "approve" && status2.id === "error" && status2.error) {
      if (status2.error.toLowerCase().includes("user rejected") || status2.error.toLowerCase().includes("user closed modal") || status2.error.toLowerCase().includes("user denied")) {
        return {
          message: "Your wallet rejected the approval request.",
          title: "Failed to Approve"
        };
      }
      if (status2.error.toLowerCase().includes("insufficient funds for gas")) {
        return {
          message: "You do not have enough native funds to approve the transaction.",
          title: "Insufficient Native Funds"
        };
      }
      return {
        message: "Your wallet failed to approve the transaction for an unknown reason. Please try again or contact support.",
        title: "Failed to Approve"
      };
    }
    if ((step === "transfer" || step === "execute") && status2.id === "error" && status2.error) {
      if (status2.error.toLowerCase().includes("user rejected") || status2.error.toLowerCase().includes("user closed modal") || status2.error.toLowerCase().includes("user denied")) {
        return {
          message: "Your wallet rejected the confirmation request.",
          title: "Failed to Confirm"
        };
      }
      if (status2.error.toLowerCase().includes("insufficient funds for gas")) {
        return {
          message: "You do not have enough native funds to confirm the transaction.",
          title: "Insufficient Native Funds"
        };
      }
      return {
        message: "Your wallet failed to confirm the transaction for an unknown reason. Please try again or contact support.",
        title: "Failed to Confirm"
      };
    }
    return void 0;
  }, [step, status2]);
  if (transferQuery.isLoading) {
    return (0, import_jsx_runtime105.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime105.jsx)(ModalHeader, { onBack, title }), (0, import_jsx_runtime105.jsxs)(Container, { center: "both", flex: "column", style: { minHeight: "300px" }, children: [(0, import_jsx_runtime105.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime105.jsx)(Spinner, { color: "secondaryText", size: "xl" }), (0, import_jsx_runtime105.jsx)(Spacer, { y: "xl" })] })] });
  }
  const transferFromAmountWithFees = ((_a = transferQuery.data) == null ? void 0 : _a.paymentToken.amount) || tokenAmount;
  return (0, import_jsx_runtime105.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime105.jsx)(ModalHeader, { onBack, title }), (0, import_jsx_runtime105.jsx)(Spacer, { y: "xl" }), transactionMode ? (0, import_jsx_runtime105.jsxs)(import_jsx_runtime105.Fragment, { children: [(0, import_jsx_runtime105.jsx)(StepBar, { currentStep: step === "transfer" ? 1 : 2, steps: 2 }), (0, import_jsx_runtime105.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime105.jsx)(Text, { size: "sm", children: step === "transfer" ? "Step 1 of 2 - Transfer funds" : "Step 2 of 2 - Finalize transaction" }), (0, import_jsx_runtime105.jsx)(Spacer, { y: "md" })] }) : (0, import_jsx_runtime105.jsxs)(import_jsx_runtime105.Fragment, { children: [(0, import_jsx_runtime105.jsx)(Text, { size: "sm", children: "Confirm payment" }), (0, import_jsx_runtime105.jsx)(Spacer, { y: "md" })] }), (0, import_jsx_runtime105.jsx)(SwapSummary, { client, fromAmount: transactionMode ? tokenAmount : transferFromAmountWithFees, fromChain: chain, fromToken: token, receiver: receiverAddress, sender: payer.account.address, toAmount: tokenAmount, toChain: chain, toToken: token }), (0, import_jsx_runtime105.jsx)(Spacer, { y: "lg" }), transactionMode && (0, import_jsx_runtime105.jsxs)(import_jsx_runtime105.Fragment, { children: [(0, import_jsx_runtime105.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime105.jsxs)(Container, { center: "y", color: "accentText", flex: "row", gap: "sm", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime105.jsx)(Step, { isActive: step === "transfer", isDone: step === "execute", label: step === "transfer" ? "Transfer" : "Done" }), (0, import_jsx_runtime105.jsx)(ConnectorLine, {}), (0, import_jsx_runtime105.jsx)(Step, { isActive: step === "execute", isDone: false, label: "Finalize" })] }), (0, import_jsx_runtime105.jsx)(Spacer, { y: "lg" })] }), uiErrorMessage && (0, import_jsx_runtime105.jsxs)(import_jsx_runtime105.Fragment, { children: [(0, import_jsx_runtime105.jsx)(ErrorText, { message: uiErrorMessage.message, title: uiErrorMessage.title }), (0, import_jsx_runtime105.jsx)(Spacer, { y: "md" })] }), !transactionMode && step === "execute" && status2.id === "done" && (0, import_jsx_runtime105.jsxs)(import_jsx_runtime105.Fragment, { children: [(0, import_jsx_runtime105.jsxs)(Container, { center: "both", color: "success", flex: "row", gap: "xs", children: [(0, import_jsx_runtime105.jsx)(CheckCircledIcon, { height: iconSize.sm, width: iconSize.sm }), (0, import_jsx_runtime105.jsx)(Text, { color: "success", size: "sm", children: "Payment completed" })] }), (0, import_jsx_runtime105.jsx)(Spacer, { y: "md" })] }), payer.chain.id !== chain.id ? (0, import_jsx_runtime105.jsx)(SwitchNetworkButton2, { fullWidth: true, switchChain: async () => {
    await props.payer.wallet.switchChain(chain);
  }, variant: "accent" }) : (0, import_jsx_runtime105.jsxs)(Button, { disabled: status2.id === "pending", fullWidth: true, gap: "xs", onClick: async () => {
    var _a2, _b;
    if (step === "execute") {
      onDone();
      return;
    }
    try {
      setStatus({ id: "pending" });
      if (transactionMode) {
        const transaction = isNativeToken(token) ? prepareTransaction({
          chain,
          client,
          to: receiverAddress,
          value: toWei(tokenAmount)
        }) : transfer2({
          amount: tokenAmount,
          contract: getContract({
            address: token.address,
            chain,
            client
          }),
          to: receiverAddress
        });
        const [txResult, tokenMetadata] = await Promise.all([
          sendAndConfirmTransaction({
            account: props.payer.account,
            transaction
          }),
          getCurrencyMetadata({
            contract: getContract({
              address: isNativeToken(token) ? NATIVE_TOKEN_ADDRESS : token.address,
              chain,
              client
            })
          })
        ]);
        trackPayEvent({
          client: props.client,
          event: "transfer_confirmation_success_transaction_mode",
          toChainId: chain.id,
          toToken: isNativeToken(token) ? void 0 : token.address,
          walletAddress: payer.account.address,
          walletType: payer.wallet.id
        });
        (_a2 = props.onSuccess) == null ? void 0 : _a2.call(props, transferBuyWithCryptoQuote({
          chain,
          fromAddress: payer.account.address,
          toAddress: receiverAddress,
          token,
          tokenAmount: transactionMode ? tokenAmount : transferFromAmountWithFees,
          tokenMetadata,
          transaction: txResult
        }));
        setStep("execute");
        setStatus({ id: "idle" });
      } else {
        const transferResponse = transferQuery.data;
        if (!transferResponse) {
          throw new Error("Transfer data not found");
        }
        if (transferResponse.approvalData) {
          const prevAllowance = await allowance({
            contract: getContract({
              address: transferResponse.approvalData.tokenAddress,
              chain: getCachedChain(transferResponse.approvalData.chainId),
              client
            }),
            owner: payer.account.address,
            spender: transferResponse.approvalData.spenderAddress
          });
          if (prevAllowance < BigInt(transferResponse.approvalData.amountWei)) {
            setStep("approve");
            trackPayEvent({
              client: props.client,
              event: "prompt_transfer_approval",
              toChainId: chain.id,
              toToken: isNativeToken(token) ? void 0 : token.address,
              walletAddress: payer.account.address,
              walletType: payer.wallet.id
            });
            const transaction2 = approve({
              amountWei: BigInt(transferResponse.approvalData.amountWei),
              contract: getContract({
                address: transferResponse.approvalData.tokenAddress,
                chain: getCachedChain(transferResponse.approvalData.chainId),
                client
              }),
              spender: transferResponse.approvalData.spenderAddress
            });
            await sendAndConfirmTransaction({
              account: props.payer.account,
              transaction: transaction2
            });
            trackPayEvent({
              client: props.client,
              event: "transfer_approval_success",
              toChainId: chain.id,
              toToken: isNativeToken(token) ? void 0 : token.address,
              walletAddress: payer.account.address,
              walletType: payer.wallet.id
            });
          }
        }
        trackPayEvent({
          client: props.client,
          event: "prompt_transfer_confirmation",
          toChainId: chain.id,
          toToken: isNativeToken(token) ? void 0 : token.address,
          walletAddress: payer.account.address,
          walletType: payer.wallet.id
        });
        setStep("transfer");
        const transaction = transferResponse.transactionRequest;
        const tx = await sendTransaction({
          account: props.payer.account,
          transaction
        });
        setTransactionHash(tx.transactionHash);
        setStatus({ id: "idle" });
        trackPayEvent({
          client: props.client,
          event: "transfer_confirmation_success",
          toChainId: chain.id,
          toToken: isNativeToken(token) ? void 0 : token.address,
          walletAddress: payer.account.address,
          walletType: payer.wallet.id
        });
      }
    } catch (e) {
      console.error(e);
      setStatus({
        error: "error" in e ? (_b = e.error) == null ? void 0 : _b.message : e == null ? void 0 : e.message,
        id: "error"
      });
    }
  }, variant: "accent", children: [step === "execute" && (status2.id === "done" ? "Done" : "Continue"), step === "transfer" && (status2.id === "pending" ? "Confirming" : "Confirm"), step === "approve" && (status2.id === "pending" ? "Approving" : "Approve"), status2.id === "pending" && (0, import_jsx_runtime105.jsx)(Spinner, { color: "accentButtonText", size: "sm" })] })] });
}
function transferBuyWithCryptoQuote(args) {
  const { token, chain, tokenMetadata, tokenAmount, fromAddress, toAddress, transaction } = args;
  return {
    fromAddress,
    quote: {
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      estimated: {
        durationSeconds: 0,
        feesUSDCents: 0,
        fromAmountUSDCents: 0,
        gasCostUSDCents: 0,
        slippageBPS: 0,
        toAmountMinUSDCents: 0,
        toAmountUSDCents: 0
      },
      fromAmount: tokenAmount,
      fromAmountWei: toWei(tokenAmount).toString(),
      fromToken: {
        chainId: chain.id,
        decimals: tokenMetadata.decimals,
        name: tokenMetadata.name,
        priceUSDCents: 0,
        symbol: tokenMetadata.symbol,
        tokenAddress: isNativeToken(token) ? NATIVE_TOKEN_ADDRESS : token.address
      },
      toAmount: tokenAmount,
      toAmountMin: tokenAmount,
      toAmountMinWei: toWei(tokenAmount).toString(),
      toAmountWei: toWei(tokenAmount).toString(),
      toToken: {
        chainId: chain.id,
        decimals: tokenMetadata.decimals,
        name: tokenMetadata.name,
        priceUSDCents: 0,
        symbol: tokenMetadata.symbol,
        tokenAddress: isNativeToken(token) ? NATIVE_TOKEN_ADDRESS : token.address
      }
    },
    source: {
      amount: tokenAmount,
      amountUSDCents: 0,
      amountWei: toWei(tokenAmount).toString(),
      completedAt: (/* @__PURE__ */ new Date()).toISOString(),
      token: {
        chainId: chain.id,
        decimals: tokenMetadata.decimals,
        name: tokenMetadata.name,
        priceUSDCents: 0,
        symbol: tokenMetadata.symbol,
        tokenAddress: isNativeToken(token) ? NATIVE_TOKEN_ADDRESS : token.address
      },
      transactionHash: transaction.transactionHash
    },
    status: "COMPLETED",
    subStatus: "SUCCESS",
    swapType: "TRANSFER",
    toAddress
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/TransferFlow.js
function TransferFlow(props) {
  const [transferTxHash, setTransferTxHash] = (0, import_react55.useState)();
  if (transferTxHash) {
    return (0, import_jsx_runtime106.jsx)(SwapStatusScreen, { client: props.client, fromChain: props.chain, isEmbed: props.isEmbed, onBack: props.onBack, onDone: props.onDone, onSuccess: props.onSuccess, onTryAgain: props.onTryAgain, quote: void 0, swapTxHash: transferTxHash, title: props.title, transactionMode: false });
  }
  return (0, import_jsx_runtime106.jsx)(TransferConfirmationScreen, { ...props, setTransactionHash: setTransferTxHash });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/TransactionModeScreen.js
var import_jsx_runtime107 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useBuyTxStates.js
var import_react56 = __toESM(require_react(), 1);
function useTransactionCostAndData(args) {
  const { transaction, account, supportedDestinations } = args;
  const [txQueryKey, setTxQueryKey] = (0, import_react56.useState)();
  (0, import_react56.useEffect)(() => {
    Promise.all([
      resolvePromisedValue(transaction.value),
      resolvePromisedValue(transaction.erc20Value),
      resolvePromisedValue(transaction.to),
      encode(transaction)
    ]).then(([value, erc20Value, to, data]) => {
      var _a;
      setTxQueryKey({
        data,
        erc20Currency: erc20Value == null ? void 0 : erc20Value.tokenAddress,
        erc20Value: (_a = erc20Value == null ? void 0 : erc20Value.amountWei) == null ? void 0 : _a.toString(),
        to,
        value: value == null ? void 0 : value.toString()
      });
    });
  }, [transaction]);
  return useQuery({
    enabled: !!transaction && !!txQueryKey,
    queryFn: async () => {
      var _a, _b, _c;
      if (!account) {
        throw new Error("No payer account found");
      }
      const erc20Value = await resolvePromisedValue(transaction.erc20Value);
      if (erc20Value) {
        const [tokenBalance, tokenMeta, gasCostWei2, chainMetadata2] = await Promise.all([
          getWalletBalance({
            address: account.address,
            chain: transaction.chain,
            client: transaction.client,
            tokenAddress: erc20Value.tokenAddress
          }),
          getCurrencyMetadata({
            contract: getContract({
              address: erc20Value.tokenAddress,
              chain: transaction.chain,
              client: transaction.client
            })
          }),
          getTransactionGasCost(transaction, account == null ? void 0 : account.address),
          getChainMetadata(transaction.chain)
        ]);
        const transactionValueWei2 = erc20Value.amountWei;
        const walletBalance2 = tokenBalance;
        const currency = {
          address: erc20Value.tokenAddress,
          icon: (_b = (_a = supportedDestinations.find((c) => c.chain.id === transaction.chain.id)) == null ? void 0 : _a.tokens.find((t) => t.address.toLowerCase() === erc20Value.tokenAddress.toLowerCase())) == null ? void 0 : _b.icon,
          name: tokenMeta.name,
          symbol: tokenMeta.symbol
        };
        return {
          chainMetadata: chainMetadata2,
          decimals: tokenMeta.decimals,
          gasCostWei: gasCostWei2,
          token: currency,
          transactionValueWei: transactionValueWei2,
          walletBalance: walletBalance2
        };
      }
      const [nativeWalletBalance, chainMetadata, gasCostWei] = await Promise.all([
        getWalletBalance({
          address: account.address,
          chain: transaction.chain,
          client: transaction.client
        }),
        getChainMetadata(transaction.chain),
        getTransactionGasCost(transaction, account == null ? void 0 : account.address)
      ]);
      const walletBalance = nativeWalletBalance;
      const transactionValueWei = await resolvePromisedValue(transaction.value) || 0n;
      return {
        chainMetadata,
        decimals: 18,
        gasCostWei,
        token: {
          address: NATIVE_TOKEN_ADDRESS,
          icon: (_c = chainMetadata.icon) == null ? void 0 : _c.url,
          name: chainMetadata.nativeCurrency.name,
          symbol: chainMetadata.nativeCurrency.symbol
        },
        transactionValueWei,
        walletBalance
      };
    },
    queryKey: [
      "transaction-cost",
      transaction.chain.id,
      account == null ? void 0 : account.address,
      txQueryKey
    ],
    refetchInterval: args.refetchIntervalMs || 3e4
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/TransactionModeScreen.js
function TransactionModeScreen(props) {
  var _a;
  const { payUiOptions, client, payerAccount, supportedDestinations, onContinue } = props;
  const { data: chainData, error: chainDataError, isLoading: chainDataLoading, refetch: chainDataRefetch } = useChainMetadata(payUiOptions.transaction.chain);
  const metadata = payUiOptions.metadata;
  const { data: transactionCostAndData, error: transactionCostAndDataError, isLoading: transactionCostAndDataLoading, refetch: transactionCostAndDataRefetch } = useTransactionCostAndData({
    account: payerAccount,
    supportedDestinations,
    transaction: payUiOptions.transaction
  });
  const theme = useCustomTheme();
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const sponsoredTransactionsEnabled = hasSponsoredTransactionsEnabled(activeWallet);
  const balanceQuery = useWalletBalance({
    address: activeAccount == null ? void 0 : activeAccount.address,
    chain: payUiOptions.transaction.chain,
    client: props.client,
    tokenAddress: isNativeToken((transactionCostAndData == null ? void 0 : transactionCostAndData.token) || NATIVE_TOKEN) ? void 0 : transactionCostAndData == null ? void 0 : transactionCostAndData.token.address
  }, {
    enabled: !!transactionCostAndData
  });
  if (transactionCostAndDataLoading || chainDataLoading) {
    return (0, import_jsx_runtime107.jsx)(LoadingScreen, {});
  }
  if (!activeAccount) {
    return (0, import_jsx_runtime107.jsx)(Container, { center: "both", flex: "row", fullHeight: true, style: {
      minHeight: "350px"
    }, children: (0, import_jsx_runtime107.jsxs)(Container, { animate: "fadein", children: [(0, import_jsx_runtime107.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime107.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime107.jsx)(OutlineWalletIcon, { size: iconSize["3xl"] }) }), (0, import_jsx_runtime107.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime107.jsx)(Text, { center: true, color: "primaryText", size: "md", children: "Please connect a wallet to continue" }), (0, import_jsx_runtime107.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime107.jsx)(Container, { center: "x", flex: "row", style: { width: "100%" }, children: (0, import_jsx_runtime107.jsx)(ConnectButton, { client, theme, ...props.connectOptions }) })] }) });
  }
  if (transactionCostAndDataError || chainDataError) {
    return (0, import_jsx_runtime107.jsx)(Container, { center: "both", flex: "row", fullHeight: true, style: {
      minHeight: "350px"
    }, children: (0, import_jsx_runtime107.jsx)(ErrorState, { onTryAgain: transactionCostAndDataError ? transactionCostAndDataRefetch : chainDataRefetch, title: (transactionCostAndDataError == null ? void 0 : transactionCostAndDataError.message) || (chainDataError == null ? void 0 : chainDataError.message) || "Something went wrong" }) });
  }
  if (!transactionCostAndData || !chainData) {
    return (0, import_jsx_runtime107.jsx)(LoadingScreen, {});
  }
  const insufficientFunds = balanceQuery.data && balanceQuery.data.value < transactionCostAndData.transactionValueWei;
  return (0, import_jsx_runtime107.jsxs)(Container, { px: "lg", children: [(0, import_jsx_runtime107.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime107.jsx)(ModalHeader, { title: (metadata == null ? void 0 : metadata.name) || "Transaction" }), (0, import_jsx_runtime107.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime107.jsxs)(Container, { children: [(metadata == null ? void 0 : metadata.image) ? (0, import_jsx_runtime107.jsx)(Img, { client, src: metadata == null ? void 0 : metadata.image, style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: spacing.md,
    width: "100%"
  } }) : activeAccount ? (0, import_jsx_runtime107.jsxs)(Container, { flex: "column", gap: "sm", children: [insufficientFunds && (0, import_jsx_runtime107.jsxs)("div", { children: [(0, import_jsx_runtime107.jsx)(Text, { center: true, color: "danger", multiline: true, size: "xs", children: "Insufficient Funds" }), (0, import_jsx_runtime107.jsx)(Text, { center: true, multiline: true, size: "xs", children: "Select another token or pay with card." })] }), (0, import_jsx_runtime107.jsxs)(Container, { flex: "row", style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: spacing.md,
    justifyContent: "space-between",
    marginBottom: spacing.sm,
    padding: spacing.sm
  }, children: [(0, import_jsx_runtime107.jsx)(WalletRow, { address: activeAccount == null ? void 0 : activeAccount.address, client, iconSize: "md" }), balanceQuery.data ? (0, import_jsx_runtime107.jsxs)(Container, { center: "y", flex: "row", gap: "3xs", children: [(0, import_jsx_runtime107.jsx)(Text, { color: "secondaryText", size: "xs", weight: 500, children: formatTokenBalance(balanceQuery.data, false) }), (0, import_jsx_runtime107.jsx)(TokenSymbol, { chain: payUiOptions.transaction.chain, color: "secondaryText", size: "xs", token: transactionCostAndData.token })] }) : (0, import_jsx_runtime107.jsx)(Skeleton, { height: fontSize.xs, width: "70px" })] })] }) : null, (0, import_jsx_runtime107.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime107.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime107.jsx)(Container, { expand: true, flex: "column", children: (0, import_jsx_runtime107.jsx)(Text, { color: "primaryText", size: "md", weight: 700, children: "Price" }) }), (0, import_jsx_runtime107.jsx)(Container, { expand: true, children: (0, import_jsx_runtime107.jsxs)(Container, { center: "y", flex: "row", gap: "xs", style: { justifyContent: "right" }, children: [(0, import_jsx_runtime107.jsx)(TokenIcon, { chain: payUiOptions.transaction.chain, client: props.client, size: "sm", token: transactionCostAndData.token }), (0, import_jsx_runtime107.jsxs)(Text, { color: "primaryText", size: "md", weight: 700, children: [String(formatNumber(Number(toTokens(transactionCostAndData.transactionValueWei, transactionCostAndData.decimals)), 6)), " ", transactionCostAndData.token.symbol] })] }) })] }), (0, import_jsx_runtime107.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime107.jsx)(Line, {}), (0, import_jsx_runtime107.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime107.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime107.jsx)(Container, { expand: true, flex: "column", children: (0, import_jsx_runtime107.jsx)(Text, { color: "secondaryText", size: "xs", children: "Gas Fees" }) }), (0, import_jsx_runtime107.jsx)(Container, { expand: true, children: (0, import_jsx_runtime107.jsx)(Container, { center: "y", flex: "row", gap: "xs", style: { justifyContent: "right" }, children: (0, import_jsx_runtime107.jsx)(Text, { color: sponsoredTransactionsEnabled ? "success" : "primaryText", size: "xs", children: sponsoredTransactionsEnabled ? "Sponsored" : `${String(formatNumber(Number(toTokens(transactionCostAndData.gasCostWei, chainData.nativeCurrency.decimals)), 6))} ${chainData.nativeCurrency.symbol}` }) }) })] }), (0, import_jsx_runtime107.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime107.jsxs)(Container, { flex: "row", children: [(0, import_jsx_runtime107.jsx)(Container, { expand: true, flex: "column", children: (0, import_jsx_runtime107.jsx)(Text, { color: "secondaryText", size: "xs", children: "Network" }) }), (0, import_jsx_runtime107.jsx)(Container, { expand: true, children: (0, import_jsx_runtime107.jsxs)(Container, { center: "y", flex: "row", gap: "xs", style: { justifyContent: "right" }, children: [(0, import_jsx_runtime107.jsx)(ChainIcon2, { chainIconUrl: (_a = chainData.icon) == null ? void 0 : _a.url, client: props.client, size: "xs" }), (0, import_jsx_runtime107.jsx)(Text, { color: "secondaryText", size: "xs", style: { textAlign: "right" }, children: chainData.name })] }) })] })] }), (0, import_jsx_runtime107.jsx)(Spacer, { y: "xl" }), payerAccount ? (0, import_jsx_runtime107.jsx)(Button, { fullWidth: true, onClick: () => {
    var _a2;
    let totalCostWei = insufficientFunds ? transactionCostAndData.transactionValueWei - (((_a2 = balanceQuery.data) == null ? void 0 : _a2.value) || 0n) : transactionCostAndData.transactionValueWei;
    if (transactionCostAndData.token.address === NATIVE_TOKEN_ADDRESS && !sponsoredTransactionsEnabled) {
      totalCostWei += transactionCostAndData.gasCostWei;
    }
    trackPayEvent({
      amountWei: totalCostWei.toString(),
      client,
      event: "choose_payment_method_transaction_mode",
      toChainId: payUiOptions.transaction.chain.id,
      toToken: transactionCostAndData.token.address,
      walletAddress: payerAccount.address,
      walletType: activeWallet == null ? void 0 : activeWallet.id
    });
    onContinue(toTokens(totalCostWei, transactionCostAndData.decimals), payUiOptions.transaction.chain, transactionCostAndData.token);
  }, variant: "accent", children: "Choose Payment Method" }) : (0, import_jsx_runtime107.jsx)("div", { children: (0, import_jsx_runtime107.jsx)(ConnectButton, { ...props.connectOptions, client, connectButton: {
    style: {
      width: "100%"
    }
  }, theme }) }), (0, import_jsx_runtime107.jsx)(Spacer, { y: "lg" }), payUiOptions.showThirdwebBranding !== false && (0, import_jsx_runtime107.jsxs)(import_jsx_runtime107.Fragment, { children: [(0, import_jsx_runtime107.jsx)(PoweredByThirdweb, { link: "https://playground.thirdweb.com/connect/pay?utm_source=ub_text" }), (0, import_jsx_runtime107.jsx)(Spacer, { y: "sm" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/usePayerSetup.js
var import_react57 = __toESM(require_react(), 1);
function usePayerSetup() {
  const wallet = useActiveWallet();
  const account = useActiveAccount();
  const activeChain = useActiveWalletChain();
  const [_payer, setPayer] = (0, import_react57.useState)();
  (0, import_react57.useEffect)(() => {
    const wallet2 = _payer == null ? void 0 : _payer.wallet;
    function update() {
      if (!wallet2) {
        setPayer(void 0);
        return;
      }
      const account2 = wallet2.getAccount();
      const chain = wallet2.getChain();
      if (account2 && chain) {
        setPayer({
          account: account2,
          chain,
          wallet: wallet2
        });
      } else {
        setPayer(void 0);
      }
    }
    if (wallet2) {
      const unsubChainChanged = wallet2.subscribe("chainChanged", update);
      const unsubAccountChanged = wallet2.subscribe("accountChanged", update);
      return () => {
        unsubChainChanged();
        unsubAccountChanged();
      };
    }
    return void 0;
  }, [_payer]);
  const initialPayer = account && activeChain && wallet ? { account, chain: activeChain, wallet } : void 0;
  const payer = _payer || initialPayer;
  return {
    payer,
    setPayer
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/BuyScreen.js
function BuyScreen2(props) {
  const isTestMode = props.payOptions.buyWithCrypto ? props.payOptions.buyWithCrypto.testMode : void 0;
  const supportedDestinationsQuery = useBuySupportedDestinations(props.client, isTestMode);
  if (supportedDestinationsQuery.isError) {
    return (0, import_jsx_runtime108.jsx)(Container, { center: "both", flex: "row", fullHeight: true, style: {
      minHeight: "350px"
    }, children: (0, import_jsx_runtime108.jsx)(ErrorState, { onTryAgain: supportedDestinationsQuery.refetch, title: "Something went wrong" }) });
  }
  if (!supportedDestinationsQuery.data) {
    return (0, import_jsx_runtime108.jsx)(LoadingScreen, {});
  }
  const supportedDestinations = props.supportedTokens ? Object.entries(props.supportedTokens).map(([chainId, tokens2]) => ({
    chain: getCachedChain(Number.parseInt(chainId)),
    tokens: tokens2.map((t) => ({
      ...t,
      buyWithCryptoEnabled: true,
      buyWithFiatEnabled: true
    }))
  })) : supportedDestinationsQuery.data;
  return (0, import_jsx_runtime108.jsx)(BuyScreenContent, { ...props, supportedDestinations });
}
function BuyScreenContent(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const { client, supportedDestinations, connectLocale, payOptions } = props;
  const activeAccount = useActiveAccount();
  const { payer, setPayer } = usePayerSetup();
  const [screen, setScreen] = (0, import_react58.useState)({
    id: "main"
  });
  const { tokenAmount, setTokenAmount, toChain, setToChain, deferredTokenAmount, toToken, setToToken } = useToTokenSelectionStates({
    payOptions,
    supportedDestinations
  });
  const [hasEditedAmount, setHasEditedAmount] = (0, import_react58.useState)(false);
  const onDone = (0, import_react58.useCallback)(() => {
    setScreen({ id: "main" });
    props.onDone();
  }, [props.onDone]);
  const supportedSourcesQuery = useBuySupportedSources({
    client: props.client,
    destinationChainId: toChain.id,
    destinationTokenAddress: isNativeToken(toToken) ? NATIVE_TOKEN_ADDRESS : toToken.address
  });
  const destinationSupportedTokens = (0, import_react58.useMemo)(() => {
    return createSupportedTokens(supportedDestinations, payOptions, props.supportedTokens);
  }, [props.supportedTokens, supportedDestinations, payOptions]);
  const sourceSupportedTokens = (0, import_react58.useMemo)(() => {
    if (!supportedSourcesQuery.data) {
      return void 0;
    }
    const supportedSources = supportedSourcesQuery.data;
    return createSupportedTokens(supportedSources, payOptions, props.supportedTokens);
  }, [props.supportedTokens, supportedSourcesQuery.data, payOptions]);
  useWalletsAndBalances({
    client: props.client,
    mode: payOptions.mode,
    sourceSupportedTokens: sourceSupportedTokens || [],
    toChain,
    toToken
  });
  const { fromChain, setFromChain, fromToken, setFromToken } = useFromTokenSelectionStates({
    payOptions,
    supportedSources: supportedSourcesQuery.data || []
  });
  const { selectedCurrency, setSelectedCurrency } = useFiatCurrencySelectionStates({
    payOptions
  });
  const enabledPaymentMethods = useEnabledPaymentMethods({
    payOptions: props.payOptions,
    supportedDestinations: props.supportedDestinations,
    toChain,
    toToken
  });
  const payDisabled = enabledPaymentMethods.buyWithCryptoEnabled === false && enabledPaymentMethods.buyWithFiatEnabled === false;
  const queryClient = useQueryClient();
  const onSwapSuccess = (0, import_react58.useCallback)((_status) => {
    var _a2, _b2;
    (_b2 = (_a2 = props.payOptions).onPurchaseSuccess) == null ? void 0 : _b2.call(_a2, {
      status: _status,
      type: "crypto"
    });
    invalidateWalletBalance(queryClient);
  }, [props.payOptions.onPurchaseSuccess, queryClient]);
  const onFiatSuccess = (0, import_react58.useCallback)((_status) => {
    var _a2, _b2;
    (_b2 = (_a2 = props.payOptions).onPurchaseSuccess) == null ? void 0 : _b2.call(_a2, {
      status: _status,
      type: "fiat"
    });
    invalidateWalletBalance(queryClient);
  }, [props.payOptions.onPurchaseSuccess, queryClient]);
  if (screen.id === "connect-payer-wallet") {
    return (0, import_jsx_runtime108.jsx)(WalletSwitcherConnectionScreen, { accountAbstraction: (_a = props.connectOptions) == null ? void 0 : _a.accountAbstraction, appMetadata: (_b = props.connectOptions) == null ? void 0 : _b.appMetadata, chain: toChain || ((_c = props.connectOptions) == null ? void 0 : _c.chain), chains: [toChain, ...((_d = props.connectOptions) == null ? void 0 : _d.chains) || []], client: props.client, connectLocale: props.connectLocale, hiddenWallets: props.hiddenWallets, isEmbed: props.isEmbed, onBack: () => setScreen(screen.backScreen), onSelect: (w) => {
      const account = w.getAccount();
      const chain = w.getChain();
      if (w && account && chain) {
        setPayer({
          account,
          chain,
          wallet: w
        });
      }
    }, recommendedWallets: (_e = props.connectOptions) == null ? void 0 : _e.recommendedWallets, showAllWallets: ((_f = props.connectOptions) == null ? void 0 : _f.showAllWallets) === void 0 ? true : (_g = props.connectOptions) == null ? void 0 : _g.showAllWallets, walletConnect: (_h = props.connectOptions) == null ? void 0 : _h.walletConnect, wallets: (_j = (_i = props.connectOptions) == null ? void 0 : _i.wallets) == null ? void 0 : _j.filter((w) => w.id !== "inApp") });
  }
  if (screen.id === "swap-flow" && payer) {
    return (0, import_jsx_runtime108.jsx)(SwapFlow, { approvalAmount: screen.approvalAmount, buyWithCryptoQuote: screen.quote, client, isEmbed: props.isEmbed, isFiatFlow: false, onBack: () => {
      setScreen({
        id: "buy-with-crypto"
      });
    }, onDone, onSuccess: onSwapSuccess, onTryAgain: () => {
      setScreen({
        id: "buy-with-crypto"
      });
    }, payer, title: props.title, transactionMode: payOptions.mode === "transaction" });
  }
  if (screen.id === "fiat-flow" && payer) {
    const defaultRecipientAddress = (_l = (_k = props.payOptions) == null ? void 0 : _k.paymentInfo) == null ? void 0 : _l.sellerAddress;
    const receiverAddress = defaultRecipientAddress || payer.account.address;
    return (0, import_jsx_runtime108.jsx)(OnRampScreen, { client, isEmbed: props.isEmbed, onBack: () => {
      setScreen({
        id: "buy-with-fiat"
      });
    }, onDone, onSuccess: onFiatSuccess, payer, paymentLinkId: props.paymentLinkId, quote: screen.quote, receiverAddress, testMode: props.payOptions.buyWithFiat !== false && ((_m = props.payOptions.buyWithFiat) == null ? void 0 : _m.testMode) === true, theme: typeof props.theme === "string" ? props.theme : props.theme.type, title: props.title, transactionMode: payOptions.mode === "transaction" });
  }
  if (screen.id === "transfer-flow" && payer && activeAccount) {
    const goBack = () => setScreen({ id: "buy-with-crypto" });
    const defaultRecipientAddress = (_o = (_n = props.payOptions) == null ? void 0 : _n.paymentInfo) == null ? void 0 : _o.sellerAddress;
    const receiverAddress = defaultRecipientAddress || activeAccount.address;
    return (0, import_jsx_runtime108.jsx)(TransferFlow, { chain: toChain, client: props.client, isEmbed: props.isEmbed, onBack: goBack, onDone, onSuccess: onSwapSuccess, onTryAgain: () => {
      setScreen({
        id: "buy-with-crypto"
      });
    }, payer, paymentLinkId: props.paymentLinkId, payOptions, receiverAddress, title: props.title, token: toToken, tokenAmount, transactionMode: props.payOptions.mode === "transaction" });
  }
  if (screen.id === "select-currency") {
    const goBack = () => setScreen(screen.backScreen);
    return (0, import_jsx_runtime108.jsx)(CurrencySelection, { onBack: goBack, onSelect: (currency) => {
      goBack();
      setSelectedCurrency(currency);
    } });
  }
  if (screen.id === "select-to-token") {
    const chains = supportedDestinations.map((x) => x.chain);
    const goBack = () => setScreen(screen.backScreen);
    const allowEdits = (_p = payOptions == null ? void 0 : payOptions.prefillBuy) == null ? void 0 : _p.allowEdits;
    if ((allowEdits == null ? void 0 : allowEdits.token) === false) {
      return (0, import_jsx_runtime108.jsx)(ChainSelectionScreen, { chains, client: props.client, connectLocale: props.connectLocale, goBack, setChain: setToChain });
    }
    return (0, import_jsx_runtime108.jsx)(TokenSelector, { chain: toChain, chainSelection: (
      // hide chain selection if it's disabled
      (allowEdits == null ? void 0 : allowEdits.chain) !== false ? {
        chains,
        select: (c) => {
          setToChain(c);
        }
      } : void 0
    ), client, connectLocale, modalTitle: props.title, onBack: goBack, onTokenSelect: (tokenInfo) => {
      setToToken(tokenInfo);
      goBack();
    }, tokenList: (((toChain == null ? void 0 : toChain.id) ? destinationSupportedTokens[toChain.id] : void 0) || []).filter((x) => x.address.toLowerCase() !== NATIVE_TOKEN_ADDRESS.toLowerCase()) });
  }
  return (0, import_jsx_runtime108.jsx)(Container, { animate: "fadein", children: (0, import_jsx_runtime108.jsxs)("div", { children: [screen.id === "main" && (0, import_jsx_runtime108.jsx)(MainScreen, { client, connectOptions: props.connectOptions, enabledPaymentMethods, hasEditedAmount, onBack: props.onBack, onSelectBuyToken: () => setScreen({ backScreen: screen, id: "select-to-token" }), payerAccount: payer == null ? void 0 : payer.account, payOptions, setFromChain, setFromToken, setHasEditedAmount, setScreen, setToChain, setTokenAmount, setToToken, supportedDestinations, theme: props.theme, title: props.title, toChain, tokenAmount, toToken }), (screen.id === "select-payment-method" || screen.id === "buy-with-crypto" || screen.id === "buy-with-fiat" || screen.id === "select-from-token") && payer && (0, import_jsx_runtime108.jsxs)(TokenSelectedLayout, { client, disabled: "prefillBuy" in payOptions && ((_r = (_q = payOptions.prefillBuy) == null ? void 0 : _q.allowEdits) == null ? void 0 : _r.amount) === false || payOptions.mode !== "fund_wallet", onBack: () => {
    if ((screen.id === "buy-with-crypto" || screen.id === "buy-with-fiat") && enabledPaymentMethods.buyWithCryptoEnabled) {
      setScreen({
        backScreen: { id: "main" },
        id: "select-from-token"
      });
    } else if (screen.id === "select-from-token") {
      setScreen(screen.backScreen);
    } else {
      setScreen({ id: "main" });
    }
  }, selectedChain: toChain, selectedToken: toToken, setTokenAmount, title: props.title, tokenAmount, children: [screen.id === "buy-with-crypto" && activeAccount && (0, import_jsx_runtime108.jsx)(SwapScreenContent, {
    activeAccount,
    client,
    connectLocale,
    connectOptions: props.connectOptions,
    disableTokenSelection: payDisabled === true || payOptions.buyWithCrypto !== false && ((_u = (_t = (_s = payOptions.buyWithCrypto) == null ? void 0 : _s.prefillSource) == null ? void 0 : _t.allowEdits) == null ? void 0 : _u.chain) === false && ((_x = (_w = (_v = payOptions.buyWithCrypto) == null ? void 0 : _v.prefillSource) == null ? void 0 : _w.allowEdits) == null ? void 0 : _x.token) === false,
    fromChain,
    fromToken,
    isEmbed: props.isEmbed,
    onDone,
    payer,
    paymentLinkId: props.paymentLinkId,
    payOptions,
    setHasEditedAmount,
    setPayer,
    setScreen,
    setTokenAmount,
    // pass it even though we are passing payer, because payer might be different
    showFromTokenSelector: () => {
      setScreen({
        backScreen: screen,
        id: "select-from-token"
      });
    },
    toChain,
    tokenAmount: deferredTokenAmount,
    toToken
  }), screen.id === "buy-with-fiat" && (0, import_jsx_runtime108.jsx)(FiatScreenContent, { client, isEmbed: props.isEmbed, onDone, payer, paymentLinkId: props.paymentLinkId, payOptions, selectedCurrency, setHasEditedAmount, setScreen, setTokenAmount, showCurrencySelector: () => {
    setScreen({
      backScreen: screen,
      id: "select-currency"
    });
  }, theme: props.theme, toChain, tokenAmount: deferredTokenAmount, toToken }), screen.id === "select-from-token" && supportedSourcesQuery.data && sourceSupportedTokens && (0, import_jsx_runtime108.jsx)(TokenSelectorScreen, { client: props.client, fiatSupported: props.payOptions.buyWithFiat !== false, hiddenWallets: props.hiddenWallets, mode: payOptions.mode, onConnect: () => {
    setScreen({
      backScreen: screen,
      id: "connect-payer-wallet"
    });
  }, onPayWithFiat: () => {
    setScreen({
      id: "buy-with-fiat"
    });
  }, onSelectToken: (w, token, chain) => {
    const account = w.getAccount();
    if (account) {
      setPayer({
        account,
        chain,
        wallet: w
      });
      setFromToken(token);
      setFromChain(chain);
    }
    setScreen({ id: "buy-with-crypto" });
  }, sourceSupportedTokens, sourceTokens: sourceSupportedTokens, toChain, tokenAmount, toToken })] })] }) });
}
function SelectedTokenInfo(props) {
  const getWidth = () => {
    const amount = formatNumber(Number(props.tokenAmount), 6).toString();
    let chars = amount.replace(".", "").length;
    const hasDot = amount.includes(".");
    if (hasDot) {
      chars += 0.3;
    }
    return `calc(${`${Math.max(1, chars)}ch + 2px`})`;
  };
  return (0, import_jsx_runtime108.jsx)("div", { children: (0, import_jsx_runtime108.jsxs)(Container, { center: "y", flex: "row", gap: "sm", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime108.jsxs)(Container, { center: "y", flex: "row", gap: "xxs", children: [(0, import_jsx_runtime108.jsx)(Input, { "data-placeholder": props.tokenAmount === "", disabled: props.disabled, inputMode: "decimal", onChange: (e) => {
    let value = e.target.value;
    value = value.replace(",", ".");
    if (value.startsWith(".")) {
      value = `0${value}`;
    }
    if (value.length > 10) {
      return;
    }
    const numValue = Number(value);
    if (Number.isNaN(numValue)) {
      return;
    }
    if (value.startsWith("0") && !value.startsWith("0.")) {
      props.setTokenAmount(value.slice(1));
    } else {
      props.setTokenAmount(value);
    }
  }, onClick: (e) => {
    if (props.tokenAmount === "") {
      e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
    }
  }, pattern: "^[0-9]*[.,]?[0-9]*$", placeholder: "0", style: {
    border: "none",
    borderRadius: "0",
    boxShadow: "none",
    fontSize: fontSize.lg,
    fontWeight: 600,
    padding: "0",
    paddingBlock: "2px",
    textAlign: "left",
    width: getWidth()
  }, tabIndex: -1, type: "text", value: props.tokenAmount || "0", variant: "outline" }), (0, import_jsx_runtime108.jsxs)(Container, { center: "y", flex: "row", gap: "xxs", children: [(0, import_jsx_runtime108.jsx)(TokenSymbol, { chain: props.selectedChain, color: "secondaryText", size: "md", token: props.selectedToken }), (0, import_jsx_runtime108.jsx)(PayTokenIcon, { chain: props.selectedChain, client: props.client, size: "sm", token: props.selectedToken })] }), (0, import_jsx_runtime108.jsx)(FiatValue, { chain: props.selectedChain, client: props.client, size: "sm", token: props.selectedToken, tokenAmount: props.tokenAmount })] }), (0, import_jsx_runtime108.jsx)(ChainName, { chain: props.selectedChain, client: props.client, short: true, size: "sm" })] }) });
}
function MainScreen(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const { setTokenAmount, setToChain, setToToken, setFromChain, setFromToken, payerAccount, client, tokenAmount, payOptions, toToken, toChain, supportedDestinations, enabledPaymentMethods } = props;
  const { buyWithCryptoEnabled, buyWithFiatEnabled } = enabledPaymentMethods;
  const disableContinue = !tokenAmount;
  switch (payOptions.mode) {
    case "transaction": {
      return (0, import_jsx_runtime108.jsx)(TransactionModeScreen, { client, connectOptions: props.connectOptions, onContinue: (tokenAmount2, toChain2, toToken2) => {
        setTokenAmount(tokenAmount2);
        setToChain(toChain2);
        setFromChain(toChain2);
        setFromToken(toToken2);
        setToToken(toToken2);
        if (buyWithFiatEnabled && !buyWithCryptoEnabled) {
          props.setScreen({ id: "buy-with-fiat" });
        } else {
          props.setScreen({
            backScreen: { id: "main" },
            id: "select-from-token"
          });
        }
      }, payerAccount, payUiOptions: payOptions, supportedDestinations });
    }
    case "direct_payment": {
      return (0, import_jsx_runtime108.jsx)(DirectPaymentModeScreen, { client, connectOptions: props.connectOptions, onContinue: (tokenAmount2, toChain2, toToken2) => {
        setTokenAmount(tokenAmount2);
        setToChain(toChain2);
        setFromChain(toChain2);
        setFromToken(toToken2);
        setToToken(toToken2);
        if (buyWithFiatEnabled && !buyWithCryptoEnabled) {
          props.setScreen({ id: "buy-with-fiat" });
        } else {
          props.setScreen({
            backScreen: { id: "main" },
            id: "select-from-token"
          });
        }
      }, payerAccount, payUiOptions: payOptions, supportedDestinations });
    }
    default: {
      return (0, import_jsx_runtime108.jsxs)(Container, { px: "lg", children: [(0, import_jsx_runtime108.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime108.jsx)(ModalHeader, { onBack: props.onBack, title: props.title }), (0, import_jsx_runtime108.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime108.jsx)(BuyTokenInput, { chain: toChain, client: props.client, freezeAmount: ((_b = (_a = payOptions.prefillBuy) == null ? void 0 : _a.allowEdits) == null ? void 0 : _b.amount) === false, freezeChainAndToken: ((_d = (_c = payOptions.prefillBuy) == null ? void 0 : _c.allowEdits) == null ? void 0 : _d.chain) === false && ((_f = (_e = payOptions.prefillBuy) == null ? void 0 : _e.allowEdits) == null ? void 0 : _f.token) === false || payOptions.buyWithCrypto !== false && ((_i = (_h = (_g = payOptions.buyWithCrypto) == null ? void 0 : _g.prefillSource) == null ? void 0 : _h.allowEdits) == null ? void 0 : _i.token) === false && ((_l = (_k = (_j = payOptions.buyWithCrypto) == null ? void 0 : _j.prefillSource) == null ? void 0 : _k.allowEdits) == null ? void 0 : _l.chain) === false, onChange: async (value) => {
        props.setHasEditedAmount(true);
        setTokenAmount(value);
      }, onSelectToken: props.onSelectBuyToken, token: toToken, value: tokenAmount }), (0, import_jsx_runtime108.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime108.jsx)(Container, { flex: "column", gap: "sm", children: !payerAccount ? (0, import_jsx_runtime108.jsx)("div", { children: (0, import_jsx_runtime108.jsx)(ConnectButton, { ...props.connectOptions, client: props.client, connectButton: {
        style: {
          width: "100%"
        }
      }, theme: props.theme }) }) : (0, import_jsx_runtime108.jsx)(Button, { "data-disabled": disableContinue, disabled: disableContinue, fullWidth: true, onClick: () => {
        if (buyWithFiatEnabled && !buyWithCryptoEnabled) {
          props.setScreen({ id: "buy-with-fiat" });
        } else {
          props.setScreen({
            backScreen: { id: "main" },
            id: "select-from-token"
          });
        }
        trackPayEvent({
          client,
          event: "choose_payment_method_fund_wallet_mode",
          toChainId: toChain.id,
          toToken: isNativeToken(toToken) ? void 0 : toToken.address,
          walletAddress: payerAccount.address
        });
      }, variant: "accent", children: "Continue" }) }), (0, import_jsx_runtime108.jsx)(Spacer, { y: "lg" }), payOptions.showThirdwebBranding !== false && (0, import_jsx_runtime108.jsxs)(import_jsx_runtime108.Fragment, { children: [(0, import_jsx_runtime108.jsx)(PoweredByThirdweb, { link: "https://playground.thirdweb.com/connect/pay?utm_source=ub_text" }), (0, import_jsx_runtime108.jsx)(Spacer, { y: "sm" })] })] });
    }
  }
}
function TokenSelectedLayout(props) {
  return (0, import_jsx_runtime108.jsxs)(Container, { children: [(0, import_jsx_runtime108.jsx)(Container, { p: "lg", children: (0, import_jsx_runtime108.jsx)(ModalHeader, { onBack: props.onBack, title: props.title }) }), (0, import_jsx_runtime108.jsxs)(Container, { px: "lg", style: {
    paddingBottom: spacing.lg
  }, children: [(0, import_jsx_runtime108.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime108.jsx)(SelectedTokenInfo, { client: props.client, disabled: props.disabled, selectedChain: props.selectedChain, selectedToken: props.selectedToken, setTokenAmount: props.setTokenAmount, tokenAmount: props.tokenAmount }), (0, import_jsx_runtime108.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime108.jsx)(Line, {}), (0, import_jsx_runtime108.jsx)(Spacer, { y: "sm" }), props.children] })] });
}
function createSupportedTokens(data, payOptions, supportedTokensOverrides) {
  if (supportedTokensOverrides) {
    return supportedTokensOverrides;
  }
  const tokens2 = {};
  const isBuyWithFiatDisabled = payOptions.buyWithFiat === false;
  const isBuyWithCryptoDisabled = payOptions.buyWithCrypto === false;
  for (const x of data) {
    tokens2[x.chain.id] = x.tokens.filter((t) => {
      if (t.address === ZERO_ADDRESS) {
        return false;
      }
      if (t.buyWithCryptoEnabled === void 0 && t.buyWithFiatEnabled === void 0) {
        return true;
      }
      if (t.buyWithCryptoEnabled && t.buyWithFiatEnabled) {
        return true;
      }
      if (!t.buyWithCryptoEnabled && isBuyWithFiatDisabled) {
        return false;
      }
      if (!t.buyWithFiatEnabled && isBuyWithCryptoDisabled) {
        return false;
      }
      return true;
    });
  }
  return tokens2;
}
function ChainSelectionScreen(props) {
  return (0, import_jsx_runtime108.jsx)(NetworkSelectorContent, { chains: props.chains, client: props.client, closeModal: props.goBack, connectLocale: props.connectLocale, networkSelector: {
    renderChain(renderChainProps) {
      return (0, import_jsx_runtime108.jsx)(ChainButton, { chain: renderChainProps.chain, client: props.client, confirming: false, connectLocale: props.connectLocale, onClick: () => {
        props.setChain(renderChainProps.chain);
        props.goBack();
      }, switchingFailed: false });
    }
  }, onBack: props.goBack, showTabs: false });
}

export {
  AccountProvider,
  useSiweAuth,
  getFunctionId,
  useWaitForReceipt,
  useChainIconUrl,
  useChainExplorers,
  useChainMetadata,
  useChainsQuery,
  useBuyWithCryptoQuote,
  useBuyWithCryptoStatus,
  useBuyWithFiatQuote,
  useBuyWithFiatStatus,
  useActiveWalletChain,
  useActiveWalletConnectionStatus,
  useConnectedWallets,
  useAdminWallet,
  useSetActiveWalletConnectionStatus,
  useConnect,
  useDisconnect,
  invalidateWalletBalance,
  useSetActiveWallet,
  useSwitchActiveWalletChain,
  defaultTokens,
  getDefaultToken,
  trackPayEvent,
  getTokenBalance,
  SetRootElementContext,
  canFitWideModal,
  usePreloadWalletProviders,
  createConnectionManager,
  useAutoConnect,
  AutoConnect,
  DynamicHeight,
  Modal,
  getToken,
  formatNumber,
  useClipboard,
  CopyIcon2 as CopyIcon,
  fallbackChainIcon,
  AccountAddress,
  AccountAvatar,
  AccountBalance,
  Blobbie,
  AccountBlobbie,
  AccountName,
  ChainProvider,
  ChainIcon,
  ChainName2 as ChainName,
  CoinsIcon,
  getConnectLocale,
  useConnectLocale,
  useNetworkSwitcherModal,
  ChainName as ChainName2,
  shorterChainName,
  isNativeToken,
  TokenSymbol,
  getFiatCurrencyIcon,
  formatTokenBalance,
  formatTokenAmount,
  formatCurrencyAmount,
  ConnectModalContent,
  WalletSwitcherConnectionScreen,
  StepConnectorArrow,
  useProfiles,
  WalletRow,
  FiatValue,
  useTransactionCostAndData,
  BuyScreen2 as BuyScreen,
  useUnlinkProfile,
  MediaRenderer,
  useWalletDetailsModal,
  ConnectModal_default,
  ConnectButton
};
//# sourceMappingURL=chunk-YQSXLLCD.js.map
