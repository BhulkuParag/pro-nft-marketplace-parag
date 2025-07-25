import {
  defineChain
} from "./chunk-CYZDLLAL.js";

// node_modules/thirdweb/dist/esm/chains/chain-definitions/base.js
var base = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api.basescan.org/api",
      name: "Basescan",
      url: "https://basescan.org"
    }
  ],
  id: 8453,
  name: "Base",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/base-sepolia.js
var baseSepolia = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api-sepolia.basescan.org/api",
      name: "Basescan",
      url: "https://sepolia.basescan.org"
    }
  ],
  id: 84532,
  name: "Base Sepolia",
  nativeCurrency: { decimals: 18, name: "Sepolia Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/optimism.js
var optimism = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api-optimistic.etherscan.io",
      name: "Optimism Explorer",
      url: "https://optimistic.etherscan.io"
    }
  ],
  id: 10,
  name: "OP Mainnet",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/optimism-sepolia.js
var optimismSepolia = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://optimism-sepolia.blockscout.com/api",
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com"
    }
  ],
  id: 11155420,
  name: "OP Sepolia",
  nativeCurrency: { decimals: 18, name: "Sepolia Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/zora.js
var zora = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://explorer.zora.energy/api",
      name: "Explorer",
      url: "https://explorer.zora.energy"
    }
  ],
  id: 7777777,
  name: "Zora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/zora-sepolia.js
var zoraSepolia = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://sepolia.explorer.zora.energy/api",
      name: "Zora Sepolia Explorer",
      url: "https://sepolia.explorer.zora.energy/"
    }
  ],
  id: 999999999,
  name: "Zora Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Sepolia",
    symbol: "ETH"
  },
  testnet: true
});

export {
  base,
  baseSepolia,
  optimism,
  optimismSepolia,
  zora,
  zoraSepolia
};
//# sourceMappingURL=chunk-JGXNTIIP.js.map
