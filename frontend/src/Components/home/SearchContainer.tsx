import CustomSearch from '../ui/CustomSearch';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import {
  fetchGlobalSearchDataRequest,
  setGlobalSearchValue,
} from '../../features/home/homeSlice';
import GlobalSearchContent from './GlobalSearchContent';
import { useCallback } from 'react';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { globalSearchValue, globalSearchData } = useSelector(
    (state: RootState) => state.home
  );

  const handleSearchOnChange = useCallback(
    (value: string) => {
      console.log(value);
      dispatch(setGlobalSearchValue(value));
      dispatch(fetchGlobalSearchDataRequest(value));
    },
    [globalSearchValue]
  );

  return (
    <CustomSearch
      search={globalSearchValue}
      handleSearchOnChange={handleSearchOnChange}
    >
      <GlobalSearchContent data={globalSearchData} />
    </CustomSearch>
  );
};

export default SearchContainer;
