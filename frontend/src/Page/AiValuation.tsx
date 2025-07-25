import {
  useTheme,
  Box,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { useCallback, useEffect, useMemo } from 'react';
import {
  fetchAiValuationEstimateDataRequest,
  fetchAiValuationLoadDataRequest,
  setAi_valuation_tokenId,
} from '../features/collection/collectionSlice';
import { useParams } from 'react-router-dom';
import Loading from '../@ui-component/Comman/Loading';

const AiValuation = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();
  const aiValuationLoad = useSelector(
    (state: RootState) => state.collection.aiValuationLoad
  );
  const ai_valuation_tokenId = useSelector(
    (state: RootState) => state.collection.ai_valuation_tokenId
  );
  const tabData = useSelector((state: RootState) => state.collection.tabData);
  const loading = useSelector((state: RootState) => state.collection.loading);

  const card = useMemo(() => {
    return [
      {
        token: {
          title: tabData?.ai_valuation?.metadata?.name ?? 'NFT Name',
          token_id: tabData?.ai_valuation?.metadata?.token_id ?? 'Token ID',
          contract_address:
            tabData?.ai_valuation?.metadata?.address ?? 'Contract Address',
          image: tabData?.ai_valuation?.metadata?.token_image_url,
        },
        detail: [
          {
            title: 'Price Estimate',
            value:
              Number(
                tabData?.ai_valuation?.metric_values?.price_estimate?.value
              ).toFixed(2) ?? '0.00',
          },
          {
            title: 'Price Estimate Upper Bound',
            value:
              Number(
                tabData?.ai_valuation?.metric_values?.price_estimate_upper_bound
                  ?.value
              ).toFixed(2) ?? '0.00',
          },
          {
            title: 'Price Estimate Lower Bound',
            value:
              Number(
                tabData?.ai_valuation?.metric_values?.price_estimate_lower_bound
                  ?.value
              ).toFixed(2) ?? '0.00',
          },
          {
            title: 'Prediction Percentile',
            value:
              Number(
                tabData?.ai_valuation?.metric_values?.prediction_percentile
                  ?.value
              ).toFixed(2) ?? '0.00',
          },
          {
            title: 'Collection Drivers',
            value:
              Number(
                tabData?.ai_valuation?.metric_values?.collection_drivers?.value
              ).toFixed(2) ?? '0.00',
          },
          {
            title: 'NFT Sales Drivers',
            value:
              Number(
                tabData?.ai_valuation?.metric_values?.nft_sales_drivers?.value
              ).toFixed(2) ?? '0.00',
          },
          {
            title: 'NFT Rarity Drivers',
            value:
              Number(
                tabData?.ai_valuation?.metric_values?.nft_rarity_drivers?.value
              ).toFixed(2) ?? '0.00',
          },
        ],
      },
    ];
  }, [tabData.ai_valuation]);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setAi_valuation_tokenId(event.target.value));
    },
    [dispatch]
  );

  const handleOnClick = useCallback(() => {
    dispatch(fetchAiValuationEstimateDataRequest(id as string));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAiValuationLoadDataRequest());
  }, []);

  return (
    <Box component="div" sx={{ p: 1 }}>
      <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
        AI Powered Valuation By Token ID
      </Typography>
      <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
        Total Supply: {aiValuationLoad?.nft_count ?? 0}
      </Typography>
      <Box
        component="div"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <Box
          component="div"
          sx={{
            // display: 'flex',
            width: '30%',
            // justifyContent: 'center',
            // alignItems: 'center',
          }}
        >
          <Box
            sx={{
              height: { xs: '36px', sm: '40px' },
              padding: { xs: 0, sm: '9px' },
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'custom.secondaryDark',
              transition: 'none',
              width: '100%',
              color: 'custom.lightGrey',
            }}
          >
            <input
              className="w-full flex-1 bg-transparent focus:outline-none text-sm text-grey border-0 focus:border-0 focus:bg-transparent focus:ring-0"
              type="text"
              placeholder="Enter Token ID"
              name="tokenId"
              value={ai_valuation_tokenId}
              onChange={handleOnChange}
            />
            <IconButton
              onClick={handleOnClick}
              disableFocusRipple
              disableRipple
              disableTouchRipple
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
        {loading ? (
          <div className="w-full flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          tabData?.ai_valuation &&
          card.map((item) => (
            <Box key={item.token.token_id} sx={{ width: '100%' }}>
              <CardContent>
                <Box
                  component="div"
                  sx={{
                    // backgroundColor: 'red',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // p: 2,
                    // gridTemplateRows: '1fr 2fr',
                    gap: 2,
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      width: { xs: '75%', lg: '50%' },
                      minHeight: 190,
                      backgroundColor: ` ${theme.palette.secondary.main}`,
                      borderRadius: 3,
                      display: 'flex',
                      flexDirection: { xs: 'column', lg: 'row' },
                      alignItems: 'center',
                      p: { xs: 2, lg: 3 },
                      // mb: 4,
                      gap: 3,
                    }}
                  >
                    {/* NFT Image on the left */}
                    <Box
                      component="img"
                      src={item?.token.image} // Replace with your image source
                      alt="NFT Image"
                      sx={{
                        // width: 32,
                        // height: 32,
                        maxHeight: '12rem',
                        borderRadius: 1,
                        objectFit: 'cover',
                        mr: 2,

                        alignSelf: 'flex-start',
                      }}
                      loading='lazy'
                    />
                    {/* Token info, centered vertically */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        flex: 1,
                        minHeight: 120,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mb: 1 }}
                      >
                        Token ID:{' '}
                        <span style={{ color: 'custom.thirdText' }}>
                          {item.token.token_id}
                        </span>
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        Contract Address:{' '}
                        <span style={{ color: 'custom.thirdText' }}>
                          {item.token.contract_address}
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      width: '100%',
                      // mt: 4,
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                      },
                      gap: 3,
                    }}
                  >
                    {item.detail.slice(0, 4).map((i) => (
                      <Box
                        key={i.title}
                        sx={{
                          backgroundColor: ` ${theme.palette.secondary.main}`,

                          borderRadius: 2,
                          p: { xs: 2, lg: 3 },
                          minHeight: 100,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: { xs: 'space-between', lg: 'center' },
                          border: `0.5px solid ${theme.palette.custom.borderblack01} `,
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          fontWeight={700}
                          color="text.primary"
                          sx={{}}
                        >
                          {i.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight={500}
                          color="text.primary"
                        >
                          {i.value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      width: { xs: '100%', md: '75%' },
                      // mt: 3,
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                      gap: 3,
                      mx: { md: 'auto' },
                    }}
                  >
                    {item.detail.slice(4).map((i) => (
                      <Box
                        key={i.title}
                        sx={{
                          backgroundColor: ` ${theme.palette.secondary.main}`,
                          borderRadius: 2,
                          p: 3,
                          minHeight: 100,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          border: `0.5px solid ${theme.palette.custom.borderblack01} `,
                          // borderColor: '#borderblack01',
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          fontWeight={700}
                          color="text.primary"
                          sx={{}}
                        >
                          {i.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          color="text.primary"
                        >
                          {i.value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default AiValuation;
