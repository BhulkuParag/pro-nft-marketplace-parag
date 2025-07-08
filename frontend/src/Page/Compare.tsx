import DateFilter from '../../@ui-component/Comman/DateFilter';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { setCompareList, setTimeComapre } from '../features/home/homeSlice';
import { useCallback } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  IconButton,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Compare = () => {
  const dispatch = useDispatch();
  const { timeOptionsCompare, timeCompare, compareList } = useSelector(
    (state: RootState) => state.home
  );
  const handleDateFilterChange = useCallback(
    (date: string) => {
      if (timeCompare !== date) dispatch(setTimeComapre(date));
    },
    [dispatch, timeCompare]
  );

  const statLabels = [
    { label: 'Average price', name: 'Average price' },
    { label: 'Marketcap', name: 'Marketcap' },
    { label: 'Volume', name: 'volume' },
    { label: 'Sales', name: 'sales' },
    { label: 'Traders', name: 'traders' },
    { label: 'Buyers', name: 'buyers' },
    { label: 'Sellers', name: 'sellers' },
    { label: 'Holders', name: 'holders' },
    { label: 'Holder 1', name: 'holder 1' },
    { label: 'Holder 2', name: 'holder 2' },
    { label: 'Holder 3 to 5', name: 'holder 3 to 5' },
    { label: 'Holder 6 to 9', name: 'holder 6 to 9' },
    { label: 'Holder 10 to 15', name: 'holder 10 to 15' },
    { label: 'Holder 16 to 25', name: 'holder 16 to 25' },
  ];

  const handleDelete = useCallback(
    (name: string) => {
      if (compareList.length === 1) {
        dispatch(setCompareList([]));
      } else
        dispatch(
          setCompareList(compareList.filter((col) => col.name !== name))
        );
    },
    [dispatch, compareList]
  );

  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          mb: 3,
        }}
      >
        <Typography
          fontWeight={600}
          variant="h4"
          sx={{ fontSize: '26px', color: 'text.primary' }}
        >
          Comparison Of NFT Collections
        </Typography>
        <DateFilter
          wantBorder
          timeOptions={timeOptionsCompare}
          selectedTime={timeCompare}
          handleChange={handleDateFilterChange}
        />
      </Box>

      {compareList.length > 1 ? (
        <Box
          sx={{
            width: '100%',
            overflowX: 'auto',
            bgcolor: 'background.default',
            borderRadius: 2,
          }}
        >
          <TableContainer
            component={Paper}
            sx={{ bgcolor: 'background.default', boxShadow: 'none' }}
          >
            <Table>
              <TableHead
                sx={{
                  bgcolor: 'divider',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      minWidth: 180,
                      border: 0,
                    }}
                  >
                    Collection Name
                  </TableCell>
                  {compareList?.map((col) => (
                    <TableCell
                      key={col?.name}
                      align="center"
                      sx={{ color: 'text.primary', fontWeight: 600, border: 0 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1,
                        }}
                      >
                        <Box
                          component={'img'}
                          src={col?.image}
                          alt={col?.name}
                          sx={{
                            width: 40,
                            height: 40,
                            mr: 1,
                            objectFit: 'cover',
                          }}
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{ color: 'text.primary', fontWeight: 600 }}
                        >
                          {col?.name}
                        </Typography>
                        <IconButton
                          onClick={() => handleDelete(col?.name)}
                          size="small"
                          sx={{ ml: 1, color: 'text.secondary' }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {statLabels.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <TableCell
                      sx={{
                        color: 'custom.grey01',
                        fontWeight: 500,
                        border: 0,
                      }}
                    >
                      {item.label}
                    </TableCell>
                    {compareList?.map((col, idx) => (
                      <TableCell
                        key={col?.name + idx}
                        align="center"
                        sx={{ color: 'text.primary', border: 0 }}
                      >
                        {col[item.name] ?? ''}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <div className="w-full flex justify-center items-center">
          <Typography
            sx={{
              color: 'text.primary',
            }}
          >
            For comparison, Add minimum 2 Collection and maximum 5 Collection
          </Typography>
        </div>
      )}
    </Box>
  );
};

export default Compare;
