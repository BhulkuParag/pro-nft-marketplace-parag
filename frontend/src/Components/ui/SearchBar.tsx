import type { FC, FocusEventHandler } from 'react';
import Search from '../../assets/icons/search.svg';
import { Box } from '@mui/material';
import React from 'react';

type SearchBarProps = {
  placeholder: string;
  hasSplash?: boolean;
  className?: string;
  backgroundColor?: string;
  search?: any;
  setSearch?: any;
  handleFocus?: FocusEventHandler<HTMLInputElement>;
  handleBlur?: FocusEventHandler<HTMLInputElement>;
  handleOnClick?: () => void;
};

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  hasSplash,
  search,
  setSearch,
  handleFocus,
  handleBlur,
  handleOnClick,
  backgroundColor = 'custom.secondaryDark',
}) => {
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Box
      sx={{
        height: { xs: '36px', sm: '35px' },
        padding: { xs: '6px', sm: '9px' },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: backgroundColor,
        transition: 'none',
        width: '100%',
        color: 'custom.lightGrey',
        mr: 1,
      }}
    >
      <div className="relative flex justify-between items-center">
        <img
          alt="search"
          width="16"
          height="16"
          className="mr-2 sm:mr-3"
          src={Search}
        />
      </div>
      <input
        className="w-full flex-1 bg-transparent focus:outline-none text-[13px] text-grey border-0 focus:border-0 focus:bg-transparent focus:ring-0"
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleOnClick}
      />
      {hasSplash && (
        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 0,
            borderRadius: '8px',
            fontSize: { xs: '11px', sm: '12px' },
            marginRight: { xs: '6px', sm: '8px' },
            width: { xs: '24px', sm: '30px' },
            height: { xs: '24px', sm: '30px' },
            color: 'custom.lightGrey',
            backgroundColor: 'background.default',

            display: { xs: 'none', sm: 'flex' },
          }}
        >
          /
        </Box>
      )}
    </Box>
  );
};

export default React.memo(SearchBar);
