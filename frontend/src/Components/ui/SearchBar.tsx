import type { FC, FocusEventHandler } from 'react';
import Search from '../../assets/icons/search.svg';
import { Box } from '@mui/material';

type SearchBarProps = {
  placeholder: string;
  hasSplash?: boolean;
  className?: string;
  search?: any;
  setSearch?: any;
  handleFocus: FocusEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
};

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  hasSplash,
  search,
  setSearch,
  handleFocus,
  handleBlur,
}) => {
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Box
      sx={{
        height: '40px',
        padding: '8px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'custom.secondaryDark',
        transition: 'none',
      }}
    >
      <div className="relative flex justify-between items-center">
        <img
          alt="search"
          width="18"
          height="18"
          className="mr-3"
          src={Search}
        />
      </div>
      <input
        // ref={inputRef}
        className="flex-1 bg-transparent focus:outline-none text-sm text-grey border-0 focus:border-0 focus:bg-transparent focus:ring-0"
        type="search"
        placeholder={placeholder}
        value={search}
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {hasSplash && (
        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 0,
            borderRadius: '8px',
            fontSize: '12px',
            marginRight: '8px',
            width: '30px',
            height: '30px',
            color: 'custom.lightGrey',
            backgroundColor: 'background.default',
          }}
          className="hidden md:flex"
        >
          /
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
