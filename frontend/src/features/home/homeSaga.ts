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
  fetchTopMintDataRequest,
  fetchTopMintDataSuccess,
  fetchTopMintDataFailure,
} from './homeSlice';
import {
  fetchNftSalesData,
  fetchTrendingData,
  fetchMintRankingData,
} from '../../api/home';
import type { RootState } from '../../app/store';

function* handleFetchTrendingData() {
  try {
    const period: string = yield select((state: RootState) => state.home.time);
    const sortBy: string = yield select(
      (state: RootState) => state.home.volume_sales
    );
    const data: SagaReturnType<typeof fetchTrendingData> = yield call(
      fetchTrendingData,
      period,
      sortBy
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
    const data: SagaReturnType<typeof fetchNftSalesData> = yield call(
      fetchNftSalesData,
      includeTokenMetadata
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
    const data: SagaReturnType<typeof fetchMintRankingData> = yield call(
      fetchMintRankingData,
      period,
      sort
    );
    yield put(fetchTopMintDataSuccess(data));
  } catch (error: any) {
    yield put(fetchTopMintDataFailure(error.message ?? 'Something went wrong'));
  }
}

export function* homeSaga() {
  yield takeLatest(fetchTrendingDataRequest.type, handleFetchTrendingData);
  yield takeLatest(fetchNftSalesDataRequest.type, handleFetchNftSalesData);
  yield takeLatest(fetchTopMintDataRequest.type, handleMintRankingData);
}
