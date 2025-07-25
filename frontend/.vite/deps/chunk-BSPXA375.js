import {
  prepareContractCall
} from "./chunk-HEMRZHKU.js";
import {
  readContract
} from "./chunk-WHDWYZBU.js";
import {
  isHex,
  stringToHex
} from "./chunk-AT6CAMHI.js";
import {
  withCache
} from "./chunk-Z5XIAL4H.js";

// node_modules/thirdweb/dist/esm/wallets/smart/lib/calls.js
async function predictAddress(args) {
  const { factoryContract, predictAddressOverride: predictAddress2, adminAddress, accountSalt, accountAddress } = args;
  if (predictAddress2) {
    return predictAddress2(factoryContract, adminAddress);
  }
  if (accountAddress) {
    return accountAddress;
  }
  if (!adminAddress) {
    throw new Error("Account address is required to predict the smart wallet address.");
  }
  return withCache(async () => {
    const saltHex = accountSalt && isHex(accountSalt) ? accountSalt : stringToHex(accountSalt ?? "");
    let result;
    let retries = 0;
    const maxRetries = 3;
    while (retries <= maxRetries) {
      try {
        result = await readContract({
          contract: factoryContract,
          method: "function getAddress(address, bytes) returns (address)",
          params: [adminAddress, saltHex]
        });
        break;
      } catch (error) {
        if (retries === maxRetries) {
          throw error;
        }
        const delay = 2 ** (retries + 1) * 200;
        await new Promise((resolve) => setTimeout(resolve, delay));
        retries++;
      }
    }
    if (!result) {
      throw new Error(`No smart account address found for admin address ${adminAddress} and salt ${accountSalt}`);
    }
    return result;
  }, {
    cacheKey: `${args.factoryContract.chain.id}-${args.factoryContract.address}-${args.adminAddress}-${args.accountSalt}`,
    cacheTime: 1e3 * 60 * 60 * 24
    // 1 day
  });
}
function prepareCreateAccount(args) {
  const { adminAddress, factoryContract, createAccountOverride: createAccount, accountSalt } = args;
  if (createAccount) {
    return createAccount(factoryContract, adminAddress);
  }
  const saltHex = accountSalt && isHex(accountSalt) ? accountSalt : stringToHex(accountSalt ?? "");
  return prepareContractCall({
    contract: factoryContract,
    method: "function createAccount(address, bytes) returns (address)",
    params: [adminAddress, saltHex]
  });
}
function prepareExecute(args) {
  const { accountContract, transaction, executeOverride: execute } = args;
  if (execute) {
    return execute(accountContract, transaction);
  }
  let value = transaction.value || 0n;
  if (transaction.chainId === 295 || transaction.chainId === 296) {
    value = BigInt(value) / BigInt(10 ** 10);
  }
  return prepareContractCall({
    contract: accountContract,
    // if gas is specified for the inner tx, use that and add 21k for the execute call on the account contract
    // this avoids another estimateGas call when bundling the userOp
    // and also allows for passing custom gas limits for the inner tx
    gas: transaction.gas ? transaction.gas + 21000n : void 0,
    method: "function execute(address, uint256, bytes)",
    params: [transaction.to || "", value, transaction.data || "0x"]
  });
}
function prepareBatchExecute(args) {
  var _a;
  const { accountContract, transactions, executeBatchOverride: executeBatch } = args;
  if (executeBatch) {
    return executeBatch(accountContract, transactions);
  }
  let values = transactions.map((tx) => tx.value || 0n);
  const chainId = (_a = transactions[0]) == null ? void 0 : _a.chainId;
  if (chainId === 295 || chainId === 296) {
    values = values.map((value) => BigInt(value) / BigInt(10 ** 10));
  }
  return prepareContractCall({
    contract: accountContract,
    method: "function executeBatch(address[], uint256[], bytes[])",
    params: [
      transactions.map((tx) => tx.to || ""),
      values,
      transactions.map((tx) => tx.data || "0x")
    ]
  });
}

export {
  predictAddress,
  prepareCreateAccount,
  prepareExecute,
  prepareBatchExecute
};
//# sourceMappingURL=chunk-BSPXA375.js.map
