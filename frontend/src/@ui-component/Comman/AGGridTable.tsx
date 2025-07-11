import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  ModuleRegistry,
  AllCommunityModule,
  type ColDef,
} from 'ag-grid-community';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { Box, useTheme } from '@mui/material';
import '../../../../frontend/src/App.css';
import type { AGGridTableProps } from '../../../src/types/table';
import Pagination from './Pagination';
ModuleRegistry.registerModules([AllCommunityModule]);

const AGGridTable: React.FC<AGGridTableProps> = ({
  columnDefs,
  rowData,
  loading = false,
}) => {
  const muiTheme = useTheme();
  const isDark = muiTheme.palette.mode === 'dark';
  const themeClass = isDark ? 'ag-theme-quartz-dark' : 'ag-theme-quartz';
  const [offset, setOffset] = useState(0); // 0-based page index
  const [pageLength, setPageLength] = useState(50); // Rows per page
  const pageLimit = [10, 20, 50, 100]; // Page size options

  // Calculate paginated data
  const paginatedData = useMemo(() => {
    const start = offset * pageLength;
    return rowData?.slice(start, start + pageLength);
  }, [rowData, offset, pageLength]);

  const totalPage = useMemo(
    () => Math.ceil(rowData?.length / pageLength),
    [rowData, pageLength]
  );

  const defaultColDef = useMemo<ColDef>(
    () => ({
      sortable: false,
      resizable: false,
      filter: false,
      sortingOrder: ['asc', 'desc'],
      unSortIcon: false,
      suppressMovable: true,
      lockPosition: 'right',
    }),
    []
  );

  const onGridReady = useCallback((params: any) => {
    params.api.sizeColumnsToFit();
    const allColumnIds: string[] = [];
    params.columnApi?.getAllColumns()?.forEach((col: any) => {
      allColumnIds.push(col.getColId());
    });
    params.columnApi?.autoSizeColumns(allColumnIds, false);
  }, []);

  return (
    <Box
      component="div"
      className={themeClass}
      sx={{
        width: '100%',
        marginTop: '18px',
        pb: 2,
        backgroundColor: 'transparent',
      }}
    >
      <AgGridReact
        rowData={paginatedData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={false}
        rowHeight={48}
        suppressScrollOnNewData
        suppressHorizontalScroll={false}
        suppressRowHoverHighlight
        enableCellTextSelection={true}
        domLayout="autoHeight"
        loading={loading}
        rowBuffer={5}
        suppressCellFocus
        suppressAggFuncInHeader
        getRowClass={() => 'ag-row'}
        onGridReady={onGridReady}
      />
      <Pagination
        offset={offset}
        setOffset={setOffset}
        pageLength={pageLength}
        setPageLength={setPageLength}
        pageLimit={pageLimit}
        totalPage={totalPage}
      />
    </Box>
  );
};

export default React.memo(AGGridTable);
