// node_modules/thirdweb/dist/esm/insight/get-transactions.js
async function getTransactions(args) {
  const [{ getV1WalletsByWalletAddressTransactions }, { getThirdwebDomains }, { getClientFetch }, { assertInsightEnabled }, { stringify }] = await Promise.all([
    import("./thirdweb-53K6KZPK.js"),
    import("./domains-PZ44HVSZ.js"),
    import("./fetch-IVMONMJP.js"),
    import("./common-TPROLQRW.js"),
    import("./json-IBHY24UA.js")
  ]);
  await assertInsightEnabled(args.chains);
  const threeMonthsAgoInSeconds = Math.floor((Date.now() - 3 * 30 * 24 * 60 * 60 * 1e3) / 1e3);
  const { client, walletAddress, chains, queryOptions } = args;
  const defaultQueryOptions = {
    chain: chains.map((chain) => chain.id),
    filter_block_timestamp_gte: threeMonthsAgoInSeconds,
    limit: 100
  };
  const result = await getV1WalletsByWalletAddressTransactions({
    baseUrl: `https://${getThirdwebDomains().insight}`,
    fetch: getClientFetch(client),
    path: {
      wallet_address: walletAddress
    },
    query: {
      ...defaultQueryOptions,
      ...queryOptions
    }
  });
  if (result.error) {
    throw new Error(`${result.response.status} ${result.response.statusText} - ${result.error ? stringify(result.error) : "Unknown error"}`);
  }
  return result.data.data || [];
}

export {
  getTransactions
};
//# sourceMappingURL=chunk-T2B5SAMX.js.map
