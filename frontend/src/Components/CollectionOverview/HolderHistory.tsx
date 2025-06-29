import React, { useState } from 'react';
// import { ProgressBar } from '@tremor/react';
import { Box, IconButton, Typography } from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

function HolderHistory() {
  const [data, setData] = useState<any>([]);
  const [chartData, setChartData] = useState<any>([]);

  const cardData = [
    {
      name: 'Holder 1',
      // value: data?.holders_tokens_1?.value,
      value: 4647,
      color: '#3B82F6',
      percent: '93.61%',
    },
    {
      name: 'Holder 2',
      // value: data?.holders_tokens_2?.value,
      value: 687,
      color: '#3B82F6',
      percent: '13.84%',
    },
    {
      name: 'Holder 3 to 5',
      // value: data?.holders_tokens_3_5?.value,
      value: 457,
      color: '#3B82F6',
      percent: '9.21%',
    },
    {
      name: 'Holder 6 to 9',
      // value: data?.holders_tokens_6_9?.value,
      value: 127,
      color: '#3B82F6',
      percent: '2.56%',
    },
    {
      name: 'Holder 10 to 15',
      // value: data?.holders_tokens_10_15?.value,
      value: 39,
      color: '#3B82F6',
      percent: '0.79%',
    },
    {
      name: 'Holder 16 to 25',
      // value: data?.holders_tokens_16_25?.value,
      value: 22,
      color: '#3B82F6',
      percent: '0.44%',
    },
    {
      name: 'Holder 9 Plus',
      // value: data?.holders_tokens_9plus?.value,
      value: 83,
      color: '#3B82F6',
      percent: '1.67%',
    },
    {
      name: 'Holder 25 Plus',
      // value: data?.holders_tokens_25plus?.value,
      value: 22,
      color: '#3B82F6',
      percent: '0.44%',
    },
  ];

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#172554',
      ...theme.applyStyles('dark', {
        backgroundColor: '#172554',
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#4836FF',
      ...theme.applyStyles('dark', {
        backgroundColor: '#4836FF',
      }),
    },
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        mt: '2rem',
      }}
    >
      <Typography
        component="span"
        sx={{
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'text.primary',
          pl: 1,
        }}
      >
        Holder History
      </Typography>
      <Box
        component="div"
        sx={{
          backgroundColor: 'secondary.main',
          borderRadius: '0.75rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: '1.25rem',
          gap: '1.25rem',
        }}
      >
        <Box
          component="div"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 6,
            flexDirection: { xs: 'column', lg: 'row' },
            backgroundColor: 'background.default',
            borderRadius: '0.75rem',
            p: { lg: '3rem', xs: '1.5rem' },
          }}
        >
          <Box
            component="div"
            sx={{
              p: { xs: '1.5rem', lg: '2rem' },
              width: '100%',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              // height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'secondary.main',
            }}
          >
            <Box
              component="div"
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                component="span"
                sx={{ fontSize: '16px', color: 'custom.thirdText' }}
              >
                {/* {data?.holders?.value} */}
                Holder
              </Typography>
              <IconButton sx={{ color: 'custom.thirdText' }}>
                <InfoOutlineIcon sx={{ fontSize: '18px' }} />
              </IconButton>
            </Box>
            <Box
              component="div"
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                component="span"
                sx={{ fontSize: '38px', color: 'text.primary' }}
              >
                {/* <PercentView value={+data?.holders_change?.value} /> */}
                15%
              </Typography>
              <Typography component="span" sx={{ color: 'red' }}>
                0.00%
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              borderRadius: '1rem',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',

              gap: '10px',
              height: '100%',
              p: { xs: '1.5rem', lg: '1rem' },
              backgroundColor: 'secondary.main',
            }}
          >
            <Typography
              component="h6"
              sx={{
                fontSize: '16px',
                color: 'custom.thirdText',
              }}
            >
              Numbers of Holder
            </Typography>
            {cardData.map((item, index) => {
              // Calculate percentage (avoid division by zero)
              // const total = data?.holders?.value || 0;
              // const value = item.value || 0;
              // const percent = total > 0 ? (value / total) * 100 : 0;
              return (
                <Box
                  key={index}
                  component="div"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    fontSize: '0.875rem ',

                    color: 'custom.thirdText',
                    lineHeight: '1.25rem',
                    // mt: '1rem',
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        // gap: '0.5rem',
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          color: 'custom.thirdText',
                          fontWeight: 500,
                          lineHeight: 1.5,
                          fontSize: '0.7rem',
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 500,
                          fontSize: '0.8rem',
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                    <span>{item.percent}</span>
                    {/* <ProgressBar
                          value={percent}
                          //   color={item.color} // or your preferred color
                          className="mt-3"
                          id="progress-bar"
                          tooltip={`${percent.toFixed(2)}%`}
                          /> */}
                  </Box>
                  <BorderLinearProgress
                    variant="determinate"
                    value={50}
                    sx={{ padding: '0.4rem' }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HolderHistory;
