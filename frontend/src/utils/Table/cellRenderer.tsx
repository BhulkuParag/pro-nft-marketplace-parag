import type { ICellRendererParams } from 'ag-grid-community';
import type { RowData } from '../../types/table';
import { Tooltip, Typography } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { Link } from 'react-router-dom';

export const StarRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="w-auto flex h-full items-center cursor-pointer">
    <Tooltip title="Add to Compare" placement="top" arrow={true}>
      <StarBorderRoundedIcon className="text-gray-500" />
    </Tooltip>
    <span className="ml-2">{params.value}</span>
  </div>
);

export const CollectionRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="w-auto flex h-full items-center gap-2 justify-start">
    <img
      src={params.data?.image}
      alt={params.data?.name}
      className="w-7 h-7 rounded-full"
    />
    <Link to={`/trendingCollections/item/${params.data?.id}`}>
      {params.data?.name}
    </Link>
    {params.data?.openseaVerificationStatus === 'verified' && (
      <svg
        className="max-w-4 max-h-4 text-[#A49BFF]"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
      </svg>
    )}
  </div>
);

export const PriceRenderer = (params: ICellRendererParams<RowData>) => {
  let usdValue: number | undefined;

  const field = params.colDef?.field;
  if (field === 'floorAsk') {
    usdValue = params.data?.floorAsk?.price?.amount?.usd;
  } else if (field === 'topBid') {
    usdValue = params.data?.topBid?.price?.amount?.usd;
  }

  return (
    <div className="w-auto flex h-full items-center cursor-pointer justify-end">
      <img
        src="https://marketplace.polycruz.io/eth.svg"
        width={8}
        height={13}
        alt="eth"
        className="text-gray-400"
      />
      <Tooltip
        title={
          usdValue !== undefined
            ? `$ ${usdValue.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}`
            : ''
        }
        placement="top"
        arrow={true}
      >
        <span className="ml-1">{params.value}</span>
      </Tooltip>
    </div>
  );
};

export const VolumeRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="w-auto flex h-full items-center text-[#12CAB6] justify-end">
    <Typography lineHeight={2.5}>{params.value}%</Typography>
  </div>
);

export const SupplyRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="w-auto flex h-full items-center justify-end">
    <span>{params.value ?? 0}k</span>
  </div>
);

export const NormalRenderer = (params: ICellRendererParams<RowData>) => (
  <div className="w-auto flex h-full items-center justify-end">
    <span>{params.value}</span>
  </div>
);
