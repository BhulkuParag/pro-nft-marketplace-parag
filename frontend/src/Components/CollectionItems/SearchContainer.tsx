// import CustomSearch from '../ui/CustomSearch';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import {
  setItemSearchData,
  setItemSearchValue,
} from '../../features/collection/collectionSlice';
// import SearchContent from './SearchContent';
import { useCallback } from 'react';
import SearchBar from '../ui/SearchBar';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { itemSearchValue, tabData } = useSelector(
    (state: RootState) => state.collection
  );

  const handleSearchOnChange = useCallback(
    (value: string) => {
      dispatch(setItemSearchValue(value));
      const items = tabData['items'] ?? [];
      if (!value) {
        dispatch(setItemSearchData([]));
        return;
      }
      const filtered = items.filter((item: any) =>
        item?.token?.name.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setItemSearchData(filtered));
    },
    [dispatch, tabData]
  );

  return (
    // <CustomSearch
    //   search={itemSearchValue}
    //   placeholder="Search for items"
    //   hasSplash={false}
    //   backgroundColor="background.default"
    //   handleSearchOnChange={handleSearchOnChange}
    //   dropDownBgColor="background.default"
    // >
    //   <SearchContent />
    // </CustomSearch>
    <SearchBar
      placeholder="Search for items"
      search={itemSearchValue}
      setSearch={handleSearchOnChange}
      backgroundColor="background.default"
    />
  );
};

export default SearchContainer;
