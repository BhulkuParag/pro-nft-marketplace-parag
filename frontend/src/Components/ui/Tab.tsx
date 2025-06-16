import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type { JSX } from '@emotion/react/jsx-runtime';
import { AGGridTable, CollectionRenderer, PriceRenderer, StarRenderer, VolumeRenderer } from './AGGridTable';
import { Typography } from '@mui/material';
import type { RowData } from '../../types/table';
import type { ColDef } from 'ag-grid-community';
import { PiCaretUpDown } from 'react-icons/pi';

export default function ColorTabs(): JSX.Element {
  const [value, setValue] = React.useState<string>('trending');

  interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <Box
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          // alignItems: 'center',

          backgroundColor: 'background.default',
        }}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </Box>
    );
  }

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ): void => {
    console.log(event);
    setValue(newValue);
  };

  const tabs = React.useMemo(() => {
    return [
      { label: 'Trending', value: 'trending' },
      { label: 'NFT Sales', value: 'nft_sales' },
      { label: 'Top Sales', value: 'top_sales' },
      { label: 'Top Mint Ranking', value: 'top_mint_ranking' },
    ];
  }, []);

  const columnDefs: ColDef<RowData, unknown>[] = React.useMemo(
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

  const rowData: RowData[] = React.useMemo(
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

  return (
    <Box sx={{ width: '100%', backgroundColor: 'background.default', mt: 2 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderBottomColor: 'custom.borderblack01',
          borderColor: 'divider',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          sx={{
            pl: 1.2,
          }}
        >
          {tabs?.map((tab) => (
            <Tab
              key={tab?.value}
              disableTouchRipple
              value={tab?.value}
              label={tab?.label}
              sx={{
                textTransform: 'initial',
              }}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={'trending'}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            alignItems: 'start',
            gap: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: 'text.primary', fontWeight: 500 }}
          >
            Top Trending Collections
          </Typography>
          <AGGridTable columnDefs={columnDefs} rowData={rowData}/>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'nft_sales'}>
        <h1>Current NFT Sales</h1>
        <AGGridTable columnDefs={columnDefs} rowData={rowData}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'top_sales'}>
        <h1>Top Sales</h1>
        <AGGridTable columnDefs={columnDefs} rowData={rowData}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'top_mint_ranking'}>
        <h1>Top Mint Ranking</h1>
        <AGGridTable columnDefs={columnDefs} rowData={rowData}/>
      </CustomTabPanel>
    </Box>
  );
}
