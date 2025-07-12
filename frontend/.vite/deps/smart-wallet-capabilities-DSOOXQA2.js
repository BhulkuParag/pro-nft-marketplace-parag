import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/wallets/smart/lib/smart-wallet-capabilities.js
function smartWalletGetCapabilities(args) {
  const { wallet } = args;
  const chain = wallet.getChain();
  if (chain === void 0) {
    return {
      message: `Can't get capabilities, no active chain found for wallet: ${wallet.id}`
    };
  }
  const account = wallet.getAccount();
  const config = wallet.getConfig() ?? {};
  return {
    [chain.id]: {
      atomic: {
        status: (account == null ? void 0 : account.sendBatchTransaction) !== void 0 ? "supported" : "unsupported"
      },
      paymasterService: {
        supported: "sponsorGas" in config ? config.sponsorGas : false
      }
    }
  };
}
export {
  smartWalletGetCapabilities
};
//# sourceMappingURL=smart-wallet-capabilities-DSOOXQA2.js.map
