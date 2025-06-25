import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  useTheme,
  type Theme,
  InputBase,
  IconButton,
  Chip,
  Link,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { type RowData } from '../../types/table';

const activityRows: RowData[] = [
  {
    id: '1',
    name: 'Pudgy Penguins',
    type: 'bid',
    from: '0x37...a02c',
    to: '-',
    price: 'Ξ 6.82',
    time: '6 s',
    image: 'https://i.seadn.io/gae/6n3...png',
    openseaVerificationStatus: 'verified',
  },
  {
    id: '2',
    name: 'Pudgy Penguins',
    type: 'bid',
    from: '0x4b...3324',
    to: '-',
    price: 'Ξ 6.82',
    time: '9 s',
    image: 'https://i.seadn.io/gae/6n3...png',
    openseaVerificationStatus: 'verified',
  },
  // ...more rows
];

// Custom renderers (same as before)
const CollectionCell = (row: RowData, theme: Theme) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Avatar
      src={row.image}
      alt={row.name}
      sx={{
        width: 32,
        height: 32,
        border: `2px solid ${
          theme.palette?.custom?.primaryLight ?? theme.palette.primary.main
        }`,
      }}
    />
    <Typography fontWeight={700} color="text.primary">
      {row.name}
    </Typography>
    {row.openseaVerificationStatus === 'verified' && (
      <Box
        component="span"
        sx={{
          ml: 0.5,
          color:
            theme.palette?.custom?.primaryLight ?? theme.palette.primary.main,
          fontSize: 18,
        }}
      >
        &#10003;
      </Box>
    )}
  </Box>
);

const TypeCell = (row: RowData) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    {row.type === 'bid' && (
      <Avatar
        src="https://opensea.io/static/images/logos/opensea.svg"
        alt="opensea"
        sx={{ width: 24, height: 24, bgcolor: 'transparent' }}
        variant="rounded"
      />
    )}
    <Typography fontWeight={700} textTransform="lowercase">
      {row.type}
    </Typography>
  </Box>
);

const PriceCell = (row: RowData, theme: Theme) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
    <img
      src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
      alt="eth"
      width={16}
      height={16}
      style={{ marginRight: 4, verticalAlign: 'middle' }}
    />
    <Typography fontWeight={700} color="text.primary">
      {row.price?.replace('Ξ', '').trim()}
    </Typography>
  </Box>
);

const AddressCell = (address?: string) => (
  <Typography
    fontFamily="monospace"
    fontWeight={500}
    color="text.primary"
    sx={{ whiteSpace: 'nowrap' }}
  >
    {address || '-'}
  </Typography>
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

  const handleDelete = (idx: number) => {
    setFilters((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleClear = () => setFilters([]);

  return (
    <Paper
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 3,
        p: 3,
        border: '1px solid',
        borderColor: 'divider',
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

      {/* Table */}
      <TableContainer
        sx={{
          maxHeight: 420,
          borderRadius: 2,
          border: `1px solid ${
            theme.palette?.custom?.borderblack01 ?? theme.palette.divider
          }`,
          background: theme.palette.background.default,
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  background: theme.palette.background.paper,
                  fontWeight: 700,
                }}
              >
                #
              </TableCell>
              <TableCell
                sx={{
                  background: theme.palette.background.paper,
                  fontWeight: 700,
                }}
              >
                Collection Name
              </TableCell>
              <TableCell
                sx={{
                  background: theme.palette.background.paper,
                  fontWeight: 700,
                }}
              >
                Type
              </TableCell>
              <TableCell
                sx={{
                  background: theme.palette.background.paper,
                  fontWeight: 700,
                }}
              >
                Floor Price
              </TableCell>
              <TableCell
                sx={{
                  background: theme.palette.background.paper,
                  fontWeight: 700,
                }}
              >
                From
              </TableCell>
              <TableCell
                sx={{
                  background: theme.palette.background.paper,
                  fontWeight: 700,
                }}
              >
                To
              </TableCell>
              <TableCell
                sx={{
                  background: theme.palette.background.paper,
                  fontWeight: 700,
                }}
              >
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activityRows.map((row, idx) => (
              <TableRow key={row.id ?? idx} hover>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{CollectionCell(row, theme)}</TableCell>
                <TableCell>{TypeCell(row)}</TableCell>
                <TableCell>{PriceCell(row, theme)}</TableCell>
                <TableCell>{AddressCell(row.from)}</TableCell>
                <TableCell>{AddressCell(row.to)}</TableCell>
                <TableCell>
                  <Typography fontWeight={700} color="text.primary">
                    {row.time}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Activity;
