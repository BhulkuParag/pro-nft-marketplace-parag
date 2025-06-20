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
    >
      <div className="flex justify-between items-center px-3 py-1.5">
        <div className="flex justify-between items-center gap-4">
          <img
            src="http://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuABZyrcC5KO5c%2Fpl9qoTyb1GXYbn1ksY1D9Vxjv7nkqqX5v3Kxd1M%2FV%2BIriyWSPgAmIlbJ5Zn3oFYI87ssNtSpi3kbyV5bfxjgqq45I7OyWHm1BmVO6ZZ9ARDi3eP%2F7bs%2BG%2By5msQ4%2FpiwMMsk4M9yWpe7GUMs0Td8rs%2BQKil68ir3OhSL%2FqRrJmm22hPPct6Tg%3D%3D?width=250"
            alt=""
            className="w-7 h-7 rounded-full"
          />
          <div>
            <Typography
              variant="subtitle1"
              component={'a'}
              href={`/trendingCollections/item/${'0x60e4d786628fea6478f785a6d7e704777c86a7c6'}`}
            >
              Mutant Ape Yacht Club
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
