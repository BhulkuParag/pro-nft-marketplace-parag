import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CustomTab from '../../@ui-component/Comman/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../features/collection/collectionSlice';
import type { RootState } from '../app/store';
import CollectionOverview from '../Components/CollectionOverview/CollectionOverview';
import CollectionItems from '../Components/CollectionItems/CollectionItems';
import CollectionFooter from '../Components/CollectionFooter/CollectionFooter';
import CollectionStandout from '../Components/CollectionStandout/CollectionStandout';
import {
  Box,
  IconButton,
  Popover,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import AiValuation from './AiValuation';
import CollectionActivity from '../Components/CollectionActivity/CollectionActivity';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import CheckIcon from '@mui/icons-material/Check';
import SailingIcon from '@mui/icons-material/Sailing';
import BarChartIcon from '@mui/icons-material/BarChart';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import VerifiedIcon from '@mui/icons-material/Verified';
import '../Components/CollectionOverview/CollectionBanner.css';

export type TabKey =
  | 'overview'
  | 'items'
  | 'ai_valuation'
  | 'standout'
  | 'activity';

interface TabContent {
  label: string;
  value: TabKey;
  content?: React.ReactNode;
}

const Collection = () => {
  const theme = useTheme();
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refreshed, setRefreshed] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  useEffect(() => {
    if (refreshed) {
      const timer = setTimeout(() => setRefreshed(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [refreshed]);

  const handleDropdownOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const bannerDetails = [
    {
      title: 'Mutant Ape Yacht Club',
      likes: '467',
      icon: (
        <VerifiedIcon
          sx={{
            color: '#7367f0',
            width: '20px',
            height: '20px',
          }}
        />
      ),
      rank: 1,
      contractKind: 'erc721',
      onSale: 577,
      owner: 11828,
      totalSupply: 19697,
      floorPrice: 1.825,
      topBid: 5.08,
    },
  ];
  const dropdownItems = [
    {
      label: 'Floor Price',
      value: `${bannerDetails[0].floorPrice}`,
      icon: (
        <img
          src="https://marketplace.polycruz.io/eth.svg"
          alt="ETH"
          style={{
            width: 10,
            height: 10,
            verticalAlign: 'middle',
            marginLeft: 4,
          }}
        />
      ),
    },
    {
      label: 'Top Bid',
      value: `${bannerDetails[0].topBid}`,
      icon: (
        <img
          src="https://marketplace.polycruz.io/eth.svg"
          alt="ETH"
          style={{
            width: 10,
            height: 10,
            verticalAlign: 'middle',
            marginLeft: 4,
          }}
        />
      ),
    },
    {
      label: 'Best Offer',
      value: '3.27',
      icon: (
        <img
          src="https://marketplace.polycruz.io/eth.svg"
          alt="ETH"
          style={{
            width: 10,
            height: 10,
            verticalAlign: 'middle',
            marginLeft: 4,
          }}
        />
      ),
    },
    {
      label: 'Contract Type',
      value: bannerDetails[0].contractKind,
      icon: (
        <img
          src="https://marketplace.polycruz.io/eth.svg"
          alt="ETH"
          style={{
            width: 10,
            height: 10,
            verticalAlign: 'middle',
            marginLeft: 4,
          }}
        />
      ),
    },
    {
      label: 'Total Vol',
      value: '57.97651',
      extra: (
        <span
          style={{
            color: '#1bc47d',
            fontWeight: 500,
            fontSize: 14,
            marginLeft: 10,
          }}
        >
          1.01%
        </span>
      ),
    },
    { label: 'Market Cap', value: '30.69K' },
    { label: 'Owners', value: bannerDetails[0].owner },
    { label: 'Supply', value: '19551' },
    { label: 'Rank', value: bannerDetails[0].rank },
    { label: 'Holders', value: '3,537' },
    { label: 'Royalty', value: '5%' },
    {
      label: 'Floor Sale',
      value: '1.79',
      extra: (
        <span
          style={{
            color: '#1bc47d',
            fontWeight: 500,
            fontSize: 13,
            marginLeft: 4,
          }}
        >
          1.02%
        </span>
      ),
    },
    { label: 'Minted Time', value: '7 months ago' },
  ];
  const tabs = useMemo<Record<TabKey, TabContent>>(() => {
    return {
      overview: {
        label: 'Overview',
        value: 'overview',
        content: <CollectionOverview />,
      },
      items: {
        label: 'Items',
        value: 'items',
        content: <CollectionItems />,
      },
      ai_valuation: {
        label: 'AI Valuation',
        value: 'ai_valuation',
        content: <AiValuation />,
      },
      standout: {
        label: 'Standout',
        value: 'standout',
        content: <CollectionStandout />,
      },
      activity: {
        label: 'Activity',
        value: 'activity',
        content: <CollectionActivity />,
      },
    };
  }, []);
  const dispatch = useDispatch();
  const activeTab = useSelector(
    (state: RootState) => state.collection.activeTab
  ) as TabKey;

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      dispatch(setActiveTab(newValue));
    },
    [dispatch]
  );

  return (
    <Box
      component={'div'}
      sx={{
        width: '100%',
      }}
    >
      {/*Banner Section Section*/}
      <Box className="banner-section">
        <Box className="banner-thumbnail">
          <img
            src="https://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuAEcOUGySakBXk7K81S4M3usl4TSfYfHL%2BlFeG2FU1xA%2FT2O0uFyODPcfGEyTKOBRxR1Vvqel2SiykN8YLzPJob0lRVCJRwf0dlZuyFZqoER381lhyfETGxSzb4xu9S3P03z2rJ9xwQ%2BbVRwbl51tBeaqMzjQYCpZoIlaacibJjyDtPy9wMtrl86k%2FjbTEQThGg%3D%3D"
            alt="thumbnail"
            className="banner-image"
          />
        </Box>
        <Box
          className="banner-content"
          sx={{
            backgroundColor: theme.palette.custom.secondaryDark,
            position: 'relative',
            paddingInline: {
              xs: '10px',
              md: '125px 20px',
            },
            paddingBlock: {
              xs: '20px',
              md: '5px',
            },
          }}
        >
          <img
            src="https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAL4v83jn3jtpVIO3s%252BzOvztJqa5dvM8sRQqWqJxNeLprZLk7t%252FkKV14mfw6ax5Z%252FAKVk5y7e4bemc5zTfUUG5yDP0SFukSjUsdQGmQKcKezFnGdbphLT3%252Fk9v3OUYIaaEVzHYKUgQoV%252Bq8aKahdtgXphuoQwP84%252FuONfP%252F4i3OUkm%252FpudGx8XstMS9yAZrtbTGKHRxTKwkJCjb7v6qI5VO6ro4nvj0F16%252FRcLaGeY7WqfJS3JVCa%252FacTF0MWbMnllg47eFISdt%252Fu8B7dkR53OO4%253D%3Fwidth%3D250&w=640&q=75"
            alt="thumbnail"
            style={{ borderRadius: '100%', width: '96px', height: '96px' }}
            className="banner-logo"
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
                gap: {
                  xs: '10px',
                  md: '0',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: 'max-content',
                  paddingRight: '15px',
                  borderRight: {
                    md: `1px solid ${theme.palette.text.primary}`,
                  },
                }}
              >
                <Typography
                  variant="h3"
                  color="text.primary"
                  sx={{ fontSize: '24px', fontWeight: 600 }}
                >
                  {bannerDetails[0].title}
                </Typography>
                {bannerDetails[0].icon}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '10px',
                  gap: '10px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Tooltip title="Add to Favourite" arrow placement="top">
                    <IconButton
                      onClick={() => setLiked((liked) => !liked)}
                      size="small"
                      style={{ padding: 0 }}
                    >
                      {liked ? (
                        <FavoriteIcon
                          sx={{
                            color: '#fe749b',
                            width: '20px',
                            height: '20px',
                          }}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          sx={{
                            color: theme.palette.custom.thirdText,
                            width: '20px',
                            height: '20px',
                          }}
                        />
                      )}
                    </IconButton>
                  </Tooltip>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontSize: '12px' }}
                  >
                    {bannerDetails[0].likes}
                  </Typography>
                </Box>

                <Tooltip title="Click to Copy Address" arrow placement="top">
                  <IconButton
                    onClick={() => setCopied(true)}
                    size="small"
                    style={{ padding: 0 }}
                  >
                    {copied ? (
                      <CheckIcon
                        sx={{
                          color: theme.palette.custom.thirdText,
                          width: '20px',
                          height: '20px',
                        }}
                      />
                    ) : (
                      <ContentCopyIcon
                        sx={{
                          color: theme.palette.custom.thirdText,
                          width: '20px',
                          height: '20px',
                        }}
                      />
                    )}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Refresh Metadata" arrow placement="top">
                  <IconButton onClick={() => setRefreshed(true)} size="small">
                    {refreshed ? (
                      <CheckIcon
                        sx={{
                          color: theme.palette.custom.thirdText,
                          width: '20px',
                          height: '20px',
                        }}
                      />
                    ) : (
                      <RotateLeftIcon
                        sx={{
                          color: theme.palette.custom.thirdText,
                          width: '20px',
                          height: '20px',
                        }}
                      />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginInline: {
                    md: 'auto 20px',
                  },
                }}
              >
                <Tooltip title="OpenSea" arrow placement="top">
                  <IconButton size="small">
                    <SailingIcon sx={{ color: theme.palette.text.primary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Stats" arrow placement="top">
                  <IconButton size="small">
                    <BarChartIcon sx={{ color: theme.palette.text.primary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Website" arrow placement="top">
                  <IconButton size="small">
                    <LanguageIcon sx={{ color: theme.palette.text.primary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Discord" arrow placement="top">
                  <IconButton size="small">
                    <ChatIcon sx={{ color: theme.palette.text.primary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Twitter" arrow placement="top">
                  <IconButton size="small">
                    <TwitterIcon sx={{ color: theme.palette.text.primary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Instagram" arrow placement="top">
                  <IconButton size="small">
                    <InstagramIcon sx={{ color: theme.palette.text.primary }} />
                  </IconButton>
                </Tooltip>
                <Box
                  sx={{
                    borderLeft: `1px solid ${theme.palette.custom.thirdText}`,
                    height: '24px',
                    mx: 1,
                  }}
                />
                <Tooltip title="Share" arrow placement="top">
                  <IconButton size="small">
                    <ShareIcon sx={{ color: theme.palette.text.primary }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
              }}
            >
              <Box
                className="data-list"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}
              >
                <Box
                  className="data-item"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    backgroundColor: theme.palette.custom.borderblack01,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="custom.thirdText"
                    sx={{ fontSize: '12px' }}
                  >
                    Rank
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontSize: '12px' }}
                  >
                    {bannerDetails[0].rank}
                  </Typography>
                </Box>
                <Box
                  className="data-item"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    backgroundColor: theme.palette.custom.borderblack01,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="custom.thirdText"
                    sx={{ fontSize: '12px' }}
                  >
                    Contract Kind
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontSize: '12px' }}
                  >
                    {bannerDetails[0].contractKind}
                  </Typography>
                </Box>
                <Box
                  className="data-item"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    backgroundColor: theme.palette.custom.borderblack01,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="custom.thirdText"
                    sx={{ fontSize: '12px' }}
                  >
                    On Sale
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontSize: '12px' }}
                  >
                    {bannerDetails[0].onSale}
                  </Typography>
                </Box>
                <Box
                  className="data-item"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    backgroundColor: theme.palette.custom.borderblack01,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="custom.thirdText"
                    sx={{ fontSize: '12px' }}
                  >
                    Owner
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontSize: '12px' }}
                  >
                    {bannerDetails[0].owner}
                  </Typography>
                </Box>
                <Box
                  className="data-item"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    backgroundColor: theme.palette.custom.borderblack01,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="custom.thirdText"
                    sx={{ fontSize: '12px' }}
                  >
                    Total Supply
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontSize: '12px' }}
                  >
                    {bannerDetails[0].totalSupply}
                  </Typography>
                </Box>
              </Box>
              {/* Floor Price & Top Bid Section */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1,
                  py: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'custom.thirdText', fontWeight: 500 }}
                >
                  Floor Price
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'text.primary', fontWeight: 700, mx: 0.5 }}
                >
                  {bannerDetails[0].floorPrice}
                </Typography>
                <img
                  src="https://marketplace.polycruz.io/eth.svg"
                  alt="ETH"
                  style={{ width: 12, height: 12, marginRight: 12 }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'custom.thirdText', fontWeight: 500 }}
                >
                  Top Bid
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'text.primary', fontWeight: 700, mx: 0.5 }}
                >
                  {bannerDetails[0].topBid}
                </Typography>
                <img
                  src="https://marketplace.polycruz.io/eth.svg"
                  alt="ETH"
                  style={{ width: 12, height: 12, marginRight: 12 }}
                />
                <IconButton
                  sx={{
                    border: '1px solid #bdbdbd',
                    backgroundColor: theme.palette.custom.borderblack01,
                    borderRadius: 2,
                    width: 36,
                    height: 36,
                    ml: 1,
                  }}
                  onClick={handleDropdownOpen}
                >
                  <KeyboardArrowDownSharpIcon
                    sx={{ color: theme.palette.custom.lightPurple }}
                  />
                </IconButton>
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleDropdownClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <Box sx={{ p: 2 }}>
                    {dropdownItems.map((item, idx) => (
                      <Box
                        key={item.label}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          mb: idx === dropdownItems.length - 1 ? 0 : 2,
                        }}
                      >
                        <Typography
                          sx={{ color: 'text.secondary', fontSize: '14px' }}
                        >
                          {item.label}
                        </Typography>
                        <Typography
                          sx={{
                            color: 'text.primary',
                            fontSize: '14px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {item.value}
                          {item.icon}
                          {item.extra}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Popover>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <CustomTab
        tabs={Object.values(tabs)}
        handleChange={handleChange}
        selectedTab={activeTab}
      />
      <Box
        sx={{
          width: '100%',
          padding: '32px 20px',
        }}
      >
        {tabs[activeTab].content}
      </Box>
      <CollectionFooter />
    </Box>
  );
};

export default Collection;
