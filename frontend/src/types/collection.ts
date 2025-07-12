export interface AiValuationLoad {
  name?: string;
  category?: string;
  verified?: boolean;
  description?: string;
  contract_address?: string;
  chain_id?: number;
  thumbnail_url?: string;
  thumbnail_palette?: string[];
  nft_count?: number;
  start_date?: string;
  social_media?: Array<{
    platform: string;
    url: string;
  }>;
  marketplace_links?: object[];
}

export interface StandoutT {
  activities?: [
    {
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
        name: string;
        image: string;
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
              tokenName: string;
              tokenImage: string;
              rarityScore: number;
              flagged: true;
              spam: true;
              nsfw: true;
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
          id: string;
          image: string;
          name: string;
        };
        spam: true;
        nsfw: true;
        tokenId: string;
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
            tokenName: string;
            tokenImage: string;
            rarityScore: number;
            flagged: true;
            spam: true;
            nsfw: true;
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
        id: string;
        image: string;
        name: string;
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
                  tokenName: string;
                  tokenImage: string;
                  rarityScore: number;
                  flagged: true;
                  spam: true;
                  nsfw: true;
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
              id: string;
              image: string;
              name: string;
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
  ];
}

export interface HoldersT {
  topTraders?: [
    {
      volume: number;
      count: number;
      address: string;
    }
  ];
}

export interface AiValuationEstimateT {
  metadata?: {
    address: string;
    token_id: string;
    name: string;
    collection_name: string;
    chain_id: string;
    minted_date: string;
    token_image_url: string;
    thumbnail_url: string;
    thumbnail_palette: string[];
    verified: true;
  };
  metric_values?: {
    price_estimate: {
      value: string;
      unit: string;
    };
    price_estimate_upper_bound?: {
      value: string;
      unit: string;
    };
    price_estimate_lower_bound?: {
      value: string;
      unit: string;
    };
    prediction_percentile?: {
      value: string;
      unit: string;
    };
    collection_drivers?: {
      value: string;
      unit: string;
    };
    nft_sales_drivers?: {
      value: string;
      unit: string;
    };
    nft_rarity_drivers?: {
      value: string;
      unit: string;
    };
  };
}
