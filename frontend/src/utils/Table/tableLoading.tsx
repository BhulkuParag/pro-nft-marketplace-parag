import { Box, Skeleton } from '@mui/material';

const ROWS = 8;
const COLS = 9;

export const AGGridSkeletonOverlay = () => (
  <Box sx={{ width: '100%', height: '100%', p: 2 }}>
    {[...Array(ROWS)].map((_, rowIdx) => (
      <Box
        key={_}
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(9, 1fr)`,
          gap: 10,
          my: 5,
        }}
      >
        {[...Array(COLS)].map((_, colIdx) => (
          <Skeleton
            key={_}
            variant="rectangular"
            height={28}
            sx={{
              width: 110,
              borderRadius: 1,
              //   bgcolor: rowIdx % 2 === 1 ? 'primary.dark' : 'grey.800', // Optional: alternate row color
              //   bgcolor: 'grey.800', // Optional: alternate row color
              opacity: 0.18,
            }}
          />
        ))}
      </Box>
    ))}
  </Box>
);
