import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  ModuleRegistry,
  AllCommunityModule,
  type ColDef,
  type ICellRendererParams,
} from 'ag-grid-community';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { Box, Tooltip, useTheme } from '@mui/material';
import '../../App.css';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import type { RowData } from '../../types/table';
// import StarRoundedIcon from '@mui/icons-material/StarRounded';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
ModuleRegistry.registerModules([AllCommunityModule]);

// Define props interface
interface AGGridTableProps {
  columnDefs: ColDef<RowData>[];
  rowData: RowData[];
}

export const StarRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="flex items-center cursor-pointer">
    <Tooltip title="Add to Compare" placement="top" arrow={true}>
      <StarBorderRoundedIcon className="text-gray-500" />
    </Tooltip>
    <span className="ml-2">{params.value}</span>
  </div>
);

export const CollectionRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="flex items-center gap-2">
    <img
      src="http://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuABZyrcC5KO5c%2Fpl9qoTyb1GXYbn1ksY1D9Vxjv7nkqqX5v3Kxd1M%2FV%2BIriyWSPgAmIlbJ5Zn3oFYI87ssNtSpi3kbyV5bfxjgqq45I7OyWHm1BmVO6ZZ9ARDi3eP%2F7bs%2BG%2By5msQ4%2FpiwMMsk4M9yWpe7GUMs0Td8rs%2BQKil68ir3OhSL%2FqRrJmm22hPPct6Tg%3D%3D?width=250"
      alt=""
      className="w-8 h-8 rounded-full"
    />
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

export const PriceRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="flex items-center cursor-pointer">
    <span className="text-gray-400">Ξ</span>
    <Tooltip title={'$ 1100.0'} placement="top" arrow={true}>
      <span className="ml-1">{params.value}</span>
    </Tooltip>
  </div>
);

export const VolumeRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="flex items-center text-[#12CAB6]">
    <span>{params.value}</span>
    <span className="ml-1">%</span>
  </div>
);

export const AGGridTable: React.FC<AGGridTableProps> = ({
  columnDefs,
  rowData,
}) => {
  const muiTheme = useTheme();
  const isDark = muiTheme.palette.mode === 'dark';
  const themeClass = isDark ? 'ag-theme-quartz-dark' : 'ag-theme-quartz';

  const icons = {
    sortAscending: () => <KeyboardArrowUpIcon />,
    sortDescending: () => <KeyboardArrowDownIcon />,
  };

  const defaultColDef: ColDef<RowData> = {
    sortable: true,
    resizable: false,
    filter: false,
    sortingOrder: ['asc', 'desc'],
    unSortIcon: false,
  };

  return (
    <Box
      component="div"
      className={themeClass}
      sx={{
        height: '50vh',
        width: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <AgGridReact<RowData>
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        icons={icons}
        pagination={false}
        paginationPageSize={10}
        suppressScrollOnNewData
      />
    </Box>
  );
};
