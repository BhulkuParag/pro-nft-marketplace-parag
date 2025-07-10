import { useEffect, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import TableFilterBar from '../ui/TableFilterBar';
import ActiveTab from '../ActiveTab';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTrendingDataRequest,
  formatK,
} from '../../features/home/homeSlice';
import type { RootState } from '../../app/store';
import {
  ChipRenderer,
  CollectionRenderer,
  NormalRenderer,
  SupplyRenderer,
  VolumeRenderer,
} from '../../utils/Table/cellRenderer';
import type { ICellRendererParams } from 'ag-grid-community';
import type { RowData } from '../../types/table';
import {
  AddSortIcon,
  HoverHeaderRenderer,
  InfoIconSortIcon,
  NormalHeaderRenderer,
} from '../../utils/Table/headerRenderer';

const Trending = () => {
  const dispatch = useDispatch();
  const time = useSelector((state: RootState) => state.home.time);
  const columns = useMemo(() => {
    return [
      {
        field: 'name',
        headerName: 'Collection Name',
        cellRenderer: CollectionRenderer,
        headerComponent: NormalHeaderRenderer,
        // flex: 1,
        minWidth: 400,
      },
      {
        field: 'floorAsk',
        headerName: `Floor Price (${time.toUpperCase()})`,
        cellRenderer: ChipRenderer,
        headerComponent: InfoIconSortIcon,
        minWidth: 190,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.floorAsk?.price?.amount?.decimal.toFixed(2) ?? '',
      },
      {
        field: 'topBid',
        headerName: `Top Bid (${time.toUpperCase()})`,
        cellRenderer: ChipRenderer,
        headerComponent: InfoIconSortIcon,
        minWidth: 140,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.topBid?.price?.amount?.decimal.toFixed(2) ?? '-',
      },
      {
        field: 'volume',
        headerName: `Volume (${time.toUpperCase()})`,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volume?.toFixed(2) ?? '',
      },
      {
        field: 'volumeChange',
        headerName: 'Volume (1 Day)',
        cellRenderer: VolumeRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volumeChange['1day']?.toFixed(2) ?? '',
      },
      {
        field: 'volumeChange',
        headerName: 'Volume (7 Day)',
        cellRenderer: VolumeRenderer,
        headerComponent: NormalHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.volumeChange['7day']?.toFixed(2) ?? '',
      },
      {
        field: 'collectionVolume',
        headerName: 'Collection Volume (1 day)',
        cellRenderer: NormalRenderer,
        headerComponent: HoverHeaderRenderer,
        minWidth: 150,
        valueGetter: (params: ICellRendererParams<RowData>) =>
          params.data?.collectionVolume['1day']?.toFixed(2) ?? '',
      },
      {
        field: 'collectionVolume',
        headerName: 'Collection Volume (7 day)',
        cellRenderer: NormalRenderer,
        headerComponent: HoverHeaderRenderer,
        minWidth: 150,
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
  }, [time]);

  useEffect(() => {
    dispatch(fetchTrendingDataRequest());
  }, [time]);

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
        color="custom.whiteLightO1"
        fontSize={26}
      >
        Top Trending Collections
      </Typography>
      <TableFilterBar />
      <ActiveTab columnDefs={columns} />
    </Box>
  );
};

export default Trending;
