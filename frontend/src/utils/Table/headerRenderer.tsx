import type React from 'react';
import type { IHeaderParams } from 'ag-grid-community';
import { PiCaretUpDown } from 'react-icons/pi';
import InfoIconMui from '@mui/icons-material/Info';
import { Box, Tooltip } from '@mui/material';

export const AddSortIcon: React.FC<IHeaderParams> = (props) => {
  const handleSort = () => {
    props.progressSort();
  };

  return (
    <Box
      onClick={handleSort}
      className="flex items-center justify-between cursor-pointer w-full px-2 h-full"
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{props.displayName}</span>
        <PiCaretUpDown className="text-[#CAC4D0]" />
      </div>
    </Box>
  );
};

export const InfoIcon: React.FC<IHeaderParams> = (props) => {
  return (
    <Box className="flex items-center justify-between cursor-pointer w-full px-2 h-full">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{props.displayName}</span>
        <Tooltip
          title="Market capitalization is calculated as the sum of each NFT valued at the greater of its last traded price and the floor price of the collection. Suspected wash trades are filtered."
          arrow
          placement="top"
        >
          <InfoIconMui sx={{ fontSize: 16, opacity: 0.7 }} />
        </Tooltip>
      </div>
    </Box>
  );
};
