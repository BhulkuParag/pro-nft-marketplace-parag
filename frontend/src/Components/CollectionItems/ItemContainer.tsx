import { Box } from '@mui/material';
import FilterSidebar from './FilterSidebar';
import ItemCard from './ItemCard';
import Loading from '../../@ui-component/Comman/Loading';
import type { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchItemsDataRequest,
  setLimit,
} from '../../features/collection/collectionSlice';

const ItemContainer = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const loading = useSelector((state: RootState) => state.collection.loading);
  const tabData = useSelector((state: RootState) => state.collection.tabData);
  const limit = useSelector((state: RootState) => state.collection.limit);
  const grid = useSelector((state: RootState) => state.collection.grid);
  const itemFilterOpen = useSelector(
    (state: RootState) => state.collection.itemFilterOpen
  );
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (param.id)
      dispatch(fetchItemsDataRequest({ collection: param.id, limit }));
  }, [param, limit]);

  useEffect(() => {
    if (inView && !loading && tabData['items']?.length === limit) {
      dispatch(setLimit(limit + 50));
      console.log(`Fetching more items, current limit: ${limit}`);
    }
  }, [inView, loading, limit, dispatch]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
      }}
    >
      {itemFilterOpen && <FilterSidebar />}
      <div className="w-full">
        <Box
          sx={{
            display: 'grid',
            //justifyContent: 'space-between',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: 'repeat(4, minmax(0, 1fr))',
              md: 'repeat(6, minmax(0, 1fr))',
              lg: `repeat(${grid}, minmax(0, 1fr))`,
            },
            gap: 1.5,
          }}
        >
          {tabData?.items?.map((item: any) => (
            <ItemCard item={item} key={item?.token?.id} />
          ))}
        </Box>
        <Box ref={ref} sx={{ height: 1 }}></Box>
        {loading && (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Loading />
          </Box>
        )}
      </div>
    </Box>
  );
};

export default ItemContainer;
