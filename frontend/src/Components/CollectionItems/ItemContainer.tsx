import { Box } from '@mui/material';
import FilterSidebar from './FilterSidebar';
import ItemCard from './ItemCard';
import Loading from '../../@ui-component/Comman/Loading';
import type { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchItemsDataRequest,
  setGrid,
  setLimit,
} from '../../features/collection/collectionSlice';
import ActiveTab from '../ActiveTab';
import {
  CollectionRenderer,
  NormalRenderer,
  PriceRenderer,
} from '../../utils/Table/cellRenderer';
import {
  AddSortIcon,
  NormalEndHeaderRenderer,
  NormalHeaderRenderer,
} from '../../utils/Table/headerRenderer';
import type { ICellRendererParams } from 'ag-grid-community';
import type { ItemT } from '../../types/table';

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
  const columns = useMemo(() => {
    return [
      {
        field: 'name',
        headerName: 'Item Name',
        cellRenderer: CollectionRenderer,
        headerComponent: NormalHeaderRenderer,
        // flex: 1,
        minWidth: 300,
        valueGetter: (params: ICellRendererParams<ItemT>) =>
          params.data?.token?.name,
      },
      {
        field: 'rarity',
        headerName: `Rarity`,
        cellRenderer: NormalRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<ItemT>) =>
          params.data?.token?.rarity ?? '-',
      },
      {
        field: 'itemfloorPrice',
        headerName: 'Price',
        cellRenderer: PriceRenderer,
        headerComponent: AddSortIcon,
        minWidth: 155,
        valueGetter: (params: ICellRendererParams<ItemT>) =>
          params.data?.token?.collection.floorAskPrice.amount.decimal.toFixed(
            2
          ) ?? '0.00',
      },
      {
        field: 'owner',
        headerName: 'Owner',
        cellRenderer: NormalRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<ItemT>) =>
          params.data?.token?.owner
            ? params.data?.token?.owner.slice(0, 4) +
              '...' +
              params.data?.token?.owner.slice(-4)
            : '-',
      },
    ];
  }, []);

  if (itemFilterOpen) {
    dispatch(setGrid('6'))
  }

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
        {grid === 'table' ? (
          <ActiveTab columnDefs={columns} />
        ) : (
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
        )}
        <Box ref={ref} sx={{ height: 1 }}></Box>
      </div>
    </Box>
  );
};

export default ItemContainer;
