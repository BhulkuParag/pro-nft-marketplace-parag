import {
  call,
  put,
  select,
  takeLatest,
  type SagaReturnType,
} from 'redux-saga/effects';
import {
  fetchHomeCardRequest,
  fetchHomeCardSuccess,
  fetchHomeCardFailure,
  fetchTrendingDataRequest,
  fetchTrendingDataSuccess,
  fetchTrendingDataFailure,
  fetchNftSalesDataRequest,
  fetchNftSalesDataFailure,
  fetchNftSalesDataSuccess,
  fetchTopSalesDataRequest,
  fetchTopMintDataRequest,
  fetchTopMintDataSuccess,
  fetchTopMintDataFailure,
  fetchGlobalSearchDataSuccess,
  fetchGlobalSearchDataFailure,
  fetchGlobalSearchDataRequest,
  fetchCollectionDataSuccess,
  fetchCollectionDataFailure,
  fetchCollectionDataRequest,
  fetchTopSalesDataSuccess,
  fetchTopSalesDataFailure,
  fetchTopSalesCardDataSuccess,
  fetchTopSalesCardDataFailure,
  fetchTopSalesCardDataRequest,
} from './homeSlice';
import {
  fetchNftSalesData,
  fetchTopSalesData,
  fetchTrendingData,
  fetchMintRankingData,
  fetchGlobalSearchData,
  fetchHomeCard,
  fetchCollectionData,
  fetchTopSalesCardData,
} from '../../api/home';
import type { RootState } from '../../app/store';

function* handleFetchHomeCard() {
  try {
    const card: string = yield select(
      (state: RootState) => state.home.cardData
    );
    const data: SagaReturnType<typeof fetchHomeCard> = yield call(
      fetchHomeCard,
      card
    );
    console.log(data);
    yield put(fetchHomeCardSuccess(data));
  } catch (error: any) {
    yield put(fetchTopMintDataFailure(error.message ?? 'Something went wrong'));
  }
}

function* handleFetchTrendingData() {
  try {
    const { time, chainId } = yield select(
      (state: RootState) => state.home
    );
    const data: SagaReturnType<typeof fetchTrendingData> = yield call(
      fetchTrendingData,
      time,
      'sales',
      chainId
    );
    yield put(fetchTrendingDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchTrendingDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleFetchCollectionData() {
  try {
    const { chainId } = yield select(
      (state: RootState) => state.home
    );
    const data: SagaReturnType<typeof fetchCollectionData> = yield call(
      fetchCollectionData,
      'volume',
      chainId
    );
    yield put(fetchCollectionDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchCollectionDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleFetchNftSalesData() {
  try {
    const includeTokenMetadata: boolean = yield select(
      (state: RootState) => state.home.includeTokenMetadata
    );
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchNftSalesData> = yield call(
      fetchNftSalesData,
      includeTokenMetadata,
      chainId
    );
    yield put(fetchNftSalesDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchNftSalesDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleFetchTopSalesData() {
  try {
    const includeTokenMetadata: boolean = yield select(
      (state: RootState) => state.home.includeTokenMetadata
    );
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchTopSalesData> = yield call(
      fetchTopSalesData,
      includeTokenMetadata,
      chainId
    );
    yield put(fetchTopSalesDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchTopSalesDataFailure(error.message ?? 'Something went wrong')
    );
  }
}


function* handleFetchTopSalesCardData() {
  try {
    const includeTokenMetadata: boolean = yield select(
      (state: RootState) => state.home.includeTokenMetadata
    );
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchTopSalesCardData> = yield call(
      fetchTopSalesCardData,
      includeTokenMetadata,
      chainId
    );
    yield put(fetchTopSalesCardDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchTopSalesCardDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleMintRankingData() {
  try {
    const period: string = yield select((state: RootState) => state.home.time);
    const sort: string = yield select(
      (state: RootState) => state.home.volume_sales
    );
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchMintRankingData> = yield call(
      fetchMintRankingData,
      period,
      sort,
      chainId
    );
    yield put(fetchTopMintDataSuccess(data));
  } catch (error: any) {
    yield put(fetchTopMintDataFailure(error.message ?? 'Something went wrong'));
  }
}

function* handleGlobalSearchData() {
  try {
    const search: string = yield select(
      (state: RootState) => state.home.globalSearchValue
    );
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchGlobalSearchData> = yield call(
      fetchGlobalSearchData,
      search,
      chainId
    );
    yield put(fetchGlobalSearchDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchGlobalSearchDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

export function* homeSaga() {
  yield takeLatest(fetchHomeCardRequest.type, handleFetchHomeCard);
  yield takeLatest(fetchTrendingDataRequest.type, handleFetchTrendingData);
  yield takeLatest(fetchCollectionDataRequest.type, handleFetchCollectionData);
  yield takeLatest(fetchNftSalesDataRequest.type, handleFetchNftSalesData);
  yield takeLatest(fetchTopSalesDataRequest.type, handleFetchTopSalesData);
  yield takeLatest(fetchTopMintDataRequest.type, handleMintRankingData);
  yield takeLatest(fetchGlobalSearchDataRequest.type, handleGlobalSearchData);
  yield takeLatest(fetchTopSalesCardDataRequest.type, handleFetchTopSalesCardData);
}
