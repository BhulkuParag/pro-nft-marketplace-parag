import { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchItemsDataRequest,
  setLimit,
} from '../../features/collection/collectionSlice';
import type { RootState } from '../../app/store';
import Loading from '../../@ui-component/Comman/Loading';
import { useInView } from 'react-intersection-observer';
import ItemCard from './ItemCard';
import ItemFilterBar from './ItemFilterBar';
import FilterSidebar from './FilterSidebar';

const CollectionItems = () => {
  const param = useParams();
  const {
    loading,
    tabData,
    limit,
    grid,
    itemSearchValue,
    itemSearchData,
    itemFilterOpen,
  } = useSelector((state: RootState) => state.collection);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const itemsToShow = useMemo(
    () =>
      itemSearchValue && itemSearchData.length > 0
        ? itemSearchData
        : tabData['items'] ?? [],
    [itemSearchValue, itemSearchData, tabData]
  );

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
    <Box sx={{ background: 'background.default', minHeight: '100vh' }}>
      <ItemFilterBar />
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
            {itemsToShow?.map((item: any) => (
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
    </Box>
  );
};

export default CollectionItems;
