import { Box, Stack } from '@mui/material';
import SearchBar from '../../ui/SearchBar';

const ListingMarketplace = () => {
  return (
    <Box width={270}>
      <Stack spacing={1.5}>
        <SearchBar placeholder='Search...'/>
      </Stack>
    </Box>
  );
};

export default ListingMarketplace;
