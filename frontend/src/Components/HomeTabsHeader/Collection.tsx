import { Box, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  ChipRenderer,
  CollectionRenderer,
  NormalRenderer,
  PriceRenderer,
  SupplyRenderer,
  VolumeRenderer,
} from '../../utils/Table/cellRenderer';
import {
  AddSortIcon,
  InfoIconSortIcon,
  NormalEndHeaderRenderer,
  NormalHeaderRenderer,
} from '../../utils/Table/headerRenderer';
import type { ICellRendererParams } from 'ag-grid-community';
import type { RowData } from '../../types/table';
import {
  fetchCollectionDataRequest,
  formatK,
} from '../../features/home/homeSlice';
import ActiveTab from '../ActiveTab';

const Collection = () => {
  const dispatch = useDispatch();
  const columns = useMemo(() => {
    return [
      {
        field: 'name',
        headerName: 'Collection Name',
        cellRenderer: CollectionRenderer,
        headerComponent: NormalHeaderRenderer,
        // flex: 1,
        minWidth: 300,
      },
      {
        field: 'floorAsk',
        headerName: `Floor (24H)`,
        cellRenderer: PriceRenderer,
        headerComponent: InfoIconSortIcon,
        minWidth: 140,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.floorAsk?.price?.amount?.decimal.toFixed(2) ?? '0.00',
      },
      {
        field: 'topBid',
        headerName: `Top Bid (24H)`,
        cellRenderer: PriceRenderer,
        headerComponent: InfoIconSortIcon,
        minWidth: 155,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.topBid?.price?.amount?.decimal.toFixed(2) ?? '0.00',
      },
      {
        field: 'volume',
        headerName: `Volume (24H)`,
        cellRenderer: NormalRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volume?.toFixed(2) ?? '',
      },
      {
        field: 'volumeChange',
        headerName: 'Volume (1D)%',
        cellRenderer: VolumeRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volumeChange['1day']?.toFixed(2) ?? '',
      },
      {
        field: 'volumeChange',
        headerName: 'Volume (7D)%',
        cellRenderer: VolumeRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volumeChange['7day']?.toFixed(2) ?? '',
      },
      {
        field: 'collectionVolume',
        headerName: 'Volume (1D)',
        cellRenderer: NormalRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 170,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.collectionVolume['1day']?.toFixed(2) ?? '',
      },
      {
        field: 'collectionVolume',
        headerName: 'Volume (7D)',
        cellRenderer: NormalRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 170,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.collectionVolume['7day']?.toFixed(2) ?? '',
      },
      {
        field: 'ownerCount',
        headerName: 'Owners',
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.ownerCount?.toFixed(0) ?? '',
      },
      {
        field: 'Supply',
        headerName: 'Supply',
        cellRenderer: SupplyRenderer,
        headerComponent: AddSortIcon,
        // minWidth: 120,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.tokenCount ? formatK(params.data?.tokenCount) : '',
      },
    ];
  }, []);

  useEffect(() => {
    dispatch(fetchCollectionDataRequest());
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        padding: { xs: '0px', xl: '20px' },
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        fontSize={18}
        color="custom.whiteLightO1"
      >
        Top Collection
      </Typography>
      <ActiveTab columnDefs={columns} variant='normal' />
    </Box>
  );
};

export default Collection;
