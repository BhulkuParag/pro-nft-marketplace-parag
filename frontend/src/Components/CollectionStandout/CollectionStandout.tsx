import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './CollectionStandout.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import {
  fetchStandoutHoldersDataRequest,
  fetchStandoutListingDataRequest,
  fetchStandoutSaleDataRequest,
  fetchStandoutTransferDataRequest,
} from '../../features/collection/collectionSlice';
import type { RootState } from '../../app/store';
import { useParams } from 'react-router-dom';
import StandoutCard from './StandoutCard';
const ethIcon = 'https://marketplace.polycruz.io/eth.svg';

const cardStyle = {
  background: '#232532',
  borderRadius: '12px',
  flex: 1,
  minWidth: 320,
  width: '100%',
  //   maxWidth: 400,
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid rgb(100, 116, 139)',
};

const headerStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#2c2f3a',
  borderTopLeftRadius: '14px',
  borderTopRightRadius: '14px',
  px: 2,
  py: 1.5,
};

export const itemStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'background.default',
  borderTop: '1px solid',
  borderColor: 'divider',
  px: 1.5,
  py: 1,
  '&:hover': {
    // backgroundColor: 'divider',
    opacity: 0.8,
  },
};

const CollectionStandout = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const tabData = useSelector((state: RootState) => state.collection.tabData);

  useEffect(() => {
    if (param.id) {
      dispatch(
        fetchStandoutSaleDataRequest({ contract: param.id, type: 'sale' })
      );
      dispatch(
        fetchStandoutListingDataRequest({ contract: param.id, type: 'listing' })
      );
      dispatch(
        fetchStandoutTransferDataRequest({
          contract: param.id,
          type: 'transfer',
        })
      );
      dispatch(
        fetchStandoutHoldersDataRequest({ contract: param.id, type: 'holders' })
      );
    }
  }, [param]);

  const standout = useMemo(() => tabData?.standout ?? {}, []);
  const topHolders = useMemo(() => standout?.holders?.topTraders ?? [], []);
  const topSales = useMemo(() => standout?.sale?.activities ?? [], []);
  const listings = useMemo(() => standout?.listing?.activities ?? [], []);
  const transfers = useMemo(() => standout?.transfer?.activities ?? [], []);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 3,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Holders Card */}
      <Box sx={cardStyle}>
        <Box sx={headerStyle}>
          <Typography
            variant="subtitle2"
            sx={{ color: '#fff', fontWeight: 400 }}
          >
            Top Holders
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: '#bfc3d0', fontWeight: 400 }}
          >
            7 Days
          </Typography>
        </Box>
        {topHolders?.map((item: any) => (
          <Box key={item?.address} sx={itemStyle} className="item">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Typography
                sx={{ color: 'text.primary', fontWeight: 500, fontSize: 14 }}
              >
                {item?.address}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  sx={{ color: 'text.primary', fontWeight: 500, fontSize: 14 }}
                >
                  {item?.volume}
                </Typography>
                <img src={ethIcon} alt="ETH" width={9} height={9} />
              </Box>
              <Typography sx={{ color: '#bfc3d0', fontSize: 12 }}>
                {item?.count}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      {/* Top Sales Card */}
      <Box sx={cardStyle}>
        <Box sx={headerStyle}>
          <Typography
            variant="subtitle2"
            sx={{ color: '#fff', fontWeight: 400 }}
          >
            Top Sales
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: '#bfc3d0', fontWeight: 400 }}
          >
            7 Days
          </Typography>
        </Box>
        {topSales?.map((item: any) => (
          <StandoutCard item={item} key={item?.token?.tokenId} />
        ))}
      </Box>
      {/* Listing Card */}
      <Box sx={cardStyle}>
        <Box sx={headerStyle}>
          <Typography
            variant="subtitle1"
            sx={{ color: '#fff', fontWeight: 400 }}
          >
            Top Listing
          </Typography>
        </Box>
        {listings?.map((item: any) => (
          <StandoutCard item={item} key={item?.token?.tokenId} />
        ))}
      </Box>
      {/* Transfer Card */}
      <Box sx={cardStyle}>
        <Box sx={headerStyle}>
          <Typography
            variant="subtitle1"
            sx={{ color: '#fff', fontWeight: 400 }}
          >
            Transfer
          </Typography>
        </Box>
        {transfers?.map((item: any) => (
          <StandoutCard item={item} key={item?.token?.tokenId} />
        ))}
      </Box>
    </Box>
  );
};

export default CollectionStandout;
