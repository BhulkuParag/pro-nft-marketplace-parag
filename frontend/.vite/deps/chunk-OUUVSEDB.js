// node_modules/thirdweb/dist/esm/wallets/ecosystem/is-ecosystem-wallet.js
function isEcosystemWallet(wallet) {
  return typeof wallet === "string" ? wallet.startsWith("ecosystem.") : wallet.id.startsWith("ecosystem.");
}

export {
  isEcosystemWallet
};
//# sourceMappingURL=chunk-OUUVSEDB.js.map
