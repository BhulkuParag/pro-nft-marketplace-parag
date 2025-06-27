import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  useTheme,
  InputBase,
  IconButton,
  Chip,
  Link,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { type ItemDetailActivity } from '../../types/table';
import AGGridTable from '../../../@ui-component/Comman/AGGridTable';
import type { ColDef, ICellRendererParams } from 'ag-grid-community';
import {
  AddSortIcon,
  InfoIconSortIcon,
} from '../../utils/Table/headerRenderer';

const TypeCell = (row: ICellRendererParams<ItemDetailActivity>) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, height: '100%' }}>
    {row.data?.type === 'bid' && (
      <Avatar
        src={
          'https://raw.githubusercontent.com/reservoirprotocol/assets/main/sources/opensea-logo.svg'
        }
        alt="opensea"
        sx={{ width: 24, height: 24, bgcolor: 'transparent' }}
        variant="rounded"
      />
    )}
    <Typography fontWeight={700} textTransform="lowercase">
      {row.data?.type}
    </Typography>
  </Box>
);

const PriceCell = (row: ICellRendererParams<ItemDetailActivity>) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, height: '100%' }}>
    <img
      src={row.data?.image}
      alt="eth"
      width={16}
      height={16}
      style={{ marginRight: 4, verticalAlign: 'middle' }}
    />
    <Typography fontWeight={700} color="text.primary">
      {row.data?.price?.replace('Ξ', '').trim()}
    </Typography>
  </Box>
);

const AddressCell = (row: ICellRendererParams<ItemDetailActivity>) => (
  <Typography
    fontFamily="monospace"
    fontWeight={500}
    color="text.primary"
    sx={{ whiteSpace: 'nowrap' }}
  >
    {row.data?.to ?? '-'}
  </Typography>
);

// Custom renderers (same as before)
const CollectionCell = (row: ICellRendererParams<ItemDetailActivity>) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Avatar
      src={
        'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf2sE%2BcsbkeVl%2B4W8jWCuUkuov0PzHyR9IJ1xIZwBbFfEA%2Bwbk8y%2FqPIB7%2Bl8cd71OhaAEqplwlieK5r99VTmOqcsfmGuFgltwHCGNfo0uIC3Iw%2B%2F2g0%2BMOl%2F7WgreT%2FjGA%3D%3D.png'
      }
      alt={row.data?.name}
      sx={{
        width: 32,
        height: 32,
      }}
    />
    <Typography fontWeight={700} color="text.primary">
      {row.data?.name}
    </Typography>
    {row.data?.openseaVerificationStatus === 'verified' && (
      <Box
        component="span"
        sx={{
          ml: 0.5,
          // color:
          //   theme.palette?.custom?.primaryLight ?? theme.palette.primary.main,
          fontSize: 18,
        }}
      >
        &#10003;
      </Box>
    )}
  </Box>
);

// Example filter state
const FILTERS = [
  { label: 'Event', value: 'Sale' },
  { label: 'Event', value: 'List' },
  { label: 'Event', value: 'Transfer' },
  { label: 'Event', value: 'Mint' },
];

const Activity: React.FC = () => {
  const theme = useTheme();
  const [filters, setFilters] = React.useState(FILTERS);

  const activityColumns: ColDef<ItemDetailActivity>[] = [
    {
      headerName: 'Collection Name',
      field: 'name',
      minWidth: 300,
      cellRenderer: CollectionCell,
    },
    {
      headerName: 'Type',
      field: 'type',
      // width: 180,
      cellRenderer: TypeCell,
      headerComponent: AddSortIcon,
    },
    {
      headerName: 'Floor Price',
      field: 'price',
      minWidth: 140,
      cellRenderer: PriceCell,
      headerComponent: InfoIconSortIcon,
    },
    {
      headerName: 'From',
      field: 'from',
      // width: 100,
      headerComponent: AddSortIcon,
    },
    {
      headerName: 'To',
      field: 'to',
      // // width: 140,
      cellRenderer: AddressCell,
      headerComponent: AddSortIcon,
      // cellStyle: { fontWeight: 700, textAlign: 'right' },
    },
    {
      headerName: 'Rarity Score',
      field: 'RarityScore',
      // width: 140,
      headerComponent: AddSortIcon,
      // cellStyle: { fontWeight: 700, textAlign: 'right' },
    },
    {
      headerName: 'Quantity',
      field: 'Quantity',
      // width: 140,
      headerComponent: AddSortIcon,
      // cellStyle: { fontWeight: 700, textAlign: 'right' },
    },
    {
      headerName: 'Rarity Rank',
      field: 'RarityRank',
      // width: 140,
      headerComponent: AddSortIcon,
      // cellStyle: { fontWeight: 700, textAlign: 'right' },
    },
    {
      headerName: 'Time',
      field: 'time',
      // width: 140,
      headerComponent: AddSortIcon,
      // cellStyle: { fontWeight: 700, textAlign: 'right' },
    },
  ];

  const activityRows: ItemDetailActivity[] = [
    {
      id: '1',
      name: 'Pudgy Penguins',
      type: 'bid',
      from: '0x37...a02c',
      to: '-',
      price: 'Ξ 6.82',
      time: '6 s',
      image: 'https://marketplace.polycruz.io/eth.svg',
      openseaVerificationStatus: 'verified',
      RarityScore: '29.528',
      Quantity: '1',
      RarityRank: '352',
    },
    {
      id: '2',
      name: 'Pudgy Penguins',
      type: 'bid',
      from: '0x4b...3324',
      to: '-',
      price: 'Ξ 6.82',
      time: '9 s',
      image: 'https://marketplace.polycruz.io/eth.svg',
      openseaVerificationStatus: 'verified',
      RarityScore: '22.242',
      Quantity: '1',
      RarityRank: '3486',
    },
    {
      id: '2',
      name: 'Pudgy Penguins',
      type: 'bid',
      from: '0x4b...3324',
      to: '-',
      price: 'Ξ 6.82',
      time: '9 s',
      image: 'https://marketplace.polycruz.io/eth.svg',
      openseaVerificationStatus: 'verified',
      RarityScore: '29.528',
      Quantity: '1',
      RarityRank: '352',
    },
    {
      id: '2',
      name: 'Pudgy Penguins',
      type: 'bid',
      from: '0x4b...3324',
      to: '-',
      price: 'Ξ 6.82',
      time: '9 s',
      image: 'https://marketplace.polycruz.io/eth.svg',
      openseaVerificationStatus: 'verified',
      RarityScore: '',
      Quantity: '1',
      RarityRank: '',
    },
    {
      id: '2',
      name: 'Pudgy Penguins',
      type: 'bid',
      from: '0x4b...3324',
      to: '-',
      price: 'Ξ 6.82',
      time: '9 s',
      image: 'https://marketplace.polycruz.io/eth.svg',
      openseaVerificationStatus: 'verified',
      RarityScore: '',
      Quantity: '1',
      RarityRank: '',
    },
    {
      id: '2',
      name: 'Pudgy Penguins',
      type: 'bid',
      from: '0x4b...3324',
      to: '-',
      price: 'Ξ 6.82',
      time: '9 s',
      image: 'https://marketplace.polycruz.io/eth.svg',
      openseaVerificationStatus: 'verified',
      RarityScore: '76.417',
      Quantity: '1',
      RarityRank: '90',
    },
    {
      id: '2',
      name: 'Pudgy Penguins',
      type: 'bid',
      from: '0x4b...3324',
      to: '-',
      price: 'Ξ 6.82',
      time: '9 s',
      image: 'https://marketplace.polycruz.io/eth.svg',
      openseaVerificationStatus: 'verified',
      RarityScore: '30.528',
      Quantity: '1',
      RarityRank: '452',
    },
    {
      id: '2',
      name: 'Pudgy Penguins',
      type: 'bid',
      from: '0x4b...3324',
      to: '-',
      price: 'Ξ 6.82',
      time: '9 s',
      image: 'https://marketplace.polycruz.io/eth.svg',
      openseaVerificationStatus: 'verified',
      RarityScore: '31.528',
      Quantity: '1',
      RarityRank: '652',
    },
    {
      id: '2',
      name: 'Pudgy Penguins',
      type: 'bid',
      from: '0x4b...3324',
      to: '-',
      price: 'Ξ 6.82',
      time: '9 s',
      image: 'https://marketplace.polycruz.io/eth.svg',
      openseaVerificationStatus: 'verified',
      RarityScore: '28.528',
      Quantity: '1',
      RarityRank: '252',
    },
    // ...more rows
  ];
  const handleDelete = (idx: number) => {
    setFilters((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleClear = () => setFilters([]);

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.default',
        borderRadius: 3,
        p: 3,
        mt: 4,
      }}
    >
      {/* Filter/Search Row */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 2,
          bgcolor: 'background.default',
          flexWrap: 'wrap',
        }}
      >
        {/* Filter Button */}
        <IconButton
          sx={{
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            color: 'text.secondary',
            width: 40,
            height: 40,
            mr: 1,
          }}
        >
          <FilterListIcon />
        </IconButton>

        {/* Search Input */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            px: 1.5,
            py: 0.5,
            minWidth: 320,
            bgcolor: 'background.default',
            flex: 1,
            maxWidth: 400,
          }}
        >
          <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
          <InputBase
            placeholder="Search for items"
            sx={{
              color: 'text.primary',
              width: '100%',
              fontSize: 16,
            }}
            inputProps={{ 'aria-label': 'search for items' }}
          />
        </Box>

        {/* Live View */}
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, mr: 2 }}>
          <FiberManualRecordIcon
            sx={{ color: '#1DE9B6', fontSize: 16, mr: 1 }}
          />
          <Typography color="text.secondary" fontWeight={500} fontSize={15}>
            LIVE VIEW
          </Typography>
        </Box>

        {/* Filters */}
        <Typography
          color="text.secondary"
          fontWeight={500}
          fontSize={16}
          sx={{ mr: 1 }}
        >
          Filter:
        </Typography>
        {filters.map((f, idx) => (
          <Chip
            key={f.label + f.value}
            label={
              <span>
                <span style={{ opacity: 0.7, fontSize: 13 }}>
                  {f.label}&nbsp;
                </span>
                <span style={{ fontWeight: 600 }}>{f.value}</span>
              </span>
            }
            onDelete={() => handleDelete(idx)}
            deleteIcon={
              <CloseIcon sx={{ color: 'text.secondary', fontSize: 18 }} />
            }
            sx={{
              bgcolor: 'background.default',
              color: 'text.secondary',
              fontWeight: 600,
              fontSize: 15,
              px: 1.5,
              mr: 1,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              '& .MuiChip-deleteIcon': { ml: 0.5 },
            }}
          />
        ))}
        {/* Clear */}
        {filters.length > 0 && (
          <Link
            component="button"
            underline="none"
            sx={{
              color: theme.palette.primary.light,
              fontWeight: 600,
              fontSize: 16,
              ml: 1,
              cursor: 'pointer',
            }}
            onClick={handleClear}
          >
            Clear
          </Link>
        )}
      </Box>
      <AGGridTable columnDefs={activityColumns} rowData={activityRows} />
    </Box>
  );
};

export default Activity;
