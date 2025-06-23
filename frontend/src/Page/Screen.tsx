import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import { AGGridTable } from '../../@ui-component/Comman/AGGridTable';
import type { ColDef } from 'ag-grid-community';
import type { RowData } from '../types/table';
import { AddSortIcon, InfoIconSortIcon } from '../utils/Table/headerRenderer';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const infoItems = [
  { label: 'Floor Price', value: 'Ξ 11.40' },
  { label: 'Rarity', value: '66.799' },
  { label: 'Rarity Rank', value: '3,900' },
  { label: 'Owner', value: '0x29...a20b' },
  { label: 'Token ID', value: '4938' },
  { label: 'Supply', value: '9,998' },
];
const BlurTypeRenderer = (params: any) => (
  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    <img
      src="https://analytic.polycruz.io/_next/image?url=https%3A%2F%2Fblur.io%2Ffavicons%2F180.png&w=48&q=75"
      alt="blur"
      width={22}
      height={22}
      style={{ marginRight: 4, verticalAlign: 'middle' }}
    />
    <span style={{ textTransform: 'lowercase', fontWeight: 700 }}>
      {params.value}
    </span>
  </span>
);

const PriceRenderer = (params: any) => (
  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
    <img
      src="https://marketplace.polycruz.io/eth.svg"
      alt="eth"
      width={16}
      height={16}
      style={{ marginRight: 4, verticalAlign: 'middle' }}
    />
    <span style={{ fontWeight: 700 }}>
      {params.value.replace('Ξ', '').trim()}
    </span>
  </span>
);

const AddressRenderer = (params: any) =>
  params.value ? (
    <span style={{ fontFamily: 'monospace', fontWeight: 500 }}>
      {params.value}
    </span>
  ) : (
    <span>...</span>
  );

const activityColumns: ColDef<RowData>[] = [
  {
    headerName: 'Type',
    field: 'type',
    width: 100,
    cellRenderer: BlurTypeRenderer,
  },
  {
    headerName: 'From Address',
    field: 'from',
    width: 180,
    cellRenderer: AddressRenderer,
    headerComponent: InfoIconSortIcon,
  },
  {
    headerName: 'To Address',
    field: 'to',
    width: 180,
    cellRenderer: AddressRenderer,
    headerComponent: AddSortIcon,
  },
  {
    headerName: 'Price',
    field: 'price',
    width: 100,
    cellRenderer: PriceRenderer,
    headerComponent: AddSortIcon,
  },
  {
    headerName: 'Time',
    field: 'time',
    width: 140,
    headerComponent: AddSortIcon,
    cellStyle: { fontWeight: 700, textAlign: 'right' },
  },
];
const activityRows: RowData[] = [
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '...',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '...',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '...',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '  ...  ',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '  ...  ',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '  ...  ',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '  ...  ',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '  ...  ',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '  ...  ',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  {
    type: 'Ask',
    from: '0x2946...98a20b',
    to: '  ...  ',
    price: 'Ξ 11.40',
    time: '23 minutes ago',
  },
  // ...add more rows as needed
];

const traits = [
  { label: 'TRAIT COUNT', value: '6', rarity: '5326 (53.3%)' },
  { label: 'MOUTH', value: 'Phoneme ooo', rarity: '256 (2.6%)' },
  { label: 'Hat', value: 'Safari', rarity: '182 (1.8%)' },
  { label: 'Fur', value: 'Golden Brown', rarity: '779 (7.8%)' },
  { label: 'Eyes', value: 'Coins', rarity: '479 (4.8%)' },
  { label: 'Clothes', value: 'Wool Turtleneck', rarity: '240 (2.4%)' },
  { label: 'Background', value: 'Blue', rarity: '1242 (12.4%)' },
  { label: 'APECOIN STAKED', value: '0 - 1 ApeCoin', rarity: '8548 (85.5%)' },
];

const Screen: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: 'background.default',
        p: 2,
        minHeight: '100vh',
      }}
    >
      {/* Left: NFT Image */}
      <Box
        sx={{
          flex: '0 0 480px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          bgcolor: 'background.paper',
          borderRadius: 4,
          p: 2,
          minHeight: 600,
        }}
      >
        {/* Badge Row */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            src="https://cryptopunks.app/favicon.ico"
            alt="Collection"
            sx={{ width: 32, height: 32, mr: 1 }}
          />
          <Chip
            label="erc721"
            sx={{
              bgcolor: '#6C63B5',
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 2,
              height: 32,
            }}
          />
        </Box>

        <Box
          component="img"
          src="https://cryptopunks.app/cryptopunks/cryptopunk7703.png"
          alt="NFT"
          sx={{
            width: 440,
            height: 440,
            borderRadius: 4,
            objectFit: 'cover',
            boxShadow: 3,
          }}
        />
        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mt: 3, width: '100%' }}>
          {/* Buy Now Button Group */}
          <Box
            component="div"
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              borderRadius: 3,
              border: '2px solid #A6A6B9',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              backgroundColor: 'custom.ButtonPrimary',
              '&:hover': { bgcolor: 'custom.ButtonPrimary' },
              // justifyContent: 'space-between',
            }}
          >
            <Button
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                paddingInline: 3,
                // fontSize: 20,
              }}
            >
              <span> Buy Now</span>
              <span style={{ paddingLeft: '2px' }}>
                <img
                  src="https://marketplace.polycruz.io/eth.svg"
                  alt="eth"
                  height={10}
                  width={10}
                />
              </span>
              <span style={{ paddingLeft: '15px' }}> 10.99</span>
            </Button>

            <IconButton>
              <LocalGroceryStoreIcon />
            </IconButton>
          </Box>

          {/* Make Offer Button */}
          <Button
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: 20,
              px: 5,
              borderRadius: 3,
              height: 56,
              bgcolor: 'transparent',
              border: '2px solid #A6A6B9',
              textTransform: 'none',

              flex: 1,
              minWidth: 0,
              '&:hover': { bgcolor: '#232336' },
            }}
          >
            Make Offer
          </Button>
        </Box>
      </Box>
      {/* Right: Info, Traits, Activity */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Info Row */}
        <Paper
          sx={{
            bgcolor: 'transparent',
            borderRadius: 3,
            p: 0,
            border: '2px solid #44455A',

            boxShadow: 'none',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {infoItems.map((item) => (
              <Box
                key={item.label}
                sx={{
                  p: 2,
                  textAlign: 'center',

                  borderRight:
                    item.label !== 'Supply' ? '1px solid #44455A' : 'none',
                }}
              >
                <Typography color="text.primary" fontSize={12}>
                  {item.label}
                </Typography>
                <Typography
                  color="text.primary"
                  fontWeight={700}
                  fontSize={15}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  {item.label === 'Floor Price'}
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Traits Section */}
        <Paper
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            p: 3,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography fontWeight={700} fontSize={22} mb={2}>
            Traits ({traits.length})
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
            }}
          >
            {traits.map((trait) => (
              <Box
                key={trait.label}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'background.default',
                  border: '1px solid #44455A',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1,
                  ':hover': {
                    borderColor: 'text.primary',
                  },
                }}
              >
                <Box>
                  <Typography
                    color="text.primary"
                    fontSize={13}
                    fontWeight={600}
                  >
                    {trait.label}
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={16}
                    color="text.primary"
                  >
                    {trait.value}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography
                    color="text.primary"
                    fontSize={13}
                    fontWeight={600}
                  >
                    RARITY
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={16}
                    color="text.primary"
                  >
                    {trait.rarity}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Activity Section */}
        <Paper
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            p: 3,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography fontWeight={700} fontSize={22} mb={2}>
            Activity
          </Typography>
          <Box sx={{ maxHeight: 300, overflow: 'auto', display: 'flex' }}>
            <AGGridTable columnDefs={activityColumns} rowData={activityRows} />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Screen;
