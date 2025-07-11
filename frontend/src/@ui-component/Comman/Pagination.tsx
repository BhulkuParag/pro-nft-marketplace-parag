import { Box, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';

type PaginationProps = {
  offset: number;
  setOffset: (offset: number) => void;
  pageLength: number;
  setPageLength: (pageLength: number) => void;
  pageLimit: any[];
  totalPage: number;
};

const Pagination = ({
  offset,
  setOffset,
  pageLength,
  setPageLength,
  pageLimit,
  totalPage,
}: PaginationProps) => {
  const handleValueChange = (option: any) => {
    setPageLength(Number(option));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        mt: 2,
        px: 3,
        flexDirection: { ms: 'column' },
      }}
    >
      <Box
        sx={{
          display: { sm: 'none' },
        }}
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            backgroundColor: '#7367f0',
            color: '#fff',
            cursor: offset + 1 === 1 ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s',
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ fontSize: 24 }}
            onClick={() => offset + 1 !== 1 && setOffset(offset - 1)}
          />
        </Box>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 16,
            fontWeight: 500,
            color: 'custom.grey01',
          }}
        >
          Page {offset + 1} of {totalPage}
        </Typography>
        <Box
          sx={{
            width: 32,
            height: 32,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            color: '#fff',
            backgroundColor: '#7367f0',
            cursor: offset === totalPage ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s',
          }}
        >
          <KeyboardArrowRightIcon
            sx={{
              fontSize: 24,
            }}
            onClick={() => offset !== totalPage && setOffset(offset + 1)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Pagination);
