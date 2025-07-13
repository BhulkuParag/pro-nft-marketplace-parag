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
      className="flex items-center cursor-pointer justify-end w-full h-full"
    >
      <div className="flex items-center justify-end gap-2">
        <PiCaretUpDown className="text-[#CAC4D0]" />
        <Tooltip title={props.displayName} placement="top" arrow>
          <span className="text-xs font-normal text-gray-500">
            {props.displayName}
          </span>
        </Tooltip>
      </div>
    </Box>
  );
};

export const InfoIcon: React.FC<IHeaderParams> = (props) => {
  return (
    <Box className="flex items-center justify-end cursor-pointer w-full h-full">
      <div className="flex items-center gap-2">
        <Tooltip title={props.displayName} placement="top" arrow>
          <span className="text-xs font-normal text-gray-500">
            {props.displayName}
          </span>
        </Tooltip>
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

export const InfoIconSortIcon: React.FC<IHeaderParams> = (props) => {
  const handleSort = () => {
    props.progressSort();
  };

  return (
    <Box
      component={'button'}
      onClick={handleSort}
      className="flex items-center cursor-pointer justify-end w-full h-full gap-2"
    >
      <PiCaretUpDown className="text-[#CAC4D0]" />
      <Tooltip title={props.displayName} placement="top" arrow>
        <span className="text-xs font-normal text-gray-500">
          {props.displayName}
        </span>
      </Tooltip>
      <Tooltip
        title="Market capitalization is calculated as the sum of each NFT valued at the greater of its last traded price and the floor price of the collection. Suspected wash trades are filtered."
        arrow
        placement="top"
      >
        <InfoIconMui sx={{ fontSize: 16, opacity: 0.7 }} />
      </Tooltip>
    </Box>
  );
};

export const NormalStartHeaderRenderer: React.FC<IHeaderParams> = (props) => {
  return (
    <Box className="flex items-center cursor-pointer justify-start w-full h-full gap-2">
      <Tooltip title={props.displayName} placement="top" arrow>
        <span className="text-xs font-normal text-gray-500">
          {props.displayName}
        </span>
      </Tooltip>
    </Box>
  );
};

export const NormalHeaderRenderer: React.FC<IHeaderParams> = (props) => {
  return (
    <Box className="flex items-center cursor-pointer justify-center w-full h-full gap-2">
      <Tooltip title={props.displayName} placement="top" arrow>
        <span className="text-xs font-normal text-gray-500">
          {props.displayName}
        </span>
      </Tooltip>
    </Box>
  );
};

export const NormalEndHeaderRenderer: React.FC<IHeaderParams> = (props) => {
  return (
    <Box className="flex items-center cursor-pointer justify-end w-full h-full gap-2">
      <Tooltip title={props.displayName} placement="top" arrow>
        <span className="text-xs font-normal text-gray-500">
          {props.displayName}
        </span>
      </Tooltip>
    </Box>
  );
};

export const AddCollectionSortIcon: React.FC<IHeaderParams> = (props) => {
  const handleSort = () => {
    props.progressSort();
  };

  return (
    <Box
      component={'button'}
      onClick={handleSort}
      className="flex items-center cursor-pointer justify-start pl-20 w-full h-full"
    >
      <div className="flex items-center justify-end gap-2">
        <PiCaretUpDown className="text-[#CAC4D0]" />
        <span className="text-xs font-normal text-gray-500">
          {props.displayName}
        </span>
      </div>
    </Box>
  );
};
