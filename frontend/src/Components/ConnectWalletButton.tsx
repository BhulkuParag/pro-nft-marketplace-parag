import { ConnectButton } from 'thirdweb/react';
import { createThirdwebClient } from 'thirdweb';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  avalanche,
  sepolia,
} from 'thirdweb/chains';

const client = createThirdwebClient({
  clientId: '226750c42f9ff71ffccb082bfb587ddd',
});

export const ConnectWalletButton = () => {
  return (
    <ConnectButton
      client={client}
      connectModal={{
        welcomeScreen: {
          title: 'Welcome to Polycruz',
          subtitle: 'Connect your wallet to start your journey.',
          img: {
            src: 'https://pbs.twimg.com/profile_images/1720442489851846656/3gL1RWXc_400x400.jpg',
            width: 200,
            height: 200,
          },
        },
        showThirdwebBranding: false,
      }}
      chains={[mainnet, polygon, optimism, arbitrum, avalanche, sepolia]}
    />
  );
};
