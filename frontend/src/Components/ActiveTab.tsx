import React, {
  useMemo,
} from 'react';
import AGGridTable from '../../@ui-component/Comman/AGGridTable';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import {
} from '../features/home/homeSlice';
import { Box } from '@mui/material';
import Loading from '../../@ui-component/Comman/Loading';

const ActiveTab = () => {
  const {
    activeTab,
    tabData,
    columnDefsMap,
    trending_loading,
  } = useSelector((state: RootState) => state.home);

  const columnDefs = useMemo(
    () => columnDefsMap[activeTab],
    [columnDefsMap, activeTab]
  );

  const rowData = useMemo(() => tabData[activeTab] || [], [tabData, activeTab]);

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

  // In ActiveTab.tsx or TabsContainer.tsx

  return (
    <Box
      sx={{
        padding: { xs: '0px', xl: '0px 20px 20px 20px' },
      }}
    >
      {/* {trending_loading ? (
        <Loading />
      ) : ( */}
      <AGGridTable
        columnDefs={columnDefs}
        rowData={rowData}
        loading={trending_loading}
      />
      {/* )} */}
    </Box>
  );
};

export default React.memo(ActiveTab);
