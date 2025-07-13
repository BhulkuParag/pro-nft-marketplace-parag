import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import {
  setItemSearchData,
  setItemSearchValue,
} from '../../features/collection/collectionSlice';
import { useCallback } from 'react';
import CustomSearch from '../ui/CustomSearch';
import SearchContent from './SearchContent';
// import SearchBar from '../ui/SearchBar';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const tabData = useSelector((state: RootState) => state.collection.tabData);
  const itemSearchValue = useSelector(
    (state: RootState) => state.collection.itemSearchValue
  );

  const handleFilter = useCallback((value: string) => {
    const items = tabData?.items ?? [];
    if (!value) {
      dispatch(setItemSearchData([]));
      return;
    }
    const filtered = items.filter((item: any) =>
      item?.token?.name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setItemSearchData(filtered));
  }, []);

  const handleSearchOnChange = useCallback(
    (value: string) => {
      dispatch(setItemSearchValue(value));
      setTimeout(() => handleFilter(value), 200);
    },
    [dispatch, tabData.items]
  );

  return (
    <CustomSearch
      search={itemSearchValue}
      placeholder="Search for items"
      hasSplash={false}
      handleSearchOnChange={handleSearchOnChange}
      backgroundColor="background.default"
      dropDownBgColor="background.default"
      boxShadow
    >
      <SearchContent />
    </CustomSearch>
    // <SearchBar
    //   placeholder="Search for items"
    //   search={itemSearchValue}
    //   setSearch={handleSearchOnChange}
    //   backgroundColor="background.default"
    // />
  );
};

export default SearchContainer;
