import { call, delay, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTrendingDataRequest,
  fetchTrendingDataSuccess,
  fetchTrendingDataFailure,
} from './homeSlice';
import { fetchTrendingData } from '../../api/home';
import type { RowData } from '../../types/table';

function* handleFetchTrendingData() {
  try {
    yield delay(1000);
    const data: RowData[] | unknown = yield call(fetchTrendingData);
    yield put(fetchTrendingDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchTrendingDataFailure(error.message ?? 'Something went wrong')
    );
  }
}
export function* homeSaga() {
  yield takeLatest(fetchTrendingDataRequest.type, handleFetchTrendingData);
}
