import {
  call,
  put,
  select,
  takeLatest,
  type SagaReturnType,
} from 'redux-saga/effects';
import {
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
} from './homeSlice';
import {
  fetchNftSalesData,
  fetchTopSalesData,
  fetchTrendingData,
  fetchMintRankingData,
  fetchGlobalSearchData,
} from '../../api/home';
import type { RootState } from '../../app/store';

function* handleFetchTrendingData() {
  try {
    const { time, volume_sales, chainId } = yield select(
      (state: RootState) => state.home
    );
    const data: SagaReturnType<typeof fetchTrendingData> = yield call(
      fetchTrendingData,
      time,
      volume_sales,
      chainId
    );
    yield put(fetchTrendingDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchTrendingDataFailure(error.message ?? 'Something went wrong')
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
    yield put(fetchNftSalesDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchNftSalesDataFailure(error.message ?? 'Something went wrong')
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
  yield takeLatest(fetchTrendingDataRequest.type, handleFetchTrendingData);
  yield takeLatest(fetchNftSalesDataRequest.type, handleFetchNftSalesData);
  yield takeLatest(fetchTopSalesDataRequest.type, handleFetchTopSalesData);
  yield takeLatest(fetchTopMintDataRequest.type, handleMintRankingData);
  yield takeLatest(fetchGlobalSearchDataRequest.type, handleGlobalSearchData);
}
