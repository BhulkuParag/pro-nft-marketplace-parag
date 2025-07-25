import React, { useMemo } from 'react';
import AGGridTable from '../@ui-component/Comman/AGGridTable';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { Box } from '@mui/material';
import Loading from '../@ui-component/Comman/Loading';
import ItemCard from './CollectionItems/ItemCard';

interface ActiveTabProps {
  columnDefs: any;
  variant?: 'normal' | 'custom';
}

const ActiveTab = ({ columnDefs, variant }: ActiveTabProps) => {
  const activeTab = useSelector((state: RootState) => state.home.activeTab);
  const tabData = useSelector((state: RootState) => state.home.tabData);
  const loading = useSelector((state: RootState) => state.home.loading);
  const selectedToggleValue = useSelector(
    (state: RootState) => state.home.selectedToggleValue
  );

  const rowData = useMemo(() => tabData[activeTab], [tabData, activeTab]);

  //   useEffect(() => {
  //     const socket = io('ws://localhost:8080'); // io
  //     // Listen for data updates
  //     socket.on('data-update', (data: any) => {
  //       dispatch(
  //         setTabData({
  //           ...tabData,
  //           [activeTab]: data, // Only update data for the active tab
  //         })
  //       );
  //     });
  //     return () => {
  //       socket.disconnect();
  //     };
  //   }, [activeTab]); // Only re-subscribe when activeTab changes

  if (loading) return <Loading />;

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {selectedToggleValue === '0' ? (
        <AGGridTable
          columnDefs={columnDefs || []}
          rowData={rowData ?? []}
          // loading={loading}
        />
      ) : (
        <Box
          sx={{
            display: 'grid',
            //justifyContent: 'space-between',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: 'repeat(4, minmax(0, 1fr))',
              md: 'repeat(6, minmax(0, 1fr))',
              lg: `repeat(8, minmax(0, 1fr))`,
            },
            gap: 1.5,
            pt: 2.5,
          }}
        >
          {rowData?.map((item: any) => (
            <ItemCard item={item} variant={variant} key={item?.token?.id} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default React.memo(ActiveTab);
