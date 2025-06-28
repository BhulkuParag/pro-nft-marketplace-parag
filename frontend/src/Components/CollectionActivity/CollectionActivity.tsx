import React, { useEffect, useMemo } from 'react';
import {
  Box,
  Typography,
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
import AGGridTable from '../../../@ui-component/Comman/AGGridTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivityDataRequest } from '../../features/collection/collectionSlice';
import type { RootState } from '../../app/store';
import Loading from '../../../@ui-component/Comman/Loading';

// Example filter state
const FILTERS = [
  { label: 'Event', value: 'Sale' },
  { label: 'Event', value: 'List' },
  { label: 'Event', value: 'Transfer' },
  { label: 'Event', value: 'Mint' },
];

const CollectionActivity: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { activeTab, columnDefsMap, tabData, loading } = useSelector(
    (state: RootState) => state.collection
  );
  const [filters, setFilters] = React.useState(FILTERS);

  const columnDefs = useMemo(
    () => columnDefsMap[activeTab],
    [columnDefsMap, activeTab]
  );

  const rowData = useMemo(() => tabData[activeTab] ?? [], [tabData, activeTab]);

  const handleDelete = (idx: number) => {
    setFilters((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleClear = () => setFilters([]);

  useEffect(() => {
    dispatch(fetchActivityDataRequest());
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.default',
        borderRadius: 3,
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
      {loading ? (
        <Loading />
      ) : (
        <AGGridTable
          columnDefs={columnDefs}
          rowData={rowData}
          // loading={loading}
        />
      )}
    </Box>
  );
};

export default React.memo(CollectionActivity);
