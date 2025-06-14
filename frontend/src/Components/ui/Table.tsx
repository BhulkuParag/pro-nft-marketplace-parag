import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface RowData {
  id: number;
  Collection: string;
  floorPrice: number;
  actions?: string; // Optional for action column
}

export const MyGrid: React.FC = () => {
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

  const columnDefs: ColDef<RowData, any>[] = useMemo(
    () => [
      { field: 'id' },
      { field: 'Collection' },
      { field: 'Floor Price(24H)' },
      { field: 'Top Bid(24H)' },
      { field: 'Volume(24H)' },
      { field: 'Volume (1 Day)' },
      { field: 'Volume (7 Day)' },
      { field: 'Collection Volume (1 day)' },
      { field: 'Collection Volume (7 day)' },
      { field: 'Owners' },
      { field: 'Supply' },
      {
        field: 'actions',
        cellRenderer: (params: any) => {
          const data = params.data as RowData;
          return (
            <button onClick={() => alert(`Delete ${data.Collection}`)}>
              ❌
            </button>
          );
        },
      },
    ],
    []
  );

  const defaultColDef = useMemo<ColDef<RowData>>(
    () => ({
      resizable: true,
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <div className="" style={{ height: 400, width: '100%', padding: '10px' }}>
      <AgGridReact<RowData>
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={5}
      />
    </div>
  );
};
