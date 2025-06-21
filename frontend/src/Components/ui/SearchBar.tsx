import type { FC, FocusEventHandler } from 'react';
import Search from '../../assets/icons/search.svg';
import { Box } from '@mui/material';

type SearchBarProps = {
  placeholder: string;
  hasSplash?: boolean;
  className?: string;
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
  handleOnClick
}) => {
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Box
      sx={{
        height: { xs: '36px', sm: '40px' },
        padding: { xs: '6px', sm: '9px' },
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
        mr: 1
      }}
    >
      <div className="relative flex justify-between items-center">
        <img
          alt="search"
          width="18"
          height="18"
          className="mr-2 sm:mr-3"
          src={Search}
        />
      </div>
      <input
        className="w-full flex-1 bg-transparent focus:outline-none text-sm text-grey border-0 focus:border-0 focus:bg-transparent focus:ring-0"
        type="search"
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
            display: { xs: 'none', sm: 'flex' }, // Hide on mobile, show on desktop
          }}
        >
          /
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
