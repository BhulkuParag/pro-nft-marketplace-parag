import {
  useEffect,
  // useState
} from 'react';
import { AGGridTable } from '../../@ui-component/Comman/AGGridTable';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import {
  fetchTrendingDataRequest,
  // setTabData,
} from '../features/home/homeSlice';
import { Box } from '@mui/material';

const ActiveTab = () => {
  const dispatch = useDispatch();
  const { activeTab, tabData, columnDefsMap, trending_loading } = useSelector(
    (state: RootState) => state.home
  );

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
  useEffect(() => {
    dispatch(fetchTrendingDataRequest());
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: '0px', xl: '0px 20px 20px 20px' },
      }}
    >
      <AGGridTable
        columnDefs={columnDefsMap[activeTab]}
        rowData={tabData[activeTab] || []}
        loading={trending_loading}
      />
    </Box>
  );
};

export default ActiveTab;
