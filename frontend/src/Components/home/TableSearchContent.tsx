import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

const TableSearchContent = () => {
  const tableSearchData = useSelector(
    (state: RootState) => state.home.tableSearchData
  );

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderBottom: tableSearchData.length > 0 ? '1px solid' : 'none',
          borderColor: 'divider',
          //   pb: 1,
          px: 1.5,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            mt: -1,
            pb: 1,
            color: 'custom.grey01',
          }}
        >
          Collections
        </Typography>
      </Box>
      <Box
        sx={{
          //   mt: -1,
          width: '100%',
          maxHeight: '30vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          scrollBehavior: 'smooth',
        }}
      >
        {tableSearchData?.map((item) => (
          <Box
            component={'link'}
            href={`/trendingCollections/item/${item?.id}`}
            key={item?.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              //   py: 1.3,
              height: 50,
              px: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
            className="hover:bg-[#5f5f5f13]"
          >
            <div className="flex items-center gap-3">
              <img
                loading="lazy"
                src={item?.image}
                alt={item?.name}
                width={30}
                height={30}
                className="rounded-full"
              />
              <Typography
                variant="subtitle2"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'custom.grey01',
                }}
              >
                {item?.name}
              </Typography>
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TableSearchContent;
