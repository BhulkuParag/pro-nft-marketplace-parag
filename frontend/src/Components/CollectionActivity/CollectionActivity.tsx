import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Chip,
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AGGridTable from '../../../@ui-component/Comman/AGGridTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchActivityDataRequest,
  setSelectedActivityFilter,
} from '../../features/collection/collectionSlice';
import type { RootState } from '../../app/store';
import Loading from '../../../@ui-component/Comman/Loading';
import SearchBar from '../ui/SearchBar';
import liveData from '../../assets/images/gif/live.gif';
import BarFilterIcon from '../Icon/BarFilterIcon';
import FilterSidebar from '../ui/FilterSidebar';

// Example filter state
const FILTERS = [
  { label: 'Event', value: 'sale' },
  { label: 'Event', value: 'list' },
  { label: 'Event', value: 'transfer' },
  { label: 'Event', value: 'mint' },
];

const CollectionActivity = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const {
    activeTab,
    columnDefsMap,
    tabData,
    loading,
    activityFilters,
    selectedActivityFilter,
  } = useSelector((state: RootState) => state.collection);

  const columnDefs = useMemo(
    () => columnDefsMap[activeTab],
    [columnDefsMap, activeTab]
  );

  const rowData = useMemo(() => tabData[activeTab] ?? [], [tabData, activeTab]);

  const filters = activityFilters.filter((f) =>
    selectedActivityFilter.includes(f.value)
  );

  const handleDelete = (value: string) => {
    if (value === 'sale') return;
    const newFilters = selectedActivityFilter.filter((v) => v !== value);
    dispatch(setSelectedActivityFilter(newFilters));
    dispatch(fetchActivityDataRequest());
  };

  const handleClear = () => {
    dispatch(setSelectedActivityFilter(['sale']));
    dispatch(fetchActivityDataRequest());
  };

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
          justifyContent: 'space-between',
          gap: 2,
          mb: 2,
          bgcolor: 'background.default',
          flexWrap: 'wrap',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap-reverse',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <IconButton
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              color: 'text.secondary',
              mb: 0.2,
            }}
            className="group"
            disableTouchRipple
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            <BarFilterIcon
              className={`w-5 h-5 group-hover:fill-[#A49BFF] fill-[#777E90] }`}
            />
          </IconButton>

          <Box
            sx={{
              // display: 'flex',
              // alignItems: 'center',
              // border: `1px solid ${theme.palette.divider}`,
              // borderRadius: 2,
              // px: 1.5,
              // py: 0.5,
              // minWidth: 300,
              // bgcolor: 'background.default',
              flex: 1,
              maxWidth: 400,
            }}
          >
            <SearchBar
              placeholder="Search for items"
              backgroundColor="background.default"
            />
          </Box>

          <div className="justify-center items-center gap-1 inline-flex">
            <img className="w-5 h-5" alt="Live-data" src={liveData} />
            <div className="flex-col shrink-0 justify-center items-start inline-flex">
              <Typography
                sx={{
                  fontSize: 12,
                  color: 'custom.lightGrey',
                }}
              >
                LIVE DATA
              </Typography>
            </div>
          </div>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Typography
            color="text.primary"
            fontWeight={500}
            fontSize={16}
            sx={{ mr: 1 }}
          >
            Filter:
          </Typography>

          {filters.map((f, idx) => (
            <Chip
              variant="outlined"
              key={f.label + f.value}
              label={
                <Box component="span">
                  <Box
                    component="span"
                    sx={{ opacity: 0.7, fontSize: 13, color: 'text.primary' }}
                  >
                    {f.label}&nbsp;
                  </Box>
                  <Box
                    component="span"
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                  >
                    {f.value}
                  </Box>
                </Box>
              }
              slotProps={{
                root: {
                  sx: {
                    height: '26px',
                    paddingBlock: 0.8,
                    backgroundColor: '#353945',
                    ':hover': {
                      backgroundColor: theme.palette.custom.greyDark,
                    },
                  },
                },
              }}
              onDelete={() => handleDelete(f.value)}
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

          {filters.length > 0 && (
            <Link
              component="button"
              underline="none"
              sx={{
                color: 'custom.grey01',
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
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
        }}
      >
        {filterOpen && <FilterSidebar />}
        {loading ? (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Loading />
          </Box>
        ) : (
          <AGGridTable
            columnDefs={columnDefs}
            rowData={rowData}
            // loading={loading}
          />
        )}
      </Box>
    </Box>
  );
};

export default CollectionActivity;
