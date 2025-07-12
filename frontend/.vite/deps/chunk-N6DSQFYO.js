import {
  getContractNFTs,
  getNFT,
  getOwnedNFTs
} from "./chunk-KU7G4WMB.js";
import {
  getTransactions
} from "./chunk-T2B5SAMX.js";
import {
  __export
} from "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/insight/index.js
var insight_exports = {};
__export(insight_exports, {
  getContractEvents: () => getContractEvents,
  getContractNFTs: () => getContractNFTs,
  getNFT: () => getNFT,
  getOwnedNFTs: () => getOwnedNFTs,
  getOwnedTokens: () => getOwnedTokens,
  getTransactions: () => getTransactions
});

// node_modules/thirdweb/dist/esm/insight/get-events.js
async function getContractEvents(options) {
  var _a;
  const [{ getV1EventsByContractAddress }, { getThirdwebDomains }, { getClientFetch }, { assertInsightEnabled }, { stringify }] = await Promise.all([
    import("./thirdweb-53K6KZPK.js"),
    import("./domains-PZ44HVSZ.js"),
    import("./fetch-IVMONMJP.js"),
    import("./common-TPROLQRW.js"),
    import("./json-IBHY24UA.js")
  ]);
  const { client, chains, contractAddress, event, queryOptions, decodeLogs } = options;
  await assertInsightEnabled(chains);
  const defaultQueryOptions = {
    chain: chains.map((chain) => chain.id),
    decode: decodeLogs,
    limit: 100
  };
  if (event) {
    defaultQueryOptions.filter_topic_0 = event.topics[0];
    defaultQueryOptions.filter_topic_1 = event.topics[1];
    defaultQueryOptions.filter_topic_2 = event.topics[2];
    defaultQueryOptions.filter_topic_3 = event.topics[3];
  }
  const result = await getV1EventsByContractAddress({
    baseUrl: `https://${getThirdwebDomains().insight}`,
    fetch: getClientFetch(client),
    path: {
      contractAddress
    },
    query: {
      ...defaultQueryOptions,
      ...queryOptions
    }
  });
  if (result.error) {
    throw new Error(`${result.response.status} ${result.response.statusText} - ${result.error ? stringify(result.error) : "Unknown error"}`);
  }
  return ((_a = result.data) == null ? void 0 : _a.data) ?? [];
}

// node_modules/thirdweb/dist/esm/insight/get-tokens.js
async function getOwnedTokens(args) {
  var _a;
  const [{ getV1Tokens }, { getThirdwebDomains }, { getClientFetch }, { assertInsightEnabled }, { stringify }] = await Promise.all([
    import("./thirdweb-53K6KZPK.js"),
    import("./domains-PZ44HVSZ.js"),
    import("./fetch-IVMONMJP.js"),
    import("./common-TPROLQRW.js"),
    import("./json-IBHY24UA.js")
  ]);
  const { client, chains, ownerAddress, queryOptions } = args;
  await assertInsightEnabled(chains);
  const defaultQueryOptions = {
    chain_id: chains.length > 0 ? chains.map((chain) => chain.id) : [1],
    include_native: "true",
    include_spam: "false",
    limit: 50,
    metadata: "true",
    owner_address: ownerAddress
  };
  const result = await getV1Tokens({
    baseUrl: `https://${getThirdwebDomains().insight}`,
    fetch: getClientFetch(client),
    query: {
      ...defaultQueryOptions,
      ...queryOptions
    }
  });
  if (result.error) {
    throw new Error(`${result.response.status} ${result.response.statusText} - ${result.error ? stringify(result.error) : "Unknown error"}`);
  }
  return transformOwnedToken(((_a = result.data) == null ? void 0 : _a.data) ?? []);
}
async function transformOwnedToken(token) {
  const { toTokens } = await import("./units-SFXXCOHV.js");
  return token.map((t) => {
    const decimals = t.decimals ?? 18;
    const value = BigInt(t.balance);
    return {
      chainId: t.chain_id,
      decimals,
      displayValue: toTokens(value, decimals),
      name: t.name ?? "",
      symbol: t.symbol ?? "",
      tokenAddress: t.token_address,
      value
    };
  });
}

export {
  getContractEvents,
  getOwnedTokens,
  insight_exports
};
//# sourceMappingURL=chunk-N6DSQFYO.js.map
