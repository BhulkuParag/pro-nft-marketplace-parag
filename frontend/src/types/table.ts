import type { ColDef } from 'ag-grid-community';

export interface AGGridTableProps {
  // columnDefs: ColDef<any>[];
  columnDefs: any[];
  rowData: any[];
  loading?: boolean;
}
export interface RowData {
  name?: string;
  id?: string;
  banner?: string;
  image?: string;
  volume?: number;
  ownerCount?: number;
  mintVolume: number;
  tokenCount?: number;
  openseaVerificationStatus?: string;
  topBid?: {
    price: {
      amount: {
        usd: number;
        decimal: number;
      };
    };
  };
  mintPrice: {
    //-- Mint Price
    amount: {
      usd: number;
      decimal: number;
    };
  };
  price?: {
    amount: {
      usd: number;
      decimal: number;
    };
  };
  volumeChange: {
    '1day': number;
    '7day': number;
    '3numberday': number;
  };
  collectionVolume: {
    '1day': number;
    '7day': number;
    '3numberday': number;
    allTime: number;
  };
  floorAsk: {
    price: {
      amount: {
        usd: number;
        decimal: number;
      };
    };
  };
  sampleImages?: string[];
}

export interface NftSalesT {
  id: string;
  token: {
    name: string;
    image: string;
    contract: string;
    tokenId: string;
  };
  price: {
    amount: {
      usd: number;
      decimal: number;
    };
  };
  volumeChange: {
    '1day': number;
    '7day': number;
    '3numberday': number;
  };
  collectionVolume: {
    '1day': number;
    '7day': number;
    '3numberday': number;
    allTime: number;
  };
  washTradingScore: number;
  timestamp?: number;
}

export interface TopSalesT {
  id: string;
  timestamp?: string;
  token?: {
    name: string;
    image: string;
    contract: string;
    tokenId: string;
    collection: {
      id: string;
      name: string;
    };
  };
  price: {
    amount: {
      usd: number;
      decimal: number;
      row: string;
    };
  };
}

export interface ItemDetailActivity {
  sampleImages?: string[];
  id?: string;
  image?: string;
  openseaVerificationStatus?: string;
  RarityScore?: string;
  Quantity?: string;
  RarityRank?: string;
  name?: string;
  type?: string;
  from?: string;
  to?: string;
  price?: string;
  time?: string;
  field?: string;
}

export interface ItemDetails {
  token?: {
    name: string;
    owner: string;
    image: string;
    contract: string;
    kind: string;
    tokenId: string;
    rarity: number;
    rarityRank: number;
    collection: {
      id: string;
      name: string;
      image: string;
      tokenCount: number;
      floorAskPrice: {
        amount: {
          usd: number;
          decimal: number;
        };
      };
    };
  };
}

export interface ActivityType {
  type: string;
  fromAddress: string;
  toAddress: string;
  price: {
    currency: {
      contract: string;
      name: string;
      symbol: string;
      decimals: number;
    };
    amount: {
      raw: string;
      decimal: number;
      usd: number;
      native: number;
    };
    netAmount: {
      raw: string;
      decimal: number;
      usd: number;
      native: number;
    };
  };
  fillSource: {
    id: string;
    domain: string;
    name: string;
    icon: string;
    url: string;
  };
  amount: number;
  timestamp: number;
  createdAt: string;
  contract: string;
  token: {
    contract: string;
    metadata: {
      image: string;
      name: string;
      description: string;
    };
    rarityScore: number;
    rarityRank: number;
    collection: {
      volume: number;
      volumePercentChange: number;
      count: number;
      countPercentChange: number;
      sampleImages: [string];
      openseaVerificationStatus: string;
      magicedenVerificationStatus: string;
      onSaleCount: number;
      volumeChange: {
        '1day': number;
        '7day': number;
        '3numberday': number;
      };
      collectionVolume: {
        '1day': number;
        '7day': number;
        '3numberday': number;
        allTime: number;
      };
      floorAskPercentChange: number;
      tokenCount: number;
      ownerCount: number;
      banner: string;
      description: string;
      floorAsk: {
        id: string;
        sourceDomain: string;
        price: {
          currency: {
            contract: string;
            name: string;
            symbol: string;
            decimals: number;
          };
          amount: {
            raw: string;
            decimal: number;
            usd: number;
            native: number;
          };
          netAmount: {
            raw: string;
            decimal: number;
            usd: number;
            native: number;
          };
        };
        maker: string;
        validFrom: number;
        validUntil: number;
        token: {
          chainId: number;
          contract: string;
          tokenId: string;
          name: string;
          description: string;
          image: string;
          imageSmall: string;
          imageLarge: string;
          metadata: {
            imageOriginal: string;
            imageMimeType: string;
            tokenURI: string;
          };
          kind: string;
          metadataDisabled: true;
          lastFlagUpdate: string;
          lastFlagChange: string;
          supply: string;
          remainingSupply: string;
          rarity: number;
          rarityRank: number;
          collection: {
            id: string;
            name: string;
            image: string;
            slug: string;
            symbol: string;
            creator: string;
            tokenCount: number;
            metadataDisabled: true;
            floorAskPrice: {
              currency: {
                contract: string;
                name: string;
                symbol: string;
                decimals: number;
              };
              amount: {
                raw: string;
                decimal: number;
                usd: number;
                native: number;
              };
            };
          };
          owner: string;
          mintedAt: string;
          createdAt: string;
          decimals: number;
          mintStages: [{}];
          spam: true;
          nsfw: true;
          flagged: true;
        };
        source: {
          id: string;
          domain: string;
          name: string;
          icon: string;
          url: string;
        };
      };
      topBid: {
        id: string;
        sourceDomain: string;
        price: {
          currency: {
            contract: string;
            name: string;
            symbol: string;
            decimals: number;
          };
          amount: {
            raw: string;
            decimal: number;
            usd: number;
            native: number;
          };
          netAmount: {
            raw: string;
            decimal: number;
            usd: number;
            native: number;
          };
        };
        maker: string;
        validUntil: number;
        validFrom: number;
      };
      spam: true;
      nsfw: true;
      collectionId: string;
      collectionImage: string;
      collectionName: string;
    };
    spam: true;
    nsfw: true;
    tokenId: string;
    tokenName: string;
    tokenImage: string;
  };
  collection: {
    volume: number;
    volumePercentChange: number;
    count: number;
    countPercentChange: number;
    sampleImages: [string];
    openseaVerificationStatus: string;
    magicedenVerificationStatus: string;
    onSaleCount: number;
    volumeChange: {
      '1day': number;
      '7day': number;
      '3numberday': number;
    };
    collectionVolume: {
      '1day': number;
      '7day': number;
      '3numberday': number;
      allTime: number;
    };
    floorAskPercentChange: number;
    tokenCount: number;
    ownerCount: number;
    banner: string;
    description: string;
    floorAsk: {
      id: string;
      sourceDomain: string;
      price: {
        currency: {
          contract: string;
          name: string;
          symbol: string;
          decimals: number;
        };
        amount: {
          raw: string;
          decimal: number;
          usd: number;
          native: number;
        };
        netAmount: {
          raw: string;
          decimal: number;
          usd: number;
          native: number;
        };
      };
      maker: string;
      validFrom: number;
      validUntil: number;
      token: {
        chainId: number;
        contract: string;
        tokenId: string;
        name: string;
        description: string;
        image: string;
        imageSmall: string;
        imageLarge: string;
        metadata: {
          imageOriginal: string;
          imageMimeType: string;
          tokenURI: string;
        };
        kind: string;
        metadataDisabled: true;
        lastFlagUpdate: string;
        lastFlagChange: string;
        supply: string;
        remainingSupply: string;
        rarity: number;
        rarityRank: number;
        collection: {
          id: string;
          name: string;
          image: string;
          slug: string;
          symbol: string;
          creator: string;
          tokenCount: number;
          metadataDisabled: true;
          floorAskPrice: {
            currency: {
              contract: string;
              name: string;
              symbol: string;
              decimals: number;
            };
            amount: {
              raw: string;
              decimal: number;
              usd: number;
              native: number;
            };
          };
        };
        owner: string;
        mintedAt: string;
        createdAt: string;
        decimals: number;
        mintStages: [{}];
        spam: true;
        nsfw: true;
        flagged: true;
      };
      source: {
        id: string;
        domain: string;
        name: string;
        icon: string;
        url: string;
      };
    };
    topBid: {
      id: string;
      sourceDomain: string;
      price: {
        currency: {
          contract: string;
          name: string;
          symbol: string;
          decimals: number;
        };
        amount: {
          raw: string;
          decimal: number;
          usd: number;
          native: number;
        };
        netAmount: {
          raw: string;
          decimal: number;
          usd: number;
          native: number;
        };
      };
      maker: string;
      validUntil: number;
      validFrom: number;
    };
    spam: true;
    nsfw: true;
    collectionId: string;
    collectionImage: string;
    collectionName: string;
  };
  order: {
    id: string;
    side: string;
    source: {
      id: string;
      domain: string;
      name: string;
      icon: string;
      url: string;
    };
    criteria: {
      kind: string;
      data: {
        collection: {
          volume: number;
          volumePercentChange: number;
          count: number;
          countPercentChange: number;
          sampleImages: [string];
          openseaVerificationStatus: string;
          magicedenVerificationStatus: string;
          onSaleCount: number;
          volumeChange: {
            '1day': number;
            '7day': number;
            '3numberday': number;
          };
          collectionVolume: {
            '1day': number;
            '7day': number;
            '3numberday': number;
            allTime: number;
          };
          floorAskPercentChange: number;
          tokenCount: number;
          ownerCount: number;
          banner: string;
          description: string;
          floorAsk: {
            id: string;
            sourceDomain: string;
            price: {
              currency: {
                contract: string;
                name: string;
                symbol: string;
                decimals: number;
              };
              amount: {
                raw: string;
                decimal: number;
                usd: number;
                native: number;
              };
              netAmount: {
                raw: string;
                decimal: number;
                usd: number;
                native: number;
              };
            };
            maker: string;
            validFrom: number;
            validUntil: number;
            token: {
              chainId: number;
              contract: string;
              tokenId: string;
              name: string;
              description: string;
              image: string;
              imageSmall: string;
              imageLarge: string;
              metadata: {
                imageOriginal: string;
                imageMimeType: string;
                tokenURI: string;
              };
              kind: string;
              metadataDisabled: true;
              lastFlagUpdate: string;
              lastFlagChange: string;
              supply: string;
              remainingSupply: string;
              rarity: number;
              rarityRank: number;
              collection: {
                id: string;
                name: string;
                image: string;
                slug: string;
                symbol: string;
                creator: string;
                tokenCount: number;
                metadataDisabled: true;
                floorAskPrice: {
                  currency: {
                    contract: string;
                    name: string;
                    symbol: string;
                    decimals: number;
                  };
                  amount: {
                    raw: string;
                    decimal: number;
                    usd: number;
                    native: number;
                  };
                };
              };
              owner: string;
              mintedAt: string;
              createdAt: string;
              decimals: number;
              mintStages: [{}];
              spam: true;
              nsfw: true;
              flagged: true;
            };
            source: {
              id: string;
              domain: string;
              name: string;
              icon: string;
              url: string;
            };
          };
          topBid: {
            id: string;
            sourceDomain: string;
            price: {
              currency: {
                contract: string;
                name: string;
                symbol: string;
                decimals: number;
              };
              amount: {
                raw: string;
                decimal: number;
                usd: number;
                native: number;
              };
              netAmount: {
                raw: string;
                decimal: number;
                usd: number;
                native: number;
              };
            };
            maker: string;
            validUntil: number;
            validFrom: number;
          };
          spam: true;
          nsfw: true;
          collectionId: string;
          collectionImage: string;
          collectionName: string;
        };
        token: {
          image: string;
          name: string;
          description: string;
        };
      };
    };
  };
  txHash: string;
  logIndex: number;
  batchIndex: number;
  comment: string;
}
export interface TopMintData {
  id: string;
  image: string;
  banner: string;
  name: string;
  description: string;
  isSpam: true;
  isMinting: true;
  onSaleCount: number;
  volumeChange: {
    '1day': number;
    '7day': number;
    '3numberday': number;
  };
  collectionVolume: {
    '1day': number;
    '7day': number;
    '3numberday': number;
    allTime: number;
  };
  contractKind: string;
  tokenCount: string;
  ownerCount: number;
  sampleImages: [string];
  mintType: string;
  mintPrice: {
    currency: {
      contract: string;
      name: string;
      symbol: string;
      decimals: number;
    };
    amount: {
      raw: string;
      decimal: number;
      usd: number;
      native: number;
    };
  };
  maxSupply: number;
  mintStandard: string;
  createdAt: '2number25-number6-28Tnumber7:56:28.678Z';
  startDate: '2number25-number6-28Tnumber7:56:28.678Z';
  endDate: '2number25-number6-28Tnumber7:56:28.678Z';
  mintCount: number;
  sixHourCount: number;
  oneHourCount: number;
  mintVolume: number;
  openseaVerificationStatus: string;
  magicedenVerificationStatus: {};
  mintedTimestamp: number;
  lastMintTimestamp: number;
  mintStages: [
    {
      stage: string;
      kind: string;
      standard: string;
      tokenId: string;
      price: {
        currency: {
          contract: string;
          name: string;
          symbol: string;
          decimals: number;
        };
        amount: {
          raw: string;
          decimal: number;
          usd: number;
          native: number;
        };
      };
      pricePerQuantity: {};
      startTime: number;
      endTime: number;
      maxMints: number;
      maxMintsPerWallet: number;
    }
  ];
  floorAsk: {
    id: string;
    sourceDomain: string;
    price: {
      currency: {
        contract: string;
        name: string;
        symbol: string;
        decimals: number;
      };
      amount: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
      netAmount: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
    };
    maker: string;
    validFrom: number;
    validUntil: number;
    token: {
      chainId: number;
      contract: string;
      tokenId: string;
      name: string;
      description: string;
      image: string;
      imageSmall: string;
      imageLarge: string;
      metadata: {
        imageOriginal: string;
        imageMimeType: string;
        tokenURI: string;
      };
      kind: string;
      metadataDisabled: true;
      lastFlagUpdate: string;
      lastFlagChange: string;
      supply: string;
      remainingSupply: string;
      rarity: number;
      rarityRank: number;
      collection: {
        id: string;
        name: string;
        image: string;
        slug: string;
        symbol: string;
        creator: string;
        tokenCount: number;
        metadataDisabled: true;
        floorAskPrice: {
          currency: {
            contract: string;
            name: string;
            symbol: string;
            decimals: number;
          };
          amount: {
            raw: string;
            decimal: number;
            usd: number;
            native: number;
          };
        };
      };
      owner: string;
      mintedAt: string;
      createdAt: string;
      decimals: number;
      mintStages: [{}];
      nsfw: true;
      spam: true;
      flagged: true;
    };
    source: {
      id: string;
      domain: string;
      name: string;
      icon: string;
      url: string;
    };
  };
  creator: string;
}

export interface OverviewDetailType {
  chainId: number;
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  symbol: string;
  contractDeployedAt: string;
  image: string;
  banner: string;
  twitterUrl: string;
  discordUrl: string;
  externalUrl: string;
  twitterUsername: string;
  openseaVerificationStatus: string;
  magicedenVerificationStatus: string;
  description: string;
  metadataDisabled: true;
  sampleImages: [string];
  tokenCount: string;
  onSaleCount: string;
  primaryContract: string;
  tokenSetId: string;
  creator: string;
  royalties: {
    recipient: string;
    breakdown: [
      {
        bps: number;
        recipient: string;
        required: true;
      }
    ];
    bps: number;
  };
  allRoyalties: {
    onchain: [
      {
        bps: number;
        recipient: string;
        required: true;
      }
    ];
    opensea: [
      {
        bps: number;
        recipient: string;
        required: true;
      }
    ];
  };
  floorAsk: {
    id: string;
    sourceDomain: string;
    price: {
      currency: {
        contract: string;
        name: string;
        symbol: string;
        decimals: number;
      };
      amount: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
      netAmount: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
    };
    maker: string;
    validFrom: number;
    validUntil: number;
    token: {
      chainId: number;
      contract: string;
      tokenId: string;
      name: string;
      description: string;
      image: string;
      imageSmall: string;
      imageLarge: string;
      metadata: {
        imageOriginal: string;
        imageMimeType: string;
        tokenURI: string;
      };
      kind: string;
      metadataDisabled: true;
      lastFlagUpdate: string;
      lastFlagChange: string;
      supply: string;
      remainingSupply: string;
      rarity: number;
      rarityRank: number;
      collection: {
        id: string;
        name: string;
        image: string;
        slug: string;
        symbol: string;
        creator: string;
        tokenCount: number;
        metadataDisabled: true;
        floorAskPrice: {
          currency: {
            contract: string;
            name: string;
            symbol: string;
            decimals: number;
          };
          amount: {
            raw: string;
            decimal: number;
            usd: number;
            native: number;
          };
        };
      };
      owner: string;
      mintedAt: string;
      createdAt: string;
      decimals: number;
      mintStages: [{}];
      nsfw: true;
      spam: true;
      flagged: true;
    };
    source: {
      id: string;
      domain: string;
      name: string;
      icon: string;
      url: string;
    };
  };
  topBid: {
    id: string;
    sourceDomain: string;
    price: {
      currency: {
        contract: string;
        name: string;
        symbol: string;
        decimals: number;
      };
      amount: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
      netAmount: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
    };
    maker: string;
    validUntil: number;
    validFrom: number;
  };
  rank: {
    get_1day: number;
    get_7day: number;
    get_3numberday: number;
    allTime: number;
  };
  volume: {
    get_1day: number;
    get_7day: number;
    get_3numberday: number;
    allTime: number;
  };
  volumeChange: {
    '1day': number;
    '7day': number;
    '3numberday': number;
  };
  floorSale: {
    get_1day: number;
    get_7day: number;
    get_3numberday: number;
  };
  floorSaleChange: {
    get_1day: number;
    get_7day: number;
    get_3numberday: number;
  };
  collectionBidSupported: true;
  ownerCount: number;
  contractKind: string;
  mintedTimestamp: number;
  lastMintTimestamp: number;
  mintStages: [{}];
  supply: string;
  remainingSupply: string;
  minting: true;
  sharedContract: true;
  nsfw: true;
  spam: true;
}

export interface ItemT {
  token?: {
    chainId: number;
    contract: string;
    tokenId: string;
    name: string;
    description: string;
    image: string;
    imageSmall: string;
    imageLarge: string;
    metadata: {
      imageOriginal: string;
      imageMimeType: string;
      tokenURI: string;
    };
    kind: string;
    metadataDisabled: true;
    lastFlagUpdate: string;
    lastFlagChange: string;
    supply: string;
    remainingSupply: string;
    rarity: number;
    rarityRank: number;
    collection: {
      id: string;
      name: string;
      image: string;
      slug: string;
      symbol: string;
      creator: string;
      tokenCount: number;
      metadataDisabled: true;
      floorAskPrice: {
        currency: {
          contract: string;
          name: string;
          symbol: string;
          decimals: number;
        };
        amount: {
          raw: string;
          decimal: number;
          usd: number;
          native: number;
        };
      };
    };
    owner: string;
    mintedAt: string;
    createdAt: string;
    decimals: number;
    mintStages: [{}];
    tokenName: string;
    tokenImage: string;
    rarityScore: number;
    spam: true;
    nsfw: true;
    flagged: true;
  };
  market: {
    floorAsk: {
      id: string;
      sourceDomain: string;
      price: {
        currency: {
          contract: string;
          name: string;
          symbol: string;
          decimals: number;
        };
        amount: {
          raw: string;
          decimal: number;
          usd: number;
          native: number;
        };
        netAmount: {
          raw: string;
          decimal: number;
          usd: number;
          native: number;
        };
      };
      maker: string;
      validFrom: number;
      validUntil: number;
      token: {
        chainId: number;
        contract: string;
        tokenId: string;
        name: string;
        description: string;
        image: string;
        imageSmall: string;
        imageLarge: string;
        metadata: {
          imageOriginal: string;
          imageMimeType: string;
          tokenURI: string;
        };
        kind: string;
        metadataDisabled: true;
        lastFlagUpdate: string;
        lastFlagChange: string;
        supply: string;
        remainingSupply: string;
        rarity: number;
        rarityRank: number;
        collection: {
          id: string;
          name: string;
          image: string;
          slug: string;
          symbol: string;
          creator: string;
          tokenCount: number;
          metadataDisabled: true;
          floorAskPrice: {
            currency: {
              contract: string;
              name: string;
              symbol: string;
              decimals: number;
            };
            amount: {
              raw: string;
              decimal: number;
              usd: number;
              native: number;
            };
          };
        };
        owner: string;
        mintedAt: string;
        createdAt: string;
        decimals: number;
        mintStages: [{}];
        tokenName: string;
        tokenImage: string;
        rarityScore: number;
        spam: true;
        nsfw: true;
        flagged: true;
      };
      source: { 
        id: string;
        domain: string;
        name: string;
        icon: string;
        url: string;
      };
    };
  };
  updatedAt: string;
}
