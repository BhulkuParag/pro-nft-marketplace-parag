import {
  getListing
} from "./chunk-2T2L7JUW.js";
import {
  getContractMetadata
} from "./chunk-5ZVY7E4T.js";
import {
  AccountAddress,
  AccountAvatar,
  AccountBalance,
  AccountBlobbie,
  AccountName,
  AccountProvider,
  AutoConnect,
  Blobbie,
  BuyScreen,
  ChainIcon,
  ChainName,
  ChainName2,
  ChainProvider,
  CoinsIcon,
  ConnectButton,
  ConnectModalContent,
  ConnectModal_default,
  CopyIcon as CopyIcon2,
  DynamicHeight,
  FiatValue,
  MediaRenderer,
  Modal,
  SetRootElementContext,
  StepConnectorArrow,
  TokenSymbol,
  WalletRow,
  WalletSwitcherConnectionScreen,
  canFitWideModal,
  createConnectionManager,
  defaultTokens,
  fallbackChainIcon,
  formatCurrencyAmount,
  formatNumber,
  formatTokenAmount,
  formatTokenBalance,
  getConnectLocale,
  getDefaultToken,
  getFiatCurrencyIcon,
  getFunctionId,
  getToken,
  getTokenBalance,
  invalidateWalletBalance,
  isNativeToken,
  shorterChainName,
  trackPayEvent,
  useActiveWalletChain,
  useActiveWalletConnectionStatus,
  useAdminWallet,
  useAutoConnect,
  useBuyWithCryptoQuote,
  useBuyWithCryptoStatus,
  useBuyWithFiatQuote,
  useBuyWithFiatStatus,
  useChainExplorers,
  useChainIconUrl,
  useChainMetadata,
  useChainsQuery,
  useClipboard,
  useConnect,
  useConnectLocale,
  useConnectedWallets,
  useDisconnect,
  useNetworkSwitcherModal,
  usePreloadWalletProviders,
  useProfiles,
  useSetActiveWallet,
  useSetActiveWalletConnectionStatus,
  useSiweAuth,
  useSwitchActiveWalletChain,
  useTransactionCostAndData,
  useUnlinkProfile,
  useWaitForReceipt,
  useWalletDetailsModal
} from "./chunk-YQSXLLCD.js";
import {
  isERC1155,
  isERC721
} from "./chunk-ETTKCPT3.js";
import "./chunk-S2Y3R76M.js";
import "./chunk-PA42ET2J.js";
import "./chunk-TOBIHJ7G.js";
import "./chunk-WTFA45ER.js";
import {
  AccentFailIcon,
  ErrorState,
  PoweredByThirdweb,
  QRCode,
  getDefaultWallets
} from "./chunk-Y4FCGFBJ.js";
import "./chunk-EVRLKEF4.js";
import {
  LoadingScreen,
  modalMaxWidthCompact,
  modalMaxWidthWide,
  reservedScreens,
  useActiveAccount,
  useSetupScreen,
  wideModalMaxHeight
} from "./chunk-SJ2PI6CH.js";
import {
  Input,
  Spinner,
  WalletUIStatesProvider
} from "./chunk-JHTWP4U5.js";
import {
  linkProfile
} from "./chunk-GHDLIAUP.js";
import "./chunk-D3JLMCS4.js";
import {
  Button,
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  ConnectionManagerCtx,
  Container,
  CopyIcon,
  Cross1Icon,
  CrossCircledIcon,
  CustomThemeProvider,
  ExternalLinkIcon,
  Img,
  Line,
  ModalHeader,
  OutlineWalletIcon,
  PlusIcon,
  QueryClient,
  QueryClientProvider,
  Skeleton,
  Spacer,
  StyledButton,
  StyledDiv,
  Text,
  WalletImage,
  WalletProvider,
  darkTheme,
  fontSize,
  genericTokenIcon,
  getLastAuthProvider,
  getSocialIcon,
  getWalletBalance,
  iconSize,
  lightTheme,
  queryOptions,
  radius,
  replaceEqualDeep,
  spacing,
  useActiveWallet,
  useConnectionManager,
  useConnectionManagerCtx,
  useCustomTheme,
  useEnsAvatar,
  useEnsName,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
  useSocialProfiles,
  useWalletBalance,
  useWalletContext,
  useWalletIcon,
  useWalletImage,
  useWalletInfo
} from "./chunk-OPI7XW5K.js";
import {
  en_default
} from "./chunk-PBAVTQ4W.js";
import {
  getNFT
} from "./chunk-4K7EM46V.js";
import {
  getNFT as getNFT2
} from "./chunk-NTKQVYHO.js";
import "./chunk-7RMOJBQ3.js";
import "./chunk-ENFGUQ7C.js";
import "./chunk-VJFQPB47.js";
import "./chunk-AEQBTGBF.js";
import "./chunk-53G7QH6O.js";
import "./chunk-WE7GTWOF.js";
import "./chunk-7D6G3EL5.js";
import "./chunk-IXILO7AP.js";
import {
  isWalletConnect
} from "./chunk-3OY6EM6V.js";
import "./chunk-FZBIW4FA.js";
import "./chunk-XB34LHR5.js";
import {
  formatExplorerTxUrl
} from "./chunk-X4LMPBJA.js";
import {
  getWalletInfo
} from "./chunk-23JZQXRW.js";
import {
  getInjectedProvider
} from "./chunk-OZT5CELG.js";
import "./chunk-DCLPAO4I.js";
import {
  isInAppWallet
} from "./chunk-CUXYKA5K.js";
import {
  hasSponsoredTransactionsEnabled,
  isSmartWallet
} from "./chunk-SCLL75R7.js";
import "./chunk-2HHM4MRW.js";
import {
  once
} from "./chunk-XS3SQPWF.js";
import {
  isEcosystemWallet
} from "./chunk-OUUVSEDB.js";
import "./chunk-IFTE4LJM.js";
import "./chunk-LWVDNX4F.js";
import "./chunk-ZZUP7G4V.js";
import {
  ClientScopedStorage
} from "./chunk-CYVKJMZE.js";
import {
  webLocalStorage
} from "./chunk-HEWP63HK.js";
import "./chunk-KLFYT75S.js";
import {
  isCoinbaseSDKWallet
} from "./chunk-ZX53QXGD.js";
import "./chunk-44OJ64LI.js";
import "./chunk-7TFKVTFH.js";
import "./chunk-BSFH3SFE.js";
import "./chunk-2RRVHQYX.js";
import {
  isInsightEnabled
} from "./chunk-HDHHYE6C.js";
import "./chunk-3AOHHKCD.js";
import {
  name,
  symbol
} from "./chunk-ZG6EPXNA.js";
import "./chunk-6PR6325K.js";
import "./chunk-VJOHABJ4.js";
import "./chunk-6FLJU7W7.js";
import {
  getBuyWithCryptoHistory,
  getContractEvents,
  getPayBuyHistoryEndpoint,
  getPayBuyWithFiatHistoryEndpoint,
  isBaseTransactionOptions,
  simulateTransaction,
  watchContractEvents
} from "./chunk-VTXXEMYY.js";
import {
  getBuyWithCryptoQuote
} from "./chunk-4U5PUIC4.js";
import "./chunk-KJUYME5G.js";
import {
  sendAndConfirmTransaction
} from "./chunk-LUJKADEG.js";
import {
  getOwnedTokens
} from "./chunk-N6DSQFYO.js";
import "./chunk-KU7G4WMB.js";
import "./chunk-FVP7PTDA.js";
import "./chunk-VVRYDJAL.js";
import "./chunk-BSPXA375.js";
import {
  prepareContractCall
} from "./chunk-HEMRZHKU.js";
import "./chunk-VRHOYTMZ.js";
import {
  prepareTransaction
} from "./chunk-6J7DXZMD.js";
import "./chunk-EMWJKMEZ.js";
import {
  eth_blockNumber,
  waitForReceipt,
  watchBlockNumber
} from "./chunk-E2LANL2Y.js";
import "./chunk-4OCU6WGG.js";
import {
  sendTransaction
} from "./chunk-ACMOF3FM.js";
import "./chunk-PPBEOXQH.js";
import "./chunk-T2B5SAMX.js";
import {
  sendBatchTransaction
} from "./chunk-HBA3XICU.js";
import "./chunk-2GPFOFVJ.js";
import "./chunk-HDWEKPHM.js";
import {
  Buy_exports,
  Onramp_exports,
  Sell_exports,
  Transfer_exports,
  prepare,
  prepare2,
  quote,
  routes
} from "./chunk-RFFLYT44.js";
import {
  ApiError
} from "./chunk-QBAAWPM3.js";
import {
  decimals
} from "./chunk-73PJS7P3.js";
import "./chunk-R2IMRU36.js";
import {
  NATIVE_TOKEN_ADDRESS,
  isNativeTokenAddress
} from "./chunk-673YCYST.js";
import "./chunk-MWAIX6LF.js";
import "./chunk-EGFCSO5B.js";
import "./chunk-3YR3TNSC.js";
import "./chunk-A5CP6DX3.js";
import "./chunk-VQJYRYIP.js";
import "./chunk-SYRCOOVG.js";
import "./chunk-7RUSW4Y7.js";
import "./chunk-NB244MAJ.js";
import "./chunk-AGSXJS3R.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";
import {
  estimateGasCost,
  getTransactionGasCost
} from "./chunk-SD26YTCZ.js";
import {
  estimateGas,
  eth_getBlockByNumber
} from "./chunk-3DGGFYQ2.js";
import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import {
  isInsufficientFundsError,
  trackInsufficientFundsError
} from "./chunk-WBXICRL6.js";
import "./chunk-CZLU53MF.js";
import {
  isObjectWithKeys
} from "./chunk-3ZOYRTTJ.js";
import {
  resolveScheme
} from "./chunk-HRHEYRBD.js";
import {
  getContract
} from "./chunk-PG5X2BYF.js";
import {
  checksumAddress,
  getAddress,
  isAddress,
  shortenAddress,
  shortenHex
} from "./chunk-6WE3JIZ5.js";
import "./chunk-Z2NN3WTW.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
import {
  toTokens,
  toUnits
} from "./chunk-UY2SRO54.js";
import "./chunk-ADBXOI2Q.js";
import {
  encode
} from "./chunk-JJDFOOW3.js";
import "./chunk-QMJBBKA5.js";
import "./chunk-5KHHOMIG.js";
import "./chunk-MSG5POSL.js";
import "./chunk-IVVESS3J.js";
import {
  toFunctionSelector
} from "./chunk-DJWGHHK5.js";
import "./chunk-AHXBSVDN.js";
import "./chunk-7QWN2SRQ.js";
import "./chunk-637RNUYD.js";
import "./chunk-ZBHRR2VO.js";
import {
  stringify
} from "./chunk-LZWAEAXR.js";
import "./chunk-RKJ7S5H4.js";
import {
  randomBytesHex
} from "./chunk-YIVCHQGZ.js";
import {
  hexToBigInt,
  hexToNumber,
  numberToHex
} from "./chunk-AT6CAMHI.js";
import "./chunk-44GEKRHH.js";
import "./chunk-U2WFZAGU.js";
import "./chunk-2GSDSUQU.js";
import "./chunk-NP7PJWRI.js";
import "./chunk-JGXNTIIP.js";
import {
  defineChain,
  getCachedChain,
  getChainMetadata
} from "./chunk-CYZDLLAL.js";
import {
  withCache
} from "./chunk-Z5XIAL4H.js";
import {
  getClientFetch
} from "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-UQSP5VHN.js";
import {
  keyframes,
  newStyled
} from "./chunk-ERYK7KJM.js";
import {
  require_jsx_runtime
} from "./chunk-4VHZN6OL.js";
import "./chunk-HQ6ZTAWL.js";
import "./chunk-TJWAQMZD.js";
import {
  require_react
} from "./chunk-NQM6PSUW.js";
import {
  __toESM
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/react/core/hooks/contract/useContractEvents.js
var import_react = __toESM(require_react(), 1);
function useContractEvents(options) {
  const { contract, events, blockRange = 2e3, enabled = true, watch = true } = options;
  const latestBlockNumber = (0, import_react.useRef)(void 0);
  const queryClient = useQueryClient();
  const eventsKey = (0, import_react.useMemo)(() => (events == null ? void 0 : events.reduce((acc, curr) => {
    return `${acc}${curr.hash}_`;
  }, "")) || "__all__", [events]);
  const queryKey = (0, import_react.useMemo)(() => [contract.chain.id, contract.address, "logs", eventsKey], [contract.address, contract.chain, eventsKey]);
  const query = useQuery({
    enabled,
    queryFn: async () => {
      const rpcRequest = getRpcClient(contract);
      const currentBlockNumber = await eth_blockNumber(rpcRequest);
      latestBlockNumber.current = currentBlockNumber;
      const initialEvents = await getContractEvents({
        contract,
        events,
        fromBlock: currentBlockNumber - BigInt(blockRange)
      });
      return initialEvents;
    },
    queryKey
  });
  (0, import_react.useEffect)(() => {
    if (!enabled || !watch) {
      return;
    }
    return watchContractEvents({
      contract,
      events,
      latestBlockNumber: latestBlockNumber.current,
      onEvents: (newEvents) => {
        if (newEvents.length > 0 && newEvents[0]) {
          latestBlockNumber.current = newEvents[0].blockNumber;
        }
        queryClient.setQueryData(queryKey, (oldEvents = []) => [
          ...oldEvents,
          ...newEvents
        ]);
      }
    });
  }, [contract, enabled, events, queryClient, queryKey, watch]);
  return query;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/contract/useReadContract.js
function useReadContract(extensionOrOptions, options) {
  let queryKey;
  let queryFn;
  let queryOpts;
  if (typeof extensionOrOptions === "function") {
    if (!options) {
      throw new Error(`Missing second argument for "useReadContract(<extension>, <options>)" hook.`);
    }
    const { queryOptions: queryOptions2, contract, ...params } = options;
    queryOpts = queryOptions2;
    queryKey = [
      "readContract",
      contract.chain.id,
      contract.address,
      getFunctionId(extensionOrOptions),
      stringify(params)
    ];
    queryFn = () => extensionOrOptions({
      ...params,
      contract
    });
  }
  if ("method" in extensionOrOptions) {
    const { queryOptions: queryOptions2, ...tx } = extensionOrOptions;
    queryOpts = queryOptions2;
    queryKey = [
      "readContract",
      tx.contract.chain.id,
      tx.contract.address,
      tx.method,
      stringify(tx.params)
    ];
    queryFn = () => readContract(extensionOrOptions);
  }
  if (!queryKey || !queryFn) {
    throw new Error(`Invalid "useReadContract" options. Expected either a read extension or a transaction object.`);
  }
  return useQuery(queryOptions({
    queryFn,
    queryKey,
    ...queryOpts ?? {}
  }));
}

// node_modules/thirdweb/dist/esm/react/core/hooks/others/useInvalidateQueries.js
function useInvalidateContractQuery() {
  const queryClient = useQueryClient();
  return ({ chainId, contractAddress }) => {
    queryClient.invalidateQueries({
      queryKey: ["readContract", chainId, contractAddress]
    });
  };
}

// node_modules/thirdweb/dist/esm/pay/getBuyHistory.js
async function getBuyHistory(params) {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append("walletAddress", params.walletAddress);
    queryParams.append("start", params.start.toString());
    queryParams.append("count", params.count.toString());
    const queryString = queryParams.toString();
    const url = `${getPayBuyHistoryEndpoint()}?${queryString}`;
    const response = await getClientFetch(params.client)(url);
    if (!response.ok) {
      const error = await response.text().catch(() => null);
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}: ${error || "unknown error"}`);
    }
    const data = (await response.json()).result;
    return data;
  } catch (error) {
    throw new Error(`Fetch failed: ${error}`);
  }
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyHistory.js
function useBuyHistory(params, queryParams) {
  return useQuery({
    ...queryParams,
    enabled: !!params,
    queryFn: () => {
      if (!params) {
        throw new Error("params are required");
      }
      return getBuyHistory(params);
    },
    queryKey: ["getBuyHistory", params]
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithCryptoHistory.js
function useBuyWithCryptoHistory(params, queryParams) {
  return useQuery({
    ...queryParams,
    enabled: !!params,
    queryFn: () => {
      if (!params) {
        throw new Error("Swap params are required");
      }
      return getBuyWithCryptoHistory(params);
    },
    queryKey: ["getBuyWithCryptoHistory", params]
  });
}

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/getHistory.js
async function getBuyWithFiatHistory(params) {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append("walletAddress", params.walletAddress);
    queryParams.append("start", params.start.toString());
    queryParams.append("count", params.count.toString());
    const queryString = queryParams.toString();
    const url = `${getPayBuyWithFiatHistoryEndpoint()}?${queryString}`;
    const response = await getClientFetch(params.client)(url);
    if (!response.ok) {
      const error = await response.text().catch(() => null);
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}: ${error || "unknown error"}`);
    }
    const data = (await response.json()).result;
    return data;
  } catch (error) {
    throw new Error(`Fetch failed: ${error}`);
  }
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithFiatHistory.js
function useBuyWithFiatHistory(params, queryParams) {
  return useQuery({
    ...queryParams,
    enabled: !!params,
    queryFn: () => {
      if (!params) {
        throw new Error("params are required");
      }
      return getBuyWithFiatHistory(params);
    },
    queryKey: ["buyWithFiatHistory", params]
  });
}

// node_modules/thirdweb/dist/esm/pay/buyWithFiat/getPostOnRampQuote.js
async function getPostOnRampQuote({ client, buyWithFiatStatus, paymentLinkId }) {
  if (buyWithFiatStatus.status === "NOT_FOUND") {
    throw new Error("Invalid buyWithFiatStatus");
  }
  return getBuyWithCryptoQuote({
    client,
    // onramp always happens to fromAddress, and then swap is done from - fromAddress to toAddress
    fromAddress: buyWithFiatStatus.fromAddress,
    fromChainId: buyWithFiatStatus.quote.onRampToken.chainId,
    fromTokenAddress: buyWithFiatStatus.quote.onRampToken.tokenAddress,
    intentId: buyWithFiatStatus.intentId,
    paymentLinkId,
    toAddress: buyWithFiatStatus.toAddress,
    toAmount: buyWithFiatStatus.quote.estimatedToTokenAmount,
    toChainId: buyWithFiatStatus.quote.toToken.chainId,
    toTokenAddress: buyWithFiatStatus.quote.toToken.tokenAddress
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/usePostOnrampQuote.js
function usePostOnRampQuote(params, queryOptions2) {
  return useQuery({
    ...queryOptions2,
    enabled: !!params,
    queryFn: async () => {
      if (!params) {
        throw new Error("No params provided");
      }
      return getPostOnRampQuote(params);
    },
    queryKey: ["getPostOnRampQuote", params]
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/rpc/useBlockNumber.js
var import_react2 = __toESM(require_react(), 1);
function useBlockNumber(options) {
  const { client, chain, enabled = true, watch = true } = options;
  const queryClient = useQueryClient();
  const queryKey = (0, import_react2.useMemo)(() => [chain.id, "blockNumber"], [chain]);
  const query = useQuery({
    enabled,
    queryFn: async () => {
      const rpcRequest = getRpcClient({ chain, client });
      return await eth_blockNumber(rpcRequest);
    },
    // TODO: technically client should be part of the queryKey here...
    queryKey
  });
  (0, import_react2.useEffect)(() => {
    if (!enabled || !watch) {
      return;
    }
    return watchBlockNumber({
      chain,
      client,
      onNewBlockNumber: (newBlockNumber) => {
        queryClient.setQueryData(queryKey, newBlockNumber);
      }
    });
  }, [client, chain, enabled, queryClient, queryKey, watch]);
  return query.data;
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useEstimateGas.js
function useEstimateGas() {
  const account = useActiveAccount();
  return useMutation({
    mutationFn: (transaction) => estimateGas({ account, transaction })
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useEstimateGasCost.js
function useEstimateGasCost() {
  const account = useActiveAccount();
  return useMutation({
    mutationFn: (transaction) => estimateGasCost({ account, transaction })
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useSendAndConfirmTransaction.js
function useSendAndConfirmTransaction(config = {}) {
  const account = useActiveAccount();
  const { gasless } = config;
  return useMutation({
    mutationFn: async (transaction) => {
      if (!account) {
        throw new Error("No active account");
      }
      return await sendAndConfirmTransaction({
        account,
        gasless,
        transaction
      });
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useSendBatchTransaction.js
function useSendBatchTransaction() {
  const account = useActiveAccount();
  return useMutation({
    mutationFn: async (transactions) => {
      if (!account) {
        throw new Error("No active account");
      }
      return await sendBatchTransaction({
        account,
        transactions
      });
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useSimulateTransaction.js
function useSimulateTransaction() {
  return useMutation({
    mutationFn: (options) => simulateTransaction(options)
  });
}

// node_modules/thirdweb/dist/esm/react/core/errors/mapBridgeError.js
function mapBridgeError(e) {
  return e;
}
function isRetryable(code) {
  return code === "INTERNAL_SERVER_ERROR" || code === "UNKNOWN_ERROR";
}

// node_modules/thirdweb/dist/esm/react/core/hooks/useBridgeRoutes.js
function useBridgeRoutes(params) {
  const { enabled = true, ...routeParams } = params;
  return useQuery({
    enabled: enabled && !!routeParams.client,
    gcTime: 10 * 60 * 1e3,
    queryFn: () => routes(routeParams),
    queryKey: [
      "bridge-routes",
      {
        destinationChainId: routeParams.destinationChainId,
        destinationTokenAddress: routeParams.destinationTokenAddress,
        limit: routeParams.limit,
        maxSteps: routeParams.maxSteps,
        offset: routeParams.offset,
        originChainId: routeParams.originChainId,
        originTokenAddress: routeParams.originTokenAddress,
        sortBy: routeParams.sortBy
      }
    ],
    // 5 minutes - routes are relatively stable
    retry: (failureCount, error) => {
      if (error instanceof ApiError) {
        const bridgeError = mapBridgeError(error);
        if (bridgeError.statusCode && bridgeError.statusCode >= 400 && bridgeError.statusCode < 500) {
          return false;
        }
      }
      return failureCount < 3;
    },
    // 10 minutes garbage collection
    retryDelay: (attemptIndex) => Math.min(1e3 * 2 ** attemptIndex, 3e4),
    staleTime: 5 * 60 * 1e3
    // Exponential backoff, max 30s
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useAuthToken.js
function useAuthToken() {
  var _a;
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  if ((activeWallet == null ? void 0 : activeWallet.getAuthToken) && activeAccount && activeAccount.address === ((_a = activeWallet.getAccount()) == null ? void 0 : _a.address)) {
    return activeWallet.getAuthToken();
  }
  return null;
}

// node_modules/thirdweb/dist/esm/wallets/eip5792/get-capabilities.js
async function getCapabilities({ wallet, chainId }) {
  const account = wallet.getAccount();
  if (!account) {
    return {
      message: `Can't get capabilities, no account connected for wallet: ${wallet.id}`
    };
  }
  if (wallet.id === "smart") {
    const { smartWalletGetCapabilities } = await import("./smart-wallet-capabilities-DSOOXQA2.js");
    return smartWalletGetCapabilities({ wallet });
  }
  if (isInAppWallet(wallet)) {
    const { inAppWalletGetCapabilities } = await import("./in-app-wallet-capabilities-W574F6PI.js");
    return inAppWalletGetCapabilities({ wallet });
  }
  if (isWalletConnect(wallet)) {
    return {
      message: "getCapabilities is not yet supported with Wallet Connect"
    };
  }
  let provider;
  if (isCoinbaseSDKWallet(wallet)) {
    const { getCoinbaseWebProvider } = await import("./coinbase-web-ASSCYQ4P.js");
    const config = wallet.getConfig();
    provider = await getCoinbaseWebProvider(config);
  } else {
    provider = getInjectedProvider(wallet.id);
  }
  try {
    const result = await provider.request({
      method: "wallet_getCapabilities",
      params: [getAddress(account.address)]
    });
    const capabilities = {};
    for (const [chainId2, capabilities_] of Object.entries(result)) {
      capabilities[Number(chainId2)] = {};
      const capabilitiesCopy = {};
      for (const [key, value] of Object.entries(capabilities_)) {
        capabilitiesCopy[key] = value;
      }
      capabilities[Number(chainId2)] = capabilitiesCopy;
    }
    return typeof chainId === "number" ? capabilities[chainId] : capabilities;
  } catch (error) {
    if (/unsupport|not support|not available/i.test(error.message)) {
      return {
        message: `${wallet.id} does not support wallet_getCapabilities, reach out to them directly to request EIP-5792 support.`
      };
    }
    throw error;
  }
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useCapabilities.js
function useCapabilities(options) {
  const wallet = useActiveWallet();
  return useQuery({
    queryFn: async () => {
      if (!wallet) {
        return {
          message: "Can't get capabilities, no wallet connected"
        };
      }
      return getCapabilities({
        chainId: options == null ? void 0 : options.chainId,
        wallet
      });
    },
    queryKey: ["getCapabilities", wallet == null ? void 0 : wallet.id, options == null ? void 0 : options.chainId],
    retry: false,
    ...options == null ? void 0 : options.queryOptions
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useIsAutoConnecting.js
var import_react3 = __toESM(require_react(), 1);
function useIsAutoConnecting() {
  const manager = useConnectionManagerCtx("useIsAutoConnecting");
  const store = manager.isAutoConnecting;
  return (0, import_react3.useSyncExternalStore)(store.subscribe, store.getValue, store.getValue);
}

// node_modules/thirdweb/dist/esm/wallets/eip5792/send-calls.js
async function sendCalls(options) {
  const { wallet, calls, capabilities, version = "2.0.0", chain = wallet.getChain() } = options;
  if (!chain) {
    throw new Error(`Cannot send calls, no active chain found for wallet: ${wallet.id}`);
  }
  const account = wallet.getAccount();
  if (!account) {
    throw new Error(`Cannot send calls, no account connected for wallet: ${wallet.id}`);
  }
  const firstCall = options.calls[0];
  if (!firstCall) {
    throw new Error("No calls to send");
  }
  const client = firstCall.client;
  if (isSmartWallet(wallet) || isInAppWallet(wallet)) {
    const { inAppWalletSendCalls } = await import("./in-app-wallet-calls-YVB6UY2I.js");
    const id = await inAppWalletSendCalls({ account, calls });
    return { chain, client, id, wallet };
  }
  const preparedCalls = await Promise.all(calls.map(async (call) => {
    const { to, value } = call;
    if (to === void 0 && call.data === void 0) {
      throw new Error("Cannot send call, `to` or `data` must be provided.");
    }
    const [_to, _data, _value] = await Promise.all([
      resolvePromisedValue(to),
      encode(call),
      resolvePromisedValue(value)
    ]);
    return {
      data: _data,
      to: _to,
      value: typeof _value === "bigint" || typeof _value === "number" ? numberToHex(_value) : void 0
    };
  }));
  const injectedWalletCallParams = [
    {
      // see: https://eips.ethereum.org/EIPS/eip-5792#wallet_sendcalls
      atomicRequired: options.atomicRequired ?? false,
      calls: preparedCalls,
      capabilities,
      chainId: numberToHex(chain.id),
      from: getAddress(account.address),
      version
    }
  ];
  if (isWalletConnect(wallet)) {
    throw new Error("sendCalls is not yet supported for Wallet Connect");
  }
  let provider;
  if (isCoinbaseSDKWallet(wallet)) {
    const { getCoinbaseWebProvider } = await import("./coinbase-web-ASSCYQ4P.js");
    const config = wallet.getConfig();
    provider = await getCoinbaseWebProvider(config);
  } else {
    provider = getInjectedProvider(wallet.id);
  }
  try {
    const callId = await provider.request({
      method: "wallet_sendCalls",
      params: injectedWalletCallParams
      // The viem type definition is slightly different
    });
    if (typeof callId === "object" && "id" in callId) {
      return { chain, client, id: callId.id, wallet };
    }
    return { chain, client, id: callId, wallet };
  } catch (error) {
    if (/unsupport|not support/i.test(error.message)) {
      throw new Error(`${wallet.id} errored calling wallet_sendCalls, with error: ${error instanceof Error ? error.message : stringify(error)}`);
    }
    throw error;
  }
}

// node_modules/thirdweb/dist/esm/wallets/eip5792/get-calls-status.js
async function getCallsStatus({ wallet, client, id }) {
  const account = wallet.getAccount();
  if (!account) {
    throw new Error(`Failed to get call status, no account found for wallet ${wallet.id}`);
  }
  if (isSmartWallet(wallet) || isInAppWallet(wallet)) {
    const { inAppWalletGetCallsStatus } = await import("./in-app-wallet-calls-YVB6UY2I.js");
    return inAppWalletGetCallsStatus({ client, id, wallet });
  }
  if (isWalletConnect(wallet)) {
    throw new Error("getCallsStatus is not yet supported for Wallet Connect");
  }
  let provider;
  if (isCoinbaseSDKWallet(wallet)) {
    const { getCoinbaseWebProvider } = await import("./coinbase-web-ASSCYQ4P.js");
    const config = wallet.getConfig();
    provider = await getCoinbaseWebProvider(config);
  } else {
    provider = getInjectedProvider(wallet.id);
  }
  try {
    const { atomic = false, chainId, receipts, version = "2.0.0", ...response } = await provider.request({
      method: "wallet_getCallsStatus",
      params: [id]
    });
    const [status, statusCode] = (() => {
      const statusCode2 = response.status;
      if (statusCode2 >= 100 && statusCode2 < 200)
        return ["pending", statusCode2];
      if (statusCode2 >= 200 && statusCode2 < 300)
        return ["success", statusCode2];
      if (statusCode2 >= 300 && statusCode2 < 700)
        return ["failure", statusCode2];
      if (statusCode2 === "CONFIRMED")
        return ["success", 200];
      if (statusCode2 === "PENDING")
        return ["pending", 100];
      return [void 0, statusCode2];
    })();
    return {
      ...response,
      atomic,
      // @ts-expect-error: for backwards compatibility
      chainId: chainId ? hexToNumber(chainId) : void 0,
      receipts: (receipts == null ? void 0 : receipts.map((receipt) => ({
        ...receipt,
        blockNumber: hexToBigInt(receipt.blockNumber),
        gasUsed: hexToBigInt(receipt.gasUsed),
        status: receiptStatuses[receipt.status]
      }))) ?? [],
      status,
      statusCode,
      version
    };
  } catch (error) {
    if (/unsupport|not support/i.test(error.message)) {
      throw new Error(`${wallet.id} does not support wallet_getCallsStatus, reach out to them directly to request EIP-5792 support.`);
    }
    throw error;
  }
}
var receiptStatuses = {
  "0x0": "reverted",
  "0x1": "success"
};

// node_modules/thirdweb/dist/esm/wallets/eip5792/wait-for-calls-receipt.js
var DEFAULT_MAX_BLOCKS_WAIT_TIME = 100;
var map = /* @__PURE__ */ new Map();
function waitForCallsReceipt(options) {
  const { id, chain, wallet, client } = options;
  const chainId = chain.id;
  const key = `${chainId}:calls_${id}`;
  const maxBlocksWaitTime = options.maxBlocksWaitTime ?? DEFAULT_MAX_BLOCKS_WAIT_TIME;
  if (map.has(key)) {
    return map.get(key);
  }
  const promise = new Promise((resolve, reject) => {
    let blocksWaited = -1;
    const unwatch = watchBlockNumber({
      chain,
      client,
      onNewBlockNumber: async () => {
        blocksWaited++;
        if (blocksWaited >= maxBlocksWaitTime) {
          unwatch();
          reject(new Error(`Bundle not confirmed after ${maxBlocksWaitTime} blocks`));
          return;
        }
        try {
          const result = await getCallsStatus({
            client,
            id,
            wallet
          });
          if (result.status === "success" || result.status === "failure") {
            unwatch();
            resolve(result);
            return;
          }
        } catch {
        }
      }
    });
  }).finally(() => {
    map.delete(key);
  });
  map.set(key, promise);
  return promise;
}

// node_modules/thirdweb/dist/esm/wallets/eip5792/send-and-confirm-calls.js
async function sendAndConfirmCalls(options) {
  const sendCallsResult = await sendCalls(options);
  return waitForCallsReceipt({
    ...sendCallsResult,
    maxBlocksWaitTime: options.maxBlocksWaitTime
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSendAndConfirmCalls.js
function useSendAndConfirmCalls(args) {
  const activeWallet = useActiveWallet();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (options) => {
      const { wallet = activeWallet } = options;
      if (!wallet) {
        throw new Error("Failed to send transactions, no connected wallet found.");
      }
      return sendAndConfirmCalls({
        ...options,
        maxBlocksWaitTime: args == null ? void 0 : args.maxBlocksWaitTime,
        wallet
      });
    },
    onSettled: async (_result, _error, variables) => {
      var _a, _b, _c;
      const call = variables.calls[0];
      if (!call) {
        return;
      }
      const chain = ((_a = call.__contract) == null ? void 0 : _a.chain) || call.chain;
      for (const call2 of variables.calls) {
        queryClient.invalidateQueries({
          queryKey: [
            "readContract",
            ((_b = call2.__contract) == null ? void 0 : _b.chain.id) || call2.chain.id,
            ((_c = call2.__contract) == null ? void 0 : _c.address) || call2.to
          ]
        });
      }
      invalidateWalletBalance(queryClient, chain.id);
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useSendCalls.js
function useSendCalls() {
  const activeWallet = useActiveWallet();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (options) => {
      const { wallet = activeWallet } = options;
      const chain = wallet == null ? void 0 : wallet.getChain();
      if (!wallet || !chain) {
        throw new Error("Failed to send transactions, no connected wallet found.");
      }
      return sendCalls({ ...options, wallet });
    },
    onSettled: async (result, _error, variables) => {
      var _a;
      if (!result) {
        return;
      }
      const call = variables.calls[0];
      if (!call) {
        return;
      }
      const chain = ((_a = call.__contract) == null ? void 0 : _a.chain) || call.chain;
      waitForCallsReceipt(result).then(() => {
        var _a2, _b;
        for (const call2 of variables.calls) {
          queryClient.invalidateQueries({
            queryKey: [
              "readContract",
              ((_a2 = call2.__contract) == null ? void 0 : _a2.chain.id) || chain.id,
              ((_b = call2.__contract) == null ? void 0 : _b.address) || call2.to
            ]
          });
        }
        invalidateWalletBalance(queryClient, chain.id);
      }).catch((error) => {
        console.error("Failed to confirm sent bundle and invalidate queries", result, error);
        return void 0;
      });
    }
  });
}

// node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useWaitForCallsReceipt.js
function useWaitForCallsReceipt(args) {
  var _a;
  return useQuery({
    enabled: !!(args == null ? void 0 : args.id) && (((_a = args == null ? void 0 : args.queryOptions) == null ? void 0 : _a.enabled) ?? true),
    queryFn: async () => {
      if (!(args == null ? void 0 : args.id)) {
        throw new Error("No call result provided");
      }
      return waitForCallsReceipt({
        ...args,
        maxBlocksWaitTime: args.maxBlocksWaitTime
      });
    },
    queryKey: ["waitForCallsReceipt", args == null ? void 0 : args.id],
    retry: false
  });
}

// node_modules/thirdweb/dist/esm/react/core/utils/createQuery.js
var CONTRACT_QUERY_CACHE = /* @__PURE__ */ new WeakMap();
function createContractQuery(readCall) {
  if (CONTRACT_QUERY_CACHE.has(readCall)) {
    return CONTRACT_QUERY_CACHE.get(readCall);
  }
  function useRead(options) {
    const { contract, queryOptions: queryOptions2, ...params } = options;
    return useQuery({
      queryFn: () => readCall(options),
      queryKey: [
        "readContract",
        contract.chain.id,
        contract.address,
        getFunctionId(readCall),
        stringify(params)
      ],
      ...queryOptions2
    });
  }
  CONTRACT_QUERY_CACHE.set(readCall, useRead);
  return useRead;
}

// node_modules/thirdweb/dist/esm/react/web/hooks/transaction/useSendTransaction.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var import_react18 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/useSendTransaction.js
function useSendTransactionCore(args) {
  const { showPayModal, gasless, wallet, switchChain } = args;
  let _account = wallet == null ? void 0 : wallet.getAccount();
  return useMutation({
    mutationFn: async (tx) => {
      var _a;
      if (wallet && tx.chain.id !== ((_a = wallet.getChain()) == null ? void 0 : _a.id)) {
        await switchChain(tx.chain);
        _account = wallet.getAccount();
      }
      const account = _account;
      if (!account) {
        throw new Error("No active account");
      }
      if (!showPayModal) {
        trackPayEvent({
          chainId: tx.chain.id,
          client: tx.client,
          event: "pay_transaction_modal_disabled",
          walletAddress: account.address,
          walletType: wallet == null ? void 0 : wallet.id
        });
        return sendTransaction({
          account,
          gasless,
          transaction: tx
        });
      }
      return new Promise((resolve, reject) => {
        const sendTx = async () => {
          try {
            const res = await sendTransaction({
              account,
              gasless,
              transaction: tx
            });
            resolve(res);
          } catch (e) {
            if (isInsufficientFundsError(e)) {
              trackInsufficientFundsError({
                chainId: tx.chain.id,
                client: tx.client,
                contractAddress: await resolvePromisedValue(tx.to ?? void 0),
                error: e,
                transactionValue: await resolvePromisedValue(tx.value),
                walletAddress: account.address
              });
            }
            reject(e);
          }
        };
        (async () => {
          try {
            const [_nativeValue, _erc20Value] = await Promise.all([
              resolvePromisedValue(tx.value),
              resolvePromisedValue(tx.erc20Value)
            ]);
            const nativeValue = _nativeValue || 0n;
            const erc20Value = (_erc20Value == null ? void 0 : _erc20Value.amountWei) || 0n;
            const [nativeBalance, erc20Balance, gasCost] = await Promise.all([
              getWalletBalance({
                address: account.address,
                chain: tx.chain,
                client: tx.client
              }),
              (_erc20Value == null ? void 0 : _erc20Value.tokenAddress) ? getTokenBalance({
                account,
                chain: tx.chain,
                client: tx.client,
                tokenAddress: _erc20Value.tokenAddress
              }) : void 0,
              getTransactionGasCost(tx, account.address)
            ]);
            const gasSponsored = hasSponsoredTransactionsEnabled(wallet);
            const txGasCost = gasSponsored ? 0n : gasCost;
            const nativeCost = nativeValue + txGasCost;
            const shouldShowModal = erc20Value > 0n && erc20Balance && erc20Balance.value < erc20Value || nativeCost > 0n && nativeBalance.value < nativeCost;
            if (shouldShowModal) {
              const supportedDestinations = await routes({
                client: tx.client,
                destinationChainId: tx.chain.id,
                destinationTokenAddress: _erc20Value == null ? void 0 : _erc20Value.tokenAddress
              }).catch((err) => {
                trackPayEvent({
                  client: tx.client,
                  error: err == null ? void 0 : err.message,
                  event: "pay_transaction_modal_pay_api_error",
                  toChainId: tx.chain.id,
                  walletAddress: account.address,
                  walletType: wallet == null ? void 0 : wallet.id
                });
                return null;
              });
              if (!supportedDestinations || supportedDestinations.length === 0) {
                trackPayEvent({
                  client: tx.client,
                  error: JSON.stringify({
                    chain: tx.chain.id,
                    message: "chain/token not supported",
                    token: _erc20Value == null ? void 0 : _erc20Value.tokenAddress
                  }),
                  event: "pay_transaction_modal_chain_token_not_supported",
                  toChainId: tx.chain.id,
                  toToken: (_erc20Value == null ? void 0 : _erc20Value.tokenAddress) || void 0,
                  walletAddress: account.address,
                  walletType: wallet == null ? void 0 : wallet.id
                });
                showPayModal({
                  mode: "deposit",
                  rejectTx: reject,
                  resolveTx: resolve,
                  sendTx,
                  tx
                });
                return;
              }
              showPayModal({
                mode: "buy",
                rejectTx: reject,
                resolveTx: resolve,
                sendTx,
                tx
              });
            } else {
              trackPayEvent({
                client: tx.client,
                event: "pay_transaction_modal_has_enough_funds",
                toChainId: tx.chain.id,
                toToken: (_erc20Value == null ? void 0 : _erc20Value.tokenAddress) || void 0,
                walletAddress: account.address,
                walletType: wallet == null ? void 0 : wallet.id
              });
              sendTx();
            }
          } catch (e) {
            console.error("Failed to estimate cost", e);
            sendTx();
          }
        })();
      });
    }
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/TransactionModal.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var import_react17 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/adapters/WindowAdapter.js
var WebWindowAdapter = class {
  /**
   * Opens a URL in a new browser tab/window.
   *
   * @param url - The URL to open
   * @returns Promise that resolves when the operation is initiated
   */
  async open(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};
var webWindowAdapter = new WebWindowAdapter();

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/BridgeOrchestrator.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var import_react15 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/machines/paymentMachine.js
var import_react4 = __toESM(require_react(), 1);
function usePaymentMachine(adapters, mode = "fund_wallet") {
  const [currentState, setCurrentState] = (0, import_react4.useState)("init");
  const [context, setContext] = (0, import_react4.useState)({
    adapters,
    mode
  });
  const send = (0, import_react4.useCallback)((event) => {
    setCurrentState((state) => {
      setContext((ctx) => {
        switch (state) {
          case "init":
            if (event.type === "DESTINATION_CONFIRMED") {
              return {
                ...ctx,
                destinationAmount: event.destinationAmount,
                destinationToken: event.destinationToken,
                receiverAddress: event.receiverAddress
              };
            } else if (event.type === "ERROR_OCCURRED") {
              return {
                ...ctx,
                currentError: event.error,
                retryState: "init"
              };
            }
            break;
          case "methodSelection":
            if (event.type === "PAYMENT_METHOD_SELECTED") {
              return {
                ...ctx,
                quote: void 0,
                // reset quote when method changes
                selectedPaymentMethod: event.paymentMethod
              };
            } else if (event.type === "ERROR_OCCURRED") {
              return {
                ...ctx,
                currentError: event.error,
                retryState: "methodSelection"
              };
            }
            break;
          case "quote":
            if (event.type === "QUOTE_RECEIVED") {
              return {
                ...ctx,
                quote: event.quote,
                request: event.request
              };
            } else if (event.type === "ERROR_OCCURRED") {
              return {
                ...ctx,
                currentError: event.error,
                retryState: "quote"
              };
            }
            break;
          case "preview":
            if (event.type === "ERROR_OCCURRED") {
              return {
                ...ctx,
                currentError: event.error,
                retryState: "preview"
              };
            }
            break;
          case "execute":
            if (event.type === "EXECUTION_COMPLETE") {
              return {
                ...ctx,
                completedStatuses: event.completedStatuses
              };
            } else if (event.type === "ERROR_OCCURRED") {
              return {
                ...ctx,
                currentError: event.error,
                retryState: "execute"
              };
            }
            break;
          case "error":
            if (event.type === "RETRY" || event.type === "RESET") {
              return {
                ...ctx,
                currentError: void 0,
                retryState: void 0
              };
            }
            break;
          case "success":
            if (event.type === "RESET") {
              return {
                adapters: ctx.adapters,
                mode: ctx.mode
              };
            }
            break;
          case "post-buy-transaction":
            if (event.type === "RESET") {
              return {
                adapters: ctx.adapters,
                mode: ctx.mode
              };
            }
            break;
        }
        return ctx;
      });
      switch (state) {
        case "init":
          if (event.type === "DESTINATION_CONFIRMED")
            return "methodSelection";
          if (event.type === "ERROR_OCCURRED")
            return "error";
          break;
        case "methodSelection":
          if (event.type === "PAYMENT_METHOD_SELECTED")
            return "quote";
          if (event.type === "BACK")
            return "init";
          if (event.type === "ERROR_OCCURRED")
            return "error";
          break;
        case "quote":
          if (event.type === "QUOTE_RECEIVED")
            return "preview";
          if (event.type === "BACK")
            return "methodSelection";
          if (event.type === "ERROR_OCCURRED")
            return "error";
          break;
        case "preview":
          if (event.type === "ROUTE_CONFIRMED")
            return "execute";
          if (event.type === "BACK")
            return "methodSelection";
          if (event.type === "ERROR_OCCURRED")
            return "error";
          break;
        case "execute":
          if (event.type === "EXECUTION_COMPLETE")
            return "success";
          if (event.type === "BACK")
            return "preview";
          if (event.type === "ERROR_OCCURRED")
            return "error";
          break;
        case "success":
          if (event.type === "CONTINUE_TO_TRANSACTION")
            return "post-buy-transaction";
          if (event.type === "RESET")
            return "init";
          break;
        case "post-buy-transaction":
          if (event.type === "RESET")
            return "init";
          break;
        case "error":
          if (event.type === "RETRY") {
            return context.retryState ?? "init";
          }
          if (event.type === "RESET") {
            return "init";
          }
          break;
      }
      return state;
    });
  }, [context.retryState]);
  return [
    {
      context,
      value: currentState
    },
    send
  ];
}

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/ExecutingScreen.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);
function ExecutingTxScreen(props) {
  const sendTxCore = useSendTransaction({
    payModal: false
  });
  const [txHash, setTxHash] = (0, import_react5.useState)();
  const [txError, setTxError] = (0, import_react5.useState)();
  const chainExplorers = useChainExplorers(props.tx.chain);
  const [status, setStatus] = (0, import_react5.useState)("loading");
  const theme = useCustomTheme();
  const sendTx = (0, import_react5.useCallback)(async () => {
    setStatus("loading");
    setTxError(void 0);
    try {
      const txData = await sendTxCore.mutateAsync(props.tx);
      setTxHash(txData.transactionHash);
      props.onTxSent(txData);
      setStatus("sent");
    } catch (e) {
      console.error(e);
      setTxError(e);
      setStatus("failed");
    }
  }, [sendTxCore, props.tx, props.onTxSent]);
  const done = (0, import_react5.useRef)(false);
  (0, import_react5.useEffect)(() => {
    if (done.current) {
      return;
    }
    done.current = true;
    sendTx();
  }, [sendTx]);
  return (0, import_jsx_runtime.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime.jsx)(ModalHeader, { onBack: props.onBack, title: "Transaction" }), (0, import_jsx_runtime.jsx)(Spacer, { y: "xxl" }), (0, import_jsx_runtime.jsxs)(Container, { center: "x", flex: "row", children: [status === "loading" && (0, import_jsx_runtime.jsx)(Spinner, { color: "accentText", size: "xxl" }), status === "failed" && (0, import_jsx_runtime.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), status === "sent" && (0, import_jsx_runtime.jsx)(Container, { center: "both", flex: "row", style: {
    animation: "successBounce 0.6s ease-out",
    backgroundColor: theme.colors.tertiaryBg,
    border: `2px solid ${theme.colors.success}`,
    borderRadius: "50%",
    height: "64px",
    marginBottom: "16px",
    width: "64px"
  }, children: (0, import_jsx_runtime.jsx)(CheckIcon, { color: theme.colors.success, height: iconSize.xl, style: {
    animation: "checkAppear 0.3s ease-out 0.3s both"
  }, width: iconSize.xl }) })] }), (0, import_jsx_runtime.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime.jsxs)(Text, { center: true, color: "primaryText", size: "lg", children: [status === "loading" && "Sending transaction", status === "failed" && "Transaction failed", status === "sent" && "Transaction sent"] }), (0, import_jsx_runtime.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime.jsx)(Text, { center: true, color: "danger", size: "sm", children: status === "failed" && txError ? txError.message || "" : "" }), (0, import_jsx_runtime.jsx)(Spacer, { y: "xl" }), status === "failed" && (0, import_jsx_runtime.jsx)(Button, { fullWidth: true, onClick: sendTx, variant: "accent", children: "Try Again" }), status === "sent" && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [txHash && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsxs)(Button, { color: "primaryText", fullWidth: true, gap: "xs", onClick: () => {
    var _a;
    props.windowAdapter.open(formatExplorerTxUrl(((_a = chainExplorers.explorers[0]) == null ? void 0 : _a.url) ?? "", txHash));
  }, variant: "secondary", children: ["View on Explorer", (0, import_jsx_runtime.jsx)(ExternalLinkIcon, { height: iconSize.sm, width: iconSize.sm })] }), (0, import_jsx_runtime.jsx)(Spacer, { y: "sm" })] }), (0, import_jsx_runtime.jsx)(Button, { fullWidth: true, onClick: props.closeModal, variant: "accent", children: "Done" })] }), (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes successBounce {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes checkAppear {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        ` })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/DirectPayment.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/common/TokenAndChain.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);
function TokenAndChain({ token, client, size, style }) {
  const theme = useCustomTheme();
  const chain = getCachedChain(token.chainId);
  return (0, import_jsx_runtime2.jsxs)(Container, { center: "y", flex: "row", gap: "sm", style: {
    flexWrap: "nowrap",
    ...style
  }, children: [(0, import_jsx_runtime2.jsxs)(Container, { style: {
    height: iconSize[size],
    position: "relative",
    width: iconSize[size]
  }, children: [(0, import_jsx_runtime2.jsx)(TokenIconWithFallback, { client, size, token }), chain.id !== 1 && (0, import_jsx_runtime2.jsx)(Container, { style: {
    background: theme.colors.borderColor,
    border: `1.5px solid ${theme.colors.modalBg}`,
    borderRadius: "50%",
    bottom: "-2px",
    height: size === "lg" || size === "xl" ? iconSize.sm : iconSize.xs,
    position: "absolute",
    right: "-6px",
    width: size === "lg" || size === "xl" ? iconSize.sm : iconSize.xs
  }, children: (0, import_jsx_runtime2.jsx)(ChainIcon2, { chain, client, size: size === "xl" || size === "lg" ? "sm" : "xs" }) })] }), (0, import_jsx_runtime2.jsxs)(Container, { flex: "column", gap: "3xs", style: { minWidth: 0 }, children: [(0, import_jsx_runtime2.jsx)(Text, { color: "primaryText", size: size === "xl" ? "lg" : "sm", style: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, weight: 600, children: token.name }), (0, import_jsx_runtime2.jsx)(ChainName2, { chain, client, short: true, size: size === "xl" ? "sm" : "xs" })] })] });
}
function TokenIconWithFallback(props) {
  var _a;
  const chain = getCachedChain(props.token.chainId);
  const chainMeta = useChainMetadata(chain).data;
  const theme = useCustomTheme();
  const tokenImage = (0, import_react6.useMemo)(() => {
    var _a2;
    if (isNativeToken(props.token) || props.token.address === NATIVE_TOKEN_ADDRESS) {
      if ((chainMeta == null ? void 0 : chainMeta.nativeCurrency.symbol) === "ETH") {
        return "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
      }
      return (_a2 = chainMeta == null ? void 0 : chainMeta.icon) == null ? void 0 : _a2.url;
    }
    return props.token.iconUri;
  }, [props.token, (_a = chainMeta == null ? void 0 : chainMeta.icon) == null ? void 0 : _a.url, chainMeta == null ? void 0 : chainMeta.nativeCurrency.symbol]);
  return tokenImage ? (0, import_jsx_runtime2.jsx)(Img, { client: props.client, fallbackImage: genericTokenIcon, height: iconSize[props.size], src: tokenImage, style: {
    borderRadius: "50%"
  }, width: iconSize[props.size] }) : (0, import_jsx_runtime2.jsx)(Container, { style: {
    alignItems: "center",
    backgroundColor: theme.colors.secondaryButtonBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: "50%",
    display: "flex",
    height: `${iconSize.md}px`,
    justifyContent: "center",
    padding: spacing.xs,
    width: `${iconSize.md}px`
  }, children: (0, import_jsx_runtime2.jsx)(Text, { color: "secondaryText", size: props.size === "xl" ? "sm" : "xs", style: { fontWeight: 600 }, children: props.token.symbol.slice(0, 1) }) });
}
var ChainIcon2 = (props) => {
  const { url } = useChainIconUrl(props.chain);
  return (0, import_jsx_runtime2.jsx)(Container, { style: {
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    position: "relative"
  }, children: (0, import_jsx_runtime2.jsx)(Img, { client: props.client, fallbackImage: fallbackChainIcon, height: iconSize[props.size], src: getSrcChainIcon({
    chainIconUrl: url,
    client: props.client
  }), width: iconSize[props.size] }) });
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

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/common/WithHeader.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function WithHeader({ children, uiOptions, defaultTitle, client }) {
  var _a, _b, _c, _d;
  const theme = useCustomTheme();
  return (0, import_jsx_runtime3.jsxs)(Container, { flex: "column", children: [((_a = uiOptions.metadata) == null ? void 0 : _a.image) && (0, import_jsx_runtime3.jsx)("div", { style: {
    aspectRatio: "16/9",
    backgroundColor: theme.colors.tertiaryBg,
    backgroundImage: `url(${getUrl(client, uiOptions.metadata.image)})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: `${radius.md} ${radius.md} 0 0`,
    overflow: "hidden",
    width: "100%"
  } }), (0, import_jsx_runtime3.jsxs)(Container, { flex: "column", px: "lg", children: [(0, import_jsx_runtime3.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime3.jsx)(Text, { color: "primaryText", size: "lg", weight: 700, children: ((_b = uiOptions.metadata) == null ? void 0 : _b.title) || defaultTitle }), ((_c = uiOptions.metadata) == null ? void 0 : _c.description) && (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [(0, import_jsx_runtime3.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime3.jsx)(Text, { color: "secondaryText", size: "sm", children: (_d = uiOptions.metadata) == null ? void 0 : _d.description })] }), (0, import_jsx_runtime3.jsx)(Spacer, { y: "lg" }), children] })] });
}
function getUrl(client, uri) {
  if (!uri.startsWith("ipfs://")) {
    return uri;
  }
  return resolveScheme({
    client,
    uri
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/DirectPayment.js
function DirectPayment({ uiOptions, client, onContinue, connectOptions }) {
  const activeAccount = useActiveAccount();
  const chain = defineChain(uiOptions.paymentInfo.token.chainId);
  const theme = useCustomTheme();
  const handleContinue = () => {
    onContinue(uiOptions.paymentInfo.amount, uiOptions.paymentInfo.token, uiOptions.paymentInfo.sellerAddress);
  };
  const ensName = useEnsName({
    address: uiOptions.paymentInfo.sellerAddress,
    client
  });
  const sellerAddress = ensName.data || shortenAddress(uiOptions.paymentInfo.sellerAddress);
  const buyNow = (0, import_jsx_runtime4.jsxs)(Container, { flex: "row", gap: "3xs", children: [(0, import_jsx_runtime4.jsx)(Text, { color: "primaryButtonText", size: "md", children: "Buy Now ·" }), (0, import_jsx_runtime4.jsx)(FiatValue, { chain, client, color: "primaryButtonText", size: "md", token: uiOptions.paymentInfo.token, tokenAmount: uiOptions.paymentInfo.amount })] });
  return (0, import_jsx_runtime4.jsxs)(WithHeader, { client, defaultTitle: "Direct Payment", uiOptions, children: [(0, import_jsx_runtime4.jsxs)(Container, { center: "y", flex: "row", gap: "3xs", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime4.jsx)(FiatValue, { chain, client, color: "primaryText", size: "xl", token: uiOptions.paymentInfo.token, tokenAmount: uiOptions.paymentInfo.amount, weight: 700 }), (0, import_jsx_runtime4.jsx)(Container, { flex: "row", gap: "3xs", children: (0, import_jsx_runtime4.jsx)(Text, { color: "secondaryText", size: "xs", style: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, children: "One-time payment" }) })] }), (0, import_jsx_runtime4.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime4.jsx)(Line, {}), (0, import_jsx_runtime4.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime4.jsxs)(Container, { flex: "row", style: {
    alignItems: "center",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime4.jsx)(Text, { color: "secondaryText", size: "sm", children: "Sold by" }), (0, import_jsx_runtime4.jsx)(Text, { color: "primaryText", size: "sm", style: {
    fontFamily: "monospace"
  }, children: sellerAddress })] }), (0, import_jsx_runtime4.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime4.jsxs)(Container, { flex: "row", style: {
    alignItems: "center",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime4.jsx)(Text, { color: "secondaryText", size: "sm", children: "Price" }), (0, import_jsx_runtime4.jsx)(Text, { color: "primaryText", size: "sm", style: {
    fontFamily: "monospace"
  }, children: `${uiOptions.paymentInfo.amount} ${uiOptions.paymentInfo.token.symbol}` })] }), (0, import_jsx_runtime4.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime4.jsxs)(Container, { flex: "row", style: {
    alignItems: "center",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime4.jsx)(Text, { color: "secondaryText", size: "sm", children: "Network" }), (0, import_jsx_runtime4.jsxs)(Container, { center: "y", flex: "row", gap: "3xs", children: [(0, import_jsx_runtime4.jsx)(ChainIcon2, { chain, client, size: "xs" }), (0, import_jsx_runtime4.jsx)(ChainName2, { chain, client, color: "primaryText", short: true, size: "sm", style: {
    fontFamily: "monospace"
  } })] })] }), (0, import_jsx_runtime4.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime4.jsx)(Line, {}), (0, import_jsx_runtime4.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime4.jsxs)(Container, { flex: "column", children: [activeAccount ? (0, import_jsx_runtime4.jsx)(Button, { fullWidth: true, onClick: handleContinue, variant: "primary", children: buyNow }) : (0, import_jsx_runtime4.jsx)(ConnectButton, { client, connectButton: {
    label: buyNow,
    style: {
      width: "100%"
    }
  }, theme, ...connectOptions }), (0, import_jsx_runtime4.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime4.jsx)(PoweredByThirdweb, {}), (0, import_jsx_runtime4.jsx)(Spacer, { y: "lg" })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/ErrorBanner.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/useBridgeError.js
function useBridgeError(params) {
  const { error } = params;
  if (!error) {
    return {
      errorCode: null,
      isClientError: false,
      isRetryable: false,
      isServerError: false,
      mappedError: null,
      statusCode: null,
      userMessage: ""
    };
  }
  let apiError;
  if (error instanceof ApiError) {
    apiError = mapBridgeError(error);
  } else {
    apiError = new ApiError({
      code: "UNKNOWN_ERROR",
      message: error.message || "An unknown error occurred",
      statusCode: 500
      // Default for generic errors
    });
  }
  const statusCode = apiError.statusCode || null;
  const isClientError = statusCode !== null && statusCode >= 400 && statusCode < 500;
  const isServerError = statusCode !== null && statusCode >= 500;
  const userMessage = getUserFriendlyMessage(apiError);
  return {
    errorCode: apiError.code,
    isClientError,
    isRetryable: isRetryable(apiError.code),
    isServerError,
    mappedError: apiError,
    statusCode,
    userMessage
  };
}
function getUserFriendlyMessage(error) {
  switch (error.code) {
    case "INVALID_INPUT":
      return "Invalid input provided. Please check your parameters and try again.";
    case "ROUTE_NOT_FOUND":
      return "No route found for this transaction. Please try a different token pair or amount.";
    case "AMOUNT_TOO_LOW":
      return "The amount is too low for this transaction. Please increase the amount.";
    case "AMOUNT_TOO_HIGH":
      return "The amount is too high for this transaction. Please decrease the amount.";
    case "INTERNAL_SERVER_ERROR":
      return "A temporary error occurred. Please try again in a moment.";
    default:
      return error.message || "An unexpected error occurred. Please try again.";
  }
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/ErrorBanner.js
function ErrorBanner({ error, onRetry, onCancel, client }) {
  const theme = useCustomTheme();
  const { userMessage } = useBridgeError({ error });
  useQuery({
    queryFn: () => {
      trackPayEvent({
        client,
        error: error.message,
        event: "ub:ui:error"
      });
    },
    queryKey: ["error_banner", userMessage]
  });
  return (0, import_jsx_runtime5.jsx)(Container, { flex: "column", fullHeight: true, gap: "md", p: "lg", children: (0, import_jsx_runtime5.jsxs)(Container, { flex: "row", gap: "md", style: { alignItems: "flex-start" }, children: [(0, import_jsx_runtime5.jsx)(Container, { center: "both", style: {
    backgroundColor: theme.colors.tertiaryBg,
    borderRadius: "50%",
    flexShrink: 0,
    height: "24px",
    width: "24px"
  }, children: (0, import_jsx_runtime5.jsx)(CrossCircledIcon, { color: theme.colors.danger, height: iconSize.md, width: iconSize.md }) }), (0, import_jsx_runtime5.jsxs)(Container, { flex: "column", fullHeight: true, gap: "sm", style: { flex: 1 }, children: [(0, import_jsx_runtime5.jsx)(Text, { color: "primaryText", size: "lg", children: "Error" }), (0, import_jsx_runtime5.jsx)(Container, { flex: "column", gap: "sm", style: {
    minHeight: "100px"
  }, children: (0, import_jsx_runtime5.jsx)(Container, { flex: "column", gap: "sm", style: { flex: 1 }, children: (0, import_jsx_runtime5.jsx)(Text, { color: "secondaryText", size: "sm", children: userMessage }) }) }), (0, import_jsx_runtime5.jsxs)(Container, { flex: "row", gap: "sm", style: { justifyContent: "flex-end" }, children: [(0, import_jsx_runtime5.jsx)(Button, { onClick: onRetry, variant: "primary", children: "Try Again" }), onCancel && (0, import_jsx_runtime5.jsx)(Button, { onClick: onCancel, variant: "secondary", children: "Cancel" })] })] })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/FundWallet.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);
function FundWallet({ client, receiverAddress, uiOptions, onContinue, presetOptions = [5, 10, 20], connectOptions }) {
  const [amount, setAmount] = (0, import_react7.useState)(uiOptions.initialAmount ?? "");
  const theme = useCustomTheme();
  const account = useActiveAccount();
  const receiver = receiverAddress ?? (account == null ? void 0 : account.address);
  const handleAmountChange = (inputValue) => {
    let processedValue = inputValue;
    processedValue = processedValue.replace(",", ".");
    if (processedValue.startsWith(".")) {
      processedValue = `0${processedValue}`;
    }
    const numValue = Number(processedValue);
    if (Number.isNaN(numValue)) {
      return;
    }
    if (processedValue.startsWith("0") && !processedValue.startsWith("0.")) {
      setAmount(processedValue.slice(1));
    } else {
      setAmount(processedValue);
    }
  };
  const getAmountFontSize = () => {
    const length = amount.length;
    if (length > 12)
      return fontSize.md;
    if (length > 8)
      return fontSize.lg;
    return fontSize.xl;
  };
  const isValidAmount = amount && Number(amount) > 0;
  const inputRef = (0, import_react7.useRef)(null);
  const focusInput = () => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  };
  const handleQuickAmount = (usdAmount) => {
    if (uiOptions.destinationToken.priceUsd === 0) {
      return;
    }
    const tokenAmount = usdAmount / uiOptions.destinationToken.priceUsd;
    const formattedAmount = Number.parseFloat(tokenAmount.toFixed(6)).toString();
    setAmount(formattedAmount);
  };
  return (0, import_jsx_runtime6.jsxs)(WithHeader, { client, defaultTitle: `Buy ${uiOptions.destinationToken.symbol}`, uiOptions, children: [(0, import_jsx_runtime6.jsxs)(Container, { flex: "column", children: [(0, import_jsx_runtime6.jsxs)(Container, { center: "both", flex: "row", gap: "3xs", p: "md", style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    flexWrap: "nowrap"
  }, children: [(0, import_jsx_runtime6.jsx)(TokenAndChain, { client, size: "xl", token: uiOptions.destinationToken }), (0, import_jsx_runtime6.jsxs)(Container, { center: "x", expand: true, flex: "column", gap: "3xs", style: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  }, children: [(0, import_jsx_runtime6.jsx)("div", {
    onClick: focusInput,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        focusInput();
      }
    },
    // biome-ignore lint/a11y/useSemanticElements: FIXME
    role: "button",
    style: { cursor: "text" },
    tabIndex: 0,
    children: (0, import_jsx_runtime6.jsx)(Container, { center: "y", flex: "row", gap: "xs", style: {
      flexWrap: "nowrap",
      justifyContent: "flex-end"
    }, children: (0, import_jsx_runtime6.jsx)(Input, { "data-placeholder": amount === "", inputMode: "decimal", onChange: (e) => {
      handleAmountChange(e.target.value);
    }, onClick: (e) => {
      if (amount === "") {
        e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
      }
    }, pattern: "^[0-9]*[.,]?[0-9]*$", placeholder: "0", ref: inputRef, style: {
      border: "none",
      boxShadow: "none",
      fontSize: getAmountFontSize(),
      fontWeight: 600,
      padding: "0",
      textAlign: "right"
    }, type: "text", value: amount || "0", variant: "transparent" }) })
  }), (0, import_jsx_runtime6.jsx)(Container, { center: "both", flex: "row", style: { flexWrap: "nowrap", height: fontSize.lg }, children: (0, import_jsx_runtime6.jsxs)(Text, { color: "secondaryText", size: "md", style: { textWrap: "nowrap" }, children: ["≈ $", (Number(amount) * uiOptions.destinationToken.priceUsd).toFixed(2)] }) })] })] }), presetOptions && (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [(0, import_jsx_runtime6.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime6.jsx)(Container, { center: "x", flex: "row", gap: "xs", style: {
    justifyContent: "space-evenly"
  }, children: presetOptions == null ? void 0 : presetOptions.map((amount2) => (0, import_jsx_runtime6.jsxs)(Button, { onClick: () => handleQuickAmount(Number(amount2)), style: {
    backgroundColor: theme.colors.tertiaryBg,
    flex: 1,
    fontSize: fontSize.sm,
    padding: `${spacing.sm} ${spacing.md}`
  }, variant: "outline", children: ["$", amount2] }, amount2)) })] }), (0, import_jsx_runtime6.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime6.jsx)(Container, { center: "y", color: "secondaryText", flex: "row", gap: "sm", px: "md", py: "sm", style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md
  }, children: receiver ? (0, import_jsx_runtime6.jsx)(WalletRow, { address: receiver, client, iconSize: "md", textSize: "sm" }) : (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [(0, import_jsx_runtime6.jsx)(OutlineWalletIcon, { size: iconSize.md }), (0, import_jsx_runtime6.jsx)(Text, { color: "secondaryText", size: "sm", style: {
    flex: 1
  }, children: "No Wallet Connected" })] }) })] }), (0, import_jsx_runtime6.jsx)(Spacer, { y: "lg" }), receiver ? (0, import_jsx_runtime6.jsxs)(Button, { disabled: !isValidAmount, fullWidth: true, onClick: () => {
    if (isValidAmount) {
      onContinue(amount, uiOptions.destinationToken, getAddress(receiver));
    }
  }, style: {
    fontSize: fontSize.md,
    padding: `${spacing.sm} ${spacing.md}`
  }, variant: "primary", children: ["Buy ", amount, " ", uiOptions.destinationToken.symbol] }) : (0, import_jsx_runtime6.jsx)(ConnectButton, { client, connectButton: {
    label: `Buy ${amount} ${uiOptions.destinationToken.symbol}`
  }, theme, ...connectOptions }), (0, import_jsx_runtime6.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime6.jsx)(PoweredByThirdweb, {}), (0, import_jsx_runtime6.jsx)(Spacer, { y: "lg" })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-details/PaymentDetails.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var import_react8 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-details/PaymentOverview.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/contract/actions/compiler-metadata.js
function formatCompilerMetadata(metadata) {
  var _a;
  let meta = metadata;
  if ("source_metadata" in metadata) {
    meta = metadata.source_metadata;
  }
  const compilationTarget = meta.settings.compilationTarget;
  const targets = Object.keys(compilationTarget);
  const name2 = compilationTarget[targets[0]];
  const info = {
    author: meta.output.devdoc.author,
    details: meta.output.devdoc.detail,
    notice: meta.output.userdoc.notice,
    title: meta.output.devdoc.title
  };
  const licenses = [
    ...new Set(
      // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
      Object.entries(meta.sources).map(([, src]) => src.license)
    )
  ];
  return {
    abi: ((_a = meta == null ? void 0 : meta.output) == null ? void 0 : _a.abi) || [],
    info,
    isPartialAbi: meta.isPartialAbi,
    licenses,
    metadata: meta,
    name: name2,
    zk_version: metadata.zk_version
  };
}

// node_modules/thirdweb/dist/esm/contract/actions/get-compiler-metadata.js
async function getCompilerMetadata(contract) {
  const { address, chain } = contract;
  const response = await fetch(`https://contract.thirdweb.com/metadata/${chain.id}/${address}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  });
  if (!response.ok) {
    const errorMsg = await response.json();
    throw new Error(errorMsg.message || errorMsg.error || "Failed to get compiler metadata");
  }
  const data = await response.json();
  return formatCompilerMetadata(data);
}

// node_modules/thirdweb/dist/esm/react/core/hooks/useTransactionDetails.js
function useTransactionDetails({ transaction, client, wallet }) {
  var _a;
  const chainMetadata = useChainMetadata(transaction.chain);
  const hasSponsoredTransactions = hasSponsoredTransactionsEnabled(wallet);
  return useQuery({
    enabled: !!transaction.to && !!chainMetadata.data,
    queryFn: async () => {
      var _a2, _b;
      const contract = getContract({
        address: transaction.to,
        chain: transaction.chain,
        client
      });
      const [contractMetadata, value, erc20Value, transactionData] = await Promise.all([
        getCompilerMetadata(contract).catch(() => null),
        resolvePromisedValue(transaction.value),
        resolvePromisedValue(transaction.erc20Value),
        encode(transaction).catch(() => "0x")
      ]);
      const [tokenInfo, gasCostWei] = await Promise.all([
        getToken(client, erc20Value ? erc20Value.tokenAddress : NATIVE_TOKEN_ADDRESS, transaction.chain.id).catch(() => null),
        hasSponsoredTransactions ? 0n : getTransactionGasCost(transaction).catch(() => null)
      ]);
      let functionInfo = {
        description: void 0,
        functionName: "Contract Call",
        selector: "0x"
      };
      if ((contractMetadata == null ? void 0 : contractMetadata.abi) && transactionData.length >= 10) {
        try {
          const selector = transactionData.slice(0, 10);
          const abi = contractMetadata.abi;
          const abiItems = Array.isArray(abi) ? abi : [];
          const functions = abiItems.filter((item) => item && typeof item === "object" && "type" in item && item.type === "function").map((item) => item);
          const matchingFunction = functions.find((fn) => {
            return toFunctionSelector(fn) === selector;
          });
          if (matchingFunction) {
            functionInfo = {
              description: void 0,
              functionName: matchingFunction.name,
              selector
              // Skip devdoc for now
            };
          }
        } catch {
        }
      }
      const resolveDecimals = async () => {
        if (tokenInfo) {
          return tokenInfo.decimals;
        }
        if (erc20Value) {
          return decimals({
            contract: getContract({
              address: erc20Value.tokenAddress,
              chain: transaction.chain,
              client
            })
          });
        }
        return 18;
      };
      const decimal = await resolveDecimals();
      const costWei = erc20Value ? erc20Value.amountWei : value || 0n;
      const nativeTokenSymbol = ((_b = (_a2 = chainMetadata.data) == null ? void 0 : _a2.nativeCurrency) == null ? void 0 : _b.symbol) || "ETH";
      const tokenSymbol = (tokenInfo == null ? void 0 : tokenInfo.symbol) || nativeTokenSymbol;
      const totalCostWei = erc20Value ? erc20Value.amountWei : (value || 0n) + (gasCostWei || 0n);
      const totalCost = toTokens(totalCostWei, decimal);
      const usdValue = (tokenInfo == null ? void 0 : tokenInfo.priceUsd) ? Number(totalCost) * tokenInfo.priceUsd : null;
      return {
        contractMetadata,
        costWei,
        functionInfo,
        gasCostDisplay: gasCostWei ? `${formatTokenAmount(gasCostWei, 18)} ${nativeTokenSymbol}` : null,
        gasCostWei,
        tokenInfo,
        totalCost,
        totalCostWei,
        txCostDisplay: `${formatTokenAmount(costWei, decimal)} ${tokenSymbol}`,
        usdValueDisplay: usdValue ? formatCurrencyAmount("USD", usdValue) : null
      };
    },
    queryKey: [
      "transaction-details",
      transaction.to,
      transaction.chain.id,
      (_a = transaction.erc20Value) == null ? void 0 : _a.toString(),
      hasSponsoredTransactions
    ]
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/common/TokenBalanceRow.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function TokenBalanceRow({ client, token, amount, onClick, style }) {
  const chain = getCachedChain(token.chainId);
  return (0, import_jsx_runtime7.jsxs)(StyledButton2, { onClick: () => onClick(token), style: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${spacing.sm} ${spacing.md}`,
    ...style
  }, variant: "secondary", children: [(0, import_jsx_runtime7.jsx)(TokenAndChain, { client, size: "lg", style: { flex: 1, maxWidth: "50%" }, token }), (0, import_jsx_runtime7.jsx)(Container, { center: "y", color: "secondaryText", flex: "row", gap: "4xs", style: {
    flex: "1",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    maxWidth: "50%",
    minWidth: 0
  }, children: (0, import_jsx_runtime7.jsxs)(Container, { color: "secondaryText", flex: "column", gap: "3xs", style: {
    alignItems: "flex-end",
    minWidth: 0,
    overflow: "hidden"
  }, children: [(0, import_jsx_runtime7.jsx)(FiatValue, { chain, client, color: "primaryText", size: "sm", token, tokenAmount: amount }), (0, import_jsx_runtime7.jsx)(Text, { color: "secondaryText", size: "xs", style: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, children: `${Number(amount).toLocaleString(void 0, {
    maximumFractionDigits: 6,
    minimumFractionDigits: 0
  })} ${token.symbol}` })] }) })] });
}
var StyledButton2 = newStyled(Button)((props) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      background: theme.colors.secondaryButtonBg
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

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-details/PaymentOverview.js
function PaymentOverview(props) {
  var _a, _b, _c;
  const theme = useCustomTheme();
  const sender = props.sender || (props.paymentMethod.type === "wallet" ? (_a = props.paymentMethod.payerWallet.getAccount()) == null ? void 0 : _a.address : void 0);
  const isDifferentRecipient = props.receiver.toLowerCase() !== (sender == null ? void 0 : sender.toLowerCase());
  return (0, import_jsx_runtime8.jsxs)(Container, { children: [(0, import_jsx_runtime8.jsxs)(Container, { bg: "tertiaryBg", flex: "column", style: {
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.lg
  }, children: [sender && (0, import_jsx_runtime8.jsx)(Container, { flex: "row", gap: "sm", px: "md", py: "sm", style: {
    borderBottom: `1px solid ${theme.colors.borderColor}`
  }, children: (0, import_jsx_runtime8.jsx)(WalletRow, { address: sender, client: props.client, iconSize: "md", textSize: "sm" }) }), props.paymentMethod.type === "wallet" && (0, import_jsx_runtime8.jsx)(TokenBalanceRow, { amount: props.fromAmount, client: props.client, onClick: () => {
  }, style: {
    background: "transparent",
    border: "none",
    borderRadius: 0
  }, token: props.paymentMethod.originToken }), props.paymentMethod.type === "fiat" && (0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "row", gap: "sm", px: "md", py: "sm", style: { justifyContent: "space-between" }, children: [(0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "row", gap: "sm", children: [getFiatCurrencyIcon({
    currency: props.paymentMethod.currency,
    size: "lg"
  }), (0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "column", gap: "3xs", children: [(0, import_jsx_runtime8.jsx)(Text, { color: "primaryText", size: "sm", style: { fontWeight: 600 }, children: props.paymentMethod.currency }), (0, import_jsx_runtime8.jsx)(Text, { color: "secondaryText", size: "xs", children: props.paymentMethod.onramp.charAt(0).toUpperCase() + props.paymentMethod.onramp.slice(1) })] })] }), (0, import_jsx_runtime8.jsx)(Text, { color: "primaryText", size: "sm", style: { fontWeight: 600 }, children: props.fromAmount })] })] }), (0, import_jsx_runtime8.jsx)(StepConnectorArrow, {}), (0, import_jsx_runtime8.jsxs)(Container, { bg: "tertiaryBg", flex: "column", style: {
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.lg
  }, children: [isDifferentRecipient && (0, import_jsx_runtime8.jsx)(Container, { flex: "row", gap: "sm", px: "md", py: "sm", style: {
    borderBottom: `1px solid ${theme.colors.borderColor}`
  }, children: (0, import_jsx_runtime8.jsx)(WalletRow, { address: props.receiver, client: props.client, iconSize: "md", textSize: "sm" }) }), props.uiOptions.mode === "direct_payment" && (0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "row", gap: "sm", p: "md", style: { justifyContent: "space-between" }, children: [(0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "column", gap: "3xs", style: { flex: 1 }, children: [(0, import_jsx_runtime8.jsx)(Text, { color: "primaryText", size: "sm", style: { fontWeight: 600 }, children: ((_b = props.uiOptions.metadata) == null ? void 0 : _b.title) || "Payment" }), ((_c = props.uiOptions.metadata) == null ? void 0 : _c.description) && (0, import_jsx_runtime8.jsx)(Text, { color: "secondaryText", size: "xs", children: props.uiOptions.metadata.description })] }), (0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "column", gap: "3xs", style: { alignItems: "flex-end" }, children: [(0, import_jsx_runtime8.jsx)(FiatValue, { chain: defineChain(props.toToken.chainId), client: props.client, color: "primaryText", size: "sm", token: props.toToken, tokenAmount: props.uiOptions.paymentInfo.amount, weight: 600 }), (0, import_jsx_runtime8.jsxs)(Text, { color: "secondaryText", size: "xs", children: [props.uiOptions.paymentInfo.amount, " ", props.toToken.symbol] })] })] }), props.uiOptions.mode === "fund_wallet" && (0, import_jsx_runtime8.jsx)(TokenBalanceRow, { amount: props.toAmount, client: props.client, onClick: () => {
  }, style: {
    background: "transparent",
    border: "none",
    borderRadius: 0
  }, token: props.toToken }), props.uiOptions.mode === "transaction" && (0, import_jsx_runtime8.jsx)(TransactionOverViewCompact, { client: props.client, paymentMethod: props.paymentMethod, uiOptions: props.uiOptions })] })] });
}
var TransactionOverViewCompact = (props) => {
  var _a, _b, _c;
  const theme = useCustomTheme();
  const txInfo = useTransactionDetails({
    client: props.client,
    transaction: props.uiOptions.transaction,
    wallet: props.paymentMethod.payerWallet
  });
  if (!txInfo.data) {
    return (0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "row", gap: "sm", p: "md", style: { justifyContent: "space-between" }, children: [(0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "column", gap: "3xs", style: { flex: 1 }, children: [(0, import_jsx_runtime8.jsx)("div", { style: {
      backgroundColor: theme.colors.skeletonBg,
      borderRadius: spacing.xs,
      height: "16px",
      width: "120px"
    } }), ((_a = props.uiOptions.metadata) == null ? void 0 : _a.description) && (0, import_jsx_runtime8.jsx)("div", { style: {
      backgroundColor: theme.colors.skeletonBg,
      borderRadius: spacing.xs,
      height: "12px",
      width: "80px"
    } })] }), (0, import_jsx_runtime8.jsx)(Container, { center: "y", flex: "column", gap: "3xs", style: { alignItems: "flex-end" }, children: (0, import_jsx_runtime8.jsx)("div", { style: {
      backgroundColor: theme.colors.skeletonBg,
      borderRadius: spacing.sm,
      height: "24px",
      width: "100px"
    } }) })] });
  }
  return (0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "row", gap: "sm", p: "md", style: { justifyContent: "space-between" }, children: [(0, import_jsx_runtime8.jsxs)(Container, { center: "y", flex: "column", gap: "3xs", style: { flex: 1 }, children: [(0, import_jsx_runtime8.jsx)(Text, { color: "primaryText", size: "sm", style: { fontWeight: 600 }, children: ((_b = props.uiOptions.metadata) == null ? void 0 : _b.title) || "Transaction" }), ((_c = props.uiOptions.metadata) == null ? void 0 : _c.description) && (0, import_jsx_runtime8.jsx)(Text, { color: "secondaryText", size: "xs", children: props.uiOptions.metadata.description })] }), (0, import_jsx_runtime8.jsx)(Container, { center: "y", flex: "column", gap: "3xs", style: { alignItems: "flex-end" }, children: (0, import_jsx_runtime8.jsx)(Text, { color: "secondaryText", size: "xs", style: {
    backgroundColor: theme.colors.secondaryButtonBg,
    borderRadius: spacing.sm,
    fontFamily: "monospace",
    padding: `${spacing.xs} ${spacing.sm}`,
    textAlign: "right"
  }, children: txInfo.data.functionInfo.functionName }) })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-details/PaymentDetails.js
function PaymentDetails({ uiOptions, client, paymentMethod, preparedQuote, onConfirm, onBack, onError }) {
  var _a;
  const theme = useCustomTheme();
  const handleConfirm = () => {
    try {
      onConfirm();
    } catch (error) {
      onError(error);
    }
  };
  useQuery({
    queryFn: () => {
      if (preparedQuote.type === "buy" || preparedQuote.type === "sell" || preparedQuote.type === "transfer") {
        trackPayEvent({
          chainId: preparedQuote.type === "transfer" ? preparedQuote.intent.chainId : preparedQuote.intent.originChainId,
          client,
          event: "payment_details",
          fromToken: preparedQuote.type === "transfer" ? preparedQuote.intent.tokenAddress : preparedQuote.intent.originTokenAddress,
          toChainId: preparedQuote.type === "transfer" ? preparedQuote.intent.chainId : preparedQuote.intent.destinationChainId,
          toToken: preparedQuote.type === "transfer" ? preparedQuote.intent.tokenAddress : preparedQuote.intent.destinationTokenAddress
        });
      }
    },
    queryKey: ["payment_details", preparedQuote.type]
  });
  const chainsQuery = useChainsQuery(preparedQuote.steps.flatMap((s) => [
    defineChain(s.originToken.chainId),
    defineChain(s.destinationToken.chainId)
  ]), 10);
  const chainsMetadata = (0, import_react8.useMemo)(() => chainsQuery.map((c) => c.data), [chainsQuery]).filter((c) => !!c);
  const getDisplayData = () => {
    var _a2, _b, _c;
    switch (preparedQuote.type) {
      case "transfer": {
        const token = paymentMethod.type === "wallet" ? paymentMethod.originToken : void 0;
        if (!token) {
          onError(new Error("Invalid payment method"));
          return {
            destinationAmount: "0",
            destinationToken: void 0,
            estimatedTime: 0,
            originAmount: "0",
            originToken: void 0
          };
        }
        return {
          destinationAmount: formatTokenAmount(preparedQuote.destinationAmount, token.decimals),
          destinationToken: token,
          estimatedTime: preparedQuote.estimatedExecutionTimeMs,
          originAmount: formatTokenAmount(preparedQuote.originAmount, token.decimals),
          originToken: token
        };
      }
      case "buy": {
        const method = paymentMethod.type === "wallet" ? paymentMethod : void 0;
        if (!method) {
          onError(new Error("Invalid payment method"));
          return {
            destinationAmount: "0",
            destinationToken: void 0,
            estimatedTime: 0,
            originAmount: "0",
            originToken: void 0
          };
        }
        return {
          destinationAmount: formatTokenAmount(preparedQuote.destinationAmount, ((_b = (_a2 = preparedQuote.steps[preparedQuote.steps.length - 1]) == null ? void 0 : _a2.destinationToken) == null ? void 0 : _b.decimals) ?? 18),
          destinationToken: (_c = preparedQuote.steps[preparedQuote.steps.length - 1]) == null ? void 0 : _c.destinationToken,
          estimatedTime: preparedQuote.estimatedExecutionTimeMs,
          originAmount: formatTokenAmount(preparedQuote.originAmount, method.originToken.decimals),
          originToken: paymentMethod.type === "wallet" ? paymentMethod.originToken : void 0
        };
      }
      case "onramp": {
        const method = paymentMethod.type === "fiat" ? paymentMethod : void 0;
        if (!method) {
          onError(new Error("Invalid payment method"));
          return {
            destinationAmount: "0",
            destinationToken: void 0,
            estimatedTime: 0,
            originAmount: "0",
            originToken: void 0
          };
        }
        return {
          destinationAmount: formatTokenAmount(preparedQuote.destinationAmount, preparedQuote.destinationToken.decimals),
          // Onramp starts with fiat
          destinationToken: preparedQuote.destinationToken,
          estimatedTime: void 0,
          originAmount: formatCurrencyAmount(method.currency, Number(preparedQuote.currencyAmount)),
          originToken: void 0
        };
      }
      default: {
        throw new Error(`Unsupported bridge prepare type: ${preparedQuote.type}`);
      }
    }
  };
  const displayData = getDisplayData();
  return (0, import_jsx_runtime9.jsxs)(Container, { flex: "column", fullHeight: true, p: "lg", children: [(0, import_jsx_runtime9.jsx)(ModalHeader, { onBack, title: "Payment Details" }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime9.jsxs)(Container, { flex: "column", children: [(0, import_jsx_runtime9.jsxs)(Container, { flex: "column", children: [displayData.destinationToken && (0, import_jsx_runtime9.jsx)(PaymentOverview, { client, fromAmount: displayData.originAmount, paymentMethod, receiver: preparedQuote.intent.receiver, sender: preparedQuote.intent.sender || ((_a = paymentMethod.payerWallet.getAccount()) == null ? void 0 : _a.address), toAmount: displayData.destinationAmount, toToken: displayData.destinationToken, uiOptions }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime9.jsxs)(Container, { flex: "row", gap: "sm", children: [(0, import_jsx_runtime9.jsxs)(Container, { flex: "row", gap: "xs", style: { flex: 1, justifyContent: "center" }, children: [(0, import_jsx_runtime9.jsx)(Text, { color: "secondaryText", size: "sm", children: "Estimated Time" }), (0, import_jsx_runtime9.jsx)(Text, { color: "primaryText", size: "sm", children: displayData.estimatedTime ? `~${Math.ceil(displayData.estimatedTime / 6e4)} min` : "~2 min" })] }), preparedQuote.steps.length > 1 ? (0, import_jsx_runtime9.jsxs)(Container, { flex: "row", gap: "xs", style: { flex: 1, justifyContent: "center" }, children: [(0, import_jsx_runtime9.jsx)(Text, { color: "secondaryText", size: "sm", children: "Route Length" }), (0, import_jsx_runtime9.jsxs)(Text, { color: "primaryText", size: "sm", children: [preparedQuote.steps.length, " step", preparedQuote.steps.length !== 1 ? "s" : ""] })] }) : null] })] }), preparedQuote.steps.length > 1 && (0, import_jsx_runtime9.jsxs)(Container, { flex: "column", children: [(0, import_jsx_runtime9.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime9.jsx)(Container, { flex: "column", gap: "sm", style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    padding: `${spacing.sm} ${spacing.md}`
  }, children: preparedQuote.steps.map((step, stepIndex) => {
    var _a2, _b, _c;
    return (0, import_jsx_runtime9.jsx)(Container, { flex: "column", gap: "sm", children: (0, import_jsx_runtime9.jsxs)(Container, { flex: "row", gap: "md", style: { alignItems: "center" }, children: [(0, import_jsx_runtime9.jsx)(Container, { center: "both", flex: "row", style: {
      backgroundColor: theme.colors.accentButtonBg,
      borderRadius: "50%",
      color: theme.colors.accentButtonText,
      flexShrink: 0,
      fontSize: "12px",
      fontWeight: "bold",
      height: "24px",
      width: "24px"
    }, children: (0, import_jsx_runtime9.jsx)(Text, { color: "accentButtonText", size: "xs", children: stepIndex + 1 }) }), (0, import_jsx_runtime9.jsx)(Container, { center: "y", flex: "row", gap: "sm", style: { flex: 1 }, children: (0, import_jsx_runtime9.jsxs)(Container, { flex: "column", gap: "3xs", style: { flex: 1 }, children: [(0, import_jsx_runtime9.jsx)(Text, { color: "primaryText", size: "sm", children: step.destinationToken.chainId !== step.originToken.chainId ? (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: ["Bridge", " ", step.originToken.symbol === step.destinationToken.symbol ? step.originToken.symbol : `${step.originToken.symbol} to ${step.destinationToken.symbol}`] }) : (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: ["Swap ", step.originToken.symbol, " to", " ", step.destinationToken.symbol] }) }), (0, import_jsx_runtime9.jsx)(Text, { color: "secondaryText", size: "xs", children: step.originToken.chainId !== step.destinationToken.chainId ? (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [(_a2 = chainsMetadata.find((c) => c.chainId === step.originToken.chainId)) == null ? void 0 : _a2.name, " ", "to", " ", (_b = chainsMetadata.find((c) => c.chainId === step.destinationToken.chainId)) == null ? void 0 : _b.name] }) : (_c = chainsMetadata.find((c) => c.chainId === step.originToken.chainId)) == null ? void 0 : _c.name })] }) })] }) }, `step-${stepIndex}-${step.originToken.address}-${step.destinationToken.address}`);
  }) })] }), (0, import_jsx_runtime9.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime9.jsx)(Container, { flex: "column", gap: "sm", children: (0, import_jsx_runtime9.jsx)(Button, { fullWidth: true, onClick: handleConfirm, variant: "accent", children: "Confirm Payment" }) })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-selection/PaymentSelection.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/usePaymentMethods.js
function usePaymentMethods(options) {
  var _a;
  const { destinationToken, destinationAmount, client, payerWallet, includeDestinationToken } = options;
  const localWallet = useActiveWallet();
  const wallet = payerWallet || localWallet;
  const routesQuery = useQuery({
    enabled: !!wallet,
    queryFn: async () => {
      var _a2;
      if (!wallet) {
        throw new Error("No wallet connected");
      }
      const allRoutes = await routes({
        client,
        destinationChainId: destinationToken.chainId,
        destinationTokenAddress: destinationToken.address,
        includePrices: true,
        limit: 100,
        maxSteps: 3,
        sortBy: "popularity"
        // Get top 100 most popular routes
      });
      const allOriginTokens = includeDestinationToken ? [destinationToken, ...allRoutes.map((route) => route.originToken)] : allRoutes.map((route) => route.originToken);
      const uniqueChains = Array.from(new Set(allOriginTokens.map((t) => t.chainId)));
      const insightSupport = await Promise.all(uniqueChains.map(async (c) => ({
        chain: getCachedChain(c),
        enabled: await isInsightEnabled(getCachedChain(c))
      })));
      const insightEnabledChains = insightSupport.filter((c) => c.enabled);
      let owned = [];
      let page = 0;
      const limit = 100;
      while (true) {
        const batch = await getOwnedTokens({
          chains: insightEnabledChains.map((c) => c.chain),
          client,
          ownerAddress: ((_a2 = wallet.getAccount()) == null ? void 0 : _a2.address) || "",
          queryOptions: {
            limit,
            metadata: "false",
            page
          }
        });
        if (batch.length === 0) {
          break;
        }
        const tokensWithBalance = batch.map((b) => ({
          balance: b.value,
          originAmount: 0n,
          originToken: allOriginTokens.find((t) => t.address.toLowerCase() === b.tokenAddress.toLowerCase() && t.chainId === b.chainId)
        })).filter((t) => !!t.originToken);
        owned = [...owned, ...tokensWithBalance];
        page += 1;
      }
      const requiredDollarAmount = Number.parseFloat(destinationAmount) * destinationToken.priceUsd;
      owned.sort((a, b) => {
        const aDollarBalance = Number.parseFloat(toTokens(a.balance, a.originToken.decimals)) * a.originToken.priceUsd;
        const bDollarBalance = Number.parseFloat(toTokens(b.balance, b.originToken.decimals)) * b.originToken.priceUsd;
        return bDollarBalance - aDollarBalance;
      });
      const suitableOriginTokens = [];
      for (const b of owned) {
        if (b.originToken && b.balance > 0n) {
          const dollarBalance = Number.parseFloat(toTokens(b.balance, b.originToken.decimals)) * b.originToken.priceUsd;
          if (b.originToken.priceUsd && dollarBalance < requiredDollarAmount) {
            continue;
          }
          if (includeDestinationToken && b.originToken.address.toLowerCase() === destinationToken.address.toLowerCase() && b.originToken.chainId === destinationToken.chainId) {
            suitableOriginTokens.unshift({
              balance: b.balance,
              originAmount: 0n,
              originToken: b.originToken
            });
            continue;
          }
          suitableOriginTokens.push({
            balance: b.balance,
            originAmount: 0n,
            originToken: b.originToken
          });
        }
      }
      const transformedRoutes = [
        ...suitableOriginTokens.map((s) => ({
          balance: s.balance,
          originToken: s.originToken,
          payerWallet: wallet,
          type: "wallet"
        }))
      ];
      return transformedRoutes;
    },
    queryKey: [
      "bridge-routes",
      destinationToken.chainId,
      destinationToken.address,
      destinationAmount,
      (_a = payerWallet == null ? void 0 : payerWallet.getAccount()) == null ? void 0 : _a.address,
      includeDestinationToken
    ],
    // 5 minutes
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1e3
  });
  return {
    data: routesQuery.data || [],
    error: routesQuery.error,
    isError: routesQuery.isError,
    isLoading: routesQuery.isLoading,
    isSuccess: routesQuery.isSuccess,
    refetch: routesQuery.refetch
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-selection/FiatProviderSelection.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var import_react9 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithFiatQuotesForProviders.js
function useBuyWithFiatQuotesForProviders(params, queryOptions2) {
  const providers = ["coinbase", "stripe", "transak"];
  const queries = useQueries({
    queries: providers.map((provider) => ({
      ...queryOptions2,
      enabled: !!params,
      queryFn: async () => {
        if (!params) {
          throw new Error("No params provided");
        }
        const token = await getToken(params.client, params.tokenAddress, params.chainId);
        const amountWei = toUnits(params.amount, token.decimals);
        return prepare({
          amount: amountWei,
          chainId: params.chainId,
          client: params.client,
          currency: params.currency || "USD",
          onramp: provider,
          receiver: params.receiver,
          tokenAddress: params.tokenAddress
        });
      },
      queryKey: ["onramp-prepare", provider, params],
      retry: false
    }))
  });
  return queries;
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-selection/FiatProviderSelection.js
var PROVIDERS = [
  {
    description: "Fast and secure payments",
    iconUri: "https://i.ibb.co/LDJ3Rk2t/Frame-5.png",
    id: "coinbase",
    name: "Coinbase"
  },
  {
    description: "Trusted payment processing",
    iconUri: "https://i.ibb.co/CpgQC2Lf/images-3.png",
    id: "stripe",
    name: "Stripe"
  },
  {
    description: "Global payment solution",
    iconUri: "https://i.ibb.co/Xx2r882p/Transak-official-symbol-1.png",
    id: "transak",
    name: "Transak"
  }
];
function FiatProviderSelection({ onProviderSelected, client, toChainId, toTokenAddress, toAddress, toAmount }) {
  const theme = useCustomTheme();
  const quoteQueries = useBuyWithFiatQuotesForProviders({
    amount: toAmount || "0",
    chainId: toChainId,
    client,
    currency: "USD",
    receiver: checksumAddress(toAddress),
    tokenAddress: checksumAddress(toTokenAddress)
  });
  const quotes = (0, import_react9.useMemo)(() => {
    return quoteQueries.map((q) => q.data).filter((q) => !!q);
  }, [quoteQueries]);
  if (quoteQueries.every((q) => q.isError)) {
    return (0, import_jsx_runtime10.jsx)(Container, { center: "both", flex: "column", style: { minHeight: "120px" }, children: (0, import_jsx_runtime10.jsx)(Text, { color: "secondaryText", size: "sm", children: "No quotes available" }) });
  }
  return (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: (0, import_jsx_runtime10.jsx)(Container, { flex: "column", gap: "sm", children: quotes.length > 0 ? quotes.sort((a, b) => a.currencyAmount - b.currencyAmount).map((quote2, index) => {
    const provider = PROVIDERS.find((p) => p.id === quote2.intent.onramp);
    if (!provider) {
      return null;
    }
    return (0, import_jsx_runtime10.jsx)(Container, { animate: "fadein", style: {
      animationDelay: `${index * 100}ms`
    }, children: (0, import_jsx_runtime10.jsx)(Button, { fullWidth: true, onClick: () => onProviderSelected(provider.id), style: {
      backgroundColor: theme.colors.tertiaryBg,
      border: `1px solid ${theme.colors.borderColor}`,
      borderRadius: radius.md,
      padding: `${spacing.sm} ${spacing.md}`,
      textAlign: "left"
    }, variant: "secondary", children: (0, import_jsx_runtime10.jsxs)(Container, { flex: "row", gap: "sm", style: { alignItems: "center", width: "100%" }, children: [(0, import_jsx_runtime10.jsx)(Container, { style: {
      alignItems: "center",
      borderRadius: "50%",
      display: "flex",
      height: `${iconSize.md}px`,
      justifyContent: "center",
      overflow: "hidden",
      padding: spacing.xs,
      width: `${iconSize.md}px`
    }, children: (0, import_jsx_runtime10.jsx)(Img, { alt: provider.name, client, height: iconSize.md, src: provider.iconUri, width: iconSize.md }) }), (0, import_jsx_runtime10.jsx)(Container, { flex: "column", gap: "3xs", style: { flex: 1 }, children: (0, import_jsx_runtime10.jsx)(Text, { color: "primaryText", size: "md", style: { fontWeight: 600 }, children: provider.name }) }), (0, import_jsx_runtime10.jsxs)(Container, { flex: "column", gap: "3xs", style: { alignItems: "flex-end" }, children: [(0, import_jsx_runtime10.jsxs)(Text, { color: "primaryText", size: "sm", style: { fontWeight: 500 }, children: ["$", quote2.currencyAmount.toLocaleString(void 0, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }), " ", quote2.currency] }), (0, import_jsx_runtime10.jsxs)(Text, { color: "secondaryText", size: "xs", children: [toTokens(quote2.destinationAmount, quote2.destinationToken.decimals), " ", quote2.destinationToken.symbol] })] })] }) }) }, provider.id);
  }) : (0, import_jsx_runtime10.jsxs)(Container, { center: "both", flex: "column", style: { minHeight: "120px" }, children: [(0, import_jsx_runtime10.jsx)(Spinner, { color: "secondaryText", size: "lg" }), (0, import_jsx_runtime10.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime10.jsx)(Text, { center: true, color: "secondaryText", size: "sm", children: "Generating quotes..." })] }) }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-selection/TokenSelection.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/useBridgeQuote.js
function useBridgeQuote({ originToken, destinationToken, destinationAmount, client, enabled = true }) {
  return useQuery({
    enabled: enabled && !!originToken && !!destinationToken && !!destinationAmount,
    queryFn: async () => {
      if (checksumAddress(originToken.address) === checksumAddress(destinationToken.address) && originToken.chainId === destinationToken.chainId) {
        const transfer = await prepare2({
          amount: destinationAmount,
          chainId: originToken.chainId,
          client,
          receiver: destinationToken.address,
          sender: originToken.address,
          tokenAddress: originToken.address
        });
        return transfer;
      }
      const quote2 = await quote({
        amount: destinationAmount,
        client,
        destinationChainId: destinationToken.chainId,
        destinationTokenAddress: destinationToken.address,
        originChainId: originToken.chainId,
        originTokenAddress: originToken.address
      });
      return quote2;
    },
    queryKey: [
      "bridge-quote",
      originToken.chainId,
      originToken.address,
      destinationToken.chainId,
      destinationToken.address,
      destinationAmount.toString()
    ],
    refetchInterval: 6e4,
    // 30 seconds
    retry: 3,
    // 1 minute
    staleTime: 3e4
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-selection/TokenSelection.js
function PaymentMethodTokenRow({ paymentMethod, destinationToken, destinationAmount, client, onPaymentMethodSelected }) {
  const theme = useCustomTheme();
  const { data: quote2, isLoading: quoteLoading, error: quoteError } = useBridgeQuote({
    client,
    destinationAmount,
    destinationToken,
    originToken: paymentMethod.originToken
  });
  const displayOriginAmount = quote2 == null ? void 0 : quote2.originAmount;
  const hasEnoughBalance = displayOriginAmount ? paymentMethod.balance >= displayOriginAmount : false;
  return (0, import_jsx_runtime11.jsx)(Button, { disabled: !hasEnoughBalance, fullWidth: true, onClick: () => onPaymentMethodSelected(paymentMethod), style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    opacity: hasEnoughBalance ? 1 : 0.5,
    padding: `${spacing.sm} ${spacing.md}`,
    textAlign: "left"
  }, variant: "secondary", children: (0, import_jsx_runtime11.jsxs)(Container, { flex: "row", gap: "md", style: { alignItems: "center", width: "100%" }, children: [(0, import_jsx_runtime11.jsx)(TokenAndChain, { client, size: "lg", style: {
    maxWidth: "50%"
  }, token: paymentMethod.originToken }), (0, import_jsx_runtime11.jsxs)(Container, { flex: "column", gap: "3xs", style: { alignItems: "flex-end", flex: 1 }, children: [quoteLoading ? (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [(0, import_jsx_runtime11.jsx)(Skeleton, { height: "16px", width: "80px" }), (0, import_jsx_runtime11.jsxs)(Container, { flex: "row", gap: "3xs", children: [(0, import_jsx_runtime11.jsx)(Skeleton, { height: "12px", width: "50px" }), (0, import_jsx_runtime11.jsx)(Skeleton, { height: "12px", width: "40px" })] })] }) : quoteError ? (0, import_jsx_runtime11.jsx)(Text, { color: "danger", size: "sm", style: { fontWeight: 600 }, children: "Quote failed" }) : displayOriginAmount ? (0, import_jsx_runtime11.jsxs)(Text, { color: "primaryText", size: "sm", style: { fontWeight: 600, textWrap: "nowrap" }, children: [formatTokenAmount(displayOriginAmount, paymentMethod.originToken.decimals), " ", paymentMethod.originToken.symbol] }) : "--.--", !quoteLoading && (0, import_jsx_runtime11.jsxs)(Container, { flex: "row", gap: "3xs", children: [(0, import_jsx_runtime11.jsxs)(Text, { color: "secondaryText", size: "xs", children: ["Balance:", " "] }), (0, import_jsx_runtime11.jsx)(Text, { color: !quoteLoading ? hasEnoughBalance ? "success" : "danger" : "secondaryText", size: "xs", children: formatTokenAmount(paymentMethod.balance, paymentMethod.originToken.decimals) })] })] })] }) }, `${paymentMethod.originToken.address}-${paymentMethod.originToken.chainId}`);
}
function TokenSelection({ paymentMethods, paymentMethodsLoading, client, onPaymentMethodSelected, onBack, destinationToken, destinationAmount }) {
  const theme = useCustomTheme();
  if (paymentMethodsLoading) {
    return (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [(0, import_jsx_runtime11.jsx)(Text, { color: "primaryText", size: "md", children: "Loading your tokens" }), (0, import_jsx_runtime11.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime11.jsx)(Container, { flex: "column", gap: "sm", children: [1, 2, 3].map((i) => (0, import_jsx_runtime11.jsx)(Container, { style: {
      backgroundColor: theme.colors.tertiaryBg,
      border: `1px solid ${theme.colors.borderColor}`,
      borderRadius: radius.md,
      padding: `${spacing.sm} ${spacing.md}`
    }, children: (0, import_jsx_runtime11.jsxs)(Container, { flex: "row", gap: "md", style: { alignItems: "center", width: "100%" }, children: [(0, import_jsx_runtime11.jsxs)(Container, { center: "y", flex: "row", gap: "sm", style: { maxWidth: "50%" }, children: [(0, import_jsx_runtime11.jsx)("div", { style: {
      backgroundColor: theme.colors.skeletonBg,
      borderRadius: "50%",
      height: "32px",
      width: "32px"
    } }), (0, import_jsx_runtime11.jsxs)(Container, { flex: "column", gap: "3xs", children: [(0, import_jsx_runtime11.jsx)(Skeleton, { height: "14px", width: "60px" }), (0, import_jsx_runtime11.jsx)(Skeleton, { height: "12px", width: "40px" })] })] }), (0, import_jsx_runtime11.jsxs)(Container, { flex: "column", gap: "3xs", style: { alignItems: "flex-end", flex: 1 }, children: [(0, import_jsx_runtime11.jsx)(Skeleton, { height: "16px", width: "80px" }), (0, import_jsx_runtime11.jsxs)(Container, { flex: "row", gap: "3xs", children: [(0, import_jsx_runtime11.jsx)(Skeleton, { height: "12px", width: "50px" }), (0, import_jsx_runtime11.jsx)(Skeleton, { height: "12px", width: "40px" })] })] })] }) }, i)) })] });
  }
  if (paymentMethods.length === 0) {
    return (0, import_jsx_runtime11.jsxs)(Container, { center: "both", flex: "column", style: { minHeight: "250px" }, children: [(0, import_jsx_runtime11.jsx)(Text, { center: true, color: "primaryText", size: "md", children: "No available tokens found for this wallet" }), (0, import_jsx_runtime11.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime11.jsx)(Text, { center: true, color: "secondaryText", size: "sm", children: "Try connecting a different wallet or pay with card" }), (0, import_jsx_runtime11.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime11.jsx)(Button, { onClick: onBack, variant: "primary", children: "Select another payment method" })] });
  }
  return (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [(0, import_jsx_runtime11.jsx)(Text, { color: "primaryText", size: "md", children: "Select payment token" }), (0, import_jsx_runtime11.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime11.jsx)(Container, { flex: "column", gap: "sm", style: {
    maxHeight: "400px",
    overflowY: "auto",
    scrollbarWidth: "none"
  }, children: paymentMethods.filter((method) => method.type === "wallet").map((method) => (0, import_jsx_runtime11.jsx)(PaymentMethodTokenRow, { client, destinationAmount, destinationToken, onPaymentMethodSelected, paymentMethod: method }, `${method.originToken.address}-${method.originToken.chainId}`)) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-selection/WalletFiatSelection.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/CreditCardIcon.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var CreditCardIcon = (props) => {
  return (0, import_jsx_runtime12.jsxs)("svg", { fill: "none", height: props.size, role: "presentation", stroke: props.color ?? "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1", viewBox: "0 0 24 24", width: props.size, xmlns: "http://www.w3.org/2000/svg", children: [(0, import_jsx_runtime12.jsx)("rect", { height: "14", rx: "2", width: "20", x: "2", y: "5" }), (0, import_jsx_runtime12.jsx)("line", { x1: "2", x2: "22", y1: "10", y2: "10" })] });
};

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-selection/WalletFiatSelection.js
function WalletFiatSelection({ connectedWallets, client, onWalletSelected, onFiatSelected, onConnectWallet, paymentMethods = ["crypto", "card"] }) {
  const theme = useCustomTheme();
  return (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [paymentMethods.includes("crypto") && (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [(0, import_jsx_runtime13.jsx)(Text, { color: "primaryText", size: "md", children: "Pay with Crypto" }), (0, import_jsx_runtime13.jsx)(Spacer, { y: "md" }), connectedWallets.length > 0 && (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [(0, import_jsx_runtime13.jsx)(Container, { flex: "column", gap: "sm", children: connectedWallets.map((wallet) => {
    const account = wallet.getAccount();
    if (!(account == null ? void 0 : account.address)) {
      return null;
    }
    return (0, import_jsx_runtime13.jsxs)(Button, { fullWidth: true, onClick: () => onWalletSelected(wallet), style: {
      backgroundColor: theme.colors.tertiaryBg,
      border: `1px solid ${theme.colors.borderColor}`,
      borderRadius: radius.md,
      justifyContent: "space-between",
      padding: `${spacing.sm} ${spacing.md}`
    }, variant: "secondary", children: [(0, import_jsx_runtime13.jsx)(WalletRow, { address: account == null ? void 0 : account.address, client, iconSize: "lg", textSize: "sm" }), (0, import_jsx_runtime13.jsx)(ChevronRightIcon, { style: { height: iconSize.md, width: iconSize.md } })] }, wallet.id);
  }) }), (0, import_jsx_runtime13.jsx)(Spacer, { y: "sm" })] }), (0, import_jsx_runtime13.jsx)(Button, { fullWidth: true, onClick: onConnectWallet, style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    height: "auto",
    padding: `${spacing.sm} ${spacing.md}`,
    textAlign: "left"
  }, variant: "secondary", children: (0, import_jsx_runtime13.jsxs)(Container, { flex: "row", gap: "md", style: { alignItems: "center", width: "100%" }, children: [(0, import_jsx_runtime13.jsx)(Container, { style: {
    alignItems: "center",
    border: `1px dashed ${theme.colors.secondaryIconColor}`,
    borderRadius: radius.sm,
    display: "flex",
    height: iconSize.lg,
    justifyContent: "center",
    padding: spacing["4xs"],
    width: iconSize.lg
  }, children: (0, import_jsx_runtime13.jsx)(PlusIcon, { color: theme.colors.secondaryText, height: iconSize.md, width: iconSize.md }) }), (0, import_jsx_runtime13.jsxs)(Container, { flex: "column", gap: "3xs", style: { flex: 1 }, children: [(0, import_jsx_runtime13.jsx)(Text, { color: "primaryText", size: "sm", style: { fontWeight: 600 }, children: "Connect Another Wallet" }), (0, import_jsx_runtime13.jsx)(Text, { color: "secondaryText", size: "xs", children: "Use a different wallet to pay" })] })] }) })] }), paymentMethods.includes("card") && (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [(0, import_jsx_runtime13.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime13.jsx)(Text, { color: "primaryText", size: "md", children: "Pay with Card" }), (0, import_jsx_runtime13.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime13.jsx)(Button, { fullWidth: true, onClick: onFiatSelected, style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    height: "auto",
    padding: `${spacing.sm} ${spacing.md}`,
    textAlign: "left"
  }, variant: "secondary", children: (0, import_jsx_runtime13.jsxs)(Container, { flex: "row", gap: "md", style: { alignItems: "center", width: "100%" }, children: [(0, import_jsx_runtime13.jsx)(CreditCardIcon, { color: theme.colors.secondaryIconColor, size: iconSize.lg }), (0, import_jsx_runtime13.jsxs)(Container, { flex: "column", gap: "3xs", style: { flex: 1 }, children: [(0, import_jsx_runtime13.jsx)(Text, { color: "primaryText", size: "sm", style: { fontWeight: 600 }, children: "Pay with Card" }), (0, import_jsx_runtime13.jsx)(Text, { color: "secondaryText", size: "xs", children: "Buy crypto and bridge in one step" })] })] }) })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-selection/PaymentSelection.js
function PaymentSelection({ destinationToken, client, destinationAmount, receiverAddress, onPaymentMethodSelected, onError, onBack, connectOptions, connectLocale, includeDestinationToken, paymentMethods = ["crypto", "card"] }) {
  var _a, _b, _c;
  const connectedWallets = useConnectedWallets();
  const activeWallet = useActiveWallet();
  const [currentStep, setCurrentStep] = (0, import_react10.useState)({
    type: "walletSelection"
  });
  useQuery({
    queryFn: () => {
      trackPayEvent({
        client,
        event: "payment_selection",
        toChainId: destinationToken.chainId,
        toToken: destinationToken.address
      });
    },
    queryKey: ["payment_selection"]
  });
  const payerWallet = currentStep.type === "tokenSelection" ? currentStep.selectedWallet : activeWallet;
  const { data: suitableTokenPaymentMethods, isLoading: paymentMethodsLoading, error: paymentMethodsError } = usePaymentMethods({
    client,
    destinationAmount,
    destinationToken,
    includeDestinationToken: includeDestinationToken || (receiverAddress == null ? void 0 : receiverAddress.toLowerCase()) !== ((_b = (_a = payerWallet == null ? void 0 : payerWallet.getAccount()) == null ? void 0 : _a.address) == null ? void 0 : _b.toLowerCase()),
    payerWallet
  });
  (0, import_react10.useEffect)(() => {
    if (paymentMethodsError) {
      onError(paymentMethodsError);
    }
  }, [paymentMethodsError, onError]);
  const handlePaymentMethodSelected = (paymentMethod) => {
    try {
      onPaymentMethodSelected(paymentMethod);
    } catch (error) {
      onError(error);
    }
  };
  const handleWalletSelected = (wallet) => {
    setCurrentStep({ selectedWallet: wallet, type: "tokenSelection" });
  };
  const handleConnectWallet = async () => {
    setCurrentStep({ type: "walletConnection" });
  };
  const handleFiatSelected = () => {
    setCurrentStep({ type: "fiatProviderSelection" });
  };
  const handleBackToWalletSelection = () => {
    setCurrentStep({ type: "walletSelection" });
  };
  const handleOnrampProviderSelected = (provider) => {
    if (!payerWallet) {
      onError(new Error("No wallet available for fiat payment"));
      return;
    }
    const fiatPaymentMethod = {
      currency: "USD",
      onramp: provider,
      payerWallet,
      // Default to USD for now
      type: "fiat"
    };
    handlePaymentMethodSelected(fiatPaymentMethod);
  };
  const getStepTitle = () => {
    switch (currentStep.type) {
      case "walletSelection":
        return "Choose Payment Method";
      case "tokenSelection":
        return "Select Token";
      case "fiatProviderSelection":
        return "Select Payment Provider";
      case "walletConnection":
        return "Connect Wallet";
    }
  };
  const getBackHandler = () => {
    switch (currentStep.type) {
      case "walletSelection":
        return onBack;
      case "tokenSelection":
      case "fiatProviderSelection":
      case "walletConnection":
        return handleBackToWalletSelection;
    }
  };
  if (currentStep.type === "walletConnection") {
    const destinationChain = destinationToken ? defineChain(destinationToken.chainId) : void 0;
    const chains = destinationChain ? [destinationChain, ...(connectOptions == null ? void 0 : connectOptions.chains) || []] : connectOptions == null ? void 0 : connectOptions.chains;
    return (0, import_jsx_runtime14.jsx)(WalletSwitcherConnectionScreen, { accountAbstraction: connectOptions == null ? void 0 : connectOptions.accountAbstraction, appMetadata: connectOptions == null ? void 0 : connectOptions.appMetadata, chain: destinationChain || (connectOptions == null ? void 0 : connectOptions.chain), chains, client, connectLocale, hiddenWallets: [], isEmbed: false, onBack: handleBackToWalletSelection, onSelect: handleWalletSelected, recommendedWallets: connectOptions == null ? void 0 : connectOptions.recommendedWallets, showAllWallets: (connectOptions == null ? void 0 : connectOptions.showAllWallets) === void 0 ? true : connectOptions == null ? void 0 : connectOptions.showAllWallets, walletConnect: connectOptions == null ? void 0 : connectOptions.walletConnect, wallets: (_c = connectOptions == null ? void 0 : connectOptions.wallets) == null ? void 0 : _c.filter((w) => w.id !== "inApp") });
  }
  return (0, import_jsx_runtime14.jsxs)(Container, { flex: "column", p: "lg", children: [(0, import_jsx_runtime14.jsx)(ModalHeader, { onBack: getBackHandler(), title: getStepTitle() }), (0, import_jsx_runtime14.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime14.jsxs)(Container, { flex: "column", children: [currentStep.type === "walletSelection" && (0, import_jsx_runtime14.jsx)(WalletFiatSelection, { client, connectedWallets, onConnectWallet: handleConnectWallet, onFiatSelected: handleFiatSelected, onWalletSelected: handleWalletSelected, paymentMethods }), currentStep.type === "tokenSelection" && (0, import_jsx_runtime14.jsx)(TokenSelection, { client, destinationAmount: toUnits(destinationAmount, destinationToken.decimals), destinationToken, onBack: handleBackToWalletSelection, onPaymentMethodSelected: handlePaymentMethodSelected, paymentMethods: suitableTokenPaymentMethods, paymentMethodsLoading }), currentStep.type === "fiatProviderSelection" && (0, import_jsx_runtime14.jsx)(FiatProviderSelection, { client, onProviderSelected: handleOnrampProviderSelected, toAddress: receiverAddress || "", toAmount: destinationAmount, toChainId: destinationToken.chainId, toTokenAddress: destinationToken.address })] })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-success/SuccessScreen.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var import_react12 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-success/PaymentReceipt.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var import_react11 = __toESM(require_react(), 1);
function getPaymentId(preparedQuote, status) {
  var _a;
  if (preparedQuote.type === "onramp") {
    return preparedQuote.id;
  }
  return (_a = status.transactions[status.transactions.length - 1]) == null ? void 0 : _a.transactionHash;
}
function useTransactionInfo(status, preparedQuote) {
  return useQuery({
    enabled: true,
    queryFn: async () => {
      const isOnramp = status.type === "onramp";
      if (isOnramp && preparedQuote.type === "onramp") {
        return {
          amountPaid: `${preparedQuote.currencyAmount} ${preparedQuote.currency}`,
          amountReceived: `${formatTokenAmount(preparedQuote.destinationAmount, preparedQuote.destinationToken.decimals)} ${preparedQuote.destinationToken.symbol}`,
          chain: await getChainMetadata(defineChain(preparedQuote.destinationToken.chainId)),
          destinationToken: preparedQuote.destinationToken,
          id: preparedQuote.id,
          label: "Onramp Payment",
          type: "paymentId"
        };
      } else if (status.type === "buy" || status.type === "sell" || status.type === "transfer") {
        if (status.transactions.length > 0) {
          const tx = status.transactions[status.transactions.length - 1];
          if (tx) {
            const [destinationChain, originChain] = await Promise.all([
              getChainMetadata(getCachedChain(status.destinationToken.chainId)),
              getChainMetadata(getCachedChain(status.originToken.chainId))
            ]);
            return {
              amountPaid: `${formatTokenAmount(status.originAmount, status.originToken.decimals)} ${status.originToken.symbol}`,
              amountReceived: `${formatTokenAmount(status.destinationAmount, status.destinationToken.decimals)} ${status.destinationToken.symbol}`,
              chain: destinationChain,
              destinationChain,
              destinationToken: status.destinationToken,
              id: tx.transactionHash,
              label: "Transaction",
              originChain,
              originToken: status.originToken,
              type: "transactionHash"
            };
          }
        }
      }
      return null;
    },
    queryKey: [
      "transaction-info",
      status.type,
      getPaymentId(preparedQuote, status)
    ],
    staleTime: 5 * 60 * 1e3
    // 5 minutes
  });
}
function CompletedStepDetailCard({ status, preparedQuote, windowAdapter, onCopyToClipboard }) {
  const theme = useCustomTheme();
  const { data: txInfo, isLoading } = useTransactionInfo(status, preparedQuote);
  if (isLoading) {
    return (0, import_jsx_runtime15.jsxs)(Container, { flex: "column", gap: "sm", style: {
      backgroundColor: theme.colors.tertiaryBg,
      border: `1px solid ${theme.colors.borderColor}`,
      borderRadius: radius.sm,
      padding: spacing.md
    }, children: [(0, import_jsx_runtime15.jsx)(Skeleton, { height: "30px" }), (0, import_jsx_runtime15.jsx)(Skeleton, { height: "30px" }), (0, import_jsx_runtime15.jsx)(Skeleton, { height: "30px" })] });
  }
  if (!txInfo) {
    return null;
  }
  return (0, import_jsx_runtime15.jsxs)(Container, { flex: "column", gap: "sm", style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.sm,
    padding: spacing.md
  }, children: [(0, import_jsx_runtime15.jsxs)(Container, { flex: "row", gap: "sm", style: {
    alignItems: "center",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime15.jsx)(Text, { color: "primaryText", size: "sm", children: txInfo.label }), (0, import_jsx_runtime15.jsx)(Container, { style: {
    backgroundColor: theme.colors.success,
    borderRadius: radius.sm,
    padding: `${spacing["3xs"]} ${spacing.xs}`
  }, children: (0, import_jsx_runtime15.jsx)(Text, { size: "xs", style: { color: theme.colors.primaryButtonText }, children: "COMPLETED" }) })] }), txInfo.amountPaid && (0, import_jsx_runtime15.jsxs)(Container, { center: "y", flex: "row", style: { justifyContent: "space-between" }, children: [(0, import_jsx_runtime15.jsx)(Text, { color: "secondaryText", size: "sm", children: "Amount Paid" }), (0, import_jsx_runtime15.jsx)(Text, { color: "primaryText", size: "sm", children: txInfo.amountPaid })] }), txInfo.originChain && (0, import_jsx_runtime15.jsxs)(Container, { center: "y", flex: "row", style: { justifyContent: "space-between" }, children: [(0, import_jsx_runtime15.jsx)(Text, { color: "secondaryText", size: "sm", children: "Origin Chain" }), (0, import_jsx_runtime15.jsx)(Text, { color: "primaryText", size: "sm", children: shorterChainName(txInfo.originChain.name) })] }), txInfo.amountReceived && (0, import_jsx_runtime15.jsxs)(Container, { center: "y", flex: "row", style: { justifyContent: "space-between" }, children: [(0, import_jsx_runtime15.jsx)(Text, { color: "secondaryText", size: "sm", children: "Amount Received" }), (0, import_jsx_runtime15.jsx)(Text, { color: "primaryText", size: "sm", children: txInfo.amountReceived })] }), (0, import_jsx_runtime15.jsxs)(Container, { center: "y", flex: "row", style: { justifyContent: "space-between" }, children: [(0, import_jsx_runtime15.jsx)(Text, { color: "secondaryText", size: "sm", children: "Chain" }), (0, import_jsx_runtime15.jsx)(Text, { color: "primaryText", size: "sm", children: shorterChainName(txInfo.chain.name) })] }), (0, import_jsx_runtime15.jsxs)(Container, { center: "y", flex: "row", style: { justifyContent: "space-between" }, children: [(0, import_jsx_runtime15.jsx)(Text, { color: "secondaryText", size: "sm", children: txInfo.type === "paymentId" ? "Payment ID" : "Transaction Hash" }), (0, import_jsx_runtime15.jsxs)(Container, { flex: "row", gap: "sm", style: { alignItems: "center" }, children: [(0, import_jsx_runtime15.jsx)(Text, { color: "accentText", onClick: txInfo.type === "paymentId" ? () => onCopyToClipboard(txInfo.id) : () => {
    var _a;
    const explorer = (_a = txInfo.chain.explorers) == null ? void 0 : _a[0];
    if (explorer) {
      windowAdapter.open(formatExplorerTxUrl(explorer.url, txInfo.id));
    }
  }, size: "sm", style: {
    cursor: "pointer",
    fontFamily: "monospace"
  }, children: shortenHex(txInfo.id) }), txInfo.type === "paymentId" ? (0, import_jsx_runtime15.jsx)("button", { onClick: () => onCopyToClipboard(txInfo.id), style: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0
  }, type: "button", children: (0, import_jsx_runtime15.jsx)(CopyIcon, { color: theme.colors.primaryText, height: iconSize.sm, width: iconSize.sm }) }) : null] })] })] }, txInfo.id);
}
function PaymentReceipt({ preparedQuote, completedStatuses, onBack, windowAdapter }) {
  const copyToClipboard = (0, import_react11.useCallback)(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.warn("Failed to copy to clipboard:", error);
    }
  }, []);
  return (0, import_jsx_runtime15.jsxs)(Container, { flex: "column", fullHeight: true, p: "lg", style: { maxHeight: "500px", minHeight: "250px", overflowY: "auto" }, children: [(0, import_jsx_runtime15.jsx)(ModalHeader, { onBack, title: "Payment Receipt" }), (0, import_jsx_runtime15.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime15.jsx)(Container, { flex: "column", gap: "lg", children: (0, import_jsx_runtime15.jsxs)(Container, { flex: "column", gap: "md", children: [(0, import_jsx_runtime15.jsx)(Text, { color: "primaryText", size: "md", children: "Transactions" }), completedStatuses.map((status, index) => (0, import_jsx_runtime15.jsx)(CompletedStepDetailCard, { onCopyToClipboard: copyToClipboard, preparedQuote, status, windowAdapter }, `${status.type}-${index}`))] }) })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/payment-success/SuccessScreen.js
function SuccessScreen({ uiOptions, preparedQuote, completedStatuses, onDone, windowAdapter, client }) {
  const theme = useCustomTheme();
  const [viewState, setViewState] = (0, import_react12.useState)("success");
  useQuery({
    queryFn: () => {
      if (preparedQuote.type === "buy" || preparedQuote.type === "sell") {
        trackPayEvent({
          chainId: preparedQuote.intent.originChainId,
          client,
          event: "ub:ui:success_screen",
          fromToken: preparedQuote.intent.originTokenAddress,
          toChainId: preparedQuote.intent.destinationChainId,
          toToken: preparedQuote.intent.destinationTokenAddress
        });
      }
    },
    queryKey: ["success_screen", preparedQuote.type]
  });
  if (viewState === "detail") {
    return (0, import_jsx_runtime16.jsx)(PaymentReceipt, { completedStatuses, onBack: () => setViewState("success"), preparedQuote, windowAdapter });
  }
  return (0, import_jsx_runtime16.jsxs)(Container, { flex: "column", fullHeight: true, p: "lg", children: [(0, import_jsx_runtime16.jsx)(ModalHeader, { title: "Payment Complete" }), (0, import_jsx_runtime16.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime16.jsxs)(Container, { center: "x", flex: "column", gap: "md", children: [(0, import_jsx_runtime16.jsx)(Container, { center: "both", flex: "row", style: {
    animation: "successBounce 0.6s ease-out",
    backgroundColor: theme.colors.tertiaryBg,
    border: `2px solid ${theme.colors.success}`,
    borderRadius: "50%",
    height: "64px",
    marginBottom: "16px",
    width: "64px"
  }, children: (0, import_jsx_runtime16.jsx)(CheckIcon, { color: theme.colors.success, height: iconSize.xl, style: {
    animation: "checkAppear 0.3s ease-out 0.3s both"
  }, width: iconSize.xl }) }), (0, import_jsx_runtime16.jsx)(Text, { center: true, color: "primaryText", size: "xl", children: "Payment Successful!" }), (0, import_jsx_runtime16.jsx)(Text, { center: true, color: "secondaryText", size: "sm", children: "Your cross-chain payment has been completed successfully." })] }), (0, import_jsx_runtime16.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime16.jsxs)(Container, { flex: "column", gap: "sm", style: { width: "100%" }, children: [(0, import_jsx_runtime16.jsx)(Button, { fullWidth: true, onClick: () => setViewState("detail"), variant: "secondary", children: "View Payment Receipt" }), (0, import_jsx_runtime16.jsx)(Button, { fullWidth: true, onClick: onDone, variant: "accent", children: uiOptions.mode === "transaction" ? "Continue" : "Done" })] }), (0, import_jsx_runtime16.jsx)("style", { children: `
          @keyframes successBounce {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes checkAppear {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        ` })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/QuoteLoader.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_react13 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/useBridgePrepare.js
function useBridgePrepare(params) {
  const { enabled = true, type, ...prepareParams } = params;
  return useQuery({
    enabled: enabled && !!prepareParams.client,
    gcTime: 5 * 60 * 1e3,
    queryFn: async () => {
      switch (type) {
        case "buy": {
          const result = await Buy_exports.prepare(prepareParams);
          return { type: "buy", ...result };
        }
        case "sell": {
          const result = await Sell_exports.prepare(prepareParams);
          return { type: "sell", ...result };
        }
        case "transfer": {
          const result = await Transfer_exports.prepare(prepareParams);
          return { type: "transfer", ...result };
        }
        case "onramp": {
          const result = await Onramp_exports.prepare(prepareParams);
          return { type: "onramp", ...result };
        }
        default:
          throw new Error(`Unsupported bridge prepare type: ${type}`);
      }
    },
    queryKey: ["bridge-prepare", type, stringify(prepareParams)],
    // 2 minutes - prepared quotes have shorter validity
    retry: (failureCount, error) => {
      if (error instanceof ApiError) {
        const bridgeError = mapBridgeError(error);
        if (bridgeError.statusCode && bridgeError.statusCode >= 400 && bridgeError.statusCode < 500) {
          return false;
        }
      }
      return failureCount < 2;
    },
    // 5 minutes garbage collection
    retryDelay: (attemptIndex) => Math.min(1e3 * 2 ** attemptIndex, 1e4),
    staleTime: 2 * 60 * 1e3
    // Exponential backoff, max 10s
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/QuoteLoader.js
function QuoteLoader({ mode, destinationToken, paymentMethod, amount, sender, receiver, client, onQuoteReceived, onError, purchaseData, paymentLinkId, feePayer }) {
  const request = getBridgeParams({
    amount,
    client,
    destinationToken,
    feePayer,
    paymentLinkId,
    paymentMethod,
    purchaseData,
    receiver,
    sender
  });
  const prepareQuery = useBridgePrepare(request);
  useQuery({
    queryFn: () => {
      trackPayEvent({
        chainId: paymentMethod.type === "wallet" ? paymentMethod.originToken.chainId : void 0,
        client,
        event: `ub:ui:loading_quote:${mode}`,
        fromToken: paymentMethod.type === "wallet" ? paymentMethod.originToken.address : void 0,
        toChainId: destinationToken.chainId,
        toToken: destinationToken.address
      });
    },
    queryKey: ["loading_quote", paymentMethod.type]
  });
  (0, import_react13.useEffect)(() => {
    if (prepareQuery.data) {
      onQuoteReceived(prepareQuery.data, request);
    }
  }, [prepareQuery.data, onQuoteReceived, request]);
  (0, import_react13.useEffect)(() => {
    if (prepareQuery.error) {
      onError(prepareQuery.error);
    }
  }, [prepareQuery.error, onError]);
  return (0, import_jsx_runtime17.jsxs)(Container, { center: "both", flex: "column", fullHeight: true, p: "lg", style: { minHeight: "350px" }, children: [(0, import_jsx_runtime17.jsx)(Spinner, { color: "secondaryText", size: "xl" }), (0, import_jsx_runtime17.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime17.jsx)(Text, { center: true, color: "primaryText", size: "lg", style: { fontWeight: 600 }, children: "Finding the best route..." }), (0, import_jsx_runtime17.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime17.jsx)(Text, { center: true, color: "secondaryText", size: "sm", children: "We're searching for the most efficient path for this payment." })] });
}
function getBridgeParams(args) {
  var _a, _b;
  const { paymentMethod, amount, destinationToken, receiver, client, sender } = args;
  switch (paymentMethod.type) {
    case "fiat":
      return {
        amount: toUnits(amount, destinationToken.decimals),
        chainId: destinationToken.chainId,
        client,
        currency: paymentMethod.currency,
        enabled: !!(destinationToken && amount && client),
        onramp: paymentMethod.onramp || "coinbase",
        paymentLinkId: args.paymentLinkId,
        purchaseData: args.purchaseData,
        receiver,
        sender,
        // always onramp to native token
        tokenAddress: destinationToken.address,
        type: "onramp"
      };
    case "wallet":
      if (paymentMethod.originToken.chainId === destinationToken.chainId && paymentMethod.originToken.address.toLowerCase() === destinationToken.address.toLowerCase()) {
        return {
          amount: toUnits(amount, destinationToken.decimals),
          chainId: destinationToken.chainId,
          client,
          enabled: !!(destinationToken && amount && client),
          feePayer: args.feePayer || "sender",
          paymentLinkId: args.paymentLinkId,
          purchaseData: args.purchaseData,
          receiver,
          sender: sender || ((_a = paymentMethod.payerWallet.getAccount()) == null ? void 0 : _a.address) || receiver,
          tokenAddress: destinationToken.address,
          type: "transfer"
        };
      }
      return {
        amount: toUnits(amount, destinationToken.decimals),
        client,
        destinationChainId: destinationToken.chainId,
        destinationTokenAddress: destinationToken.address,
        enabled: !!(destinationToken && amount && client),
        originChainId: paymentMethod.originToken.chainId,
        originTokenAddress: paymentMethod.originToken.address,
        paymentLinkId: args.paymentLinkId,
        purchaseData: args.purchaseData,
        receiver,
        sender: sender || ((_b = paymentMethod.payerWallet.getAccount()) == null ? void 0 : _b.address) || receiver,
        type: "buy"
      };
  }
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/StepRunner.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/useStepExecutor.js
var import_react14 = __toESM(require_react(), 1);
function flattenRouteSteps(steps) {
  const out = [];
  steps.forEach((step, stepIdx) => {
    var _a;
    (_a = step.transactions) == null ? void 0 : _a.forEach((tx, _txIdx) => {
      out.push({
        ...tx,
        _index: out.length,
        _stepIndex: stepIdx
      });
    });
  });
  return out;
}
function useStepExecutor(options) {
  const { request, wallet, windowAdapter, client, autoStart = false, onComplete } = options;
  const { data: preparedQuote, isLoading } = useBridgePrepare(request);
  const flatTxs = (0, import_react14.useMemo)(() => (preparedQuote == null ? void 0 : preparedQuote.steps) ? flattenRouteSteps(preparedQuote.steps) : [], [preparedQuote == null ? void 0 : preparedQuote.steps]);
  const [currentTxIndex, setCurrentTxIndex] = (0, import_react14.useState)(void 0);
  const [executionState, setExecutionState] = (0, import_react14.useState)("idle");
  const [error, setError] = (0, import_react14.useState)(void 0);
  const [completedTxs, setCompletedTxs] = (0, import_react14.useState)(/* @__PURE__ */ new Set());
  const [onrampStatus, setOnrampStatus] = (0, import_react14.useState)((preparedQuote == null ? void 0 : preparedQuote.type) === "onramp" ? "pending" : void 0);
  useQuery({
    queryFn: async () => {
      if (!isLoading) {
        setExecutionState("idle");
      } else {
        setExecutionState("fetching");
      }
      return executionState;
    },
    queryKey: [
      "bridge-quote-execution-state",
      stringify(preparedQuote == null ? void 0 : preparedQuote.steps),
      isLoading
    ]
  });
  const abortControllerRef = (0, import_react14.useRef)(null);
  const currentStep = (0, import_react14.useMemo)(() => {
    if (typeof (preparedQuote == null ? void 0 : preparedQuote.steps) === "undefined")
      return void 0;
    if (currentTxIndex === void 0) {
      return void 0;
    }
    const tx = flatTxs[currentTxIndex];
    return tx ? preparedQuote.steps[tx._stepIndex] : void 0;
  }, [currentTxIndex, flatTxs, preparedQuote == null ? void 0 : preparedQuote.steps]);
  const progress = (0, import_react14.useMemo)(() => {
    if (typeof (preparedQuote == null ? void 0 : preparedQuote.type) === "undefined")
      return 0;
    const totalSteps = flatTxs.length + (preparedQuote.type === "onramp" ? 1 : 0);
    if (totalSteps === 0) {
      return 0;
    }
    const completedSteps = completedTxs.size + (onrampStatus === "completed" ? 1 : 0);
    return Math.round(completedSteps / totalSteps * 100);
  }, [completedTxs.size, flatTxs.length, preparedQuote == null ? void 0 : preparedQuote.type, onrampStatus]);
  const poller = (0, import_react14.useCallback)(async (pollFn, abortSignal) => {
    const delay = 2e3;
    while (!abortSignal.aborted) {
      const result = await pollFn();
      if (result.completed) {
        return;
      }
      await new Promise((resolve) => {
        const timeout = setTimeout(resolve, delay);
        abortSignal.addEventListener("abort", () => clearTimeout(timeout), {
          once: true
        });
      });
    }
    throw new Error("Polling aborted");
  }, []);
  const executeSingleTx = (0, import_react14.useCallback)(async (tx, account, completedStatusResults, abortSignal) => {
    if (typeof (preparedQuote == null ? void 0 : preparedQuote.type) === "undefined") {
      throw new Error("No quote generated. This is unexpected.");
    }
    const { prepareTransaction: prepareTransaction2 } = await import("./prepare-transaction-CY4PLSEB.js");
    const { sendTransaction: sendTransaction2 } = await import("./send-transaction-DRA2FS4N.js");
    const preparedTx = prepareTransaction2({
      chain: tx.chain,
      client: tx.client,
      data: tx.data,
      to: tx.to,
      value: tx.value
    });
    const result = await sendTransaction2({
      account,
      transaction: preparedTx
    });
    const hash = result.transactionHash;
    if (tx.action === "approval" || tx.action === "fee") {
      await waitForReceipt(result);
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      return;
    }
    const { status } = await import("./Status-FFIURJLZ.js");
    await poller(async () => {
      const statusResult = await status({
        chainId: tx.chainId,
        client: tx.client,
        transactionHash: hash
      });
      if (statusResult.status === "COMPLETED") {
        const typedStatusResult = {
          type: preparedQuote.type,
          ...statusResult
        };
        completedStatusResults.push(typedStatusResult);
        return { completed: true };
      }
      if (statusResult.status === "FAILED") {
        throw new Error("Payment failed");
      }
      return { completed: false };
    }, abortSignal);
  }, [poller, preparedQuote == null ? void 0 : preparedQuote.type]);
  const executeBatch = (0, import_react14.useCallback)(async (txs, account, completedStatusResults, abortSignal) => {
    if (typeof (preparedQuote == null ? void 0 : preparedQuote.type) === "undefined") {
      throw new Error("No quote generated. This is unexpected.");
    }
    if (!account.sendBatchTransaction) {
      throw new Error("Account does not support batch transactions");
    }
    const { prepareTransaction: prepareTransaction2 } = await import("./prepare-transaction-CY4PLSEB.js");
    const { sendBatchTransaction: sendBatchTransaction2 } = await import("./send-batch-transaction-OIQU5HN7.js");
    const serializableTxs = await Promise.all(txs.map(async (tx) => {
      const preparedTx = prepareTransaction2({
        chain: tx.chain,
        client: tx.client,
        data: tx.data,
        to: tx.to,
        value: tx.value
      });
      return preparedTx;
    }));
    const result = await sendBatchTransaction2({
      account,
      transactions: serializableTxs
    });
    if (txs.length === 0) {
      throw new Error("No transactions to batch");
    }
    const firstTx = txs[0];
    if (!firstTx) {
      throw new Error("Invalid batch transaction");
    }
    const { status } = await import("./Status-FFIURJLZ.js");
    await poller(async () => {
      const statusResult = await status({
        chainId: firstTx.chainId,
        client: firstTx.client,
        transactionHash: result.transactionHash
      });
      if (statusResult.status === "COMPLETED") {
        const typedStatusResult = {
          type: preparedQuote.type,
          ...statusResult
        };
        completedStatusResults.push(typedStatusResult);
        return { completed: true };
      }
      if (statusResult.status === "FAILED") {
        throw new Error("Payment failed");
      }
      return { completed: false };
    }, abortSignal);
  }, [poller, preparedQuote == null ? void 0 : preparedQuote.type]);
  const executeOnramp = (0, import_react14.useCallback)(async (onrampQuote, completedStatusResults, abortSignal) => {
    setOnrampStatus("executing");
    windowAdapter.open(onrampQuote.link);
    const { Onramp } = await import("./bridge-P4GVRSU7.js");
    await poller(async () => {
      const statusResult = await Onramp.status({
        client,
        id: onrampQuote.id
      });
      const status = statusResult.status;
      if (status === "COMPLETED") {
        setOnrampStatus("completed");
        const typedStatusResult = {
          type: "onramp",
          ...statusResult
        };
        completedStatusResults.push(typedStatusResult);
        return { completed: true };
      } else if (status === "FAILED") {
        setOnrampStatus("failed");
      }
      return { completed: false };
    }, abortSignal);
  }, [poller, client, windowAdapter]);
  const execute = (0, import_react14.useCallback)(async () => {
    var _a;
    if (typeof (preparedQuote == null ? void 0 : preparedQuote.type) === "undefined") {
      throw new Error("No quote generated. This is unexpected.");
    }
    if (executionState !== "idle") {
      return;
    }
    setExecutionState("executing");
    setError(void 0);
    const completedStatusResults = [];
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    try {
      if (preparedQuote.type === "onramp" && onrampStatus === "pending") {
        await executeOnramp(preparedQuote, completedStatusResults, abortController.signal);
      }
      const account = wallet.getAccount();
      if (!account) {
        throw new ApiError({
          code: "INVALID_INPUT",
          message: "Wallet not connected",
          statusCode: 400
        });
      }
      const startIndex = currentTxIndex ?? 0;
      for (let i = startIndex; i < flatTxs.length; i++) {
        if (abortController.signal.aborted) {
          break;
        }
        const currentTx = flatTxs[i];
        if (!currentTx) {
          continue;
        }
        setCurrentTxIndex(i);
        const currentStepData = preparedQuote.steps[currentTx._stepIndex];
        if (!currentStepData) {
          throw new Error(`Invalid step index: ${currentTx._stepIndex}`);
        }
        if (currentTx.chainId !== ((_a = wallet.getChain()) == null ? void 0 : _a.id)) {
          await wallet.switchChain(getCachedChain(currentTx.chainId));
        }
        const canBatch = account.sendBatchTransaction !== void 0 && i < flatTxs.length - 1;
        if (canBatch) {
          const batchTxs = [currentTx];
          let j = i + 1;
          while (j < flatTxs.length) {
            const nextTx = flatTxs[j];
            if (!nextTx || nextTx.chainId !== currentTx.chainId) {
              break;
            }
            batchTxs.push(nextTx);
            j++;
          }
          if (batchTxs.length > 1) {
            await executeBatch(batchTxs, account, completedStatusResults, abortController.signal);
            for (const tx of batchTxs) {
              setCompletedTxs((prev) => new Set(prev).add(tx._index));
            }
            i = j - 1;
            continue;
          }
        }
        await executeSingleTx(currentTx, account, completedStatusResults, abortController.signal);
        setCompletedTxs((prev) => new Set(prev).add(currentTx._index));
      }
      if (!abortController.signal.aborted) {
        setCurrentTxIndex(void 0);
        if (onComplete) {
          onComplete(completedStatusResults);
        }
      }
    } catch (err) {
      console.error("Error executing payment", err);
      if (err instanceof ApiError) {
        setError(err);
      } else {
        setError(new ApiError({
          code: "UNKNOWN_ERROR",
          message: (err == null ? void 0 : err.message) || "An unknown error occurred",
          statusCode: 500
        }));
      }
    } finally {
      setExecutionState("idle");
      abortControllerRef.current = null;
    }
  }, [
    executionState,
    wallet,
    currentTxIndex,
    flatTxs,
    executeSingleTx,
    executeBatch,
    onrampStatus,
    executeOnramp,
    onComplete,
    preparedQuote
  ]);
  const start = (0, import_react14.useCallback)(() => {
    if (executionState === "idle") {
      execute();
    }
  }, [execute, executionState]);
  const cancel = (0, import_react14.useCallback)(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setExecutionState("idle");
    if (onrampStatus === "executing") {
      setOnrampStatus("pending");
    }
  }, [onrampStatus]);
  const retry = (0, import_react14.useCallback)(() => {
    if (error) {
      setError(void 0);
      execute();
    }
  }, [error, execute]);
  const hasInitialized = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    if (autoStart && executionState === "idle" && currentTxIndex === void 0 && !hasInitialized.current) {
      hasInitialized.current = true;
      setExecutionState("auto-starting");
      setTimeout(() => {
        start();
      }, 500);
    }
  }, [autoStart, executionState, currentTxIndex, start]);
  (0, import_react14.useEffect)(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
  return {
    cancel,
    currentStep,
    currentTxIndex,
    error,
    executionState,
    onrampStatus,
    progress,
    retry,
    start,
    steps: preparedQuote == null ? void 0 : preparedQuote.steps
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/StepRunner.js
function StepRunner({ request, wallet, client, windowAdapter, onComplete, onCancel, onBack, autoStart }) {
  const theme = useCustomTheme();
  const { currentStep, progress, executionState, onrampStatus, steps, error, start, cancel, retry } = useStepExecutor({
    autoStart,
    client,
    onComplete: (completedStatuses) => {
      onComplete(completedStatuses);
    },
    request,
    wallet,
    windowAdapter
  });
  const handleCancel = () => {
    cancel();
    if (onCancel) {
      onCancel();
    }
  };
  const handleRetry = () => {
    retry();
  };
  const getStepStatus = (stepIndex) => {
    if (!currentStep || !steps) {
      return stepIndex === 0 ? error ? "failed" : "pending" : "pending";
    }
    const currentStepIndex = steps.findIndex((step) => step === currentStep);
    if (stepIndex < currentStepIndex)
      return "completed";
    if (stepIndex === currentStepIndex && executionState === "executing")
      return "executing";
    if (stepIndex === currentStepIndex && error)
      return "failed";
    if (stepIndex === currentStepIndex && executionState === "idle" && progress === 100)
      return "completed";
    return "pending";
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return (0, import_jsx_runtime18.jsx)(CheckIcon, { color: theme.colors.accentButtonText, height: iconSize.sm, width: iconSize.sm });
      case "executing":
        return (0, import_jsx_runtime18.jsx)(Spinner, { color: "accentButtonText", size: "sm" });
      case "failed":
        return (0, import_jsx_runtime18.jsx)(Cross1Icon, { color: "white", height: iconSize.sm, width: iconSize.sm });
      default:
        return (0, import_jsx_runtime18.jsx)(ClockIcon, { color: theme.colors.primaryText, height: iconSize.sm, width: iconSize.sm });
    }
  };
  const getStepBackgroundColor = (status) => {
    switch (status) {
      case "completed":
        return theme.colors.tertiaryBg;
      case "executing":
        return theme.colors.tertiaryBg;
      case "failed":
        return theme.colors.tertiaryBg;
      default:
        return theme.colors.tertiaryBg;
    }
  };
  const getIconBackgroundColor = (status) => {
    switch (status) {
      case "completed":
        return theme.colors.success;
      case "executing":
        return theme.colors.accentButtonBg;
      case "failed":
        return theme.colors.danger;
      default:
        return theme.colors.borderColor;
    }
  };
  const getStepDescription = (step) => {
    const { originToken, destinationToken } = step;
    if (originToken.chainId !== destinationToken.chainId) {
      return (0, import_jsx_runtime18.jsxs)(Container, { flex: "row", gap: "3xs", children: [(0, import_jsx_runtime18.jsxs)(Text, { color: "primaryText", size: "sm", children: ["Bridge ", originToken.symbol, " to", " "] }), (0, import_jsx_runtime18.jsx)(ChainName2, { chain: getDestinationChain(request), client, color: "primaryText", short: true, size: "sm" })] });
    }
    if (originToken.symbol !== destinationToken.symbol) {
      return (0, import_jsx_runtime18.jsxs)(Text, { color: "primaryText", size: "sm", children: ["Swap ", originToken.symbol, " to ", destinationToken.symbol] });
    }
    return (0, import_jsx_runtime18.jsx)(Text, { color: "primaryText", size: "sm", children: "Process transaction" });
  };
  const getStepStatusText = (status) => {
    switch (status) {
      case "executing":
        return "Processing...";
      case "completed":
        return "Completed";
      case "pending":
        return "Waiting...";
      case "failed":
        return "Failed";
      default:
        return "Unknown";
    }
  };
  return (0, import_jsx_runtime18.jsxs)(Container, { flex: "column", fullHeight: true, p: "lg", children: [(0, import_jsx_runtime18.jsx)(ModalHeader, { onBack, title: "Processing Payment" }), (0, import_jsx_runtime18.jsx)(Spacer, { y: "xl" }), (0, import_jsx_runtime18.jsxs)(Container, { flex: "column", children: [(0, import_jsx_runtime18.jsxs)(Container, { flex: "column", gap: "sm", children: [(0, import_jsx_runtime18.jsxs)(Container, { center: "y", flex: "row", children: [(0, import_jsx_runtime18.jsx)(Text, { color: "secondaryText", size: "sm", style: { flex: 1 }, children: "Progress" }), (0, import_jsx_runtime18.jsxs)(Text, { color: "primaryText", size: "sm", children: [progress, "%"] })] }), (0, import_jsx_runtime18.jsx)(Container, { style: {
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: "4px",
    height: "8px",
    overflow: "hidden",
    width: "100%"
  }, children: (0, import_jsx_runtime18.jsx)(Container, { style: {
    backgroundColor: error ? theme.colors.danger : theme.colors.accentButtonBg,
    height: "100%",
    transition: "width 0.3s ease",
    width: `${progress}%`
  }, children: (0, import_jsx_runtime18.jsx)(Text, {}) }) })] }), (0, import_jsx_runtime18.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime18.jsxs)(Container, { flex: "column", gap: "sm", children: [request.type === "onramp" && onrampStatus ? (0, import_jsx_runtime18.jsxs)(Container, { flex: "row", gap: "md", style: {
    alignItems: "center",
    backgroundColor: getStepBackgroundColor(onrampStatus),
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    padding: `${spacing.sm} ${spacing.md}`
  }, children: [(0, import_jsx_runtime18.jsx)(Container, { center: "both", flex: "row", style: {
    backgroundColor: getIconBackgroundColor(onrampStatus),
    borderRadius: "50%",
    color: theme.colors.primaryButtonText,
    flexShrink: 0,
    height: `${iconSize.lg}px`,
    width: `${iconSize.lg}px`
  }, children: getStatusIcon(onrampStatus) }), (0, import_jsx_runtime18.jsxs)(Container, { flex: "column", gap: "3xs", style: { flex: 1 }, children: [(0, import_jsx_runtime18.jsx)(Text, { color: "primaryText", size: "sm", children: request.onramp.slice(0, 1).toUpperCase() + request.onramp.slice(1) }), (0, import_jsx_runtime18.jsx)(Text, { color: "secondaryText", size: "xs", children: getStepStatusText(onrampStatus) })] })] }) : null, steps == null ? void 0 : steps.map((step, index) => {
    const status = getStepStatus(index);
    return (0, import_jsx_runtime18.jsxs)(Container, { flex: "row", gap: "md", style: {
      alignItems: "center",
      backgroundColor: getStepBackgroundColor(status),
      border: `1px solid ${theme.colors.borderColor}`,
      borderRadius: radius.md,
      padding: `${spacing.sm} ${spacing.md}`
    }, children: [(0, import_jsx_runtime18.jsx)(Container, { center: "both", flex: "row", style: {
      backgroundColor: getIconBackgroundColor(status),
      borderRadius: "50%",
      color: theme.colors.primaryButtonText,
      flexShrink: 0,
      height: `${iconSize.lg}px`,
      width: `${iconSize.lg}px`
    }, children: getStatusIcon(status) }), (0, import_jsx_runtime18.jsxs)(Container, { flex: "column", gap: "3xs", style: { flex: 1 }, children: [getStepDescription(step), (0, import_jsx_runtime18.jsx)(Text, { color: "secondaryText", size: "xs", children: getStepStatusText(status) })] })] }, `${step.originToken.chainId}-${step.destinationToken.chainId}-${index}`);
  })] }), (0, import_jsx_runtime18.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime18.jsxs)(Text, { center: true, color: "secondaryText", size: "xs", children: ["Keep this window open until all", (0, import_jsx_runtime18.jsx)("br", {}), " transactions are complete."] }), (0, import_jsx_runtime18.jsx)(Spacer, { y: "lg" }), error ? (0, import_jsx_runtime18.jsx)(Container, { flex: "row", gap: "md", children: (0, import_jsx_runtime18.jsx)(Button, { fullWidth: true, onClick: handleRetry, variant: "primary", children: "Retry" }) }) : executionState === "idle" && progress === 0 ? (0, import_jsx_runtime18.jsx)(Button, { fullWidth: true, onClick: start, variant: "accent", children: "Start Transaction" }) : executionState === "executing" || executionState === "auto-starting" ? (0, import_jsx_runtime18.jsx)(Button, { fullWidth: true, onClick: handleCancel, variant: "secondary", children: "Cancel Transaction" }) : null] })] });
}
function getDestinationChain(request) {
  switch (request.type) {
    case "onramp":
      return defineChain(request.chainId);
    case "buy":
    case "sell":
      return defineChain(request.destinationChainId);
    case "transfer":
      return defineChain(request.chainId);
    default:
      throw new Error("Invalid quote type");
  }
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/TransactionPayment.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
function TransactionPayment({ uiOptions, client, onContinue, connectOptions }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const theme = useCustomTheme();
  const activeAccount = useActiveAccount();
  const wallet = useActiveWallet();
  const chainMetadata = useChainMetadata(uiOptions.transaction.chain);
  const transactionDataQuery = useTransactionDetails({
    client,
    transaction: uiOptions.transaction,
    wallet
  });
  const contractName = ((_b = (_a = transactionDataQuery.data) == null ? void 0 : _a.contractMetadata) == null ? void 0 : _b.name) || "Unknown Contract";
  const functionName = ((_d = (_c = transactionDataQuery.data) == null ? void 0 : _c.functionInfo) == null ? void 0 : _d.functionName) || "Contract Call";
  const isLoading = transactionDataQuery.isLoading || chainMetadata.isLoading;
  const buttonLabel = `Execute ${functionName}`;
  if (isLoading) {
    return (0, import_jsx_runtime19.jsxs)(WithHeader, { client, defaultTitle: "Transaction", uiOptions, children: [(0, import_jsx_runtime19.jsx)(SkeletonHeader, { theme }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime19.jsx)(Line, {}), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime19.jsx)(SkeletonRow, { theme, width: "60%" }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime19.jsx)(SkeletonRow, { theme, width: "40%" }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime19.jsx)(SkeletonRow, { theme, width: "50%" }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime19.jsx)(SkeletonRow, { theme, width: "45%" }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime19.jsx)(SkeletonRow, { theme, width: "55%" }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime19.jsx)(Line, {}), (0, import_jsx_runtime19.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime19.jsx)("div", { style: {
      backgroundColor: theme.colors.skeletonBg,
      borderRadius: spacing.md,
      height: "48px",
      width: "100%"
    } }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime19.jsx)(PoweredByThirdweb, {}), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" })] });
  }
  return (0, import_jsx_runtime19.jsxs)(WithHeader, { client, defaultTitle: "Transaction", uiOptions, children: [(0, import_jsx_runtime19.jsxs)(Container, { center: "y", flex: "row", gap: "3xs", style: {
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime19.jsx)(Text, { color: "primaryText", size: "xl", weight: 700, children: ((_e = transactionDataQuery.data) == null ? void 0 : _e.usdValueDisplay) || ((_f = transactionDataQuery.data) == null ? void 0 : _f.txCostDisplay) }), (0, import_jsx_runtime19.jsx)(Text, { color: "secondaryText", size: "md", style: {
    backgroundColor: theme.colors.tertiaryBg,
    borderRadius: spacing.sm,
    fontFamily: "monospace",
    padding: `${spacing.xs} ${spacing.sm}`,
    textAlign: "right"
  }, children: functionName })] }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime19.jsx)(Line, {}), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime19.jsxs)(Container, { flex: "row", style: {
    alignItems: "center",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime19.jsx)(Text, { color: "secondaryText", size: "sm", children: "Contract" }), (0, import_jsx_runtime19.jsx)(Text, { color: "primaryText", size: "sm", children: contractName })] }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime19.jsxs)(Container, { flex: "row", style: {
    alignItems: "center",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime19.jsx)(Text, { color: "secondaryText", size: "sm", children: "Address" }), (0, import_jsx_runtime19.jsx)("a", { href: `https://thirdweb.com/${uiOptions.transaction.chain.id}/${uiOptions.transaction.to}`, rel: "noopener noreferrer", style: {
    color: theme.colors.accentText,
    fontFamily: "monospace",
    fontSize: fontSize.sm,
    textDecoration: "none"
  }, target: "_blank", children: shortenAddress(uiOptions.transaction.to) })] }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "xs" }), (0, import_jsx_runtime19.jsxs)(Container, { flex: "row", style: {
    alignItems: "center",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime19.jsx)(Text, { color: "secondaryText", size: "sm", children: "Network" }), (0, import_jsx_runtime19.jsxs)(Container, { center: "y", flex: "row", gap: "3xs", children: [(0, import_jsx_runtime19.jsx)(ChainIcon2, { chain: uiOptions.transaction.chain, client, size: "xs" }), (0, import_jsx_runtime19.jsx)(ChainName2, { chain: uiOptions.transaction.chain, client, color: "primaryText", short: true, size: "sm", style: {
    fontFamily: "monospace"
  } })] })] }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "xs" }), ((_g = transactionDataQuery.data) == null ? void 0 : _g.txCostDisplay) && (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [(0, import_jsx_runtime19.jsxs)(Container, { flex: "row", style: {
    alignItems: "center",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime19.jsx)(Text, { color: "secondaryText", size: "sm", children: "Cost" }), (0, import_jsx_runtime19.jsx)(Text, { color: "primaryText", size: "sm", style: {
    fontFamily: "monospace"
  }, children: (_h = transactionDataQuery.data) == null ? void 0 : _h.txCostDisplay })] }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "xs" })] }), ((_i = transactionDataQuery.data) == null ? void 0 : _i.gasCostDisplay) && (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [(0, import_jsx_runtime19.jsxs)(Container, { flex: "row", style: {
    alignItems: "center",
    justifyContent: "space-between"
  }, children: [(0, import_jsx_runtime19.jsx)(Text, { color: "secondaryText", size: "sm", children: "Network fees" }), (0, import_jsx_runtime19.jsx)(Text, { color: "primaryText", size: "sm", style: {
    fontFamily: "monospace"
  }, children: (_j = transactionDataQuery.data) == null ? void 0 : _j.gasCostDisplay })] }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" })] }), (0, import_jsx_runtime19.jsx)(Line, {}), (0, import_jsx_runtime19.jsx)(Spacer, { y: "lg" }), activeAccount ? (0, import_jsx_runtime19.jsx)(Button, { fullWidth: true, onClick: () => {
    var _a2;
    if ((_a2 = transactionDataQuery.data) == null ? void 0 : _a2.tokenInfo) {
      onContinue(transactionDataQuery.data.totalCost, transactionDataQuery.data.tokenInfo, getAddress(activeAccount.address));
    }
  }, style: {
    fontSize: fontSize.md,
    padding: `${spacing.sm} ${spacing.md}`
  }, variant: "primary", children: buttonLabel }) : (0, import_jsx_runtime19.jsx)(ConnectButton, { client, connectButton: {
    label: buttonLabel
  }, theme, ...connectOptions }), (0, import_jsx_runtime19.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime19.jsx)(PoweredByThirdweb, {}), (0, import_jsx_runtime19.jsx)(Spacer, { y: "lg" })] });
}
var SkeletonHeader = (props) => (0, import_jsx_runtime19.jsxs)(Container, { center: "y", flex: "row", gap: "3xs", style: {
  justifyContent: "space-between"
}, children: [(0, import_jsx_runtime19.jsx)("div", { style: {
  backgroundColor: props.theme.colors.skeletonBg,
  borderRadius: spacing.xs,
  height: "32px",
  width: "80px"
} }), (0, import_jsx_runtime19.jsx)("div", { style: {
  backgroundColor: props.theme.colors.skeletonBg,
  borderRadius: spacing.sm,
  height: "24px",
  width: "120px"
} })] });
var SkeletonRow = ({ width = "100%", theme }) => (0, import_jsx_runtime19.jsxs)(Container, { flex: "row", style: {
  alignItems: "center",
  justifyContent: "space-between"
}, children: [(0, import_jsx_runtime19.jsx)("div", { style: {
  backgroundColor: theme.colors.skeletonBg,
  borderRadius: spacing.xs,
  height: "16px",
  width: "30%"
} }), (0, import_jsx_runtime19.jsx)("div", { style: {
  backgroundColor: theme.colors.skeletonBg,
  borderRadius: spacing.xs,
  height: "16px",
  width
} })] });

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/BridgeOrchestrator.js
function BridgeOrchestrator({ client, uiOptions, receiverAddress, onComplete, onError, onCancel, connectOptions, connectLocale, purchaseData, paymentLinkId, presetOptions, paymentMethods = ["crypto", "card"] }) {
  var _a, _b;
  const adapters = (0, import_react15.useMemo)(() => ({
    storage: webLocalStorage,
    window: webWindowAdapter
  }), []);
  const [state, send] = usePaymentMachine(adapters, uiOptions.mode);
  const handleBuyComplete = (0, import_react15.useCallback)(() => {
    if (uiOptions.mode === "transaction") {
      send({ type: "CONTINUE_TO_TRANSACTION" });
    } else {
      onComplete == null ? void 0 : onComplete();
      send({ type: "RESET" });
    }
  }, [onComplete, send, uiOptions.mode]);
  const handlePostBuyTransactionComplete = (0, import_react15.useCallback)(() => {
    onComplete == null ? void 0 : onComplete();
    send({ type: "RESET" });
  }, [onComplete, send]);
  const handleError = (0, import_react15.useCallback)((error) => {
    onError == null ? void 0 : onError(error);
    send({ error, type: "ERROR_OCCURRED" });
  }, [onError, send]);
  const handlePaymentMethodSelected = (0, import_react15.useCallback)((paymentMethod) => {
    send({ paymentMethod, type: "PAYMENT_METHOD_SELECTED" });
  }, [send]);
  const handleQuoteReceived = (0, import_react15.useCallback)((quote2, request) => {
    send({ quote: quote2, request, type: "QUOTE_RECEIVED" });
  }, [send]);
  const handleRouteConfirmed = (0, import_react15.useCallback)(() => {
    send({ type: "ROUTE_CONFIRMED" });
  }, [send]);
  const handleExecutionComplete = (0, import_react15.useCallback)((completedStatuses) => {
    send({ completedStatuses, type: "EXECUTION_COMPLETE" });
  }, [send]);
  const handleRetry = (0, import_react15.useCallback)(() => {
    send({ type: "RETRY" });
  }, [send]);
  const handleRequirementsResolved = (0, import_react15.useCallback)((amount, token, receiverAddress2) => {
    send({
      destinationAmount: amount,
      destinationToken: token,
      receiverAddress: receiverAddress2,
      type: "DESTINATION_CONFIRMED"
    });
  }, [send]);
  return (0, import_jsx_runtime20.jsxs)(Container, { flex: "column", fullHeight: true, children: [state.value === "error" && state.context.currentError && (0, import_jsx_runtime20.jsx)(ErrorBanner, { client, error: state.context.currentError, onCancel, onRetry: handleRetry }), state.value === "init" && uiOptions.mode === "fund_wallet" && (0, import_jsx_runtime20.jsx)(FundWallet, { client, connectOptions, onContinue: handleRequirementsResolved, presetOptions, receiverAddress, uiOptions }), state.value === "init" && uiOptions.mode === "direct_payment" && (0, import_jsx_runtime20.jsx)(DirectPayment, { client, connectOptions, onContinue: handleRequirementsResolved, uiOptions }), state.value === "init" && uiOptions.mode === "transaction" && (0, import_jsx_runtime20.jsx)(TransactionPayment, { client, connectOptions, onContinue: handleRequirementsResolved, uiOptions }), state.value === "methodSelection" && state.context.destinationToken && state.context.destinationAmount && state.context.receiverAddress && (0, import_jsx_runtime20.jsx)(PaymentSelection, { client, connectLocale: connectLocale || en_default, connectOptions, destinationAmount: state.context.destinationAmount, destinationToken: state.context.destinationToken, includeDestinationToken: uiOptions.mode !== "fund_wallet", onBack: () => {
    send({ type: "BACK" });
  }, onError: handleError, onPaymentMethodSelected: handlePaymentMethodSelected, paymentMethods, receiverAddress: state.context.receiverAddress }), state.value === "quote" && state.context.selectedPaymentMethod && state.context.receiverAddress && state.context.destinationToken && state.context.destinationAmount && (0, import_jsx_runtime20.jsx)(QuoteLoader, { amount: state.context.destinationAmount, client, destinationToken: state.context.destinationToken, mode: uiOptions.mode, onBack: () => {
    send({ type: "BACK" });
  }, onError: handleError, onQuoteReceived: handleQuoteReceived, paymentLinkId, paymentMethod: state.context.selectedPaymentMethod, purchaseData, receiver: state.context.receiverAddress }), state.value === "preview" && state.context.selectedPaymentMethod && state.context.quote && (0, import_jsx_runtime20.jsx)(PaymentDetails, { client, onBack: () => {
    send({ type: "BACK" });
  }, onConfirm: handleRouteConfirmed, onError: handleError, paymentMethod: state.context.selectedPaymentMethod, preparedQuote: state.context.quote, uiOptions }), state.value === "execute" && state.context.quote && state.context.request && ((_a = state.context.selectedPaymentMethod) == null ? void 0 : _a.payerWallet) && (0, import_jsx_runtime20.jsx)(StepRunner, { autoStart: true, client, onBack: () => {
    send({ type: "BACK" });
  }, onCancel, onComplete: handleExecutionComplete, request: state.context.request, wallet: (_b = state.context.selectedPaymentMethod) == null ? void 0 : _b.payerWallet, windowAdapter: webWindowAdapter }), state.value === "success" && state.context.quote && state.context.completedStatuses && (0, import_jsx_runtime20.jsx)(SuccessScreen, { client, completedStatuses: state.context.completedStatuses, onDone: handleBuyComplete, preparedQuote: state.context.quote, uiOptions, windowAdapter: webWindowAdapter }), state.value === "post-buy-transaction" && uiOptions.mode === "transaction" && uiOptions.transaction && (0, import_jsx_runtime20.jsx)(ExecutingTxScreen, { closeModal: handlePostBuyTransactionComplete, onTxSent: () => {
  }, tx: uiOptions.transaction, windowAdapter: webWindowAdapter })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/DepositScreen.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var pulseAnimation = keyframes`
0% {
  opacity: 1;
  transform: scale(0.5);
}
100% {
  opacity: 0;
  transform: scale(1.5);
}
`;
var WaitingBadge = StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    "&::before": {
      animation: `${pulseAnimation} 1s infinite`,
      backgroundColor: theme.colors.accentText,
      borderRadius: "50%",
      content: '""',
      height: "8px",
      width: "8px"
    },
    alignItems: "center",
    backgroundColor: theme.colors.tertiaryBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.lg,
    color: theme.colors.secondaryText,
    display: "flex",
    fontSize: fontSize.sm,
    fontWeight: 500,
    gap: spacing.sm,
    padding: `${spacing.md} ${spacing.sm}`,
    position: "relative"
  };
});
function DepositScreen(props) {
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const address = activeAccount == null ? void 0 : activeAccount.address;
  const { hasCopied, onCopy } = useClipboard(address || "");
  const { connectLocale, client } = props;
  const locale = connectLocale.receiveFundsScreen;
  const isTestnet = props.tx.chain.testnet === true;
  const { data: transactionCostAndData, error: transactionCostAndDataError, isFetching: transactionCostAndDataFetching, refetch: transactionCostAndDataRefetch } = useTransactionCostAndData({
    account: activeAccount,
    refetchIntervalMs: 1e4,
    supportedDestinations: [],
    transaction: props.tx
  });
  const theme = useCustomTheme();
  const sponsoredTransactionsEnabled = hasSponsoredTransactionsEnabled(activeWallet);
  if (transactionCostAndDataError) {
    return (0, import_jsx_runtime21.jsx)(Container, { center: "both", flex: "row", fullHeight: true, style: {
      minHeight: "350px"
    }, children: (0, import_jsx_runtime21.jsx)(ErrorState, { onTryAgain: transactionCostAndDataRefetch, title: (transactionCostAndDataError == null ? void 0 : transactionCostAndDataError.message) || "Something went wrong" }) });
  }
  if (!transactionCostAndData) {
    return (0, import_jsx_runtime21.jsx)(LoadingScreen, {});
  }
  const totalCost = isNativeToken(transactionCostAndData.token) && !sponsoredTransactionsEnabled ? transactionCostAndData.transactionValueWei + transactionCostAndData.gasCostWei : transactionCostAndData.transactionValueWei;
  const insufficientFunds = transactionCostAndData.walletBalance.value < totalCost;
  const requiredFunds = transactionCostAndData.walletBalance.value ? totalCost - transactionCostAndData.walletBalance.value : totalCost;
  const openFaucetLink = () => {
    window.open(`https://thirdweb.com/${props.tx.chain.id}?utm_source=ub_deposit`);
  };
  return (0, import_jsx_runtime21.jsxs)(Container, { p: "lg", children: [(0, import_jsx_runtime21.jsx)(ModalHeader, { onBack: props.onBack, title: "Insufficient funds" }), (0, import_jsx_runtime21.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime21.jsxs)(Container, { flex: "column", gap: "sm", children: [insufficientFunds && (0, import_jsx_runtime21.jsx)("div", { children: (0, import_jsx_runtime21.jsxs)(Text, { center: true, color: "danger", multiline: true, size: "xs", children: ["You need", " ", formatNumber(Number.parseFloat(toTokens(requiredFunds, transactionCostAndData.decimals)), 5), " ", transactionCostAndData.token.symbol, " to continue"] }) }), (0, import_jsx_runtime21.jsxs)(Container, { flex: "row", style: {
    border: `1px solid ${theme.colors.borderColor}`,
    borderBottom: "none",
    borderRadius: `${radius.md} ${radius.md} 0 0`,
    justifyContent: "space-between",
    padding: spacing.sm
  }, children: [activeAccount && (0, import_jsx_runtime21.jsx)(WalletRow, { address: activeAccount == null ? void 0 : activeAccount.address, client, iconSize: "md" }), transactionCostAndData.walletBalance.value !== void 0 && !transactionCostAndDataFetching ? (0, import_jsx_runtime21.jsxs)(Container, { center: "y", flex: "row", gap: "3xs", children: [(0, import_jsx_runtime21.jsx)(Text, { color: "secondaryText", size: "xs", weight: 500, children: formatTokenBalance(transactionCostAndData.walletBalance, false) }), (0, import_jsx_runtime21.jsx)(TokenSymbol, { chain: props.tx.chain, color: "secondaryText", size: "xs", token: transactionCostAndData.token })] }) : (0, import_jsx_runtime21.jsx)(Container, { center: "y", flex: "row", gap: "3xs", children: (0, import_jsx_runtime21.jsx)(Skeleton, { height: fontSize.xs, width: "70px" }) })] })] }), (0, import_jsx_runtime21.jsx)(WalletAddressContainer, { onClick: onCopy, children: (0, import_jsx_runtime21.jsxs)(Container, { center: "both", expand: true, flex: "column", gap: "md", children: [(0, import_jsx_runtime21.jsx)(Container, { center: "x", flex: "row", children: (0, import_jsx_runtime21.jsx)(QRCode, { QRIcon: activeWallet && (0, import_jsx_runtime21.jsx)(WalletImage, { client, id: activeWallet.id, size: iconSize.xl }), qrCodeUri: address, size: 250 }) }), (0, import_jsx_runtime21.jsxs)(Container, { center: "x", flex: "row", gap: "xs", children: [(0, import_jsx_runtime21.jsx)(Text, { color: "primaryText", size: "md", style: {
    fontFamily: "monospace"
  }, children: address ? shortenAddress(address) : "" }), (0, import_jsx_runtime21.jsx)(CopyIcon2, { hasCopied, text: address || "", tip: "Copy address" })] })] }) }), (0, import_jsx_runtime21.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime21.jsx)(Text, { balance: true, center: true, className: "receive_fund_screen_instruction", multiline: true, size: "sm", children: locale.instruction }), (0, import_jsx_runtime21.jsx)(Spacer, { y: "md" }), insufficientFunds ? (0, import_jsx_runtime21.jsxs)(WaitingBadge, { children: ["Waiting for funds on ", transactionCostAndData.chainMetadata.name, "..."] }) : (0, import_jsx_runtime21.jsx)(Button, { fullWidth: true, onClick: props.onDone, variant: "accent", children: "Continue" }), insufficientFunds && isTestnet && (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [(0, import_jsx_runtime21.jsx)(Spacer, { y: "md" }), (0, import_jsx_runtime21.jsx)(Button, { fullWidth: true, onClick: openFaucetLink, variant: "link", children: (0, import_jsx_runtime21.jsxs)(Container, { center: "x", color: "accentText", flex: "row", gap: "xs", children: [(0, import_jsx_runtime21.jsx)(CoinsIcon, { size: iconSize.sm }), (0, import_jsx_runtime21.jsx)(Text, { center: true, color: "accentText", size: "xs", weight: 500, children: "Get testnet funds" })] }) })] })] });
}
var WalletAddressContainer = StyledButton((_) => {
  const theme = useCustomTheme();
  return {
    "&:hover": {
      borderColor: theme.colors.accentText
    },
    all: "unset",
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: `0 0 ${radius.md} ${radius.md}`,
    boxSizing: "border-box",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    padding: spacing.md,
    transition: "border-color 200ms ease",
    width: "100%"
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/TransactionModal.js
function TransactionModal(props) {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  useQuery({
    enabled: !!wallet && !!account,
    queryFn: async () => {
      var _a;
      if (!account || !wallet) {
        throw new Error();
      }
      trackPayEvent({
        client: props.client,
        event: props.modalMode === "buy" ? "open_pay_transaction_modal" : "open_pay_deposit_modal",
        toChainId: props.tx.chain.id,
        toToken: props.tx.erc20Value ? (_a = await resolvePromisedValue(props.tx.erc20Value)) == null ? void 0 : _a.tokenAddress : void 0,
        walletAddress: account.address,
        walletType: wallet.id
      });
      return null;
    },
    queryKey: ["transaction-modal-event", props.txId]
  });
  return (0, import_jsx_runtime22.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime22.jsx)(Modal, { open: true, setOpen: (_open) => {
    if (!_open) {
      props.onClose();
    }
  }, size: "compact", children: (0, import_jsx_runtime22.jsx)(TransactionModalContent, { ...props }) }) });
}
function TransactionModalContent(props) {
  const localeQuery = useConnectLocale(props.localeId);
  const [screen, setScreen] = (0, import_react17.useState)("buy");
  if (!localeQuery.data) {
    return (0, import_jsx_runtime22.jsx)(LoadingScreen, {});
  }
  if (screen === "execute-tx") {
    return (0, import_jsx_runtime22.jsx)(ExecutingTxScreen, { closeModal: props.onClose, onTxSent: props.onTxSent, tx: props.tx, windowAdapter: webWindowAdapter });
  }
  if (props.modalMode === "deposit") {
    return (0, import_jsx_runtime22.jsx)(DepositScreen, { client: props.client, connectLocale: localeQuery.data, onBack: props.onBack, onDone: () => {
      setScreen("execute-tx");
    }, tx: props.tx });
  }
  return (0, import_jsx_runtime22.jsx)(BridgeOrchestrator, { client: props.client, connectLocale: localeQuery.data, connectOptions: void 0, onCancel: props.onClose, onComplete: () => {
    setScreen("execute-tx");
  }, onError: (_error) => {
  }, paymentLinkId: void 0, presetOptions: void 0, purchaseData: void 0, receiverAddress: void 0, uiOptions: {
    mode: "transaction",
    transaction: props.tx
  } });
}

// node_modules/thirdweb/dist/esm/react/web/hooks/transaction/useSendTransaction.js
function useSendTransaction(config = {}) {
  const switchChain = useSwitchActiveWalletChain();
  const wallet = useActiveWallet();
  const setRootEl = (0, import_react18.useContext)(SetRootElementContext);
  const payModal = config.payModal;
  let payModalEnabled = true;
  if (payModal === false || config.gasless) {
    payModalEnabled = false;
  }
  const showPayModal = (data) => {
    var _a;
    if (payModal === false)
      return;
    setRootEl((0, import_jsx_runtime23.jsx)(TransactionModal, { client: data.tx.client, localeId: (payModal == null ? void 0 : payModal.locale) || "en_US", modalMode: data.mode, onClose: () => {
      setRootEl(null);
      data.rejectTx(new Error("User rejected transaction by closing modal"));
    }, onComplete: data.sendTx, onTxSent: data.resolveTx, payOptions: {
      buyWithCrypto: payModal == null ? void 0 : payModal.buyWithCrypto,
      buyWithFiat: payModal == null ? void 0 : payModal.buyWithFiat,
      metadata: payModal == null ? void 0 : payModal.metadata,
      mode: "transaction",
      onPurchaseSuccess: payModal == null ? void 0 : payModal.onPurchaseSuccess,
      purchaseData: payModal == null ? void 0 : payModal.purchaseData,
      showThirdwebBranding: payModal == null ? void 0 : payModal.showThirdwebBranding,
      transaction: data.tx
    }, supportedTokens: payModal == null ? void 0 : payModal.supportedTokens, theme: (payModal == null ? void 0 : payModal.theme) || "dark", title: ((_a = payModal == null ? void 0 : payModal.metadata) == null ? void 0 : _a.name) || "Transaction", tx: data.tx, txId: randomBytesHex() }));
  };
  return useSendTransactionCore({
    gasless: config.gasless,
    showPayModal: !payModalEnabled || payModal === false ? void 0 : showPayModal,
    switchChain,
    wallet
  });
}

// node_modules/thirdweb/dist/esm/react/web/hooks/wallets/useLinkProfile.js
function useLinkProfile() {
  const wallets = useConnectedWallets();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (options) => {
      var _a;
      const ecosystemWallet = wallets.find((w) => isEcosystemWallet(w));
      const ecosystem = ecosystemWallet ? {
        id: ecosystemWallet.id,
        partnerId: (_a = ecosystemWallet.getConfig()) == null ? void 0 : _a.partnerId
      } : void 0;
      const optionsWithEcosystem = { ...options, ecosystem };
      return linkProfile(optionsWithEcosystem);
    },
    mutationKey: ["profiles"],
    onSuccess() {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["profiles"] });
      }, 500);
    }
  });
}

// node_modules/thirdweb/dist/esm/react/web/providers/thirdweb-provider.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var import_react20 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/providers/thirdweb-provider.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react19 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/core/utils/structuralSharing.js
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    let length;
    let i;
    if (Array.isArray(a) && Array.isArray(b)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!deepEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.hasOwn(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key && !deepEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
function structuralSharing(oldData, newData) {
  if (deepEqual(oldData, newData)) {
    return oldData;
  }
  return replaceEqualDeep(oldData, newData);
}

// node_modules/thirdweb/dist/esm/react/core/providers/thirdweb-provider.js
function ThirdwebProviderCore(props) {
  const [el, setEl] = (0, import_react19.useState)(null);
  const [queryClient] = (0, import_react19.useState)(() => new QueryClient({
    defaultOptions: {
      mutations: {
        onSettled: (data, _error, variables) => {
          if (isBaseTransactionOptions(variables)) {
            if (isObjectWithKeys(data, ["transactionHash"]) && isObjectWithKeys(variables, ["client", "chain"])) {
              waitForReceipt({
                chain: variables.chain,
                // We know it exists from the if
                client: variables.client,
                transactionHash: data.transactionHash
              }).catch((e) => {
                console.error("[Transaction Error]", e);
              }).then(() => {
                var _a, _b, _c;
                return Promise.all([
                  queryClient.invalidateQueries({
                    queryKey: (
                      // invalidate any readContract queries for this chainId:contractAddress
                      [
                        "readContract",
                        ((_a = variables.__contract) == null ? void 0 : _a.chain.id) || variables.chain.id,
                        ((_b = variables.__contract) == null ? void 0 : _b.address) || variables.to
                      ]
                    )
                  }),
                  invalidateWalletBalance(queryClient, ((_c = variables.__contract) == null ? void 0 : _c.chain.id) || variables.chain.id)
                ]);
              });
            }
          }
        }
      },
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1e3,
        structuralSharing
      }
    }
  }));
  return (0, import_jsx_runtime24.jsx)(ConnectionManagerCtx.Provider, { value: props.manager, children: (0, import_jsx_runtime24.jsxs)(QueryClientProvider, { client: queryClient, children: [(0, import_jsx_runtime24.jsx)(SetRootElementContext.Provider, { value: setEl, children: props.children }), el] }) });
}

// node_modules/thirdweb/dist/esm/react/web/providers/thirdweb-provider.js
function ThirdwebProvider(props) {
  const connectionManager = (0, import_react20.useMemo)(() => props.connectionManager || createConnectionManager(webLocalStorage), [props.connectionManager]);
  return (0, import_jsx_runtime25.jsx)(ThirdwebProviderCore, { manager: connectionManager, children: props.children });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/BuyWidget.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/ConnectEmbed.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var import_react21 = __toESM(require_react(), 1);
function ConnectEmbed(props) {
  var _a, _b, _c;
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const siweAuth = useSiweAuth(activeWallet, activeAccount, props.auth);
  const show = !activeAccount || siweAuth.requiresAuth && !siweAuth.isLoggedIn;
  const connectionManager = useConnectionManager();
  (0, import_react21.useEffect)(() => {
    if (props.chain) {
      connectionManager.defineChains([props.chain]);
    }
  }, [props.chain, connectionManager]);
  (0, import_react21.useEffect)(() => {
    if (props.chains) {
      connectionManager.defineChains(props.chains);
    }
  }, [props.chains, connectionManager]);
  const wallets = (0, import_react21.useMemo)(() => props.wallets || getDefaultWallets({
    appMetadata: props.appMetadata,
    chains: props.chains
  }), [props.wallets, props.appMetadata, props.chains]);
  const localeId = props.locale || "en_US";
  const localeQuery = useConnectLocale(localeId);
  usePreloadWalletProviders({
    wallets
  });
  const modalSize = (0, import_react21.useMemo)(() => {
    return !canFitWideModal() || wallets.length === 1 ? "compact" : props.modalSize || "compact";
  }, [wallets.length, props.modalSize]);
  const meta = (0, import_react21.useMemo)(() => {
    return {
      privacyPolicyUrl: props.privacyPolicyUrl,
      requireApproval: props.requireApproval,
      showThirdwebBranding: props.showThirdwebBranding !== false,
      termsOfServiceUrl: props.termsOfServiceUrl,
      title: void 0,
      titleIconUrl: void 0
    };
  }, [
    props.privacyPolicyUrl,
    props.showThirdwebBranding,
    props.termsOfServiceUrl,
    props.requireApproval
  ]);
  const preferredChain = ((_a = props.accountAbstraction) == null ? void 0 : _a.chain) || props.chain || ((_b = props.chains) == null ? void 0 : _b[0]);
  const autoConnectComp = props.autoConnect !== false && (0, import_jsx_runtime26.jsx)(AutoConnect, { accountAbstraction: props.accountAbstraction, appMetadata: props.appMetadata, chain: preferredChain, client: props.client, onConnect: props.onConnect, siweAuth, timeout: typeof props.autoConnect === "boolean" ? void 0 : (_c = props.autoConnect) == null ? void 0 : _c.timeout, wallets });
  if (show) {
    if (!localeQuery.data) {
      return (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [autoConnectComp, (0, import_jsx_runtime26.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime26.jsx)(EmbedContainer, { modalSize, children: (0, import_jsx_runtime26.jsx)(LoadingScreen, {}) }) })] });
    }
    return (0, import_jsx_runtime26.jsxs)(WalletUIStatesProvider, { isOpen: true, theme: props.theme, children: [(0, import_jsx_runtime26.jsx)(ConnectEmbedContent, { accountAbstraction: props.accountAbstraction, auth: props.auth, chain: preferredChain, chains: props.chains, className: props.className, client: props.client, connectLocale: localeQuery.data, header: props.header, hiddenWallets: props.hiddenWallets, localeId: props.locale || "en_US", meta, modalSize, onConnect: props.onConnect, recommendedWallets: props.recommendedWallets, showAllWallets: props.showAllWallets, size: modalSize, style: props.style, walletConnect: props.walletConnect, wallets, welcomeScreen: props.welcomeScreen }), autoConnectComp] });
  }
  return (0, import_jsx_runtime26.jsx)("div", { children: autoConnectComp });
}
var ConnectEmbedContent = (props) => {
  const screenSetup = useSetupScreen({
    size: props.size,
    wallets: props.wallets,
    welcomeScreen: void 0
  });
  const { setScreen, initialScreen, screen } = screenSetup;
  const activeWallet = useActiveWallet();
  const activeAccount = useActiveAccount();
  const siweAuth = useSiweAuth(activeWallet, activeAccount, props.auth);
  const isAutoConnecting = useIsAutoConnecting();
  let content = null;
  (0, import_react21.useEffect)(() => {
    if (siweAuth.requiresAuth && !siweAuth.isLoggedIn && activeAccount && screen === initialScreen) {
      setScreen(reservedScreens.signIn);
    }
  }, [siweAuth, setScreen, activeAccount, screen, initialScreen]);
  const modalSize = !canFitWideModal() ? "compact" : props.modalSize || "compact";
  if (isAutoConnecting) {
    content = (0, import_jsx_runtime26.jsx)(LoadingScreen, {});
  } else {
    content = (0, import_jsx_runtime26.jsx)(ConnectModalContent, { accountAbstraction: props.accountAbstraction, auth: props.auth, chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, hideHeader: !props.header, isOpen: true, meta: {
      ...props.meta,
      title: typeof props.header === "object" ? props.header.title : void 0,
      titleIconUrl: typeof props.header === "object" ? props.header.titleIcon : void 0
    }, modalHeader: void 0, onClose: () => {
      setScreen(initialScreen);
    }, onConnect: props.onConnect, recommendedWallets: props.recommendedWallets, screenSetup, setModalVisibility: () => {
    }, shouldSetActive: true, showAllWallets: props.showAllWallets, size: props.size, walletConnect: props.walletConnect, walletIdsToHide: props.hiddenWallets, wallets: props.wallets, welcomeScreen: props.welcomeScreen });
  }
  return (0, import_jsx_runtime26.jsx)(EmbedContainer, { className: props.className, modalSize, style: props.style, children: modalSize === "wide" ? content : (0, import_jsx_runtime26.jsxs)(DynamicHeight, { children: [" ", content, " "] }) });
};
var EmbedContainer = StyledDiv((props) => {
  const { modalSize } = props;
  const theme = useCustomTheme();
  return {
    "& *": {
      boxSizing: "border-box"
    },
    "& *::selection": {
      backgroundColor: theme.colors.selectedTextBg,
      color: theme.colors.selectedTextColor
    },
    background: theme.colors.modalBg,
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: radius.xl,
    boxSizing: "border-box",
    color: theme.colors.primaryText,
    fontFamily: theme.fontFamily,
    height: modalSize === "compact" ? "auto" : wideModalMaxHeight,
    lineHeight: "normal",
    overflow: "hidden",
    position: "relative",
    width: modalSize === "compact" ? modalMaxWidthCompact : modalMaxWidthWide
  };
});

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/UnsupportedTokenScreen.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
function UnsupportedTokenScreen(props) {
  const { chain, tokenAddress, client } = props;
  const { data: chainMetadata } = useChainMetadata(chain);
  useQuery({
    queryFn: () => {
      trackPayEvent({
        chainId: chain.id,
        client,
        event: "ub:ui:unsupported_token",
        fromToken: tokenAddress
      });
    },
    queryKey: ["unsupported_token"]
  });
  if (chainMetadata == null ? void 0 : chainMetadata.testnet) {
    return (0, import_jsx_runtime27.jsxs)(Container, { animate: "fadein", center: "both", flex: "column", style: { minHeight: "350px" }, children: [(0, import_jsx_runtime27.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime27.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime27.jsx)(Text, { center: true, color: "primaryText", size: "lg", weight: 600, children: "Testnet Not Supported" }), (0, import_jsx_runtime27.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime27.jsx)(Text, { center: true, color: "secondaryText", size: "sm", style: { lineHeight: 1.5, maxWidth: "280px" }, children: "The Universal Bridge does not support testnets at this time." })] });
  }
  return (0, import_jsx_runtime27.jsxs)(Container, { animate: "fadein", center: "both", flex: "column", style: { minHeight: "350px" }, children: [(0, import_jsx_runtime27.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime27.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime27.jsx)(Text, { center: true, color: "primaryText", size: "lg", weight: 600, children: "Token Not Supported" }), (0, import_jsx_runtime27.jsx)(Spacer, { y: "sm" }), (0, import_jsx_runtime27.jsx)(Text, { center: true, color: "secondaryText", size: "sm", style: { lineHeight: 1.5, maxWidth: "280px" }, children: "This token or chain is not supported by the Universal Bridge." })] });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/BuyWidget.js
function BuyWidget(props) {
  var _a, _b;
  const localeQuery = useConnectLocale(props.locale || "en_US");
  const theme = props.theme || "dark";
  useQuery({
    queryFn: () => {
      trackPayEvent({
        client: props.client,
        event: "ub:ui:buy_widget:render",
        toChainId: props.chain.id,
        toToken: props.tokenAddress
      });
    },
    queryKey: ["buy_widget:render"]
  });
  const bridgeDataQuery = useQuery({
    queryFn: async () => {
      if (!props.tokenAddress || isAddress(props.tokenAddress) && checksumAddress(props.tokenAddress) === checksumAddress(NATIVE_TOKEN_ADDRESS)) {
        const ETH = await getToken(props.client, NATIVE_TOKEN_ADDRESS, props.chain.id);
        return {
          data: {
            destinationToken: ETH,
            initialAmount: props.amount,
            metadata: {
              description: props.description,
              image: props.image,
              title: props.title
            },
            mode: "fund_wallet"
          },
          type: "success"
        };
      }
      const token = await getToken(props.client, props.tokenAddress, props.chain.id).catch((err) => {
        err.message.includes("not supported") ? void 0 : Promise.reject(err);
      });
      if (!token) {
        return {
          chain: props.chain,
          tokenAddress: props.tokenAddress,
          type: "unsupported_token"
        };
      }
      return {
        data: {
          destinationToken: token,
          initialAmount: props.amount,
          metadata: {
            description: props.description,
            image: props.image,
            title: props.title
          },
          mode: "fund_wallet"
        },
        type: "success"
      };
    },
    queryKey: ["bridgeData", stringify(props)]
  });
  let content = null;
  if (!localeQuery.data || bridgeDataQuery.isLoading) {
    content = (0, import_jsx_runtime28.jsx)("div", { style: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      minHeight: "350px"
    }, children: (0, import_jsx_runtime28.jsx)(Spinner, { color: "secondaryText", size: "xl" }) });
  } else if (((_a = bridgeDataQuery.data) == null ? void 0 : _a.type) === "unsupported_token") {
    content = (0, import_jsx_runtime28.jsx)(UnsupportedTokenScreen, { chain: bridgeDataQuery.data.chain, client: props.client, tokenAddress: props.tokenAddress });
  } else if (((_b = bridgeDataQuery.data) == null ? void 0 : _b.type) === "success") {
    content = (0, import_jsx_runtime28.jsx)(BridgeOrchestrator, { client: props.client, connectLocale: localeQuery.data, connectOptions: props.connectOptions, onCancel: () => {
      var _a2;
      (_a2 = props.onCancel) == null ? void 0 : _a2.call(props);
    }, onComplete: () => {
      var _a2;
      (_a2 = props.onSuccess) == null ? void 0 : _a2.call(props);
    }, onError: (err) => {
      var _a2;
      (_a2 = props.onError) == null ? void 0 : _a2.call(props, err);
    }, paymentLinkId: props.paymentLinkId, paymentMethods: props.paymentMethods, presetOptions: props.presetOptions, purchaseData: props.purchaseData, receiverAddress: void 0, uiOptions: bridgeDataQuery.data.data });
  }
  return (0, import_jsx_runtime28.jsx)(CustomThemeProvider, { theme, children: (0, import_jsx_runtime28.jsx)(EmbedContainer, { className: props.className, modalSize: "compact", style: props.style, children: (0, import_jsx_runtime28.jsx)(DynamicHeight, { children: content }) }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/CheckoutWidget.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
function CheckoutWidget(props) {
  var _a, _b;
  const localeQuery = useConnectLocale(props.locale || "en_US");
  const theme = props.theme || "dark";
  useQuery({
    queryFn: () => {
      trackPayEvent({
        client: props.client,
        event: "ub:ui:checkout_widget:render",
        toChainId: props.chain.id,
        toToken: props.tokenAddress
      });
    },
    queryKey: ["checkout_widget:render"]
  });
  const bridgeDataQuery = useQuery({
    queryFn: async () => {
      const token = await getToken(props.client, checksumAddress(props.tokenAddress || NATIVE_TOKEN_ADDRESS), props.chain.id).catch((err) => err.message.includes("not supported") ? void 0 : Promise.reject(err));
      if (!token) {
        return {
          chain: props.chain,
          tokenAddress: checksumAddress(props.tokenAddress || NATIVE_TOKEN_ADDRESS),
          type: "unsupported_token"
        };
      }
      return {
        data: {
          metadata: {
            description: props.description,
            image: props.image,
            title: props.name
          },
          mode: "direct_payment",
          paymentInfo: {
            amount: props.amount,
            feePayer: props.feePayer === "seller" ? "receiver" : "sender",
            sellerAddress: props.seller,
            token
            // User is sender, seller is receiver
          }
        },
        type: "success"
      };
    },
    queryKey: ["bridgeData", stringify(props)]
  });
  let content = null;
  if (!localeQuery.data || bridgeDataQuery.isLoading) {
    content = (0, import_jsx_runtime29.jsx)("div", { style: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      minHeight: "350px"
    }, children: (0, import_jsx_runtime29.jsx)(Spinner, { color: "secondaryText", size: "xl" }) });
  } else if (((_a = bridgeDataQuery.data) == null ? void 0 : _a.type) === "unsupported_token") {
    content = (0, import_jsx_runtime29.jsx)(UnsupportedTokenScreen, { chain: bridgeDataQuery.data.chain, client: props.client, tokenAddress: props.tokenAddress });
  } else if (((_b = bridgeDataQuery.data) == null ? void 0 : _b.type) === "success") {
    content = (0, import_jsx_runtime29.jsx)(BridgeOrchestrator, { client: props.client, connectLocale: localeQuery.data, connectOptions: props.connectOptions, onCancel: () => {
      var _a2;
      (_a2 = props.onCancel) == null ? void 0 : _a2.call(props);
    }, onComplete: () => {
      var _a2;
      (_a2 = props.onSuccess) == null ? void 0 : _a2.call(props);
    }, onError: (err) => {
      var _a2;
      (_a2 = props.onError) == null ? void 0 : _a2.call(props, err);
    }, paymentLinkId: props.paymentLinkId, paymentMethods: props.paymentMethods, presetOptions: props.presetOptions, purchaseData: props.purchaseData, receiverAddress: props.seller, uiOptions: bridgeDataQuery.data.data });
  }
  return (0, import_jsx_runtime29.jsx)(CustomThemeProvider, { theme, children: (0, import_jsx_runtime29.jsx)(EmbedContainer, { className: props.className, modalSize: "compact", style: props.style, children: (0, import_jsx_runtime29.jsx)(DynamicHeight, { children: content }) }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/Bridge/TransactionWidget.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
function TransactionWidget(props) {
  var _a, _b;
  const localeQuery = useConnectLocale(props.locale || "en_US");
  const theme = props.theme || "dark";
  useQuery({
    queryFn: () => {
      trackPayEvent({
        chainId: props.transaction.chain.id,
        client: props.client,
        event: "ub:ui:transaction_widget:render",
        toToken: props.tokenAddress
      });
    },
    queryKey: ["transaction_widget:render"]
  });
  const bridgeDataQuery = useQuery({
    queryFn: async () => {
      let erc20Value = props.transaction.erc20Value;
      if (props.amount) {
        const tokenAddress = props.tokenAddress || NATIVE_TOKEN_ADDRESS;
        const token = await getToken(props.client, checksumAddress(tokenAddress), props.transaction.chain.id).catch((e) => {
          if (e instanceof Error && e.message.includes("not supported")) {
            return null;
          }
          throw e;
        });
        if (!token) {
          return {
            chain: props.transaction.chain,
            tokenAddress: checksumAddress(tokenAddress),
            type: "unsupported_token"
          };
        }
        erc20Value = {
          amountWei: toUnits(props.amount, token.decimals),
          tokenAddress: checksumAddress(tokenAddress)
        };
      }
      const transaction = prepareTransaction({
        ...props.transaction,
        erc20Value
      });
      return {
        data: {
          metadata: {
            description: props.description,
            image: props.image,
            title: props.title
          },
          mode: "transaction",
          transaction
        },
        type: "success"
      };
    },
    queryKey: ["bridgeData", stringify(props)],
    retry: 1
  });
  let content = null;
  if (!localeQuery.data || bridgeDataQuery.isLoading) {
    content = (0, import_jsx_runtime30.jsx)("div", { style: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      minHeight: "350px"
    }, children: (0, import_jsx_runtime30.jsx)(Spinner, { color: "secondaryText", size: "xl" }) });
  } else if (bridgeDataQuery.error) {
    content = (0, import_jsx_runtime30.jsxs)("div", { style: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "350px"
    }, children: [(0, import_jsx_runtime30.jsx)(AccentFailIcon, { size: iconSize["3xl"] }), (0, import_jsx_runtime30.jsx)(Spacer, { y: "lg" }), (0, import_jsx_runtime30.jsx)(Text, { color: "secondaryText", size: "md", children: bridgeDataQuery.error.message })] });
  } else if (((_a = bridgeDataQuery.data) == null ? void 0 : _a.type) === "unsupported_token") {
    content = (0, import_jsx_runtime30.jsx)(UnsupportedTokenScreen, { chain: bridgeDataQuery.data.chain, client: props.client, tokenAddress: props.tokenAddress });
  } else if (((_b = bridgeDataQuery.data) == null ? void 0 : _b.type) === "success") {
    content = (0, import_jsx_runtime30.jsx)(BridgeOrchestrator, { client: props.client, connectLocale: localeQuery.data, connectOptions: props.connectOptions, onCancel: () => {
      var _a2;
      (_a2 = props.onCancel) == null ? void 0 : _a2.call(props);
    }, onComplete: () => {
      var _a2;
      (_a2 = props.onSuccess) == null ? void 0 : _a2.call(props);
    }, onError: (err) => {
      var _a2;
      (_a2 = props.onError) == null ? void 0 : _a2.call(props, err);
    }, paymentLinkId: props.paymentLinkId, paymentMethods: props.paymentMethods, presetOptions: props.presetOptions, purchaseData: props.purchaseData, receiverAddress: void 0, uiOptions: bridgeDataQuery.data.data });
  }
  return (0, import_jsx_runtime30.jsx)(CustomThemeProvider, { theme, children: (0, import_jsx_runtime30.jsx)(EmbedContainer, { className: props.className, modalSize: "compact", style: props.style, children: (0, import_jsx_runtime30.jsx)(DynamicHeight, { children: content }) }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/useConnectModal.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var import_react22 = __toESM(require_react(), 1);
function useConnectModal() {
  const setRootEl = (0, import_react22.useContext)(SetRootElementContext);
  const [isConnecting, setIsConnecting] = (0, import_react22.useState)(false);
  const connect = (0, import_react22.useCallback)((props) => {
    function cleanup() {
      setIsConnecting(false);
      setRootEl(void 0);
    }
    return new Promise((resolve, reject) => {
      setIsConnecting(true);
      getConnectLocale(props.locale || "en_US").then((locale) => {
        setRootEl((0, import_jsx_runtime31.jsx)(Modal2, { ...props, connectLocale: locale, onClose: () => {
          reject();
          cleanup();
        }, onConnect: (w) => {
          if (props.auth)
            return;
          resolve(w);
          cleanup();
        } }));
      }).catch(() => {
        reject();
        cleanup();
      });
    });
  }, [setRootEl]);
  return { connect, isConnecting };
}
function Modal2(props) {
  const wallets = (0, import_react22.useMemo)(() => props.wallets || getDefaultWallets({
    appMetadata: props.appMetadata,
    chains: props.chains
  }), [props.wallets, props.appMetadata, props.chains]);
  const size = (0, import_react22.useMemo)(() => {
    return !canFitWideModal() || wallets.length === 1 ? "compact" : props.size || "wide";
  }, [props.size, wallets.length]);
  const meta = (0, import_react22.useMemo)(() => {
    return {
      privacyPolicyUrl: props.privacyPolicyUrl,
      showThirdwebBranding: props.showThirdwebBranding,
      termsOfServiceUrl: props.termsOfServiceUrl,
      title: props.title,
      titleIconUrl: props.titleIcon
    };
  }, [
    props.privacyPolicyUrl,
    props.showThirdwebBranding,
    props.termsOfServiceUrl,
    props.title,
    props.titleIcon
  ]);
  return (0, import_jsx_runtime31.jsx)(WalletUIStatesProvider, { isOpen: true, theme: props.theme, children: (0, import_jsx_runtime31.jsx)(ConnectModal_default, { accountAbstraction: props.accountAbstraction, auth: props.auth, chain: props.chain, chains: props.chains, client: props.client, connectLocale: props.connectLocale, hiddenWallets: props.hiddenWallets, localeId: props.locale || "en_US", meta, onClose: props.onClose, onConnect: props.onConnect, recommendedWallets: props.recommendedWallets, shouldSetActive: props.setActive === void 0 ? true : props.setActive, showAllWallets: props.showAllWallets, size, walletConnect: props.walletConnect, wallets, welcomeScreen: props.welcomeScreen }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/PayEmbed.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var import_react23 = __toESM(require_react(), 1);
function PayEmbed(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const localeQuery = useConnectLocale(props.locale || "en_US");
  const [screen, setScreen] = (0, import_react23.useState)("buy");
  const theme = props.theme || "dark";
  const connectionManager = useConnectionManager();
  const activeAccount = useActiveAccount();
  const activeWallet = useActiveWallet();
  const siweAuth = useSiweAuth(activeWallet, activeAccount, (_a = props.connectOptions) == null ? void 0 : _a.auth);
  (0, import_react23.useEffect)(() => {
    var _a2, _b2;
    if ((_a2 = props.connectOptions) == null ? void 0 : _a2.chain) {
      connectionManager.defineChains([(_b2 = props.connectOptions) == null ? void 0 : _b2.chain]);
    }
  }, [(_b = props.connectOptions) == null ? void 0 : _b.chain, connectionManager]);
  (0, import_react23.useEffect)(() => {
    var _a2, _b2;
    if ((_a2 = props.connectOptions) == null ? void 0 : _a2.chains) {
      connectionManager.defineChains((_b2 = props.connectOptions) == null ? void 0 : _b2.chains);
    }
  }, [(_c = props.connectOptions) == null ? void 0 : _c.chains, connectionManager]);
  (0, import_react23.useEffect)(() => {
    if (props.activeWallet) {
      connectionManager.setActiveWallet(props.activeWallet);
    }
  }, [props.activeWallet, connectionManager]);
  let content = null;
  const metadata = props.payOptions && "metadata" in props.payOptions ? props.payOptions.metadata : null;
  if (((_d = props.payOptions) == null ? void 0 : _d.mode) === "fund_wallet" && ((_e = props.payOptions) == null ? void 0 : _e.prefillBuy)) {
    return (0, import_jsx_runtime32.jsx)(BuyWidget, { amount: props.payOptions.prefillBuy.amount || "0.01", chain: props.payOptions.prefillBuy.chain, client: props.client, onSuccess: () => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.payOptions) == null ? void 0 : _a2.onPurchaseSuccess) == null ? void 0 : _b2.call(_a2);
    }, paymentMethods: ((_f = props.payOptions) == null ? void 0 : _f.buyWithFiat) === false ? ["crypto"] : ((_g = props.payOptions) == null ? void 0 : _g.buyWithCrypto) === false ? ["card"] : ["crypto", "card"], theme, title: (metadata == null ? void 0 : metadata.name) || "Buy", tokenAddress: (_h = props.payOptions.prefillBuy.token) == null ? void 0 : _h.address });
  }
  if (((_i = props.payOptions) == null ? void 0 : _i.mode) === "direct_payment") {
    return (0, import_jsx_runtime32.jsx)(CheckoutWidget, { amount: props.payOptions.paymentInfo.amount, chain: props.payOptions.paymentInfo.chain, client: props.client, description: metadata == null ? void 0 : metadata.description, image: metadata == null ? void 0 : metadata.image, name: (metadata == null ? void 0 : metadata.name) || "Checkout", onSuccess: () => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.payOptions) == null ? void 0 : _a2.onPurchaseSuccess) == null ? void 0 : _b2.call(_a2);
    }, paymentMethods: ((_j = props.payOptions) == null ? void 0 : _j.buyWithFiat) === false ? ["crypto"] : ["crypto", "card"], seller: props.payOptions.paymentInfo.sellerAddress, theme, tokenAddress: (_k = props.payOptions.paymentInfo.token) == null ? void 0 : _k.address });
  }
  if (((_l = props.payOptions) == null ? void 0 : _l.mode) === "transaction") {
    return (0, import_jsx_runtime32.jsx)(TransactionWidget, { client: props.client, description: metadata == null ? void 0 : metadata.description, image: metadata == null ? void 0 : metadata.image, onSuccess: () => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.payOptions) == null ? void 0 : _a2.onPurchaseSuccess) == null ? void 0 : _b2.call(_a2);
    }, paymentMethods: ((_m = props.payOptions) == null ? void 0 : _m.buyWithFiat) === false ? ["crypto"] : ["crypto", "card"], theme, title: metadata == null ? void 0 : metadata.name, transaction: props.payOptions.transaction });
  }
  if (!localeQuery.data) {
    content = (0, import_jsx_runtime32.jsx)("div", { style: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      minHeight: "350px"
    }, children: (0, import_jsx_runtime32.jsx)(Spinner, { color: "secondaryText", size: "xl" }) });
  } else {
    content = (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [(0, import_jsx_runtime32.jsx)(AutoConnect, { client: props.client, siweAuth }), screen === "buy" && (0, import_jsx_runtime32.jsx)(BuyScreen, { client: props.client, connectLocale: localeQuery.data, connectOptions: props.connectOptions, hiddenWallets: props.hiddenWallets, isEmbed: true, onBack: void 0, onDone: () => {
      var _a2;
      if (((_a2 = props.payOptions) == null ? void 0 : _a2.mode) === "transaction") {
        setScreen("execute-tx");
      }
    }, paymentLinkId: props.paymentLinkId, payOptions: props.payOptions || {
      mode: "fund_wallet"
    }, supportedTokens: props.supportedTokens, theme, title: (metadata == null ? void 0 : metadata.name) || "Buy" })] });
  }
  return (0, import_jsx_runtime32.jsx)(CustomThemeProvider, { theme, children: (0, import_jsx_runtime32.jsx)(EmbedContainer, { className: props.className, modalSize: "compact", style: props.style, children: (0, import_jsx_runtime32.jsx)(DynamicHeight, { children: content }) }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/NFT/description.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/NFT/provider.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var import_react24 = __toESM(require_react(), 1);
var NFTProviderContext = (0, import_react24.createContext)(void 0);
function useNFTContext() {
  const ctx = (0, import_react24.useContext)(NFTProviderContext);
  if (!ctx) {
    throw new Error("NFTProviderContext not found. Make sure you are using NFTMedia, NFTDescription, etc. inside a <NFTProvider /> component");
  }
  return ctx;
}
function NFTProvider(props) {
  return (0, import_jsx_runtime33.jsx)(NFTProviderContext.Provider, { value: props, children: props.children });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/NFT/utils.js
async function getNFTInfo(options) {
  return withCache(async () => {
    const nft = await Promise.allSettled([
      getNFT({
        ...options,
        useIndexer: false
        // TODO (insight): switch this call to only call insight once
      }),
      getNFT2({
        ...options,
        useIndexer: false
        // TODO (insight): switch this call to only call insight once
      })
    ]).then(([possibleNFT721, possibleNFT1155]) => {
      if (possibleNFT721.status === "fulfilled" && possibleNFT721.value.tokenURI) {
        return possibleNFT721.value;
      }
      if (possibleNFT1155.status === "fulfilled" && possibleNFT1155.value.tokenURI) {
        return possibleNFT1155.value;
      }
      throw new Error("Failed to load NFT metadata");
    });
    return nft;
  }, {
    cacheKey: `nft_info:${options.contract.chain.id}:${options.contract.address}:${options.tokenId.toString()}`,
    cacheTime: 15 * 60 * 1e3
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/NFT/description.js
function NFTDescription({ loadingComponent, fallbackComponent, queryOptions: queryOptions2, descriptionResolver, ...restProps }) {
  const { contract, tokenId } = useNFTContext();
  const descQuery = useQuery({
    queryFn: async () => fetchNftDescription({ contract, descriptionResolver, tokenId }),
    queryKey: [
      "_internal_nft_description_",
      contract.chain.id,
      contract.address,
      tokenId.toString(),
      {
        resolver: typeof descriptionResolver === "string" ? descriptionResolver : typeof descriptionResolver === "function" ? getFunctionId(descriptionResolver) : void 0
      }
    ],
    ...queryOptions2
  });
  if (descQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!descQuery.data) {
    return fallbackComponent || null;
  }
  return (0, import_jsx_runtime34.jsx)("span", { ...restProps, children: descQuery.data });
}
async function fetchNftDescription(props) {
  const { descriptionResolver, contract, tokenId } = props;
  if (typeof descriptionResolver === "string") {
    return descriptionResolver;
  }
  if (typeof descriptionResolver === "function") {
    return descriptionResolver();
  }
  const nft = await getNFTInfo({ contract, tokenId }).catch(() => void 0);
  if (!nft) {
    throw new Error("Failed to resolve NFT info");
  }
  if (typeof nft.metadata.description !== "string") {
    throw new Error("Failed to resolve NFT description");
  }
  return nft.metadata.description;
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/NFT/media.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
function NFTMedia({ loadingComponent, fallbackComponent, queryOptions: queryOptions2, mediaResolver, ...mediaRendererProps }) {
  const { contract, tokenId } = useNFTContext();
  const mediaQuery = useQuery({
    queryFn: async () => fetchNftMedia({ contract, mediaResolver, tokenId }),
    queryKey: getQueryKey({
      chainId: contract.chain.id,
      contractAddress: contract.address,
      mediaResolver,
      tokenId
    }),
    ...queryOptions2
  });
  if (mediaQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!mediaQuery.data) {
    return fallbackComponent || null;
  }
  return (0, import_jsx_runtime35.jsx)(MediaRenderer, { client: contract.client, poster: mediaQuery.data.poster, src: mediaQuery.data.src, ...mediaRendererProps });
}
function getQueryKey(props) {
  const { chainId, tokenId, mediaResolver, contractAddress } = props;
  return [
    "_internal_nft_media_",
    chainId,
    contractAddress,
    tokenId.toString(),
    {
      resolver: typeof mediaResolver === "object" ? mediaResolver : typeof mediaResolver === "function" ? getFunctionId(mediaResolver) : void 0
    }
  ];
}
async function fetchNftMedia(props) {
  const { mediaResolver, contract, tokenId } = props;
  if (typeof mediaResolver === "object") {
    return mediaResolver;
  }
  if (typeof mediaResolver === "function") {
    return mediaResolver();
  }
  const nft = await getNFTInfo({ contract, tokenId }).catch(() => void 0);
  if (!nft) {
    throw new Error("Failed to resolve NFT info");
  }
  const animation_url = nft.metadata.animation_url;
  const image = nft.metadata.image || nft.metadata.image_url;
  if (animation_url) {
    return {
      poster: image || void 0,
      src: animation_url
    };
  }
  if (image) {
    return {
      poster: void 0,
      src: image
    };
  }
  throw new Error("Failed to resolve NFT media");
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/NFT/name.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
function NFTName({ loadingComponent, fallbackComponent, queryOptions: queryOptions2, nameResolver, ...restProps }) {
  const { contract, tokenId } = useNFTContext();
  const nameQuery = useQuery({
    queryFn: async () => fetchNftName({ contract, nameResolver, tokenId }),
    queryKey: getQueryKey2({
      chainId: contract.chain.id,
      contractAddress: contract.address,
      nameResolver,
      tokenId
    }),
    ...queryOptions2
  });
  if (nameQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!nameQuery.data) {
    return fallbackComponent || null;
  }
  return (0, import_jsx_runtime36.jsx)("span", { ...restProps, children: nameQuery.data });
}
function getQueryKey2(props) {
  const { chainId, tokenId, nameResolver, contractAddress } = props;
  return [
    "_internal_nft_name_",
    chainId,
    contractAddress,
    tokenId.toString(),
    {
      resolver: typeof nameResolver === "string" ? nameResolver : typeof nameResolver === "function" ? getFunctionId(nameResolver) : void 0
    }
  ];
}
async function fetchNftName(props) {
  const { nameResolver, contract, tokenId } = props;
  if (typeof nameResolver === "string") {
    return nameResolver;
  }
  if (typeof nameResolver === "function") {
    return nameResolver();
  }
  const nft = await getNFTInfo({ contract, tokenId }).catch(() => void 0);
  if (!nft) {
    throw new Error("Failed to resolve NFT info");
  }
  if (typeof nft.metadata.name !== "string") {
    throw new Error("Failed to resolve NFT name");
  }
  return nft.metadata.name;
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Token/icon.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Token/provider.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var import_react25 = __toESM(require_react(), 1);
var TokenProviderContext = (0, import_react25.createContext)(void 0);
function TokenProvider(props) {
  return (0, import_jsx_runtime37.jsx)(TokenProviderContext.Provider, { value: props, children: props.children });
}
function useTokenContext() {
  const ctx = (0, import_react25.useContext)(TokenProviderContext);
  if (!ctx) {
    throw new Error("TokenProviderContext not found. Make sure you are using TokenName, TokenIcon, TokenSymbol etc. inside a <TokenProvider /> component");
  }
  return ctx;
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Token/icon.js
function TokenIcon({ iconResolver, loadingComponent, fallbackComponent, queryOptions: queryOptions2, ...restProps }) {
  const { address, client, chain } = useTokenContext();
  const iconQuery = useQuery({
    queryFn: async () => {
      if (typeof iconResolver === "string") {
        return iconResolver;
      }
      if (typeof iconResolver === "function") {
        return iconResolver();
      }
      if (address.toLowerCase() === NATIVE_TOKEN_ADDRESS.toLowerCase()) {
        const possibleUrl = await getChainMetadata(chain).then((data) => {
          var _a;
          return (_a = data.icon) == null ? void 0 : _a.url;
        });
        if (!possibleUrl) {
          throw new Error("Failed to resolve icon for native token");
        }
        return resolveScheme({ client, uri: possibleUrl });
      }
      const contractMetadata = await getContractMetadata({
        contract: getContract({
          address,
          chain,
          client
        })
      });
      if (!contractMetadata.image || typeof contractMetadata.image !== "string") {
        throw new Error("Failed to resolve token icon from contract metadata");
      }
      return resolveScheme({
        client,
        uri: contractMetadata.image
      });
    },
    queryKey: [
      "_internal_token_icon_",
      chain.id,
      address,
      {
        resolver: typeof iconResolver === "string" ? iconResolver : typeof iconResolver === "function" ? getFunctionId(iconResolver) : void 0
      }
    ],
    ...queryOptions2
  });
  if (iconQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!iconQuery.data) {
    return fallbackComponent || null;
  }
  return (0, import_jsx_runtime38.jsx)("img", { src: iconQuery.data, ...restProps, alt: restProps.alt });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Token/name.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
function TokenName({ nameResolver, formatFn, loadingComponent, fallbackComponent, queryOptions: queryOptions2, ...restProps }) {
  const { address, client, chain } = useTokenContext();
  const nameQuery = useQuery({
    queryFn: async () => fetchTokenName({ address, chain, client, nameResolver }),
    queryKey: getQueryKeys({ address, chainId: chain.id, nameResolver }),
    ...queryOptions2
  });
  if (nameQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!nameQuery.data) {
    return fallbackComponent || null;
  }
  if (formatFn && typeof formatFn === "function") {
    return (0, import_jsx_runtime39.jsx)("span", { ...restProps, children: formatFn(nameQuery.data) });
  }
  return (0, import_jsx_runtime39.jsx)("span", { ...restProps, children: nameQuery.data });
}
async function fetchTokenName(props) {
  const { nameResolver, address, client, chain } = props;
  if (typeof nameResolver === "string") {
    return nameResolver;
  }
  if (typeof nameResolver === "function") {
    return nameResolver();
  }
  if (address.toLowerCase() === NATIVE_TOKEN_ADDRESS.toLowerCase()) {
    return getChainMetadata(chain).then((data) => data.nativeCurrency.name);
  }
  const contract = getContract({ address, chain, client });
  const [_name, contractMetadata] = await Promise.all([
    name({ contract }).catch(() => void 0),
    getContractMetadata({ contract }).catch(() => void 0)
  ]);
  if (typeof _name === "string") {
    return _name;
  }
  if (typeof (contractMetadata == null ? void 0 : contractMetadata.name) === "string") {
    return contractMetadata.name;
  }
  throw new Error("Failed to resolve name from both name() and contract metadata");
}
function getQueryKeys(props) {
  const { chainId, address, nameResolver } = props;
  return [
    "_internal_token_name_",
    chainId,
    address,
    {
      resolver: typeof nameResolver === "string" ? nameResolver : typeof nameResolver === "function" ? getFunctionId(nameResolver) : void 0
    }
  ];
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Token/symbol.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
function TokenSymbol2({ symbolResolver, formatFn, loadingComponent, fallbackComponent, queryOptions: queryOptions2, ...restProps }) {
  const { address, client, chain } = useTokenContext();
  const symbolQuery = useQuery({
    queryFn: async () => fetchTokenSymbol({ address, chain, client, symbolResolver }),
    queryKey: getQueryKeys2({ address, chainId: chain.id, symbolResolver }),
    ...queryOptions2
  });
  if (symbolQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!symbolQuery.data) {
    return fallbackComponent || null;
  }
  if (formatFn && typeof formatFn === "function") {
    return (0, import_jsx_runtime40.jsx)("span", { ...restProps, children: formatFn(symbolQuery.data) });
  }
  return (0, import_jsx_runtime40.jsx)("span", { ...restProps, children: symbolQuery.data });
}
async function fetchTokenSymbol(props) {
  const { symbolResolver, address, client, chain } = props;
  if (typeof symbolResolver === "string") {
    return symbolResolver;
  }
  if (typeof symbolResolver === "function") {
    return symbolResolver();
  }
  if (address.toLowerCase() === NATIVE_TOKEN_ADDRESS.toLowerCase()) {
    return getChainMetadata(chain).then((data) => data.nativeCurrency.symbol);
  }
  const contract = getContract({ address, chain, client });
  const [_symbol, contractMetadata] = await Promise.all([
    symbol({ contract }).catch(() => void 0),
    getContractMetadata({ contract }).catch(() => void 0)
  ]);
  if (typeof _symbol === "string") {
    return _symbol;
  }
  if (typeof (contractMetadata == null ? void 0 : contractMetadata.symbol) === "string") {
    return contractMetadata.symbol;
  }
  throw new Error("Failed to resolve symbol from both symbol() and contract metadata");
}
function getQueryKeys2(props) {
  const { chainId, address, symbolResolver } = props;
  return [
    "_internal_token_symbol_",
    chainId,
    address,
    {
      resolver: typeof symbolResolver === "string" ? symbolResolver : typeof symbolResolver === "function" ? getFunctionId(symbolResolver) : void 0
    }
  ];
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/thirdweb/BuyDirectListingButton/index.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var import_react26 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/index.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/hooks/transaction/transaction-button-utils.js
var useTransactionButtonMutation = (props, sendTransactionFn) => {
  const { transaction, onTransactionSent, onTransactionConfirmed, onError, onClick } = props;
  return useMutation({
    mutationFn: async () => {
      if (onClick) {
        onClick();
      }
      try {
        const resolvedTx = await transaction();
        const result = await sendTransactionFn(resolvedTx);
        if (onTransactionSent) {
          onTransactionSent(result);
        }
        if (onTransactionConfirmed) {
          const receipt = await waitForReceipt(result);
          if (receipt.status === "reverted") {
            throw new Error(`Execution reverted: ${stringify(receipt, null, 2)}`);
          }
          onTransactionConfirmed(receipt);
        }
      } catch (error) {
        if (onError) {
          onError(error);
        }
      } finally {
      }
    }
  });
};

// node_modules/thirdweb/dist/esm/react/web/ui/TransactionButton/index.js
function TransactionButton(props) {
  const {
    children,
    // biome-ignore lint/correctness/noUnusedVariables: TODO
    transaction,
    // biome-ignore lint/correctness/noUnusedVariables: TODO
    onTransactionSent,
    // biome-ignore lint/correctness/noUnusedVariables: TODO
    onTransactionConfirmed,
    // biome-ignore lint/correctness/noUnusedVariables: TODO
    onError,
    // biome-ignore lint/correctness/noUnusedVariables: TODO
    onClick,
    gasless,
    payModal,
    disabled,
    unstyled,
    ...buttonProps
  } = props;
  const account = useActiveAccount();
  const sendTransaction2 = useSendTransaction({ gasless, payModal });
  const { mutate: handleClick, isPending } = useTransactionButtonMutation(props, sendTransaction2.mutateAsync);
  return (0, import_jsx_runtime41.jsx)(CustomThemeProvider, { theme: props.theme, children: (0, import_jsx_runtime41.jsxs)(Button, { "data-is-loading": isPending, disabled: !account || disabled || isPending, gap: "xs", onClick: () => handleClick(), unstyled, variant: "primary", ...buttonProps, style: !unstyled ? {
    minWidth: "165px",
    opacity: !account || disabled ? 0.5 : 1,
    position: "relative",
    ...buttonProps.style
  } : {
    position: "relative",
    ...buttonProps.style
  }, children: [(0, import_jsx_runtime41.jsx)("span", { style: { visibility: isPending ? "hidden" : "visible" }, children }), isPending && (0, import_jsx_runtime41.jsx)("div", { style: {
    alignItems: "center",
    bottom: 0,
    display: "flex",
    height: "100%",
    margin: "auto",
    position: "absolute",
    top: 0
  }, children: (0, import_jsx_runtime41.jsx)(Spinner, { color: "primaryButtonText", size: "md" }) })] }) });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/thirdweb/BuyDirectListingButton/index.js
function BuyDirectListingButton(props) {
  const { contractAddress, listingId, children, chain, client, quantity, payModal } = props;
  const defaultPayModalMetadata = payModal ? payModal.metadata : void 0;
  const account = useActiveAccount();
  const contract = getContract({
    address: contractAddress,
    chain,
    client
  });
  const { data: payMetadata } = useReadContract(getPayMetadata, {
    contract,
    listingId,
    queryOptions: {
      enabled: !defaultPayModalMetadata
    }
  });
  const { mutateAsync } = useSendAndConfirmTransaction();
  const prepareBuyTransaction = (0, import_react26.useCallback)(async () => {
    if (!account) {
      throw new Error("No account detected");
    }
    const [listing, { getApprovalForTransaction }, { buyFromListing }] = await Promise.all([
      getListing({
        contract,
        listingId
      }),
      import("./getApprovalForTransaction-MEYPOXUW.js"),
      import("./buyFromListing-YJASIXSC.js")
    ]);
    if (!listing) {
      throw new Error(`Could not retrieve listing with ID: ${listingId}`);
    }
    let _quantity = 1n;
    if (listing.asset.type === "ERC721") {
      if (typeof quantity === "bigint" && (quantity !== 1n || quantity < 0n)) {
        throw new Error("Invalid quantity. This is an ERC721 listing & quantity is always `1n`");
      }
    } else if (listing.asset.type === "ERC1155") {
      if (typeof quantity === "bigint") {
        if (quantity > listing.quantity) {
          throw new Error(`quantity exceeds available amount. Available: ${listing.quantity.toString()}`);
        }
        if (quantity < 0n) {
          throw new Error("Invalid quantity. Should be at least 1n");
        }
        _quantity = quantity;
      }
      _quantity = listing.quantity;
    }
    const buyTx = buyFromListing({
      contract,
      listingId,
      quantity: _quantity,
      recipient: (account == null ? void 0 : account.address) || ""
    });
    const approveTx = await getApprovalForTransaction({
      account,
      transaction: buyTx
    });
    if (approveTx) {
      await mutateAsync(approveTx);
    }
    return buyTx;
  }, [account, contract, quantity, listingId, mutateAsync]);
  return (0, import_jsx_runtime42.jsx)(TransactionButton, { payModal: {
    metadata: defaultPayModalMetadata || payMetadata,
    ...payModal
  }, transaction: () => prepareBuyTransaction(), ...props, children });
}
async function getPayMetadata(options) {
  var _a, _b, _c, _d;
  const listing = await getListing(options);
  if (!listing) {
    return { image: void 0, name: void 0 };
  }
  return {
    image: (_b = (_a = listing.asset) == null ? void 0 : _a.metadata) == null ? void 0 : _b.image,
    name: (_d = (_c = listing.asset) == null ? void 0 : _c.metadata) == null ? void 0 : _d.name
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/thirdweb/ClaimButton/index.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
function ClaimButton(props) {
  const { children, contractAddress, client, chain, claimParams, payModal } = props;
  const defaultPayModalMetadata = payModal ? payModal.metadata : void 0;
  const contract = getContract({
    address: contractAddress,
    chain,
    client
  });
  const { data: payMetadata } = useReadContract(getPayMetadata2, {
    contract,
    queryOptions: {
      enabled: !defaultPayModalMetadata
    },
    tokenId: claimParams.type === "ERC1155" ? claimParams.tokenId : void 0
  });
  const account = useActiveAccount();
  const { mutateAsync } = useSendAndConfirmTransaction();
  return (0, import_jsx_runtime43.jsx)(TransactionButton, { payModal: {
    metadata: defaultPayModalMetadata || payMetadata,
    ...payModal
  }, transaction: async () => {
    if (!account) {
      throw new Error("No account detected");
    }
    const [claimTx, { getApprovalForTransaction }] = await Promise.all([
      getClaimTransaction({
        account,
        claimParams,
        contract
      }),
      import("./getApprovalForTransaction-MEYPOXUW.js")
    ]);
    const approveTx = await getApprovalForTransaction({
      account,
      transaction: claimTx
    });
    if (approveTx) {
      await mutateAsync(approveTx);
    }
    return claimTx;
  }, ...props, children });
}
async function getPayMetadata2(options) {
  var _a, _b;
  const { contract, tokenId } = options;
  const [contractMetadata, nft] = await Promise.all([
    getContractMetadata(options),
    tokenId ? getNFT2({ contract, tokenId }) : void 0
  ]);
  if (tokenId) {
    return {
      image: (_a = nft == null ? void 0 : nft.metadata) == null ? void 0 : _a.image,
      name: (_b = nft == null ? void 0 : nft.metadata) == null ? void 0 : _b.name
    };
  }
  return {
    image: contractMetadata == null ? void 0 : contractMetadata.image,
    name: contractMetadata == null ? void 0 : contractMetadata.name
  };
}
async function getClaimTransaction({ contract, account, claimParams }) {
  switch (claimParams.type) {
    case "ERC721":
      return await getERC721ClaimTo({ account, claimParams, contract });
    case "ERC1155":
      return await getERC1155ClaimTo({ account, claimParams, contract });
    case "ERC20": {
      return await getERC20ClaimTo({ account, claimParams, contract });
    }
    default:
      throw new Error("Invalid contract type. Must be either NFT Drop (ERC721), Edition Drop (ERC1155) or Token Drop (ERC20)");
  }
}
async function getERC721ClaimTo({ contract, account, claimParams }) {
  const { claimTo } = await import("./claimTo-GSHCHQAS.js");
  return claimTo({
    contract,
    from: claimParams.from,
    quantity: claimParams.quantity,
    to: claimParams.to || (account == null ? void 0 : account.address) || ""
  });
}
async function getERC1155ClaimTo({ contract, account, claimParams }) {
  const { claimTo } = await import("./claimTo-LACOHLWV.js");
  return claimTo({
    contract,
    from: claimParams.from,
    quantity: claimParams.quantity,
    to: claimParams.to || (account == null ? void 0 : account.address) || "",
    tokenId: claimParams.tokenId
  });
}
async function getERC20ClaimTo({ contract, account, claimParams }) {
  const { claimTo } = await import("./claimTo-S67PMMHU.js");
  if ("quantity" in claimParams) {
    return claimTo({
      contract,
      from: claimParams.from,
      quantity: claimParams.quantity,
      to: claimParams.to || (account == null ? void 0 : account.address) || ""
    });
  }
  if ("quantityInWei" in claimParams) {
    return claimTo({
      contract,
      from: claimParams.from,
      quantityInWei: claimParams.quantityInWei,
      to: claimParams.to || (account == null ? void 0 : account.address) || ""
    });
  }
  throw new Error("Missing quantity or quantityInWei");
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/thirdweb/CreateDirectListingButton/index.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var import_react27 = __toESM(require_react(), 1);

// node_modules/thirdweb/dist/esm/extensions/marketplace/__generated__/IDirectListings/write/createListing.js
var FN_SELECTOR = "0x746415b5";
var FN_INPUTS = [
  {
    components: [
      {
        name: "assetContract",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      },
      {
        name: "quantity",
        type: "uint256"
      },
      {
        name: "currency",
        type: "address"
      },
      {
        name: "pricePerToken",
        type: "uint256"
      },
      {
        name: "startTimestamp",
        type: "uint128"
      },
      {
        name: "endTimestamp",
        type: "uint128"
      },
      {
        name: "reserved",
        type: "bool"
      }
    ],
    name: "_params",
    type: "tuple"
  }
];
var FN_OUTPUTS = [
  {
    name: "listingId",
    type: "uint256"
  }
];
function createListing(options) {
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
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    nonce: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.nonce;
    },
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.params];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    }
  });
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/direct-listings/write/createListing.js
function createListing2(options) {
  return createListing({
    asyncParams: async () => {
      const assetContract = getContract({
        ...options.contract,
        address: options.assetContractAddress
      });
      const rpcClient = getRpcClient(options.contract);
      const [assetIsERC721, assetIsERC1155, lastestBlock] = await Promise.all([
        isERC721({ contract: assetContract }),
        isERC1155({ contract: assetContract }),
        eth_getBlockByNumber(rpcClient, { blockTag: "latest" })
      ]);
      if (!assetIsERC721 && !assetIsERC1155) {
        throw new Error("AssetContract must implement ERC 1155 or ERC 721.");
      }
      let startTimestamp = BigInt(Math.floor((options.startTimestamp ?? /* @__PURE__ */ new Date()).getTime() / 1e3));
      const endTimestamp = BigInt(Math.floor((options.endTimestamp ?? new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1e3)).getTime() / 1e3));
      if (startTimestamp <= lastestBlock.timestamp) {
        startTimestamp = lastestBlock.timestamp + 1n;
      }
      if (startTimestamp >= endTimestamp) {
        throw new Error("Start time must be before end time.");
      }
      let quantity;
      if (assetIsERC721) {
        quantity = 1n;
      } else {
        quantity = options.quantity ?? 1n;
      }
      const currencyAddress = options.currencyContractAddress ?? NATIVE_TOKEN_ADDRESS;
      let pricePerToken;
      if ("pricePerToken" in options) {
        if (isNativeTokenAddress(currencyAddress)) {
          pricePerToken = toUnits(options.pricePerToken, 18);
        } else {
          const currencyContract = getContract({
            ...options.contract,
            address: currencyAddress
          });
          const { decimals: decimals2 } = await import("./decimals-L6WUBRL6.js");
          const currencyDecimals = await decimals2({
            contract: currencyContract
          });
          pricePerToken = toUnits(options.pricePerToken, currencyDecimals);
        }
      } else {
        pricePerToken = BigInt(options.pricePerTokenWei);
      }
      return {
        overrides: {
          extraGas: 50000n
          // add extra gas to account for router call
        },
        params: {
          assetContract: options.assetContractAddress,
          currency: options.currencyContractAddress ?? NATIVE_TOKEN_ADDRESS,
          endTimestamp,
          pricePerToken,
          quantity,
          reserved: options.isReservedListing ?? false,
          startTimestamp,
          tokenId: options.tokenId
        }
      };
    },
    contract: options.contract
  });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/thirdweb/CreateDirectListingButton/index.js
function CreateDirectListingButton(props) {
  const { contractAddress, chain, client, children, payModal, assetContractAddress, tokenId } = props;
  const marketplaceContract = getContract({
    address: contractAddress,
    chain,
    client
  });
  const account = useActiveAccount();
  const defaultPayModalMetadata = payModal ? payModal.metadata : void 0;
  const nftContract = getContract({
    address: assetContractAddress,
    chain,
    client
  });
  const { data: payMetadata } = useReadContract(getPayMetadata3, {
    contract: nftContract,
    queryOptions: {
      enabled: !defaultPayModalMetadata
    },
    tokenId
  });
  const { mutateAsync } = useSendAndConfirmTransaction();
  const prepareTransaction2 = (0, import_react27.useCallback)(async () => {
    if (!account) {
      throw new Error("No account detected");
    }
    const [is721, is1155] = await Promise.all([
      isERC721({ contract: nftContract }),
      isERC1155({ contract: nftContract })
    ]);
    if (!is1155 && !is721) {
      throw new Error("Asset must either be ERC721 or ERC1155");
    }
    if (is1155) {
      const [{ isApprovedForAll }, { setApprovalForAll }] = await Promise.all([
        import("./isApprovedForAll-KR2F5Q35.js"),
        import("./setApprovalForAll-NJF5X7UZ.js")
      ]);
      const isApproved = await isApprovedForAll({
        contract: nftContract,
        operator: marketplaceContract.address,
        owner: account.address
      });
      if (!isApproved) {
        const transaction = setApprovalForAll({
          approved: true,
          contract: nftContract,
          operator: marketplaceContract.address
        });
        await mutateAsync(transaction);
      }
    } else {
      const [{ isApprovedForAll }, { setApprovalForAll }, { getApproved }] = await Promise.all([
        import("./isApprovedForAll-C2OIXPVF.js"),
        import("./setApprovalForAll-JD65DBED.js"),
        import("./getApproved-TJHNOCNR.js")
      ]);
      const [isApproved, tokenApproved] = await Promise.all([
        isApprovedForAll({
          contract: nftContract,
          operator: marketplaceContract.address,
          owner: account.address
        }),
        getApproved({ contract: nftContract, tokenId: props.tokenId })
      ]);
      if (!isApproved && tokenApproved.toLowerCase() !== marketplaceContract.address.toLowerCase()) {
        const transaction = setApprovalForAll({
          approved: true,
          contract: nftContract,
          operator: marketplaceContract.address
        });
        await mutateAsync(transaction);
      }
    }
    const listingTx = createListing2({
      contract: marketplaceContract,
      ...props
    });
    return listingTx;
  }, [marketplaceContract, props, account, mutateAsync, nftContract]);
  return (0, import_jsx_runtime44.jsx)(TransactionButton, { payModal: {
    metadata: defaultPayModalMetadata || payMetadata,
    ...payModal
  }, transaction: () => prepareTransaction2(), ...props, children });
}
async function getPayMetadata3(options) {
  var _a, _b, _c, _d;
  const [{ getContractMetadata: getContractMetadata2 }, { getNFT: getERC721 }, { getNFT: getERC1155 }] = await Promise.all([
    import("./getContractMetadata-MA2IOI7V.js"),
    import("./getNFT-IOAJT3LN.js"),
    import("./getNFT-VHIOAPQF.js")
  ]);
  const [is721, is1155, contractMetadata] = await Promise.all([
    isERC721(options),
    isERC1155(options),
    getContractMetadata2(options)
  ]);
  if (is721) {
    const nft = await getERC721(options);
    return {
      image: (_a = nft == null ? void 0 : nft.metadata) == null ? void 0 : _a.image,
      name: (_b = nft == null ? void 0 : nft.metadata) == null ? void 0 : _b.name
    };
  }
  if (is1155) {
    const nft = await getERC1155(options);
    return {
      image: (_c = nft == null ? void 0 : nft.metadata) == null ? void 0 : _c.image,
      name: (_d = nft == null ? void 0 : nft.metadata) == null ? void 0 : _d.name
    };
  }
  return {
    image: contractMetadata == null ? void 0 : contractMetadata.image,
    name: contractMetadata == null ? void 0 : contractMetadata.name
  };
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Wallet/icon.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
function WalletIcon({ loadingComponent, fallbackComponent, queryOptions: queryOptions2, ...restProps }) {
  const imageQuery = useWalletIcon({ queryOptions: queryOptions2 });
  if (imageQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!imageQuery.data) {
    return fallbackComponent || null;
  }
  return (0, import_jsx_runtime45.jsx)("img", { src: imageQuery.data, ...restProps, alt: restProps.alt });
}
function SocialIcon({ provider, ...restProps }) {
  const src = getSocialIcon(provider);
  return (0, import_jsx_runtime45.jsx)("img", { src, ...restProps, alt: restProps.alt });
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Wallet/name.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);

// node_modules/thirdweb/dist/esm/react/core/utils/walletname.js
function useWalletName(props) {
  const { id } = useWalletContext();
  const nameQuery = useQuery({
    queryFn: async () => fetchWalletName({ formatFn: props.formatFn, id }),
    queryKey: getQueryKeys3({ formatFn: props.formatFn, id }),
    ...props.queryOptions
  });
  return nameQuery;
}
function getQueryKeys3(props) {
  if (typeof props.formatFn === "function") {
    return [
      "walletName",
      props.id,
      { resolver: getFunctionId(props.formatFn) }
    ];
  }
  return ["walletName", props.id];
}
async function fetchWalletName(props) {
  const info = await getWalletInfo(props.id);
  if (typeof props.formatFn === "function") {
    return props.formatFn(info.name);
  }
  return info.name;
}

// node_modules/thirdweb/dist/esm/react/web/ui/prebuilt/Wallet/name.js
function WalletName({ loadingComponent, fallbackComponent, queryOptions: queryOptions2, formatFn, ...restProps }) {
  const nameQuery = useWalletName({ formatFn, queryOptions: queryOptions2 });
  if (nameQuery.isLoading) {
    return loadingComponent || null;
  }
  if (!nameQuery.data) {
    return fallbackComponent || null;
  }
  return (0, import_jsx_runtime46.jsx)("span", { ...restProps, children: nameQuery.data });
}

// node_modules/thirdweb/dist/esm/react/web/ui/SiteEmbed.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
function SiteEmbed({ src, client, ecosystem, ...props }) {
  if (!client.clientId) {
    throw new Error("The SiteEmbed client must have a clientId");
  }
  const activeWallet = useActiveWallet();
  const walletId = activeWallet == null ? void 0 : activeWallet.id;
  const { data: { authProvider, authCookie } = {} } = useQuery({
    enabled: activeWallet && (isEcosystemWallet(activeWallet) || walletId === "inApp" || walletId === "smart"),
    queryFn: async () => {
      const storage = new ClientScopedStorage({
        clientId: client.clientId,
        ecosystem,
        storage: webLocalStorage
      });
      const authProvider2 = await getLastAuthProvider(webLocalStorage);
      const authCookie2 = await storage.getAuthCookie();
      return { authCookie: authCookie2, authProvider: authProvider2 };
    },
    queryKey: ["site-embed", walletId, src, client.clientId, ecosystem]
  });
  const url = new URL(src);
  if (walletId) {
    url.searchParams.set("walletId", walletId === "smart" ? "inApp" : walletId);
  }
  if (authProvider) {
    url.searchParams.set("authProvider", authProvider);
  }
  if (authCookie) {
    url.searchParams.set("authCookie", authCookie);
  }
  return (0, import_jsx_runtime47.jsx)("iframe", { allowFullScreen: true, height: "100%", src: encodeURI(url.toString()), width: "100%", ...props });
}

// node_modules/thirdweb/dist/esm/react/web/ui/SiteLink.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
function SiteLink({ href, client, ecosystem, children, ...props }) {
  if (!client.clientId) {
    throw new Error("The SiteLink client must have a clientId");
  }
  const activeWallet = useActiveWallet();
  const walletId = activeWallet == null ? void 0 : activeWallet.id;
  const { data: { authProvider, authCookie } = {} } = useQuery({
    enabled: activeWallet && (isEcosystemWallet(activeWallet) || walletId === "inApp" || walletId === "smart"),
    queryFn: async () => {
      const storage = new ClientScopedStorage({
        clientId: client.clientId,
        ecosystem,
        storage: webLocalStorage
      });
      const authProvider2 = await getLastAuthProvider(webLocalStorage);
      const authCookie2 = await storage.getAuthCookie();
      return { authCookie: authCookie2, authProvider: authProvider2 };
    },
    queryKey: ["site-link", walletId, href, client.clientId, ecosystem]
  });
  const url = new URL(href);
  if (walletId) {
    url.searchParams.set("walletId", walletId === "smart" ? "inApp" : walletId);
  }
  if (authProvider) {
    url.searchParams.set("authProvider", authProvider);
  }
  if (authCookie) {
    url.searchParams.set("authCookie", authCookie);
  }
  return (0, import_jsx_runtime48.jsx)("a", { href: encodeURI(url.toString()), ...props, children });
}

// node_modules/thirdweb/dist/esm/react/web/utils/storage.js
async function getLastAuthProvider2() {
  return getLastAuthProvider(webLocalStorage);
}
export {
  AccountAddress,
  AccountAvatar,
  AccountBalance,
  AccountBlobbie,
  AccountName,
  AccountProvider,
  AutoConnect,
  Blobbie,
  BuyDirectListingButton,
  BuyWidget,
  ChainIcon,
  ChainName,
  ChainProvider,
  CheckoutWidget,
  ClaimButton,
  ConnectButton,
  ConnectEmbed,
  CreateDirectListingButton,
  MediaRenderer,
  NFTDescription,
  NFTMedia,
  NFTName,
  NFTProvider,
  PayEmbed,
  SiteEmbed,
  SiteLink,
  SocialIcon,
  ThirdwebProvider,
  TokenIcon,
  TokenName,
  TokenProvider,
  TokenSymbol2 as TokenSymbol,
  TransactionButton,
  TransactionWidget,
  WalletIcon,
  WalletName,
  WalletProvider,
  createContractQuery,
  darkTheme,
  defaultTokens,
  getDefaultToken,
  getLastAuthProvider2 as getLastAuthProvider,
  lightTheme,
  useActiveAccount,
  useActiveWallet,
  useActiveWalletChain,
  useActiveWalletConnectionStatus,
  useAdminWallet,
  useAuthToken,
  useAutoConnect,
  useBlockNumber,
  useBridgeRoutes,
  useBuyHistory,
  useBuyWithCryptoHistory,
  useBuyWithCryptoQuote,
  useBuyWithCryptoStatus,
  useBuyWithFiatHistory,
  useBuyWithFiatQuote,
  useBuyWithFiatStatus,
  useCapabilities,
  useChainMetadata,
  useConnect,
  useConnectModal,
  useConnectedWallets,
  useConnectionManager,
  useContractEvents,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useEstimateGas,
  useEstimateGasCost,
  useInvalidateContractQuery,
  useIsAutoConnecting,
  useLinkProfile,
  useNetworkSwitcherModal,
  usePostOnRampQuote,
  useProfiles,
  useReadContract,
  useSendAndConfirmCalls,
  useSendAndConfirmTransaction,
  useSendBatchTransaction,
  useSendCalls,
  useSendTransaction,
  useSetActiveWallet,
  useSetActiveWalletConnectionStatus,
  useSimulateTransaction,
  useSiweAuth,
  useSocialProfiles,
  useSwitchActiveWalletChain,
  useUnlinkProfile,
  useWaitForCallsReceipt,
  useWaitForReceipt,
  useWalletBalance,
  useWalletDetailsModal,
  useWalletImage,
  useWalletInfo
};
//# sourceMappingURL=thirdweb_react.js.map
