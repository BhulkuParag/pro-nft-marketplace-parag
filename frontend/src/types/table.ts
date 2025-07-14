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
    '30day': number;
  };
  collectionVolume: {
    '1day': number;
    '7day': number;
    '30day': number;
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
    '30day': number;
  };
  collectionVolume: {
    '1day': number;
    '7day': number;
    '30day': number;
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
      decimals: 0;
    };
    amount: {
      raw: string;
      decimal: 0;
      usd: 0;
      native: 0;
    };
    netAmount: {
      raw: string;
      decimal: 0;
      usd: 0;
      native: 0;
    };
  };
  fillSource: {
    id: string;
    domain: string;
    name: string;
    icon: string;
    url: string;
  };
  amount: 0;
  timestamp: 0;
  createdAt: string;
  contract: string;
  token: {
    contract: string;
    metadata: {
      image: string;
      name: string;
      description: string;
    };
    rarityScore: 0;
    rarityRank: 0;
    collection: {
      volume: 0;
      volumePercentChange: 0;
      count: 0;
      countPercentChange: 0;
      sampleImages: [string];
      openseaVerificationStatus: string;
      magicedenVerificationStatus: string;
      onSaleCount: 0;
      volumeChange: {
        '1day': 0;
        '7day': 0;
        '30day': 0;
      };
      collectionVolume: {
        '1day': 0;
        '7day': 0;
        '30day': 0;
        allTime: 0;
      };
      floorAskPercentChange: 0;
      tokenCount: 0;
      ownerCount: 0;
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
            decimals: 0;
          };
          amount: {
            raw: string;
            decimal: 0;
            usd: 0;
            native: 0;
          };
          netAmount: {
            raw: string;
            decimal: 0;
            usd: 0;
            native: 0;
          };
        };
        maker: string;
        validFrom: 0;
        validUntil: 0;
        token: {
          chainId: 0;
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
          rarity: 0;
          rarityRank: 0;
          collection: {
            id: string;
            name: string;
            image: string;
            slug: string;
            symbol: string;
            creator: string;
            tokenCount: 0;
            metadataDisabled: true;
            floorAskPrice: {
              currency: {
                contract: string;
                name: string;
                symbol: string;
                decimals: 0;
              };
              amount: {
                raw: string;
                decimal: 0;
                usd: 0;
                native: 0;
              };
            };
          };
          owner: string;
          mintedAt: string;
          createdAt: string;
          decimals: 0;
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
            decimals: 0;
          };
          amount: {
            raw: string;
            decimal: 0;
            usd: 0;
            native: 0;
          };
          netAmount: {
            raw: string;
            decimal: 0;
            usd: 0;
            native: 0;
          };
        };
        maker: string;
        validUntil: 0;
        validFrom: 0;
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
    volume: 0;
    volumePercentChange: 0;
    count: 0;
    countPercentChange: 0;
    sampleImages: [string];
    openseaVerificationStatus: string;
    magicedenVerificationStatus: string;
    onSaleCount: 0;
    volumeChange: {
      '1day': 0;
      '7day': 0;
      '30day': 0;
    };
    collectionVolume: {
      '1day': 0;
      '7day': 0;
      '30day': 0;
      allTime: 0;
    };
    floorAskPercentChange: 0;
    tokenCount: 0;
    ownerCount: 0;
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
          decimals: 0;
        };
        amount: {
          raw: string;
          decimal: 0;
          usd: 0;
          native: 0;
        };
        netAmount: {
          raw: string;
          decimal: 0;
          usd: 0;
          native: 0;
        };
      };
      maker: string;
      validFrom: 0;
      validUntil: 0;
      token: {
        chainId: 0;
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
        rarity: 0;
        rarityRank: 0;
        collection: {
          id: string;
          name: string;
          image: string;
          slug: string;
          symbol: string;
          creator: string;
          tokenCount: 0;
          metadataDisabled: true;
          floorAskPrice: {
            currency: {
              contract: string;
              name: string;
              symbol: string;
              decimals: 0;
            };
            amount: {
              raw: string;
              decimal: 0;
              usd: 0;
              native: 0;
            };
          };
        };
        owner: string;
        mintedAt: string;
        createdAt: string;
        decimals: 0;
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
          decimals: 0;
        };
        amount: {
          raw: string;
          decimal: 0;
          usd: 0;
          native: 0;
        };
        netAmount: {
          raw: string;
          decimal: 0;
          usd: 0;
          native: 0;
        };
      };
      maker: string;
      validUntil: 0;
      validFrom: 0;
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
          volume: 0;
          volumePercentChange: 0;
          count: 0;
          countPercentChange: 0;
          sampleImages: [string];
          openseaVerificationStatus: string;
          magicedenVerificationStatus: string;
          onSaleCount: 0;
          volumeChange: {
            '1day': 0;
            '7day': 0;
            '30day': 0;
          };
          collectionVolume: {
            '1day': 0;
            '7day': 0;
            '30day': 0;
            allTime: 0;
          };
          floorAskPercentChange: 0;
          tokenCount: 0;
          ownerCount: 0;
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
                decimals: 0;
              };
              amount: {
                raw: string;
                decimal: 0;
                usd: 0;
                native: 0;
              };
              netAmount: {
                raw: string;
                decimal: 0;
                usd: 0;
                native: 0;
              };
            };
            maker: string;
            validFrom: 0;
            validUntil: 0;
            token: {
              chainId: 0;
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
              rarity: 0;
              rarityRank: 0;
              collection: {
                id: string;
                name: string;
                image: string;
                slug: string;
                symbol: string;
                creator: string;
                tokenCount: 0;
                metadataDisabled: true;
                floorAskPrice: {
                  currency: {
                    contract: string;
                    name: string;
                    symbol: string;
                    decimals: 0;
                  };
                  amount: {
                    raw: string;
                    decimal: 0;
                    usd: 0;
                    native: 0;
                  };
                };
              };
              owner: string;
              mintedAt: string;
              createdAt: string;
              decimals: 0;
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
                decimals: 0;
              };
              amount: {
                raw: string;
                decimal: 0;
                usd: 0;
                native: 0;
              };
              netAmount: {
                raw: string;
                decimal: 0;
                usd: 0;
                native: 0;
              };
            };
            maker: string;
            validUntil: 0;
            validFrom: 0;
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
  logIndex: 0;
  batchIndex: 0;
  comment: string;
}
export interface TopMintData {
  id: 'string';
  image: 'string';
  banner: 'string';
  name: 'string';
  description: 'string';
  isSpam: true;
  isMinting: true;
  onSaleCount: 0;
  volumeChange: {
    '1day': 0;
    '7day': 0;
    '30day': 0;
  };
  collectionVolume: {
    '1day': 0;
    '7day': 0;
    '30day': 0;
    allTime: 0;
  };
  contractKind: 'string';
  tokenCount: 'string';
  ownerCount: 0;
  sampleImages: ['string'];
  mintType: 'string';
  mintPrice: {
    currency: {
      contract: 'string';
      name: 'string';
      symbol: 'string';
      decimals: 0;
    };
    amount: {
      raw: 'string';
      decimal: 0;
      usd: 0;
      native: 0;
    };
  };
  maxSupply: 0;
  mintStandard: 'string';
  createdAt: '2025-06-28T07:56:28.678Z';
  startDate: '2025-06-28T07:56:28.678Z';
  endDate: '2025-06-28T07:56:28.678Z';
  mintCount: 0;
  sixHourCount: 0;
  oneHourCount: 0;
  mintVolume: 0;
  openseaVerificationStatus: 'string';
  magicedenVerificationStatus: {};
  mintedTimestamp: 0;
  lastMintTimestamp: 0;
  mintStages: [
    {
      stage: 'string';
      kind: 'string';
      standard: 'string';
      tokenId: 'string';
      price: {
        currency: {
          contract: 'string';
          name: 'string';
          symbol: 'string';
          decimals: 0;
        };
        amount: {
          raw: 'string';
          decimal: 0;
          usd: 0;
          native: 0;
        };
      };
      pricePerQuantity: {};
      startTime: 0;
      endTime: 0;
      maxMints: 0;
      maxMintsPerWallet: 0;
    }
  ];
  floorAsk: {
    id: 'string';
    sourceDomain: 'string';
    price: {
      currency: {
        contract: 'string';
        name: 'string';
        symbol: 'string';
        decimals: 0;
      };
      amount: {
        raw: 'string';
        decimal: 0;
        usd: 0;
        native: 0;
      };
      netAmount: {
        raw: 'string';
        decimal: 0;
        usd: 0;
        native: 0;
      };
    };
    maker: 'string';
    validFrom: 0;
    validUntil: 0;
    token: {
      chainId: 0;
      contract: 'string';
      tokenId: 'string';
      name: 'string';
      description: 'string';
      image: 'string';
      imageSmall: 'string';
      imageLarge: 'string';
      metadata: {
        imageOriginal: 'string';
        imageMimeType: 'string';
        tokenURI: 'string';
      };
      kind: 'string';
      metadataDisabled: true;
      lastFlagUpdate: 'string';
      lastFlagChange: 'string';
      supply: 'string';
      remainingSupply: 'string';
      rarity: 0;
      rarityRank: 0;
      collection: {
        id: 'string';
        name: 'string';
        image: 'string';
        slug: 'string';
        symbol: 'string';
        creator: 'string';
        tokenCount: 0;
        metadataDisabled: true;
        floorAskPrice: {
          currency: {
            contract: 'string';
            name: 'string';
            symbol: 'string';
            decimals: 0;
          };
          amount: {
            raw: 'string';
            decimal: 0;
            usd: 0;
            native: 0;
          };
        };
      };
      owner: 'string';
      mintedAt: 'string';
      createdAt: 'string';
      decimals: 0;
      mintStages: [{}];
      nsfw: true;
      spam: true;
      flagged: true;
    };
    source: {
      id: 'string';
      domain: 'string';
      name: 'string';
      icon: 'string';
      url: 'string';
    };
  };
  creator: 'string';
}

export interface OverviewDetailType {
  chainId: 0;
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
        bps: 0;
        recipient: string;
        required: true;
      }
    ];
    bps: 0;
  };
  allRoyalties: {
    onchain: [
      {
        bps: 0;
        recipient: string;
        required: true;
      }
    ];
    opensea: [
      {
        bps: 0;
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
        decimals: 0;
      };
      amount: {
        raw: string;
        decimal: 0;
        usd: 0;
        native: 0;
      };
      netAmount: {
        raw: string;
        decimal: 0;
        usd: 0;
        native: 0;
      };
    };
    maker: string;
    validFrom: 0;
    validUntil: 0;
    token: {
      chainId: 0;
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
      rarity: 0;
      rarityRank: 0;
      collection: {
        id: string;
        name: string;
        image: string;
        slug: string;
        symbol: string;
        creator: string;
        tokenCount: 0;
        metadataDisabled: true;
        floorAskPrice: {
          currency: {
            contract: string;
            name: string;
            symbol: string;
            decimals: 0;
          };
          amount: {
            raw: string;
            decimal: 0;
            usd: 0;
            native: 0;
          };
        };
      };
      owner: string;
      mintedAt: string;
      createdAt: string;
      decimals: 0;
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
        decimals: 0;
      };
      amount: {
        raw: string;
        decimal: 0;
        usd: 0;
        native: 0;
      };
      netAmount: {
        raw: string;
        decimal: 0;
        usd: 0;
        native: 0;
      };
    };
    maker: string;
    validUntil: 0;
    validFrom: 0;
  };
  rank: {
    get_1day: 0;
    get_7day: 0;
    get_30day: 0;
    allTime: 0;
  };
  volume: {
    get_1day: 0;
    get_7day: 0;
    get_30day: 0;
    allTime: 0;
  };
  volumeChange: {
    '1day': 0;
    '7day': 0;
    '30day': 0;
  };
  floorSale: {
    get_1day: 0;
    get_7day: 0;
    get_30day: 0;
  };
  floorSaleChange: {
    get_1day: 0;
    get_7day: 0;
    get_30day: 0;
  };
  collectionBidSupported: true;
  ownerCount: 0;
  contractKind: string;
  mintedTimestamp: 0;
  lastMintTimestamp: 0;
  mintStages: [{}];
  supply: string;
  remainingSupply: string;
  minting: true;
  sharedContract: true;
  nsfw: true;
  spam: true;
}
