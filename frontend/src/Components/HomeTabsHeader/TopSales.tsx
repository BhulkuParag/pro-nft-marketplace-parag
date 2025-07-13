import { Box, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTopSalesDataRequest } from '../../features/home/homeSlice';
import ActiveTab from '../ActiveTab';
import {
  CollectionRenderer,
  HoverRenderer,
  NormalRenderer,
  PriceRenderer,
} from '../../utils/Table/cellRenderer';
import {
  NormalEndHeaderRenderer,
  NormalHeaderRenderer,
} from '../../utils/Table/headerRenderer';
import type { TopSalesT } from '../../types/table';
import type { ICellRendererParams } from 'ag-grid-community';
import { formatDistanceToNow } from 'date-fns';

const TopSales = () => {
  const dispatch = useDispatch();
  const column = useMemo(() => {
    return [
      {
        field: 'topsalename',
        headerName: 'Collection Name',
        cellRenderer: CollectionRenderer,
        headerComponent: NormalHeaderRenderer,
        // flex: 1,
        minWidth: 300,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.token?.name ?? '',
      },
      {
        field: 'token',
        headerName: 'Token',
        cellRenderer: NormalRenderer,
        headerComponent: NormalEndHeaderRenderer,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.token?.name ?? '',
        // minWidth: 110,
      },
      {
        field: 'contract',
        headerName: 'Contract',
        cellRenderer: HoverRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.token?.contract
            ? params.data?.token?.contract.slice(0, 4) +
              '...' +
              params.data?.token?.contract.slice(-4)
            : '-',
      },
      {
        field: 'tokenId',
        headerName: 'Token ID',
        cellRenderer: NormalRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.token?.tokenId ? '#' + params.data?.token?.tokenId : '-',
      },
      {
        field: 'price',
        headerName: 'Price (ETH)',
        cellRenderer: PriceRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.price?.amount.decimal.toFixed(2) ?? '-',
      },
      {
        field: 'price',
        headerName: 'Price (USD)',
        cellRenderer: PriceRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.price.amount.usd ?? '-',
      },
      {
        field: 'time',
        headerName: 'Time',
        cellRenderer: NormalRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 120,
        valueGetter: (params: ICellRendererParams<TopSalesT>) =>
          params.data?.timestamp
            ? formatDistanceToNow(
                new Date(Number(params.data?.timestamp) * 1000),
                {
                  addSuffix: true,
                }
              )
            : '-',
      },
    ];
  }, []);

  useEffect(() => {
    dispatch(fetchTopSalesDataRequest());
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: '0px', xl: '10px 0px 0px 10px' },
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        color="custom.whiteLightO1"
        fontSize={26}
      >
        Top Sales
      </Typography>
      <ActiveTab columnDefs={column} />
    </Box>
  );
};

export default React.memo(TopSales);
