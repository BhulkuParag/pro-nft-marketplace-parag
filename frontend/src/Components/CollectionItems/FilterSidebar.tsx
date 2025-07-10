import { Box, Typography } from '@mui/material';

const FilterSidebar = () => {
  return (
    <Box
      component={'div'}
      sx={{
        minWidth: 'fit-content',
        width: '20%',
        height: '100%',
        backgroundColor: 'transparent !important',
      }}
    >
      <Box
        sx={{
          width: '100%',
          // bgcolor: 'background.default',
          backgroundColor: 'transparent !important',
          height: '100%',
          p: 2,
          pl: 0.5,
          pt: 0,
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 500, color: 'text.primary' }}
        >
          Filters
        </Typography>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
