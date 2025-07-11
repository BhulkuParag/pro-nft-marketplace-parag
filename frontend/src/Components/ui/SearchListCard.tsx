import { Card, Typography } from '@mui/material';
import React from 'react';
import type { GlobalSearchT } from '../../types/home';

interface SearchListCardProps {
  data?: GlobalSearchT;
}

const SearchListCard = ({ data }: SearchListCardProps) => {
  console.log('SearchListCard data:', data);
  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        borderBottom: '1px solid',
        borderColor: 'divider',
        '& :hover': {
          backgroundColor: 'custom.borderblack01',
        },
      }}
      elevation={0}
      component={'a'}
      href={`/trendingCollections/item/${data?.id}`}
    >
      <div className="w-full flex justify-between items-center px-3 py-1.5 pr-3.5">
        <div className="w-full flex justify-between items-center gap-4">
          <img
            src={data?.image}
            alt={data?.name}
            className="w-7 h-7 rounded-full"
          />
          <div className="w-full">
            <Typography
              variant="subtitle2"
              display={'flex'}
              alignItems={'center'}
              gap={1}
            >
              {data?.name}
              {data?.openseaVerificationStatus === 'verified' && (
                <svg
                  className="max-w-4 max-h-4 text-[#A49BFF]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
              )}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={300}
              display={'flex'}
              gap={1}
            >
              <img
                src="https://marketplace.polycruz.io/eth.svg"
                alt="ETH"
                width={9}
                height={9}
              />
              {data?.allTimeVolume}k
            </Typography>
          </div>
        </div>
        <Typography
          variant="subtitle2"
          fontWeight={300}
          display={'flex'}
          alignItems={'center'}
          gap={1}
        >
          {data?.floorAskPrice?.toFixed(2) ?? '0.00'}
          <img
            src="https://marketplace.polycruz.io/eth.svg"
            alt="ETH"
            width={9}
            height={9}
          />
        </Typography>
      </div>
    </Card>
  );
};

export default React.memo(SearchListCard);
