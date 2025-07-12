import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/wallets/in-app/core/eip5972/in-app-wallet-capabilities.js
function inAppWalletGetCapabilities(args) {
  const { wallet } = args;
  const chain = wallet.getChain();
  if (chain === void 0) {
    return {
      message: `Can't get capabilities, no active chain found for wallet: ${wallet.id}`
    };
  }
  const account = wallet.getAccount();
  const config = wallet.getConfig();
  const sponsorGas = (config == null ? void 0 : config.smartAccount) && "sponsorGas" in config.smartAccount ? config.smartAccount.sponsorGas : (config == null ? void 0 : config.executionMode) ? config.executionMode.mode === "EIP4337" && config.executionMode.smartAccount && "sponsorGas" in config.executionMode.smartAccount ? config.executionMode.smartAccount.sponsorGas : config.executionMode.mode === "EIP7702" ? config.executionMode.sponsorGas : false : false;
  return {
    [chain.id]: {
      atomic: {
        status: (account == null ? void 0 : account.sendBatchTransaction) !== void 0 ? "supported" : "unsupported"
      },
      paymasterService: {
        supported: sponsorGas
      }
    }
  };
}
export {
  inAppWalletGetCapabilities
};
//# sourceMappingURL=in-app-wallet-capabilities-W574F6PI.js.map
