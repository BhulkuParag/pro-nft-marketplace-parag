import { Box, Typography } from '@mui/material';
import Info from '../../../Components/info/Info';
import { ProgressCircle } from '@tremor/react';

interface DetailCardData {
  title: string;
  value: number;
  color: string;
}

const detailCardsData: DetailCardData[] = [
  { title: 'Very High', value: 32, color: '#4836FF' },
  { title: 'High', value: 6, color: '#FE749B' },
  { title: 'Medium', value: 30, color: '#A49BFF' },
  { title: 'Low', value: 1, color: '#10DAB6' },
  { title: 'Very Low', value: 4, color: '#FFC155' },
];

const PurchaseIntent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRadius: 2,
        padding: { xs: '12px', md: '24px' },
        backgroundColor: 'secondary.main',
      }}
    >
      {/* Heading section */}
      <div className="flex flex-col lg:flex-row w-full relative gap-[10px] items-start justify-between">
        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <Typography
              fontWeight={500}
              fontSize={20}
              sx={{
                color: 'text.primary',
              }}
            >
              Purchase Intent
            </Typography>
            <Info height={5} weight={5} isTooltip={true} />
          </div>
          <span className="mt-2 w-auto text-sm text-gray-500 font-medium">
            adidas Originals: Into the Metaverse (Phase 1) holders level of
            intent to purchase a web3 product in the next 1-3 next
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 w-full rounded-xl gap-3 md:gap-8">
        {/* <div className="w-full rounded-xl flex gap-8 flex-col lg:flex-row"> */}
        {detailCardsData?.map((item) => (
          <div
            key={item.title}
            className="flex gap-8 w-full flex-col sm:flex-row"
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                padding: { xs: '24px', lg: '40px' },
                borderRadius: 3,
                backgroundColor: 'background.default',
                opacity: 100,
              }}
            >
              <Box
                component={'div'}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ProgressCircle
                  value={item?.value}
                  size="xl"
                  strokeWidth={15}
                  color={item?.color}
                  className="circleChart"
                >
                  <div className="flex flex-col justify-center items-center">
                    <Typography
                      fontSize={18}
                      sx={{
                        color: 'custom.grey01',
                      }}
                      className="text-lg text-grey"
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      fontSize={22}
                      fontWeight={600}
                      sx={{
                        color: 'text.primary',
                      }}
                    >
                      {item?.value}%
                    </Typography>
                  </div>
                </ProgressCircle>
              </Box>
            </Box>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default PurchaseIntent;
