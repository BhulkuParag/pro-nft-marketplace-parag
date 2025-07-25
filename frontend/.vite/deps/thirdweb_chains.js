import {
  polygon
} from "./chunk-2GSDSUQU.js";
import {
  ethereum,
  mainnet
} from "./chunk-NP7PJWRI.js";
import {
  base,
  baseSepolia,
  optimism,
  optimismSepolia,
  zora,
  zoraSepolia
} from "./chunk-JGXNTIIP.js";
import {
  defineChain,
  getChainMetadata,
  getRpcUrlForChain
} from "./chunk-CYZDLLAL.js";
import "./chunk-Z5XIAL4H.js";
import "./chunk-LPEXUG4Y.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-UQSP5VHN.js";
import "./chunk-OS7ZSSJM.js";

// node_modules/thirdweb/dist/esm/chains/chain-definitions/abstract.js
var abstract = defineChain({
  blockExplorers: [
    {
      name: "Abstract Block Explorer",
      url: "https://explorer.abs.xyz"
    }
  ],
  id: 2741,
  name: "Abstract",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/abstract-testnet.js
var abstractTestnet = defineChain({
  blockExplorers: [
    {
      name: "Abstract Testnet Block Explorer",
      url: "https://explorer.testnet.abs.xyz"
    }
  ],
  id: 11124,
  name: "Abstract Testnet",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/anvil.js
var anvil = defineChain({
  id: 31337,
  name: "Anvil",
  nativeCurrency: {
    decimals: 18,
    name: "Anvil Ether",
    symbol: "ETH"
  },
  rpc: "http://127.0.0.1:8545",
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/arbitrum.js
var arbitrum = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api.arbiscan.io/api",
      name: "Arbiscan",
      url: "https://arbiscan.io"
    }
  ],
  id: 42161,
  name: "Arbitrum One",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/arbitrum-nova.js
var arbitrumNova = defineChain({
  blockExplorers: [
    {
      name: "Arbiscan",
      url: "https://nova.arbiscan.io/"
    }
  ],
  id: 42170,
  name: "Arbitrum Nova",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/arbitrum-sepolia.js
var arbitrumSepolia = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://sepolia.arbiscan.io/api",
      name: "Arbiscan",
      url: "https://sepolia.arbiscan.io"
    }
  ],
  id: 421614,
  name: "Arbitrum Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Arbitrum Sepolia Ether",
    symbol: "ETH"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/assetchain-testnet.js
var assetChainTestnet = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://scan-testnet.assetchain.org/api",
      name: "Asset Chain Testnet Explorer",
      url: "https://scan-testnet.assetchain.org"
    }
  ],
  id: 42421,
  name: "AssetChain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Real World Asset",
    symbol: "RWA"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/astria-evm-dusknet.js
var astriaEvmDusknet = defineChain({
  blockExplorers: [
    {
      name: "Astria EVM Dusknet Explorer",
      url: "https://explorer.evm.dusk-3.devnet.astria.org/"
    }
  ],
  id: 912559,
  name: "Astria EVM Dusknet",
  nativeCurrency: { decimals: 18, name: "RIA", symbol: "RIA" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/avalanche.js
var avalanche = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api.snowtrace.io/api",
      name: "SnowTrace",
      url: "https://snowtrace.io"
    }
  ],
  id: 43114,
  name: "Avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/avalanche-fuji.js
var avalancheFuji = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api-testnet.snowtrace.io/api",
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io"
    }
  ],
  id: 43113,
  name: "Avalanche Fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/berachain.js
var berachain = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api.berascan.com/api",
      name: "berascan",
      url: "https://berascan.com/"
    }
  ],
  id: 80094,
  name: "Berachain",
  nativeCurrency: { decimals: 18, name: "BERA", symbol: "BERA" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/berachain-bepolia.js
var berachainBepolia = defineChain({
  blockExplorers: [
    {
      name: "beratrail",
      url: "https://bepolia.beratrail.io/"
    }
  ],
  id: 80069,
  name: "Berachain Bepolia",
  nativeCurrency: { decimals: 18, name: "BERA", symbol: "BERA" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/blast.js
var blast = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api.blastscan.io/api",
      name: "Blastscan",
      url: "https://blastscan.io"
    }
  ],
  id: 81457,
  name: "Blast",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/blast-sepolia.js
var blastSepolia = defineChain({
  blockExplorers: [
    {
      name: "Blast Sepolia Explorer",
      url: "https://testnet.blastscan.io"
    }
  ],
  id: 168587773,
  name: "Blast Sepolia Testnet",
  nativeCurrency: { decimals: 18, name: "Sepolia Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/bsc.js
var bsc = defineChain({
  blockExplorers: [
    {
      name: "bscscan",
      url: "https://bscscan.com"
    }
  ],
  id: 56,
  name: "BNB Smart Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB Chain Native Token",
    symbol: "BNB"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/bsc-testnet.js
var bscTestnet = defineChain({
  blockExplorers: [
    {
      name: "bscscan-testnet",
      url: "https://testnet.bscscan.com"
    }
  ],
  id: 97,
  name: "BNB Smart Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB Chain Native Token",
    symbol: "tBNB"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/celo.js
var celo = defineChain({
  blockExplorers: [
    {
      name: "blockscout",
      url: "https://explorer.celo.org"
    }
  ],
  id: 42220,
  name: "Celo Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/celo-alfajores-testnet.js
var celoAlfajoresTestnet = defineChain({
  blockExplorers: [
    {
      name: "Alfajoresscan",
      url: "https://alfajores.celoscan.io"
    }
  ],
  id: 44787,
  name: "Celo Alfajores Testnet",
  nativeCurrency: { decimals: 18, name: "CELO", symbol: "CELO" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/cronos.js
var cronos = defineChain({
  blockExplorers: [
    {
      name: "Cronos Explorer",
      url: "https://explorer.cronos.org"
    }
  ],
  id: 25,
  name: "Cronos Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos",
    symbol: "CRO"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/degen.js
var degen = defineChain({
  blockExplorers: [],
  id: 666666666,
  name: "Degen Chain",
  nativeCurrency: {
    decimals: 18,
    name: "DEGEN",
    symbol: "DEGEN"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/fantom.js
var fantom = defineChain({
  blockExplorers: [
    {
      name: "ftmscan",
      url: "https://ftmscan.com"
    }
  ],
  id: 250,
  name: "Fantom Opera",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/fantom-testnet.js
var fantomTestnet = defineChain({
  blockExplorers: [
    {
      name: "ftmscan",
      url: "https://testnet.ftmscan.com"
    }
  ],
  id: 4002,
  name: "Fantom Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/frame-testnet.js
var frameTestnet = defineChain({
  blockExplorers: [
    {
      name: "Frame Testnet Explorer",
      url: "https://explorer.testnet.frame.xyz"
    }
  ],
  id: 68840142,
  name: "Frame Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/fraxtal-testnet.js
var fraxtalTestnet = defineChain({
  blockExplorers: [
    {
      name: "Fraxscan",
      url: "https://holesky.fraxscan.com/"
    }
  ],
  id: 2522,
  name: "Fraxtal Testnet",
  nativeCurrency: { decimals: 18, name: "Frax Ether", symbol: "frxETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/gnosis.js
var gnosis = defineChain({
  blockExplorers: [
    {
      name: "blockscout",
      url: "https://gnosis.blockscout.com"
    }
  ],
  id: 100,
  name: "Gnosis",
  nativeCurrency: { decimals: 18, name: "xDAI", symbol: "XDAI" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/gnosis-chiado-testnet.js
var gnosisChiadoTestnet = defineChain({
  blockExplorers: [
    {
      name: "blockscout",
      url: "https://gnosis-chiado.blockscout.com"
    }
  ],
  id: 10200,
  name: "Gnosis Chiado Testnet",
  nativeCurrency: { decimals: 18, name: "xDAI", symbol: "XDAI" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/god-woken.js
var godWoken = defineChain({
  blockExplorers: [
    {
      name: "GWScan Block Explorer",
      url: "https://v1.gwscan.com"
    }
  ],
  id: 71402,
  name: "Godwoken Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "pCKB",
    symbol: "pCKB"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/god-woken-testnet-v1.js
var godWokenTestnetV1 = defineChain({
  blockExplorers: [
    {
      name: "GWScan Block Explorer",
      url: "https://v1.testnet.gwscan.com"
    }
  ],
  id: 71401,
  name: "Godwoken Testnet v1",
  nativeCurrency: {
    decimals: 18,
    name: "pCKB",
    symbol: "pCKB"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/hardhat.js
var hardhat = defineChain({
  id: 31337,
  name: "Hardhat",
  nativeCurrency: {
    decimals: 18,
    name: "Hardhat Ether",
    symbol: "ETH"
  },
  rpc: "http://127.0.0.1:8545",
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/hokum-testnet.js
var hokumTestnet = defineChain({
  blockExplorers: [
    {
      name: "Hokum Explorer",
      url: "https://testnet-explorer.hokum.gg"
    }
  ],
  id: 20482050,
  name: "Hokum Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/linea.js
var linea = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api.lineascan.build/api",
      name: "LineaScan",
      url: "https://lineascan.build"
    }
  ],
  id: 59144,
  name: "Linea",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/linea-sepolia.js
var lineaSepolia = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api-sepolia.lineascan.build/api",
      name: "LineaScan",
      url: "https://sepolia.lineascan.build"
    }
  ],
  id: 59141,
  name: "Linea Sepolia",
  nativeCurrency: { decimals: 18, name: "Sepolia Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/localhost.js
var localhost = defineChain({
  id: 1337,
  name: "Localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpc: "http://127.0.0.1:8545",
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/loot.js
var loot = defineChain({
  blockExplorers: [
    {
      name: "Explorer",
      url: "https://explorer.lootchain.com/"
    }
  ],
  id: 5151706,
  name: "Loot Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "AGLD",
    symbol: "AGLD"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/manta-pacific.js
var mantaPacific = defineChain({
  blockExplorers: [
    {
      name: "manta-pacific Explorer",
      url: "https://pacific-explorer.manta.network"
    }
  ],
  id: 169,
  name: "Manta Pacific Mainnet",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/manta-pacific-testnet.js
var mantaPacificTestnet = defineChain({
  blockExplorers: [
    {
      name: "manta-testnet Explorer",
      url: "https://manta-testnet.calderaexplorer.xyz"
    }
  ],
  id: 3441005,
  name: "Manta Pacific Testnet",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/metal-l2-testnet.js
var metalL2Testnet = defineChain({
  blockExplorers: [
    {
      name: "Blockscout",
      url: "https://testnet.explorer.metall2.com"
    }
  ],
  id: 1740,
  name: "Metal L2 Testnet",
  nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/mode.js
var mode = defineChain({
  blockExplorers: [
    {
      name: "Modescout",
      url: "https://explorer.mode.network/"
    }
  ],
  id: 919,
  name: "Mode",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/mode-testnet.js
var modeTestnet = defineChain({
  blockExplorers: [
    {
      name: "Modescout",
      url: "https://sepolia.explorer.mode.network/"
    }
  ],
  id: 919,
  name: "Mode Testnet",
  nativeCurrency: { decimals: 18, name: "Sepolia Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/monad-testnet.js
var monadTestnet = defineChain({
  blockExplorers: [
    {
      name: "Monad Explorer",
      url: "https://testnet.monadexplorer.com/"
    }
  ],
  id: 10143,
  name: "Monad Testnet",
  nativeCurrency: { decimals: 18, name: "Mon", symbol: "MON" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/moonbeam.js
var moonbeam = defineChain({
  blockExplorers: [
    {
      name: "moonscan",
      url: "https://moonbeam.moonscan.io"
    }
  ],
  id: 1284,
  name: "Moonbeam",
  nativeCurrency: {
    decimals: 18,
    name: "Glimmer",
    symbol: "GLMR"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/palm.js
var palm = defineChain({
  blockExplorers: [
    {
      name: "Chainlens",
      url: "https://palm.chainlens.com"
    }
  ],
  id: 11297108109,
  name: "Palm",
  nativeCurrency: {
    decimals: 18,
    name: "PALM",
    symbol: "PALM"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/palm-testnet.js
var palmTestnet = defineChain({
  blockExplorers: [
    {
      name: "Chainlens",
      url: "https://testnet.palm.chainlens.com"
    }
  ],
  id: 11297108099,
  name: "Palm Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "PALM",
    symbol: "PALM"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/polygon-amoy.js
var polygonAmoy = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api-amoy.polygonscan.com/api",
      name: "PolygonScan",
      url: "https://amoy.polygonscan.com"
    }
  ],
  id: 80002,
  name: "Polygon Amoy",
  nativeCurrency: { decimals: 18, name: "MATIC", symbol: "MATIC" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/polygon-mumbai.js
var polygonMumbai = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://mumbai.polygonscan.com/api",
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    }
  ],
  id: 80001,
  name: "Polygon Mumbai",
  nativeCurrency: { decimals: 18, name: "MATIC", symbol: "MATIC" },
  testnet: true
});
var mumbai = polygonMumbai;

// node_modules/thirdweb/dist/esm/chains/chain-definitions/polygon-zkevm.js
var polygonZkEvm = defineChain({
  blockExplorers: [
    {
      name: "blockscout",
      url: "https://zkevm.polygonscan.com"
    }
  ],
  id: 1101,
  name: "Polygon zkEVM",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/polygon-zkevm-testnet.js
var polygonZkEvmTestnet = defineChain({
  blockExplorers: [
    {
      name: "Polygon zkEVM explorer",
      url: "https://explorer.public.zkevm-test.net"
    }
  ],
  id: 1442,
  name: "Polygon zkEVM Testnet",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/rari.js
var rari = defineChain({
  blockExplorers: [
    {
      name: "rarichain-explorer",
      url: "https://mainnet.explorer.rarichain.org"
    }
  ],
  id: 1380012617,
  name: "Rarichain",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/rari-testnet.js
var rariTestnet = defineChain({
  blockExplorers: [
    {
      name: "rarichain-testnet-explorer",
      url: "https://explorer.rarichain.org"
    }
  ],
  id: 1918988905,
  name: "RARIchain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/scroll.js
var scroll = defineChain({
  blockExplorers: [
    {
      name: "Scrollscan",
      url: "https://scrollscan.com"
    }
  ],
  id: 534352,
  name: "Scroll",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/scroll-alpha-testnet.js
var scrollAlphaTestnet = defineChain({
  blockExplorers: [
    {
      name: "Scroll Alpha Testnet Block Explorer",
      url: "https://alpha-blockscout.scroll.io"
    }
  ],
  id: 534353,
  name: "Scroll Alpha Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/scroll-sepolia-testnet.js
var scrollSepoliaTestnet = defineChain({
  blockExplorers: [
    {
      name: "Scroll Sepolia Etherscan",
      url: "https://sepolia.scrollscan.com"
    }
  ],
  id: 534353,
  name: "Scroll Sepolia Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/sepolia.js
var sepolia = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://api-sepolia.etherscan.io/api",
      name: "Etherscan",
      url: "https://sepolia.etherscan.io"
    }
  ],
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: { decimals: 18, name: "Sepolia Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/soneium-minato.js
var soneiumMinato = defineChain({
  blockExplorers: [
    {
      name: "Minato Explorer",
      url: "https://explorer-testnet.soneium.org/"
    }
  ],
  id: 1946,
  name: "Soneium Minato",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/treasure.js
var treasure = defineChain({
  blockExplorers: [
    {
      name: "Treasure Block Explorer",
      url: "https://treasurescan.io"
    }
  ],
  id: 61166,
  name: "Treasure",
  nativeCurrency: { decimals: 18, name: "MAGIC", symbol: "MAGIC" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/treasureTopaz.js
var treasureTopaz = defineChain({
  blockExplorers: [
    {
      name: "Treasure Topaz Block Explorer",
      url: "https://topaz.treasurescan.io"
    }
  ],
  id: 978658,
  name: "Treasure Topaz",
  nativeCurrency: { decimals: 18, name: "MAGIC", symbol: "MAGIC" }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/xai.js
var xai = defineChain({
  blockExplorers: [
    {
      name: "Blockscout",
      url: "https://explorer.xai-chain.net"
    }
  ],
  id: 660279,
  name: "Xai Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "XAI token",
    symbol: "XAI"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/xai-sepolia.js
var xaiSepolia = defineChain({
  blockExplorers: [
    {
      name: "Blockscout",
      url: "https://testnet-explorer-v2.xai-chain.net"
    }
  ],
  id: 37714555429,
  name: "Xai Sepolia",
  nativeCurrency: { decimals: 18, name: "sXAI", symbol: "sXAI" },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/zk-candy-sepolia.js
var zkCandySepolia = defineChain({
  blockExplorers: [
    {
      name: "zkCandy Block Explorer",
      url: "https://sepolia.explorer.zkcandy.io"
    }
  ],
  id: 302,
  name: "zkCandy Sepolia Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/zksync.js
var zkSync = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://block-explorer-api.zksync.dev/api",
      name: "zkSync Era Block Explorer",
      url: "https://explorer.zksync.io"
    }
  ],
  id: 324,
  name: "ZkSync Era",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  }
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/zksync-sepolia.js
var zkSyncSepolia = defineChain({
  blockExplorers: [
    {
      apiUrl: "https://block-explorer-api.sepolia.zksync.dev/api",
      name: "zkSync Sepolia Block Explorer",
      url: "https://sepolia.explorer.zksync.io"
    }
  ],
  id: 300,
  name: "ZkSync Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  }
});
export {
  abstract,
  abstractTestnet,
  anvil,
  arbitrum,
  arbitrumNova,
  arbitrumSepolia,
  assetChainTestnet,
  astriaEvmDusknet,
  avalanche,
  avalancheFuji,
  base,
  baseSepolia,
  berachain,
  berachainBepolia,
  blast,
  blastSepolia,
  bsc,
  bscTestnet,
  celo,
  celoAlfajoresTestnet,
  cronos,
  defineChain,
  degen,
  ethereum,
  fantom,
  fantomTestnet,
  frameTestnet,
  fraxtalTestnet,
  getChainMetadata,
  getRpcUrlForChain,
  gnosis,
  gnosisChiadoTestnet,
  godWoken,
  godWokenTestnetV1,
  hardhat,
  hokumTestnet,
  linea,
  lineaSepolia,
  localhost,
  loot,
  mainnet,
  mantaPacific,
  mantaPacificTestnet,
  metalL2Testnet,
  mode,
  modeTestnet,
  monadTestnet,
  moonbeam,
  mumbai,
  optimism,
  optimismSepolia,
  palm,
  palmTestnet,
  polygon,
  polygonAmoy,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  rari,
  rariTestnet,
  scroll,
  scrollAlphaTestnet,
  scrollSepoliaTestnet,
  sepolia,
  soneiumMinato,
  treasure,
  treasureTopaz,
  xai,
  xaiSepolia,
  zkCandySepolia,
  zkSync,
  zkSyncSepolia,
  zora,
  zoraSepolia
};
//# sourceMappingURL=thirdweb_chains.js.map
