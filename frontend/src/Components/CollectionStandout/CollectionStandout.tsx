import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './CollectionStandout.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchStandoutHoldersDataRequest,
  fetchStandoutListingDataRequest,
  fetchStandoutSaleDataRequest,
  fetchStandoutTransferDataRequest,
} from '../../features/collection/collectionSlice';
import type { RootState } from '../../app/store';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
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

const itemStyle = {
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

  const standout = tabData?.standout ?? {};
  const topHolders = standout?.holders?.topTraders ?? [];
  const topSales = standout?.sale?.activities ?? [];
  const listings = standout?.listing?.activities ?? [];
  const transfers = standout?.transfer?.activities ?? [];

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
          <Box key={item?.token?.tokenId} sx={itemStyle} className="item">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar
                src={item?.fillSource?.icon}
                alt={String(item?.token?.tokenId)}
                sx={{ width: 36, height: 36, mr: 1 }}
                variant="square"
              />
              <div className="flex flex-col">
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'text.primary', fontWeight: 500, fontSize: 16 }}
                >
                  {item?.collection?.collectionName ?? ''}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'custom.grey01', fontWeight: 500, fontSize: 14 }}
                >
                  {'#' + (item?.token?.tokenId ?? '')}
                </Typography>
              </div>
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
                  {item?.price?.amount?.decimal}
                </Typography>
                <img src={ethIcon} alt="ETH" width={9} height={9} />
              </Box>
              <Typography sx={{ color: '#bfc3d0', fontSize: 12 }}>
                {item?.timestamp
                  ? formatDistanceToNow(new Date(item.timestamp * 1000), {
                      addSuffix: true,
                    })
                  : ''}
              </Typography>
            </Box>
          </Box>
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
          <Box key={item?.token?.tokenId} sx={itemStyle} className="item">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar
                src={item?.fillSource?.icon}
                alt={String(item?.token?.tokenId)}
                sx={{ width: 36, height: 36, mr: 1 }}
                variant="square"
              />
              <div className="flex flex-col">
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'text.primary', fontWeight: 500, fontSize: 16 }}
                >
                  {item?.collection?.collectionName ?? ''}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'custom.grey01', fontWeight: 500, fontSize: 14 }}
                >
                  {'#' + (item?.token?.tokenId ?? '')}
                </Typography>
              </div>
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
                  {item?.price?.amount?.decimal}
                </Typography>
                <img src={ethIcon} alt="ETH" width={9} height={9} />
              </Box>
              <Typography sx={{ color: '#bfc3d0', fontSize: 12 }}>
                {item?.timestamp
                  ? formatDistanceToNow(new Date(item.timestamp * 1000), {
                      addSuffix: true,
                    })
                  : ''}
              </Typography>
            </Box>
          </Box>
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
          <Box key={item?.token?.tokenId} sx={itemStyle} className="item">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar
                src={item?.fillSource?.icon}
                alt={String(item?.token?.tokenId)}
                sx={{ width: 36, height: 36, mr: 1 }}
                variant="square"
              />
              <div className="flex flex-col">
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'text.primary', fontWeight: 500, fontSize: 16 }}
                >
                  {item?.collection?.collectionName ?? ''}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'custom.grey01', fontWeight: 500, fontSize: 14 }}
                >
                  {'#' + (item?.token?.tokenId ?? '')}
                </Typography>
              </div>
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
                  {item?.price?.amount?.decimal}
                </Typography>
                <img src={ethIcon} alt="ETH" width={9} height={9} />
              </Box>
              <Typography sx={{ color: '#bfc3d0', fontSize: 12 }}>
                {item?.timestamp
                  ? formatDistanceToNow(new Date(item.timestamp * 1000), {
                      addSuffix: true,
                    })
                  : ''}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CollectionStandout;
