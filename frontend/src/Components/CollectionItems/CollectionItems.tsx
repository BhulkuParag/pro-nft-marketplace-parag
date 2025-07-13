import { Box } from '@mui/material';
import ItemFilterBar from './ItemFilterBar';
import ItemContainer from './ItemContainer';

const CollectionItems = () => {
  return (
    <Box sx={{ background: 'background.default', minHeight: '100vh' }}>
      <ItemFilterBar />
      <ItemContainer />
    </Box>
  );
};

export default CollectionItems;
