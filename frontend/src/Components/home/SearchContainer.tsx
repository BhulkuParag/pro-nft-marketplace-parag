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
  const globalSearchValue = useSelector(
    (state: RootState) => state.home.globalSearchValue
  );

  const handleSearchOnChange = useCallback(
    (value: string) => {
      console.log(value);
      dispatch(setGlobalSearchValue(value));
      dispatch(fetchGlobalSearchDataRequest(value));
    },
    [dispatch, globalSearchValue]
  );

  return (
    <CustomSearch
      search={globalSearchValue}
      placeholder="Search by collection, NFT, and user"
      handleSearchOnChange={handleSearchOnChange}
    >
      <GlobalSearchContent />
    </CustomSearch>
  );
};

export default SearchContainer;
