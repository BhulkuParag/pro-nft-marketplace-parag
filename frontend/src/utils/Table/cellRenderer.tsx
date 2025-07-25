import type { ICellRendererParams } from 'ag-grid-community';
import type { ActivityType, RowData, TopMintData } from '../../types/table';
import { Avatar, Box, Tooltip, Typography } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from 'react-router-dom';
import EthIcon from '../../assets/icons/others/EthIcon';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { setCompareList } from '../../features/home/homeSlice';
import React, { useCallback } from 'react';

export const StarRenderer = (params: ICellRendererParams<RowData>) => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.home.compareList);
  const rowData = params.data;
  const isCompared = list.some((item) => item?.id === rowData?.id);

  const handleOnClick = useCallback(
    (_: React.SyntheticEvent) => {
      if (isCompared) {
        const updatedList = list.filter((item) => item.id !== rowData?.id);
        dispatch(setCompareList(updatedList));
        return;
      }
      if (list.length >= 5) {
        // Optionally show a message/toast here
        return;
      }
      dispatch(setCompareList([...list, rowData]));
    },
    [dispatch, isCompared, list, rowData]
  );

  return (
    <div className="w-auto flex h-[45px] items-center cursor-pointer">
      <Tooltip
        title={
          isCompared
            ? 'Remove from Compare'
            : list.length >= 5
            ? 'You can only compare 5 collections'
            : 'Add to Compare'
        }
        placement="top"
        arrow={true}
        onClick={handleOnClick}
      >
        {isCompared ? (
          <StarRoundedIcon className="text-yellow-500" />
        ) : (
          <StarBorderRoundedIcon className="text-gray-500" />
        )}
      </Tooltip>
      <span className="ml-2">{params.value}</span>
    </div>
  );
};

export const PriceRenderer = (params: ICellRendererParams<any>) => {
  let usdValue: number | undefined;

  const field = params.colDef?.field;
  if (field === 'floorAsk') {
    usdValue = params.data?.floorAsk?.price?.amount?.usd;
  } else if (field === 'topBid') {
    usdValue = params.data?.topBid?.price?.amount?.usd;
  } else if (field === 'mintPrice') {
    usdValue = params.data?.mintPrice?.amount?.usd;
  } else if (field === 'mintVolume') {
    usdValue = params.data?.mintVolume;
  } else if (field === 'price') {
    usdValue = params.data?.price?.amount?.usd;
  } else if (field === 'itemfloorPrice') {
    usdValue = params.data?.token?.collection.floorAskPrice.amount?.usd;
  }

  return (
    <div className="w-auto flex h-[45px] items-center cursor-pointer justify-end gap-1">
      <Tooltip
        title={usdValue !== undefined ? `$ ${usdValue}` : '0.00'}
        placement="top"
        arrow={true}
      >
        <Typography
          className="ml-1"
          sx={{
            fontSize: 12,
          }}
        >
          {params.value ?? '0.00'}
        </Typography>
      </Tooltip>
      <EthIcon className="fill-[#777E90] w-4 h-4" />
    </div>
  );
};

export const VolumeRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="w-auto flex h-[45px] items-center justify-end">
    <Typography
      sx={{
        fontSize: 12,
        color: '#12CAB6',
        fontWeight: 520
      }}
    >
      {params.value ?? '0.00'}%
    </Typography>
  </div>
);

export const SupplyRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="w-auto flex h-[45px] items-center justify-end">
    <Typography
      sx={{
        fontSize: 12,
      }}
    >
      {params.value ?? '0.00'}
    </Typography>
  </div>
);

export const NormalRenderer = (params: ICellRendererParams<RowData>) => {
  return (
    <div className="w-auto flex h-[45px] items-center justify-end">
      <Typography
        sx={{
          fontSize: 12,
        }}
      >
        {params.value ?? '-'}
      </Typography>
    </div>
  );
};

export const HoverRenderer = (params: ICellRendererParams<TopMintData>) => {
  let hover: string | undefined;

  const field = params.colDef?.field;
  if (field === 'id' || 'contract') {
    hover = params.data?.id;
  }

  return (
    <div className="w-full flex h-[45px] items-center justify-end cursor-pointer">
      <Tooltip
        title={hover !== undefined ? `${hover.toString()}` : ''}
        placement="top"
        arrow={true}
      >
        <Typography
          className="ml-1"
          sx={{
            fontSize: 12,
          }}
        >
          {params.value}
        </Typography>
      </Tooltip>
    </div>
  );
};

export const TypeCell = (row: ICellRendererParams<ActivityType>) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',
      gap: 1,
      height: '100%',
    }}
  >
    {row.data?.type === 'bid' && (
      <Avatar
        src={
          'https://raw.githubusercontent.com/reservoirprotocol/assets/main/sources/opensea-logo.svg'
        }
        alt="opensea"
        sx={{ width: 24, height: 24, bgcolor: 'transparent' }}
        variant="rounded"
      />
    )}
    <Typography
      sx={{
        fontSize: 12,
      }}
    >
      {row.value}
    </Typography>
  </Box>
);

export const PriceCell = (row: ICellRendererParams<ActivityType>) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, height: '100%' }}>
    <img
      src={'https://marketplace.polycruz.io/eth.svg'}
      alt="eth"
      width={16}
      height={16}
      style={{ marginRight: 4, verticalAlign: 'middle', backgroundColor: '' }}
    />
    <Typography
      sx={{
        fontSize: 12,
      }}
      color="text.primary"
    >
      {row.data?.price.amount.decimal}
    </Typography>
  </Box>
);

export const AddressCell = (row: ICellRendererParams<ActivityType>) => (
  <Typography
    fontWeight={500}
    color="text.primary"
    sx={{ whiteSpace: 'nowrap', fontSize: 12 }}
  >
    {row.data?.toAddress ?? '-'}
  </Typography>
);

export const CollectionCell = (params: ICellRendererParams<ActivityType>) => (
  <div className="w-auto flex h-[45px] items-center gap-2 justify-start">
    <img
      src={params.data?.collection.collectionImage}
      alt={params.data?.collection.collectionName}
      className="w-7 h-7 rounded-full text-xs"
    />
    {params.value}
    <svg
      className="max-w-4 max-h-4 text-[#A49BFF]"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
    </svg>
  </div>
);

export const ChipRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="w-full flex h-[45px] pt-[10px] items-center justify-end">
    <Box
      component={'span'}
      sx={{
        height: '26px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        borderRadius: 5,
        paddingBlock: '6px',
        paddingInline: '10px',
        backgroundColor:
          params.value === '-'
            ? ''
            : params.colDef?.field !== 'topBid'
            ? 'custom.redDark'
            : 'custom.greenDark',
        color:
          params.value === '-'
            ? ''
            : params.colDef?.field === 'topBid'
            ? 'custom.green'
            : 'custom.red',
      }}
      // className='bg-red-400/30'
    >
      {params.value}
    </Box>
  </div>
);

export const CollectionRenderer = React.memo(
  (params: ICellRendererParams<any>) => {
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.home.compareList);
    const rowData = params.data;
    const isCompared = list.some((item) => item?.id === rowData?.id);

    const handleOnClick = useCallback(
      (_: React.SyntheticEvent) => {
        if (isCompared) {
          const updatedList = list.filter((item) => item.id !== rowData?.id);
          dispatch(setCompareList(updatedList));
          return;
        }
        if (list.length >= 5) {
          // Optionally show a message/toast here
          return;
        }
        dispatch(setCompareList([...list, rowData]));
      },
      [dispatch, isCompared, list, rowData]
    );

    return (
      <div className="w-full flex h-[45px] -ml-0.5 items-center cursor-pointer">
        <Tooltip
          title={
            isCompared
              ? 'Remove from Compare'
              : list.length >= 5
              ? 'You can only compare 5 collections'
              : 'Add to Compare'
          }
          placement="top"
          arrow={true}
          onClick={handleOnClick}
        >
          {isCompared ? (
            <StarRoundedIcon
              className="text-yellow-500"
              sx={{
                fontSize: 22,
              }}
            />
          ) : (
            <StarBorderRoundedIcon
              className="text-gray-500"
              sx={{
                fontSize: 22,
              }}
            />
          )}
        </Tooltip>
        <span className="ml-1 pt-[2.5px] h-fit mr-5 text-xs">
          {params.node?.rowIndex != null ? params.node.rowIndex + 1 : ''}
        </span>
        <div className="w-full flex h-fit items-center gap-2.5">
          <img
            src={params.data?.token?.image || params.data?.image}
            alt={params.data?.name || params.data?.token?.name}
            className="w-6.5 h-6.5 rounded-full"
          />
          <Tooltip
            title={params.value === '-' ? '' : params.value}
            placement="top-start"
            arrow={true}
          >
            <Link
              to={`/trendingCollections/item/${
                params.colDef?.field === 'topsalename'
                  ? params?.data?.token?.contract
                  : params.data?.id
              }`}
              className="w-full flex items-center gap-3 pt-0.5 text-xs"
            >
              {params.value
                ? params.value?.length > 15
                  ? params.value?.substring(0, 15)?.trim() + '...'
                  : params.value
                : '-'}
              {params.data?.openseaVerificationStatus === 'verified' && (
                <svg
                  className="max-w-3.5 max-h-3.5 shrink-0 text-[#A49BFF]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
              )}
            </Link>
          </Tooltip>
        </div>
      </div>
    );
  }
);
