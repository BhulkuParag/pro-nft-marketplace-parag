import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useEffect, useMemo } from 'react';
import { fetchTopMintDataRequest } from '../../features/home/homeSlice';
import ActiveTab from '../ActiveTab';
import {
  CollectionRenderer,
  HoverRenderer,
  NormalRenderer,
  PriceRenderer,
} from '../../utils/Table/cellRenderer';
import type { ICellRendererParams } from 'ag-grid-community';
import type { TopMintData } from '../../types/table';
import {
  AddCollectionSortIcon,
  AddSortIcon,
  NormalEndHeaderRenderer,
} from '../../utils/Table/headerRenderer';

const TopMInitRanking = () => {
  const dispatch = useDispatch();
  const columns = useMemo(() => {
    return [
      {
        field: 'name',
        headerName: 'Collection Name',
        cellRenderer: CollectionRenderer,
        headerComponent: AddCollectionSortIcon,
        // flex: 1,
        minWidth: 300,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.name ?? '',
      },
      // {
      //   field: 'token',
      //   headerName: 'Token',
      //   cellRenderer: NormalRenderer,
      //   headerComponent: NormalHeaderRenderer,
      //   valueGetter: (params: ICellRendererParams<TopMintData>) =>
      //     params.data?.name ?? '-',
      //   // minWidth: 110,
      // },
      {
        field: 'contract',
        headerName: 'Contract',
        cellRenderer: HoverRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.id
            ? params.data?.id.slice(0, 4) + '...' + params.data?.id.slice(-4)
            : '-',
      },
      // {
      //   field: 'tokenId',
      //   headerName: 'Token ID',
      //   cellRenderer: NormalRenderer,
      //   headerComponent: NormalEndHeaderRenderer,
      //   // minWidth: 110,
      //   valueGetter: (params: ICellRendererParams<TopMintData>) =>
      //     params.data?.token?.tokenId ?? '-',
      // },
      {
        field: 'mints',
        headerName: 'Mints',
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.mintCount ?? '-',
      },
      {
        field: 'ownerCount',
        headerName: 'Notable Minters',
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.ownerCount ?? '-',
      },
      {
        field: 'mintPrice',
        headerName: 'Mints Price',
        cellRenderer: PriceRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.mintPrice?.amount.decimal.toFixed(2) ?? '-',
      },
      {
        field: 'maxSupply',
        headerName: 'Total Supply',
        cellRenderer: NormalRenderer,
        headerComponent: AddSortIcon,
        // minWidth: 110,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.maxSupply ?? '-',
      },
      {
        field: 'mintVolume',
        headerName: 'Mint Volume',
        cellRenderer: PriceRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 120,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.mintVolume.toFixed(2) ?? '-',
      },
      {
        field: 'oneHourCount',
        headerName: '1h Mints',
        cellRenderer: NormalRenderer,
        headerComponent: NormalEndHeaderRenderer,
        // minWidth: 120,
        valueGetter: (params: ICellRendererParams<TopMintData>) =>
          params.data?.oneHourCount ?? '-',
      },
    ];
  }, []);

  useEffect(() => {
    dispatch(fetchTopMintDataRequest());
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
        Top Mint Ranking
      </Typography>
      <ActiveTab columnDefs={columns} variant='normal'/>
    </Box>
  );
};

export default React.memo(TopMInitRanking);
