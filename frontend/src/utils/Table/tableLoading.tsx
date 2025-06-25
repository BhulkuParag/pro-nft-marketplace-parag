import { Box, Skeleton } from '@mui/material';

const ROWS = 9;
const COLS = 9;

export const AGGridSkeletonOverlay = () => (
  <Box
    sx={{
      width: 'calc(100vw - 73.6px)',
      // height: '258vh',
      height: '22vh',
      // p: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      backgroundColor: 'background.default',
    }}
  >
    {[...Array(ROWS)].map((_) => (
      <Box
        key={_}
        sx={{
          display: 'grid',
          gridTemplateRows: `repeat(9, 1fr)`,
          gap: 5,
          my: 5,
        }}
      >
        {[...Array(COLS)].map((_) => (
          <Skeleton
            key={_}
            variant="rectangular"
            height={28}
            sx={{
              flexGrow: 1,
              width: 110,
              borderRadius: 1,
              opacity: 0.18,
            }}
          />
        ))}
      </Box>
    ))}
  </Box>
);
