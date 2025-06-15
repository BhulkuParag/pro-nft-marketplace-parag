import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  ModuleRegistry,
  AllCommunityModule,
  type ColDef,
  type ICellRendererParams,
} from 'ag-grid-community';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { useTheme } from '@mui/material';
import '../../App.css';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

ModuleRegistry.registerModules([AllCommunityModule]);

interface RowData {
  id: number;
  Collection: string;
  'Floor Price(24H)': number;
  'Top Bid(24H)': number;
  'Volume(24H)': number;
  'Volume (1 Day)': number;
  'Volume (7 Day)': number;
  'Collection Volume (1 day)': number;
  'Collection Volume (7 day)': number;
  Owners: number;
  Supply: number;
}
const StarRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="flex items-center">
    <StarBorderRoundedIcon className='text-gray-500'/>
    {/* <span className="text-yellow-500">⭐</span> */}
    <span className="ml-2">{params.value}</span>
  </div>
);

const CollectionRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="flex items-center gap-2">
    <img src="placeholder-logo.png" alt="" className="w-8 h-8 rounded-full" />
    <span>{params.value}</span>
    {/* Verified checkmark */}
    <svg
      className="w-4 h-4 text-blue-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
    </svg>
  </div>
);

const PriceRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="flex items-center">
    <span className="text-gray-400">Ξ</span>
    <span className="ml-1">{params.value}</span>
  </div>
);

const VolumeRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="flex items-center text-[#10CA7D]">
    <span>{params.value}</span>
    <span className="ml-1">%</span>
  </div>
);

export const MyGrid: React.FC = () => {
  const muiTheme = useTheme();
  const isDark = muiTheme.palette.mode === 'dark';
  const themeClass = isDark ? 'ag-theme-quartz-dark' : 'ag-theme-quartz';

  const rowData: RowData[] = useMemo(
    () => [
      {
        id: 1,
        Collection: 'CryptoPunks',
        'Floor Price(24H)': 55.2,
        'Top Bid(24H)': 58.4,
        'Volume(24H)': 1200,
        'Volume (1 Day)': 1300,
        'Volume (7 Day)': 8400,
        'Collection Volume (1 day)': 1350,
        'Collection Volume (7 day)': 8500,
        Owners: 2200,
        Supply: 10000,
      },
      {
        id: 2,
        Collection: 'Bored Ape Yacht Club',
        'Floor Price(24H)': 72.5,
        'Top Bid(24H)': 75.3,
        'Volume(24H)': 2100,
        'Volume (1 Day)': 2300,
        'Volume (7 Day)': 14200,
        'Collection Volume (1 day)': 2250,
        'Collection Volume (7 day)': 14400,
        Owners: 5600,
        Supply: 10000,
      },
      {
        id: 3,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 4,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 5,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 6,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 7,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 8,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 9,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 10,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 11,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 12,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
      {
        id: 13,
        Collection: 'Azuki',
        'Floor Price(24H)': 16.1,
        'Top Bid(24H)': 16.8,
        'Volume(24H)': 850,
        'Volume (1 Day)': 870,
        'Volume (7 Day)': 4700,
        'Collection Volume (1 day)': 900,
        'Collection Volume (7 day)': 4900,
        Owners: 3900,
        Supply: 10000,
      },
    ],
    []
  );

  const columnDefs: ColDef<RowData, unknown>[] = useMemo(
    () => [
      {
        field: 'id',
        headerName: '',
        width: 70,
        cellRenderer: StarRenderer,
      },
      {
        field: 'Collection',
        headerName: 'Collection',
        cellRenderer: CollectionRenderer,
        flex: 2,
      },
      {
        field: 'Floor Price(24H)',
        headerName: 'Floor Price(24H)',
        cellRenderer: PriceRenderer,
        flex: 1,
      },
      {
        field: 'Volume(24H)',
        headerName: 'Volume(24H)',
        cellRenderer: VolumeRenderer,
        flex: 1,
      },
      {
        field: 'Volume (1 Day)',
        headerName: 'Volume (1 Day)',
        cellRenderer: VolumeRenderer,
        flex: 1,
      },
      {
        field: 'Volume (7 Day)',
        headerName: 'Volume (7 Day)',
        cellRenderer: VolumeRenderer,
        flex: 1,
      },
      {
        field: 'Collection Volume (1 day)',
        headerName: 'Collection Volume (1 day)',
        cellRenderer: VolumeRenderer,
        flex: 1,
      },
      {
        field: 'Collection Volume (7 day)',
        headerName: 'Collection Volume (7 day)',
        cellRenderer: VolumeRenderer,
        flex: 1,
      },
      {
        field: 'Owners',
        headerName: 'Owners',
        width: 130,
      },
      {
        field: 'Supply',
        headerName: 'Supply',
        width: 130,
      },
      // {
      //   field: 'actions',
      //   cellRenderer: (params: ICellRendererParams<RowData>) => {
      //     return (
      //       <button onClick={() => alert(`Delete ${params.data?.Collection}`)}>
      //         ❌
      //       </button>
      //     );
      //   },
      // },
    ],
    []
  );

  const defaultColDef: ColDef<RowData> = {
    sortable: true,
    resizable: true,
    filter: false,
  };

  return (
    <div
      className={themeClass}
      style={{
        height: '600px',
        width: '100%',
        padding: '12px',
        borderRadius: 12,
        // backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
        backgroundColor: 'transparent',
        color: isDark ? '#ffffff' : '#000000',
        transition: 'background-color 0.3s ease',
      }}
    >
      <AgGridReact<RowData>
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={false}
        paginationPageSize={10}
        rowHeight={50}
        suppressScrollOnNewData
      />
    </div>
  );
};
