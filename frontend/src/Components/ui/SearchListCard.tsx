import { Card, Typography } from '@mui/material';
import Avalanche from '../Icon/crypto-icon/Avalanche';

const SearchListCard = () => {
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
      href={`/trendingCollections/item/${'0x60e4d786628fea6478f785a6d7e704777c86a7c6'}`}
    >
      <div className="w-full flex justify-between items-center px-3 py-1.5">
        <div className="w-full flex justify-between items-center gap-4">
          <img
            src="http://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuABZyrcC5KO5c%2Fpl9qoTyb1GXYbn1ksY1D9Vxjv7nkqqX5v3Kxd1M%2FV%2BIriyWSPgAmIlbJ5Zn3oFYI87ssNtSpi3kbyV5bfxjgqq45I7OyWHm1BmVO6ZZ9ARDi3eP%2F7bs%2BG%2By5msQ4%2FpiwMMsk4M9yWpe7GUMs0Td8rs%2BQKil68ir3OhSL%2FqRrJmm22hPPct6Tg%3D%3D?width=250"
            alt=""
            className="w-7 h-7 rounded-full"
          />
          <div className='w-full'>
            <Typography
              variant="subtitle2"
              // display={'flex'}
              // alignItems={'center'}
              // gap={1}
            >
              Mutant Ape Yacht Club...
              <svg
                className="max-w-4 max-h-4 text-[#A49BFF]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={300}
              display={'flex'}
              gap={0.2}
            >
              <Avalanche
                backgroundClass="dark:fill-dark-black-light fill-light-black-light"
                iconClass="fill-light-primary-light dark:fill-dark-primary-light"
                className="w-7 h-7"
              />
              1.73M
            </Typography>
          </div>
        </div>
        <Typography
          variant="subtitle2"
          fontWeight={300}
          display={'flex'}
          gap={0.2}
        >
          <Avalanche
            backgroundClass="dark:fill-dark-black-light fill-light-black-light"
            iconClass="fill-light-primary-light dark:fill-dark-primary-light"
            className="w-7 h-7"
          />
          1.73M
        </Typography>
      </div>
    </Card>
  );
};

export default SearchListCard;
