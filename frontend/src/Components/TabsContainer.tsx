// import { Typography } from '@mui/material';
// import CustomTab, { type TabItem } from '../../@ui-component/Comman/Tab';
// import TableFilterBar from './ui/TableFilterBar';
// import React, { useEffect, useMemo, useState } from 'react';
// import type { RowData } from '../types/table';
// import type { ColDef } from 'ag-grid-community';
// import {
//   CollectionRenderer,
//   NormalRenderer,
//   PriceRenderer,
//   StarRenderer,
//   SupplyRenderer,
//   VolumeRenderer,
// } from '../utils/Table/cellRenderer';
// import { AddSortIcon, InfoIcon } from '../utils/Table/headerRenderer';
// import { AGGridTable } from '../../@ui-component/Comman/AGGridTable';
// import { getAllUsers } from '../api/home';

// const TabsContainer = () => {
//   const [data, setData] = useState<RowData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const tableData: any = await getAllUsers();
//       console.log(tableData);
//       setData(tableData?.collections ?? []);
//     };
//     fetchData();
//   }, []);

//   const columnDefsMap: Record<string, any[]> = {
//     trending: [
//       {
//         field: 'id',
//         headerName: '',
//         minWidth: 70,
//         maxWidth: 70,
//         cellRenderer: StarRenderer,
//         valueGetter: (params) =>
//           params.node?.rowIndex != null ? params.node.rowIndex + 1 : '',
//       },
//       {
//         field: 'name',
//         headerName: 'Collection',
//         cellRenderer: CollectionRenderer,
//         flex: 2,
//         minWidth: 300,
//       },
//       {
//         field: 'floorAsk',
//         headerName: 'Floor Price(24H)',
//         cellRenderer: PriceRenderer,
//         headerComponent: InfoIcon,
//         // minWidth: 110,
//         valueGetter: (params) =>
//           params.data?.floorAsk?.price?.amount?.decimal.toFixed(2) ?? '',
//       },
//       {
//         field: 'topBid',
//         headerName: 'Top Bid(24H)',
//         cellRenderer: PriceRenderer,
//         // minWidth: 110,
//         valueGetter: (params) =>
//           params.data?.topBid?.price?.amount?.decimal.toFixed(2) ?? '',
//       },
//       {
//         field: 'volume',
//         headerName: 'Volume(24H)',
//         cellRenderer: NormalRenderer,
//         headerComponent: AddSortIcon,
//         // minWidth: 110,
//         valueGetter: (params) => params.data?.volume.toFixed(2) ?? '',
//       },
//       {
//         field: 'volumeChange',
//         headerName: 'Volume (1 Day)',
//         cellRenderer: VolumeRenderer,
//         // minWidth: 110,
//         valueGetter: (params) =>
//           params.data?.volumeChange['1day'].toFixed(2) ?? '',
//       },
//       {
//         field: 'volumeChange',
//         headerName: 'Volume (7 Day)',
//         cellRenderer: VolumeRenderer,
//         // minWidth: 110,
//         valueGetter: (params) =>
//           params.data?.volumeChange['7day'].toFixed(2) ?? '',
//       },
//       {
//         field: 'collectionVolume',
//         headerName: 'Collection Volume (1 day)',
//         cellRenderer: NormalRenderer,
//         minWidth: 200,
//         valueGetter: (params) =>
//           params.data?.collectionVolume['1day'].toFixed(2) ?? '',
//       },
//       {
//         field: 'collectionVolume',
//         headerName: 'Collection Volume (7 day)',
//         cellRenderer: NormalRenderer,
//         minWidth: 200,
//         valueGetter: (params) =>
//           params.data?.collectionVolume['7day'].toFixed(2) ?? '',
//       },
//       {
//         field: 'ownerCount',
//         headerName: 'Owners',
//         headerComponent: AddSortIcon,
//         cellRenderer: NormalRenderer,
//         // minWidth: 110,
//         valueGetter: (params) => params.data?.ownerCount.toFixed(0) ?? '',
//       },
//       // {
//       //   field: 'Supply',
//       //   headerName: 'Supply',
//       //   headerComponent: AddSortIcon,
//       //   cellRenderer: SupplyRenderer,
//       //   minWidth: 120,
//       // },
//     ],
//     nft_sales: [],
//     top_sales: [],
//     top_mint_ranking: [],
//   };

//   // const rowDataForTrending: RowData[] = useMemo(
//   //   () => [
//   //     {
//   //       id: 1,
//   //       Collection: 'CryptoPunks',
//   //       'Floor Price(24H)': 55.2,
//   //       'Top Bid(24H)': 58.4,
//   //       'Volume(24H)': 1200,
//   //       'Volume (1 Day)': 1100,
//   //       'Volume (7 Day)': 8400,
//   //       'Collection Volume (1 day)': 1350,
//   //       'Collection Volume (7 day)': 8500,
//   //       Owners: 2200,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 2,
//   //       Collection: 'Bored Ape Yacht Club',
//   //       'Floor Price(24H)': 72.5,
//   //       'Top Bid(24H)': 75.3,
//   //       'Volume(24H)': 2100,
//   //       'Volume (1 Day)': 2300,
//   //       'Volume (7 Day)': 14200,
//   //       'Collection Volume (1 day)': 2250,
//   //       'Collection Volume (7 day)': 14400,
//   //       Owners: 5600,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 3,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 4,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 5,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 6,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 7,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 8,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 9,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 10,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 11,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 12,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 13,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 1,
//   //       Collection: 'CryptoPunks',
//   //       'Floor Price(24H)': 55.2,
//   //       'Top Bid(24H)': 58.4,
//   //       'Volume(24H)': 1200,
//   //       'Volume (1 Day)': 1100,
//   //       'Volume (7 Day)': 8400,
//   //       'Collection Volume (1 day)': 1350,
//   //       'Collection Volume (7 day)': 8500,
//   //       Owners: 2200,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 2,
//   //       Collection: 'Bored Ape Yacht Club',
//   //       'Floor Price(24H)': 72.5,
//   //       'Top Bid(24H)': 75.3,
//   //       'Volume(24H)': 2100,
//   //       'Volume (1 Day)': 2300,
//   //       'Volume (7 Day)': 14200,
//   //       'Collection Volume (1 day)': 2250,
//   //       'Collection Volume (7 day)': 14400,
//   //       Owners: 5600,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 3,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 4,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 5,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 6,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 7,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 8,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 9,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 10,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 11,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 12,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 13,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 1,
//   //       Collection: 'CryptoPunks',
//   //       'Floor Price(24H)': 55.2,
//   //       'Top Bid(24H)': 58.4,
//   //       'Volume(24H)': 1200,
//   //       'Volume (1 Day)': 1100,
//   //       'Volume (7 Day)': 8400,
//   //       'Collection Volume (1 day)': 1350,
//   //       'Collection Volume (7 day)': 8500,
//   //       Owners: 2200,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 2,
//   //       Collection: 'Bored Ape Yacht Club',
//   //       'Floor Price(24H)': 72.5,
//   //       'Top Bid(24H)': 75.3,
//   //       'Volume(24H)': 2100,
//   //       'Volume (1 Day)': 2300,
//   //       'Volume (7 Day)': 14200,
//   //       'Collection Volume (1 day)': 2250,
//   //       'Collection Volume (7 day)': 14400,
//   //       Owners: 5600,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 3,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 4,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 5,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 6,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 7,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 8,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 9,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 10,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 11,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 12,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 13,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 1,
//   //       Collection: 'CryptoPunks',
//   //       'Floor Price(24H)': 55.2,
//   //       'Top Bid(24H)': 58.4,
//   //       'Volume(24H)': 1200,
//   //       'Volume (1 Day)': 1100,
//   //       'Volume (7 Day)': 8400,
//   //       'Collection Volume (1 day)': 1350,
//   //       'Collection Volume (7 day)': 8500,
//   //       Owners: 2200,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 2,
//   //       Collection: 'Bored Ape Yacht Club',
//   //       'Floor Price(24H)': 72.5,
//   //       'Top Bid(24H)': 75.3,
//   //       'Volume(24H)': 2100,
//   //       'Volume (1 Day)': 2300,
//   //       'Volume (7 Day)': 14200,
//   //       'Collection Volume (1 day)': 2250,
//   //       'Collection Volume (7 day)': 14400,
//   //       Owners: 5600,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 3,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 4,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 5,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 6,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 7,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 8,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 9,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 10,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //     {
//   //       id: 11,
//   //       Collection: 'Azuki',
//   //       'Floor Price(24H)': 16.1,
//   //       'Top Bid(24H)': 16.8,
//   //       'Volume(24H)': 850,
//   //       'Volume (1 Day)': 870,
//   //       'Volume (7 Day)': 4700,
//   //       'Collection Volume (1 day)': 900,
//   //       'Collection Volume (7 day)': 4900,
//   //       Owners: 3900,
//   //       Supply: 10000,
//   //     },
//   //   ],
//   //   []
//   // );

//   const tabs: TabItem[] = [
//     {
//       label: 'Trending',
//       value: 'trending',
//       content: (
//         <>
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             color="custom.whiteLightO1"
//             fontSize={26}
//           >
//             Top Trending Collections
//           </Typography>
//           <TableFilterBar />
//           <AGGridTable columnDefs={columnForTrending} rowData={data} />
//         </>
//       ),
//     },
//     {
//       label: 'NFT Sales',
//       value: 'nft_sales',
//       content: (
//         <>
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             color="custom.whiteLightO1"
//             fontSize={26}
//           >
//             Current NFT Sales
//           </Typography>
//           <AGGridTable columnDefs={columnForTrending} rowData={data} />
//         </>
//       ),
//     },
//     {
//       label: 'Top Sales',
//       value: 'top_sales',
//       content: (
//         <>
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             color="custom.whiteLightO1"
//             fontSize={26}
//           >
//             Top Sales
//           </Typography>
//           <AGGridTable columnDefs={columnForTrending} rowData={data} />
//         </>
//       ),
//     },
//     {
//       label: 'Mint Ranking',
//       value: 'top_mint_ranking',
//       content: (
//         <>
//           <Typography
//             variant="h4"
//             fontWeight={600}
//             color="custom.whiteLightO1"
//             fontSize={26}
//           >
//             Top Mint Ranking
//           </Typography>
//           <AGGridTable columnDefs={[]} rowData={[]} />
//         </>
//       ),
//     },
//   ];

//   return <CustomTab tabs={tabs} />;
// };

// export default TabsContainer;

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { Box } from '@mui/material';
import type { CustomTabProps } from '../../@ui-component/Comman/Tab';

const TabsContainer = ({ tabs }: CustomTabProps) => {
  const { activeTab } = useSelector((state: RootState) => state.home);
  return (
    <Box
      sx={{
        width: '100%',
        padding: { xs: '0px', xl: '20px 20px 0px 20px' },
      }}
    >
      {tabs[tabs.findIndex((i) => i.value === activeTab)].content}
    </Box>
  );
};

export default React.memo(TabsContainer);
