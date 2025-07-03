import React, { useEffect, useMemo } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import AGGridTable from '../../@ui-component/Comman/AGGridTable';
import type { ColDef } from 'ag-grid-community';
import type { ItemDetailActivity } from '../types/table';
import { AddSortIcon, InfoIconSortIcon } from '../utils/Table/headerRenderer';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetailsDataRequest } from '../features/collection/collectionSlice';
import { useParams } from 'react-router-dom';
import type { RootState } from '../app/store';
import CollectionFooter from '../Components/CollectionFooter/CollectionFooter';

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

const activityColumns: ColDef<ItemDetailActivity>[] = [
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
const activityRows: ItemDetailActivity[] = [
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
  // { label: 'Clothes', value: 'Wool Turtleneck', rarity: '240 (2.4%)' },
  // { label: 'Background', value: 'Blue', rarity: '1242 (12.4%)' },
  // { label: 'APECOIN STAKED', value: '0 - 1 ApeCoin', rarity: '8548 (85.5%)' },
];

const Screen: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const id = params.id;
  const ItemDetails = useSelector(
    (state: RootState) => state.collection.itemDetails
  );

  const infoItems = useMemo(() => {
    return [
      {
        label: 'Floor Price',
        value: `Ξ ${ItemDetails.token?.collection.floorAskPrice.amount.decimal}`,
      },
      { label: 'Rarity', value: ItemDetails.token?.rarity },
      { label: 'Rarity Rank', value: ItemDetails.token?.rarityRank },
      {
        label: 'Owner',
        value: `${ItemDetails.token?.owner.slice(
          0,
          4
        )}...${ItemDetails.token?.owner.slice(-4)}`,
      },
      { label: 'Token ID', value: ItemDetails.token?.tokenId },
      { label: 'Supply', value: ItemDetails.token?.collection.tokenCount },
    ];
  }, [ItemDetails]);

  useEffect(() => {
    if (id) dispatch(fetchItemDetailsDataRequest(id));
  }, [id]);

  return (
    <div className="w-full h-auto">
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          backgroundColor: 'background.default',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'flex-start' },
          gap: { xs: 2, md: 1 },
          p: { xs: 1, md: 2 },
        }}
      >
        {/* Left: NFT Image */}
        <Box
          sx={{
            //flex: { xs: 'unset', md: '0 0 480px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            bgcolor: 'transparent',
            borderRadius: 4,
            p: { xs: 0, md: 2 },
            paddingLeft: { xs: 0, md: 0 },
            paddingTop: { xs: 0, md: 0 },
            minHeight: { xs: 'auto', md: 600 },
            width: { xs: '100%', md: '34%' },
            mb: { xs: 2, md: 0 },
          }}
        >
          {/* Badge Row */}
          <Typography
            fontSize={24}
            component={'h1'}
            paddingLeft={2}
            sx={{
              color: 'text.primary',
              mb: 0.5,
            }}
          >
            {ItemDetails.token?.collection?.name +
              ' ' +
              '#' +
              ItemDetails.token?.tokenId}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              mb: 2.5,
              pl: 2,
            }}
          >
            <Avatar
              src={ItemDetails.token?.collection.image}
              alt="Collection"
              sx={{ width: 36, height: 36, mr: 1, borderRadius: 0 }}
            />
            <Tooltip
              title={'Token Kind'}
              placement="top"
              sx={{
                cursor: 'pointer',
              }}
            >
              <Chip
                label={ItemDetails.token?.kind}
                size="small"
                sx={{
                  bgcolor: '#6C63B5',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 16,
                  height: 32,
                  borderRadius: 3,
                  cursor: 'pointer',
                }}
              />
            </Tooltip>
          </Box>

          <Box
            component="img"
            src={ItemDetails?.token?.image}
            loading="lazy"
            alt="NFT"
            sx={{
              width: '100%',
              borderRadius: 4,
              objectFit: 'cover',
            }}
          />
          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              gap: 2,
              mt: 3,
              width: '100%',
            }}
          >
            <Button
              sx={{
                flex: 1,
                justifyContent: 'space-between',
                color: 'white',
                fontWeight: 500,
                // px: { xs: 2, lg: 5 },
                p: 0,
                borderRadius: 3,
                height: 56,
                backgroundColor: '#4836FF',
                textTransform: 'initial',
                fontSize: 16,
              }}
              // endIcon={<LocalGroceryStoreIcon />}
            >
              <div className="w-full flex items-center justify-center lg:justify-start gap-2 pl-5 rounded-tl-xl rounded-bl-xl h-full hover:bg-[#4130EA]">
                <span>Buy Now</span>
                <span>
                  <img
                    src="https://marketplace.polycruz.io/eth.svg"
                    alt="eth"
                    height={10}
                    width={10}
                  />
                </span>
                <span>10.99</span>
              </div>
              <IconButton
                sx={{
                  width: 50,
                  py: 2,
                  color: 'white',
                  borderLeft: 1,
                  borderLeftColor: 'divider',
                  borderRadius: 0,
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                }}
              >
                <LocalGroceryStoreIcon />
              </IconButton>
            </Button>
            <Button
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                fontSize: 18,
                px: 5,
                borderRadius: 3,
                height: 56,
                bgcolor: 'transparent',
                border: '2px solid #A6A6B9',
                textTransform: 'none',
                flex: 1,
                '&:hover': { bgcolor: 'custom.greyDark' },
              }}
            >
              Make Offer
            </Button>
          </Box>
        </Box>
        {/* Right: Info, Traits, Activity */}
        <Box
          sx={{
            width: { xs: '100%', lg: '66%' },
            // flex: 1,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* Info Row */}
          <Paper
            sx={{
              bgcolor: 'transparent',
              borderRadius: 3,
              p: 0,
              border: '2px solid',
              borderColor: 'divider',
              boxShadow: 'none',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(6, 1fr)' },
                alignItems: 'center',
                width: '100%',
                bgcolor: 'background.paper',
              }}
            >
              {infoItems.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    borderRight:
                      item.label !== 'Supply' ? '1.9px solid' : 'none',
                    borderRightColor: 'divider',
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
                      flexWrap: 'wrap',
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
              p: 2,
              border: '2px solid',
              borderColor: 'divider',
            }}
            elevation={0}
          >
            <Typography fontWeight={400} fontSize={20} mb={2}>
              Traits ({traits.length})
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr ', md: 'repeat(3, 1fr)' },
                gap: 1,
              }}
            >
              {traits.map((trait) => (
                <Box
                  key={trait.label}
                  sx={{
                    py: 1,
                    px: 2,
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    border: '2px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    flexWrap: 'wrap',
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
                      // fontWeight={600}
                    >
                      {trait.label}
                    </Typography>
                    <Typography
                      // fontWeight={700}
                      fontSize={13}
                      color="text.primary"
                    >
                      {trait.value}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography
                      color="text.primary"
                      fontSize={13}
                      // fontWeight={600}
                    >
                      RARITY
                    </Typography>
                    <Typography
                      // fontWeight={700}
                      fontSize={13}
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
              border: '2px solid',
              borderColor: 'divider',
              maxHeight: 350,
              overflow: 'auto',
              scrollbarWidth: 'none',
            }}
            elevation={0}
          >
            <Typography fontWeight={700} fontSize={22} mb={2}>
              Activity
            </Typography>
            <AGGridTable columnDefs={activityColumns} rowData={activityRows} />
          </Paper>
        </Box>
      </Box>
      <CollectionFooter />
    </div>
  );
};

export default Screen;
