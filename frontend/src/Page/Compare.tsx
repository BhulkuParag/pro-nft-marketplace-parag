import DateFilter from '../../@ui-component/Comman/DateFilter';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { setTimeComapre } from '../features/home/homeSlice';
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

type StatLabel =
  | 'Average price'
  | 'Marketcap'
  | 'Volume'
  | 'Sales'
  | 'Traders'
  | 'Buyers'
  | 'Sellers'
  | 'Holders'
  | 'Holder 1'
  | 'Holder 2'
  | 'Holder 3 to 5'
  | 'Holder 6 to 9'
  | 'Holder 10 to 15'
  | 'Holder 16 to 25';

interface Collection {
  name: string;
  image: string;
  stats: Record<StatLabel, string>;
}

const Compare = () => {
  const dispatch = useDispatch();
  const { timeOptionsCompare, timeCompare } = useSelector(
    (state: RootState) => state.home
  );
  const handleDateFilterChange = useCallback(
    (date: string) => {
      if (timeCompare !== date) dispatch(setTimeComapre(date));
    },
    [dispatch, timeCompare]
  );

  // Dummy data for demonstration
  const collections: Collection[] = [
    {
      name: 'Pudgy Penguins',
      image:
        'https://i.seadn.io/gcs/files/8a26e3de0f309089cbb1e5ab969fc0bc.png?w=500&auto=format',
      stats: {
        'Average price': 'Ξ 0.00',
        Marketcap: '$0.00',
        Volume: '$0.00',
        Sales: '0.00',
        Traders: '0.00',
        Buyers: '0.00',
        Sellers: '0.00',
        Holders: '9.00',
        'Holder 1': '5.00',
        'Holder 2': '0.00',
        'Holder 3 to 5': '0.00',
        'Holder 6 to 9': '0.00',
        'Holder 10 to 15': '0.00',
        'Holder 16 to 25': '0.00',
      },
    },
    {
      name: 'Pudgy Penguins',
      image:
        'https://i.seadn.io/gcs/files/8a26e3de0f309089cbb1e5ab969fc0bc.png?w=500&auto=format',
      stats: {
        'Average price': 'Ξ 0.00',
        Marketcap: '$0.00',
        Volume: '$0.00',
        Sales: '0.00',
        Traders: '0.00',
        Buyers: '0.00',
        Sellers: '0.00',
        Holders: '9.00',
        'Holder 1': '5.00',
        'Holder 2': '0.00',
        'Holder 3 to 5': '0.00',
        'Holder 6 to 9': '0.00',
        'Holder 10 to 15': '0.00',
        'Holder 16 to 25': '0.00',
      },
    },
    {
      name: 'CryptoPunks',
      image:
        'https://www.larvalabs.com/public/images/cryptopunks/punk-variety-2x.png',
      stats: {
        'Average price': 'Ξ 0.00',
        Marketcap: '$0.00',
        Volume: '$314.03k',
        Sales: '3.00',
        Traders: '5.00',
        Buyers: '3.00',
        Sellers: '3.00',
        Holders: '3.84k',
        'Holder 1': '3.19k',
        'Holder 2': '516.00',
        'Holder 3 to 5': '337.00',
        'Holder 6 to 9': '78.00',
        'Holder 10 to 15': '46.00',
        'Holder 16 to 25': '27.00',
      },
    },
  ];

  const statLabels: StatLabel[] = [
    'Average price',
    'Marketcap',
    'Volume',
    'Sales',
    'Traders',
    'Buyers',
    'Sellers',
    'Holders',
    'Holder 1',
    'Holder 2',
    'Holder 3 to 5',
    'Holder 6 to 9',
    'Holder 10 to 15',
    'Holder 16 to 25',
  ];

  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Box
        sx={{
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
          sx={{ mb: 2, fontSize: '26px', color: 'text.primary' }}
        >
          Comparison Of NFT Collections
        </Typography>
        <DateFilter
          timeOptions={timeOptionsCompare}
          selectedTime={timeCompare}
          handleChange={handleDateFilterChange}
        />
      </Box>

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
                {collections.map((col) => (
                  <TableCell
                    key={col.name}
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
                        src={col.image}
                        alt={col.name}
                        sx={{ width: 40, height: 40, mr: 1, objectFit: 'cover' }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ color: 'text.primary', fontWeight: 600 }}
                      >
                        {col.name}
                      </Typography>
                      <IconButton
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
              {statLabels.map((label) => (
                <TableRow
                  key={label}
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <TableCell
                    sx={{ color: 'custom.grey01', fontWeight: 500, border: 0 }}
                  >
                    {label}
                  </TableCell>
                  {collections.map((col, idx) => (
                    <TableCell
                      key={col.name + idx}
                      align="center"
                      sx={{ color: 'text.primary', border: 0 }}
                    >
                      {col.stats[label]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Compare;
