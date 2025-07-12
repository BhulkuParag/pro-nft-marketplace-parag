import {
  getContractEvents
} from "./chunk-N6DSQFYO.js";
import {
  isAbiEvent,
  parseEventLogs,
  prepareEvent
} from "./chunk-VVRYDJAL.js";
import {
  eth_blockNumber,
  watchBlockNumber
} from "./chunk-E2LANL2Y.js";
import {
  eth_call
} from "./chunk-WHDWYZBU.js";
import {
  extractError,
  resolveContractAbi
} from "./chunk-3DGGFYQ2.js";
import {
  resolvePromisedValue
} from "./chunk-TACA3XON.js";
import {
  isObjectWithKeys
} from "./chunk-3ZOYRTTJ.js";
import {
  getAddress
} from "./chunk-6WE3JIZ5.js";
import {
  getRpcClient
} from "./chunk-NBODG3QK.js";
import {
  encode
} from "./chunk-JJDFOOW3.js";
import {
  formatLog
} from "./chunk-QMJBBKA5.js";
import {
  decodeAbiParameters,
  formatTransactionRequest
} from "./chunk-DJWGHHK5.js";
import {
  numberToHex
} from "./chunk-AT6CAMHI.js";
import {
  getClientFetch
} from "./chunk-LPEXUG4Y.js";
import {
  getThirdwebDomains
} from "./chunk-UQSP5VHN.js";

// node_modules/thirdweb/dist/esm/rpc/actions/eth_getLogs.js
async function eth_getLogs(request, params = {}) {
  const topics = params.topics ?? [];
  let logs;
  if (params.blockHash) {
    const param = {
      blockHash: params.blockHash,
      topics
    };
    if (params.address) {
      param.address = getAddress(params.address);
    }
    logs = await request({
      method: "eth_getLogs",
      params: [param]
    });
  } else {
    const param = { topics };
    if (params.address) {
      param.address = params.address;
    }
    if (params.fromBlock) {
      param.fromBlock = typeof params.fromBlock === "bigint" ? numberToHex(params.fromBlock) : params.fromBlock;
    }
    if (params.toBlock) {
      param.toBlock = typeof params.toBlock === "bigint" ? numberToHex(params.toBlock) : params.toBlock;
    }
    logs = await request({
      method: "eth_getLogs",
      params: [param]
    });
  }
  return logs.map((log) => formatLog(log));
}

// node_modules/thirdweb/dist/esm/event/actions/get-events.js
async function getContractEvents2(options) {
  var _a;
  const { contract, events, blockRange, useIndexer = true, ...restParams } = options;
  const rpcRequest = getRpcClient(contract);
  if (restParams.blockHash && (blockRange || restParams.fromBlock || restParams.toBlock)) {
    throw new Error("Cannot specify blockHash and range simultaneously,");
  }
  const latestBlockNumber = await eth_blockNumber(rpcRequest);
  if (blockRange) {
    const { fromBlock, toBlock } = restParams;
    if (fromBlock !== void 0 && toBlock !== void 0 && BigInt(toBlock) - BigInt(fromBlock) !== BigInt(blockRange)) {
      throw new Error("Incompatible blockRange with specified fromBlock and toBlock. Please only define fromBlock or toBlock when specifying blockRange.");
    }
    if (fromBlock !== void 0) {
      restParams.toBlock = BigInt(fromBlock) + BigInt(blockRange) - 1n;
    } else if (toBlock !== void 0) {
      restParams.fromBlock = BigInt(toBlock) - BigInt(blockRange) + 1n;
    } else {
      restParams.toBlock = latestBlockNumber;
      restParams.fromBlock = latestBlockNumber - BigInt(blockRange) + 1n;
    }
  }
  let resolvedEvents = events ?? [];
  if (!(events == null ? void 0 : events.length) && !!contract) {
    if (useIndexer) {
      const events2 = await getContractEvents({
        chains: [contract.chain],
        client: contract.client,
        contractAddress: contract.address,
        decodeLogs: true,
        queryOptions: {
          filter_block_hash: restParams.blockHash,
          filter_block_number_gte: restParams.fromBlock,
          filter_block_number_lte: restParams.toBlock,
          limit: 500
        }
      }).catch(() => {
        return null;
      });
      if (events2) {
        return toLog(events2);
      }
    }
    if ((_a = contract.abi) == null ? void 0 : _a.length) {
      resolvedEvents = contract.abi.filter(isAbiEvent).map((abiEvent) => prepareEvent({ signature: abiEvent }));
    } else {
      const runtimeAbi = await resolveContractAbi(contract);
      resolvedEvents = runtimeAbi.filter(isAbiEvent).map((abiEvent) => prepareEvent({ signature: abiEvent }));
    }
  }
  const logsParams = events && events.length > 0 ? (
    // if we have events passed in then we use those
    events.map((e) => ({
      ...restParams,
      address: getAddress(contract.address),
      topics: e.topics
    }))
  ) : (
    // otherwise we want "all" events (aka not pass any topics at all)
    [{ ...restParams, address: getAddress(contract.address) }]
  );
  let logs = [];
  if (useIndexer) {
    try {
      logs = await Promise.all(logsParams.map((p) => getLogsFromInsight({
        contract,
        params: p
      })));
    } catch (e) {
      console.warn("Error fetching from insight, falling back to rpc", e);
      logs = await Promise.all(logsParams.map((ethLogParams) => eth_getLogs(rpcRequest, ethLogParams)));
    }
  } else {
    logs = await Promise.all(logsParams.map((ethLogParams) => eth_getLogs(rpcRequest, ethLogParams)));
  }
  const flattenLogs = logs.flat().sort((a, b) => Number((a.blockNumber ?? 0n) - (b.blockNumber ?? 0n)));
  return parseEventLogs({
    events: resolvedEvents,
    logs: flattenLogs
  });
}
async function getLogsFromInsight(options) {
  var _a, _b, _c, _d;
  const { params, contract } = options;
  const fromBlock = typeof params.fromBlock === "bigint" ? Number(params.fromBlock) : void 0;
  const toBlock = typeof params.toBlock === "bigint" ? Number(params.toBlock) : void 0;
  const r = await getContractEvents({
    chains: [contract.chain],
    client: contract.client,
    contractAddress: contract.address,
    queryOptions: {
      filter_block_hash: params.blockHash,
      filter_block_number_gte: fromBlock,
      filter_block_number_lte: toBlock,
      filter_topic_0: (_a = params.topics) == null ? void 0 : _a[0],
      filter_topic_1: (_b = params.topics) == null ? void 0 : _b[1],
      filter_topic_2: (_c = params.topics) == null ? void 0 : _c[2],
      filter_topic_3: (_d = params.topics) == null ? void 0 : _d[3],
      limit: 500
    }
  });
  return toLog(r);
}
function toLog(r) {
  const cleanedEventData = r.map((tx) => ({
    address: tx.address,
    blockHash: tx.block_hash,
    blockNumber: numberToHex(Number(tx.block_number)),
    blockTimestamp: tx.block_timestamp,
    chainId: tx.chain_id,
    data: tx.data,
    logIndex: numberToHex(tx.log_index),
    topics: tx.topics,
    transactionHash: tx.transaction_hash,
    transactionIndex: numberToHex(tx.transaction_index),
    ...tx.decoded ? {
      args: {
        ...tx.decoded.indexed_params,
        ...tx.decoded.non_indexed_params
      },
      eventName: tx.decoded.name
    } : {}
  }));
  return cleanedEventData.map((e) => formatLog(e)).sort((a, b) => Number((a.blockNumber ?? 0n) - (b.blockNumber ?? 0n)));
}

// node_modules/thirdweb/dist/esm/utils/retry.js
async function retry(fn, options) {
  const retries = options.retries ?? 1;
  const delay = options.delay ?? 0;
  let lastError = null;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
}

// node_modules/thirdweb/dist/esm/event/actions/watch-events.js
function watchContractEvents(options) {
  return watchBlockNumber({
    ...options.contract,
    latestBlockNumber: options.latestBlockNumber,
    /**
     * This function is called every time a new block is mined.
     * @param blockNumber - The block number of the new block.
     * @returns A promise that resolves when the function is finished.
     * @internal
     */
    onNewBlockNumber: async (blockNumber) => {
      const logs = await retry(async () => getContractEvents2({
        ...options,
        // fromBlock is inclusive
        fromBlock: blockNumber,
        // toBlock is inclusive
        toBlock: blockNumber,
        useIndexer: false
      }), {
        delay: 500,
        retries: 3
      });
      if (logs.length) {
        options.onEvents(logs);
      }
    }
  });
}

// node_modules/thirdweb/dist/esm/pay/utils/definitions.js
var getPayBaseUrl = () => {
  const payDomain = getThirdwebDomains().pay;
  return payDomain.startsWith("localhost") ? `http://${payDomain}` : `https://${payDomain}`;
};
var getPayBuyWithFiatHistoryEndpoint = () => `${getPayBaseUrl()}/buy-with-fiat/history/v1`;
var getPayBuyWithCryptoHistoryEndpoint = () => `${getPayBaseUrl()}/buy-with-crypto/history/v1`;
var getPayBuyHistoryEndpoint = () => `${getPayBaseUrl()}/wallet/history/v1`;

// node_modules/thirdweb/dist/esm/pay/buyWithCrypto/getHistory.js
async function getBuyWithCryptoHistory(params) {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append("walletAddress", params.walletAddress);
    queryParams.append("start", params.start.toString());
    queryParams.append("count", params.count.toString());
    const queryString = queryParams.toString();
    const url = `${getPayBuyWithCryptoHistoryEndpoint()}?${queryString}`;
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

// node_modules/thirdweb/dist/esm/transaction/actions/simulate.js
async function simulateTransaction(options) {
  var _a;
  const [data, to, accessList, value] = await Promise.all([
    encode(options.transaction),
    resolvePromisedValue(options.transaction.to),
    resolvePromisedValue(options.transaction.accessList),
    resolvePromisedValue(options.transaction.value)
  ]);
  const from = options.from ?? ((_a = options.account) == null ? void 0 : _a.address) ?? void 0;
  const serializedTx = formatTransactionRequest({
    accessList,
    data,
    from: from ? getAddress(from) : void 0,
    to: to ? getAddress(to) : void 0,
    value
  });
  const rpcRequest = getRpcClient(options.transaction);
  try {
    const result = await eth_call(rpcRequest, serializedTx);
    if (!options.transaction.__preparedMethod) {
      return result;
    }
    const prepared = await options.transaction.__preparedMethod();
    const decoded = decodeAbiParameters(prepared[2], result);
    if (Array.isArray(decoded) && decoded.length === 1) {
      return decoded[0];
    }
    return decoded;
  } catch (error) {
    throw await extractError({
      contract: options.transaction.__contract,
      error,
      fromAddress: from
    });
  }
}

// node_modules/thirdweb/dist/esm/transaction/types.js
function isBaseTransactionOptions(value) {
  return isObjectWithKeys(value, ["__contract"]) && isObjectWithKeys(value.__contract, ["address", "chain"]) && typeof value.__contract.address === "string";
}

export {
  eth_getLogs,
  getContractEvents2 as getContractEvents,
  watchContractEvents,
  getPayBuyWithFiatHistoryEndpoint,
  getPayBuyHistoryEndpoint,
  getBuyWithCryptoHistory,
  simulateTransaction,
  isBaseTransactionOptions
};
//# sourceMappingURL=chunk-VTXXEMYY.js.map
