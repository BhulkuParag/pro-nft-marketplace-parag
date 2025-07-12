// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL ?? 'http://65.1.94.196:8085',
  
  // API Endpoints
  ENDPOINTS: {
    // Collection APIs
    TOKENS: '/api/v1/reservoir/tokens',
    ITEM_DETAILS: '/api/v1/reservoir/tokens/item-details',
    ACTIVITY: '/api/v1/reservoir/activity',
    STANDOUT: '/api/v1/reservoir/collection/activity',
    STANDOUT_HOLDERS: '/api/v1/reservoir/top-traders',
    COLLECTIONS_V7: '/api/v1/reservoir/collections/v7',
    AI_VALUATION_ESTIMATE: '/api/v1/reservoir/nft/price-estimate',
    AI_VALUATION_ONLOAD: '/api/v1/reservoir/collection/v1',
    
    // Home APIs
    HomeCard: '/api/v1/reservoir/stats',
    TRENDING: '/api/v1/reservoir/trending-api',
    NFT_SALES: '/api/v1/reservoir/nft-sales',
    TOP_SALES: '/api/v1/reservoir/top-sales',
    TRENDING_MINTS: '/api/v1/reservoir/trending-mints',
    COLLECTION_SEARCH: '/api/v1/reservoir/collection/search',
  },

  // Default chain configuration
  DEFAULT_CHAIN: 'ETHEREUM', // Ethereum mainnet
};

// Helper function to build URLs with chain parameter
export const buildApiUrl = (
  endpoint: string,
  chainId?: string,
  params?: Record<string, any>
): string => {
  const chain = chainId ?? API_CONFIG.DEFAULT_CHAIN;
  const urlParams = new URLSearchParams();

  // Add chain parameter
  urlParams.append('chain', chain.toString());

  // Add other parameters
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        urlParams.append(key, value.toString());
      }
    });
  }

  return `${endpoint}?${urlParams.toString()}`;
};
