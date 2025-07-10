import CustomSearch from '../ui/CustomSearch';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import {
  setTableSearchData,
  setTableSearchValue,
} from '../../features/home/homeSlice';
import { useCallback } from 'react';
import TableSearchContent from './TableSearchContent';

const TableSearch = () => {
  const dispatch = useDispatch();
  const tableSearchValue = useSelector(
    (state: RootState) => state.home.tableSearchValue
  );
  const tabData = useSelector((state: RootState) => state.home.tabData);

  const handleSearchOnChange = useCallback(
    (value: string) => {
      console.log(value);
      dispatch(setTableSearchValue(value));
      const data = tabData?.trending?.filter(
        (i: any) =>
          value !== '' && i?.name?.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setTableSearchData(data));
    },
    [dispatch, tableSearchValue]
  );

  return (
    <CustomSearch
      search={tableSearchValue}
      placeholder="Search collections"
      handleSearchOnChange={handleSearchOnChange}
      backgroundColor="background.default"
      dropDownBgColor="background.default"
      boxShadow
    >
      <TableSearchContent />
    </CustomSearch>
  );
};

export default TableSearch;
