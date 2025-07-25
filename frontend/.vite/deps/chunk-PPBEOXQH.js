import {
  getTransactions
} from "./chunk-T2B5SAMX.js";

// node_modules/thirdweb/dist/esm/reactive/store.js
function createStore(initialValue) {
  const listeners = /* @__PURE__ */ new Set();
  let value = initialValue;
  const notify = () => {
    for (const listener of listeners) {
      listener();
    }
  };
  return {
    getValue() {
      return value;
    },
    setValue(newValue) {
      if (newValue === value) {
        return;
      }
      value = newValue;
      notify();
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    }
  };
}

// node_modules/thirdweb/dist/esm/transaction/transaction-store.js
var transactionsByAddress = /* @__PURE__ */ new Map();
function getTransactionStore(address) {
  const existingStore = transactionsByAddress.get(address);
  if (existingStore) {
    return existingStore;
  }
  const newStore = createStore([]);
  transactionsByAddress.set(address, newStore);
  return newStore;
}
function addTransactionToStore(options) {
  const { address, transactionHash, chainId } = options;
  const tranasctionStore = getTransactionStore(address);
  tranasctionStore.setValue([
    ...tranasctionStore.getValue(),
    { chainId, transactionHash }
  ]);
  transactionsByAddress.set(address, tranasctionStore);
}
async function getPastTransactions(options) {
  const { walletAddress, chain, client } = options;
  const oneMonthsAgoInSeconds = Math.floor((Date.now() - 1 * 30 * 24 * 60 * 60 * 1e3) / 1e3);
  const result = await getTransactions({
    chains: [chain],
    client,
    queryOptions: {
      filter_block_timestamp_gte: oneMonthsAgoInSeconds,
      limit: 20
    },
    walletAddress
  });
  return result.map((tx) => ({
    chainId: typeof tx.chain_id === "string" ? Number(tx.chain_id) : tx.chain_id,
    receipt: {
      status: tx.status === 1 ? "success" : "failed",
      to: tx.to_address
    },
    transactionHash: tx.hash
  }));
}

export {
  createStore,
  getTransactionStore,
  addTransactionToStore,
  getPastTransactions
};
//# sourceMappingURL=chunk-PPBEOXQH.js.map
