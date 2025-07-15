import { Box, Stack, Typography } from '@mui/material';
import { useCallback } from 'react';
import Switch from '../../@ui-component/Comman/Switch';
import { setIsCardOrTable } from '../../features/home/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

const SubHeader = () => {
  const dispatch = useDispatch();
  const isCheck = useSelector((state: RootState) => state.home.isCardOrTable);

  const handleSwitchOnChange = useCallback(() => {
    dispatch(setIsCardOrTable());
  }, [dispatch]);

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      flexWrap={'wrap'}
      marginBottom={1}
      alignItems={'center'}
      sx={{
        padding: { xs: 2, md: '14px 20px' },
        gap: { xs: 2, md: 4 },
      }}
    >
      <Typography
        component={'h1'}
        sx={{
          fontSize: '22px',
          fontWeight: 500,
          color: 'text.primary',
        }}
      >
        Polycruz Leading NFT Marketplace
      </Typography>
      {/* <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Typography
          sx={{
            color: 'custom.grey01',
          }}
        >
          Cards
        </Typography>
        <Switch checked={isCheck} handleOnChange={handleSwitchOnChange} />
        <Typography
          sx={{
            color: 'custom.grey01',
          }}
        >
          Tables
        </Typography>
      </Stack> */}
    </Box>
  );
};

export default SubHeader;
