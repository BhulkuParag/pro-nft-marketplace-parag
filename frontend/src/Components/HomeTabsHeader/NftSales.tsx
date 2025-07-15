import { Box, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { fetchNftSalesDataRequest } from '../../features/home/homeSlice';
import { useDispatch } from 'react-redux';
import ActiveTab from '../ActiveTab';
import {
  AddCollectionSortIcon,
  AddSortIcon,
} from '../../utils/Table/headerRenderer';
import {
  CollectionRenderer,
  HoverRenderer,
  NormalRenderer,
  PriceRenderer,
} from '../../utils/Table/cellRenderer';
import type { ICellRendererParams } from 'ag-grid-community';
import type { NftSalesT } from '../../types/table';
import { formatDistanceToNow } from 'date-fns';
import { customSubString } from '../../utils/Table/comman';

const NftSales = () => {
  const dispatch = useDispatch();
  const columns = useMemo(() => {
    return [
      {
        field: 'nft_name',
        headerName: 'Collection Name',
        cellRenderer: CollectionRenderer,
        headerComponent: AddCollectionSortIcon,
        // flex: 1,
        minWidth: 300,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.data?.token?.name ?? '',
      },
      {
        field: 'contract',
        headerName: 'Contract',
        headerComponent: AddSortIcon,
        cellRenderer: HoverRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.data?.token.contract
            ? params.data?.token.contract.slice(0, 4) +
              '...' +
              params.data?.token.contract.slice(-4)
            : '',
      },
      {
        field: 'tokenId',
        headerName: 'Token ID',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          // params.data?.token?.tokenId
          // ? customSubString(params.data?.token?.tokenId)
          // : '-',
          customSubString(params.data?.token?.tokenId as string),
      },
      {
        field: 'price',
        headerName: 'Floor Price',
        headerComponent: AddSortIcon,
        cellRenderer: PriceRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.data?.price.amount.decimal.toFixed(2) ?? '0.00',
      },
      {
        field: 'usd',
        headerName: 'Amount',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.data?.price?.amount?.usd?.toFixed(2)
            ? '$' + params.data?.price?.amount?.usd?.toFixed(2)
            : '-',
      },
      {
        field: 'washTradingScore',
        headerName: 'Wash Trading Score',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
          params.data?.washTradingScore.toFixed(0) ?? '',
      },
      {
        field: 'Latest Deal',
        headerName: 'Latest Deal',
        headerComponent: AddSortIcon,
        cellRenderer: NormalRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<NftSalesT>) =>
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
    dispatch(fetchNftSalesDataRequest());
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
        fontSize={18}
        color="custom.whiteLightO1"
      >
        Current NFT Sales
      </Typography>
      <ActiveTab columnDefs={columns} />
    </Box>
  );
};

export default NftSales;
