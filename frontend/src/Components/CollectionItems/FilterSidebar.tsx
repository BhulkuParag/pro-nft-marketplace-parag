import { Box, Typography } from '@mui/material';
import CustomAccordion from '../CustomAccordion';
import ListingPrice from './Filters/ListingPrice';
import ListingMarketplace from './Filters/ListingMarketplace';
import RarityRank from './Filters/RarityRank';

const FilterSidebar = () => {
  return (
    <Box
      component={'div'}
      sx={{
        minWidth: 'fit-content',
        width: '25%',
        maxWidth: '25%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          // bgcolor: 'background.default',
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
        <CustomAccordion title="Listing Price" children={<ListingPrice />} />
        <CustomAccordion
          title="Listing Marketplace"
          children={<ListingMarketplace />}
        />
        <CustomAccordion title="Rarity Rank" children={<RarityRank />} />
        <CustomAccordion title="Traits Count" children={<></>} />
        <CustomAccordion title="Traits" children={<></>} />
      </Box>
    </Box>
  );
};

export default FilterSidebar;
