import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
const actionBg = '#283b7b'; // the blue “Apply” bar

const RarityRank = () => {
  const btnList = [
    {
      label: 'Top 1%',
      value: '1',
    },
    {
      label: 'Top 5%',
      value: '5',
    },
    {
      label: 'Top 10%',
      value: '10',
    },
    {
      label: 'All',
      value: 'all',
    },
  ];

  return (
    <Box width={270}>
      <Stack spacing={1.5}>
        <Typography
          sx={{
            color: 'text.primary',
            backgroundColor: 'secondary.main',
            py: 1,
            textAlign: 'center',
            borderRadius: 1,
          }}
        >
          ETH
        </Typography>
        {/* <FormControl fullWidth>
          <Select
            value="ETH"
            IconComponent={KeyboardArrowDownIcon}
            startAdornment={
              <InputAdornment position="start" sx={{ mr: 1.25 }}>
                <DiamondIcon sx={{ fontSize: 16, color: 'grey.400' }} />
              </InputAdornment>
            }
            sx={{
              height: 48,
              px: 2,
              bgcolor: tokenBg,
              color: 'grey.100',
              borderRadius: 1.5,
              fontWeight: 500,
              '& fieldset': { border: 'none' },
              '& .MuiSvgIcon-root': { color: 'grey.400' },
            }}
          >
            <MenuItem value="ETH">ETH</MenuItem>
            <MenuItem value="USDC">USDC</MenuItem>
            <MenuItem value="BTC">BTC</MenuItem>
          </Select>
        </FormControl> */}

        <Stack direction="row" spacing={1} alignItems="center">
          <OutlinedInput
            placeholder="Min"
            fullWidth
            startAdornment={
              <InputAdornment position="start" sx={{ mr: 1.25 }}>
                <img
                  src="https://marketplace.polycruz.io/eth.svg"
                  alt="ETH"
                  width={8}
                  height={8}
                />
              </InputAdornment>
            }
            sx={{
              height: 43,
              px: 2,
              bgcolor: 'secondary.main',
              color: 'grey.100',
              borderRadius: 1.5,
              '& input': { p: 0 },
              '& fieldset': { border: 'none' },
            }}
          />
          <Typography variant="body2" color="grey.500">
            &ndash;
          </Typography>
          <OutlinedInput
            placeholder="Max"
            fullWidth
            startAdornment={
              <InputAdornment position="start" sx={{ mr: 1.25 }}>
                <img
                  src="https://marketplace.polycruz.io/eth.svg"
                  alt="ETH"
                  width={8}
                  height={8}
                />
              </InputAdornment>
            }
            sx={{
              height: 43,
              px: 2,
              bgcolor: 'secondary.main',
              color: 'grey.100',
              borderRadius: 1.5,
              '& input': { p: 0 },
              '& fieldset': { border: 'none' },
            }}
          />
        </Stack>
        <div className="flex justify-between items-center">
          {btnList.map(({ label, value }) => (
            <Button
              key={value}
              sx={{
                py: 0.4,
                // px: 1,
                // flex: 1,
                color: 'custom.grey01',
                fontSize: 11,
                fontWeight: 'normal',
                textTransform: 'none',
                // border: '1px solid',
                // borderColor: 'background.lightPurple',
                backgroundColor: 'secondary.main',
              }}
            >
              {label}
            </Button>
          ))}
        </div>
        <Button
          fullWidth
          disableElevation
          disableFocusRipple
          disableTouchRipple
          variant="contained"
          sx={{
            height: 45,
            bgcolor: '#7367F0',
            color: 'white',
            textTransform: 'none',
            borderRadius: 1.5,
            '&.Mui-disabled': {
              bgcolor: actionBg,
              color: 'grey.500',
              opacity: 1,
            },
          }}
        >
          Apply
        </Button>
      </Stack>
    </Box>
  );
};

export default RarityRank;
