import {
  defineChain
} from "./chunk-CYZDLLAL.js";

// node_modules/thirdweb/dist/esm/chains/chain-definitions/ethereum.js
var ethereum = defineChain({
  blockExplorers: [
    {
      name: "Etherscan",
      url: "https://etherscan.io"
    }
  ],
  id: 1,
  name: "Ethereum",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  }
});
var mainnet = ethereum;

export {
  ethereum,
  mainnet
};
//# sourceMappingURL=chunk-NP7PJWRI.js.map
